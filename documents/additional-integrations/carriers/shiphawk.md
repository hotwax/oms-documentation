# ShipHawk and HotWax Commerce integration documentation

## Overview
This document outlines the technical and functional integration between **ShipHawk** and **HotWax Commerce**. The integration enables real-time shipping rate calculation, automated label generation, and tracking updates within the HotWax Commerce Order Management System (OMS).

---

## 1. Key Integration Features

### 1.1 Real-Time Rate Shopping
HotWax Commerce integrates with ShipHawk's rating API to fetch real-time carrier quotes. 
- **Process**: When a shipment is being prepared, HotWax sends package details (weight, dimensions, destination) to ShipHawk.
- **Rate Selection**: The integration retrieves multiple rates and by default selects the "best rate" (typically the lowest price).
- **Data Persistence**: The selected ShipHawk `rate_id` is stored as a `ShipmentAttribute` (`SHIPHAWK_RATE_ID`) for subsequent label purchase.

### 1.2 Automated Label Generation
Once a rate is confirmed, HotWax "buys" the shipment in ShipHawk.
- **Label Purchase**: Using the stored `rate_id`, HotWax triggers the label generation process in ShipHawk.
- **Tracking Info**: ShipHawk returns a `tracking_number` and a `label_url`.
- **Shipment Identification**: The ShipHawk Shipment ID (`shid`) is stored as a `ShipmentAttribute` (`SHIPHAWK_SHIPMENT_ID`).

### 1.3 Label Voiding (Cancellation)
If a shipment is canceled or reverted to an earlier state in HotWax, the integration voids the label in ShipHawk.
- **Trigger**: Moving shipment status to `SHIPMENT_CANCELLED` or `SHIPMENT_INPUT`.
- **Action**: HotWax sends a `DELETE` request to ShipHawk using the stored `shid`.

### 1.4 Webhook Status Sync
ShipHawk notifies HotWax of shipment progress via webhooks.
- **Status Mapping**:
  | ShipHawk Status | HotWax Internal Status |
  | :--- | :--- |
  | `exception` | `SHIPMENT_EXCEPTION` |
  | `in_transit` | `SHIPMENT_IN_TRANSIT` |
  | `delivered` | `SHIPMENT_DELIVERED` |

### 1.5 Automated Notifications
Upon receiving a `delivered` status from ShipHawk, HotWax automatically triggers:
- **Email Notification**: Sends a delivery confirmation email to the customer.
- **SMS Notification**: Sends a delivery confirmation text message.

---

## 2. Technical Architecture

### 2.1 Communication Protocol
- **Format**: JSON over HTTP.
- **Pattern**: Synchronous request-response for rates/labels, asynchronous webhooks for status updates.
- **Authentication**: API Key-based authentication via the `Authorization` header.

### 2.2 Configuration (System Properties)
Configuration is managed via `SystemProperty` and `SystemMessageRemote` entities:
- `sendUrl`: Base API URL (e.g., `https://sandbox.shiphawk.com/api/v4/`).
- `authHeaderName`: `Authorization`.
- `publicKey`: Your ShipHawk API Key.
- `endPoint.shipments.rates`: `rates`
- `endPoint.shipments.labels`: `shipments`

### 2.3 Data Mapping Attributes
| Attribute Name | Entity | Description |
| :--- | :--- | :--- |
| `SHIPHAWK_RATE_ID` | `ShipmentAttribute` | Stores the unique ID for a specific rate quote. |
| `SHIPHAWK_SHIPMENT_ID`| `ShipmentAttribute` | Stores the ShipHawk Shipment ID (`shid`). |
| `SHIPHAWK_WH_CODE` | `FacilityIdentification`| Maps HotWax facilities to ShipHawk warehouse codes. |

---

## 3. Detailed Service Analysis

### 3.1 `getShipHawkShippingRate`
- **Engine**: Java (`ShipHawkRequestServices.java`)
- **Input**: Shipment details, carrier info, facility ID.
- **Logic**:
  1. Identify the warehouse code (`SHIPHAWK_WH_CODE`).
  2. Fetch request template (`ShipHawkRateRequest.json.ftl`).
  3. Send `POST` request to `/rates`.
  4. Parse response and select the best rate.
  5. Update `ShipmentRouteSegment` with rate info and store `SHIPHAWK_RATE_ID`.

### 3.2 `getShipHawkShippingLabel`
- **Engine**: Java (`ShipHawkRequestServices.java`)
- **Input**: Shipment ID, Route Segment ID.
- **Logic**:
  1. Retrieve the previously stored `rate_id`.
  2. Send `POST` request to `/shipments`.
  3. Parse response for `label_url` and `tracking_number`.
  4. Store `shid` as `SHIPHAWK_SHIPMENT_ID`.
  5. Update HotWax shipment records with tracking details.

### 3.3 `createShipHawkShipmentStatus` (Webhook)
- **Engine**: Java (`ShipHawkWebhookServices.java`)
- **Logic**:
  1. Receive payload from ShipHawk.
  2. Match the `shid` to a HotWax `shipmentId`.
  3. Map the ShipHawk status to HotWax status.
  4. Update `ShipmentStatus` record.

---

## 4. Troubleshooting & Best Practices
- **Rate Mismatches**: The `RATE_FIELD` system property must match the field expected from ShipHawk (default is `price`).
- **International Shipments**: The integration automatically detects international shipments and fetches Commercial Invoices if available (`getCommercialInvoicePdfUrl`).
- **API Sandbox**: Always test using the Sandbox URL before moving to production.
