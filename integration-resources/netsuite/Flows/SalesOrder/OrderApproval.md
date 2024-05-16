---
description: >-
  Discover how order approval in HotWax Commerce ensures seamless integration
  with NetSuite, preventing conflicts and errors in order fulfillment.
---

# Order Approval

Orders that are in "Created" status in HotWax Commerce are pushed to NetSuite rather than orders that are in "Approved" status. It's important to note the rationale behind this decision.

Initially, we attempted to synchronize approved orders from HotWax Commerce to NetSuite. However, this posed challenges when dealing with orders that contained both available and unavailable inventory items for fulfillment. In such cases, only a partial order could be pushed to NetSuite, causing complications. If the order was partially fulfilled in NetSuite due to certain available items, a subsequent attempt to send the remaining items led to conflicts. NetSuite recognized the initial order as complete and did not accept the remaining partial order, causing system errors and duplication.

To circumvent such complexities and ensure a seamless process, a strategic shift was made. Orders, upon their creation within HotWax Commerce, are designated as "Created" status. It is at this phase that critical order information is captured and assembled into CSV files for transmission to NetSuite. By choosing the "Created" status for order synchronization, HotWax Commerce retains control of the integration process and its sequence of interactions with NetSuite, enhancing accuracy and mitigating errors that arose from attempts to synchronize orders in "Approved" status.

{% hint style="info" %}
Orders will only be allocated for fulfillment after they have been approved.
{% endhint %}

## Synchronize Customers from HotWax Commerce to NetSuite

