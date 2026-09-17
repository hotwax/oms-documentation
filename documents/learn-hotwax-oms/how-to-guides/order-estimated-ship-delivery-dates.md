---
description: >-
  HotWax Commerce populates an estimated ship date and estimated delivery date
  on every order ship group that requires fulfillment, using the promise dates
  Shopify provides or computing them from configurable service-level agreements (SLAs).
---

# Order estimated ship and delivery dates

Every sales order ship group that requires fulfillment carries two estimated dates from the moment the order is created:

* `Estimated Ship Date`: When the ship group is expected to leave a fulfillment location.
* `Estimated Delivery Date`: When it is expected to arrive at the customer.

Ship groups that do not require fulfillment, such as POS cash sales and order items that arrive already fulfilled, are skipped. Both dates apply to orders imported in real time and to historical orders brought in through bulk sync, so reporting stays consistent across the full order history.

{% hint style="info" %}
These dates are recorded on the order **after** it is placed. For the pre-purchase estimate a shopper sees on the storefront before ordering, see [Configure estimated delivery dates](configure-estimated-delivery-dates.md). That experience is calculated live by the storefront and follows its own rules.
{% endhint %}

## Where the dates come from

HotWax Commerce fills each date from the most authoritative source available. A value provided by an external system always wins over a value computed internally.

1. **Dates supplied by the channel.** When Shopify provides delivery promise data on an order's fulfillment orders, such as through Shop Promise or checkout delivery options, HotWax Commerce records the promised fulfillment window on the ship group:
   * `fulfillBy`, the deadline by which Shopify expects the items to be fulfilled, becomes the ship group's `Ship By` date (the ceiling of the fulfillment window). When it is present, it is also used directly as the `Estimated Ship Date`.
   * `fulfillAt`, the moment the items become fulfillable, such as a scheduled fulfillment, becomes the `Ship After` date (the floor of the window).
   * The latest promised arrival time from Shopify's delivery method becomes the `Estimated Delivery Date`.
2. **Computed defaults.** When the channel does not provide a promise, HotWax Commerce computes the dates:
   * `Estimated Ship Date` = the ship SLA (in days) added to the moment the ship group becomes actionable (the order date, or the `Ship After` date when that is later). A ship group that only becomes fulfillable next week still gets its full SLA after that point.
   * `Estimated Delivery Date` = `Estimated Ship Date` plus the transit days configured on the carrier shipment method. If no transit days are configured, the delivery date is left empty rather than guessed.

{% hint style="info" %}
When one ship group contains items from multiple Shopify fulfillment orders, HotWax Commerce keeps the narrowest window that satisfies all of them: the earliest `fulfillBy` and the latest `fulfillAt`. Canceled fulfillment orders are ignored; closed ones are still read on historical orders so past promise data is preserved.
{% endhint %}

## Configure the ship SLA

The ship SLA is read from the `Default Days To Ship` field on the facility that holds the ship group:

* **Brokering queue**: Unbrokered ship groups sit in the brokering queue, which is itself a facility. HotWax Commerce seeds its `Default Days To Ship` to 1, meaning any order waiting for brokering is expected to ship within a day of becoming actionable. Change this value to change the default promise for all incoming orders.
* **Fulfillment locations**: A ship group already assigned to a store or warehouse uses that facility's own `Default Days To Ship`, so locations with different processing speeds can carry different SLAs.
* When the facility has no value, HotWax Commerce falls back to 1 day. A value of 0 is valid and means same-day shipping.

## Configure carrier transit days

Transit time comes from the `Delivery Days` field on the carrier shipment method (the combination of carrier and shipment method on the order). This is the same field the order routing engine uses for its `Shipping method` sort, so populating it improves both delivery estimates and brokering behavior.

{% hint style="warning" %}
Estimated dates are only defaulted when they are empty. Integrations that supply their own estimated ship or delivery dates on the order payload keep their values. HotWax Commerce never overwrites a date provided by an external system.
{% endhint %}
