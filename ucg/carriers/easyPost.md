# Easy Post

Frank and Oak uses the Easy Post integration offered by the OMS. This document details the paramaters configured specifically for Frank and Oak. To learn more about the full integration, along with field mappings, checkout the full integration document [here][easyPostDoc].

## How Easy Post is configured in Frank and Oak:

1. **Canada Post (CPC) - Regular Domestic Shipping (Canada):**
   - Facilitates standard domestic shipping within Canada.

2. **UPS - Regular Shipping to the US:**
   - Utilized for standard shipping to destinations in the United States.

3. **Canada Post (CPC) - Express Domestic Shipping (Canada):**
   - Enables expedited domestic shipping within Canada.

4. **UPS - Express Shipping to the US:**
   - Supports expedited shipping to destinations in the United States.

**Additional Requirements:**

- **PO Box Shipping:**
  - CPC is designated for shipping to PO boxes. All shipments to PO boxes must be processed through CPC.

- **International Shipping from Stores (Excluding CA/US):**
  - International shipping from stores to countries other than Canada and the United States will be disabled (refer to the configurations page).

**Configuration Responsibilities:**

- EasyPost manages the integration with shipping providers.
- CPC is specifically designated for PO box shipping and express domestic shipping within Canada.
- UPS is engaged for regular and express shipping to the US.


## Create a Shipment API

### Purpose:
The Create a Shipment API is utilized to share all necessary details of a shipment with EasyPost. This includes shipment information such as package dimensions, weight, origin, and destination. In return, the API fetches rates available from different carriers for shipping the specified package. 

### Method
`POST`

```
https://api.easypost.com/v2/shipments
```

### Request:

{% hint style="info" %}
The `postage_label` is configured for `Frank and Oak` to `4 x 6`. In cases where specific values are not provided, Easy Post will return its default label size. 
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

### Response:

The response is not handled with any exceptoins for Frank and Oak at this time.

## Buy a Shipment API

Frank and Oak only uses one carrier for each country, Canada and the United States, so the rate shopping function automatically selects the lowest cost option returned by the carrier and generates the label for the fulfillment team.


<!-- page links -->

[easyPostDoc]:https://docs.hotwax.co/integration-resources/v/carriers/easy-post
