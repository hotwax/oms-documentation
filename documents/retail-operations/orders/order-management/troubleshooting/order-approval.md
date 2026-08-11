---
description: Diagnose why an order remains unapproved or does not proceed to routing.
---

# Troubleshoot order approval

An order can remain `Created` or `Hold` when a standard approval gate or a deployment-specific policy is not satisfied. Do not assume that every order waits for a universal `Approve Orders` job or that the job runs every 30 minutes.

## Standard checks

Use one order ID and review these checkpoints in order:

| Check | What can block approval |
| --- | --- |
| Order status | Only `Created` and `Hold` orders enter the default approval service. |
| Product Store | Automatic approval is disabled for the Product Store. |
| Order override | The order-level `autoApprove` value is `N`. |
| Payment | A non-COD payment remains `PAYMENT_NOT_RECEIVED` and `APPR_WO_PMNT_CHK` is not enabled. |
| Risk | Pending risk defers approval. An auto-accepted `CANCEL` recommendation cancels the order; otherwise `CANCEL` or `INVESTIGATE` approves it and creates a review task. |
| Review task | A customer-service risk task can block routing even when the order status is `Approved`. |

## Deployment-specific checks

Some implementations add required customer IDs, ERP identifiers, fraud attributes, or custom tags before approval. Confirm the retailer's configured policy before changing an order attribute. `NETSUITE_ORDER_EXPORTED`, `Hold`, and `Approved` are not universal default gates.

If a custom import applies required attributes, trace its Job Run and terminal Data Manager result. For an individual missing value, see [Troubleshoot a missing order attribute](order-attribute-missing.md).

## Shopify orders

For Shopify-specific payment and risk behavior, see [Order approval for fulfillment](../../../../learn-shopify/shopify-integration/orders/order-approval-for-fulfillment.md). If a detected order-level update should have run `update#ShopifyOrder` and re-evaluated approval, trace the realtime `UPDATE_SHOPIFY_ORDER` Data Manager import before rerunning any fallback job.
