---
description: >-
  Learn how kit products and their components are downloaded from Shopify to HotWax Commerce.
---

# Kit products download

#### Kit products setup in HotWax Commerce

HotWax suggests that retailers set up kit products in Shopify as individual products with their SKUs, just like any other item. Even though these kits are made up of several components, Shopify treats them as a single product.

HotWax downloads kit products and their components like regular products through the `Sync Shopify Product Updates` job and uses integration with [ERP systems](/documents/learn-netsuite/integration-flows/kit-products.md) to identify the components that make up each kit.

#### Manage kit products with the Bundles app and HotWax

Shopify retailers often use apps like Bundles to sell kit products by linking their components (products included in a kit) from Shopify’s product catalog. The Bundles app creates kits by adding the component SKUs to a metafield on the bundle product.

HotWax imports these kit products and their components through the `Sync Shopify Product Updates` job and reads the metafields to understand the relationship between kits and their components. A job runs to check if a product includes components. If the product is identified as a kit, it is categorized as `MARKETING_PKG_PICK` in HotWax. This links the components (as separate SKUs) to make sure they are reserved and fulfilled together when the kit is ordered.

{% hint style="warning" %}
Bundles app has its [drawbacks](https://docs.hotwax.co/documents/learn-shopify/additional-resources/kit-products) when it comes to determining inventory for multi-location fulfillment.
{% endhint %}

