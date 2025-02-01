---
description: >-
  Learn how Kit products and their components are efficiently downloaded from
  Shopify to HotWax Commerce for enhanced product management.
---

# Kit Products Download

#### Kit Products Set-up in HotWax Commerce

HotWax Commerce suggests that retailers set up kit products in Shopify as individual products with their SKUs, just like any other item. Even though these kits are made up of several components, Shopify treats them as a single product.

HotWax Commerce downloads kit products and their components like regular products through the `Import Products`
[job](https://docs.hotwax.co/documents/learn-shopify/shopify-integration/how-are-products-downloaded-from-shopify-to-hotwax-commerce/product-download) and uses its[ integration with NetSuite](https://docs.hotwax.co/documents/learn-netsuite/integration-flows/kit-products) to identify the components that make up each kit.

#### Managing Kit Products with the Bundles App and HotWax Commerce

Shopify retailers often use apps like Bundles to sell kit products by linking their components (products included in a kit) from Shopify’s product catalog. The Bundles App creates kits by adding the component SKUs to the bundle’s metafield.

HotWax Commerce imports these kit products and their components through the `Import Products` job and reads the metafields to understand the relationship between kits and their components. A job is run to check if a product includes components. If the product is identified as a kit, it is categorized as `MARKETING_PKG_PICK` in HotWax Commerce. This links the components (as separate SKUs) to make sure they are reserved and fulfilled together when the kit is ordered.

{% hint style="warning" %}
Bundles App has its [drawbacks](https://docs.hotwax.co/documents/learn-shopify/additional-resources/kit-products) when it comes to determining inventory for multi-location fulfillment.
{% endhint %}
