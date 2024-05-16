---
description: >-
  Learn about the Returns Financial Feed, a JSON-formatted return-wise feed generated from HotWax Commerce OMS.
---

# Appeasements feed

## Introduction

The Returns Financial Feed, generated from HotWax Commerce OMS, is a JSON-formatted feed containing details about returns created against orders, originating from both online and in-store channels. This feed facilitates financial reconciliation, particularly when integrating with third-party systems such as ERP.

## Use case

### Communication with the External Order fulfillment system

The Returns financial feed is useful for retailers who use ERP for their accounting purposes and requires financial reconciliation during specific cycles. This feed provides the out-of-the-box data available from OMS, and retailers can use it as is or after transformation to ingest into external systems through file-based integration.

## Customization

The Returns Financial Feeed Order Items feed has certain out-of-the-box customizations that allow users to generate the feed as per the requirements.

| **Parameter**           | **Description**                                                                                                                                                  |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `orderId`               | Filter return details for a specific order ID.                                                                                                                 |
| `returnId`              | Filter return details for a specific return ID.                                                                                                                |
| `sinceReturnDate`       | Filter returns after a specific return date. Corresponds to the return date in HotWax Commerce.                                                                |
| `sinceReturnCompletedDate` | Filter returns completed in HotWax Commerce after a specific date. Corresponds to the completion date for return items in HotWax Commerce.                |
| `sinceEntryDate`        | Filter returns created after a specific date in HotWax Commerce. Corresponds to the entry date in HotWax Commerce.                                               |
| `productStoreIds`       | Sets the product store IDs to generate brand-specific feeds. For example, "WSC_STORE".                                                                           |
| `returnChannelEnumId`   | Identifies returns made from different channels such as e-commerce returns or in-store returns.                                                                  |
| `customParametersMap`   | Defines custom conditions, allowing flexibility in specifying new conditions. For example, `{"returnReasonId_op": "empty", "returnReasonId_not": "Y"}`.        |
| `optimize`              | Optimize the query or process for better performance.                                                                                                           |


<details>

<summary> Sample Returns feed</summary>

