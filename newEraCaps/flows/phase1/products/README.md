---
description: >-
  Learn how New Era Caps syncs products from Shopify to HotWax
  Commerce, using simplified product management.
---

# Products
New Era Caps manages a broad catalog and frequently launches new products. To maintain accuracy and consistency across Shopify and OMS, the Product Synchronization workflow automates the import and update of product data between the two systems.  
## Product Identifier
New Era Caps uses `UPCA` as their primary product identifier when products are synced from Shopify to the OMS.  

UPCA is also the primary identifier used when creating feeds for all external systems including Smaregi POS.   
## Product Sync from Shopify
Products are first created in Shopify. The OMS then retrieves these products through scheduled batch jobs. Any subsequent updates in Shopify—such as changes to identification, features, tags, or pricing—are also captured and synchronized with OMS, ensuring both systems remain aligned.  
## Create/Update Products from Shopify
OMS provides an automated **Product Synchronization job** (with the option for manual execution) to support both product creation and product updates:  
This scheduled batch job manages both the creation of new products and the updating of existing products in OMS.  
* **Product Creation**: The job runs twice daily to import newly created products from Shopify using the `created_at` field and creates them in OMS.  
* **Product Updates**: The same job also checks for changes to existing products every six hours. It makes an API call to Shopify, retrieves products updated since the last run (using the updated_at field in the product JSON), and imports those updates into OMS.  

**Product Creation and Synchronization Process**  
To ensure accurate synchronization and seamless inventory updates across Shopify, OMS, and Smaregi, the following process should be followed:
* **Create products and all their variants in Shopify first**  
This ensures that the OMS can correctly identify and sync complete product information — including default and variant details — before any inventory updates occur.


* **Once the products exist in Shopify, create them in Smaregi.**  
This keeps all systems aligned and ensures product and inventory data flow smoothly across platforms.

By following this sequence, all products and their variants remain consistent across systems, synchronization errors are avoided, and inventory updates are processed accurately. If creating all variants at once is not feasible, the product sync job should be paused until all variants are fully set up to maintain data integrity.




















<!--
---
description: >-
  Learn how New Era Caps syncs products from Shopify to HotWax
  Commerce, using simplified product management.
---

# Products
New Era Caps manages a broad catalog and frequently launches new products. To maintain accuracy and consistency across Shopify and HotWax Commerce, the Product Synchronization workflow automates the import and update of product data between the two systems.

## Product Sync from Shopify
Products are first created in Shopify. The OMS then retrieves these products through scheduled batch jobs. Any subsequent updates in Shopify—such as changes to identification, features, tags, or pricing—are also captured and synchronized with HotWax Commerce, ensuring both systems remain aligned.

## Create/Update Products from Shopify
HotWax provides an automated **Product Synchronization job** (with the option for manual execution) to support both product creation and product updates:  

This scheduled batch job manages both the creation of new products and the updating of existing products in HotWax OMS.

- **Product Creation**: The job runs twice daily to import newly created products from Shopify using the created_at field and creates them in OMS.
- **Product Updates**: The same job also checks for changes to existing products every six hours. It makes an API call to Shopify, retrieves products updated since the last run (using the updated_at field in the product JSON), and imports those updates into OMS.
-->
