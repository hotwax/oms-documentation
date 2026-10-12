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

### Import the cancellation

OMS order sync reads Shopify's `cancelledAt` value and processes eligible items on the matching OMS order. Its webhook and fallback order-sync entry paths are described in [Order download](../orders/order-download.md).

The fallback job's normal subsequent runs inspect the updated-time window. Its first run selects open, unfulfilled or partially fulfilled orders; do not use that first run as a historical cancellation backfill.

Confirm the affected shop, order identifiers, import window, and latest processing result before recovery. An imported update alone does not prove that eligible OMS items were canceled.

### Verify the cancellation scope

The OMS order-update path selects items in `ITEM_CREATED` or `ITEM_APPROVED` status and skips orders already marked completed or canceled. Its item cancellation service skips items already canceled or completed. Completed fulfillment remains distinct from cancellation of the remaining unfulfilled items.

After sync, compare the affected OMS item's status and cancellation history with the Shopify order. Check the order summary separately, especially when other items have already been fulfilled. For a missing update, inspect the configured import path, order mapping, item eligibility, and processing outcome before recovery; do not assume another cancellation request is needed.

<figure><img src="../../.gitbook/assets/shopify-canceled-order-removed-item.jpg" alt="Shopify demo canceled order showing one removed Augusta Pullover Jacket in XS Blue, SKU WJ03-XS-Blue"><figcaption><p>The removed item in an existing canceled Shopify demo order. Verify the matching OMS item and cancellation history separately.</p></figcaption></figure>

