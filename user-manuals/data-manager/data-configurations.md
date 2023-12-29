# Introduction

The Data Manager Configurations page in the OMS empowers users to effectively manage data flow into and out of OMS. This guide provides step-by-step instructions on adding and editing configurations, as well as integrating SFTP users into the configurations.

## Accessing the Data Manager Configurations Page

1. Navigate to the Hamburger menu.
2. Select `Settings`.
3. Click on `Data manager configurations`.

## Key Functions:

### Add a New Configuration

Adding a new data configuration in OMS is essential for customizing data processes to meet specific requirements. It enables users to specify how data is imported and exported, ensuring seamless integration with OMS services. 

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

### Edit Configurations

Editing an existing Data Manager Configuration is crucial for maintaining adaptability and precision in data workflows within OMS. It allows users to update configurations based on evolving business needs or changing data sources. Whether adjusting import/export paths, modifying file-naming patterns, or updating service workflows, editing configurations ensures the ongoing relevance and effectiveness of data management processes. 
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

### Add SFTP User to Data Configuration

Adding an SFTP user to a Data Configuration is crucial for bulk SFTP user setup within OMS. This feature streamlines the process of associatin SFTP user with various configurations import paths. By incorporating specific SFTP users into configurations, users can manage and assign appropriate access permissions for different data paths, facilitating a seamless and controlled flow of information. 

This function enables the addition of an SFTP user to configurations. Follow these steps:

   a. Select `Add SFTP User to Config`.
   b. Choose the SFTP user configuration path.
   c. Select the `FTP Config` and `Config ID`.
   d. Save the configuration.

By following these steps, users can seamlessly manage data configurations within the OMS, ensuring efficient data flow and integration.
