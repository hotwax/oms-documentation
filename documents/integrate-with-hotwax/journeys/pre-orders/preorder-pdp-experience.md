---
description: >-
  Read HotWax Commerce preorder batches in Shopify Liquid, handle variant changes,
  and identify the inventory information needed for an accurate preorder button.
---

# Pre-order PDP experience with Shopify Liquid

Use the variant metafield `hotwax.preorder_batches` with Shopify availability to decide what the product page can tell a shopper. This guide explains the preorder calculation, how to choose an estimated incoming date, and how to display location names and update the purchase button.

For store pickup availability on the product page, see the [BOPIS PDP Experience](../buy-online-pickup-in-store/bopis-pdp-experience.md) guide.

{% hint style="warning" %}
This guide describes the future-inventory event integration currently under review in [Shopify connector PR #1020](https://github.com/hotwax/mantle-shopify-connector/pull/1020). Confirm that your store has this integration enabled and that the actual variant carries the documented payload before implementing the examples.

The current batch metafield does not contain physical availability or reservations from this Shopify listing. The calculation below identifies the missing input: remaining available quantity for each batch after **all** reservations. Until the integration supplies that input, the JSON and Shopify total alone cannot determine the full preorder state and date. The conditional Liquid button example instead requires an authoritative physical-availability input and does not select a date. Neither input is claimed to be available in your store.
{% endhint %}

## Confirm which integration your store uses

This guide applies to the JSON batch contract below. The existing [Presell Catalog Synchronization](../../../learn-shopify/shopify-integration/preorders-and-backorders/presell-catalog-synchronization.md) guide describes category, tag, and script-based behavior. Do not combine the two contracts or infer a variant's state from a parent product tag.

Before changing the theme:

1. Confirm the namespace and key with your integration team. The defaults are `hotwax` and `preorder_batches`, but a shop can override them.
2. Confirm the metafield belongs to the Shopify product variant and has type `json`.
3. Check a real variant in the target store. A JSON field's existence alone does not mean the variant is currently available for preorder.
4. Identify the theme's existing selected-variant handler and add-to-cart label. Work in an unpublished theme copy.
5. Confirm the inventory policy. The button example below covers Shopify-tracked, finite inventory with `inventory_policy == 'deny'`. It does not implement an unlimited `continue`-selling policy.

## Understand the JSON

The following example uses illustrative identifiers, quantities, and dates. It includes the **proposed `shopifyLocationId` addition** assumed for this guide; the current connector does not emit that field. All other fields and the timestamp format match the current batch payload. Confirm the deployed payload before using the location example.

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
      "promiseDate": "2026-11-15T12:00:00+0000",
      "quantityOnOrderTotal": 100,
      "externalCommitments": 20
    },
    {
      "futureInventoryItemId": "FI10002",
      "facilityId": "WAREHOUSE_1",
      "shopifyLocationId": "12345678901",
      "futureInventoryItemTypeId": "FIT_PRE_ORDER",
      "statusId": "FUTURE_INV_ACTIVE",
      "promiseDate": "2026-12-01T12:00:00+0000",
      "quantityOnOrderTotal": 50,
      "externalCommitments": 0
    }
  ]
}
```

| Field | Meaning | Storefront use |
| --- | --- | --- |
| `version` | Revision of the complete metafield value, not a schema version. An initial baseline may omit it. | Diagnostic information; not a preorder flag. |
| `batches` | Incoming inventory batches associated with this listing. | Read all applicable batches. The array is not guaranteed to be in arrival-date order. |
| `futureInventoryItemId` | HotWax batch identifier. | Stable batch identity for diagnostics. |
| `facilityId` | HotWax facility identifier. | Use it for HotWax Store Lookup; it is not a Shopify location ID. |
| `shopifyLocationId` | Proposed Shopify location ID mapped to this batch's facility in the receiving shop, represented as a decimal string. | Resolve a display name where Shopify exposes that location. Missing or unmapped IDs must have a fallback. |
| `futureInventoryItemTypeId` | Future inventory type. | Use `FIT_PRE_ORDER` for preorder messaging. |
| `statusId` | Current batch status. | Use `FUTURE_INV_ACTIVE`; ignore received, cancelled, and other inactive states. |
| `promiseDate` | Expected availability date of the incoming batch; it can be absent. | Incoming-stock information. It is not automatically a customer-specific shipping or delivery promise. |
| `quantityOnOrderTotal` | Remaining incoming quantity for the batch. | Supply before this listing's own reservations are deducted. |
| `externalCommitments` | Open reservations outside this exact Shopify listing, including other listings in the same shop. | Reduces the supply attributed to this listing. |

`quantityOnOrderTotal - externalCommitments` describes the batch's supply attributed to this listing before its own reservations. Do not display this result as “units left,” use it as a cart maximum, or replace Shopify inventory with it. The result can be negative during some inventory transitions; a positive batch does not prove that a new buyer can still reserve that batch.

The connector sends complete replacement values. Read the current value as a snapshot; do not add quantities from successive versions together. Date changes, cancellations, receipts, and changes in external commitments can update it. A reservation from this same Shopify listing can leave its metafield unchanged because Shopify already accounts for that order in inventory.

## Calculate preorder status and the estimated date

For a new purchase, answer two questions in order:

1. Can eligible physical stock cover the requested quantity? If yes, show `Add to cart`. If some units require active preorder stock, show `Pre-order` or explicitly identify the preorder portion.
2. Which still-available incoming batch covers those future units? Use that batch's expected arrival date. An earlier batch with no units left must not set the date.

The calculation below assumes finite Shopify-tracked inventory, physical stock used first, and no other future-inventory type. Inventory quantities must cover the same variant, listing, market and eligible fulfillment locations. A quantity already in the cart must be included in the quantity being evaluated unless the integration has explicitly reserved it.

### Read the Storefront API fields

Fetch the selected variant by its Shopify GraphQL ID through your existing Storefront API client:

```graphql
query PreorderVariant($variantId: ID!) {
  node(id: $variantId) {
    ... on ProductVariant {
      id
      availableForSale
      quantityAvailable
      currentlyNotInStock
      metafield(namespace: "hotwax", key: "preorder_batches") {
        type
        value
      }
    }
  }
}
```

Use your configured API version and shopper context. The metafield definition must permit [Storefront API access](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/metafields), and the client needs the applicable product and inventory access scopes. A missing or inaccessible field is unknown, not zero.

| Input | Meaning in this calculation |
| --- | --- |
| `availableForSale` | Shopify's purchase gate. When false, retain sold-out behavior even if the metafield still lists batches. |
| `quantityAvailable` | Total sellable online quantity, called `T` below. It does not identify how much comes from future inventory. |
| `currentlyNotInStock` | Shopify's out-of-stock-but-purchasable flag, commonly used for backorders. It is not the HotWax preorder flag: future stock published as Shopify inventory can leave it false. |
| `metafield.value` | JSON **string** in the Storefront API. Check `type == "json"`, parse with `JSON.parse`, and validate `batches`. In Liquid, `.value` is already an object. |

See Shopify's [ProductVariant](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant) and [Metafield](https://shopify.dev/docs/api/storefront/latest/objects/Metafield) references. None of these fields alone means “this purchase is a preorder.”

### Calculate remaining future and physical quantities

For each eligible, active preorder batch `i`:

```text
listing supply[i] = quantityOnOrderTotal[i] - externalCommitments[i]
remaining future[i] = listing supply[i] - this listing's open FI reservations[i]
F = sum(remaining future[i])
P = T - F
```

`F` is the remaining future quantity and `P` is the remaining physical quantity. The subtraction `P = T - F` is valid **only** when `F` accounts for all future stock included in `T`, each supply is counted once, both values use the same fulfillment scope, and the quantities form a consistent snapshot. An aggregate channel and its underlying facilities must not be counted twice. If the mapping or timing does not satisfy those conditions, obtain physical availability directly from the integration instead.

**The missing input in today's JSON is this listing's open FI reservations per batch.** `quantityOnOrderTotal - externalCommitments` has not deducted them. Subtracting that number from Shopify's total produces the wrong physical quantity after this listing places orders.

To make this calculation implementable, the recommended contract addition is a per-batch `availableToPromise` value equal to `remaining future[i]`, already net of all reservations. This is a **proposal**, separate from the assumed `shopifyLocationId` addition; it is not in the current payload or implemented by this documentation change. The integration must also define eligibility and refresh it for native reservations, cancellations, receipts and reallocation. Alternatively, it can supply a resolved physical quantity and the currently available batch/date through an agreed storefront service. A location-name lookup supplies neither quantity.

For a positive requested quantity `q`:

| Condition | Result |
| --- | --- |
| Shopify says unavailable, or known finite `T < q` | Do not offer the requested quantity. Retain Shopify's sold-out or quantity-limit behavior. |
| Required quantities, inventory policy or fulfillment scope are unknown or inconsistent | Do not claim a preorder state or date. Preserve native purchase controls and show no unsupported promise. |
| `P >= q` | `Add to cart`; no preorder arrival date for this purchase. |
| `0 <= P < q` and `F >= q - P` | The purchase includes preorder units. Set `future units needed = q - P`. |

Negative batch quantities or a negative derived `P` require reconciliation or a separately validated deficit policy; do not silently clamp them and calculate a date. The display calculation does not reserve inventory, and Shopify's cart and checkout remain the final purchase checks.

### Select the currently available estimated arrival date

Use **remaining future quantity**, not original incoming quantity, when selecting a date:

1. Keep eligible active `FIT_PRE_ORDER` batches and exclude batches with zero remaining availability.
2. Follow the integration's actual allocation order. If it guarantees earliest-arrival-first allocation within this fulfillment scope, sort by valid `promiseDate` from earliest to latest. Do not assume that rule merely because dates exist.
3. Starting with `future units needed`, take available units from each batch until the quantity is covered.
4. For one unit, show the date of the first batch that can supply it. For a quantity fulfilled across batches, the full-quantity estimate is the latest date among the batches used. If the UI shows split arrivals, show the corresponding quantities and dates separately.
5. If any required batch has no valid date, the dates are overdue, or the allocation policy can select a different facility/batch, show an agreed “Estimated arrival pending” message or request a resolved promise. Do not skip an undated batch and invent a later commitment.

This is an estimated **arrival of stock at the facility**, not arrival at the customer's door. Shipping, handling and ship-together rules can delay fulfillment beyond it. Recalculate after variant or quantity changes and when refreshing inventory; do not keep a previous variant's date.

The following worked examples use the two batches in the JSON above. “Own reservations” are supplied for the calculation but are **not present in the current metafield**. The examples assume consistent scope and earliest-arrival-first allocation:

| Scenario | Own reservations: Nov 15 / Dec 1 | Remaining future: Nov 15 / Dec 1 | Shopify `T` | Physical `P` | Requested `q` | Display |
| --- | --- | --- | --- | --- | --- | --- |
| First batch is fully reserved | 80 / 0 | `100 - 20 - 80 = 0` / `50 - 0 - 0 = 50` | 50 | `50 - 50 = 0` | 1 | `Pre-order`; estimated stock arrival Dec 1. |
| Physical and future stock coexist | 75 / 0 | 5 / 50 | 58 | `58 - 55 = 3` | 1 | `Add to cart`; the incoming dates do not apply to this purchase. |
| Quantity exceeds physical stock | 75 / 0 | 5 / 50 | 58 | 3 | 4 | 3 physical + 1 preorder; estimated stock arrival Nov 15 for the preorder unit. |
| Quantity spans both incoming batches | 75 / 0 | 5 / 50 | 58 | 3 | 9 | 3 physical + 5 arriving Nov 15 + 1 arriving Dec 1; full quantity available Dec 1. |

With the **current** payload and no additional inputs, a developer can display an incoming schedule, but cannot run this complete calculation reliably. The Liquid helper below covers a narrower one-unit case when authoritative physical availability is supplied; it does not fill the missing per-batch reservation data or choose an arrival date.

## Read the selected variant

[Shopify's JSON metafield `.value`](https://shopify.dev/docs/api/liquid/objects/metafield) is already an object. No JSON parsing filter is needed in Liquid.

```liquid
{% assign current_variant = product.selected_or_first_available_variant %}
{% assign preorder_field = current_variant.metafields.hotwax.preorder_batches %}
{% if preorder_field.type == 'json' %}
  {% assign preorder_data = preorder_field.value %}
{% endif %}
```

Use the selected variant consistently for the metafield, availability, price, and submitted variant ID. One color or size can be on preorder while another is available to ship or sold out.

## Display human-readable location names

Use `shopifyLocationId` to identify a Shopify location and `facilityId` to identify a HotWax facility. The proposed Shopify ID is a decimal string, for example `"12345678901"`; its GraphQL form is `gid://shopify/Location/12345678901`. Preserve IDs as strings in JavaScript.

