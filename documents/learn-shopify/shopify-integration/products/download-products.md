---
description: Learn how Shopify product data syncs into HotWax Commerce.
---

# Product sync from Shopify

Product sync creates and maintains the HotWax product catalog that order download, inventory, routing, fulfillment, and reporting depend on.

Use the Company app product sync console to review setup, start the first import, monitor progress, and audit previous sync runs. Don't use the old `Import Products`, `Import Products in Bulk`, or `Sync Products` Job Manager flows for Shopify product import.

Read [First-time Product Sync Setup](product-sync-first-time-setup.md) before starting a new Shopify shop. Read [Product Sync Console](product-sync-console.md) when monitoring or troubleshooting a returning shop.

## What product sync imports

HotWax Commerce reads Shopify products, variants, options, tags, images, prices, weights, gift card flags, component flags, inventory item IDs, and configured metafields.

The import uses the product store's identifier setting to decide how Shopify products match HotWax products:

| Identifier | How HotWax uses it |
| --- | --- |
| Stock keeping unit | Matches Shopify variants to HotWax products by SKU. |
| Barcode | Matches Shopify variants to HotWax products by barcode or UPCA. |
| Shopify internal ID | Matches Shopify products and variants directly by Shopify ID. |

This choice matters because it decides whether HotWax updates an existing product or creates a new product link. A wrong identifier can create duplicate products or leave Shopify products unmatched.

## How the current import process runs

The current product sync process uses Shopify bulk operations and HotWax product update history.

| Stage | What happens | Why it matters |
| --- | --- | --- |
| Product sync request | HotWax creates a product update request for the selected Shopify shop. | This gives the import a trackable run that the console and history page can monitor. |
| Shopify product export | Shopify prepares a product data file through a background bulk operation. | Large catalogs can sync without hundreds of browser or REST calls. |
| Product change review | HotWax reads the Shopify file and records product changes in product update history. | HotWax can compare incoming Shopify data with existing catalog data before applying changes. |
| HotWax product import | HotWax applies the recorded changes to products, variants, features, tags, metafields, product associations, and Shopify shop product links. | This is the stage that changes product data used by orders, inventory, and fulfillment. |
| Search refresh | HotWax refreshes product search after importing each product. | Users can find the latest catalog data in operational screens. |

For returning shops, HotWax uses the last confirmed product update run as the starting point for the next run. That keeps routine syncs focused on products Shopify updated since the previous confirmed sync.

## How this differs from the old process

The older documentation described a Job Manager process that called Shopify product APIs in batches, wrote JSON files, and relied on a separate bulk imported file processor. That flow no longer represents the current product import path.

The current flow:

* Uses Shopify Admin GraphQL bulk operations.
* Tracks each run with HotWax system messages.
* Records product differences before applying them.
* Uses the product sync console for first-time setup, progress, and history.
* Stops the workflow when HotWax Commerce can't confirm the required Shopify or HotWax data.

Use the product sync console as the source of truth for Shopify product and variant counts. The console reads those counts through HotWax Commerce, so the numbers match the same shop and product store used by the import.

## New products and updated products

New Shopify products and updated Shopify products use the same product update sync path.

When Shopify returns a product that HotWax Commerce hasn't linked before, HotWax Commerce uses the selected identifier to decide whether an existing HotWax product receives the Shopify link. If HotWax Commerce can't find a matching product, it creates a new product record.

When Shopify returns a product that HotWax already knows, HotWax applies only the detected changes.

HotWax tracks changes for fields such as title, handle, vendor, image, options, tags, identifiers, price, weight, shipping requirement, gift card state, kit component state, metafields, and variant associations.

## Products on orders before sync

Orders can only flow cleanly when HotWax Commerce has the product data or can match the Shopify product correctly. If an order references a Shopify product that hasn't reached HotWax Commerce yet, first review the product sync console and product sync history for the shop.

Don't assume a missing product needs an old product import job. Confirm whether the product update run finished, whether the product failed during HotWax import, and whether the selected identifier matches the Shopify product.
