---
description: >-
  Discover the Brokered Order Items feed, a JSON-formatted feed generated from
  HotWax Commerce OMS for streamlined order management.
---

# Brokered Order Items Feed

## Introduction

The Brokered Order Items feed is an order-wise JSON-formatted feed generated from HotWax Commerce OMS. This feed contains details about brokered order items, which can be brokered to either Warehouse or Store Type facilities. The feed can be used for integration with other external systems.

## Use case

### Communication with the External Order fulfillment system

The Brokered Order Items feed is useful for retailers who would like to do fulfillment outside OMS through an external system such as a Warehouse Management System (WMS). This feed provides the out-of-the-box data available from OMS, and retailers can use it as is or after transformation to ingest into external systems through file-based integration.

## Customization

The Brokered Order Items feed has certain out-of-the-box customizations that allow users to generate the feed as per the requirements.

| **Parameter**           | **Description**                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------- |
| `orderId`               | Allows to generate the feed for a specific order ID.                                  |
| `orderItemSeqId`        | Allows to generate the feed for a specific order item sequence ID within an order.    |
| `parentFacilityTypeIds` | Specifies the type of facility from which the brokered order items are being fetched. |
| `productStoreIds`       | Allows you to set the product store IDs to generate brand-specific feeds.             |
| `systemMessageTypeId`   | The SFTP path where the feed will be stored.                                          |
| `systemMessageRemoteId` | The SFTP credentials required to access the SFTP location.                            |

<details>

<summary>Sample Brokered Order Items feed</summary>

