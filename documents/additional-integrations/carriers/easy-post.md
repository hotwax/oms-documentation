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

**Create Shipment API** shares all detailed shipment information with EasyPost, including package dimensions, weight, origin, and destination. In return, the API offers competitive rates from multiple carriers. For added flexibility, users can specify preferred carriers and their corresponding credentials. The API also generates custom shipping labels with adjustable size and format options.

**In case of international shipping:**

Fulfilling international orders requires accurate customs information for generating shipping labels and obtaining customs documents. While HotWax stores product details, it lacks the essential HS Tariff number and Custom Signer information for customs purposes.

HotWax integrates with your ERP system, automatically fetching HS Tariff numbers for products during order fulfillment. This daily synchronization ensures readily available HS codes whenever new products are added. HotWax stores these retrieved HS Tariff numbers alongside existing Good identifications for each product. 

Alongside, HS tariff number of the product, EasyPost also requires a custom_signer value during shipment creation to validate the request. HotWax retrieves the designated custom signer value assigned by retailer stored in system properties in OMS. 

Once both HS Tariff numbers and custom signer information are available, HotWax constructs a streamlined create shipment API request to EasyPost and generate shipping label.

#### Method

`POST`

```
https://api.easypost.com/v2/shipments
```

#### Request:

<details>

<summary>Sample request</summary>

```json
{
  "shipment": {
    "to_address": {
      "name": "Dr. Steve Brule",
      "street1": "179 N Harbor Dr",
      "city": "Redondo Beach",
      "state": "CA",
      "zip": "90277",
      "country": "US",
      "phone": "857-387-5756",
      "email": "dr_steve_brule@gmail.com"
    },
    "from_address": {
      "name": "EasyPost",
      "street1": "417 Montgomery Street",
      "street2": "5th Floor",
      "city": "San Francisco",
      "state": "CA",
      "zip": "94104",
      "country": "US",
      "phone": "415-333-4445",
      "email": "support@easypost.com"
    },
    "parcel": {
      "length": 20.2,
      "width": 10.9,
      "height": 5.0,
      "weight": 65.9
    },
    "customs_info": {
      "id": "cstinfo_..."
    }
  },
  "carrier_accounts": [
    "ca_value",
    "ca_value"
  ]
}
```

</details>

| API Parameter | HotWax Field | Description |
|---|---|---|
| shipment.to_address.name | destinationAddressToName | Recipient name |
| shipment.to_address.street1 | destinationAddressLine1 | Recipient address line 1 |
| shipment.to_address.street2 | destinationAddressLine2 (optional) | Recipient address line 2 (optional) |
| shipment.to_address.city | destinationAddressCity | Recipient city |
| shipment.to_address.state | destinationAddressStateCode | Recipient state code |
| shipment.to_address.zip | destinationAddressPostalCode | Recipient ZIP code |
| shipment.to_address.country | destinationAddressCountryCode | Recipient country code |
| shipment.to_address.phone | shipToPhone | Recipient phone number |
| shipment.to_address.email | shipToEmail | Recipient email address |
| shipment.from_address.name | originAddressToName | Sender name |
| shipment.from_address.street1 | originAddressLine1 | Sender address line 1 |
| shipment.from_address.street2 | originAddressLine2 (optional) | Sender address line 2 (optional) |
| shipment.from_address.city | originAddressCity | Sender city |
| shipment.from_address.state | originAddressStateOrProvinceCode | Sender state or province code |
| shipment.from_address.zip | originAddressPostalCode | Sender ZIP code |
| shipment.from_address.country | originAddressCountryCode | Sender country code |
| shipment.from_address.phone | shipFromPhone | Sender phone number |
| shipment.from_address.email | shipFromEmail | Sender email address |
| shipment.customs_info.* (if isInternationalShipment) | (Varies) | Customs information for international shipments (see sub-fields) |
| shipment.customs_info.contents_explanation | (not specified) | Contents explanation (optional) |
| shipment.customs_info.contents_type | (not specified) | Contents type |
| shipment.customs_info.customs_certify | (not specified) | Customs certification flag |
| shipment.customs_info.customs_signer | customs_signer | Customs signer name |
| shipment.customs_info.eel_pfc | (not specified) | Export Enforcement Line of Business Product Classification (optional) |
| shipment.customs_info.non_delivery_option | (not specified) | Non-delivery option |
| shipment.customs_info.restriction_comments | (not specified) | Restriction comments (optional) |
| shipment.customs_info.restriction_type | (not specified) | Restriction type |
| shipment.customs_info.declaration | (not specified) | Customs declaration (optional) |
| shipment.customs_info.customs_items.* | shipmentPackageItems.* | List of customs items (see sub-fields) |
| shipment.customs_info.customs_items[].description | shipmentPackageItem.itemDescription | Item description |
| shipment.customs_info.customs_items[].hs_tariff_number | shipmentPackageItem.hsCode | HS tariff number |
| shipment.customs_info.customs_items[].origin_country | originAddressCountryCode | Item origin country (same as sender country) |
| shipment.customs_info.customs_items[].quantity | shipmentPackageItem.packedQuantity | Item quantity |
| shipment.customs_info.customs_items[].value | shipmentPackageItem.value | Item value |
| shipment.customs_info.customs_items[].weight | shipmentPackageItem.productWeight | Item weight |
| shipment.customs_info.customs_items[].code | shipmentPackageItem.productId | Item code |
| shipment.customs_info.customs_items[].manufacturer | (not specified) | Item manufacturer (optional) |
| shipment.customs_info.customs_items[].currency | currencyUomId | Item currency |
| shipment.customs_info.customs_items[].eccn | (not specified) | Export Control Classification Number (optional) |
| shipment.customs_info.customs_items[].printed_commodity_identifier | (not specified) | Printed commodity identifier (optional) |
| shipment.parcel.length | length | Parcel length |
| shipment.parcel.width | width | Parcel width |
| shipment.parcel.height | height | Parcel height |
| shipment.parcel.weight | weight |
| shipment.options.print_custom_1 | orderName | Custom print data 1 |
| shipment.options.print_custom_1_code | (not specified) | Custom print data 1 code |
| shipment.options.label_format | (not specified) | Label format |
| shipment.options.label_size | (not specified) | Label size |
| shipment.carrier_accounts | (not specified) | List of carrier accounts (optional) |
| shipment.carrier_accounts[] | facilityAttribute.attrName.carrierAccounts | Individual carrier account |

