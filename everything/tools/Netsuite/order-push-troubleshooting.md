---
description: Trace a missing NetSuite sales order through order-push rules, Data Manager processing, and the exact sales-channel, department, and location mappings.
---

# Diagnose NetSuite Order Push And Mappings

Use this guide when a sales order is missing from NetSuite, an order-push run looks successful without a destination order, or NetSuite rejects a sales-channel, department, or location reference. Start with one order and identify the first incomplete stage. A pending count, a generated file, and an accepted NetSuite order establish different things.

This workflow is source-verified for **Company App v2.8.0** and **NetSuite connector v3.3.6**. It follows the OMS rule-group order-push path. Confirm the installed versions and active downstream processor before interpreting a mapping. No live export or correction was tested.

## Before You Start

- Confirm the OMS environment, Product Store, NetSuite account and subsidiary, Company App and connector versions, and incident time with its time zone.
- Obtain the OMS order ID, sales channel, order status, affected lines and ship groups, and any existing NetSuite order identification. Keep customer and record details in the approved private support channel.
- Use accounts authorized to view Company, the relevant OMS configuration and processing history, and the destination transaction. Permission to inspect does not authorize editing mappings or sending an order.
- Preserve the original error and any uncertain request outcome. Ask the NetSuite owner to check for an already-created transaction before proposing another attempt.

{% hint style="warning" %}
Keep diagnosis read-only. **Run now**, rule toggles, mapping chips, their remove icons, **Apply**, and facility **Edit/Remove** controls can change configuration or initiate processing. Do not use them to refresh a screen.
{% endhint %}

## 1. Confirm The Monitor's Store And Freshness

Open **Company > NetSuite > Order sync monitoring**. The **Orders pending sync** card opens the same monitor.

In the reviewed Company release, this page takes its Product Store from the first cached store with a nonempty external ID, interpreted by the app as a subsidiary mapping. It is not an account selector or proof that every mapped store is represented. If several stores have external IDs, have the administrator confirm the monitor's resolved Product Store before using its totals.

| Observation | Interpretation and next check |
| --- | --- |
| Loading placeholders | The first read has not supplied the data yet. Preserve the distinction between loading and an empty result. |
| **No NetSuite product store** | The page has no resolved store. Check the configured store and access; do not create a mapping just to enable monitoring. |
| **Orders pending sync** | Sales orders in that store without an effective `NETSUITE_ORDER_ID` identification. This count does not test all export rules or confirm that NetSuite has no matching transaction. |
| **Unavailable** | The count could not be obtained. A missing endpoint, permission error, or other read failure can produce this state; it is not zero and does not by itself identify the cause. |
| **Checked** | Time of the count check. Compare it with the incident and with the other evidence; this is not the last successful order export. |
| **Recent failures** | Errors in the recent cached rule-group runs across the store's displayed groups. It is not the total number of failed orders or a complete error archive. |
| **Active rules** | Active rules in the selected group. A rule being active does not prove its conditions were applied or an order was delivered. |

The pending view does not impose an approved-order status filter. Treat it as an identification backlog, not a list of orders that are all ready to send. Conversely, an effective NetSuite identification excludes an order from this count even if a later operation still needs attention.

The monitor uses cached reads. In this release, group retrieval requests up to 50 active groups, rule retrieval up to 200 active/archived rules, and displayed run histories are limited to recent entries, normally 25. Neither a first page nor an unchanged cached value proves completeness. For older incidents, missing groups, or larger configurations, use the authorized underlying records and actual pagination. Do not clear browser data or change stores as a substitute for confirming scope.

## 2. Read The Selected Group And Its Actual Conditions

Under **Order push rule groups**, select the relevant group row. Selecting a row changes the displayed group; it does not run it. Record its group ID, **Job** name, and the rule IDs and sequence numbers.

Compare the order's saved fields with the displayed filters and sorting. Check **Archived** rules separately; their presence is not evidence that they participate in the current export.

### A Displayed Filter May Not Be Applied

Company v2.8.0 can display **Not applied by the order push**. In connector v3.3.6, the rule service recognizes condition types `ENTCT_FILTER` and `ENTCT_SORT_BY`; the similarly named `ENTCT_ATP_FILTER` and `ENTCT_ATP_SORT_BY` are not consumed by that service. The Company monitor can display both conventions and flags the latter.

If a condition is flagged, capture its type, field, operator, value, rule ID and installed version for the integration owner. Do not treat the displayed clause as a working restriction, remove it, or enable/run the group to test it. A missing restriction can broaden selection beyond the intended orders.

Even without a warning, verify the saved conditions and implementation used by the installed service. The source selector scopes to the Product Store and sales-order type, requires an associated item/ship group, and excludes effective NetSuite order identifications. It does not establish a universal approval, payment, customer, or mapping gate merely because the rule has no visible filters.

### Read Runs Without Equating Them With Delivery

In **Recent runs**, inspect the displayed result, start time and duration. Confirm the end time in the underlying run or job history. A green icon is based on the error flag; a run without an end time is not confirmed complete.

