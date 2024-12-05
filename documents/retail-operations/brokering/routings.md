---
description: Learn about Routings.
---

# Routing Rules

As discussed, <mark style="color:orange;">**routing**</mark>, also known as <mark style="color:orange;">**routing rules**</mark>, enable retailers to create specific order batches based on their business requirements, such as a same-day delivery batch, a next-day delivery batch, and a standard order batch. These routing rules help in efficiently looking up orders based on urgency and shipping promises.

### When to Create Multiple Routing Rules in a Single Run?

Multiple routing rules within a single brokering run are useful when different order batches, like same-day, next-day and standard orders, need to be routed at the same interval.

If these order batches need routing at the same frequency but require different inventory allocation strategies, unique inventory rules can be applied to each batch. This way, even with a shared routing frequency (single brokering run), each order batch is managed according to its specific requirements. We’ll understand more about [inventory rules in the coming sections](rules.md).

## Creating and Managing Routing Rules

This section explains how to create order batches in a brokering run using filters and sorting options to match business needs. We’ll demonstrate this by creating two routing rules:c<mark style="color:orange;">**Same-day/Next-day orders**</mark> and <mark style="color:orange;">**Standard orders**</mark> within our previously created <mark style="color:orange;">**Everyday order routing**</mark> [brokering run](brokeringruns.md).

{% hint style="info" %}
In this example, we’re routing Same-day/Next-day orders and Standard orders at the same frequency. If a business scenario requires these batches to be routed at different frequencies then separate brokering runs should be created.
{% endhint %}

### Adding a New Routing Rule

* Click the `Create order batch` button to create a new routing rule.
* Name the routing rule and click `Save` to add it to the list of routing rules.
* To add the next routing rule click on the `New` button next to the "Order batches" label and name your new routing rule.

Continuing our example, let's name our two routing rules as <mark style="color:orange;">**Same-day/Next-day orders**</mark> and <mark style="color:orange;">**Standard orders**</mark>.

{% tabs %}
{% tab title="Routing rule 1" %}
{% embed url="https://youtu.be/8mGEsBOps9I" %}
Creating New Routings
{% endembed %}
{% endtab %}

{% tab title="Routing rule 2" %}
{% embed url="https://youtu.be/gThkEEQPFc0" %}
Creating New Routings
{% endembed %}
{% endtab %}
{% endtabs %}

{% hint style="warning" %}
For a routing to actively process orders, you’ll need to change its status from **Draft** to **Active**. Just click **Draft** to update it to **Active,** or, if needed, revert an active routing back to **Draft** by clicking on **Active.**

This step should be done only after setting up all routing rules.
{% endhint %}

### Sequencing Routing Rules

To prioritize which the routing rule is applied first:

* Click and drag the chip on the top right of the routing card.
* The sequence number on the card will automatically update based on the card's position.

Continuing our example, we’ll position <mark style="color:orange;">**Same-day/Next-day orders**</mark> before <mark style="color:orange;">**Standard orders**</mark> so that the higher-priority order batch is routed first.

{% embed url="https://youtu.be/hB9QLCMXDEw" %}
Sequence Routing Rules
{% endembed %}

### Configuring Routing Rules to Create Order Batches

<mark style="color:orange;">**Creating an order batch is a two-step process:**</mark>

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><ol><li><mark style="color:orange;"><strong>Filters</strong></mark></li></ol><p>Look up orders and group them in a batch.</p></td><td></td><td></td><td></td></tr><tr><td><ol start="2"><li><mark style="color:orange;"><strong>Sorting</strong></mark></li></ol><p>Determine the sequence in which orders are picked up during routing.</p></td><td></td><td></td><td></td></tr></tbody></table>

<figure><img src="../.gitbook/assets/Orderfilteringandsorting.png" alt="" width="563"><figcaption><p>Order Filters and Sorting</p></figcaption></figure>

### Step 1: Creating a Batch of Orders Using Filters

The first step in setting up routing rules is to create a batch of orders using specific filters. This helps the brokering algorithm group and prioritize orders accurately for each routing rule, enabling more targeted and effective fulfillment strategies.

<mark style="color:orange;">**Here are the available filters to create order batches:**</mark>

