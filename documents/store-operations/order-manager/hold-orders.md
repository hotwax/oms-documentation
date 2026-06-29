# Hold Orders

## Overview

The Hold Orders page displays sales orders that have been **placed on hold for general operational reasons** — that is, reasons that are not specifically a bad shipping address, fraud risk, or substitution requirement (those are handled by their respective dedicated pages). Examples include manual holds applied by customer service teams, compliance holds, or custom workflow holds created via the order task system.

Each entry on this page is a **work effort task** (referred to as a "hold task") that must be reviewed and explicitly resolved before the associated order can continue through the fulfillment process.

The page reloads its task list each time it becomes the active view.

---

## Understanding the Task Cards

Each task is displayed as a **Hold Task Card**. Each card shows:

- The order identifier and customer information
- The reason for the hold
- A **"View Order"** link that navigates to the full Order Detail page for that order
- A checkbox for individual selection

Each task card exposes a `submitResolve()` method that is used when the Resolve action is triggered from the footer.

---

## Selection and Bulk Actions

This page supports **selecting multiple tasks simultaneously** for bulk resolution.

A **"Select All"** toggle (`SelectAllResultsItem`) appears at the top of the list when tasks are present. Toggling it selects or deselects all currently loaded tasks. Individual tasks can also be selected or deselected via their checkbox.

When at least one task is selected, a **footer toolbar** appears at the bottom of the screen with one action:

| Action | Description | Confirmation Required |
|---|---|---|
| **Resolve** | Resolves the hold on all selected tasks, releasing those orders back into the fulfillment workflow. | Yes — a confirmation dialog shows the count of selected tasks before proceeding. |

---

## Search and Filtering

A search and filter panel is available at the top of the page. The main search bar is matched against the order name. Pressing the search button triggers the query.

The following additional filters are available:

| Filter | Options | Behaviour |
|---|---|---|
| **Assignee** | All assignees / Me | When set to "Me," restricts results to tasks assigned to the currently logged-in user (matched by party ID). |
| **Order date after** | Date picker | Shows only tasks associated with orders placed on or after the selected date |
| **Order date before** | Date picker | Shows only tasks associated with orders placed on or before the selected date |
| **Channel** | All channels / individual sales channels | Filters tasks by the sales channel of the originating order |

---

## Relationship to the Order Funnel

Hold Orders are visible on the Order Funnel dashboard as part of the **Order Hold Tasks** summary card. The total count on the funnel includes holds of all types (Substitute/Swap, Bad Address, and Fraud Risk). The Hold Orders page shows only those hold tasks that do not fall into any of those three specific categories.
