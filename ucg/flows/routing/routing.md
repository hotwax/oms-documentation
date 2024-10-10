# Order Routing for Frank And Oak

Frank And Oak, a Canada-based online clothing retailer, is renowned for its commitment to sustainability and innovation. The company operates a central warehouse and multiple retail stores across Canada, with shipping capabilities extending to the USA.

Frank And Oak focuses on eco-conscious fashion while continuously enhancing its logistics, aiming to optimize delivery speed, reduce operational costs, and improve inventory management.

This case study explores how retailers with similar business models can leverage HotWax Commerce Order Routing to achieve these goals.

## Business Requirements for Frank And Oak Order Fulfillment:

#### Time-in-Transit:
- Frank And Oak offers standard shipping with delivery within 7 days for all USA and Canada orders.

### #Order Priority:
- All the orders should be prioritized by the FIFO rule, the orders placed first should be brokered first.

#### U.S. Order Fulfillment:
- All US orders must be fulfilled exclusively from the central warehouse in Canada.

#### Canada Order Fulfillment Priorities:
1. **Warehouse First:** Canada orders should be prioritized to be fully fulfilled from the warehouse.
2. **Store Fulfillment:** If the warehouse lacks inventory, orders should be fully fulfilled from stores.
3. **Partial Fulfillment from Warehouse:** If neither the warehouse nor stores have the entire stock, orders items with available inventory should brokered to the warehouse.
4. **Partial Fulfillment:** If the warehouse is out of stock, partial fulfillment from stores should be allowed.

#### Unfillable Orders:
- If no inventory is available at both locations, the order should be available for re-routing. These unfillable orders should be rerouted along with regular orders.

#### Brokering Frequency:
- The brokering run should be scheduled to ensure continuous and timely order processing.

To meet its goals, Frank And Oak has implemented HotWax Commerce's advanced order routing system. They can now set custom routing rules, ensuring that orders are fulfilled from the most suitable location as per their business requirement.

## Key Routing Considerations
- **USA Orders:** To minimize international shipping costs, it is essential to fulfill all orders through the central warehouse rather than retail stores. Shipping directly from the warehouse ensures cost-efficiency and avoids the higher expenses associated with international shipping from individual retail locations.
- **Canada Orders:** For orders within Canada, the warehouse is the primary fulfillment center. Retail stores are designated as backup fulfillment points only in situations where the warehouse does not have sufficient inventory. This strategy allows for effective inventory management while still providing backup options to meet demand.
- **Standard Shipping:** All orders are processed under standard shipping conditions, which guarantees a consistent delivery speed across all shipments. The focus is placed on optimizing shipping costs and managing inventory efficiently, as all orders adhere to the same shipping protocol.

## How to Setup Order Routing

### Map Shipping Methods

Frank and Oak operate two separate Shopify stores for the US and Canada. During the initial mapping of shipping methods in HotWax Commerce, the shipping methods are configured distinctly to differentiate between orders destined for the USA and those for Canada.

- **U.S. Orders:**
  - Mapped to "US_Standard_Shipping": All the standard orders from the US store will have the “US_STANDARD” Shipping method in Hotwax Commerce.
- **Canada Orders:**
  - Mapped to "Standard_Shipping": Standard orders from Canada Store will have the shipping method set as “Standard” in HotWax Commerce.

### Create Facility Groups:

For Frank and Oak, two facility groups needs to be created:
- **Group 1:** For Warehouses, to centralize warehouse-based fulfillment.
- **Group 2:** For Stores, to route orders to retail stores when necessary.

### Configure Order Routing

#### Create a Brokering Run:
- Establish a single brokering run within the `HotWax Commerce Order Routing` app to manage the routing of both "US" and "Canada" orders. Since Frank and Oak do not have any specific requirements to schedule the runs differently, only one run is required.

#### Create Canada Order Batch:
- Canada Orders have a different shipping method than the US orders therefore all the Canada orders that will be filtered should be routed together.

