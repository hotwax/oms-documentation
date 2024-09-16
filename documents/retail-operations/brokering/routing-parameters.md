# Order Routing Parameters

The Order Routing App in HotWax Commerce provides retailers with a variety of customizable parameters to configure how orders are brokered to different facilities. These parameters allow for granular control over which orders are sent to which locations, depending on specific criteria such as shipping methods, order priority, and sales channels. By tailoring these parameters, retailers can create a highly optimized routing strategy that balances speed, cost, and inventory availability.

### Order Filters

1. **Origin Facility Groups**\
   This parameter allows retailers to filter orders based on the facility group from which they originated. For example, if a retailer wants all SendSale orders from specific facilities to be routed to a warehouse only, they can apply this filter. It is especially useful for ensuring that orders from certain facility groups are handled consistently based on their origin.
2. **Shipping Methods**\
   Retailers can define brokering logic based on specific shipping methods. For instance, a retailer may decide not to broker next-day orders to any facility that is more than 100 miles away, ensuring that expedited orders are fulfilled from closer locations to meet delivery timeframes.
3. **Order Priority**\
   Retailers can prioritize orders based on their importance. For example, orders from loyalty customers can be brokered first to ensure that high-priority customers receive their orders promptly.
4. **Promise Date**\
   Pre-orders or backorders can be filtered based on their promise date. Retailers may choose to broker orders that have passed their promise date first, ensuring timely fulfillment of overdue orders.
5. **Sales Channel**\
   This parameter allows retailers to apply specific rules to orders originating from a particular sales channel. For example, retailers can route all marketplace orders to warehouses, ensuring consistent and efficient fulfillment of marketplace sales.
6. **Queues**\
   HotWax Commerce uses virtual queues to park orders that are not brokered to a facility. Retailers can filter by queue type (e.g., brokering queue, rejected parking, or unfillable parking) to determine which orders should be brokered to available inventory.



<figure><img src="../.gitbook/assets/order filter.png" alt=""><figcaption></figcaption></figure>

### Order Sorting

1. **Order Date**\
   Orders can be sorted on a first-in, first-out (FIFO) basis to ensure that older orders are fulfilled first.
2. **Order Priority**\
   Orders can be sorted by customer priority levels, such as loyalty plus, loyalty, or regular customers, allowing retailers to prioritize orders for high-value customers.
3. **Shipping Method**\
   Retailers can sort orders by shipping method, ensuring that orders with expedited shipping are allocated inventory before those with standard shipping.

<figure><img src="../.gitbook/assets/order rule.png" alt=""><figcaption></figcaption></figure>

## Inventory Parameters for Order Routing

In addition to filtering orders based on various parameters, retailers can also apply inventory filters and sorting to control how inventory is allocated to orders. These filters and sorting allow for precise management of inventory across multiple facilities, ensuring that stock levels, proximity, and order-specific rules are taken into consideration when brokering orders. By using inventory filters and sorting, retailers can better balance fulfillment speed, inventory distribution, and customer satisfaction.

### Inventory Filters

1. **Turn Off the Facility Order Limit Check**\
   Retailers have the option to bypass the maximum order limit for a facility. This filter allows flexibility in managing facility capacity during peak times or high demand periods. For example, if a retailer chooses to turn off this limit, orders can continue to be brokered to that facility even after its typical order limit has been reached.
2. **Brokering Safety Stock**\
   This filter ensures that a facility must have a minimum amount of stock available before orders are brokered to it. For instance, if a retailer sets a brokering safety stock level of 10 units, only facilities with at least 10 units of the item in stock will be eligible to fulfill the order. This prevents over-allocation and ensures that safety stock levels are maintained for unforeseen demand.
3. **Facility Group**\
   Retailers can filter orders based on specific facility groups. For example, a retailer can create a group of stores with low order volume and route orders specifically to those locations. This is useful for managing stock distribution across different types of facilities, such as separating high-volume warehouses from low-volume stores.
4. **Proximity**\
   This filter allows inventory to be allocated based on the geographical proximity of a facility to the customer. For example, a retailer can set a 200-mile proximity filter for next-day delivery orders, ensuring that only inventory within 200 miles of the delivery location is used to fulfill those orders. This helps in meeting delivery SLAs and reducing shipping times.
5. **Split Order Item Group**\
   Retailers can control whether they want to split items that belong to a specific order item group. For instance, certain items, like gift sets or bundled products, may need to be shipped together to maintain the integrity of the order. Retailers can decide whether to allow splitting of such groups or to prioritize keeping them intact, even if other items in the order are split across multiple facilities.

<figure><img src="../.gitbook/assets/inventory sort.png" alt=""><figcaption></figcaption></figure>

### Inventory Sorting

1. **Proximity**\
   Retailers can sort inventory allocation based on the distance between the customer's shipping address and the facility. This sorting method prioritizes inventory located closer to the customer, helping reduce shipping times and costs, especially for expedited orders or those requiring same-day or next-day delivery.
2. **Inventory Balance**\
   Inventory can be sorted based on stock levels, ensuring that orders are routed to the facility with the highest available inventory of the ordered item. This method helps to deplete stock from high-inventory locations first, ensuring better stock rotation and preventing stockouts at key locations.
3. **Custom Sequence**\
   Retailers can set a custom sequence of facilities, defining a specific order in which locations should be considered for order routing. For example, if a retailer wants to prioritize fulfillment from underperforming stores with lower foot traffic, they can create a custom sequence that favors those stores, helping to balance inventory across all locations. Custom sequences can also be useful for managing seasonal inventory or directing orders to specific regions.

<figure><img src="../.gitbook/assets/inventory filter.png" alt=""><figcaption></figcaption></figure>

By leveraging the full range of order selection, inventory filtering, and sorting parameters, retailers can create highly customized and efficient order routing strategies that optimize inventory usage, reduce shipping times and costs, and ensure a seamless fulfillment process tailored to their unique business needs.
