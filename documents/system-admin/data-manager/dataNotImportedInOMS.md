---
description: >-
  Troubleshoot data import issues in the HC OMS to ensure successful data
  loading and processing.
---

# Data not imported

## Scenario 1: Data Not Imported in OMS

You scheduled a job to import data into OMS, but the imported data is not loaded. This could be due to the job `Process bulk imported files` not being scheduled in the Job Manager application.

### Steps to Resolve

1. **Verify Job Status:**

* Check the status of the job that imports data in bulk. Ensure it is scheduled and completed successfully in the Job Manager app.

2. **Schedule `Process bulk imported files`:**

* Navigate to the Miscellaneous page in the Job Manager application.
* Locate the `Process bulk imported files` job and schedule it.
* The suggested frequency is 15 minutes, but adjust based on specific requirements.

3. **Check Data Processing:**

* After scheduling the `Process bulk imported files` job, observe the Data Manager logs in the EXIM page of OMS to confirm that the imported data is being processed.

4. **Check Data Manager Logs in OMS:**

* Go to Hamburger Menu > MDM > EXIM > Import section.
* Navigate to the import menu to find the files you have imported in OMS.
* Check the status of the files; they should transition from Pending to Finished.

<figure><img src="../.gitbook/assets/Frame%20698.png" alt="" width="375"><figcaption></figcaption></figure>

## Scenario 2: Incorrect File Format

When importing data from external systems into HotWax Commerce, files must adhere to specific formats supported by the system. Failure to do so can result in import failures and data discrepancies.

### Steps to Resolve

1. **Verification Steps:**

* Navigate to the Exim page from the MDM section via the Hamburger Menu.
* Select the relevant import type (e.g., inventory import) to review import logs.
* Identify and inspect the failed records column in the logs for error details.

2. **Checking File Format:**

* Download the uploaded file from the import log.
* Verify that the file format is CSV, as HotWax Commerce supports CSV format for data imports.
* If the format is incorrect (e.g., XLSX), investigate the data transformation process:
  * If handled by middleware, review the transformation flow.
  * Contact HotWax Commerce support to check Nifi flow if handled internally.

## Scenario 3: Empty Records

Empty records in an imported file indicate that the expected data from the external system is not present or properly generated, leading to failed imports in HotWax Commerce.

### Steps to Resolve

1. **Verification Steps:**

* Navigate to the Exim page from the MDM section via the Hamburger Menu.
* Select the relevant import type (e.g., inventory import) to review import logs.
* Verify if the imported file contains any data records.

2. **Checking File Records:**

* If the file format is correct (CSV), review imported records from the file.
* Ensure the external system generates data records:
  * Access the SFTP path specified for file uploads.
  * Refer to [user manuals](data-import-errors.md) for correct file paths and SFTP settings.
  * Verify the existence of records in the SFTP directory.



<figure><img src="../.gitbook/assets/Data Not Imported (1).png" alt=""><figcaption></figcaption></figure>
