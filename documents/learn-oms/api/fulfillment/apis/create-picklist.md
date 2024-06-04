---
description: >-
  Learn how to create picklists for order item pickups efficiently within the
  'Brokering WIP' documentation.
---

# Create Picklist

Creates a picklist of the order items to be picked up. To create a picklist, you will need to call the /createPicklist endpoint with the POST method.

## Request

### Endpoint

`https://<host>/api/createPicklist`

Example: https://demo-oms.hotwax.io/api/createPicklist

### Header

#### Body

```
facilityId: WH
facilityId_o_0: WH
shipmentMethodTypeId_o_0: STANDARD
itemStatusId_o_0: PICKITEM_PENDING
shipGroupSeqId_o_0: 00002
orderId_o_0: 10175
orderItemSeqId_o_0: 00101
productId_o_0: 10002
quantity_o_0: 1
inventoryItemId_o_0: 10120
picked_o_0: 1
_rowSubmit_o_0: Y
pickerIds: 10000
```

Note: Pass the data in form format.

| Parameter                  | Description                        | Required (Y/N) |
| -------------------------- | ---------------------------------- | -------------- |
| `facilityId`               | The ID of the facility             |                |
| `facilityId_o_0`           | The ID of the picklist bin         |                |
| `shipmentMethodTypeId_o_0` | The ID of the shipment method type |                |
| `itemStatusId_o_0`         | The ID of the item status          |                |
| `shipGroupSeqId_o_0`       | The ID of the ship group sequence  |                |
| `orderId_o_0`              | The ID of the order                |                |
| `orderItemSeqId_o_0`       | The ID of the order item sequence  |                |
| `productId_o_0`            | The ID of the product              |                |
| `quantity_o_0`             | The quantity of the items          |                |
| `inventoryItemId_o_0`      | The ID of the inventory item       |                |
| `picked_o_0`               | The number of items to be picked   |                |
| `_rowSubmit_o_0`           |                                    |                |
| `pickerIds`                | The ID of the picker               |                |

## Response

### Header

#### Body

```
{
    "quantity_o_0": "1",
    "orderItemSeqId_o_0": "00101",
    "picklistId_o_0": "10112",
    "facilityId_o_0": "WH",
    "shipGroupSeqId_o_0": "00002",
    "orderId_o_0": "10175",
    "picklistBinId_o_0": "10122",
    "facilityId": "WH",
    "pickerIds": "10000",
    "picked_o_0": "1",
    "shipmentMethodTypeId_o_0": "STANDARD",
    "inventoryItemId_o_0": "10120",
    "itemStatusId_o_0": "PICKITEM_PENDING",
    "picklistId": "10112",
    "picklistBinId": "10122",
    "_rowSubmit_o_0": "Y",
    "productId_o_0": "10002"
}

```

| Parameter           | Description                |
| ------------------- | -------------------------- |
| `picklistId_o_0`    | The ID of the picklist     |
| `picklistBinId_o_0` | The ID of the picklist bin |
| `itemStatusId_o_0`  | The ID of the item status  |
| `picklistId`        | The ID of the picklist     |
| `picklistBinId`     | The ID of the picklist bin |
| `productId_o_0`     | The ID of the product      |
