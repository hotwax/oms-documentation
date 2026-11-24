# BOPIS Check Inventory API

## Overview

The BOPIS (Buy Online, Pick-up In Store) Check Inventory API allows you to retrieve stock details for products at specific locations. By calling the `/checkBopisInventory` endpoint with the POST method, you can check the availability of BOPIS inventory.

# Request

### Endpoint

**URL:** `https://<host>/rest/s1/ofbiz-oms-usl/checkBopisInventory`

Use the OMS API host supplied for the target production or UAT environment. Confirm it with the integration owner; do not derive an API host by changing an instance name.

**Example:** `https://demo-maarg.hotwax.io/rest/s1/ofbiz-oms-usl/checkBopisInventory`

This example uses the demonstration OMS API host. Replace the host with the one configured for your environment and retain the endpoint path.

### Instance naming examples

| Environment | Legacy OMS instance | OMS API instance |
| --- | --- | --- |
| Production | `demo-oms` | `demo-maarg` |
| UAT | `demo-uat` | `demo-maarg-uat` |

These names illustrate the demonstration environment's naming convention. Confirm your own instance names and API host with the integration owner; the naming pattern alone does not prove that an API instance exists or is connected.


### Method

GET (Recommended if your library supports sending a body in a GET request)
POST

### Headers

Content-Type: application/json

### Sample Request Body

#### Single product and facility

```json
{
  "productStoreId": "STORE",
  "productIds": ["11855"],
  "internalNames": ["XS-BLACK"],
  "facilityIds": ["114"],
  "inventoryGroupId": "SHOPIFY_FAC_GRP"
}
```

#### Multiple products and facilities

```json
{
  "productStoreId": "STORE",
  "productIds": ["11855","11856","118557"],
  "internalNames": ["XS-BLACK","S-BLACK","M-BLACK"],
  "facilityIds": ["114","115","116"],
  "inventoryGroupId": "SHOPIFY_FAC_GRP"
}
```

### Body Parameters

| Parameter        | Description                                             | Example             |
|------------------|---------------------------------------------------------|---------------------|
| `productStoreId` | The ID of the product store                             | `"STORE"`           |
| `productIds`      | List of HotWax Commerce internal product IDs             | `["11855"]`         |
| `internalNames`   | List of product internal names, usually UPC or SKU based on configuration | `["XS-BLACK"]` |
| `facilityIds`     | List of HotWax Commerce facility IDs where product inventory is located | `["114"]` |
| `inventoryGroupId` | HotWax Commerce inventory group ID                     | `"SHOPIFY_FAC_GRP"` |

`productStoreId`, `inventoryGroupId`, and `facilityIds` are required. Provide either `productIds` or `internalNames` as a list, even when querying a single product. If both productIds and internalNames are passed, the value of productIds will be honored.

**Select Products**

Products can be queried in the inventory API by both their HotWax ID or their internalName. The internal name refers to the UPC or SKU, whichever one is selected as a primary identifier during product configuration. While both fields are optional, one is required to obtain a result.

**productStoreId**

Product Store represents a brand in HotWax Commerce. To obtain possible values, log into HotWax Commerce and view the product store list page for possible values.

**inventoryGroupId**
Inventory groups are used to segregate inventory for different channels of sales. Obtain the inventory group ID by logging into HotWax Commerce Facilities App and browsing inventory groups.

## Response

### Status Code

HTTP/1.1 200 OK

### Headers

Content-Type: application/json

### Body

The response contains a `resultList` entry for each requested product and facility combination. Examples below show one entry. Use positive `computedAtp` for pickup availability; a failed eligibility check returns zero and a decision reason.

#### ATP zeroed out due to the inventory checks

```json
{
  "resultList": [
    {
      "productId": "11855",
      "facilityId": "114",
      "atp": 0.0,
      "safetyStock": 0.0,
      "computedAtp": 0.0,
      "decisionReason": "AllowPickupFacility",
      "decisionReasonDesc": "Pickup is not allowed for product 11855 at facility 114."
    }
  ]
}
```

### Possible `decisionReason` explanation

| Decision Reason             | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| `ProductStore`              | The facility is not associated with the product store.                     |
| `PickUpFacility`          | The facility does not have PickUp enabled. Add it to the PickUp facility group to enable pickup.        |
| `InventoryGroup`            | The facility where the product is located does not cater its inventory to that channel. |
| `AllowPickupInventoryGroup` | Pickup is not allowed globally for the inventory group.                     |
| `AllowPickupFacility`       | The facility where the product inventory is located is disabled for catering to BOPIS orders.

Each Decision Reason also comes with a detailed log of why the given check failed.

1. ProductStore - Facility ${facilityId} is not associated with Product Store ${productStoreId}.
2. PickUp Facility - Facility ${facilityId} is not a member of a PICKUP Facility Group.
3. Inventory Group - Facility ${facilityId} is not a member of ${inventoryGroupId} channel.
4. Product Inventory Group allowPickup - Pickup is not allowed for product ${productId} ${inventoryGroupId} inventory group.
5. Product Facility allowPickup - Pickup is not allowed for product ${productId} at facility ${facilityId}.

### ATP

```json
{
  "resultList": [
    {
      "productId": "11855",
      "facilityId": "114",
      "atp": 50.0,
      "safetyStock": 5.0,
      "computedAtp": 45.0
    }
  ]
}
```
