---
title: October 2026 apps release notes
slug: product-updates/release-notes/2026-10
contentType: release-note
month: 2026-10
status: draft
coverageThrough: 2026-10-31
metaDescription: October gives retail teams more control over app rollouts, cycle counts, integration follow-up, and job history, with a preview of the new pre-order workspace.
tagNames: [Release Note]
key: release-notes:2026-10
---

<!-- markdownlint-configure-file { "MD025": { "front_matter_title": "" } } -->

# October 2026 apps release notes

October gives retail teams more control over app rollouts, store counts, and integration follow-up in HotWax Commerce's order management system (OMS). Administrators can choose hosted app versions for each environment, store teams can follow count progress and packed transfers, and operations teams can investigate job runs and Shopify processing from the same workspace.

<!-- Editorial draft: source coverage October 1–31, 2026, Asia/Kolkata; reviewed November 4. Release and deployment evidence is retained in source-ledger.md. -->

## Company

### Choose when each environment adopts an app release

Company brings app-version selection, release notes, and change history into one administration page. Teams can test a hosted release in their test environment while production stays on its selected version, or return to an earlier release while it remains hosted. Company checks that the selected build is available before saving.

A changed selection takes effect on the next page load or refresh in apps that include refresh support. Older running builds still need sign-out and login re-entry. Cycle Count v5.3.1 includes the refresh behavior; availability depends on the app and build already in use. [Read the full app-version management update](product-updates/company-app-version-management.md).

### Follow transfer sync and choose eligible Shopify locations

The transfer monitor keeps available results visible when part of a status check fails and marks the missing results for review. Shopify variant information helps operators investigate missing product mappings before saving a correction.

Company also supports detaching eligible transfers from Shopify sync. A transfer already sent to Shopify or owned by another shop cannot be detached through this flow. Shopify app and fulfillment-service locations can appear in import and audit views, but remain unselected until an administrator chooses them. These controls require compatible connector support. [Read the full Shopify transfer update](product-updates/shopify-transfer-and-fulfillment-control.md).

## Order Manager and Order Routing

### Connect an order's route with the stock available to fulfill it

Order Manager's `Routing` tab shows how an order moved between locations and the recorded reason for each move. Operators can follow that history into the item's inventory details, review short-stock warnings, and choose from eligible locations when moving an item.

The facility picker keeps the current location visible and warns when no eligible facility can cover the selected items. Order Routing separately adds carrier postal-code filters and sorting to inventory rules. [Read the full routing update](product-updates/routing-and-inventory-visibility.md).

## Cycle Count

### Keep scanning, progress, and submission in step

Cycle Count improves mobile scanning and keeps quantity fields visible when the iPad keyboard opens. Progress views retain zero quantities, failed exports show their actual outcome, and submission waits for count data to finish synchronizing.

Re-entering a session waits for pending status changes before reopening its controls. Session locks now expire within the configured time limit after renewal stops; existing locks that already exceed that limit still need review. These count improvements are included in v5.3.0. [Read the full store operations update](product-updates/store-receiving-and-counting.md).

## Fulfillment

### See which packed transfers still need to ship

The `Packed` segment keeps packed transfer shipments visible until they ship. Store teams can open a shipment and finish the remaining work without treating packing as completion.