```json
[
    {
      "returnId": "13031",
      "returnItemSeqId": null,
      "entryDate": null,
      "returnDate": "2022-02-03T10:41:39-05:00",
      "orderSalesChannelEnumId": "POS_SALES_CHANNEL",
      "orderSalesChannel": "POS Channel",
      "returnChannelEnumId" : "ECOM_RTN_CHANNEL",
      "orderId": "29211",
      "orderItemSeqId": null,
      "returnItemAmountTotal": null,
      "statusId": null,
      "completedDatetime": "2022-02-01T10:41:39-05:00",
      "productStoreId": "WSC_STORE",
      "orderName": "WSC#8586",
      "productStoreExternalId": "1",
      "customerPartyId": "37301",
      "billTo": {
        "houseNumberExt": null,
        "address2": null,
        "postalCode": "10005",
        "city": "New York",
        "stateProvinceGeoId": "NY",
        "postalCodeGeoId": null,
        "houseNumber": null,
        "encodedAddressKey": null,
        "contactMechId": "108812",
        "address1": "588 Abia Martin Drive",
        "geoPointId": "26753",
        "postalCodeExt": null,
        "countryGeoId": "USA",
        "countryGeoCode": "US",
        "attnName": null,
        "directions": null,
        "countyGeoId": null,
        "cityGeoId": null,
        "toName": "Petter William",
        "municipalityGeoId": null,
        "stateProvinceGeoCode": "NY"
      },
      "isShippingChargesSent": "N",
      "returnAdjustments": [
        {
          "customerReferenceId": null,
          "correspondingProductId": null,
          "amount": 16.95,
          "includeInShipping": null,
          "returnTypeId": null,
          "exemptAmount": null,
          "productPromoId": null,
          "taxAuthPartyId": null,
          "lastModifiedByUserLogin": null,
          "primaryGeoId": null,
          "lastUpdatedStamp": "2022-03-18T14:18:19-04:00",
          "taxAuthGeoId": null,
          "secondaryGeoId": null,
          "createdByUserLogin": null,
          "orderAdjustmentId": null,
          "description": "restock",
          "returnAdjustmentId": "11735",
          "returnId": "13031",
          "lastModifiedDate": null,
          "sourceReferenceId": null,
          "productPromoRuleId": null,
          "productFeatureId": null,
          "taxAuthorityRateSeqId": null,
          "overrideGlAccountId": null,
          "returnAdjustmentTypeId": "RET_SHIPPING_ADJ",
          "shipGroupSeqId": null,
          "includeInTax": null,
          "createdDate": null,
          "comments": "restock",
          "productPromoActionSeqId": null,
          "orderId": "30129",
          "sourcePercentage": null,
          "returnItemSeqId": "_NA_"
        },
        {
          "customerReferenceId": null,
          "correspondingProductId": null,
          "amount": 26.95,
          "includeInShipping": null,
          "returnTypeId": null,
          "exemptAmount": null,
          "productPromoId": null,
          "taxAuthPartyId": null,
          "lastModifiedByUserLogin": null,
          "primaryGeoId": null,
          "lastUpdatedStamp": "2022-03-18T14:18:19-04:00",
          "taxAuthGeoId": null,
          "secondaryGeoId": null,
          "createdByUserLogin": null,
          "orderAdjustmentId": null,
          "description": "restock",
          "returnAdjustmentId": "11735",
          "returnId": "13031",
          "lastModifiedDate": null,
          "sourceReferenceId": null,
          "productPromoRuleId": null,
          "productFeatureId": null,
          "taxAuthorityRateSeqId": null,
          "overrideGlAccountId": null,
          "returnAdjustmentTypeId": "RET_SALES_TAX_ADJ",
          "shipGroupSeqId": null,
          "includeInTax": null,
          "createdDate": null,
          "comments": "restock",
          "productPromoActionSeqId": null,
          "orderId": "30129",
          "sourcePercentage": null,
          "returnItemSeqId": "_NA_"
        }
      ],
      "customerPartyIdentifications": [
        {
          "partyId": "37301",
          "idValue": "3327480496199",
          "partyIdentificationTypeId": "SHOPIFY_CUST_ID",
          "lastUpdatedStamp": "2022-01-28T02:36:41-05:00"
        }
      ],
      "tenderAmount": 131.68,
      "payments": [
        {
          "paymentMethodTypeId": "EXT_SHOP_VISA",
          "paymentMethodDescription": "Ext VISA",
          "statusId": "PAYMENT_REFUNDED",
          "paymentMethodCode": "VISA",
          "returnId": "13031",
          "amount": 131.68,
          "orderId": "29211",
          "createdDate": "2022-05-31T03:48:18-04:00"
        }
      ],
      "returnItems": [
        {
          "returnId": "13031",
          "returnItemSeqId": "00001",
          "orderId": "29211",
          "orderItemSeqId": "00001",
          "returnItemPrice": 120.95,
          "returnQuantity": 1,
          "returnReasonId": "RTN_NOT_WANT",
          "returnReasonNote": "",
          "orderItemRequestedShipMethTypeId": "STANDARD",
          "productId": "20965",
          "orderName": "WSC#8586",
          "facilityExternalId": "1",
          "facilityId": "1",
          "productStoreExternalId": "1",
          "currencyUom": "USD",
          "customerPartyId": "37301",
          "shipToContactMechId": null,
          "shipTo": {
            "houseNumberExt": null,
            "contactMechId": "67597",
            "postalCode": "91911",
            "address2": null,
            "postalCodeGeoId": null,
            "houseNumber": null,
            "encodedAddressKey": null,
            "address1": "830 Bay Boulevard",
            "postalCodeExt": null,
            "countryGeoId": "USA",
            "countryGeoCode": "US",
            "stateProvinceGeoCode": "CA",
            "geoPointId": "17142",
            "attnName": null,
            "directions": null,
            "city": "Chula Vista",
            "countyGeoId": null,
            "cityGeoId": null,
            "municipalityGeoId": null,
            "stateProvinceGeoId": "CA",
            "toName": "cata lion"
          },
          "productIdentifications": [
            {
              "productId": "20965",
              "goodIdentificationTypeId": "SHOPIFY_PROD_ID",
              "lastUpdatedStamp": "2023-03-14T13:13:32-04:00",
              "idValue": "13778606719047",
              "fromDate": "2023-02-22T07:04:36-05:00",
              "thruDate": null
            },
            {
              "productId": "20965",
              "lastUpdatedStamp": "2023-03-14T13:13:32-04:00",
              "idValue": "AGENT",
              "fromDate": "2020-06-11T13:13:16-04:00",
              "goodIdentificationTypeId": "SHOPIFY_PROD_SKU",
              "thruDate": null
            },
            {
              "productId": "20965",
              "lastUpdatedStamp": "2023-03-14T13:13:32-04:00",
              "fromDate": "2022-04-25T09:00:18-04:00",
              "goodIdentificationTypeId": "SKU",
              "idValue": "AGENT",
              "thruDate": null
            },
            {
              "productId": "20965",
              "idValue": "824386706307",
              "lastUpdatedStamp": "2022-03-16T03:00:32-04:00",
              "goodIdentificationTypeId": "UPCA",
              "fromDate": "2020-06-11T13:13:16-04:00",
              "thruDate": null
            }
          ],
          "returnItemAdjustments": [
            {
              "customerReferenceId": null,
              "correspondingProductId": null,
              "orderId": null,
              "includeInShipping": null,
              "comments": "Return Sales Tax",
              "exemptAmount": null,
              "productPromoId": null,
              "taxAuthPartyId": null,
              "lastModifiedByUserLogin": null,
              "lastUpdatedStamp": "2022-02-01T10:41:39-05:00",
              "returnAdjustmentTypeId": "RET_SALES_TAX_ADJ",
              "description": "Return Sales Tax",
              "returnAdjustmentId": "11580",
              "primaryGeoId": null,
              "taxAuthGeoId": null,
              "secondaryGeoId": null,
              "createdByUserLogin": null,
              "orderAdjustmentId": null,
              "returnItemSeqId": "00001",
              "lastModifiedDate": null,
              "sourceReferenceId": null,
              "productPromoRuleId": null,
              "productFeatureId": null,
              "taxAuthorityRateSeqId": null,
              "returnId": "13031",
              "overrideGlAccountId": null,
              "shipGroupSeqId": null,
              "includeInTax": null,
              "amount": 10.73,
              "createdDate": null,
              "productPromoActionSeqId": null,
              "sourcePercentage": null,
              "returnTypeId": "RTN_REFUND"
            }
          ]
        },
        {
          "returnId": "13031",
          "returnItemSeqId": "00002",
          "orderId": "29211",
          "orderItemSeqId": "00002",
          "returnItemPrice": 120.95,
          "returnQuantity": 1,
          "returnReasonId": "OTHER",
          "returnReasonNote": "Did not meet my requirements",
          "orderItemRequestedShipMethTypeId": "STANDARD",
          "productId": "20965",
          "orderName": "WSC#8586",
          "facilityExternalId": "1",
          "facilityId": "1",
          "productStoreExternalId": "1",
          "currencyUom": "USD",
          "customerPartyId": "37301",
          "shipToContactMechId": null,
          "shipTo": {
            "houseNumberExt": null,
            "contactMechId": "67597",
            "postalCode": "91911",
            "address2": null,
            "postalCodeGeoId": null,
            "houseNumber": null,
            "encodedAddressKey": null,
            "address1": "830 Bay Boulevard",
            "postalCodeExt": null,
            "countryGeoId": "USA",
            "countryGeoCode": "US",
            "stateProvinceGeoCode": "CA",
            "geoPointId": "17142",
            "attnName": null,
            "directions": null,
            "city": "Chula Vista",
            "countyGeoId": null,
            "cityGeoId": null,
            "municipalityGeoId": null,
            "stateProvinceGeoId": "CA",
            "toName": "cata lion"
          },
          "productIdentifications": [
            {
              "productId": "20965",
              "goodIdentificationTypeId": "SHOPIFY_PROD_ID",
              "lastUpdatedStamp": "2023-03-14T13:13:32-04:00",
              "idValue": "13778606719047",
              "fromDate": "2023-02-22T07:04:36-05:00",
              "thruDate": null
            },
            {
              "productId": "20965",
              "lastUpdatedStamp": "2023-03-14T13:13:32-04:00",
              "idValue": "AGENT",
              "fromDate": "2020-06-11T13:13:16-04:00",
              "goodIdentificationTypeId": "SHOPIFY_PROD_SKU",
              "thruDate": null
            },
            {
              "productId": "20965",
              "lastUpdatedStamp": "2023-03-14T13:13:32-04:00",
              "fromDate": "2022-04-25T09:00:18-04:00",
              "goodIdentificationTypeId": "SKU",
              "idValue": "AGENT",
              "thruDate": null
            },
            {
              "productId": "20965",
              "idValue": "824386706307",
              "lastUpdatedStamp": "2022-03-16T03:00:32-04:00",
              "goodIdentificationTypeId": "UPCA",
              "fromDate": "2020-06-11T13:13:16-04:00",
              "thruDate": null
            }
          ],
          "returnItemAdjustments": [
            {
              "customerReferenceId": null,
              "correspondingProductId": null,
              "orderId": null,
              "includeInShipping": null,
              "comments": "Return Sales Tax",
              "exemptAmount": null,
              "productPromoId": null,
              "taxAuthPartyId": null,
              "lastModifiedByUserLogin": null,
              "lastUpdatedStamp": "2022-02-01T10:41:39-05:00",
              "returnAdjustmentTypeId": "RET_SALES_TAX_ADJ",
              "description": "Return Sales Tax",
              "returnAdjustmentId": "11580",
              "primaryGeoId": null,
              "taxAuthGeoId": null,
              "secondaryGeoId": null,
              "createdByUserLogin": null,
              "orderAdjustmentId": null,
              "returnItemSeqId": "00002",
              "lastModifiedDate": null,
              "sourceReferenceId": null,
              "productPromoRuleId": null,
              "productFeatureId": null,
              "taxAuthorityRateSeqId": null,
              "returnId": "13031",
              "overrideGlAccountId": null,
              "shipGroupSeqId": null,
              "includeInTax": null,
              "amount": 10.73,
              "createdDate": null,
              "productPromoActionSeqId": null,
              "sourcePercentage": null,
              "returnTypeId": "RTN_REFUND"
            }
          ]
        }
      ]
    }
  ]

```

