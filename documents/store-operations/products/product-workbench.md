# Product workbench

The Product workbench is the main product search page. It shows parent products and variants from the product index and provides links to the relevant product family on the Product details page.

## Search products

Enter a search term to search the indexed product ID, parent or group ID, product name, parent product name, internal name, SKU, and UPC fields. The result count updates with the search and filter criteria.

## Filter products

Use the filters below the search bar to narrow the result set:

| Filter | Behavior |
| --- | --- |
| Product type | Select a product type returned by the OMS product-type list. |
| Product store | Select a product store associated with the indexed product. |
| Virtual/variant | Show all products, virtual parent products, or variants. |
| Tags | Select one or more indexed product tags. |

Selected tags appear as removable chips. Click the red clear button to reset the search, filters, sort order, and current selection to the workbench defaults.

## Select products and add tags

Select individual rows or use `Select all` to select the products currently loaded in the list. `Select all` does not select result pages that have not been loaded.

After selecting products:

1. Click `Add tag`.
2. Select one or more existing tags. If the search does not return a tag, you can enter and add a new value.
3. Click `Add`.

The app adds each selected tag to each selected product, requests product reindexing, and refreshes the results.

## Sort results

Use `Sort` to order results by:

* `Alphabetical` — Product name in ascending order.
* `Recently updated` — Most recently modified products first.
* `Recently created` — Most recently created products first.

## Review the product list

Each row can show:

* The product image.
* The product or variant display name.
* The SKU, or the product ID when no SKU is present.
* The parent product name for a variant, or the brand or product type for another product.
* A variant count for a virtual product.
* Preorder or backorder status and product tags.
* Units sold during the last 30 days with a sales sparkline when sales exist.

Click a row to open Product details. Selecting a variant opens its parent product family with that variant selected.

## Create a product

Click the add icon in the page header to open product creation. This action requires `PIM_PRODUCT_CREATE` or `PIM_PRODUCT_ADMIN`.