```json
[ {
  "productStoreId" : "SG_STORE",
  "orderId" : "SGSM10007",
  "orderName" : "#1068",
  "orderDate" : "2020-01-15T11:26:03-08:00",
  "orderStatusId" : "ORDER_APPROVED",
  "entryDate" : "2020-01-17T12:31:57-08:00",
  "orderExternalId" : null,
  "currency" : "USD",
  "grandTotal" : 104,
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
  "customerFirstName" : "Demo",
  "customerLastName" : "User",
  "facilityId" : null,
  "facilityExternalId" : null,
  "facilityTypeId" : null,
  "parentFacilityTypeId" : null,
  "statusDatetime" : null,
  "productId" : null,
  "productTypeId" : null,
  "internalName" : null,
  "salesChannel" : "WEB_CHANNEL",
  "customerPartyId" : "10004",
  "isShippingChargesSent" : "Y",
  "billTo" : {
    "countryGeoCode" : "US",
    "stateProvinceGeoCode" : "TN",
    "contactMechId" : "10802",
    "toName" : "demo user",
    "attnName" : null,
    "address1" : "11 U.S. 11",
    "address2" : null,
    "houseNumber" : null,
    "houseNumberExt" : null,
    "directions" : null,
    "city" : "Knoxville",
    "cityGeoId" : null,
    "postalCode" : "37010",
    "postalCodeExt" : null,
    "countryGeoId" : "USA",
    "stateProvinceGeoId" : "TN",
    "countyGeoId" : null,
    "municipalityGeoId" : null,
    "postalCodeGeoId" : null,
    "geoPointId" : null,
    "encodedAddressKey" : null,
    "latitude" : null,
    "longitude" : null,
    "isResidentialAddress" : "Y",
    "phone" : null
  },
  "orderIdentifications" : [ {
    "orderId" : "SGSM10007",
    "idValue" : "2035556286557",
    "fromDate" : "2020-01-17T12:31:58-08:00",
    "lastUpdatedStamp" : "2020-01-17T12:31:58-08:00",
    "orderIdentificationTypeId" : "SHOPIFY_ORD_ID",
    "thruDate" : null
  }, {
    "orderId" : "SGSM10007",
    "fromDate" : "2020-01-17T12:31:58-08:00",
    "orderIdentificationTypeId" : "SHOPIFY_ORD_NAME",
    "lastUpdatedStamp" : "2020-01-17T12:31:58-08:00",
    "idValue" : "#1068",
    "thruDate" : null
  }, {
    "orderId" : "SGSM10007",
    "fromDate" : "2020-01-17T12:31:58-08:00",
    "idValue" : "68",
    "orderIdentificationTypeId" : "SHOPIFY_ORD_NO",
    "lastUpdatedStamp" : "2020-01-17T12:31:58-08:00",
    "thruDate" : null
  } ],
  "customerPartyIdentifications" : [ ],
  "payments" : [ {
    "orderId" : "SGSM10007",
    "paymentMethodCode" : null,
    "paymentMethodDescription" : "Shopify Payment",
    "createdDate" : "2020-01-17T12:31:57-08:00",
    "statusId" : "PAYMENT_SETTLED",
    "returnId" : null,
    "amount" : 104,
    "paymentMethodTypeId" : "EXT_SHOPIFY"
  } ],
  "orderAdjustments" : [ {
    "customerReferenceId" : null,
    "correspondingProductId" : null,
    "orderItemSeqId" : "_NA_",
    "includeInShipping" : null,
    "description" : null,
    "exemptAmount" : null,
    "productPromoId" : null,
    "orderId" : "SGSM10007",
    "taxAuthPartyId" : null,
    "lastModifiedByUserLogin" : null,
    "amount" : 15,
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
  "orderAttributes" : [ ],
  "orderItems" : [ {
    "productStoreId" : "SG_STORE",
    "orderId" : "SGSM10007",
    "orderName" : "#1068",
    "orderDate" : "2020-01-15T11:26:03-08:00",
    "orderStatusId" : "ORDER_APPROVED",
    "entryDate" : "2020-01-17T12:31:57-08:00",
    "orderExternalId" : null,
    "currency" : "USD",
    "grandTotal" : 104,
    "orderItemSeqId" : "00001",
    "itemStatusId" : "ITEM_APPROVED",
    "orderItemQuantity" : 1,
    "reservedItemQuantity" : null,
    "reservedDatetime" : null,
    "unitPrice" : 89,
    "orderItemExternalId" : "4458969923677",
    "itemDescription" : "BLACK LEATHER / 37 / 17",
    "requestedDeliveryDate" : null,
    "requestedDeliveryTime" : null,
    "deliveryWindow" : null,
    "shipGroupSeqId" : "00001",
    "shipmentMethodTypeId" : "SECOND_DAY",
    "postalContactMechId" : "10800",
    "telecomContactMechId" : null,
    "orderFacilityId" : null,
    "carrierPartyId" : "_NA_",
    "externalFulfillmentOrderItemId" : null,
    "fulfillmentStatus" : null,
    "customerFirstName" : "Demo",
    "customerLastName" : "User",
    "facilityId" : "1",
    "facilityExternalId" : "1",
    "facilityTypeId" : "RETAIL_STORE",
    "parentFacilityTypeId" : "PHYSICAL_STORE",
    "statusDatetime" : "2020-03-19T11:50:29-07:00",
    "productId" : "10609",
    "productTypeId" : "FINISHED_GOOD",
    "internalName" : "14312158756979",
    "salesChannel" : "WEB_CHANNEL",
    "customerPartyId" : "10004",
    "shipTo" : {
      "countryGeoCode" : "US",
      "stateProvinceGeoCode" : "TN",
      "contactMechId" : "10800",
      "toName" : "demo user",
      "attnName" : null,
      "address1" : "11 U.S. 11",
      "address2" : null,
      "houseNumber" : null,
      "houseNumberExt" : null,
      "directions" : null,
      "city" : "Knoxville",
      "cityGeoId" : null,
      "postalCode" : "37010",
      "postalCodeExt" : null,
      "countryGeoId" : "USA",
      "stateProvinceGeoId" : "TN",
      "countyGeoId" : null,
      "municipalityGeoId" : null,
      "postalCodeGeoId" : null,
      "geoPointId" : null,
      "encodedAddressKey" : null,
      "latitude" : null,
      "longitude" : null,
      "isResidentialAddress" : "Y",
      "phone" : null
    },
    "goodIdentifications" : [ {
      "idValue" : "S00CG30",
      "productId" : "10609",
      "lastUpdatedStamp" : "2022-02-04T07:09:25-08:00",
      "fromDate" : "2020-06-01T12:02:00-07:00",
      "goodIdentificationTypeId" : "SHOPIFY_PROD_SKU",
      "thruDate" : null
    }, {
      "idValue" : "661812039147",
      "fromDate" : "2020-01-17T10:21:16-08:00",
      "goodIdentificationTypeId" : "UPCA",
      "lastUpdatedStamp" : "2022-02-04T07:09:25-08:00",
      "productId" : "10609",
      "thruDate" : null
    } ],
    "orderItemAdjustments" : [ ],
    "orderItemAttributes" : [ ],
    "facilityGroupMembers" : [ {
      "facilityId" : "1",
      "facilityGroupId" : "AUTO_SHIPPING_LABEL",
      "lastUpdatedStamp" : "2021-09-29T01:16:19-07:00",
      "sequenceNum" : 5,
      "fromDate" : "2020-06-25T12:41:21-07:00",
      "thruDate" : null
    }, {
      "facilityId" : "1",
      "facilityGroupId" : "DO_PICKING",
      "lastUpdatedStamp" : "2021-09-29T01:16:19-07:00",
      "fromDate" : "2020-06-25T12:41:21-07:00",
      "sequenceNum" : 5,
      "thruDate" : null
    }, {
      "facilityId" : "1",
      "fromDate" : "2020-06-25T12:41:21-07:00",
      "sequenceNum" : 5,
      "facilityGroupId" : "DO_RATE_SHOP",
      "lastUpdatedStamp" : "2021-09-29T01:16:19-07:00",
      "thruDate" : null
    }, {
      "facilityGroupId" : "OMS_FULFILLMENT",
      "facilityId" : "1",
      "sequenceNum" : 5,
      "fromDate" : "2020-06-25T12:41:21-07:00",
      "thruDate" : null,
      "lastUpdatedStamp" : "2021-09-29T01:16:19-07:00"
    }, {
      "facilityId" : "1",
      "sequenceNum" : null,
      "facilityGroupId" : "SMUS_BROKERING_GROUP",
      "fromDate" : "2023-10-19T08:18:04-07:00",
      "lastUpdatedStamp" : "2023-10-19T08:18:04-07:00",
      "thruDate" : null
    }, {
      "facilityId" : "1",
      "lastUpdatedStamp" : "2023-10-19T08:24:38-07:00",
      "sequenceNum" : null,
      "fromDate" : "2023-10-19T08:24:38-07:00",
      "facilityGroupId" : "SMUS_ST_BRK_GRP",
      "thruDate" : null
    }, {
      "facilityId" : "1",
      "sequenceNum" : null,
      "lastUpdatedStamp" : "2023-11-10T01:18:38-08:00",
      "fromDate" : "2023-11-10T01:18:33-08:00",
      "facilityGroupId" : "SUPERGA_FAC_GRP",
      "thruDate" : null
    }, {
      "facilityGroupId" : "WH_FAC_GROUP",
      "facilityId" : "1",
      "sequenceNum" : null,
      "fromDate" : "2024-01-01T00:00:00-08:00",
      "lastUpdatedStamp" : "2024-01-04T06:50:21-08:00",
      "thruDate" : null
    } ],
    "fromOrderItemAssocs" : [ ],
    "toOrderItemAssocs" : [ ],
    "productFeatures" : [ {
      "amount" : null,
      "productFeatureApplTypeId" : "STANDARD_FEATURE",
      "productFeatureId" : "10015",
      "sequenceNum" : null,
      "recurringAmount" : null,
      "fromDate" : "2020-01-17T10:21:16-08:00",
      "idCode" : null,
      "productFeatureCategoryId" : "10015",
      "contentId" : null,
      "numberSpecified" : null,
      "uomId" : null,
      "thruDate" : null,
      "defaultSequenceNum" : null,
      "description" : "37",
      "defaultAmount" : null,
      "imageUrl" : null,
      "abbrev" : null,
      "productId" : "10609",
      "productFeatureTypeId" : "SIZE"
    }, {
      "amount" : null,
      "productFeatureApplTypeId" : "STANDARD_FEATURE",
      "sequenceNum" : null,
      "recurringAmount" : null,
      "productFeatureId" : "10101",
      "fromDate" : "2020-01-17T10:21:16-08:00",
      "idCode" : null,
      "productFeatureCategoryId" : "10015",
      "contentId" : null,
      "numberSpecified" : null,
      "uomId" : null,
      "description" : "BLACK LEATHER",
      "productFeatureTypeId" : "COLOR",
      "thruDate" : null,
      "defaultSequenceNum" : null,
      "defaultAmount" : null,
      "imageUrl" : null,
      "abbrev" : null,
      "productId" : "10609"
    }, {
      "amount" : null,
      "productFeatureApplTypeId" : "STANDARD_FEATURE",
      "sequenceNum" : null,
      "recurringAmount" : null,
      "productFeatureId" : "10102",
      "fromDate" : "2020-01-17T10:21:16-08:00",
      "idCode" : null,
      "productFeatureCategoryId" : "10015",
      "contentId" : null,
      "numberSpecified" : null,
      "uomId" : null,
      "thruDate" : null,
      "defaultSequenceNum" : null,
      "productFeatureTypeId" : "CODE",
      "defaultAmount" : null,
      "description" : "17",
      "imageUrl" : null,
      "abbrev" : null,
      "productId" : "10609"
    } ]
  } ]
},{
    "productStoreId" : "STORE",
    "orderId" : "KRWE10188",
    "orderName" : "#KREWE37484",
    "orderDate" : "2023-12-07T01:47:49-08:00",
    "orderStatusId" : "ORDER_APPROVED",
    "entryDate" : "2023-12-07T02:09:35-08:00",
    "orderExternalId" : "5499245625544",
    "currency" : "USD",
    "grandTotal" : 390,
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
    "customerFirstName" : "Dhiraj",
    "customerLastName" : "Nagar",
    "facilityId" : null,
    "facilityExternalId" : null,
    "facilityTypeId" : null,
    "parentFacilityTypeId" : null,
    "statusDatetime" : null,
    "productId" : null,
    "productTypeId" : null,
    "internalName" : null,
    "salesChannel" : "1",
    "customerPartyId" : "10005",
    "isShippingChargesSent" : "N",
    "billTo" : {
      "countryGeoCode" : "US",
      "stateProvinceGeoCode" : "FL",
      "contactMechId" : "10948",
      "toName" : "Dhiraj Nagar",
      "attnName" : null,
      "address1" : "Main St Squre",
      "address2" : "Main St Squre",
      "houseNumber" : null,
      "houseNumberExt" : null,
      "directions" : null,
      "city" : "Miami",
      "cityGeoId" : null,
      "postalCode" : "33172",
      "postalCodeExt" : null,
      "countryGeoId" : "USA",
      "stateProvinceGeoId" : "FL",
      "countyGeoId" : null,
      "municipalityGeoId" : null,
      "postalCodeGeoId" : null,
      "geoPointId" : null,
      "encodedAddressKey" : null,
      "latitude" : null,
      "longitude" : null,
      "isResidentialAddress" : "Y",
      "phone" : {
        "contactMechId" : "10949",
        "countryCode" : null,
        "areaCode" : null,
        "contactNumber" : "08973575538",
        "askForName" : null,
        "lastUpdatedStamp" : "2023-12-07T02:09:35-08:00"
      }
    },
    "orderIdentifications" : [ {
      "lastUpdatedStamp" : "2023-12-07T02:09:35-08:00",
      "fromDate" : "2023-12-07T02:09:35-08:00",
      "orderId" : "KRWE10188",
      "idValue" : "5499245625544",
      "orderIdentificationTypeId" : "SHOPIFY_ORD_ID",
      "thruDate" : null
    }, {
      "fromDate" : "2023-12-07T02:09:35-08:00",
      "orderIdentificationTypeId" : "SHOPIFY_ORD_NAME",
      "orderId" : "KRWE10188",
      "idValue" : "#KREWE37484",
      "thruDate" : null,
      "lastUpdatedStamp" : "2023-12-07T02:09:35-08:00"
    }, {
      "orderIdentificationTypeId" : "SHOPIFY_ORD_NO",
      "fromDate" : "2023-12-07T02:09:35-08:00",
      "idValue" : "36484",
      "orderId" : "KRWE10188",
      "lastUpdatedStamp" : "2023-12-07T02:09:35-08:00",
      "thruDate" : null
    } ],
    "customerPartyIdentifications" : [ {
      "partyId" : "10005",
      "idValue" : "5320857",
      "partyIdentificationTypeId" : "NETSUITE_CUSTOMER_ID",
      "lastUpdatedStamp" : "2023-11-22T10:58:34-08:00"
    }, {
      "partyId" : "10005",
      "lastUpdatedStamp" : "2023-11-22T06:11:12-08:00",
      "partyIdentificationTypeId" : "SHOPIFY_CUST_ID",
      "idValue" : "6838392979656"
    } ],
    "payments" : [ {
      "paymentMethodCode" : null,
      "createdDate" : "2023-12-07T02:09:35-08:00",
      "statusId" : "PAYMENT_SETTLED",
      "paymentMethodTypeId" : "EXT_SHOP_MANUAL",
      "amount" : 390,
      "returnId" : null,
      "orderId" : "KRWE10188",
      "paymentMethodDescription" : "Ext manual"
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
      "primaryGeoId" : null,
      "orderId" : "KRWE10188",
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
      "sourceReferenceId" : null,
      "productPromoRuleId" : null,
      "isManual" : null,
      "productFeatureId" : null,
      "taxAuthorityRateSeqId" : null,
      "overrideGlAccountId" : null,
      "oldAmountPerQuantity" : null,
      "shipGroupSeqId" : null,
      "amount" : 35,
      "includeInTax" : null,
      "createdDate" : null,
      "productPromoActionSeqId" : null,
      "sourcePercentage" : null,
      "orderAdjustmentTypeId" : "SHIPPING_CHARGES"
    } ],
    "orderAttributes" : [ {
      "attrDescription" : "Shopify User Id",
      "orderId" : "KRWE10188",
      "attrName" : "shopify_user_id",
      "lastUpdatedStamp" : "2023-12-07T02:09:35-08:00",
      "attrValue" : "82607702216"
    } ],
    "orderItems" : [ {
      "productStoreId" : "STORE",
      "orderId" : "KRWE10188",
      "orderName" : "#KREWE37484",
      "orderDate" : "2023-12-07T01:47:49-08:00",
      "orderStatusId" : "ORDER_APPROVED",
      "entryDate" : "2023-12-07T02:09:35-08:00",
      "orderExternalId" : "5499245625544",
      "currency" : "USD",
      "grandTotal" : 390,
      "orderItemSeqId" : "00101",
      "itemStatusId" : "ITEM_APPROVED",
      "orderItemQuantity" : 1,
      "reservedItemQuantity" : null,
      "reservedDatetime" : null,
      "unitPrice" : 355,
      "orderItemExternalId" : "12980256866504",
      "itemDescription" : "COLEMAN | 18K + Matte Indigo Fade + Gravity + Custom Vanity Tint (KIT PRODUCT)",
      "requestedDeliveryDate" : null,
      "requestedDeliveryTime" : null,
      "deliveryWindow" : null,
      "shipGroupSeqId" : "00001",
      "shipmentMethodTypeId" : "OVR_SHP",
      "postalContactMechId" : "10945",
      "telecomContactMechId" : "10946",
      "orderFacilityId" : null,
      "carrierPartyId" : "FEDEX",
      "externalFulfillmentOrderItemId" : "100217",
      "fulfillmentStatus" : "Sent",
      "customerFirstName" : "Dhiraj",
      "customerLastName" : "Nagar",
      "facilityId" : "114",
      "facilityExternalId" : "114",
      "facilityTypeId" : "WAREHOUSE",
      "parentFacilityTypeId" : "DISTRIBUTION_CENTER",
      "statusDatetime" : "2023-12-07T02:09:50-08:00",
      "productId" : "10344",
      "productTypeId" : "MARKETING_PKG_PICK",
      "internalName" : "VANITYKIT-01",
      "salesChannel" : "1",
      "customerPartyId" : "10005",
      "shipTo" : {
        "countryGeoCode" : "US",
        "stateProvinceGeoCode" : "FL",
        "contactMechId" : "10945",
        "toName" : "Dhiraj Nagar",
        "attnName" : null,
        "address1" : "Main St Squre",
        "address2" : "Main St Squre",
        "houseNumber" : null,
        "houseNumberExt" : null,
        "directions" : null,
        "city" : "Miami",
        "cityGeoId" : null,
        "postalCode" : "33172",
        "postalCodeExt" : null,
        "countryGeoId" : "USA",
        "stateProvinceGeoId" : "FL",
        "countyGeoId" : null,
        "municipalityGeoId" : null,
        "postalCodeGeoId" : null,
        "geoPointId" : null,
        "encodedAddressKey" : null,
        "latitude" : null,
        "longitude" : null,
        "isResidentialAddress" : "Y",
        "phone" : {
          "contactMechId" : "10946",
          "countryCode" : null,
          "areaCode" : null,
          "contactNumber" : "08973575538",
          "askForName" : null,
          "lastUpdatedStamp" : "2023-12-07T02:09:35-08:00"
        }
      },
      "goodIdentifications" : [ {
        "idValue" : "40675",
        "fromDate" : "2023-11-22T11:05:40-08:00",
        "goodIdentificationTypeId" : "NETSUITE_PRODUCT_ID",
        "productId" : "10344",
        "lastUpdatedStamp" : "2024-03-27T01:36:21-07:00",
        "thruDate" : null
      }, {
        "idValue" : "42870659088584",
        "lastUpdatedStamp" : "2023-11-22T06:05:00-08:00",
        "goodIdentificationTypeId" : "SHOPIFY_PROD_ID",
        "productId" : "10344",
        "fromDate" : "2023-11-22T06:05:00-08:00",
        "thruDate" : null
      }, {
        "lastUpdatedStamp" : "2023-11-22T06:05:00-08:00",
        "productId" : "10344",
        "idValue" : "VANITYKIT-01",
        "fromDate" : "2023-11-22T06:05:00-08:00",
        "goodIdentificationTypeId" : "SHOPIFY_PROD_SKU",
        "thruDate" : null
      }, {
        "goodIdentificationTypeId" : "SKU",
        "lastUpdatedStamp" : "2023-11-22T06:05:00-08:00",
        "productId" : "10344",
        "idValue" : "VANITYKIT-01",
        "fromDate" : "2023-11-22T06:05:00-08:00",
        "thruDate" : null
      } ],
      "orderItemAdjustments" : [ ],
      "orderItemAttributes" : [ ],
      "facilityGroupMembers" : [ {
        "sequenceNum" : null,
        "lastUpdatedStamp" : "2023-11-23T13:36:59-08:00",
        "fromDate" : "2023-11-23T13:36:55-08:00",
        "facilityGroupId" : "NETSUITE_FULFILLMENT",
        "facilityId" : "114",
        "thruDate" : null
      }, {
        "facilityGroupId" : "OMS_FULFILLMENT",
        "sequenceNum" : null,
        "fromDate" : "2023-12-07T01:58:42-08:00",
        "lastUpdatedStamp" : "2023-12-07T01:58:42-08:00",
        "facilityId" : "114",
        "thruDate" : null
      } ],
      "fromOrderItemAssocs" : [ ],
      "toOrderItemAssocs" : [ {
        "toOrderItemSeqId" : "00102",
        "quantity" : null,
        "toShipGroupSeqId" : "00001",
        "toOrderId" : "KRWE10188",
        "orderId" : "KRWE10188",
        "orderItemAssocTypeId" : "KIT_COMPONENT",
        "lastUpdatedStamp" : "2023-12-07T02:09:35-08:00",
        "shipGroupSeqId" : "00001",
        "orderItemSeqId" : "00101"
      }, {
        "lastUpdatedStamp" : "2023-12-07T02:09:35-08:00",
        "quantity" : null,
        "toShipGroupSeqId" : "00001",
        "toOrderId" : "KRWE10188",
        "orderId" : "KRWE10188",
        "orderItemAssocTypeId" : "KIT_COMPONENT",
        "shipGroupSeqId" : "00001",
        "orderItemSeqId" : "00101",
        "toOrderItemSeqId" : "00103"
      } ],
      "productFeatures" : [ {
        "productFeatureId" : "10000",
        "amount" : null,
        "productFeatureApplTypeId" : "STANDARD_FEATURE",
        "recurringAmount" : null,
        "description" : "Default Title",
        "idCode" : null,
        "sequenceNum" : 1,
        "contentId" : null,
        "productFeatureTypeId" : "10000",
        "numberSpecified" : null,
        "productId" : "10344",
        "productFeatureCategoryId" : null,
        "uomId" : null,
        "thruDate" : null,
        "defaultSequenceNum" : null,
        "defaultAmount" : null,
        "imageUrl" : null,
        "abbrev" : null,
        "fromDate" : "2023-11-22T06:05:00-08:00"
      } ]
    }, {
      "productStoreId" : "STORE",
      "orderId" : "KRWE10188",
      "orderName" : "#KREWE37484",
      "orderDate" : "2023-12-07T01:47:49-08:00",
      "orderStatusId" : "ORDER_APPROVED",
      "entryDate" : "2023-12-07T02:09:35-08:00",
      "orderExternalId" : "5499245625544",
      "currency" : "USD",
      "grandTotal" : 390,
      "orderItemSeqId" : "00102",
      "itemStatusId" : "ITEM_APPROVED",
      "orderItemQuantity" : 1,
      "reservedItemQuantity" : 1,
      "reservedDatetime" : "2023-12-14T00:15:52-08:00",
      "unitPrice" : 0,
      "orderItemExternalId" : null,
      "itemDescription" : "Default Title (COMPONENT PRODUCT)",
      "requestedDeliveryDate" : null,
      "requestedDeliveryTime" : null,
      "deliveryWindow" : null,
      "shipGroupSeqId" : "00001",
      "shipmentMethodTypeId" : "OVR_SHP",
      "postalContactMechId" : "10945",
      "telecomContactMechId" : "10946",
      "orderFacilityId" : null,
      "carrierPartyId" : "FEDEX",
      "externalFulfillmentOrderItemId" : "100218",
      "fulfillmentStatus" : "Sent",
      "customerFirstName" : "Dhiraj",
      "customerLastName" : "Nagar",
      "facilityId" : "114",
      "facilityExternalId" : "114",
      "facilityTypeId" : "WAREHOUSE",
      "parentFacilityTypeId" : "DISTRIBUTION_CENTER",
      "statusDatetime" : "2023-12-07T02:09:50-08:00",
      "productId" : "10342",
      "productTypeId" : "FINISHED_GOOD",
      "internalName" : "SCJ1-228G-21CS-222",
      "salesChannel" : "1",
      "customerPartyId" : "10005",
      "shipTo" : {
        "countryGeoCode" : "US",
        "stateProvinceGeoCode" : "FL",
        "contactMechId" : "10945",
        "toName" : "Dhiraj Nagar",
        "attnName" : null,
        "address1" : "Main St Squre",
        "address2" : "Main St Squre",
        "houseNumber" : null,
        "houseNumberExt" : null,
        "directions" : null,
        "city" : "Miami",
        "cityGeoId" : null,
        "postalCode" : "33172",
        "postalCodeExt" : null,
        "countryGeoId" : "USA",
        "stateProvinceGeoId" : "FL",
        "countyGeoId" : null,
        "municipalityGeoId" : null,
        "postalCodeGeoId" : null,
        "geoPointId" : null,
        "encodedAddressKey" : null,
        "latitude" : null,
        "longitude" : null,
        "isResidentialAddress" : "Y",
        "phone" : {
          "contactMechId" : "10946",
          "countryCode" : null,
          "areaCode" : null,
          "contactNumber" : "08973575538",
          "askForName" : null,
          "lastUpdatedStamp" : "2023-12-07T02:09:35-08:00"
        }
      },
      "goodIdentifications" : [ {
        "idValue" : "31083",
        "fromDate" : "2023-11-22T11:05:38-08:00",
        "lastUpdatedStamp" : "2024-03-27T01:36:20-07:00",
        "goodIdentificationTypeId" : "NETSUITE_PRODUCT_ID",
        "productId" : "10342",
        "thruDate" : null
      }, {
        "fromDate" : "2023-11-22T06:04:59-08:00",
        "goodIdentificationTypeId" : "SHOPIFY_PROD_ID",
        "idValue" : "42389625733320",
        "productId" : "10342",
        "thruDate" : null,
        "lastUpdatedStamp" : "2023-11-22T06:04:59-08:00"
      }, {
        "idValue" : "SCJ1-228G-21CS-222",
        "fromDate" : "2023-11-22T06:04:59-08:00",
        "productId" : "10342",
        "lastUpdatedStamp" : "2023-11-22T06:04:59-08:00",
        "goodIdentificationTypeId" : "SHOPIFY_PROD_SKU",
        "thruDate" : null
      }, {
        "idValue" : "SCJ1-228G-21CS-222",
        "fromDate" : "2023-11-22T06:04:59-08:00",
        "goodIdentificationTypeId" : "SKU",
        "lastUpdatedStamp" : "2023-11-22T06:04:59-08:00",
        "productId" : "10342",
        "thruDate" : null
      }, {
        "fromDate" : "2023-11-22T06:04:59-08:00",
        "idValue" : "810062125869",
        "goodIdentificationTypeId" : "UPCA",
        "productId" : "10342",
        "lastUpdatedStamp" : "2023-11-22T06:04:59-08:00",
        "thruDate" : null
      } ],
      "orderItemAdjustments" : [ ],
      "orderItemAttributes" : [ ],
      "facilityGroupMembers" : [ {
        "sequenceNum" : null,
        "lastUpdatedStamp" : "2023-11-23T13:36:59-08:00",
        "fromDate" : "2023-11-23T13:36:55-08:00",
        "facilityGroupId" : "NETSUITE_FULFILLMENT",
        "facilityId" : "114",
        "thruDate" : null
      }, {
        "facilityGroupId" : "OMS_FULFILLMENT",
        "sequenceNum" : null,
        "fromDate" : "2023-12-07T01:58:42-08:00",
        "lastUpdatedStamp" : "2023-12-07T01:58:42-08:00",
        "facilityId" : "114",
        "thruDate" : null
      } ],
      "fromOrderItemAssocs" : [ {
        "toOrderItemSeqId" : "00102",
        "quantity" : null,
        "toShipGroupSeqId" : "00001",
        "toOrderId" : "KRWE10188",
        "orderId" : "KRWE10188",
        "orderItemAssocTypeId" : "KIT_COMPONENT",
        "lastUpdatedStamp" : "2023-12-07T02:09:35-08:00",
        "shipGroupSeqId" : "00001",
        "orderItemSeqId" : "00101"
      } ],
      "toOrderItemAssocs" : [ ],
      "productFeatures" : [ {
        "productFeatureId" : "10000",
        "amount" : null,
        "productFeatureApplTypeId" : "STANDARD_FEATURE",
        "recurringAmount" : null,
        "description" : "Default Title",
        "idCode" : null,
        "sequenceNum" : 1,
        "contentId" : null,
        "productFeatureTypeId" : "10000",
        "numberSpecified" : null,
        "productFeatureCategoryId" : null,
        "uomId" : null,
        "productId" : "10342",
        "thruDate" : null,
        "fromDate" : "2023-11-22T06:04:59-08:00",
        "defaultSequenceNum" : null,
        "defaultAmount" : null,
        "imageUrl" : null,
        "abbrev" : null
      } ]
    }, {
      "productStoreId" : "STORE",
      "orderId" : "KRWE10188",
      "orderName" : "#KREWE37484",
      "orderDate" : "2023-12-07T01:47:49-08:00",
      "orderStatusId" : "ORDER_APPROVED",
      "entryDate" : "2023-12-07T02:09:35-08:00",
      "orderExternalId" : "5499245625544",
      "currency" : "USD",
      "grandTotal" : 390,
      "orderItemSeqId" : "00103",
      "itemStatusId" : "ITEM_APPROVED",
      "orderItemQuantity" : 1,
      "reservedItemQuantity" : 1,
      "reservedDatetime" : "2023-12-14T00:15:53-08:00",
      "unitPrice" : 0,
      "orderItemExternalId" : null,
      "itemDescription" : "Dark Blue Gradient / 4B (COMPONENT PRODUCT)",
      "requestedDeliveryDate" : null,
      "requestedDeliveryTime" : null,
      "deliveryWindow" : null,
      "shipGroupSeqId" : "00001",
      "shipmentMethodTypeId" : "OVR_SHP",
      "postalContactMechId" : "10945",
      "telecomContactMechId" : "10946",
      "orderFacilityId" : null,
      "carrierPartyId" : "FEDEX",
      "externalFulfillmentOrderItemId" : "100219",
      "fulfillmentStatus" : "Sent",
      "customerFirstName" : "Dhiraj",
      "customerLastName" : "Nagar",
      "facilityId" : "114",
      "facilityExternalId" : "114",
      "facilityTypeId" : "WAREHOUSE",
      "parentFacilityTypeId" : "DISTRIBUTION_CENTER",
      "statusDatetime" : "2023-12-07T02:09:50-08:00",
      "productId" : "11741",
      "productTypeId" : "FINISHED_GOOD",
      "internalName" : "VANITYLENS-06",
      "salesChannel" : "1",
      "customerPartyId" : "10005",
      "shipTo" : {
        "countryGeoCode" : "US",
        "stateProvinceGeoCode" : "FL",
        "contactMechId" : "10945",
        "toName" : "Dhiraj Nagar",
        "attnName" : null,
        "address1" : "Main St Squre",
        "address2" : "Main St Squre",
        "houseNumber" : null,
        "houseNumberExt" : null,
        "directions" : null,
        "city" : "Miami",
        "cityGeoId" : null,
        "postalCode" : "33172",
        "postalCodeExt" : null,
        "countryGeoId" : "USA",
        "stateProvinceGeoId" : "FL",
        "countyGeoId" : null,
        "municipalityGeoId" : null,
        "postalCodeGeoId" : null,
        "geoPointId" : null,
        "encodedAddressKey" : null,
        "latitude" : null,
        "longitude" : null,
        "isResidentialAddress" : "Y",
        "phone" : {
          "contactMechId" : "10946",
          "countryCode" : null,
          "areaCode" : null,
          "contactNumber" : "08973575538",
          "askForName" : null,
          "lastUpdatedStamp" : "2023-12-07T02:09:35-08:00"
        }
      },
      "goodIdentifications" : [ {
        "fromDate" : "2023-11-22T11:05:40-08:00",
        "goodIdentificationTypeId" : "NETSUITE_PRODUCT_ID",
        "idValue" : "38040",
        "productId" : "11741",
        "lastUpdatedStamp" : "2024-03-27T01:36:21-07:00",
        "thruDate" : null
      }, {
        "goodIdentificationTypeId" : "SHOPIFY_PROD_ID",
        "productId" : "11741",
        "lastUpdatedStamp" : "2023-11-22T06:07:31-08:00",
        "fromDate" : "2023-11-22T06:07:30-08:00",
        "idValue" : "42870661480648",
        "thruDate" : null
      }, {
        "lastUpdatedStamp" : "2023-11-22T06:07:30-08:00",
        "idValue" : "VANITYLENS-06",
        "productId" : "11741",
        "fromDate" : "2023-11-22T06:07:30-08:00",
        "goodIdentificationTypeId" : "SHOPIFY_PROD_SKU",
        "thruDate" : null
      }, {
        "idValue" : "VANITYLENS-06",
        "lastUpdatedStamp" : "2023-11-22T06:07:31-08:00",
        "goodIdentificationTypeId" : "SKU",
        "productId" : "11741",
        "fromDate" : "2023-11-22T06:07:30-08:00",
        "thruDate" : null
      } ],
      "orderItemAdjustments" : [ ],
      "orderItemAttributes" : [ ],
      "facilityGroupMembers" : [ {
        "sequenceNum" : null,
        "lastUpdatedStamp" : "2023-11-23T13:36:59-08:00",
        "fromDate" : "2023-11-23T13:36:55-08:00",
        "facilityGroupId" : "NETSUITE_FULFILLMENT",
        "facilityId" : "114",
        "thruDate" : null
      }, {
        "facilityGroupId" : "OMS_FULFILLMENT",
        "sequenceNum" : null,
        "fromDate" : "2023-12-07T01:58:42-08:00",
        "lastUpdatedStamp" : "2023-12-07T01:58:42-08:00",
        "facilityId" : "114",
        "thruDate" : null
      } ],
      "fromOrderItemAssocs" : [ {
        "lastUpdatedStamp" : "2023-12-07T02:09:35-08:00",
        "quantity" : null,
        "toShipGroupSeqId" : "00001",
        "toOrderId" : "KRWE10188",
        "orderId" : "KRWE10188",
        "orderItemAssocTypeId" : "KIT_COMPONENT",
        "shipGroupSeqId" : "00001",
        "orderItemSeqId" : "00101",
        "toOrderItemSeqId" : "00103"
      } ],
      "toOrderItemAssocs" : [ ],
      "productFeatures" : [ {
        "amount" : null,
        "productFeatureApplTypeId" : "STANDARD_FEATURE",
        "productFeatureId" : "10169",
        "recurringAmount" : null,
        "sequenceNum" : 2,
        "idCode" : null,
        "contentId" : null,
        "numberSpecified" : null,
        "productId" : "11741",
        "productFeatureTypeId" : "10010",
        "productFeatureCategoryId" : null,
        "uomId" : null,
        "fromDate" : "2023-11-22T06:07:30-08:00",
        "thruDate" : null,
        "defaultSequenceNum" : null,
        "defaultAmount" : null,
        "imageUrl" : null,
        "abbrev" : null,
        "description" : "4B"
      }, {
        "amount" : null,
        "productFeatureId" : "10173",
        "productFeatureApplTypeId" : "STANDARD_FEATURE",
        "recurringAmount" : null,
        "idCode" : null,
        "sequenceNum" : 1,
        "description" : "Dark Blue Gradient",
        "contentId" : null,
        "numberSpecified" : null,
        "productId" : "11741",
        "productFeatureCategoryId" : null,
        "uomId" : null,
        "fromDate" : "2023-11-22T06:07:30-08:00",
        "productFeatureTypeId" : "COLOR",
        "thruDate" : null,
        "defaultSequenceNum" : null,
        "defaultAmount" : null,
        "imageUrl" : null,
        "abbrev" : null
      } ]
    } ]
  }
]
```

