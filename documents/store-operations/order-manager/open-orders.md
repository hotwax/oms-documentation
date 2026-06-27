# Open Orders



### Overview

The Open Orders page displays all sales orders that have been **approved** and are currently awaiting assignment to a fulfillment facility. These are orders that have passed payment verification and are ready to be fulfilled, but have not yet been routed to a specific store or warehouse through the brokering process.

This page serves as the primary operational view for teams who need to monitor the volume and age of unrouted orders, investigate specific orders, or take bulk action on a set of orders.

The list loads automatically when the page is opened and supports infinite scroll — additional results load as the user scrolls to the bottom of the list.

---

## Understanding the List

Each row in the Open Orders list represents a single sales order. The following information is displayed for each order:

| Field | Description |
|---|---|
| **Order ID** | The internal HotWax Commerce order identifier, shown in small text above the order name |
| **Order name / External ID** | The order name as it appears externally (typically the Shopify order name, e.g. `#1001`), along with the current order status |
| **Customer name** | The full name of the customer who placed the order |
| **Product store** | The product store (brand or channel) this order belongs to |
| **External ID** | The Shopify or external platform order identifier |
| **Facility** | The facility to which this order is currently assigned (if any) |
| **Shipment method** | The delivery method selected for this order (e.g. Standard, Express) |
| **Sales channel** | The channel through which this order was placed (e.g. Web, POS) |
| **Order date** | The exact date and time the order was placed, displayed in `MM-DD-YYYY HH:MM AM/PM` format |
| **Relative order date** | A relative representation of the order date (e.g. "3 days ago"), displayed below the exact date |
| **Order total** | The grand total of the order in its original currency |
| **Item count** | The number of line items in the order |

The results summary at the top of the list (e.g. "12 of 340 orders") shows how many orders are currently loaded out of the total matching result set.

---

## Search and Filtering

A collapsible **search and filter panel** is available at the top of the page. The main search bar accepts a free-text query that is matched against:
- Order name
- Order ID
- External ID (Shopify order name)

The following additional filters are available:

| Filter | Options | Behavior |
|---|---|---|
| **Customer name** | Free-text input | Filters orders whose customer name contains the entered text |
| **Priority** | All / High priority / Normal / no priority | Filters by order priority flag |
| **Channel** | All channels / individual channels | Filters by sales channel |
| **Facility** | All facilities / specific physical facilities | Filters by the facility currently assigned to the order. Only physical (non-virtual) facilities appear in this list. |
| **Shipment method** | All methods / individual shipment methods | Filters by the configured delivery method |
| **Order date from** | Date picker (calendar popover) | Shows only orders placed on or after the selected date |
| **Order date thru** | Date picker (calendar popover) | Shows only orders placed on or before the selected date |

Filters that update the list immediately upon change include: Priority, Channel, Facility, Shipment Method, Order Date From, and Order Date Thru.

Search by order name or customer name applies after a brief delay (300 ms) to avoid excessive API calls while the user is still typing.

Clicking **Clear** at the top of the filter panel resets all filters to their default values.


## Select Mode and Bulk Actions

The Open Orders page supports **bulk actions** that allow users to apply an operation to multiple orders simultaneously.

### Entering Select Mode

Click **"Select"** at the top right of the order list header to enter Select Mode. The button label changes to **"Done"** while Select Mode is active.

In Select Mode:
- Each order row displays a **checkbox** on its left side.
- A **"Select All"** checkbox appears in the list header to select or deselect all currently loaded orders at once.
- A footer toolbar becomes visible at the bottom of the page, showing the count of currently selected orders and the available bulk action buttons.

### Exiting Select Mode

Click **"Done"** to exit Select Mode. All selections are cleared automatically.

### Available Bulk Action

When one or more orders are selected, the following bulk action is available in the footer:

| Action | Description | Confirmation Required |
|---|---|---|
| **Cancel** | Cancels all open (unfulfilled) items for each selected order. This action cannot be undone. | Yes — a confirmation dialog is shown before the action is executed. |

After the action completes, a brief notification appears at the top of the screen confirming the number of orders affected.

---

## When Does an Order Leave This List?

An order is removed from the Open Orders list when it has been **brokered** — that is, assigned to a physical fulfillment facility. Once brokered, the order will transition to either the Inflight Orders queue (if the facility has begun processing it) or the Brokering Queue (if the assignment is still in progress).

Orders may also be removed from this list if they are cancelled via the bulk cancel action or if their status changes.

---


