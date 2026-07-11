---
description: Set up an existing Data Manager configuration to retrieve import files from SFTP.
---

# Import from an SFTP location

Use an SFTP import when another system places files in a secure server location and OMS should retrieve them on a schedule. The configuration identifies the file path and import service; the scheduled job retrieves matching files for that configuration.

## Before you begin

Confirm these details with the system that produces the file:

* the configuration ID to use in OMS;
* the SFTP directory where files will be placed;
* the file name pattern, if only certain files should be retrieved; and
* the expected file format and columns for the import service.

## Configure the import

1. Go to `Settings` > `Data Manager Configurations`.
2. Search for the configuration by name or ID, then select **Edit**. Create a configuration only when the import service has been confirmed.
3. Enter the SFTP directory in **Import Path**.
4. If required, set **File Name Pattern** so that the configuration retrieves only the intended files.
5. Confirm the **Import Service**, then save the configuration.
6. In Job Manager, schedule the job that retrieves files for this configuration. Use the confirmed configuration ID in the job parameters.

## Validate the first run

1. Place one test file in the configured SFTP directory.
2. Run the scheduled job or wait for its next occurrence.
3. Open the configuration and review its log entry.
4. Confirm that the file reaches `Finished`; download **Failed Records** if any rows fail.

If no file appears, first compare the job's configuration ID and the configuration's import path. See [SFTP errors](troubleshooting/data-import-errors.md) for the full diagnostic path.