</details>

## Attributes

**The following attributes have been prepared in the feed:**

| Field Name                   | Description                                                     | Sample value              |
| ---------------------------- | --------------------------------------------------------------- | ------------------------- |
| productStoreId               | The ID of the product store                                     | STORE                     |
| orderId                      | The HotWax Commerce unique identifier for the order             | 12082                     |
| orderName                    | The eCommerce order identifier                                  | 9000004032                |
| orderDate                    | The date and time the order was placed on eCommerce             | 2024-02-23T03:43:23+09:00 |
| orderStatusId                | Order status                                                    | ORDER_APPROVED            |
| entryDate                    | The date and time the order was imported in HotWax Commerce OMS | 2024-02-23T03:50:12+09:00 |
| orderExternalId              | The external ID of the order                                    | 5384320450749             |
| currency                     | The payment currency used for the order                         | JPY                       |
| grandTotal                   | The total sum of all costs associated with an order             | 1870                      |
| customerFirstName            | The first name of the customer                                  | jhon                      |
| customerLastName             | The last name of the customer                                   | deo                       |
| salesChannel                 | The sales channel                                               | WEB_CHANNEL               |
| customerPartyId              | The customer party ID                                           | 10290                     |
| isShippingChargesSent        | Indicates if shipping charges are sent                          | Y                         |
| billTo                       | The billing information                                         | See below                 |
| orderIdentifications         | The order identifications                                       | See below                 |
| customerPartyIdentifications | The customer party identifications                              | See below                 |
| payments                     | The payments                                                    | See below                 |
| orderAdjustments             | The order adjustments                                           | See below                 |
| orderAttributes              | The order attributes                                            | See below                 |
| orderItems                   | The order items                                                 | See below                 |

