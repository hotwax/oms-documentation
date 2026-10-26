---
description: >-
  Calculate preorder availability and estimated arrival dates from Shopify's
  available quantity and HotWax inventory batches, with a Shopify Liquid example.
---

# Pre-order PDP experience with Shopify Liquid

**For each arrival date, subtract the supply arriving later from Shopify's available quantity. The first date that covers the requested quantity is the preorder estimate.**

This guide shows the calculation, the metafield and Storefront API inputs, and a Liquid example that updates the purchase button and estimated arrival date. For pickup availability, see [BOPIS PDP Experience](../buy-online-pickup-in-store/bopis-pdp-experience.md).

## Calculate the preorder date

Use two inputs for the selected variant:

* `T`: Shopify's total available quantity, from Storefront API `quantityAvailable` or Liquid `variant.inventory_quantity` for tracked inventory.
* Each active preorder batch's supply: `quantityOnOrderTotal - externalCommitments`.

{% hint style="info" %}
This method requires one consumption order: **physical stock first, then incoming batches from earliest arrival to latest**. Existing reservations must follow that order too, including after cancellations, receipts or date changes. The remaining stock must be the unconsumed end of that supply schedule.

Use quantities covering the same variant, listing and eligible fulfillment locations, without duplicate supply. If orders can retain later-batch reservations while earlier eligible stock is available, or the quantities cover different locations, use an inventory-provided promise instead of this calculation.
{% endhint %}

### Step 1: Calculate each batch's supply

```text
batch supply = quantityOnOrderTotal - externalCommitments
```

Include active `FIT_PRE_ORDER` batches. Shopify has already deducted orders placed through this listing from `T`. **Do not subtract those orders again.** The batch supply is a schedule quantity, not a separate count of unsold units.

### Step 2: Check availability now

For a positive requested quantity `q`:

```text
available now = T - sum(all active preorder batch supply)
```

First honor Shopify's purchase checks: if the variant is unavailable or `q > T`, do not offer that quantity. Otherwise, if `available now >= q`, show `Add to cart` with no preorder date. Include the same variant's quantity already in the cart in `q`, unless your integration reserves it separately.

If `available now < q`, the purchase needs incoming stock. A negative result means earlier supply has already been consumed; it is **not** a negative physical-stock value to publish or a reason to discard the calculation. Keep the signed result when walking the schedule.

### Step 3: Find the first date that covers the quantity

Sort the batches by arrival date, earliest first. At each date `D`:

```text
available by D = T - sum(batch supply arriving AFTER D)
```

Choose the first date where `available by D >= q`. Batches sharing a date contribute together. For one unit, this is the next available preorder date. For multiple units, it is the estimate for the **full requested quantity**.

### Worked example: 45 units available in Shopify

| Arrival date | Quantity on order | External commitments | Batch supply |
| --- | --- | --- | --- |
| November 1 | 12 | 2 | 10 |
| November 15 | 25 | 5 | 20 |
| December 1 | 30 | 0 | 30 |

The schedule contains 60 units. Shopify reports `T = 45`, so under this consumption order the first 15 future units are already spoken for: all 10 November 1 units and five November 15 units.

| Available by | Calculation | Result |
| --- | --- | --- |
| Now | `45 - 10 - 20 - 30` | -15 |
| November 1 | `45 - 20 - 30` | -5 |
| November 15 | `45 - 30` | 15 |
| December 1 | `45` | 45 |

* Buy **1 through 15**: `Pre-order`, estimated arrival **November 15**.
* Buy **16 through 45**: `Pre-order`, full-quantity estimated arrival **December 1**.
* Buy **more than 45**: insufficient availability.

If Shopify instead reports `T = 65`, the same schedule leaves `65 - 60 = 5` units available now. A purchase of five uses physical stock; a purchase of six needs incoming stock and has a full-quantity estimate of November 1.

This is estimated **stock arrival at the facility**, not delivery to the customer. If a positive-supply batch has an unknown date, or the selected date is overdue, keep the preorder label and show “Estimated arrival pending.” Never choose `batches[0]` or the earliest date without doing the quantity calculation.

## Understand the JSON

The example below uses illustrative identifiers, quantities, and dates. The Shopify location-name example uses `shopifyLocationId` when supplied; otherwise, use the HotWax facility lookup. For category and tag-based configuration, see [Presell Catalog Synchronization](../../../learn-shopify/shopify-integration/preorders-and-backorders/presell-catalog-synchronization.md).

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

