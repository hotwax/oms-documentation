---
description: Find a service job, diagnose its runs, and choose a safe recovery action.
---

# Investigate Service Jobs

Use this runbook when a scheduled sync has not started, a job reports an error, or a run appears to be taking too long. Start with the existing job and run records. Running the job again can repeat imports, send another request, or overlap work that is still running.

For terminology, see the [Maarg glossary](glossary.md#background-jobs). For Shopify product-sync job names and downstream checks, follow [Shopify product sync](../shopify/product-sync.md).

## Before You Start

- Confirm the environment and the affected business process, shop, or store.
- Obtain the job name or job run ID and the approximate incident time, including its time zone.
- Use an account authorized to view System tools. Permission to investigate does not automatically authorize changing a schedule or replaying business operations.
- Keep job parameters, results, logs, and host details in an approved support channel. They can contain customer data or credentials.

**Navigation:** Open **System > Service Jobs > Jobs**. Use the application's menus rather than constructing a URL from the OMS screen address. System tools can have a separate application mount.

**Verification scope:** The Jobs navigation and list filters were checked read-only in a demo environment reporting framework 4.0.0 and util 4.3.0. Detailed fields and recovery behavior below were checked against the Maarg 6.4.0 release definitions, using runtime 4.1.0, framework 4.2.0, and util 4.4.0. No job was run, paused, stopped, or released for this documentation. A demo's installed components can differ from that release.

## 1. Find The Job And Check The Scheduler

1. In **Jobs**, filter **Job Name** using the known name or a distinctive part of it. If necessary, use **Description** or **Topic**, then select **Find**.
2. Confirm that the returned job belongs to the affected process. Similar names may represent a template, a shop-specific job, or a shared integration job.
3. Read **Cron Expression** and **Paused** before concluding that the job should have run. Open the job name to inspect its complete configuration.
4. Check the runner summary above the list. It reports the last job-runner execution, execution count, jobs run, and active/paused counts. If the screen reports that no Service Job Runner is active, capture that message and escalate to the environment administrator.

The runner summary is evidence about the scheduler on the server serving the screen. A recent runner check does not prove that a particular job ran, and a runner issue on one node is not proof that every node in a cluster is inactive.

If no job is returned, remove unrelated filters and check the spelling and environment. Do not create a replacement job just to make the search return a result.

## 2. Inspect The Job Without Changing It

The job detail separates configuration from execution history:

| Section | What to inspect | Why it matters |
| --- | --- | --- |
| **Job Run Info** | **Last Run**, **Active Job**, and **Job Runs** | Last Run and Active Job come from the scheduled job's lock record. Follow the active run ID to investigate it. |
| **Job Settings** | Service name, cron expression, paused state, effective dates, repeat count, and retry/lock settings | A valid schedule can still be outside its effective dates, paused, or finished with its configured repeat count. |
| **Parameters** | Parameter names and current values | Confirm that the intended shop, store, configuration, and processing scope are correct. Do not expose secret values in a ticket or screenshot. |
| **Users** | Associated users and notification choices | Use this to understand configured notifications, not as proof that someone received or acted on an alert. |

Important settings:

- **Paused = Y** prevents scheduled execution. It does not terminate an existing run, and it does not prevent an explicit **Run Job** action.
- **From Date**, **Thru Date**, and **Repeat Count** govern scheduled execution. Explicit runs do not use these as scheduling guards.
- **Min Retry Minutes** controls the minimum scheduler delay after an error. The default is five minutes when no effective value is supplied. It is not the same as a system message's retry interval.
- **Expire Lock Minutes** tells the scheduler when it may ignore an old run lock. The default is 1,440 minutes. It is not a service execution timeout and does not stop the original run. Keep it comfortably above the longest expected execution time.

Do not use **Update Job**, parameter **Update**, or parameter deletion while collecting evidence. The Parameters section shows the current configuration; the individual run record is the better source for the parameters saved for that execution.

## 3. Open The Execution That Explains The Incident

1. Select **Job Runs** from the job detail to open history filtered to that job. Alternatively, open the **Job Runs** section and filter by **Job Run ID** or **Job Name**.
2. Set a **Start Time** range that includes the incident. The list applies a default date window, so older runs may be hidden. Use **Has Error = Y** to narrow failures, but clear it when looking for an unfinished run.
3. Open the relevant run ID. Record its start and end times, user, **Has Error**, saved parameters, results, messages, and errors.
4. Compare it with the last known successful run. Check for a changed scope or input before changing the job configuration.

Read the run record as follows:

| Evidence | Interpretation and next check |
| --- | --- |
| Start and end times are present, **Has Error = N** | The job wrapper completed without a recorded error. Confirm the business result and any downstream messages or imports. |
| End time is present, **Has Error = Y** | Read **Errors**, **Messages**, and **Results**, then inspect logs for the same execution. Fix the cause before replaying it. |
| Start time is present, end time is blank | The record does not show completion. It may still be running or may have stopped without finalizing its record. Check logs and the execution host. |
| Start time is blank | The run record may have been created before a worker began execution. Ask the administrator to check worker capacity and execution state. |
| No recent run appears | Recheck list filters, effective dates, paused state, repeat count, scheduler activity, and any active lock. |

An **Active Job** link is a scheduled lock reference, not a complete list of every execution. In particular, an explicit run can exist without that scheduled lock reference.

## 4. Correlate The Run With Logs And Downstream Work

1. On the run detail, select **View Log**. The link supplies the run thread and start/end timestamps to the log viewer.
2. Check the resulting time range. For an unfinished run, use an explicit upper time bound if necessary. Keep the recorded time zone with your evidence.
3. Find the first meaningful error and the preceding operation. Later messages may only be consequences of that initial failure.
4. If the log view is empty, verify the time range and ask about log retention and the run's host. An empty log view does not prove that the job did not execute.
5. Follow any related message or import IDs. Use [Investigate system messages](system-messages.md) for queued integration work. A successful producer job can leave work waiting or failing in a later stage.

The run's Messages and Errors fields can be truncated. Use the correlated logs when the displayed text is incomplete.

## 5. Choose A Recovery Action

### The Job Is Healthy But Waiting

If the schedule, retry interval, or a legitimate active run explains the delay, wait for that condition to clear and inspect the next run. Do not reduce lock expiry or force an extra run to make the queue look active.

### The Run Failed And A Retry Is Appropriate

Before a manual retry, confirm all of the following with the integration owner:

- The underlying data, configuration, permission, or connectivity problem is resolved.
- No previous execution is still running, including on another server.
- Repeating the operation is safe. Check whether it could duplicate external requests, imports, exports, or other business changes.
- The current parameters are the intended scope. A manual run uses the current configuration, not a replay of the historical run's saved parameters.
- The job owner has approved the timing and scope, including the effect on scheduled execution.

If approved, open the job detail, select **Run Job**, and review the confirmation that it will run now with current parameters. Submit once. Open **Job Runs**, identify the new run ID, and follow it through completion and downstream verification. Do not submit again because the page returns before the background work finishes.

**Run Job is an explicit execution.** It does not rely on the scheduler's paused/effective-date checks or its run-lock acquisition. Treat a manual run as a potential overlap even when a scheduled lock exists.

### A Scheduled Run Lock Appears Stale

The System dashboard's **Running Job Overview** lists jobs whose scheduled lock still references a run. It can flag a run older than 20 minutes or a lock that predates the current server's restart. These are prompts to investigate, not proof that the service has stopped, especially in a multi-server environment.

1. Open the linked run and collect its ID, start time, host, thread, and latest log activity.
2. Ask the environment administrator to establish whether that execution is still active on its execution host. If it is active, decide how to handle the running work before touching the lock.
3. If the original execution is confirmed inactive, obtain approval to release that specific job/run lock. Preserve the existing run messages first: the release action writes a force-release message to the run.
4. In **Running Job Overview**, use the release control for that exact job and run ID and review the confirmation. If the referenced run has changed, stop and inspect the new state.
5. Refresh the overview, then monitor **Job Runs** for the next eligible scheduled execution. Confirm its result and downstream business outcome.

**Release is not Stop.** Release clears the scheduled lock reference. It does not interrupt the service, set the old run's end time, undo business changes, or prove that the old run succeeded. Releasing an active execution can allow another scheduled run to overlap it. The standard Job Detail described here has no stop control; an actual execution-stop request belongs with the environment administrator.

## Escalation Checklist

Provide the environment/release, affected process, job name, job run ID, incident time and time zone, start/end times, error flag, sanitized error excerpt, and the last known successful run. Include any downstream message/import IDs and the checks already performed. State whether any retry, configuration change, or lock release occurred and who approved it.

Close the investigation only after the expected business result is verified. A cleared lock or a new run ID alone is not recovery.
