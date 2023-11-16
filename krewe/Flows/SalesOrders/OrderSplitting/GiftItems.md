# Gift Items

Gift items are added to an order directly from Shopify when the order is captured. During allocation, gift items will only be allocated to a fulfillment location if a standard order item from the same order is also being allocated to the same fulfillment location, ensuring that gift items are never shipped alone.

If a gift item is part of an order with only pre-order items, then the gift item will automatically be held from fulfillment until at least one standard item is available to fulfill.

During fulfillment, if an order needs to be rejected and reallocated, the fulfillment staff will manually reject the gift item to ensure it’s not shipped alone.

To set up a gift product, it needs to be tagged in Shopify as a “gift”. Products with the tag “gift” and order item value of $0.00 will not be allocated independently in HotWax Commerce.
