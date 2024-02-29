# Introduction

The Brokered Order Items feed is an order-wise JSON-formatted feed generated from the HotWax Commerce OMS. This feed contains details about brokered order items, which can be brokered to either Warehouse or Store Type facilities. The feed can be used for various purposes, such as integration with other external systems, reporting and analysis.

# Use case

## Communication with the External Order fulfillment system

The Brokered Order Items feed is useful for retailers who would like to do fulfillment outside OMS through an external system such as a Warehouse Management System (WMS). This feed provides the out-of-the-box data available from OMS, and retailers can use it as is or after transformation to ingest into external systems through file-based integration.

# Customization

The Brokered Order Items feed has certain out-of-the-box customizations that allow users to generate the feed as per the requirements.

| **Parameter**           | **Description**                                                                                           |
|--------------------------|-----------------------------------------------------------------------------------------------------------|
| `orderId`                | Allows to generate the feed for a specific order ID.                                                   |
| `orderItemSeqId`         | Allows to generate the feed for a specific order item sequence ID within an order.                     |
| `parentFacilityTypeIds`  | Specifies the type of facility from which the brokered order items are being fetched.                     |
| `productStoreIds`        | Allows you to set the product store IDs to generate brand-specific feeds.                                  |
| `systemMessageTypeId`    | The SFTP path where the feed will be stored.                    |
| `systemMessageRemoteId`  | The SFTP credentials required to access the SFTP location.                  |


<details>

<summary>Sample Brokered Order Items feed</summary>