</details>

## Attributes

**The following attributes have been prepared in the feed:**

| Field                           | Description                                                                      |
|---------------------------------|----------------------------------------------------------------------------------|
| `returnId`                      | Identifier for the return.                                                       |
| `returnItemSeqId`               | Sequence ID for the return item.                                                 |
| `entryDate`                     | Date of entry for the return.                                                    |
| `returnDate`                    | Date of the return.                                                              |
| `orderSalesChannelEnumId`       | Enum ID for the order sales channel.                                             |
| `orderSalesChannel`             | Sales channel for the order.                                                     |
| `returnChannelEnumId`           | Enum ID for the return channel.                                                   |
| `orderId`                       | Identifier for the order.                                                        |
| `orderItemSeqId`                | Sequence ID for the order item.                                                  |
| `returnItemAmountTotal`         | Total amount for the return item.                                                |
| `statusId`                      | Identifier for the status.                                                       |
| `completedDatetime`             | Date and time when the return was completed.                                     |
| `productStoreId`                | Identifier for the product store.                                                |
| `orderName`                     | Name of the order.                                                               |
| `productStoreExternalId`        | External ID for the product store.                                               |
| `customerPartyId`               | Identifier for the customer party.                                               |
| `billTo`                        | Object containing billing address information.                                    |
| `isShippingChargesSent`         | Flag indicating if shipping charges were sent.                                   |
| `returnAdjustments`             | Array of adjustments related to the return.                                      |
| `customerPartyIdentifications`  | Array of identifications for the customer party.                                 |
| `tenderAmount`                  | Amount tendered for the return.                                                  |
| `payments`                      | Array of payments related to the return.                                         |
| `returnItems`                   | Array of items being returned.                                                   |

