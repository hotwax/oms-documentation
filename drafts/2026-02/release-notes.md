---
title: February 2026 Release Notes
slug: product-updates/release-notes/2026-02
contentType: release-note
month: 2026-02
metaDescription: In February, we updated our Shopify integration to improve the way we handle order data and inventory updates. We also refined store-level workflows to make or…
tagNames: [Release Notes]
key: release-notes:2026-02
---

# February 2026 Release Notes

In February, we updated our Shopify integration to improve the way we handle order data and inventory updates. We also refined store-level workflows to make order lookups and fulfillment tasks faster for your team.

## Shopify Integration
### Shopify authentication
HotWax Commerce now supports unified integration with Shopify App Bridge. This allows you to use your point of sale camera for barcode scanning across mobile platforms. If a session expires, the system automatically prompts a re-login to maintain access within the embedded environment.
*Sources: [receiving#652](https://github.com/hotwax/receiving/pull/652), [receiving#548](https://github.com/hotwax/receiving/pull/548), [receiving#578](https://github.com/hotwax/receiving/pull/578), [receiving#549](https://github.com/hotwax/receiving/pull/549), [bopis#758](https://github.com/hotwax/bopis/pull/758), [bopis#747](https://github.com/hotwax/bopis/pull/747), [fulfillment#1582](https://github.com/hotwax/fulfillment/pull/1582), [fulfillment#1351](https://github.com/hotwax/fulfillment/pull/1351), [fulfillment#1556](https://github.com/hotwax/fulfillment/pull/1556), [fulfillment#1352](https://github.com/hotwax/fulfillment/pull/1352), [inventory-count#1341](https://github.com/hotwax/inventory-count/pull/1341), [inventory-count#1308](https://github.com/hotwax/inventory-count/pull/1308)*

### Order synchronization
We updated the Shopify order ingestion process to make data updates more reliable. The system now uses a change-detection system to update existing orders without creating duplicates. This helps capture complex data points like refunds, returns, and exchanges more accurately.
*Sources: [mantle-shopify-connector#256](https://github.com/hotwax/mantle-shopify-connector/pull/256), [mantle-shopify-connector#260](https://github.com/hotwax/mantle-shopify-connector/pull/260), [mantle-shopify-connector#257](https://github.com/hotwax/mantle-shopify-connector/pull/257), [mantle-shopify-connector#268](https://github.com/hotwax/mantle-shopify-connector/pull/268), [hotwax-shopify-oms-bridge#65](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/65), [hotwax-shopify-oms-bridge#62](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/62), [hotwax-shopify-oms-bridge#55](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/55), [oms#400](https://github.com/hotwax/oms/pull/400)*

### Refunds
The Order Management System (OMS) now processes all Shopify refund types directly, including returns and cancellations. The system maps these items and adjustments to record transactions and can automatically initiate related actions like creating exchange orders.
*Sources: [hotwax-shopify-oms-bridge#54](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/54), [hotwax-shopify-oms-bridge#63](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/63)*

### Inventory synchronization
When you delete products in Shopify, HotWax Commerce now automatically removes them from the system and search index. This process expires both parent products and their variants to keep your catalog clean and search results accurate for customers.
*Sources: [mantle-shopify-connector#267](https://github.com/hotwax/mantle-shopify-connector/pull/267), [oms#416](https://github.com/hotwax/oms/pull/416), [hotwax-oms#420](https://github.com/hotwax/hotwax-oms/pull/420)*

## Store Operations
### Shipment routing
We updated Ship-to-Store logistics to provide more accurate address details for destination stores. Order completion emails now send only after every item in an order is ready for pickup. We also fixed an issue where converting a BOPIS (Buy Online Pick Up In Store) order to Ship-to-Store did not always update the shipping information correctly.
*Sources: [bopis#745](https://github.com/hotwax/bopis/pull/745), [bopis#739](https://github.com/hotwax/bopis/pull/739), [bopis#740](https://github.com/hotwax/bopis/pull/740), [fulfillment#1573](https://github.com/hotwax/fulfillment/pull/1573), [oms#395](https://github.com/hotwax/oms/pull/395), [oms#406](https://github.com/hotwax/oms/pull/406), [hotwax-oms#389](https://github.com/hotwax/hotwax-oms/pull/389)*

### Delivery confirmation
The system now automatically fills in recipient phone and email details during delivery confirmation. By pulling this data from existing contact records, the system reduces the need for manual entry and helps keep communication details accurate.
*Sources: [bopis#738](https://github.com/hotwax/bopis/pull/738), [bopis#736](https://github.com/hotwax/bopis/pull/736), [hotwax-poorti#218](https://github.com/hotwax/hotwax-poorti/pull/218)*

### Order filtering
Order Lookup results now focus on the facility you are currently assigned to. This makes store-level work easier by showing only the orders relevant to your location.
*Sources: [fulfillment#1578](https://github.com/hotwax/fulfillment/pull/1578)*

### Order rejection
The `Reject Order` button now stays visible if an attempt to reject an order fails. This allows you to try again immediately without needing to refresh the page.
*Sources: [fulfillment#1567](https://github.com/hotwax/fulfillment/pull/1567), [fulfillment#1536](https://github.com/hotwax/fulfillment/pull/1536)*

### Return reports
When receiving returned inventory, the system now links return IDs directly to the products. This update also adds exportable CSV reports for sales returns to help you track returned stock more effectively.
*Sources: [hotwax-poorti#223](https://github.com/hotwax/hotwax-poorti/pull/223), [hotwax-oms#402](https://github.com/hotwax/hotwax-oms/pull/402)*

## Inventory & Settings
### Inventory availability
You can now see Available-to-Promise (ATP) details for products even if some of your locations show negative inventory. Previously, negative stock at one location could hide availability data across others. This change gives you full visibility into your stock regardless of recent store activity.
*Sources: [hotwax-oms#411](https://github.com/hotwax/hotwax-oms/pull/411)*

### Store settings
We added an autocomplete search feature for configuring product store settings to make selections faster. You can also associate specific contact methods with individual stores and view relevant facility groups within the Fulfillment app.
*Sources: [hotwax-oms#406](https://github.com/hotwax/hotwax-oms/pull/406), [hotwax-oms#419](https://github.com/hotwax/hotwax-oms/pull/419), [hotwax-oms#357](https://github.com/hotwax/hotwax-oms/pull/357)*

## System & Core Updates
### Security permissions
We introduced a new `REFRESH_ORDER` permission. This allows administrators to choose which users can manually refresh order data on the Sales Order screen.
*Sources: [hotwax-oms#395](https://github.com/hotwax/hotwax-oms/pull/395)*

### Fulfillment tracking
The system now records when fulfillment happens in Shopify. This allows HotWax OMS to identify shipments created in external systems and helps prevent duplicate processing.
*Sources: [mantle-shopify-connector#265](https://github.com/hotwax/mantle-shopify-connector/pull/265)*

### Log management
We added APIs that allow for the automated inspection of integration logs. This helps technical teams identify the cause of data issues and resolve them more quickly.
*Sources: [hotwax-oms#383](https://github.com/hotwax/hotwax-oms/pull/383)*

### Message queuing
HotWax Commerce now integrates with AWS SQS for message handling. This allows for more reliable background processing of data between your applications.
*Sources: [hotwax-maarg-util#23](https://github.com/hotwax/hotwax-maarg-util/pull/23)*

### NetSuite integration
We updated the NetSuite integration to cache access tokens. This reduces the number of requests sent to NetSuite and improves performance when syncing transactions.
*Sources: [mantle-netsuite-connector#199](https://github.com/hotwax/mantle-netsuite-connector/pull/199)*

### Product indexing
We resolved a caching issue that prevented some new product variants from appearing in search results. All new product options are now searchable immediately after they are created.
*Sources: [hotwax-oms#378](https://github.com/hotwax/hotwax-oms/pull/378)*
