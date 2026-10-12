---
description: Configure the current Shopify product flow, investigate missing Draft or prelaunch products, and verify targeted imports without changing publication status.
---

# Shopify product sync

Use **Product sync** in the Company App to follow Shopify products into OMS. Start with the correct shop, product identity, and import path. A scheduled job, a completed Shopify export, and a successful OMS product import are different results.

This guide uses Company App v2.7.0 and Shopify connector v4.3.8 source. It does not establish the versions installed in your environment. Older releases and custom filters can select a different catalog.

## Before you start

- Confirm the environment, Shopify connection, Product Store, installed app/connector versions, and incident time with its time zone.
- Record the Shopify product ID and affected variant IDs, SKU/barcode, current status, and last Shopify update time. Product and variant IDs are not interchangeable.
- Confirm the Product Store's configured product identifier. Only shops representing the same catalog should share a Product Store; duplicate or missing identifiers require investigation before importing again.
- Have an authorized administrator confirm the shop connection, required access, and current product-sync components. Bulk query creation requires write-capable Shopify access even though it exports catalog data. Do not copy credentials, connection records, or complete payloads into a public ticket.
- Distinguish a missing catalog record from a missing image, stale search result, transfer mapping, or inventory discrepancy. Importing a product does not itself verify inventory delivery or store availability.

{% hint style="warning" %}
Do not change a prelaunch product to Active, publish it to a sales channel, or enable inventory tracking merely to make an import run. First verify the installed import path and its effective filters. Preserve the merchant's launch and embargo decisions.
{% endhint %}

## Configure product sync

### Check the identifier strategy

The Product Store's **Internal name mapping** can use SKU, **UPCA / Barcode**, or **Shopify internal id**. In the reviewed importer, the last option uses the Shopify variant ID for a variant's internal name. It is not the parent product ID supplied to a selected-product request. Missing identifier values can generate warnings rather than a guaranteed skip; duplicate values can match the wrong existing product. Verify the exact OMS variant mapping instead of assuming either case will be rejected safely.

### Open the correct Company workflow

1. Open **Company > Shopify** and select the connection.
2. Confirm its shop and Product Store, then open **Product sync** under **Products and Inventory**.
3. Read loading and access warnings before interpreting counts or selecting an action. If **Product sync could not load** appears, use its read-only **Retry** and investigate the connection or permissions if it persists.
4. If setup or upgrade is required, establish why before starting an import. Do not force the returning-user view or recreate configuration just because an established shop unexpectedly appears unconfigured.

### First-time configuration

For an approved initial setup, use **Review configurations**, confirm the **Product Store**, and review **Internal name mapping** before the import review. The wizard can lock choices when products are already linked. A locked identifier is a reason to verify the existing catalog strategy, not to edit the underlying record to bypass the lock.

Advancing from the Product Store or identifier step can save configuration. These steps are not read-only previews. Review related shops, missing/duplicate identifiers, catalog counts, and the preflight comparison before confirming **Start product sync**. A sample comparison does not certify every product. Stop when the selected catalog or identifier is wrong, a count cannot be loaded, or the preflight is inconclusive.

The initial import and its recurring schedule are separate operations. Review the intended job's shop scope and schedule, and verify both the first import's terminal result and the ongoing schedule. Do not assume an hourly or 15-minute cadence from another shop's screenshot.

### Verify existing jobs without changing them

The **Product sync jobs** card separates the pipeline:

| Company label | Scope and responsibility |
| --- | --- |
| `Queue update requests` | Shop-specific product update request job, normally `sync_ShopifyProductUpdates_<shopId>` |
| `Send update request` | Shared bulk-request sender, `send_ProducedBulkOperationSystemMessage_ShopifyBulkQuery` |
| `Import completed requests` | Shared result poller, `poll_ShopifyBulkOperationResult` |
| `Bulk operations finish webhook` | Optional completion notification that can advance result processing |

Open a configured job to inspect its parameters, paused state, schedule/time zone, and relevant runs. Use [Investigate service jobs](../maarg/service-jobs.md) when the Company view does not show enough history. Do not create shop-specific copies of shared jobs.

The webhook row is an action: selecting it subscribes or unsubscribes. Read its status without clicking it. **Run now**, schedule changes, **Send now**, **Poll now**, and cancellation also change state; obtain approval for their actual scope before use. Send/poll actions use shared jobs and must not be assumed to process only the displayed product or message.

## Understand the current flow

### Scheduled, replay, and full-catalog requests

| Stage | What to verify |
| --- | --- |
| Queue | A `BulkQueryShopifyProductUpdates` system message exists for this shop and request |
| Send | Shopify accepted the bulk query and returned an operation ID |
| Export | Shopify completed preparation of the requested product data |
| Prepare import | OMS retrieved/transformed the result and handed it to Data Manager |
| Import | `SYNC_SHOPIFY_PRODUCT` processed the records; review total, successful, and failed counts |
| Reconcile | The intended OMS products, variants, identifiers, and mappings now match the expected source data |

