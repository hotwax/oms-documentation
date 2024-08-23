---
description: >-
  This document provides instructions for retrieving comprehensive details of a specific orde
---

# Retrieve an Order

**Improved Sentence:**

Retrieves of detailed information about specific order within OMS. This functionality is valuable for verifying order status, contents, and associated details based on their unique identifiers. To retrieve the order, send a GET request to the OMS endpoint with query parameters. 

## Request

**End Point** `https://<instance.name>.hotwax.io/api/<publish_point>/orders/<order_id>`

Example: `https://demo-oms.hotwax.io/api/<publish_point>/orders/<order_id>`

### Headers

```
Content-Type: application/json
Authorization: Bearer <your_token>
Accept: application/json
```

### Parameter Table

| Parameter        | Description                                                  |
|------------------|--------------------------------------------------------------|
| `<order_id>`     | The unique identifier of the order to retrieve.              |

## Response

### Status Code

`HTTP/1.1 200 OK`

### Headers

`Content-Type: application/json`


### Body


```json
{
  "id": "",
  "externalId": "",
  "orderName": "",
  "channel": "",
  "channelDesc": "",
  "customerId": "",
  "customerExternalId": "",
  "customerName": "",
  "priority": "",
  "orderDate": "",
  "entryDate": "",
  "expireDate": "",
  "statusId": "",
  "statusDesc": "",
  "productStoreId": "",
  "productStoreName": "",
  "webSiteId": "",
  "webSiteName": "",
  "currencyCode": "",
  "currencyCodeDesc": "",
  "remainingSubTotal": null,
  "grandTotal": null,
  "tags": "",
  "note": "",
  "orderContacts": {
    "email": {
      "id": "",
      "externalId": ""
    }
  },
  "orderIdentifications": [
    {
      "orderIdentificationTypeId": "",
      "orderIdentificationDesc": "",
      "idValue": ""
    }
  ],
  "shipGroup": [
    {
      "facilityId": "",
      "externalId": "",
      "facilityName": "",
      "maySplit": "",
      "shipBy": "",
      "shipAfter": "",
      "carrierPartyId": "",
      "shipmentMethodTypeId": "",
      "carrierPartyName": "",
      "trackingNumber": "",
      "shipFrom": {
        "postalAddress": {
          "id": "",
          "externalId": "",
          "address1": "",
          "address2": "",
          "city": "",
          "stateCode": "",
          "postalCode": "",
          "country": ""
        },
        "email": {
          "id": "",
          "externalId": "",
          "email": ""
        },
        "phoneNumber": {
          "id": "",
          "externalId": "",
          "areaCode": "",
          "contactNumber": ""
        }
      },
      "shipTo": {
        "postalAddress": {
          "id": "",
          "externalId": "",
          "toName": "",
          "address1": "",
          "address2": "",
          "city": "",
          "stateCode": "",
          "postalCode": "",
          "country": ""
        },
        "email": {
          "id": "",
          "externalId": "",
          "email": ""
        },
        "phoneNumber": {
          "id": "",
          "externalId": "",
          "areaCode": "",
          "contactNumber": ""
        }
      },
      "items": [
        {
          "itemSeqId": "",
          "itemExternalId": "",
          "productId": "",
          "sku": "",
          "name": "",
          "status": "",
          "quantity": null,
          "unitPrice": null,
          "unitListPrice": null,
          "itemAdjustments": [
            {
              "id": "",
              "type": "",
              "comments": "",
              "amount": null,
              "sourcePercentage": null
            }
          ]
        }
      ]
    }
  ],
  "orderAdjustments": [
    {
      "id": "",
      "type": "",
      "typeDesc": "",
      "comments": "",
      "amount": null,
      "sourcePercentage": null
    }
  ],
  "orderPaymentPref": [
    {
      "id": "",
      "paymentMethodTypeId": "",
      "paymentMethodTypeDesc": "",
      "paymentMode": "",
      "cardName": "",
      "code": "",
      "maxAmount": null,
      "statusId": "",
      "statusDesc": ""
    }
  ],
  "billTo": {
    "postalAddress": {
      "id": "",
      "externalId": "",
      "toName": "",
      "address1": "",
      "address2": "",
      "city": "",
      "stateCode": "",
      "postalCode": "",
      "country": ""
    },
    "email": {
      "id": "",
      "externalId": "",
      "email": ""
    },
    "phoneNumber": {
      "id": "",
      "externalId": "",
      "areaCode": "",
      "contactNumber": ""
    }
  },
  "billFrom": {
    "id": "",
    "externalId": "",
    "name": "",
    "postalAddress": {
      "id": "",
      "externalId": "",
      "address1": "",
      "address2": "",
      "city": "",
      "stateCode": "",
      "postalCode": "",
      "country": ""
    },
    "email": {
      "id": "",
      "externalId": "",
      "email": ""
    },
    "phoneNumber": {
      "id": "",
      "externalId": "",
      "areaCode": "",
      "contactNumber": ""
    }
  }
}
```

### Parameter Table

### Parent Response Parameters

| Parameter            | Description                                          |
|----------------------|------------------------------------------------------|
| `id`                 | The unique identifier for the order.                 |
| `externalId`         | External system identifier for the order.            |
| `orderName`          | The name or reference number of the order.           |
| `channel`            | Sales channel through which the order was placed.    |
| `channelDesc`        | Description of the sales channel.                    |
| `customerId`         | The unique identifier for the customer.              |
| `customerExternalId` | External system identifier for the customer.         |
| `customerName`       | The name of the customer.                            |
| `priority`           | Priority level of the order.                         |
| `orderDate`          | The date when the order was placed.                  |
| `entryDate`          | The date when the order was entered into the system. |
| `expireDate`         | The expiration date of the order.                    |
| `statusId`           | Current status of the order.                         |
| `statusDesc`         | Description of the order status.                     |
| `productStoreId`     | Identifier for the product store associated with the order. |
| `productStoreName`   | Name of the product store.                           |
| `webSiteId`          | Identifier for the website associated with the order.|
| `webSiteName`        | Name of the website.                                 |
| `currencyCode`       | The currency code for the order.                     |
| `currencyCodeDesc`   | Description of the currency code.                    |
| `remainingSubTotal`  | The remaining subtotal for the order.                |
| `grandTotal`         | The grand total amount for the order.                |
| `tags`               | Tags associated with the order.                      |
| `note`               | Notes associated with the order.                     |
| `orderContacts`      | Contact information for the order.                   |
| `orderIdentifications` | Identifications related to the order.              |
| `shipGroup`          | Shipping group details for the order.                |
| `orderAdjustments`   | Adjustments applied to the order.                    |
| `orderPaymentPref`   | Payment preferences for the order.                   |
| `billTo`             | Billing information for the order.                   |
| `billFrom`           | Billing information from the order origin.           |
