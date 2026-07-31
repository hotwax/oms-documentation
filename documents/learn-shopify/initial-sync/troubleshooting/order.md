---
description: Troubleshoot order synchronization between HotWax Commerce and Shopify.
---

# Order Sync

## Scenario: An order is missing from HotWax Commerce

First identify which order-import flow should have processed the order. See [Shopify order download flows](../../shopify-integration/orders/order-download.md) for the difference between history, realtime, and scheduled fallback imports.

1. In Shopify Admin, search for the exact order ID. Confirm the order exists and record its creation time, latest update time, order status, and fulfillment status.
2. Classify the order:
   - **History:** an eligible open and unfulfilled pre-launch order in a controlled `updatedAt` window.
   - **Realtime:** a newly created or updated order expected through the `ORDERS_CREATE` or `ORDERS_UPDATED` EventBridge and SQS path.
   - **Fallback:** an eligible update expected in a scheduled `queue_ShopifyOrderSync` batch.
3. Trace the selected flow from its first stage:
   - For history, check the exact window bounds, history job run, `BulkOrderHistoryQuery` `systemMessageId`, and terminal `BULK_ORDER_HISTORY` result.
   - For realtime, check the event, queue delivery, consumer read, system message, import, and Data Manager result.
   - For fallback, check the shop-specific job's **Active** state, schedule, queued system message, job run, import, and Data Manager result.
4. Retry only the failed flow. If a history window failed after its cursor advanced, reset the cursor to that failed window before retrying. Use **Run now** for fallback only with a controlled batch.
5. If the earliest missing stage cannot be recovered, send support the Shopify order ID, shop ID, timestamps, flow, job-run and system-message identifiers, and terminal error. Do not send customer or payment data.

For initial history setup or launch recovery, return to [Set up HotWax Commerce with Shopify](../../../system-admin/administration/company/product-store-onboarding.md). For fallback scheduling and recovery, use [Manage Shopify Order Sync](../../../system-admin/administration/company/manage-shopify-order-sync.md).

## Scenario: Order Available in HotWax Commerce but stuck in Created state

If you observe an order stuck in the `created` status for an extended period, it's advisable to examine the sales channel associated with the order. If the order originates from the web sales channel, consulting the [`Order Approval`](../../shopify-integration/orders/order-approval-for-fulfillment.md) troubleshooting document can provide valuable insights into resolving the issue.

However, if the order originates from the POS channel, it's crucial to verify its status directly on Shopify. Occasionally, orders are marked fulfilled in Shopify after some time, but if the HotWax Commerce import job runs in the meantime, the order might be marked as fulfilled on Shopify but remain stuck in the `created` status within HotWax Commerce.

### Solution: Verification at Shopify

1. Log in to the Shopify admin portal and locate the specific order that requires updates.
2. Click on the Shopify Order ID to view orders on the Shopify Admin panel.
3. Review the order details to check the status of the order.
   - If the order is fulfilled in Shopify, follow these steps to mark the order `completed` in HotWax Commerce.

### Order Refresh in HotWax Commerce

1. Access the View Sales Order page in HotWax for the identified order. Click on the "refresh order" button to initiate the order refresh process.
2. When the refresh button is clicked, HotWax generates a new version of the order and cancels the current one.
3. Go back to the View Sales Order Page and select "Completed" and "Canceled" statuses from the order status filter dropdown.
4. Verify that the new version of the order is created in HotWax and that it reflects the correct status from Shopify. The old version of the order will be marked `canceled` with the tag `old version`.
