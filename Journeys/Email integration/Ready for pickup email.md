# Integration guidelines for OMS and Marketing Automation Platforms: Ready for pickup email notification

## Overview

These guidelines detail the integration process to enable the automated delivery of 'Ready to Pickup' email notifications to customers. These notifications are triggered when store staff pack the items in a shipment and indicate their readiness for pickup using either HotWax Commerce's BOPIS fulfillment app or Fulfillment APIs. 

### Step 1: Mark shipment-Ready for Pickup

When store staff pack the order items, the `updateShipment` service is triggered to update the order's shipment status to `packed`, indicating its readiness for pickup.

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

| Parameter                 | Description                                                   |
| ------------------------- | ------------------------------------------------------------  |
| `shipmentTypeId`          | The ID of the shipment type.                                  |
| `eventDate`               | The timestamp when the shipment was updated.                  |
| `oldStatusId`             | The previous status ID of the shipment.                       |
| `oldPrimaryOrderId`       | The previous primary order ID of the shipment.                |
| `oldOriginFacilityId`     | The previous origin facility ID of the shipment.              |
| `oldDestinationFacilityId`| The previous destination facility ID of the shipment.         |
| `picklistBinId`           | The ID of the picklist bin associated with the shipment.      |
| `oldPrimaryShipGroupSeqId`| The previous primary ship group sequence ID of the shipment.  |
| `shipmentMethodTypeId`    | The ID of the shipment method type.                           |

### Step 2: Trigger `sendReadyToPickupItemNotification` service

After updating the shipment to packed status, the `updateShipment` service triggers the `sendReadyToPickupItemNotification` service for the shipment.

#### Chained even condition details:
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
| `statusId` | The status ID of the shipment. To send ready for pickup email, shipment must be packed | Yes |
| `shipmentTypeID` | The ID of the shipment type | Yes |

### Step 3: Validates Email Notification Configuration

The `sendReadyToPickupItemNotification` service checks the configuration for sending ready-for-pickup emails. If enabled, it determines the responsible system for sending the email.

If the marketing automation platform is responsible, the OMS shares the shipment details in JSON format with the marketing automation platform. The platform then uses the details to personalize the customer's email using the preconfigured template.

If the OMS is responsible, it directly uses the preconfigured email template within the OMS.

Note: The data for the preconfigured email is defined by templateContentId.

#### Service details: 

```
<ProductStoreEmailSetting emailType="PRDS_READY_TO_PICKUP" productStoreId="STORE" subject="Ready For Pickup" templateContentId="READY_FOR_PICKUP"/>
```

### Step 4: Deliver Email Notification

The `sendReadyToPickupItemNotification` service checks the `templateContentId` to prepare data and sends the shipment details to the marketing integration platform.

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


##### HotWax Commerce has ready integration with Listrak, a marketing automation platform. Here's a sample JSON file that is shared with Listrak's API for each order:
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

const jsonString = JSON.stringify(data, null, 2);
console.log(jsonString);
```

### By following these steps, you can send Ready-for-pickup email notifications from the OMS to the marketing automation platform.
