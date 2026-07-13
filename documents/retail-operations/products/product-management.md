# Manage products in the Products app

Use the Products app to find catalog records, edit product setup, repair common data gaps, and review recent product updates. Open the app from Launchpad, then use the side menu to move between each workflow.

## Before you begin

The pages and edit actions available to you depend on your permissions. If a page or action described here isn't visible, ask your administrator for access.

Before editing categories or prices, open `Settings` and confirm the current `Product Store`. This selection provides the store context for those changes. It's separate from the `Product store` filter on the Product workbench.

## 1. Find and triage products

**Goal:** Narrow the catalog to the products that need review and open the correct product or variant.

**Use this flow when:** You know a product ID, SKU, UPC, or name. You can also use this flow to review products that share a type, store, virtual or variant status, or tag.

**Key labels:** `Product workbench`, `Product ID, SKU, UPC, name`, `Product type`, `Product store`, `Virtual/variant`, `Apply tags`, `Alphabetical`, `Recently updated`, `Recently created`, `Add tag`.

1. Open `Products` > `Product workbench`.
2. Search by product ID, SKU, UPC, or product name.
3. Narrow the results with `Product type`, `Product store`, `Virtual/variant`, or `Apply tags`.
4. If an expected product is missing, clear the search and tags, then select `All types`, `All stores`, and `All products`.
5. Sort the list by `Alphabetical`, `Recently updated`, or `Recently created`.
6. Review the row details, including the product ID or SKU, parent or brand, product type, variant count, tags, preorder or backorder flags, and 30-day sales.
7. Select a row to open the product. Use the checkboxes only when you want to apply `Add tag` to multiple visible products.

**Outcome:** You have isolated the relevant records and opened the correct product for detailed review.

<figure><img src="../.gitbook/assets/product-workbench.png" alt="Product workbench filtered to a fictitious product family and its variants"><figcaption><p>Find and triage products in the Product workbench</p></figcaption></figure>

## 2. Inspect and edit product details

**Goal:** Confirm the product family and update the correct parent or variant without overwriting unrelated product data.

**Use this flow when:** A product has the wrong display data, identifiers, dates, tags, categories, prices, shop mapping, inventory policy, shipping data, or kit components.

**Key labels:** `Product details`, `Features`, `Edit parent`, `Edit variant`, `Display`, `Product identifications`, `Dates`, `Tags`, `Categories`, `Prices`, `Shopify Shop Products`, `Inventory policy`, `Shipping and handling`, `Components`, `Change history`, `Save`, `Reset`.

1. Open the product from the Product workbench.
2. For a product family, use the feature options or variant strip to select the variant you want to inspect.
3. Select `Edit parent` for shared parent data or `Edit variant` for data that belongs to the selected variant.
4. Open the card that matches the task. For example, use `Display` for the name, description, brand, or product type; `Product identifications` for SKU or UPC; and `Categories` or `Prices` for store-specific setup.
5. Make the change, review the draft, then select `Save` on that card. Cards save independently, so save each card that you changed.
6. Select `Reset` to discard an unsaved draft. If the app reports `Underlying data changed`, review the latest data before saving again.
7. Use `Change history` to review recorded identifier changes. Use `Imports` for recent product update records.

**Outcome:** The intended parent or variant data is saved, while changes in other cards remain separate.

<figure><img src="../.gitbook/assets/product-details.png" alt="Product details for a fictitious product variant showing feature selection and editable product cards"><figcaption><p>Inspect and edit a parent product or variant</p></figcaption></figure>

## 3. Resolve duplicate identifiers

**Goal:** Give each product a unique SKU or UPC so operators and integrations can identify the correct record.

**Use this flow when:** `Duplicate identifiers` shows a duplicate group, or a known SKU or UPC points to more than one product.

**Key labels:** `Duplicate identifiers`, `SKU`, `UPC`, `Resolve N products`, `Resolve SKU`, `Resolve UPC`, `Save N changes`.

1. Open `Products` > `Duplicate identifiers`.
2. Select `SKU` to review duplicate SKUs across products, or `UPC` to review duplicate UPCs on variants.
3. Open a duplicate group with `Resolve N products`.
4. Confirm each listed product, then replace the duplicate value with the correct unique SKU or UPC.
5. Select `Save N changes`.
6. Refresh the page and confirm that the corrected group no longer appears.

{% hint style="warning" %}
This workflow changes product identifiers. It doesn't merge or delete product records. Confirm the correct value for every listed product before saving.
{% endhint %}

**Outcome:** Each product in the group has a distinct identifier, and the duplicate group is cleared after the updated data becomes available.

