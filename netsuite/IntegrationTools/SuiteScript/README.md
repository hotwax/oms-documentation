# SuiteScript

NetSuite's SuiteScript is a scripting language that acts as a pivotal tool for customization and automation. It provides comprehensive application-level scripting capabilities that span both client and server sides. In our integration with NetSuite, HotWax Commerce leverages SuiteScript 2.X [a link] [https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_8161516336.html#SuiteScript-2.x] APIs.

It's worth noting that while NetSuite boasts a plethora of integration tools, our focus here is specifically on those that have played a pivotal role in our integration. Below, we offer an in-depth understanding of SuiteScript 2.X and how it has been instrumental in our integration:

1. **JavaScript-Based Customization:** SuiteScript is grounded in JavaScript, offering developers the ability to craft custom scripts and functions within the NetSuite environment. These scripts can be invoked manually, triggered by specific events, or on a pre-defined schedule enabling profound customization possibilities. 


2. **Scheduled Scripts:** An essential feature of SuiteScript is the ability to schedule scripts for future execution. Tasks can be submitted for processing at specific times or on a recurring basis, providing a powerful tool for automation and data handling.


3. **Data Transformation:** Developers can use SuiteScript to transform NetSuite data into different formats and structures. This flexibility ensures that data can seamlessly flow between systems or be presented in a manner that suits the specific needs of the integration.


4. **File Operations:** SuiteScript extends its reach beyond NetSuite, enabling the reading or writing of files in various formats from external SFTP locations. This functionality plays a crucial role in the exchange of data between systems. We will discuss further on how developers can use file operations in Suite Script.


## Types of Suite Scripts



Netsuite supports multiple types of Suite Scripts. We have used two types of scripts in our integration. They are:

**Scheduled Script:**
Scheduled scripts can be run on demand or at predefined intervals on a recurring basis. They are best suited for handling basic information logging  or similar tasks. However, they are not well-suited for processing large amounts of records or long-running operations.

**Map/Reduce Script:**
Map/reduce scripts can also be run on demand or at predefined intervals on a recurring basis however they are designed to handle large volumes of data. They are most effective when data can be divided into smaller, independent parts. Map/reduce scripts are well-suited for scenarios where multiple records need processing, and the logic can be divided into lightweight segments. 