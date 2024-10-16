# Inventory-Based Order Shipping

## Business Overview for Retailers

A prominent footwear retailer that operates over 200 stores across multiple countries and offers a diverse range of products in both online and retail locations  produces its own footwear while partnering with global brands, ensuring a wide selection for its customers.

Historically, this retailer focused primarily on physical stores and fulfilled orders from a single retail location. With the implementation of HotWax Commerce, they have transitioned to utilizing all their stores as fulfillment centers. This strategic shift optimizes inventory management and significantly enhances order fulfillment efficiency across their entire store network for in-store and online orders.

## Business Requirements for Retailer Order Fulfillment

### Time-in-Transit

The retailer offers multiple shipping options for customers, including:
- Next-Day Delivery
- Two-Day Delivery
- Three-Day Delivery
- Standard Shipping (within 7 days)

### Minimum Stock Availability

The company seeks to maintain a minimum stock level at each store before allocating orders. This ensures that inventory is available at all locations, optimizing fulfillment efficiency and reducing the risk of stock shortages and order rejections.

### Order Fulfillment Priority

Due to its operational structure, proximity is not a major concern for the retailer. The company requires order routing based solely on stock availability to maintain efficient fulfillment and avoid inventory unavailability.

### Unfillable Orders

If no store has sufficient inventory, orders should be identified and brokered again after a set period to check if inventory has been replenished, allowing for order fulfillment.

### Frequency of Runs

The retailer requires regular brokering to operate without delays, ensuring efficient processing of regular and rejected orders. For unfillable orders, they prefer the brokering run to occur within a defined time frame, as inventory replenishment may take some time.

To meet its goals, Retailer has implemented HotWax Commerce's Configurable Order Routing System. This system enables the establishment of custom routing rules and criteria, including the Brokering Safety Stock parameter, ensuring orders are fulfilled from locations with optimal inventory levels.

## Key Routing Considerations

### Minimum Stock Availability Rules

Focusing on overall inventory availability, the routing process must filter locations based on minimum stock availability. Locations with 15 or more units of an item should be prioritized first. If inventory is insufficient at these locations, criteria should adjust to include locations with 10 or more units, and then 5 or more units, expanding the search while still emphasizing locations with higher stock levels.

#### Decreasing Stock Availability Condition to 0

This includes any location with available inventory, ensuring that orders are fulfilled even if no location has the minimum stock availability.

### Partial Fulfillment

**Allow Partial Fulfillment**: If no single location can fully meet the order requirements, partial fulfillment needs to be allowed. This approach optimizes inventory usage and improves order completion rates by combining stock from multiple locations.

## How to Set Up Order Routing for Retailer

### Create Run

Start by creating a **Regular Order Run**. This run will manage all regular orders except unfillable orders, as the company wants all other orders brokered together at regular intervals.

### Create Order Routing

Inside the Regular Order Run, create an order batch or routing. For example, one order batch could be an **Expedited Batch** to manage all expedited shipping orders, such as "next-day," "two-day," and "three-day." This batch ensures that orders using expedited shipping methods are routed according to their service-level agreements.

### Order Filters

- **Queues**:
  - **Brokering Queue**: For the regular standard batch, all orders are fetched from the brokering queue. This queue stores orders that are approved but not yet brokered, allowing for smooth processing in the initial brokering stage.

- **Shipping Method**:
  - **Standard Shipping**: Orders using next-day, two-day, and three-day shipping methods are filtered to retrieve only those orders that can be delivered within the expected timeline.

### Sorting Orders

Since Retailer is focused on timely order fulfillment, orders can be sorted based on **Shipping Methods**. This prioritizes orders with early fulfillment demands, such as next-day delivery orders being brokered first, followed by two-day and three-day delivery orders.

### Creating Rules

To prioritize fulfilling orders from well-stocked stores and maintain stability in inventory levels, the following three levels of safety stock rules can be applied:

- **High Safety Stock**:
  Apply the Brokering Safety Stock filter to prioritize stores with at least 15 units of inventory. Sort the stores based on their inventory balance, prioritizing those with the highest stock. Partial fulfillment is turned off. If no store meets these conditions, the order moves to the next rule.

- **Medium Safety Stock**:
  Apply the Brokering Safety Stock filter for stores with at least 10 units of inventory. Partial fulfillment is disabled, and the order proceeds to the next rule if inventory is still insufficient.

- **Low Safety Stock**:
  Apply the Brokering Safety Stock filter for stores with at least 5 units of inventory. If sufficient inventory is not available, the order moves to the next rule.

- **No Brokering Safety Stock**:
  Include any store with available inventory. Partial fulfillment is disabled.

- **Partial Fulfillment**: 
  In this final rule, no filter is applied, and partial fulfillment is enabled. Orders are fulfilled from multiple locations if necessary.

### Activation

Once the rules are defined, they can be activated individually. Activate the Regular Standard Batch within the run to ensure all standard orders are processed as per the defined configurations.

## Other Required Batches

Since Retailer also processes orders requiring standard shipping and handles rejected orders, additional order batches are created inside the same Regular Order Run.

### Rejected Expedite Batch

For expedited orders rejected due to stock unavailability, reroute orders with the same inventory rules and logic as the regular expedited batch.

### Rejected Standard Batch

Standard orders that were rejected are rerouted from the Rejected Parking Queue with Standard Shipping Filter, brokered first for timely fulfillment.

### Standard Batch

Standard orders are filtered based on the shipping method, following the same inventory rules.

### Batch Sequence

All order batches are arranged as follows:
1. **Expedited Rejected**
2. **Standard Rejected**
3. **Expedited**
4. **Standard**

{% embed url ="https://youtu.be/w1XtXVkNtFY" %} {% endembed %}

## Create Run for Unfillable Order

In addition to the Regular Order Run, a separate run manages orders placed in the Unfillable Queue. Two batches are created to handle standard and expedited unfillable orders.

### Creating Order Batch for Unfillable Order

Create the **Unfillable Expedited Batch** to reprocess orders that couldn’t be brokered due to insufficient inventory.

### Creating Rule

Inventory rules are created similarly to the previous run.

### Activation

Activate rules within the **Unfillable Standard Batch** as part of the Unfillable Order Run.

### Other Batches Required

Another batch, **Unfillable Expedite Batch**, is created for unfillable expedited orders.

{% embed url ="https://youtu.be/grgaHczpmDg" %} {% endembed %}

### Activating Runs

Activate both the Regular Order Run and the Unfillable Order Run.

## Conclusion

Retailer utilizes HotWax Commerce’s advanced routing system to streamline order fulfillment. By employing the Brokering Safety Stock feature, the company ensures that orders are prioritized based on available inventory, optimizing fulfillment for both expedited and standard shipping. Orders that cannot be fulfilled are routed to a separate unfillable queue, with regular brokering runs every 15 minutes and unfillable runs every 6 hours.
