# Troubleshooting Data Import Issues in OMS

## Data Not Imported in OMS

You scheduled a job to import data into OMS, but the imported data is not loaded. This could be due to the job `Process bulk imported files` not being scheduled.

**Steps to Resolve**

1. **Verify Job Status:**
   - Check the status of the job that imports data in bulk. Ensure it is scheduled and completed successfully in the Job Manager app.

2. **Schedule `Process bulk imported files`:**
   - Navigate to the Miscellaneous page in the Job Manager application.
   - Locate the `Process bulk imported files` job and schedule it.
   - Suggested frequency is 15 minutes, but adjust based on specific requirements.

3. **Check Data Processing:**
   - After scheduling the `Process bulk imported files` job, observe the Data Manager logs in the EXIM page of OMS to confirm that the imported data is being processed.

4. **Check Data Manager Logs in OMS:**
   - Go to Hamburger Menu > MDM > EXIM > Import section.
   - Navigate to the import menu to find the files you have imported in OMS.
   - Check the status of the files; they should transition from Pending to Finished.

## Data Not Imported in OMS Despite Scheduled Jobs

All required Jobs are properly scheduled, but the data import into OMS is still not successful. This generally happens when the imported file has missing or incorrect information.

**Steps to Resolve**

1. **Check Data Manager Logs:**
   - Go to Hamburger Menu > MDM > EXIM > Import section.
   - Navigate to the import menu to find the files you have imported in OMS.
   - Click on the menu you want to see.
   - Below the importing files section, find results in the EXIM Result Section.

   - In the result section, you will see columns such as Log Id, User, Date, Uploaded File, View Log, Failed Records, Status, and Action.

   - Types of Status:
| Status   | Description                               |
|----------|-------------------------------------------|
| Pending  | Transaction is yet to be initiated.       |
| Queued   | Download or Upload has been initiated.    |
| Running  | Download or Upload is getting processed.  |
| Finished | Transaction success.                      |
| Failed   | Transaction has failed.                   |


2. **Analyze Failed Records:**
   - Download the failed records file to see the reasons for failed records and fix them before reuploading.

| Error Type        | Description                                            |
|-------------------|--------------------------------------------------------|
| Invalid Data      | Data that does not conform to expected values.          |
| Invalid Format    | Correct type but doesn't follow the expected structure. |
| Missing Field     | A required field is not provided or is empty.           |
| Required Field    | A field marked as required is left blank.               |


By following these structured steps, you can diagnose and resolve issues with data imports in OMS. If you encounter any issues or have further questions, seek assistance from the HotWax support team.