```json
[ {
  "productStoreId" : "STORE",
  "orderId" : "12082",
  "orderName" : "9000004032",
  "orderDate" : "2024-02-23T03:43:23+09:00",
  "orderStatusId" : "ORDER_APPROVED",
  "entryDate" : "2024-02-23T03:50:12+09:00",
  "orderExternalId" : "5384320450749",
  "currency" : "JPY",
  "grandTotal" : 1870,
  "orderItemSeqId" : null,
  "itemStatusId" : null,
  "orderItemQuantity" : null,
  "reservedItemQuantity" : null,
  "reservedDatetime" : null,
  "unitPrice" : null,
  "orderItemExternalId" : null,
  "itemDescription" : null,
  "requestedDeliveryDate" : null,
  "requestedDeliveryTime" : null,
  "deliveryWindow" : null,
  "shipGroupSeqId" : null,
  "shipmentMethodTypeId" : null,
  "postalContactMechId" : null,
  "telecomContactMechId" : null,
  "orderFacilityId" : null,
  "carrierPartyId" : null,
  "externalFulfillmentOrderItemId" : null,
  "fulfillmentStatus" : null,
  "customerFirstName" : "jhon",
  "customerLastName" : "deo",
  "facilityId" : null,
  "facilityExternalId" : null,
  "facilityTypeId" : null,
  "parentFacilityTypeId" : null,
  "statusDatetime" : null,
  "productId" : null,
  "productTypeId" : null,
  "salesChannel" : "WEB_CHANNEL",
  "customerPartyId" : "10290",
  "isShippingChargesSent" : "Y",
  "billTo" : {
    "countryGeoCode" : "JP",
    "stateProvinceGeoCode" : null,
    "contactMechId" : "18227",
    "toName" : "jhon deo",
    "attnName" : null,
    "address1" : "足立",
    "address2" : null,
    "houseNumber" : null,
    "houseNumberExt" : null,
    "directions" : null,
    "city" : "足立区",
    "cityGeoId" : null,
    "postalCode" : "120-0015",
    "postalCodeExt" : null,
    "countryGeoId" : "JPN",
    "stateProvinceGeoId" : null,
    "countyGeoId" : null,
    "municipalityGeoId" : null,
    "postalCodeGeoId" : null,
    "geoPointId" : "11795",
    "encodedAddressKey" : null,
    "latitude" : null,
    "longitude" : null,
    "isResidentialAddress" : "Y",
    "phone" : {
      "contactMechId" : "18228",
      "countryCode" : "1",
      "areaCode" : null,
      "contactNumber" : "0593785656",
      "askForName" : null,
      "lastUpdatedStamp" : "2024-02-23T03:50:12+09:00"
    }
  },
  "orderIdentifications" : [ {
    "idValue" : "5384320450749",
    "orderId" : "12082",
    "fromDate" : "2024-02-23T03:50:12+09:00",
    "lastUpdatedStamp" : "2024-02-23T03:50:12+09:00",
    "orderIdentificationTypeId" : "SHOPIFY_ORD_ID",
    "thruDate" : null
  }, {
    "orderId" : "12082",
    "fromDate" : "2024-02-23T03:50:12+09:00",
    "orderIdentificationTypeId" : "SHOPIFY_ORD_NAME",
    "lastUpdatedStamp" : "2024-02-23T03:50:12+09:00",
    "idValue" : "9000004032",
    "thruDate" : null
  }, {
    "lastUpdatedStamp" : "2024-02-23T03:50:12+09:00",
    "orderId" : "12082",
    "fromDate" : "2024-02-23T03:50:12+09:00",
    "orderIdentificationTypeId" : "SHOPIFY_ORD_NO",
    "idValue" : "4032",
    "thruDate" : null
  } ],
  "customerPartyIdentifications" : [ {
    "lastUpdatedStamp" : "2024-02-23T01:50:16+09:00",
    "partyIdentificationTypeId" : "SHOPIFY_CUST_ID",
    "idValue" : "7053008306365",
    "partyId" : "10290"
  } ],
  "payments" : [ {
    "paymentMethodCode" : null,
    "amount" : 1870,
    "paymentMethodTypeId" : "EXT_SHOP_OTHR_GTWAY",
    "paymentMethodDescription" : "Ext Other Gateways",
    "orderId" : "12082",
    "statusId" : "PAYMENT_AUTHORIZED",
    "returnId" : null,
    "createdDate" : "2024-02-23T03:50:12+09:00"
  } ],
  "orderAdjustments" : [ {
    "customerReferenceId" : null,
    "correspondingProductId" : null,
    "orderItemSeqId" : "_NA_",
    "includeInShipping" : null,
    "description" : null,
    "exemptAmount" : null,
    "productPromoId" : null,
    "taxAuthPartyId" : null,
    "lastModifiedByUserLogin" : null,
    "oldPercentage" : null,
    "orderAdjustmentTypeId" : "SHIPPING_SALES_TAX",
    "primaryGeoId" : null,
    "taxAuthGeoId" : null,
    "originalAdjustmentId" : null,
    "amount" : 50,
    "secondaryGeoId" : null,
    "createdByUserLogin" : null,
    "orderAdjustmentId" : null,
    "amountAlreadyIncluded" : null,
    "lastUpdatedStamp" : null,
    "comments" : null,
    "orderId" : "12082",
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
    "sourcePercentage" : null
  }, {
    "customerReferenceId" : null,
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
    "amount" : 500,
    "amountAlreadyIncluded" : null,
    "lastUpdatedStamp" : null,
    "comments" : null,
    "orderId" : "12082",
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
    "sourcePercentage" : null,
    "orderAdjustmentTypeId" : "SHIPPING_CHARGES"
  } ],
  "orderAttributes" : [ {
    "lastUpdatedStamp" : "2024-02-23T04:05:15+09:00",
    "orderId" : "12082",
    "attrDescription" : null,
    "attrName" : "COD_FEE_ADJ_CREATED",
    "attrValue" : "true"
  } ],
  "orderItems" : [ {
    "productStoreId" : "STORE",
    "orderId" : "12082",
    "orderName" : "9000004032",
    "orderDate" : "2024-02-23T03:43:23+09:00",
    "orderStatusId" : "ORDER_APPROVED",
    "entryDate" : "2024-02-23T03:50:12+09:00",
    "orderExternalId" : "5384320450749",
    "currency" : "JPY",
    "grandTotal" : 1870,
    "orderItemSeqId" : "00101",
    "itemStatusId" : "ITEM_APPROVED",
    "orderItemQuantity" : 1,
    "reservedItemQuantity" : 1,
    "reservedDatetime" : "2024-02-23T04:20:07+09:00",
    "unitPrice" : 1200,
    "orderItemExternalId" : "12915436126397",
    "itemDescription" : "ソックス クルー 3ペア ホワイト",
    "requestedDeliveryDate" : null,
    "requestedDeliveryTime" : null,
    "deliveryWindow" : null,
    "shipGroupSeqId" : "00001",
    "shipmentMethodTypeId" : "STANDARD",
    "postalContactMechId" : "18224",
    "telecomContactMechId" : "18225",
    "orderFacilityId" : null,
    "carrierPartyId" : "_NA_",
    "externalFulfillmentOrderItemId" : null,
    "fulfillmentStatus" : null,
    "customerFirstName" : "jhon",
    "customerLastName" : "deo",
    "facilityId" : "WH0615",
    "facilityExternalId" : "22",
    "facilityTypeId" : "WAREHOUSE",
    "parentFacilityTypeId" : "DISTRIBUTION_CENTER",
    "statusDatetime" : "2024-02-23T04:05:15+09:00",
    "productId" : "60757",
    "productTypeId" : "FINISHED_GOOD",
    "salesChannel" : "WEB_CHANNEL",
    "customerPartyId" : "10290",
    "shipTo" : {
      "countryGeoCode" : "JP",
      "stateProvinceGeoCode" : null,
      "contactMechId" : "18224",
      "toName" : "jhon deo",
      "attnName" : null,
      "address1" : "足立",
      "address2" : null,
      "houseNumber" : null,
      "houseNumberExt" : null,
      "directions" : null,
      "city" : "足立区",
      "cityGeoId" : null,
      "postalCode" : "120-0015",
      "postalCodeExt" : null,
      "countryGeoId" : "JPN",
      "stateProvinceGeoId" : null,
      "countyGeoId" : null,
      "municipalityGeoId" : null,
      "postalCodeGeoId" : null,
      "geoPointId" : "11794",
      "encodedAddressKey" : null,
      "latitude" : 35.7610621,
      "longitude" : 139.8073929,
      "isResidentialAddress" : "Y",
      "phone" : {
        "contactMechId" : "18225",
        "countryCode" : "1",
        "areaCode" : null,
        "contactNumber" : "0593785656",
        "askForName" : null,
        "lastUpdatedStamp" : "2024-02-23T03:50:12+09:00"
      }
    },
    "goodIdentifications" : [ {
      "idValue" : "37639003275453",
      "fromDate" : "2023-12-25T03:48:21+09:00",
      "productId" : "60757",
      "goodIdentificationTypeId" : "SHOPIFY_PROD_ID",
      "lastUpdatedStamp" : "2023-12-25T03:48:31+09:00",
      "thruDate" : null
    }, {
      "lastUpdatedStamp" : "2023-12-25T03:48:31+09:00",
      "idValue" : "12674027-2527",
      "fromDate" : "2023-12-25T03:48:21+09:00",
      "productId" : "60757",
      "goodIdentificationTypeId" : "SHOPIFY_PROD_SKU",
      "thruDate" : null
    }, {
      "idValue" : "12674027-2527",
      "fromDate" : "2023-12-25T03:48:21+09:00",
      "productId" : "60757",
      "lastUpdatedStamp" : "2023-12-25T03:48:31+09:00",
      "goodIdentificationTypeId" : "SKU",
      "thruDate" : null
    }, {
      "lastUpdatedStamp" : "2023-12-25T03:48:21+09:00",
      "fromDate" : "2023-12-25T03:48:21+09:00",
      "productId" : "60757",
      "idValue" : "4550236388084",
      "goodIdentificationTypeId" : "UPCA",
      "thruDate" : null
    } ],
    "orderItemAdjustments" : [ {
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
      "amount" : 120,
      "originalAdjustmentId" : null,
      "secondaryGeoId" : null,
      "createdByUserLogin" : null,
      "orderAdjustmentId" : null,
      "amountAlreadyIncluded" : null,
      "orderAdjustmentTypeId" : "SALES_TAX",
      "lastUpdatedStamp" : null,
      "comments" : null,
      "orderId" : "12082",
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
      "sourcePercentage" : null,
      "orderItemSeqId" : "00101"
    } ],
    "orderItemAttributes" : [ ],
    "facilityGroupMembers" : [ {
      "sequenceNum" : null,
      "fromDate" : "2023-12-26T08:25:24+09:00",
      "facilityId" : "WH0615",
      "lastUpdatedStamp" : "2023-12-26T08:25:24+09:00",
      "facilityGroupId" : "FAC_GRP",
      "thruDate" : null
    }, {
      "facilityGroupId" : "OMS_FULFILLMENT",
      "lastUpdatedStamp" : "2023-12-26T08:25:24+09:00",
      "sequenceNum" : null,
      "facilityId" : "WH0615",
      "fromDate" : "2023-12-26T08:25:24+09:00",
      "thruDate" : null
    }, {
      "lastUpdatedStamp" : "2024-02-05T05:45:04+09:00",
      "facilityGroupId" : "PICKUP",
      "sequenceNum" : null,
      "facilityId" : "WH0615",
      "fromDate" : "2024-02-05T05:44:57+09:00",
      "thruDate" : null
    } ],
    "fromOrderItemAssocs" : [ ],
    "toOrderItemAssocs" : [ ],
    "productFeatures" : [ {
      "amount" : null,
      "productFeatureApplTypeId" : "STANDARD_FEATURE",
      "recurringAmount" : null,
      "sequenceNum" : 2,
      "idCode" : null,
      "contentId" : null,
      "numberSpecified" : null,
      "productFeatureCategoryId" : null,
      "uomId" : null,
      "productFeatureId" : "10016",
      "productFeatureTypeId" : "COLOR",
      "thruDate" : null,
      "fromDate" : "2023-12-25T03:48:21+09:00",
      "productId" : "60757",
      "defaultSequenceNum" : null,
      "defaultAmount" : null,
      "imageUrl" : null,
      "abbrev" : null,
      "description" : "ホワイト"
    }, {
      "productFeatureId" : "10396",
      "amount" : null,
      "productFeatureApplTypeId" : "STANDARD_FEATURE",
      "recurringAmount" : null,
      "idCode" : null,
      "sequenceNum" : 1,
      "contentId" : null,
      "numberSpecified" : null,
      "productFeatureCategoryId" : null,
      "description" : "2527",
      "uomId" : null,
      "thruDate" : null,
      "fromDate" : "2023-12-25T03:48:21+09:00",
      "productId" : "60757",
      "defaultSequenceNum" : null,
      "defaultAmount" : null,
      "imageUrl" : null,
      "abbrev" : null,
      "productFeatureTypeId" : "SIZE"
    } ]
  } ]
} ]
```

