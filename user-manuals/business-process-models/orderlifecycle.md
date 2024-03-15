# Order Lifecycle Business Process Model

The Order Lifecycle Process Model illustrates how HotWax Commerce orchestrates the journey of an order from creation to approval, routing, and fulfillment, ensuring efficiency and accuracy at every stage.

<figure><img src="../.gitbook/assets/order life cycle.png" alt=""><figcaption><p>Order lifecycle model</p></figcaption></figure>

## Order Creation

In HotWax Commerce there’s a dedicated `Import Orders` job that downloads new orders from eCommerce in bulk so that they can be further processed. These downloaded orders are automatically assigned a <mark style="color:orange;">**"Created"**</mark> status.

## Order Approval

{% hint style="info" %}
**Why is order approval necessary?**

Only orders with approved status are eligible for fulfillment in HotWax Commerce and orders without approval remain in the "Created" status.
{% endhint %}

**Order Approval Process:**

In HotWax Commerce, open orders can be automatically approved by the scheduled job `Approve Orders`. This job validates orders based on the specified parameters for order approval, which may include out-of-the-box parameters provided by HotWax Commerce or custom parameters set by retailers. If an order satisfies the criteria set for auto-approval, its status is automatically updated to <mark style="color:orange;">**"Approved"**</mark><mark style="color:orange;">.</mark>

For example, to approve orders, some of our clients use the Riskified App to check any fraudulent payments. In such cases, the Riskified App adds an ‘approved’ tag once all the security checks are done.

Similarly, retailers have the flexibility to set their own set of criteria to ensure only "Approved" orders are sent for fulfillment.

If an order fails to pass the approval, it remains in the “Created” status. Once these orders have satisfied the validation parameters, retailers have two options to mark them as "Approved":

* In the next scheduled run, the order approval job again picks orders that previously failed the approval to re-validate them, automatically marking them as "Approved" upon successful validation.
* Alternatively, Customer Service Representatives (CSRs) have the option to manually update the order status from "Created" to "Approved" to bypass the waiting period for the next job run.

## Check Order Type

HotWax Commerce supports the processing of various types of orders, including standard orders, BOPIS (Buy Online, Pick Up In Store) orders, Pre-Orders, and Backorders. Here’s a brief explanation of each type:

* **Standard orders:** Standard shipping orders placed online for home delivery.
* **BOPIS orders:** Orders placed online with the intention of picking up the items in-store.
* **Pre-Orders:** Orders placed for products that are not yet available for delivery and will be available on a future promised date.
* **Backorders:** Orders placed for products that are currently out-of-stock, with delivery scheduled for a future promised date.

Each order has its distinct fulfillment process, making it essential to recognize and handle them accordingly for efficient processing. Now, let's explore how HotWax Commerce processes different order types:

## Fulfillment of Standard Orders

All the approved standard orders are sent to the `Brokering Queue` which serves as a waiting area for orders awaiting processing. Orders in the brokering queue are analyzed and picked in the brokering run.

{% hint style="info" %}
**What are brokering runs:**

Brokering runs are scheduled by retailers to execute at specified intervals, allowing for effective and timely order routing. Retailers need to set a frequency and run time for brokering. For example, setting the frequency of a run to "Daily" and the runtime to "7 am" will execute the brokering run every morning at 7 am.
{% endhint %}

In the brokering run, the `order routing engine` looks for the best fulfillment location to fulfill orders from.

