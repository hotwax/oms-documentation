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

**Inventory level update**  
This webhook is used to receive inventory level updates from Shopify to HotWax, especially when a retailer is not using HotWax Commerce as master of inventory availability (ATP inventory) and managing fulfillment out of HotWax.. In such cases, HotWax relies on other systems like Shopify for inventory updates. However, since Shopify webhooks may not always be reliable, it is recommended to schedule jobs.

</details>


## More Jobs:

### Import Inventory

Job name: `Read Reset Inventory File From SFTP`  
Job Enum id: `JOB_IMP_INV`  
Service Name: `ftpImportFile`  
Flow: `Inventory Reset in HotWax from NetSuite`  
 
**The `Import Inventory` Reset job is used for importing inventory reset files from SFTP locations uploaded by ERP systems (like NetSuite).**
 
**How is the reset file received?**
NetSuite runs a scheduled script and generates the CSV format file of updated inventory on each location, then uploads this file to the SFTP location. Then, the `Import Inventory Reset` job is used to import this file from the SFTP location to HotWax and upload this on `RESET_INVENTORY` MDM. Further `Process Bulk Imported Files` jobs run to process data into HotWax.


**Custom Parameters**
- The recommended frequency for this job is 15 minutes.
- This job has configId and propertyResource as the required parameters.
- It also has some optional parameters.

___

### Import Item Receipt
Job name: `Import Item Receipt`  
Job Enum ID: `JOB_ITM_RECEIPT`  
Service Name: `ftpImportFile`  
 
**The `Import Item Receipt` job is used for importing updates from NetSuite to HotWax on all the items that are completed in NetSuite**.
 
When an order is brokered to a warehouse, HotWax relies on Warehouse Management Systems (like NetSuite) to get the fulfillment update. In cases when NetSuite is also used as a WMS, it uploads a JSON format file containing details of all the items that are fulfilled from the warehouse in an SFTP location.
 
 
**How is the item receipt synced?**
After NetSuite uploads a JSON file to the SFTP location, the `Import Item Receipt` job imports the JSON into HotWax and uploads it to the `IMP_ITM_RECEIPT` MDM. Further `Process Bulk Import Files` job runs, which finally marks the item as completed in HotWax.


**Custom Parameters**
- The recommended frequency for this job is 15 minutes.
- This job has configId and propertyResource as the required parameters.
- It also has some optional parameters.

___

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

___

### Import Product Facility
Job Name: `Import Product Facility`  
Job Enum ID: `JOB_IMP_PROD_FAC`  
Service Name: `ftpImportCSVFile`  
Flow: Applying ATP rules in HotWax.  
 
HotWax Commerce ATP App allows retailers to configure rules for inventory computation based on product tags and facility types or groups, reducing manual work. Based on these rules, the available-to-promise (ATP) of a product is calculated, which is then synchronized to Shopify or other sales channels.  

A job in the ATP app generates a CSV file based on rules configured for calculating ATP and puts it in the SFTP location. **The `Import Product Facility` job is used to download this CSV from the SFTP location and upload it on the file system of HotWax Commerce. **
Further, the `Process Bulk Import Files` job runs and processes all the files in HotWax. And finally, all the rules configured from the ATP app by the retailer are created.
 
**It is important to note that this job is responsible for applying ATP rules configured by retailers on ATP computation.**


- **Custom Parameters**
- The recommended frequency for this job is 15 minutes.
- This job has configId and propertyResource as the required parameters.
- It also has some optional parameters.

___

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

___
### Bulk recent kit product inventory setup
Job Name: `Bulk recent kit product inventory setup`  
Job Enum ID: `BLK_RCNT_KIT_INV`  
Service Name: `bulkKitProductInventorySetup`  
Flow: Kit Product Inventory Computation  

The `Bulk Recent Kit Product Inventory Setup` job calculates the inventory of the kit products in HotWax by considering the lowest common denominator among its components at a given location.

**Note**: Retailers who don't use Shopify's Bundle App for kit inventory calculation rely on this job in HotWax to compute the inventory.

**Custom Parameters**
- This job has no required parameters.
- includeAll is the optional parameter of this job.

To know more about kit inventory calculation, refer to this [document](https://docs.hotwax.co/documents/learn-netsuite/integration-flows/kitproducts).
___

### Import Inventory Transfer
Job Name : `Import Inventory Transfer`  
Job Enum Id : `JOB_INV_TRANS`  
Service Name: `ftpImportFile`  
Flow: Importing Inventory Update from NetSuite to HotWax

Retailers with one warehouse for both B2C and B2B create two virtual locations in NetSuite: one for online orders (B2C) and one for wholesale (B2B). This helps manage inventory better. If one runs low on stock, they transfer inventory between them as needed.

In ERP systems (like NetSuite), retailers generally create inventory transfers, and these inventory transfers need to be synced from NetSuite to HotWax to maintain better inventory synchronization. `Import Inventory Transfer` job is used for importing the inventory transfers created in NetSuite to HotWax, and further inventory is adjusted in HotWax accordingly.


**How are inventory transfers are synced ?**
A scheduled script in NetSuite generates a CSV file of inventory transfers and uploads it to an SFTP location. The `Import Inventory Transfer` job in HotWax then fetches the file and uploads it to HotWax’s internal system. Finally, the `Process Bulk Imported Files` job runs to create records in HotWax.

To know more, refer to the inventory transfer [document](https://docs.hotwax.co/documents/learn-netsuite/integration-flows/inventory).

___

### Import Inbound Shipment
Job name: `Import Inbound Shipment`  
Job Enum ID : `JOB_IMP_TO_SHPMNT`  
Service Name: ftpImportFile  
Flow: Inventory Synchronization


This job is used to create inbound shipment in HotWax so that store associates can see an upcoming inbound shipment in their Receiving App. In case of a warehouse to store TO or store to store TO is created in NetSuite, HotWax imports it as an inbound shipment for the receiving store through this job.

**Custom Parameters**
- The recommended frequency for this job is 15 minutes.
- This job has configId and propertyResource as the required parameters.
- It also has some optional parameters.

___

### Schedule Restock


Job Name: Schedule Restock  
Job Enum ID: `JOB_SCHEDULED_RSTK`  
Service Name: `receiveAndUpdateInventoryToShopify`  
Flow: Schedule restock  

Retailers often schedule new product launches and require inventory to be available for sale at specific future dates and times. For example, if a retailer plans to launch a product at 10 AM a month from now, the inventory must sync precisely at that moment.

The HotWax Commerce Import App simplifies this process by allowing retailers to schedule restocks via a CSV upload. Once uploaded, the Import App transfers the CSV to an SFTP location, and the `Schedule Restock` job imports it into HotWax database.


**Custom Parameters**
- ShipmentId is the required for this job.

___

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

___
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

___
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

___

### Upload Recent Inventory Changes
Job Name: `Upload Recent Inventroy Changes`  
Job Enum Id: `UL_RCNT_INV`  
Service Name: `bulkRecentShopifyInventroyLevel`  
Flow: Inventory Synchronization  

The `Upload Recent Inventory Changes` job is used to update Shopify with the latest inventory changes for products. It functions similarly to `Hard Sync`, but instead of syncing updated inventory for all products, it only uploads changes for products whose inventory has fluctuated.
**Custom Parameters**
- This job does not have any required parameters.
- It has some optional parameters.

To know more about uploading recent inventory changes refer to this [document](https://docs.hotwax.co/documents/learn-shopify/shopify-integration/how-does-hotwax-commerce-ensure-accurate-inventory-is-synchronized-to-shopify/inventory-synchronization#upload-recent-inventory-change).

___
