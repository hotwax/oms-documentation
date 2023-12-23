# Configuring Order Routing

## What is order routing
Order routing allows the OMS to determine the best location to fulfill an order according to a set of criteria. The criteria are in respect to selecting which order (part of order) to broker and the criteria to find inventory.

Merchants use configurable routing to create order fulfillment strategies best suited for their business. User configurable routing rules allows merchants to optimize fulfillment cost, inventory, and workload based on arbitrary order and fulfillment location parameters such as order total, SKUs, product category, or facility type, operating hours, or fulfillment capacity.

## What is configurable order routing
Configurable routing brokers a set of orders to fulfill from a set of facilities. A brokering algorithm can have multiple, sequential, rule-sets with unique attributes and conditions which orders and facilities will be evaluated against. Deep customization of brokering workflow will allow merchants to implement real-time revisions to their routing parameters without any external support.

## Understanding how configurable order routing works
Configurable order routing is done by finding a set of orders and permissible inventory based on a set of filters then having the ability to allocate the order items to the selected inventory.

For unfillable orders that did not meet routing criterias under any rule-set, merchants can explicitly state what actions must be taken.

### Finding orders
Order lookup is broken down into multiple facets. Each facet is designed to find orders on a metric that is relevant to retailers. Once results for orders are obtained, their sequence (sort order) is also configurable by retailers to ensure that even within a batch of orders, they are not bound to just first in first out sequencing of orders.

**Available filters:**
- Queue: the parking location to fetch orders from
- Shipping method: SLA promised to the customer
- Order priority: escalated orders
- Promise date: the promised delivery date on a pre-order item
- Sales channel: where the order was captured

**Sorting orders:**
- Ship by
- Ship after
- Order date: order placed by the customer
- Shipping method: the delivery days of the SLA on an order

### Finding inventory
Once a batch of orders is identified, inventory lookup conditions are used to find the correct inventory. To optimize inventory lookup performance, facilities are first filtered out to ensure that inventory lookup is only performed on facilities that qualify for fulfillment.

Once valid inventory facilities have been identified, those facilities can be sorted and sequenced as well to optimize fulfillment location selection.

**Available filters:**

- **Facility group:** custom grouping of locations
- **Proximity:** Distance between fulfillment facility and destination based on either carrier provided zone mapping or destination address zip code and latitude and longitude of the fulfillment facility.
- **Facility Order Limit:** How much fulfillment capacity is remaining.
- **Brokering Safety Stock:** Different from online ATP safety stock, brokering safety stock defines the minimum stock required for an order to be brokered to a facility.

**Sorting facilities:**
- **Proximity:** While proximity is also used to filter facilities, it is also used to prioritize the facilities based on distance to the customer, ensuring that the closest ones are attempted first.
- **Facility Order Limit:** In order to ensure that workload at facilities is balanced, facilities can also be sorted on how much fulfillment capacity they have left.
- **Inventory Balance:** Sort facilities based on the amount of inventory they have left for the ordered items. Helps ensure that one location is not depleted faster than others.
- **Custom Sequence:** Allows full manual override to the sequence at which facilities are attempted.

## Committing orders to inventory
After all possible inventory has been found, retailers can choose what conditions must be met for the order to be allocated to inventory. The conditions of allocation depend on the availability of inventory at a particular facility for all the items being attempted, which will either be fully available at one location or partially available.

**Availability states:**
- Fully Available without splitting
- Partially Available
  - Meets Shipment Threshold Value

### Order Splitting by shipment value threshold

Setting order splitting thresholds based on shipment value directly addresses the problem of maintaining profitability of shipments while balancing fulfillment speed and customer experience. Retailers can set a minimum shipment value that they want to maintain during allocation that also ensures profitability of the order. When ordered items are allocated, the brokering engine will not only ensure that the allocated items meet the threshold but also that the unallocated items also meet the threshold. Checking outstanding and unallocated items of an order is equally important because if their value doesn’t meet the shipment value threshold, those items will never be automatically allocated. By checking both allocated and unallocated item totals, the brokering engine ensures that inventory is selected in a way that ensures fulfillment margins for the entire order.


Based on each of these conditions, an action can be tied to the allocation. Retailers can choose which action to perform based on the outcome.

**Available actions:**
**Allocate:** commit order items to available inventory

**Move to next rule:**
If the allocation availability in the given attempt is not satisfactory, the order items can simply be moved to the next inventory lookup in that brokering rule set.

**Move to queue:**
If the availability of the inventory lookup is not what is expected, but the item should not be attempted by another rule in this flow, the items can be moved to a specific queue where they can be held for relevant actions. For example, move an order to a “CSR” queue where CSR teams can review it.

**Add auto cancel date:**
Based on the inventory availability, retailers may want to add an auto cancel date on the order, to ensure that they do not remain in the fulfillment pipeline for too long and inturn creating a degraded customer experience.
