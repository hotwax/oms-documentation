---
description: >-
  Diagnose incomplete read-only Cycle Count queries, separate access failures
  from schema differences, and verify report scope before using the results.
---

# Read-Only Cycle Count Query Diagnostics

Use this guide when a read-only integration cannot find a count, returns fewer sessions or items than expected, or reports an access error. A successful request is not proof of complete reporting or permission to change inventory.

## Prerequisites And Verification Scope

Confirm the intended environment, authorized caller, count identifier, facility, and the time of the investigation. Use an approved read-only client and keep credentials in its secure sign-in process, never in queries, tickets, screenshots, or documentation.

This guide is **source-verified against moqui-gql 1.5.2**. The reviewed Maarg 6.3.19 manifest includes that version and Poorti 3.3.9 in its default OMS suite. A published manifest does not establish the installed versions, enabled API, effective caller permissions, or completeness of a particular environment. No authenticated demo query or recovery outcome has been verified for this guide.

## Find The Contract For The Correct Environment

1. Start with [Getting Started](getting-started.md) to identify the environment and installed components.
2. Have an authorized API owner inspect the installed GraphQL schema through the supported read-only client. The reviewed component exposes its SDL at `GET /rest/s1/graphql/sdl`; this is a GraphQL contract, not a guarantee that every REST resource or database field is exposed.
3. Confirm that the required root, fields, search keys, and pagination arguments exist in that installed schema before constructing the query.
4. Record the component version and observation time with the report. A schema copied from another environment or a newer release is not installation evidence.

The [REST API Explorer](rest-api-explorer.md) helps inspect separately registered REST contracts. Opening its documentation does not authenticate a different connector or grant access to a GraphQL operation.

## Select The Count And Preserve Identity

Use `cycleCount` with the known `workEffortId` when available. For a name search through `cycleCounts`, also constrain `workEffortTypeId` to `CYCLE_COUNT_RUN` and confirm the facility. The reviewed type reads WorkEffort records; a matching name alone does not prove that a result is a Cycle Count.

| Field | Diagnostic use |
| --- | --- |
| `workEffortId`, `workEffortName` | Preserve stable identity alongside the display name |
| `workEffortTypeId`, `facilityId` | Confirm the work type and location rather than merging same-name results |
| `statusId` | Record current status without treating it as proof that downstream adjustments finished |
| Estimated and actual start/completion dates | Preserve time-zone context and distinguish planned dates from recorded activity |
| `inventoryCountImportId`, `workEffortId` on a session | Associate each session with the selected count |
| `importItemSeqId`, `productId`, `productIdentifier` | Keep line identity and product identifiers separate |
| `quantity`, `systemQuantityOnHand`, `isRequested` | Inspect counted and system quantities and whether the product was requested; these fields do not supply a universal financial valuation |

Do not interpret a missing or null field as zero, and do not infer retail value or a complete financial report from this Cycle Count schema.

## Check Every Result Boundary

The reviewed nested `sessions` and `locks` edges are bounded plain lists with a default of five. They do not expose connection cursors. A returned list of five is not proof there are exactly five records.

For complete session discovery, use the installed `cycleCountSessions` root filtered by `workEffortId` and follow its connection pagination. For items, use the session's `items` connection or the `cycleCountItems` root filtered by `inventoryCountImportId`. The nested items default is 100.

- Follow the installed connection's page information and cursors until the result is exhausted. Preserve the same filters and ordering.
- Treat cursors as opaque values. Do not build or edit them manually.
- Reconcile distinct session and line identities across pages. Identify an item by the pair `inventoryCountImportId` and `importItemSeqId`; an item sequence alone can recur in another session. Do not count repeated rows twice.
- Plain lock lists require an explicit bound supported by the installed schema or a separately authorized inspection path when completeness matters. Do not invent a cursor path for them.
- Separate page retrieval from report acceptance. Pages are live reads, not a snapshot held across requests; record the collection window and recheck material changes before relying on the result.
- If the response contains errors or indicates truncation, do not present the remaining data as a complete report.

## Diagnose Errors Without Changing Access Or Data

| Symptom | Safe next step |
| --- | --- |
| Authentication required | Record the failed operation and time; ask the access owner to verify the intended caller and configured sign-in route. A working browser session does not establish the connector's identity |
| Authenticated request denied | Check operation-specific authorization with the security owner; do not add an administrative group as a diagnostic test |
| Unknown root, field, or filter | Compare the installed schema and component version with the requested contract before assuming data is missing |
| First page looks complete | Check whether the edge is a bounded list or a connection, then verify all relevant pages and identities |
| `FIRST_REQUIRED` or `FIRST_TOO_LARGE` | Supply a bounded page size accepted by the installed contract |
| `FIELD_NOT_FILTERABLE` or `OPERATOR_NOT_ALLOWED` | Use a declared search key and supported operator; a visible output field is not automatically filterable |
| `DEPTH_EXCEEDED` or `COST_EXCEEDED` | Reduce nesting and selected fields, and retrieve smaller bounded results |
| `THROTTLED` | Respect the returned budget information and the approved client's backoff; do not rapidly repeat the same request or change limits |
| Invalid cursor, truncation, row, or deadline error | Retain sanitized error details, narrow the query, and ask the API owner to investigate; do not silently restart and combine partial results |

A lock row includes dates, caller/device information, lease duration, and heartbeat time. These are diagnostic evidence only. Do not release a lock, cancel a count, approve a session, post inventory, or schedule a recount to test a read failure.

## Escalate With A Bounded Evidence Package

In an approved private support channel, provide the environment, installed versions, expected read operation, observation time and time zone, sanitized error, count/session identity, query filters and selected fields, pagination completion, and expected versus observed totals. Exclude credentials, tokens, unnecessary personal information, and raw private logs.

State what remains unknown: caller identity, access decision, schema availability, pagination completeness, concurrent changes, or downstream business outcome. These are separate checks; a successful sign-in does not resolve all of them.

## Related Guides

- [User Accounts And Access Diagnosis](user-accounts.md)
- [Groups And Artifact Authorization](authorization-groups.md)
- [Cycle Count Export Troubleshooting](../launchpad/cycle-count/export-troubleshooting.md)
- [Documentation Coverage](coverage-checklist.md)

