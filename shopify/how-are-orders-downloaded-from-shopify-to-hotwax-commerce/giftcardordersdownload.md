# Gift Cards Order Download

The process of downloading orders from Shopify for both digital and physical products remains straightforward like any other order item.

HotWax Commerce downloads physical and digital gift cards orders from Shopify in the same manner as other order with the `Import Orders` job.

Learn more about [order download from Shopify to HotWax Commerce](https://docs.hotwax.co/integration-resources-1/how-are-orders-downloaded-from-shopify-to-hotwax-commerce)

The distinction lies in how gift cards are fulfilled based on their configured product type in HotWax Commerce.

Retailers configure both physical and digital gift cards with the product type `GIFT CARD` in Shopify. When retailers offer only one type of gift card on Shopify, HotWax Commerce decides whether it should be auto-completed or if it requires actual fulfillment, based on its specified type.

For example, if the retailer chooses to map the GIFT CARD Shopify product type to `DIGITAL` type products in the HotWax Commerce, then HotWax Commerce automatically marks gift card order items as “Completed” as soon as they’re imported because these gift cards do not require actual fulfillment.

Alternatively, if the retailer chooses to map the GIFT CARD Shopify product type to `FINISHED GOODS` type products in HotWax Commerce, then HotWax Commerce routes them to the optimal fulfillment location.

Some of the retailers we work with offer both physical and digital gift cards which have product type as `GIFT CARD` in Shopify. In such cases, gift cards product type is not set up as either `DIGITAL` or `FINISHED GOODS` but are specifically set up as the `GIFT_CARD` product type in HotWax Commerce.

In this setup, digital gift cards are configured for auto-fulfillment directly in Shopify, while physical gift cards require the traditional fulfillment process. Here's how it works:

## Digital gift cards:

When customers order a digital gift card on Shopify, after the order is created, Shopify immediately auto fulfills the order, assigns a serial number to digital gift card, loads the value to activate the gift card and consequently, when HotWax Commerce downloads that order from Shopify, it is automatically marked as “Completed”.

Customers receive the gift card in their registered email along with the serial number that can be used to redeem the gift card.

## Physical gift cards:

Orders with physical gift cards are not auto-fulfilled in Shopify. Therefore, HotWax Commerce routes them through the traditional fulfillment process.