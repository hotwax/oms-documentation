---
description: Learn how to delete products from both Shopify and HotWax Commerce.
---

# Deleting products

### Delete products from Shopify and HotWax Commerce

Shopify merchants sometimes delete products to correct entry errors. To prevent data mismatches and keep inventory accurate, HotWax also soft deletes these products.

In HotWax, products are soft deleted. This means they are marked as inactive (thru-dated) rather than permanently removed, which allows the system to still handle historical data and potential returns.

#### How deletions are detected

Deletions are identified during the diff computation stage of the product synchronization flow:

* **Missing variants:** When the `Sync Shopify Product Updates` job runs, the system compares the incoming list of variants against the baseline history stored in the `ProductUpdateHistory` table.
* **Identification:** If a variant exists in the baseline history but is missing from the Shopify bulk response, the system identifies it as removed.
* **Soft deletion:** HotWax then applies this change by thru-dating the variant's association with its parent product, which delinks the variant without permanently removing the record.

This process helps HotWax handle changes correctly without creating duplicate or orphaned records.

