---
description: Search orders, review fulfillment context, and perform permitted bulk actions.
---

# Find orders

Use `Find order` to search across orders and open the record you need. Search begins automatically after you enter text or change a filter.

## Search and filter orders

The search box accepts order, external ID, customer, and email values. Search can also match other indexed order information, such as customer contact details, product identifiers, notes, sales channel, store, and shipment ID.

Use these filters to narrow the list:

| Filter | Options |
| --- | --- |
| `Status` | Select one or more order statuses, or use `All statuses`. |
| `Allocation state` | `All locations`, `Allocated`, `Awaiting brokering`, `Unfillable`, or `Archived`. |
| `Sales channel` | All channels or one configured channel. |
| `Shipping method` | All methods or one configured shipping method. |
| `Order date from` | Include orders on or after the selected date. |
| `Order date through` | Include orders on or before the selected date. |
| Sort | Show newest or oldest orders first. |

Use `Clear` to reset the search, filters, and sort order.

## Read the result rows

Each result shows:

* Customer name
* Order name, order ID, and status
* Allocation summary
* Carrier or shipping method and sales channel
* Order date and relative age
* Estimated-delivery date and relative deadline

If no delivery estimate is available, the row displays `No estimated delivery date`.

Select a row to open [Order details](view-order-details.md).

## Select orders

`Select` appears when your account has access to at least one bulk action. In select mode:

1. Select individual rows or use the header checkbox to select all currently loaded results.
2. Choose an available action from the footer.
3. Select `Done` to leave select mode and clear the selection.

Available actions depend on your permissions:

* `Cancel open items` asks for confirmation before canceling eligible items.
* `Edit shipping method` applies a selected method to eligible ship groups.
* `Add task` creates one task for each fulfillment group in the selected orders.

Cancel and shipping-method actions refresh the results after the app processes the request. Verify the refreshed rows before assuming every selected order changed.

## Result states

The list header shows the loaded count and total matching orders. More results load as you scroll.

* `Order search failed` means the search request failed.
* `No matching orders` means the search completed but no records matched.

Adjust the search or clear filters when a successful search returns no results.
