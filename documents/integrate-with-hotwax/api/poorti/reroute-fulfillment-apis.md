---
description: >-
  Understand the HotWax OMS APIs used by the reroute fulfillment flow for
  updating fulfillment preferences after a rejected fulfillment.
---

# Reroute fulfillment APIs

The reroute fulfillment flow uses a small set of token-gated APIs in HotWax Commerce to let a customer or support workflow update fulfillment details after an order can no longer be fulfilled as originally planned. These endpoints are exposed from the OMS `api` application and are backed by reroute-specific services in `hotwax-oms`.

## How the flow works

1. A reroute link contains a signed `token` that identifies the order.
2. `getRerouteOrder` validates that token and exchanges it for a system validation token.
3. The reroute app uses that validation token to load the order and supporting configuration.
4. The app then calls reroute APIs to update the shipping address, change the pickup facility, cancel items, or release items for brokering again.

## Authentication model

These endpoints are configured with `auth="false"` in OMS, but they are not public APIs in the usual sense. Each request depends on a signed reroute `token`.

- The incoming reroute token is validated against the OMS JWT key.
- OMS extracts the `orderId` from that token.
- OMS then creates a second validation token for the `system` user so the reroute UI can call downstream OMS APIs safely.

## Endpoint summary

| Endpoint | Typical method | Purpose | Backing service |
| --- | --- | --- | --- |
| `/api/getRerouteOrder` | `GET` | Validates reroute token and redirects to the OMS order API with a validation token. | `getValidationTokenForRerouteOrder` |
| `/api/updateShippingAddressOfRerouteOrder` | `POST` | Updates the shipping address for a ship group. | `updateShippingAddressOfRerouteOrder` |
| `/api/updatePickupFacility` | `POST` | Changes the pickup facility for a rerouted pickup order. | `updatePickupFacility` |
| `/api/requestCancelRerouteOrderItem` | `POST` | Requests cancellation for an order item. | `requestCancelRerouteOrderItem` |
| `/api/cancelRerouteOrderItem` | `POST` | Cancels an order item immediately. | `cancelRerouteOrderItem` |
| `/api/releaseRerouteOrderItem` | `POST` | Releases an item so it can be brokered again. | `releaseRerouteOrderItem` |
| `/api/getRerouteOrderFacilityChangeHistory` | `GET` | Returns reroute facility change history for the order. | `getRerouteOrderFacilityChangeHistory` |
| `/api/getProductStoreSettingForRerouteOrder` | `GET` | Loads product store settings for the reroute experience. | `getValidationTokenForRerouteOrder` then `GetProductStoreSetting` |
| `/api/getStatesForRerouteOrder` | `GET` | Loads states for a selected country in the reroute experience. | `getValidationTokenForRerouteOrder` then `getStates` |

## API details

### 1. Bootstrap the reroute session

**Endpoint:** `/api/getRerouteOrder`

**Purpose:** Validates the incoming reroute token, confirms the order exists, and creates a validation token for the `system` user.

#### Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `token` | string | Yes | Signed reroute token containing the order context. |

**Behavior**

- Validates the incoming JWT.
- Reads `orderId` from the token payload.
- Verifies the order exists in `OrderHeader`.
- Generates a validation token for the `system` user.
- Redirects to the OMS order endpoint with `documentId=<orderId>` and the generated token.

**Response behavior**

On success, OMS redirects the request to `orders` instead of returning the order payload directly.

### 2. Update the shipping address

**Endpoint:** `/api/updateShippingAddressOfRerouteOrder`

**Purpose:** Updates ship group shipping information for the rerouted order.

**Input**

- Accepts all fields supported by `updateShippingInformationOfShipGroup`.
- Requires `token`.

Common fields for this call include:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `token` | string | Yes | Signed reroute token. |
| `shipGroupSeqId` | string | Yes | Ship group to update. |
| Address fields | string | Yes | Updated shipping address details for the ship group. |

**Behavior**

- Validates the reroute token and resolves the order.
- Executes `updateShippingInformationOfShipGroup` as the `system` user.
- Sends a pickup location confirmation notification after the update completes.

### 3. Change the pickup facility

**Endpoint:** `/api/updatePickupFacility`

**Purpose:** Changes the facility on a pickup ship group before inventory is allocated to a physical fulfillment location.

**Input**

- Accepts all fields supported by `updateOrderItemShipGroup`.
- Requires `token`.

Important fields include:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `token` | string | Yes | Signed reroute token. |
| `shipGroupSeqId` | string | Yes | Ship group to update. |
| `facilityId` | string | Yes | New pickup facility. |
| `shipmentMethodTypeId` | string | No | Shipment method to apply. Defaults to `STANDARD`. |

**Behavior**

