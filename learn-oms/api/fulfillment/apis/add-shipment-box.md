---
description: >-
  Learn how to add a shipment box for order fulfillment with the 'Add Shipment
  Box' feature.
---

# Add Shipment Box

Adds a shipment box for the order for fulfillment. To add a shipment box, you will need to call the /addShipmentPackage endpoint with the POST method.

## Request

### Endpoint

`https://<host>/api/addShipmentPackage`

Example: https://demo-oms.hotwax.io/api/addShipmentPackage

### Header

#### Body

```
{
  "picklistBinId": "10094",
  "shipmentBoxTypeId": "YOURPACKNG"
}
```

| Parameter           | Description                     | Required (Y/N) |
| ------------------- | ------------------------------- | -------------- |
| `picklistBinId`     | The ID of the picklist bin      |                |
| `shipmentBoxTypeId` | The ID of the shipment box type |                |

## Response

### Header

#### Body

```
{
  "shipmentPackageSeqId": "00001",
  "shipmentBoxTypeId": "YOURPACKNG",
  "shipmentRouteSegmentId": "00001",
  "shipmentId": "10252",
  "picklistBinId": "10094",
  "_EVENT_MESSAGE_": "Box added successfully"
}

```

| Parameter                | Description                             |
| ------------------------ | --------------------------------------- |
| `shipmentPackageSeqId`   | The ID of the shipment package sequence |
| `shipmentRouteSegmentId` | The ID of the shipment route segment    |
| `shipmentId`             | The ID of the shipment                  |
| `_EVENT_MESSAGE_`        | The communication message of the event  |
