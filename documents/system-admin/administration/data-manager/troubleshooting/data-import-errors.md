---
description: Investigate configuration identifiers and SFTP paths without exposing connection secrets.
---

# Troubleshoot import configuration errors

A scheduled file import can fail when the service-job parameter points to the wrong Data Manager configuration or when the configured secure file transfer protocol (SFTP) path does not contain the expected file.

## Check the configuration identifier

1. Open `Run history` in Job Manager.
2. Find the failed import job.
3. Expand `Parameters` and `Errors`.
4. Record the configuration identifier used by the run.
5. Open `Settings` > `Data Manager Configurations` in the Order Management System.
6. Find the configuration and compare its identifier.

Correct the job parameter only when the failed run used the wrong configuration.

See [Troubleshoot job runs and schedules](../../../../retail-operations/workflow/job-management/troubleshooting/job-runs-and-schedules.md).

## Check the SFTP path

1. Open the Data Manager configuration.
2. Record the configured import path.
3. Ask an authorized integration administrator to confirm that the expected file exists at that path.
4. Compare file name, path, archive behavior, and timestamps.
5. Update the path only when the source and configuration owners confirm the correct location.

Do not copy passwords, private keys, or connection secrets into issues, chat, documentation, or screenshots.

## Confirm the result

1. Run the import through its normal source or schedule.
2. Open `File history` in Job Manager.
3. Find the resulting file.
4. Review its status, timeline, and errors.

Do not upload a production file as a configuration test unless the service owner has approved the data and outcome.
