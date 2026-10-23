---
description: >-
  Diagnose cancellation, refund, and restock outcomes separately and avoid duplicate
  financial actions when Shopify and OMS disagree.
---

# Cancellation And Refund Troubleshooting

Use this guide when an OMS cancellation appears in Shopify but the customer has not been refunded, a refund exists without the expected cancellation status, or an operator has already refunded manually. It covers outbound OMS-initiated cancellations, not return receiving, exchanges, or ERP settlement.

**Verification scope:** Source-verified on October 22, 2026 against Shopify connector v4.5.4 cancellation services, feed receivers, and v4.4.0 migration instructions shipped in that source. The latest published Maarg distribution reviewed was v6.5.3: its active manifest pins Shopify connector v4.5.4 in the production oms-suite. Publication or a manifest entry does not prove installation. The hosted demo reached only Login, so installed versions, authenticated navigation, refund execution, and recovery behavior were not runtime-verified. No transaction was executed for this guide.

## Before You Start

- Confirm the environment, installed connector version, correct Shopify shop and OMS product store. Older integrations can use different settings and job routes.
- Use authorized read access to the order and its payment history in Shopify, the corresponding OMS order and lines, and the relevant Maarg diagnostic tools.
- Establish whether this is a partial line cancellation, a full-order cancellation, or a Shopify-originated action being imported into OMS.
- Identify the business owner for refunds and the integration owner for recovery. A diagnostic finding does not authorize moving money or changing shop-wide policy.

{% hint style="warning" %}
Keep this investigation read-only. Do not refund, cancel again, toggle refund processing, replay a message, or reset history to make the labels agree. A timeout or missing acknowledgement does not prove that Shopify rejected the operation. Manual and automated actions can overlap.
{% endhint %}

## 1. Separate The Three Outcomes

| Outcome | Evidence To Inspect | What It Does Not Prove |
| --- | --- | --- |
| Cancellation | Current order and line cancellation state and quantities in both systems | That money was refunded |
| Financial refund | Shopify refund transactions, their amounts, currencies and statuses, and the approved payment-provider reconciliation | That inventory was restocked or a full order was cancelled |
| Restock | Inventory change at the intended Shopify location and the applicable restock policy | That the customer received money |

In the reviewed implementation, a Shopify refund object can be created with line items but **no financial transactions** when refund processing is off. A refund record or cancellation-success history is therefore not sufficient evidence of a monetary refund. Inspect the transactions, not only a top-level label.

For unrelated fulfillment or ERP invoice differences, use [Fulfillment And Invoice Status Troubleshooting](fulfillment-status-troubleshooting.md).

## 2. Check The Shop's Refund Policy Without Changing It

The reviewed connector reads the shop-specific **Process Refund on Cancellation** setting, identified as `SHPFY_PROC_REFUND` in `co.hotwax.shopify.ShopifyShopSetting`. The migration instructions identify `Y` as enabling refund processing; an unset setting leaves it off. This gates the financial part of the cancellation, not whether the cancellation event is eligible to synchronize.

1. Open the correct shop in the authorized shop-administration interface. Labels differ by app/version; do not assume a similarly named control in another integration has the same meaning.
2. Have the integration administrator confirm the effective setting for that exact shop, including whether it is absent. If necessary, use the read-only entity procedure below rather than saving a form.
3. Compare the effective value with the approved business policy. If they differ, record the discrepancy for the owner; do not enable it as a test.
4. If behavior changed after an upgrade, ask the deployment owner to verify the version-specific migration. The reviewed migration moved this policy from legacy columns into the shop-setting record. A legacy value or another shop's setting is not proof of the effective value.

This guide does not prescribe migration SQL or a configuration change. Correcting future policy does not itself resolve a historical order that already has cancellation or refund history.

### Authorized Entity Inspection

