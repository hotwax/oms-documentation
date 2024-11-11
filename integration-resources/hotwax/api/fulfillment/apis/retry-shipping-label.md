---
description: >-
  Discover how to redownload shipping labels in PDF format for completed
  shipments with HotWax Commerce.
---

# Retry Shipping Label

Redownloads shipping label in PDF format for the completed shipment. To re-download the shipping label PDF, you will need to call the /retryShippingLabel endpoint with the GET method.

## Request

### Endpoint

`https://<host>/api/retryShippingLabel`

### Header

#### Params

```
 https://demo-oms.hotwax.io/api/retryShippingLabel?shipmentId=<>
```

| Parameter     | Description                      | Required (Y/N) |
| ------------- | -------------------------------- | -------------- |
| `shipment ID` | The ID of the shipment of groups | Yes            |

## Response

Redownloads a shipping label for the shipment in pdf format.
