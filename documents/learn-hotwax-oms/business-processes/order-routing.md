# Order Routing

Order routing is the business process of assigning approved orders to the right fulfillment location. HotWax Commerce Order Management System (OMS) uses routing rules, inventory rules, and facility settings to decide where each order should be fulfilled from.

Routing is not only a proximity decision. The best fulfillment location can depend on the promised shipping method, order priority, available inventory, facility eligibility, store capacity, safety stock, sales velocity, weeks of supply, order splitting rules, and the retailer's fulfillment strategy. The OMS helps retailers make those trade-offs consistently so orders move to the best available store, warehouse, or external fulfillment partner.

## Order routing process

### Prepare eligible inventory and facilities

Before an order is brokered, the OMS defines which inventory and locations can be considered. Shipping rules, store pickup rules, facility groups, inventory channels, product and facility fulfillment settings, safety stock, and store capacity all shape the available fulfillment network.

This step matters because routing rules can only allocate from eligible inventory. If a store is not enabled for online fulfillment, does not have sellable inventory, has reached its order capacity, or is protected by a safety stock rule, OMS does not treat that store as a valid fulfillment option for that routing attempt.

### Capture fulfillment-ready orders

Approved orders enter routing when they need a fulfillment location. This commonly includes ship-to-home orders, marketplace orders, and orders that need another allocation attempt after a fulfillment rejection.

Buy Online Pick-Up In Store (BOPIS) orders do not go through ship-to-home routing because the customer has already selected the pickup store. Pre-orders and backorders enter routing when inventory becomes available and the orders are eligible for allocation.

Orders waiting for routing are held in parking queues such as Brokering Queue, Rejected Parking, Unfillable Parking, or Pre-order/Backorder Parking. These queues give operations teams a controlled way to separate orders that are ready to route, waiting for another attempt, or blocked by a business condition.

### Start a brokering run

A brokering run is the routing cycle that picks up eligible orders and starts evaluating them for inventory allocation. Each run can be scheduled for a different frequency, so retailers can route urgent orders more often than standard orders.

When a brokering run starts, the routing engine evaluates its routing rules to determine which order batches should be processed.

### Group orders for routing

The routing engine groups eligible orders from parking queues into batches based on factors such as promised shipping method, order priority, sales channel, promise date, or origin facility group. Each batch represents a set of orders that should be evaluated together.

Routing rules also control which batches are evaluated first. Urgent batches can be placed before standard batches so high-priority orders are allocated before lower-priority demand consumes available inventory.

### Sequence orders within each batch

After a routing rule selects a batch, the routing engine can sort the orders inside that batch before inventory is evaluated. Common sequencing options include order date, order priority, shipping method, ship-by date, and ship-after date.

This avoids treating every order as simple first-in, first-out demand. A batch of expedited orders, for example, can prioritize overnight shipments before two-day shipments, while standard orders can still use order date as the default sequence.

### Evaluate fulfillment locations

Inventory rules decide which facilities can fulfill each order and which facility should be attempted first. The routing engine first narrows the fulfillment options using rules such as facility group, proximity, brokering safety stock, facility order capacity, product and location fulfillment controls, and all-items-available checks.

Eligible facilities are then sorted using the business priority. Common strategies are prioritizing by proximity, inventory balance, facility order limit, or custom sequence. The routing can also use sales velocity and weeks of supply to avoid pulling inventory from stores where the item is selling quickly and to favor locations with deeper inventory coverage.

### Apply waterfall actions

Routing can use multiple inventory rules in sequence. The routing engine starts with the preferred allocation strategy, then expands or changes the strategy only when earlier rules cannot allocate the order.

If an inventory rule cannot allocate one or more items, the configured after-action decides what happens next. The routing can move unavailable items to the next inventory rule, allow partial allocation, keep grouped items together, move items to a queue such as Unfillable Parking, apply auto-cancel days, or clear auto-cancel days when the order should stay open for a future attempt.

### Allocate inventory and release fulfillment work

When the routing engine selects a fulfillment location, it allocates the order item to that location and reserves the inventory for the customer order.

Store allocations appear in the Store Fulfillment App for store associates. Warehouse or third-party fulfillment allocations can be sent to a warehouse management system (WMS), enterprise resource planning (ERP), or third-party logistics (3PL) depending on the retailer's integration design.

After fulfillment, shipment and tracking updates flow back through OMS so the order, eCommerce and downstream systems stay aligned.

