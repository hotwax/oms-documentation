---
description: This document provides instructions for getting the list of all orders
---

# Get Orders

**GET orders API allows retrieval of existing order documents from the OMS.** Supports flexible filtering options to fetch orders based on specific criteria such as `partyId` or `statusId`.

Additionally, the API supports sorting functionality. By utilizing the `sortBy` and `sortOrder` parameters in the URL, data can be arranged based on fields like `grandTotal` in either ascending or descending order.

## Request

**End Point** `https://<instance.name>.hotwax.io/api/<publish_point>/orders`

Example: `https://demo-oms.hotwax.io/api/<publish_point>/orders`

### Headers

```Content-Type: application/json
Authorization: Bearer <your_token>
Accept: application/json
```

### Request Format

```json
{
  "viewIndex": "",
  "viewSize": "1",
  "filters": {
    "partyId": "",
    "partyId_op": "",
    "partyId_ic": ""
  }
}
```

### Parameter Table

| Parameter  | Description                                         |
|------------|-----------------------------------------------------|
| `viewIndex` | Index of the view in pagination.                    |
| `viewSize`  | Number of records to fetch per page.                |
| `filters`   | Filters to apply for querying specific orders.      |

### Filters Usage

Filters allow users to query orders based on various fields. The structure of the filter includes:

`Field`: The field to filter by (e.g., externalId, partyId, statusId).
`Field_op`: Operator used for the filter condition (e.g., equals, like, etc.).
`Field_ic`: Ignore case flag (Y for yes, N for no).


#### Example

```
{
  "filters": {
    "externalId": "10025",
    "externalId_op": "equals",
    "externalId_ic": "Y"
  }
}
```
This example will fetch all the orders where externalId is 10025, with case-insensitive matching (ignore case set to Y).


## Response

### Status Code

`HTTP/1.1 200 OK`

### Headers

`Content-Type: application/json`


### Body


```json
{
  "count": "2",
  "docs": [
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
  ]
}
```

### Parameter Table

| Parameter                  | Description                                                                                           |
|----------------------------|-------------------------------------------------------------------------------------------------------|
| `id`                       | Unique identifier of the order.                                                                        |
| `externalId`               | External identifier of the order.                                                                      |
| `orderName`                | Name or identifier of the order.                                                                       |
| `channel`                  | Sales channel through which the order was placed.                                                      |
| `channelDesc`              | Description of the sales channel.                                                                      |
| `customerId`               | ID of the customer associated with the order.                                                          |
| `customerExternalId`       | External ID of the customer.                                                                           |
| `customerName`             | Name of the customer.                                                                                 |
| `priority`                 | Priority level of the order.                                                                           |
| `orderDate`                | Date and time when the order was created.                                                              |
| `entryDate`                | Date and time when the order was entered into the system.                                              |
| `expireDate`               | Date and time when the order expires.                                                                  |
| `statusId`                 | ID indicating the current status of the order.                                                         |
| `statusDesc`               | Description of the current status of the order.                                                        |
| `productStoreId`           | ID of the product store associated with the order.                                                     |
| `productStoreName`         | Name of the product store.                                                                             |
| `webSiteId`                | ID of the website associated with the order.                                                            |
| `webSiteName`              | Name of the website.                                                                                   |
| `currencyCode`             | Currency code used for the order.                                                                      |
| `currencyCodeDesc`         | Description of the currency used.                                                                      |
| `remainingSubTotal`        | Remaining subtotal amount of the order.                                                                 |
| `grandTotal`               | Total amount of the order.                                                                             |
| `tags`                     | Tags associated with the order.                                                                        |
| `note`                     | Additional notes or comments related to the order.                                                     |
| `orderContacts`            | Contact information associated with the order (e.g., email).                                           |
| `orderIdentifications`     | Array of identification details associated with the order (e.g., marketplaces, order IDs).            |
| `shipGroup`                | Array containing shipping group details for the order.                                                 |
| `orderAdjustments`         | Adjustments made to the order (e.g., shipping charges).                                                |
| `orderPaymentPref`         | Payment preferences for the order (e.g., payment method, status).                                      |
| `billTo`                   | Billing details for the order (e.g., postal address, email, phone).                                    |
| `billFrom`                 | Originating entity details for the order (e.g., company name, address, email, phone).                  |
