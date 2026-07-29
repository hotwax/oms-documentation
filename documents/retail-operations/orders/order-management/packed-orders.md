---
description: Review packed orders awaiting carrier pickup and ship eligible orders.
---

# Packed orders

Use `Packed` to review orders that are packed and awaiting carrier pickup.

## Search and filter

Search by order name, order ID, or external ID. Available filters are:

* `Priority`
* `Sales channel`
* `Facility`
* `Shipping method`
* `Order date from`
* `Order date through`

## Read the list

Each row shows customer and order identity, allocation summary, carrier or shipping method, sales channel, order age, and the estimated-delivery deadline when available.

Select a row to open [Order details](view-order-details.md).

## Ship orders

1. Select `Select`.
2. Choose individual orders or use the header checkbox to select all currently loaded results.
3. Select `Ship orders`.

Order Manager identifies the eligible shipments for the selected orders, submits them for shipping, and refreshes the queue. Review the success or error message before assuming every selected order shipped.

## List states

Additional results load as you scroll. `No packed orders` means the request completed but no order matched the current filters.