</details>

# Attributes

**The following attributes have been prepared in the feed:**

| Field Name | Description | Sample value |
|------------|-------------|-------|
| productStoreId | The ID of the product store | STORE |
| orderId | The HotWax Commerce unique identifier for the order | 12082 |
| orderName | The eCommerce order identifier | 9000004032 |
| orderDate | The date and time the order was placed on eCommerce | 2024-02-23T03:43:23+09:00 |
| orderStatusId | Order status | ORDER_APPROVED |
| entryDate | The date and time the order was imported in HotWax Commerce OMS | 2024-02-23T03:50:12+09:00 |
| orderExternalId | The external ID of the order | 5384320450749 |
| currency | The payment currency used for the order | JPY |
| grandTotal | The total sum of all costs associated with an order | 1870 |
| orderItemSeqId | The sequence ID of the order item in order object | null |
| itemStatusId | Item status  | null |
| orderItemQuantity | Order item quantity | null |
| **reservedItemQuantity** | Reserved item quantity from the Order | null |
| reservedDatetime | The date and time the items were reserved | null |
| unitPrice | The unit price of the item | null |
| orderItemExternalId | The external ID of the order item | null |
| itemDescription | The description of the item | null |
| requestedDeliveryDate | The requested delivery date of the order | null |
| requestedDeliveryTime | The requested delivery time of the order | null |
| deliveryWindow | The time frame during which a delivery is expected | null |
| shipGroupSeqId | The sequence ID of the ship group | null |
| shipmentMethodTypeId | The shipment method type ID | null |
| postalContactMechId | The postal contact mechanism ID | null |
| telecomContactMechId | The telecom contact mechanism ID | null |
| **orderFacilityId** | The order facility ID | null |
| **carrierPartyId** | The carrier party ID | null |
| **externalFulfillmentOrderItemId** | The external fulfillment order item ID | null |
| fulfillmentStatus | The fulfillment status | null |
| customerFirstName | The first name of the customer | jhon |
| customerLastName | The last name of the customer | deo |
| facilityId | The facility where order is brokered | null |
| facilityExternalId | The external ID of the facility | null |
| facilityTypeId | The facility type ID, which can be Retail store or Warehouse | null |
| parentFacilityTypeId | The parent facility type ID | null |
| statusDatetime | The date and time of the status | null |
| productId | The product ID | null |
| productTypeId | The product type ID | null |
| salesChannel | The sales channel | WEB_CHANNEL |
| customerPartyId | The customer party ID | 10290 |
| isShippingChargesSent | Indicates if shipping charges are sent | Y |
| billTo | The billing information | See below |
| orderIdentifications | The order identifications | See below |
| customerPartyIdentifications | The customer party identifications | See below |
| payments | The payments | See below |
| orderAdjustments | The order adjustments | See below |
| orderAttributes | The order attributes | See below |
| orderItems | The order items | See below |