Packed transfers are included in v4.2.3 and v4.3.1. The separate `Cancel shipment` action is included in v4.2.4, with confirmation and existing label restrictions. Its availability should not be assumed from the v4.3.1 Packed segment alone. [Read the full packed-transfer update](product-updates/store-receiving-and-counting.md#finish-packed-transfers).

## Shopify fulfillment and inventory

### Recover fulfillment updates after an interrupted send

The Shopify connector queues shipment updates and saves Shopify's returned fulfillment ID before finishing the local work. When that ID has been saved, a retry can complete the OMS update without creating another fulfillment. A separate recovery path can adopt an existing successful Shopify fulfillment when the requested lines are already closed.

The dedicated sender starts paused and needs configuration before use. The full update explains the remaining retry limits and setup requirements. [Read the full fulfillment recovery update](product-updates/shopify-transfer-and-fulfillment-control.md#recover-fulfillment-without-unnecessary-repeat-creation).

### Compare inventory before importing a reset

The connector compares mapped Shopify inventory with OMS quantities before queuing changes through Data Manager. This includes changes to zero or negative quantities. Operators can distinguish records read, unchanged rows, skipped items, and completed imports instead of treating every source row as a stock change.

Later merged follow-ups skip unmapped items and exclude inventory-channel or virtual locations from inbound physical-stock resets. Those follow-ups still need a verified release; the released comparison does not establish their availability. [Read the full inventory reset update](product-updates/shopify-transfer-and-fulfillment-control.md#compare-inventory-before-importing-changes).

## Returns and NetSuite

### Carry physical return arrivals into NetSuite receipts

Shopify return handling evaluates restocking for each piece. Eligible arrivals can become received return shipments in the OMS, giving the NetSuite integration a physical receipt to follow through processing.

NetSuite receipt imports allow a short overlap in their update window to catch receipts that appear late. Optional configuration can use the facility that received the return. Products requiring bin detail can carry that information into the receipt once the supporting product settings and jobs are ready. Return authorization cancellation and settlement retain their own prerequisites. [Read the full returns update](product-updates/returns-and-netsuite-reconciliation.md).

### Import the NetSuite products the team needs

Configured imports can bring products into the OMS from selected NetSuite item groups. Teams can also request up to 100 named item IDs or SKUs and review which were found. Existing products are matched before new products are created, preserving their existing identifiers.

These capabilities are included in the v3.3.8 maintenance release. The scheduled import starts paused and needs group configuration; inclusion in a different release line is not established. The connection and import results still need verification for the retailer's setup. [Read the full NetSuite product import update](product-updates/returns-and-netsuite-reconciliation.md#bring-selected-netsuite-products-into-oms).

## Job Manager

### See where a Shopify bulk operation has reached

The `Bulk operations` page puts Shopify's status, timing, counts, and result files beside the related HotWax job and processing status. A completed Shopify operation can still be waiting for HotWax to process its file. Unmatched operations remain visible, helping operators see where follow-up is needed.

Shared-connection jobs also appear in the catalog. The `System Tasks` page lets teams find, assign, and resolve existing tasks on supported OMS versions from 6.5.0 onward. These updates are included in Job Manager v3.5.0. [Read the full Job Manager update](product-updates/job-manager-operations.md).

### Search job runs and preview the intended data document

Instance-wide run history lets operators search by run ID, job name, or user ID. Filters apply across the matching records before they are divided into pages. In v3.5.0, instance-wide history supports `All` and `Failed`; the other status filters and counts remain unavailable. Individual-job history keeps its local status filters.

The Data Document Builder keeps each document's preview, export history, and schedules together. Teams can save changes before previewing and drag fields within an entity group to change their order. [Read the full run-history and builder update](product-updates/job-manager-operations.md#search-runs-across-the-instance).

## Shared app updates

### Keep app updates and diagnostic information accessible

The shared app platform improves how installed apps pick up updated builds. Each app needs to adopt the compatible platform version before the change applies.

Cycle Count v5.4.0 also adds local logs that teams can filter, copy, download, and clear when investigating a problem. Sending logs to a remote service is optional and requires configuration. Company and Job Manager have merged their log-viewing controls, but those controls are not confirmed in their October releases. [Read the diagnostic-log details](product-updates/job-manager-operations.md#gather-app-diagnostics-where-available).

## Updates awaiting release or acceptance

The following changes include merged app work without a verified October release and previews still awaiting acceptance. They are separate from the released capabilities above.

### Manage product dates across the store catalog

The Products calendar can search the full store catalog, load more results in pages, and edit lifecycle dates for one or several selected products. Selecting all covers the loaded rows, and unedited dates stay in place. Identifier coverage and Shopify association checks add context when reviewing the catalog. These changes are merged and need a compatible app build and OMS services. [Read the full product calendar update](product-updates/product-calendar-and-catalog-control.md).

### Review the network constraints behind routing

The Order Routing dashboard brings weekly routing and store-shipping activity beside current safety stock and shipping exclusions. Current stock buffers remain separate from the historical weekly totals. The dashboard merged after v2.5.0 and requires the supporting OMS data documents. [Read the full network diagnostics update](product-updates/routing-and-inventory-visibility.md#explain-network-constraints).

### Find transfers by tracking code and review uncertain receipts

Receiving adds tracking-code search, package context, and `Scan all` draft shortcuts. It keeps a record of an uncertain submission for review before another receipt can be sent. A confirmed receipt is not sent again because a later refresh failed. These changes are merged but excluded from the v4.2.4 maintenance release.

Separate merged Fulfillment work adds a live `Open` order list, local search, and loading progress. BOPIS (Buy Online Pick-Up In Store) also honors the configured inventory-adjustment choice when rejecting items. Their merged state does not confirm an October app release containing these changes. [Read the full store operations update](product-updates/store-receiving-and-counting.md).

### Review restocking-fee support before enabling it

Merged NetSuite work can add a configured restocking-fee item when preparing a return authorization. The product-mapping path still needs acceptance, and a fee added later does not update an authorization already created. This remains separate from the released return-receipt improvements. [Read the restocking-fee limitations](product-updates/returns-and-netsuite-reconciliation.md#prepare-bin-aware-receipt-detail).

### Preview the pre-order workspace and future-inventory synchronization

The rebuilt Pre-order App connects demand, future supply, purchase orders, and inbound shipments. Late October work carries quantity changes through shipment batches, expected arrival dates, and cancellations. Canceling a purchase-order line closes its remaining future supply without automatically moving customer reservations elsewhere. Rejecting or canceling an order item separately releases that item's future reservation.

Receiving future supply does not itself assign waiting orders to the physical stock. Related Shopify work represents future-reserved quantities at the pre-order parking location, manages app-owned fulfillment holds, and keeps future-inventory publishing separate from physical-stock changes.

The backend migration and hosted acceptance remain open, so this is a preview rather than a general release. Compatible components and configuration are required. [Read the full pre-order preview](product-updates/preorder-workspace-preview.md).

<!-- Reviewer resources: [package overview](README.md) and [release/version evidence](source-ledger.md). These are editorial references, not customer workflow instructions. -->
