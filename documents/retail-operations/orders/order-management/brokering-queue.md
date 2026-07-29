---
description: Review created and approved orders waiting in configured virtual facilities.
---

# Brokering queue

Use `Brokering queue` to review created or approved orders waiting in configured virtual facilities. Orders rejected by a fulfillment facility can also return to this workload.

## Search and filter

Search by order, external ID, customer, or email. Additional filters include:

* `Sales channel`
* `Shipping method`
* `Order date from`
* `Order date through`
* `Facility`

`Facility` supports multiple virtual facilities. Leave it on `All` to search across the available brokering locations. The unfillable location is handled separately on [Unfillable](unfillable-orders.md).

Use `Clear` to reset the search and facility selection.

## Read the list

Each row shows:

* customer name and order identity
* allocation summary
* carrier or shipping method and sales channel
* order date and relative age
* estimated-delivery date and relative deadline

Select a row to open [Order details](view-order-details.md).

## Select orders

Select `Select` to work with multiple loaded orders. Available actions depend on your permissions:

* `Cancel open items`
* `Edit shipping method`
* `Add task`

Select `Done` to clear the selection and leave select mode.

## List states

The page loads up to 50 results at a time and appends more as you scroll.

`No orders awaiting brokering` means the request completed but the selected virtual facilities and filters contain no matching orders. An error message means the request failed and should not be interpreted as an empty queue.
