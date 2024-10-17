# HotWax Carrier Integration API Documentation

## Overview

This document provides information on how to integrate a carrier with the HotWax platform. The integration involves sending a JSON request containing shipment details and receiving a JSON response with shipping label information.

## Endpoint

**URL**: `<insert_endpoint_here>`  
**Method**: POST

## Request Format

The request JSON sent by HotWax should adhere to the following structure:

```json
{
  "shippingGatewayConfigId": "ADOC_FORZA",
  "carrierPartyId": "FORZA",
  "dateOfSale": "2024-10-04",
  "originAddress": {
    "toName": "PAR2 CC El Frutal",
    "phoneNumber": "",
    "companyName": "PAR2 CC El Frutal",
    "address1": "503 Brighton Avenue",
    "address2": "Leisure Bay",
    "city": "Fraijanes",
    "stateOrProvinceCode": "GT-01",
    "stateName": "Guatemala",
    "countryCode": "GT",
    "postalCode": "4278",
    "emailAddress": "",
    "warehouseId": ""
  },
  "destAddress": {
    "toName": "Karla Huete",
    "phoneNumber": "79009301",
    "companyName": "Karla Huete",
    "address1": "Avenida Olímpica apartamento 2",
    "address2": "",
    "city": "Guatemala",
    "stateOrProvinceCode": "GT-01",
    "stateName": "Guatemala",
    "countryCode": "GT",
    "postalCode": "1768407960114",
    "emailAddress": "karla.huete@yahoo.com",
    "province": "",
    "canton": "",
    "district": "",
    "residential": "true"
  },
  "parcels": [
    {
      "length": "15",
      "width": "10",
      "height": "5",
      "weight": "1",
      "currency": "USD",
      "weightUomId": "",
      "weightUnit": "",
      "fragile": "true",
      "description": "Nike Shoes"
    },
    {
      "length": "15",
      "width": "10",
      "height": "5",
      "weight": "1",
      "currency": "USD",
      "weightUomId": "",
      "weightUnit": "",
      "fragile": "true",
      "description": "Puma Shoes"
    }
  ],
  "countryId": "Guatemala",
  "countPieces": "4",
  "currencyUomId": "USD",
  "cod": false,
  "collected": "false",
  "validShipmentTotal": "141.99",
  "weightAmount": "4",
  "identification": "null",
  "facilityIdentification": "",
  "orderNumber": "1088",
  "ticketNumber": "GTP"
}
```

### Request Parameters

| Parameter                    | Type   | Description                                              |
|------------------------------|--------|----------------------------------------------------------|
| `shippingGatewayConfigId`    | string | Identifier for the shipping gateway configuration.      |
| `carrierPartyId`             | string | Identifier for the carrier party.                       |
| `dateOfSale`                 | string | Date of sale in `YYYY-MM-DD` format.                   |
| `originAddress`              | object | Address from where the shipment is originating.         |
| `destAddress`                | object | Destination address for the shipment.                   |
| `parcels`                   | array  | Array of parcel objects containing shipment details.     |
| `countryId`                  | string | Country identifier.                                     |
| `countPieces`                | string | Total number of pieces in the shipment.                 |
| `currencyUomId`             | string | Currency unit of measure identifier.                    |
| `cod`                        | boolean| Indicates if cash on delivery is applicable.            |
| `collected`                  | boolean| Indicates if the shipment is collected.                 |
| `validShipmentTotal`         | string | Total valid shipment amount.                             |
| `weightAmount`               | string | Total weight of the shipment.                            |
| `identification`             | string | Additional identification (can be null).                |
| `facilityIdentification`      | string | Identifier for the facility (if applicable).            |
| `orderNumber`                | string | Order number associated with the shipment.              |
| `ticketNumber`               | string | Ticket number associated with the shipment.             |

## Response Format

The response from the carrier API will be in JSON format and can be of two types: one for multiple packages and another for a single package.

### Response Structure for Multiple Packages

```json
{
  "responseMap": {
    "success": true,
    "shippingLabelMap": {
      "referenceNumber": "FD10922319",
      "packages": [
        {
          "imageBytes": "base64_encoded_image_data",
          "trackingIdNumber": "FD10922319"
        },
        {
          "imageBytes": "base64_encoded_image_data",
          "trackingIdNumber": "FD10922319"
        }
      ]
    }
  }
}
```

### Response Structure for Single Package

```json
{
  "responseMap": {
    "success": true,
    "shippingLabelMap": {
      "referenceNumber": "FD10922319",
      "response": {
        "imageBytes": "base64_encoded_image_data"
      },
      "packages": [
        {
          "trackingIdNumber": "FD10922319"
        }
      ]
    }
  }
}
```

### Response Parameters

| Parameter                         | Type      | Description                                              |
|-----------------------------------|-----------|----------------------------------------------------------|
| `responseMap.success`             | boolean   | Indicates whether the request was successful.           |
| `shippingLabelMap.referenceNumber`| string    | Unique reference number for the shipping label.        |
| `shippingLabelMap.response.imageBytes` | string | Base64-encoded image data of the shipping label (single package only). |
| `shippingLabelMap.packages`       | array     | Array of package objects containing tracking information. |
| `packages.imageBytes`              | string    | Base64-encoded image data of the shipping label (multiple packages only). |
| `packages.trackingIdNumber`       | string    | Unique tracking ID for each package.                    |

## Error Responses

In case of errors, the API should return appropriate error messages with HTTP status codes. Example:

```json
{
  "responseMap": {
    "success": false,
    "errorMessage": "Invalid address details."
  }
}
```

### Error Parameters

| Parameter         | Type      | Description                                      |
|-------------------|-----------|--------------------------------------------------|
| `responseMap.success` | boolean   | Indicates whether the request was successful (false in case of error). |
| `responseMap.errorMessage` | string | Description of the error encountered.         |

## Notes

- Ensure that all address fields are properly validated before sending the request.
- The `imageBytes` field will contain the shipping label in base64 format, which can be decoded for display or printing.
- Adjust the request and response structures based on specific requirements of the carrier integration.
