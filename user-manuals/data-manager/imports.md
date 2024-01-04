# Data Imports

HotWax Commerce's Master Data Manager application includes a robust feature for importing data into the Order Management System (OMS). This data import functionality allows users to efficiently add, modify, and audit information in bulk, providing a streamlined process for handling various categories of data within the OMS. The interface also provides real-time updates on the processing status and allows users to download any failed records or errors encountered during the update.

## Categories

   - **Procurement:** Involves data related to the procurement process, such as purchase orders and ATP.
   - **Warehouse:** Includes data related to warehouse operations, like inventory and facility locations.
   - **PIM:** Deals with importing product information, including details about products and categories.
   - **Order Management:** Involves importing data related to sales orders and order fulfillment processes.
   - **Miscellaneous:** Covers diverse information that doesn't fit into specific categories.

## Importing Data in OMS:

To import data into the Order Management System manually, follow these steps:

1. Navigate to the Hamburger Menu.
2. Go to MDM (Master Data Management) > EXIM (Data Import/Export) > Import.
3. Choose the relevant import topic from the category based on your requirements. For instance, Procurement > Purchase Order.
4. Download the provided sample CSV template specific to the chosen import topic.
5. Input the necessary details into the downloaded CSV template.
6. Save the file with the entered information.
7. Return to the Import section.
8. Click on `Choose File` to select the saved CSV file containing your data.
9. Submit the file for processing by clicking `Upload.`
10. The system will initiate the import, processing the provided data according to the chosen import topic.

### Data Manager Logs:

Data manager logs help verify the status of imported data, ensuring accuracy and completeness of data imported into the OMS.

Logs are located at below the import function on all Data Manager detail page.

**In the result section, you will see following columns**

| Column          | Explanation                                           |
|------------------|-------------------------------------------------------|
| Log Id           | A unique identifier for the transaction.              |
| User             | The user who performed the action.                    |
| Date             | The date and time the event occurred.                  |
| Uploaded File    | The CSV file that was uploaded.                       |
| View Log         | Provides detailed transaction logs for the entire event with timestamps. |
| Failed Records   | A CSV file containing records that failed to upload, along with error messages for each failed record. |
| Status           | The status of the upload or download (Pending, Queued, Running, Finished, or Failed). |
| Action           | Action to delete the record.                           |


**Status Types:**

Understand the different status types in the data logs:

| Status   | Description                               |
|----------|-------------------------------------------|
| Pending  | Transaction is yet to be initiated.       |
| Running  | Download or Import is getting processed.  |
| Finished | Transaction success.                      |
| Failed   | Transaction has failed.                   |


**File Upload Failed:**

This typically occurs when the file format does not align with the required CSV format. To resolve this, consider converting the file to CSV format before attempting to upload it again.


**File upload is partailly failed**

Failed records are generated when a file is successfully processed, but discrepancies in the uploaded data lead to some records failing. In these scenario, the record with correct data gets processed and a file containing all failed records which have invalid data gets available in the Failed records section. In the logs, you'll find a failed records file associated with such cases. By examining this file, you can easily identify and comprehend data errors in the uploaded file. Details about the errors in the records are available in the failed records file, providing clarity on what went wrong. After addressing the identified errors, you can confidently reupload the failed record file after removing the error reason column  without encountering further issues. Some of the possible error types are as follows: 

| Error Type        | Description                                            |
|-------------------|--------------------------------------------------------|
| Invalid Data      | Data that does not conform to expected values.          |
| Invalid Format    | Correct type but doesn't follow the expected structure. |
| Missing Field     | A required field is not provided or is empty.           |
| Required Field    | A field marked as required is left blank.               |


By following these structured steps, you can diagnose and resolve issues with data imports in OMS and fix them before reuploading.


## Frequently Used CSV Imports:
- Bulk Sales Order Cancellation
- Store Employee Management
- Inventory Reset
- Sales Order Import
- Purchase Order Upload
- Safety Stock
- Order Item Parking Facilities
- Product Category Association
- Carrier Postal Code Association
- Facility Information Management
- Facility Location Management
- Inventory Import
- Shipment Update
- Replace Product in Orders
- Bulk Purchase Order Closure

These frequently used imports cater to various needs, allowing users to perform tasks such as canceling orders, managing employees, updating inventory, importing sales and purchase orders, and more, enhancing the efficiency of OMS operations.
