---
description: >-
  Prepare a Cycle Count CSV, trace a bulk upload through processing, and verify
  recount scope before choosing a safe correction.
---

# Prepare And Troubleshoot Cycle Count Imports

Use this guide when creating approved counts from a CSV or investigating a recount upload that appears to have failed. Selecting a file, submitting it, processing its system message, and making the intended count available to a store are separate stages.

This is the Cycle Count App's OMS bulk-upload flow. The steps are source-verified against Cycle Count App v5.2.1 and Poorti v3.3.3; they have not been exercised together in an authenticated runtime. Confirm the installed versions and configured field mapping before applying them.

## Before You Start

- Confirm the OMS environment, authorized facilities, intended products, count type, count name, start/due times, and who approves the recount.
- Use an account authorized for `Bulk Upload` and the relevant counts. In the reviewed app, this page requires `COMMON_ADMIN` or `INV_COUNT_ADMIN`; backend access must also permit the operation. Ask an administrator to verify access rather than changing your own roles.
- Preserve the original file, submission time and time zone, visible error, and any system message/count IDs. Keep operational files in approved private storage.
- If an earlier submission has an unknown outcome, locate it before submitting again. Do not use a second upload as a test of whether the first succeeded.
- Preserve unsaved counting work. Do not clear browser storage, reset the app, or sign out of an active session to investigate an upload.

