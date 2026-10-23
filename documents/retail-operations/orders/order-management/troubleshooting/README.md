# Troubleshoot OMS orders

Find the order and confirm its Product Store, identifiers, item status, and fulfillment location before changing it. These guides cover OMS and integration procedures; some actions take place outside the Order Manager app.

| Problem | What to check |
| --- | --- |
| An order is missing from an Order Manager list | Start with [Find orders](../find-sales-orders.md) and review the active search and filters. |
| A Shopify order is missing from OMS | Check the connection, import scope, and run history in [Manage Shopify Order Sync](../../../../system-admin/administration/company/manage-shopify-order-sync.md). |
| An order remains in Created status | Review [Order Approval Errors](order-approval.md) and the approval requirements configured for the order. |
| A required order attribute is missing | Follow [Order Attribute Missing](order-attribute-missing.md) to inspect the source value and its import path. |
| Search results show a different status from the order details | Follow [Order Status Discrepancy](order-status-discrepancy.md). |
| An order is absent from a search index | Follow [Order Indexing Discrepancy](order-indexing-discrepancy.md), using the affected order ID to limit the operation. |

Record the HotWax order ID and Shopify order ID separately. After a correction, reopen the order and repeat the original search to confirm the result. Check whether an order already exists before retrying its import.
