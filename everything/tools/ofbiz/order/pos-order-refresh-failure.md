---
description: >-
  Investigate a POS order refresh failure without deleting order records or
  replaying an import before the existing outcome is understood.
---

# POS Order Refresh Failure

Use this guide when a Shopify point-of-sale (POS) order refresh fails or the OMS record does not reflect the expected Shopify state. First establish the exact order, failed operation, and installed integration. A status difference does not by itself mean that the order should be cancelled or re-imported.

**Scope:** These are read-only support checks. No refresh, cancellation, record deletion, or re-import was executed to validate this article. Recovery depends on the deployed integration, the order's lifecycle, and any downstream records already created.

{% hint style="warning" %}
Do not cancel an order, delete its `OrderItem`, `OrderHeader`, or `OrderIdentification` records, or re-import it merely to force a status refresh. Those changes can remove history and links, affect reservations or fulfillment, and cause duplicate downstream processing. A direct entity-deletion sequence is not a general POS recovery procedure.
{% endhint %}

## 1. Identify The Failed Operation

Record the following in the approved support channel:

- Environment, installed integration version, and incident time with time zone
- Shopify order identifier and the matching OMS order identifier
- Order source/channel and whether this is a completed in-store sale or an order requiring later fulfillment
- Current order and line-level states in each system, including quantities, cancellations, refunds, and fulfillment identifiers when relevant
- The refresh/import job or service, its execution time, and the exact sanitized error
- Any prior retries, manual changes, exports, ERP records, or customer notifications

Confirm the order mapping before interpreting the error. Preserve the first failed attempt and current state; repeated refresh attempts can make the sequence harder to reconstruct.

## 2. Interpret The Error Without Assuming A Fix

A previously documented error is:

`Could not complete the createOrderContactMech process: The following required parameter is missing: [createOrderContactMech.contactMechId]`.

The message identifies a missing required contact-mechanism identifier in that attempted operation. It does not, by itself, establish why the value is missing, prove that the customer's shipping address is absent, or justify deleting the order.

Have the integration owner inspect the authorized source input, order/contact mapping, and the failing service's expected fields. Distinguish an absent source value from a mapping, processing, or lifecycle problem. Keep addresses and other personal information out of public examples and attach only a minimal sanitized excerpt to the support record.

## 3. Reconcile The Existing Outcome

Before choosing recovery, establish whether the attempt:

1. Failed before any order change
2. Changed part of the OMS state before reporting an error
3. Completed but failed to return or refresh the expected confirmation
4. Triggered a downstream export, fulfillment, billing record, inventory effect, or notification

Use the order's existing history and the integration's actual execution records. A missing screen result, a failed browser response, or an empty saved search is not sufficient evidence that nothing was created.

For the wider Shopify/OMS/ERP status comparison, use [Fulfillment Status Troubleshooting](../../shopify/fulfillment-status-troubleshooting.md). Confirm the deployed POS posting model before expecting an ERP invoice or item-fulfillment record.

## 4. Plan A Targeted Recovery

Ask the order/integration owner to approve the smallest supported recovery after the first failing stage is known. The plan should identify:

- The exact order and operation, with the relevant source/mapping correction
- Existing OMS and downstream records that must be preserved
- Duplicate-processing and inventory/financial effects to check
- The supported retry or repair mechanism for the installed version
- Recovery arrangements and a verification plan for each affected system

If the outcome of a previous attempt is uncertain, reconcile it before retrying. Do not treat editing identifiers, cancelling a record, or recreating an order as a harmless diagnostic step. A successful retry is only one checkpoint: verify the intended order and line state, record linkage, quantities, and any affected downstream outcome without creating a second transaction.

## Escalation Evidence

Provide the identifiers through a restricted channel, incident timeline, current state, failed service/job, sanitized error, source/mapping findings, and whether partial or downstream effects were found. State what remains unknown instead of claiming that a generic cancellation-and-reimport sequence will resolve the issue.
