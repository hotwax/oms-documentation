---
description: Use the current Job Manager File History workflow to audit processed files.
---

# Review file processing

Use Job Manager to audit files processed through Data Manager.

1. Open `MDM` > `File history`.
2. Search for the file, configuration, or log identifier.
3. Filter by status, priority, error state, or configuration.
4. Open the file.
5. Review the timeline, original data, and errors.

Read [Monitor file processing](../job-manager/mdm/file-history.md) and [Review file details](../job-manager/mdm/file-details.md) for the complete workflow.

## Review errors and recovery

A `Finished` import can include failed records. Open its File History details and compare record and error counts with the input and expected business result. An unavailable error file does not prove success.

Cancellation does not undo records already processed. Confirm the affected records and safe retry scope before submitting another file. Follow [Recover failed records](manual-import.md#recover-failed-records).

Backend log inspection, running-import cancellation, crash recovery, and log deletion are described in [Everything: Import logs](https://github.com/hotwax/oms-documentation/blob/everything-bagel-pub/everything/operations/oms-administration/data-manager/view-mdm-log.md).
