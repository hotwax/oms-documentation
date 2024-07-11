---
description: This document outlines the Standard Operating Procedure (SOP) for diagnosing and resolving issues where the data exported from HotWax Commerce does not match the required data specifications.
---

# SOP for Resolving Data Export Discrepancies in HotWax Commerce

HotWax Commerce uses Napita to transform and export data. If the SQL query in NiFi (Napita) is incorrect, it can result in exporting data that does not meet the client's requirements. This SOP will guide you through the steps to identify and rectify such issues.

## Steps to Diagnose and Resolve Data Export Discrepancies

### Verify the Discrepancy

1. **Access the Exported Data:**
   - Navigate to the location where the exported data is stored (e.g., SFTP location).
   - Download and review the exported data file.

2. **Compare with Required Data:**
   - Obtain the data requirements from the client.
   - Compare the exported data against the required data specifications to identify discrepancies.

### Initial Checks

1. **Check the Last Sync:**
   - Verify the last sync time to ensure that the latest data has been exported.
   
2. **Review Recent Changes:**
   - Check for any recent changes in the data requirements or the Napita setup.

### Navigate to Napita Instance

1. **Access NiFi:**
   - Log in to Napita Instance

2. **Locate the Relevant Process Groups:**
   - Identify the parent process groups related to the data export.
   - Drill down to the relevant root process groups where the data transformation occurs.

### Diagnose the SQL Query

1. **Stop the Processors:**
   - Right-click on the Napita canvas.
   - Stop the processors to prevent further data export during troubleshooting.

2. **Access Parameters:**
   - Select the parameters option to open a new module with all existing parameters of the group.

3. **Search for the SQL Query:**
   - Look for the parameter named `source.sql.query`.

4. **Review and Modify the SQL Query:**
   - Study the current SQL query to understand its logic.
   - Modify the SQL query as per the client’s data requirements.

### Validate the Changes

1. **Run the Processors:**
   - Run the processors once to generate a new data export.
   - Check the results in the SFTP location.

2. **Verify the Data:**
   - Compare the newly exported data with the required data specifications.
   - Ensure that the data now matches the client's requirements.

### 6. Schedule the Processors

#### Steps:

1. **Resume Processors:**
   - If the data is accurate, [schedule the processors](../schedule-processors.md) to resume regular operation.
   - Monitor the first few exports to ensure continued accuracy.
