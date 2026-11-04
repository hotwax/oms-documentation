---
description: >-
  Reconcile Cycle Count results, review decisions, and posted inventory movements
  before building a report or choosing a correction.
---

# Verify Cycle Count Results And Adjustments

Use this guide to answer three separate questions: what was counted, what a reviewer decided, and what inventory movement was recorded. A closed count, an accepted item, and a posted adjustment describe different evidence. A results integration must retain those distinctions.

The read contracts below are source-verified against Poorti v3.3.6, OMS v3.3.4, and framework v4.1.2, included in the OMS distribution v6.3.12. App behavior is checked separately against Cycle Count App v5.2.1. Installed versions and live results remain unverified.

## Before You Start

- Confirm the environment, authorized facilities, count IDs, reporting period, and the purpose of the report. Decide whether a row represents a product decision, a session item, or an inventory movement. These have different keys and row counts.
- Use an existing approved account or API client with read access to the relevant counts and inventory history. Visible API documentation does not grant permission to execute every operation.
- In the Cycle Count App, use `Pending review` for submitted counts awaiting review and `Closed` for closed counts. Check the status filter because Closed can also include cancelled counts. Search by name or ID, confirm the facility, and open the count details. Record the count ID; a reused name is not a unique identifier.
- In OMS, open **Developer > REST APIs** and locate `inventory-cycle-count` and `oms`. Use the [REST API Explorer](../../maarg/rest-api-explorer.md) to confirm the installed methods, fields, filters, pagination, and API base. All paths below are relative to that verified base.
- Preserve any unsaved counting work. Investigating a report does not require clearing device storage, submitting a count again, accepting variances, or changing inventory.

For an existing CSV download, use [Cycle Count Export Troubleshooting](export-troubleshooting.md). A file download and a REST results feed have different selection and delivery contracts.

## 1. Establish The Count And Its Scope

Read `GET inventory-cycle-count/cycleCounts/workEfforts/{workEffortId}` for the known count. Confirm `facilityId`, `workEffortName`, `workEffortPurposeTypeId`, `statusId`, and the relevant start/completion dates before joining other records.

If the ID is unknown, use `GET inventory-cycle-count/cycleCounts/workEfforts` with a narrow facility/name/date scope. This service defaults to Created and In Progress counts; explicitly include the intended status when looking for a submitted or closed count. `keyword` matches part of the name or ID, so verify the exact returned identity. The response contains `cycleCounts` and `cycleCountsCount`; `pageIndex` starts at zero and the default `pageSize` is 20. Follow every relevant page.

Count creation, planned start, actual completion, decision time, and inventory movement time answer different questions. Record which timestamp defines the report period and its time zone. A count closed this week can include counting activity from an earlier period.

## 2. Read The Persisted Review Decisions

Read `GET inventory-cycle-count/varianceDecisions`, filtered by the verified `workEffortId` and `facilityId`; add `productId` for a single-product investigation. This is a collection response, not a singular decision endpoint. Keep all three identity fields: the decision key is `workEffortId` + `facilityId` + `productId`.

| Field | Meaning And Reporting Limit |
| --- | --- |
| `workEffortId`, `workEffortName`, `workEffortStatusId` | Count identity, current name, and current lifecycle status. A name or Closed status alone does not establish a stock movement. |
| `facilityId`, `facilityName`, `productId` | Facility and product identity. Display names are joined values; preserve IDs as the report keys. |
| `countedQuantity`, `systemQuantity`, `varianceQuantity` | Values saved with the review decision. Preserve the reported values; do not silently replace them with a newly calculated difference. |
| `decisionOutcomeEnumId` | The reviewed workflow records `APPLIED` or `SKIPPED`. Check movement evidence separately before assigning posted units. |
| `decisionReasonEnumId`, `reasonDescription` | The recorded review reason and its joined description. A reason is not an inventory posting confirmation. |
| `decidedByUserLoginId`, `decidedDateTime` | Who made the decision and when. These are not the store counter and scan time. |
| `inventoryItemId`, `physicalInventoryId` | References used to correlate an applied decision with inventory history when populated. A request-level physical-inventory ID alone is insufficient. |

The reviewed decision collection does not provide a dedicated SKU field, a per-scan history, or an adjustment amount in money. A missing decision is not a zero result or a rejected result. Check the count's review rows and session state before interpreting an absent record.

For a SKU, read the approved product-identification mapping. The reviewed OMS route `GET oms/products/{productId}/identifications` exposes identification records. Select the configured identifier type and applicable validity dates; do not assume `productId`, product name, or any returned identifier is the SKU. Resolve multiple or missing matches explicitly.

