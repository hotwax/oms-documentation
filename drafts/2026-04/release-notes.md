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

### Customer information management
Customer names now synchronize directly from Shopify when new orders create customer records. This update pulls the most current first and last names so that your invoices and returns show the correct information. You will see these updated details directly within the Order Management System.
*Sources: [oms#472](https://github.com/hotwax/oms/pull/472)*

### Multi inventory buckets
You can now map multiple inventory channels from one Product Store to multiple aggregate inventory locations in a single Shopify store. This allows retailers to setup unified invnetory locations in Shopify for particular markets like International and Domestic inventory.
*Sources: [oms#464](https://github.com/hotwax/oms/pull/464)*

## HotWax Store Pickup

### Store pickup customer contact
The Store Pickup app now displays customer contact details even when billing information is incomplete. We updated the system to pull contact methods from shipping and order records instead. This change helps store associates get the information they need to fulfill orders.
*Sources: [bopis#767](https://github.com/hotwax/bopis/pull/767), [bopis#768](https://github.com/hotwax/bopis/pull/768), [oms#466](https://github.com/hotwax/oms/pull/466)*

### Proof of delivery
Recording deliveries is now more flexible because a phone number is no longer required in the proof of delivery model. You can now complete the proof of delivery process even when this field is left blank.
*Sources: [bopis#771](https://github.com/hotwax/bopis/pull/771)*

## HotWax Fulfillment

### Transfer order permissions
We added a specific permission for canceling and rejecting transfer orders from the fulfillment app. You can now use `APP_TRANSFER_ORDER_CANCEL` to manage these actions instead of the broader update permission. This allows you to control who can perform these actions with more precision.
*Sources: [fulfillment#1589](https://github.com/hotwax/fulfillment/pull/1589), [fulfillment#1590](https://github.com/hotwax/fulfillment/pull/1590)*

### Order detail visualization
Fixed a bug if an order did not have recent facility change records, its payment details would not show on the order detail page.
*Sources: [fulfillment#1588](https://github.com/hotwax/fulfillment/pull/1588)*

## System & Core Updates

### Product synchronization
Fixed a bug if a specific product category setting was missing in the system configuration, product synchronization from Shopify would fail with a null reference error.
*Sources: [oms#451](https://github.com/hotwax/oms/pull/451)*

### Data integrity
HotWax now supports a safe subset of HTML and handles special characters in order notes and product attributes more effectively. This helps your notes and product details display correctly across the system without data loss.
*Sources: [oms#448](https://github.com/hotwax/oms/pull/448)*
