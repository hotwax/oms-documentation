---
description: Review order flow, exception queues, facility performance, and fulfillment sync work.
---

# Funnel

`Funnel` is the operational starting point for Order Manager. It summarizes work for the selected product store and provides links into the queues that need attention.

The dashboard refreshes when you open it and when relevant context, such as the product store or selected facility, changes.

## Review today's progress

The top card shows the number of orders recorded today and the time elapsed since the start of the day. Progress rows compare the current count with the total ship-group workload for:

* `Assigned to fulfillment`
* `In flight`
* `Packed and shipped`

Each row includes a count and percentage so you can compare stages without opening a separate queue.

## Review unbrokered and brokered work

The next cards separate work that has not been brokered from work already assigned to fulfillment.

### Unbrokered

`Unbrokered` lists orders in virtual locations. The standard rows include:

* `Awaiting brokering`
* `Rejected queue`
* `Unfillable queue`

Other configured virtual locations appear when they contain orders. Select a row to open the corresponding queue with its facility context.

### Brokered

`Brokered` summarizes:

* `Open`
* `Picked`
* `Packed and shipped`

Select a row to open that in-progress queue.

### Unfillable

`Unfillable` shows the current unfillable-order total. Its trend line shows how that workload changed during the current day. Select the card to open [Unfillable](unfillable-orders.md).

### Order hold tasks

`Order Hold Tasks` groups open tasks by purpose. Standard task types include substitute, bad-address, and fraud-review work. Additional task purposes open in [Hold](hold-orders.md).

## Compare facilities

Use `Search facilities` to find a location, then choose one of these views:

| View | What it compares |
| --- | --- |
| `Order Volume` | Current order workload by facility. |
| `Fulfillment Velocity` | The fulfillment-velocity value supplied for each facility. |
| `Rejections` | Active order workload and rejected-order context by facility. |

The list shows up to ten facilities for the selected view. Select a facility to open its fill-rate details.

## Review a facility

The `Fill rate at` section shows:

* today's fill rate
* orders allocated and the configured capacity, when available
* orders packed
* orders rejected
* orders pending fulfillment
* the oldest assigned order
* open and in-progress counts

Select `open` or `in progress` to open the corresponding queue with the facility filter applied.

## Manage fulfillment sync

When fulfillment-sync data is available, the dashboard also shows the pending-sync count and processing configuration.

### Set processing order

Use `Add` under `Sort` to add available sorting rules. Drag rules to change their priority or remove a rule that no longer applies. The queue visualization shows which orders will be processed next and the estimated time represented by each segment.

### Set rate limits

Use:

* `Batch size` to set the number of orders processed per run.
* `Frequency` to open the schedule dialog.
* `Active` to enable or pause the schedule.

The schedule dialog provides common intervals and an expression field for a custom schedule. Save the dialog after changing the schedule.

## Loading, empty, and error states

Dashboard sections load independently. A section can show a spinner or `Retry` while other sections remain available.

You may also see:

* `No facilities found` when no facility matches the search.
* `No pending orders` when the selected facility has no pending workload.
* `No sorting conditions configured` when fulfillment sync has no active sort rules.

Wait for loading to finish or retry a failed section before interpreting a blank value as zero.
