---
description: Learn how Shopify product changes update HotWax Commerce products.
---

# Updating product details

Merchants usually maintain product details in Shopify. HotWax Commerce imports those changes through the product update sync process, then applies them to the HotWax catalog.

Use the [Product Sync Console](product-sync-console.md) to monitor recent product update runs and review sync history. Don't use the old Job Manager `Sync Products` or `Import Products` flow for current Shopify product updates.

## What changes HotWax can apply

HotWax compares Shopify product data with the product data already stored for the selected shop.

| Shopify change | HotWax impact |
| --- | --- |
| Product title, handle, vendor, or image changes | Updates the HotWax parent product. |
| Variant title, price, image, weight, shipping flag, or inventory item ID changes | Updates the HotWax variant product. |
| Stock keeping unit, barcode, or Shopify ID changes | Updates product identifiers and Shopify product links when the configured identifier matches the incoming Shopify value. |
| Product option changes | Updates product features and variant associations. |
| Product type or tag changes | Updates product tags or product type handling when the product store accepts those updates. |
| Metafield changes | Updates HotWax product attributes for configured metafields. |
| New variants | Creates or links new HotWax variant products. |
| Removed variants | Expires the variant association from the parent product. |

## How the update process runs

HotWax Commerce queues a Shopify product update request for the selected shop. Shopify prepares a product data file through a bulk operation. HotWax Commerce then reads the file, records product differences, and applies those differences to HotWax product records.

This is different from the older Job Manager model. The current process doesn't require a manual product update job from the Product page. Use product sync history to confirm whether a product update run completed and whether HotWax Commerce reported failed records.

## When product changes don't appear

If a Shopify change doesn't appear in HotWax Commerce, check these points in order:

1. Confirm the selected Shopify shop has a recent product sync run.
2. Open product sync history and check whether the run finished.
3. Review failed record counts and error details.
4. Confirm the product store identifier still matches the Shopify product or variant.
5. Confirm the product belongs to the correct product store and Shopify shop.

Avoid starting another import until you understand the current or failed run. Duplicate attempts can make it harder to identify the first failure.
