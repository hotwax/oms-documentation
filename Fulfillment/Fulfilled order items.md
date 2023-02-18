# Fulfilled Order Items

Syncs inventory from HotWax to external source. After receiving the feed in json format at FTP locations, external sources can reduce the inventory for a product whose inventory is reserved by HotWax for a store fulfilled order. 

## Body 
[Sample json file](https://github.com/Dhiraj1405/oms-documentation/blob/BOPIS_API/Fulfillment/Samples/Fulfilled%20order%20items%20feed.json#L767)

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
     },
```



| Parameter | Description | Required |
| ---- | ----------- | -------- |
| ItemQuantity | Ordered quantity | Yes |
| ProductId | The internal Id of the product in HotWax | Yes |
| FacilityId | The internal Id of the facility in HotWax | Yes |
| FacilityExternalId | The Id of the facility in the external systems | Yes |
| FacilityTypeId | The type of the facility | Yes |
| ParentFacilityTypeId | The type of the parent facility, used to group various facility types. | Yes |
| ShippedQuantity | The quantity of items shipped from the ordered quantity. | Yes |
| GoodIdentifications | All identifications of the product in HotWax Commerce used to identify the product in external systems | Yes |
| GoodIdentificationTypeId | The type of the unique product Identifier in the external systems (e.g. Shopify product SKU) | Yes |
| IdValue | The value of the GoodIdentificationTypeId | Yes |


