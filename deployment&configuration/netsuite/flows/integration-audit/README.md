---
description: >-
  Ensure synchronization accuracy and financial reconciliation between HotWax
  and NetSuite through diligent auditing.
---

# Auditing

Reconciling order transactions between HotWax and NetSuite ensures that integrations are working as expected and financial reconciliations are accurate.

The process of auditing NetSuite and HotWax currently covers three key data points:

1. Order and order item sync
2. Order item cancellation status
3. Order grand total sync

## Collecting Data

Before comparing each data point, data needs to be extracted from systems in the expected formats.

### NetSuite

A saved search in NetSuite, executed by a schedule SuiteScript, exports a file of all orders that entered the system from the beginning of the last day to the time of export.

The file should be exported at the end of the business day to ensure all orders are part of the reconciliation.

SFTP location

```
TBD
```

### HotWax Commerce

HotWax Commerce offers a function to export orders from the Find Sales Order page. Set these filters before exporting your data set:

**Order and Order item status:** Unselect all options to ensure all orders are part of the export **Order Date:** Open the custom date range selection option by clicking on the `Select` button and in the `From Date` field, select yesterday's date.

After filters are setup correctly, click the `Export CSV` option and a file will be downloaded.

## Upload Data For Audit

Once both files are downloaded, the next step is to upload them for auditing.

Access this sheet: https://docs.google.com/spreadsheets/d/1qpdBi\_4ZRkpOxooxJYs7Wz3ai5O\_8YgG6oMR\_pvuM8M/edit?usp=sharing

Before proceeding to upload data, make a copy of this worksheet and move it to your project space. Make sure to rename it with the day the audit is being run.

### Upload NetSuite Data

1. Navigate to the `NetSuite Last Day Orders` tab in the sheet.
2. Click on the `File` drop down menu and then select `Import`
3. In the import wizard, select the `Upload` tab and upload the NetSuite Order Data file
4. After the file is uploaded, a prompt will appear to select how to insert the uploaded file into the current work sheet
5. From the `Import Location` drop down, select `Replace Current Sheet` and click `Import Data` without changing any other settings.

The NetSuite order records from your CSV should appear in the `NetSuite Last Day Orders` tab.

Hint: If you accidentally uploaded to the wrong sheet, you can undo your actions like any other edit.

### Upload HotWax Commerce Data

The steps to upload HotWax Commerce Data is largely the same as uploading the NetSuite order data.

Ensure that the `HotWax Last Day Orders` tab is selected before beginning upload steps.

Follow the same upload steps as before, but this time select the HotWax file from your computer.

## Audit Order Data

Now that data from both sources has been uploaded, the audit sheet will automatically generate a list of discrepencies.

Here are the most important sections to validate:

### In HotWax not in NetSuite

This section specifically shows orders that should have synced to NetSuite by now but have not. Check each order on this list and add comments of what issue prevented the sync.

### Cancelled in HotWax not in NetSuite

Item cancelation in NetSuite happens through various flows from the OMS. Check this view to verify if cancelations in HotWax have synced over to NetSuite as "Closed" items.
