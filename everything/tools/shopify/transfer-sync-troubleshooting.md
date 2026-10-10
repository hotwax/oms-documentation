---
description: Trace a transfer from OMS through Shopify staging, delivery, mappings, and inventory events without duplicating receipts or adjustments.
---

# Investigate Shopify Transfer Sync

Use this guide when an OMS transfer, shipment, or receipt is missing from Shopify, or when the transfer exists but Shopify inventory differs. A saved OMS receipt, a staged file, a Shopify transfer update, and an inventory-event batch are separate results.

## Before You Start

- Confirm the environment, Shopify connection, Product Store, Company App version, connector version, and incident time with its time zone.
- Identify the OMS transfer, affected line, shipment or receipt, source and destination facilities, and the expected Shopify locations.
- Establish whether the OMS operation actually completed. For a failed or uncertain receipt, start with [Investigate receiving discrepancies](../launchpad/receiving/README.md). Do not receive again to test sync.
- Use accounts authorized to view the connection, transfer, job history, and integration results. Keep record identifiers and evidence in the approved private support channel.

The controls below are source-verified for Company App v2.7.0. Backend routing and staging were reviewed in Shopify connector v4.3.8. They are separate release baselines, not a claim that this pairing is installed or runtime-tested. If a control is absent or its data cannot load, verify the installed versions and permissions before following a different recovery route.

{% hint style="warning" %}
Keep diagnosis read-only. Changing a mapping, switching native transfer sync, changing the start date, creating or running a job, resending a file, and resetting inventory can affect other transfers or listings. A smaller queue is not proof of a correct result.
{% endhint %}

## 1. Identify The Expected Route

Open **Company > Shopify**, select the connection, and open **Transfer sync**. Confirm the shop before reading its settings.

| Field | What to establish |
| --- | --- |
| `Native Inventory Transfer Sync` | Whether this shop is configured to send native Shopify transfer records. Read the value without clicking the switch; clicking changes the setting. `Not loaded` is unknown, not disabled. |
| `Syncing from` | The configured start date. Eligibility uses the OMS order entry date, not its receipt or shipment date. Without a usable start date, native transfer staging does not proceed. Changing the date can admit historical work; it is not a refresh action. |
| `Outstanding` | Work represented by the current shop's transfer monitoring. It is not all OMS transfers or an inventory balance. |

In the reviewed connector, an unset native-transfer setting defaults to enabled. A displayed setting must still have loaded successfully. At approval, native ownership requires one origin facility, one destination facility, and exactly one shop mapping both to Shopify locations. An absent or ambiguous owner can leave a transfer outside this shop's list. An existing owner is retained when mappings change; changing a mapping is not an automatic ownership transfer.

Native transfers and inventory events are related but different paths:

- **Native transfer path:** OMS stages eligible transfers and updates; a separate processor submits them to Shopify. Source and destination location mappings, product mappings, and transfer-line provenance matter.
- **Physical-location inventory events:** The connector avoids echoing eligible native transfer changes back to the owning shop as another physical adjustment. With native transfer sync disabled, this particular ownership exclusion is removed, but event capture, source enablement, mappings, publishing, and other exclusions still apply.
- **Aggregate-channel inventory events:** Channel ATP changes follow the channel's membership and target rules. Connector v4.3.8 does not apply the native-transfer owner exclusion to this path. Other exclusions still exist, including native-order reservation handling and source-remote handling for external resets.

A failed native transfer does not automatically fall back to physical adjustments. Receipt exclusions also depend on shipment and inbound provenance; inspect the actual source event rather than assuming every receipt is suppressed. The native switch does not disable all incoming webhook processing.

Do not infer that turning off native transfers will create missing mappings, replay old events, or reconcile existing Shopify quantities. Turning it back on can make previously unstamped native work eligible again.

## 2. Locate The Missing Business Step

Use the activity tabs and compare **Outstanding** with **Synced**:

| Tab | What to compare |
| --- | --- |
| `Creation` | OMS transfer identity, ownership, start-date eligibility, and its Shopify transfer reference |
| `Shipments` | The affected shipment and event, rather than only the parent order's status |
| `Receipts` | The saved OMS receipt and its associated shipment/transfer |
| `Cancellations` | Whole-transfer cancellations and outstanding line reductions; these are different kinds of work |
| `Errors` | Latest available staging issues and delivery evidence |

