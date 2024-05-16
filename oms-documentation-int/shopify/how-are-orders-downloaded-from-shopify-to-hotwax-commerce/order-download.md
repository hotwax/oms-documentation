---
description: >-
  Discover the process of downloading initial orders from Shopify to HotWax
  Commerce, streamlining order management.
---

# Order Download

### Initial Order Download From Shopify To Hotwax Commerce

To download all open sales orders from a specific time period in HotWax Commerce, users can schedule the 'Import Orders in Bulk' job by adding the last Shopify Order ID. This job imports all orders since the last Shopify Order ID, along with details such as order number, customer information, shipping address, billing details, and payment information.

The process of importing orders from Shopify to HotWax Commerce consists of two steps.

* **Downloading from Shopify**- HotWax Commerce uses an [API request](https://shopify.dev/docs/api/admin-rest/2022-10/resources/order#get-orders?status=any) to Shopify to retrieve sales orders. The orders are returned in JSON format by Shopify, based on the API request. To avoid errors with large data files, HotWax Commerce downloads only 100 orders in one API call, even though Shopify allows downloading up to 250 orders. This helps optimize platform utilization and enables higher throughput, as each order can have multiple items, potentially leading to larger file sizes. The downloaded JSON file is then stored in the file system.

<figure><img src="../.gitbook/assets/Import Orders in Bulk.png" alt=""><figcaption><p><em>Fig.1 : Configuration of the “import orders in bulk” job in the Job Manager App</em></p></figcaption></figure>

* **Order Creation in HotWax Commerce-** HotWax Commerce proceeds to the second step by accessing the JSON files that have been downloaded from the file system and then generating orders. Once all the orders have been downloaded, HotWax Commerce will automatically begin processing them. Once the orders are imported into HotWax Commerce, they will be assigned a 'created' status.

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
<figure><img src="../.gitbook/assets/Orders in Shopify (1).png" alt=""><figcaption><p><em>Fig.2(i): Orders in Shopify</em></p></figcaption></figure>
{% endtab %}

{% tab title="Orders in HotWax Commerce" %}
<figure><img src="../.gitbook/assets/Orders in HC (1).png" alt=""><figcaption><p>Fig.2(ii): Orders downloaded in HotWax Commerce</p></figcaption></figure>
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Order Details in Shopify" %}
<figure><img src="../.gitbook/assets/Order Details- Shopify.png" alt=""><figcaption><p><em>Fig.3(i): Order Details in Shopify</em></p></figcaption></figure>
{% endtab %}

{% tab title="Order Details in HotWax Commerce" %}
<figure><img src="../.gitbook/assets/Order Details- HC (1).png" alt=""><figcaption><p>Fig.3(ii): Order Details in HotWax Commerce</p></figcaption></figure>
{% endtab %}
{% endtabs %}

### Importing Newly Created Orders from Shopify to HotWax Commerce

In HotWax Commerce, there's a job called 'New Orders' that downloads new orders in bulk from Shopify. The job checks the 'created\_at' field in Shopify to see if any orders were created after the last time the job ran. All orders with a 'created\_at' time between the last download and the current time are downloaded, regardless of their fulfillment status. Once all orders are downloaded to the file system in the order JSON file, the order creation process begins in HotWax Commerce.

<figure><img src="../.gitbook/assets/New Orders.png" alt=""><figcaption><p><em>Fig.4 : Configuration of the job New Orders in the job manager App</em></p></figcaption></figure>

{% hint style="info" %}
Recommended frequency of the job is 15 minutes i.e. it will run every 15 minutes. Frequency is configurable as per the merchant's requirements.
{% endhint %}

**Buffer Time**: It is possible for orders to be missed if they are placed during the microsecond time gap between two consecutive jobs.

Let’s take a look at an example:

A job downloads orders between 01:00:00 PM to 01:15:00 PM and a second job downloads orders between 01:15:00 PM to 01:30:00 PM.

If an order is created on Shopify at 01:14:14 PM, but it's not added to Shopify's database until 01:15:01 PM, the order won't be downloaded by either job.

To avoid missing any orders, we add a buffer time. For example, if the last job downloaded orders from 01:00:00 PM to 01:15:00, the next job will download orders from 01:14:00 to 01:30:00 PM.\\

<figure><img src="../.gitbook/assets/Buffer Time.png" alt=""><figcaption><p><em>Fig.5 : Order downloading without buffer time</em></p></figcaption></figure>
