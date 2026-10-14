---
description: >-
  Track which Maarg support and developer workflows have operational guides,
  which reuse existing documentation, and what still needs deeper coverage.
---

# Maarg Documentation Coverage

This checklist tracks the **Maarg v6.4.0** documentation expansion. It records publication status checked on **October 8, 2026**, against `everything-bagel-pub` at commit `3e58d74cfc3cf894a6214515f3a090eda6d34405`.

**Merged** means a guide is present in that checked publication-branch snapshot. All 26 platform/support workflow families below now have merged dedicated guides, including the former proposals in PRs #1902–#1905. Merged status establishes guide presence only; it does not establish product deployment or runtime acceptance.

The goal is a usable backend manual for support engineers, developers, and administrators. A guide should explain how to find the right screen, interpret the result, recognize a failure, and decide what is safe to do next.

## How Coverage Is Counted

- Count a coherent workflow once. A parent screen, list, detail page, and dialog do not become four separate documentation gaps.
- Search the entire documentation set before declaring a workflow missing. Existing Shopify, Unigate, webhook, deployment, and monitoring pages were reviewed for overlap.
- Use the current OMS flow when an equivalent exists. Historical implementation instructions do not establish the current service-job behavior.
- Distinguish generic platform operation from a provider-specific recipe. A Shopify sync article can be useful without covering the generic message or job tools.
- Use release-pinned source for action semantics, and identify the different runtime version used for screenshots. A screenshot of a filter does not validate a write operation or a populated result.
- Do not treat every release-manifest component as an enabled screen. Optional integrations, tenant extensions, wrappers, print templates, and test screens require separate relevance checks.

The matrix groups **26 platform/support workflow families**, with **26 merged dedicated guides** in the checked publication-branch snapshot. Customer-driven business guides are tracked separately below; adding one does not change this platform count.

This is guide-presence coverage, not a claim that the whole manual is complete or that the procedures have passed end-to-end tests. Runtime acceptance, safe failure examples, security-owner review, deployment differences, and customer-driven business workflows remain.

## Platform And Support Coverage

