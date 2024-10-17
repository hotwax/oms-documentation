---
description: >-
  This guide will help you understand how to manage and route orders efficiently
  using HotWax Commerce’s Routing App, optimizing order fulfillment strategies.
icon: gears
---

# Order Routing

## What is Order Routing?

Order routing allows the OMS to determine the best location to fulfill an order according to a set of criteria. The criteria are in respect to selecting which order (part of order) to broker and the criteria to find inventory.

## What is Configurable Order Routing?

Configurable routing brokers a set of orders to fulfill from a set of facilities. A brokering algorithm can have multiple, sequential, rule-sets with unique attributes and conditions which orders and facilities will be evaluated against. Deep customization of the brokering workflow allows retailers to implement real-time revisions to their routing parameters without any external support.

Retailers use configurable routing to create order fulfillment strategies best suited for their business. User configurable routing rules allow retailers to optimize fulfillment cost, inventory, and workload based on arbitrary order and fulfillment location parameters such as order total, SKUs, product category, facility type, operating hours, or fulfillment capacity.

For unfillable orders that did not meet routing criteria under any rule set, retailers can explicitly state what actions must be taken.

## Brokering Rules Builder

Let’s learn how to configure order routing in HotWax Commerce to enhance and optimize fulfillment operations with this user manual.

This guide will lead you through the process of configuring your brokering run, routings and rules to enhance and optimize your fulfillment operations. Before diving into the configuration steps, it's crucial to have a solid understanding of the various routing parameters.

Brokering rules play a pivotal role in your fulfillment strategy and are structured hierarchically:

<figure><img src="../.gitbook/assets/HotWax Commerce Order Routing.png" alt=""><figcaption><p>Brokering Rules in HotWax Commerce</p></figcaption></figure>

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td><mark style="color:orange;"><strong>Runs</strong></mark>  </td><td><p></p><p>A "Run" is the highest level of organization for your brokering rules. It represents a set of rules that will be applied to incoming orders during a specific time or under certain conditions.</p></td><td></td><td></td></tr><tr><td><p><mark style="color:orange;"><strong>Routings</strong></mark></p><p></p></td><td>Within each run, you have "Routings." Think of routings as distinct pathways that orders can take based on predefined conditions. Each routing represents a unique set of rules that govern the flow of orders.</td><td></td><td></td></tr><tr><td><mark style="color:orange;"><strong>Rules</strong></mark></td><td></td><td>At the lowest level, you have individual "Rules" within each routing.</td><td></td></tr></tbody></table>

Understanding this organizational structure is fundamental to efficiently configure and manage your brokering rules. Now, let's delve into each level in detail in the next sections.

By leveraging the full range of order fetching, order and inventory filtering, and sorting parameters, provided by HotWax Commerce’s Order Routing App, retailers can create highly customized and efficient order routing strategies that optimize inventory usage, reduce shipping times and costs, and ensure their fulfillment process is specific to their unique business needs.
