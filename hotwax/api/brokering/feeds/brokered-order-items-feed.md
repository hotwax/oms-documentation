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


| Attribute | Type | Description | Mapping Fields |
|-----------|------|-------------|----------------|
| productStoreId | string | This attribute contains the product store ID. The default value will be HOTWAX. | OrderHeader.productStoreId |
| orderId | string | This is the unique ID assigned to an order in the system. | OrderHeader.orderId |
| orderName | string | This attribute contains the name of the order. | OrderHeader.orderName |
| orderDate | string | This attribute contains the order date. | OrderHeader.orderDate |
| orderStatusId | string | This attribute contains the status ID of the order. orderStatusId is the alias name of statusId field | OrderHeader.statusId |
| entryDate | string | This attribute defines the entry date of order in the system. | OrderHeader.entryDate |
| currency | string | This attribute contains the currency UOM in the order. currency is the alias name of abbreviation field. | OrderHeader.currencyUom -> UOM.uomId -> UOM.abbreviation |
| grandTotal | number | This attribute contains the grand total of the order. | OrderHeader.grandTotal |
| shipmentMethodTypeId | string | This attribute contains shipment Method Type Id of ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.shipmentMethodTypeId |
| postalContactMechId | string | This attribute contains the Contact Mech Id of ship to address. postalContactMechId is the alias name of the contactMechId | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId |
| telecomContactMechId | string | This attribute contains the telecom Contact Mech Id of ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.telecomContactMechId |
| customerFirstName | string | This attribute contains first name of the bill to customer. customerFirstName is the alias name of the firstName | OrderHeader.orderId -> OrderRole.orderId -> OrderRole.partyId -> Person.partyId -> Person.firstName |
| customerLastName | string | This attribute contains last name of the bill to customer. customerLastName is the alias name of the firstName | OrderHeader.orderId -> OrderRole.orderId -> OrderRole.partyId -> Person.partyId -> Person.lastName |
| salesChannel | string | This attribute contains the SalesChannel enumCode. salesChannel is the alias name of the enumCode. | OrderHeader.salesChannelEnumId -> Enumeration.enumId -> Enumeration.enumCode |
| customerPartyId | string | This attribute contains the billTo customer partyId. customerPartyId is the alias name of the partyId | OrderHeader.orderId -> OrderRole.orderd -> OrderRole.partyId |
| isShippingChargesSent | string | Define the custom variable to identify shipping charges, shipping sales tax, and whether shipping adjustments were sent or not. | |
| billTo.contactMechId | string | This attribute contains the bill to contact Mech Id. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PostalAddress.contactMechId |
| billTo.PostalCode | string | This attribute contains the postal code of the bill to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PostalAddress.postalCode |
| billTo.address1 | string | This attribute contains the address1 of the bill to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PostalAddress.address1 |
| billTo.stateProvinceGeoId | string | This attribute contains State Province Geo ID of the bill to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PostalAddress.stateProvinceGeoId |
| billTo.address2 | string | This attribute contains the address2 of the bill to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PostalAddress.address2 |
| billTo.city | string | This attribute contains the city of the bill to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PostalAddress.city |
| billTo.stateProvinceGeoCode | string | This attribute contains the State Province Geo ID of the bill to address. stateProvinceGeoCode is the alias name of the geoCode. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PostalAddress.stateProvinceGeoId -> Geo.geoId |
| billTo.toName | string | This attribute contains the To Name of the bill to customer. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PostalAddress.toName |
| billTo.countryGeoCode | string | This attribute contains the Country Geo Code of the bill to address | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PostalAddress.countryGeoId -> Geo.geoId |
| billTo.isResidentialAddress | string | If OrderContactMech.contactMechPurposeTypeId='HOME\_LOCATION' then isResidentialAddress should be 'Y' if OrderContactMech.contactMechPurposeTypeId='WORK\_LOCATION' then isResidentialAddress should be 'N'. If contactMechPurposeTypeId neither 'HOME\_LOCATION' nor 'WORK\_LOCATION' then isResidentialAddress will be null. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > OrderContactMech.contactMechId,OrderContactMech.contactMechPurposeTypeId |
| orderIdentifications.idValue | string | This attribute contains the value of the order Identification of the order | OrderHeader.orderId -> OrderIdentification.idValue |
| orderIdentificationTypeId.orderIdentificationTypeId | string | This attribute contains the type ID of the Order Identification of the order. Defaults to SHOPIFY\_ORD\_ID | OrderHeader.orderId -> OrderIdentification.orderIdentificationTypeId |
| customerPartyIdentifications.idValue | string | This attribute contains the value of the Party Identification of the customer | OrderHeader.orderId -> OrderRole.partyId -> PartyIdentification.idValue |
| customerPartyIdentifications.partyIdentificationTypeId | string | This attribute contains the type ID of the Party Identification of the customer. Defaults to SHOPIFY\_CUST\_ID. | OrderHeader.orderId -> OrderRole.partyId -> PartyIdentification.partyIdentificationTypeId |
| payments | string | List of the Payment related | |
| payments.paymentMethodCode | string | This attribute contains the paymentMethodCode. | OrderItem.orderId -> OrderPaymentPreference.paymentMethodTypeId -> PaymentMethodType.paymentMethodCode \*\*Note-\*\* OrderPaymentPreference.statusId not equals =\*\*'PAYMENT\_REFUNDED'\*\* |
| payments.createdDate | string | This attribute contains the createdDate. | OrderItem.orderId -> OrderPaymentPreference.paymentMethodTypeId -> PaymentMethodType.createdDate \*\*Note-\*\* OrderPaymentPreference.statusId not equals =\*\*'PAYMENT\_REFUNDED'\*\* |
| payments.paymentMethodTypeId | string | This attribute contains the paymentMethodTypeId. | OrderItem.orderId -> OrderPaymentPreference.paymentMethodTypeId -> PaymentMethodType.paymentMethodTypeId \*\*Note-\*\* OrderPaymentPreference.statusId not equals =\*\*'PAYMENT\_REFUNDED'\*\* |
| payments.paymentMethodDescription | string | This attribute contains the paymentMethodDescription. | OrderItem.orderId -> OrderPaymentPreference.paymentMethodTypeId -> PaymentMethodType.paymentMethodDescription \*\*Note-\*\* OrderPaymentPreference.statusId not equals =\*\*'PAYMENT\_REFUNDED'\*\* |
| payments.statusId | string | This attribute contains the statusId. | OrderItem.orderId -> OrderPaymentPreference.paymentMethodTypeId -> PaymentMethodType.statusId \*\*Note-\*\* OrderPaymentPreference.statusId not equals =\*\*'PAYMENT\_REFUNDED'\*\* |
| payments.amount | string | This attribute contains the amount. This is the max of the amount. | OrderItem.orderId -> OrderPaymentPreference.paymentMethodTypeId -> PaymentMethodType.amount \*\*Note-\*\* OrderPaymentPreference.statusId not equals =\*\*'PAYMENT\_REFUNDED'\*\* |
| payments.orderId | string | This attribute contains the orderId. | OrderItem.orderId -> OrderPaymentPreference.paymentMethodTypeId -> PaymentMethodType.orderId \*\*Note-\*\* OrderPaymentPreference.statusId not equals =\*\*'PAYMENT\_REFUNDED'\*\* |
| orderAdjustments | list | List of Order Header Level Adjustments | |
| orderAdjustments.orderAdjustmentTypeId | string | This attribute contains the Type Id of the Order Adjustment | OrderHeader.orderId -> OrderAdjustment.orderAdjustmentTypeId |
| orderAdjustments.orderId | string | This attribute contains the Order Id | OrderHeader.orderId -> OrderAdjustment.orderId |
| orderAdjustments.orderItemSeqId | string | This attribute contains the Order Item Seq Id | OrderHeader.orderId -> OrderAdjustment.orderItemSeqId |
| orderAdjustments.amount | number | This attribute contains the Order Adjustment amount | OrderHeader.orderId -> OrderAdjustment.amount |
| orderItems | list | List of Order Items | |
| orderItems.productStoreId | string | This attribute contains the product store ID. The default value will be HOTWAX. | OrderHeader.productStoreId |
| orderItems.orderId | string | This is the unique ID assigned to an order in the system. | OrderHeader.orderId |
| orderItems.orderName | string | This attribute contains the name of the order. | OrderHeader.orderName |
| orderItems.orderDate | string | This attribute contains the order date. | OrderHeader.orderDate |
| orderItems.orderStatusId | string | This attribute contains the status ID of the order. orderStatusId is the alias name of statusId field | OrderHeader.statusId |
| orderItems.entryDate | string | This attribute defines the entry date of order in the system. | OrderHeader.entryDate |
| orderItems.currency | string | This attribute contains the currency UOM in the order. currency is the alias name of abbreviation field. | OrderHeader.currencyUom -> UOM.uomId -> UOM.abbreviation |
| orderItems.grandTotal | number | This attribute contains the grand total of the order. | OrderHeader.grandTotal |
| orderItems.orderItemSeqId | string | Order item sequence id. | OrderHeader.orderId -> OrderItem.orderId -> OrderItem.orderItemSeqId |
| orderItems.itemStatusId | string | This attribute represents the status of the order item. Defaults to ITEM\_APPROVED. itemStatusId is the alias name of the statusId field. | OrderHeader.orderId -> OrderItem.orderId -> OrderItem.statusId |
| orderItems.quantity | string | This attribute contains the sum of quantity for the same orderId,orderItemSeqId, shipGroupSeqId. | OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.orderItemSeqId -> OrderItemShipGroup.shipGroupSeqId -> OrderItemShipGrpInvRes.quantity |
| orderItems.unitPrice | string | This attribute contains the unit price of the order item. | OrderHeader.orderId -> OrderItem.orderId -> OrderItem.unitPrice |
| orderItems.orderItemExternalId | string | This attribute contains the externalId of the order item. orderItemExternalId is the alias name of the externalId field. | OrderHeader.orderId -> OrderItem.orderId -> OrderItem.externalId |
| orderItems.shipGroupSeqId | string | This attribute contains ship group sequence of the order item. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.shipGroupSeqId |
| orderItems.shipmentMethodTypeId | string | This attribute contains shipment Method Type Id of ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.shipmentMethodTypeId |
| orderItems.postalContactMechId | string | This attribute contains the Contact Mech Id of ship to address. postalContactMechId is the alias name of the contactMechId | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId |
| orderItems.telecomContactMechId | string | This attribute contains the telecom Contact Mech Id of ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.telecomContactMechId |
| orderItems.externalFulfillmentOrderItemId | string | This attribute contains the ID of External Fulfillment Order Item record which helps in maintaining history of the items sent for fulfillment. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.orderItemSeqId -> OrderItemShipGroup.orderId, OrderItemShipGroup.shipGroupSeqId -> ExternalFulfillmentOrderItem.orderId, ExternalFulfillmentOrderItem.orderItemSeqId, ExternalFulfillmentOrderItem.shipGroupSeqId -> ExternalFulfillmentOrderItem.externalFulfillmentOrderItemId |
| orderItems.fulfillmentStatus | string | This attribute contains the status of External Fulfillment Order Item record sent for fulfillment. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.orderItemSeqId -> OrderItemShipGroup.orderId, OrderItemShipGroup.shipGroupSeqId -> ExternalFulfillmentOrderItem.orderId, ExternalFulfillmentOrderItem.orderItemSeqId, ExternalFulfillmentOrderItem.shipGroupSeqId -> ExternalFulfillmentOrderItem.fulfillmentStatus |
| orderItems.customerFirstName | string | This attribute contains first name of the bill to customer. customerFirstName is the alias name of the firstName | OrderHeader.orderId -> OrderRole.orderId -> OrderRole.partyId -> Person.partyId -> Person.firstName |
| orderItems.customerLastName | string | This attribute contains last name of the bill to customer. customerLastName is the alias name of the firstName | OrderHeader.orderId -> OrderRole.orderId -> OrderRole.partyId -> Person.partyId -> Person.lastName |
| orderItems.facilityId | string | This attribute contains the facility ID. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.facilityId-> Facility.facilityId |
| orderItems.facilityExternalId | string | This attribute contains the external facility/warehouse ID. facilityExternalId is the alias name of the externalId | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.facilityId-> Facility.facilityId -> Facility.externalId |
| orderItems.facilityTypeId | string | This attribute contains the facility Type Id. facilityExternalId is the alias name of the externalId | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.facilityId-> Facility.facilityId -> FacilityType.facilityTypeId |
| orderItems.parentFacilityTypeId | string | This attribute contains ID of the parent facility for facilityId. Defaults to DISTRIBUTION\_CENTER. parentFacilityTypeId is the alias name of the parentTypeId | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.facilityId -> Facility.facilityId -> FacilityType.facilityTypeId -> FacilityType.parentTypeId |
| orderItems.statusDatetime | string | This attribute represents the date time corresponding to the Order Item Status record of ITEM\_APPROVED | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderStatus.statusDatetime |
| orderItems.productId | string | This attribute contains the unique product ID in the system for the order item. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> Product.productId |
| orderItems.productTypeId | string | This attribute contains the order item productTypeId. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.productId-> Product.productId -> ProductType.productTypeId |
| orderItems.salesChannel | string | This attribute contains the SalesChannel enumCode. salesChannel is the alias name of the enumCode. | OrderHeader.salesChannelEnumId -> Enumeration.enumId -> Enumeration.enumCode |
| orderItems.customerPartyId | string | This attribute contains the billTo customer partyId. customerPartyId is the alias name of the partyId | OrderHeader.orderId -> OrderRole.orderd -> OrderRole.partyId |
| orderItems.shipTo | map | Map of the ship to address. | |
| orderItems.shipTo.contactMechId | string | This attribute contains the Contact Mech Id of ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId |
| orderItems.shipTo.PostalCode | string | This attribute contains the postal code of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PostalAddress.postalCode |
| orderItems.shipTo.address1 | string | This attribute contains the address1 of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PostalAddress.address1 |
| orderItems.shipTo.stateProvinceGeoId | string | This attribute contains State Province Geo ID of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PostalAddress.stateProvinceGeoId |
| orderItems.shipTo.address2 | string | This attribute contains the address2 of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PostalAddress.address2 |
| orderItems.shipTo.city | string | This attribute contains the city of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PostalAddress.city |
| orderItems.shipTo.stateProvinceGeoCode | string | This attribute contains the State Province Geo ID of the ship to address. stateProvinceGeoCode is the alias name of the geoCode. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PostalAddress.stateProvinceGeoId -> Geo.geoId |
| orderItems.shipTo.toName | string | This attribute contains the To Name of the ship to customer. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PostalAddress.toName |
| orderItems.shipTo.countryGeoCode | string | This attribute contains the Country Geo Code of the ship to address | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PostalAddress.countryGeoId -> Geo.geoId |
| orderItems.shipTo.isResidentialAddress | string | If OrderContactMech.contactMechPurposeTypeId='HOME\_LOCATION' then isResidentialAddress should be 'Y' if OrderContactMech.contactMechPurposeTypeId='WORK\_LOCATION' then isResidentialAddress should be 'N'. If contactMechPurposeTypeId neither 'HOME\_LOCATION' nor 'WORK\_LOCATION' then isResidentialAddress will be null. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > OrderContactMech.contactMechId,OrderContactMech.contactMechPurposeTypeId |
| orderItems.shipTo.contactMechPurposeTypeId | string | This attribute contains the contactMechPurposeTypeId of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > OrderContactMech.contactMechPurposeTypeId |
| orderItems.shipTo.contactMechId | string | This attribute contains the contactMechId of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > OrderContactMech.contactMechId |
| orderItems.shipTo.telecomContactMechId | string | This attribute contains the telecom Contact Mech Id of ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.telecomContactMechId |
| orderItems.shipTo.emailAddress | string | This attribute contains the email address of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > EmailAddress.emailAddress |
| orderItems.shipTo.contactNumber | string | This attribute contains the contact number of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumber |
| orderItems.shipTo.contactNumberTypeId | string | This attribute contains the contact number type ID of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberTypeId |
| orderItems.shipTo.contactNumberPurposeTypeId | string | This attribute contains the contact number purpose type ID of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberPurposeTypeId |
| orderItems.shipTo.contactNumberCountryCode | string | This attribute contains the contact number country code of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberCountryCode |
| orderItems.shipTo.contactNumberAreaCode | string | This attribute contains the contact number area code of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberAreaCode |
| orderItems.shipTo.contactNumberExtension | string | This attribute contains the contact number extension of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberExtension |
| orderItems.shipTo.contactNumberAskForName | string | This attribute contains the contact number ask for name of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberAskForName |
| orderItems.shipTo.contactNumberCountryCode | string | This attribute contains the contact number country code of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberCountryCode |
| orderItems.shipTo.contactNumberAreaCode | string | This attribute contains the contact number area code of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberAreaCode |
| orderItems.shipTo.contactNumberExtension | string | This attribute contains the contact number extension of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberExtension |
| orderItems.shipTo.contactNumberAskForName | string | This attribute contains the contact number ask for name of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberAskForName |
| orderItems.shipTo.contactNumberCountryCode | string | This attribute contains the contact number country code of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberCountryCode |
| orderItems.shipTo.contactNumberAreaCode | string | This attribute contains the contact number area code of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberAreaCode |
| orderItems.shipTo.contactNumberExtension | string | This attribute contains the contact number extension of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberExtension |
| orderItems.shipTo.contactNumberAskForName | string | This attribute contains the contact number ask for name of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberAskForName |
| orderItems.shipTo.contactNumberCountryCode | string | This attribute contains the contact number country code of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberCountryCode |
| orderItems.shipTo.contactNumberAreaCode | string | This attribute contains the contact number area code of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberAreaCode |
| orderItems.shipTo.contactNumberExtension | string | This attribute contains the contact number extension of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberExtension |
| orderItems.shipTo.contactNumberAskForName | string | This attribute contains the contact number ask for name of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberAskForName |
| orderItems.shipTo.contactNumberCountryCode | string | This attribute contains the contact number country code of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberCountryCode |
| orderItems.shipTo.contactNumberAreaCode | string | This attribute contains the contact number area code of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberAreaCode |
| orderItems.shipTo.contactNumberExtension | string | This attribute contains the contact number extension of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberExtension |
| orderItems.shipTo.contactNumberAskForName | string | This attribute contains the contact number ask for name of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberAskForName |
| orderItems.shipTo.contactNumberCountryCode | string | This attribute contains the contact number country code of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberCountryCode |
| orderItems.shipTo.contactNumberAreaCode | string | This attribute contains the contact number area code of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberAreaCode |
| orderItems.shipTo.contactNumberExtension | string | This attribute contains the contact number extension of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberExtension |
| orderItems.shipTo.contactNumberAskForName | string | This attribute contains the contact number ask for name of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberAskForName |
| orderItems.shipTo.contactNumberCountryCode | string | This attribute contains the contact number country code of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberCountryCode |
| orderItems.shipTo.contactNumberAreaCode | string | This attribute contains the contact number area code of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberAreaCode |
| orderItems.shipTo.contactNumberExtension | string | This attribute contains the contact number extension of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberExtension |
| orderItems.shipTo.contactNumberAskForName | string | This attribute contains the contact number ask for name of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberAskForName |
| orderItems.shipTo.contactNumberCountryCode | string | This attribute contains the contact number country code of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberCountryCode |
| orderItems.shipTo.contactNumberAreaCode | string | This attribute contains the contact number area code of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberAreaCode |
| orderItems.shipTo.contactNumberExtension | string | This attribute contains the contact number extension of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberExtension |
| orderItems.shipTo.contactNumberAskForName | string | This attribute contains the contact number ask for name of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberAskForName |
| orderItems.shipTo.contactNumberCountryCode | string | This attribute contains the contact number country code of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberCountryCode |
| orderItems.shipTo.contactNumberAreaCode | string | This attribute contains the contact number area code of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberAreaCode |
| orderItems.shipTo.contactNumberExtension | string | This attribute contains the contact number extension of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberExtension |
| orderItems.shipTo.contactNumberAskForName | string | This attribute contains the contact number ask for name of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberAskForName |
| orderItems.shipTo.contactNumberCountryCode | string | This attribute contains the contact number country code of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberCountryCode |
| orderItems.shipTo.contactNumberAreaCode | string | This attribute contains the contact number area code of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberAreaCode |
| orderItems.shipTo.contactNumberExtension | string | This attribute contains the contact number extension of the ship to address. | OrderHeader.orderId -> OrderItem.orderId, OrderItem.orderItemSeqId -> OrderItemShipGroupAssoc.orderId, OrderItemShipGroupAssoc.shipGroupSeqId -> OrderItemShipGroup.contactMechId - > PhoneNumber.contactNumberExtension |
| orderItems.shipTo.contactNumberAskForName | string | This attribute contains the contact number ask for name of the ship to address. | OrderHeader.orderId -> OrderItem


