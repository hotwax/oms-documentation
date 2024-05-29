---
description: >-
  Explore our 'Ready To Ship Items' page for a comprehensive list of orders
  picked, packed, and ready to delight your customers.
---

# Ready To Ship Items

Fetches a comprehensive list of all orders items which are picked, packed and ready to ship to customers. To get ready to ship orders, you will need to call the /solr-query endpoint with the POST method.

## Request

### Endpoint

`https://<host>/api/solr-query`

Example: https://demo-oms.hotwax.io/api/solr-query

### Headers

#### Body

```
{
  "json": {
    "params": {
      "rows": 1,
      "sort": "reservedDatetime desc",
      "group": true,
      "group.field": "orderId",
      "group.limit": 1000,
      "group.ngroups": true,
      "defType": "edismax",
      "q.op": "AND",
      "qf": "orderId"
    },
    "query": "(* *)",
    "filter": [
      "docType:OISGIR",
      "picklistItemStatusId: (PICKITEM_PICKED OR (PICKITEM_COMPLETED AND itemShippedDate: [NOW/DAY TO NOW/DAY+1DAY]))",
      "-shipmentMethodTypeId : STOREPICKUP",
      "facilityId: NN_WH"
    ],
    "facet": {
      "shipmentMethodTypeIdFacet": {
        "excludeTags": "shipmentMethodTypeIdFilter",
        "field": "shipmentMethodTypeId",
        "mincount": 1,
        "limit": -1,
        "sort": "index",
        "type": "terms",
        "facet": {
          "ordersCount": "unique(orderId)"
        }
      }
    }
  }
}
```

| Parameter                   | Description                                                                                                                                       | Required (Y/N) |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `rows`                      | The number of groups.                                                                                                                             | No             |
| `sort`                      | Sort data based on attributes.                                                                                                                    | No             |
| `group`                     | Filter to group orders.                                                                                                                           | Yes            |
| `group.field`               | The field to be grouped.                                                                                                                          | Yes            |
| `group.limit`               | The maximum number of items allowed in the group.                                                                                                 | Yes            |
| `group.ngroups`             | The number of groups that have matched the query in the results. The default value is false.                                                      | No             |
| `defType`                   | Selects the query parser to be used to process the query.                                                                                         | No             |
| `q.op`                      | Specifies the default operator for query expressions, overriding the default operator specified in the Schema. Possible values are "AND" or "OR". | No             |
| `qf`                        | The query fields.                                                                                                                                 | No             |
| `filter`                    | Filters record based on parameters passed.                                                                                                        | No             |
| `itemShippedDate`           | The filter to get orders based on their shipped date.                                                                                             | -              |
| `docType`                   | Reference index.                                                                                                                                  | No             |
| `start`                     | Index page number.                                                                                                                                | No             |
| `orderTypeId`               | The ID of the order type in HotWax.                                                                                                               | Yes            |
| `picklistItemStatusID`      | The status of the order if picked or not. Default value: N.                                                                                       | No             |
| `-shipmentMethodTypeId`     | The ID of the shipment method type which needs to be neglected.                                                                                   | No             |
| `shipmentMethodTypeIdFacet` | The name of the facet.                                                                                                                            | No             |
| `excludeTags`               | Removes specific tags from facet counts.                                                                                                          | No             |
| `mincount`                  | Specifies the minimum counts required for a facet field to be included in the response.                                                           | No             |
| `limit`                     | Controls how many constraints should be returned for each facet.                                                                                  | No             |
| `sort`                      | Controls how faceted results are sorted.                                                                                                          | No             |
| `type`                      | -                                                                                                                                                 | No             |
| `facet`                     | The arrangement of search results into categories based on indexed terms.                                                                         | No             |
| `ordersCount`               | The count of orders.                                                                                                                              | No             |
| `-fulfillmentStatus`        | The status of fulfilment which needs to be neglected.                                                                                             | No             |
| `facilityId`                | The ID of the facility.                                                                                                                           | No             |

## Response

#### Body

