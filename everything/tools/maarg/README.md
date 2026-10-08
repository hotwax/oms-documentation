---
description: >-
  Use Maarg to inspect operational tasks, diagnose schema differences, and
  work with HotWax Commerce platform tools.
---

# Maarg

Maarg provides application and integration tools for HotWax Commerce OMS. It supports data modeling, service execution, security, automation, and operational troubleshooting.

Maarg can connect the core Order Management System (OMS) with external systems such as Shopify, NetSuite, and warehouse management tools, but it is not limited to integrations. It also supports administrative screens, entities, services, scheduled jobs, data documents, imports, exports, system messages, and monitoring tools. These capabilities help teams manage order flows, synchronize inventory and product data, process background jobs, and troubleshoot system activity from one platform.

## Start With The Workflow

| Need | Guide |
| --- | --- |
| Investigate an operational task | [System Tasks](system-tasks.md) |
| Check relational database columns | [DB Missing Columns](db-missing-columns.md) |
| Inspect a scheduled job or failed execution | [Service Jobs](service-jobs.md) |
| Trace an integration message | [System Messages](system-messages.md) |
| Review shared message and connection settings | [Message Types And Remotes](message-configuration.md) |
| Understand an import configuration | [Data Manager Configuration](data-manager-configuration.md) |
| Investigate import failures | [Data Manager Imports](data-manager-imports.md) |
| Find an installed API contract | [REST API Explorer](rest-api-explorer.md) |
| Diagnose an account or sign-in problem | [User Accounts And Access Diagnosis](user-accounts.md) |
| Review memberships and authorization rules | [Groups And Artifact Authorization](authorization-groups.md) |
| Identify a credential and plan its lifecycle | [Token Administration](token-administration.md) |
| Inspect an approved resource location | [Resource Inspection](resource-inspection.md) |
| Read a bounded runtime log slice | [Log Files](log-files.md) |
| Diagnose search schema or indexing | [Search Admin](search-admin.md) |
| Query an indexed document | [Solr Search](solr-search.md) |
| Trace routing execution | [Order Routing Run Diagnostics](order-routing-runs.md) |

## Versions And Verification

These guides use the Maarg 6.4.0 release composition as their source baseline. Screenshots come from an authorized hosted demonstration instance with an older component baseline; each guide states what was observed and what remains source-verified. Viewing a dialog does not establish that its write or recovery action has been tested.

Start with the relevant record ID, environment, component version, and incident time. Keep investigations read-only until the owner approves a specific recovery action and its downstream effects are understood.

- [Documentation Coverage](coverage-checklist.md): Workflow-level coverage, existing articles to reuse, and remaining documentation and runtime checks.
- [Glossary](glossary.md): Platform terms used in these guides.