**This object contains the following attributes, each of which has internal nesting:**

| Field Name | Description | Sample value |
|------------|-------------|-------|
| billTo | The billing information | See below |
| orderIdentifications | The order identifications | See below |
| customerPartyIdentifications | The customer party identifications | See below |
| payments | The payments | See below |
| orderAdjustments | The order adjustments | See below |
| orderAttributes | The order attributes | See below |
| orderItems | The order items | See below |


### billTo
| Field Name | Description | Sample value |
|------------|-------------|-------|
| countryGeoCode | The country geo code | JP |
| stateProvinceGeoCode | The state province geo code | null |
| contactMechId | The contact mechanism ID | 18227 |
| toName | The name of the recipient | jhon deo |
| attnName | The attention name | null |
| address1 | The first line of the address | 足立 |
| address2 | The second line of the address | null |
| houseNumber | The house number | null |
| houseNumberExt | The house number extension | null |
| directions | The directions | null |
| city | The city | 足立区 |
| cityGeoId | The city geo ID | null |
| postalCode | The postal code | 120-0015 |
| postalCodeExt | The postal code extension | null |
| countryGeoId | The country geo ID | JPN |
| stateProvinceGeoId | The state province geo ID | null |
| countyGeoId | The county geo ID | null |
| municipalityGeoId | The municipality geo ID | null |
| postalCodeGeoId | The postal code geo ID | null |
| geoPointId | The geo point ID | 11795 |
| encodedAddressKey | The encoded address key | null |
| latitude | The latitude | null |
| longitude | The longitude | null |
| isResidentialAddress | Indicates if the address is residential | Y |
| phone | The phone information | See below |

