---
description: >-
  Learn how to update orders in progress yet to be shipped with HotWax Commerce
  using the updateOrder endpoint and POST method.
---

# Update Orders

Updates orders that are currently in progress and have not yet been shipped, to update the orders, you will need to call the `updateOrder` endpoint with the POST method. There are two main reasons for updating orders: changing the shipment box and rejecting specific order items.

## Request

### Endpoint

`https://<host>/api/updateOrder`

Example: https://demo-oms.hotwax.io/api/updateOrder

### Header

#### For Order Item rejection:

**Body**

```
{
  "facilityId": "<facilityId>",
  "box_shipmentId_0": "item.shipmentId",
  "0_box_rowSubmit": "0",
  "box_shipmentBoxTypeId_0": "boxType",
  "rej_shipmentId_0": "item.shipmentId",
  "rej_shipmentItemSeqId_0": "item.shipmentItemSeqId",
  "0_rej_rowSubmit_": "0",
  "rej_rejectionReason_0": "item.rejectReason"
}
```

**Note: Pass this information as a form data.**

| Parameter                 | Description                                                    | Required (Y/N) |
| ------------------------- | -------------------------------------------------------------- | -------------- |
| `facilityId`              | The ID of the facility.                                        | Yes            |
| `box_shipmentId_0`        | The shipment ID of the item.                                   | Yes            |
| `0_box_rowSubmit`         | The row in the order where the item belongs.                   | Yes            |
| `box_shipmentBoxTypeId_0` | The box type of the shipment.                                  | Yes            |
| `rej_shipmentId_0`        | The ID of the rejected shipment item.                          | Yes            |
| `rej_shipmentItemSeqId_0` | The sequence ID of the rejected shipment ID.                   | No             |
| `0_rej_rowSubmit_`        | The row in the order where the rejected shipment item belongs. | No             |
| `rej_rejectionReason_0`   | The reason for rejecting the order item.                       | Yes            |

#### For Shipment Package Change:

**Body**

```
{
  "facilityId": "<facilityId>",
  "box_shipmentId_1": "item.shipmentId",
  "1_box_rowSubmit": "1",
  "box_shipmentBoxTypeId_1": "boxType",
  "rtp_shipmentId_1": "item.shipmentId",
  "rtp_shipmentItemSeqId_1": "item.shipmentItemSeqId",
  "1_rtp_rowSubmit": "1",
  "rtp_newShipmentId_1": "shipmentPackage.shipmentId"
}
```

| Parameter                 | Description                                                         | Required (Y/N) |
| ------------------------- | ------------------------------------------------------------------- | -------------- |
| `facilityId`              | The ID of the facility.                                             | Yes            |
| `box_shipmentId_1`        | The shipment ID of the item.                                        | Yes            |
| `1_box_rowSubmit`         | The row in the order where the item belongs.                        | Yes            |
| `box_shipmentBoxTypeId_1` | The box type of the shipment.                                       | Yes            |
| `rtp_shipmentId_0`        | The ID of the ready to pack shipment item.                          | Yes            |
| `rtp_shipmentItemSeqId_0` | The sequence ID of the ready to pack shipment ID.                   | No             |
| `0_rtp_rowSubmit_`        | The row in the order where the ready to pack shipment item belongs. | No             |
| `rtp_rejectionReason_0`   | The reason for rejecting the ready to pack order item.              | Yes            |

## Response

### Header

#### For Order Item rejection:

**Body**

```
{
  "facilityId": "<facilityId>",
  "box_shipmentId_0": "item.shipmentId",
  "0_box_rowSubmit": 0,
  "box_shipmentBoxTypeId_0": "boxType",
  "rej_shipmentId_0": "item.shipmentId",
  "rej_shipmentItemSeqId_0": "item.shipmentItemSeqId",
  "0_rej_rowSubmit_": 0,
  "rej_rejectionReason_0": "item.rejectReason",
  "_EVENT_MESSAGE_": "Order updated successfully"
}
```

#### For Shipment Package Change:

**Body**

```
{
    "box_shipmentBoxTypeId_1": "boxType",
    "1_box_rowSubmit": 1,
    "facilityId": "<facilityId>",
    "1_rtp_rowSubmit": 1,
    "rtp_shipmentId_1": "item.shipmentId",
    "rtp_shipmentItemSeqId_1": "item.shipmentItemSeqId",
    "rtp_newShipmentId_1": "shipmentPackage.shipmentId",
    "_EVENT_MESSAGE_": "Order updated successfully",
    "box_shipmentId_1": "item.shipmentId"
}
```
