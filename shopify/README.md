---
description: >-
  Discover seamless integration between HotWax Commerce and Shopify to
  streamline your e-commerce operations efficiently.
---

# Shopify Integration Overview

The integration between HotWax Commerce and Shopify simplifies the process for retailers to synchronize their "available to promise" inventory from HotWax Commerce to Shopify. It also allows Shopify orders to be routed to either the warehouse or store for fast fulfillment. Finally, the integration can update Shopify with tracking details for orders.

Once the product and order data are synchronized from Shopify to HotWax Commerce, and the "available to promise" inventory data is synchronized from HotWax Commerce to Shopify, you can begin using HotWax Commerce.

## What Will Be Synced Between Shopify and HotWax Commerce?

<figure><img src=".gitbook/assets/Shopify Integration Overview (1).png" alt=""><figcaption><p>Flow of Data Between Shopify and HotWax Commerce</p></figcaption></figure>

**Products:** To ensure that orders for all products in Shopify can be fulfilled, HotWax Commerce initially synchronizes all the products. Afterward, any newly added products by a merchandiser in Shopify are synced with HotWax Commerce at regular intervals. During this synchronization process, important product information including Shopify ID, SKU, UPC, product images, and additional details such as product names and features are also synced. Any updates made to product details are also synchronized in HotWax Commerce to provide merchants with the latest product information. Read [here](how-are-products-downloaded-from-shopify-to-hotwax-commerce/) to learn how products are synced from Shopify to HotWax Commerce.

**Inventory**: When integrating HotWax Commerce and Shopify, HotWax Commerce acts as the master of inventory availability. HotWax Commerce has the capability to integrate with various systems within the Shopify retailer’s tech stack, allowing for the calculation of "sellable inventory". This information is then synchronized to Shopify at regular intervals. For additional information on how HotWax Commerce manages and synchronizes sellable inventory to Shopify, check out [here](how-does-hotwax-commerce-ensure-accurate-inventory-is-synchronized-to-shopify.md).

**Orders:** Initially, all open sales orders are synchronized in HotWax Commerce. Subsequently, any upcoming orders and updates, such as order cancellations, quantity changes, item deletions, shipping address modifications, and returns, are also regularly synchronized from Shopify to HotWax Commerce.

When an order is fulfilled, HotWax Commerce updates the fulfillment status in Shopify. Read further for more information on the [synchronization process](how-are-orders-downloaded-from-shopify-to-hotwax-commerce.md) of orders from Shopify to HotWax Commerce and the updating of [fulfillment status](how-is-the-order-fulfillment-status-updated-to-shopify-from-hotwax-commerce.md) from HotWax Commerce to Shopify.

\
\
\
\
\
\\
