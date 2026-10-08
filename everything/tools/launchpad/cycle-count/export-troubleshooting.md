---
description: >-
  Diagnose Cycle Count export history, disabled download controls, missing files,
  and unexpected report scope without changing counts or inventory.
---

# Troubleshoot Cycle Count Exports

Use this guide when a Cycle Count report does not download, stays in progress, or contains different counts than expected. Export creation, file generation, file retrieval, and saving the CSV on a device are separate stages. A successful request does not prove that a usable file is available.

This guide covers the Cycle Count App's `Closed` and `Export history` workflow. It does not describe the separate native Shopify POS counting extension or Job Manager Data Document exports.

## Before You Start

- Confirm the OMS environment, Cycle Count App version, relevant facilities, count references, and the time of the export request with its time zone.
- Use an account already authorized to view the counts and export history. In the reviewed app release, these views require `COMMON_ADMIN` or `INV_COUNT_ADMIN`; backend authorization must also permit the request. Ask the administrator to check access rather than granting yourself another role.
- Record the filters used when the export was requested: facilities, count type, creation dates, closing dates, status, and search text.
- Preserve any unsaved counting work. Do not clear browser storage, reset the app, or sign out of an active counting session to diagnose a report download.

The checks below inspect existing exports. Creating another export, retrying a system message, or changing an export configuration requires the normal approval for that operation.

## Find The Existing Export

1. Open the Cycle Count App's admin navigation and select `Closed`.
2. Select `Export history` in the page header. The separate floating download button at the bottom right of the Closed page requests a new export; it does not retrieve an existing file.
3. Find the relevant request using its creation time, filename, and user. The reviewed history view lists the newest requests first.
4. Record its system message ID and displayed status. Do not assume the first row is your request when several users are exporting.

If the request is not visible, ask support to locate it by time and user before requesting another export. The reviewed history page has no paging controls, so absence from this view is not proof that no request exists.

If the page reports `Failed to load export history.`, the request to list history failed. An empty list following that message does not prove that no export exists. Check the account/session and environment, then ask an authorized support operator to locate the existing request.

## Read The Fields And Status

The table below describes the published Cycle Count App v5.2.1 baseline. A later source change adds `No file` and an error-details control; use the separate build-specific checks below only if your installed app includes that change. A backend update alone does not add app controls.

| Field Or Status | Meaning In The Reviewed Version | What To Check |
| --- | --- | --- |
| Filename | The filename taken from the generated-file reference; `-` means the app could not obtain one | A status alone is insufficient if no filename is present |
| System message ID | Reference for this export request | Use it to correlate the app row with backend processing |
| Created Date | The message's `initDate` | Compare with the original request time and time zone |
| Exported Date | The message's `processedDate` | This timestamp does not prove that the device downloaded the file |
| User Login | User reference stored with the export request | Use it together with time and message ID, not by itself |
| Exporting | `SmsgProduced` or `SmsgSending` | Generation has not reached the state that enables download |
| Generated | `SmsgSent` | Download is enabled only when a filename is also available |
| Error | `SmsgError` | Have support inspect the existing request's error before considering recovery |

Other statuses may appear with their raw identifier. Record the value rather than guessing what it means. These display labels are specific to this export workflow; `SmsgSent` has different business meaning in other integrations.

## Choose The Matching Diagnostic Path

### Exporting Does Not Finish

Return to `Export history` after allowing the expected processing window for the installation. The reviewed page fetches history when entered; it does not establish a universal refresh interval or completion deadline.

Ask an authorized support operator to inspect the matching `ExportInventoryCounts` message using [System Messages](../../maarg/system-messages.md). Capture the current status, failure count, timestamps, and minimal relevant error. In the older app, `SmsgProduced` still displays as Exporting even when the request has a recorded failure; the label alone cannot distinguish waiting from a failed attempt. Check whether generation started and whether it produced a file reference. Repeatedly pressing the Closed-page export button creates more work and does not diagnose the existing request.

