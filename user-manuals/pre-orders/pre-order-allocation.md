# Pre-order Allocation

Once a customer places an order for a pre-order item, the sales order is automatically allocated to the purchase order inventory on a first-in, first-out (FIFO) basis. This ensures that customers who place orders first receive their inventory first. However, there are instances when merchandisers need to manually manage these allocations, either due to errors or the need for reallocation. HotWax Commerce provides the flexibility for merchandisers to manually manage purchase orders through the following methods:

## Review Allocations

The Review Allocations page allows users to review associated sales orders for a selected item, providing an overview of the total quantity ordered and consumed ATP for that specific purchase order item. Merchandisers can view all the sales orders associated with that purchase order to get holistic information about who ordered how much quantity and the promise date for the order. Reviewing allocations involves the following steps:

1. Navigate to the `Procurement` > `Purchase Orders View` > `Purchase Order Detail` page
2. Click on `Review Allocation` in the line item field to view all associated orders with that purchase order.
3. This will open up a `review allocations` page where merchandisers get a holistic view of all the sales orders allocated with that purchase order and take multiple actuons such as:

{% embed url="https://youtu.be/MqQGtQRkkDQ" %}
Revoew Allocations
{% endembed %}

## Allocate Sales Orders

In cases where sales orders are not allocated to the purchase order due to any error or if the relevant purchase order is canceled, resulting in unallocated sales orders, merchandisers can manually allocate sales orders to purchase order items efficiently. Here's how:

1. Navigate to the `Procurement` > `Purchase Orders View` > `Purchase Order Detail` page.
2. Click `Allocate Sales Order` in the line item field, opening a confirmation pop-up. Click yes to view all unallocated sales orders for that product.
3. Select the sales orders to associate with the existing purchase order. This will allocate the sales order with the existing purchase order, and the order will be fulfilled accordingly.

{% embed url="https://youtu.be/uYNI3zrTzxo" %}
Allocate Sales Orders
{% endembed %}

## Sync Date with SO

Whenever there's a change in the arrival date of the purchase order items, the same arrival date needs to be synced with the sales order. This ensures an accurate view of when an order needs to be fulfilled, and customers are informed about changes in their product's arrival date. Merchandisers can do this through the following steps:

1. Navigate to the `Procurement` > `Purchase Orders View` > `Purchase Order Detail` page
2. Click on `Sync Date with SO` in the respective line item field which opens a confirmational pop-up.
3. Click `yes` to sync the date for all sales orders associated with the existing purchase order.

{% embed url="https://youtu.be/6VvY4l1cJfE" %}
Sync SO Date changes
{% endembed %}

## Remove Allocations

Merchandisers may sometimes make mistakes in fulfilling orders with the incorrect purchase order, leading to double allocation of ATP. This can be rectified by removing incorrect allocations. Here's how:

1. Navigate to the `Procurement` > `Purchase Orders View` > `Purchase Order Detail` page
2. Click `Remove Allocation` in the line item field to open the Remove Allocations page.
3. This will display all the sales orders for which the inventory is allocated. Merchandisers can select the sales orders they want to remove the allocation for by clicking on the checkbox and then clicking on the `Remove Allocations` button.

{% embed url="https://youtu.be/XWbW_jeiZYM" %}
Remove Allocations
{% endembed %}
