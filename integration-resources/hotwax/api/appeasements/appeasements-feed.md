---
description: >-
  Learn about the Appeasements Financial Feed, a JSON-formatted refund-wise feed
  generated from HotWax Commerce OMS.
---

# Appeasements feed

## Introduction

The Appeasements Financial Feed is a refund-wise JSON-formatted feed generated from HotWax Commerce OMS. This feed contains details about appeasements provided against the orders. The feed can be used for financial reconciliation when third-party external systems such as ERP are involved.

## Use case

### Communication with the External Order fulfillment system

The Appeasements financial feed is useful for retailers who use ERP for their accounting purposes and requires financial reconciliation during specific cycles. This feed provides the out-of-the-box data available from OMS, and retailers can use it as is or after transformation to ingest into external systems through file-based integration.

## Customization

The Appeasements Financial Feeed Order Items feed has certain out-of-the-box customizations that allow users to generate the feed as per the requirements.

| **Parameter**    | **Description**                                                          |
| ---------------- | ------------------------------------------------------------------------ |
| `productStoreId` | Allows you to set the product store IDs to generate brand-specific feed. |

<details>

<summary> Sample Appeasements feed</summary>

```json
[ {
  "returnId" : "11724",
  "entryDate" : "2021-11-17T04:51:54-05:00",
  "returnDate" : null,
  "customerPartyId" : "36143",
  "originContactMechId" : null,
  "comments" : "Appeasement Shipping refund",
  "amount" : 30,
  "returnAdjustmentTypeId" : "APPEASEMENT",
  "orderName" : "SMUS#8113",
  "orderId" : "27923",
  "orderTypeId" : "SALES_ORDER",
  "productStoreExternalId" : "1",
  "billTo" : {
    "countryGeoCode" : "US",
    "stateProvinceGeoCode" : "NY",
    "contactMechId" : "101540",
    "toName" : "Petter William",
    "attnName" : null,
    "address1" : "588 Abia Martin Drive",
    "address2" : null,
    "houseNumber" : null,
    "houseNumberExt" : null,
    "directions" : null,
    "city" : "New York",
    "cityGeoId" : null,
    "postalCode" : "10005",
    "postalCodeExt" : null,
    "countryGeoId" : "USA",
    "stateProvinceGeoId" : "NY",
    "countyGeoId" : null,
    "municipalityGeoId" : null,
    "postalCodeGeoId" : null,
    "geoPointId" : "25097",
    "encodedAddressKey" : null
  },
    "shipTo" : {
    "countryGeoCode" : "US",
    "stateProvinceGeoCode" : "CA",
    "contactMechId" : "150857",
    "toName" : "cat lin",
    "attnName" : null,
    "address1" : "830 Bay Blvd",
    "address2" : null,
    "houseNumber" : null,
    "houseNumberExt" : null,
    "directions" : null,
    "city" : "Chula Vista",
    "cityGeoId" : null,
    "postalCode" : "91911",
    "postalCodeExt" : null,
    "countryGeoId" : "USA",
    "stateProvinceGeoId" : "CA",
    "countyGeoId" : null,
    "municipalityGeoId" : null,
    "postalCodeGeoId" : null,
    "geoPointId" : "37116",
    "encodedAddressKey" : null
  },
  "totalAmount" : 32.66,
    "customerPartyIdentifications": [
      {
        "idValue": "6460087566485",
        "lastUpdatedStamp": "2022-09-19T09:29:15-04:00",
        "partyId": "36143",
        "partyIdentificationTypeId": "SHOPIFY_CUST_ID"
      }
    ],
    "payments" : [ {
      "paymentMethodCode" : "VISA",
      "createdDate" : "2022-09-20T01:51:46-07:00",
      "paymentMethodTypeId" : "EXT_SHOP_VISA",
      "paymentMethodDescription" : "Ext VISA",
      "statusId" : "PAYMENT_REFUNDED",
      "orderId" : "27923",
      "amount" : 18.03
    }]
}, {
  "returnId" : "11724",
  "entryDate" : "2021-11-17T04:51:54-05:00",
  "returnDate" : null,
  "customerPartyId" : "36143",
  "originContactMechId" : null,
  "comments" : "Appeasement Tax Refund",
  "amount" : 2.66,
  "returnAdjustmentTypeId" : "APPEASEMENT",
  "orderName" : "SMUS#8113",
  "orderId" : "27923",
  "orderTypeId" : "SALES_ORDER",
  "productStoreExternalId" : "1",
  "billTo" : {
    "countryGeoCode" : "US",
    "stateProvinceGeoCode" : "NY",
    "contactMechId" : "101540",
    "toName" : "Petter William",
    "attnName" : null,
    "address1" : "588 Abia Martin Drive",
    "address2" : null,
    "houseNumber" : null,
    "houseNumberExt" : null,
    "directions" : null,
    "city" : "New York",
    "cityGeoId" : null,
    "postalCode" : "10005",
    "postalCodeExt" : null,
    "countryGeoId" : "USA",
    "stateProvinceGeoId" : "NY",
    "countyGeoId" : null,
    "municipalityGeoId" : null,
    "postalCodeGeoId" : null,
    "geoPointId" : "25097",
    "encodedAddressKey" : null
  },
    "shipTo" : {
    "countryGeoCode" : "US",
    "stateProvinceGeoCode" : "CA",
    "contactMechId" : "150857",
    "toName" : "cat lin",
    "attnName" : null,
    "address1" : "830 Bay Blvd",
    "address2" : null,
    "houseNumber" : null,
    "houseNumberExt" : null,
    "directions" : null,
    "city" : "Chula Vista",
    "cityGeoId" : null,
    "postalCode" : "91911",
    "postalCodeExt" : null,
    "countryGeoId" : "USA",
    "stateProvinceGeoId" : "CA",
    "countyGeoId" : null,
    "municipalityGeoId" : null,
    "postalCodeGeoId" : null,
    "geoPointId" : "37116",
    "encodedAddressKey" : null
  },
  "totalAmount" : 32.66,
    "customerPartyIdentifications": [
      {
        "idValue": "6460087566485",
        "lastUpdatedStamp": "2022-09-19T09:29:15-04:00",
        "partyId": "36143",
        "partyIdentificationTypeId": "SHOPIFY_CUST_ID"
      }
    ],
    "payments" : [ {
      "paymentMethodCode" : "VISA",
      "createdDate" : "2022-09-20T01:51:46-07:00",
      "paymentMethodTypeId" : "EXT_SHOP_VISA",
      "paymentMethodDescription" : "Ext VISA",
      "statusId" : "PAYMENT_REFUNDED",
      "orderId" : "27923",
      "amount" : 18.03
    }]
} ]

```

