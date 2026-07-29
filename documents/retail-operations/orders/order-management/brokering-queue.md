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
* `Order date thru`
* `Facility`

`Facility` supports multiple virtual facilities. Leave it on `All` to search across the available brokering locations. Use [Unfillable](unfillable-orders.md) for the unfillable location.

Use `Clear` to reset the search and facility selection.

## Read the list

Each row shows:

* Customer name and order identity
* Allocation summary
* Carrier or shipping method and sales channel
* Order date and relative age
* Estimated-delivery date and relative deadline

Select a row to open [Order details](view-order-details.md).

## Select orders

Select `Select` to work with multiple loaded orders:

* `Cancel open items`
* `Edit shipping method`
* `Add task` creates one task for each fulfillment group in the selected orders.

Select `Done` to clear the selection and leave select mode.

## List states

The page loads up to 50 results at a time and appends more as you scroll.

`No orders awaiting brokering` means the request completed but the selected virtual facilities and filters contain no matching orders. An error message means the request failed and should not be treated as an empty queue.
