# Bad Address Orders
---

## Overview

The Bad Address Orders page manages sales orders that are currently **on hold because the shipping address could not be verified** by the address validation system. These orders cannot proceed to fulfillment until the address issue is resolved — either by correcting the address, accepting a system-suggested correction, cancelling the order, or temporarily moving it to a parking facility.

Each entry on this page is a **work effort task** (referred to as an "address validation task") associated with a specific order. The system may have generated a suggested corrected address based on external validation services, which the CSR can review and accept, or the CSR may manually enter a corrected address.

The page reloads its task list each time it becomes the active view.

---

## Understanding the Task Cards

Each task is displayed as a **Bad Address Task Card**. Each card shows:

- The order identifier and customer name
- The **original shipping address** on the order as submitted
- The **suggested corrected address** (if address validation produced a recommendation), pre-selected by default when a suggestion exists
- An editable form for each address so the operator can manually revise any field
- The full list of countries and their states/provinces, loaded from the seed store, for use in address dropdowns
- A **"View Order"** link to navigate to the full Order Detail page for that order

When a task loads, the page automatically determines whether a suggested address is available (parsed from the task's `locationDesc` field). If a suggestion exists, it is shown as the default selection. If no suggestion is available, the original address is pre-selected.

---

## Selection and Bulk Actions

This page supports **selecting multiple tasks simultaneously** for bulk operations.

A **"Select All"** toggle (`SelectAllResultsItem`) appears at the top of the list when tasks are present. Toggling it selects or deselects all currently loaded tasks at once. Individual tasks can also be selected or deselected by clicking their checkbox.

When at least one task is selected, a **footer toolbar** appears at the bottom of the screen with three actions:

| Action | Description | Confirmation Required |
|---|---|---|
| **Save and Release Hold** | Saves the currently selected address (original or suggested, as chosen on each card) and releases the hold so the order can re-enter fulfillment. Each card is validated before submission — if any card has an incomplete or invalid address, an error is shown and the bulk action is stopped. | Yes — a confirmation dialog shows the count of affected orders before proceeding. |
| **Cancel Order** | Permanently cancels all selected orders. This action cannot be undone. | Yes — a confirmation dialog warns that the action is irreversible. |
| **Park** | Moves the selected orders to a chosen virtual parking facility. A **Facility Modal** opens for the operator to select the destination parking facility from the available options. | No |

---

## Search and Filtering

A search and filter panel is available at the top of the page. The main search bar is matched against the order name. Pressing the search button triggers the query.

The following additional filters are available:

| Filter | Options | Behaviour |
|---|---|---|
| **Assignee** | All assignees / Me | When set to "Me," restricts results to tasks assigned to the currently logged-in user (matched by their party ID). |
| **Date after** | Date picker | Shows only tasks created on or after the selected date |
| **Date before** | Date picker | Shows only tasks created on or before the selected date |
| **Channel** | All channels / individual sales channels | Filters tasks by the sales channel of the originating order |

Changing Assignee, Channel, Date after, or Date before immediately reloads the task list. The search query is applied only when the search button is explicitly pressed.

Clicking **Clear** resets all filters and reloads the full list.

---