<figure><img src="../.gitbook/assets/Orderfilters.png" alt="" width="563"><figcaption><p>Order Batch Filters</p></figcaption></figure>

* **Origin facility group:** This parameter allows retailers to filter orders based on the [facility group ](https://docs.hotwax.co/documents/system-admins/administration/introduction/facilities-app#facility-groups)from which they originated. For example, many times when walk-in customers cannot find their preferred items in store, store associates place the order on their behalf. These are known as Send Sale orders. In this scenario, the origin facility becomes the specific physical location. If a retailer wants all Send Sale orders from specific facilities to be routed differently, then they can apply this filter to create a batch of orders and proceed to create their routing.
* **Order priority:** Not all orders carry the same level of urgency. In HotWax Commerce, orders can be assigned a priority level of high, medium, or low. By default, orders are set to "medium priority," but retailers can adjust the order priority in HotWax Commerce as needed. By filtering orders based on priority, the most critical ones (high-priority orders) are routed before less urgent ones.
* **Promise date:** Pre-orders or backorders can be filtered based on their promise date. Retailers may choose to broker orders that have passed their promise date first for the timely fulfillment of overdue orders.
* **Queue:** The parking location to pick orders from. HotWax Commerce has [virtual queues](https://docs.hotwax.co/documents/system-admins/administration/facilities/manage-parkings#default-parkings) to park orders that are not yet brokered to a facility. Retailers can filter by queue type (Brokering Queue, Pre-order/Backorder Parking, Rejected Parking, or Unfillable Parking) to decide which orders should be brokered to available inventory.
  * All orders that are not pre-orders or backorders in HotWax Commerce and are waiting for the inventory are in the `Brokering Queue`. In most of the cases this will be the filter you will use to make your order batch.
* **Sales channel:** Channel where the order was captured. Different sales channels (eCommerce or marketplaces) may require different routing strategies. Orders can be filtered by channel so that the right group of orders is picked for routing based on channel-specific fulfillment rules, reducing the risk of penalties or delays in fulfilling orders from marketplaces like Amazon.
* **Shipment method type:** SLA promised to the customer. When customers choose specific [shipping methods](https://docs.hotwax.co/documents/system-admins/fulfillment/shipping-methods/shippinggateways), like expedited or same-day delivery, these orders must be prioritized differently. Retailers can use this filter to create a batch of orders based on the selected shipping method, so orders requiring fast shipping are processed first.

Continuing with our example, let’s take a closer look at how to apply the right filters and sorting options for <mark style="color:orange;">**Same-day/Next day**</mark> routing rule.

<mark style="color:orange;">**Applying filters to create order batches:**</mark>

{% embed url="https://youtu.be/pSn6N2-y-DY" %}
Applying Filters
{% endembed %}

1. Open the <mark style="color:orange;">**Same-day/Next-day orders**</mark> routing rule’s details, then navigate to the Filters option.
2. Filters help define which orders should be looked up to create a batch. For the “Same-day/Next-day” routing rule we will choose the <mark style="color:orange;">**“Queue”**</mark> and <mark style="color:orange;">**"Shipment method type**</mark>**"** filters.

* From the <mark style="color:orange;">**“Queue”**</mark> we will choose the <mark style="color:orange;">**“Brokering Queue”**</mark> to include all orders that are waiting for the inventory allocation.
* From the <mark style="color:orange;">**“Shipping Method”**</mark> dropdown, we will choose <mark style="color:orange;">**“Same Day"**</mark> and <mark style="color:orange;">**"Next Day”**</mark> shipping methods to include only same-day and next-day shipping orders in our batch.

Since our objective is to prioritize orders with tight SLAs, we are not selecting additional filters like order priority, promise date, and sales channel.

**Outcome?** With these filters in place, the brokering algorithm will specifically look for orders in the `Brokering Queue` that need same-day or next-day delivery. This means that urgent orders are prioritized in your batch for quicker inventory allocation and fulfillment.

{% hint style="info" %}
If you are not selecting any filter then all orders in all parkings will be attempted for brokering.
{% endhint %}

### Step 2: Sequencing Orders in a Batch Using Sorting

After filtering, the next step is choosing the Sorting criteria to prioritize the sequence in which individual orders within each batch are picked for inventory allocation. Sorting allows you to align order routing with your fulfillment goals, prioritizing high-priority orders first.

<mark style="color:orange;">**Available sorting options:**</mark>

<figure><img src="../.gitbook/assets/Ordersorting.png" alt="" width="563"><figcaption><p>Order Batch Sorting</p></figcaption></figure>

* **Order date:** Sort by order date to prioritize older orders first, following a first-in, first-out (FIFO) approach.
* **Order priority:** Orders can be sorted by priority levels, such as high, medium, low allowing retailers to prioritize orders based on their urgency.
* **Ship by**
* **Ship after**
* **Shipping method:** Sorting by shipping method enables the brokering engine to priortize orders based on the promised SLA. HotWax records the delivery days associated with each shipping method, Same-Day as 0, Next-Day as 1, Two-Day as 2, etc. For example, applying shipping method sorting for a Same-Day/Next-Day batch allows the brokering engine to pick same-day orders before next-day orders, so inventory is allocated first to the most urgent orders. Sorting orders by shipping method becomes unnecessary when all orders in the batch have the same shipping method.

<mark style="color:orange;">**Choosing sorting options to define order priority:**</mark>

{% embed url="https://youtu.be/J2_LpfbHIlI" %}
Applying Sorting
{% endembed %}

1. Navigate to the `Sort` option. Continuing our example, for the <mark style="color:orange;">**Same-day/Next-day order**</mark> batch we will choose the <mark style="color:orange;">**"Shipping Method”**</mark> sorting so that all same-day orders are sequenced first following by all the next day orders.
2. Finally, click on the `Save` icon in the right most corner to save your **configured routing rule**.

If you are choosing multiple sorting options, you can prioritize them into the desired sequence using drag and drop.

{% hint style="info" %}
Orders will be brokered based on order date if no sorting is specified.
{% endhint %}

_Now that you already know what filters and sorting options are available and what they mean, you can easily use them for your next routing rule._

Let’s see what should be the right filters and sorting options for our **second routing rule** <mark style="color:orange;">**Standard orders.**</mark>

{% embed url="https://youtu.be/lWRdCIO9dMs" %}
Applying Filters and Sorting for Standard Orders Batch
{% endembed %}

1. From the **filters** option, we will choose the <mark style="color:orange;">"</mark><mark style="color:orange;">**Queue"**</mark> and <mark style="color:orange;">"</mark><mark style="color:orange;">**Shipment method type"**</mark> filters.

* From the <mark style="color:orange;">**“Queue”**</mark> dropdown we will choose the <mark style="color:orange;">**“Brokering Queue”**</mark> to include all shipping orders that are waiting for the inventory allocation.
* Now, from the <mark style="color:orange;">**"Shipping Method"**</mark> dropdown we will choose the <mark style="color:orange;">**“Standard”**</mark> shipping method to include only standard shipping orders present in the `Brokering Queue`.

2. From the **sorting** option, even if we don’t choose any option all standard orders are sequenced based on their order date that is FIFO basis, so older orders are picked first for inventory allocation.

{% hint style="info" %}
We did not apply the Shipping Method sorting for our Standard orders because all of these orders use the same standard delivery shipping method. Therefore, sorting by shipping method in this case would not make any difference.
{% endhint %}

3. Finally, click on the `Save` icon in the right most corner to save your configured routing rule.

These examples help understand how retailers can use different filters and sorting options to create order batches and strategically fulfill orders, aligning each routing rule with specific business objectives.

### Archiving a Routing

When a routing is no longer needed in a brokering run you can `Archive` it:

{% embed url="https://youtu.be/Q_7UUkvHLPY" %}
Archive/Unarchive Routing Rule
{% endembed %}

* Click on the `Archive` button at the bottom right of the routing card.
* This action moves the routing to the archive, removing it from the brokering run flow.

Archived routings can be reactivated if needed and are accessible from the archive drawer at the bottom of the list.

Congrats! You now have a clear understanding of how to <mark style="color:orange;">**create brokering runs and set routing rules.**</mark> The final step is choosing [inventory rules](rules.md) to complete the order routing setup.
