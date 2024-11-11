---
description: >-
  Learn how to navigate the SQL Lab interface in Tathya and execute SQL queries
  by selecting the appropriate database and schema.
---

# Selecting Database & Schema

To effectively navigate through the SQL Lab interface in Tathya and execute SQL queries, follow these steps for selecting the database and schema.

## Navigation in SQL Lab

In the top navigation menu, locate and click on the `SQL Lab` option. This action will direct you to the SQL Lab interface designed for crafting and executing SQL queries.

In SQL Lab, Tathya provides dropdown menus where you can choose the desired database and schema before writing and executing your SQL queries. This step is crucial for accurately pinpointing the location of your data and ensuring that your queries fetch information from the correct database and schema.

{% hint style="info" %}
We have access to multiple databases as we are dealing with data from different projects and sources. All the configured databases will be visible here.
{% endhint %}

{% hint style="info" %}
**Additional information:** In MySQL, the term `schema` is synonymous with a `database,` while in PostgreSQL, schemas represent different categorizations within a project. If your data source supports schemas, selecting the correct schema ensures that your SQL queries target the specific subset of data you intend to analyze.
{% endhint %}

## Executing SQL Queries

Utilize various clauses such as SELECT, FROM, WHERE, GROUP BY, and others to shape the logic of your SQL query.

{% hint style="info" %}
Tathya offers a multi-tab environment, enabling you to work on multiple queries simultaneously.
{% endhint %}

Based on the output you desire, insert the query here and click the `Run Query` button to execute the query.

### How SQL Queries Create a Dataset

Upon executing the SQL query, Tathya sends the query to the connected database. The database parses the query, breaking it down into its structural components, checking for syntax errors, and understanding the logical flow.

**Result Set Interpretation**

Post successful parsing, the database retrieves a result set—a table of data that matches the specified criteria. Tathya then automatically interprets the structure of this result set, analyzing the columns and their data types.

**Dynamic Dataset Creation**

​​Leveraging the information obtained from the parsed result set, Tathya dynamically generates a dataset. This dataset mirrors the structure of the result set, capturing the columns and their data types.

**Column Mapping**

Each column in the result set is mapped to a corresponding field in the dataset. This mapping ensures that the dataset accurately represents the data retrieved by the SQL query.

## Dataset Validation

Ensure the dataset returned aligns with your expectations. This is the dataset that will be used to create the chart.

Now, navigate to Save and then select “Save dataset” from the dropdown menu, so that you can use the same dataset to create multiple charts in future.

{% hint style="info" %}
There are a number of query errors that can occur due to a misalignment between your query and the database. Some examples include:

* **Bad Reference:** A query can fail because it is referencing a column and/or table that no longer exists in the datasource. You can either modify the query accordingly or remove the column from the query.
* **Unsubmitted Query:** A query will not even be submitted to the database if it is missing required parameters. You should define all the parameters referenced in the query in a valid JSON document.
{% endhint %}

## Creating a Chart

Once satisfied with the derived output, click on `Create Chart.`

## Scenarios for Chart Creation

### 1. Creating Chart for Specific Queries

The ability to create charts based on specific queries within Tathya empowers users to derive actionable insights from their data. By allowing users to visualize specific subsets of data, this feature enhances decision-making processes and enables users to identify trends, patterns, and anomalies efficiently.

#### Step-by-Step Usage Instructions:

1. **Access SQL Lab:** Log in to Tathya and navigate to the SQL Lab feature.
2.  **Craft SQL Query:** Select the database for which you want to create the Query. Write an SQL query with a WHERE clause specifying the desired criteria. For example, to create a chart showing orders created in the past hour:

    ```sql
    SELECT *
    FROM order_header oh
    WHERE oh.ENTRY_DATE >= NOW() - INTERVAL 1 HOUR;
    ```
3. **Execute Query:** Click the `Run Query` button to execute the SQL query and generate the dataset.
4. **Save Dataset:** Once the dataset is generated, save it by following the prompted steps. This will open a new page with options to customize the dataset.
5. **Add Chart Details:** Enter a descriptive name for the chart, select the desired chart type, and configure additional settings as needed.
6. **Create Chart:** Click on the `Create Chart` button to generate the chart based on the dataset created from the specific query.

### 2. Creating Chart When Specific Subset is Not Available

Creating charts in Tathya without specific queries is essential for flexible data analysis. This feature allows users to prepare for future data scenarios by initially including all available data, even when subsets may not exist at the time of dataset creation.

#### Step-by-Step Usage Instructions:

1. **Access SQL Lab:** Navigate to the SQL Lab within Tathya.
2.  **Craft General SQL Query:** Select the database and write a general SQL query to retrieve all available data without specific conditions. For example:

    ```sql
    SELECT *
    FROM order_header oh;
    ```
3. **Execute Query:** Click the `Run Query` button to execute the SQL query and generate the dataset containing all available data.
4. **Save Dataset:** Once the dataset is generated, save it by clicking on the save button. This will open a new page with options to customize the dataset.
5. **Create Chart:** Proceed to create a chart from the dataset to visualize the overall data trends.
6. **Unlock Dataset:** Click on the options icon against the dataset's name to open a new form. Unlock the dataset by clicking on the lock icon to make changes.
7.  **Add WHERE Clause:** If necessary, add a WHERE clause to the SQL query to filter the dataset based on specific criteria whenever there is data that follows the WHERE clause. For example:

    ```sql
    WHERE oh.ENTRY_DATE >= NOW() - INTERVAL 1 HOUR;
    ```
8. **Save Dataset:** Save the dataset by clicking on the save button to retain the modifications made.
9. **Update Chart:** After saving the dataset, update the chart to reflect the changes made to the dataset and visualize the updated insights.

### 3. Creating Chart with Empty Dataset

Creating datasets with empty data is crucial in Tathya. It prepares charts for future data arrivals, enabling users to proactively set up their analytics. By allowing users to create charts with empty datasets, this feature fosters adaptability to changing data conditions.

#### Step-by-Step Usage Instructions:

1. **Create Empty Dataset:** Open SQL Lab and create an SQL query that returns no data.
2. **Save Dataset:** Once the query is selected or created, click on the `Save Dataset` button to save the empty dataset.
3. **Redirect to Chart:** After saving the dataset, you will be redirected to the chart creation page automatically.
4. **Name the Chart:** Provide a descriptive name for the chart to identify its purpose or intended data source.
5. **Custom SQL:** Under `Custom SQL,` paste the names of columns one by one to define the dataset structure accurately.
6. **Save Chart:** Click on the save chart button to save the chart configuration for future use.
