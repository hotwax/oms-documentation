---
description: >-
  Learn how to manage data flow with HotWax's Data Manager
  Configurations.
---

# Configurations

## Data Manager Configurations Guide

The Data Manager Configurations page in the OMS is used to manage how data flows into and out of the platform. This guide explains how a System Administration team can create and update configurations, including steps to add SFTP details.


### How to Access the Data Manager Configurations Page

1. Go to the Hamburger Menu
2. Select `Settings`
3. Click on `Data Manager Configurations`

### Add a New Configuration

Create a new import configuration to ingest data from other systems or to let users upload data themselves using CSVs.

#### Steps

1. Click the `Add` button
2. Enter configuration details

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

1. Click `Add` to save the new configuration.

#### Important configurations

1. **File Name Pattern:**
   * _Scenario:_ Multiple file types exist in the same SFTP folder.
   * _Purpose:_ Allows to identify and match only relevant files during processing.
2. **Multi-threading:**
   * _Scenario:_ Large data imports, such as, product inventory resets with files exceeding 20 MB.
   * _Purpose:_ Data is divided and processed in parallel to reduce processing time.
   * _Note:_ Default value is 'N'
3. **Export Content ID:**
   * _Scenario:_ Export templates are used to format outgoing data.
   * _Purpose:_ Identify the correct template for export based on this ID.
4. **Export/Import Path:**
   * _Scenario:_ Communication with external platforms over SFTP.
   * _Purpose:_ Specify accurate paths for file import/export.

### Edit Configurations

* Use the search bar to find the configuration by name or ID.
* Click the `Edit` icon at the end of the search result.

{% hint style="info" %}
The Config ID cannot be modified. To use a different ID, create a new configuration.
{% endhint %}

{% embed url="https://youtu.be/OEss4sNcvnQ" %}

## Notify On Failure

**Notify On Failure** allows System Administrators to choose which configurations should trigger email alerts when a file fails during processing.

### How to Turn Notifications On or Off

1. In the configuration settings modal, use the Notify On Failure field:
  - Set to `Y` to receive emails when error records are found.
  - Set to `N` to skip notifications.
2. Click **Save**.

{% hint style="info"%} 
Notifications are sent to the email addresses configured in the instances.
{% endhint %}


### How to Verify Data Flow

Use data logs to track file processing, confirm success, or review errors.

#### Steps to Check Logs

1. Click the `open link` icon beside the service name on the Data Manager Configuration search page.

* This opens the [Import Data page](/documents/system-admin/administration/data-manager/troubleshooting/manual-data-import.md) for the selected service.
  
2. Once a file is done processing, its status will change to **Finished**.

If processing failed, download the failed records for review. These are usually in JSON or CSV format, with error reasons attached to each record.

3. Click the `Log` button to view detailed logs related to the service.
4. Use the log to identify any specific failure or irregularity.