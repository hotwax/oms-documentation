---
title: October 2026 release notes
slug: product-updates/release-notes/2026-10
contentType: release-note
month: 2026-10
status: draft
coverageThrough: 2026-10-23
supplementalCoverageThrough: 2026-10-25
metaDescription: October updates cover product calendars, routing visibility, store operations, Shopify synchronization, returns, Job Manager, and Company app version selection.
tagNames: [Release Note]
key: release-notes:2026-10
---

<!-- markdownlint-configure-file { "MD025": { "front_matter_title": "" } } -->

# October 2026 release notes

HotWax Commerce's October updates focus on understanding routing decisions, keeping store workflows clear, and following synchronization across Shopify, OMS, and NetSuite.

> Draft through **23 October 2026**, Asia/Kolkata, with a targeted Company app-version addendum verified **25 October 2026**. Other October 24–25 changes have not been collected here. This is a month-to-date editorial package. **Release-listed** means a GitHub release explicitly names the change; **Merged** means the source change landed, with no matching app release established here; **Preview** means development and acceptance remain in progress. Neither a merge nor a release tag proves deployment to a particular tenant.

## Company app versions

**Deployed, verified October 25, 2026.** Company v2.9.0 adds per-instance UAT and production version controls, release dates and expandable notes, public hosting checks before selection and saving, and combined change history with usernames and local timestamps. Teams can control rollout timing and return to an earlier release while it remains hosted. `Default` follows the environment's main URL build, which may differ from the newest GitHub release. Existing sessions need login re-entry to resolve a changed selection; an ordinary refresh is insufficient. [Read the Company update](product-updates/company-app-version-management.md) and the [app version guide](https://github.com/hotwax/oms-documentation/blob/codex/company-app-version-docs/documents/system-admin/administration/company/manage-app-versions.md). [Company v2.9.0](https://github.com/hotwax/company/releases/tag/v2.9.0), [#520](https://github.com/hotwax/company/pull/520).

## Product management