Nested Fields within `billTo`:

| Field                           | Description                                                                      |
|---------------------------------|----------------------------------------------------------------------------------|
| `houseNumberExt`                | Extension for the house number.                                                  |
| `address2`                      | Additional address information.                                                  |
| `postalCode`                    | Postal code of the address.                                                       |
| ...                             | More fields for the billing address.                                             |

Nested Fields within `returnAdjustments`:

| Field                           | Description                                                                      |
|---------------------------------|----------------------------------------------------------------------------------|
| `customerReferenceId`           | Identifier for customer reference.                                               |
| `amount`                        | Amount of the adjustment.                                                        |
| `description`                   | Description of the adjustment.                                                   |
| ...                             | More fields for the return adjustments.                                          |

Nested Fields within `customerPartyIdentifications`:

| Field                           | Description                                                                      |
|---------------------------------|----------------------------------------------------------------------------------|
| `partyId`                       | Identifier for the party.                                                         |
| `idValue`                       | Value of the identification.                                                     |
| ...                             | More fields for the customer party identifications.                               |

Nested Fields within `payments`:

| Field                           | Description                                                                      |
|---------------------------------|----------------------------------------------------------------------------------|
| `paymentMethodTypeId`           | Type of payment method.                                                           |
| `paymentMethodDescription`      | Description of the payment method.                                                |
| `statusId`                      | Identifier for the status.                                                        |
| ...                             | More fields for the payments.                                                     |

