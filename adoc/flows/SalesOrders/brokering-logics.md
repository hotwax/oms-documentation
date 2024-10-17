# Order Routing

## Business Overview for ADOC

ADOC, a prominent footwear retailer with over 200 stores across five Central American countries, produces its footwear and partners with global brands like Hush Puppies, The North Face, CAT, and Steve Madden, offering a diverse range of products in both online and retail locations.

Previously, ADOC focused primarily on physical stores and fulfilled orders from one retail store since they did not have any warehouses. With the implementation of HotWax Commerce, they have transitioned to using all their stores as fulfillment centers. This shift optimizes inventory management and significantly enhances order fulfillment efficiency across their entire store network for in-store and online orders.

## Business Requirements for ADOC Order Fulfillment

#### Time-in-Transit

ADOC offers multiple shipping options for their customers, such as:

* Next-Day Delivery
* Two-Day Delivery
* Three-Day Delivery
* Standard Shipping (Within 7 days)

#### Minimum Stock Availability

ADOC seeks to maintain a minimum stock level at each store before allocating orders. This ensures that inventory is available at all locations to optimize fulfillment efficiency and reduce the risk of stock shortages and order rejections.

#### Order Fulfillment Priority

ADOC operates within a limited geographical area, therefore proximity is not a major concern for the retailer. ADOC requires order routing based solely on stock availability to maintain efficient fulfillment and avoid inventory unavailability.

#### Unfillable Orders

If no store has sufficient inventory, the orders should be identified and brokered again after some time to check if the inventory has been replenished and the order can be fulfilled.

#### Frequency of Runs

ADOC requires regular brokering to operate without delay to ensure efficient processing of regular and rejected orders. For unfillable orders, they prefer the brokering run to occur within a defined time frame, as the inventory replenishment may take some time.

To meet its goals, ADOC has implemented HotWax Commerce's Configurable Order Routing System. This system enables ADOC to establish custom routing rules and criteria, including the Brokering Safety Stock parameter, ensuring orders are fulfilled from locations with the right inventory levels to align with their business requirements.

### Key Routing Considerations

#### Minimum Stock Availability Rules

* The routing process for ADOC must filter locations based on Minimum Stock availability. Locations with 15 or more units of an item should be prioritized first.
* If inventory is insufficient, the criteria need to be adjusted to include locations with 10 or more units, then 5 or more units, expanding the search while still focusing on locations with higher stock levels.
* If no location has the minimum stock, any location with available inventory should be included to ensure that orders are fulfilled.

#### Partial Fulfillment

* Allow Partial Fulfillment: If no single location can fully meet the order requirements, partial fulfillment should be allowed. This approach optimizes inventory usage and improves order completion rates by combining stock from multiple locations.

### How to Set Up Order Routing for ADOC

### Create Run

We start by creating a Regular Order Run. This run will manage all the regular orders except unfillable orders since ADOC wants all the other orders to be brokered together within regular intervals.

### Create Order Routing

Inside the Regular Order Run, we will start by creating an order batch or routing. For example, an "Expedited Batch" can be created to manage all expedited shipping orders such as next-day, two-day, and three-day delivery. This batch ensures that orders are routed as per their service-level agreements.

#### Order Filters

**Queues**

* **Brokering Queue**: For the regular standard batch, all the orders are fetched from the brokering queue. This queue stores approved but not yet brokered orders, allowing them to be processed smoothly.

**Shipping Method**

* **Standard Shipping**: Orders using next-day, two-day, and three-day shipping methods are filtered to fetch only those orders that can be delivered within the expected timeline.

**Sorting Orders**

Since ADOC is focused on timely order fulfillment, orders can be sorted based on Shipping Methods. Orders with early fulfillment demands, such as next-day delivery, are brokered on priority, followed by two-day and three-day delivery orders.

### Creating Rules

ADOC wants to prioritize fulfilling orders from well-stocked stores to maintain stability in inventory levels. This can be done through the `Brokering Safety Stock` filter in the Order Routing App. The brokering safety stock filter allows retailers to add the minimum quantity that should be available in a location before an order is routed to that store. Three levels of safety stock rules are applied as per the demand of ADOC:

* **High Safety Stock**: Stores with at least 15 units of inventory.
* **Medium Safety Stock**: Stores with at least 10 units of inventory.
* **Low Safety Stock**: Stores with at least 5 units of inventory.
* **No Brokering Safety Stock**: Any store with available inventory.

In the final rule, partial fulfillment is enabled to allow orders to be fulfilled from multiple locations if necessary.

### Activation

Once the rules are defined, they can be activated individually. Additionally, activate the Regular Standard Batch within the run to ensure all standard orders are processed as per the defined configurations.

### Other Required Batches

Additional batches include the **Rejected Expedite Batch** for expedited orders rejected due to stock unavailability and the **Rejected Standard Batch** for rejected standard orders. Both follow the same rules as their regular counterparts.

{% embed url="https://www.youtube.com/watch?v=grgaHczpmDg" %}

### Create Run for Unfillable Order

A separate run handles unfillable orders, with two batches for standard and expedited unfillable orders, rerouted after a specified time to check for inventory availability.

### Creating Rule for Unfillable Orders

The inventory rules are similar to the previous run. After defining them, activate the Unfillable Standard Batch as part of the Unfillable Order Run.

#### Unfillable Expedite Batch

This batch handles expedited orders rerouted when inventory becomes available, ensuring that unfilled orders are reprocessed efficiently.

### Activating Runs

After configuring all batches and rules, activate both the **Regular Order Run** and the **Unfillable Order Run** to ensure smooth order routing based on inventory availability and shipping method.

{% embed url="https://youtu.be/w1XtXVkNtFY" %}



### Conclusion

ADOC utilizes HotWax Commerce’s advanced routing system to streamline order fulfillment. By utilizing Brokering Safety Stock, ADOC ensures orders are prioritized based on available inventory, optimizing fulfillment for both expedited (next-day, two-day, three-day) and standard shipping. Orders that cannot be fully or partially fulfilled are routed to a separate unfillable queue, with regular brokering runs every 15 minutes and unfillable runs every 6 hours, ensuring efficient handling and timely delivery across their retail network.
