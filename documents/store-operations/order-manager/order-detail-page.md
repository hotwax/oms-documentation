# Order Detail



## Overview

The Order Detail page provides a **complete view of a single sales order** — its status, customer information, shipment groups, holds, fraud risk, and communication history. It is the primary page for investigating the current state of any specific order and taking targeted actions on it.

The page loads order data automatically when it opens. A progress bar appears in the header while the data is loading. If the order cannot be found or fails to load, a descriptive error or empty state is displayed.

---

## Page Header

At the top of the page, the following information is shown:

| Field | Description |
|---|---|
| **Order name** | The order name (e.g. Shopify order name such as `#1023`). Falls back to the internal order ID if no name is present. |
| **Order ID** | The internal HotWax Commerce order identifier, displayed below the order name. |
| **Order status badge** | A colour-coded badge showing the current status of the order (e.g. Approved, Completed, Cancelled). |

A **back button** in the top-left corner returns to the list page from which this order was opened.

---

## Order Header Details

Below the header, the page displays a summary area divided into two parts: a **Timeline** on the left and a set of **detail cards** on the right.

### Timeline

The Timeline shows a chronological record of significant events that have occurred on this order. Each event entry displays:

- An icon representing the type of event
- A label describing what happened (e.g. order status change, facility change)
- A timestamp or relative time label (e.g. "2 hours ago")
- Optional metadata about the event

If no timeline events are recorded yet, placeholder entries for "Order status" and "Order facility change" are shown.

### Detail Cards

Four cards are always shown to the right of the timeline. A fifth card appears conditionally.

#### Customer Card

Displays information about the customer who placed the order:

| Field | Description |
|---|---|
| **Customer name** | Shown as the card title |
| **Email** | The customer's email address. If no email is on record and the customer party ID is known, an **"Add"** button appears to open the Add Contact modal and record an email. |
| **Phone** | The customer's phone number. If no phone is on record, an **"Add"** button appears. |
| **Locale** | The locale string from the order (e.g. `en-US`).
| **Billing address** | The customer's billing address. If not available, an **"Add"** button appears to open the Add Contact modal. |

#### Order Identifications Card

Displays the various identifiers associated with this order:

| Field | Description |
|---|---|
| **Order Number** | The external order number (e.g. from Shopify). Falls back to "Order Number" if not set. |
| **Order ID** | The internal HotWax Commerce order ID |
| **Order Name** | The human-readable name of the order |

#### Source Card

| Field | Description |
|---|---|
| **Brand** | The product store name this order belongs to |
| **Channel** | The sales channel through which the order was placed |

#### Attributes Card

Lists any custom attributes recorded on the order. Each attribute shows its name and value. If no attributes are recorded, a "No order attributes" message is shown.

---

## Tabs

Below the header section, the page is divided into five tabs. Click any tab to switch to that view.

| Tab | What It Shows |
|---|---|
| **Items** | All line items in the order, grouped by product, with quantities, prices, statuses, and individual actions |
| **Shipgroups** | All shipment groups (ship groups) for this order, with per-group fulfillment details, timelines, and actions |
| **Holds** | All active hold tasks on this order (bad address, swap, fraud, and general holds) |
| **Risk** | Fraud risk assessment details from all risk providers |
| **Comms** | Communication events associated with this order |

---

## Items Tab

The Items tab shows all products in the order, grouped by parent product.

### Toolbar

At the top of the item list, a toolbar row provides:

- **Select all** checkbox — selects or deselects all items in the list at once.
- **Add items** button — opens the Add Items to Order modal, allowing additional products to be added to the order. This button is only visible when the order is not in a Cancelled or Completed status.

### Item Groups

Products are listed in collapsible accordion groups. Each group represents a parent product and displays:

- Product image (with image preview on click)
- Primary and secondary product identifiers (as configured in Settings)
- A "Kit" badge if the product is a kit
- Total quantity across all items in the group
- Combined group status
- Total price for the group
- Any price adjustments (e.g. discounts) applied to the group

Expanding a group row reveals the individual **order item** rows within it. Each item row shows:

| Field | Description |
|---|---|
| **Order item sequence ID** | The item's internal sequence number |
| **External ID / Ship group** | The item's external ID or a label showing its ship group sequence number |
| **Quantity** | The number of units |
| **Facility** | The facility assigned to this item. Clicking this label triggers a reject-and-release action for the item (moves it back to the brokering queue). This action is disabled for items in a Cancelled or Completed status. |
| **Attributes** | The count of attributes on this item. Clicking opens the Item Attributes modal. This is disabled if the item has no attributes. |
| **Status** | The item's current fulfillment status, with a colour-coded label |
| **Status detail** | Additional status context (e.g. rejection reason) |
| **Price** | The line total for this item including any adjustments |
| **Cancel button** | A red Cancel button appears for items that are not yet Cancelled or Completed. Clicking cancels that specific item. |

### Payment Summary

Below the item list, two cards are shown:

**Payment card** — lists all payment methods recorded on the order, showing the payment method type, description, status, and amount.

**Totals card** — shows:

| Row | Description |
|---|---|
| Subtotal | Sum of all item prices before adjustments |
| Adjustments | Each order-level adjustment (discounts, shipping charges, promotions, etc.) with its label and amount |
| Grand total | The final order total |
| Payment received | The total amount actually captured from payment methods |

