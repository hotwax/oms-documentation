---
description: Review the current open-order workload and cancel eligible orders.
---

# Open orders

Use `Open` to review the current open-order workload for the selected product store.

## Search and filter

Search by order name, order ID, or external ID. Available filters are:

* `Priority`
* `Sales channel`
* `Facility`
* `Shipping method`
* `Order date from`
* `Order date through`

Use `Clear` to restore the default filter values.

## Read the list

Each row shows customer and order identity, allocation summary, carrier or shipping method, sales channel, order age, and the estimated-delivery deadline when available.

Select a row to open [Order details](view-order-details.md).

## Cancel orders

1. Select `Select`.
2. Choose individual orders or use the header checkbox to select all currently loaded results.
3. Select `Cancel`.
4. Confirm the cancellation.

Order Manager cancels eligible open items and refreshes the queue. Review the success or error message before continuing.

## List states

Additional results load as you scroll. `No open orders` means the request completed but no order matched the current product store and filters.
