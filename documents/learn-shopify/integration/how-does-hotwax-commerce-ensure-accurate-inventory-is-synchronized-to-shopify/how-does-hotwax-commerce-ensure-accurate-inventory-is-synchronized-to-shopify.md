---
description: >-
  Discover how HotWax Commerce offers seamless inventory management by
  integrating with various systems.
---

# Inventory

HotWax Commerce provides a unified view of inventory by seamlessly connecting with various technology systems used by retailers, including Enterprise Resource Planning (ERP), Point of Sale (POS), and Warehouse Management Systems (WMS). HotWax Commerce ensures that inventory updates from all these systems are synchronized to support various business scenarios.

**In-store sales:** It is necessary to reduce the inventory counts of products in HotWax Commerce during in-store sales.

**In-store receiving:** Inventory counts of products must be increased in HotWax Commerce when stores receive products through purchase orders, transfer orders, or returns.

**Inventory variances:** If there is missing or defective inventory, it should be reported to HotWax Commerce. Similarly, if lost inventory is found, new inventory should be reported to HotWax Commerce.

**Warehouse receiving:** HotWax Commerce requires timely notification of new inventory when warehouses or fulfillment centers receive purchase orders or returns.

HotWax Commerce determines the "Available to Promise (ATP)" or the amount of inventory that can be sold and then sends it to Shopify. This makes HotWax Commerce the ultimate authority on inventory availability.

**How Does Hotwax Commerce Calculate The “Available To Promise” Before Pushing It To Shopify?**

HotWax Commerce syncs the inventory levels of products available on both HotWax Commerce and Shopify. The product ID from Shopify is stored in HotWax Commerce and serves as a unique identifier to match the products in both systems. HotWax Commerce considers various factors, such as safety stock, threshold, reserved quantity (inventory allocated to sales orders but not fulfilled), orders in the brokering queue (orders that are captured but inventory is not allocated), and excluded facilities, when calculating ATP.

Let’s take a look at an example:

The product "blue shirt" from Brand ABC has been assigned plate number 100 QOH, and it has already received orders for 10 of them, and inventory is allocated for 5 sales orders. The ATP can be calculated using the following formula.

\
ATP = QOH - (Reserved quantities + Safety stock + Threshold + Orders in brokering queue + Excluded facilities’ ATP)

Given:

<table data-header-hidden data-full-width="false"><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Quantity on hand</td><td>100 Units</td></tr><tr><td>Reserved quantities</td><td>5 Units</td></tr><tr><td>Safety stock</td><td>5 Units</td></tr><tr><td>Threshold</td><td>5 Units</td></tr><tr><td>Orders in brokering queue</td><td>5 Units</td></tr><tr><td>Excluded facilities' ATP</td><td>5 Units</td></tr></tbody></table>

Hence,

$$
ATP = 100 - (5+5+5+5+5) = 100 - (25) = 75
$$

HotWax Commerce will now push 75 units to Shopify as sellable inventory for online orders.
