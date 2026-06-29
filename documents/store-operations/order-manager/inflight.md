# Inflight Orders
---

## Overview

The Inflight Orders page displays all sales orders that have been **assigned to a fulfillment facility and have arrived at that facility for processing**. These are orders that the facility has accepted and are currently in the active fulfillment workflow — being picked, staged, or prepared for packing — but have not yet been fully packed.

In the HotWax Commerce fulfillment model, an order is considered "inflight" from the moment a facility receives it in their queue until the point where it is confirmed as packed. This page is the primary monitoring tool for understanding the in-progress workload across all fulfillment facilities.

The page loads automatically upon navigation and supports infinite scroll, loading up to 50 additional results each time the user reaches the bottom of the list.

> **Note:** The empty state message for this page reads: *"Orders that have arrived at a warehouse but aren't on a picklist yet will appear here."* This reflects the specific definition used by the system: inflight orders are those brokered to a facility but not yet on a picklist.

---

## Understanding the List

Each row in the Inflight Orders list represents a single order (identified by a unique combination of order ID and ship group sequence ID). The following information is displayed per row:

| Column | Description |
|---|---|
| **Order ID** | The internal HotWax Commerce order identifier, shown in small overline text |
| **Order name** | The human-readable order name or external ID (e.g. Shopify order name), with the current order status displayed below |
| **Customer name** | The full name of the customer |
| **Shipping address** | The customer's shipping address (line 1 on the first line; city, state, postal code, and country on the second) |
| **Facility name** | The name of the fulfillment facility currently processing this order, shown as an overline label |
| **Shipment method** | The delivery method for this order (e.g. Standard, Express, Overnight) |
| **Carrier** | The carrier party ID for this order (e.g. UPS, FedEx). If no carrier is available, the sales channel is shown instead |
| **Order date** | The exact date and time the order was placed, in `MM-DD-YYYY HH:MM AM/PM` format |
| **Relative order date** | A relative label such as "Ordered 2 days ago," displayed below the exact order date |
| **Estimated delivery date** | The projected delivery date in `MM-DD-YYYY` format, derived from the order's estimated delivery date or ship-before date |
| **Relative delivery** | A relative label such as "in 3 days" showing how far away the estimated delivery date is |

The results summary in the list header (e.g. "24 of 560 orders") shows how many records are currently loaded out of the total result set.

---

## Search and Filtering

A collapsible **search and filter panel** appears at the top of the page. The main search field accepts free-text queries matched against:
- Order name
- Order ID
- External ID

The following filters are available:

| Filter | Options | Behavior |
|---|---|---|
| **Customer name** | Free-text input | Filters orders whose customer name contains the entered text |
| **Priority** | All / High priority / Normal or no priority | Filters by the priority flag assigned to the order |
| **Channel** | All channels / individual channels | Filters by the sales channel through which the order was placed |
| **Facility** | All facilities / specific physical facilities | Filters by the facility currently assigned to the order. Only physical (non-virtual) facilities are shown in this list. |
| **Shipment method** | All methods / individual configured methods | Filters by the delivery method associated with the order |
| **Order date from** | Date picker (calendar popover) | Shows only orders placed on or after the selected date |
| **Order date thru** | Date picker (calendar popover) | Shows only orders placed on or before the selected date |

Filters for Priority, Channel, Facility, Shipment Method, Order Date From, and Order Date Thru trigger an immediate reload of the list when changed.

Clicking **Clear** resets all filters to their default values and reloads the full list.

> **Important:** When navigating to this page directly from the Order Funnel by clicking a facility's in-progress count, the Facility filter is automatically pre-set to that facility's ID.

---

## Select Mode and Bulk Actions

The Inflight Orders page supports **bulk actions** that allow a single operation to be applied to multiple orders at once.

### Entering Select Mode

Click **"Select"** at the top right of the list header to enter Select Mode. The button label changes to **"Done"** while in this mode.

In Select Mode:
- A **checkbox** appears on the left side of each order row.
- A **"Select All"** checkbox is shown in the list header to select or deselect all currently loaded orders simultaneously.
- A footer toolbar appears at the bottom of the screen, showing the count of currently selected orders and available bulk action buttons.

### Exiting Select Mode

Click **"Done"** to exit Select Mode. All selections are cleared automatically.

### Available Bulk Action

| Action | Description | Confirmation Required |
|---|---|---|
| **Add to picklist** | Moves selected inflight orders to a picklist, advancing them in the fulfillment workflow | No |

After the action runs, a brief notification appears at the top of the screen confirming the count of orders affected.

---

## When Does an Order Leave This List?

An order leaves the Inflight Orders list when it has been **packed**. At that point, it transitions to the Packed Orders queue, where it awaits carrier pickup.

