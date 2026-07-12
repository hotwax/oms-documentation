---
description: >-
  Read HotWax Commerce technical documentation to understand how to integrate
  with enterprise systems and external platforms.
---

# Introduction

HotWax Commerce technical documentation helps you integrate the platform with external systems such as enterprise resource planning (ERP), warehouse management systems (WMS), and point of sale (POS) systems. Use HotWax Commerce Omnichannel Order Management System (OMS) capabilities to manage orders, inventory, and fulfillment workflows.

Use the following resources to plan and build an integration:

* [APIs](api/orders/README.md) for requests, responses, and endpoint-specific examples
* [Data feeds](api/fulfillment/fulfilled-order-items-feed.md) for OMS data sent to external systems
* [Journeys](journeys/buy-online-pickup-in-store/README.md) for end-to-end business workflows

## APIs

APIs enable external systems to interact with HotWax Commerce OMS for operations such as order management, inventory updates, and fulfillment processing.

Start with [authentication](api/initial-api-authentication.md), then use the API documentation for request and response structures, available endpoints, and their use cases.

### Example: Retrieve orders

Use the [Get Orders API](api/orders/get-orders.md) to retrieve existing order documents from OMS. Send a `GET` request with a bearer token:

```http
GET https://<instance.name>.hotwax.io/api/<publish_point>/orders
Authorization: Bearer <your_token>
Accept: application/json
```

The response includes a `count` and a `docs` array. Each document contains order details, including the external order ID, status, and ship groups.

## Data feeds

Out-of-the-box data feeds facilitate integration between HotWax Commerce OMS and external systems such as ERP, WMS, and POS.

They support use cases such as:
* Inventory synchronization
* Product data updates
* Operational data import and export

The data-feed documentation includes step-by-step guidance and sample files in CSV and JSON formats.

### Example: Send fulfillment data to an ERP

Use the [Fulfilled Order Items Feed](api/fulfillment/fulfilled-order-items-feed.md) to send OMS fulfillment data to an ERP. The JSON feed contains completed order items from a specific facility, including fields such as `productStoreId`, `orderId`, `orderName`, and `orderStatusId`.

## Journeys

Journeys represent end-to-end business workflows powered by a combination of APIs and data feeds.

They help you:
* Understand real-world integration flows
* Configure out-of-the-box journeys
* Customize workflows based on business requirements

The journey documentation explains the available journeys and how to adapt them for specific operational needs.

## Example integration flow

Use the following flow to update an ERP after order fulfillment:

1. Create an integration user and generate a bearer token using the [authentication guide](api/initial-api-authentication.md).
2. Use the [Get Orders API](api/orders/get-orders.md) to retrieve order documents and identify the order data your integration needs.
3. Consume the [Fulfilled Order Items Feed](api/fulfillment/fulfilled-order-items-feed.md) after OMS fully fulfills an order from a facility.
4. Map the feed's completed order item data to the ERP's inventory update format.
