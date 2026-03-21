---
title: Product Update: Recovering BOPIS Sales with Ship to Store Fulfillment
---

### The Challenge of Inventory Exceptions
In standard Buy Online, Pickup In Store (BOPIS) workflows, the success of an order depends entirely on the local inventory of the selected pickup location. When a store associate discovers that an item is missing, damaged, or incorrectly recorded in the system, they are often forced to cancel the order. For the retailer, this results in lost revenue and wasted operational effort. For the customer, it leads to a fragmented experience where they must either find the product elsewhere or wait for a refund and re-order.

### Transforming Cancellations into Transfers
HotWax Commerce has introduced "Ship to Store" capabilities directly within the BOPIS App to bridge the gap between local inventory shortages and successful order fulfillment. Instead of cancelling an unfulfillable order, store associates can now initiate a "Request Transfer." 

This action converts the BOPIS order into a Ship to Store flow. The fulfillment source shifts from the store’s local shelves to a warehouse or distribution center that has the required stock. While the backend fulfillment logic changes, the customer’s original intent is preserved: they will still pick up their order at their preferred store location once it arrives from the warehouse.

### Synchronized Fulfillment and Tracking
The Ship to Store journey introduces a structured transition between the warehouse, the store, and the customer. Once a transfer is requested, the order is routed to a fulfillment center and shipped. To ensure store teams can manage these incoming packages effectively, the BOPIS App provides specific visibility into the shipment’s progress.

Orders arriving from the warehouse are tracked through an "Incoming" status. Store associates use the app to mark these shipments as "Arrived" once they are physically received at the store. This action triggers the transition of the order to a "Ready for Pickup" state, ensuring that the store team can organize the package in their holding area before the customer is notified.

### Communication and System Reliability
A critical component of this update is the refinement of automated communications. To prevent customer confusion, the system distinguishes between a shipment moving between facilities and a shipment being handed to a customer. Order completion notifications are suppressed while the item is in transit from the warehouse to the store. 

The final "Order Handover" email is only triggered when the store associate completes the manual handover process in the app. For orders containing multiple items, the system intelligently tracks ship groups, ensuring the final completion email is only sent once the entire order has been successfully delivered to the customer.

To maintain operational integrity, the update also introduces guardrails within the user interface:
*   **Carrier Restrictions:** When an order is designated for Ship to Store, the system restricts carrier selection to only those providers that support store delivery methods.
*   **Workflow Locks:** Once an order is converted to the Ship to Store flow, the shipment method is preserved to prevent accidental changes that could disrupt the routing logic.
*   **Data Accuracy:** Fulfillment statuses are synced in real-time, ensuring that store dashboards and search indexes accurately reflect which orders are in transit versus those ready for customer collection.

### Operational Impact
By providing a seamless pivot from local fulfillment to warehouse fulfillment, retail operations can significantly reduce BOPIS cancellation rates. Store teams are empowered to resolve inventory discrepancies on the spot without losing the sale. This workflow ensures that the retailer honors the customer’s original pickup preference while leveraging the full depth of the enterprise warehouse inventory to fulfill local demand.