```
{
  "grouped": {
    "orderId": {
      "matches": 207,
      "ngroups": 143,
      "groups": [
        {
          "groupValue": "NN13172",
          "doclist": {
            "numFound": 2,
            "start": 0,
            "docs": [
              {
                "orderId": "NN13172",
                "orderItemSeqId": "00002",
                "shipGroupSeqId": "00001",
                "inventoryItemId": "10002",
                "reservedDatetime": "2021-12-29T11:49:12.582Z",
                "itemQuantity": 1.0,
                "quantityNotAvailable": 0.0,
                "productId": "10003",
                "keywordSearchText": [
                  "10003",
                  "Chaz Kangeroo Hoodie-XS-Orange"
                ],
                "productName": "Chaz Kangeroo Hoodie-XS-Orange",
                "spellchecker": "Chaz Kangeroo Hoodie-XS-Orange",
                "productSku": "MH01-XS-Orange",
                "virtualProductName": "Chaz Kangeroo Hoodie",
                "uniqueOrderItemsCount": 2.0,
                "isPicked": "Y",
                "picklistBinId": "11218",
                "picklistId": "11061",
                "picklistItemStatusId": "PICKITEM_PICKED",
                "picklistItemStatusDesc": "Picked",
                "fulfillmentStatus": "InProgress",
                "orderDate": "2021-12-29T11:48:56.395Z",
                "orderTypeId": "SALES_ORDER",
                "productStoreId": "NN_ECOM_STORE",
                "orderStatusId": "ORDER_APPROVED",
                "customerId": "11302",
                "customerName": "Aditya Patel",
                "maySplit": "N",
                "shipmentMethodTypeId": "PR_OVERNIGHT",
                "shipmentMethodTypeDesc": "Priority Overnight",
                "shipmentMethodTypeSeqNum": 13.0,
                "facilityId": "NN_WH",
                "facilityName": "California Warehouse",
                "facilityTypeId": "WAREHOUSE",
                "companyIds": [
                  "NN_COMPANY"
                ],
                "shipmentId": "11920",
                "shipmentStatusId": "SHIPMENT_APPROVED",
                "shipmentCarrierPartyId": "FEDEX",
                "shipmentShipMethodTypeId": "PR_OVERNIGHT",
                "isManifested": "N",
                "manifestContentId": "FEDEX/",
                "docType": "OISGIR",
                "identifier": "NN13172-00002-00001-10002",
                "docType-identifier": "OISGIR-NN13172-00002-00001-10002",
                "_version_": 1722910453124825091
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
| `matches`                  | The results matching the query.                                |
| `ngroups`                  | The number of unique groups in the result set.                 |
| `groupValue`               | The value of the grouped field.                                |
| `numFound`                 | The total number of results found.                             |
| `start`                    | The offset of the first result in the result set.              |
| `orderId`                  | The ID of the order.                                           |
| `orderItemSeqId`           | The ID of the order item sequence.                             |
| `shipGroupSeqId`           | The ID of the ship group sequence.                             |
| `inventoryItemId`          | The ID of the inventory item.                                  |
| `reservedDatetime`         | The date and time of reservation.                              |
| `itemQuantity`             | The quantity of order items.                                   |
| `quantityNotAvailable`     | The quantity of items not available.                           |
| `productId`                | The ID of the product.                                         |
| `keywordSearchText`        | The keyword used for search.                                   |
| `productName`              | The name of the product.                                       |
| `spellchecker`             | The spellchecker used.                                         |
| `productSku`               | The SKU (Stock Keeping Unit) of the product.                   |
| `virtualProductName`       | The name of the virtual product.                               |
| `uniqueOrderItemsCount`    | The count of unique order items.                               |
| `isPicked`                 | The status of picking.                                         |
| `picklistBinId`            | The ID of the picklist bin.                                    |
| `picklistId`               | The ID of the picklist.                                        |
| `picklistItemStatusId`     | The ID of the picklist item status.                            |
| `picklistItemStatusDesc`   | The description of the picklist item status.                   |
| `fulfillmentStatus`        | The status of fulfillment.                                     |
| `orderDate`                | The date when the order was placed.                            |
| `orderTypeId`              | The ID of the order type.                                      |
| `productStoreId`           | The ID of the product store.                                   |
| `orderStatusId`            | The ID of the order status.                                    |
| `customerId`               | The ID of the customer.                                        |
| `customerName`             | The name of the customer.                                      |
| `maySplit`                 | The filter for order splitting.                                |
| `shipmentMethodTypeId`     | The ID of the shipment method type.                            |
| `shipmentMethodTypeDesc`   | The description of the shipment method type.                   |
| `shipmentMethodTypeSeqNum` | The number of the shipment method type in the sequence.        |
| `facilityId`               | The ID of the facility.                                        |
| `facilityName`             | The name of the facility.                                      |
| `facilityTypeId`           | The ID of the facility type.                                   |
| `companyIds`               | The ID of the company.                                         |
| `shipmentId`               | The ID of the shipment.                                        |
| `shipmentStatusId`         | The ID of the shipment status.                                 |
| `shipmentCarrierPartyId`   | The ID of the shipment carrier party.                          |
| `shipmentShipMethodTypeId` | The ID of the shipment method type.                            |
| `isManifested`             | The filter for document manifestation.                         |
| `manifestContentId`        | The ID of the manifest content.                                |
| `docType`                  | The type of the document.                                      |
| `identifier`               | The identifier of the document.                                |
| `docType-identifier`       | The type and identifier of the document separated by a hyphen. |
