# Inaccurate Inventory Computation in HotWax Commerce

## Brief Summary
HotWax is experiencing inaccuracies in calculating product availability, leading to the erroneous display of products as in stock when they are actually out of stock. This issue is particularly evident during pre-orders for certain products.

<br>

## Explanation
<br>

### Inventory within Shopify:
- Shopify's available inventory is computed by deducting open orders from the physical inventory published by the ERP.
- During pre-selling, inventory levels can go below zero due to overcommitment of inventory, causing negative inventory.
  
<br>

### HotWax's Current Inventory Computation:
- HotWax relies on Shopify's inventory-level webhooks to determine available inventory.
- Negative inventory from Shopify is treated as zero in HotWax, causing inaccurate stock calculations.
- The issue arises when HotWax reads inventory from multiple locations and computes products as in stock even when Shopify indicates they are out of stock.

| *Location*  | *Shopify* | *HotWax*  |
|-----------|---------|---------|
| **Canada**    | 1      | 1     |
| **Belgium**  | -1      | 0       |
| **Available** | **0**  | **1**      |

<br>

### Disablement of Functionalities:
- In these cases, HotWax have disabled functionalities to reserve inventory for commmitted inventory against orders, preventing deduction of committed inventory twice, as Shopify already shares the inventory level with committed inventory.
- Enabling deduction of committed orders while reading from Shopify would lead to inaccurate pre-order listings.

<br>

### Current State of Inventory Deduction in HotWax
|                             | Reserve Inventory Enabled                      | Reserve Inventory Disabled                     |
|-----------------------------|-------------------------------------------------|--------------------------------------------------|
| QOH Inventory in ERP        | 20                                              | 20                                               |
| Committed orders             | 10                                              | 10 (ignored)                                     |
| Inventory from Shopify       | 10                                              | 10                                               |
| Available to sell in HotWax   | 0 (=20-10-10)                                   | 10 (=20-10)                                      |
