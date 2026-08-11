---
description: Learn how Shopify product sync works for multiple Shopify stores.
---

# Product synchronization for multiple Shopify stores

This page is architecture background for an advanced launch, not a complete setup procedure. The canonical Shopify onboarding guide covers exactly one shop. Obtain an approved multi-shop implementation plan before configuring any connection or first product import.

Some retailers run more than one Shopify store for the same brand or catalog. In HotWax Commerce, the product store decides which catalog a Shopify shop belongs to.

For multi-store setups, the safest model is:

* Use one shared HotWax product store when Shopify shops sell the same catalog.
* Use separate HotWax product stores when Shopify shops sell different catalogs.
* Use the same product identifier across related Shopify shops when they share a catalog.

The product sync console asks users to confirm related Shopify stores before the first import because this choice affects orders, inventory, routing, fulfillment, and reporting.

## Primary and related shops

When several Shopify shops share one product catalog, one shop usually acts as the main source of product data. Related shops can share the same HotWax product store when their Shopify products use the same identifier convention, such as SKU or barcode.

This matters because HotWax uses the selected product store and identifier to decide whether incoming Shopify products link to existing HotWax products or create new product links.

## Implementation boundary

An approved multi-shop implementation plan must define the authoritative catalog, Product Store ownership, cross-shop identifier policy, import sequence, inventory ownership, location mappings, routing, and rollback before any shop begins its first product import. Do not follow the single-shop guide independently for each related shop.

## Ongoing product updates

Returning shops use the same product sync history and progress tracking as single-shop setups. HotWax reads product update runs for the selected Shopify shop and applies changes to the HotWax catalog linked to that shop's product store.

Read [Product Sync Console](products/product-sync-console.md) for progress and history behavior.

## What to avoid

Don't run legacy product import jobs for child catalogs. The old `Import Products`, `Import Product updates`, and `Import Products in Bulk` Job Manager flows no longer represent the current product sync path.

Don't connect unrelated Shopify shops to the same HotWax product store. If two shops use different catalogs or different identifier rules, sharing the same product store can create incorrect product links and downstream order or inventory issues.
