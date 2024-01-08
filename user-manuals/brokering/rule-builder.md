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

{% @figma/embed fileId="bVPRRw282CqGKMdbz7dciH" nodeId="32295:84077" url="https://www.figma.com/file/bVPRRw282CqGKMdbz7dciH/HC-Ionic-design-system?mode=design&node-id=32295-84077&t=JtG5xhIjZi59a5Gy-11&type=design" %}

### Scheduling Brokering Runs

Brokering runs are scheduled using two essential parameters:

1. **Frequency:**
   * Determine how often you want the brokering run to execute. Options include:
2. **Runtime:**
   * Specify the time of day (in 24-hour format) when the brokering run should initiate.

#### Example:

* Setting the frequency of a run to "Daily" and the runtime to "7 am" will execute the brokering run every morning at 7 am.

Understanding how to view, schedule, and manage brokering runs is essential for optimizing your order routing strategies. Now, let's explore routings within a run.

{% @figma/embed fileId="bVPRRw282CqGKMdbz7dciH" nodeId="32295:83079" url="https://www.figma.com/file/bVPRRw282CqGKMdbz7dciH/HC-Ionic-design-system?mode=design&node-id=32295-83079&t=JtG5xhIjZi59a5Gy-11&type=design" %}

## Routing

### Overview

A **routing** in the brokering system defines the criteria for processing orders and specifies the inventory rules to apply. Understanding how to create, manage, and optimize routings is crucial for tailoring your order processing to meet specific requirements.

### Adding a New Routing

1. Click the **Add** button next to the "Order batches" label to create a new routing.
2. Provide a name for the routing and click **Save** to add it to the routing list of a run.

{% @figma/embed fileId="bVPRRw282CqGKMdbz7dciH" nodeId="32320:85887" url="https://www.figma.com/file/bVPRRw282CqGKMdbz7dciH/HC-Ionic-design-system?mode=design&node-id=32320-85887&t=JtG5xhIjZi59a5Gy-4&type=design" %}

### Archiving a Routing Rule

When a routing is no longer needed in a brokering run:

* Click on the `Archive` button at the bottom right of the routing card.
* This action moves the routing to the archive, removing it from the brokering run flow.

Archived routings can be reactivated if needed and are accessible from the archive drawer at the bottom of the list.

{% @figma/embed fileId="bVPRRw282CqGKMdbz7dciH" nodeId="32409:87928" url="https://www.figma.com/file/bVPRRw282CqGKMdbz7dciH/HC-Ionic-design-system?mode=design&node-id=32409-87928&t=JtG5xhIjZi59a5Gy-4&type=design" %}

### Sequencing Routings

Adjust the sequence of order routings:

* Click and drag the chip on the top right of the routing card.
* The sequence number on the card will automatically update based on the card's position.

{% @figma/embed fileId="bVPRRw282CqGKMdbz7dciH" nodeId="32381:87641" url="https://www.figma.com/file/bVPRRw282CqGKMdbz7dciH/HC-Ionic-design-system?mode=design&node-id=32381-87641&t=JtG5xhIjZi59a5Gy-4&type=design" %}

### Configuring a Routing

1. **Order Filters:**
   * Customize the criteria for orders using the options icon in the "Filters" section.
   * Sort order batches by adding sorting criteria and rearranging them.
2. **Inventory Filters:**
   * Manage filters applied to determine where orders in this routing should be attempted for allocation.
   * Sort inventory options to prioritize available inventory effectively.
3. **Allocation Actions:**
   * Specify actions related to order allocation.

{% @figma/embed fileId="bVPRRw282CqGKMdbz7dciH" nodeId="32272:35263" url="https://www.figma.com/file/bVPRRw282CqGKMdbz7dciH/HC-Ionic-design-system?mode=design&node-id=32272-35263&t=JtG5xhIjZi59a5Gy-11&type=design" %}

**Managing Order Filters**

* Click on the options icon in the "Filters" section to add or remove filters.
* Ensure orders are routed based on specific criteria that align with your fulfillment strategy.

{% @figma/embed fileId="bVPRRw282CqGKMdbz7dciH" nodeId="32273:68221" url="https://www.figma.com/file/bVPRRw282CqGKMdbz7dciH/HC-Ionic-design-system?mode=design&node-id=32273-68221&t=JtG5xhIjZi59a5Gy-4&type=design" %}

#### Managing Inventory Rules

* Rearrange the sequence of inventory rules by clicking and dragging items using the reorder icon on each rule.
* Add a new inventory rule by clicking on the "Add Inventory Rule" button.

{% @figma/embed fileId="bVPRRw282CqGKMdbz7dciH" nodeId="32273:68367" url="https://www.figma.com/file/bVPRRw282CqGKMdbz7dciH/HC-Ionic-design-system?mode=design&node-id=32273-68367&t=JtG5xhIjZi59a5Gy-4&type=design" %}

#### Managing Inventory Rule Filters

* Click on the options icon on the "Filters" card to manage filters for inventory rules.
* Sorting inventory filters optimizes the allocation process by prioritizing available inventory based on specific criteria.

{% @figma/embed fileId="bVPRRw282CqGKMdbz7dciH" nodeId="32273:68626" url="https://www.figma.com/file/bVPRRw282CqGKMdbz7dciH/HC-Ionic-design-system?mode=design&node-id=32273-68626&t=JtG5xhIjZi59a5Gy-4&type=design" %}

#### Managing Sorting Options

* Click on the options icon on the "Sort" card to add or remove sorting options.
* Adjust the priority of sort options by clicking and dragging them to the desired sequence.

{% @figma/embed fileId="bVPRRw282CqGKMdbz7dciH" nodeId="32273:68694" url="https://www.figma.com/file/bVPRRw282CqGKMdbz7dciH/HC-Ionic-design-system?mode=design&node-id=32273-68694&t=JtG5xhIjZi59a5Gy-4&type=design" %}

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
