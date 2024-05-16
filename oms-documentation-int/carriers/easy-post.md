---
description: >-
  Discover how Hotwax Commerce integrates with EasyPost, providing businesses of
  all sizes with a streamlined shipping solution.
---

# Easy Post

## Introduction

Hotwax Commerce integrates with EasyPost to empower businesses, ranging from small enterprises to large corporations, with a streamlined shipping solution. This integration enables users to leverage the full capabilities of EasyPost, including rate shopping across a diverse range of carriers and real-time package tracking.

## Authentication

Authentication and identification to the EasyPost API are accomplished by utilizing an API Key in every request. This API Key serves as your Basic Auth username, and no password is required. The authentication process ensures secure communication with the EasyPost API, and it is imperative to note the following details:

* **Authentication Type**: EasyPost employs API Key-based authentication for requests. Each request must include the API Key as the Basic Auth username. The absence of a valid API Key or the use of an incorrect key will result in authentication failure.
* **Security Protocol**: EasyPost mandates that all communication with the API is secured using TLS v1.2. Transport Layer Security (TLS) ensures the confidentiality and integrity of data exchanged between Hotwax Commerce and EasyPost, providing a secure environment for API interactions.
* **HTTP Restrictions**: Requests made over HTTP are not supported. It is crucial to utilize HTTPS for all communication with the EasyPost API. Any attempt to make requests over HTTP will result in failure.

By adhering to these authentication specifications, Hotwax Commerce ensures the secure and authenticated exchange of data with EasyPost. The API Key serves as the access credential, and the implementation of TLS v1.2 guarantees the confidentiality and integrity of the information transmitted during the integration process. Please refer to the following example to understand how to include the API Key in your requests:

```http
POST /api/your-endpoint
Host: api.easypost.com
Authorization: Basic YOUR_API_KEY
```

Replace `YOUR_API_KEY` with the actual API Key provided by EasyPost for your integration. This authentication mechanism ensures a seamless and secure connection between Hotwax Commerce and the EasyPost API for shipping label generation.

## APIs used

HotWax integrates with EasyPost using three key APIs, each serving a distinct purpose in the shipping label generation process.

### Create a Shipment API

#### Purpose:

The Create a Shipment API is utilized to share all necessary details of a shipment with EasyPost. This includes shipment information such as package dimensions, weight, origin, and destination. In return, the API fetches rates available from different carriers for shipping the specified package.

#### Method

`POST`

```
https://api.easypost.com/v2/shipments
```

#### Request:

{% hint style="info" %}
The `postage_label` parameter generates labels with specific size and format requirements tailored for use with `Frank and Oak` i.e. `4 x 6`. Users have the flexibility to configure parameters to customize the label, and in cases where specific values are not provided, the function will default to a predefined size and format.
{% endhint %}

<details>

<summary>Sample request</summary>

```json
{
  "origin": {
    "address": "735 Queen St W",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345"
  },
  "destination": {
    "address": "456 Oak St",
    "city": "Another Town",
    "state": "NY",
    "zip": "67890"
  },
  "package": {
    "weight": 2.5,
    "dimensions": {
      "length": 10,
      "width": 8,
      "height": 5
    }
  },
  "postage_label": {
    "label_format": "PNG",
    "label_size": "4x6"
  }
}
```

</details>

| Field in EasyPost                              | Field in HotWax        |
| ---------------------------------------------- | ---------------------- |
| `to_address.name`                              | `shipToName`           |
| `to_address.street1`                           | `shipToAddressLine1`   |
| `to_address.city`                              | `shipToCity`           |
| `to_address.state`                             | `shipToState`          |
| `to_address.zip`                               | `shipToPostalCode`     |
| `to_address.country`                           | `shipToCountryCode`    |
| `to_address.phone`                             | `shipToPhone`          |
| `to_address.email`                             | `shipToEmail`          |
| `from_address.name`                            | `shipFromName`         |
| `from_address.name` (nested in `from_address`) | `shipFromCompanyName`  |
| `from_address.street1`                         | `shipFromAddressLine1` |
| `from_address.city`                            | `shipFromCity`         |
| `from_address.state`                           | `shipFromState`        |
| `from_address.zip`                             | `shipFromPostalCode`   |
| `from_address.country`                         | `shipFromCountryCode`  |
| `from_address.phone`                           | `shipFromPhone`        |
| `from_address.email`                           | `shipFromEmail`        |
| `parcel.length`                                | `length`               |
| `parcel.width`                                 | `width`                |
| `parcel.height`                                | `height`               |
| `parcel.weight`                                | `weight`               |

