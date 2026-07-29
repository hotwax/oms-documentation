---
description: Monitor Shopify batch Order Sync, run targeted requests, and review import history.
---

# Manage Shopify Order Sync

Use the Order Sync dashboard to monitor scheduled Shopify order batches, review imports, run approved requests, and investigate failures.

## Open the dashboard

1. Open the **Company App**.
2. Go to `Shopify`.
3. Select a connection.
4. Open `Order Sync`.

If the page shows `Order Sync needs setup`, complete [Set up Shopify Order Sync](set-up-shopify-order-sync.md).

## Review the summary

The summary shows:

* Shopify instance and Product Store
* Last completed batch
* Next batch sync
* Orders processed
* Latest batch outcome
* Pending batch requests

Click `Run now` only for an approved unscheduled batch. Investigate a paused job or incomplete mappings before running another batch.

## Track sync progress

The progress card connects two stages:

1. Shopify order batch request
2. HotWax order import

Open the System Message for request details. Open the Data Manager log for imported record counts and errors.

A completed Shopify request can produce zero actionable changes. In that case, no Data Manager import is required.

## Review the sync monitor

Use the monitor to review:

* The job that queues Shopify order requests
* Job status and schedule
* Key order dates
* Pipeline activity
* Recent order history
* Failed Data Manager runs

When the latest refresh fails, the page can continue to show the last successfully loaded data. Treat the warning as a stale-data condition and retry before concluding that a new run completed.

## Run a custom request

Use a custom request only for a defined recovery or validation task.

### Download specific orders

1. Open the custom request area.
2. Search for the Shopify orders.
3. Select the intended orders.
4. Review the selection.
5. Submit the request.
6. Follow the new request through the progress card.

### Replay orders by time

1. Choose the replay option.
2. Enter the approved start time.
3. Review the scope.
4. Submit the request.
5. Monitor the request and resulting imports.

Use the smallest time window that contains the affected orders.

## Review order import history

1. Click the history action in `Track sync progress`.
2. Filter by `Outcome`.
3. Choose `Newest first` or `Oldest first`.
4. Set `Requested after` or `Requested before` when needed.
5. Expand a run.
6. Review the Shopify request status and HotWax import status.
7. Click `View MDM log` to inspect import counts and errors.

History can show a request with no Data Manager import when Shopify returned no actionable order changes.

## Troubleshoot a failed run

1. Confirm the Shopify request outcome.
2. Review the related System Message.
3. Review each Data Manager log and its successful and failed record counts.
4. Correct source data in Shopify when the error identifies an order-data problem.
5. Use a specific-order or bounded-time request to retry the affected scope.
6. Contact support when the request fails before an actionable error or import log is available.

Confirm the latest request time, current job state, and resulting import instead of inferring current success from old history.