| # | Workflow Family | Publication Status And Guide | Remaining Verification |
| --- | --- | --- | --- |
| 1 | System Tasks | **Merged:** [Dedicated guide](system-tasks.md) | Populated task detail, history, and approved lifecycle example; list/filter screenshots already available |
| 2 | Relational database schema checks | **Merged:** [DB Missing Columns](db-missing-columns.md) | Isolated example with an actual missing column and generated SQL; current demo result is a clean scan |
| 3 | Service Jobs and Job Runs | **Merged:** [Dedicated runbook](service-jobs.md) | Representative successful/failed runs and approved recovery demonstration in an isolated environment |
| 4 | System Message investigation | **Merged:** [Dedicated runbook](system-messages.md) | Safe synthetic payload/error/history example and integration-specific replay verification |
| 5 | MDM configuration | **Merged:** [Dedicated guide](data-manager-configuration.md) | Approved sample configuration/template walkthrough; filter screenshot does not validate configuration changes |
| 6 | MDM import monitoring and failures | **Merged:** [Dedicated runbook](data-manager-imports.md) | Synthetic success, partial failure, cancellation, and crash-recovery examples |
| 7 | REST API discovery | **Merged:** [REST API Explorer](rest-api-explorer.md) | Safe API contract example and an explicitly approved test request if execution coverage is needed |
| 8 | Runtime log-file inspection | **Merged:** [Log Files](log-files.md) | Runtime verification and synthetic log example for the release-pinned screen; distinguish it from other log viewers |
| 9 | Search schema and indexing administration | **Merged:** [Search Admin](search-admin.md) | Approved isolated examples of schema differences and indexing completion; current screenshots only inspect controls/dialogs |
| 10 | Read-only indexed-document queries | **Merged:** [Solr Search](solr-search.md) | Sanitized representative results and failed-query examples; current screenshot shows the blank form |
| 11 | Order-routing execution diagnosis | **Merged:** [Order Routing Run Diagnostics](order-routing-runs.md) | Safe linked group/batch/run/log example; filter visibility alone does not validate execution outcomes |
| 12 | Getting started, version checks, and navigation | **Merged:** [Getting Started](getting-started.md) | Access-denied and session-expiry examples remain untested |
| 13 | Message Types and Remotes administration | **Merged:** [Message Types And Remotes](message-configuration.md) | Blank type form observed only; approved synthetic transport, mapping, shared-configuration, and receiver verification remain |
| 14 | Data Documents and Data Feeds | **Merged:** [Data Documents And Data Feeds](data-documents-feeds.md) | Generated/indexed payloads, release-specific output/window behavior, and receiver outcomes remain untested |
| 15 | Entity inspection and relationships | **Merged:** [Entity Inspection](entity-inspection.md) | Synthetic record-level relationship example remains untested |
| 16 | SQL Runner and SQL Script Runner | **Merged:** [SQL Tools](sql-tools.md) | Only literal SELECT and form evidence, with isolated change/recovery examples pending |
| 17 | Service definitions and execution tools | **Merged:** [Service Definitions And Execution](service-tools.md) | Approved service execution and downstream completion examples pending |
| 18 | Raw entity import, export, and snapshots | **Merged:** [Raw Entity Data Movement](entity-data-movement.md) | Authorized format round trips, partial failures, and isolated recovery pending |
| 19 | User-account administration | **Merged:** [User Accounts And Access Diagnosis](user-accounts.md) | Source-verified only; security-owner review and approved synthetic lifecycle/denial examples for the deployed realm |
| 20 | User groups, artifact groups, and authorization | **Merged:** [Groups And Artifact Authorization](authorization-groups.md) | Source-verified only; approved positive/negative permission tests, deployment policy review, and safe synthetic identities |
| 21 | Token administration | **Merged:** [Token Administration](token-administration.md) | Source-verified only; credential-specific issuance, expiry, replacement, and containment verification under an approved secure process |
| 22 | Component upgrades and recovery | **Merged:** [Component Upgrade Diagnosis](component-upgrades.md) | Populated failures and approved isolated repair/rollback outcomes remain |
| 23 | System dashboard, instances, threads, and caches | **Merged:** [Runtime Health Diagnostics](runtime-health.md) | Multi-node incident and approved recovery examples, active Instances probes untested |
| 24 | Audit, visit, and performance diagnostics | **Merged:** [Audit And Performance](audit-performance.md) | Synthetic populated records and effective deployment collection/retention verification remain |
| 25 | Resource inspection | **Merged:** [Resource Inspection](resource-inspection.md) | Source-verified only; an owner-approved synthetic location and metadata/content/download examples remain |
| 26 | Entity synchronization | **Merged:** [Entity Synchronization](entity-synchronization.md) | Selection/window/dependent validation, populated history, and destination outcomes pending |

## Existing Documentation To Reuse

These pages contain useful domain-specific detail. They should remain the primary source for that detail rather than being copied into each platform guide.

- [Shopify product sync](../shopify/product-sync.md): configuration, shared/per-shop job responsibilities, the message-to-MDM pipeline, and legacy migration
- [Unigate email integration](../unigate/email-integration.md): tenant onboarding, provider configuration, credentials, and validation
- [Custom webhook mechanism](../../knowledge-base/custom-webhook-mechanism.md): business event, DataDocument, DataFeed, and message architecture
- [Post-migration sanity checks](../../monitoring/README.md): cross-platform checks; use the generic Maarg runbooks for screen-level investigation and obtain specific approval for changes

These articles do not replace current OMS operating instructions. Use [Service Jobs](service-jobs.md) and [System Messages](system-messages.md) for the supported investigation paths; do not apply historical monitoring thresholds or recovery actions without checking the installed implementation.

## Customer-Support Backfill: October 10, 2026

The proposed [Shopify Transfer Sync investigation guide](../shopify/transfer-sync-troubleshooting.md) connects native transfer monitoring with receiving reconciliation and channel/physical-location inventory events. It covers ownership and start-date eligibility, staging versus record-level delivery, missing or ambiguous mappings, list/history limits, and approval-bound recovery. The receiving guide and Shopify navigation link to it. Duplicate product mappings can block native creation for a whole order; the guide does not prescribe keeping an arbitrary listing or toggling sync as a repair.

