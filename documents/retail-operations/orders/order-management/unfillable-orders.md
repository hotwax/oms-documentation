---
description: Review orders that could not be brokered and choose their next action.
---

# Unfillable

Use `Unfillable` to review created, approved, or held orders that could not be brokered to a fulfillment facility.

## Search and filter

Search by order, external ID, customer, or email. Narrow the list with:

* `Sales channel`
* `Shipping method`
* `Order date from`
* `Order date through`

The Funnel can open this page with a starting date already applied.

## Read the list

Rows show customer and order identity, allocation summary, fulfillment context, order age, and the estimated-delivery deadline when available.

Select a row to open [Order details](view-order-details.md).

## Select orders

Use `Select` to choose one or more loaded orders. Available actions depend on your permissions:

* `Broker selected` opens routing-group selection and attempts to broker eligible ship groups.
* `Cancel open items` asks for confirmation before canceling eligible items.
* `Edit shipping method` applies a selected method to eligible ship groups.
* `Add task` creates an order task.

The app reports how many orders or ship groups succeeded and failed. Review failures before assuming the entire selection was updated.

## List states

The page loads up to 50 results at a time and appends more as you scroll.

`No unfillable orders` means the request completed and no order matched the current search and filters. A loading or error state is not a zero count.
