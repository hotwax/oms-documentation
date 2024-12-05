---
description: "Discover how Inventory job works in HotWax Commerce."
---

# Inventory

## Adjustments

### Hard Sync

**Job Name:** `Upload Inventory`

**Job Enum ID:** `JOB\_UL\_INV`

**Description**

The `Upload Inventory` job is designed to facilitate the upload of new inventory levels to the eCommerce platform for all the products. This job is crucial for keeping product availability up-to-date and ensuring accurate inventory representation on the eCommerce platform.

**Recommended Frequency**

The job frequency can be configured based on the business needs and the desired frequency of updating inventory levels.

**Custom Parameters**

| **Parameter**    | **Type** | **Description**                                    | **Default Value** | **Example Value** |
| ---------------- | -------- | -------------------------------------------------- | ----------------- | ----------------- |
| `includeAll` | Optional | Specifies whether to include all inventory levels. | true              | false             |

<figure><img src="../.gitbook/assets/Upload Inventory.png" alt="" width="375"><figcaption></figcaption></figure>

## Webhooks

{% hint style="info" %}
Webhooks can be subscribed to from the category pages within the Job Manager app for specific categories.
{% endhint %}

Automated messages sent from eCommerce (Shopify) to OMS whenever an event occurs. They contain data about the event and are received in OMS, allowing real time communication between eCommerce and OMS.

**Subscribe to Shopify eCommerce Webhooks from OMS for:**

<details>

<summary>Inventory</summary>

**Webhooks available for:**

Inventory level update

</details>


## More Jobs:

### Import inventory reset

**Job Name:** `Import inventroy reset`

**Job Enum ID:** `JOB_IMP_INV`

**Description**  
This job is useful in scenarios where there is a need to reset inventory levels to match actual physical counts. It is commonly used during inventory audits, adjustments, or when discrepancies are found in inventory records, ensuring the system's inventory matches the physical stock accurately.

**Custom Parameters**  

| **Parameter**         | **Type**     | **Description**                                                   | **Default Value**       |
|-----------------------|-------------|-------------------------------------------------------------------|-------------------------|
| `configId`            | Required    | Identifies the configuration for Order Item Attribute records.    | `RESET_INVENTORY`       |
| `propertyResource`    | Required    | Specifies the property resource for configuration.                | `FTP_CONFIG`            |
| `remoteFilename`      | Optional    | Specifies the remote filename for processing.                     | Not specified           |
| `groupBy`             | Optional    | Specifies a grouping parameter for the job.                       | Not specified           |
| `additionalParameters`| Optional    | Additional parameters for job customization.                      | `groupBy`, `facilityId` |
| `fileNameRegex`       | Optional    | Specifies a regular expression for filtering filenames.           | Not specified           |
| `importPath`          | Optional    | Specifies the SFTP location and path for importing the file.      | Not specified           |
| `scheduleNow`         | Optional    | Forces the system to pick the file out of sequence for immediate processing when importing files into the OMS. Enabled by default when importing files from FTP but can be disabled during high-volume syncs for system stability. | Not specified |
| `createdByJobID`      | Optional    | ID of the job that initiated this job.                            | Not specified           |


### Import Item Receipt

**Job Name:** `Import Item Receipt`  

**Job Enum ID:** `JOB_ITM_RECEIPT`  

**Description**  
The `Import Item Receipt` job updates inventory levels based on a file provided by NetSuite. The file, placed on the SFTP server, contains inventory deltas and other data. This job processes the file, retrieves the product IDs from NetSuite, and updates the corresponding inventory in HotWax for the specified facility, ensuring accurate records across systems.

**Custom Parameters**

| **Parameter**            | **Type**   | **Description**                                                                                  | **Default Value**       |
|---------------------------|------------|--------------------------------------------------------------------------------------------------|-------------------------|
| `configId`               | Required   | Identifies the configuration for Order Item Attribute records.                                   | `IMP_ITM_RECEIPT`       |
| `propertyResource`       | Required   | Specifies the property resource for configuration.                                               | `FTP_CONFIG`            |
| `remoteFilename`         | Optional   | Specifies the remote filename for processing.                                                    | `Not specified`         |
| `groupBy`                | Optional   | Specifies a grouping parameter for the job.                                                      | `Not specified`         |
| `additionalParameters`   | Optional   | Additional parameters for job customization.                                                    | `Not specified`         |
| `fileNameRegex`          | Optional   | Specifies a regular expression for filtering filenames.                                          | `Not specified`         |
| `importpath`             | Optional   | Specifies the SFTP location and path for importing the file into the system.                     | `Not specified`         |
| `scheduleNow`            | Optional   | When importing files into the OMS, forces the system to pick the file out of sequence for immediate processing. Enabled by default when importing files from FTP, but can be disabled during high-volume syncs for system stability. | `Not specified`         |
| `createdByJobID`         | Optional   | ID of the job that initiated this job.                                                           | `Not specified`         |

