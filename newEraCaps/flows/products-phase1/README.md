---
description: >-
  Learn how New Era Caps syncs products from Shopify to HotWax
  Commerce, using simplified product management.
---

# Products
Products
New Era Caps manages a broad catalog and frequently launches new products. To maintain accuracy and consistency across Shopify and HotWax Commerce, the Product Synchronization workflow automates the import and update of product data between the two systems.
## Product Sync from Shopify
Products are first created in Shopify. The OMS then retrieves these products through scheduled batch jobs. Any subsequent updates in Shopify—such as changes to identification, features, tags, or pricing—are also captured and synchronized with HotWax Commerce, ensuring both systems remain aligned.
## Create/Update Products from Shopify
HotWax provides an automated Product Synchronization job (with the option for manual execution) to support both product creation and product updates:
This scheduled batch job manages both the creation of new products and the updating of existing products in HotWax OMS.
Product Creation: The job runs twice daily to import newly created products from Shopify using the created_at field and creates them in OMS.


Product Updates: The same job also checks for changes to existing products every six hours. It makes an API call to Shopify, retrieves products updated since the last run (using the updated_at field in the product JSON), and imports those updates into OMS.
