---
description: >-
  Discover how price levels facilitate the management of product pricing
  variations based on factors like sales channels and events.
---

# Price Levels

Price levels are used to manage multiple prices for a product. This is especially useful when a product is priced differently based on conditions like sales channel, events, or employee-specific pricing. NetSuite provides flexibility to set up different price levels for each item.

To sync orders from HotWax Commerce to NetSuite, you need to set the price level in HotWax that should be sent to NetSuite.

During order sync to NetSuite, the integration layer checks price level mapping in HotWax and applies the defined price level in the `Price` feed. This configuration lets you send the price level to NetSuite instead of actual prices. NetSuite identifies item prices based on the assigned price level.

The price level to be sent into NetSuite is set to `Base Price (MSRP)` by default. Because there can be multiple price levels in NetSuite, if you want to use a different price level at any point, you can change the value of this setting.

For example, if NetSuite has a Price Level named `Online Price` adjusting the value of PRICE\_LEVEL\_NETSUITE ID from `Base Price (MSRP)` to `Online Price` ensures the integration layer syncs orders with this specific price level. NetSuite then applies the actual price based on the configurations set for the `Online Price` level.

You can simply add a new price level mapping or modify an existing one by navigating to the `NetSuite Price Level` section on the NetSuite Integration page.

Here's a breakdown of how to [create mappings for price levels](README.md#configuring-mappings-between-hotwax-commerce-and-netsuite)
