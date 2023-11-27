# Kit Products

{% hint style='info' %} To seamlessly import Kit products into OMS, ensure that the Shopify Config Access Scope is set to grant both read and write access to the Shopify shop.	
{% endhint %}

Krewe uses the Bundles app on Shopify to sell kit products. It has kit products setup in NetSuite where kit products will be fulfilled from when their allocated for fulfillment.

## Map Shopify 'Kit' product types

{% hint style='danger' %}
The Shopify product time value is **case sensitive**
{% endhint %}

```
<ShopifyShopTypeMapping mappedKey="KIT" mappedTypeId="SHOPIFY_PRODUCT_TYPE" mappedValue="MARKETING_PKG_PICK" shopId="SHOP"/>
```
