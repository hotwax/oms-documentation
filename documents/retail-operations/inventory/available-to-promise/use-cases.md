---
description: Apply sourcing rules to common channel, product, pickup, and shipping scenarios.
---

# Apply sourcing rule use cases

Use these recipes as starting points. Replace the sample tags, facility groups, and channels with values from your product store. For complete form instructions, use the linked configuration pages.

## Choose a strategy

| Business goal | Suggested recipe |
| --- | --- |
| Hold back a different amount of inventory by sales channel | [Set different thresholds by channel](#set-different-thresholds-by-channel) |
| Give a product exception a different threshold | [Override a broad product rule](#override-a-broad-product-rule) |
| Keep seasonal stock available for walk-in customers | [Protect inventory in high-demand regions](#protect-inventory-in-high-demand-regions) |
| Reserve inventory at individual facilities | [Protect regional inventory with safety stock](#protect-regional-inventory-with-safety-stock) |
| Keep a launch available in stores without store shipping | [Reserve new products for stores](#reserve-new-products-for-stores) |
| Keep direct-only products off a marketplace | [Keep products off a marketplace](#keep-products-off-a-marketplace) |
| Offer customized products only from equipped facilities | [Limit customized products to capable facilities](#limit-customized-products-to-capable-facilities) |
| Prevent pickup for difficult-to-handle products | [Disable pickup for bulky products](#disable-pickup-for-bulky-products) |
| Publish a regional inventory pool to Shopify | [Publish regional inventory to Shopify](#publish-regional-inventory-to-shopify) |

## Protect sellable inventory

### Set different thresholds by channel

**Situation:** Your direct website can sell closer to available inventory than a marketplace that penalizes inventory rejections.

Use this recipe when each channel needs its own buffer. A threshold is deducted after HotWax Commerce combines facility inventory for that channel.

| Rule | Channel | Threshold |
| --- | --- | --- |
| Direct website buffer | Direct website | 5 |
| Marketplace buffer | Marketplace | 15 |

1. Create the two rules in `Sourcing` > `Threshold`.
2. Select the matching channel and enter the listed `Threshold` value for each rule.
3. Save both rules.

**Expected result:** The direct website has a five-unit channel buffer and the marketplace has a 15-unit buffer after its contributing facility inventory is combined.

**Validate:** Review each rule's channel and threshold value in [Configure threshold rules](threshold-rules.md).

### Override a broad product rule

**Situation:** All kids' shoes need a five-unit buffer, but sale kids' shoes need a larger buffer.

Use this recipe when the same product can match a broad rule and a specific exception.

| Sequence | Product tags | Threshold |
| --- | --- | --- |
| First | `Kids` and `Shoes` | 5 |
| Last | `Kids`, `Shoes`, and `Sale` | 10 |

1. Create both threshold rules in `Sourcing` > `Threshold`, using `AND` so every listed tag must match.
2. Use the sequence button to place the broad `Kids` and `Shoes` rule first.
3. Place the specific `Kids`, `Shoes`, and `Sale` rule last, then save the sequence.

**Expected result:** The last matching rule sets the final value, so sale kids' shoes receive a threshold of 10.

**Validate:** Confirm the sequence and matching product counts in [Configure threshold rules](threshold-rules.md).

### Protect inventory in high-demand regions

**Situation:** Mountain stores need winter jackets for walk-in customers, while lower-demand stores can still ship them.

Use this recipe when a regional demand pattern should change shipping eligibility without blocking every store.

1. Create a facility group for the high-demand mountain stores.
2. In `Sourcing` > `Shipping` > `Product and facility`, create a rule with `Shipping` off.
3. Include the mountain-store group and products tagged `Winter jackets`, then save.

**Expected result:** Mountain stores do not ship winter jackets. Lower-demand stores remain available for shipping.

**Validate:** Confirm the impacted facility count and product scope in [Configure shipping rules](shipping-rule.md).

### Protect regional inventory with safety stock

**Situation:** All stores need a small inventory reserve, but mountain stores need a larger jacket reserve during the season.

Use this recipe when inventory must be reserved at individual facilities. Unlike a channel-level threshold, sourcing safety stock is deducted per facility.

| Sequence | Facility and product scope | Safety stock |
| --- | --- | --- |
| First | All stores and all products | 5 |
| Last | Mountain stores and `Winter jackets` | 12 |

1. Create the broad all-store safety stock rule first in `Sourcing` > `Safety stock`.
2. Create the mountain-store jacket rule and place it last in the sequence.
3. Save the sequence.

**Expected result:** The specific rule sets safety stock to 12 for mountain-store jackets. For a facility with QOH of 30, that rule leaves at most 18 units before other deductions.

**Validate:** Confirm the sequence, facility count, and safety stock values in [Configure safety stock rules](safety-stock-rules.md).

## Control where products sell

### Reserve new products for stores

**Situation:** Limited-edition sneakers should remain available in stores during a launch, but should not ship from stores.

Use this recipe when warehouse shipping must remain available while store shipping is off.

1. Tag the sneakers and create a facility group for retail stores.
2. In `Sourcing` > `Shipping` > `Product and facility`, create a rule with `Shipping` off.
3. Include the retail-store group and the sneaker tag. Do not include the warehouse group.
4. Confirm the impacted facility count and save.

**Expected result:** Limited-edition sneakers remain available in stores, warehouse shipping remains available, and stores do not ship the sneakers.

**Validate:** Confirm that the warehouse is outside the rule's facility scope in [Configure shipping rules](shipping-rule.md).

### Keep products off a marketplace

**Situation:** Products tagged `Direct only` should not be available for marketplace shipping.

Use this recipe when a product is sold through your direct website but must not be published for shipping on a marketplace channel.

1. In `Sourcing` > `Shipping` > `Product and channel`, create a rule with `Shipping` off.
2. Select the marketplace channel and include products tagged `Direct only`.
3. Save the rule and use `Run now` from the `Schedule` card when the change cannot wait for the recurring run.

**Expected result:** `Direct only` products are not published for shipping on the marketplace channel.

**Validate:** Review the channel and product scope in [Configure shipping rules](shipping-rule.md), then follow [Schedule sourcing rules](schedule-atp-rules.md) to run the output.

### Limit customized products to capable facilities

**Situation:** Only a facility group with the required equipment can fulfill customized products.

Use this recipe when the same equipped facilities must be the only locations that can ship or offer pickup for a product.

1. Create a facility group for the equipped facilities and tag the customized products.
2. In `Sourcing` > `Shipping` > `Product and facility`, create a rule with `Shipping` off for all facility groups, then add the equipped group under `Excluded`.
3. Repeat the pattern in `Sourcing` > `Store pickup` > `Product and facility` with `Store pickup` off.
4. Review the store pickup `Preview` and save both rules.

**Expected result:** Only the facility group with the required equipment can ship or offer pickup for customized products.

**Validate:** Review the shipping rule and store pickup preview in [Configure shipping rules](shipping-rule.md) and [Configure store pickup rules](store-pickup-rules.md).

### Disable pickup for bulky products

**Situation:** Furniture tagged `Bulky` cannot be selected for pickup.

Use this recipe when a product cannot be handled at pickup locations.

1. In `Sourcing` > `Store pickup` > `Product and facility`, create a rule with `Store pickup` off.
2. Select all facility groups, or include the groups that offer pickup, and include products tagged `Bulky`.
3. Review the `Preview` and save.

**Expected result:** Customers cannot select pickup for furniture tagged `Bulky`.

**Validate:** Use the rule's `Preview` to confirm that matching furniture has `Allow Pickup` turned off in [Configure store pickup rules](store-pickup-rules.md).

## Publish inventory by channel

### Publish regional inventory to Shopify

**Situation:** A connected Canadian Shopify shop needs inventory from a Canadian warehouse and eligible Canadian stores.

Use this recipe when a regional storefront needs a different inventory pool from other Shopify shops.

1. In `Sourcing` > `Channels`, create the `Canada online` inventory channel and link one configuration facility.
2. Assign the central warehouse and eligible Canadian stores to the channel.
3. Set a [channel threshold](threshold-rules.md) for `Canada online` in `Sourcing` > `Threshold`.
4. On `Sourcing` > `Channels`, open `Publish` and find the connected Canadian Shopify shop.
5. Select `Run time`, `Frequency`, and `Inventory channel` = `Canada online`.
6. Select `Save changes` and confirm the save.
7. Run the threshold rule schedule, then run `Import Product Facility` followed by `Process Bulk Import Files` to apply the threshold output before publication. Follow [Verify sourcing changes](#verify-sourcing-changes) for the detailed import sequence and [Import Product Facility](../../workflow/job-workflows/inventory.md#import-product-facility) for the workflow.
8. Return to the shop card. Use the overflow menu and select `Run now` for an immediate publish, or wait for its saved schedule.

**Expected result:** After the threshold output is successfully imported and the publish job completes, the Canadian Shopify shop publishes inventory from the central warehouse and eligible Canadian stores with the channel threshold applied.

**Validate:** Confirm the channel facilities and threshold, the Canadian Shopify shop's saved publish card, `Sourcing` > `Inventory` > `Channel` > `Reconciliation`, and `Inventory push history` or the publish job's `History`.

## Verify sourcing changes

Use this sequence after changing any sourcing rule. It verifies the generated output and, when available, the resulting inventory values.

1. Open the affected rule category's `Schedule` card. Run the schedule or select `Run now`. The run generates and uploads the product-facility CSV, but does not apply it by itself.
2. Run `Import Product Facility`, followed by `Process Bulk Import Files`, to import and process the output. See [Import Product Facility](../../workflow/job-workflows/inventory.md#import-product-facility).
3. With component release `v6.0.0` or later, open `Sourcing` > `Inventory`, use the `Channel` scope, and review `Online ATP`, its computation, `Reconciliation`, and inventory push `History`.
4. On earlier releases, review sourcing execution history and the connected system instead.

**Expected result:** The processed product-facility output reflects the new sourcing rule, and the channel inventory or connected-system history shows the resulting publish activity.

**Validate:** Review `Execution history` in [Schedule sourcing rules](schedule-atp-rules.md), then use [Review inventory](inventory.md) when your release provides the `Inventory` menu item.