<figure><img src="../.gitbook/assets/resolve-duplicate-identifiers.png" alt="Resolve SKU dialog with fictitious products and one corrected duplicate value"><figcaption><p>Assign a unique value to each product in a duplicate group</p></figcaption></figure>

## 4. Find and fix missing values

**Goal:** Prioritize common catalog gaps and update the affected products from the appropriate product details card.

**Use this flow when:** A product is missing an image, tags, brand, UPC, SKU, or primary category, or when you are performing a catalog quality review.

**Key labels:** `Missing values`, `Catalog coverage`, `Image`, `Tags`, `Brand`, `UPC`, `SKU`, `Primary category`.

1. Open `Products` > `Missing values`.
2. Review `Catalog coverage`. The cards are ordered with the largest gaps first.
3. Select `Image`, `Tags`, `Brand`, `UPC`, `SKU`, or `Primary category` to list the affected products.
4. Open a product from the list.
5. Update the matching area in `Product details`:
   * Select the product image and update `Image URL` for a missing image.
   * Use `Display` for a missing brand.
   * Use `Product identifications` for a missing SKU or UPC.
   * Use `Tags` or `Categories` for a missing tag or primary category.
6. Save the change, then return to `Missing values` and confirm the product leaves the affected list after the updated search data becomes available.

**Outcome:** The selected catalog gap is corrected on the product, and catalog coverage reflects the repair after the search data refreshes.

<figure><img src="../.gitbook/assets/missing-product-values.png" alt="Catalog coverage and fictitious products missing an image"><figcaption><p>Prioritize and open products with missing values</p></figcaption></figure>

## 5. Review product import history and diagnose stale updates

**Goal:** Determine whether a recent product update was recorded and collect useful evidence when the product still looks stale.

**Use this flow when:** A source-system change isn't visible in Product details or the Product workbench, or you need to compare recent updates for a product or shop.

**Key labels:** `Imports`, `Refresh`, `Last 100 recently synced product updates`, `Synced`, `Recorded`, `Shop`, `System message`.

1. Open `Products` > `Imports` and select `Refresh` to load the latest records.
2. Search by product ID, parent product ID, displayed SKU, shop, or system message.
3. Compare the update time and `Shop` with the change you expected.
4. Read the badge as an update-record detail:
   * `Synced` means the record includes a `System message` value.
   * `Recorded` means the record doesn't include a system message value.
5. Don't treat either badge as proof that every field updated successfully. Open the product from the Product workbench and compare Product details with the expected change.
6. If the update is missing or the product remains stale, record the product ID, shop, update time, and system message, when present, for your OMS administrator or HotWax Support.

**Outcome:** You can distinguish a missing recent record from a product that remains stale after an update was recorded, and you have the evidence needed for escalation.

<figure><img src="../.gitbook/assets/product-import-history.png" alt="Recent fictitious product update records with Synced and Recorded badges"><figcaption><p>Compare recent product update records</p></figcaption></figure>

## 6. Verify product store and recover product search

**Goal:** Confirm that you are working in the intended OMS and product store, then rule out search filters before escalating stale or unavailable search data.

**Use this flow when:** Category or price edits may have used the wrong store context, Product workbench results are empty, or recently saved data doesn't appear in search.

**Key labels:** `Settings`, `OMS instance`, `Go to OMS`, `Product Store`, `Select store`, `Product workbench`, `All types`, `All stores`, `All products`, `Could not load products`, `Retry`.

1. Open `Products` > `Settings`.
2. Confirm `OMS instance`. Use `Go to OMS` if you need to verify the connected OMS directly.
3. Under `Product Store`, use `Select store` to choose the store context required for category and price edits.
4. Return to `Product workbench`. Clear the search and tags, then select `All types`, `All stores`, and `All products` to rule out hidden filters.
5. If the page shows `Could not load products`, select `Retry`.
6. If a recently saved change is still stale, compare the latest matching record in `Imports` with Product details and the Product workbench.
7. If the inconsistency remains, send the collected product and update details to your OMS administrator or HotWax Support for search-index recovery.

{% hint style="info" %}
The Products app doesn't provide search-index status or a manual index rebuild action. The `Product Store` in Settings also doesn't change the `Product store` filter on the Product workbench.
{% endhint %}

**Outcome:** You have confirmed the OMS and store context, ruled out search filters and a retryable load error, or prepared a focused escalation for index recovery.

<figure><img src="../.gitbook/assets/products-settings.png" alt="Products app settings with a fictitious OMS instance and product store"><figcaption><p>Confirm the OMS instance and current product store</p></figcaption></figure>

## Related guides

* [Products job workflows](../workflow/job-workflows/products.md)
* [Find product inventory](../inventory/inventory-management/find-product-inventory.md)
* [Configure product inventory](../inventory/inventory-management/configure-product-inventory.md)
