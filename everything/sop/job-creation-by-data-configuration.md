# Create a Job using Data Manager Configuration

## Import Jobs <a href="#import-jobs" id="import-jobs"></a>

Discover how to create _import jobs_ and manage data flow with HotWax Commerce's Data Manager Configurations.

This guide provides step-by-step instructions for creating a job through HotWax Commerce's Data Manager Configurations. It includes a guide on accessing and adding configurations, connecting with the SFTP server, and creating jobs using the webtools.

**Access SFTP**

### Finding the SFTP credentials in OMS <a href="#finding-the-sftp-credentials-in-oms" id="finding-the-sftp-credentials-in-oms"></a>

* Log in to your HotWax commerce instance with your user credentials
* Navigate to the hamburger menu&#x20;
* Select Settings
* Click on the General page and navigate to the FTP Connection Settings section
* Copy the SFTP credentials from there i.e, host, username, port, and password

### Connecting the SFTP server <a href="#connecting-the-sftp-server" id="connecting-the-sftp-server"></a>

To connect to the SFTP server and manage data transfer, you can utilize FTP software such as FileZilla. Here's how to proceed:

**Download and Install FileZilla:** If you haven't already, download and install FileZilla from the official website.

**Accessing SFTP with FileZilla:**

* Open FileZilla.
* Click on "File" in the top menu, then select "Site Manager."
* Click on "New Site" and enter a name for the connection.
* Input the Host, Username, Port, and Password obtained from the HotWax Commerce settings into the corresponding fields in FileZilla.
* Click "Connect" to establish the connection.
* Navigating Remote Site:
  * After connecting, you'll see the Remote Site section in FileZilla.
  * Navigate through the directory to locate or create the path where your data will be transferred.
* Copying the Path:
  * Once you've found or created the desired path, right-click on it and select "Copy."
  * This copied path will be needed for configuring data transfers in subsequent steps.

### Finding the Service via web tools <a href="#finding-the-service-via-web-tools" id="finding-the-service-via-web-tools"></a>

This step is only essential if you are unsure about the service that will be used to import data

* Navigate to the webtools of the HotWax Commerce instance `(https://<instance-name>.hotwax.io/webtools)` in your browser (Replace the \<instance-name> with the required instance name)
* Login to Webtools via your credentials for that instance.
* Click on Service Engine and search to find the relevant service. For Example:
  * Let's say we want to use a service involved in importing the features of the product
  * Then you can search for the relevant keywords like import or product to find the relevant service
  * Copy the relevant service name

## Add Data Configurations <a href="#add-data-configurations" id="add-data-configurations"></a>

The OMS Data Manager Configurations page provides a way to effectively manage the flow of data in and out of OMS. In this guide, you'll find step-by-step instructions for adding and editing configurations, as well as integrating SFTP details into the configurations.

### Add a New Configuration for Importing Data <a href="#add-a-new-configuration-for-importing-data" id="add-a-new-configuration-for-importing-data"></a>

Adding a new data configuration in OMS enables users to specify how data is imported and exported.

#### Steps: <a href="#steps" id="steps"></a>

* Navigate to the settings section in the hamburger menu of HotWax Commerce
* Click on `Data Manager Configurations` to open the configurations page
* Click the `Add` button on the Configurations page.
* In the modal that appears, provide information for fields such as Config ID\*, Description\*, Import Service\* (enter the service here that was copied above), Import Path\* (enter the SFTP path that was created above), Export Content ID, Export Service, Export Path, File Name Pattern, and Multi-threading.\
  (To learn more about these fields [click here](https://docs.hotwax.co/user-guides/workflow/data-manager/configurations#configuration-information-table))

Required fields marked with (\*) : Config ID\* (enter the name according to requirement), Description\* (enter a small description about this), Import Service\* (enter the service here that was copied above), Import Path\* (enter the SFTP path that was created above)

**Example:**

| **Config Id**\* | **Description**\*       | **Import Service**\*  | **Import Path\*** |
| --------------- | ----------------------- | --------------------- | ----------------- |
| IMP\_PROD\_FETR | Import Product Features | importProductFeatures | \<replace-path>   |

* Click `Add` again to save the new configuration.

## Creating a Job <a href="#creating-a-job" id="creating-a-job"></a>

HotWax Commerce’s[ Job Manager App](https://www.hotwax.co/apps/job-manager-app) lets you view, schedule, and update job workflows running in HotWax Commerce's Order Management System for orders, products, inventory, and more operations.

To create and view a new job within HotWax Commerce's Job Manager Application, you'll need to access the webtools of your instance and set up the job details as follows:

### Steps: <a href="#steps-1" id="steps-1"></a>

* Log in to the webtools of your HotWax Commerce instance using your credentials.
* Click on Entity Engine and search to find the EnumType entity. Filter the result for the Parent Type Id field as ‘SYSTEM\_JOB’.
* Look for the corresponding Enum Type ID field that resembles your service. From the example above we will take the Enum Type Id as ‘PRODUCT\_SYS\_JOB’. Since we are using the service for importing product features.
* Search for the Enumeration entity in the entity engine and click on the Create New button to create a new record with the required fields  Enum Id, Enum Type Id, Description, and Enum Name.\
  Enum Id (enter the enumeration id), Enum Type Id (enter the id that we searched in the above point), Description (enter relevant description), and Enum Name (enter relevant enum name).
  * For example:&#x20;

| **Enum Id**          | **Enum Type Id**  | **Enum Code** | **Description**        |
| -------------------- | ----------------- | ------------- | ---------------------- |
| JOB\_IMP\_PROD\_FETR | PRODUCT\_SYS\_JOB | \<optional>   | Import product feature |

* Search for the Runtime Data entity in the entity engine and click on the Create New button to create a new record with the fields  Runtime Data Id, and Runtime Info.\
  The Runtime Data ID (create a new ID here), and Runtime Info
  * The XML Structure for Runtime Info field (Replace the ENTER\_HERE with the configId that was created in the data manager config)

```xml
<?xml version="1.0" encoding="UTF-8"?> <ofbiz-ser> <map-HashMap> <map-Entry> <map-Key> <std-String value="configId"/> </map-Key> <map-Value> <std-String value="ENTER_HERE"/> </map-Value> </map-Entry> <map-Entry> <map-Key> <std-String value="propertyResource"/> </map-Key> <map-Value> <std-String value="FTP_CONFIG"/> </map-Value> </map-Entry> </map-HashMap> </ofbiz-ser>
```

* Search for the Job Sandbox entity in the entity engine and click on the Create New button to create a new record with the fields&#x20;
  * Job ID (create a relevant ID)
  * Job Name (create a relevant job name for the above id)
  * Pool Id (enter “pool”)
  * Status Id (enter “SERVICE\_DRAFT”)
  * Parent Job ID (optional)
  * Service Name (enter “ftpImportFile”)
  * Run As User (enter “system”)
  * Runtime Data ID (enter the ID from the runtime entity that was created above)
  * Max Recurrence Count (enter “-1”)
  * System Job Enum Id (enter the Enum Id from the Enumeration entity that we created above)
* Go to the Job Manager application via Launchpad. Select the category of the job on the left side panel to find that particular job. The job will be visible in the ‘miscellaneous’ section of the job category.
