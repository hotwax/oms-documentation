# Gift Cards
Frank and Oak has two types of gift cards, physical and digital. Currently both of these gift cards are configured with the product type “GIFT CARD” in Shopify. Usually retailers have one type of gift card and based on the type, the OMS decides if it needs to be auto completed or if it requires actual fulfillment. 

If the retailer chooses to map the GIFT CARD Shopify product type to `digital` type products in the OMS, then the OMS will automatically mark gift card order items as completed as soon as they’re imported into the OMS.

To support UCG’s situation where both products are typed as GIFT CARDs, but some are digital and some are physical, during setup HotWax will have to manually disable the “isDigital” flag on the gift cards that are not digital gift cards and actually require fulfillment.
