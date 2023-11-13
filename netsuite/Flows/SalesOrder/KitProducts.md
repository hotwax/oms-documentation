# Kit Products

## Order Sync

When syncing kit products in an order to NetSuite, only the parent kit product is sent. The kit components are withheld from NetSuite because most retaiers already have kit product associations setup in NetSuite, so when a kit product order is imported, NetSuite already has built in handling for the kit's components.

If the kit product is fulfilled from a NetSuite location, the fulfilled order items file from NetSuite still only includes the parent kit product. As part of HotWax's integration with NetSuite, we automatically fulfill the kit components if the parent kit product is marked as fulfilled.