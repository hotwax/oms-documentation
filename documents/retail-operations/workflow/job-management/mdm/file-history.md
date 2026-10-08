---
description: Monitor files processed through master data management configurations.
---

# Monitor file processing

Open `MDM` > `File history` to review files submitted through master data management (MDM) configurations.

## Review file-processing health

Use the summary cards to review:

- Total files
- Successful files
- Failed files
- Success rate
- Average processing time

Use these values to identify a trend, then inspect the individual files behind it.

## Find a file

Search for a file, configuration, or log identifier. Combine the search with:

- `Status`
- `Priority`
- `Has Error`
- Configuration filters

Use `Previous` and `Next` to move through result pages.

The active product store can affect the file-history query. Check the product store in the app menu before comparing results.

## Read a file record

A file record can show:

- Log identifier
- File name
- Configuration
- Processing status
- Priority
- Submission, start, and completion times
- Record and error counts

Select the record to open [File Details](file-details.md). Select the configuration action to open its manual-upload configuration when available.

## Cancel a pending file

The cancel action appears only when the file is still eligible for cancellation.

1. Confirm that the file status is pending.
2. Select the cancel action.
3. Review the confirmation.
4. Confirm the cancellation.
5. Refresh the result and verify the new status.

Cancellation does not reverse records that were already processed.

## Investigate a failure

1. Filter `Status` to the failed state or set `Has Error`.
2. Open the file.
3. Review the processing timeline.
4. Open `Errors`.
5. Compare the failed rows with the original file.
6. Confirm the import configuration before you submit a corrected file.