| Field | Meaning | Storefront use |
| --- | --- | --- |
| `version` | Optional revision of the complete metafield value, not a schema version. | Diagnostic information; not a preorder flag. |
| `batches` | Incoming inventory batches associated with this listing. | Read all applicable batches. The array is not guaranteed to be in arrival-date order. |
| `futureInventoryItemId` | HotWax batch identifier. | Stable batch identity for diagnostics. |
| `facilityId` | HotWax facility identifier. | Use it for HotWax Store Lookup; it is not a Shopify location ID. |
| `shopifyLocationId` | Shopify location ID mapped to this batch's facility in your shop, represented as a decimal string. | Resolve a display name where Shopify exposes that location. Missing or unmapped IDs must have a fallback. |
| `futureInventoryItemTypeId` | Future inventory type. | Use `FIT_PRE_ORDER` for preorder messaging. |
| `statusId` | Current batch status. | Use `FUTURE_INV_ACTIVE`; ignore received, cancelled, and other inactive states. |
| `promiseDate` | Expected availability date of the incoming batch; it can be absent. | Incoming-stock information. It is not automatically a customer-specific shipping or delivery promise. |
| `quantityOnOrderTotal` | Remaining incoming quantity for the batch. | Supply before this listing's own reservations are deducted. |
| `externalCommitments` | Open reservations outside this exact Shopify listing, including other listings in the same shop. | Reduces the supply attributed to this listing. |

`quantityOnOrderTotal - externalCommitments` is schedule supply, not “units left” or a cart maximum.

Read the metafield as a complete snapshot; do not add quantities from successive versions together.

## Read the Storefront API fields

Fetch the selected variant by its Shopify GraphQL ID through your existing Storefront API client:

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

Use your configured API version and shopper context.

| Input | Meaning in this calculation |
| --- | --- |
| `availableForSale` | Shopify's purchase gate. When false, retain sold-out behavior even if the metafield still lists batches. |
| `quantityAvailable` | Total sellable online quantity, called `T` below. It does not identify how much comes from future inventory. |
| `metafield.value` | JSON **string** in the Storefront API. Check `type == "json"`, parse with `JSON.parse`, and validate `batches`. In Liquid, `.value` is already an object. |

See Shopify's [ProductVariant](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant) and [Metafield](https://shopify.dev/docs/api/storefront/latest/objects/Metafield) references.

## Read the selected variant