### Import Product Thresholds

**Job Name:** `Import Product Thresholds`

**Job Enum ID:** `IMP\_PROD\_THOLD`

**Description**

The `Import Product Thresholds` job, identified by Job ID `IMP\_PROD\_THOLD`, is designed to import a list of product thresholds based on specified tags and categories. This job is essential for updating product stock levels and ensuring that inventory management aligns with defined thresholds.

**Recommended Frequency**

The job frequency can be configured based on the business needs and the frequency of updates required for product thresholds.

**Custom Parameters**

| **Parameter**              | **Type** | **Description**                                                  | **Default Value** | **Example Value**                          |
| -------------------------- | -------- | ---------------------------------------------------------------- | ----------------- | ------------------------------------------ |
| `configId`           | String   | Specifies the configuration ID for importing product thresholds. | IMP\_PROD\_THOLD  | IMP\_PROD\_THOLD                           |
| `propertyResource`     | Required | Specifies the property resource for configuring FTP.             | FTP\_CONFIG       | FTP\_CONFIG                                |
| `configId`             | Required | Specifies the configuration ID for importing inbound shipments.  | IMP\_TO\_SHPMNT   | IMP\_TO\_SHPMNT                            |
|`remoteFilename`       | Optional | Specifies the remote filename for the job.                       | Not specified     | sample\_file.txt                           |
| `groupBy`              | Optional | Specifies the grouping parameter for the job.                    | Not specified     | category                                   |
| `additionalParameters` | Optional | Specifies additional parameters for customization.               | Not specified     | { "param1": "value1", "param2": "value2" } |
| `fileNameRegex`        | Optional | Specifies the regular expression for matching file names.        | Not specified     | \*.csv                                     |
| `scheduleNow`          | Optional | Specifies whether to schedule the job for immediate processing.  | false             | true                                       |

<figure><img src="../.gitbook/assets/Import Product threshold.png" alt="" width="375"><figcaption></figcaption></figure>


### Import Product Facility

**Job Name:** `Import product facility from FTP` 

**Job Enum ID:** `JOB_IMP_PROD_FAC`  

**Description**  
The `Import Product Facility` job is used in scenarios where product data needs to be imported or updated for specific facilities. It is particularly useful for integrating or synchronizing product data from ERP or during system migrations.

**Custom Parameters**

| **Parameter**            | **Type**   | **Description**                                                                                  | **Default Value**       |
|--------------------------|------------|--------------------------------------------------------------------------------------------------|-------------------------|
| `configID`               | Required   | Identifies the configuration for product facility.                                              | `IMP_PROD_FACILITY`     |
| `propertyResources`      | Required   | Specifies the property resource for configuration.                                               | `FTP_CONFIG`            |
| `remoteFilename`         | Optional   | Specifies the remote filename for processing.                                                    | `Not Specified`         |
| `groupBy`                | Optional   | Specifies a grouping parameter for the job.                                                      | `Not Specified`         |
| `additionalParameters`   | Optional   | Additional parameters for job customization.                                                    | `Not specified`         |
| `fileNameRegex`          | Optional   | Specifies a regular expression for filtering filenames.                                          | `Not specified`         |
| `importPath`             | Optional   | Specifies the SFTP location and path for importing the file into the system.                     | `Not Specified`         |
| `scheduleNow`            | Optional   | When importing files into the OMS, forces the system to pick the file out of sequence for immediate processing. Enabled by default when importing files from FTP, but can be disabled during high-volume syncs for system stability. | `Not specified`         |
| `createdByJobID`         | Optional   | ID of the job that initiated this job.                                                           | `Not specified`  |


### Export Product Thresholds

**Job Name:** `Export Product Thresholds`

**Job Enum ID:** `EXP\_PROD\_THOLD`  

**Description**

The `Export Product Thresholds` job is designed to export a list of product thresholds based on specified tags and categories. This job is essential for obtaining insights into product stock levels and ensuring inventory management aligns with defined thresholds.