#### Configure Order Fetching Queues:
- Frank and Oak does not have any specific requirement to broker different kinds of orders separately, therefore select the following queues for order processing:
  - **Brokering Queue:** Orders that are brokered for the first time.
  - **Unfulfilled Queue:** Orders that cannot be routed due to a lack of inventory at any location are routed from the unfillable queue.
  - **Rejected Queue:** Orders that are rejected from fulfillment locations due to unavailable inventory.

#### Filter Orders by Shipping Methods:
- Since all the orders from the Canada stores are mapped with the standard shipping method, select the standard shipping in the shipping method filter to ensure that only Canada orders are routed in this batch.

#### Sort Orders by Date:
- Frank and Oak required orders to be prioritized based on first in first out so the orders should be sorted based on the Order Date.

#### Create Inventory Rules:
1. **First Inventory Rule:** Frank and Oak need to prioritize fulfillment from the central warehouse to centralize inventory management. Therefore in the Inventory Filter, select the Facility Filter and choose the facility group with only warehouse location. Since Frank and Oak have only one warehouse, there is no need to sort the inventory locations. In the case of inventory availability keep the partial fulfillment off so that first it can be ensured that all orders can be fulfilled from one location only. If the inventory is not available, move the order to the next rule.

2. **Second Rule:** In case of inventory unavailability from the warehouse, Frank and Oak want to route orders to retail stores based on customer proximity to reduce shipping costs. Since Frank and Oak have no separation in retail stores, they want the order to be routed to any facility that can fulfill the complete order. Therefore, there is no need to add an inventory filter. However, inventory can be sorted by proximity. If all the items are still unavailable, move the item to the next rule.

3. **Third Rule:** Frank and Oak want to allow partial fulfillment from the warehouse to ensure maximum utilization of the warehouse's available inventory. Therefore select the inventory filter with only facility group with warehouse and keep the partial fulfillment on. For the unavailable item inventory, move the order to the next rule.

4. **Fourth Rule:** Enable partial fulfillment from stores, sorted by proximity, to provide a cost-effective solution when the warehouse cannot fully fulfill the order. If the item is still not available, move the order to the "Unfillable Parking” Queue.

5. **Fifth Rule:** Finally, frank and oak require fulfillment from any available location, so the inventory filter can be turned off while keeping the partial fulfillment on. Sort inventory by priority to ensure that orders are brokered to the closest shipment location to minimize shipping costs. If the inventory is not available, move the order to unfillable parking. This ensures that retailers identify, that the inventory of the item is not available at any location.

#### Create US Order Batch:
- US orders are mapped with US_Standard Shipping, therefore a new routing batch needs to be created with inventory filter selected as US_Standard Shipping Method. The orders are again sorted by date to ensure orders are fulfilled on First in First Out basis as per Frank and Oak’s requirement.

#### Create Inventory Rule for US orders:
- Since all US orders need to be fulfilled from the warehouse only, only one inventory rule is required. Select the facility group filter with only the warehouse facility and keep the partial shipment allowed to ensure that the available inventory is allocated to the order. If any order item is not available move the order item to the unfillable parking.

### Activate Components:
1. **Activate Inventory Rules:** Start by activating the inventory rules, which define the specific fulfillment strategies for U.S. and Canadian orders.
2. **Activate Each Order Batch:** Next, activate the order batches for both US and Canada to ensure that orders are processed according to their respective shipping methods.
3. **Activate the Brokering Run:** Finally, activate the brokering run. Make sure to schedule the run frequency every 15 minutes as Frank and Oak requires continuous and timely brokering of all the orders.

## Conclusion:
Frank And Oak utilizes HotWax Commerce to optimize order fulfillment. By creating specific batches for U.S. and Canada orders, and setting up precise inventory rules, the system ensures that U.S. orders are fulfilled from the central warehouse and Canada orders are handled effectively based on warehouse and store inventory. The streamlined brokering run and scheduling of inventory rules enhance processing efficiency, reduce costs, and support reliable delivery within the 7-day standard shipping timeframe, aligning with the company's 
