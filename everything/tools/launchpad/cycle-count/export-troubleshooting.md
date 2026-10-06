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

Ask an authorized support operator to inspect the matching `ExportInventoryCounts` message using [System Messages](../../maarg/system-messages.md). Capture the current status, timestamps, and minimal relevant error. Check whether generation started and whether it produced a file reference. Repeatedly pressing the Closed-page export button creates more work and does not diagnose the existing request.

### Generated Appears But Download Is Disabled

Check the filename. The reviewed app requires both `SmsgSent` and a nonempty filename before enabling the download button.

The reviewed backend can skip CSV generation when no counts match the request, and it can exit without attaching a file reference after a generation problem. Therefore a Generated label without a filename does not identify a single cause. Support should distinguish an empty selection from a generation failure using the saved request and processing evidence. Do not edit the message status or fabricate a file reference to enable the button.

### Download Is Enabled But Fails

For an authorized existing report, select its download button. The app retrieves file data using the system message ID, then asks the browser to save a CSV.

- If `Failed to download exported cycle count file.` appears, record the message ID, time, browser/device, and error wording. Support must check the original message and whether its generated file remains readable.
- If no error appears but no file is visible, inspect the browser's download list and the device's configured download destination. This distinguishes a file retrieval problem from a local save problem; it does not justify disabling browser security controls.
- A history row or old filename does not guarantee that the underlying file still exists or remains accessible. This guide does not establish a retention period.
- Do not copy a backend file path into a public URL, alter storage permissions, or ask another user to share an unrestricted download link.

An administrator may need to provide an approved replacement report. Agree on its scope and destination before regenerating or sharing it.

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
- Poorti v3.3.2 export request, CSV generation, and retrieval services. These backend checks establish source behavior only; they do not establish the component version installed with a particular app.

No export was queued, downloaded, retried, or regenerated for this guide. No live failure, installed app/backend pairing, retention policy, or customer root cause was verified. Screenshots are omitted because no suitable runtime example was inspected. Confirm the installed versions before applying a named control or source-specific limitation.
