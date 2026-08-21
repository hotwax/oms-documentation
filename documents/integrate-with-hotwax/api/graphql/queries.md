---
description: >-
  Worked GraphQL query examples for the HotWax Commerce OMS - point lookups,
  external IDs, filtering, sorting, cursor pagination, and cost tuning.
---

# Query examples

Every example below runs against `POST /rest/s1/graphql`. Send the query as the `query` key of a JSON body and any variables as `variables`, with a Bearer token in the `Authorization` header. Field and root names come from the [schema reference](schema-reference.md).

## Your first query

```bash
curl -X POST 'https://<instance>.hotwax.io/rest/s1/graphql' \
  -H 'Authorization: Bearer <token>' \
  -H 'Content-Type: application/json' \
  -d '{
    "query": "query GetOrder($orderId: ID!) { order(orderId: $orderId) { orderName statusId orderDate grandTotal currencyUomId } }",
    "variables": { "orderId": "10001" }
  }'
```

```json
{
  "data": {
    "order": {
      "orderName": "NN10001",
      "statusId": "ORDER_APPROVED",
      "orderDate": "2026-05-14T09:32:00Z",
      "grandTotal": "129.00",
      "currencyUomId": "USD"
    }
  },
  "extensions": {
    "cost": {
      "requestedQueryCost": 6,
      "actualQueryCost": 6,
      "throttleStatus": { "maximumAvailable": 1000, "currentlyAvailable": 994, "restoreRate": 50 }
    }
  }
}
```

## Looking up an order by external ID

Orders imported from a sales channel can be reached three ways without knowing the OMS `orderId`.

```graphql
# By the externalId column on the order itself
query ByExternalId($externalId: String!) {
  order(externalId: $externalId) { orderId orderName statusId }
}
```

```graphql
# By a typed identification, for example a Shopify order name
query ByIdentification($type: String!, $value: String!) {
  orderByIdentification(identificationTypeId: $type, idValue: $value) {
    orderId orderName statusId
  }
}
```

```graphql
# Or read every identification the order carries
query OrderIds($orderId: ID!) {
  order(orderId: $orderId) {
    orderId
    identifications(first: 10) { orderIdentificationTypeId idValue }
  }
}
```

The same `externalId` argument works on `shipment`, `return`, `facility`, and `party`.

## Order detail in one request

This is the query behind an order detail screen: header, bill-to customer, line-item count, each ship group with its own items, origin address, and shipping method.

```graphql
query OrderDetail($orderId: ID!) {
  order(orderId: $orderId) {
    orderId orderName statusId orderDate grandTotal currencyUomId
    orderItemCount
    billToCustomer { partyId firstName lastName }
    shipGroups(first: 5) {
      edges {
        node {
          shipGroupSeqId facilityId carrierPartyId contactMechId
          shippingMethod { shipmentMethodTypeId description }
          shipFromAddress { address1 city stateProvinceGeoId postalCode latitude longitude }
          orderItems(first: 10) {
            edges { node { orderItemSeqId productId quantity unitPrice statusId } }
          }
        }
      }
    }
    statuses(first: 20) { statusId statusDatetime }
    paymentPreferences(first: 10) { paymentMethodTypeId maxAmount statusId }
  }
}
```

Three things to notice:

* `billToCustomer` returns `firstName` and `lastName` separately. Compose the display name in your own code; the API returns data, not presentation.
* `orderItemCount` is the number of distinct sales-channel order lines, which is not the same as the number of OMS order items when a line has been split across facilities.
* `shipGroups` returns only ship groups that have at least one item. Empty ship groups are dropped.

### The same items, grouped two ways

`order.orderItems` returns every line on the order as one flat collection. `order.shipGroups.orderItems` returns the same rows partitioned by ship group. Pick whichever matches your screen; you do not need both.

