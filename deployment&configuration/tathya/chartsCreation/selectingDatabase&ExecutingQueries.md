# Selecting Database and Schema

To effectively navigate through the SQL Lab interface in Tathya and execute SQL queries, follow these steps for selecting the database and schema.

## Navigation in SQL Lab

In the top navigation menu, locate and click on the "SQL Lab" option. This action will direct you to the SQL Lab interface designed for crafting and executing SQL queries.

In SQL Lab, Tathya provides dropdown menus where you can choose the desired database and schema before writing and executing your SQL queries. This step is crucial for accurately pinpointing the location of your data and ensuring that your queries fetch information from the correct database and schema.

{% hint style="info" %}
We have access to multiple databases as we are dealing with data from different projects and sources. All the configured databases will be visible here.
{% endhint %}

{% hint style="info" %}
**Additional information:** In MySQL, the term "schema" is synonymous with a "database," while in PostgreSQL, schemas represent different categorizations within a project. If your data source supports schemas, selecting the correct schema ensures that your SQL queries target the specific subset of data you intend to analyze.
{% endhint %}

## Executing SQL Queries

Utilize various clauses such as SELECT, FROM, WHERE, GROUP BY, and others to shape the logic of your SQL query.

{% hint style="info" %}
Tathya offers a multi-tab environment, enabling you to work on multiple queries simultaneously.
{% endhint %}

Based on the output you desire, insert the query here and click the "Run Query" button to execute the query.

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

- **Bad Reference:** A query can fail because it is referencing a column and/or table that no longer exists in the datasource. You can either modify the query accordingly or remove the column from the query.

- **Unsubmitted Query:** A query will not even be submitted to the database if it is missing required parameters. You should define all the parameters referenced in the query in a valid JSON document.
{% endhint %}

## Creating a Chart

Once satisfied with the derived output, click on "Create Chart."