# Reject shipment item

Allows user to reject shipmemt items by logging varaince. To reject shipment item you will need to call the endpoint using the POST method.

## Request

### Endpoint

`https://< host >/api/rejectShipmentItem`

Example: https://demo-oms.hotwax.io/api/rejectShipmentItem

### Headers

### Body
```
{
  "shipmentId": ,
  "shipmentItemSeqId": ,
  "recordVariance": ,
  "rejectionReasonId": ,
  "quantity": 
}
```

## Response

### Body
```
{
  "quantity": ,
  "shipmentItemSeqId": ,
  "shipmentId": ,
  "recordVariance": ,
  "rejectionReasonId": ,
  "webSiteId": 
}
```


| Parameter        | Description                                               | Required (Y/N) |
|------------------|-----------------------------------------------------------|----------------|
| `shipmentId`        | The ID of the shipment in the OMS| Yes |
| `shipmentItemSeqId` | The ID of the shipment item which item needs to be rejected | Yes|
| `quantity`          | The quantity of item to be rejected | Yes |
| `recordVariance`    | The flag to record variance. Default value is Y | No|
| `rejectionReasonId` | The ID of the reason of rejection. | No|
