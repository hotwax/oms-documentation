---
description: Learn how HotWax Commerce identifies product updates between Shopify and the OMS.
---

# Updating product details

Merchants use Shopify to update product information such as names, images, tags, and weight. HotWax Commerce identifies these changes as part of the product download.

### Identify updates with diff computation

Instead of comparing every individual field during every sync, HotWax Commerce uses diff computation to find exactly what changed. The system groups product data and computes a unique digital signature (SHA-256 hash) for each group.

The core service `sync#ShopifyProduct` compares the incoming hashes against the details stored in the `ProductUpdateHistory` table. If the hashes match, the system knows no changes occurred and skips that data. If the hashes differ, the system identifies the exact delta (what was added, removed, or changed) and applies only those specific updates to the database.

### Product field mapping

HotWax Commerce maps the fields from the Shopify JSON to the internal product entities. The following table outlines how these fields are synchronized:

| Shopify JSON field | HotWax Commerce field | Description |
| :--- | :--- | :--- |
| `id` (GID) | Shopify Product ID | A unique ID used to identify the product. |
| `title` | Product Name | The name shown for the product. |
| `handle` | Internal Name | Used in the product’s URL and for internal use. |
| `vendor` | Brand | The brand or company that makes the product. |
| `productType` | Category | The type or category the product belongs to. |
| `tags` | Keywords | Tags used to search and organize products. |
| `variants.sku` | SKU | A unique code to track the product. |
| `variants.barcode` | UPCA/GTIN | Barcode used for scanning the product. |
| `variants.price` | Price | The selling price of the product. |
| `variants.weight` | Weight | The product’s weight, used for shipping. |
