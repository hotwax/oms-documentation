---
description: >-
  Prepare a direct Cycle Count CSV upload, correlate its asynchronous processing,
  and verify the created counts before retrying or starting a recount.
---

# Upload Cycle Count Files Over HTTPS

Use this guide when an approved integration generates Cycle Count input files and needs to confirm that OMS created the intended counts. File receipt, message processing, count creation, store availability, and inventory adjustment are separate outcomes.

This direct upload contract is source-verified against Poorti v3.3.5 and Maarg util v4.3.3, included in the Maarg v6.3.11 distribution. It has not been exercised in an authenticated runtime. Confirm the installed API contract and processing configuration before implementing it. For an operator uploading through the app's mapping screen, use [Cycle Count Import And Recount Troubleshooting](import-troubleshooting.md).

## Before You Start

- Have the integration owner approve the environment, facilities, product selection, count names, count type, dates, and intended submission frequency. Establish who resolves uncertain outcomes and approves corrections.
- Use an already approved authenticated API client. Confirm its access to upload files and read the resulting messages and counts. Follow the organization's secure authentication procedure; do not place credentials in CSV files, shared examples, or support evidence.
- In OMS, open **Developer > REST APIs** and locate the `inventory-cycle-count` resource. Use the [REST API Explorer](../../maarg/rest-api-explorer.md) to inspect the installed route, parameters, and response schema. A resource's presence does not prove that the client has permission to execute it.
- Confirm the configured incoming consumer for `ImportInventoryCounts` and its effective schedule, paused state, and retry policy. The reviewed distribution's general incoming-message job is seeded paused. An upload does not guarantee immediate processing or establish a completion deadline. Use [Service Jobs](../../maarg/service-jobs.md) for read-only investigation.
- Before submission, check for existing Created counts with the same name and facility. Record their IDs and existing product rows so that intended additions can be distinguished from new counts.
- Confirm the deployment's upload-size, request-timeout, retention, and approved batch-size limits. The reviewed service does not establish a universal maximum file size or row count; that does not mean uploads are unlimited.
- Preserve a submission record in the approved operational system: file checksum, filename, intended facility/count groups, expected product rows, submission time and time zone, and any returned correlation information. A checksum in this record is a client-side safeguard; OMS does not use it as an idempotency key in this upload path.

## Prepare The Direct CSV

Direct uploads bypass the app's field-mapping screen. Write a UTF-8 CSV with the service's exact column names below as the first row, followed by the approved data rows. Do not add an entity or service-name row before the headers. Quote commas and quotation marks using normal CSV escaping. App mapping/template fields such as `productSku` or `facility` are not substitutes for these service headers. Preserve identifiers as text, including leading zeros.

| CSV header | Meaning and preparation rule |
| --- | --- |
| `countImportName` | Required by the import service. Identifies the count name and its import session. Use the same approved name for rows belonging to one count, and distinguish separate intended counts. |
| `facilityId` | Internal OMS facility identifier. Include a resolved facility on every row, using this field or `externalFacilityId`. This field takes precedence when both are supplied. |
| `externalFacilityId` | Alternative facility identifier. The reviewed importer takes the first matching external ID; resolve missing or ambiguous mappings before submission. |
| `purposeType` | Use `DIRECTED_COUNT` for a directed product list. The service also accepts `HARD_COUNT`; choose that only for an explicitly approved hard-count workflow. When omitted, a newly created count defaults to `DIRECTED_COUNT`; send an explicit value rather than relying on how blank CSV cells are handled. |
| `productId` | Internal OMS product identifier. For a directed product row, supply this or the `idType` and `idValue` pair. A supplied `productId` takes precedence over the pair. |
| `idType` | Identifier type used with `idValue`, for example `SKU` when that is the configured product identifier. |
| `idValue` | Product identifier value. Lookup uses active identification records and takes the first match ordered by its start date. Resolve missing or ambiguous matches before submission. |
| `estimatedStartDate` | Optional start date in `MM-dd-yyyy HH:mm:ss` format. |
| `estimatedCompletionDate` | Optional due date in the same format. Validate the intended ordering before upload; the reviewed validation checks format, not that the due date follows the start date. |

Dates are interpreted in the facility's configured time zone and converted to the server's zone. If no facility time zone is configured, the server default applies. Confirm the intended zone with the owner before generating dated input.

Only `countImportName` is declared required by the row service. That does not make a name-only row sufficient for an operational directed count. A missing facility can remove the facility restriction from existing-count lookup; a row without a product identifier can leave a count/session without a product row. Validate facilities and products before upload.

Keep the same facility, type, and dates across rows intended for one count. The importer reuses the first count with the same name and facility while its status is `CYCLE_CNT_CREATED`, then reuses its matching import session. Reuse does not update the count's dates or type. Product additions are not deduplicated: repeated rows or a repeated file can append duplicate items. If a matching count has moved beyond Created, another upload can create a new count with the same name.

