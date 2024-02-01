# Release Pre-orders

HotWax Commerce automatically handles the release and brokering of Shopify Pre-Orders, ensuring fulfillment from the most suitable location without requiring manual intervention. However, for merchandisers seeking greater control over online Pre-Order inventory, manual release becomes preferable over automatic processing. This preference often emerges among merchants managing both physical stores and eCommerce platforms. They opt for manual release to prevent allocating all available inventory solely to online Pre-Orders, reserving a portion for their physical stores instead.

## Automatic Release

HotWax Commerce strategically organizes all pre-orders in a dedicated queue until their physical inventory is received. This approach ensures that brokering processes are not initiated for orders lacking available inventory. Once the pre-order inventory arrives, HotWax Commerce transfers all orders from the pre-order queue to the brokering queue. This allows the system's engine to efficiently match the most suitable inventory with specific orders for fulfillment. To accommodate diverse retailer preferences, HotWax Commerce offers two methods for automatically releasing Pre-Orders:

1. **Daily Job**: Merchandisers can schedule this job through the `Job Manager App` > `Pre Order Page` by enabling the `Run Daily` checkbox in the auto-releasing card. This automated process releases pre-orders where the shipping date has arrived and inventory is available for release.
2. **Immediate Release:** This method doesn't require scheduling. Merchandisers can trigger instant release by clicking the `release` button associated with the `Release Preorders` job name. This action promptly releases all pre-orders in the queue, facilitating their allocation to the respective fulfillment locations.

<figure><img src="../.gitbook/assets/job-manager.hotwax.io_pre-order (4).png" alt=""><figcaption><p>Pre-order Automatic release</p></figcaption></figure>

## Manual Release

Manual release grants merchants precise control over order releases, allowing merchandisers to release pre-orders either by product or by order.

### Releasing by Products

When merchants opt to release Pre-Orders `By Product`, they gain control over available product inventory allocation. Merchants can determine the number of Pre-Orders they wish to release for online orders and how much inventory to reserve for their physical stores. For instance, if 100 units of inventory are received for 100 pre-orders, a retailer might choose to release 80 units for 80 pre-orders online and retain the remaining 20 units for in-store customers. The pending 20 pre-orders can be fulfilled using subsequent inventory from future purchase orders.

Here's the process for releasing pre-orders by products:

1. Navigate to the `Product` page in the `Pre-Order` App.
2. Search for the desired product by Product name or Product ID.
3. Merchandisers can view the badges displaying quantities of pre-orders, available stock, and orders in the brokering queue for that product.
4. To release a specific quantity, merchandisers can input the desired quantity in the `Pieces` field. Alternatively, to release all pre-ordered quantities, simply click on the badge to insert the total quantity at once.
5. Finally, click on the `release` button at the bottom of the page to release the ordered quantities from the pre-order queue to the brokering queue for fulfillment.
6. Merchandisers can also select the `Release to the Warehouse` button to specify the location for brokering. This action bypasses the brokering queue and directly releases the order from the pre-order queue to the warehouse for fulfillment.

{% embed url="https://youtu.be/VPfH4LqhR4k" %}
Release orders by products
{% endembed %}

7. Merchandisers can also cancel a specific quantity of pre-orders by clicking on the `cancel` button.

{% embed url="https://youtu.be/g_HdtM1RX8M" %}
Cancel orders by products
{% endembed %}

### Releasing by Orders:

When merchants specifically aim to release a particular customer's Pre-Order, they have the option to release it `By Order`.

This method becomes valuable when a customer requests expedited delivery, and if the `On-Order` inventory has been received. Opting for the `By Order` release method allows the merchant to choose that specific order and release it earlier than its estimated ship date. This action caters to meeting the customer’s delivery expectations promptly. Instead of releasing all Pre-Orders together on the estimated ship date, a merchant can prioritize the fulfillment of a particular Pre-Order. Here are the steps to release pre-orders by orders:

1. Navigate to the `Orders` Page in the `Pre-Order App`.
2. Search for specific orders using order ID, product name, style name, SKU customer name, UPCA, or external ID from the `search` bar.
3. Merchandisers can utilize filters for orders, such as:

* **Order After Date:** Lists all orders after the specified date.
* **Order Before Date:** Lists all orders before the specified date.
* **Promised After Date:** Lists orders with a promised date after a specific date.
* **Promise Before Date:** Lists orders before a specific promise date.
* **Loyalty Status:** Filters orders based on loyalty status awarded to customers based on their purchase history.

4. Once orders are filtered, merchandisers can select multiple orders or use the options icon on individual orders to perform actions like:

* **Release**: Initiate orders for brokering and fulfillment.
* **Release to a warehouse:** Release the pre-order to a specified location for fulfillment.

{% embed url="https://youtu.be/O45su6_H53w" %}
Release Individual Orders
{% endembed %}

{% embed url="https://youtu.be/co9vgepWXWc" %}
Release orders in Bulk
{% endembed %}

* **Edit Promise date:** Set a new promise date for these orders, which will be used for inventory allocation and order fulfillment.

{% embed url="https://youtu.be/3wIz-bWpILY" %}

* **Cancel:** Cancel all selected orders with the cancel button available at the bottom right.

{% embed url="https://youtu.be/e69ppcQ82PM" %}
Cancel orders in Bulk
{% endembed %}
