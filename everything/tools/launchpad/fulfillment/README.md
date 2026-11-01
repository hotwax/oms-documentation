---
description: >-
  Investigate missing or lingering fulfillment work by comparing the store queue,
  order allocation, shipment records, and indexing evidence before recovery.
---

# Fulfillment Queue Troubleshooting

Use this guide when an order remains in a store's queue after cancellation or fulfillment, disappears unexpectedly, or cannot advance from its current tab. First identify the affected allocation and shipment. The same order can have work at several facilities, and the three tabs do not use the same data source.

**Source baseline:** Fulfillment App [v4.2.2](https://github.com/hotwax/fulfillment/releases/tag/v4.2.2), OMS component v3.3.3, and Poorti v3.3.3, reviewed on October 11, 2026. The backend versions are included in the latest OMS distribution by publication time, v6.3.9. The frontend is a separate release and is not pinned by that distribution manifest. Confirm the installed pairing and permissions before applying these details. No authenticated runtime, customer defect, or recovery outcome was verified for this guide.

{% hint style="warning" %}
Keep diagnosis read-only. Do not pick, pack, ship, reject, cancel, unpack, regenerate a label, edit contact information, or delete indexed documents just to clear a queue. These actions can change orders, inventory, carrier transactions, or downstream notifications. A timeout does not prove that the previous action failed.
{% endhint %}

## Before You Start

- Confirm the environment, selected product store, facility, app version, incident time, and time zone.
- Use an account authorized for the Fulfillment App and the relevant orders. If a screen or record is unavailable, ask the owner to check access rather than switching tools to bypass it.
- Record the OMS order ID and displayed order name separately, the affected product and quantity, and any ship-group, shipment, or picklist ID. A ship group is an allocation of order items; a shipment is the record used for packing and shipping.
- Ask which action was last attempted and whether its outcome was confirmed. Preserve the error wording and entered information before refreshing the page.
- Confirm whether the work is ship-from-store, store pickup, or an already completed POS sale. The Open shipping queue excludes pickup and completed-POS shipping methods.

## Understand The Three Tabs

| Tab | Reviewed Selection | What Presence Does Not Prove |
| --- | --- | --- |
| `Open` | Indexed `ORDER` documents for approved sales orders in the selected product store and facility, with fulfillment status absent or `Created`; pickup and completed-POS methods are excluded | That the index agrees with the current order, that every item is still allocated there, or that picking has started |
| `In Progress` | Shipment records for the selected product store and origin facility, with shipment status `SHIPMENT_APPROVED` and order status `ORDER_APPROVED` | That staff physically picked all units, or that packing or label generation succeeded |
| `Completed` | Packed shipments plus shipments shipped since the start of the current day in the facility's time zone; the app uses its local time zone if the facility has none | That all displayed shipments have shipped, that the entire order is complete, or that Shopify accepted a fulfillment update |

The Open query does not apply a separate item-status filter. An individually cancelled item on an otherwise approved order is different from a cancelled order header; the query alone does not exclude every such item. Do not promise that refreshing or reindexing will remove it without checking the current line and allocation.

The reviewed Open list groups results by order and ship group. In Progress and Completed are shipment lists. A card count is therefore not a reliable count of unique orders across all tabs.

The Open query also has a fixed entry-date lower bound of **January 1, 2025 UTC** in this release. An older order may be outside that queue even when a broader order search can find it. Shipping-method, category, picklist, carrier, search, and result-size controls can further narrow the relevant view.

The list implementations and selectors are in the released [order store](https://github.com/hotwax/fulfillment/blob/24fedfeb5c6f827efd68fd6cd0427983887fe2f0/src/store/order.ts#L163-L438). These rules explain what the app requests; they do not establish that a particular response was successful or current.

## 1. Recheck The Displayed Scope

1. Open the Fulfillment App from Launchpad and confirm the selected product store and facility.
2. Record the tab, search term, active filters, result size, and displayed count. Enter the known OMS order ID or order name in `Search orders` and press Enter before widening the result size. Shipment-tab keyword search is for order ID or order name, so do not rely on a product or customer search working there.
3. Clear unnecessary filters within the authorized scope. Check `Open`, `In Progress`, and `Completed` separately; an order can have more than one allocation or shipment.
4. After preserving any unfinished input, reopen the relevant list and repeat the search. Reloading the display does not rebuild its search index or retry an operational action.
5. If the list is empty or unchanged after an error, ask the support owner to confirm a successful read. The reviewed list functions can return empty results after a failed request; an empty-state message alone does not prove the work is gone.

Use the order card's identifier menu and `View details` to inspect it. Use `View details` rather than `Pick order`, which opens the picking-action dialog. `Copy ID` copies the displayed order name in this release, so also capture the OMS order ID from the detail view instead of assuming those identifiers are identical.

## 2. Compare Lookup Results With The Actual Order

Open the menu's `Order Lookup` page, titled `Orders`, enter the order identifier in `Search`, press Enter, and use `Show order items` to inspect the facility, method, and item status. Review the active filters and sort before treating a missing result as a missing order. Select the matching order to open its details.

**Order Lookup search is indexed too.** Agreement between Open and the lookup list is not an independent check of the underlying order. The lookup detail page makes separate requests for the order, items, shipments, and facility-change history. Compare those detail records and, where needed, ask an authorized support operator to inspect the specific OMS records using [Entity Inspection](../../maarg/entity-inspection.md).

| Evidence | Compare |
| --- | --- |
| Order identity and status | OMS ID, external order identification, product store, current status, and relevant status timestamps |
| Item and allocation | Item sequence, product, quantity, item status, ship-group ID, and current facility |
| Shipment | Shipment ID, origin facility, status, affected items and quantities, packed/shipped timing, and existing tracking where relevant |
| Allocation history | Facility changes for the affected ship group and the incident window; distinguish another allocation from the one on the stale card |
| External system | The corresponding cancellation or fulfillment record and affected quantities, when that system owns the initiating event |

Do not conclude that an order is wholly fulfilled because one shipment is shipped. Likewise, an external cancellation does not prove that every corresponding OMS record has already changed.

### Recognize Detail Limits

The lookup detail requests sales shipments and deliberately excludes input and cancelled shipments. Those records can therefore be absent even after a successful read; ask support to inspect them separately when needed for cancellation or history diagnosis.

The released lookup detail requests at most **100 shipments**, **100 item rows**, and **250 facility-change rows**, without following further pages in this path. It uses independent requests, so one section can load while another fails. Missing shipment or history detail is not proof that no such record exists. For a large order, a partial load, or a conflicting result, have support obtain a complete, successful, narrowly scoped read before choosing recovery. See the released [lookup implementation](https://github.com/hotwax/fulfillment/blob/24fedfeb5c6f827efd68fd6cd0427983887fe2f0/src/store/orderLookup.ts#L265-L409).

## 3. Follow The Evidence To The Right Owner

### Cancelled Or Reassigned Work Remains In Open

First establish the current order, item, and allocation values through a successful record read. Then have an authorized operator compare the matching indexed `ORDER` documents using [Solr Search](../../maarg/solr-search.md).

Use the installed collection and schema, a narrow order identifier, and only the necessary returned fields. Compare order status, item status, facility, ship-group grouping, and fulfillment status. Record any mismatch. A stale indexed value is one possible explanation, not a universal cause of lingering work.

The modern Open queue uses `ORDER` documents. Deleting a different indexed document type is not a general repair for this flow. Deletion can hide evidence without correcting the source order or the process that produced the stale state.

If the source record still shows an active allocation, investigate cancellation or reallocation processing instead of treating the issue as indexing alone. For repeated allocation changes, use [Order Routing Run Diagnostics](../../maarg/order-routing-runs.md) to trace the relevant execution without running routing again.

`Rejections` contains historical rejection events, not a current pending-work queue. An earlier rejection does not establish the item's present allocation. If history is missing or fails to load, have support verify the deployed query and collection before inferring that no rejection occurred.

### Work Remains In Progress Or Completed

These tabs request shipment data rather than the Open queue's search documents. Compare the exact shipment and order states, origin facility, filters, and time-zone boundary. An Open-queue reindex does not itself fix shipment state or a failed shipment read.

Unlike In Progress, the reviewed Completed request does not require an approved order header. A cancelled header alone therefore does not establish that an inconsistent packed shipment will be excluded.

A packed shipment in Completed is expected. Shipping is a separate action. A shipment already shipped today can also remain visible there; do not ship it again to make it disappear. Older shipped shipments can leave this daily view without being deleted, so that disappearance is not proof of lost data. If the source says shipped but an In Progress card remains after a successful reload, preserve both observations for support.

### A Carrier Or Phone-Number Error Blocks Packing

When available, open `Shipping label error` and read the returned carrier message. This version reads at most ten route-segment details and displays the first nonempty gateway message; a failed read also returns no message. It is not a complete or guaranteed latest error history. This dialog is an inspection step. It is separate from `Add tracking details`, which offers operational recovery choices.

Compare the error's timestamp and shipment with any existing package, label, and tracking result. A phone-related message does not by itself identify whether the missing or invalid value belongs to the facility, recipient, or a retained shipment contact. Have the support owner trace the specific request and configured carrier requirements. Do not replace a customer's number with an arbitrary value or repeatedly reject and rebroker the order as a diagnostic test.

If the dialog says no error was received, that does not establish label success. Confirm the label and shipment result before the owner approves regeneration, a carrier change, manual tracking, or another packing attempt. Never put raw carrier payloads or customer contact details in a public report.

## 4. Agree On A Bounded Recovery

After diagnosis, the responsible owner should approve the specific correction, target records, possible inventory or notification effects, and verification plan.

- **Confirmed index mismatch:** identify the installed indexing service and its exact scope. [Search Admin](../../maarg/search-admin.md#inspect-an-indexing-operation) describes inspecting the configured operation; starting a background index is a write and its start message is not completion.
- **Incorrect source state:** use the supported cancellation, allocation, or shipment workflow for that installed release. Do not repair business state by generic record deletion or a search-only change.
- **Uncertain pick, pack, ship, or label result:** reconcile the existing picklist, shipment, package, label, and tracking records before retrying. Preserve any confirmed external result.
- **Rejection or unpacking:** these are business actions, not refresh controls. Rejection can have inventory and related-allocation effects; unpacking applies before shipping and does not prove a carrier label was voided.

This guide intentionally provides no universal destructive cleanup command. A correction that only removes a card is insufficient if it leaves the order, inventory, or carrier records inconsistent.

## 5. Verify The Result And Close The Handoff

After the authorized recovery, reread the affected order, items, allocation, and shipment. Repeat the same scoped app search and, when indexing was involved, the matching document check. Confirm the intended state, correct quantities and facility, no duplicate shipment or label, and the expected remaining work on other allocations.

Shopify delivery is a separate checkpoint. Use [Order Fulfillment Notification](../../order-flow/order-fulfillment-notification.md) for that handoff, or [Fulfillment And Invoice Status Troubleshooting](../../shopify/fulfillment-status-troubleshooting.md) when ERP or billing status differs. A clear queue or successful index job does not prove downstream delivery.

Record the environment and versions, time zone, relevant identifiers, tab and filters, source-versus-display comparison, last attempted action, exact sanitized error, recovery owner, and verified outcome. Share these only through the approved private support channel. Redact customer data, credentials, private URLs, and unrelated records from screenshots and excerpts.