```graphql
query ItemsByShipGroup($orderId: ID!) {
  order(orderId: $orderId) {
    shipGroups(first: 10) {
      edges {
        node {
          shipGroupSeqId facilityId
          orderItems(first: 20) { edges { node { orderItemSeqId productId quantity } } }
        }
      }
    }
  }
}
```

## Filtering with `query:`

Collection roots accept a single `query:` string. It is a space-separated list of `key:value` terms, combined with AND.

| Syntax | Comparator | Example |
| ------ | ---------- | ------- |
| `key:value` | equals | `statusId:ORDER_APPROVED` |
| `key:a,b,c` | in | `statusId:ORDER_APPROVED,ORDER_HELD` |
| `key:>value` | greater than | `orderDate:>2026-05-01` |
| `key:>=value` | greater than or equal | `orderDate:>=2026-05-01` |
| `key:<value` | less than | `orderDate:<2026-06-01` |
| `key:<=value` | less than or equal | `orderDate:<=2026-05-31` |

Rules that catch people out:

* **Only declared keys work.** Each root declares its own keys and, per key, which comparators it accepts. The [schema reference](schema-reference.md) lists them. An undeclared key is refused with `FIELD_NOT_FILTERABLE`.
* **Comparators are per key.** `statusId` accepts `eq` and `in` only, so `statusId:>ORDER_APPROVED` is refused with `OPERATOR_NOT_ALLOWED`. Date keys such as `orderDate` accept the four range comparators and **not** equals.
* **It is one string, not a structured argument.** Bind the whole string as a variable rather than trying to pass a filter object.
* **Values are split on the first colon**, so a value may contain colons: `externalId:shopify:4567890` is a single term.
* **Spaces separate terms**, so a value cannot contain a space.

```graphql
query OpenOrders($q: String!) {
  orders(query: $q, sortKey: ORDER_DATE, reverse: true, first: 25) {
    edges { cursor node { orderId orderName orderDate grandTotal statusId } }
    pageInfo { hasNextPage endCursor }
  }
}
```

```json
{
  "q": "statusId:ORDER_APPROVED,ORDER_HELD productStoreId:STORE_1 orderDate:>=2026-05-01"
}
```

### Sorting

Collection roots take `sortKey:` plus `reverse:`. `sortKey` is an enum whose values are listed per root in the [schema reference](schema-reference.md); `reverse: true` flips the direction. There is no multi-key sort.

## Paging with cursors

Collections are Relay-style connections. `first:` or `last:` is **required** on every one of them, root and nested, and the maximum is 100.

Page forward by passing the previous page's `endCursor` as `after`:

```graphql
query OrderPage($q: String!, $after: String) {
  orders(query: $q, sortKey: ORDER_DATE, first: 100, after: $after) {
    edges { cursor node { orderId orderName orderDate } }
    pageInfo { hasNextPage endCursor }
  }
}
```

```javascript
let after = null;
const rows = [];

do {
  const body = await post({ query: ORDER_PAGE, variables: { q, after } });
  if (body.errors?.length) throw new Error(body.errors[0].extensions?.code);

  const conn = body.data.orders;
  rows.push(...conn.edges.map((e) => e.node));
  after = conn.pageInfo.endCursor;

  // pace against the live bucket rather than retrying blindly
  const t = body.extensions.cost.throttleStatus;
  if (t.currentlyAvailable < t.maximumAvailable * 0.2) {
    await sleep(((t.maximumAvailable / 2) - t.currentlyAvailable) / t.restoreRate * 1000);
  }
} while (after && rows.length < LIMIT);
```

Cursors are **keyset** cursors, not offsets. Page 40 costs the same as page 1, and rows are never repeated or skipped as long as you follow `endCursor`. To page backwards, use `last:` with `before:` and the page's `startCursor`.

`pageInfo.hasNextPage` is the authoritative signal that there is more data. Use it rather than comparing the row count to the page size.

## Inventory levels