**This object contains the following attributes, each of which has internal nesting:**

| Field Name                   | Description                        | Sample value |
| ---------------------------- | ---------------------------------- | ------------ |
| billTo                       | The billing information            | See below    |
| orderIdentifications         | The order identifications          | See below    |
| customerPartyIdentifications | The customer party identifications | See below    |
| payments                     | The payments                       | See below    |
| orderAdjustments             | The order adjustments              | See below    |
| orderAttributes              | The order attributes               | See below    |
| orderItems                   | The order items                    | See below    |

**billTo**
| Field Name           | Description                             | Sample value |
| -------------------- | --------------------------------------- | ------------ |
| countryGeoCode       | The country geo code                    | JP           |
| stateProvinceGeoCode | The state province geo code             | null         |
| contactMechId        | The contact mechanism ID                | 18227        |
| toName               | The name of the recipient               | jhon deo     |
| address1             | The first line of the address           | 足立          |
| address2             | The second line of the address          | null         |
| city                 | The city                                | 足立区        |
| postalCode           | The postal code                         | 120-0015     |
| countryGeoId         | The country geo ID                      | JPN          |
| stateProvinceGeoId   | The state province geo ID               | null         |
| isResidentialAddress | Indicates if the address is residential | Y            |
| phone                | The phone information                   | See below    |

