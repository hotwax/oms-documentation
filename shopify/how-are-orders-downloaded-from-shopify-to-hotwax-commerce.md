# How are Orders Downloaded from Shopify to HotWax Commerce?

HotWax Commerce ensures that order information is always updated to streamline the process of fulfilling orders. When syncing orders from Shopify, HotWax Commerce tackles four essential scenarios

1. **Initial Order Download**: To integrate HotWax Commerce with Shopify, merchants are required to import all open sales orders from a particular time frame that HotWax Commerce must fulfill.
2. **Importing Newly Created Orders:** All the orders that have been placed since the initial download must be imported into HotWax Commerce.
3. **Approve Orders for Fulfillment:** Before approving orders for fulfillment, HotWax Commerce must ensure that payment has been authorized and verified by Shopify.
4. **Synchronizing Order Updates:** When making changes to orders, like updating shipping addresses, item quantities, or item details, it is important to inform HotWax Commerce to ensure proper synchronization of order updates.

### Initial Order Download From Shopify To Hotwax Commerce

To download all open sales orders from a specific time period in HotWax Commerce, users can schedule the 'Import Orders in Bulk' job by adding the last Shopify Order ID. This job imports all orders since the last Shopify Order ID, along with details such as order number, customer information, shipping address, billing details, and payment information.&#x20;

The process of importing orders from Shopify to HotWax Commerce consists of two steps.

* **Downloading from Shopify**- HotWax Commerce uses an [API request](https://shopify.dev/docs/api/admin-rest/2022-10/resources/order#get-orders?status=any) to Shopify to retrieve sales orders. The orders are returned in JSON format by Shopify, based on the API request. To avoid errors with large data files, HotWax Commerce downloads only 100 orders in one API call, even though Shopify allows downloading up to 250 orders. This helps optimize platform utilization and enables higher throughput, as each order can have multiple items, potentially leading to larger file sizes. The downloaded JSON file is then stored in the file system.

<figure><img src=".gitbook/assets/Import Orders in Bulk.png" alt=""><figcaption><p><em>Fig.1 : Configuration of the “import orders in bulk”  job in the Job Manager App</em></p></figcaption></figure>

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
<figure><img src=".gitbook/assets/Orders in Shopify (1).png" alt=""><figcaption><p><em>Fig.2(i): Orders in Shopify</em> </p></figcaption></figure>
{% endtab %}

{% tab title="Orders in HotWax Commerce" %}
<figure><img src=".gitbook/assets/Orders in HC (1).png" alt=""><figcaption><p>Fig.2(ii): Orders downloaded in HotWax Commerce</p></figcaption></figure>
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Order Details in Shopify" %}
<figure><img src=".gitbook/assets/Order Details- Shopify.png" alt=""><figcaption><p><em>Fig.3(i): Order Details in Shopify</em></p></figcaption></figure>
{% endtab %}

{% tab title="Order Details in HotWax Commerce" %}
<figure><img src=".gitbook/assets/Order Details- HC.png" alt=""><figcaption><p>Fig.3(ii): Order Details in HotWax Commerce</p></figcaption></figure>
{% endtab %}
{% endtabs %}

### Importing Newly Created Orders from Shopify to HotWax Commerce

In HotWax Commerce, there's a job called 'New Orders' that downloads new orders in bulk from Shopify. The job checks the 'created\_at' field in Shopify to see if any orders were created after the last time the job ran. All orders with a 'created\_at' time between the last download and the current time are downloaded, regardless of their fulfillment status. Once all orders are downloaded to the file system in the order JSON file, the order creation process begins in HotWax Commerce.

<figure><img src=".gitbook/assets/New Orders.png" alt=""><figcaption><p><em>Fig.4 : Configuration of the job New Orders in the job manager App</em></p></figcaption></figure>

{% hint style="info" %}
Recommended frequency of the job is 15 minutes i.e. it will run every 15 minutes. Frequency is configurable as per the merchant's requirements.
{% endhint %}

**Buffer Time**: It is possible for orders to be missed if they are placed during the microsecond time gap between two consecutive jobs.&#x20;

Let’s take a look at an example:&#x20;

A job downloads orders between 01:00:00 PM to 01:15:00 PM and a second job downloads orders between 01:15:00 PM to 01:30:00 PM.&#x20;

If an order is created on Shopify at 01:14:14 PM, but it's not added to Shopify's database until 01:15:01 PM, the order won't be downloaded by either job.&#x20;

To avoid missing any orders, we add a buffer time. For example, if the last job downloaded orders from 01:00:00 PM to 01:15:00, the next job will download orders from 01:14:00 to 01:30:00 PM.\


<figure><img src=".gitbook/assets/Buffer Time.png" alt=""><figcaption><p><em>Fig.5 : Order downloading without buffer time</em></p></figcaption></figure>

### Order Approval for Fulfillment in HotWax Commerce



After downloading, HotWax Commerce initially mark all the orders as ‘Created’. Orders can be auto-approved in HotWax commerce with a scheduled job called 'Approved Orders'. The job checks the approval status of Shopify orders based on parameters set by Shopify Merchants. For example, one of our clients Steve Madden uses the [Riskified app](https://www.riskified.com/) to check any fraudulent payment. In such cases, the Riskified app adds an ‘approved’ tag once all the security checks are done. The 'Approved Orders' job runs at a default frequency of 30 minutes and checks the ‘approved’ tag of the orders. If the orders have the ‘approved’ tag by riskified, the status of the job is changed to 'Approved'. Only orders with approved tags are eligible for fulfillment; orders without approval remain in 'Created' status until the next job. Similarly, other merchants can set their own set of criteria to ensure only ‘Approved’ orders are sent for fulfillment. Merchants also have the option to manually approve the orders in case of high order volumes.

<figure><img src=".gitbook/assets/Approved orders.png" alt=""><figcaption><p><em>Fig.6 : Configuration of the “Approved Orders” job in the Job Manager App</em></p></figcaption></figure>

{% hint style="info" %}
When an order includes a digital product, it will be marked complete once it is downloaded into HotWax Commerce because these products do not require physical fulfillment. Shopify will be notified that the order is fulfilled and will mark it as such.
{% endhint %}

### Synchronizing Order Updates

Sometimes customers or customer service representatives make changes to Shopify orders that need to be accurately reflected in Hotwax Commerce to ensure the fulfillment process meets the customer's requirements. HotWax Commerce can update the following details from Shopify:

* Adding items to an order
* Removing items from an order
* Changing item quantities
* Changing shipping addresses
* Changing customer contact details

To ensure all order modifications are synced accurately, HotWax Commerce has an 'Import order updates from Shopify' job. This job checks the 'updated\_at' field of orders in Shopify and compares it to the last run time of the job. If the 'updated\_at' time is after the last run time, the job downloads all order details from Shopify, compares it to HotWax Commerce data, and updates any changed fields. The default frequency for the job is every hour, but merchants can change it through the Job Manager App to meet their requirements.

<figure><img src=".gitbook/assets/Order updates.png" alt=""><figcaption><p><em>Fig.6 : Configuration of the “Import order updates from Shopify” job in the Job Manager App</em></p></figcaption></figure>

To know more about how HotWax Commerce synchronizes Order fulfillment updates with Shopify, [click here](https://docs.hotwax.co/integration-resources-1/v/shopify-integration/). Read further to know how HotWax Commerce Manages [Presell orders ](how-are-pre-orderable-and-backorderable-products-listed-or-delisted-on-shopify.md)and [BOPIS Orders](how-does-hotwax-commerce-manage-bopis-orders-on-shopify.md).\
