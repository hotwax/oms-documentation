---
description: >-
  Discover streamlined processes for product creation and deletion using Shopify
  Webhooks.
---

# Creating/Deleting Products with Shopify Webhooks

**Creating/Deleting Products With The Help Of Shopify Webhooks**

Shopify offers webhooks for real-time communication between apps. HotWax Commerce utilizes Shopify's [new product and product delete webhooks](https://shopify.dev/docs/api/admin-rest/2023-07/resources/product#delete-products-product-id) to promptly create or delete products in HotWax Commerce. The Job Manager app enables this webhook. However, there are two limitations when using Shopify's webhook:

* It only tracks the creation or deletion of parent products and not product variants.
* Shopify states that [webhook delivery isn't always guaranteed](https://shopify.dev/apps/webhooks#limitation), and suggests implementing reconciliation jobs to periodically fetch data from Shopify.

<figure><img src="../.gitbook/assets/Product webhook.png" alt=""><figcaption><p><em>Fig.6: Product webhooks for Shopify</em></p></figcaption></figure>