**Merged — product calendar and catalog controls.** Search the full store calendar, load results in pages, and edit lifecycle dates for one or several selected products. Review identifier coverage, clearer product identity, and Shopify association checks. Bulk selection covers loaded rows, and product history requires the matching OMS fix. [Products #80](https://github.com/hotwax/products/pull/80), [#87](https://github.com/hotwax/products/pull/87), [#70](https://github.com/hotwax/products/pull/70). [Read the product update](product-updates/product-calendar-and-catalog-control.md).

## Routing and order management

**Release-listed — order routing history.** Order Manager v1.5.0 adds the Routing graph, inventory timeline, and short-stock actions. The facility picker pins the current location and warns when no eligible facility covers the selected items. [Release v1.5.0](https://github.com/hotwax/order-manager/releases/tag/v1.5.0).

**Merged — network diagnostics.** Order Routing adds weekly routing and store-shipping views alongside current safety-stock and shipping-exclusion diagnostics. Current stock buffers are not historical weekly balances. The dashboard requires compatible OMS data documents and merged after v2.5.0. [Dashboard #584](https://github.com/hotwax/order-routing/pull/584).

**Release-listed — inventory rule filters.** Order Routing v2.5.0 adds carrier postal-code mapping filters and sorting. Later fixes handle rule edits with no existing action and empty product-feature/tag selectors. [Release v2.5.0](https://github.com/hotwax/order-routing/releases/tag/v2.5.0), [#585](https://github.com/hotwax/order-routing/pull/585), [#590](https://github.com/hotwax/order-routing/pull/590). [Read the product update](product-updates/routing-and-inventory-visibility.md).

## Store operations

**Merged — receiving by tracking code.** Receiving adds cached pending-transfer search, tracking-code navigation, package context, and scan-all draft shortcuts. Uncertain receipts survive cache resets and require review; confirmed receipts are not sent twice because a refresh failed. These changes are outside v4.2.2. [#739](https://github.com/hotwax/receiving/pull/739), [#740](https://github.com/hotwax/receiving/pull/740).

**Merged — count progress and mobile entry.** Inventory Count improves scanning, export failure status, session synchronization, zero-quantity display, and navigation. Receiving and Inventory Count also adopt shared iPad keyboard handling, which needs the matching framework commit. [Count scanning #1463](https://github.com/hotwax/inventory-count/pull/1463), [exports #1472](https://github.com/hotwax/inventory-count/pull/1472), [submission #1479](https://github.com/hotwax/inventory-count/pull/1479), [session re-entry #1482](https://github.com/hotwax/inventory-count/pull/1482), [admin navigation #1485](https://github.com/hotwax/inventory-count/pull/1485), [browser Back #1489](https://github.com/hotwax/inventory-count/pull/1489), [Receiving iPad #757](https://github.com/hotwax/receiving/pull/757), [Inventory Count iPad #1487](https://github.com/hotwax/inventory-count/pull/1487).

**Release-listed — packed transfers waiting to ship.** Fulfillment v4.2.3 adds the Packed transfer segment; v4.2.4 adds cancellation from that shipment-detail flow. These are v4.2 maintenance releases. [v4.2.3](https://github.com/hotwax/fulfillment/releases/tag/v4.2.3), [v4.2.4](https://github.com/hotwax/fulfillment/releases/tag/v4.2.4).

**Merged — live Open Orders.** The separate Fulfillment rework adds a live Open list, local search, loading progress, and whole-order rejection behavior under its documented stock conditions. It merged after v4.3.0 and is not included in that tag. BOPIS separately honors the configured inventory adjustment choice when rejecting items. [Fulfillment #1702](https://github.com/hotwax/fulfillment/pull/1702), [BOPIS #908](https://github.com/hotwax/bopis/pull/908). [Read the store operations update](product-updates/store-receiving-and-counting.md).

## Shopify integration

**Release-listed — transfer monitoring and control.** Company v2.6.0 exposes partial sync failures and mapping-repair context. v2.8.0 adds eligible transfer detachment through a single connector call. Transfers already held by Shopify cannot be detached by this flow. [v2.6.0](https://github.com/hotwax/company/releases/tag/v2.6.0), [v2.8.0](https://github.com/hotwax/company/releases/tag/v2.8.0).

**Merged — fulfillment-service locations.** Company can include Shopify app/fulfillment-service locations in import and audit views. These locations are unselected by default and require connector support. This merged after Company v2.8.0. [Company #494](https://github.com/hotwax/company/pull/494).

**Release-listed — fulfillment recovery.** Shopify connector v4.5.0 lists queued shipment-driven sends, durable storage of returned fulfillment IDs, and adoption of existing successful fulfillments in the closed-line recovery case. Sender setup is required; this does not promise exactly-once delivery. [Release v4.5.0](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.5.0).

**Release-listed and later merged fixes — inventory resets.** v4.5.2 lists active-inventory comparison before Data Manager import. Follow-ups skip and count unmapped inventory items and exclude active channel or virtual locations from inbound physical-stock resets. Repeated, indexed item rejections can be removed from an outbound retry while valid items continue; other failure types still stop. [Comparison #979](https://github.com/hotwax/mantle-shopify-connector/pull/979), [unmapped items #992](https://github.com/hotwax/mantle-shopify-connector/pull/992), [location guard #1007](https://github.com/hotwax/mantle-shopify-connector/pull/1007), [outbound retries #920](https://github.com/hotwax/mantle-shopify-connector/pull/920).

**Merged — lower order-sync payload retention.** The order-history hash service stops retaining full input payloads in execution tracking. [#1026](https://github.com/hotwax/mantle-shopify-connector/pull/1026). [Read the Shopify product update](product-updates/shopify-transfer-and-fulfillment-control.md).

## Returns and NetSuite

**Release-listed — connect arrivals and receipts.** Per-item Shopify dispositions determine restocking, and received return shipments provide input for NetSuite receipt batches. NetSuite v3.5.1 adds a default five-minute incremental receipt overlap, optional booking at the return facility, and handling for eligible cancelled RMAs. v3.5.2 adds bin-aware product receipt detail, with configuration and population prerequisites. [Shopify v4.5.0](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.5.0), [NetSuite v3.5.0](https://github.com/hotwax/mantle-netsuite-connector/releases/tag/v3.5.0), [v3.5.1](https://github.com/hotwax/mantle-netsuite-connector/releases/tag/v3.5.1), [v3.5.2](https://github.com/hotwax/mantle-netsuite-connector/releases/tag/v3.5.2).

**Merged with limitations — restocking fees.** RMA preparation can add the configured restocking-fee item. The final mapping path still needs acceptance, and an already-created RMA does not receive a later fee automatically. [#573](https://github.com/hotwax/mantle-netsuite-connector/pull/573). [Read the returns update](product-updates/returns-and-netsuite-reconciliation.md).

## Operations and platform

**Merged — Job Manager visibility.** The Shopify Bulk operations page compares Shopify completion with HotWax processing. Shared-remote jobs reappear in the catalog. System Tasks supports reviewing, assigning, and resolving existing tasks on supported OMS versions, with a 6.5.0 minimum version gate. [#1114](https://github.com/hotwax/job-manager/pull/1114), [#1119](https://github.com/hotwax/job-manager/pull/1119), [#1120](https://github.com/hotwax/job-manager/pull/1120). [Read the Job Manager update](product-updates/job-manager-operations.md).

**Merged — installed-app refresh.** The shared framework addresses installed apps remaining on obsolete service workers. Framework release selection remains separate from deploying each app. [AccxUI #236](https://github.com/hotwax/accxui/pull/236).

**Preview — rebuilt Pre-order App.** The merged frontend connects demand, future inventory, purchase orders, and shipment workflows. CSV help explains allocation-adjusted parent quantities. The backend migration and hosted acceptance remain open; this is not a general release announcement. [#392](https://github.com/hotwax/preorder/pull/392), [#394](https://github.com/hotwax/preorder/pull/394), [#395](https://github.com/hotwax/preorder/pull/395). [Read the preview](product-updates/preorder-workspace-preview.md).

## Version reference

These are observed October GitHub releases, not a universal upgrade bundle. Source links for private backend repositories require access. Do not infer that every merged feature above is included in the newest tag.

| Component | Selected October releases | What this establishes |
| --- | --- | --- |
| Order Manager | [v1.4.0](https://github.com/hotwax/order-manager/releases/tag/v1.4.0), [v1.5.0](https://github.com/hotwax/order-manager/releases/tag/v1.5.0) | v1.5.0 explicitly lists Routing and facility-picker changes. |
| Company | [v2.5.0](https://github.com/hotwax/company/releases/tag/v2.5.0) through [v2.8.0](https://github.com/hotwax/company/releases/tag/v2.8.0) | Transfer monitor and detach changes are release-listed; fulfillment-service location import merged later. |
| Order Routing | [v2.5.0](https://github.com/hotwax/order-routing/releases/tag/v2.5.0) | Includes postal-code rule filters; the diagnostics dashboard merged later. |
| Fulfillment | [v4.3.0](https://github.com/hotwax/fulfillment/releases/tag/v4.3.0); [v4.2.3](https://github.com/hotwax/fulfillment/releases/tag/v4.2.3), [v4.2.4](https://github.com/hotwax/fulfillment/releases/tag/v4.2.4) | Parallel release lines. Packed-transfer changes are on v4.2.x; the Open Orders rework merged after v4.3.0. |
| Receiving | [v4.2.2](https://github.com/hotwax/receiving/releases/tag/v4.2.2) | Published 2 October; ancestry excludes the featured #739/#740 changes. |
| Inventory Count | [v5.2.1](https://github.com/hotwax/inventory-count/releases/tag/v5.2.1) | Published 5 October; ancestry excludes the featured #1463 changes. |
| AccxUI | [v1.9.0](https://github.com/hotwax/accxui/releases/tag/v1.9.0), [v1.10.0](https://github.com/hotwax/accxui/releases/tag/v1.10.0) | Later service-worker and keyboard changes need a later compatible build. |
| OMS release assembly | [v6.5.0](https://github.com/hotwax/hotwax-maarg-docker-config/releases/tag/v6.5.0) through [v6.5.4](https://github.com/hotwax/hotwax-maarg-docker-config/releases/tag/v6.5.4) | Release records published 19–23 October; no tenant rollout or production certification is inferred. |
| Shopify connector | [v4.5.0](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.5.0) through [v4.5.5](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.5.5) | Selected current feature-line releases; maintenance lines also received fixes. |
| NetSuite connector | [v3.5.0](https://github.com/hotwax/mantle-netsuite-connector/releases/tag/v3.5.0) through [v3.5.5](https://github.com/hotwax/mantle-netsuite-connector/releases/tag/v3.5.5) | Selected current feature-line releases; ERP-side scripts and client configuration remain separate prerequisites. |
| Products, Job Manager, Pre-order, BOPIS, Transfers | No October GitHub release found in the release API snapshot | Their merged changes need a separately verified app build and rollout. |

[Package overview](README.md) · [Claim and release evidence](source-ledger.md)
