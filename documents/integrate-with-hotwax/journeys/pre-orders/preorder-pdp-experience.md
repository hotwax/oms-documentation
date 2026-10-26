---
description: >-
  Use Shopify inventory and HotWax preorder batches to show an Add to cart or
  Pre-order button and calculate the estimated stock arrival date.
---

# Pre-order PDP experience with Shopify Liquid

Use Shopify's available quantity and HotWax's preorder batches to decide what the product page should show:

| For the requested quantity | Button | Arrival message |
| --- | --- | --- |
| Enough stock is available now | `Add to cart` | No preorder date. |
| Incoming stock is needed | `Pre-order` | The first date that covers the full quantity, or “Estimated arrival pending.” |
| The variant is unavailable or the quantity exceeds availability | Keep the theme's unavailable, sold-out or quantity-limit controls | Do not offer that quantity. |

Start with the [calculation](#calculate-the-preorder-date), then follow the [Liquid implementation](#implement-in-liquid). The [metafield reference](#metafield-reference), [Storefront API query](#storefront-api-reference) and [optional location lookup](#optional-display-location-names) are below the implementation.

For pickup availability, see [BOPIS PDP Experience](../buy-online-pickup-in-store/bopis-pdp-experience.md).

## Before you start

This calculation requires:

* **Stock consumed in order:** physical stock first, then incoming batches from earliest arrival to latest. Existing reservations must keep this order after cancellations, receipts and date changes.
* **Matching quantities:** Shopify's total and the batch schedule must cover the same variant, listing and eligible fulfillment locations, with no duplicated supply.
* **Supported inventory settings:** Shopify-tracked inventory with `inventory_policy == 'deny'`, a complete batch array and numeric quantity fields.

The remaining inventory must be the unconsumed end of that schedule. If orders can keep later-batch reservations while earlier stock is available, or the quantities cover different locations, use an inventory-provided promise.

## Calculate the preorder date

Use these inputs for the selected variant:

| Input | Value |
| --- | --- |
| `T` | Shopify's total available quantity: Storefront API `quantityAvailable` or Liquid `variant.inventory_quantity` for tracked inventory, subject to the matching-location requirement above. |
| `q` | The positive quantity being evaluated, including this variant's quantity already in the cart unless your integration reserves it separately. |
| Batch schedule | Active `FIT_PRE_ORDER` batches from the variant's `hotwax.preorder_batches` JSON metafield. |

### 1. Calculate each batch's supply

```text
batch supply = quantityOnOrderTotal - externalCommitments
```

`quantityOnOrderTotal` is the remaining incoming quantity. `externalCommitments` covers open reservations outside this exact Shopify listing, including other listings in the same shop.

**Shopify has already deducted this listing's orders from `T`. Do not subtract them again.** Batch supply describes the arrival schedule; it is not a separate count of unsold units or a cart maximum.

### 2. Check whether stock is available now

First check Shopify's purchase controls. If the variant is unavailable or `q > T`, do not offer that quantity.

Otherwise, subtract all incoming supply from the Shopify total:

```text
available now = T - sum(all active preorder batch supply)
```

* If `available now >= q`, show `Add to cart` with no preorder date.
* If `available now < q`, incoming stock is needed. Continue to the date calculation.

Keep negative results. They mean earlier supply has already been consumed, not that physical stock should be published as negative.

### 3. Find the first date that covers the quantity

Sort batches from earliest arrival to latest. At each date `D`, subtract only the supply arriving later:

```text
available by D = T - sum(batch supply arriving AFTER D)
```

Choose the first date where `available by D >= q`. Include all batches sharing that date. This is the estimate for the **full requested quantity**.

### Example: Shopify has 45 units available

| Arrival date | Quantity on order | External commitments | Batch supply |
| --- | --- | --- | --- |
| November 1 | 12 | 2 | 10 |
| November 15 | 25 | 5 | 20 |
| December 1 | 30 | 0 | 30 |

The schedule contains 60 units. With `T = 45`, the first 15 incoming units are already spoken for: all 10 November 1 units and five November 15 units.

| Available by | Calculation | Result |
| --- | --- | --- |
| Now | `45 - 10 - 20 - 30` | -15 |
| November 1 | `45 - 20 - 30` | -5 |
| November 15 | `45 - 30` | 15 |
| December 1 | `45` | 45 |

| Requested quantity | Result |
| --- | --- |
| 1–15 | `Pre-order`; estimated arrival November 15. |
| 16–45 | `Pre-order`; estimated arrival December 1 for the full quantity. |
| More than 45 | Insufficient availability. |

If Shopify instead reports `T = 65`, there are `65 - 60 = 5` units available now. Five units can use physical stock; six units need incoming stock and have a full-quantity estimate of November 1.

{% hint style="info" %}
The date estimates **stock arrival at the facility**. It does not include handling, shipping or delays from other items that must ship together.

If any positive-supply batch has an unknown date, or the selected date is overdue, keep `Pre-order` and show “Estimated arrival pending.” Never use `batches[0]` or the earliest date without checking quantities. An overdue batch remains incoming stock until its inventory state changes.
{% endhint %}

## Implement in Liquid

Keep the following blocks in the same product-section Liquid scope.

### 1. Read the selected variant

A [JSON metafield's `.value`](https://shopify.dev/docs/api/liquid/objects/metafield) is already an object in Liquid; no JSON parsing filter is needed.

```liquid
{% assign current_variant = product.selected_or_first_available_variant %}
{% assign preorder_field = current_variant.metafields.hotwax.preorder_batches %}
{% if preorder_field.type == 'json' %}
  {% assign preorder_data = preorder_field.value %}
{% endif %}
```

### 2. Calculate the purchase state and date

Place this block after the variant assignment. It produces `purchase_state` and `estimated_arrival` for the button and date display.

* Replace the initial `requested_quantity = 1` with the quantity being evaluated, including relevant cart quantity.
* Quantity fields must be JSON numbers, not strings.
* Dates must use the same timestamp format and UTC offset, as in the [sample JSON](#metafield-reference). Normalize mixed-offset dates first so [sorting by `promiseDate`](https://shopify.dev/docs/api/liquid/filters/sort) is chronological.

```liquid
{% liquid
  assign requested_quantity = 1
  assign purchase_state = 'unknown'
  assign estimated_arrival = nil
  assign total_available = current_variant.inventory_quantity

  if current_variant == blank
    assign purchase_state = 'unavailable'
  elsif current_variant.available == false
    assign purchase_state = 'sold_out'
  elsif current_variant.inventory_management == 'shopify' and current_variant.inventory_policy == 'deny' and total_available != nil
    if total_available <= 0
      assign purchase_state = 'sold_out'
    elsif requested_quantity > total_available
      assign purchase_state = 'insufficient_quantity'
    elsif requested_quantity > 0 and preorder_field.type == 'json' and preorder_field.value.batches != nil
      assign later_supply = 0
      assign quantities_valid = true
      assign dates_valid = true
      assign active_batches = preorder_field.value.batches | where: 'statusId', 'FUTURE_INV_ACTIVE'

      for batch in preorder_field.value.batches
        if batch.statusId == blank
          assign quantities_valid = false
        endif
      endfor

      for batch in active_batches
        assign ordered_quantity = batch.quantityOnOrderTotal | plus: 0
        assign external_quantity = batch.externalCommitments | plus: 0
        if batch.quantityOnOrderTotal == nil or batch.externalCommitments == nil
          assign quantities_valid = false
        elsif batch.quantityOnOrderTotal != ordered_quantity or batch.externalCommitments != external_quantity
          assign quantities_valid = false
        else
          assign supply = batch.quantityOnOrderTotal | minus: batch.externalCommitments
          if batch.quantityOnOrderTotal < 0 or batch.externalCommitments < 0 or supply < 0
            assign quantities_valid = false
          elsif supply > 0
            if batch.futureInventoryItemTypeId != 'FIT_PRE_ORDER'
              assign quantities_valid = false
            endif
            assign later_supply = later_supply | plus: supply
            assign parsed_date = batch.promiseDate | date: '%s'
            if batch.promiseDate == blank or parsed_date == batch.promiseDate
              assign dates_valid = false
            endif
          endif
        endif
      endfor

      if quantities_valid
        assign available_by_date = total_available | minus: later_supply
        if available_by_date >= requested_quantity
          assign purchase_state = 'in_stock'
        else
          assign purchase_state = 'preorder'
          if dates_valid
            assign dated_batches = active_batches | sort: 'promiseDate'
            assign now_epoch = 'now' | date: '%s' | plus: 0
            for batch in dated_batches
              assign supply = batch.quantityOnOrderTotal | minus: batch.externalCommitments
              if supply > 0
                assign later_supply = later_supply | minus: supply
                assign available_by_date = total_available | minus: later_supply
                if available_by_date >= requested_quantity
                  assign arrival_epoch = batch.promiseDate | date: '%s' | plus: 0
                  if arrival_epoch >= now_epoch
                    assign estimated_arrival = batch.promiseDate
                  endif
                  break
                endif
              endif
            endfor
          endif
        endif
      endif
    endif
  endif
%}
```

The first pass totals batch supply. The date pass removes each arriving batch from `later_supply` until `total_available - later_supply` covers the request.

Zero-supply and inactive batches do not affect the estimate. Negative **batch supply** returns `unknown`; negative **running availability**, such as -15 in the example, is valid.

### 3. Update the existing button label

Apply the result through your theme's existing purchase controls:

| State | Theme behavior |
| --- | --- |
| `unavailable` or `sold_out` | Keep the existing disabled-button behavior. |
| `insufficient_quantity` | Keep the quantity-limit controls. |
| `preorder` | Show `Pre-order`. |
| `in_stock` | Keep the existing add-to-cart label. |
| `unknown` | Keep existing purchase controls; omit stock and date claims. |

Replace only the label content, using your theme's translation keys. Changing the text does not disable purchasing.

```liquid
{% if current_variant == blank %}
  {{ 'products.product.unavailable' | t }}
{% elsif purchase_state == 'sold_out' or current_variant.available == false %}
  {{ 'products.product.sold_out' | t }}
{% elsif purchase_state == 'preorder' %}
  {{ 'products.product.pre_order' | t }}
{% else %}
  {{ 'products.product.add_to_cart' | t }}
{% endif %}
```

Add the `pre_order` translation if needed. All key names are theme-dependent. Match any explicit `aria-label` to the visible text, and preserve the form and cart-error handling.

### 4. Display the arrival estimate

Use the calculated `estimated_arrival`. Localize the wording and date format for your storefront.

```liquid
{% if purchase_state == 'preorder' %}
  {% if estimated_arrival != blank %}
    <p>Estimated stock arrival: {{ estimated_arrival | date: '%B %d, %Y' | escape }}</p>
  {% else %}
    <p>Estimated arrival pending</p>
  {% endif %}
{% endif %}
```

### 5. Recalculate after shopper changes

Liquid runs when Shopify renders the page or section. A JavaScript variant change does not rerun this calculation automatically.

| How the theme updates | What to do |
| --- | --- |
| Re-renders the product section | Include the calculation and its current inputs in that render. |
| Updates in JavaScript | Read the selected variant's total and batch JSON, apply the same calculation, then update the label and date after the theme's availability update. |

Recalculate after variant, quantity, cart or market changes. Keep availability, price, metafield, button text and the submitted variant ID aligned.

One way to expose batch JSON for variants already rendered by the theme is through escaped data attributes:

```liquid
<div data-hotwax-preorder-data hidden>
  {% for variant in product.variants %}
    <span
      data-variant-id="{{ variant.id }}"
      data-batches="{{ variant.metafields.hotwax.preorder_batches.value | json | escape }}"
    ></span>
  {% endfor %}
</div>
```

Read the selected variant's schedule from your existing handler:

```javascript
function readPreorderBatches(productRoot, variantId) {
  const rows = productRoot.querySelectorAll(
    '[data-hotwax-preorder-data] [data-variant-id]'
  );
  const row = Array.from(rows).find(
    (item) => item.dataset.variantId === String(variantId)
  );
  if (!row) return null;

  try {
    const data = JSON.parse(row.dataset.batches);
    return data && Array.isArray(data.batches) ? data : null;
  } catch {
    return null;
  }
}
```

Use this schedule with that variant's total availability. Scope selectors to the product section so quick views and other handlers do not overwrite the result.

Follow [Shopify's variant handling guidance](https://shopify.dev/docs/storefronts/themes/product-merchandising/variants): there is no universal `variant:change` event. Emit required values explicitly; `product | json` does not include custom metafields automatically and omits some inventory properties. See the [JSON filter reference](https://shopify.dev/docs/api/liquid/filters/json).

## Check the integration

Use an unpublished theme and development-store variants before publishing.

| If you see | Check |
| --- | --- |
| Blank metafield data | Selected variant, JSON type, configured namespace/key (default `hotwax.preorder_batches`) and [Storefront API access](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/metafields). |
| `unknown` purchase state | Inventory settings and complete numeric batch fields. Missing values are unknown, not zero; other inventory policies need a separate implementation. |
| Label or date changes back | The theme's existing variant handler and product-section selectors. |
| Stale arrival date | Refresh the Shopify total and batch schedule together. A metafield update does not refresh an already open page. |

### Test cases

| Test | Expected result |
| --- | --- |
| Example schedule, Shopify total 45, quantity 1 or 15 | `Pre-order`; November 15. |
| Example schedule, Shopify total 45, quantity 16 or 45 | `Pre-order`; December 1. |
| Example schedule, Shopify total 65, quantity 5 | `Add to cart`; no preorder date. |
| Example schedule, Shopify total 65, quantity 6 | `Pre-order`; November 1. |
| Requested quantity exceeds the Shopify total | Keep the quantity-limit controls; do not offer that quantity. |
| Variant is sold out while batches remain listed | Sold-out behavior wins. |
| Batches are unsorted or two share a date | Select by chronological availability, including all supply on the same date. |
| Zero-supply, received or cancelled batch | Exclude it from the available supply. |
| Missing or malformed batch quantities, or negative batch supply | `unknown`; do not invent availability. |
| Missing batch date or selected date is overdue | Keep the established preorder state; show a pending-date message. |
| Order reduces Shopify availability without changing the batch schedule | Advance the date when the remaining quantity crosses the next batch boundary. |
| Incoming stock arrives, is cancelled, or changes date | Refresh the total and schedule together, then recalculate under the same consumption policy. |
| Variant, quantity, cart, market or product-section changes | Recalculate; keep the label, date and submitted variant aligned. |
| Location is missing, renamed or not exposed in Liquid | Refresh the name, use the lookup fallback or omit the label. |
| Inventory is untracked, continue-selling, or includes another future-inventory type | Use a separately validated policy; this calculation does not cover it. |

## Metafield reference

The default variant metafield is `hotwax.preorder_batches`. Read each value as a complete snapshot; never add quantities from successive versions together.

This sample matches the worked example above. Identifiers and dates are illustrative. For category and tag configuration, see [Presell Catalog Synchronization](../../../learn-shopify/shopify-integration/preorders-and-backorders/presell-catalog-synchronization.md).

```json
{
  "version": 12,
  "batches": [
    {
      "futureInventoryItemId": "FI10001",
      "facilityId": "WAREHOUSE_1",
      "shopifyLocationId": "12345678901",
      "futureInventoryItemTypeId": "FIT_PRE_ORDER",
      "statusId": "FUTURE_INV_ACTIVE",
      "promiseDate": "2026-11-01T12:00:00+0000",
      "quantityOnOrderTotal": 12,
      "externalCommitments": 2
    },
    {
      "futureInventoryItemId": "FI10002",
      "facilityId": "WAREHOUSE_1",
      "shopifyLocationId": "12345678901",
      "futureInventoryItemTypeId": "FIT_PRE_ORDER",
      "statusId": "FUTURE_INV_ACTIVE",
      "promiseDate": "2026-11-15T12:00:00+0000",
      "quantityOnOrderTotal": 25,
      "externalCommitments": 5
    },
    {
      "futureInventoryItemId": "FI10003",
      "facilityId": "WAREHOUSE_1",
      "shopifyLocationId": "12345678901",
      "futureInventoryItemTypeId": "FIT_PRE_ORDER",
      "statusId": "FUTURE_INV_ACTIVE",
      "promiseDate": "2026-12-01T12:00:00+0000",
      "quantityOnOrderTotal": 30,
      "externalCommitments": 0
    }
  ]
}
```

| Field | Meaning and use |
| --- | --- |
| `batches` | Incoming batches for this listing. Read all applicable batches; the array may be unsorted. |
| `futureInventoryItemTypeId` | Use `FIT_PRE_ORDER` for preorder messaging. |
| `statusId` | Use `FUTURE_INV_ACTIVE`; ignore received, cancelled and other inactive states. |
| `quantityOnOrderTotal` | Remaining incoming quantity, before this listing's own reservations are deducted. |
| `externalCommitments` | Open reservations outside this exact listing, including other listings in the same shop. Subtract these from the batch's incoming quantity. |
| `promiseDate` | Expected incoming-stock availability; may be absent. It is not a customer-specific shipping or delivery promise. |
| `futureInventoryItemId` | Stable HotWax batch ID for diagnostics. |
| `facilityId` | HotWax facility ID for Store Lookup; not a Shopify location ID. |
| `shopifyLocationId` | Mapped Shopify location ID as a decimal string, when supplied. Use the HotWax lookup or omit the name if it is missing or unmapped. |
| `version` | Optional revision of the complete value for diagnostics; not a schema version or preorder flag. |

## Storefront API reference

For a JavaScript storefront, fetch the selected variant by its Shopify GraphQL ID through your existing Storefront API client. Use your configured API version and shopper context.

```graphql
query PreorderVariant($variantId: ID!) {
  node(id: $variantId) {
    ... on ProductVariant {
      id
      availableForSale
      quantityAvailable
      metafield(namespace: "hotwax", key: "preorder_batches") {
        type
        value
      }
    }
  }
}
```

| Field | How to use it |
| --- | --- |
| `availableForSale` | Shopify's purchase gate. When false, retain sold-out behavior even if batches remain listed. |
| `quantityAvailable` | Total sellable online quantity (`T`); it does not identify the future-inventory portion. |
| `metafield.value` | A JSON string. Check `type == "json"`, parse with `JSON.parse` and validate `batches`. In Liquid, `.value` is already an object. |

See Shopify's [ProductVariant](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant) and [Metafield](https://shopify.dev/docs/api/storefront/latest/objects/Metafield) references.

## Optional: Display location names

Display the batch's receiving facility, using `shopifyLocationId` for Shopify or `facilityId` for HotWax. Keep IDs as strings in JavaScript. For example, Shopify ID `"12345678901"` has GraphQL form `gid://shopify/Location/12345678901`.

A receiving warehouse is not automatically a pickup store. If the mapping is missing or ambiguous, use the fallback lookup or omit the label. A name alone does not establish inventory availability or pickup eligibility.

### Option 1: Shopify name in Liquid

Create `snippets/hotwax-preorder-location-name.liquid`. Pass the selected `variant` and a `batch` from its metafield:

```liquid
{%- doc -%}
  Displays a Shopify location name when the selected variant exposes it.
  @param {variant} variant - Selected product variant.
  @param {object} batch - Preorder batch with a shopifyLocationId.
{%- enddoc -%}
{%- assign target_id = batch.shopifyLocationId | append: '' -%}
{%- assign location_name = '' -%}
{%- if target_id != blank -%}
  {%- for availability in variant.store_availabilities -%}
    {%- assign candidate_id = availability.location.id | append: '' -%}
    {%- if candidate_id == target_id -%}
      {%- assign location_name = availability.location.name -%}
      {%- break -%}
    {%- endif -%}
  {%- endfor -%}
{%- endif -%}
{%- if location_name != blank -%}
  {{- location_name | escape -}}
{%- endif -%}
```

Capture the snippet's output in the batch display. If blank, omit the label or use the HotWax lookup below. Never display an opaque ID as the location name.

Shopify's [`variant.store_availabilities`](https://shopify.dev/docs/api/liquid/objects/variant#variant-store_availabilities) applies only to the selected or first available variant, so re-render it when the variant changes. Each [`location`](https://shopify.dev/docs/api/liquid/objects/location) has an `id` and `name`, but this is not a warehouse directory: [locations not stocking the variant have no entry](https://shopify.dev/docs/api/liquid/objects/store_availability). Do not assume an arbitrary `locations[id]` lookup exists.

### Option 2: HotWax name through Store Lookup

Use the [Store Lookup API](../../api/facility/store-lookup.md) for facility names and optional addresses. For `facilityId: "WAREHOUSE_1"`, send `POST https://<oms-host>/rest/s1/api/stores` with `Content-Type: application/json`:

```json
{
  "viewSize": 20,
  "viewIndex": 0,
  "filters": ["storeCode: WAREHOUSE_1"],
  "fieldsToSelect": ["storeCode", "storeName", "address1", "city", "stateCode"]
}
```

Read `response.docs`, match `storeCode` to `batch.facilityId`, and display `storeName`. Verify this facility-code mapping on the target instance. `externalId` is an external-system reference, not necessarily a Shopify location ID.

Liquid cannot make this HTTP request. Use the instance's supported storefront access through approved JavaScript or a backend/proxy, and render the name as text. Keep private credentials server-side and safely encode exact filters; do not concatenate untrusted search syntax.

For this lookup:

* The warehouse must be indexed and exposed. Do not copy the BOPIS `RETAIL_STORE` filter or proximity radius when looking up a known warehouse.
* For multi-facility lists, paginate while results remain. Cache names by facility ID and refresh them when renamed.
* On empty results or failure, omit the label. A lookup failure does not mean sold out.

Store Lookup provides location details; it does not calculate preorder quantities or arrival dates.
