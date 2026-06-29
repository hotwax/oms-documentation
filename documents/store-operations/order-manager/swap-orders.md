# Swap Orders
---

## Overview

The Swap Orders page manages orders that have been placed **on hold because one or more items are unavailable** at the assigned fulfillment facility and a substitute product has been proposed as a replacement. 

Each task on this page represents an order where the system — or a facility associate — has identified that the originally ordered item cannot be fulfilled as requested, and has suggested a substitutable product as an alternative. Stock levels for proposed substitute products are fetched in real time from the inventory system when the page loads.

---

## Understanding the Task Cards

Each task is displayed as a **Swap Task Card**. Each card contains the details of the order and the proposed substitution, including:

- The order identifier and original item details
- The proposed substitute product, with its name and image
- Real-time stock availability of the substitute at the relevant facility
- A **"View Order"** link to navigate directly to the full Order Detail page for that order

The card provides actions to either accept or reject the substitution.

---

## Search and Filtering

A search and filter panel is available at the top of the page. The main search bar is matched against the order name. Pressing the search button triggers the search.

The following additional filters are available:

| Filter | Options | Behaviour |
|---|---|---|
| **Swappable** | Toggle — off by default | When enabled, restricts results to only those swap tasks where the proposed substitute product is confirmed to be in stock and available at the facility. |
| **Date after** | Date picker | Shows only tasks created on or after the selected date |
| **Date before** | Date picker | Shows only tasks created on or before the selected date |
| **Channel** | All channels / individual sales channels | Filters tasks by the sales channel of the originating order |

Changing the Swappable toggle, Channel, Date after, or Date before filters triggers an automatic reload of the task list. A search query is applied only when the search button is explicitly pressed.

Clicking **Clear** resets all filters and reloads the full task list.
