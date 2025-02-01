---
description: >-
  Explore how the N/Record module in SuiteScript facilitates seamless data
  integration by working with NetSuite records, including those not supported by
  NetSuite's CSV import.
---

# N/Record Module

The N/Record module serves as a pivotal tool in our integration strategy for working with NetSuite records. It is notably advantageous when [handling data not natively supported by NetSuite's CSV import functionality](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section\_N356360.html#Supported-Record-Types-for-CSV-Import). For instance, NetSuite may not support the direct import of certain records, such as Shipment Receipts created in HotWax Commerce.

In such scenarios, we employ the N/Record module to bridge this gap. By writing SuiteScript, we can read CSV data from files located in SFTP locations, iterate through each record, and seamlessly create records in NetSuite's database. This process ensures the effective import of data into NetSuite for records that fall outside the scope of CSV Import methods.

Moreover, the N/Record module extends its capabilities to include the creation, deletion, copying, loading, or modification of standard NetSuite records. This versatile module plays a central role in our integration, facilitating the manipulation of native NetSuite records to achieve seamless data synchronization.
