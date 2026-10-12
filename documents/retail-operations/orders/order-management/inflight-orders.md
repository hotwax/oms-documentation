---
description: Investigate the current Inflight workflow and avoid an unsupported bulk action.
---

# Inflight orders

Use `Inflight` to investigate orders returned by the current Inflight workflow.

The page describes these orders as having reached a fulfillment facility without being added to a picklist. `Funnel` uses a different `Picked` label for the same link. Confirm the actual order, ship group, and fulfillment state in [Order details](view-order-details.md) instead of inferring it from the queue name.

## Confirm the store and scope

1. Confirm the product store shown in the menu.
2. A facility row in `Funnel` opens this page with that facility. The top workflow link supplies no facility or date. If the page was already open, it can retain an earlier facility filter, so confirm or clear the filter.
3. Use the queue to find and inspect orders, not to create picklists.

If you change the product store while this page is open, reload or reopen `Inflight` before acting. This page does not automatically reload its results when the store setting changes.

## Find and prioritize orders

Search by order name, internal order ID, or external ID. Narrow the list with:

* `Priority`
* `Sales channel`
* `Facility`
* `Shipping method`
* `Order date from`
* `Order date through`

`Priority` distinguishes `High priority` from `Normal or no priority`. `Facility` lists physical facilities. The date range includes the complete `from` and `through` dates.

Filters apply as you change them; there is no `Apply` button. Search updates after a short delay. Use `Clear` to restore the default values.

Use `Facility` to isolate one fulfillment location. Combine priority, relative age, shipping method, and estimated delivery date to decide which orders need attention first.

## Read the list

Each row shows:

* Customer name, order name, and internal order ID.
* A physical-facility chip and `X/Y items brokered`, where X is the number of item records assigned to physical facilities and Y is the total item-record count available to the row.
* Carrier and shipping method, with sales channel underneath.
* Order date and relative age.
* Estimated delivery date with an upcoming or overdue label.

The row does not show an authoritative fulfillment status or whether a picklist exists. Select a row outside `Select` mode to open `Order details` and verify those details.

Use the allocation fraction only for orientation. If supporting item data fails to load, the row can fall back to an apparently complete `Y/Y` fraction.

## Understand selection scope

Select `Select` to choose individual orders or use the header checkbox for all currently loaded results. The header checkbox does not include results that have not loaded. Scroll until the loaded count matches the total before treating the selection as the complete filtered population.

Selection is stored by order ID. Select `Done` to leave select mode and clear the selection.

{% hint style="warning" %}
Do not use `Add to picklist`. It does not call a fulfillment service or create a picklist. The page can clear your selection and display an `Add to picklist: N orders` message even though no picklist was created. Neither result is confirmation.
{% endhint %}

## Continue through a supported fulfillment workflow

This page has no supported bulk outcome to document. For an order that needs a picklist:

1. Open `Order details` and confirm the order, ship group, facility, and current fulfillment state.
2. Review the selected facility's fulfillment release policy in [Funnel](funnel.md#manage-live-fulfillment-sync-configuration) when the work is waiting for scheduled or batched downstream release.
3. Use the approved pick-profile execution process outside this page. Order Manager does not provide a working manual action here.
4. Verify the resulting work in the [Fulfillment app](../../../store-operations/fulfillment/README.md) or [Picking app](../../../store-operations/fulfillment/picking-app.md).
5. Return to `Inflight` and reload the list if you need to continue triage.

If you select `Add to picklist`, do not repeat the action based on its message. Verify whether a picklist exists through the supported fulfillment workflow first.

## Interpret list states

The header shows loaded orders out of the total matching orders. More results append as you scroll.

`No inflight orders` can mean that the current filters returned no matches. A failed initial request can also leave the normal empty state visible. A failure while loading more results can leave the loaded count below the total, and missing customer or facility data can leave a row incomplete.

Reload the page or change and reapply a filter before treating an unexpected empty, stalled, or incomplete result as authoritative.
