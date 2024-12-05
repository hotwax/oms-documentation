# Retailer Routing Orders While Maintaining Inventory Balance

## Business Overview for the Retailer

The retailer, a prominent footwear company with over 200 stores across multiple countries, produces its own footwear and partners with global brands to offer a diverse range of products in both online and physical stores.

Previously, the retailer focused primarily on physical stores and fulfilled online orders from a single retail location, as they did not have any dedicated warehouses. With the implementation of HotWax Commerce, they have transitioned to using all their stores as fulfillment centers. This shift optimizes inventory management and enhances order fulfillment efficiency across their entire store network, benefiting both in-store and online orders.

## Business Requirements for Order Fulfillment

#### 1. Time-in-Transit Requirements
The retailer offers several shipping options, including:
- Next-Day Delivery
- Two-Day Delivery
- Three-Day Delivery
- Standard Shipping (Within 7 days)

#### 2. Minimum Stock Availability
The retailer aims to maintain a minimum stock level at each store before allocating orders. This ensures inventory availability at all locations, optimizing fulfillment efficiency and reducing the risk of stock shortages and order cancellations.

#### 3. Order Fulfillment Priority
Since the retailer operates within a limited geographical area, proximity is not a major concern. Instead, order routing is based solely on stock availability to ensure efficient fulfillment and prevent inventory shortages.

#### 4. Inventory Unavailability
If no store has sufficient inventory to fulfill an order, the order should be flagged and brokered again after a set time to check for inventory replenishment, ensuring the order can eventually be fulfilled.

#### 5. Routing Interval
The retailer requires regular brokering to ensure timely processing of both regular and rejected orders. For unfillable orders, the brokering process should occur within a predefined interval, allowing time for potential inventory replenishment.

## Key Routing Considerations

#### Minimum Stock Availability Rules
The routing process for the retailer must filter locations based on Minimum Stock availability. Locations with 15 or more units of an item should be prioritized first.

If inventory is insufficient, the criteria need to be adjusted to include locations with 10 or more units, then 5 or more units, expanding the search while still focusing on locations with higher stock levels.

If no location has the minimum stock, any location with available inventory should be included to ensure that orders are fulfilled.

If no single location can fully meet the order requirements, partial fulfillment should be allowed. This approach optimizes inventory usage and improves order completion rates by combining stock from multiple locations.

#### Order Routing Priority

Expedited Orders should be prioritized before standard orders when routing orders. Furthermore, if there are orders that are rejected once from any fulfillment location due to inventory unavailability, these orders should be prioritized before regular orders that are being routed for the first time.

## Setting Up Order Routing for the Retailer

### Create Run
We begin by creating a Regular Order Run. This run will manage all regular orders, excluding unfillable orders, which the retailer prefers to broker separately since the schedule of these run would be different. The regular run will consist of multiple routing rules, each configured based on different shipping methods and fulfillment priorities. The regular order runs are scheduled every 15 minutes for timely order processing and fulfillment.

### Create Routing Rule

#### 1. Standard Orders
Within the Regular Order Run, set up an Order Routing Rule to define which orders will be routed in this batch based on queues, shipping methods, and priority. The orders are fetched based on the following configurations:

#### Order Filters
The retailer applies multiple filters to ensure proper order routing:
- **Queues**: Orders are filtered from the Brokering Queue to broker all orders that will be fulfilled for the first time.
- **Shipping Method Filter**: Only orders using Standard Shipping are included.

#### Order Sort
Orders are sorted by **Order Date**, ensuring that the oldest orders are fulfilled first.

### Create Inventory Rule
For inventory management, the retailer sets up five inventory rules to ensure orders are routed to stores based on stock availability.

#### 1st Inventory Rule
- **Inventory Filter**: Orders will be routed to stores that have 15 or more units of inventory available for the ordered items.
- **Inventory Sort**: Orders are sorted by **inventory balance**, ensuring stores with the highest available stock are prioritized.
- **Action**: If this rule is not met, the order is sent to the next inventory rule.

#### 2nd Inventory Rule
- **Inventory Filter**: Stores must have at least 10 units of inventory available.
- **Inventory Sort**: Orders are sorted based on **inventory balance**.
- **Action**: Orders that do not meet this rule are sent to the next rule.

#### 3rd Inventory Rule
- **Inventory Filter**: Stores must have at least 5 units of inventory available.
- **Inventory Sort**: Orders are sorted by **inventory balance**.
- **Action**: If the stock requirement is still not met, the order moves to the next rule.

#### 4th Inventory Rule
- **Inventory Filter**: No specific stock limit is required; any store with available inventory is considered.
- **Inventory Sort**: Orders are sorted by **inventory balance**.
- **Action**: Partial fulfillment is not allowed. If inventory is still unavailable, the order moves to the next rule.

#### 5th Inventory Rule
- **Inventory Filter**: No specific stock limit is required; any store with available inventory is considered.
- **Inventory Sort**: Orders are sorted by **inventory balance**.
- **Action**: Partial fulfillment is allowed so that available inventory can be allocated to the orders. If the orders remain unfulfilled, they can be sent to the `unfillable queue`.