`inventoryLevels` returns available-to-promise and quantity-on-hand for each configured product and facility pair. Unstocked or depleted combinations return `0`, never `null`.

```graphql
query Levels($q: String!, $after: String) {
  inventoryLevels(query: $q, sortKey: PRODUCT_ID, first: 100, after: $after) {
    edges { cursor node { productId facilityId availableToPromise quantityOnHand } }
    pageInfo { hasNextPage endCursor }
  }
}
```

```json
{ "q": "facilityId:MAIN_WAREHOUSE" }
```

To check a specific set of products, pass them as one `in` term: `productId:SKU_1,SKU_2,SKU_3`. Because a page returns at most 100 rows, chunk longer ID lists.

## Keeping a query inside budget

Nested collections multiply, and that is the only real difference from writing REST calls. This query looks reasonable and is refused before it reaches the database:

```graphql
query TooBig($orderId: ID!) {
  order(orderId: $orderId) {
    orderId orderName statusId orderDate grandTotal currencyUomId
    orderItemCount
    billToCustomer { partyId firstName lastName }
    shipGroups(first: 10) {
      edges { node {
        shipGroupSeqId facilityId carrierPartyId contactMechId
        shippingMethod { shipmentMethodTypeId description }
        shipFromAddress { address1 city stateProvinceGeoId postalCode latitude longitude }
        orderItems(first: 20) { edges { node { orderItemSeqId productId quantity unitPrice statusId } } }
      } }
    }
  }
}
```

```json
{
  "errors": [
    {
      "message": "query cost 1366 exceeds max 1000",
      "extensions": { "code": "COST_EXCEEDED", "estimatedCost": 1366, "maxCost": 1000 }
    }
  ],
  "data": null
}
```

Here is where the 1366 comes from:

| Selection | Arithmetic | Cost |
| --------- | ---------- | ---- |
| 6 scalar fields on the order | 6 × 1 | 6 |
| `orderItemCount` | aggregate field | 5 |
| `billToCustomer` and its 3 fields | 1 + 3 | 4 |
| Each ship group's own fields | 4 + (1 + 2) + (1 + 6) | 14 |
| `orderItems` inside each ship group | 20 × (1 + 5) | 120 |
| One ship group node | 14 + 120 | 134 |
| `shipGroups` | 10 × (1 + 134) | 1350 |
| The `order` object itself | 1 | 1 |
| **Total** | | **1366** |

Dropping the two page sizes to `shipGroups(first: 5)` and `orderItems(first: 10)` brings the same query to **431**, well inside the budget, and returns everything a detail screen renders. The lever is almost always a nested page size, not the field list, because scalars cost 1 and collections cost a multiple.

Two habits that keep queries cheap:

* **Request the page size the screen shows.** A panel that renders five ship groups should ask for five, not fifty.
* **Split unrelated work.** Two queries of cost 400 are cheaper than one of 1400, and they can run in parallel.

Read `extensions.cost.requestedQueryCost` while you develop. It is the number the budget is checked against, and it tells you how much headroom a query has before it breaks.

## Handling errors

```javascript
const body = await post({ query, variables });

if (body.errors?.length) {
  const code = body.errors[0].extensions?.code;

  switch (code) {
    case 'THROTTLED': {
      const t = body.extensions.cost.throttleStatus;
      await sleep((body.extensions.cost.requestedQueryCost - t.currentlyAvailable) / t.restoreRate * 1000);
      return retry();
    }
    case 'COST_EXCEEDED':
    case 'FIRST_TOO_LARGE':
    case 'DEPTH_EXCEEDED':
      // A query-shape problem. Retrying will not help; reduce the query.
      throw new Error(`GraphQL query too large: ${body.errors[0].message}`);
    default:
      throw new Error(`GraphQL error ${code}: ${body.errors[0].message}`);
  }
}
```

`THROTTLED` is the only code worth retrying unchanged. Every other code describes a problem with the query itself, and the same query will be refused again.
