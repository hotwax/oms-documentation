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

Read [Monitor file processing](https://github.com/hotwax/oms-documentation/blob/460ed363a929b443c6cf5f6255bf8e90a5b7891d/documents/system-admin/administration/job-manager/mdm/file-history.md) and [Review file details](https://github.com/hotwax/oms-documentation/blob/460ed363a929b443c6cf5f6255bf8e90a5b7891d/documents/system-admin/administration/job-manager/mdm/file-details.md) for the complete workflow.

## OMS administration logs

For the OMS backend, use `MDM` > `Imports` (`Find Import`) to review imports across configurations. Open a Config ID from `Configs` to see logs for that configuration.

The log tables show log and parent IDs, uploaded and error-file downloads with sizes, import parameters, creation and start dates, status and completion date, product store, total and failed record counts, and execution time. The configuration detail table also shows the worker thread and instance ID. Select `View` for import parameters, the history icon for status transitions, or the log-file icon for processing details where available.

`Parent Log ID` can link a retry created during crash recovery to its interrupted import. It does not necessarily represent a chunk of a multi-threaded import.

### OMS import statuses

| Status | Meaning |
| --- | --- |
| `Pending` | Submitted and awaiting the runner |
| `Queued` | Selected by the runner, awaiting its turn in a configuration sequence or worker pool |
| `Running` | File processing has started |
| `Finished` | Processing ended; failed records can still be present |
| `Failed` | An exception prevented normal completion; inspect the processing log. An error-record file may not exist |
| `Crashed` | Startup recovery identified an interrupted queued or running import for this instance |
| `Cancel Requested` | A running import has been asked to stop; cancellation is not yet complete |
| `Cancelled` | The import was cancelled before processing or stopped after a cancellation request |

After a restart, recovery marks matching interrupted imports `Crashed` and creates new `Pending` imports with the originals as their parents. Check for an existing retry before submitting the original file again.

### Cancel an import

On the current OMS configuration detail screen:

- For `Pending` or `Queued`, select the cancel icon and confirm cancellation
- For `Running`, select `Request Cancel`. The status changes to `Cancel Requested`; wait for the loader to observe the request and stop

Cancellation is cooperative and does not undo records already processed. Review counts and processing logs before deciding which records to retry. Older backend versions can expose fewer cancellation options.

### Delete a log

Select the trash icon and confirm to remove a log and its associated parameters and content records. Do not delete a log while its import is active; use cancellation and wait for a terminal status first.

The removal service also deletes referenced files unless another active log shares the content location. Automatic retention uses the same service. See [OMS file storage and retention](README.md#oms-file-storage-and-retention) before deleting audit data.

### Investigate errors

Always inspect both status and `Failed Records`. A `Finished` import can be partially unsuccessful. Download available error records and inspect the processing log; a file-level failure may leave no error file.

File-format errors, missing required fields, invalid identifiers, permissions, and service failures can all prevent processing. Template downloads help with parameter names but do not prove the data is valid. See [Recover failed records](https://github.com/hotwax/oms-documentation/blob/460ed363a929b443c6cf5f6255bf8e90a5b7891d/documents/system-admin/administration/data-manager/manual-import.md#recover-failed-records) before retrying.

<!-- Preserved from user-guides-pub commit 460ed363a929b443c6cf5f6255bf8e90a5b7891d; only relative documentation links were relocated. -->
