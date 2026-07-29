---
description: Review orders at a fulfillment facility that are not yet on a picklist.
---

# Inflight orders

Use `Inflight` to review orders that have arrived at a fulfillment facility but are not yet on a picklist.

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

## Select orders

Select `Select` to choose individual orders or all currently loaded results. Select `Done` to clear the selection.

{% hint style="warning" %}
The current page displays `Add to picklist`, but Order Manager does not yet submit that action to the fulfillment service. Do not use the button as confirmation that a picklist was created.
{% endhint %}

## List states

Additional results load as you scroll. `No inflight orders` means the request completed but no order matched the current filters.
