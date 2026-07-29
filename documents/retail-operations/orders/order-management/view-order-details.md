---
description: Review an order's timeline, customer context, items, ship groups, holds, and communications.
---

# Order details

Open an order from `Find order` or any Order Manager queue. The page shows the order name, HotWax order ID, current status, and timeline.

## Review order context

The header contains these cards:

| Card | What it shows |
| --- | --- |
| Customer | Name, email, phone, locale, billing address, and a link to customer details when available. |
| Source | Brand, sales channel, point-of-sale facility when applicable, and related exchange or return records. |
| Order identifications | External order number, HotWax order ID, order name, additional identifiers, and a Shopify link when available. |
| Attributes | Order attributes and their values. |
| Fraud risk | Recommendation, risk level, and risk-fact counts when the order has a risk signal. |

Select the risk facts to open the detailed risk assessment. Risk is part of the header and is not a separate page segment.

## Use the page segments

The page has four segments:

* `Items`
* `Shipgroups`
* `Holds`
* `Comms`

### Items

`Items` groups order items into expandable product rows. The group row shows product identifiers, quantity, fulfillment location, status, amount, and adjustments when available. Expand it to review individual order-item and ship-group context.

Use the item toolbar to:

* select all items or individual rows
* add items when the order status permits it
* change the facility for an eligible item
* review item attributes
* cancel eligible items

Changing an item's facility rejects its current allocation and releases it to the destination you select. The action appears only when the item is eligible.

The payment and totals cards show payment methods, payment statuses, subtotal, adjustments, grand total, and the amount received or authorized.

### Shipgroups

`Shipgroups` shows each fulfillment group and its:

* facility and fulfillment status
* item summary
* shipping method and destination
* shipment and tracking information, when available
* timeline and hold context
* actions that are valid for the current ship-group state

The page displays `No ship groups` when the order has none.

### Holds

`Holds` displays bad-address, substitute, fraud, and general hold-task cards associated with the order.

When no hold exists, the page displays `No holds`. If you have permission, use `Create hold task` to choose ship groups, enter a task name and description, and select an allowed purpose.

### Comms

`Comms` lists communication events with their identifier, sender, recipient, content, and entry date. The page displays `No communication events` when none exist.

## Use order actions

Actions shown under `Items` depend on the order status and selected items. The page displays only actions that are valid for the current order.

Common actions include:

* approve or cancel the order when the current status allows it
* cancel selected items
* clone the order

Confirm destructive actions before continuing.

{% hint style="warning" %}
The `Return` action is not available from Order Manager yet. If it appears for a returnable order, the page reports that returns are unavailable here.
{% endhint %}

## Page states

* `Loading order...` means the order is still loading.
* `Order failed to load` means the request failed.
* `Order not found` means the requested order is unavailable or a stale search result points to a record that no longer exists.

Return to `Find order` and refresh the search if an order cannot be opened.
