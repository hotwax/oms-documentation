---
description: Assess order flow, prioritize exceptions, compare facilities, and manage fulfillment-sync settings.
---

# Funnel

Use `Funnel` to assess the selected product store's workload before you open a queue. It combines today's fulfillment progress with current exception counts, facility metrics, and fulfillment-sync configuration.

## Confirm the working context

The product store appears at the top of the page. Confirm it before comparing values or opening a queue.

`Funnel` reloads store-level data when you open the page. Changing the product store clears the selected facility and reloads the dashboard. Selecting another facility reloads that facility's progress and fulfillment-sync data.

## Run the daily operating loop

Use `Funnel` as the start of a shift review or operations stand-up:

1. Confirm the product store and review today's headline progress.
2. Check `Unbrokered` and `Order Hold Tasks` for work that needs a routing or exception decision.
3. Compare facilities to find concentrated workload, slow movement, or rejection pressure.
4. Select the affected card or row and complete the work in its detailed queue.
5. Return to `Funnel`, reload the page, and confirm whether the pressure changed.
6. Review `Pending sync` and the selected facility's release settings when safe work is waiting to enter downstream fulfillment.

`Funnel` is the operating summary and navigation layer. The detailed queues are the primary place to work multiple records, and `Order details` is the place for a complete one-order investigation.

## Review today's progress

The top card combines an order count with ship group progress:

* The large value is the number of orders recorded today.
* `Assigned to fulfillment` is brokered ship groups divided by today's total ship groups.
* `In flight` combines picked, packed, and shipped ship groups.
* `Packed and shipped` combines packed and shipped ship groups.

The three stage rows are cumulative, not values to add together. An order with more than one ship group can contribute more than once to a stage count. Do not compare the large order total directly with a ship group total.

Use the percentages to identify where work is accumulating. The progress rows do not open queues; use the workload cards below to investigate the underlying orders.

The `hours since day start` label is informational. It is not an order age or a processing target.

## Triage unbrokered work

`Unbrokered` lists the current virtual-location workload:

* `Awaiting brokering` contains work waiting in the standard brokering location.
* `Rejected queue` contains work returned after a facility rejection.
* `Unfillable queue` contains work that routing could not assign.
* Other configured virtual locations appear when they contain orders.

The card's large value normally uses the distinct-order count for the Brokering queue. Until that count is available, the page can fall back to adding the location rows, which can count one order more than once. Each row counts orders in one virtual location, so the row values do not always add up to the final large value.

Select `Unfillable queue` to open [Unfillable](unfillable-orders.md). Select another row to open [Brokering queue](brokering-queue.md) with that virtual-location filter applied. In the queue, use order age, partial allocation, and delivery deadline to decide which order to inspect first.

{% hint style="info" %}
The `Unbrokered` card does not provide its own loading or error message, and a store change can briefly leave an earlier value visible. If the value is unexpected, open the Brokering queue and reload it before treating the card as authoritative.
{% endhint %}

## Triage workflow queues

`Brokered` shows the complete selected-store totals returned by three workflow queues:

* `Open` opens [Open orders](open-orders.md).
* `Picked` opens [Inflight orders](inflight-orders.md).
* `Packed and shipped` opens [Packed orders](packed-orders.md).

These links open the full queue without a date or facility filter. Order Manager uses different labels for parts of this workflow, and the page does not explain the exact entry and exit rules for every queue. Use each queue as its current work list, then open `Order details` to confirm an order's actual state.

## Review exceptions

### Unfillable

The `Unfillable` card's large value is the full current queue, not a today-only value. Its sparkline shows hourly activity for the current day. Use the large value to understand the backlog and the sparkline to see whether today's activity is adding pressure. Select the card to open [Unfillable](unfillable-orders.md).

### Order hold tasks

`Order Hold Tasks` counts open tasks, not unique orders. One order can contribute more than one task.

Select a purpose to open its work queue:

* Substitute work opens [Swap](swap-orders.md).
* Address work opens [Bad address](bad-address-orders.md).
* Risk work opens [Fraud](fraud-orders.md).
* Other purposes open [Hold](hold-orders.md) with the task purpose applied.

Completing a task records that task's outcome. Check `Order details` before assuming that fulfillment resumed or that every related task is complete.

## Compare facilities

Use `Search facilities` to find a physical location. The list displays up to ten matching facilities and automatically selects the first visible result. Confirm the facility name in the `Fill rate at` heading before reviewing details or changing configuration.

