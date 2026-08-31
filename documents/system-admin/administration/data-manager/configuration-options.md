# Configuration options

## Add or edit a configuration

To create a configuration, select `Add` and enter the confirmed import or export details. To edit an existing configuration, search by name or ID and select the `Edit` icon.

{% hint style="info" %}
The Config ID cannot be modified. To use a different ID, create a new configuration.
{% endhint %}

| Field | Description |
| --- | --- |
| **Config ID** | Unique identifier for the configuration. |
| **Description** | Short explanation of what the configuration handles. |
| **Import Service** | Service name that handles incoming data. |
| **Import Path** | SFTP Folder path for imported files. |
| **Export Content ID** | Template identifier used while exporting data. |
| **Export Service** | Service that handles outgoing data. |
| **Export Path** | SFTP Destination folder for exported files. |
| **File Name Pattern** | A regular expression that limits an SFTP import to matching files. |
| **Multi-threading** | Controls whether files for this configuration can be processed with multiple threads. |
| **Execution Mode** | Determines how the Order Management System (OMS) schedules processing for this configuration. |
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

### Review a configuration

Use `Settings` > `Data Manager Configurations` to inspect or maintain the backend import or export contract.

1. Search for the configuration by name or ID.
2. Open the configuration.
3. Confirm its service, file paths, file name pattern, execution settings, and notification behavior.
4. Change a value only after the configuration owner confirms the expected contract.

Use Job Manager for daily operations:

- [Upload a file manually](../../../retail-operations/workflow/job-management/mdm/manual-uploads.md)
- [Monitor file processing](../../../retail-operations/workflow/job-management/mdm/file-history.md)
- [Review file details](../../../retail-operations/workflow/job-management/mdm/file-details.md)