Open **Tools > Entity > Entities > Entity List**, or the deployment's authorized equivalent. Follow [Entity Inspection And Relationships](../maarg/entity-inspection.md): filter the catalog by entity name, check **Package** and **Entity Name**, open **Detail** to confirm fields and keys, then use **Entity Find / Find Options / Find** with exact identifiers. Menu placement depends on the installed version and permissions.

| Entity | Narrow Filters | Fields Or Evidence To Inspect |
| --- | --- | --- |
| `co.hotwax.shopify.ShopifyShopSetting` | `shopId` and `settingTypeEnumId = SHPFY_PROC_REFUND` | `settingValue`; whether a matching row exists |
| `co.hotwax.shopify.ShopifyShopOrder` | Known OMS `orderId` and relevant `shopId` | Mapped `shopifyOrderId`; ensure both systems refer to the same order |
| `co.hotwax.integration.order.OrderCancelHistory` | `externalConfigId` for the shop and `orderId`; add line/change ID when applicable | `orderItemSeqId`, `orderItemChangeId`, `statusId`, `createdDate` |
| `co.hotwax.integration.order.OrderCancelErrorHistory` | Same shop/order and affected line/change where applicable | Error `comments` and time; these can be truncated, so correlate with the original response |

Use **Find**, not **New Value**, **Create**, **Update**, **Delete**, or schema controls. If access is denied, ask the authorized administrator; do not switch to SQL or another interface to bypass it. Keep record identifiers and private error details in approved internal support channels, not public documentation.

## 3. Follow The Correct Cancellation Path

### Partial Line Cancellation

The reviewed item-event receiver skips non-sales orders, orders already fully cancelled, unmapped shops, Shopify-originated cancellation events, and matching successful cancellation history. It groups eligible changes by order before sending them.

The push service requires mapped Shopify order and line identifiers. Missing OMS lines, missing Shopify line identifiers, and nonpositive eligible quantities can leave lines unpushed. Inspect **processed**, **failed**, and **skipped** counts together; a completed feed is not proof that every line was sent.

For repeated partial cancellations, also compare the current cancelled quantity with the actual outbound payload: the reviewed service derives quantity from the current OMS line rather than receiving an event-specific quantity delta. A change ID alone does not validate the quantity sent.

A successful item-history match is scoped to shop, order, line, and change ID. Do not delete that history to force another send, and do not assume it protects a separate manual refund or direct service call.

### Full-Order Cancellation

The reviewed order-event receiver has a separate history check, using `orderItemSeqId = _NA_` for an order-level success. The push service selects eligible cancelled lines, excluding Shopify-originated changes and lines with successful outbound cancellation history, then requests line-level refund/restock processing before requesting order cancellation. The second request uses the same refund policy for remaining captured amounts, such as shipping, and does not request another restock. Reconcile both requests and any remaining order-level financial outcome; success of the first does not prove completion of the second.

Shopify order cancellation is asynchronous in this implementation. An accepted request or successful receiver result is **not final confirmation** that cancellation and refund processing completed. Confirm the destination order and transactions, then the inbound reconciliation into OMS.

The full-order service can also return without sending a request when no eligible lines remain or required mappings are absent. The receiver may count this as processed and write SUCCESS history, so verify that an outbound request exists before treating the result as asynchronous acceptance. Investigate prior actions rather than repeatedly forcing the full-order path.

## 4. Locate The First Unconfirmed Step

Use [Service Jobs](../maarg/service-jobs.md), [System Messages](../maarg/system-messages.md), and [Data Manager Imports](../maarg/data-manager-imports.md) only where they belong to the installed route. Start with the affected order's actual event and execution; do not assume a generic job name or fixed processing delay.

