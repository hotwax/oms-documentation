---
description: Triage created and approved orders waiting in brokering virtual locations.
---

# Brokering queue

Use `Brokering queue` to review created or approved orders with items waiting in brokering virtual locations. The queue can include orders waiting for their first routing attempt and work returned after a facility rejection.

The default `All` facility selection includes the configured brokering locations but excludes Unfillable and General Operations archive locations. If the app cannot load the configured locations, it falls back to the standard awaiting-brokering and rejected locations.

{% hint style="info" %}
This page does not provide a manual brokering action. `Broker selected` exists only in [Unfillable](unfillable-orders.md) and applies only to orders already returned to that queue. You cannot send an order listed here through that action.
{% endhint %}

## Confirm the store and scope

1. Confirm the product store shown in the menu.
2. Check whether `Funnel` opened the queue with a facility already selected.
3. Decide whether you need to investigate one order or apply the same bulk action to several orders.

If you change the product store while this page is already open, reload or reopen the queue before acting on the results.

## Find the work to review

Search by order, external ID, customer, or email. Additional filters include:

* `Sales channel`
* `Shipping method`
* `Order date from`
* `Order date thru`
* `Facility`

Filters apply as you change them; there is no `Apply` button. Search updates after a short delay. Results are ordered newest first.

Use filters based on the question you are answering:

* Select one or more `Facility` values to isolate a brokering or rejection location.
* Use order dates and the relative age in each row to investigate older work.
* Use `Shipping method` with the delivery deadline to review time-sensitive services.
* Search for an order or customer when you are following up on a known exception.

`Facility` supports multiple virtual locations. Selecting `All` clears specific choices. If you clear the last specific location, the page returns to `All`.

Select `Clear` to reset the search, sales channel, shipping method, both dates, selection, and facility filter.

## Read an order row

Each row shows:

* Customer name, order name, internal order ID, and order status.
* A facility chip for the queue location containing the largest number of matching items. `+N` means that the order also has items in other selected queue locations.
* `X/Y items brokered`, where X is the number of item records assigned to physical facilities and Y is the total item-record count available to the row.
* Carrier and shipping method, with sales channel underneath.
* Order date and relative age.
* Estimated delivery date with an upcoming or overdue label. `No estimated delivery date` means that the row does not have one to display.

Use the allocation fraction to distinguish an order with no assigned items from one with only some assigned items. Use the age and delivery deadline to decide what to inspect first.

Select a row outside `Select` mode to open [Order details](view-order-details.md). In `Select` mode, selecting the row adds or removes the order from the bulk selection.

## Select the correct scope

1. Select `Select`.
2. Choose individual orders, or use the header checkbox to choose all currently loaded results.
3. Compare the selected count with the work you intended to change.
4. Select `Done` to leave select mode and clear the selection.

The header checkbox does not select results that have not loaded yet. The page loads 50 orders at a time. To apply an action to the complete filtered population, scroll until the loaded count matches the total, then select all.

## Cancel open items

Use `Cancel open items` only when the selected orders should no longer be fulfilled.

{% hint style="warning" %}
Cancellation cannot be undone. It cancels every item that is not already completed or canceled across all ship groups in each selected order. It does not target only the item shown in the current queue location.
{% endhint %}

1. Select the orders.
2. Select `Cancel open items`.
3. Review the number of selected orders and select `Confirm`.
4. Wait for the result message and list refresh.
5. Open each affected order and confirm which items were canceled.

The confirmation shows the selected order count, but the success message does not report how many items changed. An order with no cancellable items can still be submitted. If one request fails, other selected orders may already have changed. After either a success or failure message, inspect every selected order before retrying.

## Edit the shipping method

Use `Edit shipping method` only when the same carrier and method correction applies to every selected order.

1. Select the orders.
2. Select `Edit shipping method`.
3. Select a carrier.
4. Select one of the shipping methods available for that carrier.
5. Select the save icon.
6. Open `Order details` for each order and confirm the new carrier and method.

Changing the carrier clears the selected method. The result does not identify per-order failures and can show success when one or more updates failed. Treat `Order details`, not the message, as confirmation.

## Add a task

Use `Add task` when the same manual follow-up applies to every ship group in the selected orders.

1. Select the orders.
2. Select `Add task`.
3. Enter a required task name.
4. Select a manual-hold or customer-request purpose.
5. Enter a required description.
6. Select the save icon.
7. Open the affected orders and review `Holds` before creating another task.

The app creates one task for every ship group in every selected order. Creating a task does not prove that the order status changed or that the order left the Brokering queue. If submission fails, check for any tasks that were created before retrying to avoid duplicates.

## Interpret list states

The header shows the number of loaded orders and the total number matching the filters. More results append as you scroll.

* `No orders awaiting brokering` means a successful request found no matches for the selected locations and filters.
* `Could not load orders` means the request failed and should not be treated as an empty queue.
* If loading another page fails, the error can replace the loaded list.

Reload the page or change and reapply a filter before treating an error as a zero. If a configured location is missing, confirm the product store and facility filter, then report the store, facility, filters, and a sample order ID to an administrator.
