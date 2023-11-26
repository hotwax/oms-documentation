---
description: >-
  The EXIM Result Section is a data management tool that provides users with
  real-time information on the status of their EXIM data uploads.
---

# Result Section



{% hint style="info" %}
MDM - Master Data Management

EXIM stands for Export Import data.
{% endhint %}

The section displays the status of each upload as Pending, Queued, Running, Finished, or Failed. Finished status indicates that the upload was successful, while Failed status indicates that the upload failed and provides error records. The Results data is deleted after a configurable number of days.&#x20;

<table data-header-hidden><thead><tr><th width="210.5"></th><th></th></tr></thead><tbody><tr><td><strong>Component</strong></td><td><strong>Description</strong></td></tr><tr><td>Refresh Button</td><td>Refreshes the page to reflect the latest status of uploads and downloads.</td></tr><tr><td>Log Id</td><td>A unique identifier for the transaction.</td></tr><tr><td>User</td><td>The user who performed the action.</td></tr><tr><td>Date</td><td>The date and time the event occurred.</td></tr><tr><td>Uploaded File</td><td>The CSV file that was uploaded.</td></tr><tr><td>View Log</td><td>Provides detailed transaction logs for the entire event with timestamps.</td></tr><tr><td>Failed Records</td><td>A CSV file containing records that failed to upload, along with error messages for each failed record.</td></tr><tr><td>Error Record types</td><td><ol><li>Invalid data </li><li>Invalid format </li><li>Missing field</li><li>Required field</li></ol></td></tr><tr><td>Status</td><td>The status of the upload or download</td></tr><tr><td>Types of status</td><td><p>Pending  -  Transaction is yet to be initiated</p><p>Queued  -  Download or Upload has been initiated</p><p>Running  - Download or Upload is getting processed</p><p>Finished  - Transaction success</p><p>Failed      - Transaction has failed</p></td></tr><tr><td>Action</td><td>Delete the selected record</td></tr></tbody></table>



**How to check the error in the uploaded file?**

{% hint style="info" %}
Hint: The CSV file only contains the failed records.&#x20;
{% endhint %}

1. Go to the Failed Records column, and click the CSV file to open it.
2. View the error message for each record in the last column of the CSV.
3. Review the error message for each failed record.
4. Modify the sample file with the correct data for each record.
5. Upload the data again and check the status.

<figure><img src=".gitbook/assets/Result Section.png" alt=""><figcaption><p>Image: Result Section</p></figcaption></figure>
