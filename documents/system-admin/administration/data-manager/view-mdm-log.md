# View Logs

Data manager logs help verify the status of imported data, ensuring the accuracy and completeness of data imported into the OMS.

Logs are located below the import function on all Data Manager detail pages.

In the result section, you will see the following columns

| Column         | Explanation                                                                                            |
| -------------- | ------------------------------------------------------------------------------------------------------ |
| Log Id         | A unique identifier for the transaction.                                                               |
| User           | The user who performed the action.                                                                     |
| Date           | The date and time the event occurred.                                                                  |
| Uploaded File  | The CSV file that was uploaded.                                                                        |
| View Log       | Provides detailed transaction logs for the entire event with timestamps.                               |
| Failed Records | A CSV file containing records that failed to upload, along with error messages for each failed record. |
| Status         | The status of the upload or download (Pending, Queued, Running, Finished, or Failed).                  |
| Action         | Action to delete the record.                                                                           |

Status Types:

Understand the different status types in the data logs:

| Status   | Description                              |
| -------- | ---------------------------------------- |
| Pending  | Transaction is yet to be initiated.      |
| Running  | Download or Import is getting processed. |
| Finished | Transaction success.                     |
| Failed   | Transaction has failed.                  |

File Upload Failed:

This typically occurs when the file format does not align with the required CSV format. To resolve this, consider converting the file to CSV format before attempting to upload it again.

File upload is partially failed:

Failed records are generated when a file is successfully processed, but discrepancies in the uploaded data lead to some records failing. In these scenarios, the record with correct data gets processed and a file containing all failed records with invalid data becomes available in the Failed Records section. You'll find a failed records file associated with such cases in the logs. By examining this file, you can easily identify and comprehend data errors in the uploaded file. Details about the errors in the records are available in the failed records file, providing clarity on what went wrong. After addressing the identified errors, you can confidently reupload the failed record file after removing the error reason column without encountering further issues. Some of the possible error types are as follows:

| Error Type     | Description                                             |
| -------------- | ------------------------------------------------------- |
| Invalid Data   | Data that does not conform to expected values.          |
| Invalid Format | Correct type but doesn't follow the expected structure. |
| Missing Field  | A required field is not provided or is empty.           |
| Required Field | A field marked as required is left blank.               |

By following these structured steps, you can diagnose and resolve issues with data imports in OMS and fix them before re-uploading.