The message normally progresses through Produced, Sent, Received, and Consumed. **Consumed** can mean a handoff to the import stage; it does not establish that every record succeeded. A zero-result export can legitimately show **No updates received from Shopify** and a skipped import. Confirm the request's query and date range before deciding that the missing product was eligible.

### Selected-product requests

**Sync specific products** uses a separate on-demand path for explicit Shopify product IDs. It fetches by product ID without the bulk path's default status/date filters, imports the selected products directly, and reports their outcomes. Do not use it to override an intentional catalog exclusion without the owner's approval. Do not wait for a new bulk-export row as the only proof of this path, or mistake an older bulk run on the dashboard for its result.

## Missing Draft or prelaunch products

### Check eligibility before retrying

In the reviewed connector v4.3.8 implementation:

| Check | Meaning |
| --- | --- |
| Default bulk status filter | Excludes Archived products. Draft products are not excluded by this default. |
| Custom `filterQuery` | Can replace the composed default status/date query. Inspect the effective request, not just the job's description. |
| Incremental window | Restricts the default request by product update time. A missing record may fall outside the selected period. |
| Full-catalog request | Removes the normal incremental date-window restriction; it does not automatically remove product eligibility filters. |
| Inventory tracking or Online Store publication | Neither is a gate in the reviewed product-import path. Requirements for native transfers or inventory publishing are separate. |

An older Active-only setup is not evidence of the current default. Conversely, a release's default does not prove that an installed shop uses it. Read **Product sync history > View query** when available, correlate the exact request with the shop, and have the integration owner confirm any configured override.

Do not use **Un-synced updates** as an eligibility checklist. In Company v2.7.0 its count/list queries use the Shopify update-time boundary without the bulk path's default Archived exclusion. The list can therefore contain products that the standard bulk request would omit.

### Find the exact product without starting an import

1. In **Custom request**, open **Sync specific products**.
2. Search by SKU, product name, or the Shopify **product** ID. Check title, handle, vendor, type, update time, status, variant count, and identity against the intended source product.
3. Use **View mappings** when available to compare Shopify variants with the existing OMS product mapping. Matching text or SKU alone does not prove that the correct variant is mapped. The dialog's **Refresh search index** is a write, not a read refresh; do not use it merely to inspect mappings.
4. If search fails to load, record the error and retry the read. An empty list after a failed request is not proof that the product is absent from Shopify.
5. Close the picker without **Sync selected products** while investigating. That button starts a write; opening and searching the picker does not.

The empty search initially shows only 15 recently updated products. A text search loads results in pages; **Un-synced updates** shows at most the first 100 products. **Select all** applies to the loaded visible list, not the whole Shopify catalog, and selections can remain while the search changes. Review the complete selected count before an approved submission.

## Run and verify a sync

### One approved selected-product import

1. Resolve the eligibility, identifier, or source-data issue and agree on the exact shop and product IDs to import. Check whether an earlier attempt already changed OMS.
2. Open **Sync specific products**, select only those products, and review their identities and the selected count.
3. Select **Sync selected products** once. The selected-product path requests product and variant data, not a one-variant adjustment. In connector v4.3.8 it reads only the first 250 variants of each product without fetching later variant pages; escalate a larger product instead of assuming a complete import.
4. Read **Selected product sync**. The app reports synced, failed, and not-found product counts when the response accounts for the requested selection. An incomplete-result message requires verification before retrying.
5. Confirm the intended OMS product/variant identifiers and mappings. Inspect failed or missing products individually. Not found means the product was absent from the query response; verify the shop, ID, and access before concluding it was deleted. A synced count is per product, can include unchanged products, and is not a count of variants or changed records. It is not proof of publication, transfer readiness, or correct inventory.
6. If the request timed out or the result is incomplete, preserve the selected IDs and time, inspect existing OMS results, and escalate rather than repeating the import blindly.

### A scheduled or approved bulk request

Follow the same request through **Track sync progress**: **System message**, **Shopify bulk operation**, and **HotWax bulk import**. Open the relevant stage rather than relying only on the summary's last-sync time. The progress view is not a complete archive and can show a requested or active run rather than the incident you are investigating.

Use the clock/history control to open **Product sync history** for the same shop:

1. Select **System message status**, **Sort**, **Created after**, and **Created before** as needed.
2. Load enough history to include the incident. The view pages through runs in groups of 25; date filters concern the run's created time, not the Shopify product's update time.
3. Expand the matching run and compare its message ID, Shopify operation ID, query, and import log ID.
4. Review total and failed record counts. Download the raw or failed-record file only when needed and authorized; keep it private.
5. Verify the affected product and variant in OMS after the import is terminal. Shopify object counts and OMS import-record counts measure different things; do not equate them with a count of successfully imported variants.

