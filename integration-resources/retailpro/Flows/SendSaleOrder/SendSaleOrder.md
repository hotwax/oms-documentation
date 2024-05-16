---
description: >-
  Discover how HC manages "Send Sale Orders" in Retail Pro, ensuring items are
  delivered to customers' shipping addresses despite initial unavailability.
---

# Send Sale Order

### What is Send Sale order?

Send sale orders are instances where store associates capture orders in Retail Pro, despite the unavailability of the item at the store. These orders are taken to prevent the loss of a sale, with the commitment to deliver the item to the customer at their shipping address. Associates typically check inventory availability at other stores or warehouses before capturing the order.

### Send Sale order invoicing

Associates create Send Sale orders in Retail Pro and generate invoices for these orders. Even if the inventory is not available, Retail Pro allows the sale, resulting in negative inventory for the respective product. For example, if two blue t-shirts are out of stock and a Send Sale order for them is invoiced in the New York store, the inventory count for Blue T-shirts will be -2 in the New York location in the Retail Pro system.

### Bringing Send Sale orders into HotWax Commerce

Send Sale orders need to be brought into HotWax Commerce for order routing and fulfillment. HotWax Commerce brokers these orders based on pre-configured rules that consider inventory availability and the proximity of the store to the customer's shipping address. There are two approaches to bring Send Sale orders into HotWax Commerce. One is Retail Pro pushing Send Sale orders to HotWax Commerce using HotWax Commerce's API. The other involves downloading Send Sale orders from the eCommerce platform.

HotWax Commerce adopts the approach of downloading Send Sale orders from the eCommerce platform. This decision is driven by leveraging the existing integration between eCommerce and HotWax Commerce, saving time and resources compared to building a new integration with Retail Pro. Once a Send Sale order is brokered and fulfilled by another store using the Store Fulfillment suite in HotWax Commerce, the order is marked as completed.

### Avoid double invoicing

Distinguishing itself from regular eCommerce orders, the processing of Send Sale orders deviates from the typical flow. To prevent double invoicing, these orders, already invoiced during the sale in Retail Pro, are deliberately kept separate. Identified by a sales channel designation of POS, in contrast to eCom for eCommerce orders, Send Sale orders are intentionally excluded in the feed of completed orders. This strategic exclusion is implemented by incorporating checks based on the sales channel, ensuring that these uniquely treated orders are excluded from the invoicing process.

### Inventory Adjustment for Send Sale Orders

As the original store where the sale occurred has negative inventory due to Send Sale orders, adjustments are made to correct the inventory. Inventory is transferred from the location where the item was fulfilled to the location where it was invoiced. This transfer is accomplished by calling the Manual Slip API.
