---
description: Diagnose Data Manager files that do not start, fail, or cannot be retrieved from SFTP.
---

# Troubleshooting Data Manager

Start with the file's log in the relevant Data Manager configuration. The log identifies the uploaded file, current status, and any failed records.

| Symptom | Next step |
| --- | --- |
| A file remains pending or does not appear to process | [Data not imported](data-not-imported.md) |
| A scheduled SFTP file is not retrieved | [SFTP errors](data-import-errors.md) |
| Some rows completed and some failed | Download `Failed Records`, correct the source rows, remove the error-reason column, and retry only those rows. |

For field definitions and supported file types, return to [Frequently used imports](../freq-used-configurations.md).
