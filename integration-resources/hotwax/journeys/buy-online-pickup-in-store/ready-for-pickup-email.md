---
description: >-
  Learn how to integrate Order Management System (OMS) with Marketing Automation
  Platforms for automated 'Ready to Pickup' email notifications.
---

# Ready For Pickup Notification

## Overview

These guidelines provide detailed steps for integrating the Order Management System (OMS) with Marketing Automation Platforms to enable the automated delivery of 'Ready to Pickup' email notifications to customers. These notifications are triggered when store staff packs the ordered items in a shipment and indicate their readiness for pickup using HotWax Commerce's BOPIS fulfillment app or Fulfillment APIs.

### Step 1: Mark shipment-Ready for Pickup

When store staff pack the order items and indicate their readiness for pickup, the `quickShipEntireShipGroup` API creates a shipment from the selected shipgroup and moves it to the "Packed" status.

#### Sample API Request

```
{
  "orderId": "10037",
  "setPackedOnly": "Y",
  "dimensionUomId": "DM_cm",
  "shipmentBoxTypeId": "YOURPACKNG",
  "weight": "1",
  "weightUomId": "WT_kg",
  "shipGroupSeqId": "00001"
}
```

| Parameter           | Description                                                                                                                                                                                                                                                | Required |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `orderId`           | The unique identifier of the order.                                                                                                                                                                                                                        | Yes      |
| `setPackedOnly`     | A flag indicating if the shipment should only be packed. If the customer is going to pickup their order at the fulfillment location, then this should be enabled to prevent the order from being marked as shipped. Default value is 'Y' if not specified. | Yes      |
| `dimensionUomId`    | The unit of measurement for dimensions (e.g., inches, centimeters).                                                                                                                                                                                        | Yes      |
| `shipmentBoxTypeId` | The Id of the shipment box type.                                                                                                                                                                                                                           | Yes      |
| `weight`            | The weight of the package.                                                                                                                                                                                                                                 | Yes      |
| `weightUomId`       | The unit of measurement for weight (e.g., pounds, kilograms).                                                                                                                                                                                              | Yes      |
| `shipGroupSeqId`    | The Id of the ship group sequence.                                                                                                                                                                                                                         | Yes      |

#### Sample API Response

```
{
  "orderId": "10037",
  "setPackedOnly": "Y",
  "weight": "1",
  "shipmentBoxTypeId": "YOURPACKNG",
  "shipGroupSeqId": "00001",
  "shipmentId": "10140",
  "dimensionUomId": "WT_kg",
  "weightUomId": "WT_kg",
  "_EVENT_MESSAGE_": "Congratulations! Shipment #10140 is ready for pickup"
}
```

| Parameter         | Description                          |
| ----------------- | ------------------------------------ |
| `shipmentId`      | The Id of the shipment made.         |
| `_EVENT_MESSAGE_` | The message for the event performed. |

### Step 2: Trigger `sendReadyToPickupItemNotification` chained event condition action (ECA) service

When the shipment status is `packed`, the `sendReadyToPickupItemNotification` chained ECA service is triggered to check the order type of the shipment and the configuration for sending ready-for-pickup emails.

The chained service works for both `Store pickup` and `Ship to store` shipments. Emails are triggered when `Store pickup` shipments are moved to packed status and `Ship to store` shipments are moved to "scheduled" status. The system responsible for sending the email and order details is configured in the following Product Store setting.

Note: Additionally, this ECA service also offers the option to manually trigger the "ready to pickup" email notification. When this ECA service is triggered, it internally initiates the email for shipment process. This feature allows users to manually initiate the sending of email notifications to inform recipients that their item is ready for pickup.

#### Configuration details:

```
<ProductStoreEmailSetting 
  emailType="PRDS_READY_TO_PICKUP"
  productStoreId="STORE" 
  subject="Ready For Pickup" 
  templateContentId="READY_FOR_PICKUP", 
  systemMessageRemoteId= NN_LISTRAK_CONFIG>
```

| Parameter                  | Description                                                                               |
| -------------------------- | ----------------------------------------------------------------------------------------- |
| `ProductStoreEmailSetting` | The email settings in the Order Management System (OMS) for the product store identifier. |
| `emailType`                | The type of email to be sent.                                                             |
| `productStoreId`           | The Id of the product store.                                                              |
| `subject`                  | The subject of the email.                                                                 |
| `templateContentId`        | The Id of the template content.                                                           |
| `systemMessageRemoteId`    | The Id of the system responsible for sending the email.                                   |

