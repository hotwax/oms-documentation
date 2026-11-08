---
description: Reconcile NetSuite transfer-line closure, shipped quantities, receipts, and OMS status before considering recovery.
---

# Reconcile Transfer Closure And Receipts

Use this guide when a NetSuite transfer line is closed while OMS still shows work, or when a partially shipped line becomes cancelled and the remaining delivery cannot be received. Establish which action occurred and which quantities were saved before trying to make the statuses match.

Keep the investigation read-only. Do not reopen or cancel lines, receive again, post an adjustment, edit a cursor, or replay a file as a diagnostic test.

{% hint style="info" %}
**Source scope:** Reviewed on November 8, 2026 against NetSuite connector 3.3.11, Poorti 3.3.9, and OMS 3.3.8. The latest published Maarg distribution, 6.3.24, declares that NetSuite version as optional; its default suite does not include it. A declared version or seeded job does not establish an installed integration, enabled producer, schedule, or historical backfill. The authorized demo reached sign-in only, so the behavior below is source-verified, not runtime-tested.
{% endhint %}

## 1. Identify The Line And Direction

Record the environment, installed versions, transfer type/status flow, source and destination facilities, observation time, and time zone. Confirm the intended direction with the integration owner:

| Observed action | Separate path to investigate |
| --- | --- |
| A warehouse transfer line was closed in NetSuite | NetSuite-to-OMS line-cancellation import |
| Fulfillment was closed in OMS after a partial shipment | OMS fulfillment closure and its configured status transition |
| OMS receiving was completed but NetSuite still differs | Receipt export and the separate completion/discrepancy feeds |
| A store-transfer item was cancelled in OMS | OMS-to-NetSuite cancellation feed |

Do not treat these paths as interchangeable meanings of "close." Identify the actual service/configuration from the existing job, import, message, or file evidence.

Keep the NetSuite transfer internal ID, external line ID, OMS order ID, and OMS item sequence ID together. A matching SKU alone is insufficient. In the reviewed warehouse-cancellation import, the NetSuite order and line values resolve against `OrderHeader.externalId` and `OrderItem.externalId`. The separate receipt import resolves the order through `NETSUITE_ORDER_ID`. Successful lookup in one path does not prove that the other path has the same mapping.

Use [Service Jobs](../maarg/service-jobs.md), [Data Manager Imports](../maarg/data-manager-imports.md), and [System Messages](../maarg/system-messages.md) to follow existing records. Where an authorized specialist needs record-level evidence, use the read-only guidance in [Entity Inspection](../maarg/entity-inspection.md). Do not edit records through these tools.

## 2. Reconcile Quantities Before Status

For each affected line, compare the same units and time window:

- Original ordered quantity and any later quantity changes
- OMS shipped quantity, backed by shipments in `SHIPMENT_SHIPPED`
- NetSuite fulfillment quantity and references
- Saved OMS receipts, their dates, accepted and rejected quantities separately, and shipment/line links
- NetSuite item receipts and their line-level quantities
- OMS cancelled quantity, item status/history, and order-header status
- Physically arrived units and any previous corrections or returns

An order header summarizes multiple lines. Check every affected line; one closed or cancelled item does not establish that the whole order should be completed or cancelled.

**Example:** Ten units were ordered, six are confirmed in OMS shipments with status `SHIPMENT_SHIPPED`, and two were already received. With no other changes, four units are unshipped and four of the shipped units remain to be reconciled as receipts. Cancelling the four unshipped units does not receive the other four or reverse the two saved receipts. These quantities are illustrative, not instructions to post a correction.

## 3. A NetSuite Closed Line Becomes Cancelled In OMS

The reviewed warehouse-cancellation service:

1. Resolves an existing transfer order and its external line ID.
2. Skips a supplied `closed` value that is not true. An omitted/null value is accepted by this service, so inspect the actual configured input rather than assuming a missing column prevents cancellation.
3. Sums the line's OMS shipped quantity and calculates the unshipped remainder.
4. When the remainder is positive, saves it as `cancelQuantity` and records a positive newly cancelled difference as an item-change record.
5. Requests reservation cancellation and a transition of the **item** to `ITEM_CANCELLED`, subject to the OMS status-transition rules.

An already-cancelled item returns without recalculating its cancellation quantity. This path does not create a receipt for shipped goods. It also is not the same action as closing fulfillment in OMS.

Inspect the resulting item status, status/change history, and saved receipts independently. A status-transition failure or an out-of-order shipment import requires investigation of the actual result; the example calculation is not a guarantee that a particular import committed.

