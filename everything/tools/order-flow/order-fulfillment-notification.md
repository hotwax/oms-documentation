---
description: >-
  Trace shipment and line fulfillment notifications from HotWax Commerce to
  Shopify and distinguish scheduled processing from confirmed delivery.
---

# Order Fulfillment Notification

A completed fulfillment in HotWax Commerce and its fulfillment record in Shopify are separate checkpoints. The notification flow sends the applicable fulfillment details, including tracking where available, to Shopify. Do not assume that a change in one system has already been accepted by the other.

**Verification scope:** This guide follows the documented HotWax Commerce Shopify integration flow and Shopify connector release `v4.4.0`, reviewed on October 3, 2026. It is not a runtime test or a promise that every deployment uses the same jobs, schedule, or component version. Confirm the installed connection and implementation with the integration owner. The released queued-fulfillment section below has its own October 7, 2026 source scope.

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

## Inspect The Released Queued-Fulfillment Path

This section was source-reviewed on October 7, 2026 for Shopify connector **4.4.1 and 4.4.2**, included in Maarg **6.4.1 and 6.4.2**, respectively. Both reviewed compositions include Maarg-util **4.4.1** and OFBiz-OMS-USL **4.4.1**. These are release-source baselines, not confirmation of an environment's installed components, configuration, or fulfillment outcome.

In this native OMS path, the `SHIPMENT_SHIPPED` feed requests `post#ShopifyFulfillment` with `queueOnly=true`. A successful queue request creates a `CreateShopifyFulfillment` message; it does not establish that Shopify received the fulfillment. The dedicated sender processes eligible messages oldest first with `mode=sync`. Default MDM replay and REST calls retain their synchronous send path, so first identify which route handled the shipment.

Keep these checks read-only:

1. **Check the shop's opt-in.** The feed and missed-fulfillment sweep both require `ShopifyShopSetting` `SHPFY_FULFILL_SYNC=true`. A missing or false setting can cause a shipment to be skipped without a feed error. Record the setting and ask the integration owner to confirm the intended behavior.
2. **Locate the actual queue record.** Correlate the shipment, order, shop, message ID, and request time. If no message exists, inspect eligibility, mappings, and feed errors before diagnosing a sender backlog. Running a sender cannot establish why a request was never queued.
3. **Inspect the dedicated sender.** The released seed and upgrade data define `send_CreateShopifyFulfillmentProducedSystemMessages` as paused. Check its current paused state, run history, parameters, queue depth, and oldest waiting message. Its shipped two-minute schedule and limit of 50 messages per run are configuration defaults, not an end-to-end deadline or guaranteed throughput.
4. **Check the other senders.** The standard generic sender excludes `CreateShopifyFulfillment`. Identify installed jobs by their service and parameters when job names differ. Ask the administrator to verify the effective service implementation and component versions; another sender or an older override can change processing behavior.
5. **Preserve an existing Shopify result.** A message can have `remoteMessageId` while still `SmsgProduced` after Shopify returned a fulfillment ID but OMS write-back failed. The reviewed sender can use that saved ID to resume without another fulfillment-creation request. Verify the Shopify record, `Shipment.externalId`, history, and later message outcome separately. A saved ID does not guarantee that the next attempt will finish.
6. **Interpret the recovery sweep separately.** Its shipped ten-minute `bufferTime` excludes recent shipments when no explicit end time is supplied. This is a selection buffer, not a delivery promise. Check the actual window, opt-in, backlog, and result before concluding that a shipment was missed.

Do not unpause jobs, change filters or retry settings, reset messages, replay fulfillment, or enable a second delivery path during diagnosis. For an error or uncertain outcome, reconcile the existing Shopify fulfillment and saved message ID before the owner approves recovery. Do not assume that `SmsgError`, a timeout, or missing OMS write-back proves that Shopify created nothing.

## Keep ERP And Billing Status Separate

Shopify fulfillment, OMS completion, an ERP sales order, an ERP item fulfillment, and an invoice are different records and lifecycle stages. Some POS deployments use a Cash Sale path instead of a sales-order/fulfillment/invoice sequence.

Use [Fulfillment Status Troubleshooting](../shopify/fulfillment-status-troubleshooting.md) to compare the systems, identify the expected posting model, and collect evidence. Do not manually mark an order fulfilled or create an ERP record just to make status labels match.

## Verify An Approved Recovery

After the owner carries out the supported correction or retry, check the specific order and affected lines in both systems. Confirm the resulting fulfillment, correct quantities, tracking when expected, and absence of an unintended duplicate. Review any configured notification effects separately. Preserve a sanitized timeline and the actual result rather than closing the incident solely because a job completed.
