# Update Inventory API

Updates the inventory of products in HotWax by logging a variance of the inputted amount. To update inventory you will need to call the endpoint with the POST method.

Example: 

```
Inventory in HotWax: 10
Variance: -2
Updated inventory in HotWax: 8
```

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
    "quantity": ,
    "externalFacilityId": "",
    "locationSeqId": " ",
    "varianceReasonId": ""
  }
}
```
Sample: 
```
{
  {
    "sku": "2602",
    "quantity": -1,
    "externalFacilityId": "WH",
    "locationSeqId": "10000",
    "varianceReasonId": "POS_SALE"
  }
}
```

| Parameters       | Description                                            | Required (Y/N) |
|------------------|--------------------------------------------------------|----------------|
| `sku`            | The SKU of the product                                 | Y              |
| `quantity`   | The variance in inventory quantity(delta)                       | Y              |
| `externalFacilityId` | The external facility ID where inventory item needs to be updated | Y |
| `locationSeqId` | The location ID in the facility where inventory item needs to be updated | Y |
| `varianceReasonId` | The ID of the reason that caused variance in inventory | Y              |

Table of valid variance reasons and their IDs: 
  
| Variance Reason ID | Description |
| --- | --- |
| `MISMATCH` | Inventory does not match the available SKU |
| `NOT_IN_STOCK` | SKU is not available |
| `NO_VARIANCE_LOG` | Use to pass null variance where variance field is required but not used |
| `REJ_RSN_DAMAGED` | Ordered SKU is rejected due to inventory damage |
| `POS_SALE` | Inventory consumed by sales made on an external point of sale system in the store |
| `VAR_DAMAGED` | Reduce damaged inventory from available quantity |
| `VAR_LOST` | SKU inventory is lost |
| `VAR_FOUND` | Lost SKU inventory is found |
| `WORN_DISPLAY` | SKU inventory is worn and unsuable from being on display |
| `VAR_MANUAL` | SKU inventory adjustment is done manually |

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
    "quantity": ,
    "externalFacilityId": "",
    "locationSeqId": "",
    "varianceReasonId": ""
  },
  "webSiteId": ""
}
```

Sample: 
```
{
  {
    "sku": "2602",
    "quantity": -1 ,
    "externalFacilityId": "WH",
    "locationSeqId": "10000",
    "varianceReasonId": "POS_SALE"
  },
  "webSiteId": "API"
}
```
