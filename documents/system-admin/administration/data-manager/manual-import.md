---
description: Use the current Job Manager Manual Uploads workflow for operator file submissions.
---

# Import a file manually

Use Job Manager for operator file submissions.

1. Open `MDM` > `Manual uploads`.
2. Find the required configuration.
3. Review the import service and template.
4. Select the prepared file.
5. Select `Start Import`.
6. Open `File history` to monitor processing.

Read [Upload a file manually](../job-manager/mdm/manual-uploads.md) for the complete workflow.

Use [Data Manager configuration](README.md) only when an administrator needs to change the underlying service, execution mode, or file contract.

## Maarg administration upload

Administrators using the Maarg backend can also upload from `MDM` > `Configs` > the configuration's Config ID.

### Prepare the file

Use the toolbar downloads to inspect the selected import service's parameters:

- **CSV:** Generates a header row from the service's input parameters, excluding `_recordNumber`. Camel-case names become hyphen-separated headers, such as `product-id` and `facility-id`
- **JSON:** Generates a JSON array containing parameter schema metadata. Replace the metadata with actual record values and confirm the import service's required structure before uploading

These downloads are generated on request from the service definition. They do not verify business rules, valid identifiers, or dependencies in your data. Test a small file with approved non-production data before importing a large file.

### Submit and monitor

1. Select `Upload File` on the configuration detail page.
2. Select the prepared CSV or JSON file.
3. Select `Add` to submit it.
4. Monitor the new log on the detail page or `Find Import`.

The upload creates a `Pending` import. The runner selects its pool from the configuration priority; processing can wait for the next runner interval or available capacity. See [Maarg runner and thread pools](README.md#maarg-runner-and-thread-pools).

The usual status sequence is `Pending` → `Queued` → `Running` → `Finished`. Counts are recorded by the runner after file processing; they are not guaranteed to update for every record while it runs. Use [Maarg administration logs](view-mdm-log.md#maarg-administration-logs) to inspect parameters, status history, processing logs, and failures.

### Recover failed records

`Finished` means file processing ended, and can include failed records. Check `Failed Records` and the error file before treating the import as fully successful.

1. Download the error file when available.
2. Correct only the failed records and remove the error-message column (`ErrorMessage`) from CSV or the `_ERROR_MESSAGE_` property from JSON before resubmitting.
3. Confirm the service permits retrying these records without duplicate effects.
4. Upload the corrected file and inspect its result.

A `Failed` import can represent a file-level exception and may have no error-record file. Inspect its processing log and service error before retrying. Some records may already have been processed; resubmitting the full original file can repeat their effects.
