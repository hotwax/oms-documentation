---
description: >-
  Discover how HotWax Commerce fetches a comprehensive list of outstanding
  orders brokered at a facility for fulfillment.
---

# Outstanding Orders

Fetches a comprehensive list of all orders that are brokered at a facility for fulfillment. To get the outstanding orders, you will need to call the /solr-query endpoint with the POST method.

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
      "rows": 1,
      "group": true,
      "group.field": "orderId",
      "group.limit": 1000,
      "group.ngroups": true,
      "defType": "edismax",
      "q.op": "AND",
      "qf": "orderId"
    },
    "query": "(* *)",
    "filter" : [
      "docType: OISGIR",
      "quantityNotAvailable: 0",
      "orderTypeId: SALES_ORDER",
      "orderStatusId: ORDER_APPROVED",
      "isPicked: N",
      "-shipmentMethodTypeId: STOREPICKUP",
      "-fulfillmentStatus: Cancelled", 
      "facilityId: NN_WH"
    ],
  }
}
```

| Parameter              | Description                                                                                                                                       | Required (Y/N) |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `rows`                 | The number of groups.                                                                                                                             | No             |
| `group`                | Filter to group orders.                                                                                                                           | Yes            |
| `group.field`          | The field to be grouped.                                                                                                                          | Yes            |
| `group.limit`          | The maximum number of items allowed in the group.                                                                                                 | Yes            |
| `group.ngroups`        | The number of groups that have matched the query in the results. The default value is false.                                                      | No             |
| `defType`              | Selects the query parser to be used to process the query.                                                                                         | No             |
| `q.op`                 | Specifies the default operator for query expressions, overriding the default operator specified in the Schema. Possible values are "AND" or "OR". | No             |
| `qf`                   | The query fields.                                                                                                                                 | No             |
| `docType`              | Reference index.                                                                                                                                  | No             |
| `quantityNotAvailable` | The quantity of the item that is not available.                                                                                                   | Yes            |
| `orderTypeId`          | The ID of the order type in HotWax.                                                                                                               | Yes            |
| `orderStatusId`        | The ID of the order status in HotWax.                                                                                                             | Yes            |
| `isPicked`             | The status of the order if picked or not. Default value: N.                                                                                       | No             |
| `shipmentMethodTypeId` | The ID of the shipment method type.                                                                                                               | No             |
| `fulfillmentStatus`    | The status of fulfilment.                                                                                                                         | No             |
| `facilityId`           | The ID of the facility.                                                                                                                           | No             |

## Response

### Header

#### Body

```
{
  "grouped": {
    "orderId": {
      "matches": 58,
      "ngroups": 41,
      "groups": [
        {
          "groupValue": "NN11323",
          "doclist": {
            "numFound": 2,
            "start": 0,
            "docs": [
              {
                "orderId": "NN11323",
                "orderItemSeqId": "00001",
                "shipGroupSeqId": "00001",
                "inventoryItemId": "11846",
                "reservedDatetime": "2020-08-04T11:13:08.265Z",
                "itemQuantity": 1.0,
                "quantityNotAvailable": 0.0,
                "productId": "11993",
                "keywordSearchText": [
                    "11993",
                    "Erika Running Short-32-Red"
                ],
                "productName": "Erika Running Short-32-Red",
                "spellchecker": "Erika Running Short-32-Red",
                "productSku": "WSH12-32-Red",
                "virtualProductName": "Erika Running Short",
                "uniqueOrderItemsCount": 2.0,
                "isPicked": "N",
                "fulfillmentStatus": "Created",
                "orderDate": "2020-08-04T11:13:05.001Z",
                "orderTypeId": "SALES_ORDER",
                "productStoreId": "NN_ECOM_STORE",
                "orderStatusId": "ORDER_APPROVED",
                "customerId": "10333",
                "customerName": "Mohammad Kathawala",
                "shipmentMethodTypeId": "STANDARD",
                "shipmentMethodTypeDesc": "Standard",
                "shipmentMethodTypeSeqNum": 5.0,
                "facilityId": "NN_WH",
                "facilityName": "California Warehouse",
                "facilityTypeId": "WAREHOUSE",
                "companyIds": [
                    "NN_COMPANY"
                ],
                "orderIdentifications": [
                    "DC_ORDER_ID/106605"
                ],
                "docType": "OISGIR",
                "identifier": "NN11323-00001-00001-11846",
                "docType-identifier": "OISGIR-NN11323-00001-00001-11846",
                "_version_": 1720557058047082496
              }
            ]
          }
        }
      ]
    }
  }
}

```

| Parameter                  | Description                                                    |
| -------------------------- | -------------------------------------------------------------- |
| `orderId`                  | The ID of the order.                                           |
| `orderItemSeqId`           | The ID of the order item sequence.                             |
| `shipGroupSeqId`           | The ID of the ship group sequence.                             |
| `inventoryItemId`          | The ID of the inventory item.                                  |
| `reservedDatetime`         | The time and date of reservation.                              |
| `itemQuantity`             | The item quantity.                                             |
| `productId`                | The ID of the product in HotWax.                               |
| `keywordSearchText`        | The keyword used for search.                                   |
| `productName`              | The name of the product.                                       |
| `spellchecker`             | The spellchecker.                                              |
| `productSku`               | The SKU ID of the product.                                     |
| `virtualProductName`       | The name of the parent product.                                |
| `uniqueOrderItemsCount`    | The count of the unique order items.                           |
| `isPicked`                 | Indicates whether the item has been picked or not.             |
| `fulfillmentStatus`        | The current fulfillment status of the item.                    |
| `orderDate`                | The date when the order was placed.                            |
| `orderTypeId`              | The ID of the order type.                                      |
| `productStoreId`           | The ID of the product store.                                   |
| `orderStatusId`            | The ID of the order status.                                    |
| `customerId`               | The ID of the customer.                                        |
| `customerName`             | The name of the customer.                                      |
| `shipmentMethodTypeId`     | The ID of the shipment method type.                            |
| `shipmentMethodTypeDesc`   | The description of the shipment method type.                   |
| `shipmentMethodTypeSeqNum` | The sequence number of the shipment method type.               |
| `facilityId`               | The ID of the facility.                                        |
| `facilityName`             | The name of the facility.                                      |
| `facilityTypeId`           | The ID of the facility type.                                   |
| `companyIds`               | The IDs of the companies associated with the order.            |
| `orderIdentifications`     | The secondary unique identifier of the order.                  |
| `docType`                  | The type of the document.                                      |
| `identifier`               | The identifier of the document.                                |
| `docType-identifier`       | The type and identifier of the document separated by a hyphen. |
