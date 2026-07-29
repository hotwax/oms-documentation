---
description: Investigate missing, failed, running, paused, or incorrectly scheduled service jobs.
---

# Troubleshoot job runs and schedules

Use `Catalog`, Job Details, and `Run history` together. The current app does not use the previous Pending, Running, and History Pipeline tabs.

## Check whether a job is scheduled

1. Open `Jobs` > `Catalog`.
2. Search for the exact job name.
3. Check its state and schedule summary.
4. Open the job.
5. Review the `Schedule` card in `Overview`.
6. Confirm the cron expression, repeat count, validity dates, pause state, and app time zone.

A job with `No schedule` does not run automatically. A paused job retains its configuration but does not start future scheduled runs.

## Investigate a failed run

1. Open `Jobs` > `Run history`.
2. Filter `Status` to `Failed`.
3. Find the exact job and time.
4. Expand `Errors`.
5. Review `Parameters`, `Results`, and linked data logs.
6. Open the job and compare its current configuration.

Correct the identified configuration or data problem before you select `Run Now`.

## Investigate a running job

1. Filter `Run history` to `Running`.
2. Confirm the start time and normal duration for this job.
3. Review messages and linked data logs.
4. Check recent successful runs for comparison.

Do not treat a long-running job as stuck without evidence. Escalate with the run identifier, start time, service name, and current logs when the app does not provide a safe recovery action.

## Investigate overlapping schedules

Compare the schedules and normal durations of jobs that use the same data or service.

1. Open each job from `Catalog`.
2. Record each cron expression and time zone.
3. Compare recent durations in `Run history`.
4. Move one schedule only when the overlap is the confirmed cause.

## Investigate a missing job

1. Confirm the active instance and product store.
2. Clear Catalog category and status filters.
3. Search by job name, product identifier, and service name.
4. Refresh job data from `Settings` > `Data Fetch Status`.

If the job remains missing, ask an administrator to verify the service-job definition and backend permissions. The current app does not create new jobs.
