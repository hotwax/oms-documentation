---
description: >-
  Explore the intricacies of shipping methods in eCommerce and their
  synchronization with HotWax Commerce and NetSuite.
---

# Shipping Methods

Shipping methods in eCommerce are mapped in HotWax Commerce, responsible for order and fulfillment. When orders are synced from HotWax Commerce to NetSuite, it's essential to communicate the shipping method information to NetSuite. However, NetSuite may have a single method servicing multiple eCommerce shipping methods.

To address this, the HotWax integration layer maps the original carrier and shipment method to the corresponding method in NetSuite. During order syncing to NetSuite, the integration layer checks saved mappings, ensuring accurate correspondence. This shipping method mapping guarantees alignment between selected eCommerce methods and their counterparts in both HotWax Commerce and NetSuite, facilitating order processing.

## Creating a Shipping Method in HotWax Commerce:

Shipping methods that are supported by the retailer need to be created in HotWax Commerce to ensure that the shipping information is sent to the shipping carrier. Shipping methods can be created by following these steps:

1. Log in to your user instance and navigate to Settings > General Settings.
2. Locate the shipment method section and click on the `Add`, which will open up a form.
3. Fill in the required fields:
   * Shipment Method Type ID: The name used to identify the shipping method within HotWax Commerce.
   * Description: A brief explanation of the shipping method's intended purpose.
4. After entering the necessary details, click on the `Add` to save the shipping method in HotWax Commerce.

Once shipping methods are created, they need to be mapped with NetSuite to provide accurate information for order processing and fulfillment.

You can simply add a new shipping method mapping or modify an existing one by navigating to the `NetSuite Shipping Method` section on the NetSuite Integration page.

Here's a breakdown of how to [create mappings for shipping method](README.md#configuring-mappings-between-hotwax-commerce-and-netsuite)
