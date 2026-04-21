---
description: Discover this troubleshooting guide for viewing NetSuite order import error logs
---

# NetSuite Order Import Error Logs

## Objective
The objective of this document is to help users identify and resolve cases where an order sent from OMS does not get created in NetSuite. This guide enables users to independently verify the root cause by reviewing NetSuite import logs and taking appropriate actions.

## What This Document Addresses

This document addresses scenarios where:

- An order is sent from OMS but is not visible in NetSuite  
- The order sync feed history is present and the order appears to be successful from OMS but fails during processing in NetSuite  
- Users need to check NetSuite logs to identify the exact reason for failure  

## Resolution Steps

### Step 1: Navigate to CSV Import Status

Log in to NetSuite and navigate to:

`Setup` → `Import/Export` → `View CSV Import Status`
<img width="308" height="301" alt="image" src="https://github.com/user-attachments/assets/ed739315-bba5-44f0-adcb-04de60d971fb" />

This page displays all CSV imports processed in NetSuite, including orders received from OMS.

<img width="574" height="165" alt="image" src="https://github.com/user-attachments/assets/10e16a3d-bf58-4c35-bb33-98b0ac0e842f" />


### Step 2: Identify the Relevant Import File

Locate the file corresponding to your order by:

- Matching the file name (same as the one available in SFTP)  
- Filtering based on the order date and time  
- Identifying files processed around the time when the order was expected to sync

### Step 3: Review Import Status

Each import file will display a processing status such as:

- “1 of 1 records imported successfully”  
- “26 of 58 records imported successfully”  
- “32 of 32 records imported successfully”  

Focus on files where records are either partially processed or failed, as these indicate issues during import.

### Step 4: Open CSV Response

Click on the CSV Response link corresponding to the selected file.

<img width="268" height="152" alt="image" src="https://github.com/user-attachments/assets/6ceb8add-34dd-4e81-b9f5-9bd525163d01" />

This opens a detailed response showing errors encountered during the import process.

### Step 5: Analyze the Error Message

Review the error message carefully. The response typically includes a clear description of the issue or the specific field causing the error.

#### Common types of errors include:
- Invalid customer reference  
- Invalid location reference
- Invalid item reference etc.

### Step 6: Correct the Issue in OMS 
Based on the error identified:
- Update the required data in OMS (such as NetSuite Internal Customer ID or information related to product)
- Ensure all fields are correctly updated

### Step 7: Reprocess the Order
After making the necessary corrections:
- Navigate to the order details page in OMS
- Delete the existing **Order Sync Feed History**
  
  <img width="484" height="114" alt="image" src="https://github.com/user-attachments/assets/963ddeff-da49-4281-a14e-efae4184ba24" />

- This allows the order to be picked up again and sends the corrected data to NetSuite.



