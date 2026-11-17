---
description: Create future inventory in HotWax Commerce from NetSuite, and resolve the HotWax product ID and facility ID the request needs.
---

# Create future inventory

Use this API to add expected supply to HotWax Commerce from another system, such as NetSuite. Each request creates one future inventory batch: a quantity of one product, expected at one facility on a promise date. HotWax Commerce sells the batch as pre-order or back-order inventory and publishes the change to your sales channels, the same way it handles future inventory created from a purchase order.

If HotWax Commerce already imports the purchase order from NetSuite, don't call this API for it. HotWax Commerce creates that future inventory from the purchase order itself. Use this API for supply that doesn't reach HotWax Commerce as a purchase order.

The request uses HotWax Commerce IDs for the product and the facility. NetSuite stores its own IDs, so a NetSuite script looks up both HotWax Commerce IDs first. This page covers the two lookups and then the create request.

{% hint style="info" %}
The create request and the product lookup are available in OMS releases after November 17, 2026. Ask your HotWax Commerce team to confirm your instance has them.
{% endhint %}

## Before you start

* Create an integration user and token. See [Authentication](../initial-api-authentication.md). Every request on this page sends `Authorization: Bearer <access-token>`.
* The product exists in HotWax Commerce with its NetSuite internal ID. The NetSuite product sync stores it as the `NETSUITE_PRODUCT_ID` identification.
* The NetSuite location is mapped to a HotWax Commerce facility. The facility's `externalId` holds the NetSuite location internal ID.
* The facility is linked to the product store that sells the pre-order. Future inventory at a facility counts only for the stores linked to that facility.

## Step 1: Resolve the HotWax product ID

Look up the product by its NetSuite item internal ID.

```http
GET https://<instance-name>.hotwax.io/rest/s1/oms/products/identifications?goodIdentificationTypeId=NETSUITE_PRODUCT_ID&idValue=<netsuite-item-internal-id>
Authorization: Bearer <access-token>
```

Response:

```json
[
  {
    "productId": "M174625",
    "goodIdentificationTypeId": "NETSUITE_PRODUCT_ID",
    "idValue": "174625",
    "fromDate": 1793461024873
  }
]
```

Use `productId` from the response.

* Skip rows with a `thruDate` in the past. Those identifications have ended.
* The same product can return more than one row. Use the result when every remaining row has the same `productId`.
* An empty list means the item hasn't synced to HotWax Commerce. Don't create the future inventory until it has.
* Rows with different `productId` values mean two HotWax Commerce products share the NetSuite ID. Stop and correct the product data.

To look up by SKU instead, send `goodIdentificationTypeId=SKU` and the SKU as `idValue`.

## Step 2: Resolve the HotWax facility ID

Look up the facility by its NetSuite location internal ID.

```http
GET https://<instance-name>.hotwax.io/rest/s1/oms/facilities?externalId=<netsuite-location-internal-id>
Authorization: Bearer <access-token>
```

Response:

```json
[
  {
    "facilityId": "MAIN_WH",
    "facilityName": "Main Warehouse",
    "facilityTypeId": "WAREHOUSE",
    "externalId": "1"
  }
]
```

Use `facilityId` from the response. Expect exactly one facility. An empty list means the NetSuite location isn't mapped to a HotWax Commerce facility.

Product and facility IDs rarely change. You can store them on the NetSuite records after the first lookup instead of looking them up on every request.

## Step 3: Create the future inventory

```http
POST https://<instance-name>.hotwax.io/rest/s1/oms/futureInventoryItems
Authorization: Bearer <access-token>
Content-Type: application/json
```

```json
{
  "productId": "M174625",
  "facilityId": "MAIN_WH",
  "futureInventoryItemTypeId": "FIT_PRE_ORDER",
  "quantity": 5,
  "promiseDate": "2026-12-20T00:00:00-08:00",
  "externalId": "NS-PO-4521-3"
}
```

