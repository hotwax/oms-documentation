---
description: Learn how sales orders are processed in HotWax Commerce and NetSuite
---

# Sales Orders

In the dynamic world of eCommerce, the efficient fulfillment of online sales orders is a critical aspect of a retailer's success. When online orders are placed via e-Commerce platforms like Shopify, they need to be quickly processed and fulfilled to meet promised delivery timelines while optimizing operational costs.Online orders placed on platforms like Shopify are downloaded into the HotWax Commerce for processing and fulfillment. HotWax Commerce plays a pivotal role in this process by seamlessly routing orders to the most suitable fulfillment locations. The decision is based on factors such as inventory availability, cost, and time, ensuring efficient order processing.

Upon arrival in HotWax Commerce, orders are initially flagged as "created," awaiting further processing. The pivotal step follows as these orders are pushed into Netsuite ERP for creation, ensuring that all essential order information, including order IDs, is accurately transmitted. This synchronization process typically takes no longer than 30 minutes per order, ensuring a swift transition into Netsuite.

After creation in Netsuite, the system communicates back to HotWax Commerce, confirming the successful integration and prompting a transition of the order to an "approved" state within HC. At this juncture, the order is deemed ready for allocation, where it is assigned to a specific location within the inventory network, facilitating the subsequent fulfillment process.

While the synchronization process is efficient, it is also scalable to accommodate varying order volumes. HotWax Commerce can handle up to 600 orders per 15-minute interval, and by strategically batching orders, this capacity can be further augmented to approximately 1200 orders within a 30-minute timeframe. Despite potential fluctuations in processing times during peak periods, typically taking around 45 minutes to 1 hour 20 minutes, the integration mechanism ensures that orders are seamlessly synchronized between Shopify and Netsuite ERP.

The flow of order and fulfillment information in the sales order integration varies depending on the responsibilities a retailer has designated to NetSuite. Oftentimes NetSuite is used for is accounting and GL posting functionalities with all fulfillment happening in external systems such as a 3PL, dedicated WMS system, or specialized fulfillment software in stores. Other times retailers may be using NetSuite’s fulfillment capabilities as well, usually in their main warehouse. While most parts of the order sync remain the same, the stage at which order item allocation is pushed to NetSuite varies based on NetSuite’s fulfillment responsibilities.

<figure><img src="../../../.gitbook/assets/orderSync.png" alt=""><figcaption><p>Order sync between HotWax Commerce &#x26; NetSuite</p></figcaption></figure>

Here is the **NetSuite Order Lifecycle Business Process Model** that provides step by step overview of how the sync works before we dive into elaborate details.

## NetSuite Order Lifecycle BPM

<figure><img src="../../../.gitbook/assets/NetSuiteOrderlifeCyclebpm.png" alt=""><figcaption><p>NetSuite order lifecycle business process model</p></figcaption></figure>

Most of our customers use Shopify as their eCommerce platform along with NetSuite as their ERP and warehouse fulfillment solution. Therefore, to explain the NetSuite Order Lifecycle BPM, we have taken Shopify as the eCommerce platform, NetSuite as the ERP and warehouse fulfillment solution, with HotWax Commerce as the Order Management System.

### 1. Download Orders in HotWax Commerce

Customers place their online orders on Shopify. HotWax Commerce being an Order Management System, downloads new orders from Shopify so that they can be further processed. By default these orders are assigned a <mark style="color:orange;">**“Created”**</mark> status in HotWax Commerce.

### 2. Synchronize Orders to NetSuite

A dedicated job in HotWax Commerce prepares and exports a feed of orders marked as <mark style="color:orange;">**"Created"**</mark> to NetSuite.

NetSuite's SuiteScript then consumes this order data, generating orders in the <mark style="color:orange;">**"Pending Fulfillment"**</mark> status.

### 3. Synchronize Orders ID and Item Line IDs to HotWax Commerce

