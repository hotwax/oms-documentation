---
description: "Learn about the Orders jobs in HotWax Commerce."
---

# Orders

## Import

### New orders
**Job Name:** `Import Orders`  
**Job Enum ID:** `JOB_IMP_ORD`  

**Description**

The `Import Orders` job is designed to import new orders recently created on eCommerce platforms into HotWax Commerce. New orders are identified by checking those created since the last time the job was executed. If the job is run for the first time, it defaults to orders created in the last 15 minutes from the execution time. This default duration can be adjusted using the "frequency" custom parameter.  

**Recommended Frequency**  
Importing new orders every 15 minutes is generally sufficient to ensure customers have a grace period for order cancellations and to process expedited orders on time. However:  

- **Low Order Volume:** For instances with lower order volume and more demanding fulfillment SLAs, consider increasing the frequency to every five minutes.  
- **High Order Volume:** During periods of higher order volume, importing orders every 15 minutes is recommended to leverage HotWax Commerce's bulk import capabilities fully.  

| **Parameter**    | **Type**    | **Description**                                                                                   | **Default Value** |
|-------------------|-------------|---------------------------------------------------------------------------------------------------|-------------------|
| `frequency`       | Required    | Defines the default duration for syncing orders if there is no Last Sync Time.                   | 15 minutes        |
| `limit`           | Optional    | Sets a limit on the order import job, restricting the number of orders fetched from eCommerce.    | Not specified     |
| `bufferTime`      | Optional    | Ensures orders are not imported until they have aged past a desired duration, accommodating post-processing workflows in eCommerce platforms. | 5 minutes         |
| `thruDateBuffer`  | Optional    | Skips Shopify orders created within the specified time interval. For example, if thruDateBuffer is set to 1, it implies that orders created in Shopify within the last 1 minute will be skipped during the import process. | 2 minutes         |
| `scheduleNow`     | Optional    | When importing files into the OMS, the system must pick the file out of sequence for immediate processing. Enabled by default when importing files from FTP, but can be disabled during high-volume syncs for system stability. | Enabled           |

### Approve Orders  
**Job Name:** `Approve Orders`  
**Job Enum ID:** `JOB_APR_ORD`  

**Description**  
In HotWax Commerce, all orders are initially marked as `Created` after downloading. Orders can be auto-approved using a scheduled job called `Approve Orders`, which checks the approval status of Shopify orders based on parameters set by Shopify merchants. The job runs at a default frequency and approves orders once all necessary details and required references are established.  

**Custom Parameters**  

| **Parameter**   | **Type**    | **Description**                                                   | **Default Value** |
|-----------------|-------------|-------------------------------------------------------------------|-------------------|
| `orderId`       | Optional    | The ID associated with the order is to be updated on the eCommerce platform. | Not specified     |

### Updates orders  
**Job Name:** `Import Order Updates from Shopify`  
**Job Enum ID:** `JOB_IMP_ORD_UPD`  

**Description**  
The `Import Order Updates from Shopify` job is specifically designed to handle the import of order updates from the eCommerce platform into HotWax Commerce. This job caters to a variety of order modifications, including the addition of new items, changes in item quantities, and the cancellation of items or entire orders.  

**Recommended Frequency**  
The job is configured to run every 60 minutes, ensuring frequent updates and maintaining synchronization between Shopify and HotWax Commerce.  

| **Parameter**   | **Type**    | **Description**                                                       | **Default Value** |
|-----------------|-------------|-----------------------------------------------------------------------|-------------------|
| `frequency`     | Required    | Defines the default duration for syncing orders if there is no Last Sync Time. | 60 minutes        |
| `bufferTime`    | Optional    | Ensures orders are not imported until they have aged past a desired duration, accommodating post-processing workflows in Shopify. | Not specified     |

### Canceled Orders  
**Job Name:** `Import Canceled Order`  
**Job Enum ID:** `JOB_IMP_CAN_ORD`  

