# Create Cycle Count

The Create Count page allows administrators and store managers to set up new cycle counts and assign them to specific facilities.

The Inventory Count App provides two views — **Admin** and **Store** — that share the same Create Count workflow. The key difference is in navigation and default settings, as described below.

## Admin view vs Store view

| Feature | Admin view | Store view |
| :--- | :--- | :--- |
| Navigation | Left sidebar menu | Bottom tab bar |
| Default facility | Must be selected manually | Pre-selected to the current store |
| Menu options | Bulk Upload, Create count, Assigned, Pending Review, Closed, Store Permissions, Settings | Counts, Create, Variance, Settings |
| Target user | Head-office administrators, inventory managers | Store managers, authorized store associates |

## Accessing the Create Count page

### Admin view
1. Log in to the Inventory Count App with an admin-level account.
2. From the left-hand sidebar, select `Create count`.
3. The `Create` page opens.

### Store view
1. Log in to the Inventory Count App with a store-level account.
2. From the bottom navigation bar, select the `Create` tab (identified by a `+` icon).
3. The `Create` page opens.

## Fill in the count details

### Count name

- Locate the `Count name` field at the top of the form.
- Enter a clear, descriptive name for the cycle count.
> This field is **required**. An error message `Please enter count name` is displayed if left empty.

### Facility

- Select the `Facility` chip on the right side of the `Facility` row.
- A facility selection modal opens.
- Use the search bar to filter facilities by name or facility ID.
- Select the target facility from the list by clicking the radio button.
- The modal closes and the selected facility name is displayed on the chip.
- This field is **required**. An error message `Please select a facility` is displayed if no facility is selected.

> **Note:** In the Store view, the current store facility is pre-selected by default. Store users typically keep this default unless they have permissions to create counts for other facilities.

### Count type

- Select the `Count type` dropdown.
- Choose one of the following count types:

| Count type | Description |
| :--- | :--- |
| `Directed count` | A targeted count that includes only specific, pre-selected products. Store associates count only the items that appear in the directed list. |
| `Hard count` | A comprehensive, facility-wide count. Store associates count every product they encounter, whether or not it is in the system. |

> `Directed count` is selected by default.

### Due Date

- Select `Add Date` next to `Due Date`.
- A date picker opens. Choose the date by which the count should be completed.
- Select `Done` to confirm.
> This field is **required**. An error message `Please select due date` is displayed if no date is set.

### Start Date

- Select `Add Date` next to `Start Date`.
- A date picker opens. Choose the date when the store team is expected to begin counting.
- Select `Done` to confirm.
> The start date **cannot be after the due date**. If it is, an error message `Start date cannot be after the due date` is displayed.

## Search and select products

After filling in the count details, use the product search section to find and select the items to include in the cycle count.

### Search for products

- Use the `Search products` search bar to find products by name, SKU, or product ID.
- Products matching the search term are displayed in a list below.

### Filter by tags

- Select the `Tags` chip to open a facet filter modal.
- Choose one or more tag values to narrow down the product list.
- Select `Apply` to update the results.
> The chip label updates to show the number of selected tag values (for example, `3 selected`) or the specific tag name if only one is selected.

### Product list columns

Each product row displays the following information:

| Column | Description |
| :--- | :--- |
| Checkbox | Select or deselect the product for inclusion in the count |
| Product image | Thumbnail of the product |
| SKU | Internal name or SKU of the product |
| Product name | Product name or parent product name |
| Category | Primary product category |
| Product ID | System product identifier |

> **Note:** On smaller screens (Store view on mobile devices), the product list adapts to a mobile layout. The same information is available, but the columns may stack vertically for better readability.

### Select products

- Click on any product row or its checkbox to select it for the count.
- Selected rows are highlighted.
- The selection count is displayed at the top-right of the list (for example, `5 selected`).

### Select all products

- Use the `All` checkbox at the top of the list to select or deselect all currently visible products.
- If the total number of matching products exceeds the loaded page, a `Select all [N]` button appears. Select it to include all matching products across all pages.

> **Note:** A cycle count is limited to a maximum of 2,000 items. If you attempt to select more, the system displays a warning: `A count cannot have more than 2000 items`.

### Show selected only

- Enable the `Show selected only` toggle to display only the products that have already been selected.
- This is useful for reviewing your selection before submitting the count.
- The toggle is disabled when no products are selected.

## Create the cycle count

1. Select the `Create Cycle Count` button at the bottom-right corner of the page.
2. A confirmation dialog appears:
   - If a count with the same name already exists for the selected facility, the message reads: `A count named "[name]" is already open for this facility, these items will be added to it. Continue?`
   - Otherwise, the message reads: `Are you sure you want to create cycle count with [N] items?`
3. Select `Create` to confirm, or `Cancel` to go back.
4. On successful creation, a toast message is displayed: `The cycle count has been created successfully`.
5. The form resets, allowing you to create another count immediately.

The newly created cycle count will appear under:
- **Admin view:** The `Assigned` tab in the sidebar.
- **Store view:** The `Counts` tab in the bottom navigation bar.

