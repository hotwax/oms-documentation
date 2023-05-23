# Integration guidelines for OMS and Marketing Automation Platforms: Ready to Pickup Communication 


## Overview
This document provides integration guidelines for sending 'Ready to Pickup' notifications from the Order Management System (OMS) to the Marketing Automation Platform. The 'Ready to Pickup' notification is triggered when a BOPIS order is packed and ready for customer pickup at the store. This integration enhances the customer experience and reduces manual efforts."

### Step 1: Update shipments to packed status

When an order is ready to be shipped, it is updated to the packed status. To do this,`updateShipment` service is invoked to change the status of the order.

### Service details: 
```
<service name="updateShipment" default-entity-name="Shipment" engine="simple" export="true"
             location="component://hwmapps/minilang/warehouse/WarehouseServices.xml" invoke="updateShipment" auth="true">
        <description>Update Shipment</description>
        <permission-service service-name="facilityGenericPermission" main-action="UPDATE"/>
        <auto-attributes include="pk" mode="INOUT" optional="false"/>
        <auto-attributes include="nonpk" mode="IN" optional="true">
            <exclude field-name="shipmentTypeId"/>
            <exclude field-name="createdDate"/>
            <exclude field-name="createdByUserLogin"/>
            <exclude field-name="lastModifiedDate"/>
            <exclude field-name="lastModifiedByUserLogin"/>
        </auto-attributes>
        <attribute name="shipmentTypeId" type="String" mode="INOUT" optional="true"/>
        <attribute name="eventDate" type="Timestamp" mode="IN" optional="true"/>
        <attribute name="oldStatusId" type="String" mode="OUT" optional="true"/>
        <attribute name="oldPrimaryOrderId" type="String" mode="OUT" optional="true"/>
        <attribute name="oldOriginFacilityId" type="String" mode="OUT" optional="true"/>
        <attribute name="oldDestinationFacilityId" type="String" mode="OUT" optional="true"/>
        <attribute name="picklistBinId" type="String" mode="OUT" optional="true"/>
        <attribute name="oldPrimaryShipGroupSeqId" type="String" mode="OUT" optional="true"/>
        <override name="shipmentMethodTypeId" type="String" mode="INOUT" optional="true"/>
    </service>
```

### Step 2: Invoke `sendReadyToPickupItemNotification` service

After updating the shipment to packed status, the `updateShipment` service also triggers the `sendReadyToPickupItemNotification` service.

#### Service details:
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

HotWax Commerce has ready integration with Listrak, a marketing automation platform. Here's a sample JSON file that is shared with Listrak's API for each order:
```
const data = {
  "emailAddress": "sumiti.joshi@hotwax.co",
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

const jsonString = JSON.stringify(data, null, 2);
console.log(jsonString);
```

### By following these steps, you can send ready to pickup email from the OMS to marketing automation platform.








