---
description: >-
  Learn how to configure order routing and brokering rules in HotWax Commerce to
  enhance and optimize fulfillment operations with this user manual.
---

# Rule Builder

Welcome to the Routing Configurations User Manual! This guide will lead you through the process of configuring your order routing and brokering rules to enhance and optimize your fulfillment operations. Before diving into the configuration steps, it's crucial to have a solid understanding of the various routing parameters. Ensure you grasp how these parameters function to guarantee the accurate setup of your rules. If you need more information, refer to the [Routing Rules](rule-builder.md) page.

## Organizing Brokering Rules

Brokering rules play a pivotal role in your fulfillment strategy and are structured hierarchically:

1. **Runs:**
   * A "Run" is the highest level of organization for your brokering rules. It represents a set of rules that will be applied to incoming orders during a specific time or under certain conditions.
2. **Routings:**
   * Within each run, you have "Routings." Think of routings as distinct pathways that orders can take based on predefined conditions. Each routing represents a unique set of rules that govern the flow of orders.
3. **Rules:**
   * At the lowest level, you have individual "Rules" within each routing.

Understanding this organizational structure is fundamental to efficiently configure and manage your brokering rules. Now, let's delve into each level in detail.

Great! Let's continue fleshing out the manual with details about brokering runs:

***

## Brokering Runs

### Overview

**Runs** in the brokering system act as containers for sequences of routings. These runs are scheduled by retailers to execute at specified intervals, allowing for effective and timely order routing.

### Viewing Brokering Runs

1. **Chronological Sequence:**
   * Once logged in, you'll find all routing runs presented in a chronological sequence based on their next scheduled run time.
2. **Run Details:**
   * Click on a specific run to open its details. Here, you can explore information about the run and find options to edit details such as its description.



<figure><img src="../.gitbook/assets/Brokering Runs.png" alt=""><figcaption><p>Brokering runs</p></figcaption></figure>

### Scheduling Brokering Runs

Brokering runs are scheduled using two essential parameters:

1. **Frequency:**
   * Determine how often you want the brokering run to execute. Options include:
2. **Runtime:**
   * Specify the time of day (in 24-hour format) when the brokering run should initiate.

#### Example:

* Setting the frequency of a run to "Daily" and the runtime to "7 am" will execute the brokering run every morning at 7 am.

Understanding how to view, schedule, and manage brokering runs is essential for optimizing your order routing strategies. Now, let's explore routings within a run.

<figure><img src="../.gitbook/assets/Brokering Run Routes (1).png" alt=""><figcaption><p>Scheduling brokering runs</p></figcaption></figure>

## Routing

### Overview

A **routing** in the brokering system defines the criteria for processing orders and specifies the inventory rules to apply. Understanding how to create, manage, and optimize routings is crucial for tailoring your order processing to meet specific requirements.

### Adding a New Routing

1. Click the **Add** button next to the "Order batches" label to create a new routing.
2. Provide a name for the routing and click **Save** to add it to the routing list of a run.

<figure><img src="../.gitbook/assets/Order batches.png" alt="" width="251"><figcaption><p>Add a new routing</p></figcaption></figure>

### Archiving a Routing Rule

When a routing is no longer needed in a brokering run:

* Click on the `Archive` button at the bottom right of the routing card.
* This action moves the routing to the archive, removing it from the brokering run flow.

Archived routings can be reactivated if needed and are accessible from the archive drawer at the bottom of the list.

{% embed url="https://youtu.be/qE_J-Gp0Tf0" %}
Archive routing
{% endembed %}

### Sequencing Routings

Adjust the sequence of order routings:

* Click and drag the chip on the top right of the routing card.
* The sequence number on the card will automatically update based on the card's position.

{% embed url="https://youtu.be/bljIuLi7Q7o" %}
Routing sequence
{% endembed %}

### Configuring a Routing

1. **Order Filters:**
   * Customize the criteria for orders using the options icon in the "Filters" section.
   * Sort order batches by adding sorting criteria and rearranging them.
2. **Inventory Filters:**
   * Manage filters applied to determine where orders in this routing should be attempted for allocation.
   * Sort inventory options to prioritize available inventory effectively.
3. **Allocation Actions:**
   * Specify actions related to order allocation.

<figure><img src="../.gitbook/assets/Brokering Route Queries.png" alt=""><figcaption><p>Routing configurations</p></figcaption></figure>

**Managing Order Filters**

* Click on the options icon in the "Filters" section to add or remove filters.
* Ensure orders are routed based on specific criteria that align with your fulfillment strategy.

<figure><img src="broken-reference" alt="" width="358"><figcaption><p>Order filters</p></figcaption></figure>

#### Managing Inventory Rules

* Rearrange the sequence of inventory rules by clicking and dragging items using the reorder icon on each rule.
* Add a new inventory rule by clicking on the "Add Inventory Rule" button.



<figure><img src="../.gitbook/assets/inventory rules.png" alt="" width="358"><figcaption><p>Add new inventory rules</p></figcaption></figure>

#### Managing Inventory Rule Filters

* Click on the options icon on the "Filters" card to manage filters for inventory rules.
* Sorting inventory filters optimizes the allocation process by prioritizing available inventory based on specific criteria.

<figure><img src="broken-reference" alt="" width="358"><figcaption><p>Manage filters</p></figcaption></figure>

#### Managing Sorting Options

* Click on the options icon on the "Sort" card to add or remove sorting options.
* Adjust the priority of sort options by clicking and dragging them to the desired sequence.

<figure><img src="../.gitbook/assets/sorting.png" alt=""><figcaption><p>Manage sorting</p></figcaption></figure>

Understanding how to configure routings is essential for optimizing the order routing and brokering process. Next, let's delve into the detailed configuration options for order filters, inventory filters, and allocation actions.

## Actions

### Available Actions

1. **Auto Cancel Days:**
   * Specify the number of days to automatically cancel orders that could not be allocated.
2. **Allocate Partial:**
   * Allow an order to be split and allocated partially if some items are available at a location.
3. **Next Rule:**
   * Automatically move unallocated items to the next rule in the sequence.
4. **Move to Queue:**
   * Transfer unallocated items to a selected queue for further processing.

Understanding and appropriately configuring these actions will empower retailers to fine-tune their brokering rules, improving order processing efficiency and meeting specific fulfillment requirements.
