# Shopfiy Mappings

There is some defualt mapping data that needs to be included when connecting a Shopify store to ensure that data flows smoothly between both systems with correct mappings.

If you're only using the default "SHOP" Shopify Shop ID, this data can be imported directly. However, for multiple Shopify stores, input the data individually for each store. The Shopify Shop ID will change and obtainable from the header of the View Shopify Shop page in OMS. Hint: The value in bigger font size.

**Product Type Mappings**
```
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

New Custom mappings can also be added from the the Shopify Shop Detail page.
