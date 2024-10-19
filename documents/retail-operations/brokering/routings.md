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

Next, let's delve into the detailed configuration options for <mark style="color:orange;">order filters, inventory filters, and allocation actions that are involved during routing.</mark>

***

### Configuring a Routing

As discussed initially, within each routing at the lowest level, you have individual <mark style="color:orange;">**"Rules"**</mark>.

<figure><img src="../.gitbook/assets/Routings.png" alt=""><figcaption><p>Routing in Order Routing App</p></figcaption></figure>

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><h4><mark style="color:orange;">1. Finding Order</mark></h4></td><td><p>Customize the criteria for orders using the options icon in the "Filters" section.</p><p></p><p>Sort order batches by adding sorting criteria and rearranging them.</p></td><td></td><td><a href="rules.md#finding-orders">#finding-orders</a></td></tr><tr><td><h4><mark style="color:orange;">2. Finding Inventory</mark></h4></td><td>Manage filters applied to determine where orders in this routing should be attempted for allocation.</td><td><p></p><p>Sort inventory options to prioritize available inventory effectively</p></td><td><a href="rules.md#finding-inventory">#finding-inventory</a></td></tr><tr><td><h4><mark style="color:orange;">3. Allocation Actions</mark></h4></td><td>Specify actions related to order allocation.</td><td></td><td><a href="rules.md#committing-orders-to-inventory">#committing-orders-to-inventory</a></td></tr></tbody></table>

The final chapter, let's learn in depth about these order fetching and recursive inventory allocation [rules](rules.md) that ensures order is fulfilled from the best location.
