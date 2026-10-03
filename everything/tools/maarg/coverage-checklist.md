---
description: >-
  Track which Maarg support and developer workflows have operational guides,
  which reuse existing documentation, and what still needs deeper coverage.
---

# Maarg Documentation Coverage

This checklist tracks the **Maarg v6.4.0** documentation expansion. It records publication status checked on **October 3, 2026**, against `everything-bagel-pub` at commit `05ea630e8005c23583daa6ce14d95b6e96471200`.

**Merged** means a guide is present in that checked publication-branch snapshot. **Proposed** means a guide was available in an open draft pull request at that check and was not yet merged into that snapshot. The same status table is used across the proposed batches; a guide appearing in a preview does not change its merged status. Use the linked pull request for its latest review outcome. Neither status establishes a product deployment or runtime acceptance.

The goal is a usable backend manual for support engineers, developers, and administrators. A guide should explain how to find the right screen, interpret the result, recognize a failure, and decide what is safe to do next.

## How Coverage Is Counted

- Count a coherent workflow once. A parent screen, list, detail page, and dialog do not become four separate documentation gaps.
- Search the entire documentation set before declaring a workflow missing. Existing Shopify, Unigate, webhook, deployment, monitoring, and OFBiz pages were reviewed for overlap.
- Keep **Maarg-specific** and **OFBiz-specific** behavior separate. OFBiz JobSandbox instructions do not establish how Moqui service jobs behave.
- Distinguish generic platform operation from a provider-specific recipe. A Shopify sync article can be useful without covering the generic message or job tools.
- Use release-pinned source for action semantics, and identify the different runtime version used for screenshots. A screenshot of a filter does not validate a write operation or a populated result.
- Do not treat every release-manifest component as an enabled screen. Optional integrations, tenant extensions, wrappers, print templates, and test screens require separate relevance checks.

