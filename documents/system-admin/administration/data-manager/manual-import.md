# Manual Imports

## Downloading a template

Before importing data, download the sample template for the configuration you want to use. Templates are pre-generated from the import service's expected parameters, so they always reflect the correct structure.

From the configuration detail page, two template formats are available in the toolbar:

- **CSV template** — Click the CSV icon to download a file with column headers formatted as hyphen-separated names (e.g., `product-id`, `facility-id`). Use this as your starting point when preparing a CSV import file.
- **JSON template** — Click the JSON icon to download a JSON file with the expected parameter names as keys. Use this when the import service expects a JSON payload.

## Importing data
1. Navigate to the Data Manager Configurations list and open the relevant configuration by clicking its Config ID.
2. From the configuration detail page, click `Upload File` in the toolbar.
3. Select your prepared CSV or JSON file using the file chooser.
4. Click `Add` to submit the file. The OMS will create a new log entry and begin processing.

Once submitted, the import log entry will initially appear in `Pending` status. The MDM runner picks it up and routes it to either the Priority or Normal thread pool based on the configuration's priority setting.

{% hint style="info" %}
If the import does not begin processing immediately, the configuration may be set to Queued mode. The MDM runner processes queued imports at regular intervals. You can monitor the runner's last execution time and pool activity from the Find Import page.
{% endhint %}

## Monitoring the import
After submitting, track progress from the log table on the configuration detail page:

- **Status** updates from `Pending` → `Queued` → `Running` → `Finished` (or `Failed` / `Crashed` / `Cancelled`).
- **Total Records** and **Failed Records** are updated as the import processes.
- **Execution Time** shows the total time taken once the import completes.

Click `View` in the **Parameters** column to inspect the exact parameters passed to the import service for that run.

## Handling errors
After the import finishes, if the status is `Failed` or the **Failed Records** count is greater than zero, your data has not been fully processed.

1. Click the download icon in the **Error File** column to download the error records file.
2. The file contains the original records along with an error reason for each failed row.
3. Correct the identified errors in the file, remove the error reason column, and re-upload the corrected file.

For detailed troubleshooting steps, refer to the [Audit Logs](/documents/system-admin/administration/data-manager/view-mdm-log.md) page.