Nested Fields within `returnItems`:

| Field                           | Description                                                                      |
|---------------------------------|----------------------------------------------------------------------------------|
| `returnId`                      | Identifier for the return.                                                         |
| `returnItemSeqId`               | Sequence ID for the return item.                                                   |
| `orderId`                       | Identifier for the order.                                                          |
| ...                             | More fields for the return items.                                                  |

Nested Fields within `shipTo`:

| Field                           | Description                                                                      |
|---------------------------------|----------------------------------------------------------------------------------|
| `houseNumberExt`                | Extension for the house number.                                                  |
| `contactMechId`                 | Identifier for the contact mechanism.                                            |
| `postalCode`                    | Postal code of the address.                                                       |
| ...                             | More fields for the shipping address.                                             |

Nested Fields within `productIdentifications`:

| Field                           | Description                                                                      |
|---------------------------------|----------------------------------------------------------------------------------|
| `productId`                     | Identifier for the product.                                                       |
| `goodIdentificationTypeId`     | Type of good identification.                                                      |
| `idValue`                       | Value of the identification.                                                     |
| ...                             | More fields for the product identifications.                                      |

Nested Fields within `returnItemAdjustments`:

| Field                           | Description                                                                      |
|---------------------------------|----------------------------------------------------------------------------------|
| `customerReferenceId`           | Identifier for customer reference.                                               |
| `amount`                        | Amount of the adjustment.                                                        |
| `description`                   | Description of the adjustment.                                                   |
| ...                             | More fields for the return item adjustments.                                      |
