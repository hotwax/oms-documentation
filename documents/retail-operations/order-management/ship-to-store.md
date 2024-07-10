# Ship to Store

Ship to Store is a functionality within Hotwax Commerce that enables retailers to fulfill Buy Online, Pickup In-Store (BOPIS) orders even when the selected store's inventory is unavailable. The feature automates the process of identifying and tagging such orders, then seamlessly routes them to a warehouse with the desired item in stock. 

The designated warehouse then fulfills the order and ships it directly to the customer's chosen store for pickup. This ensures a smooth, uninterrupted shopping experience for customers while optimizing inventory utilization across the retailer's network.

The feature leverages Shopify Flow to tag relevant orders, and the Hotwax Commerce system then sets the appropriate "Ship To" address. This triggers a brokering process, sending the order to a designated store for fulfillment and shipment. The customer's selected store then receives the order and notifies the customer that it's ready for pickup. This end-to-end automation streamlines operations and minimizes manual intervention.

## Order flow

1.  **Order Identification:**
    *   The OMS checks for a unique line item property called `"ship_to_store"` in the Shopify order JSON. This property is a key indicator that the order is intended for Ship to Store fulfillment.
    *   In Shopify admin, a Shopify Flow is created to tag each Ship to Store order, providing an additional layer of identification.
    *   After importing the order into Hotwax Commerce, the system reads both the tag and the line item property to confirm the order type.

2.  **Order Routing:**
    *   Once a Ship to Store order is identified, the system sets a pre-determined facility as the "Ship To" address in the order. This ensures that the order is routed to the correct warehouse for fulfillment.
    *   The order is then placed in a brokering queue, where the brokering engine assigns it to a specific store for processing.

3.  **Order Fulfillment:**
    *   The assigned store picks, packs, and ships the order to the designated pickup location chosen by the customer.
    *   The order status is updated to "shipped" but not "completed" at this stage, as the customer hasn't yet received the item.

4.  **Pickup Location Processing:**
    *   The pre-determined pickup location (or the facility chosen by the customer) can view the incoming shipment in the BOPIS (Buy Online, Pickup In-Store) Fulfillment app.
    *   Upon receiving the order, a staff member at the pickup location clicks "Schedule" in the BOPIS Fulfillment app. This action changes the order status in the OMS (Order Management System) to "scheduled" and triggers a "Ready for Pickup" email to be sent to the customer.

5.  **Customer Pickup and Order Completion:**
    *   The order is displayed on the "Ready for Pickup" page in the BOPIS Fulfillment app.
    *   After the customer picks up the order, a staff member clicks "Handover," marking the order as "complete" in Hotwax Commerce