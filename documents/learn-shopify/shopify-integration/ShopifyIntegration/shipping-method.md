---
description: >-
  Discover how to synchronize shipping methods between Shopify and HotWax
  Commerce seamlessly.
---

# Shipping Method

Shipping methods in Shopify must be mapped in HotWax Commerce for efficient order fulfillment. When orders are synced from Shopify to HotWax Commerce, it's crucial to synchronize the shipping method information. However, HotWax Commerce may have a single method servicing multiple Shopify shipping methods.

To address this, the HotWax integration layer maps the original carrier and shipment method from Shopify to the corresponding method in HotWax Commerce. During order syncing from Shopify, the integration layer checks saved mappings, ensuring accurate correspondence. This shipping method mapping guarantees alignment between the selected shipping method in Shopify and its counterpart in HotWax Commerce, facilitating seamless order processing.

## Locating Shipping Method on Shopify

Retailers create shipping methods on Shopify to choose where they ship and how much they charge for shipping to the customer's location. Here's how you can locate existing shipping methods on Shopify:

1. Log in to your Shopify storefront's admin panel with your user credentials.
2. Navigate to `Settings` > `Shipping and Delivery`
3. Shipping methods available to customers on the checkout page are created as per the shipping zones. To view the shipping methods, click on the `general shipping rates` available in the `Shipping` section.
4. All the shipping rates will be visible in the shipping origins sections.

## Creating a Shipping Method in HotWax Commerce

Shipping methods supported by the retailer need to be created in HotWax Commerce to ensure the accurate transmission of shipping information to the carrier. Follow these steps:

1. Log in to your user instance and navigate to Settings > General Settings.
2. Locate the shipment method section and click on `Add`, which will open up a form.
3. Fill in the required fields:
   * **Shipment Method Type ID:** The name used to identify the shipping method within HotWax Commerce. You can give any name which is easy to identify when mapping with Shopify.
   * **Description:** A brief explanation of the shipping method's intended purpose.
4. After entering the necessary details, click on `Add` to save the shipping method in HotWax Commerce.

Once shipping methods are created, they need to be mapped with the Shopify Shop to receive accurate information for order processing and fulfillment.

## Steps to Map Shipping Method with Shopify

1. Navigate to the `Shopify Shop Carrier Shipment` section on the Shopify Shop Page.
2. Click on the `Add` button, which will open up a new pop-up box.
3. Choose the carrier and the carrier shipping method existing in HotWax Commerce from the dropdown menu.
4. Enter the Shopify Shipping Method present in Shopify, and click on the `Add` button to save the mapping.

## Example

| Carrier           | Shipment Method | Shopify Shipping Method |
| ----------------- | --------------- | ----------------------- |
| Blue Dart Express | Ground          | Ground Shipping         |
| Blue Dart Express | Two Day         | Two Day Shipping        |
