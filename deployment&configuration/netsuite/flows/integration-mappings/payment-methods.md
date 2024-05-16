---
description: >-
  Learn how to configure and map payment methods in HotWax Commerce for seamless
  synchronization with eCommerce platforms and NetSuite.
---

# Payment Methods

Before initiating order sync, it is crucial to configure payment methods in HotWax Commerce and establish mappings with both eCommerce and NetSuite.

HotWax integration layer maps payment methods in HotWax to the corresponding payment methods in the eCommerce platform to create customer payments and streamline order fulfillment.

Mapping payment methods is especially crucial in case of COD orders as it helps fulfillment teams identify orders with pending payments and initiate payment collection when fulfilling them. Retailers also leverage HotWax for reporting, so accurate data aggregation of orders and their payment methods helps them derive insights into payment trends and customer behavior.

When orders are synced from HotWax to NetSuite, it's critical to communicate the payment method information to NetSuite so that customer deposits can be created. To address this, the HotWax integration layer also maps payment methods in eCommerce and HotWax to the corresponding methods in NetSuite. When orders are synced to NetSuite, the integration layer checks saved mappings and accurately applies the defined payment method in the order feed.

You can simply create a new payment method mapping or edit an existing one by navigating to the `NetSuite Payment Method` section on the NetSuite Integration page.

In the event a payment method in eCommerce and HotWax is not mapped to a payment method in NetSuite, the integration layer will fall back to a `DEFAULT` payment method. Currently, this fallback payment method is mapped to `Shopify Payment` in NetSuite.

## Example Mapping:

Here's how you can [create mappings for payment methods](README.md#configuring-mappings-between-hotwax-commerce-and-netsuite)

| HotWax ID                | NetSuite Value  |
| ------------------------ | --------------- |
| EXT\_SHOP\_ECOM\_GFTCRD  | Gift Card       |
| EXT\_SHOP\_CASH\_ON\_DEL | Shopify Payment |
