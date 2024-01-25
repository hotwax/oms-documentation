# Web Tools

The backend and development team can utilize Web Tools to view and manage data, view logs, import and export data, run various jobs and services, and more within an OMS instance. These tools play a crucial role in enhancing visibility, streamlining processes, and automating tasks, thereby improving efficiency within the OMS. 

Web Tools are conveniently accessible through the following URL in a web browser: https://_**user-instance**_.hotwax.io/webtools/

For example for demo-oms, the url would be - https://demo-oms.hotwax.io/webtools

After entering the URL, the users have to login using their credentials to be able to access web tools. 

___

## Entity Engine

One of the primary functions of web tools is to facilitate the viewing and management of data through the use of the `Entity Engine`. Entity Engine is accessible through the `Entity Engine` button on the second row of tabs on the main web tools page. Alternatively, users can also find a list of `Entity Engine Tools` directly on the web tools main page.


* Clicking the `Entity Engine` button redirects the user to the `Entity Data Maintenance` page, where options are available to find a record using filters such as `Group Name` and `Entity Name`. 
* An alphabetical list of all entities is also conveniently displayed on this page. 
* Clicking on an entity name allows users to view the dataset of that particular entity. 
* The page provides functions and filters to streamline the search process for specific records within the entity. Search results are displayed below the search, enhancing user accessibility.
* For a comprehensive view of all records of an entity, users can click the `Search` button. 
* Additionally, the `View Relations` option at the top of the page enables users to explore the relationships shared by the selected entity with other entities in the database. For example, if we consider the entity ‘Facility’, we can see that it is related to entities ‘FacilityGroup’, ‘ProductStore’, ‘Party’ and so on. 



### Entity SQL Processor

The Entity SQL Processor is a component of web tools, and it serves as a valuable tool for interpreting and executing SQL commands, facilitating efficient viewing and management of data.

* To access the Entity SQL Processor, navigate to the `Entity Engine` page and click on `Entity SQL Processor`. Alternatively, find this option under `Entity Engine Tools` on the main web tools page. This will open the `Entity SQL Processor`.
* Once on the `Entity SQL Processor` page, change the group to 'org.apache.ofbiz' and input the required query in the `SQL command` field. 
* If required, use the `Limit Rows` function to limit the number of results displayed, with search results presented in chronologically descending order. 

___

## Service Engine

One of the key functions of web tools is to run and manage services. Users can search for a specific service, run a service or schedule a job by utilizing the `Service Engine` button on the second row of tabs on the web tools main page. Alternatively, a list of `Service Engine Tools` is also available on the web tools main page. 


* Upon clicking the `Service Engine` button on the tab, users are directed to the `Service Reference` page. 
* An alphabetical list of all the services is available on this page, users can use the alphabets displayed at the top of the page, below the service engine tools tab, to quickly locate a service by its name. 
* Clicking on a specific service opens a page where users can access details, in parameters, and out parameters of the service. 
* In parameters: (add details)
* Out parameters: (add details)

#### Job List
* On clicking on the `Job List` tab, users can view the list of jobs that are associated with the OMS instance, enabling them to check the job details and status within the OMS instance. 
* In order to search for a specific job, users can use the drop-down menu to select the function and enter relevant data in the data field. The search results obtained with this action are displayed below, and the users can click on any particular job to view its details. 
* For a complete list of all jobs, users can click on the `Find` button.

#### Schedule a Job
* When users click on the `Schedule Job` tab, they are directed to a page where they can schedule a specific job or service.
* Here, users can input details such as date, time, frequency, and more to schedule a job at a specific time and set intervals for repetition.
* Additionally, users have the option to check the `Run As System` checkbox to execute the job as a system."


___

## Reader 

A Reader is a type of plugin used for importing data from various integrations that clients use for automation, etc. 

* When users click on the `XML Data Import Readers` button within the `Import/Export` tab, they are directed to the `XML Import to DataSource(s)` page. 
* Here, in the `Enter Readers` field, users should input 'ext-*name*', where 'name' represents the name of the integration from which data needs to be imported.
* Upon clicking the `Import` button, data is imported, and the `Results` section below displays file names and a summary of the data import process.   

___

## Logs 

The `Logging` button on the second row of tabs in web tools will open up the logs for all actions being performed in the OMS instance. Users can view logs and utilize 'Command+F' or 'Ctrl+F' to search for specific logs. Error logs are displayed in red and enclosed within a red box for easy identification. 

___

## Facility

The`Facilities` page allows users to view and search all physical as well as virtual facilities associated with the OMS instance. 

* Clicking the `Facility` button on the first row of tabs redirects the user to the `Facilities` page, where options are available for searching specific facilities. 
* Users can utilize the drop-down menu to select the function and enter data in the field to search for particular facilities. The search results will be displayed below.
* If a user clicks the `Find` button without selecting any function or entering data, an alphabetical list of all facilities is displayed as a result. 
* Clicking on any facility redirects the user to the `Edit Facility` page, where they can update details about the selected facility. 

___

## Import Data 

There are two methods for adding data into an entity. One approach involves navigating to the entity using the `Entity Engine` and utilizing the `Create New` button to input data directly into the entity. Alternatively, data can be imported using XML. 
 

#### Using the `Create New` button in `Entity Engine`
* From the Entity Engine, go to the particular entity in which you want to enter data and click on the `Create New` button.
* Enter data in all the relevant fields and click on the `Create` button. 
* This will create the relevant dataset for that entity and open the `View Value` page.
* The XML format for creating dataset is also available at the bottom of the `View Value` page in the `Entity XML Representation` section.

#### Importing XML Data 

After obtaining the XML data format, users can import the data directly from the `XML Import to DataSource(s)` page. Follow these steps:

* Click on `Import/Export` > `XML Data Import` button to navigate to the `XML Import to DataSource(s)` page.
* In the `Complete XML document` field, insert the data in the correct XML format between the `<entity-engine-xml>` and `</entity-engine-xml>` tags.
* Click on the `Import Text` button. 



