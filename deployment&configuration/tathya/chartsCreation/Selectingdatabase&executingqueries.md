# Selecting Database and Schema

To effectively navigate through the SQL Lab interface in Tathya and execute SQL queries, follow these steps for selecting the database and schema.

## Navigation in SQL Lab

1. In the top navigation menu, locate and click on the "SQL Lab" option. This action will direct you to the SQL Lab interface designed for crafting and executing SQL queries.

2. Within SQL Lab, Tathya provides dropdown menus for selecting the desired database and schema. This step is crucial to precisely identify the data location and ensure that queries fetch information from the correct database and schema.

   **Note:** Multiple databases are accessible due to dealing with data from different projects and sources. All configured databases will be visible in this section.

   **Additional information:** In MySQL, the term "schema" is synonymous with a "database," while in PostgreSQL, schemas represent different categorizations within a project. If your data source supports schemas, selecting the correct schema ensures that your SQL queries target the specific subset of data you intend to analyze.

## Executing SQL Queries

1. Utilize various clauses such as SELECT, FROM, WHERE, GROUP BY, and others to shape the logic of your SQL query.

   **Note:** Tathya offers a multi-tab environment, enabling you to work on multiple queries simultaneously.

2. Insert the query into the designated space based on the desired output. Click the "Run Query" button to execute the query.

# How SQL Queries Create a Dataset

Upon executing an SQL query, Tathya follows a process to create a dataset from the retrieved information.

## Result Set Interpretation

1. Tathya sends the SQL query to the connected database, which parses the query, checks for syntax errors, and understands the logical flow.

2. Post successful parsing, the database retrieves a result set—a table of data that matches the specified criteria.

3. Tathya automatically interprets the structure of the result set, analyzing columns and their data types.

## Dynamic Dataset Creation

1. Leveraging information from the parsed result set, Tathya dynamically generates a dataset mirroring the structure of the result set.

2. The dataset captures columns and their respective data types.

## Column Mapping

Each column in the result set is mapped to a corresponding field in the dataset, ensuring accurate representation of the retrieved data.

## Dataset Validation

1. Ensure the dataset aligns with your expectations, as it will be used to create the chart.

2. Navigate to "Save" and select "Save dataset" from the dropdown menu to use the dataset for creating multiple charts in the future.

   **Note:** Query errors may occur due to misalignment between your query and the database. Examples include bad references or unsubmitted queries.

# Creating a Chart

Once satisfied with the derived output, click on "Create Chart."