**billTo.phone**

| Field Name    | Description              | Sample value |
| ------------- | ------------------------ | ------------ |
| contactMechId | The contact mechanism ID | 18228        |
| countryCode   | The country code         | 1            |
| areaCode      | The area code            | null         |
| contactNumber | The contact number       | 0593785656   |

**orderIdentifications**

| Field Name | Description   | Sample value              |
| ---------- | ------------- | ------------------------- |
| idValue    | The ID value  | 5384320450749             |
| orderId    | The order ID  | 12082                     |
| fromDate   | The from date | 2024-02-23T03:50:12+09:00 |
| thruDate   | The thru date | null                      |

**customerPartyIdentifications**

| Field Name                | Description                      | Sample value    |
| ------------------------- | -------------------------------- | --------------- |
| partyIdentificationTypeId | The party identification type ID | SHOPIFY_CUST_ID |
| idValue                   | The ID value                     | 7053008306365   |
| partyId                   | The party ID                     | 10290           |

**payments**

| Field Name               | Description                    | Sample value              |
| ------------------------ | ------------------------------ | ------------------------- |
| paymentMethodCode        | The payment method code        | null                      |
| amount                   | The amount                     | 1870                      |
| paymentMethodTypeId      | The payment method type ID     | EXT_SHOP_OTHR_GTWAY       |
| paymentMethodDescription | The payment method description | Ext Other Gateways        |
| orderId                  | The order ID                   | 12082                     |
| statusId                 | The status ID                  | PAYMENT_AUTHORIZED        |
| returnId                 | The return ID                  | null                      |
| createdDate              | The date and time of creation  | 2024-02-23T03:50:12+09:00 |