### phone
| Field Name | Description | Sample value |
|------------|-------------|-------|
| contactMechId | The contact mechanism ID | 18228 |
| countryCode | The country code | 1 |
| areaCode | The area code | null |
| contactNumber | The contact number | 0593785656 |
| askForName | The name to ask for | null |
| lastUpdatedStamp | The date and time of the last update | 2024-02-23T03:50:12+09:00 |

### orderIdentifications
| Field Name | Description | Sample value |
|------------|-------------|-------|
| idValue | The ID value | 5384320450749 |
| orderId | The order ID | 12082 |
| fromDate | The from date | 2024-02-23T03:50:12+09:00 |
| lastUpdatedStamp | The date and time of the last update | 2024-02-23T03:50:12+09:00 |
| orderIdentificationTypeId | The order identification type ID | SHOPIFY_ORD_ID |
| thruDate | The thru date | null |

### customerPartyIdentifications
| Field Name | Description | Sample value |
|------------|-------------|-------|
| lastUpdatedStamp | The date and time of the last update | 2024-02-23T01:50:16+09:00 |
| partyIdentificationTypeId | The party identification type ID | SHOPIFY_CUST_ID |
| idValue | The ID value | 7053008306365 |
| partyId | The party ID | 10290 |

### payments
| Field Name | Description | Sample value |
|------------|-------------|-------|
| paymentMethodCode | The payment method code | null |
| amount | The amount | 1870 |
| paymentMethodTypeId | The payment method type ID | EXT_SHOP_OTHR_GTWAY |
| paymentMethodDescription | The payment method description | Ext Other Gateways |
| orderId | The order ID | 12082 |
| statusId | The status ID | PAYMENT_AUTHORIZED |
| returnId | The return ID | null |
| createdDate | The date and time of creation | 2024-02-23T03:50:12+09:00 |