#### Response:

{% hint style="info" %}
`EasyPost` consistently structures its responses, maintaining a common format. Unique details specified in each request are appended to this structure, ensuring dynamic adaptability while preserving a standardized response format.
{% endhint %}

In response, `Easy Post` shares three types of rates, and in our integration, we're utilizing the rates found in the `rate` attribute for rate shopping. For further details about the rates, you can refer to [this](https://www.easypost.com/docs/api#rate-object) documentation provided by Easy Post.

<details>

<summary>Sample response</summary>

```json
{
     "created_at": "2023-12-26T12:30:22Z",
    "is_return": false,
    "messages": [
        {
            "type": "rate_error",
            "carrier": "USPS",
            "message": "Unable to retrieve USPS rates for non-US origin address."
        }
    ],
    "mode": "test",
    "options": {
        "currency": "USD",
        "payment": {
            "type": "SENDER"
        },
        "date_advance": 0
    },
    "reference": null,
    "status": "unknown",
    "tracking_code": null,
    "updated_at": "2023-12-26T12:30:24Z",
    "batch_id": null,
    "batch_status": null,
    "batch_message": null,
    "customs_info": null,
    "from_address": {
        "id": "adr_89b3c1a6a3ea11eea792ac1f6bc539ae",
        "object": "Address",
        "created_at": "2023-12-26T12:30:22+00:00",
        "updated_at": "2023-12-26T12:30:22+00:00",
        "name": "TOST Toronto",
        "company": null,
        "street1": "735 Queen St W",
        "street2": null,
        "city": "Toronto",
        "state": "ON",
        "zip": "M6J 1G1",
        "country": "CA",
        "phone": "",
        "email": "",
        "mode": "test",
        "carrier_facility": null,
        "residential": null,
        "federal_tax_id": null,
        "state_tax_id": null,
        "verifications": {}
    },
    "insurance": null,
    "order_id": null,
    "parcel": {
        "id": "prcl_b64c9063f62a4abd9f0a018d0ab2e5c5",
        "object": "Parcel",
        "created_at": "2023-12-26T12:30:22Z",
        "updated_at": "2023-12-26T12:30:22Z",
        "length": 1.0,
        "width": 2.0,
        "height": 3.0,
        "predefined_package": null,
        "weight": 1.0,
        "mode": "test"
    },
    "postage_label": null,
    "rates": [
        {
            "id": "rate_66a99512e2b745c5871347be50450681",
            "object": "Rate",
            "created_at": "2023-12-26T12:30:23Z",
            "updated_at": "2023-12-26T12:30:23Z",
            "mode": "test",
            "service": "ExpeditedParcel",
            "carrier": "CanadaPost",
            "rate": "9.90",
            "currency": "CAD",
            "retail_rate": null,
            "retail_currency": null,
            "list_rate": null,
            "list_currency": null,
            "billing_type": "carrier",
            "delivery_days": 1,
            "delivery_date": null,
            "delivery_date_guaranteed": true,
            "est_delivery_days": 1,
            "shipment_id": "shp_2a94622421ff45fe9fb3a39ab10b2779",
            "carrier_account_id": "ca_11d33f0e654a47f193d972b44aec12d1"
        },
        {
            "id": "rate_0fc65ea7bd0940b5a889c62e50323916",
            "object": "Rate",
            "created_at": "2023-12-26T12:30:24Z",
            "updated_at": "2023-12-26T12:30:24Z",
            "mode": "test",
            "service": "NextDayAirEarlyAM",
            "carrier": "UPS",
            "rate": "102.48",
            "currency": "CAD",
            "retail_rate": "102.48",
            "retail_currency": "CAD",
            "list_rate": "102.48",
            "list_currency": "CAD",
            "billing_type": "carrier",
            "delivery_days": 1,
            "delivery_date": "2023-12-28T10:30:00Z",
            "delivery_date_guaranteed": true,
            "est_delivery_days": 1,
            "shipment_id": "shp_2a94622421ff45fe9fb3a39ab10b2779",
            "carrier_account_id": "ca_93bb427be6de40769987bf8dd9530405"
        }
    ],
    "refund_status": null,
    "scan_form": null,
    "selected_rate": null,
    "tracker": null,
    "to_address": {
        "id": "adr_89b17387a3ea11eea2b7ac1f6bc53342",
        "object": "Address",
        "created_at": "2023-12-26T12:30:22+00:00",
        "updated_at": "2023-12-26T12:30:22+00:00",
        "name": "Test Wilson WEi",
        "company": null,
        "street1": "9035 Mayfield St.",
        "street2": null,
        "city": "London",
        "state": "ON",
        "zip": "N5V 5A8",
        "country": "CA",
        "phone": "8573875756",
        "email": "",
        "mode": "test",
        "carrier_facility": null,
        "residential": null,
        "federal_tax_id": null,
        "state_tax_id": null,
        "verifications": {}
    },
    "usps_zone": null,
    "return_address": {
        "id": "adr_89b3c1a6a3ea11eea792ac1f6bc539ae",
        "object": "Address",
        "created_at": "2023-12-26T12:30:22+00:00",
        "updated_at": "2023-12-26T12:30:22+00:00",
        "name": "TOST Toronto",
        "company": null,
        "street1": "735 Queen St W",
        "street2": null,
        "city": "Toronto",
        "state": "ON",
        "zip": "M6J 1G1",
        "country": "CA",
        "phone": "",
        "email": "",
        "mode": "test",
        "carrier_facility": null,
        "residential": null,
        "federal_tax_id": null,
        "state_tax_id": null,
        "verifications": {}
    },
    "buyer_address": {
        "id": "adr_89b17387a3ea11eea2b7ac1f6bc53342",
        "object": "Address",
        "created_at": "2023-12-26T12:30:22+00:00",
        "updated_at": "2023-12-26T12:30:22+00:00",
        "name": "Test Wilson WEi",
        "company": null,
        "street1": "9035 Mayfield St.",
        "street2": null,
        "city": "London",
        "state": "ON",
        "zip": "N5V 5A8",
        "country": "CA",
        "phone": "8573875756",
        "email": "",
        "mode": "test",
        "carrier_facility": null,
        "residential": null,
        "federal_tax_id": null,
        "state_tax_id": null,
        "verifications": {}
    },
    "forms": [],
    "fees": [],
    "id": "shp_2a94622421ff45fe9fb3a39ab10b2779",
    "object": "Shipment"
}
}
```