**orderAdjustments**

| Field Name            | Description                  | Sample value       |
| --------------------- | ---------------------------- | ------------------ |
| orderAdjustmentTypeId | The order adjustment type ID | SHIPPING_SALES_TAX |
| amount                | The amount                   | 50                 |
| orderAdjustmentId     | The order adjustment ID      | null               |
| orderId               | The order ID                 | 12082              |

**orderAttributes**

| Field Name      | Description               | Sample value        |
| --------------- | ------------------------- | ------------------- |
| orderId         | The order ID              | 12082               |
| attrDescription | The attribute description | null                |
| attrName        | The attribute name        | COD_FEE_ADJ_CREATED |
| attrValue       | The attribute value       | true                |

**orderItems**

| Field Name                                                  | Description                                                       | Sample value              |
|-------------------------------------------------------------|-------------------------------------------------------------------|---------------------------|
| productStoreId                                              | The ID of the product store                                       | STORE                     |
| orderId                                                     | The unique identifier for the order                               | 12082                     |
| orderName                                                   | The name of the order                                             | 9000004032                |
| orderDate                                                   | The date and time the order was placed                            | 2024-02-23T03:43:23+09:00 |
| orderStatusId                                               | The status of the order                                           | ORDER_APPROVED            |
| entryDate                                                   | The date and time the order was entered                           | 2024-02-23T03:50:12+09:00 |
| orderExternalId                                             | The external ID of the order                                      | 5384320450749             |
| currency                                                    | The currency used for the order                                   | JPY                       |
| grandTotal                                                  | The total amount of the order                                     | 1870                      |
| orderItemSeqId                                              | The sequence ID of the order item                                 | 00101                     |
| itemStatusId                                                | The status of the item                                            | ITEM_APPROVED             |
| orderItemQuantity                                           | The quantity of the order item                                    | 1                         |
| reservedItemQuantity                                        | The quantity of reserved items                                    | 1                         |
| unitPrice                                                   | The unit price of the item                                        | 1200                      |
| orderItemExternalId                                         | The external ID of the order item                                 | 12915436126397            |
| itemDescription                                             | The description of the item                                       | ソックス クルー 3ペア ホワイト |
| shipGroupSeqId                                              | The sequence ID of the ship group                                 | 00001                     |
| shipmentMethodTypeId                                        | The shipment method type ID                                       | STANDARD                  |
| postalContactMechId                                         | The postal contact mechanism ID                                   | 18224                     |
| telecomContactMechId                                        | The telecom contact mechanism ID                                  | 18225                     |
| carrierPartyId                                              | The carrier party ID                                              | NA                        |
| externalFulfillmentOrderItemId                              | The external fulfillment order item ID                            | null                      |
| fulfillmentStatus                                           | The fulfillment status                                            | null                      |
| customerFirstName                                           | The first name of the customer                                    | jhon                      |
| customerLastName                                            | The last name of the customer                                     | deo                       |
| facilityId                                                  | The facility ID                                                   | WH0615                    |
| facilityExternalId                                          | The external ID of the facility                                   | 22                        |
| facilityTypeId                                              | This attribute contains the facility Type Id.                     | WAREHOUSE                 | 
| parentFacilityTypeId                                        | This attribute contains ID of the parent facility for facilityId. |  DISTRIBUTION_CENTER
| statusDatetime                                              | The date and time of the status                                   | 2024-02-23T04:05:15+09:00 |
| productId                                                   | The product's unique identifier in HotWax Commerce                | 60757                     |
| productTypeId                                               | The type of product identification                                | FINISHED_GOOD             |
| internalName                                                | String                                                            | \-                        |
| salesChannel                                                | The sales channel                                                 | WEB_CHANNEL               |
| customerPartyId                                             | The customer's unique identification in HotWax Commerce           | 10290                     |
| shipTo                                                      | The shipping information                                          | See below                 |
| goodIdentifications                                         | The product/good identifications                                  | See below                 |
| orderItemAdjustments                                        | The order item adjustments                                        | See below                 |
| orderItemAttributes                                         | The order item attributes                                         | See below                 |
| facilityGroupMembers                                        | The facility group members                                        | See below                 |
| fromOrderItemAssocs                                         | The from order item associations                                  | See below                 |
| toOrderItemAssocs                                           | The to order item associations                                    | See below                 |
| productFeatures                                             | The product features                                              | See below                 |

