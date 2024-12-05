---
description: >-
  This guide outlines how to efficiently manage carriers and shipment methods
  in  HotWax Commerce, covering tasks such as creating carriers,  linking
  shipment methods, and enabling methods for brands.
---

# Map Carrier Shipment Methods

In HotWax Commerce, carriers and shipment methods are used to define the delivery preference linked to an order.

1. **Carriers**: Carriers represent the shipping companies or services responsible for physically transporting the shipments like FedEx or UPS.
2. **Shipment Methods**: Shipment methods, on the other hand, represent the specific methods used for shipping goods, such as ground shipping, express shipping or standard delivery.

Carriers typically offer multiple shipment methods to customers for delivering packages. For example, a carrier like FedEx may offer ground shipping, overnight delivery, and international shipping as different shipment methods. In HotWax Commerce, these shipment methods are associated with a carrier, allowing businesses to configure and manage various shipping options offered by each carrier.

One shipment method can also be used with multiple carriers. This flexibility allows businesses to offer customers a range of shipping options while leveraging different carriers based on factors such as cost, delivery speed, reliability, and geographic coverage.

For example, the "express shipping" method could be offered by multiple carriers such as FedEx, UPS, and DHL. Each carrier may have its own pricing, service level agreements, and delivery networks, but they all provide an express shipping service that businesses can offer to their customers.

## Manage Carriers and Shipment Methods

To manage carriers and shipment methods in HotWax Commerce, navigate to the "Carriers and Shipping Methods" page in the Fulfillment app.

Hint: This page is permission-driven. Make sure that you have (permissionId) added to your user before trying to open this page.

### Carriers

To begin managing carriers and shipment methods, you'll first need to select a carrier to manage.

**Carrier integrations**

Retailers can configure carriers in HotWax Commerce even if they don't have an API integration setup with them. If a carrier does not have an API integration setup, it will show up with the label "Offline label" indicating that the label will need to be generated outside of HotWax Commerce.

#### Create a new carrier

If the carrier you want to use is not already set up, you can create a new carrier by clicking on the "+" button on the bottom right. On the `Create Carrier` page you'll be prompted to name your carrier and create a unique ID for them. Make sure this ID is easy to read since you may need to reference it later when using the OMS. The unique ID also much be less that 20 characters in length.

Once you're ready, click on the "Setup Methods" button. This will set up your carrier with the provided details and navigate you to the next step where you can link the methods this carrier services.

#### Edit carrier name

While a carrier ID cannot be edited after creation, its name can. To edit a carrier's name, click on the edit button next to their name on the carrier detail page.

### Shipment methods

To link a shipment method to a carrier, select the checkbox on the method.

You can also focus your view to just see methods set up for a carrier by enabling the filter "Only methods for this carrier" at the top right.

When configuring a shipment method with a carrier, there are two optional attributes that can be added.

**Delivery Days:** Tells the OMS routing engine how fast this method is expected to be delivered by this carrier. During routing, if orders are prioritized by shipping method, the routing engine will attempt to allocate orders with lower delivery days first. **Carrier Code:** HotWax Commerce will use the carrier code to communicate the method for which to generate a label when integrated using APIs. This code will be provided by the carrier. If integrating with NetSuite for fulfillment, this code is mapped to the internal ID of the method setup in NetSuite and is used when syncing orders.

#### Create shipment method

To create a new method, click on the "+" button on the bottom right. Give the new method a name and a unique ID. Similar to the carrier ID, this name should be easy to understand and no more than 20 characters long. Click on the save button to create the method.

Hint: avoid using carrier details in the method name since they can be linked to other carriers later on.

By default when you create a new method it is linked to the carrier where you created it from, but it will be visible on all carrier pages since shipment methods are not specific to a carrier.

#### Re-order shipment methods

Commonly used methods can be placed at the top by manually editing the sequence of shipment methods.

Hint: The sequence of methods is shared across all carriers.

Click on the `more options` menu at the end of a shipment method and select "Edit sequence". This will open a modal where you can drag and drop shipment methods to change their sequence. Once you're satisfied with the sequence, click on the save button on the bottom right.

Danger: clicking on the `x` close button on the top left will discard any changes you've made.

## Enable Carrier Shipment Methods for brands

HotWax Commerce has intricate support for managing multiple brands through OMS. While a carrier may be set up for many shipment methods, not all brands set up in the OMS may service those methods. To ensure accurate rate-shopping during label generation, retailers can specify which methods individual brands support. Each brand, set up as a Product Store, can be selected from the tabs next to the `Methods` tab.

To add a method to a Product Store, select the checkbox on that method. There are also two additional configurations available when setting up a method for a Product Store.

**Require tracking codes:** To enforce label generation and tracking codes linked to a shipment, this setting should be enabled. When this is enabled, orders cannot be shipped from the Fulfillment app without linking a corresponding tracking code to them. Additionally, the Ship Packed Orders job won't ship packed orders for this method if they're missing tracking info.

Hint: This setting is effective on orders that are processed after it's configured.

## Facilities

The facilities section of the carrier settings allows retailers to manage which facilities are allowed to generate labels for this carrier. Select the checkbox on each facility that should be allowed to generate labels for this carrier.

{% embed url="https://youtu.be/rLighBiqP1U" %}

