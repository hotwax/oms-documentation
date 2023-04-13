# Integration guidelines for OMS and Marketing Automation Platforms: Promise Date Change Communication 


## Overview
This document outlines the steps to ensure accurate promise date change communication from the Order Management System (OMS) to the Marketing Automation Platform. This integration enhances the customer experience and reduces manual efforts.

### Step 1: Identify Promise Date Changes

The BulkSendPromiseDateChange service in OMS identifies all the sales order items whose promise dates have changed in the last 30 minutes. The frequency of this service is configurable as per requirement, but it is recommended to set it to 30 minutes.

#### Service Details:
```
<service name="bulkSendPromiseDateChangedNotification" engine="java"
             location="co.hotwax.customerservice.order.CsrOrderServices" invoke="bulkSendPromiseDateChangedNotification" auth="true" transaction-timeout="3600">
        <description>Bulk service to send promised date changed notification. Default send promised date changed on the last day.</description>
        <attribute name="fromDate" type="Timestamp" mode="IN" optional="true"/>
        <attribute name="toDate" type="Timestamp" mode="IN" optional="true"/>
</service>
```
| Parameter | Description | Required |
|-----------|-------------|----------|
| `fromDate` | The date and time from which to find order item changes | No |
| `toDate` | The date and time from which to find order item changes till | No |

### Step 2: Prepare for Email Notification

The BulkSendPromiseDateChange service identifies all the updated sales order items whose promise dates have changed between the `fromDate` and `toDate` and gathers order context needed to hand off to the Marketing Automation Platform. 

### Step 3: Call `sendDeliveryDateChangedNotification` service
After bringing all the updated items in response, the BulkSendPromiseDateChange service calls the `sendDeliveryDateChangedNotification` service for each item.

#### Service Details:
```
<service name="sendDeliveryDateChangedNotification" engine="java" require-new-transaction="true" max-retry="3"
             location="co.hotwax.warehouse.shipping.WarehouseServices" invoke="sendDeliveryDateChangedNotification">
        <description>Send an order item Delivery Date Changed notification</description>
        <implements service="orderNotificationInterface"/>
        <attribute name="orderId" type="String" mode="IN" optional="true"/>
        <attribute name="orderItemSeqId" type="String" mode="IN" optional="true"/>
</service>
```
| Parameter | Description | Required |
|-----------|-------------|----------|
| `orderId` | The ID of the order in Shopify | No |
| `orderItemSeqId` | The ID of the sequence of an item in the order | No |

### Step 4: Customize Email Notification

The `sendDeliveryDateChangedNotification` service checks the configuration for the email integration platform and picks the appropriate API template. The service then takes input parameters  `orderId` and `orderItemSequenceID` to update all the sales order items in the API template with changed promised dates.

HotWax Commerce has ready integration with Klaviyo, a marketing automation platform. Here's a sample JSON file that is shared with Klaviyo's API for each order:
```
{
  "brandName": "",
  "DISCOUNT_CODE": "",
  "DISCOUNT_VALUE": "",
  "ORDERNO": "",
  "DISCOUNT_CODE": "",
  "FIRSTNAME": "",
  "ITEMLIST_XML": [
    {
      "itemId": "",
      "status": "",
      "description": "",
      "quantity": "",
      "color": "",
      "price": "",
      "itemImage": "",
      "itemUrl": "",
      "backOrder": "",
      "deliveryDate": "",
      "clearance": "",
      "itemName": "",
      "size": "",
      "itemUri": []
    }
  ]
}
```
To update the delivery date, the order item is identified by the `itemID` and the `deliveryDate` is updated.

### Step 5: Deliver Email Notification

The service calls the email platform's API and sends the details to the email integration platform which will then further deliver it to the customer.

### By following these steps, you can ensure accurate promise date change communication from the OMS to marketing automation platform.
