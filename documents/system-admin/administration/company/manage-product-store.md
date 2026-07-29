---
description: Review and update Product Store fields and application settings.
---

# Manage Product Store settings

The Product Store details page is the canonical reference for brand-level settings. It separates direct Product Store fields from application settings used by order, inventory, routing, fulfillment, and customer workflows.

Change only settings included in the implementation plan. A Product Store setting can affect imported orders and active store operations.

## Open Product Store details

1. Open the **Company App**.
2. Go to `Product Store`.
3. Select a Product Store.
4. Review the Product Store name and ID.
5. Click `Edit` in the section that contains the setting.
6. Update the value and save the section.

Click `Resume setup` when the Product Store still has guided setup work.

## Review Product Store fields

The first part of the page contains these groups:

| Group | Examples |
| --- | --- |
| Store identity and defaults | Store name, company, pay-to party, locale, and timezone |
| Order import and checkout | Order prefix, currency, sales channel, comments, and decimal quantity |
| Approval, payment, and accounting | Order approval, capture behavior, gift cards, and store credit |
| Inventory and product behavior | Reservation, inventory checks, search behavior, and product identifier |
| Digital, tax, and returns | Digital items, tax display, return receipt, and unpaid-order cancellation |
| Customer and suggestion behavior | Suggestion lists and digital product upload |
| Order statuses and customer messages | Approved, declined, and canceled statuses and authorization messages |
| Auto order retries | Card retry behavior and retry limits |
| Deprecated storefront fields | Legacy stylesheet and header assets |

Treat `Deprecated storefront fields` as read-only unless a current implementation explicitly depends on them.

## Review application settings

The second part of the page contains settings used by HotWax applications:

| Group | Settings covered |
| --- | --- |
| Order import and approval settings | Billing information, approval without payment check, and payment capture tag |
| Returns and cancellation settings | Return deadline, returns facility, and idle-order rejection |
| Inventory and preorder settings | Physical pre-order inventory, pre-order group, release routing group, and product-type exclusions |
| Brokering and routing settings | Preselected facility tag and order-item pickup, shipping facility, and shipment method |
| Fulfillment operations settings | Fulfillment notifications, scan requirements, partial rejection, and receiving scan |
| Store pickup and BOPIS settings | Partial rejection, package, shipping-order visibility, printing, and tracking |
| Customer self-service settings | Cancellation, delivery address/method changes, pickup changes, and reroute method |
| Shipping and carrier settings | Rate shopping |
| Product identity and scanning settings | Product and barcode identification preferences |
| Rejection and exception settings | Quantity-on-hand effect, cycle count creation, and collateral rejection |

## Change a setting safely

1. Confirm the Product Store at the top of the page.
2. Record the current value.
3. Open the relevant group.
4. Change only the intended field.
5. Save the group.
6. Reopen the group and confirm the saved value.
7. Validate the affected workflow before applying the same change to another Product Store.

Use [Clone Product Store settings](clone-product-store.md) when the same approved configuration must be copied to another Product Store.
