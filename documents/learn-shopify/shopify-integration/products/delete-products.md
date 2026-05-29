---
description: Learn how to delete products from both Shopify and HotWax Commerce.
---

# Deleting Products

### Delete products from Shopify and HotWax Commerce

Shopify merchants sometimes delete products to correct entry errors. To prevent data mismatches and keep inventory accurate, HotWax Commerce also soft deletes these products.

In HotWax Commerce, products are soft deleted. This means they are marked as inactive (thru-dated) rather than permanently removed, which allows the system to still handle historical data and potential returns.

#### How deletions are detected

Deletions are identified during the diff computation stage of the product synchronization flow:

* **Missing variants:** When the `Sync Shopify Product Updates` job runs, the system compares the incoming list of variants against the baseline history stored in the `ProductUpdateHistory` table.
* **Identification:** If a variant exists in the baseline history but is missing from the Shopify bulk response, the system identifies it as removed.
* **Soft deletion:** HotWax Commerce then applies this change by thru-dating the product identification (SKU/UPC) and delinking the variant from its parent product.

This process helps HotWax Commerce handle changes correctly without creating duplicate or orphaned records.

