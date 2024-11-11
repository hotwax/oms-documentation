# Inventory Synchronization of Gift Cards

## Physical Gift Cards

Physical gift cards have actual stock-keeping units and necessitate delivery to customers just like any other physical product. Oftentimes, retailers generate various variants of a gift card with different denominations, providing customers with a range of options to choose from.

It's crucial to understand that the gift cards with differing values, in fact, constitute a single physical product with inventory and therefore have a common SKU.

For example, a retailer offers a gift card product called "Gift Card" with a physical inventory of 100 units. This single product is listed online with different variants representing different denominations, such as $100, $150, $200, and so on.

When a customer purchases a $100 gift card variant, it's like they're selecting a portion of the available inventory, let's say 1 unit from the total 100 units. Similarly, if another customer chooses a $150 gift card variant, they're also selecting from the same pool of inventory, subtracting 1 unit from the total available.

So, regardless of the denomination chosen by the customer, the inventory is consumed from the same physical product - the "Gift Card" with 100 units. The retailer then credits the value of the chosen denomination to the gift card based on the customer's selection and activates the gift card in Shopify.

## Digital Gift Cards

Digital gift cards do not require physical inventory management as they are virtual products. Therefore, inventory tracking for digital gift cards is usually disabled on Shopify. This means they can be sold without limitations on quantity.

## Syncing Inventory from HotWax Commerce To Shopify

HotWax Commerce synchronizes the inventory of physical as well as digital gift cards just like regular products using both webhooks and the `Upload recent inventory change` job. This process remains straightforward for gift cards, just as it does for other products.

Learn more about [inventory synchronization](how-does-hotwax-commerce-ensure-accurate-inventory-is-synchronized-to-shopify/inventory-synchronization.md)
