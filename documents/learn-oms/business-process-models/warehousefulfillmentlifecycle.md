---
description: >-
  The Warehouse Fulfillment Lifecycle BPM illustrates the process of fulfilling
  an order allocated to a warehouse, followed by synchronizing fulfillment
  updates to HotWax Commerce.
---

# Warehouse Fulfillment Lifecycle

<figure><img src="../.gitbook/assets/WarehouseFulfillmentbpm.png" alt=""><figcaption><p>Warehouse fulfillment lifecycle business process model</p></figcaption></figure>

HotWax Commerce, being as an Order Management System, finds the best location to fulfill an online order from. In the event where an approved order is brokered and allocated to warehouse fulfillment location, HotWax Commerce synchronizes allocation details with the Warehouse Management System (WMS) or ERP systems like NetSuite. Once the order is fulfilled, HotWax Commerce then also synchronizes the fulfillment updates from the WMS or ERP systems.

## Orders Pending Fulfillment

Items that have been successfully allocated to warehouses have fulfillment status <mark style="color:orange;">**"Reserved"**</mark> in HotWax Commerce. A scheduled job in HotWax Commerce then synchronizes the allocation details of orders with the ERP or WMS leveraged to fulfill warehouse orders.

Most of our customers use NetSuite ERP to fulfill orders from their warehouses. In this scenario, the order is already present in NetSuite with a status of <mark style="color:orange;">**"Pending Fulfillment"**</mark> because HotWax Commerce synchronizes orders to NetSuite as soon as they are <mark style="color:orange;">**"Created"**</mark> in HotWax Commerce.

For orders allocated to warehouses, a scheduled job in HotWax Commerce generates a feed containing order line items with their respective fulfillment locations and synchronizes it with NetSuite. Once NetSuite’s script reads and consumes this feed, the fulfillment location details is updated on the order item.

Learn more about [order synchronization from HotWax Commerce to NetSuite](https://docs.hotwax.co/documents/v/learn-netsuite/supported-integrations/salesorder/orderapproval)

## Prepare Shipment

When the warehouse fulfillment team begins the fulfillment process for an order item, an item fulfillment record is automatically generated in NetSuite. Upon picking, packing, and shipping the item, multiple actions take place in NetSuite:

* The item fulfillment record is marked as <mark style="color:orange;">**"Shipped"**</mark>.
* The initial order status <mark style="color:orange;">**"Pending Fulfillment"**</mark> is updated to <mark style="color:orange;">**"Pending Billing"**</mark>.
* Finally, once the invoice is auto generated, the order status is updated from <mark style="color:orange;">**“Pending Billing”**</mark> to <mark style="color:orange;">**“Billed”**</mark>. This marks the completion of the order lifecycle in NetSuite.

### Fulfillment Failure

In the event where a fulfillment team is unable to find an order item to be fulfilled, they reject that specific order. A scheduled job in HotWax Commerce imports the rejected order item feed from NetSuite. Subsequently, all rejected orders are moved to the rejected queue in HotWax Commerce so that they can be rebrokered and allocated to a new fulfillment location.

## Order Item Shipped

A scheduled job in HotWax Commerce synchronizes all the fulfilled order item details from NetSuite and multiple actions take place:

* The fulfillment status of the order item is updated from <mark style="color:orange;">**“Reserved”**</mark> to <mark style="color:orange;">**“Shipped”**</mark>.
* In the event of a partial shipment, the fulfillment status of the shipped items will be updated to <mark style="color:orange;">**"Shipped"**</mark>, while the order itself will remain in the <mark style="color:orange;">**"Approved"**</mark> status until all items have been shipped.
* When the fulfillment status of all items in an order is marked as <mark style="color:orange;">**“Shipped”**</mark>, the order status is updated from <mark style="color:orange;">**"Approved"**</mark> to <mark style="color:orange;">**"Completed"**</mark> in HotWax Commerce.

## Synchronize Fulfillment Updates to eCommerce

Once the order is marked as <mark style="color:orange;">**“Completed”**</mark> in HotWax Commerce, a scheduled job in HotWax Commerce sends the tracking details to eCommerce and marks the orders <mark style="color:orange;">**“Fulfilled”**</mark>.

{% hint style="success" %}
If a retailer uses another WMS or ERP to fulfill warehouse orders:

* HotWax Commerce will synchronize allocation details with the ERP or WMS in place.
* HotWax Commerce will also synchronize fulfillment updates from the ERP or WMS to mark order "Completed" in HotWax Commerce and "Fulfilled" in eCommerce.
{% endhint %}
