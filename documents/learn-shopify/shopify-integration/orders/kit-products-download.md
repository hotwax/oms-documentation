---
description: Learn how HotWax Commerce downloads kit orders from Shopify.
---

# Kit order download

## How kit orders download from Shopify

HotWax Commerce imports orders for kit products from Shopify through the [order download process](order-download.md).

When HotWax Commerce imports an order, it identifies the kit in the database. For each item, the system retrieves its associated product ID.

These product IDs are predefined in HotWax Commerce and mapped to specific product types. For example:

| Product ID | Product Type         |
| ---------- | -------------------- |
| 1001       | `FINISHED GOOD`        |
| 2010       | `MARKETING_PKG_PICK` |

Once the product type is identified as `MARKETING_PKG_PICK`, HotWax Commerce associates it with the right kit. The system then recognizes it as a kit order.

## Kit order brokering

After identifying the product type as a [kit product](/documents/learn-shopify/shopify-integration/product-sync/kit-products/download-kit-products), HotWax Commerce brokers the entire kit order to the facility where the inventory is available rather than brokering each component separately.

Fulfilling all items within a kit from the same facility maintains the integrity of the kit and simplifies fulfillment.