**Description**  
The `Import Canceled Orders` job synchronizes order cancellations between the eCommerce platform and HotWax Commerce. It identifies orders marked as canceled in the eCommerce system and updates their status in HotWax Commerce, ensuring alignment and preventing further processing of canceled orders.  

| **Parameter**   | **Type**    | **Description**                                                       | **Default Value** |
|-----------------|-------------|-----------------------------------------------------------------------|-------------------|
| `frequency`     | Required    | Defines the default duration for syncing orders if there is no Last Sync Time. | 15 minutes        |
| `bufferTime`    | Optional    | Ensures orders are not imported until they have aged past a desired duration, accommodating post-processing workflows in eCommerce platforms. | Not Specified     |

### Canceled Items  
**Job Name:** `Import Canceled Items`  
**Job Enum ID:** `JOB_IMP_ITM_CNCL`  

**Description**  
The `Import Canceled Items` job is designed to actively monitor eCommerce platforms for order items that have been canceled. Unlike canceling the entire order, this job specifically targets canceled items and ensures their corresponding status is updated within HotWax Commerce.  
This job is crucial for maintaining accurate inventory records and order status in HotWax Commerce. By identifying and canceling individual items that have been canceled on the eCommerce platform, it prevents discrepancies and ensures that the system reflects the most up-to-date order information. 

**Recommended Frequency**  
The job is configured to run every 15 minutes, ensuring a regular check for canceled items and prompt updates within HotWax Commerce.  

| **Parameter**   | **Type**    | **Description**                                                       | **Default Value** |
|-----------------|-------------|-----------------------------------------------------------------------|-------------------|
| `frequency`     | Required    | Defines the default duration for syncing orders if there is no Last Sync Time. | 15 minutes        |
| `bufferTime`    | Optional    | Ensures orders are not imported until they have aged past a desired duration, accommodating post-processing workflows in Shopify. | Not specified     |

### Returns  
**Job Name:** `Import Order Returns`  
**Job Enum ID:** `JOB_IMP_RTN`  

**Description**  
The `Import Order Returns` job plays a crucial role in managing returned orders seamlessly between eCommerce platforms and HotWax Commerce. This job actively monitors eCommerce platforms to identify orders that have been returned. Subsequently, it initiates the creation of return transactions within HotWax Commerce. In cases where inventory is damaged, the job ensures accurate logging of Damaged variances in HotWax.  
- **Return Creation:** The primary function of the job is to create return transactions in HotWax Commerce for orders identified as returned on the eCommerce platform.  
- **Restocking:** If the inventory is damaged and marked as returnable, the job ensures that returned items are restocked appropriately.  

**Recommended Frequency**  
The job is configured to run every 15 minutes, ensuring a regular check for returned orders and facilitating swift updates within HotWax Commerce.  

| **Parameter**   | **Type**    | **Description**                                                       | **Default Value** |
|-----------------|-------------|-----------------------------------------------------------------------|-------------------|
| `frequency`     | Required    | Defines the default duration for syncing orders if there is no Last Sync Time. | 15 minutes        |
| `bufferTime`    | Optional    | Ensures orders are not imported until they have aged past a desired duration, accommodating post-processing workflows in Shopify. | Not specified     |
| `financialStatus`| Optional   | Specifies the financial status of orders.                             | Not specified     |
| `limit`         | Optional    | Sets a limit on the order import job, restricting the number of orders fetched from eCommerce. | Not specified     |

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

## Upload

### Completed Orders

#### Job Name: `Upload Completed Orders`  
#### Job Enum ID: `JOB_UL_CMPLT_ORD`  

##### Description  
The `Upload Completed Orders` job synchronizes all orders marked as "Completed" in HotWax Commerce with Shopify. This ensures that orders in Shopify are updated to a "Fulfilled" status, maintaining accurate and consistent order tracking across both systems.  

