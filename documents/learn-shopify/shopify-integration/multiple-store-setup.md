---
description: Learn how product data is synchronized and linked when using multiple Shopify stores for a single brand.
---

# Product synchronization for multiple Shopify stores

When multiple Shopify stores are used for a single brand, HotWax Commerce manages product data by selecting one store as the primary source of truth. This approach helps maintain a clean catalog and prevents data conflicts across different storefronts.

In a multi-store configuration, one Shopify store is designated as the **primary store** for product data sourcing. All other stores, referred to as **child stores**, are restricted to product linking. This linking is handled using a shared primary identifier, such as a SKU or UPC.

### How the synchronization works
The process of populating and linking the catalog is performed in two main stages:

1.  **Primary sync**: Product details—including names, images, and descriptions—are synchronized from the primary Shopify store using the Product download.
2.  **Child store linking**: Once products are created in the HotWax Commerce catalog, child stores are linked to these existing records. This is achieved through the `Associate Products with Shopify Shop` job, which matches Shopify Product IDs to the existing catalog based on shared identifiers.

### Managing the catalog

#### Synchronizing the primary store
The primary store is kept up to date through regular synchronization. 

*   **Automatic updates**: The product synchronization job is typically scheduled to run every 15 minutes. This ensures that new products and changes from the primary store are reflected in the OMS automatically.
*   **Verification**: Successful imports are verified by searching for product SKUs within the `PIM` section of the OMS.

#### Linking child stores
After products are synchronized from the primary store, child stores are linked to the catalog.

*   **Association job**: The `Associate Products with Shopify Shop` job is run for each child store. This job identifies matching products in the child store's Shopify catalog and links them to the records already present in HotWax Commerce.
*   **Verifying links**: Product associations are visible on the product detail page in the `PIM` under the **Shopify Shop Product** section. Both the primary and child store associations should be listed here.
*   **Manual adjustments**: If an association is missing or incorrect, it can be managed manually. New associations are added by selecting the correct Shopify store and providing the corresponding Shopify Product ID.

### Important considerations
**Source of truth**: The full product synchronization job is only intended to be run for the primary store. Running this job for child stores is avoided as it can lead to catalog management issues and data inconsistencies.

**Primary identifiers**: For the automated linking to work correctly, it is essential that products use the same SKU or UPC across all Shopify stores. These identifiers are the common link that allows HotWax Commerce to recognize the same product across different stores.
