# Bulk Upload

The Bulk Upload feature makes it easy to create multiple cycle counts at once using a CSV file. Instead of entering products one by one, you can upload a formatted file, and the system will generate the corresponding cycle counts automatically. This is especially useful when working with large product lists.

To begin, go to `Cycle Count App` → `Bulk Upload`.

On this page, you can:

* Download sample CSV templates  
* Use or create saved field mappings  
* Upload new CSV files  
* Review past uploads and track their status

## Steps to create a cycle count using bulk upload

Before uploading, users may download a Sample CSV to ensure the format and data align with required fields. Using the sample file helps prevent mapping errors during the upload process.

1. ### Upload a CSV File

     
* Click the `Upload` button and select a CSV file from your device.  
* Once the file is uploaded, previously disabled controls on the screen will become active.


2. ### Map CSV Fields

   After uploading your CSV, map each column to the correct system field so values like SKU, facility, or date are interpreted correctly. If unsure, check the table below to avoid errors and create your cycle count accurately.

| Field Name | Meaning | How to Get the Right Value |
| :---- | :---- | :---- |
| **`countImportName`** | A unique name used to identify the cycle count. It helps differentiate multiple uploads. | Use a meaningful naming format, like: **Count-Jan-Store12** or **CycleCount-W1**. Avoid duplicates so tracking stays clean. |
| **`purposeType`** | Defines the type of cycle count being created. | Choose based on the type of count: `HARD_COUNT` → physical full count `DIRECTED_COUNT` → partial inventory count.  |
| **`idType`** | Specifies how the product will be identified in the system. Common options include: `SKU`, `UPCA`, etc  | Check what system uses as the primary identifier. |
| **`idValue`** | The actual value of the product based on the `idType` selected. | If you selected `SKU` in `idType`, then `idValue` must contain product SKUs. |
| **`externalFacilityId`** | The external ID of the facility to which the count will be assigned. | You can find this in your facilities app under the external mappings section. |
| **`estimatedCompletionDate`** | The due date by which the count should be completed. | Format: `MM-DD-YYYY`. |
| **`estimatedStartDate`** | The date the cycle count is allowed to begin. | Format `MM-DD-YYYY`.  |

3. ### Submit the Upload

     
* After mapping successfully, click Submit to begin processing.

## Recently Uploaded Counts

Below the Submit button, you’ll find the Recently Uploaded Counts section. This displays all bulk uploads along with their processing status.

Each record includes:

* Uploaded file name  
* System-generated uploaded cycle count id.  
* Status  
* Action menu (⋮), where users can view details or cancel uploads still in Pending status

### File Status Indicators

| Status | Description |
| ----- | ----- |
| **Pending** | The file is currently being processed. |
| **Processed** | The system successfully created the respective cycle counts. |
| **Cancelled** | The upload was cancelled before completion. |
| **Error** | The file might have an error during the import. This can be resolved by viewing the error description shown in the modal of the view error file. |

Once processing is complete, the cycle counts from the bulk upload will appear under the `Assigned` tab in the Cycle Count App. Store teams can then begin execution.