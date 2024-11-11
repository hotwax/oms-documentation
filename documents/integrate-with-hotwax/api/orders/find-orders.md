---
description: >-
  Explore how the Find Order API call offers details about orders present in the system.
---

# Find Order

Retrieve details a list of orders imported from external systems in your OMS. To find the order, send a GET request to the `/solr-query` endpoint with appropriate query parameters. 

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

**Order Details Table**

## Order Details Table

| Field Name | Description |
|---|---|
| `orderId` | Unique identifier for the order |
| `orderName` | Name or reference given to the order |
| `orderItemSeqId` | Sequential ID for the order item |
| `orderItemTypeId` | Type of order item (e.g., product, service) |
| `productId` | Unique identifier for the product |
| `parentProductName` | Name of the parent product (if applicable) |
| `productName` | Name of the product |
| `productTypeId` | Type of product |
| `internalName` | Internal name or code for the product |
| `productTypeDesc` | Description of the product type |
| `isPromo` | Indicates if the item is part of a promotion |
| `supplierProductId` | Supplier's unique identifier for the product |
| `quantity` | Quantity ordered |
| `unitPrice` | Unit price of the product |
| `unitListPrice` | List price of the product |
| `orderItemStatusId` | Status of the order item |
| `orderItemStatusDesc` | Description of the order item status |
| `orderItemSubTotal` | Subtotal for the order item |
| `orderItemAssocTypeId` | Type of association between order items |
| `supplierPartyIds` | List of supplier party IDs involved in the order |
| `salesRepName` | Name of the sales representative |
| `salesChannelEnumId` | ID of the sales channel |
| `salesChannelDesc` | Description of the sales channel |
| `orderTypeId` | Type of order (e.g., sales, purchase) |
| `productStoreId` | ID of the product store |
| `productStoreName` | Name of the product store |
| `orderStatusId` | Status of the order |
| `orderStatusDesc` | Description of the order status |
| `statusSeqId` | Sequential ID for the order status |
| `orderRoles` | Roles associated with the order |
| `customerPartyId` | ID of the customer party |
| `customerEmailId` | Customer's email address |
| `customerPartyName` | Name of the customer party |
| `shipToCountry` | Country where the order will be shipped |
| `shipToState` | State where the order will be shipped |
| `shipToCity` | City where the order will be shipped |
| `shippingMethod` | Shipping method used for the order |
| `supplierPartyId` | ID of the supplier party |
| `supplierPartyName` | Name of the supplier party |
| `orderDate` | Date the order was placed |
| `orderNotes` | Notes or comments associated with the order |
| `orderDateString` | Date string representation of the order date |
| `estimatedDeliveryDate` | Estimated delivery date |
| `autoCancelDate` | Date when the order will be automatically canceled |
| `correspondingPoId` | ID of the corresponding purchase order (if applicable) |
| `title` | Title or reference given to the order |
| `facilityId` | ID of the facility involved in the order |
| `facilityName` | Name of the facility |
| `orderGrandTotal` | Total amount of the order |
| `orderSize` | Size of the order |
| `lastInventoryCount` | Last recorded inventory count |
| `categoryHierarchy` | Hierarchical structure of product categories |
| `workEffortId` | ID of the related work effort |
| `workEffortTypeId` | Type of work effort |
| `currentStatus` | Current status of the work effort |
| `workEffortPurposeTypeId` | Purpose of the work effort |
| `workEffortParentId` | ID of the parent work effort (if applicable) |
| `priority` | Priority of the work effort |
| `workEffortName` | Name of the work effort |
| `description` | Description of the work effort |
| `estimatedStartDate` | Estimated start date of the work effort |
| `estimatedCompletionDate` | Estimated completion date of the work effort |
| `actualStartDate` | Actual start date of the work effort |
| `actualCompletionDate` | Actual completion date of the work effort |
| `backOrderedQuantity` | Quantity of backordered items |
| `orderToReleaseTime` | Time taken from order placement to release |
| `releaseToPickTime` | Time taken from release to picking |
| `pickToShipTime` | Time taken from picking to shipping |
| `partyClassificationGroupIds` | IDs of the party classification groups |
| `currencyUomId` | ID of the currency unit of measurement |
| `placingPartyName` | Name of the party placing the order |
| `placingPartyId` | ID of the party placing the order |
| `primaryProductCategoryNameFacet` | Primary category name facet |
| `priceType` | Type of pricing (e.g., retail, wholesale) |
| `promoCodeIds` | IDs of applied promo codes |
| `orderIdentifications` | List of order identification codes |
| `promisedDatetime` | Promised date and time for delivery |
| `shipmentMethodTypeId` | ID of the shipment method type |



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

## Response Parameters Table

| Parameter | Description |
|---|---|
| `numFound` | Total number of documents found matching the search criteria |
| `start` | Starting index of the returned documents |
| `numFoundExact` | Indicates whether the `numFound` value is exact or an estimate |
