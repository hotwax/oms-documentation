---
description: "Learn about the Fulfillment jobs in HotWax Commerce."
---


# Fulfillment

## Shipping

### Ship packed Orders:
**Job name:** Ship packed orders  
**Job Enum ID:** JOB_SHIP_ORD_PKD  

**Description**

The Ship Packed Orders Job is activated in the Job Manager App, orders will be automatically marked as shipped. Ensure to enable the `isTrackingRequired` setting on shipping methods to prevent automatic shipment for methods without tracking codes. However, note that this setting does not directly apply to the orders being shipped. To streamline order shipping in HotWax Commerce, navigate to the Completed tab and select the Ship Orders function to bulk mark them as shipped. 

**No custom parameters for this job**

## History

### Order Fulfillment History

**Job Name:** `Order Fulfillment History`  
**Job Enum ID:** `JOB_ORD_FLMNT_HST`

**Description**

The order fulfillment history job within HotWax Commerce is a crucial component of the system's functionality. It involves the creation or updating of records related to order fulfillment, which typically includes tasks such as processing orders, tracking inventory, and managing shipping and delivery. This job ensures that accurate and up-to-date information regarding order fulfillment is maintained within the system, enabling efficient handling of customer orders and timely delivery of products. By integrating with FTP (File Transfer Protocol), the job can securely access and exchange data, enhancing the automation and reliability of the order fulfillment process. Overall, this job plays a vital role in optimizing the operational efficiency and customer satisfaction of HotWax Commerce-powered businesses.

**Custom Parameters**

| Parameter         | Type     | Description                                                    | Default Value        |
|-------------------|----------|----------------------------------------------------------------|----------------------|
| `configID`        | Required | Identifies the configuration for Order Item Attribute records. | `MDM_UPD_ORD_FMNT_HST`|
| `propertyResources` | Required | Specifies the property resource for configuration.            | `FTP_CONFIG`         |
| `remoteFilename`  | Optional | Specifies the remote filename for processing.                 | Not specified        |
| `groupBy`         | Optional | Specifies a grouping parameter for the job.                   | Not specified        |
| `additionalParameters` | Optional | Additional parameters for job customization.                | Not specified        |
| `fileNameRegex`   | Optional | Specifies a regular expression for filtering filenames.       | Not specified        |
| `importPath`      | Optional | Specifies the SFTP location and path for importing the file into the system. | Not specified |
| `scheduleNow`     | Optional | When importing files into the OMS, forces the system to pick the file out of sequence for immediate processing. Enabled by default when importing files from FTP, but can be disabled during high-volume syncs for system stability. | Enabled |


## Notification

### Open BOPIS Order Notification

**Job Name:** `Open BOPIS Order Notification`  
**Job Enum ID:** `JOB_OPN_BOPIS_ORD_NT`

To send an Open BOPIS order notification HotWax Commerce sends a notification for open and ready-to-pickup orders. In the Job Manager app, navigate to the fulfillment page, and click on the Open BOPIS order notification button. An extended menu will appear on the right allowing selection of the run time and scheduling preferences. Save the settings to regulate the frequency of the notifications.

**No custom parameter for this job**

### Ready to Pick BOPIS Order Notification

**Job Name:** `Ready to Pick BOPIS Order Notification`  
**Job Enum ID:** `JOB_RP_BOPIS_ORD_NT`

### Description  
The `Ready to Pick BOPIS Order Notification` job sends a notification to the customer once their Buy Online, Pick Up In Store (BOPIS) order is packed and ready for pickup, ensuring timely communication about the order's availability for collection.

**Custom Parameters**

| Parameter     | Type     | Description                                                       | Default Value          |
|---------------|----------|-------------------------------------------------------------------|------------------------|
| `topicEnumId` | Required | This is used to represent a unique identifier for an enumerated value related to a topic or subject. | `READYPICK_BOPIS_ODR`  |

### Open Shipping Order Notification

**Job Name:** `Open Shipping Order Notification`  
**Job Enum ID:** `JOB_OPEN_SHIP_ORD_NT`

**Description**
The `Open Shipping Order Notification` job notifies store associates whenever an open order is received. This ensures that store associates are promptly alerted to new orders, enabling them to begin the fulfillment process without delay.

**Custom Parameters**

| Parameter     | Type     | Description                                                       | Default Value          |
|---------------|----------|-------------------------------------------------------------------|------------------------|
| `topicEnumId` | Required | This is used to represent a unique identifier for an enumerated value related to a topic or subject. | `OPEN_SHIPPING_ODR`    |

## Auto Cancellations

### Auto Cancellations
**Job Name: `Auto Cancellations`**

**Description**

Orders that remain unfulfilled beyond their auto-cancellation date will be automatically canceled within HotWax Commerce. Additionally, if the upload for canceled orders is enabled, these orders will also be canceled in Shopify.

**No custom parameters for this job**

## More Jobs

### Notification using communication events

**Job Name: `Notification using communication events`**

**Job Enum ID: `JOB_SND_ML_COMM`**

**Description**
The `Notification Using Communication Events` job enables retailers to communicate to internal users by the help of the communication event feature on the view order page. This job ensures that internal teams are promptly alerted to important events for that particular order, facilitating efficient communication within the organization.

**No custom parameters for this job**

### Packed BOPIS Order Reminder Notification

**Job Name: `Packed BOPIS Order Reminder Notification`**

**Description**
The `Packed BOPIS Order Reminder Notification` job sends a reminder notification to customers informing them that their Buy Online, Pick Up In Store (BOPIS) order has been packed and is ready for pickup. This reminder is sent every 7 days, up to 3 times, ensuring the customer is informed and reminded to collect their order.

**Custom Parameters**

| Parameter       | Type      | Description                                                        | Default Value          |
|-----------------|-----------|--------------------------------------------------------------------|------------------------|
| `intervalDays`  | Optional  | Number of days between each reminder                               | 7                      |
| `maxOccurrences`| Optional  | Maximum number of occurrences of the reminder                      | 3                      |
| `emailType`     | Optional  | Specific type of email template to use for a notification          | `PRDS_READY_TO_PICKUP` |