The reviewed upload route has no dry-run option or pre-upload validation endpoint. Row validation runs during later message consumption. Uploading a file to test its validity can create counts and items.

## Submit Once And Preserve The Receipt

After the owner has approved the prepared input, submit it through the approved client using this contract:

| Request element | Reviewed contract |
| --- | --- |
| API base | The installed OMS HTTPS API base obtained from the authorized environment's API documentation. Append the resource path below; do not infer a host from an example. |
| Method and resource path | `POST inventory-cycle-count/cycleCounts/upload` |
| Request body | `multipart/form-data`, containing the actual CSV file in a part named `contentFile`. Let the HTTP client generate the multipart boundary. |
| File name | Supply the filename on the multipart file part. The utility reads that filename; a separate `fileName` field is not a declared input in this baseline. |
| Query fields | No required query fields are declared for this upload. The count information belongs in the CSV. |

Do not send JSON rows or a bare `text/csv` body to this multipart route. Confirm the installed field name before using an integration written for a different backend release.

Inspect both the HTTP outcome and any returned application error. The reviewed service returns the created `systemMessageId` together with `contentLocation`, which identifies the stored file. The incoming `ImportInventoryCounts` message starts in `SmsgReceived`; count and session IDs are not returned because row processing happens later. Inherited utility response fields include filename and size, but the wrapper does not copy those utility values; do not require them in the receipt without verifying the installed response.

Save the returned `systemMessageId` as the primary correlation key and keep `contentLocation` in the approved operational record. It can contain a private storage location; do not publish it or turn it into a guessed download URL. If the request times out, returns an error after possible acceptance, or provides no usable receipt, mark the submission outcome as uncertain and investigate before sending the same file again.

## Correlate And Follow The Import Message

All resource paths in this section are relative to the same installed API base. Use only the read methods listed here for diagnosis.

1. Read `GET inventory-cycle-count/cycleCounts/systemMessages`, filtering by the returned `systemMessageId` and `systemMessageTypeId=ImportInventoryCounts`. Confirm the incoming direction, initialization time, and `messageText` against the returned `contentLocation`. The reviewed `/systemMessages/{systemMessageId}` route is a write route, not a singular GET endpoint.
2. If only `contentLocation` was retained, read the collection with the same message type and `messageText` equal to that complete returned value. Save the ID after confirming the match.
3. If the receipt was lost, use a bounded submission-time window and the known input identity to investigate through [System Messages](../../maarg/system-messages.md). Multiple plausible matches or an unsuccessful search leave the outcome unresolved; an empty result is not permission to re-upload.
4. Follow every relevant page and check request errors. Entity-list endpoints return arrays with pagination headers including `X-Total-Count`, `X-Page-Index`, `X-Page-Size`, and `X-Page-Max-Index`. Use `pageIndex` starting at zero and a bounded `pageSize`; verify those headers in the installed API. The app's recent-upload history is limited to 100 messages from the last 24 hours and can appear empty after a failed request, so it is not a complete integration ledger.
5. Inspect current status together with `lastAttemptDate`, `failCount`, and `processedDate`. Read `GET inventory-cycle-count/cycleCounts/systemMessages/{systemMessageId}/errors` when an attempt failed. Review error dates and all relevant pages; an empty or failed error lookup does not establish success.

| Message status | What it establishes and what to check next |
| --- | --- |
| `SmsgReceived` | The incoming message is queued. A failed attempt can return it to this status while incrementing `failCount` and recording an error. Check attempt history and the effective consumer job. |
| `SmsgConsuming` | Consumption is active or recorded as active. Establish whether the worker is still running before any intervention. |
| `SmsgConsumed` | The consumer completed. Reconcile the resulting counts, sessions, and products before declaring the input complete. |
| `SmsgError` | Investigate error history and retry exhaustion with the owner. Resetting or replaying changes processing eligibility and can repeat business work. |
| `SmsgCancelled` | The message is marked cancelled. This does not prove that an in-flight worker stopped or that earlier business effects were reversed. |

For an authorized input inspection, `GET inventory-cycle-count/cycleCounts/systemMessages/{systemMessageId}/downloadFile` returns JSON containing the uploaded text in `csvData`; it is not a raw-file response. This is an input artifact, not a count-results report. Handle its contents within the approved support process.

## Verify The Created Counts

After processing, reconcile each intended facility/count group against OMS. Do not infer the count ID from the filename or message ID. The reviewed importer does not store a direct link from the message to the count; compare the resulting records with the intended input and the pre-submission snapshot.