The matrix groups **26 platform/support workflow families**: **11 merged dedicated guides** and **15 proposed dedicated guides** across [PR #1902](https://github.com/hotwax/oms-documentation/pull/1902) (4), [PR #1903](https://github.com/hotwax/oms-documentation/pull/1903) (3), [PR #1904](https://github.com/hotwax/oms-documentation/pull/1904) (3), and [PR #1905](https://github.com/hotwax/oms-documentation/pull/1905) (5). Each scoped family therefore has a merged or proposed guide, while the checked publication-branch snapshot contains 11 merged Maarg workflow guides within this scope.

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
| 12 | Getting started, version checks, and navigation | **Proposed:** [Getting Started / PR #1902](https://github.com/hotwax/oms-documentation/pull/1902) | Access-denied and session-expiry examples remain untested |
| 13 | Message Types and Remotes administration | **Proposed:** [Message Types And Remotes / PR #1905](https://github.com/hotwax/oms-documentation/pull/1905) | Blank type form observed only; approved synthetic transport, mapping, shared-configuration, and receiver verification remain |
| 14 | Data Documents and Data Feeds | **Proposed:** [Data Documents And Data Feeds / PR #1903](https://github.com/hotwax/oms-documentation/pull/1903) | Generated/indexed payloads, release-specific output/window behavior, and receiver outcomes remain untested |
| 15 | Entity inspection and relationships | **Proposed:** [Entity Inspection / PR #1902](https://github.com/hotwax/oms-documentation/pull/1902) | Synthetic record-level relationship example remains untested |
| 16 | SQL Runner and SQL Script Runner | **Proposed:** [SQL Tools / PR #1902](https://github.com/hotwax/oms-documentation/pull/1902) | Only literal SELECT and form evidence, with isolated change/recovery examples pending |
| 17 | Service definitions and execution tools | **Proposed:** [Service Definitions And Execution / PR #1902](https://github.com/hotwax/oms-documentation/pull/1902) | Approved service execution and downstream completion examples pending |
| 18 | Raw entity import, export, and snapshots | **Proposed:** [Raw Entity Data Movement / PR #1903](https://github.com/hotwax/oms-documentation/pull/1903) | Authorized format round trips, partial failures, and isolated recovery pending |
| 19 | User-account administration | **Proposed:** [User Accounts And Access Diagnosis / PR #1905](https://github.com/hotwax/oms-documentation/pull/1905) | Source-verified only; security-owner review and approved synthetic lifecycle/denial examples for the deployed realm |
| 20 | User groups, artifact groups, and authorization | **Proposed:** [Groups And Artifact Authorization / PR #1905](https://github.com/hotwax/oms-documentation/pull/1905) | Source-verified only; approved positive/negative permission tests, deployment policy review, and safe synthetic identities |
| 21 | Token administration | **Proposed:** [Token Administration / PR #1905](https://github.com/hotwax/oms-documentation/pull/1905) | Source-verified only; credential-specific issuance, expiry, replacement, and containment verification under an approved secure process |
| 22 | Component upgrades and recovery | **Proposed:** [Component Upgrade Diagnosis / PR #1904](https://github.com/hotwax/oms-documentation/pull/1904) | Populated failures and approved isolated repair/rollback outcomes remain |
| 23 | System dashboard, instances, threads, and caches | **Proposed:** [Runtime Health Diagnostics / PR #1904](https://github.com/hotwax/oms-documentation/pull/1904) | Multi-node incident and approved recovery examples, active Instances probes untested |
| 24 | Audit, visit, and performance diagnostics | **Proposed:** [Audit And Performance / PR #1904](https://github.com/hotwax/oms-documentation/pull/1904) | Synthetic populated records and effective deployment collection/retention verification remain |
| 25 | Resource inspection | **Proposed:** [Resource Inspection / PR #1905](https://github.com/hotwax/oms-documentation/pull/1905) | Source-verified only; an owner-approved synthetic location and metadata/content/download examples remain |
| 26 | Entity synchronization | **Proposed:** [Entity Synchronization / PR #1903](https://github.com/hotwax/oms-documentation/pull/1903) | Selection/window/dependent validation, populated history, and destination outcomes pending |

## Existing Documentation To Reuse

These pages contain useful domain-specific detail. They should remain the primary source for that detail rather than being copied into each platform guide.

- [Shopify product sync](../shopify/product-sync.md): configuration, shared/per-shop job responsibilities, the message-to-MDM pipeline, and legacy migration
- [Unigate email integration](../unigate/email-integration.md): tenant onboarding, provider configuration, credentials, and validation
- [Custom webhook mechanism](../../knowledge-base/custom-webhook-mechanism.md): business event, DataDocument, DataFeed, and message architecture
- [Post-migration sanity checks](../../monitoring/README.md): cross-platform checks; use the generic Maarg runbooks for screen-level investigation and obtain specific approval for changes

These articles do not replace generic Maarg operating instructions. The existing [System Monitoring Guide](../../monitoring/system-monitoring-guide.md) includes OFBiz and NiFi procedures; its job thresholds and JobSandbox actions must not be carried over to Maarg without verification.

## Next Work Batches

1. **Review the proposed guides.** PRs #1902–#1905 use this identical publication-status snapshot so their coverage files can merge together without conflicting counts. Following approved merges, refresh the snapshot against the publication branch and replace merged PR references with local guide links. Draft availability is not publication or runtime acceptance.
2. **Complete support examples.** Add synthetic job/message/import/routing failures and verification of their downstream outcomes. Keep replay, cancellation, and lock recovery behind an explicit approved test procedure.
3. **Validate access procedures.** Have the identity/security owner review the deployed authentication and authorization policy before any synthetic lifecycle or positive/negative permission tests. Never generate a credential or expose an identity merely to obtain a screenshot.
4. **Validate data and recovery outcomes.** Use approved isolated examples for entity formats, feed/synchronization selection and time boundaries, upgrade failures, and repair/rollback. Record resulting state and downstream verification.
5. **Verify diagnostic collection.** Add synthetic multi-node audit/visit/performance cases and check effective collection, node scope, and retention settings.
6. **Backfill customer-driven business workflows.** Prioritize recurring support questions and confirmed release changes across OMS record inspection, decision rules, Shopify setup/imports, order routing, fulfillment, and connector administration. Reuse existing domain guides before adding another page.
7. **Review specialized tools when needed.** Test/validation dashboards, AI operations, optional preorder, and tenant-specific screens need their own audience, version, security, and environment assessment. Their presence in a manifest alone is not a documentation priority.

## Verification Standard For Future Updates

A workflow is ready to call **runtime-verified** only when its actual steps, resulting state, and meaningful failure case have been checked in an appropriate environment. Otherwise label it **source-verified** or **UI-observed**, state the runtime version, and describe exactly what remains untested. Never create production data, rerun an integration, change access, alter a schema, or expose private information solely to obtain a screenshot.
