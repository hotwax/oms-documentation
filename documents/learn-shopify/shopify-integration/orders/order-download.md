---
description: Understand and monitor Shopify order imports after launch.
---

# Shopify order download flows

Use this reference after a Shopify shop is live to identify which order import flow should have processed an order. For initial setup, history reconciliation, and launch validation, follow [Set up HotWax Commerce with Shopify](../../../system-admin/administration/company/product-store-onboarding.md).

## Flow summary

| Flow | Trigger | Purpose |
| --- | --- | --- |
| History | Controlled `sync_ShopifyOrderHistory` windows | Imports eligible open and unfulfilled orders from before launch. |
| Realtime | Shopify `ORDERS_CREATE` and `ORDERS_UPDATED` events through EventBridge and SQS | Processes new orders and later order updates soon after Shopify emits them. The create event provides a direct path for high-volume order creation. |
| Fallback | Recurring shop-specific `queue_ShopifyOrderSync` job | Provides a scheduled recovery path for eligible order updates. |

Monitor each flow independently. A positive result in one flow does not prove that either of the other flows is healthy.

## Historical open-order import

History import is not a complete Shopify order archive. It queries open and unfulfilled orders in controlled `updatedAt` windows. An order can therefore enter a history window because Shopify updated it during that window, even when Shopify created it earlier.

For an order that does not already exist in HotWax Commerce, `createdAt < newOrderSync.launchDate` determines whether it is created as historical work. Existing orders are updated rather than recreated. Historical pre-launch orders use `needsInventoryIssuance=N`, and their unfulfilled ship groups are parked in `GENERAL_OPS_PARKING` until normal processing takes over.

For every history window, retain:

- Exact converted start and end timestamps.
- History job-run identifier.
- `BulkOrderHistoryQuery` `systemMessageId`.
- Terminal `BULK_ORDER_HISTORY` Data Manager result.
- Reconciliation showing that eligible orders were created, existing orders were not duplicated, and adjacent windows have no gap or overlap.

If a window fails after the history cursor advances, reset the cursor to the failed window before retrying it.

## Realtime order import

Shopify emits `ORDERS_CREATE` when an order is created and `ORDERS_UPDATED` when an order changes. Listening to the create event gives new orders a direct realtime path during high-volume order creation. EventBridge routes both event types to SQS, and `consume_ShopifyOrders_SQS` reads each queued message. HotWax Commerce uses the Shopify order identifier to request the current order data and then creates or updates the order.

When diagnosing realtime import, trace one Shopify order through the event, queue delivery, consumer read, system message, import, and Data Manager result. Do not use a history run or fallback batch as proof that the realtime path processed that order.

## Scheduled fallback import

The recurring shop-specific `queue_ShopifyOrderSync` job processes eligible order updates in scheduled batch windows. It is a recovery path for the realtime integration, not a substitute for the controlled pre-launch history import.

Review the job's **Active** state, Quartz schedule, queued system message, job run, tied import, and Data Manager result. Use **Run now** only for a controlled batch. For schedule operation and recovery, see [Manage Shopify Order Sync](../../../system-admin/administration/company/manage-shopify-order-sync.md).

## Verify a downloaded order

Use the same Shopify order identifier throughout the check. Confirm the HotWax Commerce order has the intended Product Store, products and quantities, customer and addresses, sales channel, shipping method, payment method, and current status. For an existing HotWax Commerce order, confirm the flow updated the order without creating a duplicate.

If an order is missing, first identify whether it belongs to history, realtime, or fallback processing. Then inspect that flow's earliest missing stage before rerunning work.
