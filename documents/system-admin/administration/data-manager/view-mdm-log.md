# View Logs

Data Manager logs help verify the status of imported data, ensuring the accuracy and completeness of data imported into the OMS.

Logs are available in two places:
- **Find Import page:** Shows all import logs across every configuration. Navigate here to get a system-wide view of all imports.
- **Configuration detail page:** Shows import logs scoped to a single configuration. Navigate here when auditing imports for a specific config.

## Log columns
Each log entry displays the following columns:

| Column              | Description                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Log ID**          | A unique identifier for the import log entry.                                                                       |
| **Parent Log ID**   | If this import is a child of a parent import (e.g., a chunked sub-import), the parent's Log ID is shown here.      |
| **Config ID**       | The configuration this import belongs to. Click to open the configuration detail page in a new tab.                 |
| **Uploaded File**   | Download icon for the original file that was submitted. Also shows the file size in MB.                             |
| **Import Parameters**      | Click `View` to open a dialog showing the key-value parameters passed to the import service for this run.           |
| **Error File**      | Download icon for the error records file, if any records failed. Also shows the file size in MB.                    |
| **Created Date**    | The date and time the import was submitted, along with the user who submitted it.                                   |
| **Start Date**      | The date and time the import began processing.                                                                      |
| **Status**          | The current status of the import. See [Statuses](#statuses) below.                                                  |
| **Completion Date** | The date and time the import finished, was cancelled, or crashed — shown alongside the Status column.               |
| **Product Store**   | The product store associated with this import, if applicable.                                                       |
| **Total Records**   | The total number of records in the submitted file.                                                                  |
| **Failed Records**  | The number of records that failed to process. Shown in red.                                                         |
| **Execution Time**  | The total time taken to process the file, computed from start to finish (or cancellation).                          |

{% hint style="info" %}
On the Configuration detail page, a **Run Thread** column is also displayed, showing the worker thread that processed the import.
{% endhint %}

## Statuses
Each import progresses through the following statuses:

| Status        | Description                                                                                          |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| **Pending**   | The file has been submitted and is waiting to be picked up by the MDM runner.                        |
| **Queued**    | The MDM runner has picked up the file and placed it in the worker pool queue.                        |
| **Running**   | The file is actively being processed by a worker thread.                                             |
| **Finished**  | Processing completed successfully.                                                                   |
| **Failed**    | Processing completed but encountered a failure. Check the Error File for details.                    |
| **Crashed**   | The runner or worker thread terminated unexpectedly during processing.                               |
| **Cancelled** | The import was manually cancelled by a user.                                                         |

## Actions
### Cancel an import
A `Pending` import can be cancelled before the MDM runner picks it up. Click the **X** button on the log entry to cancel it. Once an import moves to `Queued` or `Running` status, it can no longer be cancelled this way.

### Delete a log entry
Click the **trash** icon on a log entry to permanently delete the import record. This removes the log entry and any associated uploaded or error files from the system.

## Troubleshooting
**File Upload Failed:**

This typically occurs when the file format does not align with the required CSV or JSON format. Download the sample template from the configuration detail page and ensure your file matches the expected structure before re-uploading.

**File upload is partially failed:**

Failed records are generated when a file is successfully processed, but discrepancies in the uploaded data cause some records to fail. The records with correct data get processed, and a file containing all failed records with error details becomes available in the **Error File** column. Download the error file to identify what went wrong for each record. After fixing the errors, re-upload the corrected file. Some possible error types are:

| Error Type       | Description                                             |
| ---------------- | ------------------------------------------------------- |
| **Invalid Data** | Data that does not conform to expected values.          |
| **Invalid Format**| Correct type but doesn't follow the expected structure.|
| **Missing Field**| A required field is not provided or is empty.           |
| **Required Field**| A field marked as required is left blank.              |