The email transmission system is identified by the parameter `systemMessageRemoteId`, while the information to configure the email's content is specified by the `templateContentId`. This `templateContentId` enables the OMS (Order Management System) to locate and fetch the content required for composing the email.

#### ECA Details:

```
<service name="sendReadyToPickupItemNotification" engine="java" require-new-transaction="true" max-retry="3"
         location="co.hotwax.customerservice.shipment.ShipmentServices" export="true" invoke="sendReadyToPickupItemNotification" auth="true">
    <description>Send a ready to pick up item notification</description>
    <attribute name="shipmentId" type="String" mode="IN"/>
    <attribute name="emailType" type="String" mode="IN" optional="true" default-value="PRDS_READY_TO_PICKUP"/>
</service>
```

| Parameter    | Description             | Required |
| ------------ | ----------------------- | -------- |
| `shipmentId` | The Id of the shipment. | Yes      |
| `emailType`  | The type of the email.  | Yes      |

### Step 3: Prepare content for email

When the marketing automation platform handles email transmission, the OMS shares the required information in JSON format, specified by the `templateContentId`, to the platform.

#### A list of fields which are available out of box in HotWax which can be shared with a marketing automation platform:

| Dynamic Variable | Description                                                           |
| ---------------- | --------------------------------------------------------------------- |
| First Name       | The first name of the recipient.                                      |
| Last Name        | The last name of the recipient.                                       |
| To Facility Name | The name of the facility for pickup.                                  |
| Address 1        | The first line of the pickup location's address.                      |
| Address 2        | The second line of the pickup location's address (if applicable).     |
| City             | The city where the pickup facility is located.                        |
| State Name       | The name of the state or region where the pickup facility is located. |
| Country Name     | The name of the country where the pickup facility is located.         |
| Order Name       | The name or reference number of the pickup order.                     |
| Product Name     | The name of the product being picked up.                              |
| Quantity         | The quantity of the product being picked up.                          |
| Price            | The price of the product.                                             |
| Image            | An image or visual representation of the product.                     |
| Subtotal         | The subtotal amount for the pickup order.                             |
| GrandTotal       | The grand total amount for the pickup order.                          |

Note: If the OMS is responsible for sending the email, it incorporates the data into a preconfigured email template within its system.

### Step 4: Deliver Email Notification

After recieving the required content, the marketing automation platform personalizes the customer's email using the provided details and delivers the email to the customer.

**HotWax Commerce has ready integration with Listrak, a marketing automation platform. Added below is a JSON file sample**

```
const data = {
  "emailAddress": "john.doe@example.co",
  "segmentationFieldValues": [
    {
      "segmentationFieldId": 2378294,
      "value": "${originFacility.facilityName!}"
    },
    {
      "segmentationFieldId": 2378297,
      "value": "https://localhost:8443/"
    },
    {
      "segmentationFieldId": 2378298,
      "value": "${originFacility.facilityName!}"
    },
    {
      "segmentationFieldId": 2378299,
      "value": "${postalAddress.address1!}"
    },
    {
      "segmentationFieldId": 2378300,
      "value": "${postalAddress.address2!}"
    },
    {
      "segmentationFieldId": 2378301,
      "value": "${postalAddress.city!}"
    },
    {
      "segmentationFieldId": 2378302,
      "value": "${postalAddress.stateProvinceGeoId!}"
    },
    {
      "segmentationFieldId": 2378303,
      "value": "${postalAddress.postalCode!}"
    },
    {
      "segmentationFieldId": 2378304,
      "value": "${productUrl!}"
    },
    {
      "segmentationFieldId": 2378305,
      "value": "${orderItem.itemDescription!}"
    },
    {
      "segmentationFieldId": 2378306,
      "value": "${product.productName!}"
    },
    {
      "segmentationFieldId": 2378384,
      "value": "${shipmentItem.quantity!}"
    },
    {
      "segmentationFieldId": 2378402,
      "value": "${orderName!orderId}"
    },
    {
      "segmentationFieldId": 2378403,
      "value": "${partyName!}"
    }
  ]
};
```

### By following these steps, you can send Ready-for-pickup email notifications from the OMS to the marketing automation platform.
