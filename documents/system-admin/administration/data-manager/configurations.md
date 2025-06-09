---
description: >-
  Discover how to manage data flow with HotWax Commerce's Data Manager
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

1. Click the `Add` button on the configurations page.
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

The **Notify On Failure** allows controls whether the System Administrators team receives email alerts when file fails during processing.

### How to Enable or Disable Notifications

#### Navigate to Data Manager Configuration

1. Go to **Hamburger Menu > Settings > Data Manager Configurations**.
2. Search for the configuration (e.g., order import, attribute update).
3. Click **Edit** (pencil icon) next to the selected configuration.
4. In the configuration settings, find the Notify On Failure field:
      it to:
  - Set to `Y` to receive emails when error records are found.
  - Set to `N` to skip notifications.
5. Click **Save**.

{% hint style="info"%} 
 - Notifications are sent to the email addresses configured in the instances.
 - This setting applies on a **per-data manager configuration**—users can selectively enable or disable it based on the file's importance.
{% endhint %}


### How to Verify Data Flow

The System Administration team can use data logs to track file processing, confirm success, or review errors.

#### Steps to Check Logs

1. Locate Desired Configuration:

* Navigate to the `search` bar within the `HotWax Commerce Data Manager Configurations` page.
* Search the configuration with the service/keyword or locate the desired service from the list.

2. Open the Data manager logs for the Configurations:

* Identify the relevant configurations in the search results.
* Click on the `open link` icon located in front of the service name.
* The system will open the [Import Data page](/documents/system-admin/administration/data-manager/troubleshooting/manual-data-import.md) for the selected service.

3. Check the Status of the Service:

* Review the displayed information to check the status of the service.
* Ensure that the status of the service is finished. You can view different data status types [here.](/documents/integrate-with-hotwax/api/facility/postcode-lookup.md)
* If any of the services fails, users can read the failed records through the data logs. Failed records are simply JSON/CSV file which has the failed reason appended at the end of the record, which can be used for troubleshooting.

**View Logs for Detailed Information:**

* Click on the `Log` button in the `Import data page` to access detailed logs related to the service.
* Use the logs to gather information about the service flow and identify the cause of any potential failures.
* Non-technical users can utilize AI tools like ChatGPT to interpret log information and understand the service status.

## SFTP User Integration in Data Configuration

In the OMS data import/export process, setting up SFTP users is essential for smooth operations. Server paths, beginning with the SFTP username (e.g., `dummySftpUser/HotWax/SalesOrders/`), follow a consistent convention. HotWax simplifies user integration, minimizing manual errors. This streamlined setup is crucial for bulk user integration, allowing easy association with diverse import paths. By incorporating specific SFTP users into configurations, users can efficiently manage data flow, ensuring secure and error-free transactions within the OMS.

#### Steps

1. Select `Add SFTP User to Config`.
2. Choose the SFTP user configuration path.
3. Select the `FTP Config` and `Config ID`.
4. Save the configuration.

By following these steps, users can manage data configurations within the OMS, ensuring efficient data flow and integration.