Choose a view based on the question you are answering:

| View | How to read it |
| --- | --- |
| `Order Volume` | Compare the current active workload displayed for each facility. |
| `Fulfillment Velocity` | Compare the velocity percentage and accompanying counts returned for each facility. If a row says `active orders` instead, the app is showing fallback workload data, not a velocity value. |
| `Rejections` | Review active workload alongside today's distinct rejected ship groups. The bar still represents active workload, so this view is not ranked by rejection count. |

The bars compare each visible facility with the first facility in the current list. They are not capacity percentages, verified rankings, or performance targets. Selecting a facility updates the dashboard below; it does not open another page.

## Review a facility

### Read fill rate

Today's fill rate is:

> Packed or shipped ship groups ÷ packed or shipped plus rejected ship groups

A `0%` value can mean that no ship group has reached either outcome. It does not always indicate a performance problem.

The card also shows:

* Orders allocated today and the configured capacity. `Unlimited` means no capacity limit was returned.
* Orders packed or shipped today.
* Distinct rejected ship groups today.
* Remaining pending work and the oldest assigned timestamp when available.
* `open` and `in progress` counts.

Select `open` or `in progress` to open the related queue with the physical facility filter applied. Treat these values as ship group workload, not confirmed unique-order totals.

## Manage live fulfillment-sync configuration

{% hint style="warning" %}
The controls in this section change the selected facility's live fulfillment-sync configuration. Confirm the product store and facility first. Only designated operations administrators should change these settings.
{% endhint %}

This section appears only when the selected facility has an active fulfillment-sync profile. A missing section can mean that no active profile exists or that the profile lookup failed. Do not interpret an absent section as a zero pending count.

`Pending sync` is the number of orders waiting for this sync profile. It differs from `Orders Pending Fulfillment` in the facility card.

The active pick profile is the business release policy between internal order planning and downstream fulfillment. It controls release eligibility and priority. `Funnel` exposes priority, batch size, and schedule; eligibility rules are configured elsewhere. Applicable open Order Tasks can keep a scope outside downstream picking even when internal brokering and allocation remain available.

The page looks up this configuration by facility and does not show or verify a Product Store association. If the facility serves more than one Product Store or can have more than one active profile, do not edit these controls until an administrator confirms which profile the page loaded.

The pick profile does not confirm transport or reconciliation. Saving a sort, batch, or schedule change does not confirm that a warehouse or 3PL received any work. Verify external delivery in the integration monitoring surface your organization provides.

### Change processing order

Sort rules are evaluated in the order shown. The first rule has the highest priority and also controls how the queue visualization is grouped.

1. Select `Add` and choose a rule that is not already configured.
2. Drag a rule to change its priority.
3. Select the remove icon to delete a rule.
4. Wait for the section to refresh, then confirm the final rule order.

Adding, removing, and reordering save immediately. There is no separate `Save` button or confirmation. If a failure message appears, reload the page and confirm the stored order before trying again.

The queue visualization labels the right side `Next to Process` and the left side `Last to Process`. Its time values are estimates calculated from the current count, batch size, and schedule interval. They are not guaranteed completion times or service-level targets.

### Change batch size

`Batch size` controls the number of orders sent per run.

1. Enter a positive whole number.
2. Leave the field to apply the change.
3. Wait for the section to refresh and confirm the displayed value.

The value saves on field change. There is no separate `Save` button or confirmation.

### Change the schedule

1. Select `Frequency`.
2. Choose a common interval or enter a custom expression.
3. Check the readable description and next-run value.
4. Turn `Active` on to run the schedule or off to pause it.
5. Select the save icon.
6. Read the success or failure message, then reopen the schedule to confirm the saved expression and state.

Do not save while the dialog shows `Invalid expression`. The modal can close after a failed update, so closing is not proof that the schedule changed.

## Handle loading, empty, and error states

Dashboard sections load independently. A section can show a spinner or `Retry` while other sections remain available.

You may also see:

* `No facilities found` when no facility matches the current search and view.
* `No pending orders` when an oldest-assigned timestamp is not available. Compare it with the pending count before concluding that the facility has no work.
* `No sorting conditions configured` when the active fulfillment-sync profile has no sort rules.

Some facility-detail requests can fail independently and leave a zero or missing value in an otherwise loaded section. If one value conflicts with the rest of the page, reload `Funnel` before escalating or reporting it.
