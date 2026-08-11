---
description: Understand and monitor Shopify order imports after launch.
---

# Shopify order download flows

Use this reference after a Shopify shop is live to identify which order import flow should have processed an order. For initial setup, history reconciliation, and launch validation, follow [Set up HotWax Commerce with Shopify](../../../system-admin/administration/company/product-store-onboarding.md).

## Flow summary

| Flow | Trigger | Purpose |
| --- | --- | --- |
| History | Controlled `sync_ShopifyOrderHistory` windows | Imports eligible open and unfulfilled orders from before launch. |
| Realtime | Configured Shopify `ORDERS_CREATE` and `ORDERS_UPDATED` events through EventBridge and SQS | Processes new orders and supported updates soon after Shopify emits them. |
| Fallback | Recurring shop-specific `queue_ShopifyOrderSync` job | Provides scheduled recovery for eligible orders and updates. |

Monitor each flow independently. A positive result in one flow does not prove that either of the other flows is healthy.

## Historical open-order import

History import is not a complete Shopify order archive. It queries open and unfulfilled orders in controlled `updatedAt` windows. An order can enter a history window because Shopify updated it during that window even when Shopify created it earlier.

For a pre-launch order without synchronization history, HotWax Commerce creates the order only when no OMS order has the same Shopify external ID. If an OMS order already exists, the history flow does not recreate or update it; it seeds synchronization history instead. Newly created historical orders use `needsInventoryIssuance=N`, and unfulfilled ship groups are parked in `GENERAL_OPS_PARKING` until normal processing takes over.

For every history window, retain:

- Exact converted start and end timestamps.
- History Job Run ID.
- `BulkOrderHistoryQuery` `systemMessageId`.
- Terminal `BULK_ORDER_HISTORY` Data Manager result.
- Reconciliation of eligible orders, existing external IDs, and exact-boundary timestamps.

The history query uses exclusive start and end bounds. Validate orders whose `updatedAt` equals a boundary instead of assuming adjacent windows are gap-free. If the cursor advances before a window fails, reset `{shopId}/orderSyncHistory.lastSyncDate` to that run's `syncFromDate` before retrying the bounded window.

## Realtime order import

When the shop is configured for realtime order events, Shopify sends `ORDERS_CREATE` and `ORDERS_UPDATED` through EventBridge to SQS. `consume_ShopifyOrders_SQS` reads the queue, groups order IDs by Shopify shop, fetches the current order, and stages it directly in Data Manager.

Use the same Shopify order ID through this diagnostic chain:

1. Confirm the expected Shopify event and EventBridge-to-SQS delivery.
2. Find the `consume_ShopifyOrders_SQS` Job Run.
3. Find the Data Manager import with `createdByJobRunId` equal to that Job Run ID.
4. When `ShopifyOrderHistory` exists for the shop and Shopify order ID, expect `UPDATE_SHOPIFY_ORDER`; otherwise expect `SYNC_SHOPIFY_ORDER`.
5. Confirm the Data Manager `logId`, terminal result, and resulting OMS order.

Realtime SQS staging does not create a per-order System Message. Do not use a history run, fallback System Message, or fallback batch as proof that realtime processed the order.

## Scheduled fallback import

The recurring shop-specific `queue_ShopifyOrderSync` job processes eligible orders and updates in date windows. It is a recovery path for the realtime integration, not a substitute for controlled pre-launch history import.

Review the job's **Active** state, Quartz schedule, configured [buffer time](buffertimes.md), queued `ShopifyOrderSync` System Message, Job Run, tied import, and terminal Data Manager result. Use **Run now** only for a controlled batch. For schedule operation and recovery, see [Manage Shopify Order Sync](../../../system-admin/administration/company/manage-shopify-order-sync.md).

## Verify a downloaded order

Use the same Shopify order ID throughout the check. Confirm that the OMS order has the intended Product Store, products and quantities, customer and addresses, sales channel, shipping method, payment method, and current status. For an existing OMS order, confirm the flow did not create a duplicate.

If an order is missing, first identify whether it belongs to history, realtime, or fallback processing. Then inspect that flow's earliest missing stage before rerunning work.