- Read `GET inventory-cycle-count/cycleCounts/workEfforts` with the intended facility, a `keyword` for the count name or ID, and the relevant statuses. Keyword matching is partial, so verify the exact returned name and facility. The default status selection is Created and In Progress; it can exclude a count that has since moved on.
- This list returns `cycleCounts` and `cycleCountsCount`, with zero-based `pageIndex` and a default `pageSize` of 20. Follow pages through the reported total. A restrictive creation-date window can hide an older count reused by the importer.
- Save the verified `workEffortId`. Read `GET inventory-cycle-count/cycleCounts/workEfforts/{workEffortId}` for that count and `GET inventory-cycle-count/cycleCounts/workEfforts/{workEffortId}/sessions` for its sessions. Save the intended `inventoryCountImportId` after checking its name and parent count.
- Read `GET inventory-cycle-count/cycleCounts/sessions/{inventoryCountImportId}/items` and its `/count` endpoint to reconcile product identities and row counts across pages. The count response is `{count: N}` for the base import items. The item list joins inventory records and exposes `facilityId` from that join. Without a facility filter, an import item can appear for multiple inventory facilities; with one, inventory fields can be empty when no matching inventory exists. Reconcile distinct import-item identities (`inventoryCountImportId` plus `importItemSeqId`) against the base count. Investigate discrepancies instead of treating joined inventory fields as the count's facility or proof of loaded scope. Check the actual product set and duplicate input rows; a matching total alone does not prove that the right products were loaded.
- Confirm the type, dates, facility, and store-facing availability using the [app verification checklist](import-troubleshooting.md#verify-the-count-before-stores-begin). Created records alone do not prove that the intended store can see and perform the count.

If a message fails or the request outcome remains unknown, inspect existing counts and items before correction. The reviewed CSV loader processes its service rows in a transaction and raises row errors; this is not evidence that a normal invalid row commits earlier rows. However, file storage and message creation are separate stages, and count changes can commit before the message completion status is recorded. A lost response or uncertain status therefore needs reconciliation; cancellation does not establish rollback. Stop the integration's automatic resubmission for the unresolved input and have the owner choose a bounded recovery after reconciling what exists. Do not clear history, delete rows, change message status, or repeat consumption merely to make the ledger look successful.

## Keep Recounts And Reporting Separate

This endpoint creates count input. It does not submit a store's counted quantities, approve variance, apply inventory adjustments, or automatically select products for a recount. An integration that generates new recount files needs separately approved selection rules, duplicate prevention, and count-by-count outcome checks.

The presence of clone, review, and export routes does not establish a configured automatic recount policy or a scheduled reporting integration. Use [Cycle Count Export Troubleshooting](export-troubleshooting.md) for export selection, generation, retrieval, and report validation. Do not treat the original uploaded CSV as a results report, assume every export includes the requested adjustment/value fields, or re-upload a report unchanged as new count input.

Escalate unresolved intake with the installed component versions, submission time and zone, file checksum, intended scope, message/count/session IDs, observed statuses, redacted error, and completed reconciliation checks. Share the minimum necessary information through an approved private channel. Recovery is complete only after the intended counts and product scope are verified and any downstream recount/reporting requirement is checked separately.

## Source And Verification Scope

Checked October 14, 2026:

- Poorti v3.3.5: Cycle Count REST definitions, upload/import/validation services, count/session/item reads, and incoming message-type definition. Maarg util v4.3.3 supplies the multipart upload contract; framework v4.1.2 supplies entity-list and message-consumption behavior.
- Cycle Count App [v5.2.1](https://github.com/hotwax/inventory-count/releases/tag/v5.2.1): the [bulk-upload screen](https://github.com/hotwax/inventory-count/blob/031fe43c6427005babad591379c6147aa303c7d6/src/views/BulkUpload.vue) performs mapping before submission; [message and count requests](https://github.com/hotwax/inventory-count/blob/031fe43c6427005babad591379c6147aa303c7d6/src/composables/useInventoryCountRun.ts) establish the app's recent-history limits and read paths. This is a separately published frontend release.
- Latest distribution by publication time: Maarg v6.3.11, published October 14 at 11:28:09 UTC. Its active production `oms-suite` includes Poorti v3.3.5, OMS v3.3.4, Shopify connector v4.3.10, and Maarg util v4.3.3. XML-commented entries were excluded. The earlier-published v6.5.0-RC1 does not replace this publication-time result.

A distribution pin does not establish what is installed, and a newer standalone component release does not update that distribution automatically. The read-only demo remained at sign-in. No upload, import, retry, count creation, or inventory adjustment was executed; no response shape or outcome is runtime-verified. Existing API/filter illustrations were inspected but do not show this contract in use, so no screenshot is presented as proof. Remaining verification requires an approved isolated fixture covering acceptance, invalid rows, uncertain responses, message correlation, pagination, duplicate prevention, and final store availability.
