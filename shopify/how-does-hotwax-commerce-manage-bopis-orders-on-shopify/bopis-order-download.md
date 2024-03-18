---
description: Discover how HotWax Commerce efficiently downloads BOPIS orders from Shopify.
---

# BOPIS Order Download

### How HotWax Commerce downloads BOPIS orders from Shopify?

When a customer selects a store for pick up, the HotWax Commerce BOPIS PDP application on Shopify includes a line item property that includes the customer's preferred pick up location.\\

<figure><img src="../.gitbook/assets/BOPIS Line item.png" alt=""><figcaption><p><em>Fig.4 : Line item property added by Shopify</em></p></figcaption></figure>

When customers place a BOPIS order on Shopify, it is downloaded in HotWax Commerce alongside[ regular orders](../how-are-orders-downloaded-from-shopify-to-hotwax-commerce.md) through the 'New Import' job. HotWax Commerce then checks the line item property and sends the order to the customer's preferred pickup location without brokering. Store associates can view BOPIS orders in their BOPIS fulfillment app and begin preparing the order for customer pick-up.
