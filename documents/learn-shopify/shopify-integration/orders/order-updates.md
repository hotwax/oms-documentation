---
description: Learn how HotWax Commerce detects and applies supported Shopify order updates.
---

# Order updates

When Shopify order events are configured, EventBridge routes `ORDERS_UPDATED` events to SQS. HotWax Commerce fetches the current Shopify order and stages supported changes through the `UPDATE_SHOPIFY_ORDER` Data Manager configuration.

## How changes are detected

HotWax Commerce does not store and compare the complete Shopify order JSON. It stores selected scalar values and deterministic hashes in `ShopifyOrderHistory`. On a later event, it compares the current values and hashes, prepares the supported update payload, and refreshes the synchronization history after processing.

Depending on the released bridge version and granted Shopify scopes, detected changes can include:

- Contact information, notes, tags, customer data, and shipping or billing addresses.
- Payment terms, outstanding totals, and cancellation status.
- Newly observed line items.
- Fulfillments, returns, refunds, and transactions through their dedicated processing paths.

This is not a guarantee that every Shopify edit is applied in place. In particular, do not rely on arbitrary in-place quantity increases or decreases, or line removal, without validating that exact edit flow against the deployed bridge version.

## Shopify order tags

Shopify tags are synchronized as internal OMS order notes. The released default does not treat literal `Hold` or `Approved` tags as approval or allocation gates.

Default approval uses Product Store auto-approval, payment state, and Shopify risk data. A merchant-specific tag-gated workflow requires separate customization and should be documented as that deployment's policy.

## Diagnose a missing update

1. Confirm Shopify emitted the expected update event.
2. Find the `consume_ShopifyOrders_SQS` Job Run for the shop.
3. Find the `UPDATE_SHOPIFY_ORDER` Data Manager log tied to `createdByJobRunId`.
4. Review the terminal result and supported-change payload.
5. Confirm the latest `ShopifyOrderHistory` values and the OMS order state.

For the complete ingestion paths, see [Shopify order download flows](order-download.md).
