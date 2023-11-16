# Accessory Order Splitting

If accessories are configured for a product, whenever a new order is created in HotWax Commerce for it, its accessories will automatically be added to the order along with it. Whenever a product with accessories is allocated to a fulfillment location, its accessory items will also be allocated along with it to ensure it’s shipped with the parent product. HotWax Commerce will never attempt to split accessory items from their parent product.

For a pre-order parent product, its accessories, like a sunglasses case, will be held from fulfillment until the pre-order product is also allocated for fulfillment.

During fulfillment, if a product that has accessories is rejected, the accessories of that product will also be identified and automatically be sent for reallocation to ensure that they are not shipped separately.

To configure accessories for products, users will be able to prepare a CSV where parent products will be linked with accessory (child) products that need to be added to an order if the parent product is found in the order upon import. If multiple products are linked to a parent product, all of the linked accessories will be added to that order. Linked child products will be shown on the parent product’s PDP in HotWax Commerce where they can also be added and removed.