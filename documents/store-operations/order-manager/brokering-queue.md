# Brokering Queue


## Overview

The Brokering Queue displays all approved orders that are **awaiting assignment to a fulfillment facility**, as well as orders that were **previously assigned to a facility but subsequently rejected** by that facility and returned to the queue. Together, these represent the pool of orders that the Order Management System is actively attempting to route.

Brokering is the process by which the OMS evaluates each order and matches it to the most appropriate fulfillment location based on inventory availability, facility capacity, proximity, and configured routing rules. Orders in the Brokering Queue are those that have not yet completed this process.


---

## Understanding the List

Each row in the Brokering Queue represents a single order. The following information is displayed per row:

| Column | Description |
|---|---|
| **Order ID** | The internal HotWax Commerce order identifier, shown in small overline text |
| **Order name / External ID** | The Shopify or external order name, with the order's current status description shown below |
| **Customer name** | The full name of the customer |
| **Queue reason / Rejection reason** | The reason this order is in the queue. For re-brokered orders this reflects the rejection reason from the facility that returned it. If no reason is available, "Reason unavailable" is displayed |
| **Rule name / Parking unit count** | The routing rule name associated with this order, or the number of units parked in a virtual facility (e.g. "2 units in parking") |
| **Order date** | The date and time the order was placed, in `MM-DD-YYYY HH:MM AM/PM` format |
| **Relative order date** | A relative label such as "Ordered 3 hours ago," displayed below the exact date |
| **Estimated delivery date** | The projected delivery date in `MM-DD-YYYY` format, derived from the order's estimated delivery date, ship-before date, or ship-by date |
| **Relative delivery** | A relative label such as "in 2 days" indicating how far away the estimated delivery date is |

The results summary in the list header (e.g. "35 of 120 orders") shows the current loaded count against the total result set.

---

## Search and Filtering

A collapsible **search and filter panel** is available at the top of the page. The main search bar accepts a free-text query matched against order name, external ID, customer name, and email.

The following additional filters are available:

| Filter | Options | Behavior |
|---|---|---|
| **Facility** | All virtual facilities / individual virtual facilities (multi-select) | Scopes the queue to one or more specific virtual facilities. Selecting "All" includes all virtual facilities configured in the system. |
| **Sales channel** | All sales channels / individual channels | Filters by the channel through which the order was placed |
| **Shipping method** | All methods / individual configured methods | Filters by the delivery method |
| **Order date from** | Date picker | Shows only orders placed on or after the selected date |
| **Order date thru** | Date picker | Shows only orders placed on or before the selected date |

### Facility Filter Behaviour (Important)

The Facility filter on this page is **multi-select** — you may choose one or more virtual facilities simultaneously. This is unlike other pages in the application, which only allow a single facility to be selected at a time.

- When **"All"** is selected, the queue displays orders from all virtual facilities known to the system, falling back to the default brokering facilities if no virtual facilities are found.
- When specific virtual facilities are selected, only orders parked in those facilities are shown.
- Clicking **Clear** from the filter panel resets the facility selection back to "All virtual facilities."

---

## Select Mode and Bulk Actions

The Brokering Queue supports **bulk actions** to act on multiple orders at once.

### Entering Select Mode

Click **"Select"** at the top right of the list header to enter Select Mode. The button changes to **"Done"** while in this mode.

In Select Mode:
- A **checkbox** appears on the left side of each order row.
- A **"Select All"** checkbox appears in the list header to select or deselect all currently loaded orders at once.
- A footer toolbar appears at the bottom of the screen displaying the count of selected orders and the available action buttons.

### Exiting Select Mode

Click **"Done"** to exit Select Mode. All selections are cleared automatically.

### Available Bulk Actions

| Action | Description | Confirmation Required |
|---|---|---|
| **Cancel open items** | Cancels all open (unfulfilled) line items for each selected order. This action cannot be undone. | Yes — a confirmation dialog is shown before the action executes. |
| **Edit shipping method** | Changes the shipping method for all selected orders. A modal opens to choose the new carrier and shipment method type. | No |
| **Add task** | Opens a modal to create an order task (e.g. a hold or investigation task) on all selected orders. | No |

After any bulk action completes, a brief notification appears at the top of the screen confirming the result.

---

## Navigating to an Order

In Normal Mode, clicking any order row navigates to the **Order Detail** page.


---

## Relationship to the Order Funnel

The Brokering Queue does not appear as a named counter on the Order Funnel dashboard. However, orders that are in the brokering queue are included in the **Open Orders count** on the funnel. The Brokering Queue page provides the detailed, filterable view of those orders — specifically the subset that is held in virtual (routing) facilities rather than physical stores.

---

