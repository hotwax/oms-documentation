# Use Cases

## Scenario 1: Fulfilling Marketplace Orders from Warehouse

A retailer wants to ensure that all orders placed through various marketplaces are fulfilled exclusively from their warehouse. This scenario is common for businesses that prefer to manage marketplace orders separately due to specific logistical or contractual obligations.

### Steps to Implement

1. **Identify Marketplace Orders**
   * Marketplace orders can be identified using specific order tags from Shopify. These tags help differentiate marketplace orders from other sales channels.
   * **Order Tags:** Ensure that all orders coming from marketplaces are tagged with `marketplace_sales_channel` in Shopify.
2. **Set Up Facility Groups**
   * HotWax Commerce allows retailers to create specific facility groups for different sales channels.
   * **Create Facility Group:** Set up a facility group that includes only warehouse.
   * **Inventory Filter:** In the inventory filter, select the warehouses to ensure only these are considered for fulfillment.
3. **Configure Order Routing Rules**
   * Create specific routing rules to handle marketplace orders:
   * **Create Order Batch:** In HotWax Commerce, navigate to the Order Routing App and create a new order batch for marketplace orders.
   * **Order Filter:** Apply filters to select orders based on the `marketplace_sales_channel` tag. This ensures that only orders from marketplaces are included in this batch.
4. **Set Up Inventory Rules**
   * Define inventory rules to route marketplace orders to the warehouse:
   * **Create Inventory Rule:** Create an inventory rule in the newly created order batch.
   * **Select Facility Group:** Apply the previously created facility group that includes only warehouses.
5. **Activate and Schedule**
   * Ensure the routing rules and order batches are activated and scheduled appropriately:
   * **Activate Inventory Rule:** Activate the inventory rule to ensure it is applied to incoming marketplace orders.
   * **Activate Order Batch:** Change the status of the order batch from `Draft` to `Active`.
   * **Schedule Routing:** Set the frequency at which the routing runs should occur to ensure timely fulfillment.

<figure><img src="../.gitbook/assets/Marketplace orders.png" alt=""><figcaption><p>Marketplace Orders Routing</p></figcaption></figure>

## Scenario 2: Fulfilling eCommerce Orders from Warehouse and Stores

Many times retailers wants to prioritize fulfilling eCommerce orders from their warehouse. If the warehouse is unable to fulfill an order due to inventory constraints, the order should then be routed to retail stores for fulfillment.

### Steps to Implement

1. **Create Order Batch for eCommerce Orders**
   * Start by creating an order batch that includes all eCommerce orders.
   * **Order Batch Creation:**
     * In HotWax Commerce, navigate to the Order Routing App.
     * Create a new order batch and name it `eCommerce Orders`.
2. **Set Up Facility Groups**
   * Create two facility groups: one for warehouses and another for stores.
   * **Warehouse Facility Group:**
     * Go to Facility Groups.
     * Create a new facility group named `Warehouses`.
     * Add all warehouses to this group.
   * **Store Facility Group:**
     * Go to Facility Groups.
     * Create a new facility group named `Stores`.
     * Add all retail stores to this group.
3. **Configure Inventory Rules**
   * Define inventory rules to ensure that orders are first checked for availability in warehouses, and if not available, then in stores.
   * **First Inventory Rule (Warehouses):**
     * In the `eCommerce Orders` batch, create an inventory rule.
     * Select the `Warehouses` facility group in the inventory filter.
     * Ensure that partial allocation is turned off to prioritize fulfillment from a single warehouse location.
   * **Second Inventory Rule (Stores):**
     * Create another inventory rule in the same order batch.
     * Select the `Stores` facility group in the inventory filter.
     * This rule will be applied if the warehouse cannot fulfill the order.
4. **Activate and Schedule**
   * Activate the inventory rules and the order batch to ensure proper order routing.
   * **Activate Inventory Rules:**
     * Activate both the warehouse and store inventory rules to ensure they are applied during the routing process.
   * **Activate Order Batch:**
     * Change the status of the `eCommerce Orders` batch from `Draft` to `Active`.
   * **Schedule Routing:**
     * Set the frequency at which the routing runs should occur to ensure timely fulfillment of eCommerce orders.

{% embed url="https://youtu.be/kutfVODG4LQ" %}
eCommerce Orders Routing
{% endembed %}

## Scenario 3: Handling Peak Hours with Store Fulfillment

During peak hours, store managers need the flexibility to turn off fulfillment from their stores to manage capacity effectively. This ensures that stores are not overwhelmed and can maintain service quality.

