# Bulk upload

The bulk upload feature makes it easy to create multiple cycle counts at once using a CSV file. Instead of entering products one by one, you can upload a formatted file, and the system will generate the corresponding cycle counts automatically. This is especially useful when working with large product lists.

To begin, go to the `Cycle Count` app and select `Bulk upload`.

On this page, you can:

* Download a sample CSV template 
* Use or create saved field mappings  
* Upload new CSV files  
* Review past uploads and track their status

## Required permissions

Access to the bulk upload feature requires the `COMMON_ADMIN` or `INV_COUNT_ADMIN` permission.

## Steps to create a cycle count using bulk upload

Before uploading, download a sample CSV to ensure the format and data align with required fields. Using the sample file helps prevent mapping errors during the upload process.

1. Upload a CSV file

* Click `Upload` and select a CSV file from your device.  
* Once the file is uploaded, previously disabled controls on the screen become active.


2. Map CSV fields

After uploading your CSV, map each column to the correct system field so values like SKU, facility, or date are interpreted correctly. If unsure, check the table below to avoid errors and create your cycle count accurately.

| Field name | Meaning | How to get the right value |
| :---- | :---- | :---- |
| `countImportName` | Unique name used to identify the cycle count and differentiate multiple uploads. | Use a meaningful naming format such as `Count-Jan-Store12` or `CycleCount-W1`. Avoid duplicates so tracking stays clean. |
| `purposeType` | Type of cycle count being created. | Choose based on the count type: `HARD_COUNT` for a full physical count; `DIRECTED_COUNT` for a targeted or partial inventory count. |
| `idType` | How the product will be identified in the system (for example, `SKU`, `UPCA`). | Check which identifier your system uses as the primary key. |
| `idValue` | The product value based on the `idType` selected. | If you select `SKU` in `idType`, then `idValue` must contain product SKUs. |
| `externalFacilityId` | External ID of the facility to which the count will be assigned. | Find this in the Facilities app under the external mappings section. |
| `estimatedCompletionDate` | Due date by which the count should be completed. | Format: `MM-DD-YYYY`. |
| `estimatedStartDate` | Date the cycle count is allowed to begin. | Format: `MM-DD-YYYY`. |

3. Submit the upload

     
* After mapping successfully, click `Submit` to begin processing.

## Recently uploaded counts

Below the `Submit` button, you’ll find the recently uploaded counts section. This displays all bulk uploads along with their processing status.

Each record includes:

* Uploaded file name  
* System-generated uploaded cycle count ID  
* Status  
* Action menu (three dots), where users can view details or cancel uploads still in `Pending` status

### File status indicators

| Status | Description |
| ----- | ----- |
| `Pending` | The file is currently being processed. |
| `Processed` | The system successfully created the respective cycle counts. |
| `Cancelled` | The upload was cancelled before completion. |
| `Error` | The file encountered an error during import. Resolve it by reviewing the error description in the modal. |

Once processing is complete, the cycle counts from the bulk upload appear under the `Assigned` tab in the Cycle Count app. Store teams can then begin execution.
