---
description: >-
  Discover how New Era Caps Japan efficiently utilizes its warehouse
  for order fulfillment through meticulous brokering configurations.
---
# Brokering

Currently, all orders are fulfilled only from the warehouse. The brokering engine allocates every order to the warehouse. If stock is not available, the reshipping flow is used to reallocate orders to the warehouse.

## Reshipping Flow
The WMS used by New Era Caps cannot differentiate between multiple shipments of the same order when generating its fulfilled order CSV feed. Because of this, if the WMS cannot fulfill an item, the CSR asks the customer whether to cancel it or replace it with another product.

1. If the item is canceled, the CSR cancels it in Shopify, and HotWax tags the order as “Reshipped” so it can be sent again to the WMS. 

2. If the item is replaced, the CSR cancels the entire order in Shopify and creates a new one with the replacement item.

**Note**: The reshipping process applies only to orders already brokered to the warehouse.
## How “Reshipped” works in HotWax Commerce
When the CSR partially cancels an order on Shopify, the change syncs to OMS. HotWax identifies recently canceled warehouse order items and marks those orders with an order-level attribute indicating they will be reshipped through a transformation flow. The flow also clears records in OMS of items fulfilled through an external system to again consider it for brokering, except for those items that were canceled.

Now, since the item is canceled in OMS, it is no longer available at the facility it was originally brokered to. To handle this, the transformation flow checks the Order Facility Change history to identify canceled items that were once at the warehouse facility. It also records which shipgroup—the group of items within the order assigned to a specific facility for fulfillment—the item was removed from. This information ensures that the correct fulfillment records are deleted, preventing canceled items to be included in the WMS feed.

The flow then generates a file with the updated order details and places it on SFTP for the WMS to process. During this process, HotWax marks the Reshipping tag as ‘Pending.’ Once the updated order is successfully sent to WMS again, the status is updated to ‘Sent.’
