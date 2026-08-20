---
description: Create and assign a cycle count to a facility.
---

# Create cycle count

Use the Inventory Count App to create and assign a cycle count. Admin users can create counts for any available facility. Store users can create counts only for facilities associated with their account. Both views use the same Create Count flow, but the navigation differs.

## Before you begin

- You need the `COMMON_ADMIN`, `INV_COUNT_ADMIN`, or `INVCOUNT_APP_VIEW` permission to open the Create Count page.
- Store users must be associated with at least one active facility.
- Prepare a count name and due date before you begin.
- The manual Create Count flow requires at least one selected product.

## Admin view vs Store view

| Feature | Admin view | Store view |
| :--- | :--- | :--- |
| Navigation | Left sidebar menu | Bottom tab bar |
| Default facility | Must be selected manually | Pre-selected to the current store |

## Accessing the Create count page

### Admin view

1. Log in to the Inventory Count App with an admin-level account.
2. From the left-hand sidebar, select `Create count`.
3. The `Create` page opens.

### Store view

1. Log in to the Inventory Count App with a store-level account.
2. From the bottom navigation bar, select the `Create` tab.
3. The `Create` page opens.

## Fill in count details

### Count name

- Enter a descriptive name for the cycle count in the `Count name` field at the top of the form.

> This field is required. If left empty, the app displays `Please enter count name`.

### Facility

- Select the `Facility` chip to open the facility selection modal.
- **Admin view:** No facility is pre-selected. Use the search bar to filter facilities by name or facility ID, then select the facility from the list.
- **Store view:** The facility is fixed to the current store and cannot be changed.
- The `Facility` chip displays the selected facility name.

> This field is required in Admin view. If no facility is selected, the app displays `Please select a facility`.

### Count type

- Select the `Count type` dropdown and choose one of the following:

| Count type | Description |
| :--- | :--- |
| `Hard count` | Use for comprehensive inventory verification across a facility. |
| `Directed count` | Use for targeted verification of selected products. |

> `Directed count` is selected by default.

For more information about when to use each type, see [Types of cycle count](../../../learn-hotwax-oms/business-processes/inventory-management.md#types-of-cycle-count).

### Due date

- Select `Add Date` next to `Due Date`.
- Choose the date by which the count should be completed from the date picker.
- Select `Done` to confirm.

> This field is required. If no date is set, the app displays `Please select due date`.

### Start date

- Select `Add Date` next to `Start Date`.
- Choose the date when counting should begin from the date picker.
- Select `Done` to confirm.

> This field is optional. If not set, the app defaults to the current date. The start date cannot be after the due date.

## Search and select products

After filling in count details, use the product section to find and select items for the cycle count.

### Search for products

- Enter a product name, SKU, or product ID in the `Search products` bar.
- Matching products appear in the list below.

> Before applying any filter or search term, the list shows `Please select filters to view items`.

### Filter by tags

- Select the `Tags` chip to open the filter modal.
- Choose one or more tag values to narrow the product list.
- Select `Apply` to update results.

> The chip label updates to show the count of selected values (for example, `3 selected`) or the tag name if only one is selected.

### Product list

Each product row displays:

| Column | Description |
| :--- | :--- |
| Checkbox | Select or deselect the product |
| Product image | Thumbnail of the product |
| SKU | Internal name or SKU |
| Product name | Product name or parent product name |
| Category | Primary product category |
| Product ID | System product identifier |

### Select products

- Click any product row or its checkbox to select it.
- Selected rows are highlighted.
- The selection count appears at the top right of the list (for example, `5 selected`).

### Select all products

- Use the `All` checkbox at the top of the list to select or deselect all visible products.
- If the total matching products exceed the loaded page, a `Select all` button appears with the total count. Select it to include all matching products.

### Show selected only

- Turn on the `Show selected only` toggle to display only the products already selected.
- This helps review selections before creating the count.
- When toggled on, other filters are disabled. You can only remove items from the selected list and cannot add new items.
- The toggle is disabled when no products are selected.

## Create the cycle count

1. Select `Create Cycle Count` at the bottom right of the page.
2. A confirmation dialog appears:
   - If a count with the same name already exists for the selected facility: `A count named "[name]" is already open for this facility, these items will be added to it. Continue?`
   - Otherwise: `Are you sure you want to create cycle count with [N] items?`
3. Select `Create` to confirm, or `Cancel` to go back.
4. On success, a message displays: `The cycle count has been created successfully`.
5. The form resets so you can create another count.

If an open count with the same name already exists for the selected facility, selecting `Create` adds the selected products to that count instead of creating another count.

After processing, the newly created cycle count appears in:

- **Admin view:** The `Assigned` page in `Created` status.
- **Store view:** The `Counts` page in `Created` status.

Store users can start the count when its configured start date allows it.