#### Response:

{% hint style="info" %}
`EasyPost` consistently structures its responses, maintaining a common format. Unique details specified in each request are appended to this structure, ensuring dynamic adaptability while preserving a standardized response format.
{% endhint %}

In response, `Easy Post` shares three types of rates, and in our integration, we're utilizing the rates found in the `rate` attribute for rate shopping. For further details about the rates, you can refer to [this](https://www.easypost.com/docs/api#rate-object) documentation provided by Easy Post.

<details>

<summary>Sample response</summary>

```json

{
  "created_at": "2024-01-24T00:07:30Z",
  "is_return": false,
  "messages": [],
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
  "updated_at": "2024-01-24T00:07:30Z",
  "batch_id": null,
  "batch_status": null,
  "batch_message": null,
  "customs_info": {
    "id": "cstinfo_657b430669ef456584bc4b82b3271084",
    "object": "CustomsInfo",
    "created_at": "2024-01-24T00:07:30Z",
    "updated_at": "2024-01-24T00:07:30Z",
    "contents_explanation": "",
    "contents_type": "merchandise",
    "customs_certify": true,
    "customs_signer": "Steve Brule",
    "eel_pfc": "NOEEI 30.37(a)",
    "non_delivery_option": "return",
    "restriction_comments": null,
    "restriction_type": "none",
    "mode": "test",
    "declaration": null,
    "customs_items": [
      {
        "id": "cstitem_046758e6b61847f99623c4d2290a26bd",
        "object": "CustomsItem",
        "created_at": "2024-01-24T00:07:30Z",
        "updated_at": "2024-01-24T00:07:30Z",
        "description": "T-shirt",
        "hs_tariff_number": "123456",
        "origin_country": "US",
        "quantity": 1,
        "value": "10.0",
        "weight": 5.0,
        "code": "123",
        "mode": "test",
        "manufacturer": null,
        "currency": null,
        "eccn": null,
        "printed_commodity_identifier": null
      }
    ]
  },
  "from_address": {
    "id": "adr_90e0406bba4c11eea7d53cecef1b359e",
    "object": "Address",
    "created_at": "2024-01-24T00:07:30+00:00",
    "updated_at": "2024-01-24T00:07:30+00:00",
    "name": "EasyPost",
    "company": null,
    "street1": "417 Montgomery Street",
    "street2": "5th Floor",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94104",
    "country": "US",
    "phone": "4153334445",
    "email": "support@easypost.com",
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
    "id": "prcl_4dde100b45af43acbe9c68244fa51851",
    "object": "Parcel",
    "created_at": "2024-01-24T00:07:30Z",
    "updated_at": "2024-01-24T00:07:30Z",
    "length": 20.2,
    "width": 10.9,
    "height": 5.0,
    "predefined_package": null,
    "weight": 65.9,
    "mode": "test"
  },
  "postage_label": null,
  "rates": [
    {
      "id": "rate_3cbb8d9c4ea1477588a17b0ee3e0c5b4",
      "object": "Rate",
      "created_at": "2024-01-24T00:07:30Z",
      "updated_at": "2024-01-24T00:07:30Z",
      "mode": "test",
      "service": "Express",
      "carrier": "USPS",
      "rate": "49.60",
      "currency": "USD",
      "retail_rate": "57.40",
      "retail_currency": "USD",
      "list_rate": "49.60",
      "list_currency": "USD",
      "billing_type": "easypost",
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": false,
      "est_delivery_days": null,
      "shipment_id": "shp_93170d48eb1a413aa5c0d8bf4384a350",
      "carrier_account_id": "ca_9685a1198a75477885a3cdca37559bac"
    },
    {
      "id": "rate_c9e1a6c4be1e40a7af83b42d1115c550",
      "object": "Rate",
      "created_at": "2024-01-24T00:07:30Z",
      "updated_at": "2024-01-24T00:07:30Z",
      "mode": "test",
      "service": "Priority",
      "carrier": "USPS",
      "rate": "7.33",
      "currency": "USD",
      "retail_rate": "15.20",
      "retail_currency": "USD",
      "list_rate": "10.89",
      "list_currency": "USD",
      "billing_type": "easypost",
      "delivery_days": 2,
      "delivery_date": null,
      "delivery_date_guaranteed": false,
      "est_delivery_days": 2,
      "shipment_id": "shp_93170d48eb1a413aa5c0d8bf4384a350",
      "carrier_account_id": "ca_9685a1198a75477885a3cdca37559bac"
    },
    {
      "id": "rate_a39910cfd937402fb77a9eaed223dcfe",
      "object": "Rate",
      "created_at": "2024-01-24T00:07:30Z",
      "updated_at": "2024-01-24T00:07:30Z",
      "mode": "test",
      "service": "GroundAdvantage",
      "carrier": "USPS",
      "rate": "6.79",
      "currency": "USD",
      "retail_rate": "13.15",
      "retail_currency": "USD",
      "list_rate": "9.41",
      "list_currency": "USD",
      "billing_type": "easypost",
      "delivery_days": 3,
      "delivery_date": null,
      "delivery_date_guaranteed": false,
      "est_delivery_days": 3,
      "shipment_id": "shp_93170d48eb1a413aa5c0d8bf4384a350",
      "carrier_account_id": "ca_9685a1198a75477885a3cdca37559bac"
    },
    {
      "id": "rate_d0b494c33c3e42f893b619d730f24058",
      "object": "Rate",
      "created_at": "2024-01-24T00:07:30Z",
      "updated_at": "2024-01-24T00:07:30Z",
      "mode": "test",
      "service": "First",
      "carrier": "USPS",
      "rate": "6.79",
      "currency": "USD",
      "retail_rate": "13.15",
      "retail_currency": "USD",
      "list_rate": "9.41",
      "list_currency": "USD",
      "billing_type": "easypost",
      "delivery_days": 3,
      "delivery_date": null,
      "delivery_date_guaranteed": false,
      "est_delivery_days": 3,
      "shipment_id": "shp_93170d48eb1a413aa5c0d8bf4384a350",
      "carrier_account_id": "ca_9685a1198a75477885a3cdca37559bac"
    },
    {
      "id": "rate_dad1a54ef6f64dfc9def001cbbb2b142",
      "object": "Rate",
      "created_at": "2024-01-24T00:07:30Z",
      "updated_at": "2024-01-24T00:07:30Z",
      "mode": "test",
      "service": "ParcelSelect",
      "carrier": "USPS",
      "rate": "6.79",
      "currency": "USD",
      "retail_rate": "13.15",
      "retail_currency": "USD",
      "list_rate": "9.41",
      "list_currency": "USD",
      "billing_type": "easypost",
      "delivery_days": 3,
      "delivery_date": null,
      "delivery_date_guaranteed": false,
      "est_delivery_days": 3,
      "shipment_id": "shp_93170d48eb1a413aa5c0d8bf4384a350",
      "carrier_account_id": "ca_9685a1198a75477885a3cdca37559bac"
    }
  ],
  "refund_status": null,
  "scan_form": null,
  "selected_rate": null,
  "tracker": null,
  "to_address": {
    "id": "adr_90dd5fb4ba4c11ee9e88ac1f6bc539ae",
    "object": "Address",
    "created_at": "2024-01-24T00:07:30+00:00",
    "updated_at": "2024-01-24T00:07:30+00:00",
    "name": "Dr. Steve Brule",
    "company": null,
    "street1": "179 N Harbor Dr",
    "street2": null,
    "city": "Redondo Beach",
    "state": "CA",
    "zip": "90277",
    "country": "US",
    "phone": "8573875756",
    "email": "dr_steve_brule@gmail.com",
    "mode": "test",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "usps_zone": 4,
  "return_address": {
    "id": "adr_90e0406bba4c11eea7d53cecef1b359e",
    "object": "Address",
    "created_at": "2024-01-24T00:07:30+00:00",
    "updated_at": "2024-01-24T00:07:30+00:00",
    "name": "EasyPost",
    "company": null,
    "street1": "417 Montgomery Street",
    "street2": "5th Floor",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94104",
    "country": "US",
    "phone": "4153334445",
    "email": "support@easypost.com",
    "mode": "test",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "buyer_address": {
    "id": "adr_90dd5fb4ba4c11ee9e88ac1f6bc539ae",
    "object": "Address",
    "created_at": "2024-01-24T00:07:30+00:00",
    "updated_at": "2024-01-24T00:07:30+00:00",
    "name": "Dr. Steve Brule",
    "company": null,
    "street1": "179 N Harbor Dr",
    "street2": null,
    "city": "Redondo Beach",
    "state": "CA",
    "zip": "90277",
    "country": "US",
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
  "fees": [],
  "id": "shp_93170d48eb1a413aa5c0d8bf4384a350",
  "object": "Shipment"
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
