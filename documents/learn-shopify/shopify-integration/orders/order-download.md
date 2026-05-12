---
description: >-
  Learn the process of downloading initial orders from Shopify to HotWax
  Commerce for order management.
---

# Order Download

### Initial Order Download From Shopify To Hotwax Commerce

To download all open sales orders from a specific time period in HotWax Commerce, users can schedule the `sync_ShopifyOrderHistory` job. This job imports all historical orders, along with details such as order number, customer information, shipping address, billing details, and payment information.

The process of importing orders from Shopify to HotWax Commerce consists of two steps.

* **Downloading from Shopify**- HotWax Commerce sends an [API request](https://shopify.dev/docs/api/admin-graphql/latest/queries/order) to Shopify to retrieve sales orders. This request internally triggers a bulk operation in Shopify that returns orders and their associated details for a specified date range. Shopify then provides the order data in JSON format based on the requested query.

* **Order Creation in HotWax Commerce-** HotWax Commerce proceeds to the second step by accessing the JSON files and then generating orders. Once all the orders have been downloaded, HotWax Commerce will automatically begin processing them. Once the orders are imported into HotWax Commerce, they will be assigned a 'created' status.

Order fields in Shopify are mapped in HotWax Commerce as follows:

| Order in Shopify | Order in HotWax Commerce |
| ---------------- | ------------------------ |
| Order ID         | Order ID                 |
| Shopify Shop     | Product store            |
| Sales order      | Sales order              |
| Order Status     | Status                   |
| Order date       | Order date               |
| Location         | Sales Channel            |
| Image            | Image                    |
| Product name     | Product Name             |
| Variant          | Variant                  |
| SKU              | SKU                      |
| Subtotal         | Subtotal                 |
| Shipping         | Shipping Method          |
| Total            | Shipment Total           |
| Shipping Address | Ship To                  |
| Billing Address  | Bill To                  |
| Tags             | Tags                     |

{% tabs %}
{% tab title="Orders in Shopify" %}
<figure><img src="../../.gitbook/assets/orders-in-shopify.png" alt=""><figcaption><p><em>Fig.2(i): Orders in Shopify</em></p></figcaption></figure>
{% endtab %}

{% tab title="Orders in HotWax Commerce" %}
<figure><img src="../../.gitbook/assets/orders-downloaded-in-hotwax.png" alt=""><figcaption><p>Fig.2(ii): Orders downloaded in HotWax Commerce</p></figcaption></figure>
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Order Details in Shopify" %}
<figure><img src="../../.gitbook/assets/order-details-shopify.png" alt=""><figcaption><p><em>Fig.3(i): Order Details in Shopify</em></p></figcaption></figure>
{% endtab %}

{% tab title="Order Details in HotWax Commerce" %}
<figure><img src="../../.gitbook/assets/order-details-hotwax.png" alt=""><figcaption><p>Fig.3(ii): Order Details in HotWax Commerce</p></figcaption></figure>
{% endtab %}
{% endtabs %}

### Importing Newly Created Orders from Shopify to HotWax Commerce

When an order is created in Shopify, Shopify sends an [order/update]([url](https://shopify.dev/docs/api/webhooks?reference=toml#list-of-topics-orders/create)) webhook with the order details. AWS EventBridge receives the event and pushes the order data to Amazon SQS.

HotWax Commerce reads unread order IDs from Amazon SQS and calls the Shopify [GraphQL API]([url](https://shopify.dev/docs/api/admin-graphql/latest/queries/order)) to fetch complete order details for each order ID. Shopify returns the order data in JSON format, and HotWax Commerce processes the response to create the order in the OMS.

#### thruDateBuffer and bufferTime

**thruDateBuffer:** The thruDateBuffer ensures that only orders are synced into HotWax after a certain amount of time.

at least 5 minutes old in Shopify are synced. This delay allows time for Shopify to process and potentially cancel invalid orders before they are imported into HotWax Commerce.

**bufferTime**: It is possible for orders to be missed if they are placed during the microsecond time gap between two consecutive jobs.

Let’s take a look at an example:

A job downloads orders between 01:00:00 PM to 01:15:00 PM and a second job downloads orders between 01:15:00 PM to 01:30:00 PM.

If an order is created on Shopify at 01:14:14 PM, but it's not added to Shopify's database until 01:15:01 PM, the order won't be downloaded by either job.

To avoid missing any orders, we add a buffer time. For example, if the last job downloaded orders from 01:00:00 PM to 01:15:00, the next job will download orders from 01:14:00 to 01:30:00 PM.

<figure><img src="../../.gitbook/assets/order-downloading-without-buffer-time.png" alt=""><figcaption><p><em>Fig.5 : Order downloading without buffer time</em></p></figcaption></figure>