Only execution through the rule-group scheduler supplies this monitor's rule-group history. The same business process scheduled as a plain service job can have job history without a matching row here. Use the displayed **Job** name and [Service Jobs](../maarg/service-jobs.md) to inspect the relevant execution, saved parameters, time range, and errors. An empty recent-run list is not proof that no work occurred.

**Run now** schedules work. **Order push scheduled** would acknowledge scheduling, not NetSuite acceptance. Rule toggles also save a status change immediately; they are not read-only filters.

## 3. Follow The Order From Selection To Processing

The reviewed rule-group path runs `run#NetSuiteDMOrderFeed`, which calls `run#NetSuiteOrderFeedRule` for active rules. The rule creates a CSV containing selected **order IDs** and a Data Manager log for its configured processor. That file is not the final NetSuite transaction payload and does not itself select the outbound department or sales-channel value.

Trace these stages for the same order:

| Stage | Evidence to establish |
| --- | --- |
| Selection | Intended Product Store, group and rule, effective conditions, relevant execution, and whether the exact order ID was selected |
| Data Manager handoff | The execution's `dataManagerConfigId`, matching log ID, file membership, creation time, and current processing state |
| Record processing | The configuration's actual processing service, record-level result/error, and any downstream request or destination reference |
| Mapping | Source records, resolved values, field scope and type, and the actual mapped transaction for this attempt |
| NetSuite result | The accepted transaction ID or rejection for the same order, followed by the destination fields and line quantities |
| OMS acknowledgement | The corresponding NetSuite order identification and its effective dates in OMS |

Read the group's existing job and its **Parameters** to obtain `dataManagerConfigId`. Both reviewed rule services require this value; there is no universal default configuration. Open that configuration and inspect **Import Service Name** and its matching Data Manager log.

For this path, util v4.3.3 creates an **import-type** log in **Pending** status for the order-ID CSV, even though the business goal is an export. Use **MDM > Imports > Find Import**, filter by **Log Id** or **Config Id** and creation time, and follow [Data Manager Imports](../maarg/data-manager-imports.md) for inspection. The configuration's own log list includes all log types.

The selector passes file metadata and the configuration ID when creating the log; it does not explicitly supply Product Store, job-run, rule-group or rule IDs. Job/store correlation fields can be blank, and this call establishes no direct rule/group link. Correlate the configuration, generation time, file and contained order ID rather than requiring a populated job/store link. A restrictive store filter can otherwise hide the relevant log.

Read exact processed and failed counts and the affected record's error. A successful group wrapper or a **Finished** processing log is insufficient proof that this order was accepted. If the route uses system messages, correlate the specific message through [System Messages](../maarg/system-messages.md); do not assume every order-push stage produces one.

Have the integration owner identify the downstream service and mapping configuration used for the attempt. A Company field label or the order-ID selection file alone cannot establish the final outbound value. Preserve the distinction between current configuration and the configuration/payload used by the earlier execution.

## 4. Compare Identifier Types Before Changing A Mapping

Use **Company > NetSuite > Sales Channel**, **Departments**, and **Company > Facilities > the affected facility > External mappings** as read views. Keep edits closed. For authoritative saved values or relationships, use narrowly filtered [Entity Inspection](../maarg/entity-inspection.md) with the exact record keys and effective dates.

| Value | What to compare |
| --- | --- |
| OMS sales channel | The order's `salesChannelEnumId` and its `ORDER_SALES_CHANNEL` enumeration. Preserve the enum ID, description, and code as separate fields. |
| **NetSuite sales channel** in Company | The enumeration's `enumCode`. Verify whether the active downstream mapper uses this value and which NetSuite field/list member it expects. A descriptive label is not necessarily the required reference. |
| Shopify source shown beside a channel | Company finds a matching source mapping across shops. The first displayed match does not prove which mapping belongs to this order's shop. Check the shop-specific mapping independently. |
| OMS facility ID | The internal identity of the facility. It is distinct from the facility's external ID and from a Shopify location ID. |
| **Facility External ID** | The saved `Facility.externalId` shown under External mappings. Establish what identifier the installed NetSuite route expects; do not replace it with a display name or a different system's ID. |
| Order origin and fulfillment locations | Compare the order-origin facility, current line/ship-group facility, and any applicable transfer source separately. A location mapping can be valid while belonging to the wrong role in this order. |
| **NetSuite department ID** in Company | Company v2.8.0 reads the facility identification type `ORDR_ORGN_DPT`. Verify its effective dates and the source used by the downstream mapper. It is not a location ID. |
| Default department relationship | Connector v3.3.6 also defines `FacilityDefaultDepartmentView`: the effective `DEFAULT_DEPARTMENT` facility-party relationship and that party's external ID. If the installed processor reads this model, a Company department chip alone does not verify it. |
| Product Store external ID | The subsidiary value used by the reviewed Company mapping. Keep subsidiary, facility/location, department, and sales channel distinct. |

