---
description: >-
  Learn how to delete products from both Shopify and HotWax Commerce.
---
# Deleting Products


### Deleting Products from Shopify and HotWax Commerce

Shopify merchants may need to delete products for various reasons, such as correcting entry errors. To maintain data integrity, these deletions must be reflected in HotWax Commerce to avoid discrepancies in inventory and order fulfillment.

In HotWax Commerce, products are **soft deleted**. This means they are marked as inactive (thru-dated) rather than permanently removed, which allows the system to still handle historical data and potential returns.

#### How Deletions are Detected
Deletions are identified during the **Diff Computation** stage of the product synchronization flow:

1.  **Missing Variants**: When the scheduled job `poll_BulkOperationResult_ShopifyBulkQuery` picks up the bulk result, the system compares the incoming list of variants against the **Baseline History** stored in the `ProductUpdateHistory` table.
2.  **Identification**: If a variant exists in the baseline but is missing from the Shopify bulk response, the system identifies it as "removed."
3.  **Soft Deletion**: HotWax Commerce then applies this change by "thru-dating" the product identification (SKU/UPC) and delinking the variant from its parent product.

This process  makes sure that even if a merchant deletes a product and recreates it with the same identifiers, HotWax Commerce correctly handles the transition without creating duplicate or orphaned records.