### Recover rejected and unfillable orders

A fulfillment location may reject an item when associates cannot find it, when the item is damaged, or when system inventory does not match physical stock. The OMS auto moves rejected items to Rejected Parking and routes them again to another eligible location. Rejection reasons can also update inventory when configured, reducing the chance of repeated allocation failures.

Orders that cannot be allocated after the configured rules are exhausted can move to Unfillable Parking. These orders can be attempted again in future brokering runs as inventory changes. Auto-cancel days prevent unallocated orders from staying open indefinitely when the retailer does not want to keep retrying.

## Additional scenarios supported by order routing

### Split fulfillment and grouped items

Some orders cannot be fulfilled from one location. The routing engine can split fulfillment when partial allocation is allowed and when the split still supports the retailer's margin and customer experience goals.  
Retailers can also protect grouped or complementary items. For example, linked products that should ship together can stay grouped while unrelated items in the same order can split when the routing strategy allows it.

### Brokering safety stock

Brokering safety stock protects a buffer of inventory at selected facilities before orders are allocated. This helps reduce store rejections and protects stock that the retailer wants to keep available for walk-in customers, VIP clients, or local demand.

### Facility order limits and fulfillment eligibility

Facility order limits control how many orders a location can receive during routing. Once a facility reaches its daily capacity, the routing engine can route additional orders to other eligible facilities.

Retailers can also control which products and locations participate in fulfillment. A product can be warehouse-only, a store can be temporarily disabled for fulfillment, and selected facilities can be excluded from specific routing scenarios.

### Brokering shipment threshold

Brokering Shipment Threshold helps decide when a split shipment is worth the fulfillment cost. If the threshold is set, routing allows an order to split only when the resulting shipments meet the configured value requirement.

This is useful for low-value items, accessories, or free gifts with purchase. The retailer can avoid shipping a low-value item by itself when the shipment would hurt margin or create a poor customer experience.

### Weeks of supply and sales velocity

Weeks of Supply routing helps the routing engine choose fulfillment locations based on both inventory depth and local sales velocity. A store with many units but strong walk-in demand may be a worse fulfillment source than a store with similar inventory and slower local sales.

Sales Velocity can help route from slower-moving locations. Weeks of Supply adds more context by comparing current inventory with sales velocity, helping retailers protect high-demand stores while using locations with deeper coverage to fulfill online orders.

### Test Drive

Test Drive lets teams validate routing behavior before activating changes. Operations teams can test representative orders to confirm facility eligibility, waterfall behavior, split decisions, and queue outcomes before routing changes affect live fulfillment.

## Key takeaways

* Order routing begins after an order is approved and ready for allocation.
* Brokering runs control when routing logic runs and how often different order groups are evaluated.
* Routing rules create and sequence order batches.
* Inventory rules filter eligible facilities, rank the best fulfillment location, and define fallback actions.
* Waterfall routing lets the routing engine expand allocation options step by step without immediately relaxing the retailer's preferred strategy.
* Controls such as safety stock, facility capacity, product and location eligibility, grouped items, and Brokering Shipment Threshold keep routing aligned with margin, service-level agreement (SLA), and store operations.
* Weeks of supply and sales velocity help routing account for inventory health, not only available units.
* Test Drive should be used before activating new or changed routing configurations.

## Related documentation

* [Order Routing App](/documents/retail-operations/orders/order-routing/README.md)
* [Brokering Runs](/documents/retail-operations/orders/order-routing/brokering-runs.md)
* [Routing Rules](/documents/retail-operations/orders/order-routing/routing-rules.md)
* [Inventory Rules](/documents/retail-operations/orders/order-routing/inventory-rules.md)
* [Weeks of Supply Routing](/documents/retail-operations/orders/order-routing/weeks-of-supply-routing.md)
* [Test Drive](/documents/retail-operations/orders/order-routing/test-drive.md)
* [Additional Settings](/documents/retail-operations/orders/order-routing/additional-settings.md)
* [Configurable Order Routing](https://www.hotwax.co/solution/configurable-order-routing)
* [Order routing blog archive](https://www.hotwax.co/blog/tag/order-routing)
* [Omnichannel order routing mini-guide](https://docs.google.com/presentation/d/19XFMtSeP03iHpSjJPdUaaWaw0WEQRaqTtcoHV62VcCk/edit?slide=id.g37249ff2f47_0_6#slide=id.g37249ff2f47_0_6)
