---
description: Route orders using Weeks of Supply to protect high-demand stores and clear inventory from locations with deeper coverage.
---

# Weeks of Supply Routing

Weeks of Supply routing helps retailers decide which fulfillment locations to use for eCommerce orders based on how much inventory cover each location has for the ordered item. Instead of looking only at the number of units available, this strategy considers inventory together with sales velocity so that stores with heavy walk-in demand are protected while locations with deeper coverage can be used for fulfillment.

For merchandisers, this turns order routing into an inventory productivity tool. A store with 20 units available may look like a good fulfillment location, but if it sells 10 units a week in store, routing online orders from that location can quickly create a stockout. Another store with the same 20 units but only two units of weekly demand has more cover and is a better candidate for ship-from-store fulfillment.

## How HotWax Commerce calculates Weeks of Supply

Weeks of Supply is configured on an inventory rule and is used with the `Week of Supply` inventory sort option.

When a positive Weeks of Supply value is configured, HotWax Commerce calculates a Weeks of Supply score for each eligible facility using the product's current inventory and sales velocity. The routing engine calculates the score as:

```
current inventory / (sales velocity / configured weeks) * 100
```

When `Week of Supply` is selected as the inventory sort, facilities with the highest Weeks of Supply score are attempted first. Locations without a score are sorted after locations that have a score.

This means the rule favors facilities that have more inventory cover relative to their sales velocity. Stores that are selling through inventory quickly receive a lower score and are naturally deprioritized for online fulfillment.

If `Week of Supply` is selected as a sort option without a positive Weeks of Supply value on the inventory rule, HotWax Commerce does not apply the Weeks of Supply sort. Add both the filter value and the sort option when you want this strategy to control facility priority.

{% hint style="info" %}
Weeks of Supply does not replace filters like Facility Group, Proximity, or Brokering Safety Stock. Those filters still define which facilities are eligible. Weeks of Supply then helps decide the order in which eligible facilities should be attempted.
{% endhint %}

## Weeks of Supply vs. Sales Velocity

HotWax Commerce supports both `Sales Velocity` and `Week of Supply` as inventory sort options. They are related, but they answer different business questions.

`Sales Velocity` sorts facilities by how quickly the product is selling at each location. In order routing, this is useful when the retailer wants to attempt lower-velocity locations first. A lower-velocity store is less likely to need the same inventory for immediate walk-in demand, so it can be a better fulfillment source for online orders.

`Week of Supply` goes one step further. It compares current inventory with sales velocity to estimate how much inventory cover each location has. This helps the routing engine prefer locations that can spare inventory, not just locations where the item sells slowly.

| Sort option | What it considers | What it answers | Best use |
| --- | --- | --- | --- |
| Sales Velocity | How quickly the item sells at a location | Where is this item moving slowly? | Use when the main goal is to route from slower-moving locations. |
| Week of Supply | Current inventory and sales velocity | Which location has the deepest inventory cover? | Use when the goal is to clear excess inventory without depleting stores with strong local demand. |

For example, two stores may both have low sales velocity. One has 3 units and the other has 30 units. `Sales Velocity` may treat both stores as slow-moving, but `Week of Supply` gives more context because it can identify that the store with 30 units has more cover and is a better fulfillment candidate.

Use `Sales Velocity` when you want a simple merchandising rule that favors slower-moving stores. Use `Week of Supply` when the decision needs to account for both movement and available depth. In most store-fulfillment strategies, Weeks of Supply is the stronger option because it protects demand and helps reduce overstock at the same time.

## Why Retailers Use Weeks of Supply Routing

Retailers typically use Weeks of Supply routing when the fulfillment decision should support both online order fulfillment and store inventory health.

Common business goals include:

* **Protecting high-demand stores:** Stores with fast local sell-through should keep inventory available for walk-in customers instead of losing it to online allocation.
* **Clearing dead stock:** Locations with slow movement or excess coverage can fulfill more online orders, reducing aging inventory without requiring a markdown first.
* **Improving omnichannel margin:** Routing from locations with deeper coverage can reduce future transfer needs, stock balancing work, and lost in-store sales.
* **Balancing warehouses and stores:** Warehouses can still be prioritized first, while store fallback rules can use Weeks of Supply to choose the least risky store.
* **Supporting localized merchandising:** Retailers can avoid draining products from locations where the item is currently performing well.

## Example

A retailer has an online order for a jacket that can be fulfilled from three stores.

| Store | Available inventory | Sales velocity | Business condition |
| --- | --- | --- | --- |
| Downtown | 18 units | 9 units per week | Strong walk-in demand |
| Suburban | 14 units | 2 units per week | Moderate demand |
| Outlet | 22 units | 1 unit per week | Overstocked |

If the retailer sorts only by inventory balance, the Outlet store is likely selected because it has the most units. That may still be correct, but inventory balance alone does not explain whether each store needs that inventory for local demand.

With Weeks of Supply sorting, HotWax Commerce compares each store's inventory against its sales velocity. The Outlet store has the deepest coverage, followed by the Suburban store. The Downtown store has the least coverage because its inventory is moving quickly. Routing the online order from the Outlet store helps clear slow-moving inventory while keeping the Downtown store stocked for customers who are already buying that item in person.

## Recommended Routing Pattern

Use Weeks of Supply as part of a layered inventory rule strategy:

1. Create an inventory rule for the facility group you want to evaluate, such as stores, outlet stores, or all ship-from-store locations.
2. Add any required eligibility filters, such as Facility Group, Proximity, or Brokering Safety Stock.
3. Add the `Week of Supply` filter value to define the coverage period used for the calculation.
4. Add `Week of Supply` as an inventory sort so facilities with the deepest coverage are attempted first.
5. Add a fallback rule, such as warehouse fulfillment or broader store fulfillment, for orders that cannot be allocated by the first rule.

For store fulfillment, retailers often combine Weeks of Supply with Facility Group and Proximity. This keeps the routing engine focused on stores that are eligible for the order while still preferring locations that can spare inventory without hurting local demand.

## When Not to Use Weeks of Supply Alone

Weeks of Supply should not be the only rule when delivery speed or fulfillment cost is the primary promise to the customer. For same-day or next-day delivery, use Proximity or warehouse-first rules before or alongside Weeks of Supply so the routing still respects service levels.

Weeks of Supply also depends on reliable sales velocity data. If sales velocity is missing or stale for a location, that location may not receive a useful Weeks of Supply score. In that case, configure fallback inventory rules so orders can still be routed using other signals.