##### Recommended Frequency  
The job is configured to run at a frequency that suits the needs of your business, ensuring timely updates for fulfilled orders.  

##### Parameters  

| Parameter             | Type     | Description                                         | Default Value   |
|------------------------|----------|-----------------------------------------------------|-----------------|
| `shipmentID`          | Required | The ID associated with the shipment to track and update orders. | Not specified   |
| `orderID`             | Required | The ID associated with the order to be updated on the eCommerce platform. | Not specified   |
| `shipmentCreatedDate` | Required | The timestamp associated with the creation of shipments. | Not specified   |



### Canceled Orders

#### Job Name: `Upload Canceled Orders`  
#### Job Enum ID: `JOB_UL_CNCLD_ORD`  

##### Description  
The `Upload Canceled Orders` job is used to upload canceled orders from HotWax Commerce to Shopify. HotWax Commerce allows retailers to set an auto-cancel date for each order, which defaults to 7 days. If an order is not fulfilled within this time frame, it is automatically canceled in HotWax Commerce and requires updating on Shopify to ensure both systems stay in sync. This bulk operation helps streamline the cancellation process, reducing manual effort and minimizing discrepancies between HotWax Commerce and Shopify.  

##### Custom Parameters  

| Parameter       | Type     | Description                                                                                     | Default Value |
|------------------|----------|-------------------------------------------------------------------------------------------------|---------------|
| `Frequency`     | Required | Defines the default duration of the last syncing of the canceled orders.                        | In an hour    |
| `Schedule`      | Optional | Ensures orders are not imported until they have aged past a desired duration, accommodating post-processing workflows in eCommerce platforms. | Not specified |
| `OrderId`       | Optional | The ID associated with the order to be updated on the eCommerce platform.                       | Not specified |
| `CanceledDate` | Optional | This parameter specifies the date an order was canceled in HotWax Commerce.                    | Not specified |

## More Jobs

### Party Identification
**Job Name:** `Party Identification`  
**Job Enum ID:** `JOB_PARTY_IDENT`

**Description**  
The Party Identification job is designed to create or update Party Identification records within the system. This job ensures accurate and up-to-date identification of parties involved.

**Recommended frequency**  
The job is configured to run at a frequency that aligns with the business needs for regular updates of party identification records.

**Custom Parameters**

| Parameter          | Type      | Description                                                         | Default Value          |
|--------------------|-----------|---------------------------------------------------------------------|------------------------|
| `propertyResource`   | Required  | Specifies the property resource for configuration.                  | FTP_CONFIG             |
| `configId`          | Required  | Identifies the configuration for importing party identification records. | IMP_PARTY_IDENT   |
| `remoteFilename`     | Optional  | Specifies the remote filename for processing.                       | Not specified          |
| `groupBy`            | Optional  | Specifies a grouping parameter for the job.                         | Not specified          |
| `additionalParameters` | Optional| Additional parameters for job customization.                        | Not specified          |
| `fileNameRegex`      | Optional  | Specifies a regular expression for filtering filenames.             | Not specified          |
| `scheduleNow`        | Optional  | Forces the system to pick the file out of sequence for immediate processing. | Not specified |


### Update Order Tags
**Job Name:** `Update Order Tags`  
**Job Enum ID:** `JOB_UPD_TAG_ORD`  

**Description**  
The Update Order Tags job, identified by Job Enum ID UPDATE_ORDER_TAGS, is designed to perform bulk updates to order tags on the eCommerce platform. This job facilitates efficient and large-scale modifications to order tags, ensuring synchronization with the latest data.

**Recommended Frequency**  
The job frequency can be configured based on the business needs and the desired frequency of updating order tags in bulk.

**No custom parameters for this job**


### Complete Order Items from Shopify
**Job Name:** `Complete order items from Shopify`  
**Job Enum ID:** `IMP_COMPL_ORD_ITM`  

