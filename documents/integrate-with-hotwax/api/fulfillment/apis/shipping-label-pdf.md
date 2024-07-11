---
description: Explore API and data feeds within the 'Shipping Label PDF' documentation.
---

# Shipping label PDF API

Downloads a shipping label in PDF format for the shipment. To download the shipping label PDF, you will need to call the /ShippingLabel.pdf endpoint with the POST method.

## Request

### Endpoint

`https://<host>/api/ShippingLabel.pdf?shipmentId=<>`

### Header

#### Params

```
 https://demo-oms.hotwax.io/api/ShippingLabel.pdf?shipmentId=<>
```

| Parameter        | Description                                               | Required (Y/N) |
|------------------|-----------------------------------------------------------|----------------|
| `shipment ID`    | The ID of the shipment of groups                          | Yes            |


## Response

Downloads a shipping label in pdf format which is pasted on the shipment. 
