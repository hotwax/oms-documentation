---
description: >-
  Explore the product management system of New Era Caps Japan, where UPCA serves
  as the primary identifier for seamless synchronization across platforms,
  including Shopify and Smaregi POS.
---

# Products

New Era Caps uses`UPCA` as their primary product identifier when products are synced from Shopify to the OMS.

UPCA is also the primary identifier used when creating feeds for all external systems including Smaregi POS.

## Product Sync from Shopify

Product sync is required to keep OMS updated with the latest and accurate product data from Shopify, for smooth order processing and inventory management. Products are first created on Shopify, then OMS sync these products through batch jobs.

To simplify product sync from Shopify, Products are linked to sub catalogs using the primary product identifier set in the Product Store settings, SKUs. This process is done by job workflows which can be configured from the [Job Manager app](https://docs.hotwax.co/documents/retail-operations/workflow/job-workflows).

### Batch Jobs for Product Sync

* [Import new products](https://docs.hotwax.co/documents/retail-operations/workflow/job-workflows/products#import-new-product)

  **This job is used for importing new products from Shopify to HotWax.** In case if a new product is created in Shopify but not yet synced to HotWax (because the job hasn’t run), and an order is placed for that product, HotWax creates a placeholder. When the sync job runs, the placeholder is replaced with the actual product.

* [Import product updates](https://docs.hotwax.co/documents/retail-operations/workflow/job-workflows/products#import-product-updates)

  **The Import Product Updates job is used for importing updates on products from Shopify to HotWax**. This job makes an API call on Shopify to retrieve all the products that are updated between the last job run time and the current timestamp by checking the updated_at field in Shopify. In response to this request, Shopify provides a JSON file that is imported into HotWax by the Import Product Update job.

**Batch Job to link product with sub catalog**

* [Associate products with sub catalog](https://docs.hotwax.co/user-guides/workflow/job-workflows/products#associate-products-with-sub-catalog)

  The Associate Product with Sub Catalog job maps specific products to their respective sub-catalogs, verifying accurate product linkage within the catalog.
  
  A script from the ERP generates a JSON file containing product and catalog mapping details and uploads it to an SFTP location. The Associate Product with Sub Catalog job then imports this JSON into HotWax and uploads it to the appropriate MDM table. Finally, the Process Bulk Import Files job processes the file within HotWax OMS.