### orderAdjustments
| Field Name | Description | Sample value |
|------------|-------------|-------|
| customerReferenceId | The customer reference ID | null |
| correspondingProductId | The corresponding product ID | null |
| orderItemSeqId | The order item sequence ID | _NA_ |
| includeInShipping | Indicates if the adjustment is included in shipping | null |
| description | The description of the adjustment | null |
| exemptAmount | The exempt amount | null |
| productPromoId | The product promo ID | null |
| taxAuthPartyId | The tax authority party ID | null |
| lastModifiedByUserLogin | The ID of the last user login that modified the adjustment | null |
| oldPercentage | The old percentage | null |
| orderAdjustmentTypeId | The order adjustment type ID | SHIPPING_SALES_TAX |
| primaryGeoId | The primary geo ID | null |
| taxAuthGeoId | The tax authority geo ID | null |
| originalAdjustmentId | The original adjustment ID | null |
| amount | The amount | 50 |
| secondaryGeoId | The secondary geo ID | null |
| createdByUserLogin | The ID of the user login that created the adjustment | null |
| orderAdjustmentId | The order adjustment ID | null |
| amountAlreadyIncluded | The amount already included | null |
| lastUpdatedStamp | The date and time of the last update | null |
| comments | The comments | null |
| orderId | The order ID | 12082 |
| recurringAmount | The recurring amount | null |
| lastModifiedDate | The date and time of the last modification | null |
| sourceReferenceId | The source reference ID | null |
| productPromoRuleId | The product promo rule ID | null |
| isManual | Indicates if the adjustment is manual | null |
| productFeatureId | The product feature ID | null |
| taxAuthorityRateSeqId | The tax authority rate sequence ID | null |
| overrideGlAccountId | The override GL account ID | null |
| oldAmountPerQuantity | The old amount per quantity | null |
| shipGroupSeqId | The ship group sequence ID | null |
| includeInTax | Indicates if the adjustment is included in tax | null |
| createdDate | The date and time of creation | null |
| productPromoActionSeqId | The product promo action sequence ID | null |
| sourcePercentage | The source percentage | null |

### orderAttributes
| Field Name | Description | Sample value |
|------------|-------------|-------|
| lastUpdatedStamp | The date and time of the last update | 2024-02-23T04:05:15+09:00 |
| orderId | The order ID | 12082 |
| attrDescription | The attribute description | null |
| attrName | The attribute name | COD_FEE_ADJ_CREATED |
| attrValue | The attribute value | true |

