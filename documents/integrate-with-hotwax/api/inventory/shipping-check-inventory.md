# Shipping Check Inventory API

## Overview

The Shipping Ckeck Inventory API allows to retrive the inventory details for the products at specific locations. By calling the `/checkShippingInventory` endpoint of our next generation OMS with the POST/GET method, you can check the availability of the inventory available for shipping.

## Request

### Endpoint

**URL:** `https://<host>/rest/s1/ofbiz-oms-usl/checkShippingInventory`

This API uses our next generation OMS instance. All traditional instances have access to this next generation OMS by replacing "oms" with "maarg" in the host name.

**Production**

Current Name: `demo-oms`

Maarg Name: `demo-maarg`

**Example:** `https://demo-maarg.hotwax.io/rest/s1/ofbiz-oms-usl/checkShippingInventory`

**UAT**

Current Name: `demo-uat`

Maarg Name: `demo-maarg-uat`

### Methods

* GET: When passing params in the URL
* POST: When passing JSON body in the request

### Headers

Content-Type: application/json

### Sample Request Body

#### Single product and facility

**Using POST Method**
```json
{
  "productStoreId": "STORE",
  "productIds": "11855",
  "internalNames": "XS-BLACK",
  "facilityIds": "114",
  "inventoryGroupId": "SHOPIFY_FAC_GRP"
}
```

**Using GET Method**
```
https://<host>/rest/s1/ofbiz-oms-usl/checkShippingInventory?productStoreId=STORE&productIds=11855&internalNames=XS-BLACK&facilityIds=114&inventoryGroupId=SHOPIFY_FAC_GRP
```

#### Multiple products and facilities

**Using POST Method**
```json
{
  "productStoreId": "STORE",
  "productIds": ["11855", "11856", "118557"],
  "internalNames": ["XS-BLACK", "S-BLACK", "M-BLACK"],
  "facilityIds": ["114", "115", "116"],
  "inventoryGroupId": "SHOPIFY_FAC_GRP"
}
```

**Using GET Method**
```
https://<host>/rest/s1/ofbiz-oms-usl/checkShippingInventory?productStoreId=STORE&productIds=11855,11856,118557&internalNames=XS-BLACK,S-BLACK,M-BLACK&facilityIds=114,115,116&inventoryGroupId=SHOPIFY_FAC_GRP
```

### Body Parameters

| Parameter          | Description                                                               | Example             |
| ------------------ | ------------------------------------------------------------------------- | ------------------- |
| `productStoreId`   | The ID of the product store                                               | `"STORE"`           |
| `productIds`       | HotWax Commerce internal product ID                                       | `"11855"`           |
| `internalNames`    | The well-known ID of a product, usually UPC or SKU based on configuration | `"XS-BLACK"`        |
| `facilityIds`      | The HotWax Commerce facility ID where product inventory is located        | `"114"`             |
| `inventoryGroupId` | HotWax Commerce inventory group ID                                        | `"SHOPIFY_FAC_GRP"` |

**Notes**
* Either `productIds` and `internalNames` value is required, If both values are passed, then the value of `productIds` will be honored.
* This API does not necessarily require the `inventoryGroupId` and `facilityIds`, If both values are not provided API will return an inventory of products at all the locations.

**Select Products**

Products can be queried in the inventory API by both their HotWax ID or their internalName. The internal name refers to the UPC or SKU, whichever one is selected as a primary identifier during product configuration. While both fields are optional, one is required to obtain a result.

**productStoreId**

Product Store represents a brand in HotWax Commerce. To obtain possible values, log into HotWax Commerce and view the product store list page for possible values.

**inventoryGroupId**

[Inventory groups](https://docs.hotwax.co/documents/v/system-admins/administration/facilities/manage-groups) are used to segregate inventory for different channels of sales. Obtain the inventory group ID by logging into HotWax Commerce Facilities App and browsing inventory groups.

## Response

### Status Code

HTTP/1.1 200 OK

### Headers

Content-Type: application/json

### Body

#### Success ATP Response

```json
{
    "resultList": [
        {
            "productId": "10560",
            "totalAtp": 13,
            "totalComputedAtp": 13,
            "totalSafetyStock": 0.0,
            "facilities": [
                {
                    "facilityId": "100",
                    "safetyStock": 0.0,
                    "computedAtp": 6,
                    "atp": 6
                },
                {
                    "facilityId": "57",
                    "safetyStock": 0.0,
                    "computedAtp": 7,
                    "atp": 7
                }
            ]
        }
    ]
}
```

#### ATP zeroed out due to the inventory checks for products at locations

```json
{
    "resultList": [
        {
            "productId": "10560",
            "totalAtp": 0.0,
            "totalComputedAtp": 0.0,
            "totalSafetyStock": 0.0,
            "facilities": [
                {
                    "decisionReasonDesc": "The inventory for product 10560 at facility RETAIL_WAREHOUSE is not available",
                    "facilityId": "RETAIL_WAREHOUSE",
                    "safetyStock": 0.0,
                    "computedAtp": 0.0,
                    "atp": 0.0,
                    "decisionReason": "ProductFacility"
                }
            ]
        }
    ]
}
```

#### ATP zeroed out due to brokering being disabled for the channel globally

```json
{
    "resultList": [
        {
            "productId": "10560",
            "inventoryGroupId": "FAC_GRP",
            "decisionReason": "AllowBrokeringInventoryGroup",
            "decisionReasonDesc": "Brokering of the product 10560 for the inventory group FAC_GRP is not allowed globally."
        }
    ]
}
```

### Possible `decisionReason` explanation

| Decision Reason                | Description                                                                                      |
| ------------------------------ | ------------------------------------------------------------------------------------------------ |
| `ProductStore`                 | The facility is not associated with the product store.                                           |
| `ProductFacility`              | The facility does not have PickUp enabled. Add it to the PickUp facility group to enable pickup. |
| `InventoryGroup`               | The facility where the product is located does not cater its inventory to that channel.          |
| `AllowBrokeringInventoryGroup` | Brokering is not allowed globally for the given inventory group.                                 |
| `AllowBrokeringFacility`       | The facility where the product inventory is located is disabled for brokering.                   |

Each Decision Reason also comes with a detailed log of why the given check failed.

1. ProductStore - The facility ${facilityId} is not associated with Product Store ${productStoreId}.
2. Product Facility - The inventory for product ${productId} at facility ${facilityId} is not available.
3. Inventory Group - The facility ${facilityId} where the product ${productId} is located does not cater its inventory to that channel.
4. Inventory Group allowBrokering - Brokering of the product ${productId} for the inventory group ${inventoryGroupId} is not allowed globally.
5. Product Facility allowBrokering - The facility ${facilityId} where the product ${productId} inventory is located is disabled to cater to shipping orders.
