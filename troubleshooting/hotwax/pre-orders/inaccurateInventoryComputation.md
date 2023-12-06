# Inaccurate Inventory Computation in HotWax Commerce

## Brief Summary
HotWax is encountering issues accurately reflecting product availability, notably during pre-orders for specific items. The problem arises when HotWax depends on Shopify for inventory data, resulting in products being inaccurately displayed as in stock when they are, in fact, out of stock. 


## Explanation

### Inventory within Shopify:
- Shopify's available inventory is computed by deducting open orders from the physical inventory published by the ERP.
- During pre-selling, inventory levels can go below zero due to overcommitment of inventory, causing negative inventory.
  

### HotWax's Inventory Computation when reading inventory from Shopify:
- HotWax has intentionally disabled certain functionalities to reserve inventory for committed orders. This action prevents the deduction of committed inventory twice, as Shopify already includes committed inventory in its shared inventory levels.
- HotWax relies on Shopify's inventory-level webhooks as a key mechanism to determine the available inventory for products.
- Negative inventory from Shopify is treated as zero in HotWax, causing inaccurate stock calculations.
- The primary issue arises when HotWax reads inventory from multiple locations. This process can result in inaccurate product availability computations, especially when Shopify indicates negative stock levels.

| *Location*  | *Shopify* | *HotWax*  |
|-----------|---------|---------|
| **Canada**    | 1      | 1     |
| **Belgium**  | -1      | 0       |
| **Available** | **0**  | **1**      |


### Disabled Functionalities:
- In these cases, 
- Enabling deduction of committed orders while reading from Shopify would lead to inaccurate pre-order listings.


### Current State of Inventory Deduction in HotWax
|                             | Reserve Inventory Enabled                      | Reserve Inventory Disabled                     |
|-----------------------------|-------------------------------------------------|--------------------------------------------------|
| QOH Inventory in ERP        | 20                                              | 20                                               |
| Committed orders             | 10                                              | 10 (ignored)                                     |
| Inventory from Shopify       | 10                                              | 10                                               |
| Available to sell in HotWax   | 0 (=20-10-10)                                   | 10 (=20-10)                                      |



## Troubleshooting Steps:

**For Shopify**

1. **Navigate to the Product on Shopify:**
   - Locate the specific product within your Shopify admin panel.

2. **Check Inventory on Warehouse One:**
   - Review the inventory level for the product in the first warehouse.

3. **Check Inventory on Warehouse Two:**
   - Similarly, assess the inventory for the same product in the second warehouse.

4. **Verify Sum of Warehouse Inventories:**
   - Ensure that the combined inventory from both warehouses sums to 0.

**For HotWax**

5. **Find the Product in HotWax:**
   - Locate the corresponding product on https://preorder.hotwax.io/catalog, go to the product audit page to see more details.

6. **Check Inventory in the Online ATP calculation card:**
   - Examine the inventory level for the product in within HotWax. The online ATP would be more than 0.


To see how HotWax allocates pre-orders to physical inventory when HotWax is the source of inventory, check out this blog: https://www.hotwax.co/blog/how-to-capture-and-release-shopify-pre-orders-with-ease
