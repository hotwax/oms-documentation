---
description: >-
  Check receiving-history freshness, partial receipts, and uncertain results
  without duplicating inventory or closing outstanding items.
---

# Investigate Receiving Discrepancies

Use this guide when the physical delivery, the Receiving App, and a connected inventory system show different quantities. First establish what was received and saved. A closed transfer order, a completed app action, and a receipt in another system are separate observations.

## Before You Start

- Confirm the OMS environment, Product Store, receiving facility, app version, and incident time with its time zone.
- Identify whether the record is a transfer order, purchase order, or return. Their receiving and closing actions differ.
- Have an authorized operator confirm the physical count and whether another device or associate is receiving the same transfer.
- Record the quantity entered and any confirmation or error before changing the screen. Keep any unsaved work intact.

Keep the investigation read-only. Receiving, closing items, adding products, changing settings, and posting inventory adjustments require the normal operational approval for that action.

## Open The Correct Order And History

These steps use Receiving App v4.2.2. Confirm access to the Receiving App and the correct destination facility before investigating. Ask an administrator to resolve missing access; do not change permissions for this check.

1. Open **Receiving → Transfer Orders**, confirm the facility, and search for the transfer. Check **Open** and **Completed** before treating a missing result as a missing order. The list is scoped to the selected receiving facility; use **Load more transfer order** if additional results remain.
2. Open the transfer and confirm its OMS order reference and affected line. Compare **All**, **Open**, and **Received and completed** where those tabs are available. An order or line can leave an open view after completion.
3. Select the clock icon in the detail header for **History** across the order. On a pending line, the **received** quantity chip opens history for that order line. Repeated occurrences of the same product can be separate lines; a line-specific view is not the whole product's history. Use header history when the line control is unavailable after completion.
4. Note which scope you opened and read the fields below. Closing and reopening the History dialog alone does not fetch fresh history in this release.

| History field in v4.2.2 | How to interpret it |
| --- | --- |
| Product image | A visual aid, not a reliable line identifier. This release does not display product names or SKUs in each history row; correlate the line from order details. |
| Receiver | The associate's resolved name, or login identifier when a name is unavailable; it is not the product name. |
| Received / rejected | Quantities reported for that history entry. Compare them with saved order totals and the attempted submission, not just the number of rows. |
| Date and time | A formatted receipt time using the app's configured time zone, without a zone label. Record the zone separately; a dash means no receipt timestamp was supplied. |

History is a display of receipt data, not an editable receipt ledger. The reviewed OMS response groups accepted quantities by receipt time and line context; a displayed row is not a unique raw receipt ID. Normal transfer-receipt history is fetched through multiple pages, while separately fetched mis-shipped items have a 200-record limit. Do not use the visible row count to certify a complete raw audit or assume every supplemental entry is present.

## Compare The Right Quantities

For each affected transfer-order line, record:

| Quantity | Meaning |
| --- | --- |
| Ordered | Units requested on the transfer order |
| Fulfilled | Units issued for the transfer |
| Previously received | Units already saved in earlier receipts |
| Entered now | Units entered for the current receipt |
| Physically present | Units counted in the delivery being processed |

In the Receiving App, inspect the `Receive by fulfillment` setting without changing it. When enabled, transfer-order receiving uses fulfilled quantity as its target. Otherwise it uses ordered quantity. The current entry is added to previously received quantity when the app evaluates progress and discrepancies.

For example, if four units were received earlier and three new units arrived, the new receipt is three units. Entering seven would count the earlier four again. Use this comparison to review the operator's entry; do not submit a correction until the saved receipt history is understood.

The per-line `Receive All` control in v4.2.2 fills the remaining expected quantity for the item. Later source uses the label `Scan all`. Neither control establishes how many units physically arrived. Inspect the entered quantity without selecting the control during an investigation.

## Only Part Of The Delivery Has Arrived

The transfer-order `Save progress` flow receives the entered quantities and leaves unfinished items open. Fully received items can close automatically. `Receive and complete` is a closing action, with discrepancy review when received totals differ from the target.

If more units are expected later, the operator should use the approved partial-receiving process rather than close the short line to make it disappear. Entering zero as part of completion is not a deletion or cancellation, and it is not a safe way to hide a duplicate or already-received transfer.

Purchase orders have their own `Receive` and `Receive And Close` actions. Do not apply transfer-order closing instructions to purchase orders or returns.