This system aligns with the retailer’s **Minimum Stock Availability** and **Order Fulfillment Priority** requirements by ensuring orders are routed based on stock availability and fulfillment efficiency.

#### 2. Expedited Orders
The second routing rule handles all orders with expedited shipping options, including Next-Day, Two-Day, and Three-Day Delivery. The orders are fetched based on the following configurations:

#### Order Filters
The retailer applies multiple filters to ensure proper order routing:
- **Queues**: Orders are filtered from the Brokering Queue to broker all orders for the first time.
- **Shipping Method Filter**: Only orders using Next-Day, Two-Day, and Three-Day Shipping are included.

#### Order Sort
Orders are sorted by **Shipping Method** (prioritizing Next-Day, Two-Day, and then Three-Day) and by **Order Date**.

> **Note**: The inventory rules for this order batch are the same as the rules for standard orders, focusing on maintaining inventory balance.

#### 3. Rejected Standard Orders
This routing rule manages **rejected standard orders** that were previously rejected due to stock unavailability. The orders are fetched based on the following configurations:

#### Order Filter & Sort
- **Order Filter**:
  - **Queue Filter**: Orders are fetched from the Rejected Queue.
  - **Shipping Method Filter**: Only orders using Standard Shipping are included.
- **Order Sort**: Orders are sorted by **Order Date**, ensuring that orders rejected earlier are processed first for potential fulfillment.

> **Note**: The inventory rules for this order batch are the same as the rules for standard orders, focusing on maintaining inventory balance.

#### 4. Rejected Expedited Orders
This routing rule manages **rejected expedited orders**, including Next-Day, Two-Day, and Three-Day Shipping orders that were not fulfilled initially due to stock unavailability. The orders are fetched based on the following configurations:

##### Order Filter & Sort
- **Order Filter**:
  - **Queue Filter**: Orders are fetched from the Rejected Queue.
  - **Shipping Method Filter**: Only orders with Next-Day, Two-Day, and Three-Day Shipping are included.
- **Order Sort**: Orders are sorted by **Shipping Method** (Next-Day first, followed by Two-Day, and then Three-Day) and by **Order Date** to ensure expedited orders are prioritized appropriately.

> **Note**: The inventory rules for this order batch are the same as the rules for standard orders, focusing on maintaining inventory balance.

#### Routing Rule Sequence

Since the client wants Rejected order routing first before the regular orders and wants to prioritize expedited orders, the routing Rules should be sequenced in the following manner:

1. Rejected Expedited Orders
2. Rejected Standard Orders
3. Expedited Orders
4. Standard Orders

### Create Second Runs

Retailers need to create a separate run to handle orders when inventory is unavailable across all stores. This is created as a separate run since inventory replenishment can take time so checking for inventory in every 15 minutes is not required. Therefore, this run is scheduled to run in evey 6 hours and once stock is available, the orders are re-brokered.

### Create Routing Rule

#### 1. Unfillable Expedited Orders
This routing rule manages **unfillable expedited orders**, including Next-Day, Two-Day, and Three-Day Shipping orders that were not allocated initially due to stock unavailability. The orders are fetched based on the following configurations:

- **Order Filter**:
  - **Queue Filter**: Orders are fetched from the Unfillable Queue.
  - **Shipping Method Filter**: Only orders with Next-Day, Two-Day, and Three-Day Shipping are included.
- **Order Sort**: Orders are sorted by **Shipping Method** (Next-Day first, followed by Two-Day, and then Three-Day) and by **Order Date**.

> **Note**: The inventory rules for this order batch are the same as the rules for standard orders, focusing on maintaining inventory balance.

#### 2. Unfillable Standard Orders
This routing rule manages **unfillable standard orders** that were previously rejected due to stock unavailability. The orders are fetched based on the following configurations:

- **Order Filter**:
  - **Queue Filter**: Orders are fetched from the Unfillable Queue.
  - **Shipping Method Filter**: Only orders using Standard Shipping are included.
- **Order Sort**: Orders are sorted by **Order Date**, ensuring that orders rejected earlier are processed first for potential fulfillment.

> **Note**: The inventory rules for this order batch are the same as the rules for standard orders, focusing on maintaining inventory balance.

 #### Routing Rule Sequence

Since the client wants to prioritize expedited orders, the routing Rules should be sequenced in the following manner:

1. Unfillable Expedited Orders
2. Unfillable Standard Orders


### Activating Runs

#### Step 1: Activate Inventory Rule
Ensure all inventory rules are active. Move the order routing from "Draft" to "Active" to ensure it's live and processing orders.

#### Step 2: Schedule the Routing Run
Set a schedule for how frequently each routing run will execute. For regular orders, schedule the run every 15 minutes for timely order processing, while for unfillable orders, schedule the run every 6 hours.

## Conclusion
This retailer utilizes HotWax Commerce’s advanced routing system to streamline order fulfillment. By leveraging **Brokering Safety Stock**, the retailer ensures orders are prioritized based on available inventory, optimizing fulfillment for both expedited (Next-Day, Two-Day, Three-Day) and standard shipping. Orders that cannot be fully or partially fulfilled are routed to a separate unfillable queue, with regular brokering runs every 15 minutes and unfillable runs every 6 hours, ensuring efficient handling and timely delivery across their retail network.

