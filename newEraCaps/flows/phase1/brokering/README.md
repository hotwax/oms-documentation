---
description: >-
  Discover how New Era Caps Japan efficiently utilizes its warehouse
  for order fulfillment through meticulous brokering configurations.
---

# Brokering

**Discover how New Era Caps Japan efficiently utilizes its stores and warehouse for order fulfillment through strategic brokering configurations.**

## Soft Allocation
> Phase 2

Online shipping orders are always routed to the warehouse unless the customer has selected a store that they want the product to be shipped from when adding the item to their cart. If an order item contains a soft allocated ship-from facility, the OMS will read the pre-selected facility and allocate those order items to the respective locations for fulfillment.

When this kind of soft allocated order is imported, the soft allocated items of the order will be directly allocated to that store upon import and skip the normal brokering algorithm. Since customers must explicitly choose which items they want to be shipped from the store, the OMS will split the items and will soft allocated them .In the event that a store cannot fulfill an order and must reject it for reallocation, those orders will not be allocated to the warehouse .

## Re-brokering for Ship From Store

>Phase 2

When a store cannot fulfill an order, HotWax automatically steps in to ensure the customer still receives their item. If a store manager rejects an order citing **“Not in Stock,”** the order is temporarily placed in **Rejected Item Parking**.

From there, a scheduled process automatically reviews all such orders and reallocates them to the next store that has the item available. Each time this reallocation occurs, Shopify is updated in real time—reflecting the change in fulfillment location and adjusting both stores’ inventory counts to keep stock levels accurate across the system.

If the newly assigned store also rejects the order, the same process continues, with HotWax attempting to find another location that can fulfill it. When no store has available inventory, the order is moved to **Unfillable Parking**. At this stage, HotWax sets an automatic cancellation date and notifies the business team, ensuring transparency and giving them time to review or take alternate action before the order is canceled.

This automated reallocation process helps NEC maintain high fulfillment rates, reduce manual effort, and ensure customers receive timely and accurate service—even when stock issues arise.

**Example Scenario**

A customer places an order for an item that is initially assigned to **Store-1** in Shopify. When the order is imported into the OMS, it is allocated to Store-1 for fulfillment. However, if the store manager marks the order as **“Not in Stock,”** HotWax moves the order to **Rejected Item Parking**.

The automated rebrokering process then reallocates the order to **Store-2**, which has available inventory. Shopify is immediately updated to reflect the change — Store-1’s committed quantity decreases while its available inventory increases, and Store-2’s figures adjust in the opposite way.

If **Store-2** also rejects the order, the system continues the same process with **Store-3** or the next available location. In the event that no store can fulfill the order, it is moved to **Unfillable Parking**, where HotWax assigns an **auto-cancel date** and notifies the business team in advance.

This ensures a seamless and transparent order lifecycle — minimizing fulfillment delays, maintaining inventory accuracy across all stores, and keeping the business informed at every step.

## Reshipping Flow

The WMS used by New Era Caps cannot differentiate between multiple shipments of the same order when generating its fulfilled order CSV feed. Because of this, if the WMS cannot fulfill an item, the CSR asks the customer whether to cancel it or replace it with another product.

1\. If the item is canceled, the CSR cancels it in Shopify, and HotWax tags the order as “Reshipped” so it can be sent again to the WMS.  
2\. If the item is replaced, the CSR cancels the entire order in Shopify and creates a new one with the replacement item.

Note: The reshipping process applies only to orders already brokered to the warehouse.

## Partial Order Cancellations and Reshipping Flow

> Phase 2

When the CSR team partially cancels an order on Shopify, the change is synced to OMS. HotWax identifies the canceled warehouse order items and applies an order-level attribute to mark them for reshipping. This process is managed through a dedicated **transformation flow**.

The flow performs the following functions:

* **Rebrokering Preparation**: Clears fulfillment records in OMS for items originally fulfilled through an external system so they can be reconsidered for brokering, while excluding items that were actually canceled.  
* **Facility Tracking**: Since the canceled item is no longer available at the facility it was originally brokered to, the flow checks the Order Facility Change history to identify which warehouse facility previously held the item. It also records the shipgroup (the group of items within the order assigned to that facility) from which the item was removed. This ensures accurate deletion of fulfillment records, preventing canceled items from being included in the WMS feed.  
* **File Generation for WMS**: The flow generates an updated order file and places it on the SFTP location for the WMS to process.

As part of this process, HotWax tags the order with a \*\*Reshipping status\*\*:

* Pending – when the updated order is awaiting transmission to WMS.  
* Sent – once the updated order has been successfully transmitted to WMS.  

<!-- # Brokering

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
-->
