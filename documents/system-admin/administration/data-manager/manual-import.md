# Manual import

Use a manual import to upload a supported CSV or JSON file directly to a Data Manager configuration.

## Upload a file

1. Go to `Settings` > `Data Manager Configurations`.
2. Search for and open the configuration that matches the data you are importing.
3. Download the available sample file and prepare your file with the required columns.
4. Select `Choose File`, select the CSV or JSON file, and start the import.
5. Open the file's log entry to monitor its status.

## After the import

* `Finished` means the file completed. Review `Failed Records` if the log indicates that any rows were rejected.
* `Pending` means the file is waiting for the bulk-file processing job. See [Data not imported](troubleshooting/data-not-imported.md) if it remains pending.
* `Failed` means the file could not be processed. Review the log and correct the source file before retrying.

When retrying failed rows, remove the error-reason column from the downloaded failed-records file before uploading it again.
