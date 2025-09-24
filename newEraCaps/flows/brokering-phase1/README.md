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
   
3. If the item is replaced, the CSR cancels the entire order in Shopify and creates a new one with the replacement item.

**Note**: The reshipping process applies only to orders already brokered to the warehouse.
## How “Reshipped” works in HotWax Commerce
When the CSR partially cancels an order on Shopify, the cancellation details flow into the OMS. HotWax identifies recently canceled warehouse order items and marks those orders with an order-level attribute indicating they have been reshipped through a transformation flow. The flow also clears records of items fulfilled through an external system, except for those that were canceled.

HotWax tracks the Reshipping tag as `Pending` until the order is sent to WMS again, and updates the status to `Sent`.

Now, since canceled items are no longer located at the facility they were brokered to, Flow uses the Order Facility Change history to identify canceled items that were at the warehouse facility before being canceled. This entity will also contain details of which shipgroup the item was removed from, helping identify which order items to delete the fulfillment history for. This flow then puts the file of these orders on SFTP.
