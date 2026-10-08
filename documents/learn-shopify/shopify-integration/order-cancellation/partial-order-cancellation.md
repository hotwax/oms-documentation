---
description: >-
  Learn how to handle partial order cancellations in Shopify and their updates
  in HotWax Commerce.
---

# Partial Order Cancellation

Partial cancellation removes a subset of an order's unfulfilled items or quantities. Other items can remain open or may already be fulfilled. Check the affected lines and quantities rather than using the order's overall status as proof of cancellation.

## Importing the update

OMS order sync processes Shopify refund details and distinguishes cancellation from returns and refunds without line items. Refund line details, return context, restock type, and unfulfilled quantities determine the processing path. When the outcome is cancellation, OMS matches the refund line IDs and quantities to eligible unfulfilled items.

See [Order download](../orders/order-download.md) for the order-sync entry paths. Confirm the affected shop, order and line identifiers, import window, and latest processing result before recovery.

## Verifying the affected items

In OMS, cancellation processing selects matching items in `ITEM_CREATED` or `ITEM_APPROVED` status. Completed items are excluded from that cancellation pool. A refund amount by itself does not establish that an item was canceled; refund line details, return context, and fulfillment state determine the processing path.

Compare the Shopify line quantities with the affected OMS item statuses and cancellation history. Check the other lines and the overall order separately: canceling one item does not establish that the whole order was canceled. See the [cancellation eligibility diagram](complete-order-cancellation.md#from-shopify-cancellation-to-oms-item-status) for the import, matching, and verification steps.

If the affected items remain open, check the import window, order and line mapping, eligibility, and processing outcome before recovery. Keep cancellation of unfulfilled quantities separate from the return of completed quantities.

