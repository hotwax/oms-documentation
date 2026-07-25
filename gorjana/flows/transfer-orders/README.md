# Transfer orders

## Receive in HotWax
Transfer order names will be shown in the receiving app and highlight the native field details from NetSuite like transfer order name.

Warehouse-fulfilled transfer orders import into HotWax through NetSuite's item-fulfillment feed, and HotWax matches each product by its identifier. The "ShipHawk Package Items" table is not used in this receiving-import path. ShipHawk is used for shipping and carrier recording only.

## Fulfill in HotWax
Transfer orders that are fulfilled from HotWax will be posted as multiple fulfillments in NetSuite when fulfilled in multiple shipments.