The proposed field identifies the mapped location for the batch's facility in this shop. A virtual preorder parking location can be different; do not substitute it for the receiving facility or label it as a pickup store. If the mapping is absent or ambiguous, leave the ID absent and use a fallback. Naming a location does not establish inventory availability, pickup eligibility or routing.

### Option 1: Resolve a Shopify name in Liquid

Create `snippets/hotwax-preorder-location-name.liquid`. Pass the selected `variant` and a `batch` from its metafield:

```liquid
{%- doc -%}
  Displays a Shopify location name when the selected variant exposes it.
  @param {variant} variant - Selected product variant.
  @param {object} batch - Preorder batch with the proposed shopifyLocationId.
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

## Distinguish future supply from a preorder purchase

For a one-unit purchase, with a policy that uses physical stock first:

| Physical units available for this shopper | Sellable future units | Expected button |
| --- | --- | --- |
| 5 | 20 | `Add to cart` |
| 0 | 20 | `Pre-order` |
| 0 | 0 | `Sold out` |
| Unknown | Unknown or positive batch schedule | Cannot determine from the batch JSON alone |

Here, “physical available” means stock eligible to fulfill the purchase after reservations and holds, within the shopper's applicable fulfillment scope. It does not mean warehouse quantity on hand.

Do not calculate physical availability by subtracting the current payload's `quantityOnOrderTotal - externalCommitments` from `variant.inventory_quantity` or Storefront `quantityAvailable`. The subtraction in the calculation section requires net future quantities after all reservations, which this payload omits. For example, both situations below can expose a batch with `quantityOnOrderTotal: 10`, `externalCommitments: 0`, and a total Shopify available quantity of five:

* Zero physical units, with five of the incoming units reserved by this listing: a new unit uses future inventory.
* Five physical units, with all 10 incoming units reserved by this listing: a new unit uses physical inventory.

The metafield omits those native reservations, so the theme cannot distinguish the two situations with that subtraction. It also cannot identify the next uncommitted batch merely by taking the earliest `promiseDate`.

[Shopify's variant object](https://shopify.dev/docs/api/liquid/objects/variant) does not provide a separate physical-versus-future quantity. [Location inventory levels](https://shopify.dev/docs/api/admin-graphql/2026-01/objects/InventoryLevel) are an Admin API concept. Do not put Admin API credentials in theme code. Liquid [store availability](https://shopify.dev/docs/api/liquid/objects/store_availability) is not a substitute for the integration's complete shipping eligibility and inventory-source mapping. The Storefront API also exposes [StoreAvailability.quantityAvailable](https://shopify.dev/docs/api/storefront/latest/objects/StoreAvailability), documented as physical stock at that location. Do not treat pickup-oriented results as complete, reservation-adjusted shipping availability or interpret a missing location as zero stock.

Have the integration team supply physical availability from the same inventory scope and policy used for this storefront. This can come through an agreed storefront integration; the guide does not prescribe an endpoint or a new metafield. If that input is unavailable, the JSON reader remains useful, but production automation of the purchase label is not complete.

## Add a conditional Liquid state reader

Create `snippets/hotwax-preorder-state.liquid` with the following content. It returns a string: `in_stock`, `preorder`, `sold_out`, `unavailable`, or `unknown`.

The required `physical_available` parameter is an integration-supplied number for the selected variant and shopper. Missing input returns `unknown`; it must never default to zero. This example classifies one unit and assumes the Shopify inventory and supplied physical availability have the same eligible fulfillment scope. It deliberately returns `unknown` when another active future-inventory type could explain the available inventory.

```liquid
{%- doc -%}
  Classifies a one-unit purchase using the current batch contract.
  @param {variant} variant - Selected Shopify variant.
  @param {number} [physical_available] - Authoritative physical ATP in scope.
{%- enddoc -%}
{%- liquid
  assign state = 'unknown'

  if variant == blank
    assign state = 'unavailable'
  elsif variant.available == false
    assign state = 'sold_out'
  elsif variant.inventory_management == 'shopify' and variant.inventory_policy == 'deny'
    if variant.inventory_quantity <= 0
      assign state = 'sold_out'
    elsif physical_available != nil
      if physical_available >= 1
        assign state = 'in_stock'
      else
        assign field = variant.metafields.hotwax.preorder_batches
        assign has_preorder_supply = false
        assign has_other_supply = false
        assign incomplete_batch = false

        if field.type == 'json' and field.value.batches != nil
          for batch in field.value.batches
            if batch.statusId == 'FUTURE_INV_ACTIVE'
              if batch.quantityOnOrderTotal == nil or batch.externalCommitments == nil
                assign incomplete_batch = true
              else
                assign listing_supply = batch.quantityOnOrderTotal | minus: batch.externalCommitments
                if listing_supply > 0
                  if batch.futureInventoryItemTypeId == 'FIT_PRE_ORDER'
                    assign has_preorder_supply = true
                  else
                    assign has_other_supply = true
                  endif
                endif
              endif
            elsif batch.statusId == nil
              assign incomplete_batch = true
            endif
          endfor
          if has_preorder_supply and has_other_supply == false and incomplete_batch == false
            assign state = 'preorder'
          endif
        endif
      endif
    endif
  endif

  echo state
-%}
```

Keep Shopify's existing purchase checks. In particular, `variant.available` can be true for a continue-selling or untracked variant; it is not a preorder flag. A metafield must not re-enable a sold-out variant, override quantity rules, bypass a selling plan, or suppress a cart error.

For a controlled test with zero physical availability independently verified, this call should return `preorder` when the selected variant has sellable preorder inventory:

```liquid
{% capture purchase_state %}
  {% render 'hotwax-preorder-state', variant: current_variant, physical_available: 0 %}
{% endcapture %}
{% assign purchase_state = purchase_state | strip %}
```

The zero above is a test fixture, not a production default. Replace it with the authoritative value before integrating the state reader. Liquid `capture` returns text; compare with `purchase_state == 'preorder'`, not with a boolean. The string `'false'` is also truthy in Liquid, so do not use string results as boolean conditions.

For quantities above one, consider both the requested quantity and units already in the cart. A quantity of six with five physical units can require a preorder portion. The one-unit classifier does not solve that case. Obtain a quantity-aware fulfillment promise before using the same label or date for larger quantities.

## Connect the state to the existing button

In the theme's existing button-label logic, use this order of precedence:

1. Keep the existing unavailable or sold-out state and disabled behavior.
2. Use `Pre-order` when the state reader returns `preorder`.
3. Keep the existing add-to-cart label for `in_stock`.
4. Treat `unknown` as missing information, not proof that the variant is in stock. Keep native purchase controls and omit any “ships now” or promised-date claim. Resolve this state for preorder products before launching the customization.

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

Add the `pre_order` translation if your theme does not already define it. The other key names above are also theme-dependent. Update any explicit `aria-label` to match the visible text. Route `sold_out` and `unavailable` through the theme's existing disabled-button branch; changing label text alone does not disable a button. Preserve the existing button, product form, selected-variant input, loading indicator, submit handler, and cart error handling.

Changing the button label is presentation only. It does not reserve inventory, route an order, create a Shopify selling plan, or establish deferred payment terms.

## Update the label when the variant changes

Liquid runs when Shopify renders the page or section. A JavaScript variant change does not automatically rerun the snippet. Follow [Shopify's variant handling guidance](https://shopify.dev/docs/storefronts/themes/product-merchandising/variants) and connect to the handler your theme actually uses.

For a theme that re-renders its product section, include the state reader and its authoritative input in that render. For a theme that updates in JavaScript, explicitly emit the necessary per-variant data and have its existing handler update the label and date region after the native availability update.

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

This helper only reads the schedule. It does not calculate physical availability or replace the state reader's prerequisites. Fetch or re-render missing variants through your theme's existing mechanism; do not treat an absent row as in-stock. Keep selectors scoped to the product section so a quick-view form does not update another product's button.

Do not assume there is a universal `variant:change` event. The tested Debut customization updated its `_updateAddToCart` handler; other themes have different handlers. Also, `product | json` does not automatically include custom metafields, and Shopify omits certain inventory properties from that product serialization. Emit required values explicitly. See [Shopify's JSON filter reference](https://shopify.dev/docs/api/liquid/filters/json).

## Display dates without overstating the promise

Use `promiseDate` as incoming-stock information. Multiple batches can have different dates, and the earliest batch can already be fully reserved by this listing. The current JSON does not identify the batch that will fulfill a new order.

For an incoming-stock schedule, filter to active preorder batches and show only entries whose listing supply is positive. Label it as an incoming schedule rather than “Your order ships on.” Format valid dates with Shopify's [date filter](https://shopify.dev/docs/api/liquid/filters/date), for example:

```liquid
{{ batch.promiseDate | date: '%B %d, %Y' | escape }}
```

Only run that expression after checking that `promiseDate` is present and valid. Agree on the display timezone and any warehouse processing buffer with the integration team. A blank or overdue date must not make an active preorder look like physical stock; suppress the promised date and use an agreed pending-date message. Do not mark a batch received merely because its date has passed.

For the next available stock-arrival estimate, use the net quantities and allocation policy described in [Select the currently available estimated arrival date](#select-the-currently-available-estimated-arrival-date). For a customer-specific shipping date, obtain a quantity-aware promise that also accounts for handling, shipping and any ship-together policy. Do not derive that promise from `batches[0]` or from a date sort alone.

## Test before publishing

Use an unpublished theme and test variants in a development store. Confirm backend and Shopify inventory separately; changing the JSON manually is not evidence that inventory synchronization works.

| Test | Expected result |
| --- | --- |
| Zero physical stock, active sellable preorder batch | `Pre-order`; add-to-cart submits the selected variant. |
| Physical stock and future stock coexist | `Add to cart` for one unit when physical stock is eligible and available. |
| Variant is sold out but still has a batch snapshot | Existing sold-out behavior wins. |
| Missing physical-availability input | `unknown`; no claim that inventory is physical or preorder. |
| Missing, empty, wrong-type, or incomplete JSON | No invented preorder state or date. |
| Received or cancelled batches remain in the array | They do not trigger preorder messaging. |
| External commitments equal or exceed incoming quantity | That batch does not establish positive preorder supply. |
| This listing reserves the earliest batch completely | With net batch data, select the next eligible batch with remaining quantity. Without it, show no buyer-specific date. |
| Requested quantity spans two available dated batches | Use the later date for the full quantity, or show the two quantities and arrival estimates explicitly. |
| A required batch has an absent or overdue date | Keep the preorder state if otherwise established; show an agreed pending-date message. |
| Shopify location ID matches a numeric Liquid location ID | Resolve and escape the correct name using string comparison. |
| Location ID is missing or not exposed in the selected variant | Use HotWax lookup or omit the label; do not change purchase state. |
| HotWax warehouse lookup, rename or lookup failure | Match the facility code, refresh the displayed name and preserve the fallback on failure. |
| Arrival date changes, including a date-only event | Freshly rendered content uses the new date without changing the purchase state solely because of the date. |
| Partial receipt leaves physical and future stock | Re-evaluate physical availability; do not keep `Pre-order` solely because a future batch remains. |
| Final receipt | With physical stock available, return to `Add to cart`. |
| Purchase-order cancellation and event replay | Read the current state; an older event must not restore a cancelled batch or old date. |
| Variant switch, deep link, quick view, and section reload | Label, date, price, and submitted variant ID stay aligned. |
| Quantity increase, existing cart quantity, or different market | Recalculate with the applicable quantity and inventory scope before promising fulfillment. |
| Continue-selling, untracked inventory, or another future-inventory type | Use a separately validated policy; the conditional sample returns `unknown`. |

The earlier HotWax sandbox sample verified FI-only preorder display, variant switching, sold-out behavior after cancellation, and a return to add-to-cart after final receipt. Those checks did not prove the mixed-stock decision or a buyer-specific batch date. Treat the two corresponding rows above as required acceptance cases for a production implementation.

## Troubleshoot common results

| Symptom | Check |
| --- | --- |
| Liquid returns blank data | Correct variant owner, namespace, key, type, store, and deployment. |
| Every size shows the same state | The theme may be reading the product or initial variant instead of the selected variant. |
| Button briefly changes and then resets | Integrate with the existing variant handler so a later native update does not overwrite the label. |
| Future stock exists but state is `unknown` | Confirm physical availability, finite inventory policy, complete batch fields, and absence of unsupported inventory types. |
| Theme shows preorder while stock can ship now | Remove the shortcut that equates any active batch with a preorder purchase. |
| Date remains stale on an open page | Refresh or re-render through the theme's normal mechanism. A metafield update does not push new HTML into an already open page. |
| Quantity in JSON differs from Shopify availability | The JSON excludes this listing's own commitments and contains no physical quantity. Do not force the two numbers to match. |

For deployment, provide the theme developer with the agreed namespace/key, an actual variant payload, the net batch quantities or authoritative physical-availability input, the fulfillment scope and allocation/date policy, the location mapping or lookup configuration, and the test results. Keep the customization unpublished until those inputs and the applicable acceptance cases are verified.
