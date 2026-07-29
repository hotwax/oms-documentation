---
description: Complete guided setup for a new or existing Product Store.
---

# Complete Product Store guided setup

The guided setup organizes Product Store configuration into setup, workflow, and review stages. It shows completed steps and identifies setup gaps before the store begins operating.

## Open guided setup

Use either path:

* Create a Product Store and click `Manage configurations`.
* Open an existing Product Store and click `Resume setup`.

The current step and draft values remain available when you reload the app during the same signed-in session. Review saved values before continuing from another browser or after signing out.

## Complete the setup stages

### Name

Create or review the Product Store identity:

1. Enter the brand or storefront name.
2. Review the Product Store ID.
3. Select the currency, locale, and timezone.
4. Save the step.

### General

Set the operating defaults:

1. Choose whether imported orders are approved automatically.
2. Enter the sales order number prefix.
3. Choose whether imported orders retain billing information.
4. Save the step.

### Shopify

Connect the Product Store to Shopify:

1. Choose `Use existing Shopify shop` or `Prepare Shopify connection`.
2. When using an existing connection, select the available Shopify shop.
3. When preparing a connection, enter the Shopify domain and generate the temporary connection values.
4. Review `Shopify setup status`.
5. Review each Shopify mapping readiness check.
6. If mappings are missing, click `Create starter Shopify mappings`, then open each mapping page to confirm the results.

A Shopify shop can be linked to only one Product Store.

### Products

Prepare product import:

1. Choose the identifier used to match Shopify variants with HotWax products.
2. Save the product identity preference.
3. Open Product Sync to review the Shopify catalog counts and setup status.
4. Queue the first Shopify product import only after the shop and identifier are ready.

Complete product import before loading Shopify inventory.

### Facilities

Create the physical locations used for inventory and fulfillment:

1. Choose the facility setup mode.
2. Create facilities manually or import Shopify locations.
3. Associate the facilities with the Product Store.
4. Review the facility count before continuing.

See [Add new facilities](../facilities/add-new-facilities.md) for manual setup.

### Location mapping

Map each active Shopify inventory location to the matching HotWax facility:

1. Open `Shopify location mapping`.
2. Review the number of mapped locations.
3. Map every location that participates in inventory or fulfillment.
4. Resolve unmapped or incorrect locations before inventory sync begins.

### Inventory

Configure the inventory policy:

1. Select the inventory source.
2. Choose whether HotWax reserves inventory for online orders.
3. Choose whether store teams can view systemic inventory.
4. Configure the pre-order inventory policy when pre-orders are in scope.
5. Queue the initial Shopify inventory import only after products and locations are ready.

### Orders

Prepare Shopify order import:

1. Select the order import mode.
2. Choose the date from which Shopify order history should load.
3. Set the order launch date. Older orders remain historical and bypass live fulfillment inventory.
4. Queue Shopify order history when the connection and dates are ready.
5. Review the Shopify setup status before continuing.

### Order routing and fulfillment

Configure the main order workflow:

1. Choose whether HotWax brokers orders.
2. Choose whether an order can split across facilities.
3. Configure fulfillment notifications.
4. Configure automatic cancellation and its threshold when required.

### In-store pickup

Configure pickup behavior:

1. Choose the partial-rejection policy for pickup orders.
2. Choose which customer changes are allowed before fulfillment.
3. Select the reroute shipment method when the implementation uses rerouting.

### Store inventory management and pre-orders

These stages record planned workflow tasks. Confirm the required applications, roles, scanning rules, inventory pools, and release process with the implementation team before treating either stage as ready.

## Review readiness

Open `Readiness review` after completing the applicable stages.

1. Review the `Ready`, `Gap`, and skipped indicators.
2. Open each blocked stage and complete its next action.
3. Confirm that Shopify products, locations, inventory, and orders were prepared in that order.
4. Keep implementation-specific or preview workflow tasks open until their dependent setup is complete.

The readiness review summarizes configuration. Validate the first import and first live order separately.
