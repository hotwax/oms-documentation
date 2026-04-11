---
title: March 2026 Release Notes
slug: release-notes/2026-03
contentType: release-note
month: 2026-03
metaDescription: This month we focused on providing more visibility into inventory counts and giving you better control over how product information connects to Shopify. These…
tagNames: [Release Note]
key: release-notes:2026-03
---

# March 2026 Release Notes

This month we focused on providing more visibility into inventory counts and giving you better control over how product information connects to Shopify. These updates help you maintain accurate data across your order and inventory management workflows.

## Pre-Order
### Shopify catalog synchronization
The product audit view now shows more accurate listing details from Shopify. The app clearly labels shops that are not linked or are disconnected, and we updated how the system filters Shopify data to make sure promise dates and listing details are consistently present.
*Sources: [preorder#365](https://github.com/hotwax/preorder/pull/365), [preorder#345](https://github.com/hotwax/preorder/pull/345), [preorder#346](https://github.com/hotwax/preorder/pull/346), [preorder#342](https://github.com/hotwax/preorder/pull/342), [preorder#254](https://github.com/hotwax/preorder/pull/254), [preorder#232](https://github.com/hotwax/preorder/pull/232), [preorder#155](https://github.com/hotwax/preorder/pull/155)*

### Order parking management
You can now choose a specific virtual queue for fetching and releasing orders. A new setting allows you to select your preferred parking location, which the system remembers for future use. If you do not set a preference, the system uses the standard pre-order and backorder queues.
*Sources: [preorder#206](https://github.com/hotwax/preorder/pull/206), [preorder#204](https://github.com/hotwax/preorder/pull/204)*

### Product identifier configuration
You have more control over which product identifiers appear in your settings. Users with the right permissions can now modify these identifiers, and the settings page displays clearer descriptions and all available options to help you manage your catalog data.
*Sources: [preorder#366](https://github.com/hotwax/preorder/pull/366), [preorder#344](https://github.com/hotwax/preorder/pull/344), [preorder#354](https://github.com/hotwax/preorder/pull/354), [preorder#351](https://github.com/hotwax/preorder/pull/351), [preorder#364](https://github.com/hotwax/preorder/pull/364)*

## Inventory & Receiving
### Inventory variance logs
When you perform physical counts, any differences between scanned items and expected stock levels are now recorded directly in your local database. This data is combined with inventory adjustments to give you a clear report on variations and help you finish reconciliations faster.
*Sources: [inventory-count#1382](https://github.com/hotwax/inventory-count/pull/1382)*

### Transfer order recordkeeping
We updated the way the system records when transfer orders arrive. Instead of just recording time in milliseconds, the system now logs the specific date and time you receive items, giving you more precise tracking for your inventory records.
*Sources: [receiving#656](https://github.com/hotwax/receiving/pull/656)*

## Application Experience
### Settings screen layout
Dropdown menus in the settings page now adjust their position to stay visible on the screen. This makes it easier to select product identifiers and other options when working on different devices or screen sizes.
*Sources: [transfers#189](https://github.com/hotwax/transfers/pull/189)*

## System & Core Updates
### Application component permissions
You can now control which users see cross-application navigation buttons, such as the link to the launchpad. The system hides these buttons based on the user’s security role or if the app is running in standalone mode to keep the interface clean and relevant.
*Sources: [preorder#356](https://github.com/hotwax/preorder/pull/356)*
