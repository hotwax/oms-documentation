---
description: Diagnose a routing group that did not run at the expected time.
---

# Troubleshoot a routing schedule

Use the routing list, schedule details, and run history to determine whether the problem is the schedule or the routing configuration.

## Check the schedule

1. Open the **Order Routing Rules** app.
2. Confirm the Product Store and time zone shown in the app footer.
3. Go to `Routing` > `Order Routing`.
4. Use the `Active` and `Draft` tabs to find the routing group.
5. Open the routing group.
6. Confirm that its status is `Active`.
7. In `Scheduler`, confirm that a schedule exists and review the displayed cadence and `Next run`.
8. Save or discard any pending configuration changes.
9. Click `Edit schedule` when the cadence or Quartz cron expression is incorrect.
10. Select a schedule option or update `Expression`, click the save icon, then confirm `Save`.

The schedule editor previews the expression in the user's displayed time zone, but the saved job runs in the default time zone of the HotWax Commerce server. Compare the saved `Next run` and `History` values, then confirm the server time zone with your system administrator before you change a schedule that appears offset.

## Check active configuration

A scheduled routing group can run without allocating orders when its child configuration is inactive or does not match an order.

1. Confirm that the required routing has an active status.
2. Confirm that the required routing rules have an active status.
3. Review the routing's order filters.
4. Review the routing rules' facility filters and unavailable-item actions.
5. Save any changes.

## Compare a manual run with history

1. Click `History` and look for the expected scheduled start.
2. If no entry exists, return to the schedule and status checks.
3. Click `Run now` to start an immediate copy of the routing group.
4. Open `History` again and inspect the new run.

`Run now` does not replace or change the saved schedule.

* If the manual run completes, focus on the schedule, status, and time zone.
* If the manual run starts but allocates no orders, inspect routing filters, routing-rule filters, inventory, and queue actions.
* If the manual run fails, capture the run time and routing group ID for operational investigation.

The `Coverage by day and hour` chart on the Order Routing List page can also reveal schedule gaps. See [Manage routing groups](../brokering-runs.md).
