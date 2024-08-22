# HotWax Commerce BOPIS API Documentation

This document details additional HotWax Commerce APIs used by Perry Ellis for Order Management System (OMS) functionalities beyond the Buy Online Pickup In-Store (BOPIS) Product Detail Page (PDP) experience, which is covered here: https://docs.hotwax.co/integrate-with-hotwax/journeys/introduction-buy-online-pickup-in-store/bopis-pdp-experience.

## Ready For Pickup API

Marks orders as "Ready for Pickup" and triggers a notification email to customers.

**Endpoint** 
https://host/api/readyForPickupBOPISOrder

**HTTP Method** 
`POST`

* **Request Body:**

```json
{
  "externalOrderId": "4726279176383", // Your Shopify Order ID
  "externalLineItemId": [
    "11634240422079" // Array of Shopify Line Item IDs (can include multiple)
  ],
  "externalFacilityId": "698" // Perry Ellis Store ID
}
```

## Complete Pick Up API

Marks orders as "Complete" when the order is handed over to the customer/courier at the store.

**Endpoint** 
https://host/api/shipNowBOPISOrder

**HTTP Method** 
`POST`

**Request Body:**

```json
{
  "externalOrderId": "4726279176383", // Your Shopify Order ID
  "externalLineItemId": [
    "11634240422079" // Array of Shopify Line Item IDs (can include multiple)
  ],
  "externalFacilityId": "698" // Perry Ellis Store ID
}
```

## Reject Shopify Order Item API

Marks specific order items as "Rejected" with a reason, typically due to out-of-stock inventory.

**Endpoint** 
https://<host>/api/rejectShopifyOrderItem

**HTTP Method** 
`POST`

**Request Body:**

```json
{
  "externalOrderId": "4686389117092", // Your Shopify Order ID
  "externalLineItemId": "11879715143844", // Shopify Line Item ID
  "externalFacilityId": "906", // Perry Ellis Store ID
  "rejectionComments": "Rejected by External System", // Optional comment for rejection reason
  "rejectionReason": "NO_VARIANCE_LOG" // Reason for rejection (e.g., NO_VARIANCE_LOG)
}
```

**Authorization Token:**

To use these APIs, you'll need to obtain an authorization token by making a separate POST request to the following endpoint:

* **Endpoint:** https://host/api/login
* **Example:** [invalid URL removed]
* **Production URL:** Not Available (NA)
* **Request Body:**

```json
{
  "USERNAME": "API_USER", // Replace with your actual username
  "PASSWORD": "@123" // Replace with your actual password
}
```

**Important Notes:**

* Replace `<host>` with the actual host address provided by Perry Ellis.
* Replace placeholders like `externalOrderId`, `externalLineItemId`, and `externalFacilityId` with your actual Shopify Order ID, Shopify Line Item ID(s), and Perry Ellis Store ID, respectively.
* Ensure proper authentication by obtaining a valid authorization token before using the BOPIS APIs.

This documentation provides a basic overview of these APIs. 