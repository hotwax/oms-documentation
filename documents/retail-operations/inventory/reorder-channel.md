---
description: This document explains the Reorder Management feature in HotWax Commerce, which automates inventory replenishment and triggers reports to prevent stockouts and lost sales.
---

# Reorder Management in HotWax Commerce

In HotWax Commerce, managing inventory effectively is crucial for retailers to strike a balance between ensuring well-stocked shelves and avoiding excess inventory. Manually monitoring stock levels, sell-through rates, and pending deliveries are prone to errors, resulting in issues such as stockouts, lost sales, and compromised customer experiences.

While traditional inventory thresholds help prevent stockouts and overselling online, they often neglect the issue of lost sales due to underselling. According to client needs, HotWax Commerce introduces the Reorder Management feature, specifically designed to not restrict sales and, in some cases, even oversell wherein the buyer is informed that the product is out of stock but will be available at a future date and they can purchase it now (i.e., place Backorders). The feature also generates a report for the clients to be informed of the products which need to be reordered.

## The Feature

The Reorder Limit Feature automates the replenishment process by enabling users to set minimum inventory levels for each product. When a product's inventory (including the current inventory and any purchase orders that are yet to be received) reaches this reorder limit, an automated report is triggered to notify users to reorder. This report provides comprehensive details of the product including the SKU, the brand, the current inventory level, the purchase order (PO) inventory, and the specific reorder limit, facilitating informed decision-making in inventory management.

## The Implementation

Reorder Limits involves leveraging a dedicated reorder channel within the Order Management System (OMS). This channel operates independently of the primary sales channel and serves solely to trigger reorder reports and manage inventory thresholds.

For example, if the primary sales channel, say A, starts with 100 units and has a reorder threshold of 10 units, a reorder Channel, say B, would begin with 100 units but allow only 90 units for online sales. As sales occur on A, inventories in both A and B decrease concurrently. When A sells 90 units, B's online inventory becomes depleted, triggering an automated reorder report while allowing online sales on A.

Thus, by such automation, retailers streamline inventory management, minimize lost sales opportunities, and optimize operational efficiency. It not only frees up resources that would otherwise be tied up in manual monitoring but also ensures that the right products are consistently available to meet customer demand online and in-store. Ultimately, HotWax Commerce's Reorder Management feature empowers retailers to maintain optimal inventory levels, enhancing customer satisfaction and maximizing sales potential.

Please refer to this user guide on how to make a new channel in HotWax Commerce.
