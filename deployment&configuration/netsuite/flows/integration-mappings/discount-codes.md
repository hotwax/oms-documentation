---
description: >-
  Explore how discount codes are managed and synchronized between HotWax
  Commerce and NetSuite for seamless order processing.
---

# Discount Codes

On a daily basis, HotWax Commerce syncs discount codes from NetSuite. The HotWax integration layer maps discount codes in HotWax to their corresponding counterparts in NetSuite.

## Order Level Discounts:

When an order has a discount code, during order sync to NetSuite, HotWax validates if the code exists in NetSuite. If the code is available, then the exact code is used, and the value of the discount is shared as the `Rate` with amount 0.00 because NetSuite has the defined workflows for its discount codes.

Oftentimes, eCommerce teams generate custom discount codes that are not pre-existing in NetSuite. These codes may serve specific purposes, such as one-time use for friends or family members, or may be temporarily crafted to accommodate a particular customer's request.

In the event HotWax identifies that the code provided by eCommerce is not available in NetSuite, the integration layer will fall back to a `DEFAULT` discount count and will add the discounted amount in the `Amount` feed.

## Item Level Discounts:

Item level discounts are synced as a separate line item in the order. When HotWax identifies the order has an item level discount, the integration layer adds the discounted amount added in the `Amount` field.

You can simply add a new discount code mapping or modify an existing one by navigating to the `NetSuite Discount Codes` section on the NetSuite Integration page.

Here's how you can [create mappings for discount codes](README.md#configuring-mappings-between-hotwax-commerce-and-netsuite)
