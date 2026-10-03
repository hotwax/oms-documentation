---
description: Replace unavailable items and resolve held ship groups.
---

# Swap

Use `Swap` to replace unavailable items, cancel items without a replacement, or
move the affected ship group.

Orders enter this queue when an allocated item cannot reserve inventory and
needs a substitute decision.

## Understand this task

Each card is one ship group substitution task. Releasing the proposal completes only that task, so review [Order details](view-order-details.md) for other open work on the order.

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
task created filters to find swap tasks created during a date range. A through
date includes the complete selected day.

Sort by task date, order date, or order total. The default, `Oldest task first`,
puts the swap tasks that have waited longest at the top. Select `Clear filters`
to return to the complete queue.

## Read a swap task

The card header shows the order name, order date, order grand total, and task
age. The amount is for the complete order, not only the ship group under
review. Hover over the task-age badge to view the exact task-created timestamp.

Use the copy controls beside the customer name, phone number, and email address
when you need to contact the customer. Select `View order` to review the
complete order.

When routing details are available, the card shows:

* `Brokered` when the ship group is at a physical facility
* `Not Brokered` when the ship group has no facility or is at a virtual
  facility
* The displayed current or moved-to facility
* The routing group, order routing, and rule path
* The displayed routing or last-updated time and justification

The `Ordered items` section marks items that need a decision as `Unavailable`.
The `Suggested items` section shows the proposed result:

* `Approved swap` identifies an available replacement.
* `Available: n` shows the replacement inventory at the task facility.
* `No replacement in stock` means release will cancel the unavailable item
  unless you choose another available product.
* `New total` shows the current on-screen proposal calculation.
* `Suggested refund` shows the proposed refund for a release that contains a
  substitute.

## Decide how to handle an unavailable item

1. Open the unavailable item's options.
2. Choose an action:
   * Select `Cancel item` to include the item as a cancellation.
   * Select `Custom swap` to choose a replacement.
   * Select `View inventory` to review inventory for the item.
3. Review the updated proposal in `Suggested items`.

To choose a custom replacement:

1. Select `Custom swap`.
2. Use `Product Search` to search by product name or SKU, or open
   `Substitute Products` to review approved replacements.
3. Select a product with available inventory at the task facility. Products
   without positive availability cannot be selected.
4. Select the save icon.

Closing an automatically suggested replacement changes the proposal to
`Cancel`. Select `Undo` to restore the approved replacement when it is still
available. `Undo` is not available for `No replacement in stock`. Release still
cancels that item unless you select an available custom replacement.

### Replace or discard a custom swap

The close control does not remove a custom swap in the current app. To change
the selection, open `Custom swap` again and choose another product. To discard
an unreleased custom swap, refresh the page. Do not select
`Release updated order` until the proposal shows the intended product.

## Review the total and refund

Compare the order total with `New total`. Order Manager calculates
`Suggested refund` from the current proposal.

`New total` is not a reliable post-release total when the proposal contains
`Cancel` or `No replacement in stock`; the displayed calculation can retain the
original price of an item that release later cancels. Verify the reloaded order
total after release.

Edit `Suggested refund` only when the release contains at least one substitute.
Order Manager submits a positive refund value with a swap. A release that only
cancels items does not submit this field as part of the swap.

The refund input and displayed proposal totals are formatted as United States
dollars (USD). Do not use this workflow to confirm a refund for an order in
another currency.

## Release the updated ship group

1. Review every row under `Suggested items`.
2. Confirm which items will be replaced and which items show `Cancel`.
3. Review `New total` and `Suggested refund`.
4. Select `Release updated order`.

This action does not show a confirmation. Order Manager applies substitutes,
then cancels items marked `Cancel` or `No replacement in stock`, and finally
completes the task.

If there are no replacements or cancellations to apply, Order Manager shows
`No changes to apply` and leaves the task open.

## Park one swap task

Use card-level parking when the ship group must move but the swap task
still needs a later decision.

1. Select `Park`.
2. Review the warning and select `Park order`.
3. Enter a virtual parking facility name or ID, then press Enter to search.
4. Select a facility, then select the save icon.

Card-level parking moves this ship group to the selected facility and
releases inventory committed to its other items. It does not resolve the swap
task.

## Cancel the affected ship group

Select `Cancel order` when the items represented by this swap task should not be
fulfilled.

1. Select `Cancel order`.
2. Review the confirmation. The action cannot be undone.
3. Select `Cancel order` again to continue.

Despite the button label, this action cancels only the task items in the
affected ship group and then cancels the swap task. Other ship groups on the
same order are not included.

## Complete several swap tasks

Bulk mode supports cancellation and parking. It does not apply item-level swap
decisions.

1. Select `Select`.
2. Load any additional tasks that you want to include. The header checkbox
   selects only the cards that are currently loaded.
3. Select the individual cards, or use the header checkbox to select all loaded
   cards.
4. Choose a bulk action:
   * `Cancel orders` confirms the number of distinct ship groups,
     cancels their task items, and cancels every selected task.
   * `Park` opens the facility picker, moves each distinct ship group,
     and completes every selected task.

Bulk `Park` is different from card-level `Park`: bulk parking completes the
selected tasks. Select a facility, then select the save icon to start the
operation without the separate card-level parking warning.

If duplicate selected tasks point to the same ship group, Order Manager
changes the group once and updates the status of every selected task.

## Configure substitutes from an empty queue

When the unfiltered queue has no tasks, Order Manager can show the
`Set up substitutes for unfillable products` panel. A filtered empty result only
shows the option to clear filters.

To configure and rebroker an unfillable product:

1. Select one specific Product Store. `All` cannot run rebrokering. The setup
   panel lists up to 50 approved unfillable products, ordered by affected-item
   count, and does not provide another page.
2. Select `Link substitutes` or `Manage substitutes` when you have
   substitute-management permission. Without that permission, select
   `Open in Products`.
3. Search by product name, SKU, or product ID.
4. Select one or more products that can replace the unfillable item. Order
   Manager excludes the source product from the results.
5. Remove any relationships that are no longer valid, then select the save
   icon.
6. Select `Rebroker orders`. This action is available only when the product has
   at least one active substitute.
7. Select the routing group.
8. Select the save icon to start rebrokering.

Order Manager submits the remaining unfillable ship groups for that
product and reports successful and failed group counts. Orders that still cannot
reserve inventory return as swap tasks.

## Recover from an error

If `Release updated order` reports a failure, select `View order` or refresh the
queue before trying again. A substitution or cancellation can succeed before a
later step fails, leaving the task open after part of the proposal was applied.

After a bulk action, Order Manager reports completed and failed task counts,
then reloads the queue. These messages count task records, while a cancellation
confirmation counts distinct ship groups.

During the first load, the page shows a progress indicator. A refresh keeps the
existing cards visible and shows a progress bar. If the first request fails,
select `Retry`. More tasks load as you scroll.