**Description**  
The `Complete Order Items from Shopify` job ensures that order statuses remain synchronized between Shopify and HotWax Commerce. When items in an order are marked as completed in Shopify, this job automatically updates the corresponding items in HotWax to reflect their completed status. This synchronization helps maintain accurate order tracking, reduces manual updates, and ensures consistency across both platforms.

**No custom parameters for this job**

### Approve Sales Orders
**Job Name:** `Approve Sales Order`  
**Job Enum ID:** `JOB_APR_SALES_ORD`

**Description**  
The Approve Sales Order job is designed to facilitate the approval of sales orders within the system. This ensures that sales orders are processed and approved promptly.

**Recommended frequency**  
The job is configured to run at a frequency that aligns with the business needs for timely approval of sales orders.

**Custom Parameters**

| Parameter         | Type      | Description                                                         | Default Value          |
|-------------------|-----------|---------------------------------------------------------------------|------------------------|
| `propertyResource`  | Required  | Specifies the property resource for configuration.                  | FTP_CONFIG             |
| `configId`          | Required  | Identifies the configuration for Order Item Attribute records.      | IMP_APR_SALES_ORD      |
| `remoteFilename`    | Optional  | Specifies the remote filename for processing.                       | Not specified          |
| `groupBy`           | Optional  | Specifies a grouping parameter for the job.                         | Not specified          |
| `additionalParameters` | Optional | Additional parameters for job customization.                       | Not specified          |
| `fileNameRegex`     | Optional  | Specifies a regular expression for filtering filenames.             | Not specified          |
| `scheduleNow`       | Optional  | Forces the system to pick the file out of sequence for immediate processing. | Enabled                |

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

### Create Exchange Order
**Job Name:** `Import Create Exchange Order`  
**Job Enum ID:** `JOB_CRT_SALES_ORD`  

**Description**  
The `Create Exchange Order` job processes orders for which an exchange has been initiated in Shopify and synchronizes these exchange details into HotWax Commerce. This ensures accurate tracking and management of exchange orders within the OMS.

**Custom Parameters**  
| Parameter | Type | Description | Default Value |
|-----------|------|-------------|---------------|
| `configId` | Required | Identifies the configuration for Order Item Attribute records. | IMP_CRT_EXCHG_ORD |
| `propertyResource` | Required | Specifies the property resource for configuration. | FTP_CONFIG |
| `remoteFilename` | Optional | Specifies the remote filename for processing. | Not specified |
| `groupBy` | Optional | Specifies a grouping parameter for the job. | Not specified |
| `additionalParameters` | Optional | Additional parameters for job customization. | Not specified |
| `fileNameRegex` | Optional | Specifies a regular expression for filtering filenames. | Not specified |
| importpath | Optional | Specifies the SFTP location and path for importing the file into the system. | Not specified |
| `scheduleNow` | Optional | When importing files into the OMS, forces the system to pick the file out of sequence for immediate processing. Enabled by default when importing files from FTP, but can be disabled during high-volume syncs for system stability. | Not specified |
| `createdByJobID` | Optional | ID of the job that initiated this job. | Not specified |

### Create Return Order
**Job Name:** `Import Create Return Order`  
**Job Enum ID:** `JOB_CRT_RETURN`  

**Description**  
This job imports all return requests created in Shopify into HotWax Commerce. It ensures that return data, including returned items and customer details, is automatically synced for processing. This job helps keep records up to date, supporting accurate inventory adjustments and streamlined return management across both platforms.

