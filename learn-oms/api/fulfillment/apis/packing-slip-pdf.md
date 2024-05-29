---
description: >-
  Learn how to efficiently generate packing slips in PDF format for your
  shipments.
---

# Packing Slip PDF

Downloads a packing slip in PDF format for the shipment. To download the shipping label PDF, you will need to call the /PackingSlip.pdf endpoint with the POST method.

## Request

### Endpoint

`https://<host>/api/PackingSlip.pdf?shipmentId=<>`

### Header

#### Params

```
 https://demo-oms.hotwax.io/api/PackingSlip.pdf?shipmentId=<>
```

| Parameter     | Description                      | Required (Y/N) |
| ------------- | -------------------------------- | -------------- |
| `shipment ID` | The ID of the shipment of groups | Yes            |

## Response

Downloads a packing slip in pdf format which is handed over with the shipment.
