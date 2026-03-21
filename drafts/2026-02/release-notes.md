---
title: February 2026 Release Notes
slug: release-notes/2026-02
contentType: release-note
month: 2026-02
metaDescription: February 2026 brings deeper integration between HotWax Commerce and Shopify, allowing your team to work within the Shopify environment. We also updated store f…
tagNames: [Release Notes]
key: release-notes:2026-02
---

February 2026 brings deeper integration between HotWax Commerce and Shopify, allowing your team to work within the Shopify environment. We also updated store fulfillment workflows and inventory visibility to help you manage orders and stock levels more accurately.

## Shopify Integration

### Embedded applications
HotWax Commerce applications, including Receiving, BOPIS, Fulfillment, and Inventory Count, now run directly within Shopify Admin and Shopify POS. This integration uses the Shopify App Bridge for authentication, so you can access HotWax functionality without leaving the Shopify environment. This provides a more consistent experience for store associates and managers who primarily use Shopify.
*Sources: [receiving#652](https://github.com/hotwax/receiving/pull/652), [receiving#548](https://github.com/hotwax/receiving/pull/548), [receiving#578](https://github.com/hotwax/receiving/pull/578), [receiving#549](https://github.com/hotwax/receiving/pull/549), [bopis#747](https://github.com/hotwax/bopis/pull/747), [bopis#758](https://github.com/hotwax/bopis/pull/758), [fulfillment#1582](https://github.com/hotwax/fulfillment/pull/1582), [fulfillment#1351](https://github.com/hotwax/fulfillment/pull/1351), [fulfillment#1556](https://github.com/hotwax/fulfillment/pull/1556), [fulfillment#1352](https://github.com/hotwax/fulfillment/pull/1352), [inventory-count#1341](https://github.com/hotwax/inventory-count/pull/1341), [inventory-count#1308](https://github.com/hotwax/inventory-count/pull/1308)*

### Order synchronization
We migrated the Shopify order import process to improve reliability and speed. The system now uses a new architecture that captures complete order details, including refunds, returns, and exchanges, in a single query. These updates ensure that billing information and facility assignments are accurate from the moment an order arrives in the Order Management System (OMS).
*Sources: [mantle-shopify-connector#260](https://github.com/hotwax/mantle-shopify-connector/pull/260), [hotwax-shopify-oms-bridge#62](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/62), [hotwax-shopify-oms-bridge#55](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/55), [oms#400](https://github.com/hotwax/oms/pull/400), [hotwax-shopify-oms-bridge#65](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/65), [hotwax-shopify-oms-bridge#66](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/66), [hotwax-shopify-oms-bridge#68](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/68), [hotwax-shopify-oms-bridge#67](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/67), [hotwax-oms#370](https://github.com/hotwax/hotwax-oms/pull/370)*

### Refund management
HotWax now processes Shopify refunds, including returns, cancellations, and exchanges, directly. A new service identifies the specific refund type and maps the data to the correct transaction in the OMS. We also updated how the system receives inventory from returns to help you track stock and costs more effectively.
*Sources: [hotwax-shopify-oms-bridge#54](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/54), [hotwax-shopify-oms-bridge#63](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/63), [hotwax-shopify-oms-bridge#64](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/64), [mantle-shopify-connector#268](https://github.com/hotwax/mantle-shopify-connector/pull/268), [hotwax-poorti#223](https://github.com/hotwax/hotwax-poorti/pull/223)*

### Product integration
When you delete a product in Shopify, the system now automatically removes that product and its variants from HotWax and the search index. We also updated product sorting on the `Find Product` and `Find Inventory` pages to prioritize position, making it easier to organize your catalog.
*Sources: [mantle-shopify-connector#267](https://github.com/hotwax/mantle-shopify-connector/pull/267), [oms#416](https://github.com/hotwax/oms/pull/416), [hotwax-oms#420](https://github.com/hotwax/hotwax-oms/pull/420), [hotwax-oms#378](https://github.com/hotwax/hotwax-oms/pull/378), [hotwax-oms#415](https://github.com/hotwax/hotwax-oms/pull/415), [mantle-shopify-connector#262](https://github.com/hotwax/mantle-shopify-connector/pull/262), [hotwax-oms#399](https://github.com/hotwax/hotwax-oms/pull/399), [hotwax-oms#398](https://github.com/hotwax/hotwax-oms/pull/398)*

### Fulfillment tracking
HotWax now creates a history record as soon as a fulfillment completes in Shopify. This prevents the system from trying to process the same fulfillment twice and keeps your order data synchronized.
*Sources: [mantle-shopify-connector#265](https://github.com/hotwax/mantle-shopify-connector/pull/265)*

## Fulfillment & Store Operations

### Ship to store fulfillment
We updated the Ship to Store experience to display the correct destination store address and contact information for every order. Order completion emails are now sent only when every item in the order is ready for pickup, ensuring customers don't arrive at the store early.
*Sources: [bopis#745](https://github.com/hotwax/bopis/pull/745), [bopis#739](https://github.com/hotwax/bopis/pull/739), [bopis#740](https://github.com/hotwax/bopis/pull/740), [oms#395](https://github.com/hotwax/oms/pull/395), [fulfillment#1573](https://github.com/hotwax/fulfillment/pull/1573), [hotwax-oms#389](https://github.com/hotwax/hotwax-oms/pull/389)*

### Proof of delivery
The proof of delivery process now requires validated contact information, such as phone numbers and email addresses, for billing and receipts. This change makes it easier to reconcile orders and maintain accurate fulfillment records.
*Sources: [bopis#738](https://github.com/hotwax/bopis/pull/738), [bopis#736](https://github.com/hotwax/bopis/pull/736), [hotwax-poorti#218](https://github.com/hotwax/hotwax-poorti/pull/218)*

### Facility order lookup
The `Order Lookup` screen now defaults to showing only the orders assigned to your current facility. We also updated the Store Admin page in the Fulfillment app to show only the facility groups linked to your specific product store, reducing clutter for store managers.
*Sources: [fulfillment#1578](https://github.com/hotwax/fulfillment/pull/1578), [hotwax-oms#419](https://github.com/hotwax/hotwax-oms/pull/419)*

### Store pickup management
BOPIS (Buy Online Pick Up In Store) order visibility now includes all items, regardless of the order size. We also added automatic email notifications for stores when a BOPIS order is cancelled, so staff are immediately aware of changes.
*Sources: [oms#406](https://github.com/hotwax/oms/pull/406), [oms#385](https://github.com/hotwax/oms/pull/385)*

### Order rejection workflow
The `Reject Order` button no longer disappears if an attempt fails. This allows you to immediately try again or correct the rejection reason without having to refresh the page.
*Sources: [fulfillment#1536](https://github.com/hotwax/fulfillment/pull/1536), [fulfillment#1567](https://github.com/hotwax/fulfillment/pull/1567)*

### User interface layout
Search bars within modal windows are now static toolbars. This change makes the mobile experience more consistent across the Receiving, Fulfillment, and Inventory Count applications.
*Sources: [receiving#647](https://github.com/hotwax/receiving/pull/647), [fulfillment#1564](https://github.com/hotwax/fulfillment/pull/1564), [inventory-count#1374](https://github.com/hotwax/inventory-count/pull/1374)*

## Inventory Management

### Inventory variance
The Inventory Count app now displays item availability alongside variance quantities. You can control who sees this data using specific permissions for admin and log roles, providing better insight into inventory discrepancies while keeping data secure.
*Sources: [inventory-count#1378](https://github.com/hotwax/inventory-count/pull/1378), [inventory-count#1379](https://github.com/hotwax/inventory-count/pull/1379), [inventory-count#1380](https://github.com/hotwax/inventory-count/pull/1380), [inventory-count#1383](https://github.com/hotwax/inventory-count/pull/1383)*

### Inventory availability
You can now view Available-to-Promise (ATP) details for products even if some locations have negative inventory. Previously, negative inventory at one store could block the visibility of availability at other locations. This update ensures you have a full view of your stock across the entire network.
*Sources: [hotwax-oms#411](https://github.com/hotwax/hotwax-oms/pull/411)*

## OMS Administration

### Order management administration
You can now limit who can use the order refresh function through new permission settings. We also added support for store-specific contact information and autocomplete functionality in the Product Store Settings to make searches faster.
*Sources: [hotwax-oms#395](https://github.com/hotwax/hotwax-oms/pull/395), [hotwax-oms#406](https://github.com/hotwax/hotwax-oms/pull/406), [hotwax-oms#357](https://github.com/hotwax/hotwax-oms/pull/357)*

### Data integration tools
Data Manager now includes APIs that allow AI tools to review integration logs and identify data issues. You can also export sales return reports as a CSV file, organized by your master data management settings, to better track return shipments.
*Sources: [hotwax-oms#383](https://github.com/hotwax/hotwax-oms/pull/383), [hotwax-oms#402](https://github.com/hotwax/hotwax-oms/pull/402)*

## System & Core Updates

### NetSuite integration
We updated how the system handles NetSuite REST API requests by caching access tokens. This change reduces latency and helps the system respond faster when connecting to NetSuite during busy periods.
*Sources: [mantle-netsuite-connector#199](https://github.com/hotwax/mantle-netsuite-connector/pull/199)*

### Amazon SQS integration
HotWax now includes a standard toolset for managing messages through Amazon SQS. These tools help the system receive and manage background tasks using standard AWS configuration.
*Sources: [hotwax-maarg-util#23](https://github.com/hotwax/hotwax-maarg-util/pull/23)*

### GraphQL domain specific language
We introduced a new way for developers to build GraphQL queries and mutations. This helps manage complex queries for integrations like Shopify by automating patterns such as pagination and variable management.
*Sources: [mantle-shopify-connector#256](https://github.com/hotwax/mantle-shopify-connector/pull/256), [mantle-shopify-connector#257](https://github.com/hotwax/mantle-shopify-connector/pull/257)*