[Shopify's JSON metafield `.value`](https://shopify.dev/docs/api/liquid/objects/metafield) is already an object. No JSON parsing filter is needed in Liquid.

```liquid
{% assign current_variant = product.selected_or_first_available_variant %}
{% assign preorder_field = current_variant.metafields.hotwax.preorder_batches %}
{% if preorder_field.type == 'json' %}
  {% assign preorder_data = preorder_field.value %}
{% endif %}
```

## Calculate the state and date in Liquid

Place this block in the product section after assigning `current_variant` and `preorder_field` above. It sets `purchase_state` and `estimated_arrival` for the button and date markup that follow. Keep the blocks in the same Liquid scope.

The example uses `requested_quantity = 1` for the initial page. Replace it with the quantity being evaluated, including relevant cart quantity, and recalculate when that quantity changes. It assumes the consumption order described above and a complete batch array. Numeric quantity fields must be JSON numbers. Dates use the same timestamp format and UTC offset, as in the sample, so [sorting by `promiseDate`](https://shopify.dev/docs/api/liquid/filters/sort) is chronological; normalize mixed-offset dates before using this example.

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

The first loop totals the schedule. The date loop removes each arriving batch from `later_supply`, so `total_available - later_supply` increases until it covers the requested quantity. It never subtracts this listing's orders again. Zero-supply and inactive batches do not affect the estimate; a negative batch supply returns `unknown`. That is different from a valid **negative running availability** such as -15 in the worked example.

## Connect the state to the existing button

In the theme's existing button-label logic, use this order of precedence:

1. Keep the existing unavailable, sold-out or insufficient-quantity controls.
2. Use `Pre-order` when `purchase_state` is `preorder`.
3. Keep the existing add-to-cart label for `in_stock`.
4. For `unknown`, keep the existing purchase controls and omit stock or date claims.

For example, replace only the existing label content, using your theme's translation keys:

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

Add the `pre_order` translation if your theme does not already define it. The other key names above are also theme-dependent. Update any explicit `aria-label` to match the visible text.

## Display the calculated arrival estimate

Use `estimated_arrival` from the calculation, rather than a date from an arbitrary batch. Localize the wording and date format for your storefront:

```liquid
{% if purchase_state == 'preorder' %}
  {% if estimated_arrival != blank %}
    <p>Estimated stock arrival: {{ estimated_arrival | date: '%B %d, %Y' | escape }}</p>
  {% else %}
    <p>Estimated arrival pending</p>
  {% endif %}
{% endif %}
```

The estimate covers the full requested quantity. It does not include handling, shipping or delays caused by other items that must ship together. A batch with an overdue date remains incoming stock until its inventory state changes.

## Recalculate when the variant or quantity changes

Liquid runs when Shopify renders the page or section. A JavaScript variant change does not automatically rerun the snippet. Follow [Shopify's variant handling guidance](https://shopify.dev/docs/storefronts/themes/product-merchandising/variants) and connect to the handler your theme actually uses.

For a theme that re-renders its product section, include the quantity/date calculation and its inputs in that render. For a theme that updates in JavaScript, read the selected variant's total availability and batch JSON, apply the same calculation, and update both label and date after the theme's availability update. Recalculate when the quantity or cart changes too.

To expose the current batch JSON for the variants already rendered by the theme, one option is escaped data attributes:

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

Read one row in your existing selected-variant handler:

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

This helper reads the schedule for the selected variant. Use it with that variant's total availability in the quantity/date calculation.

Connect to your theme's selected-variant handler; there is no universal `variant:change` event. Also, `product | json` does not automatically include custom metafields, and Shopify omits certain inventory properties from that product serialization. Emit required values explicitly. See [Shopify's JSON filter reference](https://shopify.dev/docs/api/liquid/filters/json).

## Optional: Display human-readable location names

Use `shopifyLocationId` to identify a Shopify location and `facilityId` to identify a HotWax facility. The Shopify ID is a decimal string, for example `"12345678901"`; its GraphQL form is `gid://shopify/Location/12345678901`. Preserve IDs as strings in JavaScript.

Show the name of the batch's receiving facility. An inventory-only location must not be presented as a pickup store. If the location mapping is absent or ambiguous, use a fallback or omit the label. A location name does not establish inventory availability or pickup eligibility.

### Option 1: Resolve a Shopify name in Liquid

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

Capture the snippet's output in the batch display. If it is blank, omit the location label or use the HotWax lookup below. Do not display an opaque ID as a customer-facing name.

Shopify exposes [`variant.store_availabilities`](https://shopify.dev/docs/api/liquid/objects/variant#variant-store_availabilities) only for the selected or first available variant. Its [`location`](https://shopify.dev/docs/api/liquid/objects/location) has `id` and `name`, but the array is not a directory of all warehouses: [locations not stocking the variant have no entry](https://shopify.dev/docs/api/liquid/objects/store_availability). Re-render for the selected variant when it changes. This example does not assume an arbitrary `locations[id]` lookup exists.

### Option 2: Resolve a HotWax name with Store Lookup

Use the [Store Lookup API](../../api/facility/store-lookup.md) for facility names and optional address details. For the illustrative `facilityId: "WAREHOUSE_1"`, send `POST https://<oms-host>/rest/s1/api/stores` with `Content-Type: application/json` and this body:

```json
{
  "viewSize": 20,
  "viewIndex": 0,
  "filters": ["storeCode: WAREHOUSE_1"],
  "fieldsToSelect": ["storeCode", "storeName", "address1", "city", "stateCode"]
}
```

Read `response.docs`, match `storeCode` to `batch.facilityId`, and display `storeName`. Verify that facility-code mapping on the target instance. `externalId` is an external-system reference, not necessarily a Shopify location ID.

Use the instance's supported storefront access configuration. Liquid cannot issue this HTTP request: call it from the storefront's approved JavaScript integration or backend/proxy, then render the name as text. Keep private API credentials server-side. Use a safely encoded exact filter for other facility IDs; do not concatenate untrusted search syntax.

A warehouse must be indexed and exposed for the lookup to return it. Do not copy the BOPIS example's `RETAIL_STORE` filter or proximity radius into a lookup for a known warehouse. For multi-facility lists, paginate while results remain, cache names by facility ID and refresh them when renamed. Empty results or lookup failures should omit the label; they do not mean the product is sold out. This API describes locations and does not calculate preorder inventory or arrival dates.

## Configuration and troubleshooting checklist

* **Metafield:** Check the selected variant, JSON type, namespace/key (defaults: `hotwax.preorder_batches`), and [Storefront API access](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/metafields). Start here if data is blank.
* **Inventory:** Use Shopify-tracked inventory with `inventory_policy == 'deny'` and complete numeric batch fields. Missing values are unknown, not zero; other inventory policies need a separate implementation.
* **Theme wiring:** Use the selected variant for availability, price, metafield and submitted ID. Update through the theme's existing handler and scope selectors to the product section so another handler or quick view does not overwrite the result.
* **Purchase controls:** Preserve the form and cart-error handling. Send `sold_out` and `unavailable` through the existing disabled-button branch, and `insufficient_quantity` through the quantity-limit controls. Changing text alone does not disable purchasing.
* **Freshness:** Re-fetch or re-render after variant, quantity, cart or market changes. If a date is stale, refresh the total and schedule; a metafield change does not update an already open page automatically.
* **Validation:** Use an unpublished theme and development-store variants to check the cases below before publishing.

## Test cases

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
