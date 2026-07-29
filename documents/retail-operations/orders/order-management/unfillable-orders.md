---
description: Review orders after brokering fails and choose their next action.
---

# Unfillable

Use `Unfillable` to review created, approved, or held orders after the order management system could not broker them to a fulfillment facility.

## Search and filter

Search by order, external ID, customer, or email. Narrow the list with:

* `Sales channel`
* `Shipping method`
* `Order date from`
* `Order date thru`

## Read the list

Rows show customer and order identity, allocation summary, fulfillment context, order age, and the estimated-delivery deadline when available.

Select a row to open [Order details](view-order-details.md).

## Select orders

Use `Select` to choose one or more loaded orders:

* `Broker selected` opens routing-group selection and attempts to broker eligible ship groups.
* `Cancel open items` asks for confirmation before canceling eligible items.
* `Edit shipping method` applies a selected method to eligible ship groups.
* `Add task` creates one task for each fulfillment group in the selected orders.

`Broker selected` reports how many fulfillment groups succeeded and failed. Review those counts before assuming the entire selection was brokered.

## List states

The page loads up to 50 results at a time and appends more as you scroll.

`No unfillable orders` means the request completed and no order matched the current search and filters. A loading or error state is not a zero count.
