---
description: Filter service-job executions and investigate messages, errors, results, parameters, and linked data logs.
---

# Investigate job runs

Open `Jobs` > `Run history` to investigate service-job executions across the active instance.

## Review run totals

Use the summary cards to compare:

- Total runs
- Successful runs
- Failed runs
- Running jobs

The cards summarize the current query and backend response. Use the result list to inspect an individual run.

## Find a run

Use `Search by run, job, service, user, message, or result`, or combine these filters:

- `Status`: Running, Successful, Failed, or Terminated
- `Job`
- `User`
- `Data logs`: Has data logs or No data logs

Use `Previous` and `Next` to move through pages of results.

## Read a run card

A run card shows the run identifier, job, service, status, start time, completion time, duration, user, and linked data-log count when available.

Select the card to open its job. Expand a section without opening the job to review:

- `Message`
- `Linked data logs`
- `Errors`
- `Results`
- `Parameters`

Select a linked data-log identifier to open the related [file detail](../mdm/file-details.md).

## Investigate a failed run

1. Filter `Status` to `Failed`.
2. Find the affected job, time, or run identifier.
3. Expand `Errors`.
4. Review `Parameters` and `Results`.
5. Open each linked data log.
6. Open the job and compare its current schedule and parameters with the failed run.

Record the original error before you rerun or edit the job.
