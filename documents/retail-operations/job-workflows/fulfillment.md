---
description: "Learn about the Fulfillment jobs in HotWax Commerce."
---


# Fulfillment

### Ship Packed Orders
Job Name : `Ship Packed Orders`  
Job Enum ID: `JOB_SHIP_ORD_PKD`  
Service Name : `shipPackedOrders`  
Flow : `Order Fulfillment in HotWax`  

**The `Ship Packed Orders` job in HotWax's Fulfillment App updates order status from packed to shipped.** Store associates mark an order as shipped by tapping the "Shipped" button. However, in some cases, failing to tap the button results in incomplete fulfillment.

This job is generally scheduled to run at midnight and marks all the orders in the **packed** status as updated to **shipped**. Retailers generally assume that once the carrier has arrived, it is highly likely that all packed orders have been shipped.

**No custom parameters for this job**

## History

### Order Fulfillment History
Job Name: `Order Fulfillment History`  
Job Enum ID: `JOB_ORD_FLMNT_HST`  
Service Name: `ftpImportFile`  
Flow: `Order Fulfillment in HotWax`

HotWax and Shopify both maintain order fulfillment statuses. A Moqui job in HotWax ensures system integrity by synchronizing order fulfillment history between the two platforms. This job ensures that any orders marked as fulfilled in Shopify are also updated as fulfilled in HotWax, maintaining consistency across systems.

**How does this job work?**  
HotWax sends an API request to Shopify to provide all the orders fulfilled from the last job run until the current timestamp. In response to this request, Shopify provides a JSON file that is imported by the ‘Order Fulfillment History’ job in HotWax and uploaded to `MDM_UPD_ORD_FMNT_HST` in MDM. From there, the `Process Bulk Import Files` job runs, and the fulfilled status is marked.


**Custom Parameters**
- The recommended frequency for this job is 15 minutes.
- This job has configId and propertyResource as the required parameters.
- It has some optional parameters.


## Notification

### Open BOPIS Order Notification
Job Name: Open BOPIS Order Notification  
Job Enum ID: JOB_OPN_BOPIS_ORD_NT  
Service Name: sendOpenBopisOrderNotification  
Flow: Order Fulfillment from HotWax  
 
**This job is used for notifying store associates of the open BOPIS orders allocated to their store.** Basically, when a BOPIS order is allocated to a store, it is generally expected that the BOPIS order must be catered to as soon as possible. So it is important to get notified for BOPIS orders when they are allocated to stores.
 
**How are stores notified?**
Basically, this job checks all the BOPIS orders placed between the timeframe of the last job run and the current timestamp. And sends push notifications on the BOPIS App for the respective stores.
 
**It is important to note that if this job is not scheduled, stores will not be notified about BOPIS orders allocated to them.**


**Custom Parameters**
- There are no custom parameters for this job.
- The recommended frequency for this job in 15 minutes.

### Ready to Pick BOPIS order Notification.
Job Name: `Ready to Pick BOPIS Order Notification`  
Job Enum ID: `JOB_RP_BOPIS_ORD_NT`  
Service Name: `sendOrderNotification`  
Flow: `Order Fulfillment From HotWax`  
 
**This job is used for notifying customers when their BOPIS order is ready for pickup.**Basically, when a store associate fulfills a BOPIS order and clicks the 'READY FOR PICKUP` button, this job internally triggers marketing platforms (like Klaviyo) to automate the notification process.

**Custom Parameters**
- The recommended frequency for this job is 15 minutes.
- This job has `topicEnum Id` as required Parameter.

___

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

### Send Packed Order Mail
Job Name: `Bulk Send Packed Order Mail`  
Job Enum id: `JOB_PACKED_MAIL_ODR`  
Service Name: `bulkSendPackedOrderMail`  
Flow: Order Fulfillment Flow  

**This job is used to send email notifications to customers when their orders are in packed status.** When an order item is marked as packed in the Fulfillment App, HotWax Commerce communicates the shipment status to the retailer’s marketing platform, notifying customers that their order has been shipped from the facility.

**Customer Parameters**
- This has no required parameters.
- `frequency` and `emailType` is the required parameters

___
### Packed BOPIS Order Reminder Notification
Job Name: `Send Packed BOPIS Order Reminder Notification`  
Job Enum id: `JOB_PCK_ORD_RMDR`  
Service Name: `pickReminderAtRegularInterval`  
Flow: `Packed order Notification from HotWax to Klaviyo`  
 
**This job is for notifying customers to pick up their BOPIS order after a specified duration from when their order is packed.** There can be a scenario when, after a ready-to-pickup email has been sent, the customer has not responded. In such cases, this job is used to trigger marketing platforms (like Klaviyo) to send a reminder email to customers.
 
**How is the reminder notification sent?**
When the order is marked “Ready for pick up,” it’s moved to packed status and shown in the Packed tab of the BOPIS app. When an order is in packed status for more than 7 days, a reminder pick-up email is sent to the customer. The email trigger request should be sent to Klaviyo every 7th, 14th, and 21st day.

**Custom Parameters**
- This job has no required parameters.
- The recommended frequency for this job is 15 minutes.
- It has `intervalDays`, `maxOccourrences`, `emailType` as  the optional parameters.

___

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