Copy identifiers exactly, including leading zeros or prefixes. If multiple active rows match, or the source and destination disagree about the kind of identifier, stop for reconciliation. Do not choose the first similarly named record.

A department identification and a default-department relationship are separate records. Editing one is not proof that every processor reading the other has changed. Determine which source feeds the failed field before any approved correction.

### Custom Sales-Channel Fields Need Their Own Mapping Check

When the processor uses the connector's custom-field model, compare:

- The destination record type and whether the field belongs on the transaction header or a line
- The field's script ID and value type
- The configured OMS source entity, field and key, or its fixed value
- Any mapping type, the exact source lookup key, and its mapped value
- The actual field/value sent for the affected order and the destination's response

The custom-field definition's internal ID, its list/record type, and the selected list member's ID have different meanings. Do not substitute one for another. In the reviewed value resolver, blank source values and missing mappings can leave a field out; a **List/Record** value is sent as an ID reference. A missing field and a rejected field are therefore different findings.

Do not infer the correct business channel or department from a successful order at another store. Ask the business and integration owners to confirm the intended attribution and NetSuite account scope.

## 5. Handle Failed Saves And Unknown Outcomes

If an operator already tried a mapping change, preserve the original error and inspect the saved record through a fresh supported read before repeating it.

In Company v2.8.0, the sales-channel code is changed in the displayed row before the save finishes. A failed save can leave the new value visible even when the server did not accept it. A filled chip is not sufficient evidence of persistence. Likewise, an error closing or a loader disappearing does not establish that a department or facility mapping was saved.

If an export timed out, determine whether NetSuite already created the order and whether only the acknowledgement is missing. Do not clear an existing order identification, recreate the order, replay a whole file, or broaden a rule to make the backlog smaller. An identification can affect future selection; changing it is an operational change.

## 6. Agree On One Bounded Recovery And Verify It

The recovery owner should establish the failed stage, exact affected orders, correct mapping and scope, previous destination outcomes, and whether any queued or running work still carries the earlier data. A mapping correction does not rewrite an already-generated payload or undo an accepted transaction.

After the approved action, verify:

1. The intended saved mapping through a fresh read, including its effective dates and account/store scope.
2. The specific new processing result, affected record counts, and absence of unresolved record-level errors.
3. The actual NetSuite order, required sales-channel/department/subsidiary values, each line's product and location, and quantities.
4. The OMS NetSuite identification and any separate acknowledgement.
5. Remaining exceptions using the same criteria, rather than only a reduced pending count.

For an order that already exists but lacks fulfillment or billing, continue with [Fulfillment And Invoice Status Troubleshooting](../shopify/fulfillment-status-troubleshooting.md). Inventory publication and Shopify Available quantities are separate workflows; an order-export mapping repair does not establish inventory synchronization.

Escalate privately with versions, incident time, Product Store, group/rule/job/log references, order and line identities, exact field types, expected versus saved/sent values, the first meaningful error and whether the destination outcome is known. Redact private URLs, credentials, personal data and unrelated payload content.

## Verification Scope

The Company workflow was reviewed at [v2.8.0](https://github.com/hotwax/company/releases/tag/v2.8.0), including its [order-sync monitor](https://github.com/hotwax/company/blob/bf0bcb3c88afc1f8c3bfff58d3d8aa198e311503/src/views/NetSuiteSyncMonitor.vue), [bounded background reads](https://github.com/hotwax/company/blob/bf0bcb3c88afc1f8c3bfff58d3d8aa198e311503/src/workers/domains/netSuiteOrderPushDomain.ts), [sales-channel display and saves](https://github.com/hotwax/company/blob/bf0bcb3c88afc1f8c3bfff58d3d8aa198e311503/src/views/SalesChannel.vue), [department source](https://github.com/hotwax/company/blob/bf0bcb3c88afc1f8c3bfff58d3d8aa198e311503/src/views/Departments.vue), and [facility mappings](https://github.com/hotwax/company/blob/bf0bcb3c88afc1f8c3bfff58d3d8aa198e311503/src/views/FacilityDetails.vue). NetSuite connector v3.3.6 was checked separately for pending-order scope, rule selection, Data Manager handoff, mapping models and custom-field resolution. The relevant log defaults and configuration/import-list behavior were separately checked at util v4.3.3; linked platform guides retain their own stated baselines.

The October 17, 2026 release review found OMS distribution v6.3.13, published October 16, as the latest distribution by publication time. Its active manifest declares NetSuite connector v3.3.6, but the default production component set does **not** include it; installation is optional. Company v2.8.0 is a standalone frontend release. Neither declaration nor publication proves that either component is installed.

The related processing, entity, fulfillment and inventory guides were reviewed in full. The two existing Data Manager/System Messages filter images were inspected and remain limited illustrations of those filters. No screenshot is offered as proof of NetSuite mapping or order-delivery behavior. The authorized demo reached sign-in only; installed versions, populated monitor results, destination delivery and recovery remain runtime-unverified.
