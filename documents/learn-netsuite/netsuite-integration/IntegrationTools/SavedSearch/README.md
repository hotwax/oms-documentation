---
description: >-
  Explore the robust capabilities of Saved Search in NetSuite, enabling users to
  create reusable search definitions for precise data retrieval and conditional
  queries, enhancing integration efficiency.
---

# Saved Search

In NetSuite, Saved Search stands as a versatile tool that serves as a reusable search definition. It offers advanced search filters and result display options, providing an indispensable solution for retrieving specific data. One of its remarkable features is the ability to create and execute searches via NetSuite's user interface and save these searches for future use. This enables users to effortlessly design searches tailored to their requirements and expedite the data retrieval process.

In our integration with NetSuite ERP, we have capitalized on the formidable capabilities of Saved Search for data retrieval and conditional searches. Let's delve into the intricate details:

1. **Database Querying:** Saved Search plays a crucial role in querying the NetSuite database. It provides a user-friendly interface for crafting complex searches with multiple filters and conditions, granting users the power to precisely retrieve the data they need.
2. **Reusability:** The ability to create and save searches from the user interface offers unparalleled convenience. Each saved search is allocated a unique SavedSearchID, which developers can harness programmatically in their code. This versatility empowers developers to seamlessly integrate Saved Search into their scripting processes, ensuring data retrieval aligns with the specific needs of the integration.
3. **Conditional Queries:** Whether it's fetching specific customer orders or querying inventory data, Saved Search offers a seamless solution. The conditional searches it facilitates can be tailored to various scenarios, ensuring that only the required data is retrieved efficiently.

However, it's important to note a limitation: Saved Search does not allow for querying hardcoded values. This means that if you need to retrieve a specific record, such as obtaining the name of a customer with ID 1002, other methods should be employed.

4. **Seamless Integration with SuiteScript:** The synergy between Saved Search and SuiteScript is evident in our integration approach. We will discuss further on how developers can use Saved Search. Here's a simple example of how Saved Search and Suite Script work together:

## Example Scenario: Exporting Completed Customer Orders

Suppose you want to export all completed customer orders from NetSuite ERP every day. Here's how SuiteScript and Saved Search come into play:

* **SuiteScript Automation:** We create a SuiteScript that is scheduled to run daily. This script is responsible for automating the data extraction process.
* **Saved Search Query:** Within the SuiteScript code, we incorporate a "saved search" that's specifically designed to retrieve completed customer orders. The saved search is executed to obtain the relevant data.
* **Data Transformation:** The SuiteScript processes the data returned from the saved search and formats it into a CSV or JSON file, ensuring that it is ready for external use.
* **Data Delivery:** The resulting file can be placed in an SFTP location making it accessible to external systems for further processing.

This example showcases the harmonious interplay of SuiteScript and Saved Search in achieving a specific business task within the integration.
