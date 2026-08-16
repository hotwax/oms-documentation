---
description: Configure, schedule, and verify a file import from an SFTP location.
---

# Import files from SFTP

A scheduled SFTP import retrieves an integration file and submits it through a Data Manager configuration. The scheduled job, SFTP connection, file contract, and Data Manager processing queue are separate checkpoints.

Use this flow only after the source-system and Data Manager owners agree on the file format, path, schedule, and expected OMS outcome.

## Confirm the import contract

Before scheduling a job, record:

- Data Manager configuration ID and import service.
- Expected file format and filename pattern.
- SFTP remote and import path.
- Source-system delivery schedule and timezone.
- Archive and error-file behavior.
- Expected OMS record change and a safe test identifier.

Do not place passwords, private keys, connection secrets, or production file contents in documentation, issues, or screenshots.

## Review the Data Manager configuration

1. In the Order Management System, open `Settings` > `Data Manager Configurations`.
2. Find the agreed configuration ID.
3. Confirm its import service, import path, filename pattern, execution mode, and failure notification setting.
4. Record the existing values before making an approved change.

Do not change a configuration to compensate for an unconfirmed source-file problem. See [Configure Data Manager](README.md) and [Configuration options](configuration-options.md) for the backend fields.

## Configure the scheduled job

1. In Job Manager, open `Jobs` > `Catalog`.
2. Find the SFTP import job for the intended business flow.
3. Confirm its service, Product Store, current schedule, and pause state.
4. Review every required parameter. Import jobs commonly identify the Data Manager configuration and SFTP property resource; some also override the import path.
5. Compare the configuration ID and path with the approved import contract.
6. Configure the schedule in the instance timezone.
7. Activate the schedule only after an approved test or deployment review.

Parameter names vary by job template. Use the values displayed on that job instead of copying parameters from another integration. Follow [Manage a job](../../../retail-operations/workflow/job-management/jobs/job-details.md) for current scheduling controls.

## Understand queued processing

The SFTP import job submits the retrieved file to Data Manager. A configuration in `Queued` mode remains pending until the instance's bulk-file processing job selects it. A successful SFTP Job Run therefore does not, by itself, prove that every file record finished processing.

## Verify an import

1. Open the SFTP job's `History` and retain its Job Run ID, parameters, message, and errors.
2. Open the linked data log when one is available.
3. In Job Manager, open `MDM` > `File history`.
4. Search by filename, configuration ID, or log ID.
5. Confirm the terminal status, record count, error count, and processing timeline.
6. Open `Errors` and compare failed rows with the original file.
7. Confirm the expected OMS record change with the same business identifier.

Do not submit a second copy while the original file is pending. Cancellation or replay does not reverse records that were already processed.

## Troubleshoot

- [Troubleshoot import configuration errors](troubleshooting/data-import-errors.md)
- [Troubleshoot a missing or pending file](troubleshooting/data-not-imported.md)
- [Troubleshoot file imports](../../../retail-operations/workflow/job-management/troubleshooting/file-imports.md)
- [Monitor file processing](../../../retail-operations/workflow/job-management/mdm/file-history.md)
