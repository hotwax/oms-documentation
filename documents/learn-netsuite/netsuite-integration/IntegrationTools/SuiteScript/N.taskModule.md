---
description: >-
  Discover how N/task module in SuiteScript facilitates creating tasks for
  internal NetSuite scheduling, executing scripts, importing CSV files, and
  more, crucial for seamless integration.
---

# N/Task Module

N/task module is a cornerstone of SuiteScript, enabling developers to create tasks and place them in the internal NetSuite scheduling or task queue. These tasks serve a variety of purposes, including submitting scheduled scripts, running map/reduce scripts, importing CSV files, merging duplicate records, and executing asynchronous saved searches, constructed queries, SuiteQL queries, and workflows. Here, we delve into two task types that have been integral to our integration:

## CSVImport Task

The CSVImport Task is a powerful tool integrated into SuiteScript, allowing developers to import CSV files into NetSuite. This task, when added to the task queue, asynchronously imports data into NetSuite. It's a versatile way to read and process CSV data within scripts. Notable details about the CSVImport Task include:

a. **Efficient Data Import:** Developers can employ the CSVImport Task to streamline the process of importing CSV data into NetSuite.

b. **File Mapping with Import Maps:** NetSuite's Import Assistant provides a UI tool for mapping CSV fields to NetSuite’s records and their fields and saving these mappings as Import Maps. Each Import Map is assigned a unique ID , which can be utilized by developers in SuiteScript. This unique identifier plays a pivotal role in mapping the fields of a CSV file to the corresponding fields within NetSuite records. ImportMapID ensures that data is seamlessly transposed from the CSV format to the structure required by NetSuite, simplifying the integration process and ensuring data accuracy.

c. **Limitation:** It's important to note that the CSV Import Assistant supports most commonly imported record types, but it does not support certain record types, such as Shipment Receipts and Customer Order Fulfillment. For information about the record types supported by the Import Assistant, please refer to Supported Record Types for CSV Import.It's important to note that CSV imports performed within scripts are subject to NetSuite's application limit of 25,000 records.

## Search Task

The Search Task is similar to NetSuite's Saved Search, with additional features that enable developers to not only conduct searches, but also persist the results and store them in NetSuite File Cabinet. This capability proves invaluable when dealing with searches across high volumes of data. Key insights into the Search Task include:

1. **High-Speed Searches:** The Search Task is optimized for speed, making it highly efficient for synchronizing large volumes of data.
2. **Versatile Use:** Developers can use SavedSearchIDs to execute specific searches, similar to Saved Searches.
3. **Efficient Data Export:** The task fetches the results of the saved search and exports them to a CSV file and automatically puts it in the Netsuite File Cabinet at very fast speed.
4. **Advantages:** It offers several advantages, including a simplified and efficient way to execute searches and export data. Compared to methods like using Map/Reduce script, it has shown impressive performance improvements, notably in scenarios involving the export of large datasets. We will discuss this further in which scenarios we have used this in our integration.
