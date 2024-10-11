# Kit Products

## Kit Products

Kit products are products that are sold as a set or bundle, comprising multiple individual items. Here is an overview of how kit products will be displayed on the fulfillment application:

### Kit Badge:

When an order includes a kit product, each line item representing that kit in the order will have a "kit" badge indicator. This badge signifies that the line item is a kit that contains physical components.

## View Kit Components:

By default, kit line items are not shown directly on the main orders card. Instead, there is a list icon next to the order line item that indicates it's a kit product.

**To view all the kit products included in the kit line items within an order:**

* Click on the list icon located on the right-hand side of the order line item.
* The list expands and opens up the details of the kit with bundled items included in that kit.

This helps in managing orders efficiently by providing clear indications of kit products without cluttering the main order view. It also allows users to easily access detailed information about kit contents when necessary.

## Kit Product Component Rejection

Managing kits, which bundle multiple items into one offering, has traditionally been challenging when a component is unavailable. Customers expect to receive the entire kit, so if even one item is missing, the whole order must be rejected. However, tracking which component caused the rejection is essential to maintaining accurate inventory levels.\
With HotWax Commerce’s Fulfillment App, store associates can specify rejection reasons for each component when rejecting a kit order.

### Example Scenario:

For instance, if a "Sunglasses Travel Kit" includes sunglasses, a cleaning cloth, and a protective case, and the cleaning cloth is out of stock, the associate can reject the kit while marking only the cloth as unavailable. This targeted approach updates the inventory for the unavailable item, while the other components, like the sunglasses and case, remain unaffected.

### Steps to Reject Kit Order by Specifying the Component Rejection Reason

1. **Access the Fulfillment App**: Open the HotWax Commerce `Fulfillment App` on your device.
2. **Navigate to the In Progress Section**: Locate and `select` the "In Progress" section to view current orders.
3. **Select the Relevant Order**: Identify the specific kit order that requires adjustment and `click` on it.
4. **Choose the Bin Option**: Within the order details, click on the `bin icon` to access the rejection options.
5. **Specify Rejection Reasons**: A `list` of reasons will appear for rejecting the component. You can select from options such as "Not in Stock," "Mismatch," "Damaged," or "No Variance," depending on the situation. `Select` the appropriate reason.
6. **Check the Item Causing the Issue**: Before submission, check the box next to the item causing the issue to ensure that inventory variance is recorded only for the problematic component.
7. **Submit the Rejection**: `Click` on the `save` button to reject the order.

<figure><img src="../.gitbook/assets/fulfillment-dev.hotwax.io_in-progress (3) 2.png" alt=""><figcaption></figcaption></figure>

This ensures more accurate inventory adjustments at both the component and kit levels, avoiding stock inaccuracies and improving overall fulfillment efficiency. The kit’s availability is adjusted only for the products that have variance without impacting the inventory of the other products.
