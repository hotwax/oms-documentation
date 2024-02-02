# Web Tools

Web Tools are a resource for backend and development teams, providing functionalities for data management, log viewing, data import/export, job execution, and more within an Order Management System (OMS) instance.

Accessing Web Tools is straightforward. Users can conveniently navigate to the following URL in their web browsers: https://_**user-instance**_.hotwax.io/webtools. For example, for demo-oms, the corresponding URL would be https://demo-oms.hotwax.io/webtools.

Upon reaching the Web Tools portal, users are prompted to log in using their credentials.

___

## Entity Engine

The Entity Engine in HotWax Commerce Web Tools is essential for viewing and managing data. It offers a platform for handling entities within the system, particularly benefiting backend and development teams by enabling efficient data management.

Entity Engine is accessible through the `Entity Engine` button on the second row of tabs on the main web tools page. Alternatively, users can also find a list of `Entity Engine Tools` directly on the web tools main page.

* Click on the `Entity Engine` button to be redirected to the `Entity Data Maintenance` page. 
* Use filters such as `Group Name` and `Entity Name` to find specific records.
* An alphabetical list of all entities is also displayed on this page.
* Click on the name of a specific entity to view its dataset.
* Explore functions and filters to search data within the entity.
* For a comprehensive view of all records of an entity, click the `Search` button.
* Utilize the `View Relations` option to explore relationships with other entities. For example, if we consider the entity ‘Facility’, we can see that it is related to entities ‘FacilityGroup’, ‘ProductStore’, ‘Party’ and so on. 


### Entity SQL Processor

The Entity SQL Processor in Web Tools interprets and executes SQL commands, improving data viewing and management efficiency by providing users with the capability to execute SQL queries in the system. 

{% hint style="info" %} Users must always use the `Select` query first, and then use subsequent queries to perform relevant actions. Furthermore, it is recommended to refrain from using `Delete` queries. {% endhint %}

* Navigate to the `Entity Engine` page within Web Tools. Click on `Entity SQL Processor` within the `Entity Engine` page. Alternatively, users can find the `Entity SQL Processor` option under `Entity Engine Tools` on the main Web Tools page and click on it.
* This opens the `Entity SQL Processor` page.
* Change the group to 'org.apache.ofbiz’. 
* Input the required SQL query in the `SQL command` field.
* If required, use the `Limit Rows` function to limit the number of results displayed.
* Click on `Send` to initiate the execution of the SQL query.

 The search results are presented in chronologically descending order, providing users with the output of the executed SQL command.

___

## Service Engine

The `Service Engine` is a useful component for running and managing services within the OMS. This functionality provides users with a platform for searching, running, and scheduling various jobs and services.

Service Engine is accessible through the `Service Engine` button on the second row of tabs on the main web tools page. Alternatively, users can also find a list of `Service Engine Tools` on the web tools main page.

* Clicking the `Service Engine` button directs users to the `Service Reference` page.
* An alphabetical list of all the services is available on this page. Use the alphabets displayed at the top of the page to quickly locate a service by its name.
* Click on a specific service to open a dedicated page containing details, in parameters, and out parameters of the selected service.
* Depending on the requirements, users can run or schedule a service or job.

#### Job List
The `Job List` tab assists users to view and manage jobs associated with the OMS instance. This functionality provides users with a comprehensive view of the job details and their current status, allowing for efficient tracking and management of various tasks within the OMS environment.

The search functionality allows users to find specific jobs by selecting a function from the drop-down menu and entering relevant data. This feature streamlines the process of locating specific jobs within the OMS instance. The search results obtained with this action are displayed below, and the users can click on any particular job to view its details. 

Users can also click on the `Find` button to view a complete list of all jobs within the OMS instance.


#### Schedule a Job
The `Schedule Job` tab is a feature that enables users to manage and automate the execution of specific jobs or services within the system. 

* Clicking on the `Schedule Job` tab, directs the users to a page where they can schedule a specific job or service.
* Here, users can input details such as date, time, frequency, and more to schedule a job at a specific time and set intervals for repetition.
* Additionally, users have the option to check the `Run As System` checkbox to execute the job as a system.

___

## Reader 

A Reader is a type of plugin that allows users to import data from various integrations that clients use for automation, and more. 

* Clicking on the `XML Data Import Readers` button within the `Import/Export` tab redirects the users to the `XML Import to DataSource(s)` page.
* Users should input 'ext-_**name**_', where 'name' represents the name of the integration from which data needs to be imported in the `Enter Readers` field.
* Clicking on the `Import` button initiates the data import process into the designated data sources.
The `Results` section displays file names and a summary of the import process, allowing users to quickly verify the success of the operation.
 
___

## Logs 

Logs, accessible through the `Logging` button on the second row of tabs in Web Tools, provides users with a location for viewing logs of various actions being performed within the OMS instance. 

Users can use 'Command+F' or 'Ctrl+F' within the logs to locate specific logs.

Error logs are highlighted in red and enclosed within a red box, making them easily identifiable.

___

## Facility

The `Facilities` page enables users to view, search, and manage both physical and virtual facilities associated with the OMS instance. 

* Click on the `Facility` button located on the first row of tabs. This action opens the `Facilities` page. Once on the `Facilities` page, options are available for searching specific facilities.
* In the search section, use the drop-down menu to select a specific function and enter relevant data to filter the facilities.
* Click the `Find` button to initiate the search based on the selected function and entered data. The search results will be displayed below. 
* If you click the `Find` button without selecting any function or entering data, an alphabetical list of all facilities is displayed as a result. 
* Click on any facility to view the `Edit Facility` page.
* On the `Edit Facility` page, users can update the details about the selected facility as needed. 

___

## Import Data 

There are two methods for adding data into an entity. One approach involves navigating to the entity using the `Entity Engine` and utilizing the `Create New` button to input data directly into the entity. Alternatively, data can be imported using XML. 


#### Using the `Create New` button in `Entity Engine`
* Go to the `Entity Engine` and select the specific entity where you want to enter data.
* Click on the `Create New` button.
* Fill in the relevant fields with the data you want to input.
* After entering the data, click on the `Create` button to create the dataset for the selected entity.
* The system will create the relevant dataset and redirect you to the `View Value` page for the newly created data.
* At the bottom of the `View Value` page, find the `Entity XML Representation` section. Here, you can view the XML format for the dataset.


#### Importing XML Data 

After obtaining the XML data format, users can import the data directly from the `XML Import to DataSource(s)` page using these steps:

* Click on `Import/Export` and select the `XML Data Import` button to access the `XML Import to DataSource(s)` page.
* In the `Complete XML document` field on the page, insert the data in the correct XML format. The data has to be placed between the `<entity-engine-xml>` and `</entity-engine-xml>` tags.
* Once the XML data is inserted, click on the `Import Text` button to initiate the data import process.

{% hint style="info" %} Ensure that the XML data adheres to the required format for successful import.  {% endhint %}





