---
description: >-
  Fetch nested OMS data in a single request with the read-only GraphQL API.
  Endpoint, authentication, response envelope, and the query cost limits.
---

# GraphQL API

The GraphQL API is a read-only query layer over the HotWax Commerce OMS data model. A single request can return an order, its line items, its ship groups, each ship group's origin address and shipping method, and the bill-to customer, instead of the five or six REST calls the same screen needs today.

It is modeled on the Shopify Admin GraphQL API: a curated schema, cursor-based pagination, a `query:` search string, and a query cost budget. Field names are the OMS data model names you already know from the REST APIs, and IDs are raw entity keys.

## What it is not

* **It does not write.** There are no mutations. Every create, update, and cancel stays on the existing REST APIs.
* **It is not entity access.** Only the objects and edges declared in the schema can be reached. If a field is not in the [schema reference](schema-reference.md), it cannot be queried, and there is no way to reach it by nesting.
* **It is not a search engine.** Filtering is exact-match on a fixed set of declared keys. Full-text search, facets, and relevance ranking stay on the existing Solr-backed APIs.

## Endpoint

| Method | Path | Authentication |
| ------ | ---- | -------------- |
| `POST` | `https://<instance>.hotwax.io/rest/s1/graphql` | Bearer token required |
| `GET` | `https://<instance>.hotwax.io/rest/s1/graphql/sdl` | None |

The `POST` endpoint executes queries. The `GET /sdl` endpoint returns the schema definition language (SDL) for the exact schema that instance is running, and needs no token, so you can point tooling at it before you have credentials. See [Keeping the reference current](self-documenting-schema.md).

### Authentication

The `POST` endpoint uses the same Bearer token as every other HotWax API. See [Authentication](../initial-api-authentication.md) for how to generate one.

```
Authorization: Bearer <token>
Content-Type: application/json
```

Access is granted per user group on the `/graphql` REST path. If your integration user is authenticated but receives an authorization failure, its user group has not been granted access to the GraphQL artifact group yet.

### Request body

```json
{
  "query": "query GetOrder($orderId: ID!) { order(orderId: $orderId) { orderName statusId } }",
  "variables": { "orderId": "10001" },
  "operationName": "GetOrder"
}
```

`query` is required. `variables` and `operationName` are optional.

## Response envelope

Every response carries up to three top-level keys.

| Key | Meaning |
| --- | ------- |
| `data` | The result tree, shaped exactly like the query. `null` when the query was refused. |
| `errors` | Present only when something went wrong. Each entry has a `message` and an `extensions.code`. |
| `extensions` | Always present on an executed query. Carries `cost`, including the live rate-limit state. |

```json
{
  "data": {
    "order": {
      "orderName": "NN10001",
      "statusId": "ORDER_APPROVED",
      "grandTotal": "129.00",
      "billToCustomer": { "partyId": "CUST_88", "firstName": "Jordan", "lastName": "Lee" }
    }
  },
  "extensions": {
    "cost": {
      "requestedQueryCost": 12,
      "actualQueryCost": 12,
      "throttleStatus": { "maximumAvailable": 1000, "currentlyAvailable": 988, "restoreRate": 50 }
    }
  }
}
```

{% hint style="warning" %}
**A refused query still returns HTTP 200.** GraphQL reports failure in the body, not the status line. Check for a non-empty `errors` array on every response. Error handling that only looks at the HTTP status, or at the `_ERROR_MESSAGE_` key used by the REST APIs, will read a refused query as an empty success.
{% endhint %}

### Value formats

| GraphQL type | Serialized as | Example |
| ------------ | ------------- | ------- |
| `ID`, `String` | JSON string | `"10001"` |
| `Int` | JSON number | `2` |
| `Decimal` | JSON **string** | `"129.00"` |
| `DateTime` | ISO-8601 string | `"2026-05-14T09:32:00Z"` |

Money **and** quantities are `Decimal` and arrive as strings, so no precision is lost in transit. Parse them with a decimal-safe library rather than casting to a float.

## Error codes

Errors carry a stable `extensions.code` you can branch on. All of these are decided **before** the query touches the database, so a refused query costs nothing and changes nothing.

