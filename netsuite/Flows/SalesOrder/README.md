---
description: >-
  Learn how HotWax Commerce seamlessly processes and fulfills online sales
  orders from e-Commerce platforms like Shopify, efficiently routing orders
  based on inventory availability, cost, and time.
---

# Sales Orders

In the dynamic world of e-commerce, the efficient fulfillment of online sales orders is a critical aspect of a retailer's success. When online orders are placed via e-Commerce platforms like Shopify, they need to be quickly processed and fulfilled to meet promised delivery timelines while optimizing operational costs.Online orders placed on platforms like Shopify are downloaded into the HotWax Commerce for processing and fulfillment. HotWax Commerce plays a pivotal role in this process by seamlessly routing orders to the most suitable fulfillment locations. The decision is based on factors such as inventory availability, cost, and time, ensuring efficient order processing.

Orders are intelligently routed to the optimal fulfillment locations, which may involve warehouses, stores, or a combination of both. Each scenario necessitates a distinct process for pushing orders to Netsite.

The flow of order and fulfillment information in the sales order integration varies depending on the responsibilities a retailer has designated to NetSuite. Oftentimes NetSuite is used for is accounting and GL posting functionalities with all fulfillment happening in external systems such as a 3PL, dedicated WMS system, or specialized fulfillment software in stores. Other times retailers may be using NetSuite’s fulfillment capabilities as well, usually in their main warehouse. While most parts of the order sync remain the same, the stage at which order item allocation is pushed to NetSuite varies based on NetSuite’s fulfillment responsibilities.

<figure><img src="../../.gitbook/assets/order sync between hotwax and ns.png" alt=""><figcaption><p>Order sync between HotWax Commerce &#x26; NetSuite</p></figcaption></figure>

Here is a step by step overview of how the sync works before we dive into elaborate details:

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

## Designating NetSuite Fulfillment Locations

When setting up a facility on HotWax, retailers choose if fulfillment is run by NetSuite. If a facility uses NetSuite for fulfilling orders, HotWax effectivly treats NetSuite as the WMS of that facility. So when order items are allocated to that facility, HotWax pushes those items' allocation details to NetSuite and fetches there fulfillment details from NetSuite as well.

If a retialer already has their 3PL integrated with NetSuite, they can choose to configure it in the OMS as a NetSuite fulfillment location. This will allow them to continue to use their pre-built integration without having to integrate the 3PL directly with the OMS.

#### Why this is important

HotWax by default does not sync item allocation details to NetSuite for items until they are fulfilled. While this may seem like a lag in our integration, it important for maintaining simplicity in the integration. With distributed order routing its common for items to be allocated and rejected from fulfillment multiple times, so the first allocation is not always final. If we were to sync item allocation to NetSuite for all items as soon as they were allocated, we'd also have to update the allocation every time it changed in the OMS. Syncing allocation information early on to NetSuite even when it's not used for fulfillment also introduces the opportunity for accidental fulfillment from NetSuite which is avoided entirely by not posting allocation information until fulfillment is completed.
