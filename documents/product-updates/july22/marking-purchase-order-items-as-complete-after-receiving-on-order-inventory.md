---
description: >-
  HotWax Commerce now allows merchants to mark individual PO items as
  "Complete," providing greater control over pre-order eligibility and
  preventing overselling.
---

# Marking Purchase Order Items as “Complete” After Receiving On-Order Inventory

<figure><img src="https://www.hotwax.co/hubfs/Product%20Updates%20and%20Release%20Notes/2022/July%202022/Product%20Updates/Featured%20Images/Marking%20Purchase%20Order%20Items%20as%20%E2%80%9CComplete%E2%80%9D%20After%20Receiving%20On-Order%20Inventory.png" alt=""><figcaption></figcaption></figure>

Periodically, HotWax Commerce analyzes future inventory from open Purchase Order (PO) items to decide the pre-order eligibility of specific products and create a master catalog of pre-order items. Once that process is complete, the items are pushed to eCommerce to enable incoming pre-orders.

Purchase Order items have a future “Available to Promise” data point that pinpoints exactly how many pre-orders can be taken for a specific item. When Purchase Order items are physically received before their expected arrival date, HotWax Commerce receives the inventory feed and can allocate the stock to pre-orders that have already been captured. As a result, the future “Available to Promise” on the Purchase Order item is reduced accordingly.

If pre-orders consume the total future “Available to Promise,” it is automatically set to 0. But if inventory is received before the arrival date, it’s likely the number of pre-orders received for an item has not consumed this total future “Available to Promise.”

Merchandisers can manually allocate available inventory to pre-orders, or rely on HotWax Commerce to complete this process automatically based on custom configuration. Occasionally, pre-orders don’t consume all the available inventory, so there is remaining inventory eligible for sale, or simply actual “Available to Promise.” In this case, a periodic job in HotWax Commerce removes the product from the pre-order catalog and updates it in eCommerce to accept regular orders (rather than pre-orders).

If the available inventory is consumed by regular orders when pre-orders are being accepted, the product goes out of stock, and the actual “Available to Promise” is now 0.

When HotWax Commerce analyzes future inventory from open Purchase Order (PO) items to decide the pre-order eligibility, it checks:

* The arrival date is today or in the future
* The actual “Available to Promise” is 0. If not, that means inventory is available and the item is not eligible for pre-orders.
* The future “Available to Promise” of the Purchase Order item is greater than 0, which means the item is still available for taking pre-orders.

In this sample scenario, where the Purchase Order item inventory is received before the expected arrival date, the actual “Available to Promise” is 0, and the future “Available to Promise” is greater than 0, HotWax Commerce assumes that the Purchase Order item is eligible for taking pre-orders. As a result, the system adds it to the pre-order catalog and syncs to eCommerce so it becomes eligible for taking pre-orders.

However, this item is in fact not available for taking pre-orders, resulting in overselling of the Purchase Order items. To avoid this, Purchase Order items must be marked as “Complete” so the periodic job does not pick these Purchase Order items when deciding if pre-orders can be taken or not.

In this update, HotWax Commerce added a new feature to mark individual Purchase Order items as “Complete,” giving merchants more control over Purchase Order items and reducing the risk of overselling in this scenario. However, orders for other items (that are not marked as “Complete”) will still flow in until the merchant marks them or the entire purchase order is completed.
