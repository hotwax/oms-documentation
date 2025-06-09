---
description: "Learn about the miscellaneous jobs in HotWax Commerce."
---

# Miscellaneous

### Process Bulk Imported Files

Job Name: `Process bulk imported files`
Job Enum id: `JOB_PRC_PND_DML`
Service Name: `processPendingDataManagerJob`
Flow: Processing Files in HotWax

As all the other jobs bring a file to HotWax and upload it into HotWax internal file system, there is a need for a job, which processes these uploaded files to create or update records in HotWax. The `Process Bulk Imported Files` job processes files which are in pending status in HotWax Commerce internal file system.

**Custom Parameters**
- This job has no required parameters.
- Recommended frequency for this job is every 5 mins.
- It has some optional parameters.

___

### Process upload to eCommerce

**Job Name:** `Process uploads to eCommerce`
**Job Enum ID:** `JOB_UL_PRCS`

This job is used in scenarios where multiple uploads to Shopify are queued, and it's crucial to ensure that these uploads are processed one at a time. This could be part of a larger system where inventory, product data, or other information needs to be synced with Shopify in an orderly and managed way, preventing conflicts and ensuring data integrity.
___

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

___

### Bulk Send Brokered Order Mail

Job Name: Bulk Send Completed Order Mail
Job Enum ID: JOB_COMPLET_MAIL_ODR
Service Name: `bulkSendCompletedOrderMail`
Flow: HotWax to Klaviyo

The `Send Broker Order Mail` job facilitates the bulk sending of email notifications for brokered orders. This job ensures that customers receive timely updates on the status of their brokered orders, enhancing communication and order tracking.

**Internally**, This job fetches all those orders, and corresponding email addresses on orders for which inventory is allocated, form HotWax database and triggers mails to customer through marketing platform (like Klaviyo).
___

### Bulk Send Completed Order Mail

Job Name: `Send Broker Order Mail`
Job Enum ID: `JOB_BROKER_MAIL_ODR`
Service Name: `bulkSendOrderBrokeredMail`
Flow: HotWax to Klaviyo

The `Send Completed Order Mail` job enables the bulk sending of email notifications for completed orders, ensuring customers are promptly informed when their orders are fulfilled and ready for receipt.

**Internally**, this job fetches orders for which order status is marked as completed between the last job run and current timestamp, from HotWax Database, and also fetches the associated customer email ID’s on those orders. And then triggers email to customers through marketing platforms (like klaviyo)

___

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

___

### Multi-Stream Import

**Job Name:** `Multi-Stream Import`
**Job Enum ID:** `JOB_IMP_JSON_DATA`

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

___

### Send Packed Shipment Notification to Customer

Job Name: `Send packed shipment notification to customer`
Job Enum ID: `SHPMNT_PKD_NT`
Service Name: `bulkSendShipmentPackedNotification`
Flow: HotWax to Klaviyo

This job is used in scenarios where notifications need to be sent for a large batch of shipments that have recently been packed. It is particularly useful for the process of informing customers or internal systems about the status of their shipments, ensuring timely communication and updates.

**Internally**, this job fetches all those shipments which are in packed status between the last job run and current time. And then through the shipment id, tracks the order and similarly the customer email address associated with the order. And triggers email to customer through marketing platforms (like klaviyo)

