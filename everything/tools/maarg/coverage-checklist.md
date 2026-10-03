---
description: >-
  Track which Maarg support and developer workflows have operational guides,
  which reuse existing documentation, and what still needs deeper coverage.
---

# Maarg Documentation Coverage

This checklist tracks the **Maarg v6.4.0** documentation expansion. The starting Maarg section contained an overview and glossary. The initial operational batch added eleven dedicated guides. This branch adds runtime health, audit/performance, and component-upgrade diagnosis. Separate draft batches add developer inspection and data movement; their pending state is explicit below.

The goal is a usable backend manual for support engineers, developers, and administrators. A guide should explain how to find the right screen, interpret the result, recognize a failure, and decide what is safe to do next.

## How Coverage Is Counted

- Count a coherent workflow once. A parent screen, list, detail page, and dialog do not become four separate documentation gaps.
- Search the entire documentation set before declaring a workflow missing. Existing Shopify, Unigate, webhook, deployment, monitoring, and OFBiz pages were reviewed for overlap.
- Keep **Maarg-specific** and **OFBiz-specific** behavior separate. OFBiz JobSandbox instructions do not establish how Moqui service jobs behave.
- Distinguish generic platform operation from a provider-specific recipe. A Shopify sync article can be useful without covering the generic message or job tools.
- Use release-pinned source for action semantics, and identify the different runtime version used for screenshots. A screenshot of a filter does not validate a write operation or a populated result.
- Do not treat every release-manifest component as an enabled screen. Optional integrations, tenant extensions, wrappers, print templates, and test screens require separate relevance checks.

The matrix below deliberately groups **26 platform/support workflow families**. Fourteen have dedicated guides in this branch. Seven more have dedicated guides in separate pending draft PRs, one has partial or adjacent coverage, and four remain without a dedicated runbook. Pending drafts are linked for review and are not treated as merged documentation; together the batches would provide twenty-one dedicated guides. This is a scoped checklist, not a claim that every Maarg feature has been inventoried or that all runbooks have passed end-to-end runtime tests.

## Platform And Support Coverage

