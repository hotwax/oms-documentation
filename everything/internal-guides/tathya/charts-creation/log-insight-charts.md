# Create LogInsight Charts

HotWax Commerce facilitates the exchange of data between systems, but errors can occur during import/export processes, potentially leading to inaccuracies. To address this, the platform provides LogInsights reports, which are stored in Solr-index core. By leveraging the powerful indexing capabilities of Solr, HotWax Commerce enables efficient data retrieval and analysis, supporting performance monitoring, troubleshooting, and reporting activities. These reports offer insights derived from system logs, allowing users to easily identify any data transfer failures.

LogInSight charts can be set with the following steps:

### LogInsights Core Creation for a Specific Instance

The `logInsights` core within HotWax Commerce provides users with valuable insights derived from system logs, facilitating the generation of superset reports. This feature is crucial for users who need to analyze system performance, troubleshoot issues, and make informed decisions based on data-driven insights.

**Steps to set LogInsight Core:**

1. **Accessing the Search Admin Page:**
   - Navigate to the hamburger menu in the HotWax Commerce interface for the specific instance.
   - Click on `Search Admin` to access the page for managing Solr indexing.

2. **Managing Solr Cores with Core Operations:**
   - Within the Search Admin page, locate the `Core Operations` section.
   - This feature allows users to effectively manage Solr cores, ensuring optimal performance and organization of indexed data.

3. **Refreshing the logInsights Core:**
   - Identify the `logInsights` core within the list of Solr cores.
   - Click on the `Refresh Core` button associated with the logInsights core.
   - This action updates the Solr index with the latest data from system logs, ensuring synchronization with any recent changes or updates.

### NiFi Flow Setup

NiFi, an open-source data integration tool, is utilized to automate data flow between systems in real time. A flow is to be configured in NiFi to filter out failed JSON files from SFTP locations and redirect error-prone data to logInsights core for logging purposes.

After the flow setup, it is imperative to insert dummy data. This step is crucial for querying as fields are dynamically indexed in the Solr core based on the dummy data. The dummy data should be inserted with a docType of `TEST` to ensure exclusion from Superset charts.

### Solr Database Creation in Tathya

System administrators can utilize the Solr database creation feature to set up and manage databases for log data, facilitating effective monitoring and troubleshooting of system performance.

**Step-by-Step Usage Instructions**

1. **Access Settings:**
   - Navigate to the `Settings` section within the HotWax Commerce interface.

2. **Select Database Connections:**
   - Within Settings, locate and select the `Database Connections` option.

3. **Add a New Database:**
   - Click on `Add a New Database` located in the top right corner of the interface.

4. **Choose Database Type:**
   - Under the supported dashboard search bar, select the `Others` option.

5. **Name the Database:**
   - Provide a descriptive name for the database under the `Display Name` category to easily identify it.

6. **Construct URL:**
   - Create the database URL in the following format:
     ```solr://test-oms.hotwax.io:443/search/logInsights?&use_ssl=true&token=<JWT_token>```

7. **Generate JWT Token:**
   - Generate a JWT token from the OMS using an integration user. Refer to [this document](https://docs.hotwax.co/integration-resources/v/hotwax-commerce/api-and-data-feeds/initial-api-authentication) to know how to generate the JWT token.

8. **Replace Token Placeholder:**
   - Replace `<JWT_token>` in the URL with the generated token.

9. **Specify Instance Name:**
   - Write the instance name of the brand for which you are creating the dashboard. For example, if the instance name is `test-oms`, input it accordingly.

10. **Test Connection:**
    - Paste the constructed URL as a SQLAlchemy URL and test the connection.

11. **Set Chart Cache Timeout:**
    - In the advanced tab -> performance, set the `CHART CACHE TIMEOUT` property to a desired value, such as 10000, to manage cached data effectively.

12. **Connect:**
    - If the connection test is successful, click on the `Connect` button to finalize the database creation process.

## Create Solr Queries

Creating Solr queries within Tathya requires a different syntax compared to traditional SQL queries used in Tathya dashboards. Here's how you can create Solr Queries:

### Step-by-Step Guide to Creating Solr Queries:

1. **Define Time Range:**
   - Use the appropriate time syntax to specify the desired time range for the query. For example:
     ```
     createdDate_dt = '[NOW/DAY-1DAY TO NOW/DAY]'
     ```

2. **Specify Fields:**
   - List each field required in the query's result set. Provide aliases if necessary. For example:
     ```
     `field_name_with_special_chars` AS field_alias
     ```

3. **Handle Special Characters:**
   - If any field name contains special characters, enclose it within back-quotes (`).

4. **Order Results (Optional):**
   - If sorting is needed, include the attribute in the select clause and specify the desired sorting order. For example:
     ```
     field_name ASC
     ```

5. **Limit Results:**
   - Ensure to include the `limit` method to restrict the number of returned records, especially for large result sets.

## Create Solr Charts

Solr Dashboard Creation is a crucial feature within the HotWax Commerce platform, providing users with the capability to visualize data from Solr databases through intuitive charts. This feature significantly enhances users' ability to analyze and interpret data, empowering them to make informed decisions and optimizations within their business operations.

**Step-by-Step Usage Instructions:**

1. **Navigate to SQL Lab:** From the home page, access the SQL Lab section within the HotWax Commerce interface.

2. **Select Solr Database:** Choose the Solr database you have created to run the query from. This ensures that the query retrieves data from the correct source.

3. **Write Solr Query:** Write the Solr query in the SQL Lab editor to fetch the desired data from the selected Solr database.

4. **Retrieve Data:** Once you have formulated the query and retrieved the desired data, proceed to the next step.

5. **Create Chart:** Click on the `Create chart` button to initiate the chart creation process.

6. **Name and Save Chart:** Give the chart a descriptive name that reflects its content or purpose, and save it for future reference.

7. **Add to Dashboard:** Optionally, add the created chart to the dashboard of your choice for easy access and visibility alongside other relevant data visualizations.