Source verification uses Company App v2.7.0 and Shopify connector v4.3.8 separately. The latest distribution by publication time remains Maarg v6.3.9, published October 8 at 13:34:59 UTC, with active Poorti v3.3.3 and connector v4.3.8 pins. Commented components were ignored. The higher-numbered v6.4.2 was published October 7 with Poorti v3.4.1 and connector v4.4.2. Company v2.7.0, published October 9, is a standalone frontend release; the distribution manifest does not establish its installation.

The guide distinguishes physical native-owner suppression from aggregate-channel routing, and ATP-to-Shopify-Available event delivery from physical quantity-on-hand and derived-kit reset exceptions. It uses the current Company flow and links to the existing inventory monitor rather than introducing legacy Job Manager screenshots. The four images across that complete inventory workflow and the linked System Messages filter image were inspected in full. No new image or runtime proof is claimed. The read-only demo remained at sign-in; installed versions, permissions, delivery outcomes, and any recovery remain unverified.

This addition leaves the platform-family count unchanged and does not duplicate the Cycle Count import/recount work in draft PR #1912 or its platform-status refresh. Remaining priorities are an approved synthetic runtime verification of transfer and count workflows; source-qualified Draft/prelaunch product-sync eligibility beyond the mapping picker; safe count/receiving correction outcomes; and read-only diagnosis of reported fulfillment-queue symptoms. Reports remain investigation leads, not reproduced defects. Receiving-history display changes need release and installation evidence before being described as available.

## Next Work Batches

1. **Keep publication and verification status separate.** The 26 platform guides are merged. Continue their remaining checks below and refresh this snapshot after later documentation merges. A published guide does not turn a source-only procedure into runtime acceptance.
2. **Complete support examples.** Add synthetic job/message/import/routing failures and verification of their downstream outcomes. Keep replay, cancellation, and lock recovery behind an explicit approved test procedure.
3. **Validate access procedures.** Have the identity/security owner review the deployed authentication and authorization policy before any synthetic lifecycle or positive/negative permission tests. Never generate a credential or expose an identity merely to obtain a screenshot.
4. **Validate data and recovery outcomes.** Use approved isolated examples for entity formats, feed/synchronization selection and time boundaries, upgrade failures, and repair/rollback. Record resulting state and downstream verification.
5. **Verify diagnostic collection.** Add synthetic multi-node audit/visit/performance cases and check effective collection, node scope, and retention settings.
6. **Backfill customer-driven business workflows.** Prioritize recurring support questions and confirmed release changes across OMS record inspection, decision rules, Shopify setup/imports, order routing, fulfillment, and connector administration. Reuse existing domain guides before adding another page.
7. **Review specialized tools when needed.** Test/validation dashboards, AI operations, optional preorder, and tenant-specific screens need their own audience, version, security, and environment assessment. Their presence in a manifest alone is not a documentation priority.

## Product Import Backfill: October 10, 2026

The existing [Shopify product sync guide](../shopify/product-sync.md) now covers missing Draft/prelaunch products, effective query filters, product/variant identity, the separate selected-product path, stage-specific verification, bounded recent views, and approved recovery. The existing navigation path and the `run-and-verify-a-sync` anchor are preserved. This is a substantive update to the current Company workflow rather than a duplicate guide or a legacy created-products-feed recipe.

The source baseline is Company App v2.7.0 with connector v4.3.8 reviewed separately. The connector's default bulk query excludes Archived products, not Draft; custom queries can override that default. Product import has no inventory-tracking or Online Store publication gate in this reviewed path. Full sync retains eligibility filtering and is not forced recreation or deletion reconciliation. The selected-product path has a first-250-variants limit per product, and a per-product synced result can include unchanged data. These distinctions are documented without asserting a customer's deployed configuration or changing launch/publication decisions.

