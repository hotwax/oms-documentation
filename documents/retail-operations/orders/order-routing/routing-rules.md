---
description: Select and sequence the orders that a routing attempts.
---

# Configure routings

A routing selects a set of orders within a routing group and controls the order in which the routing engine attempts them. Add separate routings when order types need different selection or facility strategies but can run on the same group schedule.

For example, one routing group can contain a routing for same-day orders and another for standard orders. Both run on the group's schedule, but each can use different order filters, order sorting, and routing rules.

## Add a routing

1. Open a routing group.
2. Click `New` next to `Routings`.
3. Enter a routing name.
4. Click `Save` in the dialog.
5. Configure the routing, then click the page-level `Save`.

A new routing starts in `Draft` status.

## Sequence routings

Drag a routing to change its position in the `Routings` column. The routing engine evaluates active routings in this sequence.

Place a narrow, high-priority routing before a broad routing. For example, place a same-day routing before a standard routing so urgent orders are considered first.

## Filter orders

Select a routing, then use `Filters` to define which orders it attempts.

| Filter | Use |
| --- | --- |
| `Product Category` | Include or exclude orders that contain products in selected categories. |
| `Queue` | Include or exclude orders from selected virtual queues. |
| `Shipping method` | Include or exclude orders by promised shipping method. |
| `Order priority` | Include or exclude orders by priority. |
| `Promise date` | Select orders by their promise-date cutoff. |
| `Sales Channel` | Include or exclude orders from selected sales channels. |
| `Origin Facility Group` | Include or exclude orders placed from facilities in a selected group. |

Use the exclusion option when it is shorter and safer to omit one value than to maintain a long inclusion list.

{% hint style="info" %}
A routing without order filters attempts orders from all parkings. Add an explicit `Queue` filter when the routing must apply to one parking or processing flow.
{% endhint %}

## Sort orders

Use `Sort` to control the sequence in which matching orders are attempted.

| Sort option | Typical use |
| --- | --- |
| `Ship by date` | Attempt orders with the earliest ship-by date first. |
| `Ship after date` | Sequence orders by the date after which they can ship. |
| `Order date` | Attempt older orders first. |
| `Shipping method` | Prioritize shipping methods by their configured delivery days. |
| `Order priority` | Attempt higher-priority orders first. |

If you add more than one sort option, drag them into the required priority order.

If you do not add a sort option, the routing engine sequences matching orders by order date.

<figure><img src="../../.gitbook/assets/order-routing-filters-sort.jpg" alt="Selected routing with order filters and sort options in the routing group workspace"><figcaption><p>Select a routing to review which orders it includes and the sequence in which they are attempted.</p></figcaption></figure>

## Manage a routing

Select a routing to use its management actions:

* Click `Rename` to change its name.
* Click `Clone` to add a copy to the current routing group.
* Review `Last run` to see the most recent routing attempt.
* Change `Status` to `Active` when the routing is ready for use.
* Change `Status` to `Draft` while you revise it.
* Change `Status` to `Archive` to remove it from the active sequence. Open `Archived` to review or restore archived routings.

{% hint style="warning" %}
Click the page-level `Save` after you add, reorder, clone, rename, archive, or edit a routing. These changes remain in the working copy until you save the routing group.
{% endhint %}

## Add facility selection logic

After you select the orders, add one or more [routing rules](inventory-rules.md) to choose and sequence eligible fulfillment facilities.
