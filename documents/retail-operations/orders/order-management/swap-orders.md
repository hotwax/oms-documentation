---
description: Replace unavailable items and resolve held fulfillment groups.
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

* Remove a selected substitute and mark the original item for cancellation
* Undo an item cancellation
* Review substitute availability
* Change the suggested refund when the release includes a substitute
* Compare the original and new totals

Use `View order` when you need the complete order record.

## Work one task

* `Release updated order` applies the proposed substitutions and item cancellations, then completes the task. The app submits the edited refund only when the release includes at least one substitute.
* `Park` moves the affected fulfillment group to the facility you select and releases inventory committed to its other items. Parking does not resolve the task.
* `Cancel order` asks for confirmation, cancels the items in the task's fulfillment group, and cancels the task. It does not necessarily cancel the entire order.

## Complete multiple tasks

Select `Select`, choose the task cards, and use:

* `Cancel orders` cancels the affected fulfillment-group items and cancels their tasks.
* `Park` moves the affected fulfillment groups and completes their tasks.

The app groups duplicate ship-group targets before processing. Review the completion message for partial failures.

## Configure substitutes from an empty queue

When the unfiltered queue has no tasks, the setup panel can show products that need substitute configuration. Depending on your permissions, you can manage substitute relationships and rebroker orders for a configured product.

## Page states

The page distinguishes initial loading, a refresh over existing cards, retryable errors, filtered empty results, and the unfiltered setup state. More tasks load as you scroll.
