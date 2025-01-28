---
description: "Learn about the Orders jobs in HotWax Commerce."
---

## Orders

### Import Orders
Job Name: `Import Orders`  
Job enum ID: `JOB_IMP_ORD`  
Service Name: `createOrdersFromShopify`    
Flow: Order Import from Shopify to OMS

**The `Import Orders` job is used for downloading orders from Shopify into HotWax. It retrieves all orders created in Shopify from the time the job last ran up to the current time.**
 
When the `Import Order` job runs for the first time, it defaults to downloading orders created in the last 15 minutes. This time frame can be adjusted using the "frequency" parameter.
 
**How are orders downloaded?**  
HotWax sends an API request to Shopify, which returns the order details in JSON format. The JSON file is then uploaded to the internal file system of HotWax Commerce for further processing. The `Process Bulk Import Files` job then reads a JSON file and creates order records in HotWax Commerce. 

To prevent errors with large files, HotWax limits the download to 100 orders per API call, though Shopify allows downloading up to 250 orders.

Note: To find the Uploaded file, login to HotWax Commerce OMS, then navigate to Hamburger Menu>EXIM Page > Shopify Jobs tab > `Shopify Order MDM`.

**Custom parameters:**
- Recommended frequency for the Import Order job is **15 minutes.**
- The required parameters for this job is **“frequency”.**
- It has some more optional parameters.

