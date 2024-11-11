---
description: >-
  Added support for configurable products to ensure all such products are
  fulfilled together.
---

# Added support for configurable products

<figure><img src="https://www.hotwax.co/hubfs/Configurable%20products.png" alt=""><figcaption></figcaption></figure>

&#x20;

Configurable products are products that have multiple line items linked together in order to deliver a complete product, such as a frame and the lens in the frame. These show up as two separate items in the order but need to be brokered together so that they can be handled as configurable items during fulfillment.

Fulfilling configurable products, such as frames and lenses that are sold together, often presents challenges as these orders need to be shipped together. Identifying and linking individual order items of configurable products within the system was cumbersome and prone to errors.

To resolve this, HotWax Commerce introduces a solution to simplify configurable product management, addressing the challenges faced by users. This update streamlines the process of identifying, linking, and brokering associated order items seamlessly.

Order items from Shopify will have "Line Item Properties" added as the group ID, this unique group ID is added to the order items by Shopify or through a NiFi job which adds the group ID in the order JSON. When HotWax Commerce downloads the order it takes the line item property from the order JSON and saves them as order item attributes..

In HotWax Commerce, a new Shopify mapping type is introduced, enabling retailers to define line item property keys (group ID in this case) and corresponding order items with association types from the Shopify Shop Page. Associated items are moved to a dedicated ship group, ensuring they are always brokered together during fulfillment. Additionally, splitting on this ship group is disabled, guaranteeing the integrity of configurable product orders.

HotWax Commerce's configurable product updates simplify tasks, improve user experience, and address retailer challenges with automated linking and efficient brokering.&#x20;