To successfully create a sales order in NetSuite, [it is a prerequisite to have the customer information pre-existing within NetSuite's database](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section\_162886247923.html#Best-Practices-for-Order-Sync). If the order contains a new customer not present in NetSuite, the system won't allow the order to be pushed. Therefore, it's vital to synchronize customer data from HotWax Commerce to NetSuite before order creation.

<figure><img src="../../.gitbook/assets/customer sync.png" alt=""><figcaption><p>Customer Sync from HotWax Commerce to NetSuite</p></figcaption></figure>

**Actions**

#### Export customers from HotWax Commerce

1. A scheduled job within HotWax Commerce Integration Platform operates at defined intervals to generate a CSV file comprising customers who have not been synchronized to NetSuite. This job can be configured to run at regular intervals, typically set at an hourly frequency. Customers who haven't been synchronized within the last hour are included in this CSV file and placed at an SFTP location for synchronization with NetSuite.

{% hint style="info" %}
**HotWax Internals**

Identify new customers by checking the Person table for entries where the roleTypeId is 'CUSTOMER' and where the PartyIdentification record for identification type 'NETSUITE\_CUSTOMER\_ID' is not created.
{% endhint %}

**SFTP Location**

```
/home/{sftp-username}/netsuite/customer/export
```

#### Import customers into NetSuite

2. A Scheduled Script in NetSuite is responsible for downloading the CSV file of customers not yet synchronized and utilizes the ImportTask function of the N/Task module. This script processes and creates customer records within NetSuite, ensuring that the necessary customer information is available in NetSuite for order creation.

**SuiteScripts**

Import new customers from SFTP

```
HC_SC_ImportCustomer
```

#### Export customers IDs from NetSuite and import into HotWax

3. Once customers are created in NetSuite, a scheduled script exports recently created customers in a CSV file at an SFTP location to be imported by HotWax Commerce.
4. A scheduled job within Hotwax Commerce OMS reads this file from the SFTP location and syncs the NetSuite customer IDs, confirming the customer synchronization in the OMS.

**SuiteScripts**

Export recently created customers to SFTP

```
HC_MR_ExportedCustomerCSV
```

**SFTP Location**

```
/home/{sftp-username}/netsuite/customer/import
```

**Job in HotWax Commerce**

Import NetSuite Customer IDs from SFTP

```
Import Party Identification
FTP Config: IMP_PARTY_IDENT
```

#### Here's how customer fields are mapped in HotWax Commerce and NetSuite

<table><thead><tr><th width="145.2998379254457">S.No.</th><th width="279">Fields in HotWax Commerce</th><th>Fields in NetSuite</th></tr></thead><tbody><tr><td>1</td><td>Shopify Customer ID</td><td>HC Shopify Customer ID</td></tr><tr><td>2</td><td>NetSuite Customer ID</td><td>Internal Customer ID</td></tr><tr><td>3</td><td>Name</td><td>Name</td></tr><tr><td>4</td><td>Emails</td><td>E-mail</td></tr><tr><td>5</td><td>Phones</td><td>Phone</td></tr></tbody></table>

{% tabs %}
{% tab title="Customer Fields in HotWax Commerce" %}
<figure><img src="../../.gitbook/assets/customer fields in hotwax.png" alt=""><figcaption><p>Customer Fields Mapping in HotWax Commerce</p></figcaption></figure>
{% endtab %}

{% tab title="Customer Fields in NetSuite" %}
<figure><img src="../../.gitbook/assets/customer fields in netsuite.png" alt=""><figcaption><p>Customer Fields Mapping in NetSuite</p></figcaption></figure>
{% endtab %}
{% endtabs %}

#### Here's how customer fields are mapped in HotWax Commerce and NetSuite that remain hidden in the user interface but are included in the customer CSV file

<table><thead><tr><th width="137.08771929824562">S.No.</th><th>Fields in HotWax Commerce</th><th>Fields in NetSuite</th></tr></thead><tbody><tr><td>1</td><td>Product Store External ID</td><td>Subsidiary *</td></tr><tr><td>2</td><td>Customer-Closed Won</td><td>Status *</td></tr><tr><td>3</td><td>Individual</td><td>Type *</td></tr><tr><td>4</td><td>Party ID</td><td>External ID</td></tr><tr><td>5</td><td>Party Classification</td><td>Initial Lead Source</td></tr><tr><td>6</td><td>True</td><td>Taxable</td></tr></tbody></table>

{% hint style="danger" %}
"\*" denotes fields that are required to be sent to NetSuite for the customer sync to work
{% endhint %}

{% file src="../../.gitbook/assets/Customers Sample Feed.csv" %}

* [x] Sync customers

## Synchronize Sales Order from HotWax Commerce to NetSuite

Capturing orders in HotWax Commerce initiates the creation of orders in "created" status. In this step, created sales orders are pushed from HotWax Commerce to NetSuite for further processing.

<figure><img src="../../.gitbook/assets/created orders.png" alt=""><figcaption><p>Orders in Created status synced to NetSuite</p></figcaption></figure>

#### Export new orders to NetSuite

1.  A job within HotWax Commerce Integration Platform generates a CSV file of orders in "created" status that have not yet been sent to NetSuite and places this file at an SFTP location. When creating this file HotWax Commerce also ensures that the customer already exists in NetSuite using the customer ID saved in the last step.

    The file contains details such as unit prices, order adjustments, and shipping costs, excluding direct tax amounts. HotWax Commerce omits the tax amount from the file and sends tax codes for the individual order items because NetSuite independently computes the taxes based on these codes and applies them accurately to each order item, ensuring precise tax calculations within NetSuite.

**Order and Item Discounts**

If an order has a discount code applied to it, during order sync to NetSuite, HotWax checks if the applied code is available in NetSuite. If the code is available then the exact code is used and the value of the discount is shared as the "Rate". In the event that the code is not available in NetSuite, HotWax will use a default discount code 'SHOPIFY DISCOUNT' along with the value of the discount.

Item-level discounts have special handling as well. They are synced as a separate line item in the order using a "SHOPIFY DISCOUNT ITEM" item, however, HotWax does not send an order line ID for this item. The amount of the adjustment is added in the "Amount" field when preparing the CSV for NetSuite and the "Price Level" is always set to "Custom".

**Item Price**

The price for products is not sent by HotWax when the order syncs to NetSuite. Instead, NetSuite automatically adds the value of the product upon order creation based on the price of the product in NetSuite.

**Tax Codes**

For retailers that use Avatax, the Tax Code and Shipping Tax Code will always contain "AVATAX" when sent from HotWax. Avalara Tax calculation will automatically compute taxes on the order in NetSuite when the order is created.

### Handling NetSuite file size limits

We've added a limit to how many orders can be synced in one file to NetSuite to ensure the NetSuite file size limit is not breached. NetSuite has a limit of 25,000 rows in one CSV, so if your order volume in one sync duration exceeds this limit, we automatically paginate the file to ensure NetSuite does not reject the file. Another thing we kept in mind is that during pagination, one order should not be split into separate files because this could lead to errors in the order import process in NetSuite. Assuming that most eCommerce orders contain 10 or fewer items, we've set an upper limit of 1000 orders per file. This should keep the file size well below NetSuite's limit while also leaving a buffer for orders with more line items.

Though it may seem like this would significantly slow down the order sync, this is not actually the case. All valid orders are still exported from HotWax Commerce at once and then paginated for NetSuite, this means all the order files are available for NetSuite to process and the speed at which they're processed is determined by the configuration of NetSuite used by the retailer. Higher configurations will have faster and more concurrent file process capabilities.

**SFTP Locations**

#### Export 'Created' orders with verified customers

```
/home/{sftp-username}/netsuite/salesorder/export
```

2. A scheduled SuiteScript in NetSuite reads this CSV file from the SFTP location and creates sales order records using the CSV Import function of the N/Task module.

**SuiteScript**

```
HC_importSalesOrders
```

#### Here's how sales order fields are mapped in HotWax Commerce and NetSuite

<table><thead><tr><th width="146.53483992467045">S.No.</th><th>Fields in HotWax Commerce</th><th>Fields in NetSuite</th></tr></thead><tbody><tr><td>1</td><td>NetSuite Sales Order ID</td><td>Internal Sales Order ID</td></tr><tr><td>2</td><td>Shopify Order ID</td><td>HC Shopify Order ID</td></tr><tr><td>3</td><td>Shopify Order Name</td><td>PO#</td></tr><tr><td>4</td><td>Sales Channel</td><td>HC Sales Channel</td></tr><tr><td>5</td><td>Customer</td><td>Customer *</td></tr><tr><td>6</td><td>Bill To Address</td><td>Billing Address *</td></tr><tr><td>7</td><td>Order Date</td><td>Date *</td></tr><tr><td>8</td><td>Product</td><td>Item</td></tr><tr><td>9</td><td>Qty</td><td>Quantity</td></tr><tr><td>10</td><td>Ship To</td><td>Shipping Address *</td></tr><tr><td>11</td><td>Ship Method</td><td>Shipping Method</td></tr><tr><td>12</td><td>Ship From</td><td>Location</td></tr><tr><td>13</td><td>Communications</td><td>Memo</td></tr></tbody></table>

{% tabs %}
{% tab title="Sales Order Fields in HotWax Commerce" %}
<div data-full-width="false">

<figure><img src="../../.gitbook/assets/sales order mapping hotwax.png" alt=""><figcaption><p>Sales Order Fields Mapping in HotWax Commerce</p></figcaption></figure>

</div>
{% endtab %}

{% tab title="Sales Order Fields in NetSuite" %}
<div data-full-width="false">

<figure><img src="../../.gitbook/assets/netsuite sales orders mappings (4).png" alt=""><figcaption><p>Sales Order Fields Mapping in NetSuite</p></figcaption></figure>

</div>
{% endtab %}
{% endtabs %}

#### Here's how sales order fields are mapped in HotWax Commerce and NetSuite that remain hidden in the user interface but are included in the sales order CSV file

<table><thead><tr><th width="144.37809187279154">S.No.</th><th>Fields in HotWax Commerce</th><th>Fields in NetSuite</th></tr></thead><tbody><tr><td>1</td><td>Order Item Seq ID</td><td>External Order Line ID</td></tr><tr><td>2</td><td>Price Level NetSuite</td><td>Price Level</td></tr><tr><td>3</td><td>Tax Code</td><td>Tax Code</td></tr><tr><td>4</td><td>Product Promo ID</td><td>Discount Item</td></tr><tr><td>5</td><td>Product Store External ID</td><td>Subsidiary</td></tr><tr><td>6</td><td>Email</td><td>E-mail</td></tr></tbody></table>

{% hint style="info" %}
To sync sales orders from HotWax Commerce to NetSuite, a required field is the "Order Status." As a part of our integration strategy, we have opted to directly set the value of "Order Status" in NetSuite as "Pending Fulfillment".
{% endhint %}

{% hint style="danger" %}
"\*" denotes fields that are required to be sent to NetSuite for the sales order sync to work
{% endhint %}

{% file src="../../.gitbook/assets/Created Order Items Sample Feed.csv" %}

## Sync Sales Order Item Line IDs from NetSuite to HotWax Commerce

This step syncs NetSuite sales order line item IDs with HotWax Commerce order items. This step is crucial as it helps in mapping and aligning the order line items in HotWax Commerce with their corresponding line item IDs in NetSuite. This synchronization enables a smooth and accurate cross-referencing of items and their relevant details between the two systems. Without syncing order line item IDs, any attempt to update an order item in NetSuite would result in a new order item being created.

<figure><img src="../../.gitbook/assets/order line item id.png" alt=""><figcaption><p>Order line item IDs synced from NetSuite to HotWax Commerce</p></figcaption></figure>

**Actions**

#### Export order line item IDs from NetSuite

1. A Map Reduce SuiteScript in NetSuite retrieves order line item IDs, generates and places the CSV file at an SFTP location.

**SuiteScript**

```
HC_MR_ExportedSalesOrderItemCSV
```

**SFTP Location**

```
/home/{sftp-username}/netsuite/salesorder/import/orderitemattribute
```

#### Import order line item IDs into HotWax Commerce

2. A job within HotWax Commerce OMS imports this CSV file from the SFTP location and associates NetSuite order line item IDs with corresponding order items.

**Job in HotWax Commerce**

```
Order Item Attribute
FTP Config: IMP_ORDER_ITM_ATTR
```

* [x] Sync order line items

## Sync Sales Order IDs from NetSuite to HotWax Commerce

This step synchronizes NetSuite sales order IDs with orders in HotWax Commerce for tracking and identification. This step enables cross-referencing and linkage between orders in both systems, paving the way for accurate tracking and management.

The synchronization of Sales Order IDs from NetSuite to HotWax Commerce is a critical step as it serves as an indicator that the orders in HotWax Commerce have been successfully integrated into NetSuite. Additionally, it is an essential step for various functions, including the creation of item fulfillment, return authorization, and customer deposit records in NetSuite.

<figure><img src="../../.gitbook/assets/sync sales order IDs.png" alt=""><figcaption><p>Sales order IDs synced from NetSuite to HotWax Commerce</p></figcaption></figure>

**Actions**

#### Export order IDs from NetSuite

1. A Map Reduce SuiteScript in NetSuite fetches pending fulfillment orders, generates a CSV file with internal sales order IDs and places this file at an SFTP location.

**SuiteScript**

```
HC_MR_ExportedSalesOrderCSV
```

**SFTP Location**

```
/home/{sftp-username}/netsuite/salesorder/import/orderidentification
```

#### Import order IDs into HotWax Commerce

2. A job within HotWax Commerce OMS imports this CSV file and associates NetSuite order IDs with corresponding orders.

**Job in HotWax Commerce**

```
Order Identification
FTP Config: IMP_ORDER_IDENT
```

* [x] Sync order ids

## Create Customer Deposit in NetSuite

This step creates customer deposit records in NetSuite for authorized payments of sales orders. Generating a customer deposit in NetSuite is essential to represent authorized payments for orders. This step signifies the initiation of the financial transaction for orders.

Sync status of customer deposits to NetSuite is time-driven, this means that we check the entry date of an order into HotWax Commerce and manage a cursor for the last exported timestamp. If a customer deposit creation fails, it will not be automatically retried because it will have passed the order entry time condition.

To ensure that only applicable customer deposits are created in NetSuite, orders that have been canceled or refunded will not have their deposit created. However, if an order is canceled or refunded after the deposit has been created in NetSuite, it will have to be manually handled by a NetSuite user. HotWax provides a report for all orders that have been canceled or refunded where the customer deposit may need to be dealt with manually.

<figure><img src="../../.gitbook/assets/customer deposits.png" alt=""><figcaption><p>Creating customer deposits in NetSuite</p></figcaption></figure>

**Actions**

#### Export Customer Deposits from HotWax Commerce

1. HotWax Commerce Integration Platform runs a scheduled job that generates a JSON file comprising of order details with their respective grand totals and places this file at an SFTP location.

**SFTP Locations**

Export customer deposit for orders with NetSuite order identification

```
/home/{sftp-username}/netsuite/salesorder/customerdeposit
```

#### Import Customer Deposits into NetSuite

2. A SuiteScript in NetSuite reads this JSON file from the SFTP location and creates customer deposit records in "undeposited" status. It employs the N/Record module for record creation.

**SuiteScript**

```
HC_SC_CreateCustomerDeposit
```

{% hint style="info" %}
The `HC_SC_CreateCustomerDeposit` SuiteScript also generates a CSV file highlighting erroneous records found during processing and uploads the file to the SFTP server. Simultaneously, an email alert is automatically triggered to designated personnel, helping them quickly pinpoint the source of the issue and accelerating troubleshooting.
{% endhint %}

## Approval of Sales Order

{% file src="../../.gitbook/assets/Customer Deposits Sample Feed.txt" %}

This step involves marking orders as "Approved" for further processing and fulfillment. This step ensures that orders are appropriately marked "Approved" once all necessary details and required references are established. This authorization triggers the routing of orders to their designated fulfillment locations.

<figure><img src="../../.gitbook/assets/approve orders.png" alt=""><figcaption><p>Order approval flow in HotWax Commerce</p></figcaption></figure>

**Actions**

A scheduled job within HotWax Commerce Integration Platform validates order items, generates and places the CSV file at an SFTP location. A scheduled job within HotWax Commerce OMS reads this CSV file from the SFTP location and marks order items "Approved".

<details>

<summary>Step by step breakdown</summary>

​Once the NetSuite order ID and line item IDs have been saved, HotWax internally adds an order attribute, "NETSUITE\_ORDER\_EXPORTED", to these orders. This attribute is added in batches through a scheduled job.

A seperate job checks for orders that have this attribute added to them and internally hands them off for approval in the OMS. This is a two step process because it allows us to abstract the order approval checks from the actual order approval job, thus enabling extensiblity in the validations required for order approval for different retailers.

For example, some retailers may have an additional fraud detection check that needs to be completed before an order can be approved. Completetion of the fraud detection would add its own attribute (ex. "FRAUD\_VERIFIED") to the order and the final order approval job would check both attributes before internally approving the order.

**SFTP Locations**

Export a file of orders where "NETSUITE\_ORDER\_EXPORTED" should be added

```
/home/{sftp-username}/hotwax/ApproveOrderAttributes
/home/{sftp-username}/hotwax/ApproveOrderAttributes/archive
```

Export a file of orders where all attributes are added

```
/home/{sftp-username}/hotwax/ApproveOrders
/home/{sftp-username}/hotwax/ApproveOrders/archive
```

**Jobs in HotWax Commerce**

Add the "NETSUITE\_ORDER\_EXPORTED" attribute to orders

```
Create or update order attribute
FTP Config: MOD_ORD_ATTR
```

Approve orders that are have required attributes

```
Approve Sales Order
FTP Config: IMP_APR_SALES_ORD
```

</details>

Approved orders are then processed by the brokering engine in HotWax Commerce for order routing. Following the execution of the order brokering engine, the available inventory for each order item is assessed. Consequently, the brokering engine in HotWax Commerce assigns suitable fulfillment locations to the order items that have inventory available for fulfillment.

After completing these steps, here is how much of the order sync is now complete:

* [x] Sync new orders from HotWax to NetSuite
  * [x] Sync customers
  * [x] Sync order line items
  * [x] Sync order ids
  * [x] Create customer deposit
* [x] Approve order in HotWax for fulfillment
* [ ] HotWax brokering allocates orders
* [ ] Sync item allocation to NetSuite for facilities where NetSuite fulfillment is used
* [ ] Sync order item fulfillment details from NetSuite to HotWax
* [ ] Sync order item fulfillment details from HotWax to NetSuite
* [ ] Invoice orders in NetSuite