To know more about Order Download, refer to this [document](https://docs.hotwax.co/documents/learn-shopify/shopify-integration/how-are-orders-downloaded-from-shopify-to-hotwax-commerce/order-download).
___

### Approve Orders
Job name: `Approve orders`  
Job Enum ID: `JOB_APR_ORD`  
Service Name: `approvePendingShopifyOrders`  
Flow : Order Approval  

**The `Approve Orders` job changes the status of orders from 'Created' to 'Approved,' making them eligible for brokering.** Orders must be verified and approved before fulfilment to prevent invalid or fraudulent orders. The Approved Orders job runs every 30 minutes and approves all the orders placed between the last job ran up and the current timestamp.
 
**How are orders approved?**
This job checks the payment preference for each order in the 'Created' state. If the payment preference is either 'Authorised' or 'Settled,' then the job changes the order status from ‘Created' to 'Approved’.


**Custom Parameter:**
- The recommended frequency for this job is every **30 minutes**.
- The 'orderId' is an optional parameter. When provided, it will approve the specified order. By default, the job approves all orders in the created state.

HotWax Commerce offers an additional job, `Approved Sales Orders`, designed for scenarios where retailers require custom order approval.

To know more about Order Approval refer to this [document](https://docs.hotwax.co/documents/learn-shopify/shopify-integration/how-are-orders-downloaded-from-shopify-to-hotwax-commerce/order-approval-for-fulfillment#order-approval-for-fulfillment-in-hotwax-commerce).
___

### Update Orders
Job Name: `Import Order Updates from Shopify`  
Job Enum Id: `JOB_IMP_ORD_UPD`  
Service Name: `updateOrdersFromShopify`  
Flow: `Order Update from Shopify to OMS`  

**The Update Orders job is used for importing updates of orders from Shopify to HotWax, such as adding new items, modifying quantities, or cancelling items within an order.**
 
When CSRs or customers modify orders in Shopify, the `Import Order Updates from Shopify` job ensures those changes are accurately synced to HotWax. It identifies and updates any orders that have been modified after being downloaded in HotWax. The job retrieves updates for all orders placed between the last job run and the current time.
 
**How are orders updated in HotWax ? **
HotWax sends an API request to Shopify, which returns the order update details in JSON format. The JSON file is then uploaded to the internal file system of HotWax Commerce for further processing. The `Process Bulk Import Files` job then reads a JSON file and creates order records in HotWax Commerce. 

Note: To find the Uploaded file, login to HotWax Commerce OMS, then navigate to Hamburger Menu>EXIM Page > Shopify Jobs tab > `Shopify Order MDM`.


**Custom parameters**
- The required parameters for this job is “frequency”.
- Recommended frequency for this job is every hour (i.e 60 min)
- It has bufferTime as the optional parameter.

To know more about order updates, refer to this [document](https://docs.hotwax.co/documents/learn-shopify/shopify-integration/how-are-orders-downloaded-from-shopify-to-hotwax-commerce/order-updates#synchronizing-order-updates).
___

### Cancelled Orders
Job Name: `Import Cancelled Orders`  
Job Enum ID: `JOB_IMP_ORD_CNCL`  
Service Name:  `updateShopifyOrderStatus`  
Flow: `Shopify to HotWax`  

**The 'Import Cancelled Orders Job` is used for syncing cancelled orders from Shopify to HotWax. This job retrieves all Shopify orders cancelled between the last job run and the current time. **
 
When an order is cancelled on Shopify, it can be imported into HotWax Commerce via the `Update Orders Job`, Shopify webhooks, or the `Import Cancelled Orders Job`, which ensures accurate processing when other methods are unreliable. 
 
To sync cancelled orders, it is recommended to schedule both the Update Order and Cancelled Order jobs. The Cancelled Order job handles missed orders but will be deprecated in the near future.
 
This job specifically checks the `cancelled_at` field for orders on Shopify and compares it with the job’s last run time. If the `cancelled_at` time is later than the job's last run time, the job downloads all canceled orders in batches of 100 to avoid exceeding Shopify's API limit.
 
**How is cancellation synced?**
 
HotWax sends an API request to Shopify, which returns the cancelled order details in JSON format. The JSON file is then uploaded to the internal file system of HotWax Commerce for further processing. The `Process Bulk Import Files` job then reads a JSON file and creates order records in HotWax Commerce. 

**Custom parameters**
- The required parameters for this job is “frequency”.
- Recommended frequency for this job is every 30 min.
- It has bufferTime as the optional parameter.

To know more about Order Cancellation refer to this [document](https://docs.hotwax.co/documents/learn-shopify/shopify-integration/how-does-hotwax-commerce-manage-order-cancellations/complete-order-cancellation).
___

### Cancelled Order Items
Job Name: `Import Cancelled Items`  
Job Enum ID: `JOB_IMP_ITM_CNCL`  
Service Name: `cancelOrderItemsFromShopify`  
Flow : `Shopify to HotWax`  

**The `Import Cancelled Items` job is used to accurately synchronize item cancellations from Shopify to HotWax**. When a customer cancels an item from an order, only that specific item is canceled, not the entire order.
 
While the Update Orders Job can import canceled items, the Import Canceled Items job acts as a backup to guarantee that cancellations are properly synced. This job retrieves updates for orders placed between the last run and the current time, reflecting any cancellations made in Shopify.
 
**How Items are Cancelled in HotWax ?**  
 
HotWax sends an API request to retrieve order information, and in response, Shopify provides a JSON format file containing details of orders. The job checks the 'updated at' field in the order JSON and compares the timestamp with the job’s last run time. All orders updated after the last run are imported into HotWax Commerce in batches of 100 to prevent exceeding Shopify’s API limits.
 
After import, HotWax filters out the orders with canceled items and marks those items as canceled. The order status in HotWax Commerce is not changed; only the status of the canceled items is updated.
 

**Custom Parameters**
- The required parameters for this job is **“frequency”**.
- The recommended frequency for this job is **Hourly** (i.e 60 min).
- bufferTime and createByJobId are optional parameters for this job.

To know more about item cancellations, refer to this [document](https://docs.hotwax.co/documents/learn-shopify/shopify-integration/how-does-hotwax-commerce-manage-order-cancellations/partial-order-cancellation).
___

### Import Order Returns
Job Name: `Import Order Returns`  
Enum Id: `JOB_IMP_RTN`  
Service Name: `createReturnsFromShopify`  
Flow: Shopify to HotWax  

**The Import Order Returns job imports returns from Shopify to HotWax after they are completed and marked as "Refund" or "Returned" in Shopify, maintaining the order history.**

Another method for importing returns is subscribing to Shopify webhooks via the Job Manager App, but this approach is not recommended due to the unreliability of Shopify webhooks. 
 
Although Shopify allows fetching 250 returns per API call, to avoid issues with large files, HotWax will download up to 100 returns per API call.
 
**How are returns imported?**
HotWax sends an API request to Shopify, which returns the order return details in JSON format. The JSON file is then uploaded to the internal file system of HotWax Commerce for further processing. The `Process Bulk Import Files` job then reads a JSON file and creates order records in HotWax Commerce. 

Note: To find the Uploaded file, login to HotWax Commerce OMS, then navigate to Hamburger Menu>EXIM Page > Shopify Jobs tab > `Shopify Order Return`.


**Custom Parameters**
- The required parameters for this job is **“frequency”**.
- The recommended frequency for this job is **6 hours**.
- financialStatus ,bufferTime ,limit , createdByJobId are the optional parameters.

To know more about return import refer to this [document](https://docs.hotwax.co/documents/learn-shopify/shopify-integration/how-does-hotwax-commerce-manage-order-returns/import-returns-from-shopify)

___

## Webhooks

{% hint style="info" %}
Webhooks can be subscribed to from the category pages within the Job Manager app for specific categories.
{% endhint %}

Automated messages sent from eCommerce (Shopify) to OMS whenever an event occurs. They contain data about the event and are received in OMS, allowing real time communication between eCommerce and OMS.

**Subscribe to Shopify eCommerce Webhooks from OMS for:**

<details>

<summary>Orders</summary>

**Webhooks available for:**

1. New Orders
2. Canceled orders
3. Payment status
4. Returns

</details>
___


## Upload

### Upload Cancelled Orders
Job Name: `Cancelled Orders`  
Job Enum ID: `JOB_UL_CNCLD_ORD`  
Service Name: `bulkCancelOrdersOnShopify`  
Flow: Upload Cancelled HotWax to Shopify

In usual scenarios, orders are cancelled in Shopify and then synced to HotWax.  However, in special cases, like when a CSR cancels an order on behalf of a customer from the view order page in HotWax, this process works differently. In such cases, **this job is used to upload cancelled orders from HotWax back to Shopify.** It retrieves all orders cancelled between the job's last run time and the current time.

**How Cancelled Orders are Uploaded ?**  
HotWax sends a post API request to Shopify with data of all orders that are cancelled in OMS in JSON format, then the orders are marked as cancelled in Shopify.

**Custom Parameters**
- This job has no required parameters.
- orderId and cancelledDate are two optional parameters.
___

## More Jobs

### Party Identification
Job Name: `Part Identification`  
Job Enum ID: `JOB_PARTY_IDENT`  
Service Name: `ftpImportFile`  
Flow: `Order Approval Flow`  

The party identification job is used for importing new customers created in NetSuite to HotWax. 
 
HotWax ensures that the `Netsuite Customer ID` must be mapped to the `HotWax Customer ID` for every order for smooth integration. Basically, when an order is placed for which the customer ID is not created in NetSuite, NetSuite will generate a “NetSuite Customer ID." Netsuite also generates a file in CSV format with newly created customer data  and uploads that CSV in the SFTP location; from there, HotWax will import that CSV through the `Party Identification` job and map customers against all the NetSuite Customer IDs.
 
How are customer IDs mapped?
The HotWax Commerce integration platform first queries the HotWax database to fetch orders that lack a “NetSuite Customer ID.” It then uploads a CSV file of these orders to an SFTP location.
 
Next, a SuiteScript in NetSuite runs at scheduled intervals, retrieves the CSV file, and generates a JSON file containing the “NetSuite Customer ID” for all the orders in the CSV and uploads it to an SFTP location. The JSON file is then uploaded to the internal file system of HotWax Commerce for further processing. The `Process Bulk Import Files` job then reads a JSON file to process in HotWax Commerce.


**Custom Parameters**
- The recommended frequency for this job is 15 minutes
- It also has some optional parameters.
- This job has configId and propertyResource as the required parameters.
 
To know more about this, refer to this [document](https://docs.hotwax.co/documents/learn-netsuite/synchronization-flows/ordersync/syncorderids).
 ___

### Update Order Tags
**Job Name:** `Update Order Tags`  
**Job Enum ID:** `JOB_UPD_TAG_ORD`  

**Description**  
The Update Order Tags job, identified by Job Enum ID UPDATE_ORDER_TAGS, is designed to perform bulk updates to order tags on the eCommerce platform. This job facilitates efficient and large-scale modifications to order tags, ensuring synchronization with the latest data.

**Recommended Frequency**  
The job frequency can be configured based on the business needs and the desired frequency of updating order tags in bulk.

**No custom parameters for this job**
___
### Complete Order Item from Shopify
Job Name: `Complete Order Item from Shopify`  
Job Enum ID: `IMP_COMPL_ORD_ITM`  
Service name: `completeOrderItemsFromShopify `  
Flow: Shopify to HotWax

**This job imports completed order items from Shopify for cases where retailers do not use HotWax Commerce for managing Available to Promise (ATP) inventory. In this case, ATP is managed on Shopify. In this case, order fulfillment information is not available with HotWax,  and so it relies on Shopify to get the status of an order item.** It fetches orders completed between the last run time and the current timestamp.

**How completed order items are imported ?**  
HotWax sends an API request to Shopify, which returns the order fulfillment item details in JSON format. The JSON file is then uploaded to the internal file system of HotWax Commerce for further processing. The `Process Bulk Import Files` job then reads a JSON file and creates order records in HotWax Commerce. 

**Custom Parameters**
- The recommended frequency for this job is **15 minutes**.
- This job has no required parameters.
- It has some optional parameters
___

### Approve Sales Orders
Job Name: `Approve Sales Orders`  
Job Enum ID: `JOB_APR_SALES_ORD`  
Service Name: `Import Approve Sales Order`  
Flow: Order Approval

**This job changes the order's status from 'Created' to 'Approved' based on certain conditions. It is used in custom order approval processes.**
 
For example, if the retailers want to ensure that payment must be captured before the order is approved, this job will ensure that only those orders are approved for which payment is captured by applying this condition on the Order Approval Flow.
 
Some jobs, like `party identification`  and `order identification`are those required jobs that need to be run before this job ensures custom conditions are matched.
 
**How are orders approved?**
This job queries the HotWax Commerce database to fetch orders in the created state and filters out the orders that pass the checks defined by the retailer. The filtered orders’ are then changed to the ‘Approved’ status.

**Custom Parameters**

- The recommended frequency for this job is 15 minutes.
- This job has configId and propertyResource as the required parameters.
- It has some optional parameters.

___

### Bulk Process Refund for Received Return
**Job Name:** `Bulk Process Refund for Received Return`  
**Job Enum ID:** `BLK_PROCESS_RTN_RFND`  

**Description**  
The Bulk Process Refund for Received Returns job is designed to efficiently process returns in bulk and push them to the Shopify platform. This job specifically handles returns that are associated with a sales channel set to POS.  
It is particularly useful for retailers who do not use Shopify's POS system, enabling them to manage returns and process refunds in bulk for smoother operations and accurate financial records.

**Custom Parameters**  
| Parameter | Type | Description | Default Value |
|-----------|------|-------------|---------------|
| `startDateTime` | Optional |It marks the beginning of the validity period for an entity or event, such as the defined period of the received returns. | Not Specified |
| `returnId` | Optional | Unique identifier for return transactions within the system. | Not Specified |
___


**How are orders approved?**
This job queries the HotWax Commerce database to fetch orders in the created state and filters out the orders that pass the checks defined by the retailer. The filtered orders’ are then changed to the ‘Approved’ status.

**Custom Parameters**
- The recommended frequency for this job is 15 minutes.
- This job has configId and propertyResource as the required parameters.
- It has some optional parameters.

___

### Create Exchange Order
Job Name: `Create Exchange Order`  
Job Enum ID: `JOB_CRT_SALES_ORD`  
Service Name: `ftpImportFile`  
Flow: Importing Exchanges from HotWax to Shopify  

**This job is used for importing exchanges in HotWax from Shopify.** Basically, when an exchange is created in Shopify, it has to be synced with HotWax to maintain system integrity. This job imports all the exchanges from Shopify created between the last job run and the current timestamp.
 
**How are exchanges imported?**
Shopify provides a feed of all the returns and exchanges in JSON format, which is then fetched and transformed by the HotWax Commerce integration platform. Further HotWax Commerce integration platform uploads transformed JSON to an SFTP location. From that SFTP location, the `Create Exchange Order` job brings the JSON and uploads it to the internal file system in HotWax.
 
Basically, when an exchange is created on an order in Shopify. This job takes those orders and creates the same exchanges for the corresponding orders in HotWax to maintain the system's integrity.


**Custom parameters**
- The recommended frequency for this job is 15 minutes.
- This job has configId and propertyResource as the required parameters.
- It has some optional parameters.

To know more about exchange, refer to this [document](https://docs.hotwax.co/documents/learn-shopify/shopify-integration/how-does-hotwax-commerce-manage-order-returns/shopify-pos-exchanges).
___

### Create Return Order
Job name: `Create Return Order`  
Job Enum ID: `JOB_CRT_RETURN`  
Service name: `ftpImportFile`  
Flow: `Return creation from Shopify to HotWax`  
 
**This job is used for importing returns from Shopify to HotWax.** This imports all returns that are created in Shopify between the last job run and the current timestamp. 
 
Shopify uploads a feed in JSON format of both returns and exchanges to an SFTP location; from there, the HotWax Commerce integration platform transforms this feed, and then returns are created in HotWax by the `Create Return Order` job.
 
**How are returns synced from Shopify to HotWax?**

Shopify uploads a JSON file with returns and exchanges to an SFTP location. The HotWax Commerce integration platform processes this file and uploads a transformed feed of returns to the SFTP location. The `Create Return Order` job then imports this JSON into the `IMP_CRT_RTN_ORD` MDM in HotWax from the SFTP location. Finally, the `Process Bulk Import Files` job processes the data, creating the returns in HotWax.

**Custom Parameters**
- The recommended frequency for this job is 15 minutes.
- This job has configId and propertyResource as the required parameters.
- It has some optional parameters.

To know more about returns, refer to this [document](https://docs.hotwax.co/documents/learn-shopify/shopify-integration/how-does-hotwax-commerce-manage-order-returns/shopify-pos-exchanges).
___

### Create Shipment for Incoming Returns
**Job Name:** `Create Shipment for Incoming Returns` 
**Job EnumID:** `INCOMING_SHPMNT_RETN` 

The `Create Shipment for incoming returns` job serves to manage the reception of return shipments efficiently. When a return is initiated through Shopify, the return item details are added into the receiving app of HotWax Commerce.

**Custom parameters**  
| Parameter | Type | Description | Default Value |
|-----------|------|-------------|---------------|
| `configId` | Required | Identifies the configuration for Order Item Attribute records. | INCOMING_SHPMNT_RETN |
| `propertyResource` | Required | Specifies the property resource for configuration. | FTP_CONFIG |
| `remoteFilename` | Optional | Specifies the remote filename for processing. | Not specified |
| `groupBy` | Optional | Specifies a grouping parameter for the job. | Not specified |
| `additionalParameters` | Optional | Additional parameters for job customization. | Not specified |
| `fileNameRegex` | Optional | Specifies a regular expression for filtering filenames. | Not specified |
| importpath | Optional | Specifies the SFTP location and path for importing the file into the system. | Not specified |
| `scheduleNow` | Optional | When importing files into the OMS, forces the system to pick the file out of sequence for immediate processing. Enabled by default when importing files from FTP, but can be disabled during high-volume syncs for system stability. | Not specified |
| `createdByJobID` | Optional | ID of the job that initiated this job. | Not specified |

___

### Import Last Day Orders from Shopify
Job Name: `Import Last Day Orders from Shopify`  
Job Enum ID: `JOB_IMP_MISS_ORD`  
Service Name: `importLastDayMissingOrders`  
Flow: Missed Orders from Shopify to HotWax
 
**This job is used for importing all the last-day orders from Shopify to HotWax.** Although HotWax has an `Import Orders` job to import orders from Shopify on a scheduled frequency, this job serves as a backup and makes sure that if any order is missed by the import orders job, it will also be imported into HotWax.

**How are last-day orders imported?**
HotWax gives an API call to Shopify for importing all the last day's orders from Shopify. In response to this request, Shopify provides an order data feed containing data of all the last day's orders in JSON format. `Import Last Orders from Shopify` job imports this JSON file and uploads it to the internal file system of HotWax Commerce for further processing. The `Process Bulk Import Files` job then reads a JSON file and creates order records in HotWax Commerce. 


Note: To find the Uploaded file, login to HotWax Commerce OMS, then navigate to Hamburger Menu>EXIM Page > Shopify Jobs tab > `Shopify Order MDM`.

**Custom Parameters**
- This job has no required parameters.
- It has some optional parameters.

To know more about Order Download refer to this [document](https://docs.hotwax.co/documents/learn-shopify/shopify-integration/how-are-orders-downloaded-from-shopify-to-hotwax-commerce/order-download).

___

### Order Item Attribute
Job Name: `Order Item Attribute`  
Job Enum ID: `JOB_ORDER_ITM_ATTR`  
Service Name: `ftpImportFile`  
Flow: Import Item Attribute from NetSuite to HotWax
 
**This job is used for importing order item attributes from NetSuite to HotWax. Order item attributes are basically used to provide some additional details on the order of every item in an order.**
 
NetSuite provides order line item details in a JSON format file. This JSON file is uploaded by NetSuite to an SFTP location; from there, HotWax imports these attributes.

**How are attributes imported?**  
`Order Item Attribute` job fetches the JSON file from the specified SFTP location at defined intervals and imports this JSON file and uploads it to the internal file system of HotWax Commerce for further processing. The `Process Bulk Import Files` job then reads a JSON file and creates order records in HotWax Commerce.


**Custom Parameters**
- The recommended frequency for this job is 15 minutes.
- This job has configId and propertyResource as the required parameters.
- It has some optional parameters.
___


### Order Item Rejected

Job Name: `Import Order Item Rejected`  
Job Enum ID: `JOB_ORDER_ITM_RJCT`  
Service Name: `ftpImportFile`  
Flow: Import Rejected Order Item from NetSuite to HotWax
 
**This job is used for importing rejected items in orders from NetSuite to HotWax from the last job run until the current timestamp.**

When NetSuite is used as a Warehouse Management System (WMS), it rejects an order in case that order cannot be fulfilled from the warehouse. These orders need to be rebroken in search of another location to get fulfilled. NetSuite marks all such order items as rejected and uploads a JSON feed containing data of all the rejected items to an SFTP location.

**How are rejected items synced from NetSuite to HotWax?**
NetSuite uploads a CSV-format feed of all the rejected items to an SFTP location. From there, the `Import Order Item Rejected` job fetches this CSV file and uploads it to the internal file system of HotWax Commerce for further processing. The `Process Bulk Import Files` job then reads the CSV file and creates order records in the HotWax database.
 
**Custom Parameters**
- The recommended frequency for this job is 15 minutes.
- This job has configId and propertyResource as the required parameters.
- It has some optional parameters.
___


### Import Transfer Order

Job Name: `Import transfer Orders`  
Job Enum ID: `JOB_ORDER_ITM_TO`  
Service Name: `ftpImportFile`  
Flow: Import Transfer Order from NetSuite to HotWax
 
**This job imports transfer orders from ERP systems (e.g., NetSuite) into HotWax.** Transfer and purchase orders are created in ERP systems, and HotWax, as an order management system, imports them to maintain accurate inventory records.
 
**How are transfer orders synced?**
For every transfer order created in an ERP system (like NetSuite), there is a script that runs on a scheduled frequency and uploads all the transfer orders created in ERP to an SFTP location. From there, the `Import Transfer Order` job runs and imports the feed of transfer orders from the SFTP location and uploads it onto the HotWax Commerce internal file system. From there, the `Process Bulk Import` job runs, and hence transfer orders are synced from NetSuite to HotWax.


**Custom Parameters**
- The recommended frequency for this job is 15 minutes.
- This job has configId and propertyResource as the required parameters.
- It has some optional parameters.
	
To know more about importing transfer orders refer to this [document](https://docs.hotwax.co/documents/learn-netsuite/integration-flows/transfer-order/warehousetostore).

___

### Order Identification
Job Name: `Order Identification`  
Job Enum ID: `JOB_ORDER_IDENT`  
Service Name: `ftpFileImport`  
Flow: Order Approval (NetSuite to HotWax Order Sync)
 
**This job is used for importing NetSuite order IDs for orders that exist in HotWax.** The NetSuite order ID is required for every order to maintain the system's integrity and sometimes in custom order approval flow.
 
This job runs at a defined frequency and fetches all the records created between the last job run and the current timestamp.

**How are NetSuite orders ID mapped in HotWax?**
The HotWax Commerce integration platform queries the HotWax database and fetches all the records for which the NetSuite order ID is `Null but the NetSuite customer ID exists. And creates a CSV for all such records and uploads it to an SFTP location. Further, a suite script from NetSuite fetches all these orders and provides NetSuite order IDs for all these orders and uploads a JSON feed on the SFTP location. Then the HotWax Commerce `Order Identification` job imports this JSON from SFTP to `IMP_ORDER_IDENT` MDM. Next, the `Process Bulk Import File` job maps all the NetSuite order IDs to the corresponding order IDs in HotWax. 


**Custom Parameters**
- The recommended frequency for this job is 15 minutes.
- This job has configId and propertyResource as the required parameters.
- It has some optional parameters.

To know more about order ID sync, refer to this [document](https://docs.hotwax.co/documents/learn-netsuite/synchronization-flows/ordersync/syncorderids).
___

### Import Order Metafield
Job Name: `Import Shopify Order Metafield`  
Job Enum ID: `IMP_ORD_META_FIELD`  
Service Name: `importShopifyOrderMetafield`  
Flow: Order information Import Shopify to HotWax
 
Order metafields are basically some additional information of an order. **The `Import Order Metafield` job is used for importing order metafields from Shopify to HotWax.** Basically, when an order is imported into HotWax, if it has some metafields, HotWax imports those metafields separately through this job

**Custom Parameters**
- nameSpace is the required parameter for this job.
- It has some optional parameters.
___

### Import Customer
**Job Name**: Import Customers from Shopify  
**Job Enum ID**: JOB_IMP_CSTMR  

**Description**  
The Import Customer job imports customer data from Shopify into HotWax Commerce. This job ensures that customer information, including contact details and order history, is accurately synced between the two platforms, supporting smooth order processing and customer management in HotWax Commerce.

**Custom Parameters**

| Parameter           | Type      | Description                                           | Default Value  |
|---------------------|-----------|-------------------------------------------------------|----------------|
| frequency           | Required  | Defines the default duration of the last syncing of the shipment status. | 15 |
| `bufferTime`          | Optional  | Specifies the buffer time (in minutes) for scheduling job. | Not Specified |
| limit               | Optional  | Additional parameters for job customization.         | Not Specified |

___

### Approve Transfer Order
Job Name: `Approve Transfer Order`  
Job Enum ID: `JOB_APR_TO`  
Service Name: `BulkApproveTransferOrders`  
Flow: Transfer Order Approval Flow
 
**This job is used for auto-approving transfer orders in HotWax.** Basically, the `Imports Transfer Order` job checks the status of imported transfer orders from NetSuite to HotWax. The `Approve Transfer Order` job works on an essential step to approve transfer orders in HotWax.
	
**Custom parameters:**
- This job has no required parameters.
- It has bufferTime and orderId as the optional parameters.
___


### Import Order Attribute
Job Name: `Import order attribute`  
Job EnumID: `JOB_ORDER_ITM_ATTR`  
Service Name: `ftpImportFile`  
Flow: Importing Order Information from Shopify to HotWax
 
**This job is used for importing order attributes into HotWax.** Order attributes are basically some additional information on an order that is essential to be attached with the order.
 
For example, if an order is to be gift wrapped, this information is essential for the person who will pack the order. Such information will be imported as an order attribute.

**Custom Parameters**
- The recommended frequency for this job is 15 minutes.
- This job has configId and propertyResource as the required parameters.
- It has some optional parameters.
___


### Order Item Fulfillment
Job Name: `Order Item Fulfillment`  
Job Enum ID: `JOB_ODR_ITM_FLFLMNT`  
Service Name: `ftpImportFile`  
Flow: Import Fulfillment update from HotWax to NetSuite.
 
**This job is used for syncing the fulfillment status of orders from NetSuite to HotWax.** Basically, when an order is allocated to a warehouse and in cases when NetSuite is used as a warehouse management system (WMS), fulfillment updates on such an order will be taken from NetSuite.
 
HotWax requires the fulfillment update for various reasons, such as to update status on eCommerce and ultimately to maintain the integrity between HotWax and NetSuite.
 
**How is fulfillment status synced?**
NetSuite runs a SuiteScript to provide details of items that are fulfilled in the warehouse. And uploads a JSON file of such details on the SFTP location `Order Item Fulfillment`; the job imports the JSON to HotWax and uploads it on `IMP_ODR_ITM_FLFLMNT` MDM. Finally, the `Process Bulk Import Files` job processes the file, and hence, fulfillments are synced from Netsuite to HotWax.
 
**Custom Parameters**
- The recommended frequency for this job is 15 minutes.
- This job has configId and propertyResource as the required parameters.
- It has some optional parameters.
___
