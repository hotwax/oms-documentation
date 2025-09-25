---
description: >-
  Learn how New Era Caps syncs products from Shopify to HotWax
  Commerce, using simplified product management.
---

# Products
New Era Caps manages a wide range of products and frequently launches new products. To maintain accurate product data across Shopify and HotWax Commerce, ensuring all products are correctly represented in both systems, the HotWax product import workflow enables this synchronization.


## Product Sync from Shopify

Products are first created in Shopify, and then OMS picks up these products through scheduled batch jobs. Also in case product details are updated in Shopify such as identification, features, tags or pricing those changes are also captured and updated in HotWax Commerce through the scheduled batch jobs.


## Batch Jobs for Product Sync

To support functions like, product creation and product updates, HotWax provides two separate automated functionalities that can also be executed manually when required.  

* **Create New Product**
This is a scheduled batch job that imports new products from Shopify into HotWax. The job runs twice daily and fetches new products from Shopify using the `created_at` field. It then creates these new products in OMS.  

* **Update Existing New Products**
The Import Product Updates job keeps product changes in HotWax aligned with Shopify.  
It runs every six hours. During each run, the job makes an API call to Shopify and retrieves all products that have been updated since the last execution, using the updated_at field in the product JSON to track changes. Shopify returns this data as a JSON response, which the job then imports into HotWax. 
