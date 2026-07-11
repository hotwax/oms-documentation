# Configuration options

## Add or edit a configuration

To create a configuration, select **Add** and enter the confirmed import or export details. To edit an existing configuration, search by name or ID and select the **Edit** icon.

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
| **File Name Pattern** | A regular expression that limits an SFTP import to matching files. |
| **Multi-threading**   | Controls whether files for this configuration can be processed with multiple threads. |
| **Execution Mode**    | Determines how the OMS schedules processing for this configuration. |
| **Notify on Failure** | Controls whether failure notifications are sent for this configuration. |

{% hint style="danger" %}
Keep the configured execution mode unless your HotWax Commerce implementation team instructs you to change it.
{% endhint %}

{% hint style="danger" %}
Do not enable multi-threading unless your HotWax Commerce implementation team has approved the configuration. It can change how bulk files use OMS processing capacity.
{% endhint %}

{% hint style="info"%} 
Notifications are sent to the email addresses configured for the instance.
{% endhint %}


### View a configuration

You may need to view a data manager configuration to either manually import data or to audit data that has been imported either by another user or scheduled SFTP file import job.

1. Click the `open link` icon beside the service name on the Data Manager Configuration search page.

* This opens the [Import Data page](/documents/system-admin/administration/data-manager/manual-import.md) for the selected service.
  
2. Once a file is done processing, its status will change to **Finished**.

   If processing finished with error records, download the error records for review. These are usually in JSON or CSV format, with error reasons attached to each record.

3. Click the `Log` button to view detailed logs related to the service.
4. Use the log to identify any specific failure or irregularity.
