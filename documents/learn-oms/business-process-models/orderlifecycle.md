---
description: >-
  The Order Lifecycle BPM illustrates how HotWax Commerce orchestrates the
  journey of an order from creation to approval, routing, and fulfillment,
  ensuring accuracy at every stage.
---

# Order Lifecycle

Customers place their online orders on eCommerce platforms. The order lifecycle in HotWax Commerce starts when these orders are downloaded from eCommerce to HotWax Commerce.

<figure><img src="../.gitbook/assets/OrderLifeCyclebpm.png" alt=""><figcaption><p>Order lifecycle business process model</p></figcaption></figure>

## Order Creation

In HotWax Commerce there’s a dedicated `Import Orders` job that downloads new orders from eCommerce in bulk so that they can be further processed. These downloaded orders are automatically assigned a <mark style="color:orange;">**"Created"**</mark> status.

## Order Approval

{% hint style="info" %}
**Why is order approval necessary?**

Only orders with approved status are eligible for fulfillment in HotWax Commerce and orders without approval remain in the <mark style="color:orange;">**"Created"**</mark> status.
{% endhint %}

**Order approval process:**

In HotWax Commerce, open orders can be automatically approved by the scheduled job `Approve Orders`. This job validates orders based on the predefined criteria for order approval, which may include out-of-the-box or custom criteria set by retailers. If an order satisfies the criteria set for auto-approval, its status is automatically updated to <mark style="color:orange;">**"Approved"**</mark><mark style="color:orange;">.</mark>

For example, some of our customers use the Riskified App to check for fraudulent payments. If the payments are found to be non-fraudulent, orders can be auto-approved.

If an order fails to pass the approval, it remains in the <mark style="color:orange;">**“Created”**</mark> status. Once these orders have satisfied the validation criteria, retailers have two options to approve them:

* In the next scheduled run, the order approval job again picks orders that previously failed the approval to re-validate them, automatically marking them as <mark style="color:orange;">**"Approved"**</mark> upon successful validation.
* Alternatively, Customer Service Representatives (CSRs) have the option to manually update the order status from <mark style="color:orange;">**"Created"**</mark> to <mark style="color:orange;">**"Approved"**</mark> to bypass the waiting period for the next job run.

## Check Order Type

HotWax Commerce supports the processing of various types of orders, including standard orders, BOPIS (Buy Online, Pick Up In Store) orders, Pre-Orders, and Backorders. Here’s a brief explanation of each type:

* **Standard orders:** Standard shipping orders placed online for home delivery.
* **BOPIS orders:** Orders placed online with the intention of picking up the items in-store.
* **Pre-Orders:** Orders placed for products that are not yet available for delivery and will be available on a future promised date.
* **Backorders:** Orders placed for products that are currently out-of-stock, with delivery scheduled for a future promised date.

Each order has its distinct fulfillment process, making it essential to recognize and handle them accordingly for efficient processing. Now, let's explore how HotWax Commerce processes different order types:

## Fulfillment of Standard Orders

