---
description: Learn how Shopify product deletions affect HotWax Commerce.
---

# Deleting products

When users delete a product in Shopify, HotWax Commerce must remove the Shopify shop links without breaking historical orders, returns, or reporting.

HotWax Commerce doesn't treat product deletion as a normal product update. Shopify product deletes follow a delete-event import path. HotWax Commerce groups delete events by Shopify shop, stages them for processing, and then removes the Shopify links from the affected products.

## HotWax delete behavior

When HotWax processes a Shopify product delete event, it:

* Finds the Shopify shop product link.
* Confirms the deleted Shopify product has a link to a HotWax parent product.
* Expires active variant associations for that parent product.
* Removes Shopify shop product links for the selected shop.
* Re-indexes products that still belong to another active parent.
* Marks orphaned products with a `Product deleted from Shopify` keyword and removes them from product search.

This protects historical records while keeping deleted Shopify products out of active product search.

## What to check

If a deleted Shopify product still appears active in HotWax:

1. Confirm the Shopify product delete sync job runs for the shop's delete-event queue.
2. Confirm the delete event reached HotWax.
3. Check whether the product still has active associations from another Shopify shop or product store.
4. Confirm HotWax refreshed product search after the delete event processed.

Don't rely on the old Shopify product create/delete webhook documentation for this workflow. Product deletes now follow the delete-event import path.
