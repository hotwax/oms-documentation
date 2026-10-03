# ShipHawk and HotWax Commerce integration

## Overview
This document outlines the technical and functional integration between **ShipHawk** and **HotWax Commerce**. The integration enables real-time shipping rate calculation, automated label generation, and tracking updates within the HotWax Commerce Order Management System (OMS).

---

## Key integration features

### Real-time rate shopping
HotWax Commerce integrates with ShipHawk's rating API to fetch real-time carrier quotes. 
- **Process**: When preparing a shipment, HotWax Commerce sends package details (weight, dimensions, and destination) to ShipHawk.
- **Rate selection**: The integration retrieves multiple rates and by default selects the best rate (typically the lowest price).
- **Data persistence**: Store the selected ShipHawk `rate_id` as a `ShipmentAttribute` (`SHIPHAWK_RATE_ID`) for subsequent label purchase.

### Automated label generation
Once a rate is confirmed, HotWax Commerce purchases the shipment in ShipHawk.
- **Label purchase**: Trigger the label generation process in ShipHawk using the stored `rate_id`.
- **Tracking information**: ShipHawk returns a `tracking_number` and a `label_url`.
- **Shipment identification**: Store the ShipHawk Shipment ID (`shid`) as a `ShipmentAttribute` (`SHIPHAWK_SHIPMENT_ID`).

### Label voiding (cancellation)
If a shipment is canceled or reverted to an earlier state in HotWax Commerce, the integration voids the label in ShipHawk.
- **Trigger**: Move shipment status to `SHIPMENT_CANCELLED` or `SHIPMENT_INPUT`.
- **Action**: Send a `DELETE` request to ShipHawk using the stored `shid`.

### Webhook status sync
ShipHawk notifies HotWax Commerce of shipment progress via webhooks.
- **Status mapping**:
  | ShipHawk Status | HotWax Internal Status |
  | :--- | :--- |
  | `exception` | `SHIPMENT_EXCEPTION` |
  | `in_transit` | `SHIPMENT_IN_TRANSIT` |
  | `delivered` | `SHIPMENT_DELIVERED` |

### Automated notifications
Upon receiving a `delivered` status from ShipHawk, HotWax Commerce automatically triggers the following:
- **Email notification**: Send a delivery confirmation email to the customer.
- **SMS notification**: Send a delivery confirmation text message.

---

## Technical architecture

### Communication protocol
- **Format**: JSON over HTTP.
- **Pattern**: Synchronous request-response for rates and labels; asynchronous webhooks for status updates.
- **Authentication**: API Key-based authentication via the `Authorization` header.

### Configuration (system properties)
Configure the integration using `SystemProperty` and `SystemMessageRemote` entities:
- `sendUrl`: Base API URL (e.g., `https://sandbox.shiphawk.com/api/v4/`).
- `authHeaderName`: `Authorization`.
- `publicKey`: Your ShipHawk API Key.
- `endPoint.shipments.rates`: `rates`
- `endPoint.shipments.labels`: `shipments`

### Data mapping attributes
| Attribute Name | Entity | Description |
| :--- | :--- | :--- |
| `SHIPHAWK_RATE_ID` | `ShipmentAttribute` | Store the unique ID for a specific rate quote. |
| `SHIPHAWK_SHIPMENT_ID`| `ShipmentAttribute` | Store the ShipHawk Shipment ID (`shid`). |
| `SHIPHAWK_WH_CODE` | `FacilityIdentification`| Map HotWax Commerce facilities to ShipHawk warehouse codes. |

---

## Detailed service analysis

### `getShipHawkShippingRate`
- **Engine**: Java (`ShipHawkRequestServices.java`)
- **Input**: Shipment details, carrier info, facility ID.
- **Logic**:
  1. Identify the warehouse code (`SHIPHAWK_WH_CODE`).
  2. Fetch the request template (`ShipHawkRateRequest.json.ftl`).
  3. Send a `POST` request to `/rates`.
  4. Parse the response and select the best rate.
  5. Update `ShipmentRouteSegment` with the rate information and store the `SHIPHAWK_RATE_ID`.

### `getShipHawkShippingLabel`
- **Engine**: Java (`ShipHawkRequestServices.java`)
- **Input**: Shipment ID, Route Segment ID.
- **Logic**:
  1. Retrieve the previously stored `rate_id`.
  2. Send a `POST` request to `/shipments`.
  3. Parse the response for `label_url` and `tracking_number`.
  4. Store the `shid` as `SHIPHAWK_SHIPMENT_ID`.
  5. Update the HotWax Commerce shipment records with the tracking details.

### `createShipHawkShipmentStatus` (webhook)
- **Engine**: Java (`ShipHawkWebhookServices.java`)
- **Logic**:
  1. Receive the payload from ShipHawk.
  2. Match the `shid` to a HotWax Commerce `shipmentId`.
  3. Map the ShipHawk status to the HotWax Commerce status.
  4. Update the `ShipmentStatus` record.

---

## Troubleshooting and best practices
- **Rate mismatches**: The `RATE_FIELD` system property must match the field expected from ShipHawk (default is `price`).
- **International shipments**: The integration automatically detects international shipments and fetches Commercial Invoices if available (`getCommercialInvoicePdfUrl`).
- **API sandbox**: Always test using the Sandbox URL before moving to production.
