# HotWax OMS Custom Webhook Mechanism: Technical Architecture and Implementation

## 1. Introduction
The custom webhook mechanism in HotWax OMS provides a robust, real-time data synchronization layer between the OMS and external platforms (e.g., Automation Data Operations Center (ADOC)). Unlike traditional polling-based integrations, this event-driven architecture pushes status updates for orders, items, and shipments immediately as they occur in the database.

## 2. Architectural overview
The system is built on top of Moqui’s `DataFeed` and `SystemMessage` frameworks, providing scalability, asynchronous execution, and reliable delivery.

### Key components
- **DataFeed (`WebhookEvents`)**: The \"listener\" that monitors specific entities for changes.
- **DataDocument**: The \"schema\" defining which fields are extracted from the Moqui database.
- **Service Layer (`WebhookServices`)**: The \"builder\" and \"sender\" logic.
- **SystemMessage**: The \"queue\" that manages asynchronous delivery and retries.

---

## 3. Data capture flow (data-driven triggers)

The system uses the `DTFDTP_RT_PUSH` feed type, which triggers a service call immediately after a database transaction is committed.

### Data documents and scopes
- `WebhookOrderStatus`: Monitors the `OrderStatus` entity. Used for order-level lifecycle events like `ORDER_CREATED`, `ORDER_APPROVED`, and `ORDER_COMPLETED`.
- `WebhookOrderItem`: Monitors the `OrderItem` entity. Specifically handles item-level events such as `ITEM_BROKERED` (allocation) and `ITEM_REJECTED` (fulfillment rejection).
- `WebhookShipmentStatus`: Monitors the `ShipmentStatus` entity. Tracks fulfillment progress including `SHIPMENT_APPROVED`, `SHIPMENT_PACKED`, and `SHIPMENT_SHIPPED`.

### Event mapping
The `receive#WebhookEvents` service receives a `DataDocument` and determines the business *Topic* by mapping technical status IDs (e.g., `OrderApproved` -> `ORDER_APPROVED`).

---

## 4. Payload construction logic
A centralized service, `process#WebhookDataDocument`, is responsible for transforming raw database records into a clean, human-readable JSON payload.

### Enhanced information extraction
- **Customer Shipping Address**: The service intelligently filters through `contactMechs` to find the `SHIPPING_LOCATION` and includes `address`, `city`, `state`, and `zipCode`.
- **Store Ship-From Address**: For shipment events, the system looks up the facility handling the order and extracts its name and physical location to provide transparency on the originating warehouse/store.
- **Product Identification**: Payloads include SKUs, UPCs, and internal IDs for unambiguous tracking across systems.
- **Order Financials**: Includes currency (ISO format), grand totals, payment methods, and sales channel metadata.

---

## 5. Security and data integrity

This allows the receiving system to trust the payload, every webhook request is cryptographically signed.

### HMAC SHA-256 signing
1.  A `sharedSecret` is configured for each webhook endpoint in the `WebhookConfig` entity.
2.  The `send#WebhookNotification` service generates a base64 encoded HMAC SHA-256 signature using the raw JSON body and the `sharedSecret`.
3.  The signature is sent in the `X-Hub-Signature` HTTP header.

**Header Format:** `X-Hub-Signature: sha256=<signature>`

### Verification on receiver side
The receiver should calculate the HMAC of the request body using their local copy of the secret and compare it to the header value.

---

## 6. Reliable delivery (retry mechanism)
By using `SystemMessage`, the webhooks are not susceptible to transient network failures:
- If an endpoint is down (HTTP 5xx or 4xx), the system will automatically retry based on a configurable schedule.
- Success and failure logs are maintained within the `SystemMessage` logs for auditing and troubleshooting.

---

## 7. Global configuration
Webhooks are configured via the `WebhookConfig` entity, allowing for multiple subscribers per topic.

| Field | Purpose |
|---|---|
| `webhookConfigId` | Unique ID (e.g., `ADOC_SHIP_STATUS`). |
| `topicEnumId` | The event topic (e.g., `SHIPMENT_SHIPPED`). |
| `remoteUrl` | The HTTPS target endpoint. |
| `sharedSecret` | The secret key for HMAC signatures. |

---

## Appendix: Summary of recent enhancements
- **Granular Addressing**: Added logic to include full postal address details for both customers and fulfillment facilities.
- **Unified Builder**: Refactored the payload construction into a single shared service to maintain consistency across all event types.
- **Entity Extensions**: Expanded `WebhookConfig` to securely store signing secrets and improved `Facility` entity relationships for faster address lookups.
