---
description: Learn how HotWax Commerce imports physical and digital gift card orders from Shopify.
---

# Gift card order download

Physical and digital gift card orders enter HotWax Commerce through the standard [order download flows](order-download.md), but their product and fulfillment mapping are not identical to ordinary physical products.

- A gift card line without a Shopify variant uses the configured `CUSTOM_GIFT_CARD` product mapping and imports as a completed digital item.
- A physical gift card variant follows physical product and fulfillment processing.

Verify the Shopify product, variant, `requiresShipping` value, and mapped OMS product before diagnosing the order as a generic download failure.
