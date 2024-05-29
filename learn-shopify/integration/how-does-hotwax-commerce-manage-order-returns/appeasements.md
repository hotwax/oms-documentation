---
description: >-
  Explore how HotWax Commerce efficiently manages appeasements to streamline
  customer service processes effortlessly.
---

# Appeasements

### How Does HotWax Commerce Handle Appeasements?

Retailers often provide appeasements in various scenarios, such as:

* Appeasement for orders lost in shipment.
* Appeasement for a poor fulfilment experience.
* Appeasement due to customer dissatisfaction with the product

HotWax Commerce does not have a direct feature for retailers to create appeasements. Instead, Customer Service Representative (CSR) teams can create appeasements to address customer concerns in Shopify. When an appeasement is generated, HotWax Commerce downloads this information along with refund details. In appeasements, the order information contains a User ID and a transaction amount, but it does not contain any data on the order line item. HotWax Commerce syncs the appeasement information for reporting purposes.\
\
Retailers can offer appeasement through two methods:\
\
**A. Offering Another Product:** In this scenario, the original product remains marked as ‘completed’ in HotWax Commerce and ‘fulfilled’ in Shopify. However, a new order is generated with a 0 sales total in Shopify, which is downloaded in HotWax Commerce for fulfilment.\
\
**B. Offering Refunds Without Creating a Return:** Some retailers opt to provide a full or partial refund as compensation for post-sale satisfaction. In this case, the customer retains the product, and the order remains “fulfilled” in Shopify and ‘Completed’ in HotWax Commerce. When HotWax Commerce imports refunds, it imports the refunded amount to the customer and includes it in the order details for reporting to the ERP system.
