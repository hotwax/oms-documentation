---
description: Learn how Shopify product sync works for multiple Shopify stores.
---

# Product synchronization for multiple Shopify stores

Some retailers run more than one Shopify store for the same brand or catalog. In HotWax Commerce, the product store decides which catalog a Shopify shop belongs to.

For multi-store setups, the safest model is:

* Use one shared HotWax product store when Shopify shops sell the same catalog.
* Use separate HotWax product stores when Shopify shops sell different catalogs.
* Use the same product identifier across related Shopify shops when they share a catalog.

The product sync console asks users to confirm related Shopify stores before the first import because this choice affects orders, inventory, routing, fulfillment, and reporting.

## Primary and related shops

When several Shopify shops share one product catalog, one shop usually acts as the main source of product data. Related shops can share the same HotWax product store when their Shopify products use the same identifier convention, such as SKU or barcode.

This matters because HotWax uses the selected product store and identifier to decide whether incoming Shopify products link to existing HotWax products or create new product links.

## First-time setup for a multi-store catalog

Before starting product sync for a Shopify shop:

1. Open the shop in the Company app.
2. Open `Product sync`.
3. Review the selected product store.
4. Confirm whether related Shopify shops use the same catalog.
5. Confirm the product identifier matches the retailer's catalog convention.
6. Review counts and preflight warnings before starting import.

Read [First-time Product Sync Setup](products/product-sync-first-time-setup.md) for the full walkthrough.

## Ongoing product updates

Returning shops use the same product sync history and progress tracking as single-shop setups. HotWax reads product update runs for the selected Shopify shop and applies changes to the HotWax catalog linked to that shop's product store.

Read [Product Sync Console](products/product-sync-console.md) for progress and history behavior.

## What to avoid

Don't run legacy product import jobs for child catalogs. The old `Import Products`, `Import Product updates`, and `Import Products in Bulk` Job Manager flows no longer represent the current product sync path.

Don't connect unrelated Shopify shops to the same HotWax product store. If two shops use different catalogs or different identifier rules, sharing the same product store can create incorrect product links and downstream order or inventory issues.
