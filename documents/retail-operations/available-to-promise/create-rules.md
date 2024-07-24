# Create Rules

Retailers have the flexibility to configure product-related settings based on their unique requirements. By default, safety stocks and thresholds are set to zero, and shipping and store pickups are permitted for all products across all facilities and channels. Retailers can establish the following rules to modify inventory-specific configurations as needed:

## Threshold

To avoid overselling due to inventory inaccuracies, merchandisers prefer not to promise all available inventory to the online sales channel. They maintain a buffer stock, known as an Inventory Threshold, at the network level before promising inventory online.

Here’s how retailers can set up thresholds for their products:

1. Click the `Add` button on the `Threshold` page, located at the bottom right corner.
2. Enter the name of the rule and the threshold you want to set for the products.
3. Select the relevant channel for which you want to set the threshold. For example, if you sell on both Shopify and Amazon, you can set different thresholds for each channel by setting up different rules. Inventory channels can be created from the Inventory Channels page.
4. Alternatively, turn on the toggle to `select all channels`. Since thresholds are set at the global or network level, selecting specific facilities is not an option in the `ATP` app
5. Include or exclude products by tags or features.
6. Click the `Save` icon to save the rule.

{% embed url ="https://youtu.be/37P7AzYqpFQ" %} Threshold Rule {% endembed %}


## Safety Stock

Retailers can set safety stock for each product in each store to mitigate the risk of unforeseen inventory issues and control the amount of inventory reserved for walk-in customers. Unlike thresholds, safety stocks are managed at the facility level, not the company level, and are not set on the channels but on the facilities.

Here’s how retailers can set up safety stocks in the `ATP` app:

1. Click the `Add` button on the `Safety Stock` page, located at the bottom right corner.
2. Enter the name of the rule and the safety stock amount you want to set for the product.
3. Include or exclude the required facility group by clicking the `Add` button on the card. Alternatively, turn on the toggle to `select all facilities`.
4. Include or exclude products by tags or features.
5. Click the `Save` icon to save the rule.

{% embed url ="https://youtu.be/bz7r8SWEJsY" %} Safety Stock Rule {% endembed %}

## Store Pickup Rule

Retailers offering store pickup often need to configure BOPIS (Buy Online, Pick Up In Store) for their products without an all-or-nothing approach. For example, retailers selling optical frames may only offer BOPIS from stores with an optician available due to legal regulations. In such cases, retailers need to disable BOPIS fulfillment for specific stores while keeping it available for others.

Here’s how retailers can configure product-specific rules for BOPIS:

1. Select whether to configure store pickup by facility or by channel and navigate to the relevant tab on the `Store Pickup` page.
2. Add the name of the rule and configure the store pickup rule. Store pickup is enabled or disabled for all products based on the facility group. Retailers only need to create the rule to selectively enable or disable specific products from those facility groups.
3. Select the facility or channel as per the business requirement.
4. Include or exclude products and save the rule.

To quickly enable or disable store pickup for all products from a facility, retailers can navigate to the `Facilities` tab and toggle the facility groups on or off.

{% embed url ="https://youtu.be/VU6rwsfB57Q" %} Store Pickup Rule {% endembed %}

## Shipping Rule

Retailers may have products that can only be fulfilled from specific facilities, such as bespoke jewelry or engraved products that require specific capabilities. Therefore, the fulfillment of such products needs to be disabled from other facilities.

Retailers can set up shipping rules by facility or by channels, similar to store pickup rules.

Additionally, retailers can set the maximum order capacity for their stores by navigating to the `Facility` tab.


{% embed url ="https://youtu.be/WHNcLP3_YIU" %} Shipping Rule {% endembed %}

{% hint style="info" %} Create a default facility and channel rule for all ATP rules to ensure that if a created rule is disabled, the rule configurations will get back to default {% endhint %}


