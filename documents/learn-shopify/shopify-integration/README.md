---
description: >-
  Learn about integration between HotWax Commerce and Shopify for efficient eCommerce operations.
---

# Shopify Integration Overview

The integration between HotWax Commerce and Shopify simplifies the process for retailers to synchronize their "available to promise" inventory from HotWax Commerce to Shopify. It also allows Shopify orders to be routed to either the warehouse or store for fast fulfillment. Finally, the integration can update Shopify with tracking details for orders.

Once the product and order data are synchronized from Shopify to HotWax Commerce, and the "available to promise" inventory data is synchronized from HotWax Commerce to Shopify, you can begin using HotWax Commerce.

## What Will Be Synced Between Shopify and HotWax Commerce

<figure><img src="../../.gitbook/assets/shopify-integration.png" alt=""><figcaption><p>Flow of Data Between Shopify and HotWax Commerce</p></figcaption></figure>

**Products:** To ensure that Shopify orders can be downloaded, routed, and fulfilled, HotWax Commerce syncs Shopify product data into the HotWax catalog. Product sync imports products, variants, identifiers, images, prices, weights, tags, options, gift card flags, kit flags, and configured metafields. New products and product updates now use the product sync console and Shopify bulk operation flow instead of the old Job Manager product import jobs. Read [Product sync from Shopify](./products/download-products.md) to learn how products are synced from Shopify to HotWax Commerce.

**Inventory**: When integrating HotWax Commerce and Shopify, HotWax Commerce acts as the master of inventory availability. HotWax Commerce has the capability to integrate with various systems within the Shopify retailer's tech stack, allowing for the calculation of "sellable inventory." This information is then synchronized to Shopify at regular intervals. For additional information on how HotWax Commerce manages and synchronizes sellable inventory to Shopify, check out [here](./inventory/inventory-sync.md).

**Orders:** Initially, all open sales orders are synchronized in HotWax Commerce. Subsequently, any upcoming orders and updates, such as order cancellations, quantity changes, item deletions, shipping address modifications, and returns, are also synchronized from Shopify to HotWax Commerce.

When an order is fulfilled, HotWax Commerce updates the fulfillment status in Shopify. Read further for more information on the [synchronization process](./orders/order-download.md) of orders from Shopify to HotWax Commerce and the updating of [fulfillment status](./order-fulfillment/README.md) from HotWax Commerce to Shopify.

\
\
\
\
\
\\