| Code | Meaning | Fix |
| ---- | ------- | --- |
| `FIRST_REQUIRED` | A connection was requested without `first:` or `last:` | Add a page size |
| `FIRST_TOO_LARGE` | A page size above the maximum of 100 | Request at most 100 and page |
| `COST_EXCEEDED` | The query's estimated cost is over the budget of 1000 | Reduce nested page sizes, or select fewer nested collections |
| `DEPTH_EXCEEDED` | More than 6 levels of object nesting | Split into two queries |
| `FIELD_NOT_FILTERABLE` | A `query:` key that is not declared for that root | Use a declared search key |
| `OPERATOR_NOT_ALLOWED` | A comparator the key does not accept | Use an accepted comparator |
| `THROTTLED` | The caller's cost budget is exhausted | Back off and retry |
| `MALFORMED_QUERY` | A `query:` term that is not `key:value` | Fix the search string |
| `DEADLINE_EXCEEDED` | The request ran past its wall-clock budget | Narrow the query |

```json
{
  "errors": [
    {
      "message": "comparator '>' not allowed on search key 'statusId' (allowed: eq, in)",
      "extensions": { "code": "OPERATOR_NOT_ALLOWED", "key": "statusId", "allowed": ["eq", "in"] }
    }
  ],
  "data": null
}
```

## Limits

Two independent limits protect the OMS: a per-query ceiling and a per-caller rate limit. Both are denominated in the same **cost** number.

| Limit | Default | Effect |
| ----- | ------- | ------ |
| Maximum query cost | 1000 | A single query above this is refused with `COST_EXCEEDED` |
| Maximum page size | 100 | `first:` and `last:` above this are refused, on root **and** nested collections |
| Maximum nesting depth | 6 | Object nesting only; `edges` and `node` do not count |
| Rate limit bucket | 1000 credits | Refills at 50 credits per second |

Cost is estimated from the shape of the query, not from how many rows come back:

* A scalar field costs **1**.
* A single object costs **1 + the cost of its selection**.
* A collection costs **its page size × (1 + the cost of one node)**. Nested collections therefore **multiply**.
* An aggregate field such as `orderItemCount` costs **5**.
* Filtering on a key that is not index-backed, such as `statusId` or `orderDate`, adds **50**.

The practical rule: **ask for the page size you actually need.** Requesting `first: 10` on ship groups and `first: 20` on each ship group's items costs over 1300 and is refused; `first: 5` and `first: 10` returns the same screen's worth of data for 431. [Query examples](queries.md) works through the arithmetic.

### Rate limiting

Each caller has a credit bucket. Every executed query debits its cost; the bucket refills continuously. A query that the bucket cannot cover is refused with `THROTTLED` and is **not** charged, so a throttled caller never falls further behind.

Every response reports the live bucket, so a client can pace itself instead of guessing:

```json
"throttleStatus": { "maximumAvailable": 1000, "currentlyAvailable": 412, "restoreRate": 50 }
```

To recover 500 credits at a `restoreRate` of 50, wait 10 seconds. Integrations that page through large result sets should read `currentlyAvailable` after each page and pause when it runs low, rather than retrying blindly.

Limits can be raised for a specific integration user, so a nightly bulk sync does not have to run inside the interactive default. Raise that with your HotWax contact rather than working around the limit with many small queries.

## When to use GraphQL instead of REST

| Use GraphQL when | Use the REST APIs when |
| ---------------- | ---------------------- |
| You need a parent and its children together | You need one flat collection |
| You are making several dependent calls and joining them in your own code | You are writing data |
| You want to page deeply through a large result set with stable cursors | You need text search, facets, or relevance |
| You want only a few fields from a wide object | You need an object or field the schema does not expose |

## Next steps

* [Query examples](queries.md) — pagination, filtering, sorting, external-ID lookups, and cost tuning.
* [Schema reference](schema-reference.md) — every object, field, edge, search key, and sort key currently available.
* [Keeping the reference current](self-documenting-schema.md) — how the schema reference is generated from the running instance.
