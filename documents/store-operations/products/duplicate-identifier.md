# Duplicate identifiers

The Duplicate identifiers page groups products that share an indexed SKU or UPC value:

* `SKU` checks all products.
* `UPC` checks variants because UPC values are managed per variant.

This page and its resolution actions require `PIM_PRODUCT_ADMIN`.

## Review duplicate groups

Select `SKU` or `UPC` in the page header. The page shows the number of duplicate groups and lists the shared value for each group. Groups with more products appear first.

If no duplicates exist for the selected identifier, the page shows `No duplicates` and confirms that every eligible product has a unique value.

## Resolve a duplicate group

1. Click `Resolve [N] products` for the group you want to edit.
2. Review the product image, display name, product ID, and creation date when available.
3. Replace the duplicated value for each product that needs a different identifier. The field shows `Unchanged` until you edit it and `Was [original value]` after a change.
4. Click `Save [N] changes`.

The save button is disabled until at least one identifier contains a changed, non-empty value. Only changed rows are submitted. Click `Close` to dismiss the modal without saving.
