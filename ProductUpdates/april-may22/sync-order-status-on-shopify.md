---
description: >-
  Retailers can now efficiently monitor and synchronize missed order statuses
  between HotWax and Shopify.
---

# Sync Order Status on Shopify

<figure><img src="https://www.hotwax.co/hubfs/Product%20Updates%20and%20Release%20Notes/2022/April%20and%20May%202022/Product%20Updates/Featured%20image/Sync%20Order%20Status%20on%20Shopify.png" alt=""><figcaption></figcaption></figure>

HotWax Commerce downloads orders from Shopify, routes them to an optimal fulfillment location, and updates the order fulfillment status in Shopify.

Once the order is fulfilled, its status must be updated in Shopify in order to communicate accurate order status to customers. If CSR cancels the order in HotWax Commerce, it needs to be updated so that customers can see their orders marked as “Canceled” on Shopify. Whenever an order is fulfilled or canceled in HotWax Commerce, it should be automatically updated in Shopify.

Initially, the status of orders was updated in bulk using APIs which exceeded Shopify’s limit of 4 API calls/second and Shopify Plus’ limit of 2 API calls/second. As a result, some API requests failed and a handful of orders’ statuses were not synced from HotWax Commerce to Shopify and there was no way to track unsynced orders. Thus, these missed orders were never synced back in Shopify.

#### What we changed

We added a scheduled job that respects Shopify’s API limit, keeps track of all the successful AND failed orders, and ensures that along with new orders’ statuses, missed orders’ statuses are also synced from HotWax Commerce to Shopify in subsequent API calls. This is just another step HotWax Commerce is taking to prioritize data accuracy for Shopify merchants and ensure no orders are missed so our clients can offer a best-in-class customer experience.
