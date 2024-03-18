---
description: >-
  Learn how to delete products from both Shopify and HotWax Commerce for
  streamlined inventory management.
---

# Deleting Products

### Deleting Products from Shopify and HotWax Commerce

Shopify merchants may need to delete products for various reasons, including creating a product with incorrect information. However, if a merchant deletes a product in Shopify and then recreates it with the same UPC, it can result in data discrepancies and affect inventory synchronization in HotWax Commerce. Therefore, it is important to also delete the corresponding products in HotWax Commerce when they are deleted in Shopify.

In HotWax Commerce, products are soft deleted, meaning they are marked as deleted but not permanently removed to manage returns. HotWax Commerce detects deleted products using [APIs](https://shopify.dev/docs/api/admin-rest/2023-04/resources/product#delete-products-product-id) to obtain a list of deleted products from Shopify. When a product variant is deleted in Shopify, the 'updated\_at' field of the parent product is updated, and the 'Sync Products' job takes care of product deletion in HotWax Commerce by identifying updated or deleted product variants. The 'Sync Products' job compares downloaded product variants with existing variants of the same product in the system. If any variants from Shopify are missing from those in HotWax Commerce, the job delinks the additional product variants from their parent product.
