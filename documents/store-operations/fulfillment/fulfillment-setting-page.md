---
description: >-
  The Settings page displays all configuration options that store teams can use to manage order fulfillment as per their store operations.
---

# Settings Page

<div data-full-width="false">

<figure><img src="../.gitbook/assets/fulfillment application setting page .png" alt=""><figcaption></figcaption></figure>

</div>

## OMS

### Product Store

A Product Store represents a brand or a set of products. If your OMS is connected to multiple eCommerce brands selling different product collections, you can have separate Product Stores in HotWax Commerce.

<figure><img src="../.gitbook/assets/fulfillment.hotwax 2.png" alt="" width="375"><figcaption><p>Select Product store</p></figcaption></figure>

### Facility

The Fulfillment App allows authorized users to select a facility to operate from, determining the visibility of orders, inventory, and other configuration data.

<figure><img src="../.gitbook/assets/facility-selection-modal.png" alt="" width="375"><figcaption><p>Select Facility</p></figcaption></figure>

### Online Order Fulfillment

Adjust the order fulfillment capacity for your facility. If you set the fulfillment capacity to 0, new orders will not be allocated to this facility. Leave this field empty if the fulfillment capacity of this facility is unlimited. Setting fulfillment capacity to No capacity disables new orders from being allocated to this facility. Select Unlimited Capacity if this facility's fulfillment capacity is unrestricted. You can also select a custom option to set the capacity limit.

<figure><img src="../.gitbook/assets/fulfillment.hotwax 4.png" alt="" width="375"><figcaption><p>Online Order Fulfillment</p></figcaption></figure>

### Sell Inventory Online

Determine whether the inventory of the store should be accessible for online sales or not. This setting allows you to specify whether the products available in your physical store should also be available for purchase through online channels or not. If enabled, customers browsing your online store will be able to see and purchase items from your inventory. If disabled, the products will not be listed for online sale, restricting purchases to in-store transactions only.

## App

### Product Identifier

This setting allows selection of a primary and secondary product identifier, such as product ID or SKU, to control how products are displayed in the app.

<figure><img src="../.gitbook/assets/fulfillment.hotwax 5.png" alt="" width="375"><figcaption><p>Choose Product identifier</p></figcaption></figure>

### Timezone

The selected timezone ensures that all scheduled actions, like automatic jobs or tasks, run at the correct local time. 

<figure><img src="../.gitbook/assets/fulfillment.hotwax 6.png" alt="" width="375"><figcaption><p>Select timezone</p></figcaption></figure>

### Language

Choose the preferred display language. This setting controls the language used throughout the interface.

<figure><img src="../.gitbook/assets/fulfillment.hotwax 8.png" alt="" width="375"><figcaption><p>Select Language</p></figcaption></figure>

### Additional Documents

#### Shipping Label and Packing Slip Settings

These settings control whether shipping labels and packing slips are printed along with each shipment by default.

##### Generate Shipping Label  
A shipping label is used by the delivery carrier to send the package to the customer’s address. The setting allows deciding whether to print packing slips for shipments or not.  

##### Generate Packing Slip  
A packing slip shows the list of items in an order and helps match delivered products with what was ordered. This setting controls whether shipping labels should be printed for the selected location.  

<figure><img src="../.gitbook/assets/fulfillment.hotwax 7.png" alt="" width="375"><figcaption><p>Additional Documents</p></figcaption></figure>

### Notification Preference
This setting controls whether notifications should be sent when a shipping order is created. 

### Force Scan
This setting makes sure that products are scanned before being marked as shipped. If a barcode doesn't match, the product name is used to identify the item. It also lets the staff choose which product detail, like SKU, should be used for scanning.

### Allow Partial Rejections
When [Partial Rejection is enabled](rejection.md), individual items get rejected from a facility without impacting the rest of the order.

### Allow Collateral Rejection
[Collateral Rejection](rejection.md) helps manage situations where the product in a rejected order item is part of multiple pending orders at a facility. When enabled, rejecting an item in one order automatically rejects the same product in all other pending orders.

### Affect QOH on Rejection
[The Affect QOH on Rejection](rejection.md) toggle provides control over inventory adjustments during order rejections.

