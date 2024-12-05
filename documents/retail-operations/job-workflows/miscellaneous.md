---
description: "Learn about the miscellaneous jobs in HotWax Commerce."
---


# Miscellaneous

### Process upload to eCommerce
**Job Name:** `Process uploads to eCommerce` 

**Job Enum ID:** `JOB_UL_PRCS`

**Description**

This job is used in scenarios where multiple uploads to Shopify are queued, and it's crucial to ensure that these uploads are processed one at a time. This could be part of a larger system where inventory, product data, or other information needs to be synced with Shopify in an orderly and managed way, preventing conflicts and ensuring data integrity.

**No custom parameters for this job**


### **Process Bulk Imported File**

**Job Name:** `Process bulk imported files`  
**Job Enum ID:** `DMGR_RN_PNDNG_JB`

**Description**  
This job is used in scenarios where a system needs to handle multiple data import jobs that are queued. It ensures that each job is processed in the correct order, with the appropriate service, and that the job statuses are accurately tracked. This is particularly useful in systems that manage large amounts of data, such as content management systems, e-commerce platforms, or enterprise resource planning (ERP) systems.

**Custom Parameters**

| **Parameter**      | **Type**   | **Description**                                    | **Default Value** |
|--------------------|------------|----------------------------------------------------|-------------------|
| `configId`         | Optional   | Identifies the configuration for pending data manager job. | `Not Specified`   |
| `excludeConfigId`  | Optional   | Not Specified                                      | `Not Specified`   |
| `logTypeEnumId`    | Optional   | Not Specified                                      | `Not Specified`   |
| `continueOnError`  | Optional   | Not Specified                                      | `Not Specified`   |



### Import Historical Shopify Customer

**Job Name:** `Import Historical Shopify Customer`  
**Job Enum ID:** `JOB_SHOP_CUST`

**Description**

The `Import Historical Shopify Customer` job downloads historical customer data from Shopify and imports it into HotWax Commerce. This is crucial for integration with NetSuite, as NetSuite allows order creation only for customers that already exist in the system. By importing historical Shopify customers, this job ensures that all necessary customer records are available in HotWax Commerce, enabling seamless order transmission from HC to NetSuite alongside the customer data.

**Custom Parameters**

| **Parameter**        | **Type**   | **Description**                                                                                  | **Default Value**       |
|-----------------------|------------|--------------------------------------------------------------------------------------------------|-------------------------|
| `configId`           | Required   | Identifies the configuration for Order Item Attribute records.                                   | `IMP_HIS_SHOP_CUST`     |
| `propertyResource`   | Required   | Specifies the property resource for configuration.                                               | `FTP_CONFIG`            |
| `remoteFilename`     | Optional   | Specifies the remote filename for processing.                                                    | `Not specified`         |
| `groupBy`            | Optional   | Specifies a grouping parameter for the job.                                                      | `Not specified`         |
| `additionalParameters` | Optional   | Additional parameters for job customization.                                                    | `Not specified`         |
| `fileNameRegex`      | Optional   | Specifies a regular expression for filtering filenames.                                          | `Not specified`         |
| `importpath`         | Optional   | Specifies the SFTP location and path for importing the file into the system.                     | `Not specified`         |
| `scheduleNow`        | Optional   | When importing files into the OMS, forces the system to pick the file out of sequence for immediate processing. Enabled by default when importing files from FTP, but can be disabled during high-volume syncs for system stability. | `Not specified`         |
| `createdByJobID`     | Optional   | ID of the job that initiated this job.                                                           | `Not specified`         |


### Bulk Send Brokered Order Mail

**Job Name:** `Send Broker Order Mail`  
**Job Enum ID:** `JOB_BROKER_MAIL_ODR`

**Description**  
The `Send Broker Order Mail` job facilitates the bulk sending of email notifications for brokered orders. This job ensures that customers receive timely updates on the status of their brokered orders, enhancing communication and order tracking.

**Custom Parameters**

| **Parameter**   | **Type**   | **Description**                                               | **Default Value**        |
|------------------|------------|---------------------------------------------------------------|--------------------------|
| `frequency`     | Optional   | Defines the default duration of the last syncing of the orders. | `30`                     |
| `emailType`     | Optional   | Specifies the type of email template to use for a notification. | `PRDS_ORD_BROKRED`       |


### Bulk Send Completed Order Mail

**Job Name:** `Send Completed Order Mail`  
**Job Enum ID:** `JOB_COMPLET_MAIL_ODR`

**Description**  
The `Send Completed Order Mail` job enables the bulk sending of email notifications for completed orders, ensuring customers are promptly informed when their orders are fulfilled and ready for receipt.

**Custom Parameters**

| **Parameter**   | **Type**   | **Description**                                               | **Default Value**        |
|------------------|------------|---------------------------------------------------------------|--------------------------|
| `frequency`     | Optional   | Defines the default duration of the last syncing of the orders. | `30`                     |
| `emailType`     | Optional   | Specifies the type of email template to use for a notification. | `PRDS_ORD_COMPLETED`     |



### Packaged Multi-Stream Import

