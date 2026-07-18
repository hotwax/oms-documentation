---
description: Help customers choose a new fulfillment option after a BOPIS item is rejected.
---

# Re-route Fulfillment

When a store rejects one or more items from a Buy Online Pick-Up In Store (BOPIS) order, the customer can receive a Re-route Fulfillment link. The options shown in that experience are controlled by the product-store `Order Edit Permissions` in the BOPIS app.

## Before you begin

In the BOPIS app, go to `Settings` > `Order Edit Permissions` and enable the customer actions that your product store supports. These can include changing the delivery method or address, choosing another pickup location, splitting items, requesting cancellation, and changing the shipment method.

## Re-route a rejected order

1. Reject the unavailable item from the BOPIS order.
2. The customer receives the rejection notification with the Re-route Fulfillment link.
3. The customer opens the link and reviews the available options for the rejected items.
4. The customer selects a new fulfillment option and submits the update.

The available actions depend on the product-store permissions and the inventory available at eligible locations.

## Choose a pickup location

When pickup-location editing is enabled, the experience suggests a location that can fulfill all the affected items. If no single location can fulfill every item, it suggests the nearest location with the most available items, using the original pickup location as the proximity reference.

### Allow item splitting

When `Order Item Split` is enabled, customers can select a different pickup location for each affected item. Updated items are grouped by their selected fulfillment location.

### Keep items together

When item splitting is not enabled, customers are shown pickup locations that can fulfill all affected items together. After a location is selected, the customer can review and edit that selection before submitting it.

## Handle items unavailable everywhere

Items that are unavailable at every eligible pickup location appear in an `Out of Stock` group. Customers can request cancellation for those items from the Re-route Fulfillment experience, including when the product store does not normally allow direct item cancellation.

## Change another fulfillment detail

Depending on the enabled permissions, customers can also update the delivery method, delivery address, or shipment method. They can request cancellation before fulfillment when that permission is enabled.

{% hint style="info" %}
The Re-route link is secured for the affected order. Do not share it outside the customer-support interaction for that order.
{% endhint %}