Creation's summary counts transfers, while other activity can contain multiple artifacts or lines for one transfer. Do not add tab counts and call the result a number of orders or units. In this app version, **Synced** in the combined Cancellations tab reads cancellation history; it is not a complete history of line reductions.

Open the affected row or **View transfer sync details**. Compare **From**, **To**, **Order date**, and **Created in OMS**. Follow **Open in Transfers** and, when available, **Open in Shopify** to compare the same business record. A missing Shopify link does not alone prove the external transfer is absent.

Check loading warnings before interpreting an empty list. **Everything is in sync** can also mean the shop owns no transfers. Staging issues describe the latest completed run available to the page, not a complete error archive. **Synced** history offers **Load more**; the first page is not the full retained history. Use the underlying run history when the incident is older.

## 3. Separate Staging From Delivery

Under **Webhooks and jobs**, inspect the existing **Create stager** and **Update stager** jobs. Check their shop scope, paused state, schedule, and relevant completed run. See [Investigate service jobs](../maarg/service-jobs.md) for reading run records.

Do not click a missing shop job's configuration action merely to inspect it: the app can create a paused job. Likewise, webhook registration and job activation are configuration changes. The webhook summary reports subscriptions and available consumers; it does not validate callback URLs or prove that a particular webhook arrived.

Native creation selects approved, owned transfers that meet the start-date gate. Completed or cancelled orders can be skipped without a staging error; do not reapprove an order merely to retry sync. The reviewed connector stages a file per shop, with a record per transfer order. A staging run can finish while individual records are skipped or later fail. For delivery, use **View delivery log** for the relevant creation or update file:

| Delivery label | Safe interpretation |
| --- | --- |
| `Queued for Shopify` | Staging produced work for the separate processor. Do not stage again merely because it has not finished. |
| `Processing in Shopify` | Processing started and has no recorded completion yet. Check its outcome before any retry. |
| `Delivery needs attention` | The processor or one or more records failed. Inspect the affected record and error. |
| `Delivered to Shopify` | The file finished with a completion timestamp and zero failed records. Verify the affected transfer and its expected quantities in Shopify as well. |
| `Delivery cancelled` or `Delivery not confirmed` | Delivery is not established. Investigate before staging or replaying. |

Correlate the transfer with its actual file membership; a successful shop-wide run does not prove this transfer was included. The native configurations are `POST_SHOPIFY_TRANSFER_ORDER` and `UPDATE_SHOPIFY_INVENTORY_TRANSFER`. These Data Manager results are not interchangeable with a generic System Message's status.

For an incoming webhook backlog, inspect the relevant message and its consumer through [Investigate system messages](../maarg/system-messages.md). A received webhook and a completed native delivery file are separate evidence. Do not consume or reset messages to test whether a transfer is already complete.

## 4. Read Mapping Blockers Without Repairing By Guesswork

In **Transfer sync details**, select an entry under **Issues** and compare it with **Working** checks and their time. A failed comparison is unknown, not proof that a mapping is missing.

| Observation | Read-only investigation and boundary |
| --- | --- |
| Source or destination location is unmapped | Compare both OMS facilities with the intended Shopify locations in this connection. Native creation needs distinct source and destination Shopify locations and a write-capable connection. A facility not represented in Shopify requires an integration design decision, not an invented location mapping. |
| Product has no Shopify mapping | Compare the OMS product identity with Shopify SKU, barcode, variant, and inventory tracking. Search results can help identify candidates; do not select and save solely because a SKU matches. |
| Several Shopify mappings exist | Review every candidate's product identity, availability, and use. Ambiguous product mappings block native creation for the whole order; the connector does not safely choose the first mapping. Two OMS lines resolving to the same Shopify inventory item also block creation. Do not choose by Active/Draft status or Online Store publication alone. |
| Several listings are selling | Decide how all affected listings will continue receiving inventory updates before removing a mapping. Recent order activity is limited evidence, not proof that an apparently unused listing is obsolete. |
| Shipped item is absent from the Shopify transfer | Distinguish a valid product mapping from the transfer's own line mapping. Read **Recheck comparison** and the affected shipment/receipt references; have the integration administrator reconcile the specific line before retrying. |

For creation, also verify that each line has a positive whole-number open quantity. A mapping correction does not make an invalid quantity eligible.

The missing-mapping picker only allows selecting inventory-tracked variants not already mapped to another OMS product; ineligible candidates can still be displayed. Its status and publication badges are context, not a general statement about which Draft or prelaunch products qualify for every product-sync workflow.

