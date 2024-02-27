# Introduction

# Brokered Order Items Feed

The Brokered Order Items feed is a JSON-formatted feed generated from the HotWax Commerce OMS. This feed contains details about brokered order items, which can be brokered from either Warehouse or Store Type facilities. The feed is generated order-wise containing information about each order individually.

To use the Brokered Order Items feed, specify the required parameters and generate the feed using the HotWax Commerce OMS. The feed will be generated in JSON format and can be used for various purposes, such as reporting, analysis, and integration with other systems.

## Parameters

| **Parameter**           | **Description**                                                                                           |
|--------------------------|-----------------------------------------------------------------------------------------------------------|
| `parentFacilityTypeIds`  | Specifies the type of facility from which the brokered order items are being fetched.                     |
| `orderId`                | Allows you to generate the feed for a specific order ID.                                                   |
| `orderItemSeqId`         | Allows you to generate the feed for a specific order item sequence ID within an order.                     |
| `productStoreIds`        | Allows you to set the product store IDs to generate brand-specific feeds.                                  |
| `systemMessageTypeId`    | Specifies the System Message Type ID used for generating the Brokered Order Items Feed.                    |
| `systemMessageRemoteId`  | Specifies the System Message Remote ID used for generating the Brokered Order Items Feed.                  |

<details>

<summary>Sample Brokered Order Items feed</summary>

