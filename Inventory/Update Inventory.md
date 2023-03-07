# Update Inventory API

Updates the inventory of products in HotWax. To update inventory you will need to call the endpoint with the POST method. The actual inventory is changed by getting the inventory variance in the "IN" parameter.

Example: 

Inventory in HotWax = 10
Variance = -2
Updated inventory in HotWax = 10 - 2 = 8

## Request

### End Point
`https://<host>/api/updateInventory`

Example: https://demo-oms.hotwax.io/api/updateInventory

### Header
Content-Type: application/json


### Body
```
{
  {
    "sku": " ",
    "availableQty": ,
    "externalFacilityId": "",
    "locationSeqId": " ",
    "varianceReasonId": ""
  }
}
```
Example Request: 
```
{
  {
    "sku": "2602",
    "availableQty": -1,
    "externalFacilityId": "WH",
    "locationSeqId": "10000",
    "varianceReasonId": "POS_SALE"
  }
}
```

| Parameters       | Description                                            | Required (Y/N) |
|------------------|--------------------------------------------------------|----------------|
| `sku`            | The SKU of the product                                 | Y              |
| `availableQty`   | The variance in inventory (delta)                       | Y              |
| `externalFacilityId` | The external facility ID where inventory item need to be updated | Y |
| `locationSeqId` | The location ID in the facility where inventory item need to be updated | Y |
| `varianceReasonId` | The ID of the reason that caused variance in inventory | Y              |


## Response

### Status Code
HTTP/1.1 200 OK

### Headers
Content-Type: application/json


### Body
  
```
{
  {
    "sku": "",
    "availableQty": ,
    "externalFacilityId": "",
    "locationSeqId": "",
    "varianceReasonId": ""
  },
  "webSiteId": ""
}
```

Example Response: 
```
{
  {
    "sku": "2602",
    "availableQty": -1 ,
    "externalFacilityId": "WH",
    "locationSeqId": "10000",
    "varianceReasonId": "POS_SALE"
  },
  "webSiteId": "API"
}
```