The latest distribution by publication remains Maarg v6.3.9, with active connector v4.3.8 and Poorti v3.3.3. XML comments were excluded. Standalone Poorti v3.4.1 and Company v2.7.0 releases do not establish inclusion or installation. Demo sign-in remains pending, so this batch is source-verified only; no live import, migration, retry, or correction was performed.

The complete related product-operation and console pages were read, and their nine referenced images plus the System Messages filter image were visually reviewed. Loading-only and older console illustrations are not reused as current-flow screenshots. This target-branch guide contains no screenshot, credential-entry recipe, private connection example, or customer-specific data. The consumer-branch illustration cleanup remains separate.

This batch leaves the platform status/count refresh in draft PR #1912 and the native-transfer workflow in draft PR #1913 unchanged. Next priorities: approved runtime checks for Draft and archived/custom-filter cases, targeted partial or unknown outcomes, products with more than 250 variants, and identifier conflicts; safe count/receiving corrections; and source-backed fulfillment-queue diagnosis. Reports remain leads rather than reproduced defects.

## Verification Standard For Future Updates

A workflow is ready to call **runtime-verified** only when its actual steps, resulting state, and meaningful failure case have been checked in an appropriate environment. Otherwise label it **source-verified** or **UI-observed**, state the runtime version, and describe exactly what remains untested. Never create production data, rerun an integration, change access, alter a schema, or expose private information solely to obtain a screenshot.

## Cycle Count HTTPS Intake Backfill: October 14, 2026

The proposed [Cycle Count HTTPS File Intake guide](../launchpad/cycle-count/https-import.md) fills the gap between an externally generated count file and verified OMS counts. It documents prerequisites and API discovery, exact multipart/CSV fields, asynchronous receipt and message correlation, error and pagination limits, count/session/product reconciliation, and bounded recovery when acceptance is uncertain. It also separates intake from automatic recount decisions, store submission, inventory adjustments, and results reporting. Navigation and the existing app-import guide link to it; the 26 platform-family count is unchanged.

The target-branch snapshot is `everything-bagel-pub` at `e08bb4beab790f8bdfae757759ea30b83466ea2f`. PRs #1912, #1913, and #1915 are merged there. Draft PRs #1918 (fulfillment queues), #1923 (receiving history), and #1928 (Cycle Count submission/progress) remain separate; this batch does not duplicate their work or refresh their historical coverage sections. The consumer branch's Inventory Count API page is a placeholder, while its existing provider-specific count integration describes a different transport and reporting workflow.

Source verification uses Poorti v3.3.5, Maarg util v4.3.3, and framework v4.1.2 for the direct upload and processing contract. The latest distribution by publication time is Maarg v6.3.11, published October 14 at 11:28:09 UTC. Active XML entries and the production `oms-suite` were checked separately: they include Poorti v3.3.5, OMS v3.3.4, Shopify connector v4.3.10, and util v4.3.3. Commented entries were ignored. The earlier v6.5.0-RC1 and higher-numbered standalone component versions do not establish this distribution's contents or installation. Cycle Count App v5.2.1 is a separate frontend release.

The complete related import/export, message, API-discovery, service-job, record-inspection, and consumer count-integration workflow was reviewed. The API Explorer image, System Messages filter image, and provider-specific count-sync diagram were inspected in full. None establishes a live HTTPS Cycle Count upload, and none is reused as one. No new images, private connection examples, or customer data are added. The demo remained at sign-in; installed versions, permissions, response shape, processing, and final outcomes remain runtime-unverified.