- Allows the update only when the current facility on the ship group is virtual.
- Updates the ship group facility using `updateOrderItemShipGroup`.
- Creates `OrderFacilityChange` records for the affected order items.
- Marks the change reason as `BROKERED`.
- Sends a pickup location confirmation notification.

**Important note**

If the order has already been allocated to a non-virtual facility, OMS rejects the request and the pickup location cannot be changed through this flow.

### 4. Request cancellation for an item

**Endpoint:** `/api/requestCancelRerouteOrderItem`

**Purpose:** Starts the cancellation workflow for an order item from the reroute flow.

**Input**

- Accepts the same parameters as `requestCancelOrderItem`.
- Requires `token`.

Typical item identifiers include:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `token` | string | Yes | Signed reroute token. |
| `orderItemSeqId` | string | Yes | Order item to cancel. |
| `shipGroupSeqId` | string | No | Ship group for the item. |
| `cancelQuantity` or service-equivalent item quantity fields | number | No | Quantity to cancel when partial cancellation is supported. |

**Behavior**

- Validates the reroute token and resolves the order.
- Runs `requestCancelOrderItem` as the `system` user.

### 5. Cancel an item

**Endpoint:** `/api/cancelRerouteOrderItem`

**Purpose:** Cancels an order item directly from the reroute flow.

**Input**

- Accepts the same parameters as `cancelOrderItem`.
- Requires `token`.

**Behavior**

- Validates the reroute token and resolves the order.
- Runs `cancelOrderItem` as the `system` user.
- Sends a cancellation confirmation notification with email type `BOPIS_ORD_CANCL_CNF`.

### 6. Release an item for rerouting

**Endpoint:** `/api/releaseRerouteOrderItem`

**Purpose:** Releases an order item so OMS can broker it again.

**Input**

- Accepts the same parameters as `releaseOrderItem`.
- Requires `token`.

Common fields include:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `token` | string | Yes | Signed reroute token. |
| `orderItemSeqId` | string | Yes | Order item to release. |
| `shipGroupSeqId` | string | No | Ship group for the item. |

**Behavior**

- Validates the reroute token and resolves the order.
- Runs `releaseOrderItem` as the `system` user.
- Makes the released item available for the next brokering cycle.

### 7. Get facility change history

**Endpoint:** `/api/getRerouteOrderFacilityChangeHistory`

**Purpose:** Returns the reroute and brokering history recorded for the order in `OrderFacilityChange`.

**Input**

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `token` | string | Yes | Signed reroute token. |
| `facilityId` | string | No | Filters history to a specific facility. |
| `changeReasonEnumId` | string | No | Filters history to a specific change reason. |

**Response**

Returns `facilityChangeHistory`, which contains:

| Field | Description |
| --- | --- |
| `orderId` | Order identifier. |
| `orderItemSeqId` | Order item identifier. |
| `fromFacilityId` | Previous facility. |
| `facilityId` | New facility. |
| `shipGroupSeqId` | Ship group identifier. |
| `changeReasonEnumId` | Reason for the change. |
| `changeDatetime` | Timestamp of the change. |

### 8. Load product store settings for the reroute UI

**Endpoint:** `/api/getProductStoreSettingForRerouteOrder`

**Purpose:** Lets the reroute UI fetch product store settings without requiring a logged-in OMS user.

**Input**

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `token` | string | Yes | Signed reroute token. |

**Behavior**

- Validates the reroute token.
- Generates a validation token for the `system` user.
- Uses the `GetProductStoreSetting` view to return the requested settings.

### 9. Load states for a country in the reroute UI

**Endpoint:** `/api/getStatesForRerouteOrder`

**Purpose:** Lets the reroute UI fetch state or province options for the selected country.

**Input**

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `token` | string | Yes | Signed reroute token. |
| `countryGeoId` | string | Yes | Country for which state values should be returned. |

**Behavior**

- Validates the reroute token.
- Generates a validation token for the `system` user.
- Redirects to the standard `getStates` endpoint with the generated token.

## Related OMS APIs used by the reroute experience

The reroute flow also depends on standard OMS APIs after the bootstrap step:

- `orders`: Used after `getRerouteOrder` redirects with `documentId` and validation token.
- `getProductStoreSetting`: Used indirectly through `getProductStoreSettingForRerouteOrder`.
- `getStates`: Used indirectly through `getStatesForRerouteOrder`.

## Key implementation rules

- Every reroute API first validates the incoming token and checks that the target order exists.
- All business actions run as the `system` user, not as an anonymous customer.
- Pickup facility changes are blocked once allocation has moved from a virtual facility to a physical one.
- Pickup facility changes create facility change history records for each affected order item.
- Shipping address updates, pickup changes, and cancellations trigger customer notifications from OMS.