HotWax Commerce ensures confirmation of successful order item synchronization with NetSuite. To achieve this, a dedicated job in HotWax Commerce downloads NetSuite's internal IDs, while another job downloads NetSuite's item line IDs. This process also triggers multiple actions in HotWax Commerce and NetSuite:

* A scheduled job in HotWax Commerce creates customer deposit records for corresponding orders in the "Undeposited" status in NetSuite.
* A scheduled job in HotWax Commerce updates the order status from <mark style="color:orange;">**"Created"**</mark> to <mark style="color:orange;">**"Approved"**</mark> in HotWax Commerce.

{% hint style="warning" %}
**Why is order approval necessary?**

Only orders with approved status are eligible to be brokered in HotWax Commerce and orders without approval remain in the "Created" status.
{% endhint %}

### 4. Order Brokering in HotWax Commerce

Now that orders have been approved, they are automatically sent to the Brokering Queue which serves as a waiting area for orders awaiting processing. Orders in the brokering queue are analyzed and picked in the brokering run.

{% hint style="info" %}
**What are brokering runs:**

Brokering runs are scheduled by retailers to execute at specified intervals, allowing for effective and timely order routing. Retailers need to set a frequency and run time for brokering. For example, setting the frequency of a run to "Daily" and the runtime to "7 am" will execute the brokering run every morning at 7 am.
{% endhint %}

In the brokering run, the order routing engine looks for the best fulfillment location to fulfill orders from.

