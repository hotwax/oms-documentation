# Fulfilled Order Items Feed

This feed is used to get the fulfilled order items in OMS. The format of the feed is JSON, 
and it can be further used to send to external systems as-is or transformed as per custom 
format of the external system.

Eg. The fulfilled orders items feed can be sent to external system like ERP for financial 
posting and also to Shopify to update the fulfillment status as fulfilled.

## Technical implementation 

This feed is generated in the integration layer using a Moqui component. The integration 
component connects with OMS transactional database and fetches the required details for 
the fulfilled order items using certain database views. These views are generated using 
OMS entities, and logic is implemented in the Moqui service to get the fulfilled order 
and its item details, and prepare the JSON in a fixed format. This JSON is then kept on 
a directory on SFTP.

The feed is generated order wise, meaning each object in JSON represents an order which 
has 1 or more fulfilled order items. Each order will have a list of its shipments grouped 
by trackingIdNumber, carrierPartyId, shipmentMethodTypeId and shipToContactMechId. Each 
shipment will have list of shipped items.

A Service Job can be scheduled which will prepare the feed and keep it on SFTP.

To ensure that the same order items are not sent repetitively in the feeds, history is 
maintained in the OrderFulfillmentHistory entity table of OMS for all the order items 
included in a feed. Whenever a feed is generated, a record for this entity is created 
and the views to fetch the fulfilled order item details are implemented in a way that it  
includes the condition to exclude order items for which history exists. So in every job 
run, the service wil fetch the new fulfilled order items and prepare the feed.

### Configurable Parameters for the feed

The job to generate the fulfilled order items feed has some configurable parameters.

1. excludeSalesChannel
   1. This is a list type parameter and could be used to generate the feed by excluding 
   orders from a specific sale channel.
   2. Eg. To exclude orders from POS, set the value as  POS_CHANNEL. To pass multiple 
   values, set the value as POS_CHANNEL,POS_SALES_CHANNEL

2. includeSalesChannel
   1. This is a list type parameter and could be used to generate the feed for orders 
   received from a specific sale channel.
   2. Eg. To include orders only from Web, set the value as  WEB_CHANNEL. To pass multiple
      values, set the value as WEB_CHANNEL,CSR_CHANNEL
   
3. isPhysical
   1. This could be used to specify to only include physical type product order items.
   2. The possible values to set for this parameter are:
      1. isPhysical = 'Y' - Includes only Physical good type items.
      2. isPhysical = 'N' - Include all the type of goods excluding the Physical good type items.
      3. If we are not passing anything in the isPhysical then all the fulfilled order items 
      will be considered for the feed.

4. orderId
   1. This could be used to generate the feed for a specific order.
   
5. orderItemSeqId
   1. This could be used to generate the feed for a specific order item. To use this, 
   make sure to set the orderId as well.
   
6. orderStatusId
   1. This could be used to generate the feed for a specific order status.
   2. The use case for this is to generate the feed only when all items in the order 
   are fulfilled, so this can be set to ORDER_COMPLETED.
   
7. parentFacilityTypeIds
   1. This is a list type parameter and could be used to generate the feed for the 
   specific parent facility type IDs from which orders are being fulfilled.
   2. If this is left as empty, feed will be generated for all the fulfilled order items
   irrespective of the parent facility type it is fulfilled from. 
   3. To generate feed for order items fulfilled from Stores, set the value as PHYSICAL_STORE.
   4. To generate feed for order items fulfilled from warehouses, set the value DISTRIBUTION_CENTER.
   5. To generate feed for multiple types, set the value as PHYSICAL_STORE,DISTRIBUTION_CENTER.

8. productStoreIds
   1. This is a list type parameter and could be used to set the Product Store Ids for 
   generating the feed.
   2. For eg. if the OMS is set up for a client with multiple brands, each brand may be set up
   as a separate Product Store in OMS. To generate the feed for a single brand, set the value like 
   STORE.

9. productTypeIds
   1. This is a list type parameter and could be used to include certain product types in the 
   fulfilled order items feed. 
   2. To include only physical type goods, set the value as FINISHED_GOOD.
   3. To include multiple product type goods, set the value as FINISHED_GOOD,DIGITAL_GOOD.
   4. If this is left as empty, feed will be generated for all the fulfilled order items
      irrespective of the product type of the order items.

10. sinceDate
    1. This could be used to generate the feed for order items fulfilled after a specified date.
    2. This can be needed if historical orders need to be skipped which are not required to sync 
    to any external system from OMS.

