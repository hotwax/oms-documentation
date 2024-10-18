---
description: Learn about rules.
---

# Rules

HotWax Commerce allows retailers to apply multiple recursive inventory allocation "rules" based on different batches of orders.

### Finding Inventory

Retailers must specify the available facilities for brokering an order batch. To achieve this, they need to establish order brokering facility groups. For example, for standard orders, retailers may opt to broker solely within warehouses, while expedited orders can be brokered across all facilities based on proximity.

To ensure this, retailers should create two distinct order brokering facility groups: one comprising warehouse locations exclusively, and the other incorporating both warehouses and stores. These facility groups can be established within the Facilities App. Refer to our [user manual](https://docs.hotwax.co/documents/v/system-admins/administration/facilities/manage-groups) for detailed instructions on creating brokering facility groups.

{% hint style="info" %}
HotWax Commerce routes orders based on the proximity of the customer to the facilities. To determine this proximity, HotWax Commerce compares the customer's shipping address with the facility locations. To ensure accurate location matching, it is essential that the facility's zip code, along with its latitude and longitude, is added.
{% endhint %}

Once a batch of orders is identified, inventory lookup conditions (using different filters) are applied to find the correct inventory. To optimize inventory lookup performance, facilities are first filtered out to ensure that inventory lookup is only performed on facilities that qualify for fulfillment.

Once valid inventory facilities have been identified, those facilities can be sorted and sequenced as well to optimize fulfillment location selection.

### Managing Inventory Rules

* Add a new inventory rule by clicking on the "Add Inventory Rule" button.
* Click on the options icon on the "Filters" card to manage filters for inventory rules.
* Rearrange the sequence of inventory rules by clicking and dragging items using the reorder icon on each rule.

### Available Inventory Filters

<figure><img src="../.gitbook/assets/Available Inventory Filters.png" alt="" width="563"><figcaption><p>Inventory Filters</p></figcaption></figure>

**1. Facility Group**: Custom grouping of locations.

Grouping certain facilities allows retailers to simplify their decision-making. For example, slow-moving or lower-demand facilities can be grouped together and designated for non-urgent orders, while high-demand facilities are reserved for time-sensitive fulfillment.

**2. Proximity**: Distance between fulfillment facility and destination based on either carrier provided zone mapping or destination address zip code and latitude and longitude of the fulfillment facility.

For example, a retailer can set a 200-mile proximity filter for next-day delivery orders, ensuring that only inventory within 200 miles of the delivery location is used to fulfill those orders. This helps in meeting delivery SLAs and reducing shipping times.

**3. Turn Off the Facility Order Limit Check**: Retailers have the option to bypass the maximum order limit for a facility. This filter allows flexibility in managing facility capacity during peak times or high demand periods. For example, if a retailer chooses to turn off this limit, orders can continue to be brokered to that facility even after its order limit has been reached.

**4. Brokering Safety Stock**: Different from online ATP safety stock, brokering safety stock defines the minimum stock required for an order to be brokered to a facility.

For example, if a retailer sets a brokering safety stock level of 10 units, only facilities with at least 10 units of the item in stock will be eligible to fulfill the order. This prevents over-allocation and ensures that safety stock levels are maintained for unforeseen demand.

**5. Split Order Item Group**: Retailers can control whether they want to split items that belong to a specific order item group. For example, certain items, like gift sets or kits, may need to be shipped together to maintain the integrity of the order. Retailers can decide whether to allow splitting of such groups or to prioritize keeping them intact, even if other items in the order are split across multiple facilities.

<figure><img src="../.gitbook/assets/Inventory Filters.png" alt="" width="327"><figcaption><p>Allocate Inventory From All Facilities</p></figcaption></figure>

### Managing Sorting Options

* Click on the options icon on the "Sort" card to add or remove sorting options.
* Adjust the priority of sort options by clicking and dragging them to the desired sequence.

### Available Inventory Sorting

<figure><img src="../.gitbook/assets/Inventory sorting.png" alt="" width="563"><figcaption><p>Inventory Sorting Options</p></figcaption></figure>

**1. Proximity**: Retailers can sort inventory allocation based on the distance between the customer's shipping address and the facility. This sorting method prioritizes inventory located closer to the customer, helping reduce shipping times and costs, especially for expedited orders or those requiring same-day or next-day delivery.

**2. Facility Order Limit**: In order to ensure that the workload at facilities is balanced, facilities can also be sorted on how much fulfillment capacity they have left.

**3. Inventory Balance**: Inventory can be sorted based on stock levels, ensuring that orders are routed to the facility with the highest available inventory of the ordered item. This method helps to deplete stock from high-inventory locations first, ensuring better stock rotation and preventing stock outs at key locations.

**4. Custom Sequence**: Allows full manual override to the sequence at which facilities are attempted. Retailers can set a custom sequence of facilities, defining a specific order in which locations should be considered for order routing. For example, if a retailer wants to prioritize fulfillment from underperforming stores with lower foot traffic, they can create a custom sequence that favors those stores, helping to balance inventory across all locations. Custom sequences can also be useful for managing seasonal inventory or routing orders to specific regions.

### Committing Orders to Inventory

After all possible inventory has been found, retailers can choose what conditions must be met for the order to be allocated to inventory. The conditions of allocation depend on the availability of inventory at a particular facility for all the items being attempted, which will either be fully available at one location or partially available.

### Availability States

* Fully Available Without Splitting
  * Partially Available
*   Meets Shipment Threshold Value

    **What is Shipment Threshold Value?**

    Setting order splitting thresholds based on shipment value directly addresses the problem of maintaining the profitability of shipments while balancing fulfillment speed and customer experience. Retailers can set a minimum shipment value that they want to maintain during allocation which also ensures profitability of the order. When ordered items are allocated, the brokering engine will not only ensure that the allocated items meet the threshold but also that the unallocated items also meet the threshold. Checking outstanding and unallocated items of an order is equally important because if their value doesn’t meet the shipment value threshold, those items will never be automatically allocated. By checking both allocated and unallocated item totals, the brokering engine ensures that inventory is selected in a way that ensures fulfillment margins for the entire order.

Based on each of these conditions, an action can be tied to the allocation. Retailers can choose which action to perform based on the outcome.

### Available Actions

**1. Allocate Partial**: Allow an order to be split and allocated partially if some items are available at a location.

**2. Move to the Next Rule**: Automatically move unallocated items to the next rule in the sequence.

**3. Move to Queue**: Transfer unallocated items to a selected queue for further processing. If the availability of the inventory lookup is not what is expected, but the item should not be attempted by another rule in this flow, the items can be moved to a specific queue where they can be held for relevant actions. For example, move unfillable orders to the “Unfillable Parking” so that they can be rerouted during a different

**4. Add Auto Cancel Date**: Specify the number of days to automatically cancel orders that could not be allocated. Based on the inventory availability, retailers may want to add an auto cancel date on the order, to ensure that they do not remain in the fulfillment pipeline for too long.

Understanding and appropriately configuring these actions will let you fine-tune brokering rules, improving order routing efficiency and meeting specific fulfillment requirements.

{% hint style="success" %}
By leveraging the full range of order fetching, order and inventory filtering, and sorting parameters, provided by HotWax Commerce’s Order Routing App, retailers can create highly customized and efficient order routing strategies that optimize inventory usage, reduce shipping times and costs, and ensure their fulfillment process is specific to their unique business needs.
{% endhint %}
