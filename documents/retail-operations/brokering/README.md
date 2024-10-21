---
icon: gears
description: >-
  This guide will help you understand how to manage and route orders efficiently
  using HotWax Commerce’s Order Routing App, optimizing order fulfillment strategies.
---

# Order Routing

## What is Order Routing?

Sophisticated order routing is critical for retailers managing multiple sales channels and fulfillment locations. It ensures that each order is fulfilled from the most optimal fulfillment location by considering factors like shipping method, facility proximity to the customer, inventory levels, fulfillment capabilities, and order splitting options. Effective order routing helps retailers achieve faster delivery times, reduce shipping costs, and maintain balanced inventory across all locations.

## What is Configurable Order Routing?

Configurable order routing takes the fundamentals of order routing a step further by offering retailers the ability to customize and fine-tune how orders are routed across fulfillment locations. Instead of relying on a fixed set of rules, configurable order routing allows retailers to use a brokering algorithm that evaluates orders and fulfillment locations against a series of sequential rule sets, each with specific conditions.

This high level of customization enables retailers to create order fulfillment strategies that align with their unique business needs, allowing them to adjust routing parameters in real time without needing external support. Retailers can optimize factors such as fulfillment costs, inventory distribution, and workload across locations, offering a strategic approach to order management. For scenarios where an order doesn’t meet the criteria of any rule set, configurable routing allows retailers to define specific actions to manage unfillable orders, ensuring no order is left without a resolution.

This dynamic approach to order routing ensures that retailers can adapt quickly to evolving market conditions and customer expectations.

## Brokering Rules Builder

In HotWax Commerce's Order Routing App, the Brokering Rules Builder provides a structured framework for managing order routing with flexibility. It enables retailers to define how orders are routed across their fulfillment network. The hierarchical structure of the brokering rules is as follows:

<figure><img src="../.gitbook/assets/HotWax Commerce Order Routing.png" alt=""><figcaption><p>Brokering Rules in HotWax Commerce</p></figcaption></figure>

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td><mark style="color:orange;"><strong>Runs</strong></mark>  </td><td><p></p><p>A "Run" is the highest level of organization for your brokering rules. It represents a set of rules that will be applied to incoming orders during a specific time or under certain conditions.</p></td><td></td><td><a href="brokeringruns.md">brokeringruns.md</a></td><td></td></tr><tr><td><p><mark style="color:orange;"><strong>Routings</strong></mark></p><p></p></td><td>Within each run, you have "Routings." Think of routings as distinct pathways that orders can take based on predefined conditions. Each routing represents a unique set of rules that govern the flow of orders.</td><td></td><td><a href="routings.md">routings.md</a></td><td></td></tr><tr><td><mark style="color:orange;"><strong>Rules</strong></mark></td><td></td><td>At the lowest level, you have individual "Rules" within each routing. These are the specific criteria that determine how inventory is allocated during order routing.</td><td><a href="rules.md">rules.md</a></td><td></td></tr></tbody></table>

Now, let's delve into each level in detail in the next sections.
