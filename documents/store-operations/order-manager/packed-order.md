# Packed Orders


## Overview

The Packed Orders page displays all sales orders that have been **fully packed at a fulfillment facility and are awaiting pickup by a carrier**. An order reaches this stage after all its items have been physically picked, packed into a shipment container, and marked as ready. The next step for these orders is carrier collection and shipment.

This page serves as the final fulfillment checkpoint before an order leaves the facility. Operations teams use it to track how many packed orders are staged and waiting for pickup, to identify and act on any that may need intervention, and to ship orders in bulk when ready.

The list loads automatically when the page opens and supports infinite scroll to load additional results as you scroll.



## Understanding the List

Each row in the Packed Orders list represents a single order. The following information is displayed per row:

| Column | Description |
|---|---|
| **Order ID** | The internal HotWax Commerce order identifier, shown in small overline text |
| **Order name / External ID** | The Shopify or external order name, along with the order's current status description |
| **Customer name** | The full name of the customer || **Rule name / Parking unit count** | The name of the routing rule that placed this order here, or, if the order has units in a parking facility, a label such as "3 units in parking" |
| **Order date** | The exact date and time the order was placed, in `MM-DD-YYYY HH:MM AM/PM` format |

---

## Search and Filtering

A collapsible **search and filter panel** is available at the top of the page. The main search field accepts free-text queries matched against order name, order ID, and external ID.

The following additional filters are available:

| Filter | Options | Behavior |
|---|---|---|
| **Sales channel** | All sales channels / individual channels | Filters by the channel through which the order was placed |
| **Shipping method** | All methods / individual configured methods | Filters by the delivery method associated with the order |
| **Order date from** | Date picker | Shows only orders placed on or after the selected date |
| **Order date thru** | Date picker | Shows only orders placed on or before the selected date |

Clicking **Clear** resets all filters and reloads the full list.

---

## Select Mode and Bulk Actions

The Packed Orders page supports **bulk actions** to act on multiple orders simultaneously.

### Entering Select Mode

Click **"Select"** at the top right of the list header to enter Select Mode. The button label changes to **"Done"** while in this mode.

In Select Mode:
- A **checkbox** appears on the left side of each order row.
- A **"Select All"** checkbox appears in the list header to select or deselect all currently loaded orders at once.
- A footer toolbar appears at the bottom of the screen displaying the number of selected orders and available action buttons.

### Exiting Select Mode

Click **"Done"** to exit Select Mode. All selections are cleared automatically.

### Available Bulk Action

| Action | Description | Confirmation Required |
|---|---|---|
| **Ship orders** | Marks all selected packed orders as shipped, advancing them out of the packed stage. | No |

After the action completes, a brief notification (toast) appears at the top of the screen confirming the number of orders that were shipped.

---

## When Does an Order Leave This List?

An order is removed from the Packed Orders list when it has been **shipped** — either through the bulk "Ship orders" action in this page, or when the carrier scans and confirms the shipment in the OMS. Once shipped, the order proceeds to a completed state.

---
