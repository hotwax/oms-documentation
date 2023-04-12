# Fetch Outstanding Orders API

Fetches all the orders need to be fulfilled from the facility. To get all the orders, you will need to call the `/solr-query` endpoint with the POST method.

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

| Parameter        | Description                                               | Required (Y/N) |
|------------------|-----------------------------------------------------------|----------------|
| `quantityNotAvailable` | The ID of the shipment in the OMS    | Yes |
| `orderTypeId`          | The ID of the order type in HotWax   | Yes |
| `orderStatusId`        | The ID of the order status in HotWax | Yes |
| `isPicked`             | The status of the order if picked or not. Default value: N | No|
| `shipmentMethodTypeId` | The ID of the shipment method type | No|
| `fulfillmentStatus`    | The status of fulfilment | No|
| `facilityId`           | The ID of the facility | No|
| `docType`              | Reference index     | No|


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
  },
}
```

| Parameter        | Description                                               | Required (Y/N) |
|------------------|-----------------------------------------------------------|----------------|
| `orderId`              | The ID of the order    | No|
| `orderItemSeqId`       | The ID of the order item sequence | No|
| `shipGroupSeqId`       | The ID of the ship group sequence | No|
| `inventoryItemId`      | The ID of the inventory item| No|
| `reservedDatetime`     | The time and date of reservation | No|
| `itemQuantity`         | The item quantity | No|
| `productId`            | The ID of the product in HotWax| No|
| `keywordSearchText`    | The keyword used for search | No|
| `productName`          | The name of the product | No|
| `productSku`           | The SKU ID of the product| No|
| `virtualProductName`   | The name of the parent product | No|
| `uniqueOrderItemsCount`| The count of the unique order items | No|
| `orderDate`            | The date when the order placed | No|
| `productStoreId`        | The ID of the product store | No|
| `customerId`           | The ID of the customer | No|
| `customerName`         | The name of the customer | No|
| `shipmentMethodTypeDesc` | The description of the shipment method type| No|
| `shipmentMethodTypeSeqNum`| The sequence number of the shipment method type | No|
| `orderIdentifications` | The secondary unique identifier of the order| No|
| `identifier`           | DocType-Identifier | No|