### orderItems
| Field Name | Description | Sample value |
|------------|-------------|-------|
| productStoreId | The ID of the product store | STORE |
| orderId | The unique identifier for the order | 12082 |
| orderName | The name of the order | 9000004032 |
| orderDate | The date and time the order was placed | 2024-02-23T03:43:23+09:00 |
| orderStatusId | The status of the order | ORDER_APPROVED |
| entryDate | The date and time the order was entered | 2024-02-23T03:50:12+09:00 |
| orderExternalId | The external ID of the order | 5384320450749 |
| currency | The currency used for the order | JPY |
| grandTotal | The total amount of the order | 1870 |
| orderItemSeqId | The sequence ID of the order item | 00101 |
| itemStatusId | The status of the item | ITEM_APPROVED |
| orderItemQuantity | The quantity of the order item | 1 |
| reservedItemQuantity | The quantity of reserved items | 1 |
| reservedDatetime | The date and time the items were reserved | 2024-02-23T04:20:07+09:00 |
| unitPrice | The unit price of the item | 1200 |
| orderItemExternalId | The external ID of the order item | 12915436126397 |
| itemDescription | The description of the item | ソックス クルー 3ペア ホワイト |
| requestedDeliveryDate | The requested delivery date | null |
| requestedDeliveryTime | The requested delivery time | null |
| deliveryWindow | The delivery window | null |
| shipGroupSeqId | The sequence ID of the ship group | 00001 |
| shipmentMethodTypeId | The shipment method type ID | STANDARD |
| postalContactMechId | The postal contact mechanism ID | 18224 |
| telecomContactMechId | The telecom contact mechanism ID | 18225 |
| orderFacilityId | The order facility ID | null |
| carrierPartyId | The carrier party ID | _NA_ |
| externalFulfillmentOrderItemId | The external fulfillment order item ID | null |
| fulfillmentStatus | The fulfillment status | null |
| customerFirstName | The first name of the customer | jhon |
| customerLastName | The last name of the customer | deo |
| facilityId | The facility ID | WH0615 |
| facilityExternalId | The external ID of the facility | 22 |
| **facilityTypeId** | The facility type ID | WAREHOUSE |
| **parentFacilityTypeId** | The parent facility type ID | DISTRIBUTION_CENTER |
| **statusDatetime** | The date and time of the status | 2024-02-23T04:05:15+09:00 |
| productId | The product's unique identifier in HotWax Commerce | 60757 |
| productTypeId | The type of product identification | FINISHED_GOOD |
| salesChannel | The sales channel | WEB_CHANNEL |
| customerPartyId | The customer's unique identification in HotWax Commerce | 10290 |
| shipTo | The shipping information | See below |
| goodIdentifications | The product/good identifications | See below |
| orderItemAdjustments | The order item adjustments | See below |
| orderItemAttributes | The order item attributes | See below |
| facilityGroupMembers | The facility group members | See below |
| **fromOrderItemAssocs** | The from order item associations | See below |
| **toOrderItemAssocs** | The to order item associations | See below |
| productFeatures | The product features | See below |

### shipTo
| Field Name | Description | Sample value |
|------------|-------------|-------|
| countryGeoCode | The country geo code | JP |
| stateProvinceGeoCode | The state province geo code | null |
| contactMechId | The contact mechanism ID | 18224 |
| toName | The name of the recipient | jhon deo |
| **attnName** | The attention name | null |
| address1 | The first line of the address | 足立 |
| address2 | The second line of the address | null |
| houseNumber | The house number | null |
| houseNumberExt | The house number extension | null |
| directions | The directions | null |
| city | The city | 足立区 |
| cityGeoId | The city geo ID | null |
| postalCode | The postal code | 120-0015 |
| postalCodeExt | The postal code extension | null |
| countryGeoId | The country geo ID | JPN |
| stateProvinceGeoId | The state province geo ID | null |
| countyGeoId | The county geo ID | null |
| municipalityGeoId | The municipality geo ID | null |
| postalCodeGeoId | The postal code geo ID | null |
| geoPointId | The geo point ID | 11794 |
| **encodedAddressKey** | The encoded address key | null |
| latitude | The latitude | 35.7610621 |
| longitude | The longitude | 139.8073929 |
| isResidentialAddress | Indicates if the address is residential | Y |
| phone | The phone information | See below |

### goodIdentifications
| Field Name | Description | Sample value |
|------------|-------------|-------|
| idValue | The good identifications ID value | 37639003275453 |
| fromDate | The identification creation date | 2023-12-25T03:48:21+09:00 |
| productId | The HotWax Commerce's product ID | 60757 |
| goodIdentificationTypeId | The type of good identification | SHOPIFY_PROD_ID |
| lastUpdatedStamp | The date and time of the last update | 2023-12-25T03:48:31+09:00 |
| thruDate | The identification expiration date | null |

