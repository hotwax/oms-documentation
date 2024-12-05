---
description: >-
  The Web Exchange Lifecycle BPM illustrates how exchanges are processed between
  RMS, eCommerce, ERP, and HotWax Commerce.
---

# Web Exchanges with Loop

<figure><img src="../../.gitbook/assets/Exchangesbpm.png" alt=""><figcaption><p>Web exchanges lifecycle business process model</p></figcaption></figure>

In the context of returns, an exchange refers to a transaction in which a customer returns a purchased item and, instead of receiving a refund or store credit, opts to swap the returned item for a different product. This lets the customer exchange the initially purchased item for another one.

To explain the exchange lifecycle, we've taken Loop as the RMS, Shopify as the eCommerce platform, and NetSuite as the ERP system, while HotWax Commerce serves as the OMS.

## 1. Exchanges Initiated in Loop

As discussed in [Web Returns Lifecycle](../returns-lifecycle/loopwebreturnslifecycle.md), Loop lets customers directly initiate returns against their web orders. If customers want to buy another product by returning an item, the Loop customer portal lets them submit an exchange request.

When customers complete their exchange process, a Return Merchandise Authorization (RMA) is created in Loop in the <mark style="color:orange;">**“Open”**</mark> status against the return item.

## 2. Return Under Order Created in Shopify

Loop updates the order details in Shopify by creating a return under order, reflecting that a return has been requested by the customer.

## 3. RMA Created in NetSuite

Loop also generates an RMA in the <mark style="color:orange;">**“Pending Receipt”**</mark> status in NetSuite using a third-party integration app like Novamodule. This gives the warehouse teams a heads-up that an order item will be coming back.

## 4. Return Item Successfully Received in the Warehouse

To receive the requested new order item in exchange, customers must return the original order.

Customers print the shipping label provided by Loop and prepare the return package to ship their items back to the retailer so that they can receive the new item they requested.

When the return package reaches the warehouse, the warehouse teams initiate receiving of the return item against the RMA and the following actions take place:

* Item receipt records are created in NetSuite against the RMA, and the returned inventory is restocked.
* The status of RMA is updated from <mark style="color:orange;">**“Pending Receipt”**</mark> to <mark style="color:orange;">**“Pending Refund”**</mark>.

## 5. Return Receipt Records Created in Loop

Item receipt records created in NetSuite are synchronized to Loop using a third-party integration app. Consequently, return receipt records are generated in Loop.

## 6. Refund Records Created

When item receipt records are generated in Loop, multiple actions take place in NetSuite and Shopify, let’s understand them in detail:

Creating refund records is essential to mark the completion of the return process and closing RMA in NetSuite.

*   Return receipt records trigger the creation of refund records in Loop.

    Customers receive their refund amount when they return an item. In the event where they are returning an item in exchange for another, refunds will not be issued to them because that amount is used as payment for the exchanged product.

    Once refund records are created, Loop creates a credit memo in <mark style="color:orange;">**"Open"**</mark> status of $0 in NetSuite using a third party integration app. This marks the completion of RMA in NetSuite, with its status updating from <mark style="color:orange;">**“Pending Refund”**</mark> to <mark style="color:orange;">**“Refunded”**</mark>. Loop also creates a customer refund record against the credit memo and then the status of the credit memo is updated from <mark style="color:orange;">**“Open”**</mark> to <mark style="color:orange;">**“Fully Applied”**</mark>.
* The creation of refund records in Loop also marks the completion of RMA in Loop, with its status updating from <mark style="color:orange;">**“Open”**</mark> to <mark style="color:orange;">**“Closed”**</mark>.
* Return receipt records in Loop trigger marking the original order as <mark style="color:orange;">**“Returned”**</mark> in Shopify and creating a new order in the <mark style="color:orange;">**“Unfulfilled”**</mark> status. Loop also applies a 100% Loop discount on the new order and links the original order in the extended fields.

## 7. Exchange Orders Downloaded in HotWax Commerce

Exchange orders are basically new web orders that require fulfillment, so HotWax Commerce processes them similar to how regular web orders are fulfilled.

A dedicated `Import Orders` job in HotWax Commerce downloads web orders from Shopify. These downloaded orders are automatically assigned a <mark style="color:orange;">**"Created"**</mark> status in HotWax Commerce, including exchange orders.

An important aspect to note is that for an exchange order, Loop saves details of the original order in the extended fields in Shopify. Therefore, when downloading exchange orders from Shopify, HotWax Commerce also retrieves these details of the original order and saves them in the communication event.

Learn more about how [HotWax Commerce fulfills web orders](https://docs.hotwax.co/documents/v/learn-shopify/orders/how-are-orders-downloaded-from-shopify-to-hotwax-commerce)

## 8. Exchange Orders Synchronized to NetSuite

HotWax Commerce synchronizes all web orders to NetSuite in the <mark style="color:orange;">**“Created”**</mark> status and similarly, exchange orders in the <mark style="color:orange;">**“Created”**</mark> status are also synchronized to NetSuite. When NetSuite imports them, they are automatically assigned a <mark style="color:orange;">**“Pending Fulfillment”**</mark> status and the details of the original order are saved in the memo.

Learn more about [order synchronization between HotWax Commerce and NetSuite](https://docs.hotwax.co/documents/v/learn-netsuite/supported-integrations/salesorder)

### What about Inventory Updates for the Returned & New Exchange Item?

Inventory synchronization process remains the same for the returned item that we discussed in the [Web Returns Lifecycle](../returns-lifecycle/loopwebreturnslifecycle.md).

When an item from the original order is returned on Shopify, it provides an option to enable the restock returned inventory flag. However, HotWax Commerce does not automatically increase the inventory count even if the restocked return flag is enabled on Shopify. This is because HotWax Commerce lacks visibility into the specific location where the inventory is received. Instead, inventory is updated only when new item receipt records are synchronized to HotWax Commerce from NetSuite.

A scheduled job in HotWax Commerce performs a daily sync of inventory data from NetSuite which means new receipts from returns are automatically synchronized to HotWax Commerce. HotWax Commerce also performs regular inventory synchronization to Shopify which means that any changes in inventory in HotWax Commerce, such as increases resulting from returns, are also synchronized to Shopify.

Upon downloading an exchange order from Shopify, HotWax Commerce automatically reduces inventory from the online sellable count once the exchange item enters the brokering queue. Subsequently, it decreases the quantity on hand once the exchange item is fulfilled, just like HotWax Commerce updates inventory for other web orders.

HotWax Commerce also sends fulfillment updates to NetSuite which updates inventory levels in NetSuite, and provides regular inventory updates to Shopify which also keeps inventory up-to-date in Shopify.
