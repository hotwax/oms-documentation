---
description: >-
  Discover how to retrieve stock details for products at specific locations with
  the 'Check Inventory' subcategory.
---

# Check Inventory

Get the stock details of the product on the specific locations. To get the stock details, you will need to call the `/checkInventory` endpoint with the POST method.

## Request

### End Point

`https://<host>/api/checkInventory`

Example: https://demo-oms.hotwax.io/api/checkInventory

### Header

Content-Type: application/json

### Body

In case of checking a product's inventory at multiple facility.

```
{
  "filters": {
    "sku": "<sku>",
    "facilityId": ["<facilityId1>", "<facilityId2>", "<facilityId3>"],
    "facilityId_op": "in"
  }
}
```

In case of checking multiple product's inventory at single facility.

```
{
  "filters": {
    "sku": ["<sku1>", "<sku2>", "<sku3>"],
    "sku_op": "in",
    "facilityId": "<facilityId>"
  }
}
```

**Sample**

```
{
  "filters": {
    "sku": "MSH02-32-Black",
    "facilityId": "STORE_7"
  }
}
```

| Parameter Name                                            | Description                                                        | Required (Y/N) |
| --------------------------------------------------------- | ------------------------------------------------------------------ | -------------- |
| `sku`                                                     | The SKU of the product                                             | N              |
| `sku_op`                                                  | The operator to be used for the sku field                          | N              |
| `productId`                                               | HotWax Commerce internal product Id                                | N              |
| `facilityId`                                              | The HotWax Commerce facility Id where product inventory is located | N              |
| `facilityId_op`                                           | The operator to be used for the facility Id                        | N              |
| `sku_op`                                                  | The operator to be used for the sku field                          | N              |
| Note: It is required to pass either `sku` or `productId`. |                                                                    |                |

## Response

### Status Code

HTTP/1.1 200 OK

### Headers

Content-Type: application/json

### Body

```
{
  "count": "1",
  "docs": [
    {
      "facilityId": "STORE_7",
      "atp": 1.000000
    }
  ]
}
```

| Parameter Name | Description                                       |
| -------------- | ------------------------------------------------- |
| `count`        | Results count                                     |
| `docs`         | The array of results found                        |
| `facilityId`   | The Id of the facility in HotWax                  |
| `atp`          | The available to promise inventory of the product |
