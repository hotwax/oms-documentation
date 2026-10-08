---
description: Review order risk information and resolve fraud-review tasks.
---

# Fraud

Use `Fraud` to review the payment and risk information for orders that need a
fraud decision.

Shopify orders appear in this queue when risk recommends `Investigate`, or when
risk recommends `Cancel` and automatic cancellation is turned off.

## Understand this task

Each card is one order-level fraud-review task, not an action already taken. Resolving it does not execute the recommendation or complete other tasks, so review [Order details](view-order-details.md) before deciding that the order is ready.

## Search, filter, and sort

Search by order name. Available filters are:

* `Sales channel`
* `Order date from`
* `Order date through`
* `Task created from`
* `Task created through`
* `Order status`
* `Risk recommendation`
* `Risk level`

Use the order date filters to find orders placed during a date range. Use the
task created filters to find fraud tasks created during a date range. A through
date includes the complete selected day.

Sort by task date, order date, order total, risk severity, or recommendation.
The default, `Oldest task first`, puts the fraud tasks that have waited longest
at the top. Select `Clear filters` to return to the complete queue.

## Read a fraud task

The card header shows the order name, order date, order grand total, and task
age. Hover over the task-age badge to view the exact task-created timestamp.
Use the copy controls beside the customer name, phone number, and email address
when you need to contact the customer.

Review the `Ordered items` section to confirm the products and quantities on the
order.

The `Payment` section shows each payment method, payment status, and amount.
Pending payment statuses are highlighted.

The `Risk analysis` section can show:

* `Suggested action`, which is the risk recommendation
* Risk-increasing facts
* The number of negative, neutral, and positive facts

The suggested action is guidance for your review. It is not an action that Order
Manager has already performed.

When facts are available, select `View details` to review each risk provider,
risk level, assessment date, and fact. The detail view lists negative facts
first, followed by neutral and positive facts. When no facts are available,
the sentiment counts and `View details` are not shown; review the other order
and payment evidence before resolving the task.

Select `View order` to review the complete order before making a decision.

## Resolve a fraud task

Use `Resolve task` only after you have reviewed the risk information and
completed any required follow-up.

1. Review the payment status, suggested action, and risk facts.
2. Select `View details` when you need the complete assessment.
3. Select `Resolve task`.

`Resolve task` does not show a confirmation. It immediately completes only the
fraud-review task. It does not execute the suggested action, cancel items,
approve the order, or change a payment status.

## Complete several fraud tasks

1. Select `Select`.
2. Load any additional tasks that you want to include. The header checkbox
   selects only the cards that are currently loaded.
3. Select the individual cards, or use the header checkbox to select all loaded
   cards.
4. Choose a bulk action:
   * `Resolve` immediately attempts to complete every selected fraud task. This
     action does not show a confirmation, execute a recommendation, or cancel
     order items.

Resolve only tasks whose review is complete. Other tasks on the same order remain open.

## Recover from an error

After a bulk action, Order Manager reports completed and failed task counts,
then reloads the queue. The result messages count task records.

If a fraud task remains after a failed action, select `View order` and check the current order and task state before retrying.

During the first load, the page shows a progress indicator. A refresh keeps the
existing cards visible and shows a progress bar. If the first request fails,
select `Retry`. If filters return no matches, select `Clear filters`. More tasks
load as you scroll.

When the unfiltered queue is empty, the page links to Shopify fraud analysis,
high-risk workflow configuration, and custom risk assessment guidance.
