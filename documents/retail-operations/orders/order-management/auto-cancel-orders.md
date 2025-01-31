# Auto-Cancellation

Managing inventory and order fulfillment is a critical aspect of retail operations. However, sometimes items may be unavailable across all facilities. In such cases, retailers can use the Auto-Cancel Date Management feature, which provides them with the ability to automate the cancellation of orders that cannot be fulfilled due to inventory shortages within the desired frame. This feature helps retailers avoid operational delays and improve customer satisfaction by ensuring orders do not remain in limbo indefinitely. When an item is marked unfillable after a failed brokering attempt, users can set or modify an auto-cancel date, streamlining the process of handling these unfillable orders. For example, an e-commerce order can have a 5-day auto-cancel period, while SendSale orders may not have any auto-cancellations, allowing flexibility based on business rules.

## Step-by-Step Usage Instructions:

#### 1. **Access the Order Routing App**

* **Navigate to:** Launchpad > [`Order Routing`](../brokering/) App. This is where you configure brokering runs and set up auto-cancellation rules for unfillable orders. Inventory managers or fulfillment team members typically use this to manage order fulfillment and brokering logic.

#### 2. **Select the Brokering Run**

* Choose the brokering run for which you want to set an auto-cancellation date. Different brokering runs may handle various fulfillment strategies for example unfillable order brokering runs may be different from regular runs, so selecting the right run ensures the proper application of auto-cancellation rules.

#### 3. **Select the Order Batch**

* Within the selected brokering run, choose the relevant order batch. Retailers may want to set different auto-cancellation rules for standard orders versus expedited orders. This step allows for customizing rules based on order priorities and fulfillment types.

#### 4. **Navigate to the Last Inventory Rule**

* Inside the chosen order batch, scroll down and select the last inventory rule. This rule is designed to handle scenarios where the item is unavailable across all facilities, triggering the need for auto-cancellation or alternative handling options.

#### 5. **Set the Auto-Cancel Date**

* Go to the "Unavailable Item" card and add the desired auto-cancel date in the `Auto-Cancel Date` chip. This defines the time frame (e.g., 5 days) for holding the unfillable item before it is automatically canceled.
* You can move the item to `unfillable parking` for the item with unavailable inventory so that it can be easily differentiated with the regular orders.

![auto-cancellation](https://github.com/user-attachments/assets/d3d31c91-a612-45b4-99c0-e1c4b4e3f0af)

## Removing Auto-Cancellations

* If the inventory for an unfillable item is expected to arrive soon or if the order needs to be held longer, you can remove the auto-cancel date.
  1. **Navigate to the "Unavailable Item" Card** in the relevant inventory rule within the `Order Batch`
  2. **Clear the Auto-Cancel Date:** Use the `Clear Auto-Cancel Date` toggle to remove the previously set date. This prevents the item from being automatically canceled.
  3. **Move the Order to Unfillable Hold Queue:** Instead of canceling, you can send the order to the `unfillable hold queue` if you anticipate the inventory arriving soon. This step ensures that the order is retained in the system until the item is back in stock, improving order fulfillment efficiency.

Using these options, you can control when and how unfillable orders are managed, ensuring better coordination and reduced chances of unnecessary order cancellations.

![clear auto cancellation](https://github.com/user-attachments/assets/06f8c649-0fa0-40eb-a1a0-bdc1b3da0735)

## Monitoring Unfillable Orders

* Regularly monitor the **Unfillable Report**, which highlights orders in unfillable parking with an auto-cancel date. This report helps ensure that unfillable items are correctly scheduled for cancellation and allows you to adjust or clear the auto-cancel date if needed.

## Auto-Cancellation Job

* When the auto-cancel date is reached, the system automatically runs the `autocancelorderitems` job at midnight. This job cancels any unfillable items and logs the cancellation reason as "auto-cancellation," ensuring timely order resolution and preventing delays in the process.
