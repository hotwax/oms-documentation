---
description: Explain how Sangam's storefront calculates and displays an estimated delivery date.
---

# Estimated delivery date

Sangam's storefront calculates an estimated delivery date (EDD) on product pages in its Buy Online Pick Up In Store (BOPIS) script. The calculation is a storefront rule. It does not read an estimated delivery date from the Order Management System (OMS).

## Inputs

The calculation uses:

* The shopper's ZIP code, obtained from the stored home-store coordinates, browser location, or the ZIP code entered in the estimated-delivery-date form
* Nearby retail stores returned for that location
* The selected product SKU and the shipping-inventory response for the nearby stores
* The first nearby facility with available to promise (ATP) greater than zero
* That facility's distance (`dist`)
* The shipping methods configured in `bopisCustomConfig.shippingMethods`
* The browser's current day and local time

If the entered ZIP code cannot be converted to coordinates, no nearby store is found, or no returned facility has ATP greater than zero, the storefront hides the date and shows `No nearby stores available`.

## Facility selection

For a ZIP code, the script fetches nearby retail stores and calls `checkShippingInventory` with the product SKU and those store IDs. It selects the first facility in the returned list whose ATP is greater than zero, then finds the matching store record to calculate the estimate.

The script does not compare all eligible facilities to choose the shortest delivery time. The result follows the order of facilities in the shipping-inventory response.

## Date calculation

The storefront calculates one date for each configured shipping method. It displays the `Standard` estimate by default. If `Standard` is not configured, it displays the first configured method. Selecting the displayed date opens a modal with the estimates for every configured method.

For `Standard` shipping, the script adds delivery days from the selected facility's distance:

| Distance | Days added |
| --- | --- |
| Less than 300 | 2 |
| 300 through less than 600 | 3 |
| Greater than 600 | 5 |

For `2 day` and `Overnight` shipping, the script adds two and one calendar days respectively. It also calculates a countdown for `2 day` when the browser hour is before 12.

The current code does not add a distance-based day increment when the distance is exactly 600 because its comparisons are strictly less than and strictly greater than 600.

Before adding method-specific days, the script applies a day-of-week offset. The offset differs by shipping method, browser hour, facility type, and whether the estimate is calculated for a warehouse. In the product-page flow, the calculator is called with the selected store only, so the Saturday `Standard` offset is 48 hours.

After all offsets are applied, the script moves a Sunday estimate to Monday and a Saturday estimate to Monday. The displayed value uses the browser locale with weekday, month, and day.

## Important implementation limits

* The code comments refer to Pacific Standard Time (PST), but the calculation uses the browser's default locale and does not set a time zone.
* The current day is captured when the script loads. Keeping a product page open across midnight can therefore retain the earlier day-of-week value until the script reloads.
* The calculation does not use OMS purchase-order dates, promised dates, carrier transit commitments, cutoffs, holiday calendars, or a configured customer ZIP-to-carrier service.

## Evidence

| Claim | Source | Proof type |
| --- | --- | --- |
| Product-page EDD is calculated by storefront JavaScript | `sangam/assets/bopis.js`: `initialiseEDD`, `searchStoresOnPDP`, `renderEDD`, and `getShippingEstimate` | configured |
| A facility must have ATP greater than zero before its date is displayed | `sangam/assets/bopis.js`: `checkShippingInventory` response handling | configured |
| Distance, shipping methods, weekday, and browser time affect the result | `sangam/assets/bopis.js`: `getShippingEstimate` | configured |
| This page is required to document the storefront EDD calculation | OMS documentation issue #1541 | decision |

## Excluded behavior

This page deliberately excludes generic OMS estimated-delivery, purchase-order, routing, carrier, and calendar behavior because the Sangam storefront code does not use those inputs for this displayed date.
