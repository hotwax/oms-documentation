---
description: Review order risk information and resolve or cancel fraud-review tasks.
---

# Fraud

Use `Fraud` to review orders that have an open fraud-review task.

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

Sort by task date, order date, order total, risk severity, or recommendation. The default is oldest task first.

## Review a task

Each card shows:

* Order and customer context
* Order total and task-created date
* Ordered items
* Payment methods and payment statuses
* Suggested risk action
* Risk-increasing facts and sentiment counts

Select `View details` to open the complete risk assessment, or use `View order` to open the order record.

## Complete one task

* `Resolve task` completes the fraud-review task.
* `Cancel order` asks for confirmation before canceling the order.

## Complete multiple tasks

Select `Select`, choose the task cards, and use:

* `Resolve`
* `Cancel orders`

Order Manager groups work by order before canceling. Review the completion message for partial failures.

## Page states

The page keeps existing cards visible during a refresh and shows a progress bar. Initial-load failures provide `Retry`, and an empty-state message appears only after a successful request returns no tasks.
