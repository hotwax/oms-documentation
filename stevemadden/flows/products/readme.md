

Steve Madden uses `UPCA` as their primary product identifier when products are synced from Shopify to the OMS.

## Import products to HotWax

Shopify is the product master. HotWax imports the newly created products from Shopify using `createProductsFromShopify` job at an interval of 15 mins. 

## Recurate Products 

Products at times do not meet the quality standards set by the company and are termed as recurate products. Retailers add a recurate tag and sell them at a discounted price. 

OMS when importing the products checks if there is a recurate tag attached with it. OMS does not import such products. 
Since Hotwax does not import the recurate products, its orders  are not imported as well.

The `Import Products from Shopify` job checks the recurate tag on products and skips importing them if one is found. 



