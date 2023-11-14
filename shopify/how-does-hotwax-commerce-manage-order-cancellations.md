# How does HotWax Commerce Manage Order Cancellations?

Customers and retailers may need to cancel orders made online for various reasons. If a merchant uses both Shopify and HotWax Commerce, cancellations can occur in two ways:

1. Cancellations made in Shopify and updated in HotWax Commerce.
2. Cancellations made in HotWax Commerce and updated in Shopify.&#x20;

However, HotWax Commerce suggests canceling orders on Shopify and then updating them on HotWax Commerce, following the same process as used for order creation. This approach ensures that cancellations are handled consistently by both customers and the customer service team. In special cases, such as auto cancellations and mass pre-order cancellations, Shopify retailers can use HotWax Commerce to cancel orders and update them on Shopify.

HotWax Commerce import cancellation updates in two cases:

1. **Full Order Cancellations-** Customers have requested order cancellations from Shopify or CSR teams have canceled orders due to suspected fraudulent orders.
2. **Partial Order Cancellations-** Customers have requested to remove any item from the order or the CSR team canceled the order item due to inventory variance.

**Order Cancellation In Shopify And Updated In HotWax Commerce**

To sync cancellation updates from Shopify to HotWax Commerce, there are two options available: webhooks and batch jobs. By subscribing to the 'Canceled Order' webhook, customers can cancel orders in real-time. However, it should be noted that Shopify webhooks may not always be reliable. Therefore, it is recommended to schedule the 'Canceled Order' Job which imports all updates through a series of steps.

* Import Canceled Orders- When HotWax Commerce wants to check for canceled orders on Shopify, it uses an [API request ](https://shopify.dev/docs/api/admin-rest/2023-04/resources/order#get-orders?status=any)through the 'Canceled Order' job. This job looks at the 'cancelled\_at' field for orders on Shopify and compares it to the job's last run time. If the 'cancelled\_at' time is later than the job's last run time, the job downloads all canceled orders from Shopify in batches of 100 to avoid exceeding Shopify's API limit.
* Processing in HotWax Commerce- Once all canceled orders are downloaded, HotWax Commerce processes the file to check the order IDs of the canceled orders and marks them as canceled in the system.&#x20;

{% hint style="info" %}
The recommended frequency for this job is every 30 minutes, however, it can be adjusted to a different time interval using the Job Manager App.
{% endhint %}

<figure><img src=".gitbook/assets/Cancel Orders.png" alt=""><figcaption><p><em>Fig. 1: Configuration in Job Manager app to download canceled orders in HotWax Commerce</em></p></figcaption></figure>

**Partial Cancellations in Shopify and updated in HotWax Commerce**\


When some items from an order are fulfilled and the rest are canceled, it is called partial cancellation. For partial cancellation, the order status in Shopify does not change, only the last updated date for the order changes. HotWax Commerce Cancels the order through the following steps:

* Import Canceled Order Items- Merchandisers can schedule 'Canceled Items' jobs which send an [API request](https://shopify.dev/docs/api/admin-rest/2023-04/resources/order#get-orders?status=any) to retrieve order information. The job checks the 'updated at' field in Order JSON and compares the time with the job’s last run time. All the orders which are updated after the job’s last run are imported in HotWax Commerce in files of 100 to ensure Shopify’s API limit is not exceeded.
* Processing in HotWax Commerce- When all these orders are imported, HotWax filters out the ones wherein an order item is canceled and marks the items as canceled. The order status is not canceled in HotWax Commerce, only the particular item’s status is canceled from the full order.

{% hint style="info" %}
Recommended time frequency is once an hour but the time interval is configurable through the Job Manager App.
{% endhint %}

<figure><img src=".gitbook/assets/Order Item Cancellation.png" alt=""><figcaption><p><em>Fig. 2: Cancel order items in HotWax Commerce</em></p></figcaption></figure>