An exported count-results report is not the bulk-upload template. First [verify the report's selection](export-troubleshooting.md#verify-the-report-before-using-it-for-a-recount), then prepare a separate approved count input. Uploading a new count does not undo or correct an earlier inventory decision.

## Prepare The File And Mappings

1. Open the Cycle Count App's admin navigation and select `Bulk Upload`. The reviewed page title is `Draft bulk`.
2. Select `Download template`. Replace its illustrative names, identifiers, and dates with the approved values. Do not submit the sample rows unchanged.
3. Prepare a CSV with headers and at least one data row. Keep SKUs and facility identifiers as text, including leading zeros.
4. Select `Upload` and choose the file. This parses it in the browser; `File uploaded successfully` at this stage does not mean that OMS received or processed it.
5. Map the source columns under `Required` and `Optional`. The required controls come from the app's configured mapping; the table below describes its published default.
6. Review the mapped values and expected facility/product scope before an approved submission.

| Field | Preparation And Safety Check |
| --- | --- |
| `Count name` | Required in the default mapping. Use one consistent name for rows belonging to the same intended count, and a distinct approved name for a new recount. A filename is not the count identity. |
| `Product SKU` | Required mapping by default. For a directed recount, map the intended SKU column and remove duplicate products within each count/facility. The app submits these values as SKU identifiers; a barcode column is not automatically a SKU column. |
| `Count Type` | The reviewed importer accepts `DIRECTED_COUNT` or `HARD_COUNT`. The app defaults an empty value to `DIRECTED_COUNT`. Confirm which workflow is intended; do not change the type merely to bypass a validation error. |
| `Facility ID` | Use the approved internal facility ID. For a store-specific recount, provide an explicit facility for every row. When neither facility identifier supplies a resolved facility, the reviewed importer omits the facility restriction when looking for a same-named Created count, so it can reuse one at another facility. |
| `External Facility ID` | An alternative identifier resolved against the facility's external ID. When an internal Facility ID is supplied, it takes precedence. Ask support to resolve ambiguous or conflicting mappings before submission. |
| `Start date` and `Due date` | Use `MM-dd-yyyy HH:mm:ss`, for example `10-15-2026 08:00:00`. The importer uses the facility's configured time zone when available; without it, dates use the server default time zone. Confirm the zone, check that the due date does not precede the start date, and verify the resulting dates. The reviewed validation checks date format, not that ordering; the browser's time zone does not determine it. |

`Product SKU` also offers `Skip`. Do not use it for a directed SKU recount just to clear the required-mapping check. The backend can create a count/session without requested product rows when no product identifier is supplied; that is not proof that the intended product list was accepted. A hard count needs its own approved scope.

**Names and duplicate rows matter.** In the reviewed importer, a row can reuse a count with the same name and facility while that count is in Created status, then append items to its associated session. Product additions are not deduplicated. A repeated file or repeated row can therefore add duplicate requested products. If the earlier count has moved beyond Created, the same name is not a guarantee that a later upload will update it. Changing a filename is not a duplicate-prevention strategy.

The importer also does not use a repeated row to revise an existing count's dates or type. Use the supported correction agreed with the count owner instead of uploading altered metadata and assuming it replaced the original.

## Submit Once And Record The Request

For an approved new upload, select `Submit` once after reviewing all mappings. The app requires every configured required field to have a mapping, converts the mapped rows into the import CSV, and sends the file to OMS.

The success message `The cycle counts file uploaded successfully.` means the upload request returned successfully. The backend saves the file and creates an incoming `ImportInventoryCounts` system message in Received status for later processing. It does not mean the intended counts are already available to stores.

Record the system message ID, filename, and status under `Recently uploaded counts`. If the request times out or the app reports `Failed to upload the file, please try again`, first check for that existing message. A client-side error alone does not establish that the server saved nothing.

## Find An Existing Upload

The reviewed recent list requests at most 100 `ImportInventoryCounts` messages initialized in the last 24 hours, newest first. It refreshes while the page is active, but it is not a complete import archive.

- Match the system message ID when known; otherwise compare filename and submission time with support.
- A missing row may be outside the time/row limit. The list request also returns an empty list on failure, so an empty page does not prove no upload exists.
- Ask an authorized support operator to open [System Messages](../../maarg/system-messages.md), search the exact ID or Type `ImportInventoryCounts`, and widen initialization dates and status filters. Include completed messages.
- Inspect the message's status, Last Attempt Date, Fail Count, errors, and any resulting counts before deciding on a retry.

The displayed `Next run` or `Last run` is based on the configured `consume_AllReceivedSystemMessages_frequent` job's next-execution value. It is not the completion time for this file. If processing appears delayed, have the operator check that job's actual scope, schedule, and runs using [Service Jobs](../../maarg/service-jobs.md). Do not run the job or consume a whole queue as a diagnostic shortcut.

## Interpret Processing And Error Details

| App Label | Reviewed Status Mapping | Next Check |
| --- | --- | --- |
| `pending` | Fallback label, including `SmsgReceived` | Check the underlying status, prior attempts, errors, and consumer schedule. Pending can still have failed attempts. |
| `processing` | `SmsgConsuming` | Establish whether the existing consumer is active before taking any recovery action. |
| `processed` | `SmsgConsumed` | Inspect the resulting count, facility, dates, type, and requested products. This is not a completed physical count or an inventory adjustment. |
| `error` | `SmsgError` | Open the row's menu and select `View error`, then correlate with the full message error history. |
| `cancelled` | `SmsgCancelled` | Confirm why it was cancelled and whether any business records already exist; do not treat it as a rollback. |

The `Import Error` dialog displays one returned error entry. It does not establish the full attempt history or reliably identify the latest error. `No data found` is inconclusive when error details were not retrieved. The reviewed dialog also retains its previous error data when a later request fails, so visible text may belong to a different message viewed earlier. Reopening alone does not validate it. Record the selected message ID and have support verify its matching backend error history rather than treating the dialog text as conclusive.

`View file` retrieves the stored upload and asks the browser to save a CSV. Use it only when authorized to inspect that operational file. It shows the mapped input sent to OMS, not an inventory-results export. If retrieval fails, preserve the message ID and check file availability and access with support; an old file reference does not guarantee retained content.

## Verify The Count Before Stores Begin

1. Open `Assigned` and find the intended count by name, facility, type, and relevant status filters. Record its count ID; do not rely on a reused name alone.
2. Confirm every intended facility has the correct count and that no unassigned or unintended facility scope was introduced.
3. Verify the start/due dates and facility time zone, especially before a scheduled recount. Reusing a Created count may retain its earlier metadata.
4. Inspect the count/session's requested products against the approved input. Check representative SKUs and the complete expected product set, including duplicates and missing rows.
5. Confirm the intended store user can see the correct count at the expected time through their normal authorized access. Import processing alone does not establish store readiness.

Do not close the investigation merely because a message is processed or a toast disappears. Completion means the approved count scope is present and available as intended. Counting, review, and inventory decisions remain separate work.

## Choose A Bounded Correction

If the input or outcome is wrong, preserve the original request and ask the count owner and support to reconcile which records exist before choosing a correction.

- For a parse or mapping error before submission, correct the CSV or mapping and recheck the intended scope.
- For an unknown submission outcome, locate the server message and any counts first. Do not repeatedly submit the same file.
- For a processing error, resolve invalid identifiers, count type, date format, or configuration using the recorded error and the current service contract. Do not assume that an error guarantees no effects.
- For an existing count with missing or duplicated products, agree on the exact records and supported correction. Re-uploading the full file can append duplicate items; a new name can create an unintended additional count.
- The app offers `Cancel` for a row it last saw as Received. That control changes the message status; it does not establish that an in-flight worker stopped or reverse count records. Refresh, confirm the current execution state, and obtain approval for the exact request before support uses a cancellation procedure.
- Do not edit database statuses, delete count/session records, clear app storage, or run a broad import/queue operation to make an error disappear. There is no blanket rollback recipe for this workflow.

After an approved correction, record the recovery request and verify the resulting counts and store readiness again. Keep the original and replacement IDs together so another operator does not submit a third attempt.

## Escalation And Verification Scope

Share only the necessary details through the approved private support channel: installed app/backend versions, environment, message/count IDs, filename, submission time and time zone, intended facilities and product count, mappings, displayed status, redacted error, and checks already performed. Do not publish customer files, private paths, credentials, or full operational screenshots.

Source checked October 8, 2026:

- Cycle Count App [v5.2.1](https://github.com/hotwax/inventory-count/releases/tag/v5.2.1): [bulk upload screen](https://github.com/hotwax/inventory-count/blob/031fe43c6427005babad591379c6147aa303c7d6/src/views/BulkUpload.vue), [default mappings](https://github.com/hotwax/inventory-count/blob/031fe43c6427005babad591379c6147aa303c7d6/.env.example), [history and retrieval requests](https://github.com/hotwax/inventory-count/blob/031fe43c6427005babad591379c6147aa303c7d6/src/composables/useInventoryCountRun.ts), [navigation](https://github.com/hotwax/inventory-count/blob/031fe43c6427005babad591379c6147aa303c7d6/src/router/index.ts), and [permissions](https://github.com/hotwax/inventory-count/blob/031fe43c6427005babad591379c6147aa303c7d6/src/authorization/actions.ts).
- Poorti v3.3.3 import services, REST contract, and message-type definition. Its importer consumes the CSV through the system-message path; do not assume the generic Data Manager log/cancellation procedure applies to this upload.
- Latest distribution by publication time at this check: Maarg v6.3.9, published October 8 at 13:34:59 UTC. Its active manifest pins Poorti v3.3.3. XML-commented entries were excluded. Semver-higher v6.4.2 was published earlier and pins Poorti v3.4.1; it does not replace this guide's checked backend baseline.

Standalone releases, distribution inclusion, configured route, and installed versions are separate facts. A read-only demo check reached sign-in only. No file was uploaded, cancelled, retried, or processed; no count, inventory, or store-readiness outcome was runtime-verified. Screenshots are omitted because no suitable authenticated example was inspected. Remaining verification requires an approved synthetic fixture covering success, invalid input, uncertain submission, duplicate prevention, and store availability.