### Generated Appears But Download Is Disabled

Check the filename. The reviewed app requires both `SmsgSent` and a nonempty filename before enabling the download button.

All reviewed backend versions can skip CSV generation when no counts match the request. In Poorti v3.3.2, a caught generation exception can also exit without attaching a file reference; the newer fixes below change that error path. Therefore a Generated label without a filename does not identify a single cause. Support should distinguish an empty selection from a generation failure using the saved request and processing evidence. Do not edit the message status or fabricate a file reference to enable the button.

### Error Or No File Appears In A Newer Build

This branch describes source at app commit `bbe2f269b653285302ac1ee88fce010285af90cc`, merged after v5.2.1. At this guide's October 6 release check, v5.2.1 remained the newest published app release. Do not assume these controls are installed from the backend's version or a merged pull request.

- `Error` appears for `SmsgError`, or for `SmsgProduced` with a failure count greater than zero. This records a failed attempt; it does not by itself establish the cause or whether another attempt is scheduled.
- For an Error row, select the red alert control (`View error`). The `Export error` dialog shows the selected message ID and the most recent returned error text and timestamp. It is an inspection control, not a retry.
- Record the message ID and error time, then close the dialog. A single displayed error is not the full attempt history. Ask support to correlate it with the request and later processing before deciding on recovery.
- `No data found` in this dialog is inconclusive: this source displays it both when no error text was returned and after an error-detail request failed. It does not prove that the export succeeded or that no backend error exists.
- `No file` appears when the request is `SmsgSent` but the app cannot extract a filename. Download stays disabled. This label does not distinguish an empty selection, an older failed generation, or an unusable file reference. Use the same saved-selection and processing checks as for Generated with a disabled button.

Error text can contain private identifiers or paths. Do not publish an unredacted dialog screenshot or paste its full contents into a public issue.

### Download Is Enabled But Fails

For an authorized existing report, select its download button. The app retrieves file data using the system message ID, then asks the browser to save a CSV.

- If `Failed to download exported cycle count file.` appears, record the message ID, time, browser/device, and error wording. Support must check the original message and whether its generated file remains readable.
- If no error appears but no file is visible, inspect the browser's download list and the device's configured download destination. This distinguishes a file retrieval problem from a local save problem; it does not justify disabling browser security controls.
- A history row or old filename does not guarantee that the underlying file still exists or remains accessible. This guide does not establish a retention period.
- Do not copy a backend file path into a public URL, alter storage permissions, or ask another user to share an unrestricted download link.

An administrator may need to provide an approved replacement report. Agree on its scope and destination before regenerating or sharing it.

## Confirm Fix Applicability Before Recovery

The CSV generation correction is present in Poorti v3.3.3 and v3.4.1. The checked Maarg distribution manifests include those versions in v6.3.5 and v6.4.1 respectively. Component release, distribution inclusion, installed backend, and installed app are separate facts; ask the deployment owner to confirm the actual pairing and whether it was in place when the failed request ran.

The corrected backend sends named CSV columns to the writer, tolerates an unavailable facility name, and allows a generation exception to fail the message send instead of swallowing it. It still skips generation for an empty selection. These source changes do not prove that every missing-file incident has the same cause, that existing history rows gained files, or that a particular installation was upgraded.

Before an approved replacement export or supported retry:

1. Preserve the original request and its saved filters, status, failure count, file-reference presence, and relevant error time.
2. Have support confirm the installed fix and the first failing stage. A UI label change does not repair a file; a backend correction does not establish delivery to the device.
3. Check whether another attempt is already running and agree on the intended count/facility/date scope. Do not change message statuses, clear app storage, or submit repeated exports to force progress.
4. After the authorized recovery, verify the resulting request, readable file, CSV header/column names, and representative rows. Compare the current data with the original request's intended snapshot; a later export can reflect changed records.

