---
description: >-
  Added to new filters in the Order Routing App - "Facility Order Limit Check"
  and "Broker Only if All Ship Group Items Are Available" to enhance order
  routing process.
---

# New Filters to Improve Order Routing Efficiency

<figure><img src="https://www.hotwax.co/hubfs/New%20Filters%20to%20Improve%20Order%20Routing%20Efficiency1.png" alt=""><figcaption></figcaption></figure>

Inventory filters are used in order routing to ensure that orders are fulfilled from the most suitable location based on factors like stock availability and store capacity. These filters help retailers balance resources, prevent stockouts, and optimize delivery times by routing orders to the best locations for efficient fulfillment. HotWax Commerce has added two new filters to enhance this process:

*   Facility Order Limit Check: Retailers operate different types of stores, each with its own ability to handle online orders. Smaller stores with limited staff and space may find it hard to fulfill many orders, while larger stores usually have more resources. However, even larger stores need to balance the demands of in-store and online customers. To manage this, order limits are often set to prevent any store from being overwhelmed.

    However, during high-demand periods, these limits may need to be bypassed to ensure that orders are fulfilled without delay. The new Facility Order Limit Check filter allows operations managers to turn off these restrictions. The operations team creates the rule that initially checks if any facility can fulfill the order within their set limits. If no facility meets the requirements and the order is not fulfilled then the operations team can create a new inventory rule with a Facility Order Limit Check filter that removes the limits from all facilities. This allows the order to be routed to any facility by eliminating the need to individually adjust limits at each facility.
*   Broker Only if All Ship Group Items Are Available: Retailers often face challenges when fulfilling multi-item orders, especially when not all items are available at a single fulfillment location. In such cases, splitting the order and shipping items from different locations can help speed up delivery times and reduce the risk of leaving orders unfulfilled. Sometimes in case of inventory unavailability of one item, that item may get canceled. But in cases of dependable items (camera and lens example), the receiver must receive both the items, else the other item won't be of any use.

    For example, if a customer orders a camera and a lens, sending only the camera wouldn’t make sense since the lens is needed too. To address this, operations managers can enable the Broker Only if All Ship Group Items Are Available filter. This feature ensures that orders are only brokered if all items in the group are in stock.

    If both the camera and lens are available, the order will be brokered together. However, if only one item is ready, the order will be placed in a queue until everything can be shipped at once.

    This approach helps maintain customer satisfaction by reducing the chances of partial shipments. The system ensures that the order is brokered only when all items are in stock, so the entire order will be brokered together, avoiding the need for separate brokering due to missing or unavailable items.
