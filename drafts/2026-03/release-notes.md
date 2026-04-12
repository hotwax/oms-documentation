---
title: March 2026 Release Notes
slug: release-notes/2026-03
contentType: release-note
month: 2026-03
metaDescription: In March 2026, we introduced a central dashboard to monitor the health of your Shopify integration and added new tools for managing brands directly in the prod…
tagNames: [Release Note]
key: release-notes:2026-03
---

# March 2026 Release Notes

In March 2026, we introduced a central dashboard to monitor the health of your Shopify integration and added new tools for managing brands directly in the product catalog. These updates focus on providing better visibility into your data and making daily inventory tasks more straightforward.

## Shopify Integration

### Historical order migration
HotWax Commerce updating handling for historical Shopify orders and transactions linked to new returns. Historical transaction sync allows you to import past customer activity without impacting your current physical inventory levels. The system flags any unsuccessful historical transactions as warnings so that your current order processing continues without interruption.
*Sources: [hotwax-shopify-oms-bridge#109](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/109), [hotwax-shopify-oms-bridge#72](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/72)*

## Merchandising & Inventory

### Product catalog management
You can now add and edit brand names directly on the `Product View` page. We also automated how the system handles clearance categories based on price and improved support for multi-store product configurations. These updates make it easier to manage product visibility and availability across all your storefronts.
*Sources: [hotwax-oms#343](https://github.com/hotwax/hotwax-oms/pull/343), [oms#398](https://github.com/hotwax/oms/pull/398), [oms#433](https://github.com/hotwax/oms/pull/433), [oms#441](https://github.com/hotwax/oms/pull/441), [oms#435](https://github.com/hotwax/oms/pull/435), [hotwax-oms#457](https://github.com/hotwax/hotwax-oms/pull/457), [hotwax-oms#438](https://github.com/hotwax/hotwax-oms/pull/438), [hotwax-oms#447](https://github.com/hotwax/hotwax-oms/pull/447)*

### Inventory adjustments and variances
Retailers can now log inventory discrepancies across both mobile and backend systems. New tools record product variances through product lookup or bulk scanning data to help stores log adjustments.
*Sources: [inventory-count#1382](https://github.com/hotwax/inventory-count/pull/1382), [hotwax-poorti#228](https://github.com/hotwax/hotwax-poorti/pull/228), [hotwax-poorti#225](https://github.com/hotwax/hotwax-poorti/pull/225), [oms#409](https://github.com/hotwax/oms/pull/409)*

### Facility and store configuration
We updated how facility groups and product store associations are managed, allowing you to use the API to update facility groups and associate them with product stores. We also fixed a bug that prevented the storefront from updating in real time when facilities were added to or removed from the BOPIS facility group. A fix for facility contact mechanisms also ensures that address and contact data can be removed when necessary.
*Sources: [oms#425](https://github.com/hotwax/oms/pull/425), [hotwax-oms#356](https://github.com/hotwax/hotwax-oms/pull/356), [hotwax-oms#431](https://github.com/hotwax/hotwax-oms/pull/431), [hotwax-oms#440](https://github.com/hotwax/hotwax-oms/pull/440), [hotwax-oms#465](https://github.com/hotwax/hotwax-oms/pull/465)*

## Returns & Refunds

### Refund and return processing
This release improves how Shopify returns are handled. The system now falls back to a designated restocking facility when a refund originates from the unified inventory location on Shopify and stores tax rates exactly as they are received. Customer notes from Shopify are now included on return line items, and exchange orders are natively linked to their original returns.
*Sources: [hotwax-shopify-oms-bridge#124](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/124), [hotwax-shopify-oms-bridge#86](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/86), [hotwax-shopify-oms-bridge#79](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/79), [mantle-shopify-connector#276](https://github.com/hotwax/mantle-shopify-connector/pull/276), [hotwax-shopify-oms-bridge#75](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/75), [hotwax-shopify-oms-bridge#70](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/70), [hotwax-ofbiz-oms-usl#16](https://github.com/hotwax/hotwax-ofbiz-oms-usl/pull/16), [hotwax-oms#436](https://github.com/hotwax/hotwax-oms/pull/436)*

## Fulfillment & Orders

### Transfer order tracking
We improved how internal inventory movements are tracked across timezones. The system now reports precise receive dates for transfer orders and allows you to filter transfer order items by status.
*Sources: [receiving#656](https://github.com/hotwax/receiving/pull/656), [oms#426](https://github.com/hotwax/oms/pull/426), [oms#432](https://github.com/hotwax/oms/pull/432)*

### NetSuite integration
The NetSuite connector now supports importing cycle count identifiers. For transfer orders, we now share HotWax Item Sequence IDs with NetSuite to improve data synchronization and drive alerts for out of sync items.
*Sources: [mantle-netsuite-connector#220](https://github.com/hotwax/mantle-netsuite-connector/pull/220), [mantle-netsuite-connector#200](https://github.com/hotwax/mantle-netsuite-connector/pull/200), [mantle-netsuite-connector#208](https://github.com/hotwax/mantle-netsuite-connector/pull/208), [mantle-netsuite-connector#214](https://github.com/hotwax/mantle-netsuite-connector/pull/214)*

## User Experience

### Interface improvements
We refined several UI components to make data easier to read. Settings pages now display dropdown menus correctly on smaller screens. On the `Product Inventory` page, transactions are now sorted chronologically, and filters are context-aware based on the selected product store.
*Sources: [transfers#189](https://github.com/hotwax/transfers/pull/189), [hotwax-oms#390](https://github.com/hotwax/hotwax-oms/pull/390), [hotwax-oms#344](https://github.com/hotwax/hotwax-oms/pull/344)*

## System & Core Updates

### System logging and monitoring
We standardized logging across the Shopify bridge, NetSuite connector, and order routing engine. These logs now use a consistent format with more context, making it easier to monitor system performance and resolve issues quickly.
*Sources: [hotwax-shopify-oms-bridge#61](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/61), [mantle-netsuite-connector#203](https://github.com/hotwax/mantle-netsuite-connector/pull/203), [OrderRouting#111](https://github.com/hotwax/OrderRouting/pull/111)*

### Financial data feeds and utilities
Financial data feeds now use centralized system properties for date filtering, ensuring consistency across report generation. We also introduced new utilities for CSV file management and job tracking to support more reliable data processing.
*Sources: [hotwax-ofbiz-oms-usl#19](https://github.com/hotwax/hotwax-ofbiz-oms-usl/pull/19), [mantle-netsuite-connector#216](https://github.com/hotwax/mantle-netsuite-connector/pull/216), [hotwax-maarg-util#35](https://github.com/hotwax/hotwax-maarg-util/pull/35), [hotwax-maarg-util#37](https://github.com/hotwax/hotwax-maarg-util/pull/37), [hotwax-maarg-util#32](https://github.com/hotwax/hotwax-maarg-util/pull/32), [hotwax-maarg-util#28](https://github.com/hotwax/hotwax-maarg-util/pull/28), [mantle-shopify-connector#279](https://github.com/hotwax/mantle-shopify-connector/pull/279), [mantle-netsuite-connector#210](https://github.com/hotwax/mantle-netsuite-connector/pull/210)*
