---
title: October 2026 release notes
slug: product-updates/release-notes/2026-10
contentType: release-note
month: 2026-10
status: draft
coverageThrough: 2026-10-31
metaDescription: October updates cover product calendars, routing visibility, store operations, Shopify synchronization, returns, Job Manager, and Company app version selection.
tagNames: [Release Note]
key: release-notes:2026-10
---

<!-- markdownlint-configure-file { "MD025": { "front_matter_title": "" } } -->

# October 2026 release notes

HotWax Commerce's October updates focus on understanding routing decisions, keeping store workflows clear, and following synchronization across Shopify, OMS, and NetSuite.

> Draft covering **1–31 October 2026**, Asia/Kolkata, reviewed November 4. **Release-listed** means a GitHub release explicitly names the change; **Merged** means the source change landed, with no matching app release established here; **Preview** means development and acceptance remain in progress. Neither a merge nor a release tag proves deployment to a particular tenant. The Company deployment check below is dated October 25.

## Company app versions

**Deployed, verified October 25, 2026.** Company v2.9.0 adds per-instance UAT and production version controls, release dates and expandable notes, public hosting checks before selection and saving, and combined change history with usernames and local timestamps. Teams can control rollout timing and return to an earlier release while it remains hosted. `Default` follows the environment's main URL build, which may differ from the newest GitHub release. [Read the Company update](product-updates/company-app-version-management.md) and the [app version guide](https://github.com/hotwax/oms-documentation/blob/user-guides-pub/documents/system-admin/administration/company/manage-app-versions.md). [Company v2.9.0](https://github.com/hotwax/company/releases/tag/v2.9.0), [#520](https://github.com/hotwax/company/pull/520).