### orderItemAdjustments: WIP
| Field Name | Description | Sample value |
|------------|-------------|-------|
| **customerReferenceId** | The customer reference ID | null |
| **correspondingProductId** | The corresponding product ID | null |
| **includeInShipping** | Indicates if the adjustment is included in shipping | null |
| description | The description of the adjustment | null |
| **exemptAmount** | The exempt amount | null |
| **productPromoId** | The product promo ID | null |
| taxAuthPartyId | The tax authority party ID | null |
| lastModifiedByUserLogin | The ID of the last user login that modified the adjustment | null |
| oldPercentage | The old percentage | null |
| primaryGeoId | The primary geo ID | null |
| taxAuthGeoId | The tax authority geo ID | null |
| amount | The amount | 120 |
| originalAdjustmentId | The original adjustment ID | null |
| secondaryGeoId | The secondary geo ID | null |
| createdByUserLogin | The ID of the user login that created the adjustment | null |
| orderAdjustmentId | The order adjustment ID | null |
| amountAlreadyIncluded | The amount already included | null |
| orderAdjustmentTypeId | The order adjustment type ID | SALES_TAX |
| lastUpdatedStamp | The date and time of the last update | null |
| comments | The comments | null |
| orderId | The order ID | 12082 |
| recurringAmount | The recurring amount | null |
| lastModifiedDate | The date and time of the last modification | null |
| sourceReferenceId | The source reference ID | null |
| productPromoRuleId | The product promo rule ID | null |
| isManual | Indicates if the adjustment is manual | null |
| productFeatureId | The product feature ID | null |
| taxAuthorityRateSeqId | The tax authority rate sequence ID | null |
| overrideGlAccountId | The override GL account ID | null |
| oldAmountPerQuantity | The old amount per quantity | null |
| shipGroupSeqId | The ship group sequence ID | null |
| includeInTax | Indicates if the adjustment is included in tax | null |
| createdDate | The date and time of creation | null |
| productPromoActionSeqId | The product promo action sequence ID | null |
| sourcePercentage | The source percentage | null |

### orderItemAttributes
| Field Name | Description | Sample value |
|------------|-------------|-------|
| lastUpdatedStamp | The date and time of the last update | 2024-02-23T03:50:12+09:00 |
| orderId | The order ID | 12082 |
| attrDescription | The attribute description | null |
| attrName | The attribute name | COD_FEE_ADJ_CREATED |
| attrValue | The attribute value | true |

### facilityGroupMembers
| Field Name | Description | Sample value |
|------------|-------------|-------|
| facilityId | The facility ID | WH0615 |
| facilityGroupId | The facility group ID | 22 |
| thruDate | The thru date | null |
| fromDate | The from date | 2024-02-23T03:50:12+09:00 |
| **sequenceNum** | The sequence number | 1 |
| facilityGroupTypeId | The type of facility group | WAREHOUSE |

### fromOrderItemAssocs: WIP
| Field Name | Description | Sample value |
|------------|-------------|-------|
| **orderId** | The order ID | 12082 |
| orderItemSeqId | The order item sequence ID | 00101 |
| toOrderId | The to order ID | null |
| fromDate | The from date | 2024-02-23T03:50:12+09:00 |
| lastUpdatedStamp | The date and time of the last update | 2024-02-23T03:50:12+09:00 |
| toOrderItemSeqId | The to order item sequence ID | null |
| sequenceNum | The sequence number | 1 |
| lastModifiedDate | The date and time of the last modification | null |
| createdByUserLogin | The ID of the user login that created the association | null |
| createdDate | The date and time of creation | null |
| lastModifiedByUserLogin | The ID of the last user login that modified the association | null |

### toOrderItemAssocs: WIP
| Field Name | Description | Sample value |
|------------|-------------|-------|
| orderId | The order ID | 12082 |
| orderItemSeqId | The order item sequence ID | 00101 |
| toOrderId | The to order ID | null |
| fromDate | The from date | 2024-02-23T03:50:12+09:00 |
| lastUpdatedStamp | The date and time of the last update | 2024-02-23T03:50:12+09:00 |
| toOrderItemSeqId | The to order item sequence ID | null |
| sequenceNum | The sequence number | 1 |
| lastModifiedDate | The date and time of the last modification | null |
| createdByUserLogin | The ID of the user login that created the association | null |
| createdDate | The date and time of creation | null |
| lastModifiedByUserLogin | The ID of the last user login that modified the association | null |

### productFeatures: WIP
| Field Name | Description | Sample value |
|------------|-------------|-------|
| lastUpdatedStamp | The date and time of the last update | 2024-02-23T03:50:12+09:00 |
| orderId | The order ID | 12082 |
| attrDescription | The attribute description | null |
| attrName | The attribute name | COD_FEE_ADJ_CREATED |
| attrValue | The attribute value | true |