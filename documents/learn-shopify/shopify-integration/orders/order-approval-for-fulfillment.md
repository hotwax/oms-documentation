---
description: Understand the current OMS checks that approve Shopify orders for fulfillment.
---

# Order approval for fulfillment

New nonterminal Shopify orders are evaluated for approval during creation. Approval is re-evaluated when `update#ShopifyOrder` runs for a detected order-level update, such as changed risk or supported header data. Fulfillment-, refund-, or transaction-only processing does not necessarily invoke that update service. Some lines, such as digital or other non-shipping items, can import as `Completed` and do not follow the same fulfillment path.

Approval and routing are separate checkpoints. Successful approval changes an eligible order to `Approved` and triggers reservation. Routing can still be blocked by a review task or another configured operational rule.

## Default approval checks

The released OMS evaluates these conditions:

1. The order is in `Created` or `Hold` status.
2. The Product Store allows automatic approval.
3. The order does not have an order-level automatic-approval opt-out.
4. Payment is acceptable. Unless the Product Store setting `APPR_WO_PMNT_CHK` disables this check, a non-COD payment preference in `PAYMENT_NOT_RECEIVED` blocks approval.
5. Shopify risk evaluation is no longer pending.

The released default does not scan generic Riskified `approved` tags, and the source does not define a universal 30-minute `Approve Orders` schedule.

## Risk outcomes

| Risk state or recommendation | Default outcome |
| --- | --- |
| Pending assessment | Defer approval. |
| No intervention or accepted risk | Continue approval. |
| `CANCEL` with automatic acceptance enabled | Cancel the order. |
| `CANCEL` without automatic acceptance, or `INVESTIGATE` | Approve the order and create a customer-service review task that blocks routing until resolved. |

Actual auto-accept settings and custom risk policy are Product Store or deployment configuration.

## Troubleshoot an unapproved order

Use one order ID and check the gates in order:

1. Confirm the current order and item statuses.
2. Check Product Store automatic approval and the order-level `autoApprove` value.
3. Inspect payment preferences, payment statuses, and `APPR_WO_PMNT_CHK`.
4. Inspect the stored Shopify risk level and recommendation.
5. Identify any deployment-specific attribute, fraud, or tag policy.
6. If a retry job is configured, verify its actual service, **Active** state, and Quartz schedule rather than assuming a default cadence.

## Approved but not routing

A non-auto-accepted `CANCEL` recommendation or an `INVESTIGATE` recommendation can leave the order `Approved` while a customer-service review task blocks routing. Check and resolve that task according to the retailer's review policy.

For a cross-channel checklist, see [Troubleshoot order approval](../../../retail-operations/orders/order-management/troubleshooting/order-approval.md).
