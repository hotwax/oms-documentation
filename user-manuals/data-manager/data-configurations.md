# Introduction

The Data Manager Configurations page in the OMS empowers users to effectively manage data flow into and out of OMS. This guide provides step-by-step instructions on adding and editing configurations, as well as integrating SFTP users into the configurations.

## Accessing the Data Manager Configurations Page

1. Navigate to the Hamburger menu.
2. Select `Settings`.
3. Click on `Data manager configurations`.

## Key Functions:

### 1. Add a New Configuration:

To add a new configuration, follow these steps:

   a. Click the `Add` button on the configurations page.
   b. In the modal that appears, provide the following information:
    | Field               | Description                                         |
    |---------------------|-----------------------------------------------------|
    | **Config ID**       | A unique identifier for the configuration.           |
    | **Description**     | A brief description of the configuration.            |
    | **Import Service**  | The OMS service or workflow for importing data.     |
    | **Import Path**     | The path from which the data will be imported.       |
    | **Export Content ID**| Content ID for exporting data.                       |
    | **Export Service**  | The OMS service or workflow for exporting data.     |
    | **Export Path**     | The path to which the data will be exported.         |
    | **File Name Pattern**| A pattern for naming files.                          |
    | **Multi-threading** | Y/N configuration for processing multiple files.    |
    c. Click `Add` again and you will find the newly configurations in the list.       

### 2. Edit Configurations:

To edit configurations, follow these steps:

   a. Search for the desired configuration by name or ID.
   b. Click the `Edit` button at the end of the search result.
   c. In the modal, configure the following values:
    | Field               | Description                                                 |
    |---------------------|-------------------------------------------------------------|
    | **Description**     | Modify the description of the configuration.                |
    | **Import Service**  | Change the OMS service or workflow for importing data.      |
    | **Import Path**     | Modify the path from which the data will be imported.        |
    | **Export Content ID**| Change the content ID for exporting data.                    |
    | **Export Service**  | Change the OMS service or workflow for exporting data.      |
    | **Export Path**     | Modify the path to which the data will be exported.          |
    | **File Name Pattern**| Adjust the pattern for naming files.                         |
    | **Multi-threading** | Modify the Y/N configuration for processing multiple files.|

{% hint style="info" %}
Config ID can not be changed by default. 
{% endhint %}

### 3. Add SFTP User to Config:

This function enables the addition of an SFTP user to configurations. Follow these steps:

   a. Select `Add SFTP User to Config`.
   b. Choose the SFTP user configuration path.
   c. Select the Config ID.
   d. Save the configuration.

By following these steps, users can seamlessly manage data configurations within the OMS, ensuring efficient data flow and integration.
