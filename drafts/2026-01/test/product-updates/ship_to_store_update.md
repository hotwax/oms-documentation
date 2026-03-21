---
title: Product Update: Ship to Store for BOPIS Orders
---

Retailers often face a difficult choice when a Buy Online, Pick Up In Store (BOPIS) order cannot be fulfilled due to local inventory discrepancies: cancel the order and lose the sale, or manually attempt to recreate the order through a different channel. HotWax Commerce has introduced a Ship to Store fulfillment flow directly within the BOPIS application to address this challenge, allowing store teams to recover potentially lost sales by sourcing inventory from warehouses.

### Bridging Inventory Gaps
Previously, if a store associate discovered that an item was missing or damaged during the BOPIS picking process, the standard procedure was to cancel the order. This resulted in lost revenue and a poor customer experience. While inventory might have been available at a central warehouse, there was no automated way to redirect the fulfillment to the original pickup location without significant manual intervention.

The new Ship to Store update introduces a "Request Transfer" option within the BOPIS App. When local inventory is unavailable, store associates can convert the order into a Ship to Store request. This action triggers the system to re-route the order to a fulfillment center or warehouse that has the stock. The warehouse then ships the item to the store, maintaining the customer’s original intent to pick up their order at their preferred location.

### Integrated Fulfillment Logic
To support this new flow, the system’s fulfillment logic has been enhanced to handle the nuances of internal transfers versus direct-to-customer shipments. 

One significant improvement is the implementation of carrier and shipping method guardrails. When an order is identified as a Ship to Store transfer, the system now automatically filters the available carriers to only those that support the "Ship to Store" method. This prevents fulfillment teams from accidentally selecting incompatible shipping services. Additionally, if a user switches carriers during the process, the system preserves the "Ship to Store" shipping method rather than defaulting back to standard shipping, ensuring the order stays within the correct workflow.

### Optimized Store Operations and Status Tracking
The update also refines how store associates manage incoming shipments. The BOPIS App now distinguishes more clearly between orders that are currently in transit and those that have physically arrived at the store. 

The "Ready for Pickup" queue now specifically filters for a new "Arrived" status. Previously, orders might appear in pickup lists as soon as they were shipped from the warehouse, causing confusion if a customer arrived before the package did. Store associates now use an "Arrived" action when the delivery truck arrives, which updates the shipment status and ensures the order only moves to the final pickup stage when it is physically staged and ready.

### Refined Customer Communication
Managing customer expectations is critical during multi-leg fulfillment. In a standard Ship to Home flow, an order is often marked as "Completed" once it leaves the warehouse. However, for Ship to Store, the order is not truly complete until the customer has the product in hand.

The system now suppresses automated "Order Completed" emails during the internal transfer leg from the warehouse to the store. By filtering out the "Ship to Store" method from these background notification jobs, the system ensures that customers only receive their final confirmation and handover notifications when the in-store pickup is actually finalized. This prevents premature communication that could lead to customers attempting to pick up orders that are still in transit.

### Operational Impact
By integrating Ship to Store directly into the BOPIS workflow, retail operations can significantly reduce cancellation rates caused by inventory inaccuracies. Store teams gain a structured way to handle exceptions, while customers receive a consistent experience without the need to re-order or wait for a refund. This update transforms the BOPIS app from a simple picking tool into a flexible fulfillment recovery engine.