</details>

## Attributes

**The following attributes have been prepared in the feed:**

#### Return 

| Field Name                   | Description                                  | Value                       |
| ---------------------------- | -------------------------------------------- | --------------------------- |
| returnId                     | HotWax Commerce Return's identification      | 11724                       |
| entryDate                    | The entry date of return in HotWax Commerce  | 2021-11-17T04:51:54-05:00   |
| **returnDate**               | The return date                              | null                        |
| customerPartyId              | HotWax Commerce customer identification      | 36143                       |
| **originContactMechId**      | The origin contact mechanism ID              | null                        |
| comments                     | Comments regarding the return                | Appeasement Shipping refund |
| amount                       | The total return amount                      | 30                          |
| returnAdjustmentTypeId       | The return adjustment type against the order | APPEASEMENT                 |
| orderName                    | The Shopify order identification             | SMUS#8113                   |
| orderId                      | The HotWax Commerce Order Identification     | 27923                       |
| orderTypeId                  | The order type ID                            | SALES\_ORDER                |
| **productStoreExternalId**   | The external ID of the product store         | 1                           |
| billTo                       | The order billing address                    | See below                   |
| shipTo                       | The order shipping address                   | See below                   |
| totalAmount                  | The sum total amount of all items            | 32.66                       |
| customerPartyIdentifications | HotWax Commerce Customer identifications     | See below                   |
| payments                     | The payments related to order                | See below                   |

