---
description: >-
  Diagnose partial receipts, box quantities, and uncertain receiving results
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

The per-line `Scan all` control in the reviewed transfer-order version fills the remaining expected quantity for the item. It does not establish how many units physically arrived. Check the control label and scope in the installed version.

## Only Part Of The Delivery Has Arrived

The transfer-order `Save progress` flow receives the entered quantities and leaves unfinished items open. Fully received items can close automatically. `Receive and complete` is a closing action, with discrepancy review when received totals differ from the target.

If more units are expected later, the operator should use the approved partial-receiving process rather than close the short line to make it disappear. Entering zero as part of completion is not a deletion or cancellation, and it is not a safe way to hide a duplicate or already-received transfer.

Purchase orders have their own `Receive` and `Receive And Close` actions. Do not apply transfer-order closing instructions to purchase orders or returns.

### When The App Shows Shipment And Box Filters

Some Receiving App versions provide `All shipments` and individual box filters. In the source-verified implementation, a box filter narrows the pending lines shown, while entered quantities remain totals for the current receipt across boxes. Selecting another box does not create a separate quantity counter for the same order line.

If the same line occurs in two boxes, compare the accumulated entry with the actual total counted so far. Review every affected line and entered quantity before an approved closing action, then read the confirmation scope and any discrepancy list. A discrepancy list is not a complete list of affected lines. Do not assume that a box selection means “close this package only” or proves that all units for the selected lines have arrived.

If shipment contents or product identifiers are still loading, wait for the existing read to finish. A scan that cannot find an item in the selected box is not evidence that the product is absent from the catalog. Inspect the box selection and line identity before scanning again.

## A Receive Action Failed Or Timed Out

{% hint style="warning" %}
A lost response does not prove that the inventory update failed. Do not repeat `Save progress`, `Receive`, or `Receive and complete` simply because the screen did not refresh.
{% endhint %}

1. Record the action, approximate submission time, facility, affected lines, entered quantities, and displayed message.
2. Inspect receiving history and the current OMS quantities using the supported read views. Compare them with the submission.
3. Distinguish a confirmed receipt with a failed screen refresh from an unconfirmed receipt. The reviewed main snapshot includes both cases and can block further receiving until the earlier outcome is reviewed. The reviewed v4.2.2 release does not include that persistent receipt-review block; the absence of a block is not evidence that retrying is safe.
4. If the app offers `Review receipt`, use it to compare the saved submission details with history. Do not acknowledge the review or clear the block until the outcome is verified.
5. If the result remains uncertain, stop receiving this transfer and escalate. Do not clear browser storage, use another device, or submit a second receipt without reconciling the previous attempt.

A successful app receipt also needs a separate check in any connected system. Ask the integration owner to inspect the corresponding receipt or integration result before considering a replay or manual posting. This guide does not promise a universal NetSuite adjustment, closure, or zero-quantity outcome; those depend on the installed integration and business configuration.

## Missing Lines Or Product Details

Check the selected facility, order, item tab, and any box filter. Compare the source order's lines with the OMS order. If a line exists but its image or barcode is missing, continue with [Missing Product Details](../../ofbiz/product/missing-product-details.md).

Do not add a replacement line, recreate the transfer, or receive directly in a second system before the owner has checked for an existing receipt and agreed how reconciliation will work.

## Escalation Checklist

Share only the necessary record references through the organization's approved private support channel:

- Environment, app version, facility, and time zone
- Order type and affected line references
- Ordered, fulfilled, previously received, entered, and physically counted quantities
- Current open/completed state and receiving-history result
- Whether one box or all shipments was selected, if supported
- Confirmation or error wording and whether the request outcome is confirmed
- The connected system's corresponding receipt state, if already checked

Redact personal data, credentials, store URLs, and unrelated records from screenshots. Do not attach unreviewed logs or inventory exports to public documentation.

## Verification Scope

Quantity entry, box filtering, and receipt-reconciliation behavior were checked against [Receiving App source](https://github.com/hotwax/receiving/blob/b575ce1ae58160ad3ae4af638a38a7ef2e1c57b4/src/views/TransferOrderDetail.vue) and its [receipt submission safeguards](https://github.com/hotwax/receiving/blob/b575ce1ae58160ad3ae4af638a38a7ef2e1c57b4/src/db/receivingClient.ts). This is a main-branch snapshot whose package metadata identifies itself as version 4.2.1.

The latest published release checked on October 3, 2026, [v4.2.2](https://github.com/hotwax/receiving/releases/tag/v4.2.2), uses a different source revision and does not include that snapshot's persistent receipt-review block. Its [receipt submission](https://github.com/hotwax/receiving/blob/bd0e6f1b5b47b23510c99307aed050a0e9fe3caa/src/store/transferorder.ts#L263-L268) and generic error handling must not be treated as proof that a failed response means no receipt was saved.

Verify the installed build before relying on a named control, and verify the prior receipt in history or OMS receipt records before retrying whether or not the app blocks another submission. This source check does not establish deployment or downstream integration behavior.
