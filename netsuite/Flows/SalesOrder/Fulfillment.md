# Fulfillment

## Fulfillment in NetSuite

When a warehouse fulfills order items in NetSuite, fulfilled order information is synchronized from NetSuite to HotWax Commerce. This synchronization step ensures that orders marked as "fulfilled" in NetSuite are accurately reflected in HotWax Commerce. It ensures that the order status is consistent and updated across both systems.

<figure><img src="../../.gitbook/assets/fulfillment update in netsuite.png" alt=""><figcaption><p>Fulfilled order updates synced from NetSuite to HotWax Commerce</p></figcaption></figure>

**Actions**

1. A Map Reduce SuiteScript generates a CSV file containing fulfilled orders and places it on the SFTP server.

**SuiteScript**

```
HC_MR_ExportedSalesOrderFulfillmentCSV
```

**SFTP Locations**

```
/home/{sftp-username}/netsuite/salesorder/import/fulfillment
```

2. A job in HotWax Commerce integration platform reads the file, marking order items as fulfilled in the HotWax Commerce.

**Job in HotWax Commerce**

```
Order Item Fulfillment
FTP Config: IMP_ODR_ITM_FLFLMNT
```

* [x] Sync order item fulfillment details from NetSuite to HotWax

## Fulfillment in HotWax

The primary difference in this context is the approach to sending fulfillment location data from HotWax Commerce to NetSuite.

While fulfillment locations are indeed transmitted to NetSuite after in-store orders are fulfilled within HotWax Commerce, it's important to understand that this data transmission isn't critical for the actual fulfillment of orders. The fulfillment location data is conveyed to NetSuite once orders are fulfilled within HotWax Commerce. Its significance lies in enabling the subsequent creation of invoices, the application of payments to these invoices, and the accurate marking of orders as completed within the NetSuite system. This step occurs post-fulfillment in HotWax Commerce to ensure proper financial processing and completion of orders in NetSuite.

<figure><img src="../../.gitbook/assets/fulfillment update HotWax.png" alt=""><figcaption><p>Fulfillment location data and order updates synced from HotWax Commerce to NetSuite</p></figcaption></figure>

**Actions**

1. A scheduled job within HotWax Commerce creates a feed of outbound shipments as a JSON file and places it in an SFTP file.

_to be added_

2. A Scheduled Script in NetSuite reads the JSON file from SFTP, allocating locations to the orders within NetSuite by updating order records. Additionally, it creates fulfillment records in NetSuite based on the HotWax Commerce shipment data using the N/Record module of NetSuite.

**SuiteScript**

```
HC_SC_CreateItemFulfillment
```

**SFTP Locations**

```
/home/{sftp-username}/netsuite/fulfilledsalesorder/export
```

Upon completion of this process, the orders transition to "pending\_billing" status, signifying that they are fulfilled and ready for billing.

{% hint style="info" %}
The `HC_SC_CreateItemFulfillment` SuiteScript also generates a CSV file highlighting erroneous records found during processing and uploads the file to the SFTP server. Simultaneously, an email alert is automatically triggered to designated personnel, helping them quickly pinpoint the source of the issue and accelerating troubleshooting.
{% endhint %}

* [x] Sync order item fulfillment details from HotWax to NetSuite

**Overall sync progress**

Order fulfillment is completed and now the only step remaining is invoicing.

* [x] Sync new orders from HotWax to NetSuite
  * [x] Sync customers
  * [x] Sync order line items
  * [x] Sync order ids
  * [x] Create customer deposit
* [x] Approve order in HotWax for fulfillment
* [x] HotWax brokering allocates orders
* [x] Sync item allocation to NetSuite for facilities where NetSuite fulfillment is used
* [x] Sync order item fulfillment details from NetSuite to HotWax
* [x] Sync order item fulfillment details from HotWax to NetSuite
* [ ] Invoice orders in NetSuite