### Footer Actions (Items Tab Only)

When the Items tab is active, a footer toolbar appears at the bottom of the page with order-level action buttons. These buttons are driven by the order's current status — only actions that are valid for the current state are shown.

**Status transition buttons** (on the left side):

| Action | Description |
|---|---|
| **Approve** | Approves the order, moving it into the fulfillment pipeline |
| **Cancel order** | Cancels the entire order. A confirmation dialog is shown before the action is executed. |

**Lifecycle action buttons** (on the right side):

| Action | Description |
|---|---|
| **Cancel items** | Cancels only the selected items in the list |
| **Clone** | Creates a copy of this order |
| **Return** | Opens the return initiation workflow for this order |

Only actions that are valid for the order's current status are rendered. Actions that do not apply are not shown.

---

## Shipgroups Tab

The Shipgroups tab shows each **shipment group** in the order as a separate card. A ship group represents a set of items to be fulfilled together from a single facility.

### Ship Group Card

Each card displays:

- **Ship group ID and facility name** — the identifier and the name of the facility assigned to this group.
- **Item summary** — a brief label describing the items in the group.
- **Status label** — the current fulfillment status of the ship group.
- **Progress bar** — a visual bar showing how far along fulfillment has progressed (changes to green when fully complete).
- **Hold warning banner** — if the ship group has an active hold task, a yellow warning banner appears with a "View details" button.

#### Ship Group Timeline

Each ship group card contains a mini timeline with four milestones:

| Milestone | Description |
|---|---|
| **Brokered** | The date and time this group was assigned to its facility. Shows "Pending" if not yet brokered. |
| **Pick** | The date and time the group appeared on a picklist. Shows "Pending" if not yet picked. |
| **Pack** | The date and time the group was packed. Shows "Pending" if not yet packed. |
| **Ship** | The date and time the group was shipped. Shows "Pending" if not yet shipped. |

#### Optional Ship Group Details (when expanded)

Expanding a ship group card reveals additional configuration:

- **Carrier and Shipping Method** — dropdowns to change the carrier and delivery method for this ship group.
- **Shipping address** — the destination address for this group, with a distance label (in miles) from the nearest warehouse if available. An edit button (three-dot menu) opens the **Edit Shipping Address modal**, which allows the address to be updated (address line 1, address line 2, city, postal code, country, and state/province).

#### Optional Ship Group Options

When a ship group is expanded, additional option chips appear if those details have not yet been set:

| Option | Description |
|---|---|
| **Gift options** | Opens a modal to enter a gift message for this ship group |
| **Shipping dates** | Opens a modal to set a "Ship after" date and a "Ship by" date |
| **Delivery dates** | Opens a modal to set an estimated ship date and estimated delivery date |
| **Instruction** | Opens a modal to enter shipping instructions for this group |

Once any of these details are saved, they are shown as editable items on the card and the corresponding chip disappears.

#### Ship Group Actions

At the bottom of each ship group card, action buttons appear based on the group's current state:

| Action | When It Appears | Description |
|---|---|---|
| **Broker ship group** | When the ship group is in a virtual facility | Manually re-triggers brokering for this group via a selected routing group |
| **Park Items** | When the ship group is in a virtual facility | Moves selected items to a parking facility |
| **Pull back** | When the ship group is at a physical facility | Rejects selected items and returns them to the brokering queue |
| **Release** | When the ship group is in a virtual facility | Releases selected items back into the routing pipeline |
| **Add Task** | Always visible | Opens the Add Order Task modal to create a task for this ship group |
| **Add Items** | When order is not Cancelled or Completed | Opens the Add Items modal to add products to this ship group |

---

## Holds Tab

The Holds tab displays all **active hold tasks** on this order, grouped by type:

| Hold Type | What It Means |
|---|---|
| **Bad Address** | The shipping address failed validation — shown as a Bad Address task card with address correction options |
| **Swap** | A product is unavailable and a substitute has been proposed — shown as a Swap task card |
| **Fraud** | The order is flagged as potentially fraudulent — shown as a Fraud task card with resolve or cancel options |
| **Hold** | A general hold requiring manual resolution — shown as a Hold task card |

Each task card provides the same controls available on its dedicated exception page. If no holds are active, an empty state message is shown: *"No holds on this order."*

---

## Risk Tab

The Risk tab shows the full **fraud risk assessment** for this order.

At the top of the tab, a summary item shows the overall risk recommendation and risk level badge.

Below the summary, a list of individual **risk assessments** is shown — one per risk provider. Each assessment shows:

- The risk provider name
- The risk level for that provider's assessment (e.g. High, Medium, Low)
- A list of risk facts (signals) from that provider, each with a description and sentiment classification

If no risk assessments are recorded, a "No risk assessments for this order" message is shown.

---

## Comms Tab

The Comms tab lists all **communication events** associated with this order. Each row shows:

| Column | Description |
|---|---|
| **ID** | The internal communication event ID |
| **From** | The party ID of the sender |
| **To** | The party ID of the recipient |
| **Content** | The content of the communication |
| **Entry date** | The date the communication was recorded |
