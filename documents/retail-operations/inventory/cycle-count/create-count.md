# Create cycle count

The Inventory Count App allows administrators and store managers to create cycle counts for any facility. Both the Admin view and the Store view share the same Create Count form. The difference is how you navigate to the page and which facility is pre-selected.

## Admin view vs Store view

| Feature | Admin view | Store view |
| :--- | :--- | :--- |
| Navigation | Left sidebar menu | Bottom tab bar |
| Default facility | Must be selected manually | Pre-selected to the current store |
| Menu options | Bulk Upload, Create count, Assigned, Pending Review, Closed, Store Permissions, Settings | Counts, Create, Variance, Settings |

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
- The selected facility name appears on the chip.
> This field is required in Admin view. If no facility is selected, the app displays `Please select a facility`.

### Count type

- Select the `Count type` dropdown and choose one of the following:

| Count type | Description |
| :--- | :--- |
| `Directed count` | A targeted count of specific, pre-selected products. Associates count only the items in the directed list |
| `Hard count` | A facility-wide count. Associates count every product they find, whether or not it is in the system |

> `Directed count` is selected by default.

### Due Date

- Select `Add Date` next to `Due Date`.
- Choose the date by which the count should be completed from the date picker.
- Select `Done` to confirm.

> This field is required. If no date is set, the app displays `Please select due date`.

### Start Date

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

> A cycle count cannot have more than 2,000 items. If you exceed this limit, the app displays a warning.

### Show selected only

- Turn on the `Show selected only` toggle to display only the products already selected.
- This helps review selections before creating the count.
- The toggle is disabled when no products are selected.

## Create the cycle count

1. Select `Create Cycle Count` at the bottom right of the page.
2. A confirmation dialog appears:
   - If a count with the same name already exists for the selected facility: `A count named "[name]" is already open for this facility, these items will be added to it. Continue?`
   - Otherwise: `Are you sure you want to create cycle count with [N] items?`
3. Select `Create` to confirm, or `Cancel` to go back.
4. On success, a message displays: `The cycle count has been created successfully`.
5. The form resets so you can create another count.

The newly created cycle count appears under:
- **Admin view:** The `Assigned` tab in the sidebar after processing
- **Store view:** The `Counts` tab on the bottom navigation bar shows it only after it moves from `Created` status to `Approved` status.
