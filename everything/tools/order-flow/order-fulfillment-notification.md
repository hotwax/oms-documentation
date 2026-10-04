---
description: >-
  Trace shipment and line fulfillment notifications from HotWax Commerce to
  Shopify and distinguish scheduled processing from confirmed delivery.
---

# Order Fulfillment Notification

A completed fulfillment in HotWax Commerce and its fulfillment record in Shopify are separate checkpoints. The notification flow sends the applicable fulfillment details, including tracking where available, to Shopify. Do not assume that a change in one system has already been accepted by the other.

**Verification scope:** This guide follows the documented HotWax Commerce Shopify integration flow and Shopify connector release `v4.4.0`, reviewed on October 3, 2026. It is not a runtime test or a promise that every deployment uses the same jobs, schedule, or component version. Confirm the installed connection and implementation with the integration owner.

## Understand The Notification Flow

The documented flow has these stages:

1. The relevant shipment or order lines are fulfilled through the HotWax Commerce Fulfillment App, or their fulfillment information is received from the responsible external system.
2. The eligible shipped-shipment and fulfilled-line information enters the configured notification flow. Whole-order completion is not a universal prerequisite for a partial fulfillment update.
3. The configured notification route collects or processes the applicable fulfillment information. Confirm its installed job or service and schedule; feed polling, direct message processing, and missed-fulfillment recovery can use different paths. A job name copied from another release may not identify the active route.
4. The integration retrieves the associated Shopify fulfillment orders and line details, then submits the applicable fulfillment request.
5. Shopify returns a fulfillment result or errors. Inspect the resulting record and line quantities to establish whether the order is fully or partially fulfilled.

The collection schedule, queue processing, API response, and any retries all affect timing. There is no universal real-time delivery guarantee. A successful scheduler run or submitted message is not, by itself, confirmation that Shopify accepted every fulfillment line.

## Investigate A Missing Or Delayed Update

Keep the investigation read-only until the integration owner approves a specific recovery.

1. Confirm the environment, shop, order mapping, affected line items, quantities, and expected fulfillment location.
2. Check the source fulfillment state and event time. Distinguish completed shipping, partial fulfillment, cancellation, and a transaction that uses a different POS or external-fulfillment path.
3. Identify the actual notification job and configured schedule. Review its latest relevant execution, selection window, and any backlog or error; do not run it simply to test connectivity.
4. Trace the corresponding message or processing record, where the installed integration provides one. Confirm that its order/line scope matches the incident.
5. Check the Shopify response and resulting fulfillment identifiers, quantities, and tracking details. A partial result can legitimately leave the order partially fulfilled.
6. Locate the first stage without confirmed success and give that evidence to its owner. Reconcile an uncertain previous outcome before retrying to avoid duplicate fulfillment or notifications.

For Maarg execution evidence, use [Service Jobs](../maarg/service-jobs.md) and [System Messages](../maarg/system-messages.md). These screens do not replace the actual Shopify result. Do not apply Maarg job instructions to an OFBiz job or another integration implementation without checking its own controls.

## Keep ERP And Billing Status Separate

Shopify fulfillment, OMS completion, an ERP sales order, an ERP item fulfillment, and an invoice are different records and lifecycle stages. Some POS deployments use a Cash Sale path instead of a sales-order/fulfillment/invoice sequence.

Use [Fulfillment Status Troubleshooting](../shopify/fulfillment-status-troubleshooting.md) to compare the systems, identify the expected posting model, and collect evidence. Do not manually mark an order fulfilled or create an ERP record just to make status labels match.

## Verify An Approved Recovery

After the owner carries out the supported correction or retry, check the specific order and affected lines in both systems. Confirm the resulting fulfillment, correct quantities, tracking when expected, and absence of an unintended duplicate. Review any configured notification effects separately. Preserve a sanitized timeline and the actual result rather than closing the incident solely because a job completed.