This is a verification checklist, not an instruction to deploy a component or replay an integration during diagnosis. An administrator must choose the supported recovery for the installation.

## Verify The Report Before Using It For A Recount

The download is CSV, not a native Excel workbook. Open it using the organization's approved spreadsheet workflow and preserve identifiers such as SKUs and barcodes as text so leading zeros are not lost.

Compare the file's count references, facilities, count types, dates, and representative item quantities with the intended report. A downloaded file is not proof that its selection matches the screen you were viewing.

In the reviewed backend, the export request accepts facility, count type, creation-date, and closing-date inputs. The app sends the current filter parameters, including search text and status when set, but this backend does not carry those two filters into the saved export selection. Do not assume that searching for one count, selecting a status, or viewing one page limits the export to those rows. Have support verify the saved request and actual output before using the report, especially when multiple facilities or count types are involved.

Changing filters after requesting an export does not rewrite that existing request. Use its creation time and saved selection when comparing results. Record whether dates mean count creation, count closure, export creation, or export processing; those timestamps answer different questions.

The reviewed output contains count and facility references, product identifiers, decision outcome, deciding user, variance, system quantity, and counted quantity. Do not infer that inventory was adjusted merely because a CSV was generated. A recount is a separate operational workflow and must use the approved count-creation process; do not upload this report as a count input without checking the required import format.

## Escalation Checklist

Send the minimum necessary details through the approved private support channel:

- App and backend versions, environment, and browser/device
- Request time and time zone, system message ID, displayed status, and whether a filename is present
- Intended facilities/counts and the filters used at request time
- Whether history loading, generation, retrieval, or local saving is the first failing stage
- Error wording and whether the existing file can be read by an authorized operator
- For an unexpected report: a small redacted comparison of expected versus actual scope

Do not attach full inventory exports, user identifiers, private file paths, credentials, or unreviewed logs to public issues or manuals. Preserve the existing request for diagnosis rather than deleting it or changing counts to force a new result.

## Verification And Limitations

Source checked on October 6, 2026:

- Cycle Count App [v5.2.1](https://github.com/hotwax/inventory-count/releases/tag/v5.2.1), commit `031fe43c6427005babad591379c6147aa303c7d6`: [Closed-page request](https://github.com/hotwax/inventory-count/blob/031fe43c6427005babad591379c6147aa303c7d6/src/views/Closed.vue), [Export History labels and download](https://github.com/hotwax/inventory-count/blob/031fe43c6427005babad591379c6147aa303c7d6/src/views/ExportHistory.vue), [REST calls](https://github.com/hotwax/inventory-count/blob/031fe43c6427005babad591379c6147aa303c7d6/src/composables/useInventoryCountRun.ts), and [view permissions](https://github.com/hotwax/inventory-count/blob/031fe43c6427005babad591379c6147aa303c7d6/src/authorization/actions.ts).
- Later [Export History source](https://github.com/hotwax/inventory-count/blob/bbe2f269b653285302ac1ee88fce010285af90cc/src/views/ExportHistory.vue) and [error-detail REST call](https://github.com/hotwax/inventory-count/blob/bbe2f269b653285302ac1ee88fce010285af90cc/src/composables/useInventoryCountRun.ts): conditional Error/No file labels, latest-error dialog, and inconclusive empty/error response. This is a merged source snapshot, not a published app release or deployment claim.
- Poorti v3.3.2 export request, CSV generation, and retrieval services, compared with the corrected v3.3.3 and v3.4.1 sources. Active entries in the Maarg v6.3.5 and v6.4.1 manifests were checked with XML comments excluded. These backend and distribution checks do not establish the versions installed with a particular app.

No export was queued, downloaded, retried, or regenerated for this guide. No live failure, installed app/backend pairing, retention policy, or customer root cause was verified. Screenshots are omitted because no suitable runtime example was inspected. Confirm the installed versions before applying a named control or source-specific limitation.
