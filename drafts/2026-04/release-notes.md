---
title: April 2026 Release Notes
slug: release-notes/2026-04
contentType: release-note
month: 2026-04
metaDescription: This month we focused on making customer contact and inventory tracking more accurate across your stores. We also added more precise security controls for tran…
tagNames: [Release Note]
key: release-notes:2026-04
---

# April 2026 Release Notes

This month we focused on making customer contact and inventory tracking more accurate across your stores. We also added more precise security controls for transfer orders and improved how your product data syncs from Shopify.

## HotWax Commerce Order Management System

### Webhook notifications
HotWax Commerce now sends secure, real-time notifications to your other systems when sales order status or item details change. These updates use HMAC signatures to keep your data safe. The system also waits to send completion notifications until all shipments are fulfilled, which provides more accurate status tracking for your external platforms.
*Sources: [oms#420](https://github.com/hotwax/oms/pull/420)*

### Point of sale inventory management
Point of sale order processing now manages inventory deductions more accurately. The system prevents unnecessary ship groups and only issues inventory for items that are actually completed. This helps you maintain a better match between your physical stock and your online available-to-promise counts.
*Sources: [oms#461](https://github.com/hotwax/oms/pull/461)*

### Customer information management
Customer names now synchronize directly from Shopify when new orders create customer records. This update pulls the most current first and last names so that your invoices and returns show the correct information. You will see these updated details directly within the Order Management System.
*Sources: [oms#472](https://github.com/hotwax/oms/pull/472)*

### Inventory availability
You can now track product availability by specific facility identifiers. This gives you better visibility into where your stock is located and leads to more accurate available-to-promise calculations for your online store.
*Sources: [oms#464](https://github.com/hotwax/oms/pull/464)*

## HotWax Store Pickup

### Store pickup customer contact
The Store Pickup app now displays customer contact details even when billing information is incomplete. We updated the system to pull contact methods from shipping and order records instead. This change helps store associates get the information they need to fulfill orders.
*Sources: [bopis#767](https://github.com/hotwax/bopis/pull/767), [bopis#768](https://github.com/hotwax/bopis/pull/768), [oms#466](https://github.com/hotwax/oms/pull/466)*

### Proof of delivery
Recording deliveries is now more flexible because a phone number is no longer required in the data model. You can now complete the proof of delivery process even when this field is left blank.
*Sources: [bopis#771](https://github.com/hotwax/bopis/pull/771)*

## HotWax Fulfillment

### Transfer order permissions
We added a specific permission for canceling and rejecting transfer orders. You can now use `APP_TRANSFER_ORDER_CANCEL` to manage these actions instead of the broader update permission. This allows you to control who can perform these actions with more precision.
*Sources: [fulfillment#1589](https://github.com/hotwax/fulfillment/pull/1589), [fulfillment#1590](https://github.com/hotwax/fulfillment/pull/1590)*

### Order detail visualization
Order lookup pages now show customer payment preferences more consistently. This information is now visible even when an order does not have facility change records, helping fulfillment teams see all payment details during processing.
*Sources: [fulfillment#1588](https://github.com/hotwax/fulfillment/pull/1588)*

## System & Core Updates

### Product synchronization
Product synchronization from Shopify now handles missing category settings without stopping the process. The system checks for these attributes first, which helps products import correctly and prevents errors during the sync.
*Sources: [oms#451](https://github.com/hotwax/oms/pull/451)*

### Data integrity
HotWax now supports a safe subset of HTML and handles special characters in order notes and product attributes more effectively. This helps your notes and product details display correctly across the system without data loss.
*Sources: [oms#448](https://github.com/hotwax/oms/pull/448)*
