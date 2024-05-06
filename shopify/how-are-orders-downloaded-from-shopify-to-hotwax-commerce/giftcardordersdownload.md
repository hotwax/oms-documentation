# Gift Cards Order Download

HotWax Commerce downloads both physical and digital gift cards orders from Shopify with the `Import Orders` job. This process remains straightforward for gift cards orders, just as it does for other orders.

Learn more about [order download from Shopify to HotWax Commerce](https://docs.hotwax.co/integration-resources-1/how-are-orders-downloaded-from-shopify-to-hotwax-commerce)

The distinction lies in how gift cards are fulfilled based on their configured product type in HotWax Commerce.

Retailers configure both physical and digital gift cards with the product type `GIFT CARD` in Shopify. When retailers offer only one type of gift card on Shopify, HotWax Commerce decides whether it should be auto-completed or if it requires actual fulfillment, based on its specified type.

For example, if the retailer chooses to map the GIFT CARD Shopify product type to `DIGITAL` type products in the HotWax Commerce, then HotWax Commerce automatically marks gift card order items as “Completed” as soon as they’re imported because these gift cards do not require actual fulfillment.

Alternatively, if the retailer chooses to map the GIFT CARD Shopify product type to `FINISHED GOODS` type products in HotWax Commerce, then HotWax Commerce routes them to the optimal fulfillment location.

Some of the retailers we work with offer both physical and digital gift cards which have product type as `GIFT CARD` in Shopify. In such cases, gift cards product type is not set up as either `DIGITAL` or `FINISHED GOODS` but are specifically set up as the `GIFT_CARD` product type in HotWax Commerce.

In this setup, digital gift cards are configured for auto-fulfillment directly in Shopify, while physical gift cards require the traditional fulfillment process.