### When The App Shows Shipment And Box Filters

The separately reviewed later source provides `All shipments` and individual box filters; these controls are absent from v4.2.2. Where the installed build supports them, a box filter narrows the pending lines shown, while entered quantities remain totals for the current receipt across boxes. Selecting another box does not create a separate quantity counter for the same order line.

If the same line occurs in two boxes, compare the accumulated entry with the actual total counted so far. Review every affected line and entered quantity before an approved closing action, then read the confirmation scope and any discrepancy list. A discrepancy list is not a complete list of affected lines. Do not assume that a box selection means “close this package only” or proves that all units for the selected lines have arrived.

If shipment contents or product identifiers are still loading, wait for the existing read to finish. A scan that cannot find an item in the selected box is not evidence that the product is absent from the catalog. Inspect the box selection and line identity before scanning again.

## A Receive Action Failed Or Timed Out

{% hint style="warning" %}
A lost response does not prove that the inventory update failed. Do not repeat `Save progress`, `Receive`, or `Receive and complete` simply because the screen did not refresh.
{% endhint %}

1. Preserve the action, approximate submission time and time zone, facility, affected lines, entered quantities, displayed result, and any work still on screen. Coordinate with the receiving operator so that no other device continues the same transfer.
2. Compare the prior attempt with [fresh history and saved quantities](#check-history-freshness-before-retrying). A generic error, re-enabled button, or empty dialog does not establish that nothing was saved.
3. Classify the outcome using the decision table below. Do not submit again until the earlier attempt has been reconciled.

### Check History Freshness Before Retrying

In v4.2.2, opening **History** reads the history already held by the app. A failed transfer receipt does not automatically reload the detail or history. A history read that throws an error can also leave an empty history list, with the same empty-state text used when there are no receipts.

1. Keep a private record of the unsaved entries and the earlier submission before leaving the page. Re-entering the order clears and reloads its detail, so do not rely on the current input fields to preserve the work. If preservation is uncertain, stop and have an authorized support owner inspect OMS records without navigating away.
2. When the entries are safely recorded, return to **Transfer Orders** and reopen the same transfer. This starts new detail and history reads in the reviewed release. Wait for **Fetching details...** to finish, then check the order identity and header **History** again.
3. Record when this read was attempted, the selected facility and history scope, updated saved quantities, and any error. A finished loader only marks the end of the UI request flow; it does not certify that every history page or receiver lookup succeeded.
4. If history is empty, incomplete, unchanged unexpectedly, or inconsistent with saved totals, ask an authorized support owner to confirm the server-side receipts and affected order-line totals. [Read-only entity inspection](../../maarg/entity-inspection.md) provides the general inspection workflow. The owner must verify the actual record relationships and a successful read for the installed version; do not guess an entity, execute a service, or edit data to test an outcome.

| Confirmed evidence | Next step |
| --- | --- |
| Saved receipts and totals account for the attempted quantities | Treat those units as already received. Investigate a stale display or downstream delivery separately; do not receive them again. |
| Some attempted quantities are saved, or history and totals disagree | Preserve the line-by-line difference and stop. Have the owner determine the remaining unreceived quantity before any approved action. |
| Successful authoritative reads confirm that none of the attempted quantities were saved | Have the operational owner review the cause and authorize only the verified unreceived quantity. This conclusion requires more than an empty dialog. |
| Reads failed, remain incomplete, or cannot distinguish the previous attempt | Keep the outcome unresolved and escalate. Do not clear browser storage, receive from another device, or create a replacement order. |

Purchase orders and returns have different request and refresh paths. Do not assume that a failed action refreshed their history, or apply this transfer-order navigation as their receiving procedure. Preserve their submission evidence and have the appropriate order owner confirm the saved result.

### When The App Offers Review Receipt

The separately reviewed later source can distinguish a saved receipt followed by a failed refresh from an unconfirmed submission, and can block more receiving until the previous outcome is reviewed. It provides **Review receipt** with saved submission details when available; older operations may have no saved payload. These safeguards are absent from the published v4.2.2 source.

If the installed app offers that review, compare its submission details with successfully retrieved history and OMS records. Do not acknowledge the review or clear its block until the outcome is verified. Resolving the review clears draft quantities, so preserve any remaining entries before an authorized resolution. Whether or not a block exists, an uncertain prior receipt still needs reconciliation before another submission.

## Correction Boundaries

The history view has no edit, reverse, or delete receipt action in v4.2.2. Closing a confirmation dialog before submission dismisses that dialog; it does not undo an earlier receipt.

The reviewed OMS receipt service rejects negative accepted or rejected quantities. A zero quantity does not create a positive receipt, but a requested completion can still close the order line. Neither negative input nor zero-and-complete is a receipt reversal. Do not use an inventory adjustment, order recreation, or cancellation as a universal rollback recipe.

For a confirmed incorrect receipt, have the inventory and integration owners agree on the affected records, correction method, authorization, and checks in every connected system. Keep the original receipt evidence. Verify resulting saved quantities and downstream outcomes after the approved correction before resuming receiving.

A successful app receipt also needs a separate check in any connected system. Ask the integration owner to inspect the corresponding receipt or integration result before considering a replay or manual posting. This guide does not promise a universal NetSuite adjustment, closure, or zero-quantity outcome; those depend on the installed integration and business configuration.

## The Receipt Is Saved But Shopify Differs

Use [Investigate Shopify transfer sync](../../shopify/transfer-sync-troubleshooting.md) to distinguish native transfer staging, per-record delivery, mapping blockers, and inventory events for physical locations or aggregate channels. Verify the expected Shopify record and inventory target independently. Do not repeat receiving or switch integration settings to test delivery.

## Missing Lines Or Product Details

Check the selected facility, order, item tab, and any box filter. Compare the source order's lines with the OMS order. If a line exists but its image or barcode is missing, compare the line's OMS product ID, SKU, and current catalog record. A missing display field is not evidence of a missing receipt. When Shopify supplies the product, use [Shopify product sync](../../shopify/product-sync.md) to identify its import stage before considering an approved resync.

Do not add a replacement line, recreate the transfer, or receive directly in a second system before the owner has checked for an existing receipt and agreed how reconciliation will work.

## Escalation Checklist

Share only the necessary record references through the organization's approved private support channel:

- Environment, app version, facility, and time zone
- Order type and affected line references
- Ordered, fulfilled, previously received, entered, and physically counted quantities
- Current open/completed state, order-wide or line-specific history scope, and receiving-history result
- Time of the latest read attempt, whether it succeeded, and any mismatch with server-side receipts or saved totals
- Whether one box or all shipments was selected, if supported
- Confirmation or error wording and whether the request outcome is confirmed
- The connected system's corresponding receipt state, if already checked

Redact personal data, credentials, store URLs, and unrelated records from screenshots. Do not attach unreviewed logs or inventory exports to public documentation.

## Verification Scope

The release baseline was checked on October 12, 2026: Receiving App [v4.2.2](https://github.com/hotwax/receiving/releases/tag/v4.2.2), including [transfer detail and navigation](https://github.com/hotwax/receiving/blob/bd0e6f1b5b47b23510c99307aed050a0e9fe3caa/src/views/TransferOrderDetail.vue), [history fields and scope](https://github.com/hotwax/receiving/blob/bd0e6f1b5b47b23510c99307aed050a0e9fe3caa/src/views/ReceivingHistoryModal.vue), and [receipt/history requests](https://github.com/hotwax/receiving/blob/bd0e6f1b5b47b23510c99307aed050a0e9fe3caa/src/store/transferorder.ts). The OMS receipt contract and quantity/completion rules were checked separately against Poorti v3.3.3.

The latest distribution by publication time was Maarg v6.3.9. Its active production component group includes Poorti v3.3.3, OMS v3.3.3, and Shopify connector v4.3.8; XML-commented components were excluded. Receiving v4.2.2 is a separate frontend release, not an installed-version assertion from that manifest.

The conditional box-filter and receipt-review sections refer to [later Receiving source](https://github.com/hotwax/receiving/blob/feac84db9759068e1a8a1b6446d346a92433ffde/src/views/TransferOrderDetail.vue) and its [submission safeguards](https://github.com/hotwax/receiving/blob/feac84db9759068e1a8a1b6446d346a92433ffde/src/components/ReceiptReviewModal.vue). Later history-label, refresh, error-state, or pagination changes are not assumed to be in v4.2.2 or deployed.

This is source verification. The read-only demo reached sign-in, so installed versions, permissions, receipt outcomes, corrections, and downstream delivery remain unverified. Verify the installed build before relying on a named control and confirm the previous receipt before retrying.