Learn more about [order brokering and routing](https://docs.hotwax.co/user-guides/orders/brokering/configurablerouting)

## Successful Inventory Allocation

A fulfillment location can primarily be a store or a warehouse location. Let’s understand what happens when the order routing engine allocates an order to a store and warehouse:

### Store Fulfillment Success and Order Completion:

If an order has been routed to a store location, it can be fulfilled using the <mark style="color:orange;">**HotWax Commerce Store Fulfillment App.**</mark>

After all the order items in the order are shipped, the order status is updated from <mark style="color:orange;">**“Approved” to "Completed"**</mark> within HotWax Commerce. A `Completed Orders` job in HotWax Commerce also updates tracking details and marks orders as <mark style="color:orange;">**“Fulfilled” in eCommerce.**</mark>

### Store Fulfillment Failure:

In the event that inventory cannot be located to fulfill an order during the fulfillment process, for reasons such as items being out of stock or damaged, a store manager has the authority to reject the fulfillment of the order.

These orders are then automatically sent to the brokering queue so that they can be rebrokered and routed to another fulfillment location.

When an order includes multiple items and inventory for one of them is unavailable for fulfillment, retailers have two options for handling the situation:

* **Partial Rejection:** Retailers can choose to partially reject the order by rejecting only the unavailable item. In this scenario, the order will be split, and the store will ship the available items while the unavailable item will be rebrokered.
* **Full Rejection:** Alternatively, retailers who prefer not to split the order, can reject all items in the order if any one item is unavailable for fulfillment. This ensures that the entire order is rejected, prompting the entire order to be rebrokered.

Learn more about [Store Fulfillment](https://docs.hotwax.co/user-guides/orders/fulfillment/shiporders).

### Warehouse Fulfillment Success and Order Completion:

If an order has been routed to a warehouse location, it can be fulfilled using external systems like NetSuite or a Warehouse Management System (WMS).

For orders fulfilled by an external system, HotWax Commerce receives the fulfillment status from the external system and marks the order as “Completed”. Once the order status is updated from <mark style="color:orange;">**“Approved” to “Completed”**</mark>, HotWax Commerce sends the tracking details (if they are provided by the external system) to eCommerce and marks the orders <mark style="color:orange;">**“Fulfilled” in eCommerce**</mark>.

### Warehouse Fulfillment Failure:

In the event, that a fulfillment location cannot fulfill an order that has been allocated to them and the fulfillment is rejected in the external system, a scheduled job in HotWax Commerce imports rejected orders and moves them back to the brokering queue to be reallocated to a new fulfillment location.

## Failed Inventory Allocation

When inventory is unavailable for orders at any location, the order routing engine relocates them from the `Brokering Queue` to the `Unfillable Parking`.During the next brokering run, orders present in the `Unfillable Parking` are given priority for inventory allocation before orders in the brokering queue. This ensures that the fulfillment of these orders is prioritized to prevent further delays.

### Auto-Cancellation

Given that orders in the Unfillable Parking didn't receive inventory during the initial brokering run, there's a possibility that these orders may go unallocated in future brokering runs. Therefore, retailers can specify the number of days to automatically cancel orders that could not be allocated. Throughout this period, these orders are automatically included in the brokering run and rebrokered so that inventory can be allocated for them.

In the event an order's auto-cancellation date is reached without successful inventory allocation, it automatically gets canceled. The order status is then automatically updated from <mark style="color:orange;">**“Approved” to “Canceled”**</mark> in HotWax Commerce.

### Avoid Auto-Cancellation

Retailers with prior knowledge of future inventory through their purchase orders can relocate these unfillable orders in bulk from  `Unfillable Parking` to the `Unfillable Hold Parking` using a CSV file. This action prevents these orders from being automatically canceled and allows them to be fulfilled in the future.

When the inventory arrives, retailers can include orders present in the "Unfillable Hold Parking" in their brokering run so that the order routing engine can allocate inventory for them.

## Fulfillment of BOPIS Orders

When customers place a BOPIS order on eCommerce, it is downloaded in HotWax Commerce alongside standard orders by the `Import Orders` job.

HotWax Commerce then checks the line item property and sends the order to the customer's preferred pickup location without brokering. This is because the fulfillment location is pre-selected for BOPIS orders by customers.

### BOPIS Fulfillment Success and Order Completion:

Store associates can view BOPIS orders in their <mark style="color:orange;">**BOPIS Fulfillment App**</mark> and begin preparing the order for customer pick-up.

After an order has been picked up by the customer, the order status is updated from <mark style="color:orange;">**“Approved” to “Completed”**</mark> within HotWax Commerce. A `Completed Orders` job in HotWax Commerce also marks orders as <mark style="color:orange;">**"Fulfilled" in eCommerce.**</mark>

### BOPIS Fulfillment Failure:

In the event that inventory cannot be located to fulfill a pick-up order during the fulfillment process, for reasons such as items being out of stock or damaged, a store manager has the authority to reject the fulfillment of the pick-up order.

In this scenario, an email is automatically sent to the customer for <mark style="color:orange;">**alternative fulfillment options such as pickup from another store or home delivery**</mark>. Retailers can configure these options based on their order fulfillment strategy.

Learn more about [BOPIS Fulfillment](https://docs.hotwax.co/user-guides/orders/bopis).

## Fulfillment of Pre-Orders

When customers place a Pre-Order order on eCommerce, it is downloaded in HotWax Commerce alongside standard orders through the `Import Orders` job.

Orders that have a pre-order tag and are assigned a promise date are automatically moved to the `Pre-Order Parking` in HotWax Commerce. This dedicated queue holds all pre-orders until their physical inventory is received. This ensures that the brokering process is not initiated for Pre-Orders that currently lack inventory but have inventory scheduled to arrive on a future date.

Once the pre-order inventory arrives and the promise date is reached, a scheduled `Run Daily` Pre-Order job in HotWax Commerce automatically releases all orders from the `Pre-Order Parking` to the `Brokering Queue`.This enables inventory to be allocated to them for fulfillment.

In the event, retailers want control over releasing and fulfilling their Pre-Orders, they can leverage the HotWax Commerce <mark style="color:orange;">**Pre-Order Management App**</mark> to manually release Pre-Orders from the `Pre-Order Parking` to the `Brokering Queue`.

Learn more about [Pre-Orders Management](https://docs.hotwax.co/user-guides/orders/pre-orders).

## Fulfillment of Backorders

Similar to Pre-Orders, Backorders are processed in the same manner within HotWax Commerce. The distinction lies in the fact that orders with a backorder tag and an assigned promise date are automatically moved to the `Backorder Parking` in HotWax Commerce. The releasing and brokering process for Backorders remains unchanged.

For Pre-Orders and Backorders, once they are present in the `Brokering Queue`, HotWax Commerce treats them as standard orders and allocates inventory for them by assigning the optimal fulfillment location.

## Order Cancellations

For various reasons, customers may decide to cancel their online orders or request CSRs for cancellations. The cancellation can either be made on the eCommerce platform and then updated in HotWax Commerce or cancellations can be made in HotWax Commerce and then updated in the eCommerce platform.

Given that online orders are initiated by customers on eCommerce platforms, HotWax Commerce recommends that cancellations should ideally be made on the eCommerce platform as well.

Now, let's explore what happens when orders are canceled on the eCommerce platform:

A dedicated job `Canceled Items` in HotWax Commerce downloads order cancellations from the eCommerce platform.

**For orders in the "Created" status:**

These are orders for which fulfillment has not yet commenced in HotWax Commerce. Once all canceled orders are downloaded, HotWax Commerce processes the file to verify the order IDs of the canceled orders and updates their status from <mark style="color:orange;">**"Created" to "Canceled"**</mark>.

**For orders in the "Approved" status:**

These are orders for which fulfillment has commenced in HotWax Commerce but they are not yet shipped. Once all canceled orders are downloaded, HotWax Commerce processes the file to verify the order IDs of the canceled orders and updates their status from <mark style="color:orange;">**“Approved” to “Canceled”**</mark>.

If an approved order has been allocated to the store, HotWax Commerce also automatically rejects it in the Store Fulfillment App.

Now, let's explore what happens when orders are canceled in HotWax Commerce:

Similar to order cancellations initiated on the eCommerce platform, in HotWax Commerce, orders can be canceled whether they are in the "Created" or "Approved" status, provided that the order has not yet been shipped. When an order is canceled, its status is updated from "Created" to "Canceled" or from "Approved" to "Canceled," depending on the current stage of the order.
