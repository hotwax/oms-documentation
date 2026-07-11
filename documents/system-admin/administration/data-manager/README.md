---
description: Configure, run, and audit imports and exports in Data Manager.
---

# Data Manager

Data Manager is the OMS workspace for importing and exporting data, monitoring file processing, and reviewing failed records. Use it when you need to run a supported bulk import, configure an automated SFTP import, or investigate an import or export result.

## Open Data Manager

1. Open the hamburger menu.
2. Go to `Settings`.
3. Select `Data Manager Configurations`.

From the configuration list, search by configuration name or ID. Open a configuration to upload a file, review its history, or inspect its logs.

## Choose the right task

| Task | Use this guide |
| --- | --- |
| Create or update an import or export configuration | [Configuration options](configuration-options.md) |
| Retrieve files from an SFTP location automatically | [Import from an SFTP](ftp-import-job.md) |
| Upload a file yourself | [Manual import](manual-import.md) |
| Find a supported import and its fields | [Frequently used imports](freq-used-configurations.md) |
| Review a file's status, log, or failed rows | [Audit logs](view-mdm-log.md) |
| Investigate a file that did not process | [Troubleshooting](troubleshooting/README.md) |

## Before you import

* Use the sample file for the selected import wherever one is available.
* Confirm that the configuration's import service and file format match the data you are uploading.
* For automated imports, confirm the SFTP path and the job configuration before placing a file on the server.
* Review failed records after every import and correct only the rows that failed before retrying them.

## Processing and statuses

Files commonly move through `Pending`, `Running`, `Finished`, or `Failed` statuses. A queued file waits for the bulk-file processing job; it does not necessarily start as soon as it is uploaded. See [Audit logs](view-mdm-log.md) for status definitions and [Data not imported](troubleshooting/data-not-imported.md) for a queued file that does not begin processing.

{% hint style="warning" %}
Do not change execution mode or enable multi-threading unless your HotWax Commerce implementation team has confirmed the configuration. These settings affect how bulk files use OMS processing capacity.
{% endhint %}
