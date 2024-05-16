---
description: >-
  A new "unfillable hold parking" queue is introduced to temporarily store
  orders that cannot be immediately fulfilled but can be fulfilled at a later
  date.
---

# Unfillable Hold Parking

<figure><img src="https://www.hotwax.co/hubfs/Unfillable%20Hold%20Queue.png" alt=""><figcaption><p>Unfillable Hold Parking</p></figcaption></figure>

HotWax Commerce has introduced a feature in the past that automatically assigns an auto-cancel date to all unfulfilled orders. This feature ensures that if inventory is not allocated to an order within seven days, the corresponding order will be automatically canceled, preventing customers from awaiting orders that might never be delivered.

However, there are instances where merchandisers have prior knowledge of upcoming inventory through their purchase orders. This advanced knowledge can be leveraged to fulfill orders at a subsequent date, thereby retaining sales and satisfying customer demands. Previously, in such scenarios, merchandisers were required to manually remove the auto-cancel date to ensure the fulfillment of orders upon inventory replenishment.

However, the manual removal of auto-cancel dates can be cumbersome and entails a risk of overlooking certain orders, potentially leading to cancellations and lost sales. Additionally, even when inventory is unavailable, the routing engine continues to attempt brokering the order during each cycle, thereby increasing system load.

To address this, HotWax Commerce has introduced the “Unfillable Hold Parking” to park unfillable orders that can be fulfilled in future. This queue serves as a holding area for all unfulfilled orders for which inventory is forthcoming. Merchandisers can conveniently add orders in bulk to this queue using CSV, thereby eliminating the need for manual adjustments of auto-cancellation dates for individual orders.

Once the orders are parked in the ‘Unfillable Hold Parking’ their auto-cancellation dates would be automatically removed through a backend job. HotWax Commerce won’t attempt to broker these orders to optimize system capacity. Merchandisers can release these orders from the unfillable hold parking to the brokering queue to facilitate order brokering and fulfillment.
