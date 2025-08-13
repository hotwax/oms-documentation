# Manual Imports

## Importing Data in OMS
1. Open a relevant import topic from the category based on your requirements. For instance, Procurement > Purchase Order.
2. Download the provided sample CSV template.
3. Once you've prepared a CSV or JSON file to import, click on `Choose File` to upload the file containing your data.
4. The system will initiate the import, processing the provided data according to the chosen import topic.

If the file you uploaded does not begin processing immediately, the MDM you're using may be set to run in queued mode, which means it will be run by the queue polling job that runs at set intervals. In this case, to process the file immediately, go to the job manager app and run the Process Pending Bulk Imported Files job manually using the `Run Now` function.

After finishing its run, if the file terminates in a `Failed` status or produces `Error Records`, your data has not been processed and needs to be retried. To learn more about troubleshooting this, please refer to this document. (add link)
