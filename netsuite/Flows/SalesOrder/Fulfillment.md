# Fulfillment

## Fulfillment in NetSuite

When a warehouse fulfills order items in Netsuite, fulfilled order information is synchronized from Netsuite to HotWax Commerce. This synchronization step ensures that orders marked as "fulfilled" in Netsuite are accurately reflected in HotWax Commerce. It ensures that the order status is consistent and updated across both systems

**Actions**

A Map Reduce SuiteScript generates a CSV file containing fulfilled orders and places it on the SFTP server.
**SuiteScript**
```
HC_MR_ExportedSalesOrderFulfillmentCSV
```

A job in HotWax Commerce reads the file, marking order items as fulfilled in the HotWax Commerce.

**Job in HotWax Commerce**
```
Order Item Fulfillment
FTP Config: IMP_ODR_ITM_FLFLMNT
```

- [x] Sync order item fulfillment details from NetSuite to HotWax

## Fulfillment in HotWax

The primary difference in this context is the approach to sending fulfillment location data from HotWax Commerce to Netsuite.

While fulfillment locations are indeed transmitted to Netsuite after in-store orders are fulfilled within HotWax Commerce, it's important to understand that this data transmission isn't critical for the actual fulfillment of orders. The fulfillment location data is conveyed to Netsuite once orders are fulfilled within HotWax Commerce. Its significance lies in enabling the subsequent creation of invoices, the application of payments to these invoices, and the accurate marking of orders as completed within the Netsuite system. This step occurs post-fulfillment in HotWax Commerce to ensure proper financial processing and completion of orders in Netsuite.

**Actions**

A scheduled job within HotWax Commerce creates a feed of outbound shipments as a JSON file and places it in an SFTP file.

*to be added*

A Scheduled Script in Netsuite reads the JSON file from SFTP, allocating locations to the orders within Netsuite by updating order records. Additionally, it creates fulfillment records in Netsuite based on the HotWax Commerce shipment data using the N/Record module of Netsuite. 

**SuiteScript**
```
HC_SC_CreateItemFulfillment
```

Upon completion of this process, the orders transition to "pending_billing" status, signifying that they are fulfilled and ready for billing.

- [x] Sync order item fulfillment details from HotWax to NetSuite


**Overall sync progress**

Order fulfillment is completed and now the only step remaining is invoicing.

- [x] Sync new orders from HotWax to NetSuite
  - [x] Sync customers
  - [x] Sync order line items
  - [x] Sync order ids
  - [x] Create customer deposit
- [x] Approve order in HotWax for fulfillment
- [x] HotWax brokering allocates orders
- [x] Sync item allocation to NetSuite for facilities where NetSuite fulfillment is used
- [x] Sync order item fulfillment details from NetSuite to HotWax
- [x] Sync order item fulfillment details from HotWax to NetSuite
- [ ] Invoice orders in NetSuite