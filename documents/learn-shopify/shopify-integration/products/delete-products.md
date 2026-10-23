---
description: Understand how Shopify product deletions and removed variants affect product links in HotWax Commerce.
---

# Delete products

HotWax Commerce retains OMS product records when products are deleted from Shopify. It updates the relevant product links and parent associations so historical orders can still reference those records.

## Distinguish the two deletion flows

| Change in Shopify | Integration behavior |
| --- | --- |
| A variant is removed from a returned parent product | Product sync compares the returned variant list with its saved baseline and ends the removed variant's active parent association. |
| An entire parent product is deleted | The separately configured product-deletion flow removes that shop's parent and variant links and ends the applicable parent associations. |

The product-deletion flow handles its records through a separate Data Manager import. Products with another active parent are reindexed. Products without another active parent receive deletion metadata and are removed from product search. The underlying OMS product records are retained.

A product missing from a date-filtered or status-filtered product export is not a deletion signal. The regular product-update query excludes archived products by default, so archiving a product is also not proof that the whole-product deletion flow ran.

## Confirm deletion processing

1. Confirm the Shopify shop and whether the change removed a variant or deleted an entire product.
2. Review the applicable product-update or product-deletion import and its errors.
3. Verify the selected shop's product links, the affected parent associations, and product search results.

Product deletion processing depends on its own configured event intake and import jobs. A healthy recurring product-update job alone does not confirm that deletions are being processed.
