# Troubleshoot Purchase Order Issues

## Purchase Order Not Imported in HotWax

If purchase orders created in the M3 or ORSI ERPs do not appear in HotWax after the scheduled Mule/SFTP transfer and import job, this guide will help pinpoint the issue within the SM system's SFTP, job logs, or OMS data.

**Troubleshooting Approach**

This troubleshooting guide follows a two-step approach to diagnose the issue of missing purchase orders in HotWax:

1.  **Verify File Transfer:** This step ensures that the purchase order data is successfully transferred from the ERP systems (M3 or ORSI) to the designated SFTP path via Mule.
2.  **Check Job Processing:** This step verifies if the scheduled job in HotWax has picked up the transferred file and processed it successfully into the system.

**Detailed Troubleshooting Steps**

**1. Verify File Transfer**

This step confirms the successful transfer of purchase order (PO) data from the ERP systems (M3 or ORSI) to the designated SFTP directory via Mule.

1.1 **SFTP Path Verification:**

*   Navigate to the SFTP path: `/home/sm-prod-sftp/inventory/Prod/incoming/pofeed`.
*   **Look for Pending Files:** Check for any files with a `.csv` extension that are awaiting processing. Note the file name(s) and timestamp(s) for reference.
*   **Check Archive:** If no files are found in the incoming directory, check the archive folder (if available). Look for the most recently processed PO file. If there's no archive, determine the storage location of processed files by contacting your system administrator.
*   **Template Reply Message (If PO file is not found):**

    > "We were unable to locate the PO file from M3/ORSI with PO number(s) [PO Number(s)] expected to be transferred on [Date] at [Time]. Please re-send the file or contact Khalid to verify the transfer."

**2. Check Job Processing**

This step verifies the successful execution of the HotWax scheduled job responsible for importing PO data from the SFTP directory.

2.1 **Job Execution Status:**

*   **Access Job Manager App:** Log in to the HotWax Job Manager app.
*   **Locate Job:** Find the job named "SM: Fetch ASN PO Feed and update HC."
*   **Verify Execution:** Check if the job ran successfully at its scheduled time (daily at 5:45 AM EST). Look for any error messages if the job failed.

2.2 **Data Manager Log Inspection:**

*   **Access Data Manager Log:** Go to the Data Manager Log in the HotWax OMS.
*   **Search Configuration:** Look for the "IMP\_ASN\_PO\_FEED" configuration ID.
*   **Brand-Specific Analysis:** Select the appropriate brand configuration and analyze the processed files. Check the following:
    *   **Failed Records:** When reviewing the processed files, look for rows flagged as "failed" or containing any error messages. Note the associated PO number and the specific error message for each failed record. This information will help pinpoint the cause of the import failure.
    *   **File Processed:** Verify that the file name and timestamp in the log match the file identified in Step 1. This confirms that the correct file was picked up by the job.

**Further Assistance**

If the steps above do not resolve the issue, please contact your HotWax support team and provide the following information:

*   **Complete Troubleshooting Results:** Share the results of each step, including any file names, timestamps, error messages, and job logs.
*   **ERP System Details:** Specify the ERP system used (M3 or ORSI) and the relevant PO numbers.