The recent dashboard uses bounded cached windows. **No completed sync**, zero errors, or an empty recent-updates list does not prove no earlier import or failure exists. In this app version, some failed live-count reads can also fall back to zero. Check the specific run and error evidence before declaring the pipeline healthy.

## Troubleshoot by processing stage

| Observation | Next read-only check |
| --- | --- |
| No request for the expected period | Shop-specific job scope, schedule, paused state, run output, and installed pipeline |
| Produced request remains queued | Shared send-job state, other active bulk work, and message error history |
| Sent request has not advanced | The matching Shopify operation, result poller, and completion webhook; a missing or unavailable status is not completion |
| Export completed but no import is visible | Result-processing evidence; distinguish an empty export from a missing/failed handoff |
| Import has failed records | `Parsed error details` or the failed-record file for this run; identify the source product and first meaningful error |
| Draft product is missing | Installed status/custom-query filters, product update window, identifier/mapping, and selected-product lookup |
| Product appears in search but not after import | Specific import outcome, failed records, all affected variants, and OMS mapping; search visibility is not import success |
| Mapping exists but the product is absent from OMS search | Confirm the OMS record and identifier, then ask the owner whether an approved search-index refresh is appropriate; do not recreate or reimport it simply to test search. |
| Product exists but a field appears unchanged | Compare the intended source field, mapping, and actual processed record; a no-change comparison may legitimately avoid an update |

**Recently synced product updates** searches only the loaded updates, including product/variant titles, SKU, and Shopify reference; it does not search the entire catalog. **Parsed error details** is a bounded recent view and displays up to 100 matching parsed records. Use run history when the incident or file falls outside those limits. Read **View details** before **Retry**; retrying a product is an import, not a refresh of the error list.

For deeper message evidence use [Investigate system messages](../maarg/system-messages.md). Do not expose full message text or credentials while escalating.

### Broader recovery needs a separate decision

| Action | Scope and limitation |
| --- | --- |
| `Replay sync from a certain time` | Requests eligible product updates from the selected start time. Confirm time zone, upper boundary, and effective query; it is not a rollback to historical product values. |
| `Re-sync entire catalog` | Requests the eligible catalog without the normal incremental date restriction. Review its scope and running work first; the UI's total catalog counts are not a guarantee that every product passes the request's filters. |
| Product retry | Reimports the identified product through the selected-product path; check earlier outcomes and current source data first. |

Both bulk and selected-product processing compare source data with saved history and can skip unchanged data. Re-running identical Shopify data is therefore not guaranteed to restore an OMS record or mapping removed outside the normal flow.

A full re-sync does not delete OMS products merely because they were deleted from Shopify. Do not remove mappings, reset comparison history, or recreate products as a general repair. Preserve the original evidence and agree on a specific correction and verification plan with the catalog/integration owner.

## Migrate from the legacy flow

If the connection offers the product-sync upgrade assistant, treat migration as an approved configuration change. Verify the installed component artifacts, unfinished legacy work, and any shared-job dependencies before deactivating the old route. The current request type is `BulkQueryShopifyProductUpdates` and the import configuration is `SYNC_SHOPIFY_PRODUCT`.

Do not run an old created-products feed alongside the current flow to recover a missing product. Nor should a missing product trigger a blanket migration or cancellation of unfinished messages. Have the integration owner complete and verify the supported upgrade before using the current setup flow.

## Verification and escalation

This guide was checked against Company App [v2.7.0](https://github.com/hotwax/company/releases/tag/v2.7.0), including its [product-sync view](https://github.com/hotwax/company/blob/89d2edeefab97711ffd500eae939618f5fb17da8/src/views/ShopifyProductSync.vue), [history view](https://github.com/hotwax/company/blob/89d2edeefab97711ffd500eae939618f5fb17da8/src/views/ShopifyProductSyncHistory.vue), and [Shopify request helpers](https://github.com/hotwax/company/blob/89d2edeefab97711ffd500eae939618f5fb17da8/src/composables/useShopify.ts). Connector v4.3.8 source was checked separately for query selection, product identity, selected-product execution, and import outcomes.

The October 10, 2026 publication check found Maarg v6.3.9 as the latest distribution by publication time. Its active manifest includes connector v4.3.8 and Poorti v3.3.3; commented entries were ignored. Standalone Poorti v3.4.1 is not that distribution's pin. Company v2.7.0 is a separate app release. None of these facts establishes installation.

No authenticated runtime, live product import, status/publication change, migration, or recovery was performed for this guide. Report installed versions, shop/product/variant references, identifier strategy, effective query/date range, request/import IDs, sanitized error, prior actions, and the expected versus observed result through a private support channel.
