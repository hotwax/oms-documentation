# Warehouse Fulfillment Lifecycle BPM

The Warehouse Fulfillment Lifecycle BPM illustrates the process of fulfilling an order allocated to a warehouse, followed by synchronizing fulfillment updates to HotWax Commerce.

HotWax Commerce, being as an Order Management System, finds the best location to fulfill an online order from. In the event where an order is routed to warehouse fulfillment location, HotWax Commerce synchronizes allocation details with the Warehouse Management System (WMS) or ERP systems like NetSuite. Once the order is fulfilled, HotWax Commerce then also synchronizes the fulfillment updates from the WMS or ERP systems.

## Orders pending fulfillment

Items that have been successfully allocated to warehouses have fulfillment status "Reserved" in HotWax Commerce. HotWax Commerce then synchronizes the allocation details of orders with the ERP or WMS leveraged to fulfill warehouse orders.

For example, most of our customers use NetSuite ERP to fulfill orders from their warehouses. In this scenario, a scheduled job in HotWax Commerce generates a feed containing order line items with their respective fulfillment locations and synchronizes it with NetSuite. Once NetSuite’s script reads and consumes this feed, the fulfillment location is updated on the order item.

## Prepare Shipment

When the warehouse fulfillment team begins the fulfillment of the order item, an item fulfillment record is created in NetSuite. As soon as the item is picked, packed and shipped, the item fulfillment record is marked as “Shipped” in NetSuite.

### Fulfillment Failure

In the event where a fulfillment team is unable to find an order item to be fulfilled, they reject that specific order. A scheduled job in HotWax Commerce imports the rejected order item feed from NetSuite. Subsequently, all rejected orders are moved to the rejected queue in HotWax Commerce so that they can be rebrokered and allocated to a new fulfillment location.

## Order Item Shipped

A scheduled job in HotWax Commerce synchronizes all the fulfilled order item details from NetSuite and multiple actions take place:

- The fulfillment status of the order item is updated from “Reserved” to “Shipped”.
- In the event of a partial shipment, the fulfillment status of the shipped items will be updated to "shipped," while the order itself will remain in the "approved" status until all items have been shipped.
- When the fulfillment status of all items in an order is marked as “Shipped”, the order status is updated from "Approved" to "Completed" in HotWax Commerce.

## Synchronize Fulfillment Updates to eCommerce

Once the order is marked as “Completed” in HotWax Commerce, a scheduled job in HotWax Commerce sends the tracking details to eCommerce and marks the orders “Fulfilled”.

If a retailer uses another WMS or ERP to fulfill warehouse orders:
 - HotWax Commerce will synchronize allocation details with the ERP or WMS in place.
 - HotWax Commerce will also synchronize fulfillment updates from the ERP or WMS to mark order "Completed" in HotWax Commerce and "Fulfilled" in eCommerce.