**Custom Parameters**  
| Parameter | Type | Description | Default Value |
|-----------|------|-------------|---------------|
| `configId` | Required | Identifies the configuration for Order Item Attribute records. | IMP_CRT_RTN_ORD |
| `propertyResource` | Required | Specifies the property resource for configuration. | FTP_CONFIG |
| `remoteFilename` | Optional | Specifies the remote filename for processing. | Not specified |
| `groupBy` | Optional | Specifies a grouping parameter for the job. | Not specified |
| `additionalParameters` | Optional | Additional parameters for job customization. | Not specified |
| `fileNameRegex` | Optional | Specifies a regular expression for filtering filenames. | Not specified |
| importpath | Optional | Specifies the SFTP location and path for importing the file into the system. | Not specified |
| `scheduleNow` | Optional | When importing files into the OMS, forces the system to pick the file out of sequence for immediate processing. Enabled by default when importing files from FTP, but can be disabled during high-volume syncs for system stability. | Not specified |
| `createdByJobID` | Optional | ID of the job that initiated this job. | Not specified |

### Create Shipment for Incoming Returns
**Job Name:** `Create Shipment for Incoming Returns` 
**Job EnumID:** `INCOMING_SHPMNT_RETN` 

**Description**  
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

### Import Last Day Orders from Shopify
**Job Name:** `Import last day orders from Shopify ` 
**Job Enum ID:** `JOB_IMP_MISS_ORD`  

**Description**  
The `Import Last Day Orders from Shopify` job imports all orders received on Shopify from the previous day into HotWax Commerce. This job ensures that no orders are missed, keeping the order data synchronized between Shopify and HotWax Commerce for accurate processing and inventory management. It helps maintain consistency across both platforms by ensuring all recent orders are promptly imported and recorded.

**Custom Parameters**  
| Parameter | Type | Description | Default Value |
|-----------|------|-------------|---------------|
| `limit` | Optional | Additional parameters for job customization. | Not specified |
| `fileProcessingDelay` | Optional | Specifies the Interval for processing a file. | Not specified |
| `createdByJobID` | Optional | ID of the job that initiated this job.| Not specified |


### Order Item Attribute
**Job Name**: `Order Item Attribute`  
**Job Enum ID**: `JOB_ORDER_ITM_ATTR` 

**Description**  
The Order Item Attribute job is designed to create or update Order Item Attribute records. This job ensures the accurate maintenance of order item attributes within the system.

**Recommended frequency**  
The job is configured to run at a frequency that suits the needs of your business, ensuring timely updates for order item attributes.

**Custom parameters**

| Parameter           | Type      | Description                                           | Default Value  |
|---------------------|-----------|-------------------------------------------------------|----------------|
| `propertyResource`    | Required  | Specifies the property resource for configuration.    | IMP_ORDER_ITM_ATTR |
| `configId`            | Required  | Identifies the configuration for Order Item Attribute records. | FTP_CONFIG |
| `remoteFilename`      | Optional  | Specifies the remote filename for processing.        | Not specified |
| `groupBy`             | Optional  | Specifies a grouping parameter for the job.          | Not specified |
| `additionalParameters`| Optional  | Additional parameters for job customization.         | Not specified |
| `fileNameRegex`       | Optional  | Specifies a regular expression for filtering filenames. | Not specified |
| `scheduleNow`         | Optional  | Forces the system to pick the file out of sequence for immediate processing. | Enabled |


### Order Item Rejected
**Job Name**: `Order Item Rejected`  
**Job Enum ID**: `JOB_ORDER_ITM_RJCT`  

**Description**  
The `Order Item Rejected` job records items that cannot be fulfilled, creating a rejection record in HotWax Commerce. This job ensures that order items, that are rejected from the fulfillment location where they were first allocated, are recorded for tracking purposes. It helps improve inventory management by keeping accurate records of items that could not be fulfilled from their original location.

**Custom Parameters**

| Parameter           | Type      | Description                                           | Default Value  |
|---------------------|-----------|-------------------------------------------------------|----------------|
| `configId`            | Required  | Identifies the configuration for Order Item Attribute records. | IMP_ORDER_ITM_RJCT |
| `propertyResource`    | Required  | Specifies the property resource for configuration.    | FTP_CONFIG |
| `remoteFilename`      | Optional  | Specifies the remote filename for processing.        | Not specified |
| `groupBy`             | Optional  | Specifies a grouping parameter for the job.          | Not specified |
| `additionalParameters`| Optional  | Additional parameters for job customization.         | Not specified |
| `fileNameRegex`       | Optional  | Specifies a regular expression for filtering filenames. | Not specified |
| `scheduleNow`         | Optional  | Forces the system to pick the file out of sequence for immediate processing. | Not specified |
| `createdByJobID`      | Optional  | ID of the job that initiated this job.               | Not specified |