Priority backlog: approved isolated HTTPS intake and unknown-outcome fixtures, including failed-row/duplicate checks; a separately verified automatic-recount decision contract and results/adjustment reporting scope; source-qualified correction outcomes for count and receiving workflows; and runtime acceptance for the three existing draft guides. Retain the separate consumer terminology/navigation work in PRs [#1925](https://github.com/hotwax/oms-documentation/pull/1925) and [#1926](https://github.com/hotwax/oms-documentation/pull/1926). The Products screenshot review remains in [#1927](https://github.com/hotwax/oms-documentation/pull/1927), covering [product management](https://github.com/hotwax/oms-documentation/blob/56b9a19ffc056afbbb059b8c5fcd9bdc63885489/documents/retail-operations/products/product-management.md) and its replacement illustrations; that screenshot review remains pending. No consumer-branch files are changed. Customer reports are leads, not reproduced defects; unreleased display/cache changes need release and installation evidence before being described as available.

## Customer-Support Backfill: October 6, 2026

The [Cycle Count Export Troubleshooting guide](../launchpad/cycle-count/export-troubleshooting.md) adds source-verified coverage for history loading, queued generation, disabled downloads, file retrieval, local saving, and report-scope validation. It is merged in the October 8 publication snapshot, but is not runtime-verified. The published frontend baseline is Cycle Count App v5.2.1; a separate build-specific section covers merged source for Error/No file labels, the latest-error dialog, and inconclusive error-detail responses. The Poorti v3.3.2 baseline is compared with corrected v3.3.3 and v3.4.1 generation code. The guide includes a preservation and outcome-verification checklist for approved recovery. No installed pairing or live export outcome is claimed.

Remaining work: inspect an approved synthetic export end to end, including an empty selection and retrieval failure; verify the installed versions, effective export selection, and file retention. This business-workflow addition does not change the 26-family platform coverage count above. Continue the remaining platform verification and customer-driven backlog rather than treating this one guide as completion.

Release review late on October 6 found Maarg v6.4.1 (published 13:06:27 UTC) as the latest publication. Its active manifest pins Poorti v3.4.1; the same day's v6.3.5 pins Poorti v3.3.3. Both include the reviewed CSV generation correction. XML-commented entries were excluded. These distribution checks do not update the v6.4.0 platform-guide baseline automatically or establish deployment. Cycle Count App v5.2.1 remains the newest published app release at this check; its later merged error-display change is documented conditionally, not as a released or installed feature. Other message/fulfillment changes require their own tagged-source comparison before updating a guide.

Priority after this update: confirm an authorized synthetic export fixture and installed versions; check empty-selection, failed generation, error-detail request failure, and readable output after approved recovery. The read-only demo check reached the sign-in page, so it supplied no authenticated fixture or installed-version evidence. Continue improving the merged receiving, order-sync, and product-import guides rather than adding duplicate generic guides; qualify new connector behavior against its exact release and configured route.

## Customer-Support Backfill: October 8, 2026

The proposed [Cycle Count Import And Recount Troubleshooting guide](../launchpad/cycle-count/import-troubleshooting.md) fills the gap between a usable export and a store-ready recount. It covers template/mapping preparation, local parsing versus server acceptance, recent-history limits, asynchronous processing, error/file inspection, duplicate-prone name reuse, facility/date/product verification, and approval-bound correction. It uses the incoming `ImportInventoryCounts` path rather than assuming generic Data Manager log actions apply. Navigation and the merged export guide link to it. No customer incident, private source, or live data is reproduced.

The new guide is source-verified against Cycle Count App v5.2.1 and Poorti v3.3.3. A read-only demo check reached sign-in, so installed versions, a successful upload, invalid-input outcome, uncertain submission, safe correction, and store readiness remain unverified. No new screenshots are included. The linked System Messages filter image was inspected in full and remains consistent with its existing limited filter-only caption.

Release scope was refreshed separately: Maarg v6.3.9, published October 8 at 13:34:59 UTC, is the latest distribution by publication time. Its active `myaddons.xml` pins Poorti v3.3.3 and Shopify connector v4.3.8; XML-commented entries were excluded. The semver-higher v6.4.2 was published October 7 and pins Poorti v3.4.1 and connector v4.4.2. Cycle Count App v5.2.1 remains the latest standalone app release and is not a frontend pin in that distribution manifest. These facts do not establish installed versions or replace the platform guides' v6.4.0 source baseline.

Remaining priorities: approved synthetic export/import verification; source-qualified Draft/prelaunch product eligibility; exact-release native-transfer switch coverage; safe count/receiving correction procedures; and read-only diagnosis of reported fulfillment-queue symptoms. Customer reports are investigation leads, not reproduced defects. Receiving-history product-name changes require release and installation evidence before being described as available.
