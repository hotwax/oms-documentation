---
description: Learn how gift cards sync from Shopify to HotWax Commerce.
---

# Gift card product sync

Gift cards are stored-value products that customers can redeem later. Retailers may sell physical gift cards, digital gift cards, or both.

## Gift cards in Shopify

Physical gift cards are tangible products that can be picked, packed, and shipped. They usually have SKUs and can use Shopify variants for different denominations.

Digital gift cards are delivered electronically. They usually don't need physical inventory tracking, but they still need accurate product data so orders, fulfillment rules, and reporting can identify them correctly.

## How HotWax syncs gift cards

HotWax Commerce imports gift card products through the same Shopify product sync process used for other products. The product sync reads Shopify product and variant data, including the gift card flag, SKU, barcode, Shopify ID, price, and shipping requirement.

Read [Product sync from Shopify](download-products.md) for the main product sync process.

## Why identifier setup matters

The product store identifier still controls how gift card variants match HotWax products.

For example, if multiple Shopify gift card denominations use the same SKU, HotWax may associate those Shopify variants with the same HotWax product when SKU is the selected identifier.

| SKU | Shopify product ID | Shop ID | HotWax product ID |
| --- | --- | --- | --- |
| 55000-000 | 1001 | NOTNAKED | HC2001 |
| 55000-000 | 1002 | NOTNAKED | HC2001 |
| 55000-000 | 1003 | NOTNAKED | HC2001 |

Confirm gift card SKU and barcode conventions before the first product sync. Incorrect identifier choices can cause gift card variants to link to the wrong product or create duplicates.
