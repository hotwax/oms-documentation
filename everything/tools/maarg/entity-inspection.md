---
description: >-
  Find Maarg entity definitions, inspect a bounded set of records, and follow
  relationships without accidentally changing application data.
---

# Entity Inspection And Relationships

Use the **Entities** tools to identify an entity's fields and keys, find a particular record, and trace its related records. Start with the entity definition and an incident identifier. These are generic administration screens: some pages that are useful for inspection also contain working create, update, delete, and schema-change controls.

## Version And Access

This guide uses **Maarg v6.4.0**, **runtime v4.1.0**, **framework v4.2.0**, and **maarg-util v4.4.0**. Maarg-util replaces the runtime's ordinary entity Find and Auto Screen Find screens; the search behavior below follows those active Maarg overrides. Open **Tools > Entity > Entities > Entity List** in the observed demo. Menu placement and your authorized route can differ by deployment.

**Verification scope:** The procedures and behavior below are source-verified. The entity catalog filter and EnumerationType definition/relationship metadata were observed read-only in the hosted demo on October 3, 2026, displaying framework 4.0.0 and util 4.3.0. See [Getting Started](getting-started.md#documentation-baseline-and-demo-evidence) for displayed-version versus commit differences. A record-level relationship walkthrough and mutation/recovery tests remain pending. No record or schema changes were executed for this guide.

Use an account authorized for the entity and screen in the intended environment. Record availability and restrictions differ by tool and installed screen override. A visible definition or menu item does not grant record access or establish a complete sensitive-entity exclusion policy. Use the dedicated administration screen or ask the environment owner; do not use SQL or another tool to work around a denial.

{% hint style="warning" %}
**Edit** opens an editable record page. **New Value**, **Create**, **Update**, and **Delete** can change live data. **Check/Update Table**, **Check/Update All Tables**, foreign-key controls, and index controls can change the database schema. Keep an investigation read-only unless a specific change, target, and recovery procedure have been approved.
{% endhint %}

## Find The Correct Definition

1. Open **Tools > Entity > Entities > Entity List**, or your deployment's authorized equivalent.
2. Enter a distinctive part of the entity name in **Filter Regexp**, then select **Filter**. This is a case-insensitive regular-expression filter over entity names, not a record-value search. Start with a simple word; punctuation such as `.` has regular-expression meaning.
3. Set **View Option** to **All Entities** when identifying an unfamiliar entity. **Exclude View Entities** hides view definitions. **Master Entities** is a narrower framework-selected subset, not a list of every entity that can own related data.
4. Check both **Package** and **Entity Name**. Similar names in different packages are different definitions. Record the full entity name.
5. Select **Detail** before opening records. Inspect the primary keys, field types, and relationships you will need for the investigation.

The release source sets a 60-entry catalog page default; the observed demo initially displayed 20. Check the actual page range rather than assuming that one page is the whole catalog. Filtering this catalog does not filter records within an entity. Use the selected entity's **Find** action for that separate task.

Catalog filtering matches definition names; it does not query business records or perform a schema action.

### Read Entity Detail

| Detail | How To Use It |
| --- | --- |
| View Entity? | Establish whether the result represents a base entity or a query definition |
| Short Alias | Recognize another identifier for the entity; retain the full name in incident evidence |
| Table Name and Entity Group | Identify the physical mapping and datasource context before discussing SQL with an operator |
| Field Name, Type, Column, Is PK | Confirm the logical field, database mapping, and every part of a composite key |
| Audit, Encrypt, Localize, Default | Understand field metadata; these flags do not demonstrate that a particular operation was audited or processed successfully |
| Related Entity, Type, Key Map | Understand which source fields map to which related fields |
| Dependents and All Descendants | Inspect model dependencies; this is not a count or list of the current record's related values |

The page can also show entity event rules and service event rules associated with generated entity services. Their presence matters when planning changes: a generic entity write can trigger additional behavior. Do not copy internal rule definitions into a public incident report.

**Check/Update Table** is not a read-only validation button. For a metadata-only missing-column investigation, follow [DB Missing Columns](db-missing-columns.md), which generates proposed SQL without applying it.

Relationship mappings describe the model, not the values belonging to a particular record.

## Find A Specific Record

{% hint style="warning" %}
The Maarg Find screens require at least one recognized search condition. Supply a narrow identifier filter before searching. A link that already carries search criteria can execute a query when opened; parameter presence alone does not make its scope small or authorized.
{% endhint %}

1. From the definition select **Entity Find**, or select **Find** on the catalog row.
2. Open **Find Options** and enter the known identifier. For a composite primary key, use every known key field. Prefer an exact match when the identifier is complete.
3. Check the selected operator and any case or negation options. A contains search can find several records that share an identifier fragment. Leaving a value blank is not the same as requesting an empty-value condition.
4. Add a relevant status or time range only when it helps answer the incident question. Record the timezone used for timestamps.
5. Select **Find** and confirm the full entity name, active filters, page range, and relevant values.
6. If several rows match, refine the filters before opening records. Do not assume the first row is the latest or the correct one without checking the sort and key.

### Understand Search Scope And Limits

- **Search parameters are required.** Maarg-util's active Find override sets `require-parameters="true"`; the framework returns an empty result when no recognized search condition is present. A supplied or inherited search condition can make the page query on render, so inspect the actual criteria and keep them narrow.
- **50 is the default page size, not a hard total limit.** The source starts with a 50-row page; search-form pagination and the page-size control can change it. A page with 50 rows does not prove that only 50 match.
- **Small pages do not guarantee cheap queries.** A query can scan or join a large dataset, and pagination can require a count. Narrow the search instead of repeatedly increasing the page size.
- **The list can use a configured datasource clone.** Where clones are replicas, replication timing can matter. If a recent change is missing, ask the operator to verify the read datasource and replication state before concluding that the write failed.
- **CSV and XLSX controls export data.** Review the selected fields, filters, export scope, and sharing destination first. Do not assume an export contains only the rows currently visible on screen.

### Distinguish Auto Screen

**Auto Screen** is an alternative generated find-and-edit workflow. It is not a read-only preview. Maarg-util's active Auto Screen Find override requires search parameters and disables the base runtime's preliminary full-entity count. There is no million-record threshold controlling this Maarg search requirement.

Supply a narrow filter in Auto Screen as well as ordinary Find. Do not switch tools to evade a search guard. Both routes expose mutating controls, but their layouts and record-detail navigation differ; the relationship procedure below refers to **Entity Data Edit**, reached from the ordinary Find page.

## Inspect One Record And Follow Its Relationships

1. On the filtered ordinary Find list, check the row's complete primary key and select **Edit**. Opening the record is separate from submitting **Update**, but the page is editable.
2. Confirm the primary-key values at the top. The generated form displays primary keys and makes non-key fields editable. Leave all fields unchanged during inspection.
3. In **Related Entities**, identify the relationship by its title, related entity name, and type. Several relationships can point to the same entity for different purposes.
4. Review **ID Map**. It contains the target filter/key values built from this record's relationship mapping. Compare it with **Key Map** in Entity Detail. Empty source values can be omitted, so a nonempty ID Map does not establish that every expected key is present.
5. For a `many` relationship with a nonempty map, select **Find** to open related records with mapped parameters. Confirm the destination entity and filters before interpreting the list.
6. Other relationships with a nonempty map offer **Edit** for the related record. Treat the destination as another editable form. If the map is empty, the source does not provide a navigation link.
7. Record only the keys and fields needed to explain the relationship. Return to the original record through the verified entity and key rather than guessing from a similar display name.

**Definition links are different from record links.** The relationship **Find** links on **Entity Detail** generally open the related entity without a current record's mapped key values. Enumeration and status relationships may receive a type filter, but that is not a parent-record filter. An unfiltered result reached from the definition is not evidence that all those rows belong to the record being investigated.

### Use JSON With Dependents Carefully

The record page's **JSON with Dependents** starts at **Dependent Levels = 0**, which shows the current value without traversing dependent relationships. Increasing the depth reads dependent records recursively; the related data is not constrained by the Find page's 50-row default.

Keep the depth at zero unless a small, understood relationship tree is necessary. Increase it conservatively in an approved environment. The generated JSON omits null fields and can omit repeated parent-key fields in nested records. Missing keys in this representation do not, by themselves, prove missing database values. Avoid copying the whole JSON into tickets or screenshots; it can include confidential fields and much more related data than intended.

## Interpret View Entities

A view entity describes a query over member entities, potentially with joins, aliases, conditions, and aggregation. It is not necessarily a physical database view with the same name.

- One business record can produce several view rows because of its joins. A repeated identifier is not automatically a duplicate base record.
- A base record can be absent from a view because it does not satisfy a join or condition. Check the view definition and relevant base entity before reporting data loss.
- A view field can be an alias or expression rather than a directly editable column.
- In this framework baseline, generic create, update, and delete operations on view entities are not implemented. Visible generic buttons do not establish that a view is writable. Trace the owning base entity and use the approved business workflow for any correction.

## Keep Corrections Separate From Inspection

If inspection establishes a data problem, capture the evidence and identify the owning service or operational workflow. Generated create/update/delete services are not a substitute for the application's business process; they can also invoke configured entity and service rules.

Before any authorized correction, agree on the environment, full entity name, exact keys, proposed values, downstream effects, and recovery plan. Test the procedure on synthetic data, then verify the outcome through the supported business workflow. Do not use a generic delete as a shortcut for cancellation or use a schema button to address an unexplained query error.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| An expected entity is absent | Clear the regex and View Option filters, then verify the package, installed component, and environment |
| Filter fails or matches too broadly | Use a simple entity-name fragment; review regular-expression syntax and special characters |
| Find returns no records | Check every active filter, operators, key types, timezone, environment, and any configured read clone; for views, investigate join conditions |
| Find or Auto Screen is empty without filters | Supply a narrow recognized search condition; both active Maarg screens require parameters |
| Only one page of results appears | Check the page range and filters; 50 is a page default, not a complete entity count |
| A relationship opens unrelated rows | Confirm whether the link came from Entity Detail or a record, then inspect the target ID Map and all expected key fields |
| A related-record link is missing | Check whether source key values are empty and whether the relationship has a usable mapping |
| A record tool reports that the entity is unavailable | Use the authorized dedicated screen and ask the owner about access; do not bypass the restriction |
| An edit fails on a view or create-only entity | Review entity metadata and use the supported business operation; do not retry against a different table by guesswork |

## Capture Useful Evidence

- Environment, incident time and timezone, and installed runtime/framework versions
- Full entity name and whether it is a view
- Exact filters, operators, sort, page size, and visible result range
- Minimal necessary record keys, with sensitive identifiers redacted for the audience
- Relationship title/type, source-to-target key mapping, and the destination filters actually applied
- Expected versus observed values, and any uncertainty about joins, replica timing, or permissions
- Whether the work only inspected data or included a separately approved change

## Related Guides

- [SQL Tools](sql-tools.md) for bounded direct SQL investigation and its different execution risks
- [DB Missing Columns](db-missing-columns.md) for generated schema-change proposals
- [Log Files](log-files.md) for a bounded error investigation
- [Maarg Glossary](glossary.md) for entity, service, and platform terminology