## FTP locations for the fulfilled order items feed variation

Based on the available parameters, the feed is kept on its respective locations.
| Feed Type                                 | Location                                            |
|-----------------------------------------------|--------------------------------------------------|
| Feed for all fulfilled Order Items Feed     | /home/${sftpUsername}/hotwax/FulfilledOrderItems       |
| Feed for Order Items fulfilled from Stores | /home/${sftpUsername}/hotwax/StoreFulfilledItemsFeed |
| Feed for Order Items fulfilled from Stores  | /home/${sftpUsername}/hotwax/WHFulfilledItemsFeed  |
| Feed for Ecommerce Orders Items fulfilled from Stores | /home/${sftpUsername}/hotwax/EcomStoreFulfilledItemsFeed                |
| Feed for POS orders fulfilled from Stores | /home/${sftpUsername}/hotwax/PosStoreFulfilledItemsFeed        |
| Feed for all fulfilled Order Items with only finished good type products | /home/${sftpUsername}/hotwax/FinishedGoodFulfilledItemsFeed |
| Feed for all fulfilled Order Items with only digital good type products | /home/${sftpUsername}/hotwax/DigitalGoodFulfilledItemsFeed  |


## Sample Fulfilled Order Items Feed JSON

```json
[ {
  "productStoreId" : "STORE",
  "orderId" : "100000",
  "orderName" : "#7976852",
  "orderDate" : "2023-12-29T11:19:27-05:00",
  "orderStatusId" : "ORDER_COMPLETED",
  "entryDate" : "2023-12-29T11:43:22-05:00",
  "grandTotal" : 131.41,
  "orderItemSeqId" : null,
  "itemStatusId" : null,
  "unitPrice" : null,
  "orderItemExternalId" : null,
  "shipGroupSeqId" : null,
  "slaShipmentMethodTypeId" : null,
  "postalContactMechId" : null,
  "telecomContactMechId" : null,
  "itemQuantity" : null,
  "facilityId" : null,
  "facilityExternalId" : null,
  "facilityTypeId" : null,
  "parentFacilityTypeId" : null,
  "statusDatetime" : null,
  "productId" : null,
  "productTypeId" : null,
  "isPhysical" : null,
  "isDigital" : null,
  "salesChannel" : "WEB_CHANNEL",
  "customerFirstName" : "Sonyia",
  "customerLastName" : "Simpson ",
  "currency" : "USD",
  "customerPartyId" : "1425243",
  "isShippingChargesSent" : "Y",
  "orderIdentifications" : [ {
    "idValue" : "4900829462661",
    "fromDate" : "2023-12-29T11:43:23-05:00",
    "orderId" : "100000",
    "lastUpdatedStamp" : "2023-12-29T11:43:23-05:00",
    "orderIdentificationTypeId" : "SHOPIFY_ORD_ID",
    "thruDate" : null
  }, {
    "lastUpdatedStamp" : "2023-12-29T11:43:23-05:00",
    "orderIdentificationTypeId" : "SHOPIFY_ORD_NAME",
    "orderId" : "100000",
    "idValue" : "#7976852",
    "fromDate" : "2023-12-29T11:43:23-05:00",
    "thruDate" : null
  }, {
    "orderIdentificationTypeId" : "SHOPIFY_ORD_NO",
    "fromDate" : "2023-12-29T11:43:23-05:00",
    "orderId" : "100000",
    "lastUpdatedStamp" : "2023-12-29T11:43:23-05:00",
    "idValue" : "7975852",
    "thruDate" : null
  } ],
  "orderAttributes" : [ ],
  "customerPartyIdentifications" : [ {
    "partyIdentificationTypeId" : "SHOPIFY_CUST_ID",
    "idValue" : "3552504316037",
    "lastUpdatedStamp" : "2022-07-18T04:03:09-04:00",
    "partyId" : "1425243"
  } ],
  "payments" : [ {
    "paymentMethodTypeId" : "EXT_SHOP_VISA",
    "paymentMethodDescription" : "Ext VISA",
    "orderId" : "100000",
    "createdDate" : "2023-12-29T11:43:22-05:00",
    "statusId" : "PAYMENT_AUTHORIZED",
    "returnId" : null,
    "paymentMethodCode" : "VISA",
    "amount" : 132
  } ],
  "billTo" : {
    "email" : null,
    "phone" : null
  },
  "orderAdjustments" : [ {
    "amount" : -8.95,
    "customerReferenceId" : null,
    "correspondingProductId" : null,
    "orderItemSeqId" : "_NA_",
    "includeInShipping" : null,
    "description" : null,
    "exemptAmount" : null,
    "productPromoId" : null,
    "orderAdjustmentTypeId" : "EXT_SHIP_ADJUSTMENT",
    "taxAuthPartyId" : null,
    "lastModifiedByUserLogin" : null,
    "oldPercentage" : null,
    "primaryGeoId" : null,
    "taxAuthGeoId" : null,
    "originalAdjustmentId" : null,
    "secondaryGeoId" : null,
    "createdByUserLogin" : null,
    "orderAdjustmentId" : null,
    "amountAlreadyIncluded" : null,
    "lastUpdatedStamp" : null,
    "comments" : null,
    "recurringAmount" : null,
    "lastModifiedDate" : null,
    "orderId" : "100000",
    "sourceReferenceId" : null,
    "productPromoRuleId" : null,
    "isManual" : null,
    "productFeatureId" : null,
    "taxAuthorityRateSeqId" : null,
    "overrideGlAccountId" : null,
    "oldAmountPerQuantity" : null,
    "shipGroupSeqId" : null,
    "includeInTax" : null,
    "createdDate" : null,
    "productPromoActionSeqId" : null,
    "sourcePercentage" : null
  }, {
    "customerReferenceId" : null,
    "amount" : 8.95,
    "correspondingProductId" : null,
    "orderItemSeqId" : "_NA_",
    "includeInShipping" : null,
    "description" : null,
    "exemptAmount" : null,
    "productPromoId" : null,
    "taxAuthPartyId" : null,
    "lastModifiedByUserLogin" : null,
    "oldPercentage" : null,
    "primaryGeoId" : null,
    "taxAuthGeoId" : null,
    "originalAdjustmentId" : null,
    "secondaryGeoId" : null,
    "createdByUserLogin" : null,
    "orderAdjustmentId" : null,
    "amountAlreadyIncluded" : null,
    "lastUpdatedStamp" : null,
    "comments" : null,
    "recurringAmount" : null,
    "lastModifiedDate" : null,
    "orderId" : "100000",
    "sourceReferenceId" : null,
    "productPromoRuleId" : null,
    "isManual" : null,
    "productFeatureId" : null,
    "taxAuthorityRateSeqId" : null,
    "overrideGlAccountId" : null,
    "oldAmountPerQuantity" : null,
    "shipGroupSeqId" : null,
    "includeInTax" : null,
    "createdDate" : null,
    "productPromoActionSeqId" : null,
    "sourcePercentage" : null,
    "orderAdjustmentTypeId" : "SHIPPING_CHARGES"
  } ],
  "shipments" : [ {
    "trackingNumber" : "788736716808",
    "carrierPartyId" : "FEDEX",
    "shipmentMethodTypeId" : "GROUND_HOME",
    "trackingUrl" : "",
    "shipTo" : {
      "countryGeoCode" : "US",
      "stateProvinceGeoCode" : "NY",
      "contactMechId" : "24055111",
      "toName" : "Sonyia Simpson-Barlow",
      "attnName" : null,
      "address1" : "940 Gates Ave  ",
      "address2" : "Apt 3J",
      "houseNumber" : null,
      "houseNumberExt" : null,
      "directions" : null,
      "city" : "Brooklyn",
      "cityGeoId" : null,
      "postalCode" : "11221-3626",
      "postalCodeExt" : null,
      "countryGeoId" : "USA",
      "stateProvinceGeoId" : "NY",
      "countyGeoId" : null,
      "municipalityGeoId" : null,
      "postalCodeGeoId" : null,
      "geoPointId" : null,
      "encodedAddressKey" : null,
      "latitude" : null,
      "longitude" : null,
      "email" : "sonyias@aol.com",
      "phone" : {
        "countryCode" : "1",
        "askForName" : null,
        "areaCode" : "646",
        "contactMechId" : "24055112",
        "contactNumber" : "2453929",
        "lastUpdatedStamp" : "2023-12-29T11:43:22-05:00"
      }
    },
    "shipmentItems" : [ {
      "productStoreId" : "STORE",
      "orderId" : "100000",
      "orderName" : "#7976852",
      "orderDate" : "2023-12-29T11:19:27-05:00",
      "orderStatusId" : "ORDER_COMPLETED",
      "entryDate" : "2023-12-29T11:43:22-05:00",
      "grandTotal" : 132,
      "currency" : "USD",
      "salesChannel" : "WEB_CHANNEL",
      "orderItemSeqId" : "00101",
      "itemStatusId" : "ITEM_COMPLETED",
      "unitPrice" : 30,
      "orderItemExternalId" : "12149028683909",
      "customerPartyId" : "1425243",
      "customerFirstName" : "Sonyia",
      "customerLastName" : "Simpson Barlow ",
      "shipGroupSeqId" : "00001",
      "maySplit" : "Y",
      "slaShipmentMethodTypeId" : "STANDARD",
      "postalContactMechId" : "24055111",
      "telecomContactMechId" : "24055112",
      "itemQuantity" : 1,
      "facilityId" : "549",
      "facilityExternalId" : "549",
      "facilityTypeId" : "OUTLET_STORE",
      "parentFacilityTypeId" : "PHYSICAL_STORE",
      "statusDatetime" : "2024-01-01T16:21:20-05:00",
      "productId" : "283685",
      "internalName" : "40086667952261",
      "shippedQuantity" : 1,
      "shipmentId" : "5579572",
      "shipmentItemSeqId" : "00001",
      "shipmentStatusId" : "SHIPMENT_SHIPPED",
      "shipToContactMechId" : "24055111",
      "shipToTelecomContactMechId" : "24055112",
      "shipmentTypeId" : "SALES_SHIPMENT",
      "trackingNumber" : "788736716808",
      "carrierPartyId" : "FEDEX",
      "shipmentMethodTypeId" : "GROUND_HOME",
      "productTypeId" : "FINISHED_GOOD",
      "isPhysical" : "Y",
      "isDigital" : "N",
      "goodIdentifications" : [ {
        "fromDate" : "2023-01-25T00:27:08-05:00",
        "goodIdentificationTypeId" : "SHOPIFY_PROD_ID",
        "lastUpdatedStamp" : "2024-01-01T14:24:33-05:00",
        "idValue" : "40086667952261",
        "productId" : "283685",
        "thruDate" : null
      }, {
        "idValue" : "BKNOXX",
        "lastUpdatedStamp" : "2024-01-01T14:24:33-05:00",
        "fromDate" : "2023-01-25T00:27:08-05:00",
        "productId" : "283685",
        "goodIdentificationTypeId" : "SHOPIFY_PROD_SKU",
        "thruDate" : null
      }, {
        "idValue" : "BKNOXX",
        "fromDate" : "2023-01-25T00:27:08-05:00",
        "goodIdentificationTypeId" : "SKU",
        "lastUpdatedStamp" : "2024-01-01T14:24:33-05:00",
        "productId" : "283685",
        "thruDate" : null
      }, {
        "lastUpdatedStamp" : "2023-01-25T00:27:09-05:00",
        "fromDate" : "2023-01-25T00:27:08-05:00",
        "idValue" : "193624826245",
        "goodIdentificationTypeId" : "UPCA",
        "productId" : "283685",
        "thruDate" : null
      } ],
      "orderItemAdjustments" : [{
        "customerReferenceId" : null,
        "correspondingProductId" : null,
        "includeInShipping" : null,
        "description" : null,
        "exemptAmount" : null,
        "productPromoId" : null,
        "taxAuthPartyId" : null,
        "lastModifiedByUserLogin" : null,
        "oldPercentage" : null,
        "primaryGeoId" : null,
        "taxAuthGeoId" : null,
        "amount" : -0.8,
        "originalAdjustmentId" : null,
        "secondaryGeoId" : null,
        "createdByUserLogin" : null,
        "orderAdjustmentId" : null,
        "amountAlreadyIncluded" : null,
        "lastUpdatedStamp" : null,
        "comments" : null,
        "recurringAmount" : null,
        "lastModifiedDate" : null,
        "sourceReferenceId" : null,
        "productPromoRuleId" : null,
        "isManual" : null,
        "productFeatureId" : null,
        "taxAuthorityRateSeqId" : null,
        "overrideGlAccountId" : null,
        "oldAmountPerQuantity" : null,
        "shipGroupSeqId" : null,
        "includeInTax" : null,
        "orderAdjustmentTypeId" : "EXT_PROMO_ADJUSTMENT",
        "createdDate" : null,
        "productPromoActionSeqId" : null,
        "orderItemSeqId" : "00101",
        "sourcePercentage" : null,
        "orderId" : "100000"
      }, {
        "customerReferenceId" : null,
        "correspondingProductId" : null,
        "includeInShipping" : null,
        "description" : null,
        "exemptAmount" : null,
        "productPromoId" : null,
        "taxAuthPartyId" : null,
        "lastModifiedByUserLogin" : null,
        "oldPercentage" : null,
        "primaryGeoId" : null,
        "taxAuthGeoId" : null,
        "originalAdjustmentId" : null,
        "secondaryGeoId" : null,
        "amount" : 0.19,
        "createdByUserLogin" : null,
        "orderAdjustmentId" : null,
        "amountAlreadyIncluded" : null,
        "orderAdjustmentTypeId" : "SALES_TAX",
        "lastUpdatedStamp" : null,
        "comments" : null,
        "recurringAmount" : null,
        "lastModifiedDate" : null,
        "sourceReferenceId" : null,
        "productPromoRuleId" : null,
        "isManual" : null,
        "productFeatureId" : null,
        "taxAuthorityRateSeqId" : null,
        "overrideGlAccountId" : null,
        "oldAmountPerQuantity" : null,
        "shipGroupSeqId" : null,
        "includeInTax" : null,
        "createdDate" : null,
        "productPromoActionSeqId" : null,
        "orderItemSeqId" : "00101",
        "sourcePercentage" : null,
        "orderId" : "100000"
      }, {
        "customerReferenceId" : null,
        "correspondingProductId" : null,
        "includeInShipping" : null,
        "description" : null,
        "exemptAmount" : null,
        "productPromoId" : null,
        "taxAuthPartyId" : null,
        "lastModifiedByUserLogin" : null,
        "oldPercentage" : null,
        "primaryGeoId" : null,
        "taxAuthGeoId" : null,
        "originalAdjustmentId" : null,
        "secondaryGeoId" : null,
        "createdByUserLogin" : null,
        "orderAdjustmentId" : null,
        "amountAlreadyIncluded" : null,
        "orderAdjustmentTypeId" : "SALES_TAX",
        "lastUpdatedStamp" : null,
        "amount" : 0.02,
        "comments" : null,
        "recurringAmount" : null,
        "lastModifiedDate" : null,
        "sourceReferenceId" : null,
        "productPromoRuleId" : null,
        "isManual" : null,
        "productFeatureId" : null,
        "taxAuthorityRateSeqId" : null,
        "overrideGlAccountId" : null,
        "oldAmountPerQuantity" : null,
        "shipGroupSeqId" : null,
        "includeInTax" : null,
        "createdDate" : null,
        "productPromoActionSeqId" : null,
        "orderItemSeqId" : "00101",
        "sourcePercentage" : null,
        "orderId" : "100000"
      } ],
      "orderItemAttributes" : [ {
        "orderId" : "100000",
        "attrDescription" : "gatedToken",
        "lastUpdatedStamp" : "2023-12-29T11:43:22-05:00",
        "attrValue" : "EMAILVIP",
        "orderItemSeqId" : "00101",
        "attrName" : "gatedToken"
      }, {
        "lastUpdatedStamp" : "2023-12-29T11:43:22-05:00",
        "attrValue" : "193624826245",
        "orderId" : "100000",
        "attrName" : "UPC",
        "attrDescription" : "UPC",
        "orderItemSeqId" : "00101"
      } ],
      "facilityGroupMembers" : [ {
        "facilityGroupId" : "AUTO_SHIPPING_LABEL",
        "fromDate" : "2022-02-08T09:52:04-05:00",
        "sequenceNum" : null,
        "facilityId" : "549",
        "lastUpdatedStamp" : "2022-02-08T09:52:04-05:00",
        "thruDate" : null
      }, {
        "fromDate" : "2022-02-08T09:52:04-05:00",
        "lastUpdatedStamp" : "2022-02-08T09:52:04-05:00",
        "facilityGroupId" : "DO_PICKING",
        "sequenceNum" : null,
        "facilityId" : "549",
        "thruDate" : null
      }, {
        "facilityGroupId" : "OMS_FULFILLMENT",
        "lastUpdatedStamp" : "2022-02-08T12:18:14-05:00",
        "facilityId" : "549",
        "sequenceNum" : 549,
        "fromDate" : "2022-02-08T09:52:04-05:00",
        "thruDate" : null
      } ]
    } ]
  } ]
} ]
```