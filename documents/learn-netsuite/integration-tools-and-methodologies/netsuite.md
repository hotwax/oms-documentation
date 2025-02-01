---
description: >-
  Explore the details of exporting and importing data from NetSuite during
  integration, ensuring smooth and accurate data transfer.
---

# NetSuite

### Exporting Data from NetSuite

When it comes to exporting data from NetSuite, we have three primary methodologies at our disposal:

#### Scheduled Suite Scripts with Saved Search and N/File Modules:

* We employ Scheduled Suite Scripts to automate data exports, making use of NetSuite's powerful Saved Search functionality to retrieve the necessary data.
* These scripts utilize the N/File modules to securely place the data in an SFTP server, from where HotWax Commerce jobs can access and process the files.
* However, it's crucial to note that Scheduled Suite Scripts have limitations when it comes to handling large data files. They may halt execution if a script takes more than one hour to run or consumes 10,000 execution units.

#### Map Reduce Scripts:

* In scenarios where we need to export large volumes of data, we prefer Map Reduce scripts. These scripts also utilize Saved Search to fetch the data.
* The retrieved data is then securely stored in an SFTP server, where HotWax Commerce jobs can access the files.
* Map Reduce scripts are our preferred choice for exporting data from NetSuite in most cases.

#### Scheduled Suite Scripts with Search Task (N/Task Module):

* In rare instances when Map Reduce scripts are not scalable for exporting data, we resort to Scheduled Suite Scripts combined with the Search Task of the N/Task module.
* The Search Task is remarkably fast; it swiftly searches for the required data and creates files containing millions of records within seconds.
* It stores these files in the NetSuite [File Cabinet](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter\_N541319.html#File-Cabinet-Overview). However, an additional Scheduled Suite Script is needed to transfer the files from the NetSuite File Manager to the SFTP server, where HotWax Commerce jobs can access them.

### Importing Data into Netsuite:

Just as we have methodologies for exporting data, we have three approaches for importing data into NetSuite:

#### Scheduled Suite Scripts with CSVImport Task (N/Task Module):

* To ensure optimal performance and leverage NetSuite's built-in tools, we use Scheduled Suite Scripts with the CSVImport task of the N/Task module.
* These scripts read data from CSV files and create corresponding records within NetSuite.

#### Scheduled Suite Scripts with N/Record Module:

* In cases where CSV import tools do not support specific data types, we write Scheduled Suite Scripts using the N/Record module.
* These scripts read data from CSV files and create records in NetSuite. However, they have a limitation and cannot process CSV files with more than 500 records.

#### Map Reduce Scripts:

* When dealing with the import of large sets of CSV files or CSV files with more than 500 records, we opt for Map Reduce scripts.
* These scripts are designed to read CSV files and create records within NetSuite, making them suitable for managing extensive data imports.
