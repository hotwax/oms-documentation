---
description: The generated JSON looks like this -
---

# Generated JSON

```
[
  {
    "shipmentId": "10001",
    "shipmentTypeId": "IN_TRANSFER",
    "statusId": "PURCH_SHIP_RECEIVED",
    "externalId": "8303020",
    "createdDate": "2023-04-27T07:27:49-07:00",
    "shipmentItems": [
      {
        "productId": "11387",
        "quantity": 20,
        "shipmentId": "10001",
        "shipmentItemSeqId": "00001",
        "shipmentReceipts": [
          {
            "totalQuantityAccepted": 20,
            "_entity": "org.apache.ofbiz.shipment.shipment.ShipmentAndItemAndReceipt",
            "receivedDate": "2023-04-27T07:31:43-07:00",
            "receiptId": "10005"
          }
        ],
        "totalReceivedQuantity": 20
      },
      {
        "productId": "11935",
        "quantity": 10,
        "shipmentId": "10001",
        "shipmentItemSeqId": "00002",
        "shipmentReceipts": [
          {
            "totalQuantityAccepted": 10,
            "_entity": "org.apache.ofbiz.shipment.shipment.ShipmentAndItemAndReceipt",
            "receivedDate": "2023-04-27T07:31:43-07:00",
            "receiptId": "10006"
          }
        ],
        "totalReceivedQuantity": 10
      }
    ]
  }
]
```