### Import Transfer Order
**Job Name**: `Import Transfer Order`  
**Job Enum ID**: `JOB_ORDER_ITM_TO`  

**Description**  
The `Import Transfer Order` job brings transfer order details into the order management system from the ERP system to ensure consistency and accuracy in the inventory transfers. This process supports inventory accuracy by facilitating the fulfillment and receipt of inventory transfers.

**Custom parameters**

| Parameter           | Type      | Description                                           | Default Value  |
|---------------------|-----------|-------------------------------------------------------|----------------|
| `configId`            | Required  | Identifies the configuration for Order Item Attribute records. | IMP_TRANSFER_ORD |
| `propertyResource`    | Required  | Specifies the property resource for configuration.    | FTP_CONFIG |
| `remoteFilename`      | Optional  | Specifies the remote filename for processing.        | Not specified |
| `groupBy`             | Optional  | Specifies a grouping parameter for the job.          | Not specified |
| `additionalParameters`| Optional  | Additional parameters for job customization.         | Not specified |
| `fileNameRegex`       | Optional  | Specifies a regular expression for filtering filenames. | Not specified |
| importpath          | Optional  | Specifies the SFTP location and path for importing the file into the system. | Not specified |
| `scheduleNow`         | Optional  | Forces the system to pick the file out of sequence for immediate processing. | Not specified |
| `createdByJobID`      | Optional  | ID of the job that initiated this job.               | Not specified |


### Order Identification
**Job Name**: `Order Identification`  
**Job Enum ID**: `JOB_ORDER_IDENT`  

**Description**  
The `Order Identification` job is designed to create or update Order Identification records within the OMS. This job ensures accurate and up-to-date identification of orders.

**Recommended frequency**  
The job is configured to run at a frequency that aligns with the business needs for regular updates of order identification records.

**Custom parameters**

| Parameter           | Type      | Description                                           | Default Value  |
|---------------------|-----------|-------------------------------------------------------|----------------|
| `propertyResource`    | Required  | Specifies the property resource for configuration.    | FTP_CONFIG |
| `configId`            | Required  | Identifies the configuration for importing order attributes. | IMP_ORDER_IDENT |
| `remoteFilename`      | Optional  | Specifies the remote filename for processing.        | Not specified |
| `groupBy`             | Optional  | Specifies a grouping parameter for the job.          | Not specified |
| `additionalParameters`| Optional  | Additional parameters for job customization.         | Not specified |
| `fileNameRegex`       | Optional  | Specifies a regular expression for filtering filenames. | Not specified |
| `scheduleNow`         | Optional  | Forces the system to pick the file out of sequence for immediate processing. | Enabled |


### Import Order Metafield
**Job Name**: `Import Order Metafield` 
**Job Enum ID**: `IMP_ORD_META_FLD`  

**Description**  
The `Import Order Metafield` job is designed to schedule a job for downloading order metafields. This job ensures the timely synchronization of order metafields from the specified namespace.

**Recommended frequency**  
The job is configured to run at a frequency that aligns with the business needs for regular updates of order metafields.

**Custom parameters**

| Parameter           | Type      | Description                                           | Default Value  |
|---------------------|-----------|-------------------------------------------------------|----------------|
| `namespace `          | Required  | Specifies the namespace for order metafields.         | HotwaxOrderDetails |
| `bufferTime`          | Optional  | Specifies the buffer time (in minutes) for scheduling job downloads. | 1 minute |
| `thruDateBuffer`      | Optional  | Specifies the buffer time (in minutes) for processing orders after the through date. | Not specified |
| `filterQuery`         | Optional  | Specifies a filter query for more targeted metafield downloads. | Not specified |
| `frequency`           | Optional  | Specifies the frequency (in minutes) for running the job. | Not specified |


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


