---
description: >-
  Investigate missing shipped quantities when a NetSuite warehouse fulfillment
  arrives before its transfer-order line changes are available in OMS.
---

# Investigate NetSuite Transfer Fulfillment Gaps

Use this guide when goods have arrived from a warehouse, but the Receiving App shows no fulfilled quantity or less than expected for a NetSuite transfer. This guide covers the warehouse-origin NetSuite fulfillment import. It does not cover every transfer route or authorize a receipt, order change, or integration replay.

A product in the OMS catalog, a line on an OMS transfer, a shipped fulfillment, and a saved receipt are separate records. Check which record is missing before deciding what to correct.

## Start With The Receiving View

1. Confirm the environment, destination facility, transfer order, and physical quantity with the receiving operator. Record the time and time zone.
2. Check the selected item tab and any shipment or box filter. Wait for an existing read to finish and record any loading error.
3. Compare ordered, fulfilled, and previously received quantities for the affected lines. Inspect `Receive by fulfillment` without changing it. When enabled, the app uses fulfilled quantity as its receiving target; otherwise it uses ordered quantity.
4. Check receiving and shipment history. An empty view or a failed read is not proof that no shipment or receipt exists.

A zero fulfilled quantity is an observation, not a diagnosis. It can reflect a transfer that has not shipped, a shipment import that did not complete, or a read/display problem. Physical arrival does not prove that the integration has recorded the shipment.

If a receive action was already submitted and its outcome is uncertain, stop here and follow [the receiving outcome checks](../launchpad/receiving/README.md#a-receive-action-failed-or-timed-out). Do not submit another receipt to test the connection.

## Separate A Missing Product From A Missing Order Line

Ask the integration owner to compare the source and OMS records:

| Check | What it establishes |
| --- | --- |
| NetSuite transfer and its OMS reference | Both records represent the same transfer and destination |
| Product identification in OMS | The fulfilled item resolves to the intended catalog product |
| Source order-line identity and OMS line external ID | The fulfillment can match the correct line within that transfer |
| Line additions and quantity changes after initial import | The OMS transfer reflects the source changes relevant to this fulfillment |
| NetSuite item fulfillment and its shipped quantities | The units actually shipped, which can be less than the ordered quantity |
| Existing OMS shipment and receipts | Whether the fulfillment or receiving work already succeeded |

Compare line identities, not just SKU or product name. The same product can appear on more than one order line. A valid product mapping does not establish that a recently added transfer line has reached OMS.

If the catalog product itself is absent, investigate the product-import route first. If the product exists but the transfer line does not, creating another product will not repair that missing line. For the separate Shopify product-mapping and transfer route checks, use [Shopify transfer sync](../shopify/transfer-sync-troubleshooting.md).

## Trace The Two Imports Separately

In the reviewed connector, transfer-order updates and warehouse fulfillments are separate queued imports. Their definitions do not guarantee that an order update finishes before the corresponding fulfillment. Verify the installed producer, route, and schedule; do not assume that a missing update will arrive after a fixed wait.

Use [Service Jobs](../maarg/service-jobs.md), [Data Manager imports](../maarg/data-manager-imports.md), and [System Messages](../maarg/system-messages.md) only for the stages actually used by the configured route. Ask the integration owner to:

1. Find the original order update that contains the added line or changed quantity. Check its record-level result, error, and completion time. A successful job summary does not prove that this particular transfer line was updated.
2. Find the warehouse fulfillment for the same transfer. Compare its original line references and shipped quantities with the OMS transfer as it existed when the import ran.
3. Inspect the fulfillment's specific error and the resulting OMS shipment state. One unresolved order line can prevent the fulfillment from becoming a usable OMS shipment; do not assume the other lines succeeded.
4. Check for an existing shipment with the same external fulfillment reference, including a shipment that is not yet shipped, and for any saved receipts before considering recovery.

For example, an existing transfer can receive a new line upstream while its catalog product already exists in OMS. If the fulfillment arrives before that line update, product lookup can succeed while order-line lookup fails. This is a possible sequencing failure, not proof of the cause in every case.

## Recovery Requires A Confirmed Scope

Keep store-side checks read-only until the integration owner has established the failure and the previous outcome.

- Do not change `Receive by fulfillment`, force fulfilled quantity to equal ordered quantity, close/reopen lines, add substitute lines, or recreate the transfer to make receiving available.
- Do not resubmit a receipt or replay the whole inbound file merely because the app shows zero.
- Preserve the original inbound file or message reference through approved private support channels. A failed-record export is not necessarily the unchanged original payload or ready for replay.
- Before an approved retry, the owner must verify the needed line update is present, confirm the exact failed fulfillment scope, check prior shipment/receipt results, and choose the supported recovery method for the installed integration. The reviewed shipment creation path rejects a duplicate fulfillment reference; replay is not a general repair for an existing shipment.
- If the earlier result is uncertain, stop and reconcile it. Do not assume completed lines or duplicate detection make every replay harmless.

After approved recovery, verify the particular OMS shipment, its shipped quantities, and the Receiving view. Compare with the source fulfillment, not the full ordered quantity. If ten units were ordered but only nine shipped, the check is for those nine units and the outstanding one, not a forced total of ten. Recheck receipts before resuming the normal receiving process.

This guide does not define a universal replay button or a NetSuite closure/cancellation repair. Those require the deployed route, permissions, record state, and an approved operating procedure.

## Escalation Checklist

Share the minimum necessary evidence in the organization's approved private support channel:

- Environment, installed versions, destination facility, and time zone
- Source transfer and fulfillment references, plus the corresponding OMS references
- Affected line identities and products; identify whether the missing record is a product or an order line
- Ordered, source-shipped, OMS-fulfilled, previously received, and physically present quantities
- Relevant line-change time, order-update result, fulfillment-import result, and exact error wording
- Original inbound file/message reference and any earlier retry, shipment, or receipt outcome
- The next action requested and the owner who must approve it

Redact credentials, personal data, unrelated records, and private connection details from shared screenshots. Do not post raw payloads, logs, or customer records in public documentation.

## Verification Scope

This is a source-verified diagnostic checklist, not a demonstrated recovery procedure. The November 6, 2026 review used NetSuite connector v3.6.1, Poorti v3.6.0, and OMS v3.6.0 for line matching, separate import paths, shipment creation, and duplicate checks.

The latest published distribution checked by publication time was Maarg v6.6.1, published November 5. Its active release manifest pins OMS and Poorti v3.6.0 in the default OMS suite. NetSuite v3.6.1 is declared separately and is not in that default suite. Declaration does not establish installation or an enabled producer.

The standalone [Receiving App v4.2.4 release](https://github.com/hotwax/receiving/releases/tag/v4.2.4) was checked separately. Its [transfer detail source](https://github.com/hotwax/receiving/blob/59a26bc325b53845f957958bf2242449e7bb5b47/src/views/TransferOrderDetail.vue) uses ordered or fulfilled quantity according to the setting, and its [transfer/history reads](https://github.com/hotwax/receiving/blob/59a26bc325b53845f957958bf2242449e7bb5b47/src/store/transferorder.ts) require separate outcome checks. This frontend release is not a pin in the distribution manifest or proof of the installed build.

The authorized demo reached sign-in only. No authenticated fixture, import, replay, receipt, or downstream result was tested, and no runtime screenshot is included. Installed routing, a synthetic late-line failure, existing-shipment handling, and an approved recovery outcome remain to be verified.
