---
description: >-
  This document explains the Reorder Point Management feature in HotWax
  Commerce, which automates inventory replenishment reports to prevent stockouts
  and lost sales.
---

# Re-Order Feature

In HotWax Commerce, managing inventory effectively is crucial for retailers to strike a balance between ensuring well-stocked shelves and avoiding excess inventory. Manually monitoring stock levels, sell-through rates, and pending deliveries are prone to errors, resulting in issues such as stockouts, lost sales, and compromised customer experiences.

While traditional inventory thresholds help prevent stockouts and overselling online, they often neglect the issue of lost sales due to underselling. According to client needs, HotWax Commerce introduces the Reorder Point Management feature, specifically designed to not restrict sales and, in some cases, even oversell wherein the buyer is informed that the product is out of stock but will be available at a future date and they can purchase it now (i.e., place Backorders). The feature also generates a report for the clients to be informed of the products which need to be reordered.

## The Feature

The Reorder Point Feature automates the replenishment process by enabling users to set minimum inventory levels for each product. When a product's inventory (including the current inventory and any purchase orders that are yet to be received) reaches this reorder point, an automated report is triggered to notify users to reorder. This report provides comprehensive details of the product including the SKU, the brand, the current inventory level, the purchase order (PO) inventory, and the specific reorder point, facilitating informed decision-making in inventory management.

## The Implementation

Reorder Point involves leveraging a dedicated reorder channel within the Order Management System (OMS). This channel operates independently of the primary sales channel and serves solely to trigger reorder reports and manage inventory thresholds. Please refer to this [user guide](https://docs.hotwax.co/documents/retail-operations/inventory/available-to-promise/create-channel) on how to make a new channel in HotWax Commerce.

For example, if the primary sales channel, say A, starts with 100 units and has a reorder point of 10 units, a reorder Channel, say B, would have 100 inventory with a 10 threshold. As sales occur on the inventory channel A, inventories in both A and B decrease concurrently. When A sells 90 units, B's online inventory becomes depleted, triggering an automated reorder report while allowing online sales on A.

Thus, by such automation, retailers streamline inventory management, minimize lost sales opportunities, and optimize operational efficiency. It not only frees up resources that would otherwise be tied up in manual monitoring but also ensures that the right products are consistently available to meet customer demand online and in-store.

The reorder point is visible on the `product inventory` page. Retailers can check their remaining inventory before reaching the set reorder point to know when to place a new purchase order. When the online selling channel inventory reaches the reorder point that is the inventory threshold in the reorder channel, a report is triggered indicating to place a new purchase order for the products. The report usually contains following fields:

| Column Name         | Description                                                                                                                                    |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Product ID          | Unique identifier for the product                                                                                                              |
| SKU                 | Stock Keeping Unit, an internal name for the product                                                                                           |
| Brand               | Brand name of the product                                                                                                                      |
| Maximum Online ATP  | Maximum inventory available for online channels, calculated as the sum of the last inventory count minus the minimum stock and pending orders. |
| Reorder Channel ATP | Inventory available specifically for the reorder channel, indicating levels set aside for replenishment.                                       |
| PO Inventory        | Total quantity of the product available in approved or created purchase orders.                                                                |
| Reorder limit       | Minimum stock level for products in the reorder channel, aiding in inventory replenishment management.                                         |

To learn more about the re-order report, read our detailed [user manual](https://docs.hotwax.co/analytics/reports/reorder-limit)