**orderItems.shipTo**
| Field Name           | Description                             | Sample value |
| -------------------- | --------------------------------------- | ------------ |
| countryGeoCode       | The country geo code                    | JP           |
| stateProvinceGeoCode | The state province geo code             | null         |
| contactMechId        | The contact mechanism ID                | 18224        |
| toName               | The name of the recipient               | jhon deo     |
| address1             | The first line of the address           | 足立          |
| address2             | The second line of the address          | null         |
| city                 | The city                                | 足立区        |
| postalCode           | The postal code                         | 120-0015     |
| countryGeoId         | The country geo ID                      | JPN          |
| stateProvinceGeoId   | The state province geo ID               | null         |
| countyGeoId          | The county geo ID                       | null         |
| isResidentialAddress | Indicates if the address is residential | Y            |
| phone                | The phone information                   | See below    |

**orderItems.phone.shipTo**

| Field Name    | Description              | Sample value |
| ------------- | ------------------------ | ------------ |
| contactMechId | The contact mechanism ID | 18228        |
| countryCode   | The country code         | 1            |
| areaCode      | The area code            | null         |
| contactNumber | The contact number       | 0593785656   |

**orderItem.goodIdentification**

| Field Name               | Description                        | Sample value              |
| ------------------------ | ---------------------------------- | ------------------------- |
| idValue                  | The good identifications ID value  | 37639003275453            |
| fromDate                 | The identification creation date   | 2023-12-25T03:48:21+09:00 |
| productId                | The HotWax Commerce's product ID   | 60757                     |
| goodIdentificationTypeId | The type of good identification    | SHOPIFY_PROD_ID           |
| thruDate                 | The identification expiration date | null                      |

