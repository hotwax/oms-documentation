---
description: Learn about routings.
---

# Routings

A <mark style="color:orange;">**routing**</mark> in the Brokering Rules Builder defines the criteria for fetching orders and specifies the inventory rules to apply. Understanding how to create, manage, and optimize routings is crucial for configuring your order processing to meet specific fulfillment requirements.

### Adding a New Routing

* Click the `Create Order Batch` button to create a new routing.
* Provide a name for the routing and click `Save` to add it to the routing list of a run.

For example, we’ve created a new routing within our previously discussed "High priority orders" [<mark style="color:orange;">**brokering run**</mark>](brokeringruns.md#create-brokering-run).

{% tabs %}
{% tab title="Create Order Route" %}
<figure><img src="../.gitbook/assets/New Routing.png" alt=""><figcaption><p>Create Order Batch</p></figcaption></figure>
{% endtab %}

{% tab title="View Created Order Route" %}
<figure><img src="../.gitbook/assets/Order Batch.png" alt=""><figcaption><p>View Order Batch</p></figcaption></figure>
{% endtab %}
{% endtabs %}

* You can click on the `Add` button next to the `Order batches` label to add more routings.

<figure><img src="../.gitbook/assets/Order Batches.png" alt="" width="375"><figcaption><p>New Routings</p></figcaption></figure>

{% hint style="info" %}
For a routing to actively process orders, you’ll need to change its status from "Draft" to "Active." Just click "Draft" to update it to "Active," or, if needed, revert an active routing back to "Draft" by clicking on "Active." This step should be done only after setting up all routing rules, as outlined in the upcoming [Rules](rules.md) section.
{% endhint %}

### Sequencing Routings

Adjust the sequence of order routings:

{% embed url="https://youtu.be/_ADemNU3oPo" %}
Sequence Routings
{% endembed %}

* Click and drag the chip on the top right of the routing card.
* The sequence number on the card will automatically update based on the card's position.

### Archiving a Routing

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

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><ol><li><mark style="color:orange;"><strong>Finding Orders</strong></mark></li></ol><p>Customize the criteria for orders using the options icon in the "Filters" section.</p><p>Sort order batches by adding sorting criteria and rearranging them.</p></td><td></td><td></td><td><a href="rules.md#id-1.-finding-orders">#id-1.-finding-orders</a></td></tr><tr><td><ol start="2"><li><mark style="color:orange;"><strong>Finding Inventory</strong></mark></li></ol></td><td>Manage filters applied to determine where orders in this routing should be attempted for allocation.</td><td>Sort inventory options to prioritize available inventory effectively.</td><td><a href="rules.md#id-2.-finding-inventory">#id-2.-finding-inventory</a></td></tr><tr><td><ol start="3"><li><mark style="color:orange;"><strong>Allocation Actions</strong></mark></li></ol><p>Specify actions related to order allocation.</p></td><td></td><td></td><td><a href="rules.md#id-3.-allocation-actions">#id-3.-allocation-actions</a></td></tr></tbody></table>

In the final chapter, let's dive deeper into the order fetching and recursive inventory allocation [rules](rules.md) that ensure orders are always fulfilled from the most optimal location, just the way you want.