The reviewed configuration is `NS_TO_WH_CANCEL_ITEM`, described as **NetSuite Warehouse Transfer Order Item Close Import**. Its pickup job, `import_NetSuiteWhTransferOrderCancellation`, is seeded paused and without a remote assignment. Its presence in source does not establish that NetSuite produces the file, OMS picks it up, or older closures have been processed. Confirm the installed route and observed processing history before claiming that closure synchronization is active or retroactive.

### Why Another Receipt Attempt May Not Resolve It

The reviewed Poorti receipt service rejects an existing cancelled or completed item. After resolving the required identifiers, the NetSuite receipt-import wrapper instead skips lines already in those states and can return without receiving anything when no eligible lines remain.

Consequently, distinguish an error from a skipped/no-op result. A receipt-import run without a recorded error is not proof that the affected line gained a receipt. Compare the specific line with saved receipt records before any further action.

Preserve prior submission details and use [Receiving Discrepancies](../launchpad/receiving/README.md#a-receive-action-failed-or-timed-out) when the outcome of an earlier receive request is uncertain. Do not bypass a cancelled status, create a replacement line, or receive in another system to test whether it works.

## 4. OMS Fulfillment Closure Uses A Different Status Flow

The reviewed OMS fulfillment-closure path also calculates the unshipped remainder, but chooses the next item status from the transfer's configured status flow. It does not unconditionally apply the NetSuite import's cancelled status.

Inspect the actual flow and transition history. A fulfill-and-receive transfer can need receiving after fulfillment closes; a fulfill-only flow has different completion rules. Do not apply one transfer type's status expectation to another, or infer physical receipt from a completed fulfillment stage.

The transfer's header outcome is evaluated from its items. Keep fulfillment, receiving, cancellation, and order completion as separate checks.

## 5. An Outbound File Does Not Establish NetSuite Closure

When the direction is OMS to NetSuite, identify the specific feed and its selection evidence:

| Reviewed feed | Selection or output boundary |
| --- | --- |
| Completed-transfer-item feed | Requires a completed OMS order and excludes the fulfill-only flow. An individually completed line on an open order is insufficient. Its rows carry `hcClosed`. |
| Cancelled-transfer-item feed | Uses `TO_Fulfill_And_Receive` or `TO_Fulfill_Only` status flows and cancellation history. Its rows carry `closed`. It requires a specific order or a dated start point; the normal job cursor supplies that start point when configured. |
| Saved-receipt export | Requires linked shipment/item records, an outbound transfer shipment with an external ID, and no prior receipt-export history. Its selector does not exclude a receipt merely because the order or item is now cancelled/completed. |
| Completed-order discrepancy feed | Requires `ORDER_COMPLETED`, a fulfill-and-receive or receive-only flow, a NetSuite order identification, and no prior per-line reconciliation history. A cancelled order is outside this selection. |

The completed feed's specific-order filter still combines with an effective completion-date filter. Do not assume that selecting an old order bypasses a cursor. The cancelled feed has different order-versus-date selection behavior; do not copy one feed's recovery parameters to the other.

Confirm the selected records, generated file, delivery result, and NetSuite record-level processing independently. Preserve the exact field names: a downstream processor's interpretation of `hcClosed` and `closed` must be checked in the installed integration. File generation or upload alone does not establish a standard NetSuite closure, a receipt, or a corrected balance.

Receipt-export history is recorded during feed generation, before the message is queued. The discrepancy feed can record line history even when no discrepancy row is sent. Neither history alone establishes a NetSuite receipt or adjustment; inspect the actual output and destination result.

If a saved receipt predates the shipment import, inspect its existing order/line/shipment links. Receipt reconciliation is a separate operation from creating another receipt. Ask the owner to establish what is already saved before approving any reconciliation or export.

## 6. Escalate With A Bounded Recovery Plan

Provide the integration owner with:

- Transfer direction, installed versions, configured status flow, and actual import/export route
- Correlated order/line IDs and the quantity comparison above
- Chronological shipment, receipt, cancellation, and status-change evidence
- Job/run, import/message, and file references with the first meaningful error or skip reason
- Current cursor/selection evidence and the independently checked NetSuite outcome
- Any uncertain receipt, previous retry, manual adjustment, or other correction

Keep identifiers and operational evidence in an approved private support channel. Remove credentials, personal information, private URLs, and unrelated records from screenshots and logs.

Before a correction, the responsible owner should agree the exact lines and quantities, verify no previous or concurrent operation already applied them, and approve the operation and downstream checks. A later release, enabled job, successful rerun, or matching status alone does not establish that historical shipments and receipts were reconciled.
