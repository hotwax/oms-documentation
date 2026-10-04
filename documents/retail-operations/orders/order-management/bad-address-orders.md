---
description: Correct or confirm shipping addresses for orders held by address validation.
---

# Bad address

Use `Bad address` to correct or confirm shipping addresses that automatic address
validation could not verify.

## Understand this task

Each card is one ship group address task. Saving the correction completes only that task, so review [Order details](view-order-details.md) for other open work on the order.

## Confirm address-validation setup

Address validation must be configured for the selected product store before tasks
can appear in this queue. Order Manager currently supports FedEx address
validation through Unigate.

If the unfiltered queue is empty, select
`Configure address validation in Company` to review the carrier configuration.

## Search, filter, and sort

Search by order name. Available filters are:

* `Sales channel`
* `Order date from`
* `Order date through`
* `Task created from`
* `Task created through`
* `Facility`
* `Shipping method`

Use the order date filters to find orders placed during a date range. Use the task
created filters to find address tasks created during a date range. A through date
includes the complete selected day.

Sort by task date, order date, or order total. The default, `Oldest task first`,
puts the address tasks that have waited longest at the top. Select
`Clear filters` to return to the complete queue.

## Read an address task

The card header shows the order name, order date, order grand total, and task age.
The amount is for the complete order, not only the ship group under
review. Hover over the task-age badge to view the exact task-created timestamp.

Use the copy controls beside the customer name, phone number, and email address
when you need to contact the customer. The card also shows the current facility
and shipping method. Select `View order` to review the complete order before
making a decision.

Each task contains two address columns:

* `Original address` shows the ship group's current shipping address and cannot be edited in that column.
* `Suggested address` shows the validation result and can be edited.

The suggested address is selected by default.

## Correct and release an address

1. Compare `Address line 1`, `Address line 2`, `City`, `Postal code`,
   `State`, and `Country` in both columns.
2. Keep `use suggested` selected to accept the suggested address, or edit the
   suggested fields before release.
3. Select the country before the state. Changing the country clears the
   previously selected state.
4. Select `keep original` only when you have confirmed that the original
   address is correct.
5. Select `Save and release hold`.

`Address line 1`, `City`, `Postal code`, and `Country` are required. If a
required field is missing, Order Manager shows the missing-field message and
does not submit the change.

`Save and release hold` does not show a second confirmation. When the request
succeeds, Order Manager saves the selected address for this ship group
and completes the address task.

## Park one address task

Use card-level parking when the ship group must move but the address task
still needs a later decision.

1. Select `Park`.
2. Review the warning and select `Park order`.
3. Enter a virtual parking facility name or ID, then press Enter to search.
4. Select a facility, then select the save icon.

Card-level parking moves this ship group to the selected facility and
releases inventory committed to its other items. It does not resolve the
address task. Return to the task later to correct the address or cancel the
affected items.

## Cancel the affected ship group

Select `Cancel order` when the items represented by this address task should not
be fulfilled.

1. Select `Cancel order`.
2. Review the confirmation. The action cannot be undone.
3. Select `Cancel order` again to continue.

Despite the button label, this action cancels only the task items in the
affected ship group and then cancels the address task. Other ship groups on the
same order are not included.

## Complete several address tasks

1. Select `Select`.
2. Load any additional tasks that you want to include. The header checkbox
   selects only the cards that are currently loaded.
3. Review the address choice on every selected card.
4. Select the individual cards, or use the header checkbox to select all loaded
   cards.
5. Choose a bulk action:
   * `Save and release hold` confirms the number of distinct ship groups,
     applies one address decision to each group, and completes every
     selected task.
   * `Cancel orders` confirms the number of distinct ship groups,
     cancels their task items, and cancels every selected task.
   * `Park` opens the facility picker, moves each distinct ship group,
     and completes every selected task.

Bulk `Park` is different from card-level `Park`: bulk parking completes the
selected tasks. Select a facility, then select the save icon to start the
operation without the separate card-level parking warning.

If duplicate selected tasks point to the same ship group, Order Manager
changes the group once and updates the status of every selected task. Only the
first selected card's address choice is applied. Do not bulk-select duplicate
cards for the same ship group when their address choices conflict; work them
individually instead.

## Recover from an error

If a selected address is missing a required field, correct the field and submit
the task again.

After a bulk action, Order Manager reports completed and failed task counts,
then reloads the queue. These messages count task records, while the
confirmation counts distinct ship groups.

If a task remains after a failure, select `View order` and check the current
address, item, and task state before repeating the action. The address or item
change can succeed even when the task status does not update.

During the first load, the page shows a progress indicator. If the first request
fails, select `Retry`. If filters return no matches, select `Clear filters`.
More tasks load as you scroll.