**Release-listed — adopt a changed selection on refresh.** AccxUI v1.12.0 checks the selected version when a signed-in app loads or refreshes. Inventory Count v5.3.1 explicitly adopts it. The currently running build must include this change; older builds still need sign-out and login re-entry. This is not continuous polling. [AccxUI #261](https://github.com/hotwax/accxui/pull/261), [v1.12.0](https://github.com/hotwax/accxui/releases/tag/v1.12.0), [Inventory Count v5.3.1](https://github.com/hotwax/inventory-count/releases/tag/v5.3.1).

## Product management

**Merged — product calendar and catalog controls.** Search the full store calendar, load results in pages, and edit lifecycle dates for one or several selected products. Review identifier coverage, clearer product identity, and Shopify association checks. Bulk selection covers loaded rows, and product history requires the matching OMS fix. [Products #80](https://github.com/hotwax/products/pull/80), [#87](https://github.com/hotwax/products/pull/87), [#70](https://github.com/hotwax/products/pull/70). [Read the product update](product-updates/product-calendar-and-catalog-control.md).

## Routing and order management

**Release-listed — order routing history.** Order Manager v1.5.0 adds the Routing graph, inventory timeline, and short-stock actions. The facility picker pins the current location and warns when no eligible facility covers the selected items. [Release v1.5.0](https://github.com/hotwax/order-manager/releases/tag/v1.5.0).

**Merged — network diagnostics.** Order Routing adds weekly routing and store-shipping views alongside current safety-stock and shipping-exclusion diagnostics. Current stock buffers are not historical weekly balances. The dashboard requires compatible OMS data documents and merged after v2.5.0. [Dashboard #584](https://github.com/hotwax/order-routing/pull/584).

**Release-listed — inventory rule filters.** Order Routing v2.5.0 adds carrier postal-code mapping filters and sorting. Later fixes handle rule edits with no existing action and empty product-feature/tag selectors. [Release v2.5.0](https://github.com/hotwax/order-routing/releases/tag/v2.5.0), [#585](https://github.com/hotwax/order-routing/pull/585), [#590](https://github.com/hotwax/order-routing/pull/590). [Read the product update](product-updates/routing-and-inventory-visibility.md).

## Store operations

**Merged — receiving by tracking code.** Receiving adds cached pending-transfer search, tracking-code navigation, package context, and scan-all draft shortcuts. Uncertain receipts survive cache resets and require review; confirmed receipts are not sent twice because a refresh failed. These changes are outside v4.2.2. [#739](https://github.com/hotwax/receiving/pull/739), [#740](https://github.com/hotwax/receiving/pull/740).

**Release-listed — count progress and mobile entry.** Inventory Count v5.3.0 lists scanning, export failure status, session synchronization, zero-quantity display, navigation, and iPad keyboard improvements. Session-lock renewal also stops extending expiry beyond the configured lease; previously inflated abandoned locks are not retroactively cleared. Receiving's corresponding keyboard integration remains merged work. [Inventory Count v5.3.0](https://github.com/hotwax/inventory-count/releases/tag/v5.3.0), [count scanning #1463](https://github.com/hotwax/inventory-count/pull/1463), [session re-entry #1482](https://github.com/hotwax/inventory-count/pull/1482), [session lease #1490](https://github.com/hotwax/inventory-count/pull/1490), [Receiving iPad #757](https://github.com/hotwax/receiving/pull/757).

**Release-listed — packed transfers waiting to ship.** Fulfillment v4.2.3 and v4.3.1 list the Packed transfer segment, also forward-ported into `main`. Cancellation from that shipment-detail flow is separately established in v4.2.4; the v4.3.1 entry does not establish cancellation support. [v4.2.3](https://github.com/hotwax/fulfillment/releases/tag/v4.2.3), [v4.2.4](https://github.com/hotwax/fulfillment/releases/tag/v4.2.4), [v4.3.1](https://github.com/hotwax/fulfillment/releases/tag/v4.3.1), [main #1718](https://github.com/hotwax/fulfillment/pull/1718).

**Merged — live Open Orders.** The separate Fulfillment rework adds a live Open list, local search, loading progress, and whole-order rejection behavior under its documented stock conditions. It merged after v4.3.0 and is not included in that tag. BOPIS separately honors the configured inventory adjustment choice when rejecting items. [Fulfillment #1702](https://github.com/hotwax/fulfillment/pull/1702), [BOPIS #908](https://github.com/hotwax/bopis/pull/908). [Read the store operations update](product-updates/store-receiving-and-counting.md).

## Shopify integration

**Release-listed — transfer monitoring and control.** Company v2.6.0 exposes partial sync failures and mapping-repair context. v2.8.0 adds eligible transfer detachment through a single connector call. Transfers already held by Shopify cannot be detached by this flow. [v2.6.0](https://github.com/hotwax/company/releases/tag/v2.6.0), [v2.8.0](https://github.com/hotwax/company/releases/tag/v2.8.0).

**Release-listed — fulfillment-service locations.** Company v2.8.1 lists Shopify app/fulfillment-service locations in import and audit views. These locations are unselected by default and require connector support. [Company #494](https://github.com/hotwax/company/pull/494), [v2.8.1](https://github.com/hotwax/company/releases/tag/v2.8.1).

**Release-listed — fulfillment recovery.** Shopify connector v4.5.0 lists queued shipment-driven sends, durable storage of returned fulfillment IDs, and adoption of existing successful fulfillments in the closed-line recovery case. Sender setup is required; this does not promise exactly-once delivery. [Release v4.5.0](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.5.0).

**Release-listed and later merged fixes — inventory resets.** v4.5.2 lists active-inventory comparison before Data Manager import. Follow-ups skip and count unmapped inventory items and exclude active channel or virtual locations from inbound physical-stock resets. Repeated, indexed item rejections can be removed from an outbound retry while valid items continue; other failure types still stop. [Comparison #979](https://github.com/hotwax/mantle-shopify-connector/pull/979), [unmapped items #992](https://github.com/hotwax/mantle-shopify-connector/pull/992), [location guard #1007](https://github.com/hotwax/mantle-shopify-connector/pull/1007), [outbound retries #920](https://github.com/hotwax/mantle-shopify-connector/pull/920).

**Merged — lower order-sync payload retention.** The order-history hash service stops retaining full input payloads in execution tracking. [#1026](https://github.com/hotwax/mantle-shopify-connector/pull/1026). [Read the Shopify product update](product-updates/shopify-transfer-and-fulfillment-control.md).

**Preview — future-inventory synchronization.** Late October merges project future-reserved quantities to the pre-order parking location, manage app-owned fulfillment holds, isolate failures by order, and separate future quantities and batch metadata from physical-stock publication. These require compatible components, configuration, and acceptance; they are not established as part of v4.5.5. [Projection #1058](https://github.com/hotwax/mantle-shopify-connector/pull/1058), [holds #1059](https://github.com/hotwax/mantle-shopify-connector/pull/1059), [failure isolation #1062](https://github.com/hotwax/mantle-shopify-connector/pull/1062), [event delivery #1063](https://github.com/hotwax/mantle-shopify-connector/pull/1063), [future channels #1064](https://github.com/hotwax/mantle-shopify-connector/pull/1064).

## Returns and NetSuite

**Release-listed — connect arrivals and receipts.** Per-item Shopify dispositions determine restocking, and received return shipments provide input for NetSuite receipt batches. NetSuite v3.5.1 adds a default five-minute incremental receipt overlap, optional booking at the return facility, and handling for eligible cancelled RMAs. v3.5.2 adds bin-aware product receipt detail, with configuration and population prerequisites. [Shopify v4.5.0](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.5.0), [NetSuite v3.5.0](https://github.com/hotwax/mantle-netsuite-connector/releases/tag/v3.5.0), [v3.5.1](https://github.com/hotwax/mantle-netsuite-connector/releases/tag/v3.5.1), [v3.5.2](https://github.com/hotwax/mantle-netsuite-connector/releases/tag/v3.5.2).

**Merged with limitations — restocking fees.** RMA preparation can add the configured restocking-fee item. The final mapping path still needs acceptance, and an already-created RMA does not receive a later fee automatically. [#573](https://github.com/hotwax/mantle-netsuite-connector/pull/573). [Read the returns update](product-updates/returns-and-netsuite-reconciliation.md).

**Release-listed — selected NetSuite product imports.** The v3.3.8 maintenance release lists imports by configured item groups and on-demand imports of named item IDs or SKUs. The scheduled job starts paused. Existing identifiers are preserved, and tenant configuration and end-to-end acceptance remain required. These capabilities also have main-branch forward-ports, but are not established as part of v3.5.5. [Selected groups #609](https://github.com/hotwax/mantle-netsuite-connector/pull/609), [named items #638](https://github.com/hotwax/mantle-netsuite-connector/pull/638), [v3.3.8](https://github.com/hotwax/mantle-netsuite-connector/releases/tag/v3.3.8).

## Operations and platform

**Release-listed — Job Manager visibility.** v3.5.0 lists Shopify Bulk operations, shared-remote jobs, and System Tasks, which needs supported OMS 6.5.0 or later. It also adds instance-wide run history and Data Document Builder improvements, including document-specific previews and drag ordering. Instance-wide history supports All and Failed; Successful, Running, and Terminated filters and counts remain disabled pending a backend fix. [v3.5.0](https://github.com/hotwax/job-manager/releases/tag/v3.5.0), [run history #1072](https://github.com/hotwax/job-manager/pull/1072), [builder #1112](https://github.com/hotwax/job-manager/pull/1112), [field ordering #963](https://github.com/hotwax/job-manager/pull/963). [Read the Job Manager update](product-updates/job-manager-operations.md).

**Release-listed framework and app-specific adoption — diagnostic logs.** The shared framework adds local logs for filtering, copying, downloading, and clearing; optional remote forwarding needs configuration. Inventory Count v5.4.0 explicitly adopts logging. Later Company and Job Manager integrations are merged work, not established in their October releases. [Local logs #267](https://github.com/hotwax/accxui/pull/267), [AccxUI v1.13.0](https://github.com/hotwax/accxui/releases/tag/v1.13.0), [Inventory Count v5.4.0](https://github.com/hotwax/inventory-count/releases/tag/v5.4.0).

**Release-listed framework — installed-app refresh.** AccxUI v1.11.0 lists the fix for installed apps remaining on obsolete service workers. Framework release selection remains separate from each app's adoption and deployment. [AccxUI #236](https://github.com/hotwax/accxui/pull/236), [v1.11.0](https://github.com/hotwax/accxui/releases/tag/v1.11.0).

**Preview — rebuilt Pre-order App and supply lifecycle.** The merged frontend connects demand, future inventory, purchase orders, and shipment workflows. Late October work aligns API contracts, shipment batches, arrival-date changes, purchase-order cancellation, and order-item reservation release. Receiving future supply does not itself allocate waiting orders to physical stock. CSV help explains allocation-adjusted parent quantities. The backend migration and hosted acceptance remained open on November 4; this is not a general release announcement. [Frontend #397](https://github.com/hotwax/preorder/pull/397), [shipment batches #1258](https://github.com/hotwax/oms/pull/1258), [receiving #437](https://github.com/hotwax/hotwax-poorti/pull/437), [PO cancellation #1263](https://github.com/hotwax/oms/pull/1263), [arrival dates #1264](https://github.com/hotwax/oms/pull/1264), [reservation release #1265](https://github.com/hotwax/oms/pull/1265). [Read the preview](product-updates/preorder-workspace-preview.md).

## Version reference

These are observed October GitHub releases, not a universal upgrade bundle. Source links for private backend repositories require access. Do not infer that every merged feature above is included in the newest tag.

| Component | Selected October releases | What this establishes |
| --- | --- | --- |
| Order Manager | [v1.4.0](https://github.com/hotwax/order-manager/releases/tag/v1.4.0), [v1.5.0](https://github.com/hotwax/order-manager/releases/tag/v1.5.0) | v1.5.0 explicitly lists Routing and facility-picker changes. |
| Company | [v2.5.0](https://github.com/hotwax/company/releases/tag/v2.5.0) through [v2.9.0](https://github.com/hotwax/company/releases/tag/v2.9.0), including [v2.8.1](https://github.com/hotwax/company/releases/tag/v2.8.1) | Transfer controls, fulfillment-service locations, and app-version management are release-listed. v2.9.0 deployment evidence is dated October 25. |
| Order Routing | [v2.5.0](https://github.com/hotwax/order-routing/releases/tag/v2.5.0) | Includes postal-code rule filters; the diagnostics dashboard merged later. |
| Fulfillment | [v4.3.1](https://github.com/hotwax/fulfillment/releases/tag/v4.3.1); maintenance [v4.2.3](https://github.com/hotwax/fulfillment/releases/tag/v4.2.3) through [v4.2.6](https://github.com/hotwax/fulfillment/releases/tag/v4.2.6) | Packed is listed in v4.3.1 and v4.2.3; cancellation is separately listed in v4.2.4. No Open Orders inclusion is inferred. |
| Receiving | [v4.2.2](https://github.com/hotwax/receiving/releases/tag/v4.2.2) through [v4.2.4](https://github.com/hotwax/receiving/releases/tag/v4.2.4) | Ancestry excludes #739/#740 from v4.2.2 and v4.2.4; the later maintenance tags do not establish these features. |
| Inventory Count | [v5.3.0](https://github.com/hotwax/inventory-count/releases/tag/v5.3.0), [v5.3.1](https://github.com/hotwax/inventory-count/releases/tag/v5.3.1), [v5.4.0](https://github.com/hotwax/inventory-count/releases/tag/v5.4.0), [v5.4.1](https://github.com/hotwax/inventory-count/releases/tag/v5.4.1) | v5.3.0 lists count improvements; v5.3.1 adopts refresh-based version resolution; v5.4.0 lists logs. No extra feature is inferred from v5.4.1's empty release body. |
| Job Manager | [v3.4.2](https://github.com/hotwax/job-manager/releases/tag/v3.4.2), [v3.5.0](https://github.com/hotwax/job-manager/releases/tag/v3.5.0) | v3.5.0 lists the operations and builder work, with restricted instance-wide status filters and backend prerequisites. |
| AccxUI | [v1.11.0](https://github.com/hotwax/accxui/releases/tag/v1.11.0) through [v1.13.1](https://github.com/hotwax/accxui/releases/tag/v1.13.1) | v1.12.0 lists refresh-based version resolution; v1.13.0 adds logging. Each app must adopt a compatible build. |
| OMS release assembly | [v6.5.0](https://github.com/hotwax/hotwax-maarg-docker-config/releases/tag/v6.5.0) through [v6.5.4](https://github.com/hotwax/hotwax-maarg-docker-config/releases/tag/v6.5.4) | Release records published 19–23 October; no tenant rollout or production certification is inferred. |
| Shopify connector | [v4.5.0](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.5.0) through [v4.5.5](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.5.5) | Selected current feature-line releases; maintenance lines also received fixes. |
| NetSuite connector | [v3.5.0](https://github.com/hotwax/mantle-netsuite-connector/releases/tag/v3.5.0) through [v3.5.5](https://github.com/hotwax/mantle-netsuite-connector/releases/tag/v3.5.5); maintenance [v3.3.8](https://github.com/hotwax/mantle-netsuite-connector/releases/tag/v3.3.8) | v3.3.8 separately lists the late product imports. ERP-side scripts, configuration, and acceptance remain prerequisites. |
| BOPIS | [v5.4.1](https://github.com/hotwax/bopis/releases/tag/v5.4.1) | October release exists; its compare-only body does not establish inclusion of every merged fix. |
| Products, Pre-order, Transfers | No October GitHub release found in the full-month release API snapshot | Their merged changes need a separately verified app build and rollout. |

[Package overview](README.md) · [Claim and release evidence](source-ledger.md)
