---
description: >-
  Discover how to retrieve online ATP for products at specific locations with
  the 'getProductOnlineAtp' API
---

# Get Online ATP of Product

Store Associates need to access the online Available to Promise (ATP) of products on their POS systems for sendsales orders. The `c` API facilitates retrieving the online ATP of a product from all locations except the one it's being ordered from. To fetch the online ATP details, make a POST request to the `/getProductOnlineAtp` endpoint.

## Request

### End Point
`https://<host>/api/service/getProductOnlineAtp`

**Example**
`https://demo-oms.hotwax.io/api/service/getProductOnlineAtp`

### Header

Content-Type: application/json

### Body

```json
{
  "idType": "<SKU>",
  "idValue": "<SKU>",
  "productStoreId": "<STORE_ID>",
  "conditionMap": {
    "externalFacilityId_value": "<External Facility ID>",
    "externalFacilityId_op": "<operator>"
  }
}
```

### Sample

```json
{
  "idType": "SKU",
  "idValue": "MSH02-32-Black",
  "productStoreId": "DEMO_STORE",
  "conditionMap": {
    "externalFacilityId_value": "101",
    "externalFacilityId_op": "notEqual"
  }
}
```

### Parameters

| Parameter Name          | Description                                                                   |
|-------------------------|-------------------------------------------------------------------------------|
| idType                  | Specifies the type of identifier being used (e.g., "SKU")                     |
| idValue                 | The specific value of the SKU being referenced                                |
| productStoreId          | Identifies the store or location within the system where the product is available |
| conditionMap            | Contains conditions for filtering or specifying attributes related to the request |
| externalFacilityId_value | The value of the external facility ID                                         |
| externalFacilityId_op   | The operation or condition applied to the external facility ID (e.g., "notEqual") |

## Response

### Status Code

HTTP/1.1 200 OK

### Headers

Content-Type: application/json

### Body

```json
{
    "onlineAtp": "<Value>"
}
```
### Sample

```json
{
    "onlineAtp": 100
}
```

## Parameters

| Parameter Name | Description                                         |
|----------------|-----------------------------------------------------|
| onlineAtp      | The online available to promise inventory of the product |
