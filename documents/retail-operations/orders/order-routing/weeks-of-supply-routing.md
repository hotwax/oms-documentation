---
description: Protect high-demand stores and route from facilities with deeper inventory coverage.
---

# Route by weeks of supply

Use Week of Supply routing when you want to consider both available inventory and sales velocity. This strategy can protect inventory at stores with strong local demand while routing online orders from locations with deeper coverage.

For example, two stores may each have 20 units available. A store that sells 10 units each week has less inventory coverage than a store that sells 2 units each week. The second store can usually spare more inventory for online fulfillment.

## Understand the calculation

Add a positive `Week of Supply` value to a routing rule. HotWax Commerce calculates a score for each eligible facility:

```text
current inventory / (sales velocity / configured weeks) * 100
```

When you also select the `Week of Supply` sort, the routing engine attempts facilities with the highest score first. Facilities without a score follow facilities with a score.

{% hint style="info" %}
The sort requires a positive `Week of Supply` filter value. If the value is missing or is not positive, the routing engine does not apply the Week of Supply sort.
{% endhint %}

## Compare inventory-based sort options

| Sort option | What it considers | Use it to |
| --- | --- | --- |
| `Inventory balance` | Inventory available for allocation | Prefer locations with more allocatable inventory. |
| `Sales velocity` | How quickly the item sells at a location | Prefer slower-moving locations. |
| `Week of Supply` | Current inventory and sales velocity | Prefer locations with deeper inventory coverage. |

Use Week of Supply when inventory depth must be considered in the context of local demand. A slow-moving store with 3 units and a slow-moving store with 30 units may look similar under sales velocity alone, but their inventory coverage differs.

Available sort options depend on the routing services and enumerations in your deployment.

## Configure a Week of Supply routing rule

1. Open the routing group and select the required routing.
2. Add or select a routing rule.
3. In `Filters`, use `Group` to select the facility group you want to evaluate.
4. Add other eligibility filters, such as `Proximity` or `Safety stock`.
5. Set `Week of Supply` to a positive coverage period.
6. In `Sort`, add `Week of Supply`.
7. Configure the unavailable-item action.
8. Change the routing rule to `Active`.
9. Click the page-level `Save`.

The Week of Supply value calculates a ranking; it does not exclude a facility. Add a later routing rule that uses a broader facility group or another sort option when the first rule finds no allocatable inventory.

## Combine coverage with service-level rules

Do not use Week of Supply as the only signal when delivery speed is the primary customer promise. For same-day or next-day delivery, limit eligible facilities with `Proximity` or try warehouses first. Apply Week of Supply within that eligible set when you also want to protect local store demand.

Review [common routing strategies](use-cases.md) for an example fallback sequence.
