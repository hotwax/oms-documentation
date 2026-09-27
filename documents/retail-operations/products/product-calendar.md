---
description: Review product lifecycle dates for a product store and check its Shopify calendar mapping coverage.
---

# Review the product calendar

Use `Product calendar` in the **Products App** to review lifecycle dates for the selected product store. A product can have different calendar dates for different stores, such as stores representing different countries.

## Confirm the product store

1. Open `Settings` and confirm the current `Product Store`.
2. Open `Product calendar` from the menu.
3. Check the product store ID above the page heading before reviewing dates.

A link opened from another app can specify a different product store. The store ID on the calendar is the scope of the displayed rows. The Product workbench's store filter does not set the calendar's scope.

If `No product store selected` appears, select a product store in `Settings` and reopen the calendar.

## Find and read calendar dates

1. Enter a product name or HotWax product ID in `Search by product name or ID`.
2. Review the product ID beneath the product name.
3. Compare the four date columns.
4. Select the refresh action to read the saved calendar again.

| Column | Date displayed |
| --- | --- |
| `Introduction` | Introduction date for this product and store |
| `Launch` | Release date for this product and store |
| `Support ends` | Support discontinuation date for this product and store |
| `Sales ends` | Sales discontinuation date for this product and store |

A dash means the page has no readable date for that field. `No calendar rows match the current search` can mean the search excludes the loaded rows or that no calendar rows were returned. Clear the search and refresh before escalating a missing product.

The page reads up to 500 calendar rows, ordered by product ID. Search filters those loaded rows; it does not search the entire catalog or load another page. A product missing from this view is not proof that it has no saved calendar record.


{% hint style="info" %}
The calendar is a review page. It does not provide date entry, row creation, or a save action. The `Dates` card in Product details edits the product's general dates; do not use it as a substitute for changing this store's calendar. Ask the team responsible for calendar imports or integrations to update the store-specific records.
{% endhint %}

## Check Shopify mapping coverage

The `Shopify metafield mappings` card counts populated calendar mappings belonging to shops linked to this product store. The count describes mapping configuration, not a count of products synchronized successfully.

Select `Manage Shopify mappings` to open the linked connection's Product Sync page in Company. When several shops belong to the store, this link opens one connection; review the remaining connections separately. The calendar does not create or edit metafield mappings itself.

Keep calendar maintenance and sourcing-rule configuration as separate tasks. Reviewing these dates does not activate or change an available-to-promise rule.

## Recover from a failed load

`Unable to load product calendar` means the calendar, shop, or mapping request failed. Confirm the product store and connection, then refresh. If the message persists, give the technical team the OMS, product store ID, product ID, and time of the failure. An empty list after this message does not prove the store has no calendar records.

## Related guides

* [Manage products](product-management.md)
* [Monitor Shopify Product Sync](../../system-admin/administration/company/manage-shopify-product-sync.md)
* [Configure safety stock rules](../inventory/available-to-promise/safety-stock-rules.md)
