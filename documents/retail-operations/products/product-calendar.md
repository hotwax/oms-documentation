---
description: Review and edit product lifecycle dates for a product store, one product or many at a time, and check its Shopify calendar mapping coverage.
---

# Manage the product calendar

Use `Product calendar` in the **Products App** to review and edit lifecycle dates for the selected product store. A product can have different calendar dates for different stores, such as stores representing different countries.

## Confirm the product store

1. Open `Settings` and confirm the current `Product Store`.
2. Open `Product calendar` from the menu.
3. Before reviewing or editing dates, check the product store ID at the top of the list heading.

A link opened from another app can specify a different product store. The store ID on the calendar is the scope of the displayed rows and of any date you save. The Product workbench's store filter doesn't set the calendar's scope.

If `No product store selected` appears, select a product store in `Settings` and reopen the calendar.

## Find and read calendar dates

The calendar lists every product in the store, ordered by product ID. The list heading shows how many rows have loaded out of the total, for example `50 of 46,632 products`. More rows load as you scroll.

1. Enter a product ID, product name, or internal name in `Search by product name or ID`. The search runs across the whole store when you pause typing.
2. Identify each product by its image and the identifiers chosen in `Settings` > `Product identifier`.
3. Compare the four date columns.
4. Select the refresh action to read the saved calendar again.

| Column | Date displayed |
| --- | --- |
| `Introduction` | Introduction date for this product and store |
| `Launch` | Release date for this product and store |
| `Support ends` | Support discontinuation date for this product and store |
| `Sales ends` | Sales discontinuation date for this product and store |

A dash means the product has no date for that field in this store. `No calendar rows match the current search.` means no product in the store matches. Before escalating a missing product, clear the search and refresh.

{% hint style="info" %}
The `Dates` card in Product details edits the product's general dates. Edit the store's calendar dates here.
{% endhint %}

## Edit one product's dates

1. Select the product's row. `Edit calendar dates` opens with the product's four dates.
2. Select a date to open the date picker, choose the date, and select `Done`. Select `Cancel` to close the picker without a change.
3. Select `Clear date` to remove a date. A changed date shows `Was {date}` beneath it; select `Undo change` to restore the saved date.
4. Select the save button. The app sends only the dates you changed.

The app shows `Calendar dates updated.` when the save succeeds.

## Edit dates for many products

1. Select `Select` in the list heading. In select mode, selecting a row selects it instead of opening it.
2. Select the products to change, or use the heading checkbox to select every loaded row. The footer shows `{n} selected`.
3. Select `Edit dates` in the footer. The dialog reads `Edit dates for {count} products` and notes `Only the dates you change are updated on each product.`
4. Leave a date at `No change` to keep each product's own value, choose a date to set it on every selected product, or select `Clear date` to remove it from every selected product. Select `Undo change` to go back to `No change`.
5. Select the save button.

The app reports `Updated dates for {count} products.` or, when some saves fail, `Updated {updated} of {count} products.` Select `Done` to leave select mode.

Dates use the time zone set in `Settings`.

## Check Shopify mapping coverage

The `Shopify metafield mappings` card counts populated calendar mappings belonging to shops linked to this product store, for example `2 active calendar mappings`. The count describes mapping configuration, not a count of products synchronized successfully.

Select `Manage Shopify mappings` to open the linked connection's `Product Sync` page in Company. When several shops belong to the store, this link opens one connection; review the remaining connections separately. The calendar doesn't create or edit metafield mappings itself.

Keep calendar maintenance and sourcing-rule configuration as separate tasks. Changing these dates doesn't activate or change an available-to-promise rule by itself.

## Recover from a failed load or save

`Unable to load product calendar.` means the calendar request failed. `Unable to load Shopify metafield mappings.` means the mapping request failed. Confirm the product store and connection, then refresh. If the message persists, give the technical team the HotWax Commerce instance, product store ID, product ID, and time of the failure. An empty list after this message doesn't prove the store has no calendar records.

`Unable to update calendar dates.` means the app saved no product's dates. The dialog stays open with your changes, so you can try again. Escalate with the same details if it persists. After a partial save, refresh the calendar to see which products changed.

## Related guides

* [Manage products](product-management.md)
* [Monitor Shopify Product Sync](../../system-admin/administration/company/manage-shopify-product-sync.md)
* [Configure safety stock rules](../inventory/available-to-promise/safety-stock-rules.md)
