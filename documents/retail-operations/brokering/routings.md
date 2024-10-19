---
description: Learn about routings.
---

# Routings

A routing in the brokering system defines the criteria for fetching orders and specifies the inventory rules to apply. Understanding how to create, manage, and optimize routings is crucial for configuring your order processing to meet specific fulfillment requirements.

### Adding a New Routing

* Click the **Add** button next to the "Order batches" label to create a new routing.
* Provide a name for the routing and click **Save** to add it to the routing list of a run.

<figure><img src="../.gitbook/assets/Order Batches.png" alt="" width="375"><figcaption><p>New Routings</p></figcaption></figure>

### Sequencing Routings

Adjust the sequence of order routings:

{% embed url="https://youtu.be/_ADemNU3oPo" %}
Sequence Routings
{% endembed %}

* Click and drag the chip on the top right of the routing card.
* The sequence number on the card will automatically update based on the card's position.

### Archiving a Routing Rule

When a routing is no longer needed in a brokering run:

{% embed url="https://youtu.be/DIllLJkyr3o" %}
Archive Unarchive a Routing
{% endembed %}

* Click on the **Archive** button at the bottom right of the routing card.
* This action moves the routing to the archive, removing it from the brokering run flow.

Archived routings can be reactivated if needed and are accessible from the archive drawer at the bottom of the list.

Next, let's delve into the detailed configuration options for order filters, inventory filters, and allocation actions that are involved during routing.

***

### Configuring a Routing

<figure><img src="../.gitbook/assets/Routings.png" alt=""><figcaption><p>Routing in Order Routing App</p></figcaption></figure>

#### 1. Order

* Customize the criteria for orders using the options icon in the "Filters" section.
* Sort order batches by adding sorting criteria and rearranging them.

#### 2. Inventory

* Manage filters applied to determine where orders in this routing should be attempted for allocation.
* Sort inventory options to prioritize available inventory effectively.

#### 3. Allocation Actions

* Specify actions related to order allocation.

Now, next learn in depth about about order fetching and recursive inventory allocation [rules](rules.md) that ensures order is fulfilled from the best location.
