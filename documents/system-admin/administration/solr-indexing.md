---
description: >-
  Use the Maarg Search Admin page to manage Solr configsets, collections,
  schema fields, and indexes in HotWax Commerce.
---

# Solr indexing

Solr stores searchable product, order, inventory, and other application data in collections. The Maarg `Search Admin` page lets system administrators prepare those collections and run the index services that load data into them.

{% hint style="warning" %}
Use this page only when setting up Solr, applying a planned schema change, or repairing an index. Deleting a collection permanently removes its indexed documents and cannot be undone from this page.
{% endhint %}

## Open Search Admin

1. Sign in to Maarg with system administrator access.
2. Open the hamburger menu.
3. Go to `Settings` > `Search Admin`. The `Admin` page opens by default.
4. Confirm that the displayed `Instance Name` is the instance you intend to manage before running an action.

If the page is not available in the menu, ask a HotWax Commerce administrator to verify your Search Admin access.

## Check the Solr connection

The `Solr Configuration` section identifies the connection used by this Maarg instance:

* **Solr Host:** The Solr service connected to the current Maarg instance.
* **Instance Name:** The HotWax Commerce instance whose instance-specific collections you are managing.
* **Solr Version:** The Solr version used to locate compatible configuration and schema definitions.

When Maarg cannot reach Solr, the page displays `Solr is not available` and disables configset, collection, and index actions. Record the connection error and the three configuration values, then contact the HotWax Commerce technical team. Do not continue with index setup until the connection is restored.

## Manage configsets

A configset supplies the Solr configuration used to create a collection. The `Configset Operations` table shows every configset deployed with the application and how many active collections use it.

* Click `Upload` on one row to upload or overwrite that configset in Solr.
* Click `Upload All Configsets` during initial setup or a planned upgrade to upload all deployed configsets. This action overwrites configsets that already exist.
* Click `Delete` only when the configset is no longer needed and no collection uses it. Solr rejects deletion when an active collection still uses the configset.

Uploading a configset does not create a collection or index application data. Complete the collection and index operations that follow.

## Manage collections

A collection stores indexed documents. The `Collection Operations` table shows the live state of each collection declared by the application:

* **Status:** Whether the collection is active or missing.
* **Documents:** The number of indexed documents.
* **Index Size:** The storage used by the index.
* **App Fields:** The number of application fields from the deployed schema that are present in Solr.
* **Unique Key:** The field that uniquely identifies each indexed document.

Use the row actions as follows:

* If the collection is missing, upload its configset and then click `Create Collection`.
* During initial setup, click `Create All Collections` to create every missing collection declared by the application. Existing collections are skipped.
* For an active collection, click `View Fields` to compare the deployed schema with the live Solr schema.
* If fields defined by the application are missing in Solr, click `Add Missing Fields`. This adds missing field definitions and copy-field rules; it does not delete extra fields or index documents.

{% hint style="danger" %}
`Delete` permanently removes the collection, all of its indexed documents, and its Solr metadata. Do not use it for routine reindexing. Delete a collection only as part of an approved recovery or decommissioning plan.
{% endhint %}

## Compare schema fields

Click `View Fields` for a collection to open its `Field Comparison` section. Use the summary and tables to interpret the result:

* **Missing from Solr:** Fields declared by the deployed application schema that are not present in the live collection. Use `Add Missing Fields` from the collection row to apply them.
* **Additional in Solr:** Live fields that are not declared by the deployed application schema. These are informational and are not removed by `Add Missing Fields`.
* **All Schema Fields:** The deployed definitions for regular fields, dynamic fields, and copy-field rules, including their source document type and field settings.

After adding fields, reopen `View Fields` and confirm that `Missing from Solr` is `0`.

## Run an index service

The `Index Operations` table is generated from the deployed schema. Each row identifies a `Collection`, `Doc Type`, and `Index Service`, so the available rows can differ by HotWax Commerce implementation and version.

1. Confirm that Solr is available and the target collection is active.
2. Locate the document type you want to index.
3. Click `Run Index`.
4. Review the service parameters in the dialog. Use the narrowest supported parameters when repairing a specific record or subset.
5. Start the service and wait for it to finish.
6. Confirm that the collection's `Documents` count and the related application search results reflect the expected data.

{% hint style="warning" %}
Optional parameters and defaults are defined by each index service. Leaving optional fields blank can run a bulk index. Review the dialog before starting the service, especially on a production instance.
{% endhint %}

## Recommended workflows

### Set up Solr for a new instance

1. Verify the `Solr Host`, `Instance Name`, and `Solr Version`.
2. Click `Upload All Configsets`.
3. Click `Create All Collections`.
4. Open `View Fields` for each collection and add any missing fields.
5. Run the required index service for each document type.
6. Verify document counts and application searches.

### Apply an application schema change

1. Upload the changed configset, if the release includes a configset change.
2. Open `View Fields` for each affected collection.
3. Click `Add Missing Fields` when the comparison reports missing fields.
4. Run the affected document type's index service only when the release or recovery plan requires existing documents to be rebuilt.
5. Confirm that no required fields remain missing and verify the affected search.

### Repair missing search results

1. Confirm that Solr is available and the collection status is `Active`.
2. Use `View Fields` to check for a schema mismatch.
3. Add missing fields, if present.
4. Run the relevant index service with a record-specific or otherwise narrow scope when the service supports one.
5. Verify the indexed document count and repeat the user-facing search.

## Troubleshooting

| Message or state | What it means | Next action |
| --- | --- | --- |
| `Solr is not available` | Maarg cannot reach the configured Solr service. | Record the displayed connection error and configuration values, then contact the HotWax Commerce technical team. |
| `Upload configset first` | The collection cannot be created because its configset is not present in Solr. | Upload the matching configset, then create the collection. |
| `Create collection first` | The index service cannot run because the target collection does not exist. | Upload the configset, create the collection, and then run the index. |
| `Missing from Solr` is greater than `0` | The live collection does not contain every field declared by the application schema. | Click `Add Missing Fields`, then repeat the comparison. |
| A configset cannot be deleted | The configset is unavailable or an active collection still uses it. | Check the `Collections` count and remove the dependency only as part of an approved decommissioning plan. |
| An index finishes but search results are still missing | The service may have indexed a different scope, or the source record may not meet that index service's criteria. | Check the parameters used, verify the source record, and rerun with the correct narrow scope. |
