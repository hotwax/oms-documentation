# Unfillable Orders


## Overview

The Unfillable Orders page displays all orders that **could not be assigned to any fulfillment facility** after the brokering process exhausted all available routing options. These are orders where no store or warehouse was found to have sufficient inventory to fulfill the order, and the system has parked them in the designated unfillable virtual facility (`UNFILLABLE_PARKING`) pending manual intervention.

An order reaches this state when the Order Management System's routing engine has attempted to broker the order but has been unable to identify any viable fulfillment location — typically because the required products are out of stock everywhere, or because no facility meets the routing criteria configured in the active routing group.

 The list loads automatically when the page opens and supports infinite scroll.

---

## Understanding the List

Each row in the Unfillable Orders list represents a single order. The following information is displayed per row:

| Column | Description |
|---|---|
| **Order ID** | The internal HotWax Commerce order identifier, shown in small overline text |
| **Order name / External ID** | The Shopify or external order name, with the current order status shown below |
| **Customer name** | The full name of the customer |
| **Shipping address** | The first line of the customer's shipping address, followed by city, state, postal code, and country on a second line |
| **Queue reason / Rejection reason** | The reason this order is unfillable. Typically reflects the rejection reason from the last facility that attempted and failed to fulfill it. Displays "Reason unavailable" if no reason is recorded. |
| **Rule name / Parking unit count** | The routing rule name associated with this order, or the number of units in a parking facility (e.g. "2 units in parking") |
| **Order date** | The date and time the order was placed, in `MM-DD-YYYY HH:MM AM/PM` format |
| **Relative order date** | A relative label such as "Ordered 5 hours ago" |


## Search and Filtering

A search and filter panel is available at the top of the page. The main search bar accepts a free-text query matched against order name, external ID, customer name, and email.

The following additional filters are available:

| Filter | Options | Behaviour |
|---|---|---|
| **Sales channel** | All sales channels / individual channels | Filters by the channel through which the order was placed |
| **Shipping method** | All methods / individual configured methods | Filters by the delivery method of the order |
| **Order date from** | Date picker | Shows only orders placed on or after the selected date |
| **Order date thru** | Date picker | Shows only orders placed on or before the selected date |

Clicking **Clear** resets all filters and reloads the full list.

---

## Select Mode and Bulk Actions

The Unfillable Orders page supports **bulk actions** to act on multiple orders at once.

### Entering Select Mode

Click **"Select"** at the top right of the list header to enter Select Mode. The button changes to **"Done"** while in this mode.

In Select Mode:
- A **checkbox** appears on the left side of each order row.
- A **"Select All"** checkbox appears in the list header.
- A footer toolbar appears at the bottom with available action buttons.

### Exiting Select Mode

Click **"Done"** to exit Select Mode. All selections are cleared.

### Available Bulk Actions

| Action | Description | Confirmation Required |
|---|---|---|
| **Broker selected** | Manually re-triggers the brokering process for the selected orders. A modal opens to select a routing group. The system identifies which ship groups are in a virtual facility and submits them for re-brokering via that group. Requires a product store to be selected in Settings. | No |
| **Cancel open items** | Cancels all open (unfulfilled) line items for each selected order. This action cannot be undone. | Yes — a confirmation dialog is shown before the action executes. |
| **Edit shipping method** | Changes the shipping carrier and method for all selected orders. A modal opens to choose the new carrier and shipment method type. | No |
| **Add task** | Opens a modal to create a new order task on all selected orders. | No |

After any bulk action, a toast notification confirms the result.

---

## Relationship to the Order Funnel

Unfillable orders appear on the Order Funnel dashboard as the **"Unfillable Today"** stat card, which shows the total count for today along with an hourly sparkline trend. The total shown on the funnel represents all unfillable orders for the current day, while this page shows all orders currently parked in `UNFILLABLE_PARKING` regardless of date.

---

