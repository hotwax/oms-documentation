# Order Approval

Orders that are in "Created" status in HotWax Commerce are pushed to NetSuite rather than orders that are in "Approved" status. It's important to note the rationale behind this decision.

Initially, we attempted to synchronize approved orders from HotWax Commerce to NetSuite. However, this posed challenges when dealing with orders that contained both available and unavailable inventory items for fulfillment. In such cases, only a partial order could be pushed to NetSuite, causing complications. If the order was partially fulfilled in NetSuite due to certain available items, a subsequent attempt to send the remaining items led to conflicts. NetSuite recognized the initial order as complete and did not accept the remaining partial order, causing system errors and duplication.

To circumvent such complexities and ensure a seamless process, a strategic shift was made. Orders, upon their creation within HotWax Commerce, are designated as "Created" status. It is at this phase that critical order information is captured and assembled into CSV files for transmission to NetSuite. By choosing the "Created" status for order synchronization, HotWax Commerce retains control of the integration process and its sequence of interactions with NetSuite, enhancing accuracy and mitigating errors that arose from attempts to synchronize orders in an "Approved" status.

{% hint style="info" %}
Orders will only be allocated for fulfillment after they have been approved.
{% endhint %}

## Synchronize Customers from HotWax Commerce to Netsuite

To successfully create a sales order in NetSuite, [it is a prerequisite to have the customer information pre-existing within Netsuite's database](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section\_162886247923.html#Best-Practices-for-Order-Sync). If the order contains a new customer not present in NetSuite, the system won't allow the order to be pushed. Therefore, it's vital to synchronize customer data from HotWax Commerce to NetSuite before order creation.

**Actions**

#### Export customers from HotWax Commerce

A scheduled job in HotWax Commerce operates at defined intervals to generate a CSV file comprising customers who have not been synchronized to NetSuite. This job can be configured to run at regular intervals, typically set at an hourly frequency. Customers who haven't been synchronized within the last hour are included in this CSV file for synchronization with NetSuite.

{% hint style="info" %}
**HotWax Internals**

Identify new customers by checking the Person table for entries where the roleTypeId is 'CUSTOMER' and where the PartyIdentification record for identification type 'NETSUITE\_CUSTOMER\_ID' is not created.
{% endhint %}

**SFTP Location**

```
/home/{sftp-username}/netsuite/customer/export
```

#### Import customers into NetSuite

A Scheduled Script in NetSuite is responsible for downloading the CSV file of customers not yet synchronized and utilizes the ImportTask function of the N/Task module. This script processes and creates customer records within NetSuite, ensuring that the necessary customer information is available in NetSuite for order creation.

**SuiteScripts**

Import new customers from SFTP

```
HC_SC_ImportCustomer
```

#### Export customers IDs from NetSuite and import into HotWax

Once customers are created in NetSuite, a scheduled script exports recenlty created customers in a file at an SFTP location to be imported by HotWax Commerce. After HotWax imports this file, the OMS now has confirmation of customer syncronization.

**SuiteScripts**

Export recenlty created customers to SFTP

```
HC_MR_ExportedCustomerCSV
```

**Job in HotWax Commerce**

Import NetSuite Customer IDs from SFTP

```
Import Party Identification
FTP Config: IMP_PARTY_IDENT
```

* [x] Sync customers

## Synchronize Sales Order from HotWax Commerce to NetSuite

Capturing orders in HotWax Commerce initiates the creation of orders in "created" status. In this step, created sales orders are pushed from HotWax Commerce to NetSuite for further processing.

#### Export new orders to NetSuite

A job in HotWax Commerce Integration platform creates a CSV file of orders in "created" status that have not yet been sent to NetSuite. When creating this file HotWax Commerce also ensures that the customer already exists in NetSuite using the customer ID saved in the last step.

The file contains details such as unit prices, order adjustments, and shipping costs, excluding direct tax amounts. HotWax Commerce omits the tax amount from the file and sends tax codes for the individual order items because NetSuite independently computes the taxes based on these codes and applies them accurately to each order item, ensuring precise tax calculations within NetSuite.

#### Order and Item Discounts

If an order has a discount code applied to it, during order sync to NetSuite, HotWax checks if the applied code is available in NetSuite. If the code is available then the exact code is used and the value of the discount is shared as the "Rate". In the event that the code is not available in NetSuite, HotWax will use a default discount code 'SHOPIFY DISCOUNT' along with the value of the discount.

Item level discounts have special handling as well. They are synced as a separate line item in the order using a "SHOPIFY DISCOUNT ITEM" item, however HotWax does not send an order line id for this item. The amount of the adjustment is added in the "Amount" field when preparing the CSV for NetSuite and the "Price Level" is always set to "Custom".

#### Item Price

The price for products is not sent by HotWax when the order syncs to NetSuite. Instead NetSuite automatically adds the value of the product apon order creation based on the price of the product in NetSuite.

#### Tax Codes

For retailers that use Avatax, the Tax Code and Shipping Tax Code will always contain "AVATAX" when sent from HotWax. Avalara Tax calculation will automatically compute taxes on the order in NetSuite when the order is created.

Here's how sales order fields are mapped in HotWax Commerce and NetSuite:

| S.No. | Fields in HotWax Commerce                   | Fields in NetSuite     |
| ----- | ------------------------------------------- | ---------------------- |
| 1     | Shopify Order Name                          | PO#                    |
| 2     | Order ID                                    | External ID            |
| 3     | NetSuite Order ID                           | Internal ID            |
| 4     | Order Item Seq ID                           | External Order Line ID |
| 5     | NetSuiteItem Line ID                        | Line ID                |
| 6     | Shopify Order ID                            | HC Shopify Order ID    |
| 7     | Sales Channel                               | HC Sales Channel       |
| 8     | Order Date                                  | Date                   |
| 9     | Bill to Party                               | Customer               |
| 10    | Product                                     | Item                   |
| 11    | Quantity                                    | Quantity               |
| 12    | Price Level NetSuite                        | Price Level            |
| 13    | OrderItem.taxCode                           | Tax Code               |
| 14    | ProductPromo.productPromoId                 | Discount Item          |
| 15    | OrderAdjustment.amount                      | Rate                   |
| 16    | Shipping Charges                            | Shipping Amount        |
| 17    | Shipping Address                            | Shipping Address       |
| 18    | Shipping Method                             | Shipping Method        |
| 19    | Billing Address                             | Billing Address        |
| 20    | Shipfrom (FacilityExternalId)               | Location               |
| 21    | Communications (communicationEvent.content) | Memo                   |
| 22    | ProductStore.externalId                     | Subsidiary             |
| 23    | OrderContactMech                            | Email                  |

### Handling NetSuite file size limits

We've added a limit to how many orders can be synced in one file to NetSuite to ensure the NetSuite file size limit is not breached. NetSuite has a limit of 25,000 rows in one CSV, so if your order volume in one sync duration exceeds this limit, we automatically paginate the file to ensure NetSuite does not reject the file. Another thing we kept in mind is that during pagination, one order should not be split into seperate files because this could lead to errors in the order import process in NetSuite. Assuming that most e-Commerce orders contain 10 or less items, we've set an upper limit of 1000 orders per file. This should keep the file size well below NetSuite's limit while also leaving buffer for orders with more line items.

Though it may seem like this would significanlty slow down the order sync, this is not actually the case. All valid orders are still exported from HotWax Commerce at once and then paginated for NetSuite, this means all the order files are available for NetSuite to process and the speed at which they're processed is determined by the configuration of NetSuite used by the retailer. Higher configurations will have faster and more concurrent file process capabilites.

**SFTP Locations**

Export 'Created' orders with verified customers

```
/home/{sftp-username}/netsuite/salesorder/export
```

A scheduled SuiteScript in NetSuite reads the CSV file from the SFTP location and creates sales order records using the CSV Import function of the N/Task module.

**SuiteScript**

```
HC_importSalesOrders
```

## Sync Sales Order Item Line IDs from NetSuite to HotWax Commerce

This step syncs NetSuite sales order line item IDs with HotWax Commerce order items. This step is crucial as it helps in mapping and aligning the order line items in HotWax Commerce with their corresponding line item IDs in NetSuite. This synchronization enables a smooth and accurate cross-referencing of items and their relevant details between the two systems. Without syncing order line item IDs, any attempt to update an order item in NetSuite would result in a new order item being created.

**Actions**

#### Export order line item IDs from NetSuite

A Map Reduce SuiteScript in NetSuite retrieves order line item IDs and generates a CSV file.

**SuiteScript**

```
HC_MR_ExportedSalesOrderItemCSV
```

#### Import order line item IDs into HotWax Commerce

A job in HotWax Commerce imports the CSV to pair NetSuite order line item IDs with appropriate order items.

**Job in HotWax Commerce**

```
Order Item Attribute
FTP Config: IMP_ORDER_ITM_ATTR
```

* [x] Sync order line items

## Create Customer Deposit in NetSuite

This step creates customer deposit records in NetSuite for authorized payments of sales orders. Generating a customer deposit in NetSuite is essential to represent authorized payments for orders. This step signifies the initiation of the financial transaction for orders.

Sync status of customer deposits to NetSuite is time driven, this means that we check the entry date of an order into HotWax Commerce and manage a cursor for the last exported timestamp. If an customer deposit creation fails, it will not be automatically retried because it will have passed the order entry time condition.

To ensure that only applicable customer deposits are created in NetSuite, orders that have been canceled or refunded will not have their deposit created. However if an order is canceled or refunded after the deposit has been created in NetSuite, it will have to be manually handled by a NetSuite user. HotWax provides a report for all orders that have been canceled or refunded where the customer deposit may need to be dealt with manually.

**Actions**

#### Export Customer Deposit from HotWax Commerce

HotWax Commerce runs a scheduled job that generates a JSON file with order details and their respective grand totals.

**SFTP Locations**

Export customer despot for orders with NetSuite order identification

```
/home/{sftp-username}/netsuite/salesorder/customerdeposit
```

#### Import Customer Deposit into NetSuite

A SuiteScript in NetSuite creates customer deposit records in "undeposited" status based on the JSON file from the SFTP server. It employs the N/Record module for record creation.

**SuiteScript**

```
HC_SC_CreateCustomerDeposit
```

## Sync Sales Order IDs from NetSuite to HotWax Commerce

This step synchronizes NetSuite sales order IDs with orders in HotWax Commerce for tracking and identification. This step enables cross-referencing and linkage between orders in both systems, paving the way for accurate tracking and management.

The synchronization of Sales Order IDs from NetSuite to HotWax Commerce is a critical step as it serves as an indicator that the orders in HotWax Commerce have been successfully integrated into NetSuite. Additionally, it is an essential step for various functions, including the creation of item fulfillment, return authorization, and customer deposit records in NetSuite.

**Actions**

#### Export order IDs from NetSuite

A Map Reduce SuiteScript in NetSuite fetches pending fulfillment orders and generates a CSV file with internal sales order IDs.

**SuiteScript**

```
HC_MR_ExportedSalesOrderCSV
```

#### Import order IDs into HotWax Commerce

A job in HotWax Commerce imports the CSV to associate NetSuite order IDs with corresponding orders.

**Job in HotWax Commerce**

```
Order Identification
FTP Config: IMP_ORDER_IDENT
```

* [x] Sync order ids

## Approval of Sales Order

This step involves marking of orders as "Approved" for further processing and fulfillment.This step ensures that orders are appropriately marked "Approved" once all necessary details and required references are established. This authorization triggers the routing of orders to their designated fulfillment locations.

**Actions**

A scheduled job in HotWax Commerce validates order items and marks them "Approved."

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
