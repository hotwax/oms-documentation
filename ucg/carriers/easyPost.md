# Easy Post

Frank and Oak uses the Easy Post integration offered by the OMS. This document details the paramaters configured specifically for Frank and Oak. To learn more about the full integration, along with field mappings, checkout the full integration document [here][easyPostDoc].

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

#### Response:

The response is not handled with any exceptoins for Frank and Oak at this time.

### Buy a Shipment API

Frank and Oak only uses one carrier for each country, Canada and the United States, so the rate shopping function automatically selects the lowest cost option returned by the carrier and generates the label for the fulfillment team.


<!-- page links -->

[easyPostDoc](https://docs.hotwax.co/integration-resources/v/carriers/easy-post)
