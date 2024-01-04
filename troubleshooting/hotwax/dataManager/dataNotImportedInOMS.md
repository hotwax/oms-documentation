# Troubleshooting Data Import Issues in OMS

## Data Not Imported in OMS

You scheduled a job to import data into OMS, but the imported data is not loaded. This could be due to the job `Process bulk imported files` not being scheduled in the Job Manager application.

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