**Recommended Frequency**
The job frequency can be configured based on the business needs and the frequency of updates required for product thresholds.

**Custom Parameters**

| **Parameter**            | **Type** | **Description**                                                    | **Default Value** | **Example Value** |
| ------------------------ | -------- | ------------------------------------------------------------------ | ----------------- | ----------------- |
| `facilityId`         | String   | Specifies the facility ID for exporting product thresholds.        | null              | FCTY-001          |
| `propertyResource`   | String   | Specifies the property resource for configuring FTP export.        | FTP\_EXP\_CONFIG  | FTP\_EXP\_CONFIG  |
| `threshold`        | String   | Specifies the threshold value for exporting products.              | null              | 10 units          |
| `includeAll`        | Boolean  | Specifies whether to include all products in the export.           | null              | true              |
| `searchPreferenceId` | String   | Specifies the search preference ID for customizing product search. | null              | SEARCH\_PREF\_001 |


<figure><img src="../.gitbook/assets/Export Product Threshold.png" alt="" width="375"><figcaption></figcaption></figure>


### Bulk Recent Kit Product Inventory Setup

**Job Name:** `Bulk Recent Kit Product Inventory Setup` 

**Job Enum ID:** `BLK_RCNT_KIT_INV`

**Description**  
The `Bulk Recent Kit Product Inventory Setup` job facilitates the configuration of inventory for newly added kit products in bulk. This job streamlines the setup process, ensuring that inventory levels for kit products are accurately computed in HotWax Commerce and synced with Shopify.

**Custom Parameters**

| **Parameter**   | **Type**   | **Description**                                  | **Default Value**    |
|-----------------|------------|--------------------------------------------------|----------------------|
| `includeAll`    | Optional   | Specifies whether to include all inventory levels. | `Not Specified`      |


### Import Inventory Transfer

**Job Name:** `Import Inventory Transfer` 

**Job Enum ID:** `JOB_INV_TRANS`

**Description**  
This job synchronizes inventory transfer deltas between warehouses and HotWax. Whenever a transfer is received in the warehouse, this job updates the inventory delta in HotWax, ensuring accurate and consistent inventory levels across both the ERP and OMS systems.

**Custom Parameters**

| **Parameter**        | **Type**   | **Description**                                                                          | **Default Value**    |
|----------------------|------------|------------------------------------------------------------------------------------------|----------------------|
| `configId`           | Required   | Identifies the configuration for Order Item Attribute records.                           | `IMP_INV_TRANS`      |
| `propertyResource`   | Required   | Specifies the property resource for configuration.                                       | `FTP_CONFIG`         |
| `remoteFilename`     | Optional   | Specifies the remote filename for processing.                                            | `Not specified`      |
| `groupBy`            | Optional   | Specifies a grouping parameter for the job.                                              | `Not specified`      |
| `additionalParameters`| Optional  | Additional parameters for job customization.                                             | `Not specified`      |
| `fileNameRegex`      | Optional   | Specifies a regular expression for filtering filenames.                                  | `Not specified`      |
| `importpath`         | Optional   | Specifies the SFTP location and path for importing the file into the system.             | `Not specified`      |
| `scheduleNow`        | Optional   | When importing files into the OMS, forces the system to pick the file out of sequence for immediate processing. Enabled by default when importing files from FTP, but can be disabled during high-volume syncs for system stability. | `Not specified`      |
| `createdByJobID`     | Optional   | ID of the job that initiated this job.                                                   | `Not specified`      |


### Import Inbound Shipment

**Job Name:** `Import Inbound Shipment`

**Job Enum ID:** `JOB\_IMP\_TO\_SHPMNT`

**Description**

The `Import Inbound Shipment` job is designed to import information about inbound shipments associated with fulfilled transfer orders. This job is crucial for maintaining accurate records of incoming shipments, facilitating efficient order fulfillment.

**Recommended Frequency**

The job frequency can be configured based on the business needs and the frequency of inbound shipments for fulfilled transfer orders.


**Custom Parameters**

