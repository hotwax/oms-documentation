---
description: Select, rank, and apply fallback actions to fulfillment facilities.
---

# Configure routing rules

A routing rule defines which fulfillment facilities are eligible, how the routing engine ranks them, and what happens to items that remain unavailable. Add rules in a sequence that starts with your preferred fulfillment strategy and gradually broadens the search.

## Add a routing rule

1. Open a routing group and select a routing.
2. Click `Add routing rule`.
3. Enter a name that describes the facility strategy, such as `Nearby warehouses`.
4. Configure the rule, then click the page-level `Save`.

A new routing rule starts in `Draft` status. Change it to `Active` after you complete its filters, sort options, and unavailable-item action.

## Sequence routing rules

Drag routing rules to change their position. The routing engine attempts active rules from top to bottom.

A common sequence starts with nearby warehouses, expands to nearby stores and warehouses, removes the distance limit, and allows partial allocation only in the final rule.

## Manage a routing rule

Select a routing rule to manage it:

* Click `Rename` to change its name.
* Change `Status` to `Active` when the rule is ready for use.
* Change `Status` to `Draft` while you revise it.
* Change `Status` to `Archived` to remove it from the active sequence.
* Open `Archived` below the routing rule list to review or restore archived rules.

These actions update the working copy. Click the page-level `Save` after you finish.

## Filter eligible facilities

Select a routing rule, then use `Filters` to control which facilities can supply inventory.

| Filter | Use |
| --- | --- |
| `Group` | Include or exclude facilities in a selected facility group. |
| `Proximity` | Limit facilities to a distance from the customer's shipping address. Select miles or kilometers, then enter the distance. |
| `Safety stock` | Select `greater` or `greater than or equal to`, then enter the stock quantity that a facility must retain. |
| `Week of Supply` | Set the coverage period used to calculate the Week of Supply ranking. |
| `Turn off the facility order limit check` | Ignore a facility's fulfillment-capacity limit for this rule. |
| `Shipment threshold check` | Require each split allocation and unavailable remainder to meet the configured value. |

Filters shown in your environment depend on the routing services and enumeration configuration deployed with HotWax Commerce.

{% hint style="info" %}
A routing rule without a facility filter can consider every facility that is enabled for online fulfillment.
{% endhint %}

## Sort eligible facilities

Use `Sort` to rank facilities that pass the filters.

| Sort option | Typical use |
| --- | --- |
| `Proximity` | Try the nearest facility first. |
| `Inventory balance` | Try the facility with the most inventory available for allocation first. |
| `Sales velocity` | Try slower-moving facilities before faster-moving facilities. |
| `Week of Supply` | Try facilities with deeper inventory coverage first. |
| `Custom sequence` | Follow a configured facility sequence. |

Available sort options depend on your deployment. See [Route by weeks of supply](weeks-of-supply-routing.md) before you use the Week of Supply sort.

If you add more than one sort option, drag them into the required priority order.

If you do not add a sort option, the routing engine ranks facilities by the number of order items available above the configured threshold, then by availability percentage, and then by facility ID.

## Configure partial allocation

Use the `Partially available` settings to control order splitting:

* Turn on `Allow partial allocation` when this rule can allocate only the available items or quantities.
* Turn on `Partially allocate grouped items` when grouped items can also split. This control is available only when partial allocation is allowed and the routing configuration supports grouped-item splitting.

When the selected routing uses a `Promise date` filter, the app requires partial allocation because the routing processes matching items rather than the complete order.

Allowing partial allocation can increase the number of shipments. Review your [additional routing settings](additional-settings.md) before you enable it.

## Configure unavailable-item actions

Use the `Unavailable items` settings to decide what happens after a rule cannot allocate an item.

| Setting | Result |
| --- | --- |
| `Move items to` → `Next rule` | Passes unavailable items to the next active routing rule. |
| `Move items to` → `Queue` | Moves unavailable items to the selected virtual queue for another process. |
| `Clear auto cancel days` | Removes a previously applied auto-cancel date. |
| `Auto cancel days` | Applies an auto-cancel date after the selected number of days. |

Use `Next rule` on intermediate rules. On the final rule, move remaining items to the queue used by your exception or retry process.

<figure><img src="../../.gitbook/assets/order-routing-rule-configuration.jpg" alt="Selected routing rule with facility filters, sort options, partial-allocation controls, and unavailable-item actions"><figcaption><p>Review facility eligibility, ranking, split behavior, and the fallback action in one routing rule.</p></figcaption></figure>

{% hint style="warning" %}
Click the page-level `Save` after you add, reorder, rename, archive, change status, or edit a routing rule. These changes remain in the working copy until you save the routing group.
{% endhint %}

## Build a fallback sequence

The following pattern broadens facility eligibility while limiting splits:

| Sequence | Facility strategy | Sort | Unavailable-item action |
| --- | --- | --- | --- |
| 1 | Preferred warehouses within a short distance | `Proximity` | `Next rule` |
| 2 | All fulfillment facilities within the same distance | `Proximity` | `Next rule` |
| 3 | All fulfillment facilities within a wider distance | `Proximity` | `Next rule` |
| 4 | All online fulfillment facilities | `Proximity` | `Next rule` |
| 5 | All online fulfillment facilities with partial allocation | `Proximity` | Exception queue |

Adjust the distances, facility groups, split policy, and final queue to match your service-level and cost requirements.
