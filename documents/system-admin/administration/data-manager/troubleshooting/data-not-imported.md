---
description: Investigate a missing, pending, or failed Data Manager import.
---

# Troubleshoot data that was not imported

Start in Job Manager with the exact file or log identifier.

## Check the submitted file

1. Open `MDM` > `File history`.
2. Search for the file, configuration, or log identifier.
3. Open the file.
4. Review its status and timeline.
5. Compare `Original` with `Errors`.

If the file does not appear, confirm that the source system submitted it to the expected configuration.

## Check queued processing

Queued files depend on the bulk-file processing service job.

1. Open `Catalog` in Job Manager.
2. Search for the bulk imported file processing job used by the instance.
3. Confirm its pause state and schedule.
4. Open `Run history`.
5. Review the latest run, parameters, and linked data logs.

See [Troubleshoot file imports](../../../../retail-operations/workflow/job-management/troubleshooting/file-imports.md).

## Check the file format

Download the original file from File Details and compare it with the format required by the configuration.

When middleware transforms the file, review the transformation flow with the integration owner. Do not change the Data Manager service to compensate for an unconfirmed source-format problem.

## Check empty input

An import can finish without creating records when the submitted file contains no data rows.

1. Open the file detail.
2. Review `Original`.
3. Confirm that data rows exist after the header.
4. Check the source export when the file is empty.

Submit a corrected file only after the source produces the expected records.
