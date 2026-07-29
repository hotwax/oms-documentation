---
description: >-
  Review a service job, run it, manage its schedule and parameters, and inspect
  recent executions.
---

# Manage a job

Open `Jobs` > `Catalog`, then select a job. The page shows the job state, description, category, and three tabs: `Overview`, `Parameters`, and `History`.

## Review the job before changing it

Use `Overview` to confirm:

- Service name, topic, and job type
- Priority, transaction timeout, retry timing, and lock limit
- Product and parent-job metadata
- Permission group
- Created and updated timestamps
- Cron expression, repeat count, and validity dates

Check the displayed permission group before you run or edit the job. A job-specific backend permission can apply in addition to app access.

## Run a job now

`Run Now` starts an immediate execution with the current job configuration.

1. Review `Parameters`.
2. Select `Run Now`.
3. Review the confirmation.
4. Confirm `Run Now`.
5. Open `History` or `Run history` to monitor the new run.

Do not run a job only to test whether it works. Confirm the job purpose, active product store, and parameters first.

## Pause or resume a schedule

1. Open `Overview`.
2. Find the `Schedule` card.
3. Select `Pause` or `Resume`.
4. Confirm the action when prompted.

Pausing a schedule prevents future scheduled runs. It does not cancel a run that already started.

## Edit a schedule

1. Open `Overview`.
2. Select `Edit` in the `Schedule` card.
3. Update `Cron Expression` and the other available schedule fields.
4. Review the human-readable cron description.
5. Save the schedule.

Confirm the instance time zone before you change a cron expression. Open `Settings` to review or change the time zone used by the app.

## Edit custom parameters

1. Open `Parameters`.
2. Select `Edit` or `Add`.
3. Enter all required parameter values.
4. Review optional values.
5. Select `Save`.

The `Save` action remains unavailable while a required value is missing. Parameter changes affect later runs, including a run started with `Run Now`.

## Review job history

Open `History` to inspect recent runs for this job. Expand the available sections to review:

- Message
- Linked data logs
- Errors
- Results
- Parameters

Open a linked data log to move to its file detail.

Use [Run history](run-history.md) when you need filters or a broader view across jobs.
