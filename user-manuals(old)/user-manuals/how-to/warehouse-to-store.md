---
description: >-
 Learn how to manage warehouse to store transfer orders.
---


# Manage Transfer order from Warehouse to Store

Transfer orders originate in NetSuite, but there is a distinction in how they are fulfilled. When a transfer order is initiated from a warehouse, NetSuite's fulfillment solution is employed to fulfill the transfer order, ensuring accurate order fulfillment.

Transfer orders are created and fulfilled in NetSuite before being imported into HC. Store associates leverage HotWax Commerce `Inventory Receiving App` to receive transferred inventory. The user-friendly interface of this app ensures a smooth and efficient receiving process, even for users with minimal training. Furthermore, HotWax Commerce `Receiving App` also allows inventory receiving discrepancies such as under-receiving, over-receiving, or the ability to add extra items than intended.

Inbound shipments that have been created are automatically reflected in the `Inventory Receiving` App, allowing store associates to receive them in-store. The inventory counts for the items received in the store are promptly increased in HotWax Commerce. Upon receiving items, a receipt record is generated in HotWax Commerce. Once all the transfer order item fulfillment records have been successfully received in-store and their item receipt records have been synchronized with NetSuite, the transfer order status is updated from `Pending Receipt` to `Received`.

Here is the link for the detailed steps on receiving the transfer order [shipments](https://docs.hotwax.co/user-guides/inventory/receiving/receiving). 
