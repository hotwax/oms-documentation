---
description: >-
  Introducing the Order Routing App, empowering retailers to oversee their order
  brokering rules and tailor them according to their specific business needs.
---

# Introducing Order Routing App

<figure><img src="https://www.hotwax.co/hubfs/order%20routing%20app.png" alt=""><figcaption></figcaption></figure>

Order routing is a critical component that allows **HotWax Commerce** to determine the optimal location for fulfilling an order based on a set of predefined criteria. These criteria encompass the selection of orders to broker and the criteria for finding inventory, allowing merchants to create fulfillment strategies tailored to their unique business needs.

Merchants faced challenges in optimizing order fulfillment strategies due to the complexity of the brokering process. The existing process required external support for real-time adjustments to routing rules and parameters, leading to delays and inefficiencies in adapting to changing business conditions.

With this update, HotWax Commerce introduces Configurable Order Routing, empowering merchants with unprecedented control over their order fulfillment strategies. This feature allows merchants to create and configure brokering rules with unique attributes and conditions. Configurable Order Routing enables real-time revisions to routing parameters without external support, providing flexibility and agility to merchants.

How It Works:

1. **Finding Orders:** The order lookup process is now more versatile, with multiple facets designed to find orders based on relevant metrics for retailers. Merchants can configure the sequence (sort order) of results to ensure optimal processing.
   * **Available Filters:** Queue, Shipping Method, Order Priority, Promise Date, Sales Channel.
   * **Sorting Orders:** Ship By, Ship After, Order Date, Shipping Method.
2. **Finding Inventory:** Once a batch of orders is identified, inventory lookup conditions are optimized for performance. Facilities are filtered and sequenced based on criteria such as Facility Group, Proximity, Facility Order Limit, and Brokering Safety Stock.
3. **Committing Orders to Inventory:** Retailers can set conditions for allocating orders to inventory based on availability states such as Fully Available without splitting, Partially Available, Meets Shipment Threshold Value.
4. **Order Splitting by Shipment Value Threshold:** Retailers can set thresholds based on shipment value, addressing the challenge of maintaining profitability while balancing fulfillment speed and customer experience.

Dive into our user guides [here](https://docs.hotwax.co/user-guides/orders/brokering) to unlock the full potential of this feature!
