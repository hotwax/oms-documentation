# Easy Post Integration

## Introduction
Hotwax Commerce integrates with EasyPost to empower businesses, ranging from small enterprises to large corporations, with a streamlined shipping solution. This integration enables users to leverage the full capabilities of EasyPost, including rate shopping across a diverse range of carriers and real-time package tracking. 

## Authentication
## Authentication

Authentication and identification to the EasyPost API are accomplished by utilizing an API Key in every request. This API Key serves as your Basic Auth username, and no password is required. The authentication process ensures secure communication with the EasyPost API, and it is imperative to note the following details:

- **Authentication Type**: EasyPost employs API Key-based authentication for requests. Each request must include the API Key as the Basic Auth username. The absence of a valid API Key or the use of an incorrect key will result in authentication failure.

- **Security Protocol**: EasyPost mandates that all communication with the API is secured using TLS v1.2. Transport Layer Security (TLS) ensures the confidentiality and integrity of data exchanged between Hotwax Commerce and EasyPost, providing a secure environment for API interactions.

- **HTTP Restrictions**: Requests made over HTTP are not supported. It is crucial to utilize HTTPS for all communication with the EasyPost API. Any attempt to make requests over HTTP will result in failure.

By adhering to these authentication specifications, Hotwax Commerce ensures the secure and authenticated exchange of data with EasyPost. The API Key serves as the access credential, and the implementation of TLS v1.2 guarantees the confidentiality and integrity of the information transmitted during the integration process. Please refer to the following example to understand how to include the API Key in your requests:

```http
GET /api/your-endpoint
Host: api.easypost.com
Authorization: Basic YOUR_API_KEY
```

Replace `YOUR_API_KEY` with the actual API Key provided by EasyPost for your integration. This authentication mechanism ensures a seamless and secure connection between Hotwax Commerce and the EasyPost API for shipping label generation.

## APIs used 

HotWax integrates with EasyPost using three key APIs, each serving a distinct purpose in the shipping label generation process.

### 1. Create a Shipment API

#### Purpose:
The Create a Shipment API is utilized to share all necessary details of a shipment with EasyPost. This includes shipment information such as package dimensions, weight, origin, and destination. In return, the API fetches rates available from different carriers for shipping the specified package.

#### Endpoint:
```
POST /api/create-shipment
```

#### Request:
```json
{
  "origin": {
    "address": "123 Main St",
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
  }
}
```

#### Response:
```json
{
  "shipment_id": "abc123",
  "rates": [
    {
      "carrier": "UPS",
      "service": "Ground",
      "rate": 12.99
    },
    {
      "carrier": "FedEx",
      "service": "Express",
      "rate": 18.99
    }
    // ... additional rate details
  ]
}
```

### 2. Buy a Shipment API

#### Purpose:
The Buy a Shipment API is employed to share the rate ID of a specific shipment with EasyPost. This API facilitates the retrieval of a shipping label corresponding to the provided rate ID.

#### Endpoint:
```
POST /api/buy-shipment
```

#### Request:
```json
{
  "shipment_id": "abc123",
  "selected_rate_id": "ups_ground_123"
}
```

#### Response:
```json
{
  "label_url": "https://easypost-labels.com/label123",
  "tracking_number": "1Z1234567890"
}
```

### 3. Refund a Shipment API

#### Purpose:
The Refund a Shipment API is employed to void the shipping label generated for a specific shipment. This is useful in cases where a shipment needs to be canceled or rerouted.

#### Endpoint:
```
POST /api/refund-shipment
```

#### Request:
```json
{
  "shipment_id": "abc123"
}
```

#### Response:
```json
{
  "status": "success",
  "message": "Shipping label voided successfully."
}
```

These three APIs form the core of the integration, allowing HotWax to seamlessly create shipments, obtain rates, purchase shipping labels, and refund shipments as needed using EasyPost's extensive carrier network. Refer to the respective API documentation for detailed information on request and response parameters.

## References
- https://www.easypost.com/docs/api#create-a-shipment
- https://www.easypost.com/docs/api#buy-a-shipment
- https://www.easypost.com/docs/api#refund-a-shipment