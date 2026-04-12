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

### Shopify integration dashboard
The Shopify integration now features a central dashboard for setup and health monitoring. This dashboard provides real-time diagnostics for your service jobs, webhooks, and AWS configurations. You can now manage multiple Shopify stores from a single interface and control product-related jobs without leaving the application.
*Sources: [hotwax-shopify-oms-bridge#74](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/74), [hotwax-shopify-oms-bridge#89](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/89), [hotwax-shopify-oms-bridge#92](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/92), [mantle-shopify-connector#271](https://github.com/hotwax/mantle-shopify-connector/pull/271)*

### Shopify order synchronization
The order synchronization process now supports bulk transaction processing to handle authorizations and captures. HotWax Commerce now automatically completes orders once all items are fulfilled and accurately reflects gift card status on orders. We also refined facility routing for Point of Sale (POS) orders to direct send sale orders and BOPIS orders to the correct locations.
*Sources: [hotwax-shopify-oms-bridge#119](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/119), [hotwax-shopify-oms-bridge#90](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/90), [hotwax-shopify-oms-bridge#111](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/111), [hotwax-shopify-oms-bridge#99](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/99), [hotwax-shopify-oms-bridge#76](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/76), [mantle-shopify-connector#274](https://github.com/hotwax/mantle-shopify-connector/pull/274), [hotwax-shopify-oms-bridge#95](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/95), [hotwax-shopify-oms-bridge#103](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/103), [hotwax-maarg-util#33](https://github.com/hotwax/hotwax-maarg-util/pull/33), [oms#434](https://github.com/hotwax/oms/pull/434)*

### Historical order migration
HotWax Commerce now imports historical Shopify orders and transactions. This allows you to see past customer activity without impacting your current physical inventory levels. The system flags any unsuccessful historical transactions as warnings so that your current order processing continues without interruption.
*Sources: [hotwax-shopify-oms-bridge#109](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/109), [hotwax-shopify-oms-bridge#72](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/72)*

## Merchandising & Inventory

### Product catalog management
You can now add and edit brand names directly on the `Product View` page. We also automated how the system handles clearance categories based on price and improved support for multi-store product configurations. These updates make it easier to manage product visibility and availability across all your storefronts.
*Sources: [hotwax-oms#343](https://github.com/hotwax/hotwax-oms/pull/343), [oms#398](https://github.com/hotwax/oms/pull/398), [oms#433](https://github.com/hotwax/oms/pull/433), [oms#441](https://github.com/hotwax/oms/pull/441), [oms#435](https://github.com/hotwax/oms/pull/435), [hotwax-oms#457](https://github.com/hotwax/hotwax-oms/pull/457), [hotwax-oms#438](https://github.com/hotwax/hotwax-oms/pull/438), [hotwax-oms#447](https://github.com/hotwax/hotwax-oms/pull/447)*

### Inventory adjustments and variances
Retailers can now track inventory discrepancies across both mobile and backend systems. New tools record product variances and aggregate scan data to help with cycle counts. This provides a clearer view of inventory accuracy at the store level.
*Sources: [inventory-count#1382](https://github.com/hotwax/inventory-count/pull/1382), [hotwax-poorti#228](https://github.com/hotwax/hotwax-poorti/pull/228), [hotwax-poorti#225](https://github.com/hotwax/hotwax-poorti/pull/225), [oms#409](https://github.com/hotwax/oms/pull/409)*

### Facility and store configuration
We updated how facility groups and product store associations are managed. You can now use the API to update facility groups, and the system accurately synchronizes inventory with Shopify when these associations change. A fix for facility contact mechanisms also ensures that address and contact data can be removed when necessary.
*Sources: [oms#425](https://github.com/hotwax/oms/pull/425), [hotwax-oms#356](https://github.com/hotwax/hotwax-oms/pull/356), [hotwax-oms#431](https://github.com/hotwax/hotwax-oms/pull/431), [hotwax-oms#440](https://github.com/hotwax/hotwax-oms/pull/440), [hotwax-oms#465](https://github.com/hotwax/hotwax-oms/pull/465)*

## Returns & Refunds

### Refund and return processing
This release improves how Shopify returns are handled. The system now falls back to a designated restocking facility when a refund originates from a virtual facility and stores tax rates exactly as they are received from Shopify. Customer notes from Shopify are now included on return line items, and exchange orders are correctly linked to their original returns.
*Sources: [hotwax-shopify-oms-bridge#124](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/124), [hotwax-shopify-oms-bridge#86](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/86), [hotwax-shopify-oms-bridge#79](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/79), [mantle-shopify-connector#276](https://github.com/hotwax/mantle-shopify-connector/pull/276), [hotwax-shopify-oms-bridge#75](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/75), [hotwax-shopify-oms-bridge#70](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/70), [hotwax-ofbiz-oms-usl#16](https://github.com/hotwax/hotwax-ofbiz-oms-usl/pull/16), [hotwax-oms#436](https://github.com/hotwax/hotwax-oms/pull/436)*

## Fulfillment & Orders

### Preorder management and audits
The preorder system now allows you to set a default parking location for orders. We also added shop connection status indicators to the product summary, making it clear when a shop is disconnected. The product audit view was updated to display Shopify listing data and promise dates more accurately.
*Sources: [preorder#206](https://github.com/hotwax/preorder/pull/206), [preorder#232](https://github.com/hotwax/preorder/pull/232), [preorder#343](https://github.com/hotwax/preorder/pull/343), [preorder#344](https://github.com/hotwax/preorder/pull/344), [preorder#354](https://github.com/hotwax/preorder/pull/354), [preorder#356](https://github.com/hotwax/preorder/pull/356), [preorder#364](https://github.com/hotwax/preorder/pull/364), [preorder#365](https://github.com/hotwax/preorder/pull/365), [preorder#345](https://github.com/hotwax/preorder/pull/345), [preorder#346](https://github.com/hotwax/preorder/pull/346), [preorder#342](https://github.com/hotwax/preorder/pull/342)*

### Transfer order tracking
We improved how internal inventory movements are tracked. The system now reports precise receive dates for transfer orders and allows you to filter transfer orders by status. When you add items to a transfer order, HotWax Commerce automatically records the item type and status for a better audit trail.
*Sources: [receiving#656](https://github.com/hotwax/receiving/pull/656), [oms#426](https://github.com/hotwax/oms/pull/426), [oms#432](https://github.com/hotwax/oms/pull/432)*

### NetSuite integration
The NetSuite connector now supports importing cycle count identifiers via SFTP. For transfer orders, we now share HotWax Item Sequence IDs with NetSuite to improve data synchronization. Additionally, replacement and exchange orders sent to NetSuite now include the original return ID to prevent duplicate orders.
*Sources: [mantle-netsuite-connector#220](https://github.com/hotwax/mantle-netsuite-connector/pull/220), [mantle-netsuite-connector#200](https://github.com/hotwax/mantle-netsuite-connector/pull/200), [mantle-netsuite-connector#208](https://github.com/hotwax/mantle-netsuite-connector/pull/208), [mantle-netsuite-connector#214](https://github.com/hotwax/mantle-netsuite-connector/pull/214)*

## User Experience

### Interface improvements
We refined several UI components to make data easier to read. Settings pages now display dropdown menus correctly on smaller screens. On the `Product Inventory` page, transactions are now sorted chronologically, and filters are context-aware based on the selected product store.
*Sources: [transfers#189](https://github.com/hotwax/transfers/pull/189), [hotwax-oms#390](https://github.com/hotwax/hotwax-oms/pull/390), [hotwax-oms#344](https://github.com/hotwax/hotwax-oms/pull/344)*

### Customer and location data
The system now captures geographic coordinates from latitude and longitude for order addresses. This helps with location-based reporting and services. We also fixed an issue to ensure shipping phone numbers are saved correctly when updated on the order details page.
*Sources: [oms#428](https://github.com/hotwax/oms/pull/428), [hotwax-oms#408](https://github.com/hotwax/hotwax-oms/pull/408), [hotwax-shopify-oms-bridge#84](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/84)*

## System & Core Updates

### System logging and monitoring
We standardized logging across the Shopify bridge, NetSuite connector, and order routing engine. These logs now use a consistent format with more context, making it easier to monitor system performance in Grafana and resolve issues quickly.
*Sources: [hotwax-shopify-oms-bridge#61](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/61), [mantle-netsuite-connector#203](https://github.com/hotwax/mantle-netsuite-connector/pull/203), [OrderRouting#111](https://github.com/hotwax/OrderRouting/pull/111)*

### Financial data feeds and utilities
Financial data feeds now use centralized system properties for date filtering, ensuring consistency across report generation. We also introduced new utilities for CSV file management and job tracking to support more reliable data processing.
*Sources: [hotwax-ofbiz-oms-usl#19](https://github.com/hotwax/hotwax-ofbiz-oms-usl/pull/19), [mantle-netsuite-connector#216](https://github.com/hotwax/mantle-netsuite-connector/pull/216), [hotwax-maarg-util#35](https://github.com/hotwax/hotwax-maarg-util/pull/35), [hotwax-maarg-util#37](https://github.com/hotwax/hotwax-maarg-util/pull/37), [hotwax-maarg-util#32](https://github.com/hotwax/hotwax-maarg-util/pull/32), [hotwax-maarg-util#28](https://github.com/hotwax/hotwax-maarg-util/pull/28), [mantle-shopify-connector#279](https://github.com/hotwax/mantle-shopify-connector/pull/279), [mantle-netsuite-connector#210](https://github.com/hotwax/mantle-netsuite-connector/pull/210)*
