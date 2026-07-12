# Sourcing rule examples

These examples show how to combine sourcing rules in the **Order Routing App**. Use product tags and facility groups that match your catalog and fulfillment network.

## Protect more inventory for a marketplace

Create separate [threshold rules](threshold.md) for each inventory channel. Apply a larger threshold to a marketplace with stricter cancellation or late-fulfillment penalties. Apply a smaller threshold to the direct-to-consumer channel when more inventory can be offered there.

## Prioritize a specific product segment

Create a broad threshold rule for a category such as `Kids shoes`, then create a more specific rule for products tagged `Kids shoes` and `Sale`. Put the broad rule first and the specific rule after it so the specific configuration refines the result.

## Keep a launch product in stores

Create a [shipping rule](shipping.md) on the `Product and facility` tab. Include the launch-product tag and the retail-store facility group, then turn `Shipping` off. Warehouse fulfillment remains available when warehouses are not included in the suppression rule.

## Sell a product only on selected channels

Create a shipping rule on the `Product and channel` tab. Include the product tag, select the marketplace inventory channels, and turn `Shipping` off. Do not include the direct-to-consumer inventory channel where the product should remain available.

## Limit pickup for bulky products

Create a [store pickup rule](store-pickup.md). Include the bulky-product tag, select the applicable pickup facility groups or inventory channels, and turn `Store pickup` off.

## Reserve store inventory for walk-in demand

Create a [safety stock rule](safety-stock.md) for the retail-store facility group. Set the quantity that each store should retain and narrow the rule by product tag when only seasonal or high-demand products need the reserve.
