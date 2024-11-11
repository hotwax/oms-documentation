# Cross Border Shipping

## Business Overview
This document presents a case study of a Canada-based online retailer operating a central warehouse and multiple retail stores, with shipping capabilities extending to the USA. The retailer focuses on optimizing logistics to improve delivery speed, reduce operational costs, and enhance inventory management.

This guide explores how businesses with similar models can leverage an advanced order routing system to achieve these goals.

## Business Requirements for Order Fulfillment:

### Time-in-Transit:
The retailer offers standard shipping with delivery within 7 days for all USA and Canada orders.

### Order Priority:
All orders should be prioritized by the FIFO rule, ensuring that orders placed first are brokered first.

### U.S. Order Fulfillment:
All U.S. orders must be fulfilled exclusively from the central warehouse in Canada.

### Canada Order Fulfillment Priorities:
- **Warehouse First**: Canada orders should be prioritized to be fully fulfilled from the warehouse.
- **Store Fulfillment**: If the warehouse lacks inventory, orders should be fully fulfilled from stores.
- **Partial Fulfillment from Warehouse**: If neither the warehouse nor stores have the entire stock, items with available inventory should be brokered to the warehouse.
- **Partial Fulfillment from Stores**: If the warehouse is out of stock, partial fulfillment from stores should be allowed.

### Unfillable Orders:
If no inventory is available at both locations, the order should be available for re-routing. These unfillable orders should be rerouted along with regular orders.

### Brokering Frequency:
The brokering run should be scheduled frequently to ensure continuous and timely order processing.

By implementing an advanced order routing system, retailers can establish custom routing rules that ensure orders are fulfilled from the most suitable location based on business requirements.

## Key Routing Considerations

### USA Orders:
To minimize international shipping costs, it is essential to fulfill all orders through the central warehouse rather than retail stores. Shipping directly from the warehouse ensures cost efficiency and avoids the higher expenses associated with international shipping from individual retail locations.

### Canada Orders:
For orders within Canada, the warehouse is the primary fulfillment center. Retail stores act as backup fulfillment points only when the warehouse lacks sufficient inventory. This strategy enables effective inventory management while still providing backup options to meet demand.

### Standard Shipping:
All orders are processed under standard shipping conditions, ensuring consistent delivery speed across all shipments. The focus remains on optimizing shipping costs and managing inventory efficiently under the same shipping protocol.


## How to Set Up Order Routing

### Shipping Methods Mapping
The retailer operates two separate online stores for the US and Canada. During the initial mapping of shipping methods, they are configured distinctly to differentiate between orders destined for the USA and those for Canada.

- **U.S. Orders**: Mapped to "US_Standard_Shipping." All standard orders from the US store will use this shipping method.
- **Canada Orders**: Mapped to "Standard_Shipping." Standard orders from the Canada store will use this shipping method.

### Create Facility Groups:
Two facility groups need to be created:
1. Group for Warehouses, to centralize warehouse-based fulfillment.
2. Group for Stores, to route orders to retail stores when necessary.

### Create a Brokering Run:
Establish a single brokering run to manage the routing of both U.S. and Canada orders. Since there are no specific scheduling requirements for different runs, only one run is needed.

### Create Canada Order Batch:
Canada orders have a different shipping method, so all orders should be filtered and routed together.

#### Configure Order Fetching Queues:
Since there are no specific requirements to broker different types of orders separately, the following queues can be selected for order processing:
- **Brokering Queue**: Orders brokered for the first time.
- **Unfilled Queue**: Orders that cannot be routed due to a lack of inventory at any location.
- **Rejected Queue**: Orders rejected from fulfillment locations due to unavailable inventory.

#### Filter Orders by Shipping Methods:
Select the appropriate shipping method filters for each batch to ensure the correct routing of orders from different locations.

#### Sort Orders by Date:
Orders should be prioritized based on the first-in, first-out principle (FIFO), ensuring orders are processed based on their placement date.

### Create Inventory Rules

#### First Inventory Rule:
Prioritize fulfillment from the central warehouse to centralize inventory management. If inventory is unavailable, move the order to the next rule.

#### Second Rule:
Route orders to retail stores based on customer proximity to reduce shipping costs. If items are unavailable, move to the next rule.

#### Third Rule:
Allow partial fulfillment from the warehouse to maximize the use of available inventory.

#### Fourth Rule:
Enable partial fulfillment from stores, sorted by proximity, when the warehouse cannot fully fulfill the order.

#### Fifth Rule:
Fulfill orders from any available location with partial fulfillment enabled, and move unfilled orders to the "Unfillable Parking" queue if no inventory is available.

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