### Steps to Implement

1. **Facility App**
   * Navigate to Facility App: Open the Facility App from the main menu.
   * Locate the Facility: Find the location for which you need to adjust fulfillment capacity.
   * Open Facility Details Page: Click on the location name to open the Details page.
   * Adjust Fulfillment Capacity: Navigate to the fulfillment capacity card. Click on the chip and select “No Capacity” to temporarily turn off fulfillment from this location.
2. **Fulfillment App**
   * Access Fulfillment App: Store managers can log in to the Fulfillment App.
   * Locate Fulfillment Capacity Card: Navigate to the fulfillment capacity card specific to their store.
   * Set Capacity to No Capacity: Directly control and adjust the fulfillment capacity to “No Capacity” to prevent new orders from being routed to their store during peak hours.

<figure><img src="../.gitbook/assets/Order Fulfillment Capacity.png" alt="" width="375"><figcaption><p>No Capacity</p></figcaption></figure>

## Scenario 4: Setting Maximum Order Capacity for Stores

To prevent stores from being overloaded, retailers can set a maximum order capacity. This ensures that once a store reaches its capacity, no additional orders are routed to it until the load decreases.

### Steps to Implement

1. **Set Maximum Order Capacity**
   * **Facility App:**
     * Open the Facility App and navigate to the relevant location.
     * On the Facility Details page, go to the fulfillment capacity card.
     * Set the maximum number of orders that can be fulfilled from this location.
   * **Fulfillment App:**
     * Store managers can also set the maximum order capacity via the Fulfillment App.
     * Navigate to the fulfillment capacity card and specify the maximum number of orders.
2. **Monitor Capacity**
   * Once the limit is reached, no new orders are brokered to that location until the order count drops below the maximum threshold.

<figure><img src="../.gitbook/assets/Custom Order Fulfillment Capacity.png" alt="" width="375"><figcaption><p>Max Order Limit</p></figcaption></figure>

## Scenario 5: Re-Routing Rejected Orders

When order fulfillment is rejected from stores, the order routing engine re-routes rejected orders to the next best location with available inventory to ensure fulfillment.

### Steps to Implement

1. **Create Order Batch for Rejected Orders**
   * **Queue Filter Setup:** In the order batch settings, apply the queue filter and select the `Rejected Order Item` queue. This filter ensures that only rejected orders are included in this batch.
2. **Create Inventory Rules**
   * **Define Re-routing Rules:** Set up inventory rules to determine the re-routing process. For example, prioritize locations with the highest inventory balance first, then by proximity.
   * **Facility Preferences:** Specify facility groups to ensure that orders are re-routed to the preferred locations or re-route rejected orders to all the available locations (stores and warehouses) that can fulfill them.
3. **Activate and Schedule**
   * **Activate Inventory Rules and Batch:** Activate the rules and the order batch to ensure they are in effect.
   * **Schedule Routing Runs:** Schedule the routing runs to occur at regular intervals, ensuring timely re-routing of rejected orders.

<figure><img src="../.gitbook/assets/Rejected orders.png" alt=""><figcaption><p>Rerouting Rejected Orders</p></figcaption></figure>

## Scenario 6: Proximity-Based Order Routing

Retailers want to ensure that orders are only fulfilled from locations within a specific distance from the customer, reducing delivery times and costs.

### Steps to Implement

1. **Proximity Filter**
   * **Create Inventory Rule:** When setting up an inventory rule, select the proximity filter.
   * **Define Maximum Distance:** Specify the maximum distance (e.g., 50 miles) for order routing. This means orders will only be routed to locations (stores or warehouses) within this distance from the customer.
2. **Sort Inventory by Proximity**
   * **Proximity Sorting:** In the inventory rule, sort the inventory allocations by proximity. This ensures that orders are fulfilled from the nearest possible location, reducing delivery times and enhancing customer satisfaction.
   * **Inventory Balances:** Optionally, further sort by inventory balances to prioritize locations with the highest stock levels, ensuring efficient inventory utilization and reducing the likelihood of stockouts.

<figure><img src="../.gitbook/assets/Proximity based routing.png" alt=""><figcaption><p>Proximity Based Routing</p></figcaption></figure>

## Scenario 7: Minimum Stock Availability

Retailers aim to maintain sufficient in-store inventory for walk-in customers while fulfilling online orders. They need a solution that allocates online orders only to locations with the minimum required stock. By using the `Brokering Safety Stock` feature, orders are routed exclusively to locations that meet the minimum stock level, ensuring that essential inventory is preserved for in-store customers.