### Approve Transfer Order
**Job Name**: Approve Transfer Orders  
**Job Enum ID**: JOB_APR_TO  

**Description**  
The Approve Transfer Order job approves all transfer orders imported into HotWax Commerce from Shopify. This job ensures that the transfer orders are validated and ready for fulfillment, allowing the processing and shipping of items to proceed smoothly. It helps streamline the order fulfillment process by automating the approval of transferred orders.

**Custom Parameters**

| Parameter           | Type      | Description                                           | Default Value  |
|---------------------|-----------|-------------------------------------------------------|----------------|
| orderIds            | Optional  | The ID associated with the order to be updated on the eCommerce platform. | Not Specified |
| `bufferTime`          | Optional  | Specifies the buffer time (in minutes) for scheduling job. | Not Specified |


### Import Order Attribute
**Job Name:** `Import order attribute` 
**Job Enum ID:** `JOB_ORDER_ITM_ATTR`

**Description**  
Order attributes are additional details associated with an order that provides essential information for processing. For example, order attributes are used to move an order from the "created" state to the approved state, among other functions.  
The Import Order Attribute job imports these attributes, ensuring they are available for fulfillment once the order reaches the approved state.

**Custom Parameters**

| Parameter         | Type      | Description                                                         | Default Value          |
|-------------------|-----------|---------------------------------------------------------------------|------------------------|
| `configId`          | required  | Identifies the configuration for Order Item Attribute records.      | MOD_ORD_ATTR           |
| `propertyResource`  | required  | Specifies the property resource for configuration.                  | FTP_CONFIG             |
| `remoteFilename`    | optional  | Specifies the remote filename for processing.                       | Not specified          |
| `groupBy`           | optional  | Specifies a grouping parameter for the job.                         | Not specified          |
| `additionalParameters` | optional | Additional parameters for job customization.                       | Not specified          |
| `fileNameRegex`     | optional  | Specifies a regular expression for filtering filenames.             | Not specified          |
| `importpath`        | optional  | Specifies the SFTP location and path for importing the file.       | Not specified          |
| `scheduleNow`       | optional  | Forces the system to pick the file out of sequence for immediate processing. | Not specified          |
| `createdByJobID`    | optional  | ID of the job that initiated this job.                              | Not specified          |


### Order Item Fulfillment
**Job Name:** `Order Item Fulfillment`  
**Job Enum ID:** `JOB_ODR_ITM_FLFLMNT`

**Description**  
The Order Item Fulfillment job is designed to complete order items using a JSON file in MDM (Master Data Management). This job ensures the fulfillment of order items and synchronization with the provided JSON file.

**Recommended frequency**  
The job is configured to run at a frequency that aligns with the business needs for completing order items using the MDM JSON file.

**Custom Parameters**

| Parameter         | Type      | Description                                                         | Default Value          |
|-------------------|-----------|---------------------------------------------------------------------|------------------------|
| `propertyResource`  | Required  | Specifies the property resource for configuration.                  | Not specified          |
| `configId`          | Required  | Identifies the configuration for importing order attributes.       | IMP_ODR_ITM_FLFLMNT    |
| `remoteFilename`    | Optional  | Specifies the remote filename for processing.                       | Not specified          |
| `groupBy`           | Optional  | Specifies a grouping parameter for the job.                         | Not specified          |
| `additionalParameters` | Optional | Additional parameters for job customization.                       | Not specified          |
| `fileNameRegex`     | Optional  | Specifies a regular expression for filtering filenames.             | Not specified          |
| `scheduleNow`       | Optional  | Forces the system to pick the file out of sequence for immediate processing. | Enabled                |


