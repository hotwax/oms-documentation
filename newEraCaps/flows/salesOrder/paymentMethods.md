---
description: >-
  Gain insights into how payment processing is managed by New Era Caps,
  including redirected links and specific gateway specifications, ensuring
  seamless transactions for customers.
---

# Payment Methods

This document contains all the payment methods used by New Era Caps.

Other than the commonly used Shopify payment methods, New Era Caps uses Soft Bank, Amazon Pay and Paidy.

If the payment processing is done on a redirected link, then the payment processing is not handled by Shopify so their gateway also needs to be specified.

```xml
<PaymentMethodType description="Ext Shopify Payment" paymentMethodTypeId="EXT_SHP_SHPFY_PYMT"/>

<PaymentMethodType description="Softbank Payment" paymentMethodTypeId="EXT_SHP_SFTBNK_PYMT"/>

<PaymentMethodType description="Amazon Pay" paymentMethodTypeId="EXT_SHP_AMZN_PAY"/>

<PaymentMethodType description="Paidy" paymentMethodTypeId="EXT_SHP_ PAIDY"/>
```

**Payment mapping data**

```xml

<ShopifyShopTypeMapping mappedKey="shopify_payments" mappedTypeId="SHOPIFY_PAYMENT_TYPE" mappedValue="EXT_SHP_SHPFY_PYMT" shopId="SHOP"/>

<ShopifyShopTypeMapping mappedKey="楽天ペイ - SBPS" mappedTypeId="SHOPIFY_PAYMENT_TYPE" mappedValue="EXT_SHP_SFTBNK_PYMT" shopId="SHOP"/>

<ShopifyShopTypeMapping mappedKey="Amazon Pay" mappedTypeId="SHOPIFY_PAYMENT_TYPE" mappedValue="EXT_SHP_AMZN_PAY" shopId="SHOP"/>

<ShopifyShopTypeMapping mappedKey="あと払い（ペイディ)" mappedTypeId="SHOPIFY_PAYMENT_TYPE" mappedValue="EXT_SHP_PAIDY" shopId="SHOP"/>

```

\*\* Payments types from shopify\*\*

| Payment Keys                   | Description           |
| ------------------------------ | --------------------- |
| shopify sbペイメント sbps           | Prepaid (Credit Card) |
| 代金引換 or cash on delivery (cod) | Cash on Delivery      |
| amazon                         | Amazon Pay            |
| paidy or ペイディ                  | Paidy                 |
