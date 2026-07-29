---
description: Correct or confirm shipping addresses for orders held by address validation.
---

# Bad address

Use `Bad address` to review orders held because their shipping address needs attention.

## Search, filter, and sort

Search by order name. Available filters are:

* `Sales channel`
* `Order date from`
* `Order date through`
* `Task created from`
* `Task created through`
* `Facility`
* `Shipping method`

Sort by task date, order date, or order total. The default is oldest task first.

## Review a task

Each card shows order and customer context, order total, task-created date, facility, shipping method, and a link to the full order.

Compare:

* `Original address`, which is read-only
* `Suggested address`, which can be edited

Choose `keep original` or `use suggested` before releasing the hold.

## Complete one task

Choose one of these card actions:

* `Save and release hold` validates the selected address, saves it, and releases the address hold.
* `Park` moves the order to the facility you select.
* `Cancel order` asks for confirmation before canceling.

## Complete multiple tasks

Select `Select`, choose the task cards, and use:

* `Save and release hold`
* `Cancel orders`
* `Park`

The app groups duplicate ship-group targets so the same fulfillment group is not processed twice. Review the completion message for partial failures.

## Page states

The page distinguishes first-load progress, retryable errors, filtered empty results, and an unfiltered empty queue. More tasks load as you scroll.
