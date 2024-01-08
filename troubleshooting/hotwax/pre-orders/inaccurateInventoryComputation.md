# Inaccurate Inventory Computation in HotWax Commerce

## Challenge

Unavailability of Pre-Order Option for a product on Shopify Store Despite 0 Inventory and Linkage to HotWax Commerce

## Description

HotWax is encountering issues accurately reflecting product availability, notably during pre-orders for specific items. The problem arises when HotWax depends on Shopify for inventory data, resulting in products being inaccurately displayed as in stock when they are, in fact, out of stock. 


## Explanation

### Inventory within Shopify:
- Shopify's available inventory is computed by deducting open orders from the physical inventory published by the ERP.
- During pre-selling, inventory levels can go below zero due to overcommitment of inventory, causing negative inventory.
  

### HotWax's Inventory Computation when reading inventory from Shopify:
- HotWax deliberately disables specific functionalities to reserve inventory for committed orders, ensuring that committed inventory is not deducted twice. This precaution is taken because Shopify already incorporates committed inventory within its shared inventory levels.

**Current State of Inventory Deduction in HotWax**

|                             | Reserve Inventory Enabled                      | Reserve Inventory Disabled                     |
|-----------------------------|-------------------------------------------------|--------------------------------------------------|
| QOH Inventory in ERP        | 20                                              | 20                                               |
| Committed orders             | 10                                              | 10 (ignored)                                     |
| Inventory from Shopify       | 10                                              | 10                                               |
| Available to sell in HotWax   | 0 (=20-10-10)                                   | 10 (=20-10)                                      |


- HotWax relies on Shopify's inventory-level webhooks as a crucial mechanism to determine the available inventory for its products. In HotWax, negative inventory values from Shopify are systematically treated as zero, mitigating the risk of inaccurate stock calculations. The issue arises when HotWax reads inventory from multiple locations. This process introduces a potential for inaccuracies in product availability computations, particularly when Shopify indicates negative stock levels.

| *Location*  | *Shopify* | *HotWax*  |
|-----------|---------|---------|
| **Canada**    | 1      | 1     |
| **Belgium**  | -1      | 0       |
| **Available** | **0**  | **1**      |



## Troubleshooting Steps

**For Shopify**

1. **Navigate to the Product on Shopify:**
   - Locate the specific product within your Shopify admin panel.

2. **Check Inventory:**
   - Review the inventory level for the product at all the locations. Hint: There must be locations with negative inventory numbers.

3. **Verify the sum of location Inventories:**
   - Ensure that the combined inventory from all locations sums to 0.

**For HotWax**

4. **Find the Product in HotWax:**
   - Locate the corresponding product in the HotWax Commerce Pre-order app's [Catalog page](https://preorder.hotwax.io/catalog) and click the product to open the Product Audit page. 

5. **Check Inventory in the Online ATP calculation card:**
   - Examine the inventory level for the product within HotWax. The online ATP would be more than 0.


To see how HotWax allocates pre-orders to physical inventory when HotWax is the source of inventory, check out this blog: https://www.hotwax.co/blog/how-to-capture-and-release-shopify-pre-orders-with-ease
