---
description: >-
  Merchandisers will now acquire better understanding of inventory allocation by
  reallocating future inventory from purchase orders to sales orders.
---

# Merchandisers will get better explainability when PO’s future inventory is reallocated

<figure><img src="https://www.hotwax.co/hubfs/Inventory%20explainability.png" alt=""><figcaption></figcaption></figure>

HotWax Commerce reads and analyzes Purchase Orders (PO) to display eligible pre-order items on Shopify. Once pre-orders are captured on these items, PO ATP is allocated to these sales orders.

Merchandisers often place multiple POs for the same products.

> For example: If a merchandiser initially placed a PO (#1258) for a blue polo t-shirt with an expected arrival date of June 30th. However, a few days later, they decided to place another PO (#1275) for the same t-shirt, but with an earlier due date of June 25th. Suppose there is a Sales Order (#306) that was originally intended to be fulfilled using the inventory from the initial PO (#1258). To ensure timely delivery and align with customer expectations, the system automatically reallocates the inventory from the latest PO (#1275) to fulfill this specific Sales Order (#306). This adjustment guarantees that customers who placed pre-orders first receive their items on time.

For merchandisers, it is crucial to have visibility into the allocation of future inventory to Sales Orders. This enables accurate order fulfillment and ensures that the right products are delivered to customers at the right time. Additionally, tracking the inventory of each Purchase Order is essential for maintaining accurate records and monitoring overall inventory status.

> For example: If the new purchase order (PO #1275) initially had 50 units of blue polo t-shirts, and 4 of those t-shirts are automatically reallocated to the sales orders, the merchandisers would want to understand why the Available-to-Promise (ATP) quantity for that purchase order decreased from 50 to 46. This information is crucial for maintaining accurate inventory records and determining the overall inventory status.

To provide explainability and transparency in this process, HotWax Commerce now displays reallocation details in the Communication Events section of the View Purchase Order page. Here, merchandisers will easily find information about future inventory of which PO is allocated to which Sales Order, including the preferred product identifier (UPCA, SKU), the adjusted quantity, and insights into the extent of the change.

By automating inventory reallocation, we eliminate the need for manual allocation, saving time and reducing complexity for merchandisers. However, we understand that it is important for merchandisers to stay informed about inventory changes and allocations. That's why we have added explainability to ensure merchandisers have confidence in managing future inventory and tracking its allocation.
