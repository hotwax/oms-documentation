---
description: Review general order tasks, add a resolution comment, and complete the work.
---

# Hold

Use `Hold` to review manual-hold and customer-request tasks.

Address validation, substitute review, and fraud review use their dedicated task
queues. The Funnel can also open `Hold` filtered to another task purpose.

## Understand this task

Each card is one independent piece of exception work, not a complete order status. An applicable open task keeps its scope outside downstream picking until the task is completed or canceled. Resolve only the work you completed, then review [Order details](view-order-details.md) for other tasks.

## Search, filter, and sort

Search by order name. Available filters are:

* `Sales channel`
* `Order date from`
* `Order date through`
* `Task created from`
* `Task created through`
* `Facility`
* `Shipping method`

Use the order date filters to find orders placed during a date range. Use the
task created filters to find hold tasks created during a date range. A through
date includes the complete selected day.

Sort by task date, order date, or order total. The default, `Oldest task first`,
puts the hold tasks that have waited longest at the top. Select `Clear filters`
to return to the complete queue.

If `Funnel` opened this page for one task purpose, that purpose remains in the page address and is not cleared by `Clear filters`. Open `Hold` from the main menu to return to the complete queue. A purpose-scoped empty result might not show a `Clear filters` action.

## Read a hold task

The card header shows the order name, order date, order grand total, and task
age. Hover over the task-age badge to view the exact task-created timestamp.
Use the copy controls beside the customer name, phone number, and email address
when you need to contact the customer.

Use the task details to plan the work:

* The task name identifies the work to complete.
* The task purpose explains why fulfillment is held.
* The estimated completion date is a planning target. It does not resolve the
  task automatically.
* `Notes` contains the task instructions.
* The assignee identifies the current owner. The date below the name shows when
  the assignment began. `Unassigned` means that no assignee is present.
* The reporter identifies who created or reported the task. `System` appears
  when no reporter is present.

The assignee and reporter are read-only on this page.

## Confirm the hold scope

A manual hold can apply to selected ship groups. A customer-request hold
can apply to selected ship groups or the complete order.

Select `View order` for the full order context. The current task card and
`Order details` do not identify the exact ship group ID for a general hold. If
the scope affects your decision, do not resolve the task until an administrator
or the source task record confirms it.

Completing one task does not remove another open hold on the same order or
ship group. Review the remaining holds before treating the order as
unblocked.

## Resolve one hold task

1. Complete the work described by the task.
2. Enter a `Resolution comment` when you need to record the outcome.
3. Select `Resolve task`.
4. Review the confirmation, then select `Resolve task` again.

The resolution comment is optional. Order Manager removes leading and trailing
spaces and saves a nonblank comment as an order note with the task completion.
It does not submit a blank comment.

`Resolve task` marks only this task complete. It does not perform the
corrective work described in the task.

## Resolve several hold tasks

1. Complete the work for every task that you plan to resolve.
2. Enter each task's `Resolution comment` before selecting the cards.
3. Select `Select`.
4. Load any additional tasks that you want to include. The header checkbox
   selects only the cards that are currently loaded.
5. Select the individual cards, or use the header checkbox to select all loaded
   cards.
6. Select `Resolve`.
7. Confirm the selected task count.

Order Manager attempts to complete every selected task independently and
includes each card's nonblank resolution comment.

## Recover from an error

After bulk resolution, Order Manager reports completed and failed task counts,
then reloads the queue. Tasks that still remain need another review.

Re-enter the resolution comment on a remaining task before trying again. A
comment that was not saved is lost when the queue reloads.

During the first load, the page shows a progress indicator. A refresh keeps the
existing cards visible and shows a progress bar. If the first request fails,
select `Retry`. If filters return no matches, select `Clear filters`. More tasks
load as you scroll.

## Create a hold task

When the unfiltered queue is empty and you have task-creation permission, select
`Find orders`. You can create a hold from an order's `Holds` section or select
orders in `Find orders` and choose `Add task`.

In `Order details`, enter a task name, choose a manual-hold or customer-request
option under `Task Purpose`, enter a description, and review the selected ship
groups. Order Manager initially selects every group.

`Find orders` does not provide that ship group picker. `Add task` creates one
task for every ship group in every selected order, so use it only when that
complete scope is intended.
