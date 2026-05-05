---
description: >-
  View data mappings between Shopify and HotWax Commerce
  with detailed instructions and default mappings.
---

# Data Mappings

{% hint style="info" %}
After incorporating the default mapping, please add any custom mappings as needed. These specific mappings should be documented in the retailer's implementation guide for reference.
{% End hint %}

Some default mapping data needs to be included when connecting a Shopify store to ensure that data flows smoothly between both systems with correct mappings.

If you're only using the default Shopify Shop ID, this data can be imported directly. However, for multiple Shopify stores, input the data individually for each store. The Shopify Shop ID will change and be obtainable from the header of the `View Shopify Shop` page in OMS.

**To import mappings, adhere to the following structured steps:**

1. Navigate to OMS web tools at https://{instanceName}.hotwax.io/webtools/control/main.
2. Open the Data Import page by selecting `Import/Export`.
3. Choose `XML Data Import` from the available options.
4. Input data into the "Complete XML document" section, encapsulated between `<entity-engine-xml>` and `</entity-engine-xml>`.
5. Click the `Import` button to initiate the import process.
6. Upon successful completion, a confirmation message will be displayed below, indicating that the data has been imported successfully.

## The default mappings to be imported are as follows

{% hint style="warning" %}
Replace the "SHOP-ID" for each Shopify Shop with your shop ID when importing data.
{% End hint %}

**Product Type Mappings**

```
<ShopifyShopTypeMapping shopId="SHOP-ID" mappedTypeId="SHOPIFY_PRODUCT_TYPE" mapped Key="Gift Cards" mapped Value="GIFT_CARD"/>
<ShopifyShopTypeMapping shop Id="SHOP-ID" mappedTypeId="SHOPIFY_PRODUCT_TYPE" mapped Key="donation" mapped Value="DONATION"/>
<ShopifyShopTypeMapping shop Id="SHOP-ID" mappedTypeId="SHOPIFY_PRODUCT_TYPE" mapped Key="Gift Cards" mapped Value="DIGITAL_GOOD"/>
<ShopifyShopTypeMapping shop Id="SHOP-ID" mappedTypeId="SHOPIFY_PRODUCT_TYPE" mapped Key="Gift Card" mapped Value="DIGITAL_GOOD"/>
<ShopifyShopTypeMapping shop Id="SHOP-ID" mappedTypeId="SHOPIFY_PRODUCT_TYPE" mapped Key="Loyalty Card" mappedValue="DIGITAL_GOOD"/>
```

**Channel Mappings**

```
<ShopifyShopTypeMapping shopId="SHOP-ID" mappedTypeId="SHOPIFY_ORDER_SOURCE" mapped Key="exchange" mapped Value="EXCHG_SALES_CHANNEL"/>
<ShopifyShopTypeMapping shop Id="SHOP-ID" mappedTypeId="SHOPIFY_ORDER_SOURCE" mapped Key="Shopify_draft_order" mapped Value="CSR_SALES_CHANNEL"/>
<ShopifyShopTypeMapping shop Id="SHOP-ID" mappedTypeId="SHOPIFY_ORDER_SOURCE" mapped Key="POS" mapped Value="POS_SALES_CHANNEL"/>
<ShopifyShopTypeMapping shop Id="SHOP-ID" mappedTypeId="SHOPIFY_ORDER_SOURCE" mapped Key="iPhone" mapped Value="PHONE_SALES_CHANNEL"/>
<ShopifyShopTypeMapping shop Id="SHOP-ID" mappedTypeId="SHOPIFY_ORDER_SOURCE" mapped Key="android" mapped Value="PHONE_SALES_CHANNEL"/>
```

**Payment Methods**

```
<ShopifyShopTypeMapping shopId='SHOP-ID' mappedTypeId='SHOPIFY_PAYMENT_TYPE' mapped Value='EXT_SHOP_AFTRPAY' mapped Key='Afterpay'/>
<ShopifyShopTypeMapping shop Id='SHOP-ID' mappedTypeId='SHOPIFY_PAYMENT_TYPE' mapped Value='EXT_SHOP_AFTRPAY_NA' mapped Key='Afterpay_north_America'/>
<ShopifyShopTypeMapping shop Id='SHOP-ID' mappedTypeId='SHOPIFY_PAYMENT_TYPE' mapped Value='EXT_SHOP_AMEX' mapped Key='American Express'/>
<ShopifyShopTypeMapping shop Id='SHOP-ID' mappedTypeId='SHOPIFY_PAYMENT_TYPE' mapped Value='EXT_SHOP_DISCOVER' mapped Key='Discover'/>
<ShopifyShopTypeMapping shop Id='SHOP-ID' mappedTypeId='SHOPIFY_PAYMENT_TYPE' mapped Value='EXT_SHOP_KLARNA' mapped Key='Klarna'/>
<ShopifyShopTypeMapping shop Id='SHOP-ID' mappedTypeId='SHOPIFY_PAYMENT_TYPE' mapped Value='EXT_SHOP_MASTERCARD' mapped Key='Mastercard'/>
<ShopifyShopTypeMapping shop Id='SHOP-ID' mappedTypeId='SHOPIFY_PAYMENT_TYPE' mapped Value='EXT_SHOP_PAYPAL' mappedKey='paypal'/>
```
