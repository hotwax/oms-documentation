---
description: >-
  Learn how to manage data flow with HotWax's Data Manager
  Configurations.
---

# Configurations

## Data Manager Configurations Guide

The Data Manager Configurations page in the OMS is used to manage how data flows into and out of the platform. This guide explains how the System Administration team can create and update configurations, including steps to add SFTP details.


### How to Access the Data Manager Configurations Page

1. Go to the Hamburger Menu.
2. Select `Settings`.
3. Click on `Data Manager Configurations`.

### Add a New Configuration

New configurations define how specific data is imported or exported.

#### Steps

1. Click the `Add` button.
2. In the modal that appears, provide information for fields such as Config ID, Description, Import Service, Import Path, Export Content ID, Export Service, Export Path, File Name Pattern, and Multi-threading.
3. Click `Add` to save the new configuration.

#### Configuration Information Table

| Field                 | Description                                             |
| --------------------- | ------------------------------------------------------- |
| **Config ID**         | Unique identifier for the configuration.                |
| **Description**       | Short explanation of what the configuration handles.    |
| **Import Service**    | Service name that handles incoming data.                |
| **Import Path**       | Folder path for imported files.                         |
| **Export Content ID** | Template identifier used while exporting data.          |
| **Export Service**    | Service or workflow that handles outgoing data.         |
| **Export Path**       | Destination folder for exported files.                  |
| **File Name Pattern** | File matching pattern for imports/exports.              |
| **Multi-threading**   | Y/N flag to decide whether to process multiple files in parallel.|

#### Use Cases of some configurations

1. **File Name Pattern:**
   * _Scenario:_ Multiple file types exist in the same SFTP folder.
   * _Purpose:_ Allows to identify and match only relevant files during processing.
2. **Multi-threading:**
   * _Scenario:_ Large data imports, e.g., product inventory resets with files exceeding 20 MB.
   * _Purpose:_ Data is divided and processed in parallel to reduce processing time.
   * _Note:_ Default value is 'N'
3. **Export Content ID:**
   * _Scenario:_ Export templates are used to format outgoing data.
   * _Purpose:_ Identify the correct template for export based on this ID.
4. **Export/Import Path:**
   * _Scenario:_ Communication with external platforms over SFTP.
   * _Purpose:_ Specify accurate paths for file import/export; incorrect paths can result in failed data communication.

### Edit Configurations

Configurations can be updated to match changes in data formats or business workflows.

#### Steps

* Use the search bar to find the configuration by name or ID.
* Click the `Edit` button at the end of the search result.

{% hint style="info" %}
The Config ID cannot be modified. To use a different ID, create a new configuration.
{% endhint %}

{% embed url="https://youtu.be/OEss4sNcvnQ" %}

## Notify On Failure

**Notify On Failure** allows the System Administrators team to choose which configurations should trigger email alerts when a file fails during processing, so they can enable it only for the important ones.

### How to Turn Notifications On or Off

#### Navigate to Data Manager Configuration

1. Search for the configuration (order import, attribute update).
2. Click **Edit** (pencil icon) next to the selected configuration.
3. In the configuration settings, find the Notify On Failure field:
  - Set to `Y` to receive emails when error records are found.
  - Set to `N` to skip notifications.
4. Click **Save**.

{% hint style="info"%} 
Notifications are sent to the email addresses configured in the instances.
{% endhint %}


### How to Verify Data Flow

The System Administration team can use data logs to track file processing, confirm success, or review errors.

#### Steps to Check Logs

1. Use the search bar to find the configuration by name or ID.

2. Find the matching configuration in the list and click the `open link` icon beside the service name.

* This opens the [Import Data page](/documents/system-admin/administration/data-manager/troubleshooting/manual-data-import.md) for the selected service.
3. Look for a status marked as **Finished**. You can view different data status types [here.](/documents/integrate-with-hotwax/api/facility/postcode-lookup.md)

If processing failed, download the failed records for review. These are usually in JSON or CSV format, with error reasons attached to each record.

4. Click the `Log` button to view detailed logs related to the service.
5. Use the log to identify any specific failure or irregularity.

## SFTP User Setup in Data Configuration

The System Administration team can connect SFTP users with configurations to manage data exchange paths.


## SFTP Path Format

SFTP paths begin with the username (e.g., dummySftpUser/HotWax/SalesOrders/). This format should be followed across all configurations to avoid mistakes and make it easier to manage configurations in bulk.


#### How to Add an SFTP User to a Configuration

1. Click on `Add SFTP User to Config`.
2. Select the correct SFTP user configuration path.
3. Choose the `FTP Config` and `Config ID`.
4. Click **Save**.

