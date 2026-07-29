# Products app

The Products app is HotWax Commerce's product information management workspace. Use it to find products and variants, maintain catalog data, review data-quality gaps, and inspect recent product updates from connected shops.

## Key features

* **Product workbench** — Search, filter, and sort products and variants, open their details, create products, and add tags in bulk.
* **Product details** — Maintain display data, identifiers, dates, tags, categories, prices, Shopify mappings, inventory policy, shipping measurements, features, and product relationships.
* **Data fixes** — Find duplicate SKU or UPC values and review products that are missing important indexed fields.
* **Imports** — Inspect the 100 most recently updated product synchronization records.

## Prerequisites to use the app

Access is controlled at both the app and page level:

* `PRODUCTS_APP_VIEW` grants access to the Products app.
* `PIM_PRODUCT_VIEW` or `PIM_PRODUCT_ADMIN` grants access to the Product workbench, Product details, Missing values, and Imports pages.
* `PIM_PRODUCT_CREATE` or `PIM_PRODUCT_ADMIN` enables product creation and editing.
* `PIM_PRODUCT_ADMIN` grants access to duplicate-identifier resolution.
* `PIM_FEATURE_CREATE` or `PIM_FEATURE_ADMIN` enables feature creation and application. Removing a feature requires `PIM_FEATURE_ADMIN`.
