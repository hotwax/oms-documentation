## HotWax fulfilled Order Items Feed

Syncs inventory from HotWax to external source (in this case: POS). After receiving the feed in json format at FTP locations, external sources can reduce the inventory for a product whose inventory is reserved by HotWax for a store fulfilled order. 

### Body 
(Link to full Json)

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