## 3. Keep Count-Time Quantities Separate From Current Stock

Read `GET inventory-cycle-count/cycleCounts/workEfforts/{workEffortId}/reviews` to inspect the aggregate review rows. The companion `/reviews/count` route returns the number of matching review rows; it is not the number of scans or posted adjustments.

The reviewed aggregation combines non-voided session items by product. It sums their `quantity`, takes the maximum captured `systemQuantityOnHand`, and exposes the current inventory quantity separately as `quantityOnHand`. Its `proposedVarianceQuantity` is based on the summed count and captured snapshot. Multiple sessions, missing snapshots, and duplicate input rows therefore need examination before treating an aggregate as a reliable business result. In the checked app, a missing `systemQuantityOnHand` can be populated from a later live inventory lookup before synchronization; it is not guaranteed to represent the exact physical counting moment.

**The decision's `systemQuantity` is not a guaranteed count-time snapshot.** In the checked app's review submission, that field is populated from the review's current `quantityOnHand`. The saved `varianceQuantity` is supplied separately. Editing or removing session data can also change the proposed value. Do not assume `countedQuantity - systemQuantity` reconstructs either the original proposal or the posted change.

When the report requires who counted and when:

1. Read `GET inventory-cycle-count/cycleCounts/workEfforts/{workEffortId}/sessions` and retain each `inventoryCountImportId`, session status, and parent count.
2. Read `GET inventory-cycle-count/cycleCounts/sessions/{inventoryCountImportId}/items` for the relevant products. Preserve the item key `inventoryCountImportId` + `importItemSeqId`, `quantity`, `systemQuantityOnHand`, `countedByUserLoginId`, and `createdDate` when present.
3. Distinguish the item's counting-user field from the session uploader and decision-maker. A session can contribute several products, and a product can occur in several sessions. Missing attribution remains unknown; do not fill it from the reviewer.
4. Keep session status in the reconciliation. The aggregate review excludes `SESSION_VOIDED`; blindly summing every raw session can disagree with it.

The item list joins inventory by product. Without a facility filter, one base item can appear with inventory from several facilities. With a facility filter, a base item can still have empty joined inventory fields if no matching inventory exists. Use the count's verified facility, deduplicate by the complete item key, and compare with the base `/items/count` response. Joined `quantityOnHandTotal` is current inventory, not the saved count snapshot.

These records are not an immutable scan-event stream. Item creation and update-derived review timestamps do not establish every scan, edit, or the exact time a device captured its stock snapshot. Preserve zero values as zero; a blank or dash in a display is not sufficient evidence that the recorded value is missing.

## 4. Reconcile Posted Inventory Movements

For a decision with both bridge IDs, read `GET oms/inventoryItem/{inventoryItemId}/detail` and narrow by `physicalInventoryId`. Alternatively, use `GET oms/products/{productId}/facilities/{facilityId}/inventoryDetail` with the same physical-inventory filter. Check the returned IDs and facility/product, not just the display text.

| Evidence | How To Interpret It |
| --- | --- |
| `inventoryItemId` + `inventoryItemDetailSeqId` | Identity of an inventory movement. Deduplicate movement rows by this key before summing; joined display context is not another movement. |
| `physicalInventoryId` | Correlates movements from the review request. Match it together with the inventory item; one request can cover multiple products. |
| `quantityOnHandDiff` | The movement's recorded signed quantity change. Use reconciled movement rows for posted units, rather than substituting the decision's variance automatically. |
| `availableToPromiseDiff` | The movement's recorded ATP change. Keep it separate from quantity on hand and from downstream availability confirmation. |
| `effectiveDate`, `createdStamp` | Movement effective time and record creation time. Neither is the count's scan time. |
| `cycleCountDecisionWorkEffortId`, `cycleCountDecisionReasonEnumId`, `cycleCountDecisionOutcomeEnumId`, `cycleCountDecidedDateTime` | Optional decision context joined to inventory history. Compare it with the original decision. Missing context does not make every physical inventory movement a cycle-count movement. |

Read `GET oms/inventoryItem/{inventoryItemId}/variances`, filtered by `physicalInventoryId`, when the corresponding variance record is needed. Keep that record and movement history distinct; do not add their quantities together as separate adjustments.

Interpret the outcome with the evidence available:

- **Applied decision and matching movements:** reconcile the signed movement quantity with the recorded decision. Preserve the exact keys and times. Investigate disagreement before publishing a total or choosing a correction.
- **Applied decision with zero variance:** retain a zero result. Do not require a nonzero movement or assume a header proves that stock changed; inspect whatever movement evidence was recorded.
- **Skipped decision:** the reviewed service records the decision without creating that item's applied movement. Keep its counted quantity and proposed variance available for review, while distinguishing them from posted units.
- **Missing decision, missing bridge, or unmatched nonzero movement:** keep the result unresolved. Check identity, filters, pagination, installed versions, and relevant request errors with support. In the checked release, an unresolved inventory-item lookup can omit an item from the decision operation; a successful request response is not proof that every requested item has a decision.

