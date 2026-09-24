# Duplicate Identifiers

The `Duplicate Identifiers` page helps users find and resolve products that share the same `SKU` or `UPC`, both of which should be unique per product or variant. The page is organized into two tabs:

* **SKU**: Each product should have a unique SKU. Resolve a group by giving each product a unique value, then save.
* **UPC**: Each variant should have a unique UPC. Resolve a group by giving each product a unique value, then save.

If no duplicates exist for the selected identifier, the page displays `No duplicates` along with the message `Every product has a unique SKU` (or `UPC`, depending on the active tab).

When duplicates are found, the page displays the total number of duplicate groups (for example: `8 duplicate groups`), followed by a list of groups. Each group shows:

* The shared identifier value causing the duplication (for example: `pollo-s`).
* A `RESOLVE [N] PRODUCTS` button, where `[N]` is the number of products sharing that value.

## Resolving a Duplicate Group

Step-by-step usage instructions:

1. On the `Duplicate Identifiers` page, select the `SKU` or `UPC` tab depending on which identifier needs resolving.
2. Find the duplicate group to resolve and click `RESOLVE [N] PRODUCTS`. This opens the `Resolve SKU`/`Resolve UPC` modal.
3. The modal lists every product in the group, each showing its variant name, `Product ID`, and an editable field pre-filled with the current duplicate value. Each product also shows a status, either `Unchanged` or, once edited, `Was [original value]`, reflecting the value it had before editing.
4. Update the value in the field for each product that needs a unique identifier.
5. As changes are made, the `SAVE [N] CHANGES` button at the bottom of the modal updates to reflect the number of edited products, and becomes active.
6. Click `SAVE [N] CHANGES` to apply the updates, or `CLOSE` to exit the modal without saving.