### Steps to Implement

1. **Configure Inventory Rules**
   *   **First Inventory Rule**: While setting up inventory rules in the Order Routing App, choose the `Brokering Safety Stock` filter.

       **Define Brokering Safety Stock**: Define the brokering safety stock level to keep in reserve for each item.

       This ensures that online orders are only allocated to locations where the inventory for all items in the order meets or exceeds the defined `Brokering Safety Stock`. Orders will only be routed to locations that have sufficient inventory for each item, ensuring that in-store inventory remains available for walk-in customers.

       For example, if the `Brokering Safety Stock` is set to greater than 10, the inventory will only be allocated if the store has more than 10 units of that item available. This ensures that walk-in customers have access to sufficient stock.
   * **Second Inventory Rule**: If no location can fulfill all items in an order based on Rule 1, the second rule applies. In this rule, again choose the `Brokering Safety Stock` filter, but also enable the partial allocation.

**Partial Allocation Setup**

*   **Enable Partial Allocation**: Turn on the toggle for partial allocation.

    This means that if a single location does not have enough stock for the entire order, the order will be split. Items will be allocated to different locations that meet the \`Brokering Safety Stock for each item, allowing the order to be partially fulfilled while still preserving inventory in stores.

2. **Activation and Scheduling**
   * **Activate Inventory Rules**: Ensure all the inventory rules are activated to be in effect.



{% embed url="https://youtu.be/eGIvwQWvNm4" %}
Set Brokering Safety Stock
{% endembed %}

## Scenario 8: Managing Store Fulfillment Based on Rent Agreements

Retailers with diverse rent agreements, particularly in malls where rent may be tied to sales revenue, need to strategically manage order fulfillment to avoid high rental costs. Prioritizing stores with fixed or lower rent costs for order fulfillment can enhance profitability.

### Steps to Implement

1. **Facility Groups Setup**:
   * **Group 1: Fixed/Lower Rent Stores**:
     * Create a facility group that includes only the stores with fixed or lower rent costs.
     * This prioritization ensures that orders are first routed to these cost-effective locations.
   * **Group 2: All Stores**:
     * Create another facility group that includes all stores, serving as a fallback to fulfill orders if the prioritized stores do not have sufficient inventory.
2. **Inventory Rules Definition**:
   * **Inventory Rule 1: Fixed/Lower Rent Stores**:
     * Set up an inventory rule that applies to the first facility group (Fixed/Lower Rent Stores).
     * This rule ensures that orders are first routed to these stores, minimizing rental costs.
   * **Inventory Rule 2: All Stores**:
     * Define a secondary inventory rule using the second facility group (All Stores).
     * This rule ensures that if the prioritized stores cannot fulfill the order, it will be routed to any store, preventing unfulfilled orders.
3. **Activation and Scheduling**:
   * **Activate Inventory Rules**:
     * Ensure both inventory rules are activated to be in effect.
   * **Schedule Brokering Runs**:
     * Schedule the brokering runs to execute these inventory rules at regular intervals, maintaining efficient order fulfillment.

{% embed url="https://youtu.be/sAvLINYU7O4" %}
Store Fulfillment Based on Store Rent
{% endembed %}

## Scenario 9: Balancing Shipping Costs and Distance with Split Shipments

Retailers need to balance the cost of shipping, which is influenced by both the distance and the number of shipments. The goal is to minimize shipping costs by considering when it's more cost-effective to ship from multiple locations versus a single distant location. This scenario is particularly relevant for retailers with stores and warehouses spread across a wide geographic area.

### Steps to Implement

1. **Initial Proximity Check Without Partial Allocation:**

* When creating the first inventory rule, apply a proximity filter with a specified distance (e.g., 100 miles) without allowing partial allocation.
* This rule ensures that orders are fulfilled from a single location if all items are available within the specified distance, minimizing the shipping distance.

2. **Partial Shipment Within Proximity:**

* Create a second inventory rule that allows partial shipment within the same proximity filter (e.g., 100 miles).
* This rule ensures that if no single location within the specified distance has all items, the order can be split and fulfilled from multiple nearby locations.

3. **Fallback to Distant Locations Without Splitting:**

* In the third inventory rule, remove the proximity filter and disable partial shipment.
* This rule ensures that if the items are not available within the initial proximity, the entire order is shipped from a distant location that can fulfill the order completely, minimizing the number of shipments.

4. **Include All Stores:**

* The final inventory rule includes all stores with partial shipment allowed.
* This rule ensures that if the order cannot be fulfilled completely from distant locations, it is split across all available locations to prevent unfulfilled orders.

5. **Activation and Scheduling**:

* **Activate Inventory Rules**:
  * Ensure all the inventory rules are activated to be in effect.
* **Schedule Brokering Runs**:
  * Schedule the brokering runs to execute these inventory rules at regular intervals, maintaining efficient order fulfillment.

{% embed url="https://youtu.be/K59lNhHtKMM" %}
Balance Shipping Cost and Distance with Split Shipments
{% endembed %}

## Scenario 10: Optimizing Order Splitting by Setting Shipment Thresholds

Retailers often split orders across multiple locations to optimize inventory usage and expedite fulfillment. However, this strategy can lead to challenges, particularly concerning shipping costs for low-value items. Retailers may incur losses when splitting orders that include items of low value. While multi-location fulfillment can ensure timely delivery and effective inventory management, it can also result in disproportionately high shipping costs for low-value items.

To address this issue, HotWax Commerce allows merchandisers to set threshold values for order items. This helps in more efficient order splitting while reducing the risk of losses due to shipping low-value items separately.

**Example:** If an order contains two items, such as a 'Brown Belt' and a 'Brown Wallet,' each valued at $160, and a brokering threshold of $100 is set, the items will be split even if they are not available at a single location. Conversely, if an order includes a 'Black Belt' and a 'Black Wallet,' each valued at $80, the order will not be split as it would cause the shipment to fall below the threshold.

### Steps to Implement

1. **Navigate to Store Settings**
   * **Access Store Settings**: In the HotWax Commerce Order Management System, navigate to the Product Store page.
   * **Add New Setting**: Go to the store settings section and click on "Add Settings."
2. **Set Brokering Shipment Threshold**
   * **Select Brokering Threshold**: In the settings submenu, select "Brokering Shipment Threshold."
   * **Define Threshold Value**: Enter the desired shipment threshold value that will prevent splitting orders below this amount. For example, set the threshold at $100 to ensure that only orders above this value are eligible for splitting across multiple locations.
3. **Save Settings**
   * **Finalize the Configuration**: Save the store settings to apply the brokering threshold across the Product Store.

With this threshold in place, orders will only be split if the value of the items meets or exceeds the set threshold, optimizing shipping costs and preventing losses on low-value shipments.

{% embed url="https://youtu.be/GQU6wyNI4kw" %}
Set Brokering Shipment Threshold
{% endembed %}

## Scenario 11: Managing Order Splitting for Grouped Items (Kits and Gift Items)

Retailers often face scenarios where certain items in an order must be shipped together, while other items can be shipped separately. For example, if a customer orders a frame and lenses along with sunglasses, the frame and lenses must be shipped together, but the sunglasses can be shipped from a different location. In such cases, items like the frame and lenses are grouped to ensure they are always shipped together.

HotWax Commerce allows retailers to manage these scenarios by disabling the splitting of grouped items while keeping the option to split other items in the order. This ensures that grouped items, which are critical to be shipped together, are handled appropriately, while other non-grouped items can still be split for faster fulfillment.

### Steps to Implement

1. **Create Inventory Rule for Order Batch**
   * **Access Inventory Rules**: Begin by creating an inventory rule in the HotWax Commerce Order Routing App.
2. **Configure Partial Allocation Settings**
   * **Navigate to Partial Allocation**: In the inventory rule settings, locate the "Partially Available" card. This section allows you to configure how items are allocated when they are not fully available at a single location.
   * **Enable Partial Allocation**: Turn on the toggle for "Partial Order Allocation" to allow the order to be split across multiple locations for items that are not grouped.
3. **Disable Splitting for Grouped Items**
   * **Toggle Off for Grouped Items**: Ensure that the toggle for "Partially Allocate Grouped Items" is turned off. This setting ensures that orders for grouped items, such as kit products and gift items are not split and are shipped together from a single location.
4. **Optional: Enable Splitting for Specific Scenarios**
   * **Enable Grouped Item Splitting**: If the retailer sells items that are grouped but can be split under certain circumstances (e.g., gifting items), they can turn on the toggle for "Partially Allocate Grouped Items."
   * **Best Practice**: It is recommended first to create an inventory rule with grouped item splitting disabled and then follow it with a rule where grouped item splitting is enabled. This layered approach ensures that grouped items are handled appropriately based on the retailer's preferences.

{% embed url="https://youtu.be/bPBdwJZ6Tm8" %}
Managing Order Splitting
{% endembed %}
