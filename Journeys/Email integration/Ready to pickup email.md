# Integration guidelines for OMS and Marketing Automation Platforms: Ready to Pickup Communication 


## Overview
This document provides integration guidelines for sending ready to pickup notifications from the Order Management System (OMS) to the Marketing Automation Platform. This integration improves customer experience and reduces manual efforts.

### Step 1: Update shipments to packed status

The `updateShipment` service in the OMS changes the status of open shipment. This service is triggered when an item is moved from the picked to packed status.

#### Service Details:
```
<eca service="updateShipment" event="global-commit-post-run" run-on-error="false">
    <condition-field field-name="statusId" operator="not-equals" to-field-name="oldStatusId"/>
    <condition field-name="statusId" operator="equals" value="SHIPMENT_PACKED"/>
    <condition field-name="shipmentTypeId" operator="equals" value="SALES_SHIPMENT"/>
    <action service="sendReadyToPickupItemNotification" mode="async" persist="true"/>
</eca>
```

| Parameter | Description | Required |
|-----------|-------------|----------|
| `statusId` | The status ID of the shipment. To send ready to pickup email, shipment must be packed | Yes |
| `shipmentTypeID` | The ID of the shipment type | Yes |

### Step 2: Invoke `sendReadyToPickupItemNotification` service

After updating the shipment to packed status, the `updateShipment` service calls the `sendReadyToPickupItemNotification` service.

### Step 3: Customize Email Notification

The `sendReadyToPickupItemNotification` service determines the configured `emailType` from the email integration platform and selects the appropriate API template. The service then uses the `shipmentId` (shipmentID) as input for the email template, which is pushed to the Marketing Automation Platform.

#### Service Details:
```
<service name="sendReadyToPickupItemNotification" engine="java" require-new-transaction="true" max-retry="3"
         location="co.hotwax.customerservice.shipment.ShipmentServices" export="true" invoke="sendReadyToPickupItemNotification" auth="true">
    <description>Send a ready to pick up item notification</description>
    <attribute name="shipmentId" type="String" mode="IN"/>
    <attribute name="emailType" type="String" mode="IN" optional="true" default-value="PRDS_READY_TO_PICKUP"/>
</service>
```

| Parameter | Description | Required |
|-----------|-------------|----------|
| `shipmentId` | The ID of the shipment | Yes |
| `emailType` | The type of the email | Yes |

### Step 4: Deliver Email Notification

The service calls the email platform's API to send the email details to the email integration platform, which then delivers the email notification to the customer.

### By following these steps, you can send ready to pickup email from the OMS to marketing automation platform.
