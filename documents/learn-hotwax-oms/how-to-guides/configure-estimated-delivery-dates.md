---
description: Learn how storefront estimated delivery dates are calculated and configured with HotWax Commerce.
---

# Configure estimated delivery dates

An estimated delivery date tells a shopper when an item can arrive before they place an order. The date is calculated on the storefront from current fulfillment information and the retailer's delivery rules. It is not a fixed date stored on the product.

The exact rules vary by retailer. For example, one retailer may promise standard delivery by adding transit days based on the distance from the fulfillment location, while another may use a carrier service level. Define these rules with the team responsible for the storefront before enabling the experience.

## How the date is calculated

The storefront follows this sequence when a shopper checks an estimated delivery date:

1. Identify the destination from the shopper's postal code, saved location, or browser location.
2. Find stores and warehouses that can serve that destination.
3. Check the selected product's available to promise (ATP) inventory at those facilities.
4. Select an eligible fulfillment location according to the retailer's priority rules.
5. Calculate a date for each customer-facing shipping method.
6. Move dates that fall on configured non-delivery days to the next delivery day.
7. Display the default shipping method's date and let the shopper view other available methods.

A common calculation is:

`Estimated delivery date = request date and time + processing delay + transit days`

The processing delay can account for order cut-off times, weekends, and the type of fulfillment location. Transit days can depend on the shipping method, the distance between the fulfillment location and destination, or a carrier service level.

The calculation must define what happens at every boundary. For example, distance ranges must not leave a gap, and orders placed exactly at the cut-off time must follow a defined rule.

## Data used by the calculation

| Input | How it affects the estimate |
| --- | --- |
| Destination | Determines which fulfillment locations are close enough or otherwise eligible. |
| Product identifier | Connects the selected storefront variant to inventory in HotWax Commerce. |
| Facility address and coordinates | Allow the integration to find facilities and calculate their distance from the destination. |
| ATP inventory | Prevents the storefront from promising a date from a location that cannot fulfill the item. |
| Fulfillment priority | Determines which eligible facility supplies the estimate when more than one location has inventory. |
| Shipping method | Supplies the processing and transit rule for standard, expedited, overnight, or other services. |
| Cut-off time and time zone | Determine whether processing starts on the request day or the next processing day. |
| Non-delivery days | Move an estimate past weekends, holidays, or other days when delivery is unavailable. |

## Set up the experience

### 1. Prepare fulfillment locations

[Create each facility](../../system-admin/administration/facilities/add-new-facilities.md) that can fulfill online orders. Add a complete address and accurate latitude and longitude coordinates. Associate each facility with the correct product store and include only participating locations in the relevant facility or inventory group.

The [Store Lookup API](../../integrate-with-hotwax/api/facility/store-lookup.md) uses the destination and facility coordinates to return nearby locations. Missing or incorrect coordinates can produce the wrong facility order or no eligible location.

### 2. Prepare inventory

Make sure product identifiers used by the storefront match the identifiers available in HotWax Commerce. Configure [ATP rules](../../retail-operations/inventory/available-to-promise/README.md) so the inventory response reflects safety stock, thresholds, reservations, and other availability policies.

The storefront integration uses the [Shipping Check Inventory API](../../integrate-with-hotwax/api/inventory/shipping-check-inventory.md) to check ATP for the selected product and candidate facilities. Decide whether zero-ATP locations should be removed from the estimate or handled with a separate unavailable message.

### 3. Define delivery rules

Document the following rules for every shipping method shown to shoppers:

* Customer-facing name and default method
* Eligible facility types and fulfillment priority
* Processing time and daily cut-off
* Time zone used for the cut-off
* Transit days or distance ranges
* Weekend, holiday, and other non-delivery days
* Fallback message when the destination, facility, inventory, or date cannot be determined

If shipping methods are also configured in HotWax Commerce, keep their names and delivery commitments aligned with the storefront rules. The **Delivery Days** value in a HotWax Commerce shipping method does not change the storefront estimate unless the storefront integration is built to read it.

### 4. Add the storefront integration

The storefront implementation must:

* Pass the selected variant's product identifier and the shopper's destination.
* Request eligible facilities and current ATP from HotWax Commerce.
* Apply the approved fulfillment priority and delivery rules.
* Recalculate when the shopper changes the destination or product variant.
* Display a clear unavailable state instead of a stale or partial estimate.

Place the estimated delivery date near the product's purchase action so shoppers see it before adding the item to the cart. If multiple shipping methods are available, show the default estimate first and provide a way to compare the other methods.

## Jobs and services

The estimated delivery date is calculated when the shopper requests it. A scheduled Job Manager job does not generate or store the displayed date in this pattern.

Background integrations still affect the result because they keep the source data current:

* Facility synchronization keeps addresses, coordinates, facility types, and group membership current.
* Inventory imports and adjustments keep facility-level ATP current.
* Product synchronization keeps storefront and HotWax Commerce product identifiers aligned.

Monitor those integrations according to the retailer's system-of-record design. A successful date calculation with stale facility or inventory data can still produce an incorrect promise.

## Validate the setup

Test the experience with products and postal codes that cover:

* Inventory at one eligible location and at multiple eligible locations
* No ATP at any eligible location
* A destination outside the supported area
* Each shipping method and distance range
* Times immediately before, at, and after the cut-off
* Friday, Saturday, Sunday, and a configured holiday
* A product variant change after the page loads
* An invalid postal code or unavailable location permission

For every test, confirm the selected fulfillment location, processing delay, transit rule, final displayed date, and unavailable message. Repeat the test in the configured time zone rather than relying on the shopper's browser time zone.