| **Parameter**              | **Type** | **Description**                                                 | **Default Value** | **Example Value**                          |
| -------------------------- | -------- | --------------------------------------------------------------- | ----------------- | ------------------------------------------ |
| **`propertyResource`**     | Required | Specifies the property resource for configuring FTP.            | FTP\_CONFIG       | FTP\_CONFIG                                |
| **`configId`**             | Required | Specifies the configuration ID for importing inbound shipments. | IMP\_TO\_SHPMNT   | IMP\_TO\_SHPMNT                            |
| **`remoteFilename`**       | Optional | Specifies the remote filename for the job.                      | Not specified     | sample\_file.txt                           |
| **`groupBy`**              | Optional | Specifies the grouping parameter for the job.                   | Not specified     | category                                   |
| **`additionalParameters`** | Optional | Specifies additional parameters for customization.              | Not specified     | { "param1": "value1", "param2": "value2" } |
| **`fileNameRegex`**        | Optional | Specifies the regular expression for matching file names.       | Not specified     | \*.csv                                     |
| **`scheduleNow`**          | Optional | Specifies whether to schedule the job for immediate processing. | false             | true                                       |

<figure><img src="../.gitbook/assets/Import Inbound Shipment.png" alt="" width="375"><figcaption></figcaption></figure>



### Scheduled Restock

**Job Name:** `Scheduled Restock`

**Job Enum ID:** `JOB_SCHEDULED_RSTK`


**Description**  
This job is particularly useful in scenarios where a business needs to manage inventory for incoming shipments and ensure that their eCommerce platform (Shopify) is updated accordingly. Some potential use cases include:  
- **Warehouse Operations:** When a warehouse receives a shipment from a supplier, this function can automate the process of updating inventory levels and ensuring that the online store reflects accurate stock availability.  
- **Inventory Management:** For businesses that manage inventory across multiple locations or platforms, this function helps maintain consistency between the internal inventory system and Shopify.  
- **Order Fulfillment:** By ensuring that inventory levels are accurately updated in Shopify, the function helps prevent overselling and ensures that customers have access to real-time stock information.

**Custom Parameters**

| **Parameter**   | **Type**   | **Description**                                                  | **Default Value**     |
|-----------------|------------|------------------------------------------------------------------|-----------------------|
| `shipmentId`    | Required   | Specific Id to uniquely Identify each shipment                   | `Not Specified`       |
| `limit`         | Optional   | Additional parameters for job customization.                     | `Not Specified`       |


### Import Inventory

**Job Enum ID:** `JOB\_IMP\_INV`

**Job Name:** `Import Inventory`

**Description**

The `Import Inventory` job is designed to import inventory from the ERP (Enterprise Resource Planning) system. This job plays a crucial role in keeping the inventory information synchronized between the ERP and the OMS.

**Recommended Frequency**

The job frequency can be configured based on the business needs and the frequency of updates from the ERP system.

**Custom Parameters**

| **Parameter**              | **Type** | **Description**                                                 | **Default Value** | **Example Value**                          |
| -------------------------- | -------- | --------------------------------------------------------------- | ----------------- | ------------------------------------------ |
| **`propertyResource`**     | Required | Specifies the property resource for configuring FTP.            | FTP\_CONFIG       | FTP\_CONFIG                                |
| **`fileNameRegex`**        | Optional | Specifies the regular expression for matching file names.       | \*.csv            | \*.csv                                     |
| **`configId`**             | Required | Specifies the configuration ID for importing inventory.         | RESET\_INVENTORY  | RESET\_INVENTORY                           |
| **`remoteFilename`**       | Optional | Specifies the remote filename for the job.                      | Not specified     | sample\_file.txt                           |
| **`groupBy`**              | Optional | Specifies the grouping parameter for inventory.                 | facilityId        | facilityId                                 |
| **`locationSeqId`**        | Optional | Specifies the location sequence ID for inventory import.        | TLTLTLLL01        | TLTLTLLL01                                 |
| **`additionalParameters`** | Optional | Specifies additional parameters for customization.              | Not specified     | { "param1": "value1", "param2": "value2" } |
| **`fileNameRegex`**        | Optional | Specifies the regular expression for matching file names.       | Not specified     | \*.csv                                     |
| **`scheduleNow`**          | Optional | Specifies whether to schedule the job for immediate processing. | false             | true                                       |

<figure><img src="../.gitbook/assets/Import Recent inventory.png" alt="" width="375"><figcaption></figcaption></figure>


### Sync Inventory From Shopify

**Job Name:** `Sync Inventory From Shopify`

**Job Enum ID:** `JOB_SYNC_INV_FRM_SHPY`