**Job Name:** `Packaged multi-stream Import`  
**Job Enum ID:** `JOB_IMP_GN_JSON_LIST`

**Description**  
This job is useful in scenarios where multiple pieces of JSON data need to be imported and processed by different services. For instance, in a data integration or ETL (Extract, Transform, Load) system, this function can be used to import and process batches of data from JSON files or API responses. It ensures that each data item is processed through the correct service and handles any errors encountered during the process.

**Custom Parameters**

| **Parameter**        | **Type**   | **Description**                                                                           | **Default Value**          |
|-----------------------|------------|-------------------------------------------------------------------------------------------|----------------------------|
| `configId`           | Required   | Identifies the configuration for import JSON list data.                                   | `IMP_JSON_LIST_DATA`       |
| `propertyResource`   | Required   | Specifies the property resource for configuration.                                        | `FTP_CONFIG`               |
| `remoteFilename`     | Optional   | Specifies the remote filename for processing.                                             | `Not Specified`            |
| `groupBy`            | Optional   | Specifies a grouping parameter for the job.                                              | `Not Specified`            |
| `additionalParameters` | Optional | Additional parameters for job customization.                                              | `Not Specified`            |
| `fileNameRegex`      | Optional   | Specifies a regular expression for filtering filenames.                                   | `Not Specified`            |
| `importPath`         | Optional   | SFTP file location from where the file will be imported.                                  | `Not Specified`            |
| `scheduleNow`        | Optional   | When importing files into the OMS, forces the system to pick the file out of sequence for immediate processing. Enabled by default when importing files from FTP, but can be disabled during high-volume syncs for system stability. | `Not Specified` |
| `createdByJobId`     | Optional   | ID of the job that initiated this job.                                                   | `Not Specified`            |


### Multi-Stream Import

**Job Name:** `Multi-Stream Import`  
**Job Enum ID:** `JOB_IMP_JSON_DATA`

**Description**  
This job is used when there is a need to process a single JSON data object by invoking a specific service. For example, it can be used in scenarios where data needs to be imported from a JSON payload and processed by a particular service in an application. This function ensures that the data is correctly validated and passed to the service, and handles any errors that may occur during the process.

**Custom Parameters**

| **Parameter**        | **Type**   | **Description**                                                                           | **Default Value**          |
|-----------------------|------------|-------------------------------------------------------------------------------------------|----------------------------|
| `configId`           | Required   | Identifies the configuration for import JSON data.                                        | `IMP_JSON_DATA`            |
| `propertyResource`   | Required   | Specifies the property resource for configuration.                                        | `FTP_CONFIG`               |
| `remoteFilename`     | Optional   | Specifies the remote filename for processing.                                             | `Not Specified`            |
| `groupBy`            | Optional   | Specifies a grouping parameter for the job.                                              | `Not Specified`            |
| `additionalParameters` | Optional | Additional parameters for job customization.                                              | `Not Specified`            |
| `fileNameRegex`      | Optional   | Specifies a regular expression for filtering filenames.                                   | `Not Specified`            |
| `importPath`         | Optional   | SFTP file location from where the file will be imported.                                  | `Not Specified`            |
| `scheduleNow`        | Optional   | When importing files into the OMS, forces the system to pick the file out of sequence for immediate processing. Enabled by default when importing files from FTP, but can be disabled during high-volume syncs for system stability. | `Not Specified` |
| `createdByJobId`     | Optional   | ID of the job that initiated this job.                                                | `Not Specified`            |


### Send Packed Order Mail

**Job Name:** `Send Packed Order Mail`

**Job Enum ID:** `JOB_PACKED_MAIL_ODR`

**Description**  
The `Send Packed Order Mail` job facilitates the bulk sending of email notifications for packed orders, notifying customers when their orders are prepared and ready for shipment.

**Custom Parameters**

| **Parameter**        | **Type**   | **Description**                                                                           | **Default Value**          |
|----------------------|------------|-------------------------------------------------------------------------------------------|----------------------------|
| `frequency`          | Optional   | Defines the default duration of the last syncing of the orders.                           | `30`                       |
| `emailType`          | Optional   | Specifies the type of email template to use for a notification.                           | `PRDS_ORD_PACKED`          |


### Send Packed Shipment Notification to Customer

**Job Name:** `Send Packed Shipment Notification to Customer`  
**Job Enum ID:** `SHPMNT_PKD_NT`

**Description**  
This job is used in scenarios where notifications need to be sent for a large batch of shipments that have recently been packed. It is particularly useful for automating the process of informing customers or internal systems about the status of their shipments, ensuring timely communication and updates.

**Custom Parameters**

| **Parameter**            | **Type**   | **Description**                                                | **Default Value** |
|--------------------------|------------|----------------------------------------------------------------|-------------------|
| `frequency`              | Required   | Defines the default duration of the last syncing of the shipment status. | `15`    |
| `bufferTime`             | Optional   | Specifies the buffer time (in minutes) for scheduling the job. | Not specified     |
| `shipmentMethodTypeIds`  | Optional   | Unique identifier of Shipment Method type.                     | Not specified     |



