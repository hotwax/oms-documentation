---
description: Apply sourcing rules to common channel, product, pickup, and shipping scenarios.
---

# Apply sourcing rule use cases

Use these examples as starting points. Replace the sample tags, features, facility groups, and channels with values from your product store.

## Set different thresholds by channel

Create separate rules when sales channels need different inventory buffers.

1. Open `Sourcing` > `Threshold`.
2. Create a rule for the first channel.
3. Enter the threshold value and select that channel.
4. Add product tags or features when the threshold should not apply to every product.
5. Save the rule.
6. Repeat the steps for each channel that needs a different threshold.

For example, use a higher threshold on a marketplace with strict rejection penalties and a lower threshold on your direct website.

## Override a broad product rule

Use rule priority when product selections overlap.

1. Create a broad threshold rule for products tagged `Kids` and `Shoes`.
2. Create a second rule for products tagged `Kids`, `Shoes`, and `Sale`.
3. Select `AND` for the included tags when every tag must match.
4. Use the sequence button to place the broad rule first.
5. Place the sale rule after it.
6. Save the sequence.

The sale rule sets the final value for products that match both rules.

## Reserve new products for stores

Block store shipping for a launch while keeping warehouse shipping available.

1. Tag the launch products in the product catalog.
2. Create a facility group that contains the retail stores.
3. Open `Sourcing` > `Shipping` > `Product and facility`.
4. Create a shipping rule and turn `Shipping` off.
5. Include the retail-store facility group.
6. Include the launch product tag.
7. Review the button that shows the number of impacted facilities.
8. Save the rule.

Do not include the warehouse group in the blocked scope.

## Keep products off a marketplace

Block selected products on one inventory channel while leaving them available on other channels.

1. Tag the products that should remain exclusive to your direct website.
2. Open `Sourcing` > `Shipping` > `Product and channel`.
3. Create a shipping rule and turn `Shipping` off.
4. Select the marketplace channel.
5. Include the direct-only product tag.
6. Save the rule.
7. Use `Run now` from the `Schedule` card when the change must be applied before the next recurring run.

## Limit customized products to capable facilities

Create separate shipping and pickup rules when only selected facilities can handle customized products.

1. Create a facility group that contains the capable facilities.
2. Tag the customized products.
3. Open `Sourcing` > `Shipping` > `Product and facility`.
4. Create a rule that blocks shipping for all facility groups.
5. Add the capable group under `Excluded`.
6. Include the customized product tag.
7. Save the rule.
8. Repeat the pattern under `Sourcing` > `Store pickup` > `Product and facility`.
9. Review the Store pickup `Preview` before saving.

The exclusion removes the capable facilities from the blocked scope.

## Protect inventory in high-demand regions

Block store shipping in a region where walk-in demand is high.

1. Tag the seasonal products.
2. Create a facility group for stores in the high-demand region.
3. Open `Sourcing` > `Shipping` > `Product and facility`.
4. Create a rule and turn `Shipping` off.
5. Include the regional facility group.
6. Include the seasonal product tag.
7. Save the rule.

Archive the rule when the seasonal restriction ends.

## Disable pickup for bulky products

Block pickup for products that cannot be handled at pickup locations.

1. Tag the bulky products.
2. Open `Sourcing` > `Store pickup` > `Product and facility`.
3. Create a rule and turn `Store pickup` off.
4. Select all facility groups, or include the groups that offer pickup.
5. Include the bulky product tag.
6. Review the `Preview`.
7. Save the rule.
