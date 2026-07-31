---
description: Configure order selection, facility lookup, schedules, and fallback actions in the Order Routing Rules app.
icon: gears
---

# Order routing

Use the **Order Routing Rules** app to decide which orders the order routing engine attempts, which fulfillment locations it checks, and what happens when inventory is unavailable.

The app now brings sourcing and routing work into one place:

* Use the `Sourcing` section to manage threshold, safety stock, store pickup, shipping, inventory channel, and inventory visibility settings. See [available-to-promise inventory](../../inventory/available-to-promise/README.md).
* Use the `Routing` section to build routing logic, manage facility groups, review schedules, and run routing groups.

## Understand the routing structure

Order routing has three levels:

| Level | What it controls | Example |
| --- | --- | --- |
| Routing group | When a set of routings runs | Run standard order routing every six hours |
| Routing | Which orders are selected and in what sequence they are attempted | Select standard shipping orders from the brokering queue, oldest first |
| Routing rule | Which facilities are eligible, how facilities are ranked, and what happens to unavailable items | Try nearby warehouses first, then move remaining items to the next rule |

The current UI uses these terms consistently. Older documentation and bookmarks may refer to routing groups as *brokering runs* and routing rules as *inventory rules*.

## Choose by business goal

Start with the recipe that matches the decision you need to make:

* [Select marketplace orders or work queues](use-cases.md#select-and-prioritize-orders) when a sales channel, rejected item, or promise date determines which order items should run first.
* [Choose warehouses, stores, or nearby facilities](use-cases.md#choose-fulfillment-facilities) when your fulfillment network and delivery distance determine where to allocate items.
* [Protect and rebalance store inventory](use-cases.md#protect-and-rebalance-inventory) when safety stock, grouped items, or weeks of supply should guide facility eligibility.
* [Apply a complete routing template](use-cases.md#apply-a-complete-template) when you need a connected design rather than one recipe.
* [Test and refine a strategy](use-cases.md#test-and-refine-a-strategy) when Simulation, Circuit, or Test Drive is available in your deployment.

## Use the order routing list

Open `Order Routing` from the `Routing` section. The list page gives you two views of the same configuration:

* `Coverage by day and hour` shows scheduled groups in the selected `All`, `Active`, or `Draft` segment. Select `Active` to review active schedule coverage, then review `Busiest hour`, `Coverage gaps`, and the number of active groups.
* `Routing groups` shows every group, its schedule, status, and next run. Use `All`, `Active`, or `Draft` to narrow the list, or search by name.

<figure><img src="../../.gitbook/assets/order-routing-list.jpg" alt="Order Routing List page with the weekly coverage grid and routing group list"><figcaption><p>Review schedule coverage and routing groups on one page.</p></figcaption></figure>

## Use the routing detail workspace

Select a routing group to open one workspace with the full configuration:

1. Review the group name, description, status, schedule, and history.
2. Select a routing from the `Routings` column.
3. Review or update the routing's order filters and sort order.
4. Select a routing rule to review facility filters, facility sorting, partial allocation, and unavailable-item actions.
5. Click `Save` to keep your changes.

<figure><img src="../../.gitbook/assets/order-routing-detail.jpg" alt="Order Routing Detail page with routing group, routing, and routing rule columns"><figcaption><p>Configure the complete routing hierarchy in one workspace.</p></figcaption></figure>

{% hint style="warning" %}
The detail page keeps changes to the group name, description, routings, and routing rules in a working copy until you click `Save`. Routing group status, schedule, `Run now`, and group cloning are immediate actions. The app disables those actions while the working copy has unsaved changes.
{% endhint %}

## Continue configuring order routing

* [Manage routing groups](brokering-runs.md)
* [Configure a routing group](routing-group-details.md)
* [Configure routings](routing-rules.md)
* [Configure routing rules](inventory-rules.md)
* [Review routing reports](../../../analytics/reports/brokering.md)

## Use optional features

The following tools are feature-gated and may not be available in your deployment:

* [Test a routing group](test-drive.md)
* [Simulate routing changes](simulation.md)
* [Use Circuit](circuit.md)
