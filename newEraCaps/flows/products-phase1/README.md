---
description: >-
  Learn how New Era Caps syncs products from Shopify to HotWax
  Commerce, using simplified product management.
---

# Products

New Era Caps manages a wide variety of products and often introduces new launches. In such cases, it becomes necessary to keep product data updated in both Shopify and HotWax Commerce for smooth processing. Accurate product information in OMS is important for order management and inventory tracking.  

For a retailer like New Era Caps, keeping product information accurate across systems is essential. If product details in Shopify and HotWax Commerce are not aligned, it can lead to issues such as incorrect availability or delayed orders.  

## Product Sync from Shopify

Products are first created in Shopify, and then OMS picks up these products through scheduled batch jobs. Also in case product details are updated in Shopify such as identification, features, tags or pricing those changes are also captured and updated in HotWax Commerce through the scheduled batch jobs. This ensures that OMS always has the latest catalog

## Batch Jobs for Product Sync

To support functions like, product creation and product updates, HotWax provides two separate automated functionalities that can also be executed manually when required.  

* **Create New Product**
This is a scheduled batch job that imports new products from Shopify into HotWax. It runs twice a day, once at midnight (00:00) and once at 3:00 PM (15:00).  
During each run, the job makes an API call to Shopify and retrieves all products created since the last execution by checking the created_at field in the product JSON. It then creates these new products in OMS.  

* **Update Existing New Products**
The Import Product Updates job keeps product changes in HotWax aligned with Shopify.  
It runs four times a day at 12:00 AM, 6:00 AM, 12:00 PM, and 6:00 PM.  
During each run, the job makes an API call to Shopify and retrieves all products that have been updated since the last execution, using the updated_at field in the product JSON to track changes.  
Shopify returns this data as a JSON response, which the job then imports into HotWax.  