**Description**  
In the realm of inventory synchronization between HotWax Commerce and Shopify, typically, HotWax Commerce handles the updates to inventory data on Shopify. However, in specific scenarios, the Order Management System (OMS) sync inventory from Shopify. When there's a recent alteration in inventory, this task ensures that the inventory data is promptly updated from Shopify.

**Custom Parameters**

| **Parameter**   | **Type**   | **Description**                                                              | **Default Value**     |
|-----------------|------------|------------------------------------------------------------------------------|-----------------------|
| `includeAll`    | Optional   | Specifies whether to include all inventory levels.                            | `True`                |
| `frequency`     | Optional   | Defines the default duration for syncing orders if there is no last sync time.| `15 minutes`          |
| `buffertime`    | Optional   | Specifies the buffer time (in minutes) for scheduling job downloads.         | `5 minutes`           |
| `scheduleNow`   | Optional   | When importing files into the OMS, forces the system to pick the file out of sequence for immediate processing. Enabled by default when importing files from FTP, but can be disabled during high-volume syncs for system stability. | `Enabled`             |


### Sync Inventory From Shopify in Multi-Threading

**Job Enum ID:** `SYNC\_INV\_SHPF\_MLTTHD`

**Job Name:** `Sync Inventory From Shopify in Multi-Threading`

**Description**

The `Sync Inventory From Shopify in Multi-Threading` job is designed to synchronize inventory from Shopify, utilizing multi-threading for enhanced efficiency. This job is crucial for maintaining accurate inventory levels and ensuring seamless integration with the Shopify platform.

**Recommended Frequency**

The job frequency can be configured based on the business needs and the frequency of updates required for inventory synchronization.


**Custom Parameters**

| **Parameter**              | **Type** | **Description**                                                                  | **Default Value**       | **Example Value**                          |
| -------------------------- | -------- | -------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------ |
| **`propertyResource`**     | String   | Specifies the property resource for configuring FTP synchronization.             | FTP\_CONFIG             | FTP\_CONFIG                                |
| **`fileNameRegex`**        | String   | Specifies the regular expression for matching file names during synchronization. | \*.csv                  | \*.csv                                     |
| **`configId`**             | String   | Specifies the configuration ID for the multi-threaded inventory synchronization. | SYNC\_INV\_SHPF\_MLTTHD | SYNC\_INV\_SHPF\_MLTTHD                    |
| **`groupBy`**              | String   | Specifies the grouping parameter for multi-threading, such as `location_id`.     | Not specified           | location\_id                               |
| **`additionalParameters`** | Optional | Specifies additional parameters for customization.                               | Not specified           | { "param1": "value1", "param2": "value2" } |
| **`remoteFilename`**       | Optional | Specifies the remote filename for the job.                                       | Not specified           | sample\_file.txt                           |
| **`scheduleNow`**          | Optional | Specifies whether to schedule the job for immediate processing.                  | false                   | true                                       |

<figure><img src="../.gitbook/assets/Sync Inventory From Shopify in multi threading.png" alt="" width="375"><figcaption></figcaption></figure>


### Upload Recent Inventory Changes:

**Job ID:** `UL\_RCNT\_INV`

**Job Name:** `Upload Recent Inventory Changes`

**Description**

The `Upload recent inventory changes` job examines the inventory records of HotWax Commerce's products. It identifies products that have undergone inventory changes since the last synchronization.

To update inventory records, HotWax Commerce initiates an API call to retrieve information from Shopify about products that have undergone changes in HotWax Commerce. The inventory counts for these products in Shopify are then compared with the inventory counts that HotWax Commerce has on file.

After comparing inventory changes, the `Upload recent inventory changes` job records the difference and generates a GraphQL file for the affected products. This file is then uploaded to Shopify, which reads it and updates the `available adjustments` field to either add or deduct inventory based on the changes.

**Recommended Frequency**
The recommended frequency for this job is 15 minutes, but it can be configured based on the business needs and the desired frequency of updating inventory levels.

**Custom Parameters**

| **Parameter**         | **Type** | **Description**                                    | **Default Value** |
| --------------------- | -------- | -------------------------------------------------- | ----------------- |
| **`facilityGroupID`** | Required | Specifies which facilitygroup to be                | FAC\_GRP          |
| **`includeAll`**      | Optional | Specifies whether to include all inventory levels. | true              |


<figure><img src="../.gitbook/assets/Inventory Sync 1 (1).png" alt="" width="375"><figcaption></figcaption></figure>
