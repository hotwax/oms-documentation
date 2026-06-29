# Fraud Orders

## Overview

The Fraud Orders page manages sales orders that have been **flagged as potentially fraudulent** by the Order Management System or an integrated risk-assessment service. These orders are placed on hold for review the risk information and decide whether to release the order for fulfillment or cancel it.

Each entry on this page is a **work effort task** (referred to as a "fraud task") associated with a specific order. The task carries metadata from the fraud risk evaluation, including a risk level (severity) and a recommendation from the risk system, which the reviewer uses to make an informed decision.

The page reloads its task list each time it becomes the active view. After any task is acted upon, the list is refreshed automatically.

---

## Understanding the Task Cards

Each task is displayed as a **Fraud Task Card**. Each card shows:

- The order identifier and customer name
- The fraud risk level (severity) — sourced from the `ORDER_RISK_LEVEL` enumeration type
- The risk recommendation — sourced from the `ORDER_RISK_RECOMMENDATION` enumeration type
- A list of the order's line items with product details
- A **"View Order"** link to navigate directly to the full Order Detail page for that order
- Individual per-card actions to resolve or cancel the specific order

---

## Selection and Bulk Actions

This page supports **selecting multiple tasks simultaneously** for bulk operations.

A **"Select All"** toggle appears at the top of the list when tasks are present. Toggling it selects or deselects all currently loaded tasks. Individual tasks can also be selected or deselected via their checkbox.

When at least one task is selected, a **footer toolbar** appears at the bottom of the screen with two actions:

| Action | Description | Confirmation Required |
|---|---|---|
| **Resolve** | Releases the fraud hold on all selected orders, allowing them to proceed through the fulfillment workflow. | No — the action executes immediately for all selected cards. |
| **Cancel orders** | Permanently cancels all selected orders. This action cannot be undone. | Yes — a confirmation dialog shows the count of orders to be cancelled before proceeding. |

If any task fails during a bulk operation, an error toast notification is displayed.

---

## Search and Filtering

A search and filter panel is available at the top of the page. The main search bar is matched against the order name. Pressing the search button triggers the query.

The following additional filters are available:

| Filter | Options | Behaviour |
|---|---|---|
| **Assignee** | All assignees / Me | When set to "Me," restricts results to tasks assigned to the currently logged-in user (matched by party ID). |
| **Channel** | All channels / individual sales channels | Filters tasks by the sales channel of the originating order |
| **Recommendation** | All recommendations / individual risk recommendation values | Filters by the fraud recommendation classification (e.g. Accept, Reject, Review). Values are sourced from the `ORDER_RISK_RECOMMENDATION` enumeration. |
| **Severity** | All severity / individual risk level values | Filters by the fraud risk severity level (e.g. High, Medium, Low). Values are sourced from the `ORDER_RISK_LEVEL` enumeration. |

Clicking **Clear** resets all filters and reloads the full list.

