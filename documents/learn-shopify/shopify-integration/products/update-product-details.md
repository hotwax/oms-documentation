---
description: Understand which Shopify product fields HotWax Commerce imports and how it applies supported changes.
---

# Update product details

Use Shopify to maintain the product information covered by your integration. HotWax Commerce imports supported changes through the [product download](download-products.md) pipeline. The comparison history and product links belong to the selected Shopify shop.

## Understand how changes are compared

HotWax groups incoming data into core details, tags, options, identifiers, metafields, and variant associations. It compares these groups with the saved `ProductUpdateHistory` baseline, using SHA-256 hashes for several groups and direct comparisons for fields such as price. Matching groups do not need the same updates reapplied.

For a new product, HotWax creates the baseline and the corresponding OMS records. For an existing product, it builds a set of additions, removals, and changed values for the supported fields. This is a comparison with the last imported Shopify data, not a complete reconciliation of every OMS field. A manual OMS edit may remain when the incoming Shopify value still matches the saved baseline. Configured product calendar dates use the separate update behavior described below.

## Review the field mappings

| Shopify data | OMS use |
| --- | --- |
| Parent `id` | Parent product link for the selected Shopify shop |
| Parent `handle` | Parent internal name with a `V_` prefix |
| Parent `title` and `vendor` | Product name and brand |
| Parent featured image and variant image | Product detail image |
| Parent `tags` | Product keywords used for organization and search |
| Parent options and variant selected options | Product features, such as size and color |
| Parent `category.name` | A `Category` product attribute when the Product Store's category-attribute setting is enabled |
| Variant `id` | Variant product link for the selected shop |
| Variant `sku` and `barcode` | SKU and barcode identifications; either can also be the configured primary matching value |
| Variant `inventoryItem.id` | Shopify inventory item ID saved when a new shop/product link is created |
| Variant `price` | Product price in the Product Store's currency and store group |
| Variant inventory item weight | Product and shipping weight, using the shop's weight-unit mapping; a missing or numeric zero weight defaults to 1 in the resolved unit |
| Shipping, gift-card, and component flags | Product classification, subject to the Product Store's existing-product type settings |
| Parent metafields in requested namespaces | Supported product attributes |
| Parent and variant metafields mapped to calendar dates | Product Store/product calendar dates, with variant overrides and parent fallback |

The current bulk product query does not request the product description/body HTML or location inventory quantities. It requests some additional fields, such as `compareAtPrice`, that this product importer does not apply as an OMS price. Do not treat every exported Shopify field as a supported field update.

Product inventory item IDs provide the link needed for inventory operations. The importer creates missing shop/product links but does not refresh the inventory item ID on an existing link. Verify that ID separately when recovering a stale mapping. These links do not import stock. Use [Import inventory from Shopify](../inventory/import-inventory-from-shopify.md) for physical starting inventory.

## Apply product calendar dates

Configured metafields can populate `introductionDate`, `releaseDate`, `supportDiscontinuationDate`, and `salesDiscontinuationDate` on each `ProductStoreProduct` record. This update runs when calendar mappings exist and the payload deliberately includes metafields.

The parent uses its own mapped value. Each variant uses its nonblank mapped value, with the parent's value as the fallback when the variant value is missing or blank. Supported metafield types are `date` and `date_time`. An unsupported type produces a warning and leaves the stored date unchanged; an unsupported variant type does not fall back to the parent.

When no effective value remains in a loaded metafield payload, the importer clears the existing mapped date. Calendar dates are applied independently of the general product comparison history, so an unchanged history baseline does not preserve a manual OMS calendar edit.

## Check identifiers before changing them

The Product Store selects Shopify variant ID, SKU, or barcode as the primary matching value. A change to that value can cause the importer to remove an old Shopify link and match or create a different OMS product. Confirm the intended product, shop link, and parent association before making the change.

Nonblank SKU and barcode changes create the corresponding current identification and expire conflicting active values. A blank value is not handled as a general instruction to clear an existing identification. Verify the OMS record after removing a value in Shopify.

## Distinguish removals from excluded products

When a returned parent product's variant list changes, HotWax compares its associations with the previous baseline. A removed variant can have its parent association ended without deleting the underlying OMS product.

A product missing from a filtered update result is not proof of deletion. It may be outside the date window or excluded by the query. Whole-product deletion uses a separate flow; see [Delete products](delete-products.md).

## Verify the applied changes

Review the linked import's errors and compare the affected fields in OMS with the Shopify product. Pay particular attention to identifier changes, blank values, zero values, images, and fields controlled by Product Store settings. The importer does not apply every empty or zero value as a field-clearing instruction.

If the import reports completion but a field differs, first confirm that the field is supported, included in the query, and enabled by the relevant setting. Then review its comparison history and the selected shop's product links. Use the [product sync console](product-sync-console.md) to trace the request and import.
