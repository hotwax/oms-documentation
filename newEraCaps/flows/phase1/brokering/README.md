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

## Partial Order Cancellations and Reshipping Flow
When the CSR team partially cancels an order on Shopify, the change is synced to OMS. HotWax identifies the canceled warehouse order items and applies an order-level attribute to mark them for reshipping. This process is managed through a dedicated **transformation flow**.

The flow performs the following functions:
- **Rebrokering Preparation**: Clears fulfillment records in OMS for items originally fulfilled through an external system so they can be reconsidered for brokering, while excluding items that were actually canceled.
  
- **Facility Tracking**: Since the canceled item is no longer available at the facility it was originally brokered to, the flow checks the Order Facility Change history to identify which warehouse facility previously held the item. It also records the shipgroup (the group of items within the order assigned to that facility) from which the item was removed. This ensures accurate deletion of fulfillment records, preventing canceled items from being included in the WMS feed.
  
- **File Generation for WMS**: The flow generates an updated order file and places it on the SFTP location for the WMS to process.


As part of this process, HotWax tags the order with a **Reshipping status**:
- Pending – when the updated order is awaiting transmission to WMS.
- Sent – once the updated order has been successfully transmitted to WMS.
