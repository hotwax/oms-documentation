---
description: Replace unavailable items and release, park, or cancel held orders.
---

# Swap

Use `Swap` to review orders held because one or more items are unavailable and the order needs a replacement decision.

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

## Review and update a task

Each card shows order and customer context, task progress, routing context when available, ordered items, and suggested items.

For an unavailable item, open its options to choose a substitute or cancel that item. You can:

* remove a selected substitute
* undo an item cancellation
* review substitute availability
* change the suggested refund
* compare the original and new totals

Use `View order` when you need the complete order record.

## Complete one task

* `Release updated order` applies the proposed item and refund changes, then releases the order.
* `Park` moves the order to the facility you select.
* `Cancel order` asks for confirmation before canceling.

## Complete multiple tasks

Select `Select`, choose the task cards, and use:

* `Cancel orders`
* `Park`

The app groups duplicate ship-group targets before processing. Review the completion message for partial failures.

## Configure substitutes from an empty queue

When the unfiltered queue has no tasks, the setup panel can show products that need substitute configuration. Depending on your permissions, you can manage substitute relationships and rebroker orders for a configured product.

## Page states

The page distinguishes initial loading, a refresh over existing cards, retryable errors, filtered empty results, and the unfiltered setup state. More tasks load as you scroll.
