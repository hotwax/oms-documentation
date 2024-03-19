---
description: >-
  Discover the order synchronization process between HotWax Commerce and Retail
  Pro, ensuring seamless order fulfillment and accurate invoicing.
---

# Order Sync

### Order Fulfillment Process

Orders initiated in eCommerce are initially downloaded into HotWax Commerce. Once approved, these orders are brokered to designated fulfillment locations, specifically stores in this context. Store associates handle the fulfillment process, marking orders as completed using HotWax Commerce's Store Fulfillment suite. The order status is then synchronized with the eCommerce platform, providing customers with timely updates on their orders.

### Invoicing in Retail Pro

For invoicing, completed orders from HotWax Commerce need to be pushed to Retail Pro. However, Retail Pro has a constraint: it only allows invoicing of an order from a single location. To adhere to this limitation, partial fulfillment orders are not sent to Retail Pro for invoicing. Only orders that are entirely fulfilled are forwarded to Retail Pro.

#### Invoicing from Single Location

In scenarios where an order is fulfilled entirely from a single location, the completed order details are pushed to Retail Pro. Retail Pro then takes charge of invoicing and subsequently updates government systems for tax reporting and ERP for accounting purposes.

#### Invoicing from Multiple Locations

The challenge arises for orders that involve fulfillment from multiple locations. In this unique approach, when the last item in an order is fulfilled in HotWax Commerce, all the order items are sent for invoicing to Retail Pro. The unique aspect of this approach lies in invoicing all items from the location where the last item is fulfilled, working around Retail Pro's limitation.

However, this method introduces a challenge: it results in an inventory discrepancy in Retail Pro because not all items are actually fulfilled from the location where the last item is picked. To address this, a specialized solution is implemented. After invoicing from the last fulfillment location, inventory adjustments are made to transfer inventory from all the locations where the remaining items were actually fulfilled to the location of the last fulfillment. This corrective measure ensures accurate inventory records in Retail Pro.

By adopting this tailored approach, the Order Synchronization process effectively navigates the complexities of multiple-location fulfillment, providing a solution that ensures both accurate invoicing in Retail Pro and precise inventory management across various locations in HotWax Commerce.
