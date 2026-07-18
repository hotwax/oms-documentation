---
description: Learn how kit products sync from Shopify to HotWax Commerce.
---

# Kit product sync

Retailers often sell kits or bundles in Shopify as one sellable product made from multiple component SKUs. HotWax Commerce must understand those products correctly so fulfillment teams can reserve and fulfill inventory for the full kit.

## How HotWax identifies kit products

HotWax Commerce imports kit products through the same Shopify product sync process used for other products. During sync, HotWax reads product data, variants, product type, component flags, and configured metafields.

When Shopify product data indicates that a product requires components, HotWax can classify the product as `MARKETING_PKG_PICK`. This lets HotWax treat the kit as a sellable package and keep its component products together.

## Bundles app products

Some Shopify retailers use the Bundles app or similar apps to model kit components in Shopify metafields. Product sync can read configured metafields and store them on the HotWax product so downstream integrations, such as NetSuite kit logic, can identify the component relationship.

Read [Kit Products](../../additional-resources/kit-products.md) for more details about bundle modeling and inventory limitations.

## What to confirm

Before the first product sync, confirm:

* Shopify models kit products consistently.
* Component SKUs already exist or will sync with the same product store.
* Required metafields are available to the Shopify integration.
* Product type mappings and component rules match the retailer's fulfillment process.

Don't use the old Job Manager `Import Products` instructions for kit product sync. Kit products now follow the same product sync console and product update flow as the rest of the Shopify catalog.
