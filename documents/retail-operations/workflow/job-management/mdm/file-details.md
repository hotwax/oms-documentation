---
description: Review a file-processing timeline, original data, and failed records.
---

# Review file details

Open a record from `MDM` > `File history` to inspect how a submitted file was processed.

## Confirm the file

Review the file and execution details before you download or share data:

- Log identifier
- File name
- Configuration
- Status and priority
- Submission, start, and completion times
- Record totals and error totals

Use the configuration link to open the related manual-upload configuration.

## Read the processing timeline

Use the timeline to review submission and processing times. The displayed finish time can fall back to the record's last update time when a finish timestamp is unavailable.

Confirm the current status and record totals before treating a timestamp as proof of completion or a long-running file as failed. `Finished with errors` means processing finished with failed records.

## Review original and failed data

Use the available tabs:

- `Original`: Data submitted for processing
- `Errors`: Records or error details returned during processing

The `Errors` tab appears only when failed records have an available error file. Its absence does not establish that every record processed successfully.

Search within the displayed payload to find an identifier or error. Use the expand and collapse controls when the payload contains nested data.

## Copy or download data

Use the copy action for a small value that you need during investigation. Use the download action when you need the complete available file.

Files can contain customer or operational data. Store downloads only in an approved location and do not paste unredacted payloads into public issues or documentation.

## Continue the investigation

Use [Troubleshoot file imports](../troubleshooting/file-imports.md#choose-the-next-check) to choose the next check before submitting corrected data. Confirm which records already applied and how the configuration handles repeated records.

If the file came from a job run, return to [Run history](../jobs/run-history.md) and compare the file error with the run parameters and results.

If the file came from a manual upload, open [Upload a file manually](manual-uploads.md) and confirm the configuration before resubmitting data.
