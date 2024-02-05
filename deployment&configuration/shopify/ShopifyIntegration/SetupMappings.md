# Shopfiy Mappings

{% hint style='info' %}
After incorporating the default mapping, please add any custom mappings as needed. These specific mappings should be documented in the retailer's implementation guide for reference.
{% endhint %}

Some default mapping data needs to be included when connecting a Shopify store to ensure that data flows smoothly between both systems with correct mappings.

If you're only using the default `SHOP` Shopify Shop ID, this data can be imported directly. However, for multiple Shopify stores, input the data individually for each store. The Shopify Shop ID will change and be obtainable from the header of the View Shopify Shop page in OMS. 

**To import mappings, adhere to the following structured steps:**

1. Navigate to OMS web tools at https://{instanceName}.hotwax.io/webtools/control/main.
2. Open the Data Import page by selecting `Import/Export`.
3. Choose `XML Data Import` from the available options.
4. Input data into the "Complete XML document" section, encapsulated between `<entity-engine-xml>` and `</entity-engine-xml>`.
5. Click the `Import` button to initiate the import process.
6. Upon successful completion, a confirmation message will be displayed below, indicating that the data has been imported successfully.

## The default mappings to be imported are as follows:

{% hint style='warning' %}
Modify the `shopId` for each Shopify Shop when importing data.
{% endhint %}

**Product Type Mappings**
```
<ShopifyShopTypeMapping shopId="SHOP" mappedTypeId="SHOPIFY_PRODUCT_TYPE" mappedKey="Gift Cards" mappedValue="GIFT_CARD"/>
<ShopifyShopTypeMapping shopId="SHOP" mappedTypeId="SHOPIFY_PRODUCT_TYPE" mappedKey="donation" mappedValue="DONATION"/>
<ShopifyShopTypeMapping shopId="SHOP" mappedTypeId="SHOPIFY_PRODUCT_TYPE" mappedKey="Gift Cards" mappedValue="DIGITAL_GOOD"/>
<ShopifyShopTypeMapping shopId="SHOP" mappedTypeId="SHOPIFY_PRODUCT_TYPE" mappedKey="Gift Card" mappedValue="DIGITAL_GOOD"/>
<ShopifyShopTypeMapping shopId="SHOP" mappedTypeId="SHOPIFY_PRODUCT_TYPE" mappedKey="Loyalty Card" mappedValue="DIGITAL_GOOD"/>
```

**Channel Mappings**
```
<ShopifyShopTypeMapping shopId="SHOP" mappedTypeId="SHOPIFY_ORDER_SOURCE" mappedKey="exchange" mappedValue="EXCHG_SALES_CHANNEL"/>
<ShopifyShopTypeMapping shopId="SHOP" mappedTypeId="SHOPIFY_ORDER_SOURCE" mappedKey="shopify_draft_order" mappedValue="CSR_SALES_CHANNEL"/>
<ShopifyShopTypeMapping shopId="SHOP" mappedTypeId="SHOPIFY_ORDER_SOURCE" mappedKey="pos" mappedValue="POS_SALES_CHANNEL"/>
<ShopifyShopTypeMapping shopId="SHOP" mappedTypeId="SHOPIFY_ORDER_SOURCE" mappedKey="iphone" mappedValue="PHONE_SALES_CHANNEL"/>
<ShopifyShopTypeMapping shopId="SHOP" mappedTypeId="SHOPIFY_ORDER_SOURCE" mappedKey="android" mappedValue="PHONE_SALES_CHANNEL"/>
```

**Payment Methods**
```
<ShopifyShopTypeMapping shopId='SHOP' mappedTypeId='SHOPIFY_PAYMENT_TYPE' mappedValue='EXT_SHOP_AFTRPAY' mappedKey='afterpay'/>
<ShopifyShopTypeMapping shopId='SHOP' mappedTypeId='SHOPIFY_PAYMENT_TYPE' mappedValue='EXT_SHOP_AFTRPAY_NA' mappedKey='afterpay_north_america'/>
<ShopifyShopTypeMapping shopId='SHOP' mappedTypeId='SHOPIFY_PAYMENT_TYPE' mappedValue='EXT_SHOP_AMEX' mappedKey='American Express'/>
<ShopifyShopTypeMapping shopId='SHOP' mappedTypeId='SHOPIFY_PAYMENT_TYPE' mappedValue='EXT_SHOP_DISCOVER' mappedKey='Discover'/>
<ShopifyShopTypeMapping shopId='SHOP' mappedTypeId='SHOPIFY_PAYMENT_TYPE' mappedValue='EXT_SHOP_KLARNA' mappedKey='Klarna'/>
<ShopifyShopTypeMapping shopId='SHOP' mappedTypeId='SHOPIFY_PAYMENT_TYPE' mappedValue='EXT_SHOP_MASTERCARD' mappedKey='Mastercard'/>
<ShopifyShopTypeMapping shopId='SHOP' mappedTypeId='SHOPIFY_PAYMENT_TYPE' mappedValue='EXT_SHOP_PAYPAL' mappedKey='paypal'/>
```

