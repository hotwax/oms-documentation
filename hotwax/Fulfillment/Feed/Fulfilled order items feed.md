# Fulfilled Order Items Feed

Contains the order items that have been fulfilled from a particular facility. External systems that did not fulfill those orders but require an update of the inventory delta to maintain accurate inventory levels can use this feed to ensure their inventory accuracy. It's important to understand that this feed only contains orders that have been successfully fulfilled, orders that have only been reserved but not shipped are not included in this feed because they may still be rejected and re-brokered to another facility for fulfillment.

The feed in produced in a JSON format and can be placed at a designated FTP location.

## Body 
[Link to full JSON sample file](https://github.com/Dhiraj1405/oms-documentation/blob/BOPIS_API/Fulfillment/Samples/Fulfilled%20order%20items%20feed.json#L767)

Sample snippet from full JSON file: 
```
"shipmentItems" : [ {
     "shipmentId" : "27091",
     "shipmentItemSeqId" : "00001",
     "orderId" : "39670",
     "orderItemSeqId" : "00101",
     "orderItemExternalId" : "12073761243207",
     "shipGroupSeqId" : "00003",
     "itemStatusId" : "ITEM_COMPLETED",
     "itemQuantity" : 1,
     "slaShipmentMethodTypeId" : "NEXT_DAY",
     "statusDatetime" : "2023-01-30T03:50:02-05:00",
     "productId" : "136845",
     "unitPrice" : 65.97,
     "facilityId" : "15",
     "facilityExternalId" : "15",
     "facilityTypeId" : "RETAIL_STORE",
     "parentFacilityTypeId" : "PHYSICAL_STORE",
     "shippedQuantity" : 1,
     "goodIdentifications" : [ {
       "fromDate" : "2021-08-12T23:38:08-04:00",
       "productId" : "136845",
       "IdValue" : "ABSOLUTE",
       "lastUpdatedStamp" : "2022-08-10T02:58:52-04:00",
       "goodIdentificationTypeId" : "SHOPIFY_PROD_SKU",
       "thruDate" : null
     }
```



| Parameter | Description |
| ---- | ----------- | 
| `itemQuantity` | Ordered quantity | 
| `productId` | The internal Id of the product in HotWax | 
| `facilityId` | The internal Id of the facility in HotWax | 
| `facilityExternalId` | The Id of the facility in the external systems | 
| `facilityTypeId` | The type of the facility | 
| `ParentFacilityTypeId` | The type of the parent facility, used to group various facility types. | 
| `shippedQuantity` | The quantity of items shipped from the ordered quantity. | 
| `goodIdentifications` | All identifications of the product in HotWax Commerce used to identify the product in external systems |
| `goodIdentificationTypeId` | The type of the unique product Identifier in the external systems (e.g. Shopify product SKU) | 
| `IdValue` | The value of the GoodIdentificationTypeId | 