| # | Workflow family | Current coverage | Remaining work |
| --- | --- | --- | --- |
| 1 | System Tasks | [Dedicated guide](system-tasks.md) | Populated task detail, history, and approved lifecycle example; list/filter screenshots already available |
| 2 | Relational database schema checks | [DB Missing Columns](db-missing-columns.md) | Isolated example with an actual missing column and generated SQL; current demo result is a clean scan |
| 3 | Service Jobs and Job Runs | [Dedicated runbook](service-jobs.md) | Representative successful/failed runs and approved recovery demonstration in an isolated environment |
| 4 | System Message investigation | [Dedicated runbook](system-messages.md) | Safe synthetic payload/error/history example and integration-specific replay verification |
| 5 | MDM configuration | [Dedicated guide](data-manager-configuration.md) | Approved sample configuration/template walkthrough; filter screenshot does not validate configuration changes |
| 6 | MDM import monitoring and failures | [Dedicated runbook](data-manager-imports.md) | Synthetic success, partial failure, cancellation, and crash-recovery examples |
| 7 | REST API discovery | [REST API Explorer](rest-api-explorer.md) | Safe API contract example and an explicitly approved test request if execution coverage is needed |
| 8 | Runtime log-file inspection | [Log Files](log-files.md) | Runtime verification and synthetic log example for the release-pinned screen; distinguish it from other log viewers |
| 9 | Search schema and indexing administration | [Search Admin](search-admin.md) | Approved isolated examples of schema differences and indexing completion; current screenshots only inspect controls/dialogs |
| 10 | Read-only indexed-document queries | [Solr Search](solr-search.md) | Sanitized representative results and failed-query examples; current screenshot shows the blank form |
| 11 | Order-routing execution diagnosis | [Order Routing Run Diagnostics](order-routing-runs.md) | Safe linked group/batch/run/log example; filter visibility alone does not validate execution outcomes |
| 12 | Getting started, version checks, and navigation | Draft guide in [PR #1902](https://github.com/hotwax/oms-documentation/pull/1902) | Merge and reconcile local navigation; access-denied and session-expiry examples remain untested |
| 13 | Message Types and Remotes administration | Partial: [System Messages](system-messages.md), [Shopify sync](../shopify/product-sync.md), [Unigate](../unigate/email-integration.md) | Generic configuration lifecycle, safe validation, least privilege, and secret-safe screenshots |
| 14 | Data Documents and Data Feeds | Draft guide in [PR #1903](https://github.com/hotwax/oms-documentation/pull/1903); existing [Webhook architecture](../../knowledge-base/custom-webhook-mechanism.md) | Merge and reconcile local navigation; generated/indexed payloads, release-specific output/window behavior, and receiver outcomes remain untested |
| 15 | Entity inspection and relationships | Draft guide in [PR #1902](https://github.com/hotwax/oms-documentation/pull/1902) | Merge and reconcile local navigation; synthetic record-level relationship example remains untested |
| 16 | SQL Runner and SQL Script Runner | Draft guide in [PR #1902](https://github.com/hotwax/oms-documentation/pull/1902) | Merge and reconcile local navigation; only literal SELECT and form evidence, with isolated change/recovery examples pending |
| 17 | Service definitions and execution tools | Draft guide in [PR #1902](https://github.com/hotwax/oms-documentation/pull/1902) | Merge and reconcile local navigation; approved service execution and downstream completion examples pending |
| 18 | Raw entity import, export, and snapshots | Draft guide in [PR #1903](https://github.com/hotwax/oms-documentation/pull/1903) | Merge and reconcile local navigation; authorized format round trips, partial failures, and isolated recovery pending |
| 19 | User-account administration | No dedicated Maarg runbook | Account state, lifecycle, access troubleshooting, and safe identity examples |
| 20 | User groups, artifact groups, and authorization | No dedicated Maarg runbook | Membership and artifact permission evaluation, least privilege, and denied-action investigation |
| 21 | Token administration | No dedicated Maarg runbook | Token lifecycle, permission scope, secret handling, revocation, and credential-safe verification |
| 22 | Component upgrades and recovery | [Component Upgrade Diagnosis](component-upgrades.md) | Sanitized populated failures, release-specific step selection, and approved isolated repair/rollback outcomes; filters observed only |
| 23 | System dashboard, instances, threads, and caches | [Runtime Health Diagnostics](runtime-health.md) | Multi-node incident and approved recovery examples; thread-pool/cache summaries observed, active Instances probes not executed |
| 24 | Audit, visit, and performance diagnostics | [Audit And Performance](audit-performance.md) | Synthetic populated audit/visit/hit examples and effective deployment collection/retention; audit/bin filters observed only |
| 25 | Resource inspection | No dedicated Maarg runbook | Authorized locations, content/download boundaries, credential avoidance, and safe file/log inspection |
| 26 | Entity synchronization | Draft guide in [PR #1903](https://github.com/hotwax/oms-documentation/pull/1903) | Merge and reconcile local navigation; selection/window/dependent validation, populated history, and destination outcomes pending |

## Existing Documentation To Reuse

These pages contain useful domain-specific detail. They should remain the primary source for that detail rather than being copied into each platform guide.

- [Shopify product sync](../shopify/product-sync.md): configuration, shared/per-shop job responsibilities, the message-to-MDM pipeline, and legacy migration
- [Unigate email integration](../unigate/email-integration.md): tenant onboarding, provider configuration, credentials, and validation
- [Custom webhook mechanism](../../knowledge-base/custom-webhook-mechanism.md): business event, DataDocument, DataFeed, and message architecture
- [Post-migration sanity checks](../../monitoring/README.md): cross-platform checks; use the generic Maarg runbooks for screen-level investigation and obtain specific approval for changes

These articles do not replace generic Maarg operating instructions. The existing [System Monitoring Guide](../../monitoring/system-monitoring-guide.md) includes OFBiz and NiFi procedures; its job thresholds and JobSandbox actions must not be carried over to Maarg without verification.

## Next Work Batches

1. **Complete support examples.** Add synthetic job/message/import/routing failures and verification of their downstream outcomes. Keep replay, cancellation, and lock recovery behind an explicit approved test procedure.
2. **Integrate developer inspection.** Review and merge PR #1902, then replace draft references with local guide links. Validate synthetic record/permission/failure examples separately.
3. **Integrate data movement.** Review and merge PR #1903, then replace draft references with local links. Keep format, selection, time-boundary, and downstream validation explicit.
4. **Document access administration.** Accounts, groups, artifact authorization, and token lifecycle with synthetic identities and no exposed secrets.
5. **Validate upgrade diagnosis.** The dedicated guide connects versions, tracking, schema, logs, and System Tasks. Add an isolated, verified failure and recovery example.
6. **Validate runtime diagnostics.** Health and audit/performance guides now distinguish passive evidence, active probes, and mutating controls. Add synthetic multi-node cases and verify effective collection settings.
7. **Expand business-component coverage by use.** OMS record inspection and decision rules, Shopify setup/imports, order-routing configuration, fulfillment profiles, and optional connector administration. Prioritize recurring support work before rarely used or tenant-specific screens.
8. **Cover specialized tools separately.** Test/validation dashboards, AI operations, and optional preorder or tenant-specific workflows need their own audience, version, security, and environment review.

## Verification Standard For Future Updates

A workflow is ready to call **runtime-verified** only when its actual steps, resulting state, and meaningful failure case have been checked in an appropriate environment. Otherwise label it **source-verified** or **UI-observed**, state the runtime version, and describe exactly what remains untested. Never create production data, rerun an integration, change access, alter a schema, or expose private information solely to obtain a screenshot.
