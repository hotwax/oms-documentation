---
description: Apply a facility-level inventory variance using an external facility ID and product identifier.
---

# Update inventory

Use this API when an external application detects an inventory variance. It applies a positive or negative delta to available-to-promise (ATP) and quantity-on-hand inventory for one product at one facility. The updated inventory is available to the order routing engine after the request is processed.

The request identifies the facility and product using the identifiers known to the calling application. It does not require HotWax Commerce internal IDs.

## Endpoint

```http
POST https://<instance-name>.hotwax.io/api/inventory-cycle-count/inventoryAdjustments
Authorization: Bearer <access-token>
Content-Type: application/json
```

Create an integration user with inventory-cycle-count API access before calling this endpoint. See [Authentication](../initial-api-authentication.md).

## Request body

```json
{
  "externalFacilityId": "STORE-101",
  "idType": "SKU",
  "idValue": "TSHIRT-BLK-M",
  "availableDelta": -2,
  "allowNegativeInventory": false,
  "reasonEnumId": "VAR_MANUAL",
  "comments": "Cycle count variance from store app, event 12345"
}
```

| Field | Required | Description |
| --- | --- | --- |
| `externalFacilityId` | Conditional | Facility identifier from the external application. Send this or `facilityId`. |
| `facilityId` | Conditional | HotWax Commerce facility ID. Send this or `externalFacilityId`. |
| `idType` | Conditional | Type of product identifier, such as `SKU` or `UPCA`. Send this with `idValue`, or send `productId`. |
| `idValue` | Conditional | Product identifier value from the external application. |
| `productId` | Conditional | HotWax Commerce product ID. Send this instead of `idType` and `idValue` only when the application already has it. |
| `availableDelta` | Yes | Signed inventory change. Use a positive value to increase inventory and a negative value to decrease it. |
| `allowNegativeInventory` | No | Defaults to `true`. Set to `false` to clamp a negative variance at zero ATP. |
| `reasonEnumId` | No | Inventory variance reason. Defaults to `VAR_MANUAL`; use another configured variance reason when your implementation requires one. |
| `comments` | No | Audit note, such as the external application event ID. |

The endpoint does not accept `locationSeqId`; it adjusts inventory at the facility level.

## Response

On success, the response returns the resolved `facilityId`, `productId`, `inventoryItemId`, and the applied `availableDelta`. The returned values can be used to reconcile the adjustment with the external application.

Requests without a facility identifier, or without either a product ID or product identifier pair, are rejected.

## Retry behavior

This API applies a delta. Retrying the same event without a caller-managed duplicate check applies the delta again. Include the source event ID in `comments` and retry only when the calling application can determine that the original request was not processed.
