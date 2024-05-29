---
description: >-
  Discover how the 'In Progress Orders' API fetches a comprehensive list of
  orders currently in the process of pickup for fulfillment.
---

# In Progress Orders

Fetches a comprehensive list of all orders which are in process of pickup for fulfillment. To get in progress orders, you will need to call the /solr-query endpoint with the POST method.

## Request

### Endpoint

`https://<host>/api/solr-query`

Example: https://demo-oms.hotwax.io/api/solr-query

### Header

#### Body

```
{
  "json": {
    "params": {
      "rows": "10",
      "sort": "orderDate asc",
      "group": true,
      "group.field": "picklistBinId",
      "group.limit": 1000,
      "group.ngroups": true,
      "q.op": "AND",
      "start": 0
    },
    "query": "(*:*)",
    "filter": [
      "docType: OISGIR",
      "picklistItemStatusId: PICKITEM_PENDING",
      "-fulfillmentStatus: Rejected",
      "-shipmentMethodTypeId: STOREPICKUP",
      "facilityId: Store_1",
      "productStoreId: STORE"
    ],
  }
}
```

**Query Parameters**

| Parameter       | Description                                                                                                                                      | Required (Y/N) |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| `rows`          | The number of groups                                                                                                                             | No             |
| `sort`          | The order of search results                                                                                                                      | No             |
| `group`         | Filter to group orders                                                                                                                           | Yes            |
| `group.field`   | The field to be grouped                                                                                                                          | Yes            |
| `group.limit`   | The maximum number of items allowed in the group                                                                                                 | Yes            |
| `group.ngroups` | The number of groups that have matched the query in the results. The default value is false                                                      | No             |
| `defType`       | Selects the query parser to be used to process the query                                                                                         | No             |
| `q.op`          | Specifies the default operator for query expressions, overriding the default operator specified in the Schema. Possible values are "AND" or "OR" | No             |
| `qf`            | The query fields                                                                                                                                 | No             |
| `docType`       | Reference index                                                                                                                                  | No             |
| `start`         | Index page number                                                                                                                                | No             |

**API Parameters**

| Parameter              | Description                                              | Required (Y/N) |
| ---------------------- | -------------------------------------------------------- | -------------- |
| `orderTypeId`          | The ID of the order type in HotWax                       | Yes            |
| `picklistItemStatusID` | The picking status of the order item                     | No             |
| `shipmentMethodTypeId` | The ID of the shipment method type                       | No             |
| `fulfillmentStatus`    | The status of fulfillment which needs to be neglected    | No             |
| `facilityId`           | The ID of the facility where fulfillment is taking place | No             |

## Response

### Header

#### Body

```
{
  "response": {
    "numFound": 2,
    "start": 0,
    "docs": [
      {
        "orderId": "NN11235",
        "orderItemSeqId": "00001",
        "shipGroupSeqId": "00001",
        "inventoryItemId": "10539",
        "reservedDatetime": "2020-07-28T10:06:15.497Z",
        "itemQuantity": 1.0,
        "quantityNotAvailable": 0.0,
        "productId": "10575",
        "keywordSearchText": [
          "10575",
          "Strike Endurance Tee-XL-Red"
        ],
        "productName": "Strike Endurance Tee-XL-Red",
        "spellchecker": "Strike Endurance Tee-XL-Red",
        "productSku": "MS08-XL-Red",
        "virtualProductName": "Strike Endurance Tee",
        "uniqueOrderItemsCount": 2.0,
        "isPicked": "Y",
        "picklistBinId": "11234",
        "picklistId": "11070",
        "picklistItemStatusId": "PICKITEM_PENDING",
        "picklistItemStatusDesc": "Pending",
        "fulfillmentStatus": "InProgress",
        "orderDate": "2020-07-28T10:06:11.087Z",
        "orderTypeId": "SALES_ORDER",
        "productStoreId": "NN_ECOM_STORE",
        "orderStatusId": "ORDER_APPROVED",
        "customerId": "10460",
        "customerName": "John Wick",
        "shipmentMethodTypeId": "SECOND_DAY",
        "shipmentMethodTypeDesc": "Second Day",
        "shipmentMethodTypeSeqNum": 7.0,
        "facilityId": "NN_WH",
        "facilityName": "California Warehouse",
        "facilityTypeId": "WAREHOUSE",
        "companyIds": [
          "NN_COMPANY"
        ],
        "orderIdentifications": [
          "DC_ORDER_ID/106238"
        ],
        "docType": "OISGIR",
        "identifier": "NN11235-00001-00001-10539",
        "docType-identifier": "OISGIR-NN11235-00001-00001-10539",
        "_version_": 1721740067563634688
      }
    ]
  }
}
```

| Parameter                  | Description                                         |
| -------------------------- | --------------------------------------------------- |
| `orderId`                  | The ID of the order.                                |
| `orderItemSeqId`           | The ID of the order item sequence.                  |
| `shipGroupSeqId`           | The ID of the ship group sequence.                  |
| `inventoryItemId`          | The ID of the inventory item.                       |
| `reservedDatetime`         | The time and date of reservation.                   |
| `itemQuantity`             | The item quantity.                                  |
| `quantityNotAvailable`     | The item quantity not available at the location.    |
| `productId`                | The ID of the product in HotWax.                    |
| `keywordSearchText`        | The keyword used for search.                        |
| `productName`              | The name of the product.                            |
| `spellchecker`             | The spellchecker.                                   |
| `productSku`               | The SKU ID of the product.                          |
| `virtualProductName`       | The name of the parent product.                     |
| `uniqueOrderItemsCount`    | The count of the unique order items.                |
| `picklistBinId`            | The ID of the picklist bin.                         |
| `picklistId`               | The ID of the picklist.                             |
| `picklistItemStatusId`     | The ID of the picklist item status.                 |
| `picklistItemStatusDesc`   | The description of the picklist item status.        |
| `fulfillmentStatus`        | The current fulfillment status of the item.         |
| `orderDate`                | The date when the order was placed.                 |
| `orderTypeId`              | The ID of the order type.                           |
| `productStoreId`           | The ID of the product store.                        |
| `orderStatusId`            | The ID of the order status.                         |
| `customerId`               | The ID of the customer.                             |
| `customerName`             | The name of the customer.                           |
| `shipmentMethodTypeId`     | The ID of the shipment method type.                 |
| `shipmentMethodTypeDesc`   | The description of the shipment method type.        |
| `shipmentMethodTypeSeqNum` | The sequence number of the shipment method type.    |
| `facilityId`               | The ID of the facility.                             |
| `facilityName`             | The name of the facility.                           |
| `facilityTypeId`           | The ID of the facility type.                        |
| `companyIds`               | The IDs of the companies associated with the order. |
| `orderIdentifications`     | The secondary unique identifier of the order.       |
| `docType`                  | The type of the document.                           |
| `identifier`               | The identifier of the document.                     |
| `docType-identifier`       | The type and identifier of the document.            |
