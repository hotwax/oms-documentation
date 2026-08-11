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

Use the timeline to see how the file moved from submission through processing. A missing completion step can indicate that processing is still active or that the file stopped before completion.

Confirm the current status before treating a long-running file as failed.

## Review original and failed data

Use the available tabs:

- `Original`: Data submitted for processing
- `Errors`: Records or error details returned during processing

Search within the displayed payload to find an identifier or error. Use the expand and collapse controls when the payload contains nested data.

## Copy or download data

Use the copy action for a small value that you need during investigation. Use the download action when you need the complete available file.

Files can contain customer or operational data. Store downloads only in an approved location and do not paste unredacted payloads into public issues or documentation.

## Continue the investigation

If the file came from a job run, return to [Run history](../jobs/run-history.md) and compare the file error with the run parameters and results.

If the file came from a manual upload, open [Upload a file manually](manual-uploads.md) and confirm the configuration before resubmitting data.
