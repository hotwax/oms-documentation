---
description: Review schedule, queue, file, message, and service health from the Job Manager Dashboard.
---

# Review the Job Manager Dashboard

Open `Dashboard` to review operational health and investigate the records behind a warning. Check the displayed time window before interpreting a count; recent activity does not represent all historical failures.

## Review schedule health

Use the schedule summary to compare active, paused, unscheduled, and draft jobs. Select a status to open `Catalog` with that filter, then review the job before changing its schedule or running it.

## Investigate a failed file import

1. Locate the `High-priority ingestion` or `Standard ingestion` card.
2. Select `View n Failed`.
3. In `File history`, review the priority, failure, and time filters carried over from the Dashboard.
4. Open the affected file and inspect its error information.

![Dashboard with View Failed actions for high-priority and standard ingestion](../../.gitbook/assets/job-manager/dashboard-drilldowns.jpg)

*The ingestion actions open File history with the matching priority and time window.*

Incoming and outgoing message error totals summarize message activity. Open [Message history](system-messages/message-history.md) to investigate the underlying messages.

## Read the Queue Operations Map

Use the `Queue operations map` to review pending files and queued messages. Select the relevant stage to open its filtered history, then inspect the record's status and timestamps.

## Investigate a failed job run

1. Under `Service Jobs Diagnostics`, locate the failed job.
2. Select `View run` to open the job's `History` tab.
3. Confirm that the `Run #...` chip identifies the run you selected.
4. Review the run's status, user, start and completion times, and technical details.
5. Clear the run chip when you want to review other executions.

![Queue operations map and a failed job with a View run action](../../.gitbook/assets/job-manager/dashboard-diagnostics.jpg)

*View run opens the selected execution in the job's History tab.*

`View run` opens the execution details. `Run Now` starts another execution. Review the failure before deciding whether to rerun the job.

For configuration diagnostics, open the job and compare its `Overview`, `Parameters`, and `History`. See [Manage a job](jobs/job-details.md).

## Review recent activity

Use `Recent Activity` to open the related job, file, or message. Confirm its identifier and status on the detail page.

## Refresh dashboard data

Open `Settings` when a section appears stale. Review `Data Fetch Status`, then refresh the affected data source or use `Refresh All`.

See [Manage Job Manager settings](settings.md).
