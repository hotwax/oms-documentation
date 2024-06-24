---
description: >-
  Explore how the Find Order API call offers details about orders present in the system.
---

# Find Order

This API call provides users with order details. To retrieve the order details, make a GET request to the `/solr-query` endpoint.

## Request
**End Point** `https://<instance.name>.hotwax.io/api/solr-query`

Example: `https://demo-oms.hotwax.io/api/solr-query`

### Request Format

```json

{
    "json": {
        "params": {
            "q":"*:*",
            "wt":"json",
            "rows":"1"
        },
        "filter":["docType:ORDER","orderTypeId : SALES_ORDER"],
        "sort":"orderDate desc",
        "fields":"orderId,orderName,orderItemSeqId,orderItemTypeId,productId,parentProductName,productName,productTypeId,internalName,productTypeDesc,isPromo,supplierProductId,quantity,unitPrice,unitListPrice,orderItemStatusId,orderItemStatusDesc,orderItemSubTotal,orderItemAssocTypeId,supplierPartyIds,salesRepName,salesChannelEnumId,salesChannelDesc,orderTypeId,productStoreId,productStoreName,orderStatusId,orderStatusDesc,statusSeqId,orderRoles,customerPartyId,customerEmailId,customerPartyName,shipToCountry,shipToState,shipToCity,shippingMethod,supplierPartyId,supplierPartyName,orderDate,orderNotes,orderDateString,estimatedDeliveryDate,autoCancelDate,correspondingPoId,title,facilityId,facilityName,orderGrandTotal,orderSize,lastInventoryCount,categoryHierarchy,workEffortId,workEffortTypeId,currentStatus,workEffortPurposeTypeId,workEffortParentId,priority,workEffortName,description,estimatedStartDate,estimatedCompletionDate,actualStartDate,actualCompletionDate,backOrderedQuantity,orderToReleaseTime,releaseToPickTime,pickToShipTime,partyClassificationGroupIds,currencyUomId,placingPartyName,placingPartyId,primaryProductCategoryNameFacet,priceType,promoCodeIds,orderIdentifications,promisedDatetime,shipmentMethodTypeId"
    }
}
```

### Parameter Table

| Parameter Name            | Description                          |
| ------------------------- | ------------------------------------ |
| `docType`                 | The Type of the document             |
| `q`                 |  Basic solr query|
| `wt`                 | Format of data returned by api (json/csv)|
| `rows`                 | No of documents returned |
| `sort`                 | Field name and sort order (asc/desc) to sort response |
| `filter`                 | Additional query parameters|
| `fields`                 | List of fields returned in response document |



## Response

### Body

```json
{
    "responseHeader": {
        "zkConnected": true,
        "status": 0,
        "QTime": 0,
        "params": {
            "json": "{\"filter\":[\"docType:ORDER\",\"orderTypeId : SALES_ORDER\"],\"sort\":\"orderDate desc\",\"params\":{\"q\":\"*:*\",\"wt\":\"json\",\"rows\":\"1\"},\"fields\":\"orderId,orderName,orderItemSeqId,orderItemTypeId,productId,parentProductName,productName,productTypeId,internalName,productTypeDesc,isPromo,supplierProductId,quantity,unitPrice,unitListPrice,orderItemStatusId,orderItemStatusDesc,orderItemSubTotal,orderItemAssocTypeId,supplierPartyIds,salesRepName,salesChannelEnumId,salesChannelDesc,orderTypeId,productStoreId,productStoreName,orderStatusId,orderStatusDesc,statusSeqId,orderRoles,customerPartyId,customerEmailId,customerPartyName,shipToCountry,shipToState,shipToCity,shippingMethod,supplierPartyId,supplierPartyName,orderDate,orderNotes,orderDateString,estimatedDeliveryDate,autoCancelDate,correspondingPoId,title,facilityId,facilityName,orderGrandTotal,orderSize,lastInventoryCount,categoryHierarchy,workEffortId,workEffortTypeId,currentStatus,workEffortPurposeTypeId,workEffortParentId,priority,workEffortName,description,estimatedStartDate,estimatedCompletionDate,actualStartDate,actualCompletionDate,backOrderedQuantity,orderToReleaseTime,releaseToPickTime,pickToShipTime,partyClassificationGroupIds,currencyUomId,placingPartyName,placingPartyId,primaryProductCategoryNameFacet,priceType,promoCodeIds,orderIdentifications,promisedDatetime,shipmentMethodTypeId\"}",
            "_forwardedCount": "1"
        }
    },
    "response": {
        "numFound": 4189,
        "start": 0,
        "numFoundExact": true,
        "docs": [
            {
                "orderId": "10280",
                "orderItemSeqId": "00101",
                "productId": "10071",
                "parentProductName": "Ajax Full-Zip Sweatshirt",
                "internalName": "MH12-XS-Blue",
                "productName": "XS / Blue",
                "orderItemStatusId": "ITEM_APPROVED",
                "orderItemStatusDesc": "Approved",
                "quantity": 1.0,
                "orderName": "HCDEV#2511",
                "orderTypeId": "SALES_ORDER",
                "productStoreId": "STORE",
                "productStoreName": "Dev Store",
                "shippingMethod": [
                    "Default Standard"
                ],
                "shipmentMethodTypeId": "STANDARD",
                "facilityId": "GARDEN_CITY",
                "facilityName": "Garden City",
                "orderStatusId": "ORDER_APPROVED",
                "orderStatusDesc": "Approved",
                "orderDate": "2024-06-20T14:42:33Z",
                "orderNotes": [
                    "HC_PRE_SELECTED_FAC"
                ],
                "customerEmailId": "random@random.com",
                "customerPartyId": "10021",
                "customerPartyName": "Rohan Sharma",
                "salesChannelEnumId": "WEB_SALES_CHANNEL",
                "salesChannelDesc": "Web Channel",
                "placingPartyName": "Rohan Sharma",
                "orderIdentifications": [
                    "SHOPIFY_ORD_ID/6178678210724",
                    "SHOPIFY_ORD_NAME/HCDEV#2511",
                    "SHOPIFY_ORD_NO/2511"
                ]
            }
        ]
    }
}
```
