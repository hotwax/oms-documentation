---
description: Understand how Shopify product deletions and removed variants affect product links in HotWax Commerce.
---

# Delete products

HotWax Commerce retains OMS product records when products are deleted from Shopify. It updates the relevant product links and parent associations so historical orders can still reference those records.

## Distinguish the two deletion flows

| Change in Shopify | Integration behavior |
| --- | --- |
| A variant is removed from a returned parent product | Product sync compares the returned variant list with its saved baseline and ends the removed variant's active parent association. Its OMS product and shop/product link remain. |
| An entire parent product is deleted | The separately configured product-deletion flow finds the linked virtual parent and its currently active variant associations. It removes that shop's links for those products and ends the applicable associations. |

The product-deletion flow handles its records through a separate Data Manager import. Among the products it finds, products with another active parent are reindexed. Products without another active parent receive deletion metadata and are removed from product search. The underlying OMS product records are retained.

The flow makes no changes when the selected shop has no matching parent link or the linked product is not virtual. A variant whose parent association ended earlier is outside the active-association lookup, so deleting its former parent does not guarantee removal of that variant's retained shop link.

A product missing from a date-filtered or status-filtered product export is not a deletion signal. The regular product-update query excludes archived products by default, so archiving a product is also not proof that the whole-product deletion flow ran.

## Confirm deletion processing

1. Confirm the Shopify shop and whether the change removed a variant or deleted an entire product.
2. Review the applicable product-update or product-deletion import and its errors.
3. Verify the selected shop's parent link, the affected active parent associations, and product search results. Check previously removed variants separately for retained shop links.

Product deletion processing depends on its own configured event intake and import jobs. A healthy recurring product-update job alone does not confirm that deletions are being processed.