**Map to selected variant** writes a mapping. **Keep selected mapping** removes the other mappings for this OMS product in this shop and affects other syncs using it; it does not delete Shopify products. Even **One valid mapping remains** establishes only that blocker's current state, not successful transfer delivery.

If **Copy repair details** is used for an approved support request, review and redact the copied content before sharing. It can include private shop details, product and transfer identifiers, and error text.

## 5. Follow Inventory Events To The Correct Target

Return to the same Shopify connection and open **Inventory sync**. Determine whether the discrepancy concerns a physical location or an aggregate channel. Both event paths publish changes in available-to-promise inventory to Shopify **Available**; they do not make quantity on hand and Available interchangeable.

1. Inspect the relevant **Physical inventory events** or **Channel inventory events** queue.
2. Confirm the physical mapping or channel facility group and aggregate target. Inspect capture/source controls without changing them.
3. Open the appropriate **Event history**. Narrow by target location, product, event type, and incident dates; read warnings and allow older rows to load before interpreting counts.
4. Follow the event's source reference, signed change, and batch. Distinguish waiting-to-batch work from a batch waiting to send or reporting a delivery error.
5. Verify the batch result and the intended Shopify location's Available quantity. Also consider subsequent legitimate changes; do not compare a historical event with today's balance as if nothing else happened.

Use [Monitor Shopify inventory sync](https://github.com/hotwax/oms-documentation/blob/0fad00e35d2e7a1fe4cc7e661b5c0441ce3dda9b/documents/system-admin/administration/company/manage-shopify-inventory-sync.md) for the complete Company workflow, field meanings, history limits, and batch inspection. Its screenshots illustrate inventory monitoring, not native-transfer delivery.

## 6. Agree On Recovery And Verify The Result

Before any approved correction, the integration owner should establish:

- Which OMS receipts, Shopify transfers, shipments, and inventory adjustments already succeeded, including uncertain or timed-out attempts.
- Which mappings, shops, locations, channels, products, and queued records the proposed action affects.
- Whether existing staged files or in-flight requests still carry the old route or mappings. Changing a setting does not undo them.
- How missed changes will be reconciled. Events not captured or excluded earlier cannot be assumed to appear after a switch is changed; retained history is not a replay guarantee.
- The expected quantities and the evidence that will establish success after one approved action.

Use the correction appropriate to the route. Channel ATP and physical ATP resets reconcile their respective Available targets. Physical quantity-on-hand resets and derived-kit resets are separate exceptions with their own scopes; neither is a generic transfer replay. A frozen inventory batch resend does not recalculate current inventory. Do not purge queues, reset all inventory, recreate transfers, or repeat receiving as a blanket rollback recipe.

Close the investigation after the specific transfer step and the required inventory targets are verified. Preserve versions, incident time, relevant record and run references, first meaningful error, read failures, approved changes, and the before/after result in a private support record. Exclude credentials, private URLs, unrelated records, and unreviewed payloads from shared screenshots or public documentation.

## Verification Scope

The UI workflow was reviewed against Company App [v2.7.0](https://github.com/hotwax/company/releases/tag/v2.7.0), including its [transfer monitor](https://github.com/hotwax/company/blob/89d2edeefab97711ffd500eae939618f5fb17da8/src/views/ShopifyTransferSync.vue), [transfer details](https://github.com/hotwax/company/blob/89d2edeefab97711ffd500eae939618f5fb17da8/src/views/ShopifyTransferSyncDetail.vue), and [delivery-state interpretation](https://github.com/hotwax/company/blob/89d2edeefab97711ffd500eae939618f5fb17da8/src/utils/shopifyTransferDelivery.ts). Connector v4.3.8 source was checked separately for native ownership, start-date gating, staging, mappings, and physical versus aggregate inventory routing.

The October 10, 2026 release check found Maarg v6.3.9 as the latest distribution by publication time. Its active component manifest includes connector v4.3.8 and Poorti v3.3.3; commented entries were excluded. The higher-numbered v6.4.2 was published earlier and includes different component versions. Company v2.7.0 is a standalone app release, not a frontend version pinned by that manifest.

No authenticated runtime, installed-version pairing, transfer submission, mapping change, switch change, inventory reset, or recovery outcome was verified for this guide. No new screenshot is offered as runtime proof.
