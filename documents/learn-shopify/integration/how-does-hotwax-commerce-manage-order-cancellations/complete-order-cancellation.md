---
description: >-
  Learn the process of complete order cancellation in Shopify and its update in
  HotWax Commerce.
---

# Complete Order Cancellation

**Order Cancellation In Shopify And Updated In HotWax Commerce**

To sync cancellation updates from Shopify to HotWax Commerce, there are two options available: webhooks and batch jobs. By subscribing to the 'Canceled Order' webhook, customers can cancel orders in real-time. However, it should be noted that Shopify webhooks may not always be reliable. Therefore, it is recommended to schedule the 'Canceled Order' Job which imports all updates through a series of steps.

* Import Canceled Orders- When HotWax Commerce wants to check for canceled orders on Shopify, it uses an [API request ](https://shopify.dev/docs/api/admin-rest/2023-04/resources/order#get-orders?status=any)through the 'Canceled Order' job. This job looks at the 'cancelled\_at' field for orders on Shopify and compares it to the job's last run time. If the 'cancelled\_at' time is later than the job's last run time, the job downloads all canceled orders from Shopify in batches of 100 to avoid exceeding Shopify's API limit.
* Processing in HotWax Commerce- Once all canceled orders are downloaded, HotWax Commerce processes the file to check the order IDs of the canceled orders and marks them as canceled in the system.

{% hint style="info" %}
The recommended frequency for this job is every 30 minutes, however, it can be adjusted to a different time interval using the Job Manager App.
{% endhint %}

<figure><img src="../../.gitbook/assets/26.png" alt=""><figcaption><p><em>Fig. 1: Configuration in Job Manager app to download canceled orders in HotWax Commerce</em></p></figcaption></figure>
