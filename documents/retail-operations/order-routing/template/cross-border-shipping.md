# Retailer Routing Orders to Fulfill Orders from Multiple Countries

## Business Overview

This document presents a case study of a Canada-based online retailer operating a central warehouse and multiple retail stores, with shipping capabilities extending to the USA. The retailer focuses on optimizing logistics to improve delivery speed, reduce operational costs, and enhance inventory management.  
This guide explores how businesses with similar models can leverage an advanced order routing system to achieve these goals.

## Business Requirements for Order Fulfillment:

#### Time-in-Transit:
The retailer offers standard shipping with delivery within 7 days for all USA and Canada orders.

#### Order Priority:
All orders should be prioritized by the FIFO rule, ensuring that orders placed first are brokered first.

#### U.S. Order Fulfillment:
To minimize international shipping costs, it is essential to fulfill all orders through the central warehouse rather than retail stores. Shipping directly from the warehouse ensures cost efficiency and avoids the higher expenses associated with international shipping from individual retail locations.

#### Canada Order Fulfillment:
For orders within Canada, the warehouse is the primary fulfillment center. Retail stores act as backup fulfillment points only when the warehouse lacks sufficient inventory. This strategy enables effective inventory management while still providing backup options to meet demand.

#### Orders with Unavailable Inventory:
If no inventory is available at any locations, the order should be available for re-routing. These unfillable orders should be rerouted along with regular orders.

#### Routing Interval:
The brokering should be scheduled frequently to ensure continuous and timely order processing. 

## Key Routing Considerations

US Orders should be prioritized before Canada Orders since Canada orders can also be fulfilled from the store while US orders can only get inventory from the warehouse.

#### U.S. Order Fulfillment:
All US orders must be fulfilled exclusively from the central warehouse in Canada.

#### Canada Order Fulfillment Priorities:
Warehouse First: Canada orders should be prioritized to be fully fulfilled from the warehouse.

Store Fulfillment: If the warehouse lacks inventory, orders should be fully fulfilled from stores.

Partial Fulfillment from Warehouse: If neither the warehouse nor stores have the entire stock, orders items with available inventory should brokered to the warehouse.

Partial Fulfillment: If the warehouse is out of stock, partial fulfillment from stores should be allowed.




## How to Set Up Order Routing

### Pre-Requisites

#### Shipping Methods Mapping
The retailer operates two separate online stores in the US and Canada. During the initial mapping of shipping methods, they should be configured distinctly to differentiate between orders destined for the USA and those for Canada.

- **U.S. Orders**: Mapped to "US_Standard_Shipping." All standard orders from the US store will use this shipping method.
- **Canada Orders**: Mapped to "Standard_Shipping." Standard orders from the Canada store will use this shipping method.

#### Create Facility Groups
Two facility groups need to be created:

- **Group for Warehouses**: To centralize warehouse-based fulfillment.
- **Group for Stores**: To route orders to retail stores when necessary.

### Create Brokering Run
A single brokering run is scheduled every 15 minutes to ensure timely order processing for both U.S. and Canada orders. This regular interval ensures that orders are brokered efficiently across different regions.

## Create Canada Routing Rule
This routing rule is dedicated to handling Canadian orders, ensuring they are processed separately from U.S. orders.

### Order Filter
Two filters are applied in this routing rule:
- **Queue Filter**: Orders are fetched from three queues to ensure complete coverage of all types of Canadian orders:
  - **Brokering Queue**: Includes orders brokered for the first time.
  - **Rejected Item Parking Queue**: Includes orders rejected from fulfillment locations.
  - **Unfillable Queue**: Includes orders that were previously unfillable due to a lack of available inventory.
  
- **Shipping Method Filter**: The filter is set to include only Standard Shipping, which is the designated shipping method for Canada orders.

### Order Sort
The orders are sorted by **Order Date**, ensuring that Canadian orders are brokered on a first-come, first-served basis, following the FIFO principle.

## Create Inventory Rules
The following five inventory rules are applied to route Canadian orders effectively:

### First Inventory Rule
- **Inventory Filter**: A Facility Group Filter is applied to prioritize fulfillment from **Warehouses Only**.
- **Inventory Sort**: Orders are sorted by **Proximity** to the customer.
- **Action**: Partial fulfillment is turned off, and if no warehouse can fulfill the order, the order is sent to the next rule.

### Second Inventory Rule
- **Inventory Filter**: A Facility Group Filter is applied to allow fulfillment from **any store**.
- **Inventory Sort**: Orders are sorted by **Proximity** to the customer to prioritize the nearest store.
- **Action**: Partial fulfillment is turned off. If no store can fulfill the entire order, the order is sent to the next rule.

### Third Inventory Rule
- **Inventory Filter**: A Facility Group Filter is applied to allow fulfillment from **warehouses only**.
- **Inventory Sort**: Orders are sorted by **Proximity** to the customer to minimize delivery time from the warehouse.
- **Action**: Partial fulfillment is turned on, meaning available inventory in the warehouse is allocated to the order. For items that are unavailable, the order is sent to the next rule.

### Fourth Inventory Rule
- **Inventory Filter**: A Facility Group Filter is applied to allow fulfillment from **all stores**.
- **Inventory Sort**: Orders are sorted by **Proximity** to the customer, ensuring the closest store can fulfill the order.
- **Action**: Partial fulfillment is turned on so that available inventory in the stores is allocated to the order. For any remaining unfilled items, the order is sent to the **Unfillable Queue** for further processing later.

## Create U.S. Routing Rules
For U.S. orders, a U.S. Routing Rule is created to manage routing and fulfillment. This batch ensures U.S. orders are processed based on their specific requirements.

### Order Filter & Sort
- **Order Filter**: Two filters are applied to U.S. orders:
  - **Queue Filter**: Orders are fetched from the **Brokering Queue**, **Rejected Item Parking**, and **Unfillable Queue**, ensuring all orders are processed, including previously unfulfilled or rejected orders.
  - **Shipping Method Filter**: Only orders using the **US_Standard Shipping Method** are included in this batch, ensuring that only U.S. standard shipping orders are routed.

- **Order Sort**: Orders are sorted by **Order Date**, ensuring that earlier orders are processed first, following the first-in, first-out (FIFO) principle.

## Create Inventory Rule for U.S. Orders
For U.S. orders, the following inventory rule is applied to prioritize the central warehouse as the fulfillment location.

- **Inventory Filter**: The Facility Group Filter is set to include only the **warehouse** as the fulfillment source for U.S. orders.
- **Inventory Sort**: Orders are sorted by **Proximity** to ensure that the nearest location is considered.
- **Action**: Turn on **partial fulfillment** to allow the system to fulfill orders from available inventory in the warehouse. If any items are unavailable in the warehouse, the order is moved to the **Unfillable Queue** for future processing.

{% embed url ="(https://youtu.be/aIYfEmxTTi4)" %} caption {% endembed %}
---

### Create U.S. Order Batch:
U.S. orders should be mapped to "US_Standard_Shipping," and a new routing batch should be created to ensure that these orders are fulfilled on a FIFO basis.

### Create Inventory Rule for U.S. Orders:
All U.S. orders should be fulfilled from the central warehouse. Select the facility group filter for the warehouse, allowing partial fulfillment to allocate available inventory. If items are unavailable, move them to the unfillable queue.

---

### Activate Components:
- **Activate Inventory Rules**: Define fulfillment strategies for U.S. and Canadian orders.
- **Activate Each Order Batch**: Ensure orders are processed according to their respective shipping methods.
- **Activate the Brokering Run**: Schedule the brokering run every 15 minutes to ensure continuous and timely order brokering.

{% embed url ="(https://youtu.be/WudPbK_x68I)" %} caption {% endembed %}

## Conclusion
By leveraging a robust order routing system, retailers can optimize order fulfillment. Specific batches for U.S. and Canada orders, combined with precise inventory rules, ensure that U.S. orders are fulfilled from the central warehouse, and Canada orders are managed efficiently between the warehouse and stores. This streamlined approach enhances order processing efficiency, reduces costs, and supports reliable delivery within the 7-day standard shipping timeframe.