</details>

### Buy a Shipment API

#### Purpose:

The Buy a Shipment API is employed to share the rate ID of a specific shipment with EasyPost. This API facilitates the retrieval of a shipping label corresponding to the provided rate ID.

#### Method

`POST`

#### Endpoint:

```
https://api.easypost.com/v2/shipments/shp_7383fa71161645259664060fb5c41c32/buy
```

#### Request:

<details>

<summary>Sample request</summary>

```json
{
    "rate": {
        "id": "rate_353764e6b7194829858bd10f283fd939"
    }
}
```

</details>

| Field in EasyPost | Field in HotWax |
| ----------------- | --------------- |
| `id`              | `rateId`        |

#### Response:

{% hint style="info" %}
`EasyPost` consistently structures its responses, maintaining a common format. Unique details specified in each request are appended to this structure, ensuring dynamic adaptability while preserving a standardized response format.

In this response, HotWax relies on two vital fields: `tracking_code` provides the tracking information for the shipment, while `label_url` allows users to generate the shipping label in their desired format for printing.
{% endhint %}

<details>

<summary>Sample response</summary>

```json
{
    "created_at": "2023-12-26T12:35:58Z",
    "is_return": false,
    "messages": [
        {
            "type": "rate_error",
            "carrier": "USPS",
            "message": "Unable to retrieve USPS rates for non-US origin address."
        }
    ],
    "mode": "test",
    "options": {
        "currency": "USD",
        "payment": {
            "type": "SENDER"
        },
        "date_advance": 0
    },
    "reference": null,
    "status": "unknown",
    "tracking_code": "05629dea-3e00-44e5-b244-089a0aafcd4c",
    "updated_at": "2023-12-26T12:36:34Z",
    "batch_id": null,
    "batch_status": null,
    "batch_message": null,
    "customs_info": null,
    "from_address": {
        "id": "adr_51eb5b5aa3eb11ee81043cecef1b359e",
        "object": "Address",
        "created_at": "2023-12-26T12:35:58+00:00",
        "updated_at": "2023-12-26T12:35:58+00:00",
        "name": "TOST Toronto",
        "company": null,
        "street1": "735 Queen St W",
        "street2": null,
        "city": "Toronto",
        "state": "ON",
        "zip": "M6J 1G1",
        "country": "CA",
        "phone": "8573875756",
        "email": null,
        "mode": "test",
        "carrier_facility": null,
        "residential": null,
        "federal_tax_id": null,
        "state_tax_id": null,
        "verifications": {}
    },
    "insurance": null,
    "order_id": null,
    "parcel": {
        "id": "prcl_9443252e7483439eb9fa16fa4807c006",
        "object": "Parcel",
        "created_at": "2023-12-26T12:35:58Z",
        "updated_at": "2023-12-26T12:35:58Z",
        "length": 1.0,
        "width": 2.0,
        "height": 3.0,
        "predefined_package": null,
        "weight": 1.0,
        "mode": "test"
    },
    "postage_label": {
        "object": "PostageLabel",
        "id": "pl_b024b5394c2647dd95140268349f2211",
        "created_at": "2023-12-26T12:36:34Z",
        "updated_at": "2023-12-26T12:36:34Z",
        "date_advance": 0,
        "integrated_form": "none",
        "label_date": "2023-12-26T12:36:34Z",
        "label_resolution": 300,
        "label_size": "8.5x11",
        "label_type": "default",
        "label_file_type": "image/png",
        "label_url": "https://easypost-files.s3.us-west-2.amazonaws.com/files/postage_label/20231226/e87442fee722ba4f89b77d335c86a0d71e.png",
        "label_pdf_url": null,
        "label_zpl_url": null,
        "label_epl2_url": null,
        "label_file": null
    }
```

