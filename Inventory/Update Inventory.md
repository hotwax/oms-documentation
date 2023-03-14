# Update Inventory API

Updates the inventory of products in HotWax. To update inventory you will need to call the endpoint with the POST method. The actual inventory is changed by getting the inventory variance in the input parameter.

Example: 

```
Inventory in HotWax = 10
Variance = -2
Updated inventory in HotWax = 10 - 2 = 8
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
    "Quantity": ,
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
    "Quantity": -1,
    "externalFacilityId": "WH",
    "locationSeqId": "10000",
    "varianceReasonId": "POS_SALE"
  }
}
```

| Parameters       | Description                                            | Required (Y/N) |
|------------------|--------------------------------------------------------|----------------|
| `sku`            | The SKU of the product                                 | Y              |
| `Quantity`   | The variance in inventory quantity(delta)                       | Y              |
| `externalFacilityId` | The external facility ID where inventory item need to be updated | Y |
| `locationSeqId` | The location ID in the facility where inventory item need to be updated | Y |
| `varianceReasonId` | The ID of the reason that caused variance in inventory | Y              |

The table below shows the variance reasons that can occur in a external system: 
  
| Variance Reason ID | Description |
| --- | --- |
| `MISMATCH` | Ordered SKU does not match the available SKU |
| `NOT_IN_STOCK` | Ordered SKU is not available |
| `NO_VARIANCE_LOG` | Ordered SKU is rejected without any explanation or inventory adjustment |
| `REJ_RSN_DAMAGED` | Ordered SKU is rejected due to inventory damage |
| `POS_SALE` | Sale is made on the point of sale system in the store |
| `VAR_DAMAGED` | Damaged inventory for a SKU is found in the store |
| `VAR_FOUND` | Lost SKU inventory is found |
| `VAR_LOST` | SKU inventory is lost |
| `VAR_MANUAL` | SKU Inventory adjustment is done manually |
| `WORN_DISPLAY` | Ordered SKU’s inventory is on a worn display |

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
    "Quantity": ,
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
    "Quantity": -1 ,
    "externalFacilityId": "WH",
    "locationSeqId": "10000",
    "varianceReasonId": "POS_SALE"
  },
  "webSiteId": "API"
}
```
