---
description: Learn about the Orders jobs in HotWax Commerce.
---

# Orders

## Shopify order import

The legacy `JOB_IMP_ORD` / `createOrdersFromShopify` job is not the primary order-import path for a new standard launch. Current Shopify ingestion has three separate flows: controlled open-order history, realtime `ORDERS_CREATE` and `ORDERS_UPDATED` events through EventBridge and SQS, and a scheduled fallback batch.

Use [Shopify order download flows](../../../learn-shopify/shopify-integration/orders/order-download.md) to diagnose an existing flow. For launch setup, follow [Chapter 9 of Set up HotWax Commerce with Shopify](../../../system-admin/administration/company/product-store-onboarding.md#9-configure-maarg-admin-order-infrastructure).

***

## Tenant-specific operational jobs

The remaining entries describe jobs that may exist on older or specialized tenants. They are operational references, not a setup checklist. Run or schedule one only when the supported release owner confirms that the tenant uses that exact job.

### Approve Orders

Job name: `Approve orders`\
Job Enum ID: `JOB_APR_ORD`\
Service Name: `approvePendingShopifyOrders`\
Flow : Order Approval

**The `Approve Orders` job changes the status of orders from 'Created' to 'Approved,' making them eligible for brokering.** Orders must be verified and approved before fulfillment to prevent invalid or fraudulent orders. The Approved Orders job runs every 30 minutes and approves all the orders placed between the last job ran up and the current timestamp.

**How are orders approved?**&#x20;

This job checks the payment preference for each order in the 'Created' state. If the payment preference is either 'Authorised' or 'Settled,' then the job changes the order status from ‘Created' to 'Approved’.

**Custom Parameter:**

* The recommended frequency for this job is every **30 minutes**.
* The 'orderId' is an optional parameter. When provided, it will approve the specified order. By default, the job approves all orders in the created state.

HotWax Commerce offers an additional job, `Approved Sales Orders`, designed for scenarios where retailers require custom order approval.

To know more about Order Approval refer to this [document](https://docs.hotwax.co/documents/learn-shopify/shopify-integration/how-are-orders-downloaded-from-shopify-to-hotwax-commerce/order-approval-for-fulfillment#order-approval-for-fulfillment-in-hotwax-commerce).

***

### Upload

### Upload Cancelled Orders

Job Name: `Cancelled Orders`\
Job Enum ID: `JOB_UL_CNCLD_ORD`\
Service Name: `bulkCancelOrdersOnShopify`\
Flow: Upload Cancelled HotWax to Shopify

In usual scenarios, orders are cancelled in Shopify and then synced to HotWax. However, in special cases, like when a CSR cancels an order on behalf of a customer from the view order page in HotWax, this process works differently. In such cases, **this job is used to upload cancelled orders from HotWax back to Shopify.** It retrieves all orders cancelled between the job's last run time and the current time.

**How Cancelled Orders are Uploaded ?**\
HotWax sends a post API request to Shopify with data of all orders that are cancelled in OMS in JSON format, then the orders are marked as cancelled in Shopify.

**Custom Parameters**

* This job has no required parameters.
* orderId and cancelledDate are two optional parameters.

***

### More Jobs

### Party Identification

Job Name: `Part Identification`\
Job Enum ID: `JOB_PARTY_IDENT`\
Service Name: `ftpImportFile`\
Flow: Order Approval Flow

**The party identification job is used for importing new customers created in NetSuite to HotWax.**

HotWax ensures that the `Netsuite Customer ID` must be mapped to the `HotWax Customer ID` for every order for smooth integration. Basically, when an order is placed for which the customer ID is not created in NetSuite, NetSuite will generate a “NetSuite Customer ID." Netsuite also generates a file in CSV format with newly created customer data and uploads that CSV in the SFTP location; from there, HotWax will import that CSV through the `Party Identification` job and map customers against all the NetSuite Customer IDs.

How are customer IDs mapped? The HotWax Commerce integration platform first queries the HotWax database to fetch orders that lack a “NetSuite Customer ID.” It then uploads a CSV file of these orders to an SFTP location.

Next, a SuiteScript in NetSuite runs at scheduled intervals, retrieves the CSV file, and generates a JSON file containing the “NetSuite Customer ID” for all the orders in the CSV and uploads it to an SFTP location. The JSON file is then uploaded to the internal file system of HotWax Commerce for further processing. The `Process Bulk Import Files` job then reads a JSON file to process in HotWax Commerce.

**Custom Parameters**

* The recommended frequency for this job is 15 minutes
* It also has some optional parameters.
* This job has configId and propertyResource as the required parameters.

To know more about this, refer to this [document](https://docs.hotwax.co/documents/learn-netsuite/synchronization-flows/ordersync/syncorderids).

***

### Complete Order Item from Shopify

Job Name: `Complete Order Item from Shopify`\
Job Enum ID: `IMP_COMPL_ORD_ITM`\
Service name: `completeOrderItemsFromShopify`\
Flow: Shopify to HotWax

**This job imports completed order items from Shopify for cases where retailers do not use HotWax Commerce for managing Available to Promise (ATP) inventory. In this case, ATP is managed on Shopify. In this case, order fulfillment information is not available with HotWax, and so it relies on Shopify to get the status of an order item.** It fetches orders completed between the last run time and the current timestamp.

**How completed order items are imported ?**\
HotWax sends an API request to Shopify, which returns the order fulfillment item details in JSON format. The JSON file is then uploaded to the internal file system of HotWax Commerce for further processing. The `Process Bulk Import Files` job then reads a JSON file and creates order records in HotWax Commerce.

**Custom Parameters**

* The recommended frequency for this job is **15 minutes**.
* This job has no required parameters.
* It has some optional parameters

***

### Approve Sales Orders

Job Name: `Approve Sales Orders`\
Job Enum ID: `JOB_APR_SALES_ORD`\
Service Name: `Import Approve Sales Order`\
Flow: Order Approval

**This job changes the order's status from 'Created' to 'Approved' based on certain conditions. It is used in custom order approval processes.**

For example, if the retailers want to ensure that payment must be captured before the order is approved, this job will ensure that only those orders are approved for which payment is captured by applying this condition on the Order Approval Flow.

Some jobs, like `party identification` and `order identification`are those required jobs that need to be run before this job ensures custom conditions are matched.

**How are orders approved?**

This job queries the HotWax Commerce database to fetch orders in the created state and filters out the orders that pass the checks defined by the retailer. The filtered orders’ are then changed to the ‘Approved’ status.

**Custom Parameters**

* The recommended frequency for this job is 15 minutes.
* This job has configId and propertyResource as the required parameters.
* It has some optional parameters.

***

### Create Exchange Order

Job Name: `Create Exchange Order`\
Job Enum ID: `JOB_CRT_SALES_ORD`\
Service Name: `ftpImportFile`\
Flow: Importing Exchanges from HotWax to Shopify

**This job is used for importing exchanges in HotWax from Shopify.** Basically, when an exchange is created in Shopify, it has to be synced with HotWax to maintain system integrity. This job imports all the exchanges from Shopify created between the last job run and the current timestamp.

**How are exchanges imported?**&#x20;

Shopify provides a feed of all the returns and exchanges in JSON format, which is then fetched and transformed by the HotWax Commerce integration platform. Further HotWax Commerce integration platform uploads transformed JSON to an SFTP location. From that SFTP location, the `Create Exchange Order` job brings the JSON and uploads it to the internal file system in HotWax.

Basically, when an exchange is created on an order in Shopify. This job takes those orders and creates the same exchanges for the corresponding orders in HotWax to maintain the system's integrity.

**Custom parameters**

* The recommended frequency for this job is 15 minutes.
* This job has configId and propertyResource as the required parameters.
* It has some optional parameters.

To know more about exchange, refer to this [document](https://docs.hotwax.co/documents/learn-shopify/shopify-integration/how-does-hotwax-commerce-manage-order-returns/shopify-pos-exchanges).

***

### Create Return Order

Job name: `Create Return Order`\
Job Enum ID: `JOB_CRT_RETURN`\
Service name: `ftpImportFile`\
Flow: Return Creation from Shopify to HotWax

**This job is used for importing returns from Shopify to HotWax.** This imports all returns that are created in Shopify between the last job run and the current timestamp.

Shopify uploads a feed in JSON format of both returns and exchanges to an SFTP location; from there, the HotWax Commerce integration platform transforms this feed, and then returns are created in HotWax by the `Create Return Order` job.

**How are returns synced from Shopify to HotWax?**

Shopify uploads a JSON file with returns and exchanges to an SFTP location. The HotWax Commerce integration platform processes this file and uploads a transformed feed of returns to the SFTP location. The `Create Return Order` job then imports this JSON into the `IMP_CRT_RTN_ORD` MDM in HotWax from the SFTP location. Finally, the `Process Bulk Import Files` job processes the data, creating the returns in HotWax.

**Custom Parameters**

* The recommended frequency for this job is 15 minutes.
* This job has configId and propertyResource as the required parameters.
* It has some optional parameters.

To know more about returns, refer to this [document](https://docs.hotwax.co/documents/learn-shopify/shopify-integration/how-does-hotwax-commerce-manage-order-returns/shopify-pos-exchanges).

***

### Import Last Day Orders from Shopify

Job Name: `Import Last Day Orders from Shopify`\
Job Enum ID: `JOB_IMP_MISS_ORD`\
Service Name: `importLastDayMissingOrders`\
Flow: Missed Orders from Shopify to HotWax

**This job is used for importing all the last-day orders from Shopify to HotWax.** Although HotWax has an `Import Orders` job to import orders from Shopify on a scheduled frequency, this job serves as a backup and makes sure that if any order is missed by the import orders job, it will also be imported into HotWax.

**How are last-day orders imported?**&#x20;

HotWax gives an API call to Shopify for importing all the last day's orders from Shopify. In response to this request, Shopify provides an order data feed containing data of all the last day's orders in JSON format. `Import Last Orders from Shopify` job imports this JSON file and uploads it to the internal file system of HotWax Commerce for further processing. The `Process Bulk Import Files` job then reads a JSON file and creates order records in HotWax Commerce.

Note: To find the Uploaded file, login to HotWax Commerce OMS, then navigate to Hamburger Menu>EXIM Page > Shopify Jobs tab > `Shopify Order MDM`.

**Custom Parameters**

* This job has no required parameters.
* It has some optional parameters.

To know more about Order Download refer to this [document](https://docs.hotwax.co/documents/learn-shopify/shopify-integration/how-are-orders-downloaded-from-shopify-to-hotwax-commerce/order-download).

***

### Order Item Attribute

Job Name: `Order Item Attribute`\
Job Enum ID: `JOB_ORDER_ITM_ATTR`\
Service Name: `ftpImportFile`\
Flow: Import Item Attribute from NetSuite to HotWax

**This job is used for importing order item attributes from NetSuite to HotWax. Order item attributes are basically used to provide some additional details on the order of every item in an order.**

NetSuite provides order line item details in a JSON format file. This JSON file is uploaded by NetSuite to an SFTP location; from there, HotWax imports these attributes.

**How are attributes imported?**\
`Order Item Attribute` job fetches the JSON file from the specified SFTP location at defined intervals and imports this JSON file and uploads it to the internal file system of HotWax Commerce for further processing. The `Process Bulk Import Files` job then reads a JSON file and creates order records in HotWax Commerce.

**Custom Parameters**

* The recommended frequency for this job is 15 minutes.
* This job has configId and propertyResource as the required parameters.
* It has some optional parameters.

***

### Order Item Rejected

Job Name: `Import Order Item Rejected`\
Job Enum ID: `JOB_ORDER_ITM_RJCT`\
Service Name: `ftpImportFile`\
Flow: Import Rejected Order Item from NetSuite to HotWax

**This job is used for importing rejected items in orders from NetSuite to HotWax from the last job run until the current timestamp.**

When NetSuite is used as a Warehouse Management System (WMS), it rejects an order in case that order cannot be fulfilled from the warehouse. These orders need to be rebroken in search of another location to get fulfilled. NetSuite marks all such order items as rejected and uploads a JSON feed containing data of all the rejected items to an SFTP location.

**How are rejected items synced from NetSuite to HotWax?**

&#x20;NetSuite uploads a CSV-format feed of all the rejected items to an SFTP location. From there, the `Import Order Item Rejected` job fetches this CSV file and uploads it to the internal file system of HotWax Commerce for further processing. The `Process Bulk Import Files` job then reads the CSV file and creates order records in the HotWax database.

**Custom Parameters**

* The recommended frequency for this job is 15 minutes.
* This job has configId and propertyResource as the required parameters.
* It has some optional parameters.

***

### Import Transfer Order

Job Name: `Import transfer Orders`\
Job Enum ID: `JOB_ORDER_ITM_TO`\
Service Name: `ftpImportFile`\
Flow: Import Transfer Order from NetSuite to HotWax

**This job imports transfer orders from ERP systems (e.g., NetSuite) into HotWax.** Transfer and purchase orders are created in ERP systems, and HotWax, as an order management system, imports them to maintain accurate inventory records.

**How are transfer orders synced?**&#x20;

For every transfer order created in an ERP system (like NetSuite), there is a script that runs on a scheduled frequency and uploads all the transfer orders created in ERP to an SFTP location. From there, the `Import Transfer Order` job runs and imports the feed of transfer orders from the SFTP location and uploads it onto the HotWax Commerce internal file system. From there, the `Process Bulk Import` job runs, and hence transfer orders are synced from NetSuite to HotWax.

**Custom Parameters**

* The recommended frequency for this job is 15 minutes.
* This job has configId and propertyResource as the required parameters.
* It has some optional parameters.

To know more about importing transfer orders refer to this [document](https://docs.hotwax.co/documents/learn-netsuite/integration-flows/transfer-order/warehousetostore).

***

### Order Identification

Job Name: `Order Identification`\
Job Enum ID: `JOB_ORDER_IDENT`\
Service Name: `ftpFileImport`\
Flow: Order Approval (NetSuite to HotWax Order Sync)

**This job is used for importing NetSuite order IDs for orders that exist in HotWax.** The NetSuite order ID is required for every order to maintain the system's integrity and sometimes in custom order approval flow.

This job runs at a defined frequency and fetches all the records created between the last job run and the current timestamp.

**How are NetSuite orders ID mapped in HotWax?**&#x20;

The HotWax Commerce integration platform queries the HotWax database and fetches all the records for which the NetSuite order ID is Null but the NetSuite customer ID exists. And creates a CSV for all such records and uploads it to an SFTP location. Further, a suite script from NetSuite fetches all these orders and provides NetSuite order IDs for all these orders and uploads a JSON feed on the SFTP location. Then the HotWax Commerce Order Identification job imports this JSON from SFTP to IMP\_ORDER\_IDENTMDM. Next, the Process Bulk Import File job maps all the NetSuite order IDs to the corresponding order IDs in HotWax.

**Custom Parameters**

* The recommended frequency for this job is 15 minutes.
* This job has configId and propertyResource as the required parameters.
* It has some optional parameters.

To know more about order ID sync, refer to this [document](https://docs.hotwax.co/documents/learn-netsuite/synchronization-flows/ordersync/syncorderids).

***

### Import Order Metafield

Job Name: `Import Shopify Order Metafield`\
Job Enum ID: `IMP_ORD_META_FIELD`\
Service Name: `importShopifyOrderMetafield`\
Flow: Order information Import Shopify to HotWax

Order metafields are basically some additional information of an order. **The `Import Order Metafield` job is used for importing order metafields from Shopify to HotWax.** Basically, when an order is imported into HotWax, if it has some metafields, HotWax imports those metafields separately through this job

**Custom Parameters**

* nameSpace is the required parameter for this job.
* It has some optional parameters.

***

### Approve Transfer Order

Job Name: `Approve Transfer Order`\
Job Enum ID: `JOB_APR_TO`\
Service Name: `BulkApproveTransferOrders`\
Flow: Transfer Order Approval Flow

**This job is used for auto-approving transfer orders in HotWax.** Basically, the `Imports Transfer Order` job checks the status of imported transfer orders from NetSuite to HotWax. The `Approve Transfer Order` job works on an essential step to approve transfer orders in HotWax.

**Custom parameters:**

* This job has no required parameters.
* It has bufferTime and orderId as the optional parameters.

***

### Import Order Attribute

Job Name: `Import order attribute`\
Job EnumID: `JOB_ORDER_ITM_ATTR`\
Service Name: `ftpImportFile`\
Flow: Importing Order Information from Shopify to HotWax

**This job is used for importing order attributes into HotWax.** Order attributes are basically some additional information on an order that is essential to be attached with the order.

For example, if an order is to be gift wrapped, this information is essential for the person who will pack the order. Such information will be imported as an order attribute.

**Custom Parameters**

* The recommended frequency for this job is 15 minutes.
* This job has configId and propertyResource as the required parameters.
* It has some optional parameters.

***

### Order Item Fulfillment

Job Name: `Order Item Fulfillment`\
Job Enum ID: `JOB_ODR_ITM_FLFLMNT`\
Service Name: `ftpImportFile`\
Flow: Import Fulfillment update from HotWax to NetSuite.

**This job is used for syncing the fulfillment status of orders from NetSuite to HotWax.** Basically, when an order is allocated to a warehouse and in cases when NetSuite is used as a warehouse management system (WMS), fulfillment updates on such an order will be taken from NetSuite.

HotWax requires the fulfillment update for various reasons, such as to update status on eCommerce and ultimately to maintain the integrity between HotWax and NetSuite.

**How is fulfillment status synced?**

NetSuite runs a SuiteScript to provide details of items that are fulfilled in the warehouse. And uploads a JSON file of such details on the SFTP location `Order Item Fulfillment`; the job imports the JSON to HotWax and uploads it on `IMP_ODR_ITM_FLFLMNT` MDM. Finally, the `Process Bulk Import Files` job processes the file, and hence, fulfillments are synced from Netsuite to HotWax.

**Custom Parameters**

* The recommended frequency for this job is 15 minutes.
* This job has configId and propertyResource as the required parameters.
* It has some optional parameters.

***

### Import Customer

**Job Name**: Import Customers from Shopify\
**Job Enum ID**: JOB\_IMP\_CSTMR

**Description**\
The Import Customer job imports customer data from Shopify into HotWax Commerce. This job ensures that customer information, including contact details and order history, is accurately synced between the two platforms, supporting smooth order processing and customer management in HotWax Commerce.

**Custom Parameters**

| Parameter    | Type     | Description                                                              | Default Value |
| ------------ | -------- | ------------------------------------------------------------------------ | ------------- |
| frequency    | Required | Defines the default duration of the last syncing of the shipment status. | 15            |
| `bufferTime` | Optional | Specifies the buffer time (in minutes) for scheduling job.               | Not Specified |
| limit        | Optional | Additional parameters for job customization.                             | Not Specified |

***