</details>

### Refund a Shipment API

#### Purpose:

The Refund a Shipment API is employed to void the shipping label generated for a specific shipment. This is useful in cases where a shipment needs to be canceled or rerouted.

#### Method

`POST`

#### Endpoint:

```
https://api.easypost.com/v2/shipments/shp_a88f34ee108f4e82ab04b3570863f7fb/refund
```

#### Request:

<details>

<summary>Sample request</summary>

```json
{
  "shipment_id": "abc123"
}
```

</details>

#### Response:

{% hint style="info" %}
`EasyPost` consistently structures its responses, maintaining a common format. Unique details specified in each request are appended to this structure, ensuring dynamic adaptability while preserving a standardized response format.

In this response, HotWax relies on a key field, specifically `refund_status`. Based on the response, HotWax confirms whether the label is void or not.
{% endhint %}

<details>

<summary>Sample response</summary>

```json
{
    "refund_status": "refunded",
    "scan_form": null,
    "selected_rate": {
        "id": "rate_1827b4c656874e6baa0242c6165c106c",
        "object": "Rate",
        "created_at": "2023-12-21T10:12:46Z",
        "updated_at": "2023-12-21T10:12:46Z",
        "mode": "test",
        "service": "ExpeditedParcel",
        "carrier": "CanadaPost",
        "rate": "10.06",
        "currency": "CAD",
        "retail_rate": null,
        "retail_currency": null,
        "list_rate": null,
        "list_currency": null,
        "billing_type": "carrier",
        "delivery_days": 1,
        "delivery_date": null,
        "delivery_date_guaranteed": true,
        "est_delivery_days": 1,
        "shipment_id": "shp_a88f34ee108f4e82ab04b3570863f7fb",
        "carrier_account_id": "ca_11d33f0e654a47f193d972b44aec12d1"
    },
    "tracker": {
        "id": "trk_6e6b79d6f9be487d91a0646f32dfafa0",
        "object": "Tracker",
        "mode": "test",
        "tracking_code": "A97A0352-15E8-449D-8448-2A74331F1454",
        "status": "pre_transit",
        "status_detail": "unknown",
        "created_at": "2023-12-21T10:12:47Z",
        "updated_at": "2023-12-21T10:12:47Z",
        "signed_by": null,
        "weight": null,
        "est_delivery_date": "2023-12-21T10:12:47Z",
        "shipment_id": "shp_a88f34ee108f4e82ab04b3570863f7fb",
        "carrier": "CanadaPost",
        "tracking_details": [
            {
                "object": "TrackingDetail",
                "message": "Pre-Shipment information received",
                "description": "",
                "status": "pre_transit",
                "status_detail": null,
                "datetime": "2023-11-21T10:12:47Z",
                "source": "CanadaPost",
                "carrier_code": "",
                "tracking_location": {
                    "object": "TrackingLocation",
                    "city": null,
                    "state": null,
                    "country": null,
                    "zip": null
                }
            },
            {
                "object": "TrackingDetail",
                "message": "Shipping label created",
                "description": "",
                "status": "pre_transit",
                "status_detail": null,
                "datetime": "2023-11-22T05:01:47Z",
                "source": "CanadaPost",
                "carrier_code": "",
                "tracking_location": {
                    "object": "TrackingLocation",
                    "city": null,
                    "state": null,
                    "country": null,
                    "zip": null
                }
            }
        ],
        "fees": [],
        "carrier_detail": null,
        "public_url": "https://track.easypost.com/djE6dHJrXzZlNmI3OWQ2ZjliZTQ4N2Q5MWEwNjQ2ZjMyZGZhZmEw"
    },
    "to_address": {
        "id": "adr_6c1e30189fe911eeafd4ac1f6bc53342",
        "object": "Address",
        "created_at": "2023-12-21T10:12:18+00:00",
        "updated_at": "2023-12-21T10:12:18+00:00",
        "name": "Test Wilson WEi",
        "company": null,
        "street1": "9035 Mayfield St.",
        "street2": null,
        "city": "London",
        "state": "ON",
        "zip": "N5V 5A8",
        "country": "CA",
        "phone": "8573875756",
        "email": "dr_steve_brule@gmail.com",
        "mode": "test",
        "carrier_facility": null,
        "residential": null,
        "federal_tax_id": null,
        "state_tax_id": null,
        "verifications": {}
    },
    "usps_zone": null,
    "return_address": {
        "id": "adr_6c2059359fe911ee9988ac1f6bc539aa",
        "object": "Address",
        "created_at": "2023-12-21T10:12:18+00:00",
        "updated_at": "2023-12-21T10:12:18+00:00",
        "name": "TOST Toronto",
        "company": null,
        "street1": "735 Queen St W",
        "street2": null,
        "city": "Toronto",
        "state": "ON",
        "zip": "M6J 1G1",
        "country": "CA",
        "phone": "16479308711",
        "email": "support@easypost.com",
        "mode": "test",
        "carrier_facility": null,
        "residential": null,
        "federal_tax_id": null,
        "state_tax_id": null,
        "verifications": {}
    },
    "buyer_address": {
        "id": "adr_6c1e30189fe911eeafd4ac1f6bc53342",
        "object": "Address",
        "created_at": "2023-12-21T10:12:18+00:00",
        "updated_at": "2023-12-21T10:12:18+00:00",
        "name": "Test Wilson WEi",
        "company": null,
        "street1": "9035 Mayfield St.",
        "street2": null,
        "city": "London",
        "state": "ON",
        "zip": "N5V 5A8",
        "country": "CA",
        "phone": "8573875756",
        "email": "dr_steve_brule@gmail.com",
        "mode": "test",
        "carrier_facility": null,
        "residential": null,
        "federal_tax_id": null,
        "state_tax_id": null,
        "verifications": {}
    },
    "forms": [],
    "fees": [
        {
            "object": "Fee",
            "type": "LabelFee",
            "amount": "0.00000",
            "charged": true,
            "refunded": true
        }
    ],
    "id": "shp_a88f34ee108f4e82ab04b3570863f7fb",
    "object": "Shipment"
}
}
```

</details>

These three APIs form the core of the integration, allowing HotWax to seamlessly create shipments, obtain rates, purchase shipping labels, and refund shipments as needed using EasyPost's extensive carrier network. Refer to the respective API documentation for detailed information on request and response parameters.

## Error handling

**Bad Request (HTTP 400)**

* Description: The request was malformed or missing required parameters.
* Handling: Check your request parameters and ensure they comply with the API documentation.

**Unauthorized (HTTP 401)**

* Description: The request lacks proper authentication credentials or the provided credentials are invalid.
* Handling: Double-check your API key or authentication credentials.

**Not Found (HTTP 404)**

* Description: The requested resource could not be found.
* Handling: Review the API endpoint to ensure it is correct.

**Server Error (HTTP 5xx)**

* Description: The server encountered an internal error.
* Handling: Report the issue to the API provider. Retry the request later.

## References

```
- https://www.easypost.com/docs/api#create-a-shipment
- https://www.easypost.com/docs/api#buy-a-shipment
- https://www.easypost.com/docs/api#refund-a-shipment
```
