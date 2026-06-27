---
description: >-
  The Fulfillment App Settings page controls the user's OMS context, facility
  context, fulfillment capacity, product display, notifications, documents,
  scanning, and rejection behavior.
---

# Settings page

<div data-full-width="false">

<figure><img src="../.gitbook/assets/fulfillment-application-setting-page.png" alt="Fulfillment App Settings page with OMS and app configuration cards"><figcaption><p>Fulfillment App Settings page</p></figcaption></figure>

</div>

Use the Fulfillment App Settings page to confirm which OMS, product store, and facility you are working in before fulfilling orders. The page also controls user preferences, notification preferences, fulfillment capacity, scan requirements, and rejection behavior.

Settings are grouped by scope:

| Scope | Applies to |
| --- | --- |
| User-specific | Only the current user. |
| Facility-specific | The selected facility. |
| Product store-wide | The selected product store and all users who work in that product store. |

## OMS

### OMS instance

`User-specific`

The OMS instance card shows the OMS environment connected to the app. Use it to confirm that you are working in the right environment before changing settings or fulfilling orders.

### Product store

`User-specific`

A product store represents a company, brand, or catalog. If the OMS is connected to multiple eCommerce stores with different product collections, select the product store you want to work in.

<figure><img src="../.gitbook/assets/product-store-setting.png" alt="Product store selector in the Fulfillment App Settings page" width="375"><figcaption><p>Select product store</p></figcaption></figure>

### Facility

`User-specific`

The facility setting controls the store or warehouse context for the app. Orders, inventory, notification topics, and facility settings depend on the selected facility.

<figure><img src="../.gitbook/assets/facility-selection-modal.png" alt="Facility selection modal with searchable facility list" width="375"><figcaption><p>Select facility</p></figcaption></figure>

### Online order fulfillment

`Facility-specific`

Set the number of orders the selected facility can receive for fulfillment.

* `0` means no new orders are allocated to the facility.
* Empty means the facility has unlimited capacity.
* A custom number limits how many orders can be allocated.

The card also shows how many orders are allocated to the facility today.

<figure><img src="../.gitbook/assets/online-order-fulfillment-setting.png" alt="Online order fulfillment capacity card with allocated order count and capacity setting" width="375"><figcaption><p>Online order fulfillment</p></figcaption></figure>

### Sell inventory online

`Facility-specific`

Use `Sell online` to control whether inventory from the selected facility is available for online sales. If the toggle is off, inventory from that facility is not included for online selling.

## App

### App version

`User-specific`

The app version card shows the installed Fulfillment App version and build information. Use it when checking whether a reported issue is happening on the current app version.

### Product identifier

`User-specific`

Select the primary and secondary product identifiers shown in the app. For example, you can show SKU as the main identifier and product ID as the secondary identifier. The card includes a product preview so you can confirm how items will appear during fulfillment.

<figure><img src="../.gitbook/assets/fulfillment-product-identifier-setting.png" alt="Product identifier settings with primary and secondary identifier selectors and product preview" width="375"><figcaption><p>Choose product identifier</p></figcaption></figure>

### Timezone

`User-specific`

Select the timezone used for app dates and scheduled automation times.

<figure><img src="../.gitbook/assets/fulfillment-timezone-setting.png" alt="Timezone setting showing browser timezone and selected timezone" width="375"><figcaption><p>Select timezone</p></figcaption></figure>

### Language

`User-specific`

Choose the display language for the app.

<figure><img src="../.gitbook/assets/fulfillment-language-setting.png" alt="Language selector in the Fulfillment App Settings page" width="375"><figcaption><p>Select language</p></figcaption></figure>

### Additional documents

`User-specific`

These settings control whether shipping labels and packing slips are printed along with each shipment by default.

#### Generate shipping label

A shipping label is used by the delivery carrier to send the package to the customer's address. This setting controls whether shipping labels should be printed for the selected location.

#### Generate packing slip

A packing slip shows the list of items in an order and helps match delivered products with what was ordered.

<figure><img src="../.gitbook/assets/additional-documents-setting.png" alt="Additional documents settings with shipping label and packing slip toggles" width="375"><figcaption><p>Additional documents</p></figcaption></figure>

### Notification preference

`User-specific`

Select which fulfillment notifications you want to receive for the selected facility.

### Force scan

`Product store-wide`

This card contains two related settings for controlling barcode scanning behavior during order fulfillment:

* **Require scan:** Store associates must scan each product barcode to increase the shipped quantity.
* **Barcode identifier:** Select the product identifier used for barcode scans. If the selected identifier is not found, the scan falls back to the product internal name.

### Allow partial rejections

`Product store-wide`

When [partial rejection is enabled](rejection.md), store associates can reject individual items without rejecting the rest of the order.

### Collateral rejections

`Product store-wide`

[Collateral rejection](rejection.md) automatically rejects the same product from other pending orders at the facility when one order item is rejected.

### Affect QOH on rejection

`Product store-wide`

Use [Affect QOH on rejection](rejection.md) to control whether rejected quantities adjust quantity on hand (QOH) along with available to promise (ATP).