```json
[
  {
    "productStoreId": "SM_STORE",
    "orderId": "21042",
    "orderName": "SMUS#6280",
    "orderDate": "2020-10-21T12:56:11-04:00",
    "orderStatusId": "ORDER_APPROVED",
    "entryDate": "2020-10-21T17:57:18-04:00",
    "currency": "USD",
    "grandTotal": 79.99,
    "orderItemSeqId": null,
    "itemStatusId": null,
    "quantity": null,
    "unitPrice": null,
    "orderItemExternalId": null,
    "shipGroupSeqId": null,
    "shipmentMethodTypeId": "NEXT_DAY",
    "postalContactMechId": "71256",
    "telecomContactMechId": "71257",
    "externalFulfillmentOrderItemId": null,
    "fulfillmentStatus": null,
    "customerFirstName": "Ashish",
    "customerLastName": "Sharma",
    "facilityId": null,
    "facilityExternalId": null,
    "facilityTypeId": null,
    "parentFacilityTypeId": null,
    "statusDatetime": null,
    "productId": null,
    "productTypeId": null,
    "salesChannel": "WEB_CHANNEL",
    "customerPartyId": "10990",
    "isShippingChargesSent": "N",
    "billTo": {
      "countryGeoCode": "US",
      "stateProvinceGeoCode": "NY",
      "contactMechId": "71259",
      "toName": "Petter William",
      "attnName": null,
      "address1": "Wall street",
      "address2": "Tax user",
      "houseNumber": null,
      "houseNumberExt": null,
      "directions": null,
      "city": "Ohio",
      "cityGeoId": null,
      "postalCode": "10001",
      "postalCodeExt": null,
      "countryGeoId": "USA",
      "stateProvinceGeoId": "NY",
      "countyGeoId": null,
      "municipalityGeoId": null,
      "postalCodeGeoId": null,
      "geoPointId": null,
      "encodedAddressKey": null,
      "isResidentialAddress": "Y"
    },
    "orderIdentifications": [
      {
        "fromDate": "2020-10-21T17:57:18-04:00",
        "lastUpdatedStamp": "2020-10-21T17:57:18-04:00",
        "orderId": "21042",
        "idValue": "2729470132295",
        "orderIdentificationTypeId": "SHOPIFY_ORD_ID",
        "thruDate": null
      },
      {
        "idValue": "SMUS#6280",
        "orderIdentificationTypeId": "SHOPIFY_ORD_NAME",
        "fromDate": "2020-10-21T17:57:18-04:00",
        "lastUpdatedStamp": "2020-10-21T17:57:18-04:00",
        "orderId": "21042",
        "thruDate": null
      },
      {
        "lastUpdatedStamp": "2020-10-21T17:57:18-04:00",
        "orderIdentificationTypeId": "SHOPIFY_ORD_NO",
        "fromDate": "2020-10-21T17:57:18-04:00",
        "orderId": "21042",
        "idValue": "5280",
        "thruDate": null
      }
    ],
    "customerPartyIdentifications": [
      {
        "lastUpdatedStamp": "2022-05-18T10:00:13-04:00",
        "idValue": "5644891291719",
        "partyIdentificationTypeId": "SHOPIFY_CUST_ID",
        "partyId": "10990"
      }
    ],
    "payments": [
      {
        "paymentMethodCode": null,
        "paymentMethodDescription": "Shopify Payment",
        "amount": 79.99,
        "statusId": "PAYMENT_SETTLED",
        "paymentMethodTypeId": "EXT_SHOPIFY",
        "orderId": "21042",
        "createdDate": "2020-10-21T17:57:18-04:00"
      }
    ],
    "orderAdjustments": [
      {
        "customerReferenceId": null,
        "correspondingProductId": null,
        "orderItemSeqId": "_NA_",
        "includeInShipping": null,
        "description": null,
        "exemptAmount": null,
        "productPromoId": null,
        "taxAuthPartyId": null,
        "lastModifiedByUserLogin": null,
        "oldPercentage": null,
        "orderAdjustmentTypeId": "SHIPPING_SALES_TAX",
        "primaryGeoId": null,
        "taxAuthGeoId": null,
        "originalAdjustmentId": null,
        "secondaryGeoId": null,
        "createdByUserLogin": null,
        "orderAdjustmentId": null,
        "amountAlreadyIncluded": null,
        "lastUpdatedStamp": null,
        "amount": 10,
        "comments": null,
        "recurringAmount": null,
        "lastModifiedDate": null,
        "sourceReferenceId": null,
        "productPromoRuleId": null,
        "isManual": null,
        "productFeatureId": null,
        "taxAuthorityRateSeqId": null,
        "overrideGlAccountId": null,
        "oldAmountPerQuantity": null,
        "shipGroupSeqId": null,
        "includeInTax": null,
        "createdDate": null,
        "productPromoActionSeqId": null,
        "sourcePercentage": null,
        "orderId": "21042"
      },
      {
        "customerReferenceId": null,
        "correspondingProductId": null,
        "orderItemSeqId": "_NA_",
        "includeInShipping": null,
        "description": null,
        "exemptAmount": null,
        "productPromoId": null,
        "taxAuthPartyId": null,
        "lastModifiedByUserLogin": null,
        "oldPercentage": null,
        "orderAdjustmentTypeId": "SHIPPING_SALES_TAX",
        "primaryGeoId": null,
        "taxAuthGeoId": null,
        "originalAdjustmentId": null,
        "secondaryGeoId": null,
        "createdByUserLogin": null,
        "orderAdjustmentId": null,
        "amountAlreadyIncluded": null,
        "lastUpdatedStamp": null,
        "amount": 10,
        "comments": null,
        "recurringAmount": null,
        "lastModifiedDate": null,
        "sourceReferenceId": null,
        "productPromoRuleId": null,
        "isManual": null,
        "productFeatureId": null,
        "taxAuthorityRateSeqId": null,
        "overrideGlAccountId": null,
        "oldAmountPerQuantity": null,
        "shipGroupSeqId": null,
        "includeInTax": null,
        "createdDate": null,
        "productPromoActionSeqId": null,
        "sourcePercentage": null,
        "orderId": "21042"
      },
      {
        "customerReferenceId": null,
        "correspondingProductId": null,
        "orderItemSeqId": "_NA_",
        "includeInShipping": null,
        "description": null,
        "exemptAmount": null,
        "productPromoId": null,
        "taxAuthPartyId": null,
        "lastModifiedByUserLogin": null,
        "oldPercentage": null,
        "orderAdjustmentTypeId": "SHIPPING_SALES_TAX",
        "primaryGeoId": null,
        "taxAuthGeoId": null,
        "originalAdjustmentId": null,
        "secondaryGeoId": null,
        "createdByUserLogin": null,
        "orderAdjustmentId": null,
        "amountAlreadyIncluded": null,
        "lastUpdatedStamp": null,
        "amount": 10,
        "comments": null,
        "recurringAmount": null,
        "lastModifiedDate": null,
        "sourceReferenceId": null,
        "productPromoRuleId": null,
        "isManual": null,
        "productFeatureId": null,
        "taxAuthorityRateSeqId": null,
        "overrideGlAccountId": null,
        "oldAmountPerQuantity": null,
        "shipGroupSeqId": null,
        "includeInTax": null,
        "createdDate": null,
        "productPromoActionSeqId": null,
        "sourcePercentage": null,
        "orderId": "21042"
      },
      {
        "amount": 40,
        "customerReferenceId": null,
        "correspondingProductId": null,
        "orderItemSeqId": "_NA_",
        "includeInShipping": null,
        "description": null,
        "exemptAmount": null,
        "productPromoId": null,
        "taxAuthPartyId": null,
        "lastModifiedByUserLogin": null,
        "oldPercentage": null,
        "primaryGeoId": null,
        "taxAuthGeoId": null,
        "originalAdjustmentId": null,
        "secondaryGeoId": null,
        "createdByUserLogin": null,
        "orderAdjustmentId": null,
        "amountAlreadyIncluded": null,
        "lastUpdatedStamp": null,
        "comments": null,
        "recurringAmount": null,
        "lastModifiedDate": null,
        "sourceReferenceId": null,
        "productPromoRuleId": null,
        "isManual": null,
        "productFeatureId": null,
        "taxAuthorityRateSeqId": null,
        "overrideGlAccountId": null,
        "oldAmountPerQuantity": null,
        "shipGroupSeqId": null,
        "includeInTax": null,
        "createdDate": null,
        "productPromoActionSeqId": null,
        "sourcePercentage": null,
        "orderAdjustmentTypeId": "SHIPPING_CHARGES",
        "orderId": "21042"
      }
    ],
    "orderItems": [
      {
        "productStoreId": "SM_STORE",
        "orderId": "21042",
        "orderName": "SMUS#6280",
        "orderDate": "2020-10-21T12:56:11-04:00",
        "orderStatusId": "ORDER_APPROVED",
        "entryDate": "2020-10-21T17:57:18-04:00",
        "currency": "USD",
        "grandTotal": 79.99,
        "orderItemSeqId": "00001",
        "itemStatusId": "ITEM_APPROVED",
        "quantity": 1,
        "unitPrice": 49.99,
        "orderItemExternalId": "5983287705671",
        "shipGroupSeqId": "00002",
        "shipmentMethodTypeId": "NEXT_DAY",
        "postalContactMechId": "71256",
        "telecomContactMechId": "71257",
        "externalFulfillmentOrderItemId": null,
        "fulfillmentStatus": null,
        "customerFirstName": "Ashish",
        "customerLastName": "Sharma",
        "facilityId": "902",
        "facilityExternalId": "902",
        "facilityTypeId": "WAREHOUSE",
        "parentFacilityTypeId": "DISTRIBUTION_CENTER",
        "statusDatetime": "2020-10-21T17:57:18-04:00",
        "productId": "20479",
        "productTypeId": "FINISHED_GOOD",
        "salesChannel": "WEB_CHANNEL",
        "customerPartyId": "10990",
        "shipTo": {
          "countryGeoCode": "US",
          "stateProvinceGeoCode": "NY",
          "contactMechId": "71256",
          "toName": "Petter William",
          "attnName": null,
          "address1": "Wall street",
          "address2": "Tax user",
          "houseNumber": null,
          "houseNumberExt": null,
          "directions": null,
          "city": "Ohio",
          "cityGeoId": null,
          "postalCode": "10001",
          "postalCodeExt": null,
          "countryGeoId": "USA",
          "stateProvinceGeoId": "NY",
          "countyGeoId": null,
          "municipalityGeoId": null,
          "postalCodeGeoId": null,
          "geoPointId": null,
          "encodedAddressKey": null,
          "isResidentialAddress": "Y"
        },
        "goodIdentifications": [
          {
            "fromDate": "2020-06-11T16:11:35-04:00",
            "idValue": "ABBY",
            "productId": "20479",
            "lastUpdatedStamp": "2022-08-10T05:58:22-04:00",
            "goodIdentificationTypeId": "SHOPIFY_PROD_SKU",
            "thruDate": null
          },
          {
            "idValue": "ABBY",
            "goodIdentificationTypeId": "SKU",
            "productId": "20479",
            "fromDate": "2022-04-20T12:00:14-04:00",
            "lastUpdatedStamp": "2022-08-10T05:58:22-04:00",
            "thruDate": null
          },
          {
            "lastUpdatedStamp": "2022-03-22T06:00:19-04:00",
            "fromDate": "2020-06-11T16:11:35-04:00",
            "idValue": "829105016156",
            "productId": "20479",
            "goodIdentificationTypeId": "UPCA",
            "thruDate": null
          }
        ],
        "orderItemAdjustments": [
          {
            "customerReferenceId": null,
            "correspondingProductId": null,
            "includeInShipping": null,
            "description": null,
            "exemptAmount": null,
            "productPromoId": null,
            "taxAuthPartyId": null,
            "lastModifiedByUserLogin": null,
            "oldPercentage": null,
            "primaryGeoId": null,
            "taxAuthGeoId": null,
            "originalAdjustmentId": null,
            "secondaryGeoId": null,
            "createdByUserLogin": null,
            "orderAdjustmentId": null,
            "amountAlreadyIncluded": null,
            "orderAdjustmentTypeId": "SALES_TAX",
            "lastUpdatedStamp": null,
            "amount": 10,
            "comments": null,
            "recurringAmount": null,
            "lastModifiedDate": null,
            "sourceReferenceId": null,
            "productPromoRuleId": null,
            "isManual": null,
            "productFeatureId": null,
            "taxAuthorityRateSeqId": null,
            "overrideGlAccountId": null,
            "oldAmountPerQuantity": null,
            "shipGroupSeqId": null,
            "includeInTax": null,
            "createdDate": null,
            "productPromoActionSeqId": null,
            "sourcePercentage": null,
            "orderId": "21042",
            "orderItemSeqId": "00001"
          },
          {
            "customerReferenceId": null,
            "correspondingProductId": null,
            "includeInShipping": null,
            "description": null,
            "exemptAmount": null,
            "productPromoId": null,
            "taxAuthPartyId": null,
            "lastModifiedByUserLogin": null,
            "oldPercentage": null,
            "primaryGeoId": null,
            "taxAuthGeoId": null,
            "originalAdjustmentId": null,
            "secondaryGeoId": null,
            "createdByUserLogin": null,
            "orderAdjustmentId": null,
            "amountAlreadyIncluded": null,
            "orderAdjustmentTypeId": "SALES_TAX",
            "lastUpdatedStamp": null,
            "amount": 0.5,
            "comments": null,
            "recurringAmount": null,
            "lastModifiedDate": null,
            "sourceReferenceId": null,
            "productPromoRuleId": null,
            "isManual": null,
            "productFeatureId": null,
            "taxAuthorityRateSeqId": null,
            "overrideGlAccountId": null,
            "oldAmountPerQuantity": null,
            "shipGroupSeqId": null,
            "includeInTax": null,
            "createdDate": null,
            "productPromoActionSeqId": null,
            "sourcePercentage": null,
            "orderId": "21042",
            "orderItemSeqId": "00001"
          },
          {
            "customerReferenceId": null,
            "correspondingProductId": null,
            "includeInShipping": null,
            "description": null,
            "exemptAmount": null,
            "productPromoId": null,
            "taxAuthPartyId": null,
            "lastModifiedByUserLogin": null,
            "oldPercentage": null,
            "primaryGeoId": null,
            "taxAuthGeoId": null,
            "originalAdjustmentId": null,
            "secondaryGeoId": null,
            "createdByUserLogin": null,
            "orderAdjustmentId": null,
            "amountAlreadyIncluded": null,
            "orderAdjustmentTypeId": "SALES_TAX",
            "lastUpdatedStamp": null,
            "amount": 5,
            "comments": null,
            "recurringAmount": null,
            "lastModifiedDate": null,
            "sourceReferenceId": null,
            "productPromoRuleId": null,
            "isManual": null,
            "productFeatureId": null,
            "taxAuthorityRateSeqId": null,
            "overrideGlAccountId": null,
            "oldAmountPerQuantity": null,
            "shipGroupSeqId": null,
            "includeInTax": null,
            "createdDate": null,
            "productPromoActionSeqId": null,
            "sourcePercentage": null,
            "orderId": "21042",
            "orderItemSeqId": "00001"
          }
        ],
        "orderItemAttributes": [
          {
            "attrValue": "Pre-ordered items",
            "lastUpdatedStamp": "2020-10-21T17:57:18-04:00",
            "attrDescription": "Pre-order item property",
            "orderId": "21042",
            "orderItemSeqId": "00001",
            "attrName": "PreOrderItemProperty"
          }
        ]
      },
      {
        "productStoreId": "SM_STORE",
        "orderId": "21042",
        "orderName": "SMUS#6280",
        "orderDate": "2020-10-21T12:56:11-04:00",
        "orderStatusId": "ORDER_APPROVED",
        "entryDate": "2020-10-21T17:57:18-04:00",
        "currency": "USD",
        "grandTotal": 79.99,
        "orderItemSeqId": "00001",
        "itemStatusId": "ITEM_APPROVED",
        "quantity": 1,
        "unitPrice": 49.99,
        "orderItemExternalId": "5983287705671",
        "shipGroupSeqId": "00002",
        "shipmentMethodTypeId": "NEXT_DAY",
        "postalContactMechId": "71256",
        "telecomContactMechId": "71257",
        "externalFulfillmentOrderItemId": null,
        "fulfillmentStatus": null,
        "customerFirstName": "Ashish",
        "customerLastName": "Sharma",
        "facilityId": "902",
        "facilityExternalId": "902",
        "facilityTypeId": "WAREHOUSE",
        "parentFacilityTypeId": "DISTRIBUTION_CENTER",
        "statusDatetime": "2020-10-21T17:57:18-04:00",
        "productId": "20479",
        "productTypeId": "FINISHED_GOOD",
        "salesChannel": "WEB_CHANNEL",
        "customerPartyId": "10990",
        "shipTo": {
          "countryGeoCode": "US",
          "stateProvinceGeoCode": "NY",
          "contactMechId": "71256",
          "toName": "Petter William",
          "attnName": null,
          "address1": "Wall street",
          "address2": "Tax user",
          "houseNumber": null,
          "houseNumberExt": null,
          "directions": null,
          "city": "Ohio",
          "cityGeoId": null,
          "postalCode": "10001",
          "postalCodeExt": null,
          "countryGeoId": "USA",
          "stateProvinceGeoId": "NY",
          "countyGeoId": null,
          "municipalityGeoId": null,
          "postalCodeGeoId": null,
          "geoPointId": null,
          "encodedAddressKey": null,
          "isResidentialAddress": "Y"
        },
        "goodIdentifications": [
          {
            "fromDate": "2020-06-11T16:11:35-04:00",
            "idValue": "ABBY",
            "productId": "20479",
            "lastUpdatedStamp": "2022-08-10T05:58:22-04:00",
            "goodIdentificationTypeId": "SHOPIFY_PROD_SKU",
            "thruDate": null
          },
          {
            "idValue": "ABBY",
            "goodIdentificationTypeId": "SKU",
            "productId": "20479",
            "fromDate": "2022-04-20T12:00:14-04:00",
            "lastUpdatedStamp": "2022-08-10T05:58:22-04:00",
            "thruDate": null
          },
          {
            "lastUpdatedStamp": "2022-03-22T06:00:19-04:00",
            "fromDate": "2020-06-11T16:11:35-04:00",
            "idValue": "829105016156",
            "productId": "20479",
            "goodIdentificationTypeId": "UPCA",
            "thruDate": null
          }
        ],
        "orderItemAdjustments": [
          {
            "customerReferenceId": null,
            "correspondingProductId": null,
            "includeInShipping": null,
            "description": null,
            "exemptAmount": null,
            "productPromoId": null,
            "taxAuthPartyId": null,
            "lastModifiedByUserLogin": null,
            "oldPercentage": null,
            "primaryGeoId": null,
            "taxAuthGeoId": null,
            "originalAdjustmentId": null,
            "secondaryGeoId": null,
            "createdByUserLogin": null,
            "orderAdjustmentId": null,
            "amountAlreadyIncluded": null,
            "orderAdjustmentTypeId": "SALES_TAX",
            "lastUpdatedStamp": null,
            "amount": 0,
            "comments": null,
            "recurringAmount": null,
            "lastModifiedDate": null,
            "sourceReferenceId": null,
            "productPromoRuleId": null,
            "isManual": null,
            "productFeatureId": null,
            "taxAuthorityRateSeqId": null,
            "overrideGlAccountId": null,
            "oldAmountPerQuantity": null,
            "shipGroupSeqId": null,
            "includeInTax": null,
            "createdDate": null,
            "productPromoActionSeqId": null,
            "sourcePercentage": null,
            "orderId": "21042",
            "orderItemSeqId": "00002"
          },
          {
            "customerReferenceId": null,
            "correspondingProductId": null,
            "includeInShipping": null,
            "description": null,
            "exemptAmount": null,
            "productPromoId": null,
            "taxAuthPartyId": null,
            "lastModifiedByUserLogin": null,
            "oldPercentage": null,
            "primaryGeoId": null,
            "taxAuthGeoId": null,
            "originalAdjustmentId": null,
            "secondaryGeoId": null,
            "createdByUserLogin": null,
            "orderAdjustmentId": null,
            "amountAlreadyIncluded": null,
            "orderAdjustmentTypeId": "SALES_TAX",
            "lastUpdatedStamp": null,
            "amount": 0,
            "comments": null,
            "recurringAmount": null,
            "lastModifiedDate": null,
            "sourceReferenceId": null,
            "productPromoRuleId": null,
            "isManual": null,
            "productFeatureId": null,
            "taxAuthorityRateSeqId": null,
            "overrideGlAccountId": null,
            "oldAmountPerQuantity": null,
            "shipGroupSeqId": null,
            "includeInTax": null,
            "createdDate": null,
            "productPromoActionSeqId": null,
            "sourcePercentage": null,
            "orderId": "21042",
            "orderItemSeqId": "00002"
          },
          {
            "customerReferenceId": null,
            "correspondingProductId": null,
            "includeInShipping": null,
            "description": null,
            "exemptAmount": null,
            "productPromoId": null,
            "taxAuthPartyId": null,
            "lastModifiedByUserLogin": null,
            "oldPercentage": null,
            "primaryGeoId": null,
            "taxAuthGeoId": null,
            "originalAdjustmentId": null,
            "secondaryGeoId": null,
            "createdByUserLogin": null,
            "orderAdjustmentId": null,
            "amountAlreadyIncluded": null,
            "orderAdjustmentTypeId": "SALES_TAX",
            "lastUpdatedStamp": null,
            "amount": 0,
            "comments": null,
            "recurringAmount": null,
            "lastModifiedDate": null,
            "sourceReferenceId": null,
            "productPromoRuleId": null,
            "isManual": null,
            "productFeatureId": null,
            "taxAuthorityRateSeqId": null,
            "overrideGlAccountId": null,
            "oldAmountPerQuantity": null,
            "shipGroupSeqId": null,
            "includeInTax": null,
            "createdDate": null,
            "productPromoActionSeqId": null,
            "sourcePercentage": null,
            "orderId": "21042",
            "orderItemSeqId": "00002"
          }
        ],
        "orderItemAttributes": [
          {
            "attrValue": "Pre-ordered items",
            "lastUpdatedStamp": "2020-10-21T17:57:18-04:00",
            "attrDescription": "Pre-order item property",
            "orderId": "21042",
            "orderItemSeqId": "00002",
            "attrName": "PreOrderItemProperty"
          }
        ]
      }
    ]
  }
]
```

