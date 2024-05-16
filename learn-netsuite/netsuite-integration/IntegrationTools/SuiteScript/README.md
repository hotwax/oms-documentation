---
description: >-
  Discover how HotWax Commerce leverages SuiteScript for seamless integration
  with NetSuite, using JavaScript-based customization, scheduled scripts, and
  data transformation.
---

# SuiteScript

NetSuite's SuiteScript is a scripting language that acts as a pivotal tool for customization and automation. It provides comprehensive application-level scripting capabilities that span both client and server sides. In our integration with NetSuite, HotWax Commerce leverages [SuiteScript 2.X](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article\_8161516336.html#SuiteScript-2.x) APIs.

It's worth noting that while NetSuite boasts a plethora of integration tools, our focus here is specifically on those that have played a pivotal role in our integration. Below, we offer an in-depth understanding of SuiteScript 2.X and how it has been instrumental in our integration:

1. **JavaScript-Based Customization:** SuiteScript is grounded in JavaScript, offering developers the ability to craft custom scripts and functions within the NetSuite environment. These scripts can be invoked manually, triggered by specific events, or on a pre-defined schedule enabling profound customization possibilities.
2. **Scheduled Scripts:** An essential feature of SuiteScript is the ability to schedule scripts for future execution. Tasks can be submitted for processing at specific times or on a recurring basis, providing a powerful tool for automation and data handling.
3. **Data Transformation:** Developers can use SuiteScript to transform NetSuite data into different formats and structures. This flexibility ensures that data can seamlessly flow between systems or be presented in a manner that suits the specific needs of the integration.
4. **File Operations:** SuiteScript extends its reach beyond NetSuite, enabling the reading or writing of files in various formats from external SFTP locations. This functionality plays a crucial role in the exchange of data between systems. We will discuss further on how developers can use file operations in Suite Script.

## Types of SuiteScripts

Netsuite supports multiple types of Suite Scripts. We have used two types of scripts in our integration. They are:

**Scheduled Script:** Scheduled scripts can be run on demand or at predefined intervals on a recurring basis. They are best suited for handling basic information logging or similar tasks. However, they are not well-suited for processing large amounts of records or long-running operations.

**Map/Reduce Script:** Map/reduce scripts can also be run on demand or at predefined intervals on a recurring basis however they are designed to handle large volumes of data. They are most effective when data can be divided into smaller, independent parts. Map/reduce scripts are well-suited for scenarios where multiple records need processing, and the logic can be divided into lightweight segments.

## Modules

_Unlocking SuiteScript Capabilities_

Modules are at the core of what allows developers to work with NetSuite. Without modules, there would be no such thing as SuiteScript 2.0. SuiteScript 2.0 follows a [modular approach](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section\_1504638761.html#subsect\_1508957818) by organizing its APIs into [standard modules](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter\_4220488571.html#SuiteScript-2.x-Modules). This modular approach enhances code reusability and maintainability, ensuring that each script loads only the necessary modules.

Modules contain the API information needed for scripting. There are multiple modules to perform various tasks in NetSuite Suite Script, and in our integration strategy, we have focused on key modules that align with our objectives. We have documented a few of the significant modules that have played a pivotal role in our integration.

<table data-view="cards"><thead><tr><th></th><th data-type="content-ref"></th></tr></thead><tbody><tr><td>Task Module</td><td><a href="N.taskModule.md">N.taskModule.md</a></td></tr><tr><td>Record Module</td><td><a href="N.recordModule.md">N.recordModule.md</a></td></tr><tr><td>Search Module</td><td><a href="N.searchModule.md">N.searchModule.md</a></td></tr><tr><td>File Module</td><td><a href="N.fileModule.md">N.fileModule.md</a></td></tr></tbody></table>

These four modules together form the core of our SuiteScript-based integration, offering a comprehensive set of tools to address various aspects of our integration strategy. The strategic selection of modules, including N/task, N/Record, N/Search, and N/file, has played a pivotal role in our integration success, ensuring that our objectives are met efficiently and effectively.
