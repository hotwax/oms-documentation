---
title: March 2026 Release Notes
slug: product-updates/release-notes/2026-03
contentType: release-note
month: 2026-03
metaDescription: March updates focus on providing better visibility for Shopify product listings and giving you more control over order parking queues. We also added the abilit…
tagNames: [Release Note]
key: release-notes:2026-03
---

# March 2026 Release Notes

March updates focus on providing better visibility for Shopify product listings and giving you more control over order parking queues. We also added the ability to capture customer notes during the return process to help your team handle refunds with better context.

## Product Management

### Shopify listing synchronization
The system now displays Shopify listing and promise dates in the product audit view. This update resolves data differences between Shopify and the search index, making information more consistent. If a product is not linked to a Shopify store or if a shop configuration is disconnected, the system now shows a clear status message in the `Shop Listing` section.
*Sources: [preorder#365](https://github.com/hotwax/preorder/pull/365), [preorder#155](https://github.com/hotwax/preorder/pull/155), [preorder#254](https://github.com/hotwax/preorder/pull/254), [preorder#232](https://github.com/hotwax/preorder/pull/232), [preorder#345](https://github.com/hotwax/preorder/pull/345), [preorder#346](https://github.com/hotwax/preorder/pull/346), [preorder#342](https://github.com/hotwax/preorder/pull/342)*

### Product identifiers
You have more control over which identification types, such as SKU or UPC, appear in your application settings. Administrators with the `COMMON_ADMIN` permission can now modify these identifiers directly. We also updated the settings page to make sure all identifier options remain visible on different screen sizes.
*Sources: [transfers#189](https://github.com/hotwax/transfers/pull/189), [preorder#366](https://github.com/hotwax/preorder/pull/366), [preorder#351](https://github.com/hotwax/preorder/pull/351), [preorder#344](https://github.com/hotwax/preorder/pull/344), [preorder#354](https://github.com/hotwax/preorder/pull/354), [preorder#364](https://github.com/hotwax/preorder/pull/364)*

### Application navigation
The `Go To` button in the Launchpad now follows user permissions and is hidden when the app is used in standalone mode. Navigation components now use standard styling to keep the visual experience consistent across the platform.
*Sources: [preorder#356](https://github.com/hotwax/preorder/pull/356), [preorder#355](https://github.com/hotwax/preorder/pull/355)*

## Order Management

### Order queue management
You can now select specific virtual facilities and order parking queues when you fetch or release orders. HotWax Commerce saves these parking preferences for each user so they stay the same across different sessions. If no preference is set, the system defaults to pre-order and backorder parking.
*Sources: [preorder#204](https://github.com/hotwax/preorder/pull/204), [preorder#206](https://github.com/hotwax/preorder/pull/206)*

### Returns management
The Order Management System (OMS) now captures customer notes and return reasons provided during Shopify returns. When a customer adds text to their return request, that information is synced to the OMS. This provides more context for processing returns and helps improve accuracy during the refund process.
*Sources: [mantle-shopify-connector#276](https://github.com/hotwax/mantle-shopify-connector/pull/276), [hotwax-shopify-oms-bridge#70](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/70), [hotwax-shopify-oms-bridge#75](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/75)*

### Order history synchronization
To make data migration faster, the Shopify connector now focuses only on unfulfilled orders when syncing order history. The system also treats unsuccessful historical transactions as warnings instead of errors. This keeps the migration moving if a single transaction fails to sync.
*Sources: [mantle-shopify-connector#274](https://github.com/hotwax/mantle-shopify-connector/pull/274), [hotwax-shopify-oms-bridge#72](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/72)*

## Inventory & Fulfillment

### Transfer order synchronization
The Transfer Order Acknowledgment feed now includes item-level details. By including NetSuite Item IDs and HotWax Item Sequence IDs, the feed allows for more accurate tracking of specific items within an order when syncing with external systems.
*Sources: [mantle-netsuite-connector#208](https://github.com/hotwax/mantle-netsuite-connector/pull/208)*

### Inventory cycle count
Retailers can now import cycle count external IDs directly from NetSuite using SFTP. This makes it easier to reconcile inventory and track cycle counts accurately across both systems.
*Sources: [mantle-netsuite-connector#200](https://github.com/hotwax/mantle-netsuite-connector/pull/200)*

## System & Core Updates

### Shopify integration management
A new dashboard for Shopify integration setup and health checks is now available. You can automate the configuration of webhooks and AWS credentials and monitor the status of different integration components in one view. Updated webhook handling also supports the latest Shopify API versions and external endpoints.
*Sources: [hotwax-maarg-util#28](https://github.com/hotwax/hotwax-maarg-util/pull/28), [mantle-shopify-connector#271](https://github.com/hotwax/mantle-shopify-connector/pull/271), [hotwax-shopify-oms-bridge#74](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/74)*
