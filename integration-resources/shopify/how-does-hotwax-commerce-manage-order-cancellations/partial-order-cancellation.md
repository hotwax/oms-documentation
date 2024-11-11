---
description: >-
  Discover how to handle partial order cancellations in Shopify and their
  updates in HotWax Commerce.
---

# Partial Order Cancellation

**Partial Cancellations in Shopify and updated in HotWax Commerce**\\

When some items from an order are fulfilled and the rest are canceled, it is called partial cancellation. For partial cancellation, the order status in Shopify does not change, only the last updated date for the order changes. HotWax Commerce Cancels the order through the following steps:

* Import Canceled Order Items- Merchandisers can schedule 'Canceled Items' jobs which send an [API request](https://shopify.dev/docs/api/admin-rest/2023-04/resources/order#get-orders?status=any) to retrieve order information. The job checks the 'updated at' field in Order JSON and compares the time with the job’s last run time. All the orders which are updated after the job’s last run are imported in HotWax Commerce in files of 100 to ensure Shopify’s API limit is not exceeded.
* Processing in HotWax Commerce- When all these orders are imported, HotWax filters out the ones wherein an order item is canceled and marks the items as canceled. The order status is not canceled in HotWax Commerce, only the particular item’s status is canceled from the full order.

{% hint style="info" %}
Recommended time frequency is once an hour but the time interval is configurable through the Job Manager App.
{% endhint %}

<figure><img src="../.gitbook/assets/Order Item Cancellation.png" alt=""><figcaption><p><em>Fig. 2: Cancel order items in HotWax Commerce</em></p></figcaption></figure>
