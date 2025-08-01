# Configuration options

## Add or edit a configuration

If you're creating a new Import configuration to import data from an SFTP location
1. Click the `Add` button
2. Enter configuration details

If you're editing an existing import or export configuration
* Use the search bar to find the configuration by name or ID.
* Click the `Edit` icon at the end of the search result.

{% hint style="info" %}
The Config ID cannot be modified. To use a different ID, create a new configuration.
{% endhint %}

| Field                 | Description                                             |
| --------------------- | ------------------------------------------------------- |
| **Config ID**         | Unique identifier for the configuration.                |
| **Description**       | Short explanation of what the configuration handles.    |
| **Import Service**    | Service name that handles incoming data.                |
| **Import Path**       | SFTP Folder path for imported files.                    |
| **Export Content ID** | Template identifier used while exporting data.          |
| **Export Service**    | Service that handles outgoing data.                     |
| **Export Path**       | SFTP Destination folder for exported files.             |
| **File Name Pattern** | Identify and match only relevant files during processing using REGEX expressions |
| **Multi-threading**   | Y/N flag to enable multi-threading on all files imported in this config (default N)|
| **Execution Mode**    | Select from Sync, Async or Queued to set how the OMS prioritizes the processing of this configuration. (default Queued) |
| **Notify on Failure** | Y/N flag to disable notifications on file import error (default Y)|

{% hint style="danger" %}
Execution mode should always be set to Queued
{% endhint %}

{% hint style="danger" %}
Multi-threading should be disabled on all configs unless explicitly instructed by HotWax Support. Incorrect use of multi-threading can cause to system overload and downtime. If you've decided multi-threading is your poison, make sure that the configuration is set to execute in queued mode or else your almost certain to cause a system overload.
{% endhint %}

{% hint style="info"%} 
Notifications are sent to the email addresses configured in the instances.
{% endhint %}


### View a configuration

You may need to view a data manager configuration to either manually import data or to audit data that has been imported either by another user or scheduled SFTP file import job.

1. Click the `open link` icon beside the service name on the Data Manager Configuration search page.

* This opens the [Import Data page](/documents/system-admin/administration/data-manager/troubleshooting/manual-data-import.md) for the selected service.
  
2. Once a file is done processing, its status will change to **Finished**.

   If processing finished with error records, download the error records for review. These are usually in JSON or CSV format, with error reasons attached to each record.

3. Click the `Log` button to view detailed logs related to the service.
4. Use the log to identify any specific failure or irregularity.