</details>


| Attribute | Type | Description |
| --- | --- | --- |
| productStoreId | string | This attribute contains the product store ID. The default value will be HOTWAX. |
| orderId | string | This is the unique ID assigned to an order in the system. |
| orderName | string | This attribute contains the name of the order. |
| orderDate | string | This attribute contains the order date. |
| orderStatusId | string | This attribute contains the status ID of the order. orderStatusId is the alias name of statusId field |
| entryDate | string | This attribute defines the entry date of order in the system. |
| currency | string | This attribute contains the currency UOM in the order. currency is the alias name of abbreviation field. |
| grandTotal | number | This attribute contains the grand total of the order. |
| shipmentMethodTypeId | string | This attribute contains shipment Method Type Id of ship to address. |
| postalContactMechId | string | This attribute contains the Contact Mech Id of ship to address. postalContactMechId is the alias name of the contactMechId |
| telecomContactMechId | string | This attribute contains the telecom Contact Mech Id of ship to address. |
| customerFirstName | string | This attribute contains first name of the bill to customer. customerFirstName is the alias name of the firstName |
| customerLastName | string | This attribute contains last name of the bill to customer. customerLastName is the alias name of the firstName |
| salesChannel | string | This attribute contains the SalesChannel enumCode. salesChannel is the alias name of the enumCode. |
| customerPartyId | string | This attribute contains the billTo customer partyId. customerPartyId is the alias name of the partyId |
| isShippingChargesSent | string | Define the custom variable to identify shipping charges, shipping sales tax, and whether shipping adjustments were sent or not. |
| billTo.contactMechId | string | This attribute contains the bill to contact Mech Id. |
| billTo.PostalCode | string | This attribute contains the postal code of the bill to address. |
| billTo.address1 | string | This attribute contains the address1 of the bill to address. |
| billTo.stateProvinceGeoId | string | This attribute contains State Province Geo ID of the bill to address. |
| billTo.address2 | string | This attribute contains the address2 of the bill to address. |
| billTo.city | string | This attribute contains the city of the bill to address. |
| billTo.stateProvinceGeoCode | string | This attribute contains the State Province Geo ID of the bill to address. stateProvinceGeoCode is the alias name of the geoCode. |
| billTo.toName | string | This attribute contains the To Name of the bill to customer. |
| billTo.countryGeoCode | string | This attribute contains the Country Geo Code of the bill to address |
| OrderHeader.orderId | string | This is the unique ID assigned to an order in the system. |
| OrderItem.orderId | string | This is the unique ID assigned to an order in the system. |
| OrderItem.orderItemSeqId | string | This is the unique ID assigned to an order item in the system. |
| OrderItemShipGroupAssoc.orderId | string | This is the unique ID assigned to an order in the system. |
| OrderItemShipGroupAssoc.shipGroupSeqId | string | This is the unique ID assigned to a ship group in the system. |
| OrderItemShipGroup.contactMechId | string | This is the unique ID assigned to a contact mechanism in the system. |
| PostalAddress.countryGeoId | string | This is the unique ID assigned to a country in the system. |
| OrderContactMech.contactMechPurposeTypeId | string | This is the unique ID assigned to a contact mechanism purpose type in the system. |
| OrderIdentification.idValue | string | This attribute contains the value of the order Identification of the order. |
| OrderIdentification.orderIdentificationTypeId | string | This attribute contains the type ID of the Order Identification of the order. |
| PartyIdentification.idValue | string | This attribute contains the value of the Party Identification of the customer. |
| PartyIdentification.partyIdentificationTypeId | string | This attribute contains the type ID of the Party Identification of the customer. |
| OrderPaymentPreference.paymentMethodTypeId | string | This attribute contains the paymentMethodTypeId. |
| OrderPaymentPreference.createdDate | string | This attribute contains the createdDate. |
| OrderPaymentPreference.paymentMethodCode | string | This attribute contains the paymentMethodCode. |
| OrderPaymentPreference.paymentMethodDescription | string | This attribute contains the paymentMethodDescription. |
| OrderPaymentPreference.statusId | string | This attribute contains the statusId. |
| OrderPaymentPreference.amount | string | This attribute contains the amount. |
| OrderPaymentPreference.orderId | string | This attribute contains the orderId. |
| OrderAdjustment.orderAdjustmentTypeId | string | This attribute contains the Type Id of the Order Adjustment. |
| OrderAdjustment.orderId | string | This attribute contains the Order Id. |
| OrderAdjustment.orderItemSeqId | string | This attribute contains the Order Item Seq Id. |
| OrderAdjustment.amount | number | This attribute contains the Order Adjustment amount. |
| OrderItem.productStoreId | string | This attribute contains the product store ID. |
| OrderItem.orderName | string | This attribute contains the name of the order. |
| OrderItem.orderDate | string | This attribute contains the order date. |
| OrderItem.orderStatusId | string | This attribute contains the status ID of the order. |
| OrderItem.entryDate | string | This attribute defines the entry date of order in the system. |
| OrderItem.currency | string | This attribute contains the currency UOM in the order. |
| OrderItem.grandTotal | number | This attribute contains the grand total of the order. |
| OrderItem.orderItemSeqId | string | This attribute contains the order item sequence id. |
| OrderItem.itemStatusId | string | This attribute represents the status of the order item. |
| OrderItem.quantity | string | This attribute contains the sum of quantity for the same orderId, orderItemSeqId, shipGroupSeqId. |
| OrderItem.unitPrice | string | This attribute contains the unit price of the order item. |
| OrderItem.orderItemExternalId | string | This attribute contains the externalId of the order item. |
| OrderItem.shipGroupSeqId | string | This attribute contains ship group sequence of the order item. |
| OrderItem.shipmentMethodTypeId | string | This attribute contains shipment Method Type Id of ship to address. |
| OrderItem.postalContactMechId | string | This attribute contains the Contact Mech Id of ship to address. |
| OrderItem.telecomContactMechId | string | This attribute contains the telecom Contact Mech Id of ship to address. |
| OrderItem.externalFulfillmentOrderItemId | string | This attribute contains the ID of External Fulfillment Order Item record which helps in maintaining history of the items sent for fulfillment. |
| OrderItem.fulfillmentStatus | string | This attribute contains the status of External Fulfillment Order Item record sent for fulfillment. |
| OrderItem.customerFirstName | string | This attribute contains first name of the bill to customer. |
| OrderItem.customerLastName | string | This attribute contains last name of the bill to customer. |
| OrderItem.salesChannel | string | This attribute contains the SalesChannel enumCode. |
| OrderItem.customerPartyId | string | This attribute contains the billTo customer partyId. |
| OrderItem.isShippingChargesSent | string | Define the custom variable to identify shipping charges, shipping sales tax, and whether shipping adjustments were sent or not. |
| OrderItem.billTo.contactMechId | string | This attribute contains the bill to contact Mech Id. |
| OrderItem.billTo.PostalCode | string | This attribute contains the postal code of the bill to address. |
| OrderItem.billTo.address1 | string | This attribute contains the address1 of the bill to address. |
| OrderItem.billTo.stateProvinceGeoId | string | This attribute contains State Province Geo ID of the bill to address. |
| OrderItem.billTo.address2 | string | This attribute contains the address2 of the bill to address. |
| OrderItem.billTo.city | string | This attribute contains the city of the bill to address. |
| OrderItem.billTo.stateProvinceGeoCode | string | This attribute contains the State Province Geo ID of the bill to address. |
| OrderItem.billTo.toName | string | This attribute contains the To Name of the bill to customer. |
| OrderItem.billTo.countryGeoCode | string | This attribute contains the Country Geo Code of the bill to address. |
| orderItems.orderId                                | string | This is the unique ID assigned to an order in the system.                                                         |
| orderItems.customerFirstName                      | string | This attribute contains the first name of the customer.                                                           |
| orderItems.customerLastName                       | string | This attribute contains last name of the bill to customer.                                                        |
| orderItems.facilityId                             | string | This attribute contains the facility ID.                                                                         |
| orderItems.facilityExternalId                     | string | This attribute contains the external facility/warehouse ID.                                                       |
| orderItems.facilityTypeId                         | string | This attribute contains the facility Type Id.                                                                    |
| orderItems.parentFacilityTypeId                   | string | This attribute contains ID of the parent facility for facilityId. Defaults to DISTRIBUTION_CENTER.               |
| orderItems.statusDatetime                         | string | This attribute contains the datetime corresponding to the Order Item Status record of ITEM_APPROVED.            |
| orderItems.productId                              | string | This attribute contains the unique product ID in the system for the order item.                                  |
| orderItems.productTypeId                          | string | This attribute contains the order item productTypeId.                                                            |
| orderItems.salesChannel                           | string | This attribute contains the SalesChannel enumCode.                                                               |
| orderItems.customerPartyId                        | string | This attribute contains the billTo customer partyId. customerPartyId is the alias name of the partyId           |
| orderItems.shipTo                                 | map    | Map of the ship to address.                                                                                     |
| orderItems.shipTo.contactMechId                   | string | This attribute contains the Contact Mech Id of the ship to address.                                               |
| orderItems.shipTo.PostalCode                      | string | This attribute contains the postal code of the ship to address.                                                   |
| orderItems.shipTo.address1                        | string | This attribute contains the address1 of the ship to address.                                                      |
| orderItems.shipTo.stateProvinceGeoId              | string | This attribute contains State Province Geo ID of the ship to address.                                             |
| orderItems.shipTo.address2                        | string | This attribute contains the address2 of the ship to address.                                                      |
| orderItems.shipTo.city                            | string | This attribute contains the city of the ship to address.                                                          |
| orderItems.shipTo.stateProvinceGeoCode            | string | This attribute contains the State Province Geo ID of the ship to address. stateProvinceGeoCode is the alias name of the geoCode.                                            |
| orderItems.shipTo.toName                          | string | This attribute contains the To Name of the ship to customer.                                                      |
| orderItems.shipTo.countryGeoCode                 | string | This attribute contains the Country Geo Code of the ship to address                                               |
| orderItems.shipTo.isResidentialAddress            | string | OrderContactMech.contactMechPurposeTypeId='HOME_LOCATION' then isResidentialAddress should be 'Y' if OrderContactMech.contactMechPurposeTypeId='WORK_LOCATION' then isResidentialAddress should be 'N'. If contactMechPurposeTypeId neither 'HOME_LOCATION' nor 'WORK_LOCATION' then isResidentialAddress will be null. |
| orderItems.goodIdentifications                    | list   | List of good Identifications.                                                                                    |
| orderItems.goodIdentifications.idValue           | string | This attribute contains the value of the good Identification of the product.                                    |
| orderItems.goodIdentifications.goodIdentificationTypeId | string | This attribute contains the type ID of the Good Identification of the product. Defaults to SKU, UPCA. The SKU, UPCA, defines the unique identification of the order item.                                                            |
| orderItems.orderItemAdjustments                   | list   | List of Order Item Level Adjustments.                                                                            |
| orderItems.orderItemAdjustments.orderAdjustmentTypeId | string | This attribute contains the Type Id of the Order Adjustment.                                                      |
| orderItems.orderItemAdjustments.orderId          | string | This attribute contains the Order Id.                                                                            |
| orderItems.orderItemAdjustments.orderItemSeqId   | string | This attribute contains the order Item Seq Id.                                                                   |
| orderItems.orderItemAdjustments.amount           | number | This attribute contains the Order Item Adjustment amount.                                                        |
| orderItemAttributes.orderId                       | string | This is the unique ID assigned to an order in the system.                                                         |
| orderItems.orderItemAttributes.attrValue           | string | This attribute contains the order attribute value like **Pre-ordered items**.                                    |
| orderItems.orderItemAttributes.attrDescription     | string | This attribute contains the order item attribute description like **Pre-order item property**.                   |
| orderItems.orderItemAttributes.orderItemSeqId  | string | Order item sequence id.                                                                                          |
| orderItems.orderItemAttributes.attrName        | string | This attribute contains the order item attribute Name like **PreOrderItemProperty**.                             |