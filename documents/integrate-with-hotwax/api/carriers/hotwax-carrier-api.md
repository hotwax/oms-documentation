# HotWax Carrier Integration API Documentation

## Overview
This document provides a guide for integrating a carrier with the HotWax platform. The integration involves sending requests to various endpoints to calculate rates, generate shipping labels, and void labels. Each request and response adheres to specific JSON structures.

### Rate Request

#### Request Format
The request JSON for calculating rates should follow the structure below:

```json
{
  "carrierId": "",
  "dateOfSale": "",
  "originAddress": {
    "toName": "",
    "address1": "",
    "address2": "",
    "city": "",
    "stateOrProvinceCode": "",
    "countryCode": "",
    "postalCode": ""
  },
  "destAddress": {
    "toName": "",
    "address1": "",
    "address2": "",
    "city": "",
    "stateOrProvinceCode": "",
    "countryCode": "",
    "postalCode": ""
  },
  "parcels": [
    {
      "length": "",
      "width": "",
      "height": "",
      "weight": "",
      "weightUnits": "",
      "weightUomId": "",
      "currency": "",
      "fragile": "true"
    }
  ],
  "countryId": "",
  "currencyUomId": "",
  "shipmentMethod": "",
  "pickupType": "",
  "residential": "",
  "packagingType": "",
  "weightAmount": ""
}
```

#### Request Parameters
| Parameter          | Type    | Description                                    |
|--------------------|---------|------------------------------------------------|
| `carrierId`        | string  | Identifier for the carrier.                   |
| `dateOfSale`       | string  | Date of sale in `YYYY-MM-DD` format.          |
| `originAddress`    | object  | Origin address details.                       |
| `destAddress`      | object  | Destination address details.                  |
| `parcels`          | array   | Array of parcel details.                      |
| `countryId`        | string  | Country identifier.                           |
| `currencyUomId`    | string  | Currency unit of measure identifier.          |
| `shipmentMethod`   | string  | Shipment method (e.g., ground, air).          |
| `pickupType`       | string  | Type of pickup (e.g., scheduled, on-demand).  |
| `residential`      | boolean | Whether the address is residential.           |
| `packagingType`    | string  | Type of packaging used.                       |
| `weightAmount`     | string  | Total weight of the shipment.                 |

#### Response Format
The response will include rate information:

```json
{
  "success": true,
  "rates": [
    {
      "shippingEstimateAmount": "",
      "carrierService": ""
    }
  ]
}
```

#### Response Parameters
| Parameter                        | Type    | Description                          |
|----------------------------------|---------|--------------------------------------|
| `success`                        | boolean | Indicates if the request was successful. |
| `rates.shippingEstimateAmount`   | string  | Estimated shipping cost.             |
| `rates.carrierService`           | string  | Carrier service used for the shipment. |


### Label Request

#### Request Format
The request JSON for generating shipping labels should follow this structure:

```json
{
  "dateOfSale": "2024-11-06",
  "carrierId": "",
  "originAddress": {
    "toName": "",
    "phoneNumber": "",
    "companyName": "",
    "address1": "",
    "address2": "",
    "city": "",
    "stateOrProvinceCode": "",
    "stateName": "",
    "countryCode": "",
    "postalCode": "",
    "emailAddress": "",
    "warehouseId": ""
  },
  "destAddress": {
    "toName": "",
    "phoneNumber": "",
    "companyName": "",
    "address1": "",
    "address2": "",
    "city": "",
    "stateOrProvinceCode": "",
    "stateName": "",
    "countryCode": "",
    "postalCode": "",
    "emailAddress": "",
    "province": "",
    "canton": "",
    "district": "",
    "residential": ""
  },
  "parcels": [
    {
      "length": "",
      "width": "",
      "height": "",
      "weight": "",
      "currency": "",
      "weightUomId": "",
      "weightUnit": "",
      "fragile": "",
      "description": ""
    }
  ],
  "countryId": "",
  "countPieces": "",
  "currencyUomId": "",
  "cod": false,
  "collected": "",
  "validShipmentTotal": "00.00",
  "weightAmount": "",
  "identification": "",
  "facilityIdentification": "",
  "orderNumber": "",
  "ticketNumber": ""
}
```

#### Request Parameters
| Parameter                  | Type    | Description                                     |
|----------------------------|---------|-------------------------------------------------|
| `dateOfSale`               | string  | Date of sale in `YYYY-MM-DD` format.           |
| `carrierId`                | string  | Identifier for the carrier.                    |
| `originAddress`            | object  | Origin address details.                        |
| `destAddress`              | object  | Destination address details.                   |
| `parcels`                  | array   | Array of parcel details.                       |
| `countryId`                | string  | Country identifier.                            |
| `countPieces`              | string  | Number of pieces in the shipment.              |
| `currencyUomId`            | string  | Currency unit of measure identifier.           |
| `cod`                      | boolean | Whether Cash on Delivery is enabled.           |
| `collected`                | string  | Amount collected (if applicable).              |
| `validShipmentTotal`       | string  | Total valid shipment amount.                   |
| `weightAmount`             | string  | Total weight of the shipment.                  |
| `identification`           | string  | Unique identification for the shipment.        |
| `facilityIdentification`   | string  | Facility identifier associated with the shipment. |
| `orderNumber`              | string  | Order number associated with the shipment.     |
| `ticketNumber`             | string  | Ticket number for the shipment.                |

#### Response Format
The response JSON will provide the shipping label details:

```json
{
  "success": true,
  "shippingLabelMap": {
    "referenceNumber": "",
    "packages": [
      {
        "imageBytes": "",
        "trackingIdNumber": ""
      }
    ]
  }
}
```

#### Response Parameters
| Parameter                        | Type    | Description                           |
|----------------------------------|---------|---------------------------------------|
| `success`                        | boolean | Indicates if the request was successful. |
| `shippingLabelMap.referenceNumber`| string  | Reference number for the shipping label. |
| `shippingLabelMap.packages.imageBytes` | string  | Encoded image bytes for the label.   |
| `shippingLabelMap.packages.trackingIdNumber` | string | Tracking ID number for the package. |

---

### Void Label Request

#### Request Format
The request JSON for voiding a shipping label should follow this structure:

```json
{
  "carrierId": "",
  "trackingNumber": ""
}
```

#### Request Parameters
| Parameter        | Type    | Description                                   |
|------------------|---------|-----------------------------------------------|
| `carrierId`      | string  | Identifier for the carrier.                  |
| `trackingNumber` | string  | Tracking number of the label to be voided.   |

#### Response Format
The response JSON will confirm the status of the void request:

```json
{
  "success": true,
  "message": ""
}
```

#### Response Parameters
| Parameter | Type    | Description                            |
|-----------|---------|----------------------------------------|
| `success` | boolean | Indicates if the request was successful. |
| `message` | string  | Message describing the outcome.        |

---

## Error Responses
In case of errors, the API will return appropriate error messages with HTTP status codes.

### Example Error Response
```json
{
  "success": false,
  "message": "Invalid address details."
}
```

#### Error Parameters
| Parameter | Type    | Description                           |
|-----------|---------|---------------------------------------|
| `success` | boolean | Indicates whether the request failed. |
| `message` | string  | Error message describing the issue.   |