**billTo**

| Field Name            | Description                    | Value                 |
| --------------------- | ------------------------------ | --------------------- |
| countryGeoCode        | The country geo code           | US                    |
| stateProvinceGeoCode  | The state/province geo code    | NY                    |
| **contactMechId**     | The contact mechanism ID       | 101540                |
| toName                | The recipient's name           | Petter William        |
| **attnName**          | The attention name             | null                  |
| address1              | The first line of the address  | 588 Abia Martin Drive |
| address2              | The second line of the address | null                  |
| houseNumber           | The house number               | null                  |
| houseNumberExt        | The house number extension     | null                  |
| directions            | Directions                     | null                  |
| city                  | The city                       | New York              |
| cityGeoId             | The city geo ID                | null                  |
| postalCode            | The postal code                | 10005                 |
| postalCodeExt         | The postal code extension      | null                  |
| countryGeoId          | The country geo ID             | USA                   |
| stateProvinceGeoId    | The state/province geo ID      | NY                    |
| countyGeoId           | The county geo ID              | null                  |
| municipalityGeoId     | The municipality geo ID        | null                  |
| postalCodeGeoId       | The postal code geo ID         | null                  |
| geoPointId            | The geo point ID               | 25097                 |
| **encodedAddressKey** | The encoded address key        | null                  |

**shipTo**

| Field Name           | Description                    | Value        |
| -------------------- | ------------------------------ | ------------ |
| countryGeoCode       | The country geo code           | US           |
| stateProvinceGeoCode | The state/province geo code    | CA           |
| contactMechId        | The contact mechanism ID       | 150857       |
| toName               | The recipient's name           | cat lin      |
| attnName             | The attention name             | null         |
| address1             | The first line of the address  | 830 Bay Blvd |
| address2             | The second line of the address | null         |
| houseNumber          | The house number               | null         |
| houseNumberExt       | The house number extension     | null         |
| directions           | Directions                     | null         |
| city                 | The city                       | Chula Vista  |
| cityGeoId            | The city geo ID                | null         |
| postalCode           | The postal code                | 91911        |
| postalCodeExt        | The postal code extension      | null         |
| countryGeoId         | The country geo ID             | USA          |
| stateProvinceGeoId   | The state/province geo ID      | CA           |
| countyGeoId          | The county geo ID              | null         |
| municipalityGeoId    | The municipality geo ID        | null         |
| postalCodeGeoId      | The postal code geo ID         | null         |
| geoPointId           | The geo point ID               | 37116        |
| encodedAddressKey    | The encoded address key        | null         |

**customerPartyIdentifications**

| Field Name                | Description                            | Value                     |
| ------------------------- | -------------------------------------- | ------------------------- |
| idValue                   | The value of identification            | 6460087566485             |
| lastUpdatedStamp          | The date and time of the last update   | 2022-09-19T09:29:15-04:00 |
| partyId                   | HotWax Commerce's party identification | 36143                     |
| partyIdentificationTypeId | The party identification type ID       | SHOPIFY\_CUST\_ID         |

**payments**

| Field Name               | Description                    | Value                     |
| ------------------------ | ------------------------------ | ------------------------- |
| paymentMethodCode        | The payment method code        | VISA                      |
| createdDate              | The date and time of creation  | 2022-09-20T01:51:46-07:00 |
| paymentMethodTypeId      | The payment method type ID     | EXT\_SHOP\_VISA           |
| paymentMethodDescription | The payment method description | Ext VISA                  |
| statusId                 | The status ID                  | PAYMENT\_REFUNDED         |
| orderId                  | The order ID                   | 27923                     |
| amount                   | The payment amount             | 18.03                     |
