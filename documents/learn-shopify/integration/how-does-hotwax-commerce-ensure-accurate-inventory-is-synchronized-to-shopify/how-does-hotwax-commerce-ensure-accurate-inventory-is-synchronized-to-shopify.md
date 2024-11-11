---
description: >-
  Discover how HotWax Commerce calculates ATP inventory.
---

# Inventory

HotWax Commerce provides a unified view of inventory by integrating with various systems present in a retailer's teck stack, including Enterprise Resource Planning (ERP), Point of Sale (POS), and Warehouse Management Systems (WMS). HotWax Commerce ensures that inventory updates from all these systems are synchronized to support various business scenarios.

**In-store sales:** During in-store sales, inventory counts of products is automatically reduced in HotWax Commerce.
 
**In-store receiving:** When stores receive new inventory through Purchase Orders, Transfer Orders, or Returns, HotWax Commerce increases the inventory counts accordingly, maintaining an accurate stock record.

**Inventory variances:** Missing or defective items can lead to inventory discrepancies. Any adjustments, such as reporting lost or defective inventory or reclaiming found items, should be updated in HotWax Commerce. Cycle Counts also help identify variances, which are also automatically synchronized to HotWax Commerce, ensuring accurate inventory levels.

**Warehouse receiving:** As warehouses or fulfillment centers receive new inventory from Purchase Orders, Transfer Orders, or Returns, timely updates are made in HotWax Commerce to reflect these additions in the overall inventory.

After consolidating all relevant inventory data, HotWax Commerce calculates the Online Available to Promise (ATP), which reflects the quantity available for online sales. This ATP value is then synced to Shopify as the definitive inventory level. Let’s examine how this calculation works.

**How Does Hotwax Commerce Calculate The “Online ATP” Before Pushing It To Shopify?**

To determine the "Online Available to Promise" (ATP) for Shopify, HotWax Commerce calculates the available inventory by accounting for several key factors beyond just the total stock. These include, Safety Stock, Threshold, Reserved Quantity (inventory allocated to sales orders but not fulfilled), orders in the Brokering Queue (orders that are captured but inventory is not allocated), and Excluded Facilities when calculating `online ATP`.

Once all these factors are considered, HotWax Commerce calculates the accurate `Online ATP` and syncs it to Shopify. The product ID from Shopify is stored in HotWax Commerce and serves as a unique identifier to match the products in both systems.

Let’s take a look at an example:

The product "blue shirt" from Brand NotNaked has been assigned plate number 100 QOH, and it has already received orders for 10 of them, and inventory is allocated for 5 sales orders. The ATP can be calculated using the following formula.

Online ATP = QOH - (Reserved quantities + Safety stock + Threshold + Orders in brokering queue + Excluded facilities’ ATP)

Given:

<table data-header-hidden data-full-width="false"><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Quantity on hand</td><td>100 Units</td></tr><tr><td>Reserved quantities</td><td>5 Units</td></tr><tr><td>Safety stock</td><td>5 Units</td></tr><tr><td>Threshold</td><td>5 Units</td></tr><tr><td>Orders in brokering queue</td><td>5 Units</td></tr><tr><td>Excluded facilities' ATP</td><td>5 Units</td></tr></tbody></table>

Hence,

$$
Online ATP = 100 - (5+5+5+5+5) = 100 - (25) = 75
$$

HotWax Commerce will push 75 units as the sellable `Online ATP` to Shopify, ensuring accurate inventory representation for online sales.

The precise `Online ATP` calculation prevents both overselling and underselling, making HotWax Commerce the single source of truth for inventory availability across all channels.
