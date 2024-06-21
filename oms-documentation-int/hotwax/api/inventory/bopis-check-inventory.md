# BOPIS Check Inventory API 

## Overview
The BOPIS (Buy Online, Pick-up In Store) Check Inventory API allows you to retrieve stock details for products at specific locations. By calling the `/checkBopisInventory` endpoint with the POST method, you can check the availability of BOPIS inventory.


# Request

### Endpoint

**URL:** `https://<host>/api/checkBopisInventory`  

**Example:** `https://demo-oms.hotwax.io/api/checkBopisInventory`

### Method
POST

### Headers

Content-Type: application/json


### Sample Request Body

```json
{
  "productStoreId": "STORE",
  "productId": "11855",
  "facilityId": "114",
  "inventoryGroupId": "SHOPIFY_FAC_GRP"
}
```

### Body Parameters

| Parameter        | Description                                             | Example             |
|------------------|---------------------------------------------------------|---------------------|
| `productStoreId` | The ID of the product store                             | `"STORE"`           |
| `productId`      | HotWax Commerce internal product ID                     | `"11855"`           |
| `facilityId`     | The HotWax Commerce facility ID where product inventory is located | `"114"`             |
| `inventoryGroupId` | HotWax Commerce inventory group ID                     | `"SHOPIFY_FAC_GRP"` |

## Response

### Status Code

HTTP/1.1 200 OK

### Headers

Content-Type: application/json


### Body

#### ATP zeroed out due to the inventory checks

```json
{
  "atp": 0.0,
  "computedAtp": 0.0,
  "decisionReason": "AllowPickupFacility"
}
```

### Possible `decisionReason` explanation

| Decision Reason             | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| `ProductStore`              | The facility holding the product inventory is not associated with the product store.                     |
| `InventoryGroup`            | The facility where the product is located does not cater its inventory to that channel. |
| `AllowPickupInventoryGroup` | Pickup is not allowed globally for the inventory group.                     |
| `AllowPickupFacility`       | The facility where the product inventory is located is disabled for catering to BOPIS orders. |
| `maximumOrderLimit`         | The facility has reached its maximum order limit for the day.               |

### ATP

```json
{
  "atp": 50.0,
  "safetyStock": 5.0,
  "computedAtp": 45.0,
  "decisionReason": ""
}
```