| Field | Required | Description |
| --- | --- | --- |
| `productId` | Yes | HotWax Commerce product ID from step 1. Kits aren't supported. |
| `facilityId` | Yes | HotWax Commerce facility ID from step 2. |
| `futureInventoryItemTypeId` | Yes | `FIT_PRE_ORDER` for pre-order supply or `FIT_BACK_ORDER` for restock supply. |
| `quantity` | Yes | Expected quantity. Must be greater than zero. |
| `promiseDate` | Yes | Date the supply is expected. Send ISO 8601 with a time zone offset. Without an offset, HotWax Commerce reads the date in the instance's time zone. |
| `externalId` | Recommended | Your reference for this supply, unique for each supply line in NetSuite. HotWax Commerce uses it to recognize a retry. |

A promise date in the past creates the batch as expired. It adds nothing to available-to-promise (ATP) inventory.

### Response

```json
{
  "futureInventoryItemId": "M100612",
  "created": true
}
```

Store `futureInventoryItemId` on the NetSuite record. `created` is `true` when this request created the batch.

## Retries

The request is safe to retry when it carries the same `externalId`.

* A repeat request with the same `externalId` and the same values returns the existing batch with `"created": false`. Nothing is added twice.
* A repeat request with the same `externalId` but a different quantity, promise date, product, facility or type is rejected with: `Future inventory already exists for this source with different creation values; use the update flow.`
* Without `externalId`, HotWax Commerce keeps one batch for each product, facility and type. A later request for the same product, facility and type returns that batch instead of creating another.

This API creates batches only. It doesn't change or cancel a batch.

## Errors

Errors return HTTP 400 with the reason in `errors`.

| Message | Cause |
| --- | --- |
| `Product [<id>] not found.` | The `productId` doesn't exist. Repeat step 1. |
| `Facility [<id>] not found.` | The `facilityId` doesn't exist. Repeat step 2. |
| `A valid future inventory item type is required.` | `futureInventoryItemTypeId` isn't `FIT_PRE_ORDER` or `FIT_BACK_ORDER`. |
| `Kit future inventory is not supported.` | The product is a kit. |
| `Value entered (0) is less than or equal to 0` | `quantity` is zero or negative. |
| `Field cannot be empty` | A required field is missing. |

A request without valid credentials returns HTTP 403.

## Example: NetSuite SuiteScript

This SuiteScript 2.1 sketch shows the three calls. It's an outline: add your own token storage, logging and error handling.

```javascript
/**
 * @NApiVersion 2.1
 */
define(['N/https'], (https) => {
    const BASE = 'https://<instance-name>.hotwax.io/rest/s1/oms';

    const call = (method, path, token, body) => {
        const options = {
            url: BASE + path,
            headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' }
        };
        if (body) options.body = JSON.stringify(body);
        const response = method === 'POST' ? https.post(options) : https.get(options);
        const result = JSON.parse(response.body);
        if (response.code !== 200) throw new Error(result.errors || ('HotWax returned ' + response.code));
        return result;
    };

    const productIdFor = (token, itemId) => {
        const now = Date.now();
        const rows = call('GET', '/products/identifications?goodIdentificationTypeId=NETSUITE_PRODUCT_ID&idValue='
            + encodeURIComponent(itemId), token).filter((row) => !row.thruDate || row.thruDate > now);
        const ids = [...new Set(rows.map((row) => row.productId))];
        if (ids.length !== 1) throw new Error('Item ' + itemId + ' matches ' + ids.length + ' HotWax products');
        return ids[0];
    };

    const facilityIdFor = (token, locationId) => {
        const rows = call('GET', '/facilities?externalId=' + encodeURIComponent(locationId), token);
        if (rows.length !== 1) throw new Error('Location ' + locationId + ' matches ' + rows.length + ' HotWax facilities');
        return rows[0].facilityId;
    };

    const createFutureInventory = (token, { itemId, locationId, quantity, promiseDate, externalId }) =>
        call('POST', '/futureInventoryItems', token, {
            productId: productIdFor(token, itemId),
            facilityId: facilityIdFor(token, locationId),
            futureInventoryItemTypeId: 'FIT_PRE_ORDER',
            quantity: quantity,
            promiseDate: promiseDate,
            externalId: externalId
        });

    return { createFutureInventory };
});
```
