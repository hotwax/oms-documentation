---
description: Prepare, submit, and monitor a manual file import through Job Manager.
---

# Import a file manually

Use Job Manager to import a CSV or JSON file through an existing OMS import configuration.

## Find the configuration

1. Open Job Manager and select `MDM` > `Manual uploads`.
2. Search by configuration ID, name, or description.
3. Select `Start Import` on the matching configuration card to open its upload page.
4. Review the `Config ID`, `Import Service`, description, and `Import Service Parameters` before preparing the file.

The service parameters are read-only reference information. Confirm the intended configuration and environment before importing data.

## Prepare the file

1. Select `Download Template` to download the configuration's CSV headers.
2. Fill in the required values using the approved column names and identifiers.
3. Check required fields, record count, and the expected business changes.
4. For a JSON import, obtain the required record structure from the configuration owner; the Job Manager template download provides CSV.

A template helps identify fields, but does not validate the data or prove that the import will succeed. Test a small file with approved non-production data when using a new configuration or file structure.

## Submit the import

1. Select `Upload a file` or drag the prepared CSV or JSON file into the upload area.
2. Confirm that the displayed file name is correct.
3. Select `Start Import` once.
4. Wait for the submission result. A successful submission displays `File uploaded successfully` and clears the selected file.
5. Open `MDM` > `File history` to find the submitted file by configuration, file name, or log identifier.

The acknowledgement confirms submission, not successful processing of every record. If the response is unclear or processing takes time, check File History before submitting another copy.

## Monitor processing

Open the matching record in File History and review its status, timestamps, record totals, and error totals. Counts may not be final while processing is active.

`Finished` can include failed records. Check the error count and expected business result before treating the import as fully successful. `Finished with errors` indicates that processing ended with failed records.

Use the `Original` tab to inspect the submitted data and the `Errors` tab when available to inspect failed records. The Errors tab requires an available error file; its absence does not prove that all records succeeded.

See [Monitor file processing](../job-manager/mdm/file-history.md) and [Review file details](../job-manager/mdm/file-details.md) for filtering, downloads, and the processing timeline.

## Recover failed records

1. Review the errors and compare failed records with the original input.
2. Confirm which records already changed in the OMS and whether retrying them can create duplicates.
3. Correct the failed records and rebuild a file matching the configuration's current template or approved JSON structure. Remove diagnostic error fields before submitting it.
4. Submit the reviewed correction through the same Job Manager workflow.
5. Check the new file's status, record counts, errors, and business result.

A file-level failure may have no error-record file and may follow partial processing. Do not resubmit the full original file until the configuration owner confirms the retry scope.

See [Troubleshoot file imports](../job-manager/troubleshooting/file-imports.md) for the next checks, and [Upload a file manually](../job-manager/mdm/manual-uploads.md) for configuration details.
