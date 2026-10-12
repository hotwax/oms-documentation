# Configuration options

## Legacy OMS configuration fields

On legacy OMS administration screens, to create a configuration, select `Add` and enter the confirmed import or export details. To edit an existing configuration, search by name or ID and select the `Edit` icon.

{% hint style="info" %}
`Config ID` cannot be modified. To use a different ID, create a new configuration.
{% endhint %}

| Field | Description |
| --- | --- |
| `Config ID` | Unique identifier for the configuration. |
| `Description` | Short explanation of what the configuration handles. |
| `Import Service` | Service name that handles incoming data. |
| `Import Path` | SFTP folder path for imported files. |
| `Export Content ID` | Template identifier used while exporting data. |
| `Export Service` | Service that handles outgoing data. |
| `Export Path` | SFTP destination folder for exported files. |
| `File Name Pattern` | A regular expression that limits an SFTP import to matching files. |
| `Multi-threading` | Controls whether files for this configuration can be processed with multiple threads. |
| `Execution Mode` | Determines how the order management system (OMS) schedules processing for this configuration. |
| `Notify on Failure` | Controls whether failure notifications are sent for this configuration. |

{% hint style="danger" %}
Keep the configured execution mode unless your HotWax Commerce implementation team instructs you to change it.
{% endhint %}

{% hint style="danger" %}
Do not enable multi-threading unless your HotWax Commerce implementation team has approved the configuration. It can change how bulk files use OMS processing capacity.
{% endhint %}

{% hint style="info"%}
Notifications are sent to the email addresses configured for the instance.
{% endhint %}

## Review a legacy OMS configuration

Use `Settings` > `Data Manager Configurations` to inspect or maintain the backend import or export contract.

1. Search for the configuration by name or ID.
2. Open the configuration.
3. Confirm its service, file paths, file name pattern, execution settings, and notification behavior.
4. Change a value only after the configuration owner confirms the expected contract.

Use Job Manager for daily operations:

- [Upload a file manually](../job-manager/mdm/manual-uploads.md)
- [Monitor file processing](../job-manager/mdm/file-history.md)
- [Review file details](../job-manager/mdm/file-details.md)

## Maarg configuration fields

On the Maarg administration screen, open `MDM` > `Configs`.

1. Select `Add` on the configuration list to create a configuration.
2. To edit one, search by ID or description, open the Config ID link, and select `Edit` on its detail page.
3. Save the confirmed settings. The Config ID cannot be changed after creation.

The Maarg create and edit dialogs expose these fields:

| Field | Description |
| --- | --- |
| `Config ID` | Unique identifier, entered at creation and fixed afterward |
| `Description` | Describes the data handled by the configuration |
| `Import Service Name` | Service invoked for records in the imported file |
| `Execution Mode` | `Queue`, `Async`, or `Sync`; an empty value uses `DMC_QUEUE` in the runner. See [Maarg runner behavior](README.md#maarg-runner-and-thread-pools) before changing it |
| `Multi Threading` | `Y` enables CSV or JSON chunk processing; an empty value is treated as disabled |
| `Priority` | Greater than `6` selects `PRIORITY`; `6` and below select `NORMAL`. An empty value defaults to `5` |

The detail page also displays the read-only `Thread Pool`, derived from the priority. The legacy OMS fields listed above are not all available in the Maarg create and edit dialogs.

Keep queue mode selected and multi-threading disabled unless your HotWax Commerce implementation team has approved a different configuration. Multi-threading allows chunks of one file to run concurrently, even when files within the configuration are queued sequentially.

The configuration detail page provides sample CSV and JSON downloads, `Upload File`, and import logs. See [Manual Imports](manual-import.md#maarg-administration-upload) and [View Logs](view-mdm-log.md#maarg-administration-logs) for this backend workflow.
