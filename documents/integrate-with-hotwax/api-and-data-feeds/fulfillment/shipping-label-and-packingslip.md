---
description: >-
  Explore API and data feeds within the 'Shipping Label and PackingSlip'
  documentation.
---

# Label and packing slip API

Downloads a shipping label in PDF format for the shipment. To download the shipping label PDF, you will need to call the /LabelAndPackingSlip.pdf endpoint with the POST method.

## Request

### Endpoint

`https://<host>/api/LabelAndPackingSlip.pdf`

### Header

#### Params

```
 https://demo-oms.hotwax.io/api/LabelAndPackingSlip.pdf?shipmentIds=<>
```

| Parameter        | Description                                               | Required (Y/N) |
|------------------|-----------------------------------------------------------|----------------|
| `shipment ID`    | The ID of the shipment of groups                          | Yes            |


## Response

Downloads a shipping label and packing slip in pdf format for the shipment. 