All the approved standard orders are sent to the [`Brokering Queue`](https://docs.hotwax.co/documents/v/system-admins/administration/facilities/manage-parkings) which serves as a waiting area for orders awaiting processing. Orders in the brokering queue are analyzed and picked in the brokering run.

{% hint style="info" %}
**What are brokering runs:**

Brokering runs are scheduled by retailers to execute at specified intervals, allowing for effective and timely order routing. Retailers need to set a frequency and run time for brokering. For example, setting the frequency of a run to "Daily" and the runtime to "7 am" will execute the brokering run every morning at 7 am.
{% endhint %}

In the brokering run, the `order routing engine` looks for the best fulfillment location to fulfill orders from.

Learn more about [order brokering and routing](https://docs.hotwax.co/documents/retail-operations/orders/brokering)

## Successful Inventory Allocation

A fulfillment location can primarily be a store or a warehouse location. Let’s understand what happens when the order routing engine allocates an order to a store and warehouse:

### Store Fulfillment Success and Order Completion:

If an order has been routed to a store location, it can be fulfilled using the HotWax Commerce <mark style="color:orange;">**Store Fulfillment App.**</mark>

After all the order items in the order are shipped, the order status is updated from <mark style="color:orange;">**“Approved” to "Completed"**</mark> in HotWax Commerce. A `Completed Orders` job in HotWax Commerce also updates tracking details and marks orders as <mark style="color:orange;">**“Fulfilled” in eCommerce.**</mark>

### Store Fulfillment Failure:

In the event store associates do not find the inventory to fulfill an order, for reasons such as items being out of stock or damaged, a store manager has the authority to reject that order.

Rejected orders are then automatically sent to the `Rejected Queue`. A dedicated brokering run is performed to check the orders in the `Rejected Queue` and reallocate inventory to them.

When an order includes multiple items and inventory for one of them is unavailable for fulfillment, retailers have two options for handling the situation:

* **Partial rejection:** Retailers can choose to partially reject the order by rejecting only the unavailable item. In this scenario, the order will be split, and the store will ship the available items while the unavailable item will be rebrokered.
* **Full rejection:** Alternatively, retailers who prefer not to split the order, can reject all items in the order if any one item is unavailable for fulfillment. This ensures that the entire order is rejected, prompting the entire order to be rebrokered.

Learn more about [Store Fulfillment](https://docs.hotwax.co/documents/v/store-operations/orders/fulfillment/shiporders)

### Warehouse Fulfillment Success and Order Completion:

If an order has been routed to a warehouse location, it can be fulfilled using external systems like NetSuite or a Warehouse Management System (WMS).

For orders fulfilled by an external system, HotWax Commerce receives the fulfillment status from the external system and marks the order as <mark style="color:orange;">**“Completed”**</mark>. Once the order status is updated from <mark style="color:orange;">**“Approved” to “Completed”**</mark>, HotWax Commerce sends the tracking details (if they are provided by the external system) to eCommerce and marks the orders <mark style="color:orange;">**“Fulfilled” in eCommerce**</mark>.

### Warehouse Fulfillment Failure:

In the event, that a fulfillment location cannot fulfill an order that has been allocated to them and the fulfillment is rejected in the external system, a scheduled job in HotWax Commerce imports rejected orders and automatically moves them to the `Rejected Queue`. A dedicated brokering run is performed to check the orders in the `Rejected Queue` and reallocate inventory to them.

## Failed Inventory Allocation

When inventory is unavailable for orders at any location, the order routing engine moves them from the `Brokering Queue` to the [`Unfillable Parking`](https://docs.hotwax.co/documents/v/system-admins/administration/facilities/manage-parkings). A dedicated brokering run is performed to check the orders in the `Unfillable Parking` and allocate inventory to them.

### Auto-Cancellation

**Assigning auto-cancel date**

A scheduled job in HotWax Commerce assigns an auto-cancellation date on orders present in the `Unfillable Parking`. Retailers have the option to configure the timeframe after which unfillable orders are automatically canceled, the default period is set to 7 days.

**Auto-cancellation of unfillable orders**

A scheduled job checks if the auto-cancellation date for unfillable orders has been reached and automatically cancels them once the date is reached. The order status is then automatically updated from <mark style="color:orange;">**“Approved” to “Canceled”**</mark> in HotWax Commerce.

### Avoid Auto-Cancellation

Retailers with prior knowledge of future inventory through their purchase orders can move these unfillable orders in bulk from `Unfillable Parking` to the [`Unfillable Hold Parking`](https://docs.hotwax.co/documents/v/system-admins/administration/facilities/manage-parkings) using a CSV file. This action prevents these orders from being automatically canceled and allows them to be fulfilled in the future.

When the inventory arrives, retailers can schedule a brokering run that looks at the orders present in the `Unfillable Hold Parking` and allocates inventory for them.

## Fulfillment of BOPIS Orders

When customers place a BOPIS order on eCommerce, it is downloaded in HotWax Commerce alongside standard orders by the `Import Orders` job.

HotWax Commerce provides an Integration App that can be installed on Shopify. When a customer places a BOPIS order, the app adds a custom tag on line items to specify that it is a BOPIS order.

HotWax Commerce then checks the custom tag on orders. If the tag is present on an order, it is automatically sent to the customer's preferred pickup location without brokering. This is because the fulfillment location is pre-selected for BOPIS orders by customers.

### BOPIS Fulfillment Success and Order Completion:

Store associates can view BOPIS orders in their <mark style="color:orange;">**BOPIS Fulfillment App**</mark> and begin preparing the order for customer pick-up.

Once the order is prepared, customer receives an email informing them that their order is ready for pickup. After an order has been picked up by the customer, the order status is updated from <mark style="color:orange;">**“Approved” to “Completed”**</mark> in HotWax Commerce. A `Completed Orders` job in HotWax Commerce also marks orders as <mark style="color:orange;">**"Fulfilled" in eCommerce.**</mark>

### BOPIS Fulfillment Failure:

In the event store associates cannot find the inventory to fulfill a pick-up order, for reasons such as items being out of stock or damaged, a store manager has the authority to reject that order. All the rejected BOPIS orders are then automatically sent to the [`BOPIS Rejected Queue`](https://docs.hotwax.co/documents/v/system-admins/administration/facilities/manage-parkings).

In this scenario, an email is automatically sent to the customer for <mark style="color:orange;">**alternative fulfillment options such as pickup from another store or home delivery**</mark>. Retailers can configure these options based on their order fulfillment strategy.

Learn more about [BOPIS Fulfillment](https://docs.hotwax.co/documents/v/store-operations/orders/bopis)

## Fulfillment of Pre-Orders

Pre-Orders placed on eCommerce are downloaded in HotWax Commerce alongside standard orders by the `Import Orders` job.

When a customer places a Pre-Order, HotWax Commerce Integration App adds a pre-order tag on line items to specify that it is a Pre-Order item.

HotWax Commerce checks if an order has a pre-order tag applied and automatically moves it to the `Pre-Order Parking`. This dedicated queue holds all pre-orders until their physical inventory is received. This ensures that the brokering process is not initiated for Pre-Orders that currently lack inventory but have inventory scheduled to arrive on a future date.

Once the pre-order inventory arrives and the promise date is reached, a dedicated `Auto Releasing` Pre-Order job in HotWax Commerce automatically releases all orders from the `Pre-Order Parking` to the `Brokering Queue`.This enables inventory to be allocated to them for fulfillment.

In the event, retailers want control over releasing and fulfilling their Pre-Orders, they can leverage the HotWax Commerce <mark style="color:orange;">**Pre-Order Management App**</mark> to manually release Pre-Orders from the `Pre-Order Parking` to the `Brokering Queue`.

Learn more about [Pre-Orders Management](https://docs.hotwax.co/documents/v/retail-operations/orders/pre-orders)

## Fulfillment of Backorders

Similar to Pre-Orders, Backorders are processed in the same manner in HotWax Commerce. The distinction lies in the fact that orders with a backorder tag are automatically moved to the `Backorder Parking` in HotWax Commerce. The releasing and brokering process for Backorders is the same as for Pre-Orders.

For Pre-Orders and Backorders, once they are moved in the `Brokering Queue`, HotWax Commerce treats them as standard orders and allocates inventory for them by assigning the optimal fulfillment location.

## Order Cancellations

For various reasons, customers may decide to cancel their online orders or request CSRs for cancellations. The cancellation can either be made on the eCommerce platform and then updated in HotWax Commerce or cancellations can be made in HotWax Commerce and then updated in the eCommerce platform.

Given that online orders are initiated by customers on eCommerce platforms, HotWax Commerce recommends that cancellations should ideally be made on the eCommerce platform as well.

Now, let's explore what happens when orders are canceled on the eCommerce platform:

A dedicated job `Canceled Items` in HotWax Commerce downloads order cancellations from the eCommerce platform.

**For orders in the "Created" status:**

These are orders for which fulfillment has not yet commenced in HotWax Commerce. Once all canceled orders are downloaded from eCommerce, HotWax Commerce processes the file to verify the order IDs of the canceled orders and updates their status from <mark style="color:orange;">**"Created" to "Canceled".**</mark>

**For orders in the "Approved" status:**

These are orders for which fulfillment has commenced in HotWax Commerce but they are not yet shipped. Once all canceled orders are downloaded, HotWax Commerce processes the file to verify the order IDs of the canceled orders and updates their status from <mark style="color:orange;">**“Approved” to “Canceled”.**</mark>

If an approved order has been allocated to the store, HotWax Commerce also automatically rejects it in the Store Fulfillment App.

**Orders canceled in HotWax Commerce:**

Similar to order cancellations initiated on the eCommerce platform, in HotWax Commerce, orders can be canceled whether they are in the "Created" or "Approved" status, provided that the order has not yet been shipped. When an order is canceled, its status is updated from <mark style="color:orange;">**"Created" to "Canceled"**</mark> or from <mark style="color:orange;">**"Approved" to "Canceled,"**</mark> depending on the current stage of the order.

## Managing Completed and Canceled Orders from eCommerce

When orders are downloaded from eCommerce into HotWax Commerce in a <mark style="color:orange;">**“Completed” or “Canceled”**</mark> status, they are automatically placed in the `General Ops Parking`.

**So, which orders move to the** `General Ops Parking` **?**

* **Historical orders:** These are orders that were already marked as <mark style="color:orange;">**“Completed” or “Canceled”**</mark> in eCommerce before being downloaded into HotWax Commerce during the implementation phase. For example, a retailer might request that all orders from the last two months also be imported during implementation, even though they have already been fulfilled or canceled. Storing these historical orders separately allows for easy access in case of customer inquiries or returns, without them entering the fulfillment workflow.
* **Newly canceled orders:** Any orders that are canceled in eCommerce before being downloaded into HotWax Commerce are automatically moved to the `General Ops Parking` in a <mark style="color:orange;">**“Canceled”**</mark> status, ensuring that they are not processed further.
* **Completed digital product orders:** Orders for digital products, such as digital gift cards, are downloaded as <mark style="color:orange;">**“Completed”**</mark> and are also placed to the `General Ops Parking` since they require no further processing.

This ensures that only open and actionable orders are processed for fulfillment, while orders that no longer require any operational steps are kept for record-keeping.

## Managing POS Orders

In the previous sections, we discussed various stages of the order lifecycle, primarily focusing on online orders. HotWax Commerce also manages sales made through physical retail locations via POS systems. These in-store purchases, which involve real-time fulfillment, are also downloaded into HotWax Commerce and are automatically assigned a <mark style="color:orange;">**"Completed"**</mark> status. This ensures that the inventory is updated instantly and provides a unified view of both online and in-store sales.

{% hint style="success" %}
The comprehensive process outlined in the Order Lifecycle Business Process Model demonstrates how HotWax Commerce ensures that every order, regardless of its type, is efficiently managed and accurately fulfilled, providing retailers with the control and flexibility needed in an omnichannel environment.
{% endhint %}
