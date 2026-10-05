---
description: >-
  Learn the process of complete order cancellation in Shopify and its update in
  HotWax Commerce.
---

# Complete Order Cancellation

## From Shopify cancellation to OMS item status

Canceling an order in Shopify and applying that cancellation in HotWax Commerce are separate steps. The configured integration must import the update, match the OMS order, and process its eligible unfulfilled items. An imported update or successful job run alone does not establish that every OMS item was canceled.

```mermaid
flowchart TD
    accTitle: Shopify cancellation import and eligible OMS items
    accDescr: A Shopify cancellation enters the configured import path and is matched to an OMS order. Eligible unfulfilled items are canceled and their status is verified. Missing or terminal orders, and items that are not eligible, require review rather than assuming cancellation undoes fulfillment.
    A[Order canceled in Shopify] --> B[Import update and match OMS order]
    B --> D{Eligible unfulfilled items?}
    D -->|Yes| E[Cancel eligible items and verify OMS status]
    D -->|No| G[Review order mapping and current item status]
```

### Check the configured import path

| Integration | Cancellation handoff |
| --- | --- |
| Current Moqui Shopify connector | The order-update sync reads Shopify's `cancelledAt` value. Its configured webhook and fallback order-sync paths are described in [Order download](../orders/order-download.md). The fallback job's normal subsequent runs inspect the updated-time window; its first run selects open, unfulfilled or partially fulfilled orders. Do not treat that first run as a historical cancellation backfill. |
| Older dedicated cancellation job | The `cancelShopifyOrders` service fetches Shopify orders with canceled status, using the configured updated-time window or a specific Shopify order ID. It matches the existing OMS order and processes eligible items. |

Use the jobs, subscriptions, date window, and shop configuration that belong to your instance. The schedule in the older illustration below is an example, not a required interval for every integration.

### Verify the cancellation scope

The current Moqui order-update path selects items in `ITEM_CREATED` or `ITEM_APPROVED` status and skips orders already marked completed or canceled. Its item cancellation service skips items already canceled or completed. Completed fulfillment remains distinct from cancellation of the remaining unfulfilled items.

After sync, compare the affected OMS item's status and cancellation history with the Shopify order. Check the order summary separately, especially when other items have already been fulfilled. For a missing update, inspect the configured import path, order mapping, item eligibility, and processing outcome before recovery; do not assume another cancellation request is needed.

<figure><img src="../../.gitbook/assets/shopify-canceled-order-removed-item.jpg" alt="Shopify demo canceled order showing one removed Augusta Pullover Jacket in XS Blue, SKU WJ03-XS-Blue"><figcaption><p>The removed item in an existing canceled Shopify demo order. Verify the matching OMS item and cancellation history separately.</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/download-canceled-orders-job-config.png" alt="Earlier Job Manager interface showing an Import canceled orders job configured to run every 30 minutes"><figcaption><p>An earlier Job Manager cancellation-job configuration. Confirm the integration path and schedule used by your instance.</p></figcaption></figure>