The service can create a physical-inventory header even when no item produces an applied detail. A header or returned ID therefore cannot replace item-level reconciliation. Do not replay `submit`, `recordVariance`, or `inventoryAdjustments`, edit statuses, or add a compensating variance to test whether an earlier request worked. Those are separate inventory-changing operations requiring an approved correction plan.

OMS movement evidence also does not establish receipt in an accounting system or Shopify. Verify the configured downstream flow separately, including both channel and physical-location inventory events where applicable. Do not use a quantity-on-hand or kit reset as a reporting repair.

## 5. Define A Reliable Reporting Contract

The read paths above provide evidence for reconciliation. They do not establish a complete scheduled results integration. Agree on these requirements before automating a feed:

- **Complete pages and errors:** entity-list routes return arrays and pagination headers such as `X-Total-Count`, `X-Page-Index`, `X-Page-Size`, and `X-Page-Max-Index`. Use zero-based `pageIndex`, a bounded `pageSize`, and the installed API's documented filters and ordering. A failed request or partially read page set must remain incomplete, not become a zero total.
- **Record identity and reconciliation:** retain the decision, session-item, and movement keys separately. A count can contain unreviewed products that are absent from the decision collection. Avoid a report that silently drops them through an inner join.
- **Changes over time:** the decision view has no exposed `lastUpdatedStamp` in this baseline. A decision-time filter is not a guaranteed change cursor. These separate reads also do not promise one transactional snapshot. Define bounded rereads, deduplication, late decisions, corrections, and completion checks with the integration owner; validate them before relying on unattended polling.
- **Monetary valuation:** the reviewed decision and movement routes do not supply a complete posted monetary-adjustment amount. Review `extendedUnitCost` and `extendedPrice` are calculated from proposed variance and joined cost/price values; they are not proof of a booked amount. Agree on cost versus retail valuation, effective date, currency, rounding, and the accounting source. Do not fill a missing amount with zero or multiply by today's price and label it a posted adjustment.
- **Recount policy:** agree on eligible counts and products, quantity/value thresholds, currency, time window, review state, and duplicate prevention. Available result reads or session-cloning routes do not establish an automatic recount policy. Prepare any approved new count through [Cycle Count Import And Recount Troubleshooting](import-troubleshooting.md); a recount does not reverse an earlier adjustment.

For an unresolved result, share the installed versions, count/facility/product IDs, session/item keys, decision outcome and time, matched movement keys, page/filter scope, and a small redacted expected-versus-actual comparison through the approved private support channel. Exclude credentials, full exports, private URLs, and unnecessary user details.

## Source And Verification Scope

Checked October 15, 2026:

- Poorti v3.3.6: Cycle Count REST routes, review/session/decision views, entity keys, captured quantity fields, and decision-to-physical-inventory service. These result definitions are unchanged from v3.3.5.
- OMS v3.3.4: product identification and scoped inventory-history routes, movement fields, and optional cycle-count decision context. Framework v4.1.2 supplies entity-list pagination and field exposure.
- Cycle Count App [v5.2.1](https://github.com/hotwax/inventory-count/releases/tag/v5.2.1): [Pending Review detail](https://github.com/hotwax/inventory-count/blob/031fe43c6427005babad591379c6147aa303c7d6/src/views/PendingReviewDetail.vue) and [Closed detail](https://github.com/hotwax/inventory-count/blob/031fe43c6427005babad591379c6147aa303c7d6/src/views/ClosedDetail.vue). This remains the newest published app release at this check; later merged app source is not an installation claim.
- Latest distribution by publication time: OMS distribution v6.3.12, published October 15 at 11:31:35 UTC. Active production `oms-suite` entries include Poorti v3.3.6, OMS v3.3.4, Shopify connector v4.3.11, and utility v4.3.3; XML comments were excluded. Standalone publications and this manifest were checked separately. The app is deployed separately.

No count, decision, inventory movement, export, or integration was created or changed for this guide. The read-only demo remained at sign-in, so installed versions, permissions, response shapes, and outcomes are runtime-unverified. Related illustrations were inspected but do not show this reconciliation; no screenshot is presented as proof. Remaining acceptance requires approved synthetic cases for applied, skipped, zero, missing, multi-session, multi-page, and changed-after-read results, plus the agreed valuation and downstream-delivery checks.