**orderItems.orderItemAdjustments:**

| Field Name            | Description                    | Sample value |
| --------------------- | ------------------------------ | ------------ |
| amount                | The amount of order adjustment | 120          |
| orderAdjustmentTypeId | The order adjustment type ID   | SALES_TAX    |
| orderId               | The order ID                   | 12082        |
| orderItemSeqId        | The Order Item Seq ID.         | 0001         |

**orderItemAttributes**

| Field Name      | Description                 | Sample value        |
| --------------- | --------------------------- | ------------------- |
| orderId         | The order ID                | 12082               |
| attrDescription | The attribute description   | null                |
| attrName        | The attribute name          | COD_FEE_ADJ_CREATED |
| attrValue       | The attribute value         | true                |
| orderItemSeqId  | the Order item sequence id. | 00001               |

**facilityGroupMembers**
| Field Name      | Description                         | Sample value              |
| --------------- | ----------------------------------- | ------------------------- |
| facilityId      | The facility ID                     | WH0615                    |
| facilityGroupId | The facility group ID               | 22                        |
| thruDate        | The thru date                       | null                      |
| fromDate        | The from date                       | 2024-02-23T03:50:12+09:00 |
| sequenceNum     | The sequence number for the member. | 1                         |

**fromOrderItemAssocs:**
| Field Name           | Description                                      | Sample value  |
| -------------------- | ------------------------------------------------ | ------------- |
| orderId              | The order ID of kit product                      | 12082         |
| orderItemSeqId       | The order items seq ID of the kit product.       | 00101         |
| toOrderId            | The order ID of the component product.           | null          |
| toOrderItemSeqId     | The order items seq ID of the component product. | 00001         |
| shipGroupSeqId       | The ship group seq ID of the kit product.        | 00002         |
| toShipGroupSeqId     | The ship group seq ID of the component product.  | 00003         |
| orderItemAssocTypeId | The order item assoc type ID.                    | KIT_COMPONENT |

**toOrderItemAssocs:**

| Field Name           | Description                                      | Sample value  |
| -------------------- | ------------------------------------------------ | ------------- |
| orderId              | The order ID of kit product                      | 12082         |
| orderItemSeqId       | The order items seq ID of the kit product.       | 00101         |
| toOrderId            | The order ID of the component product.           | null          |
| toOrderItemSeqId     | The order items seq ID of the component product. | 00001         |
| shipGroupSeqId       | The ship group seq ID of the kit product.        | 00002         |
| toShipGroupSeqId     | The ship group seq ID of the component product.  | 00003         |
| orderItemAssocTypeId | The order item assoc type ID like.               | KIT_COMPONENT |

**productFeatures:**

| Field Name               | Description                      | Sample value     |
| ------------------------ | -------------------------------- | ---------------- |
| productFeatureApplTypeId | the feature Appl type like       | STANDARD_FEATURE |
| productFeatureId         | the unique feature ID.           | 10000            |
| productFeatureCategoryId | the product feature category ID. | 10015            |
| description              | the description of the feature.  | Red, L           |
| productId                | the Product ID.                  | 10000            |
| productFeaturTypeId      | the feature type like            | COLOR            |
