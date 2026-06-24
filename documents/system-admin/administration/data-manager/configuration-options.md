# Configuration options

## Add a configuration

To create a new import configuration:
1. Click the `Add` button on the Data Manager Configurations list page.
2. Enter the configuration details in the dialog.

{% hint style="info" %}
The Config ID cannot be modified after creation. To use a different ID, create a new configuration.
{% endhint %}

## Edit a configuration
To edit an existing configuration:
* Use the search bar on the Data Manager Configurations list page to find the configuration by name or ID.
* Click the configuration ID link to open its detail page.
* Click the `Edit` button in the toolbar to open the edit dialog.

### Configuration fields
| Field                | Description                                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Config ID**        | Unique identifier for the configuration. Cannot be changed after creation.                                          |
| **Description**      | Short explanation of what the configuration handles.                                                                |
| **Import Service**   | Service name that handles incoming data.                                                                            |
| **Execution Mode**   | How the OMS prioritizes processing. Select from `Queued`, `Sync`, or `Async`. Defaults to `Queued`.                |
| **Multi-threading**  | Y/N flag to enable multi-threading for all files imported under this config. Defaults to `N`.                       |
| **Priority**         | Numeric value that determines which thread pool handles this configuration. Higher values route to the Priority Pool.|
| **Thread Pool**      | Read-only. Displays the worker pool (`PRIORITY` or `NORMAL`) assigned based on the Priority value.                 |

{% hint style="danger" %}
Execution mode should always be set to Queued.
{% endhint %}

{% hint style="danger" %}
Multi-threading should be disabled on all configs unless explicitly instructed by HotWax Support. Incorrect use of multi-threading can cause system overload and downtime. If multi-threading is enabled, ensure the configuration is set to execute in Queued mode, or you risk causing a system overload.
{% endhint %}

## View a configuration
You may need to view a data manager configuration to manually import data or to audit data that has been imported by another user or a scheduled SFTP import job.

1. On the Data Manager Configurations list page, click the **Config ID** link for the configuration you want to view.
2. The configuration detail page opens, showing all configuration fields and a log of all imports for that configuration.

From the configuration detail page, you can also:
- **Download a sample CSV template** — Click the CSV icon in the toolbar to download a template file pre-populated with the column headers expected by the import service.
- **Download a sample JSON template** — Click the JSON icon in the toolbar to download a JSON template pre-populated with the parameter names expected by the import service.
- **Upload a file** — Click `Upload File` to manually submit a CSV or JSON file for import.

Once a file is done processing, its status will change to **Finished**. If processing finishes with error records, download the error file for review. Error files are in CSV or JSON format with error reasons attached to each record.