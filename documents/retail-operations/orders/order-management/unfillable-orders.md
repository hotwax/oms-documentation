---
description: Investigate unfillable ship groups and choose a verified next action.
---

# Unfillable

Use `Unfillable` to review created, approved, or held orders with items in the Unfillable parking location. These orders need investigation because routing could not assign one or more ship groups to a fulfillment facility.

## Decide the next action

Before selecting an action, open `Order details` and answer:

* Does the order have an unresolved hold or task?
* Are only some items unfillable while other items are already allocated?
* Does the shipping method need correction?
* Should every remaining virtual ship group use the same routing group?
* Has the business approved cancellation of every remaining open item?

Order Manager includes held orders in this queue, but their presence does not prove that every held order is eligible for routing. Review blocking holds before using `Broker selected`.

## Find the orders to review

Search by order, external ID, customer, or email. Narrow the list with:

* `Sales channel`
* `Shipping method`
* `Order date from`
* `Order date thru`

Filters apply as you change them; search updates after a short delay. `Funnel` opens this queue without a date filter. Select `Clear` to reset the search, filters, dates, and selection.

If you change the Product Store while this page is open, reload or reopen `Unfillable` before selecting orders. The existing results do not automatically reload, while `Broker selected` uses the newly selected store.

Use order dates, row age, and delivery deadline to prioritize older or time-sensitive work. Use shipping method or sales channel when the same routing issue affects a known service or source.

## Read an order row

Each row shows:

* Customer name, order name, internal order ID, and status.
* The Unfillable facility chip.
* `X/Y items brokered`, where X is the number of item records already assigned to physical facilities and Y is the total item-record count available to the row.
* Carrier and shipping method, with sales channel underneath.
* Order date and relative age.
* Estimated delivery date and its upcoming or overdue label.

The brokered fraction is important on this page. An order can be partly allocated while only its remaining items are Unfillable.

Select a row outside `Select` mode to open [Order details](view-order-details.md). In `Select` mode, selecting the row adds or removes the order from the bulk selection.

## Select the correct scope

1. Select `Select`.
2. Choose individual orders, or use the header checkbox for all currently loaded results.
3. Confirm that the same action applies to every chosen order.
4. Select `Done` to leave select mode and clear the selection.

The page loads 50 orders at a time. The header checkbox does not select results that have not loaded. Scroll until the loaded count matches the total before selecting the complete filtered population.

## Broker selected ship groups

Use `Broker selected` only when every virtual or unassigned ship group returned for the selected orders should use the same routing group. Presence in this queue does not prove that every returned group is lifecycle-eligible.

1. Confirm one specific product store in the menu. Brokering cannot run with `All` as the store.
2. Select the orders.
3. Select `Broker selected`.
4. Choose a routing group configured for the product store.
5. Select the save icon.
6. Read the success and failure messages as **ship group counts**, not order counts.
7. Open each selected order and review its ship groups before retrying failures.

The app loads every selected order's ship groups and submits each returned virtual or unassigned ship group to the chosen routing group. If it finds no virtual ship groups, it does not run routing.

Each ship group is attempted independently. Some can succeed while others fail. After any success, the page clears the selection and refreshes the queue. An order can remain in Unfillable when another ship group still needs work.

The result messages do not identify which ship groups failed. Use `Order details` to find the remaining virtual groups before retrying. If the routing-group dialog says `No routing groups found`, close and reopen it after confirming the Product Store. The dialog has no separate reload action, and the same message can appear when loading routing groups fails.

## Cancel open items

Use `Cancel open items` only after the business has approved cancellation.

{% hint style="warning" %}
Cancellation cannot be undone. It cancels every item that is not already completed or canceled across all ship groups in each selected order, not only the Unfillable items.
{% endhint %}

1. Select the orders.
2. Select `Cancel open items`.
3. Review the selection count and select `Confirm`.
4. Wait for the result message.
5. Open each order and confirm which items were canceled.

The confirmation shows the selected order count, but the success message does not report how many items changed. If one request fails, another selected order may already have changed. Verify every selected order before retrying.

## Edit the shipping method

Use `Edit shipping method` only when the same carrier and method correction applies to every selected order.

1. Select the orders.
2. Select `Edit shipping method`.
3. Select a carrier, then select one of its available shipping methods.
4. Select the save icon.
5. Open each order and confirm the updated carrier and method before brokering again.

Changing the carrier clears the selected method. The current bulk result does not report per-order failures and can show success when one or more updates failed.

## Add a task

Use `Add task` when the selected orders need manual investigation instead of immediate routing or cancellation.

1. Select the orders.
2. Select `Add task`.
3. Enter a required task name.
4. Select a manual-hold or customer-request purpose.
5. Enter a required description.
6. Select the save icon.
7. Review `Holds` in each affected order.

The same task details create one task for every ship group in every selected order. Creating a task does not prove that the order status changed. After an error, check for created tasks before retrying.

## Interpret list states

The header shows loaded orders out of total matching orders. More results append as you scroll.

* `No unfillable orders` means a successful request found no order matching the current filters.
* `Could not load orders` means the request failed.
* A failure while loading more results can replace the loaded list with the error state.

Reload or change and reapply a filter before treating an error as a zero. For repeated brokering failures, report the product store, routing group, order IDs, and ship group IDs to an administrator.