Learn more about [order brokering and routing](https://docs.hotwax.co/documents/retail-operations/orders/brokering)

In the event where an order is routed to a warehouse fulfillment location, HotWax Commerce synchronizes allocation details to NetSuite.

When items are allocated to stores for fulfillment, they automatically show up in the HotWax Commerce `Store Fulfillment App`.

### 5. Orders Allocated to Warehouse

A dedicated job in HotWax Commerce synchronizes order line items with their respective fulfillment locations to NetSuite.

NetSuite’s SuiteScript consumes this feed and updates fulfillment location on corresponding orders.

When the warehouse fulfillment team begins the fulfillment of the order item, an item fulfillment record is created in NetSuite. As soon as the item is picked, packed and shipped multiple actions take place in NetSuite:

* The item fulfillment record is marked as <mark style="color:orange;">**“Shipped”**</mark>.
* The initial order status is updated from <mark style="color:orange;">**“Pending Fulfillment”**</mark> to <mark style="color:orange;">**“Pending Billing”**</mark>.
* Finally, once the invoice is auto generated in the <mark style="color:orange;">**"Paid"**</mark> status, the order status is updated from <mark style="color:orange;">**“Pending Billing”**</mark> to <mark style="color:orange;">**“Billed”**</mark>. This marks the completion of the order lifecycle in NetSuite.

#### Fulfillment Failure

In the event where a fulfillment team is unable to find an order item to be fulfilled, they reject that specific order. A scheduled job in HotWax Commerce imports the rejected order item feed from NetSuite. Subsequently, all rejected orders are moved to the rejected queue in HotWax Commerce so that they can be rebrokered and allocated to a new fulfillment location.

### 6. Order item shipped

NetSuite's script exports item fulfillment records marked as <mark style="color:orange;">**"Shipped"**</mark>. A scheduled job in HotWax Commerce consumes this feed, and following actions take place:

* The fulfillment status of the corresponding order item in HotWax Commerce is updated to <mark style="color:orange;">**"Shipped"**</mark>.
* The order status is automatically updated from <mark style="color:orange;">**"Approved"**</mark> to <mark style="color:orange;">**"Completed"**</mark> in HotWax Commerce.

{% hint style="info" %}
In the event of a partial shipment, the order remains in the "Approved" status until all items have been shipped.
{% endhint %}

### 5. Orders Allocated to Store

Now, let's see what happens when orders are allocated to a store location instead of the warehouse.

Fulfillment teams at the store prepare online orders for shipment.

* Upon successful picking of an order item, the fulfillment status is changed to <mark style="color:orange;">**"Picked"**</mark>.
* Once the item has been packed, the fulfillment status is updated to <mark style="color:orange;">**"Packed"**</mark>.
* Finally, when an order item is marked as shipped in the `Store Fulfillment App`, the fulfillment status is then updated to <mark style="color:orange;">**"Shipped"**</mark>.

### 6. Order item shipped

When all items of an order are marked <mark style="color:orange;">**“Shipped”**</mark> in the `Store Fulfillment App`, the order status is automatically updated from <mark style="color:orange;">**“Approved”**</mark> to <mark style="color:orange;">**“Completed”**</mark> in HotWax Commerce.

{% hint style="info" %}
In the event of a partial shipment, the order remains in the "Approved" status until all items have been shipped.
{% endhint %}

In HotWax Commerce, a scheduled job prepares and exports a feed containing order items marked as <mark style="color:orange;">**"Shipped"**</mark>. NetSuite’s script consumes these records and multiple actions take place:

* The item fulfillment record is created amd marked as <mark style="color:orange;">**“Shipped”**</mark>.
* The initial order status is updated from <mark style="color:orange;">**“Pending Fulfillment”**</mark> to <mark style="color:orange;">**“Pending Billing”**</mark>.
* Finally, once the invoice is auto generated in the <mark style="color:orange;">**"Paid"**</mark> status, the order status is updated from <mark style="color:orange;">**“Pending Billing”**</mark> to <mark style="color:orange;">**“Billed”**</mark>. This marks the completion of the order lifecycle in NetSuite.

### 7. Synchronize fulfillment updates to eCommerce

Once an order reaches the <mark style="color:orange;">**"Completed"**</mark> status in HotWax Commerce, a scheduled job in HotWax Commerce sends the tracking details to Shopify and marks the orders as <mark style="color:orange;">**“Fulfilled”**</mark>.

This process remains consistent regardless of whether the order fulfillment is performed in NetSuite or the `Store Fulfillment App`.

When an order is marked <mark style="color:orange;">**"Completed"**</mark> in HotWax Commerce, either through the fulfillment feed from NetSuite or the `Store Fulfillment App`, HotWax Commerce automatically identifies these completed orders and marks them as <mark style="color:orange;">**"Fulfilled"**</mark> in Shopify.

**Overview of how sync works:**

* [ ] Sync new orders from HotWax to NetSuite
  * [ ] Sync customers
  * [ ] Sync order line items
  * [ ] Sync order ids
  * [ ] Create customer deposit
* [ ] Approve order in HotWax for fulfillment
* [ ] HotWax brokering allocates orders
* [ ] Sync item allocation to NetSuite for facilities where NetSuite fulfillment is used
* [ ] Sync order item fulfillment details from NetSuite to HotWax
* [ ] Sync order item fulfillment details from HotWax to NetSuite
* [ ] Invoice orders in NetSuite

### Designating NetSuite Fulfillment Locations

When setting up a facility on HotWax, retailers choose if fulfillment is run by NetSuite. If a facility uses NetSuite for fulfilling orders, HotWax effectively treats NetSuite as the WMS of that facility. So when order items are allocated to that facility, HotWax pushes those items' allocation details to NetSuite and fetches there fulfillment details from NetSuite as well.

If a retailer already has their 3PL integrated with NetSuite, they can choose to configure it in the OMS as a NetSuite fulfillment location. This will allow them to continue to use their pre-built integration without having to integrate the 3PL directly with the OMS.

**Why this is important**

HotWax by default does not sync item allocation details to NetSuite for items until they are fulfilled. While this may seem like a lag in our integration, it important for maintaining simplicity in the integration. With distributed order routing its common for items to be allocated and rejected from fulfillment multiple times, so the first allocation is not always final. If we were to sync item allocation to NetSuite for all items as soon as they were allocated, we'd also have to update the allocation every time it changed in the OMS. Syncing allocation information early on to NetSuite even when it's not used for fulfillment also introduces the opportunity for accidental fulfillment from NetSuite which is avoided entirely by not posting allocation information until fulfillment is completed.