| Observation | Read-Only Diagnosis | Safe Next Step |
| --- | --- | --- |
| Cancellation appears, but no monetary refund transaction exists | Check effective refund policy, original response, and whether processing was intentionally nonfinancial | Ask the business owner to confirm the intended financial outcome before any correction |
| Refund processing is enabled, but no confirmed refund exists | Inspect suggested-refund calculation, request/response, Shopify user errors, payment state, and existing transactions | Escalate the first verified failure; enabled policy does not guarantee a successful refund |
| Receiver reports success but Shopify is not yet cancelled | Distinguish asynchronous acceptance from destination completion and inbound acknowledgement | Track the specific operation and current destination state; do not submit another cancellation |
| No outbound action is visible | Check shop/order/line mappings, cancellation origin, eligible quantities, skipped counts, and prior success history | Classify an intentional skip separately from a missing prerequisite or error |
| Refund exists but inventory did not increase at the expected location | Check restock exclusions, preorder/backorder classification, and shop-to-facility location mapping | Investigate inventory separately; do not issue another refund to repair stock |
| A manual refund or uncertain timeout is involved | Reconcile destination transactions and previous automated attempts, including pending work | Treat the outcome as unresolved until the financial and integration owners agree on the remaining action |

The source checks transport/response failures and Shopify user errors separately. Preserve a redacted summary of the original error and its time. A successful HTTP response alone does not establish business success.

## 5. Understand Restock Exceptions

Financial refund and restock are independently constructed. In the reviewed source:

- Membership in the active facility restock-exclusion group selects no-restock for this outbound request.
- Applicable preorder or backorder classification can select no-restock; explicit preorder exclusion affects preorder handling.
- A missing shop-to-facility Shopify location mapping falls back to no-restock rather than failing the refund.

These are diagnostic checks, not instructions to change catalog membership, location mappings, or inventory. Verify the installed behavior and approved business policy before deciding whether an observed no-restock outcome is wrong. Use [Inventory Comparison](../order-flow/inventory-comparison.md) for inventory and reservation timing.

## 6. Reconcile Before Any Manual Refund Or Retry

1. Record what was cancelled, which lines and quantities were affected, and the original event time with time zone.
2. Inspect all related Shopify refund transactions and their current statuses, including manual actions, amounts and currencies. Do not assume a missing OMS history row proves there was no external transaction.
3. Correlate cancellation history, errors, outgoing requests and any queued or in-flight work. A local failure can occur after a remote side effect.
4. Establish the remaining outcome: cancellation only, a still-owed financial adjustment, inventory correction, or acknowledgement repair. Avoid treating them as one repair.
5. Have the business and integration owners approve the precise target and amount, if any, and a bounded recovery procedure. Any coordination needed to prevent overlapping automated work belongs to that approved procedure.
6. After an approved action, verify the destination result, affected quantities, transaction amount/currency/status, inventory outcome where applicable, and subsequent OMS reconciliation. Retain unresolved exceptions rather than closing on matching status labels alone.

The reviewed path contains history-based skip checks, but this is **not a guarantee that arbitrary replay, a direct service call, or a manual refund is idempotent**. The guide deliberately provides no executable retry or refund steps.

## Escalation Checklist

Share through the approved private support channel:

- Installed connector version, shop and store, incident time and time zone
- Cancellation origin and partial-line versus full-order scope
- Correlated order, line, change, message/run and destination operation identifiers
- Effective refund-policy value and approved expected outcome
- Processed/failed/skipped counts, cancellation-history state and redacted error summary
- Existing manual and automated refunds, pending/unknown outcomes, and the financial owner's reconciliation
- First unconfirmed step, responsible owner and business deadline

Remove customer details, payment information, credentials, private endpoints and raw payloads from screenshots or broadly shared reports.

## Verification And Remaining Coverage

The source review establishes branch logic, setting lookup, history filters, error handling and asynchronous acceptance. It does not establish payment-provider settlement, deployment-specific schedules, UI permissions, installed versions, or safe recovery in an environment.

Authenticated read-only walkthroughs and isolated, approved tests for policy-off/on, partial/full cancellation, pending transactions, manual-refund overlap, missing mappings and acknowledgement failure remain separate acceptance work. Do not run these cases against live customer orders.
