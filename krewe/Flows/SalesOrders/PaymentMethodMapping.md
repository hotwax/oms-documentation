# Payment Method Mappings
This page contains the payment method mappings for Shopify <> HotWax <> NetSuite

## How they're setup in HotWax
Because payment methods are not frequently changed, their NetSuite mappings are not available to edit from a UI. Instead they are stored in the integration layer between the systems.

In case a payment method in Shopify and HotWax is not mapped to a payment method in NetSuite, the integration layer will fall back to a `DEFAULT` payment method. As of November, this fallback payment method is mapped to “Shopify Payment” in NetSuite.

## Mappings
| Shopify Value            | HotWax ID               | Netsuite Value        |
|--------------------------|-------------------------|-----------------------|
| Ecomm giftcard           | EXT_SHOP_ECOM_GFTCRD    | Gift Card             |
| gift_card                | EXT_SHOP_GFT_CARD       | Gift Card             |
| manual                   | EXT_SHOP_MANUAL         | Shopify Payment       |
| direct                   | EXT_SHOP_ DIRECT        | Shopify Payment       |
| cash                     | EXT_SHOP_CASH_ON_DEL    | Shopify Payment       |
| exchange-credit          | EXT_SHOP_EXG_CRD        | EXCHANGE CREDIT       |
| amazon_marketplace       | EXT_SHOP_AMZN_MP        | Amazon Marketplace    |
| afterpay_north_america   | EXT_SHOP_AFTRPAY_NA     | AfterPay              |
| card                     | EXT_SHOP_CARD           | Shopify Payment       |
| shopify_installments     | EXT_SHOP_PAY_INSTALL    | ShopPay               |

## XML Data

<details>
  <summary>Payment Methods in HotWax</summary>

```xml
<PaymentMethodType description="Ext Ecomm giftcard" paymentMethodTypeId="EXT_SHOP_ECOM_GFTCRD"/>
<PaymentMethodType description="Ext Gift Card" paymentMethodTypeId="EXT_SHOP_GFT_CARD"/>
<PaymentMethodType description="Ext manual" paymentMethodTypeId="EXT_SHOP_MANUAL"/>
<PaymentMethodType description="Ext direct" paymentMethodTypeId="EXT_SHOP_DIRECT"/>
<PaymentMethodType description="Ext exchange-credit" paymentMethodTypeId="EXT_SHOP_EXG_CRD"/>
<PaymentMethodType description="Ext amazon_marketplace" paymentMethodTypeId="EXT_SHOP_AMZN_MP"/>
<PaymentMethodType description="Ext card" paymentMethodTypeId="EXT_SHOP_CARD"/>
```
</details>


<details>
<details>
<summary>Shopify Shop Payment Methods</summary>

```xml
<ShopifyShopTypeMapping mappedKey="amazon_marketplace" mappedTypeId="SHOPIFY_PAYMENT_TYPE" mappedValue="EXT_SHOP_AMZN_MP" shopId="SHOP"/>
<ShopifyShopTypeMapping mappedKey="afterpay_north_america" mappedTypeId="SHOPIFY_PAYMENT_TYPE" mappedValue="EXT_SHOP_AFTRPAY_NA" shopId="SHOP"/>
<ShopifyShopTypeMapping mappedKey="card" mappedTypeId="SHOPIFY_PAYMENT_TYPE" mappedValue="EXT_SHOP_CARD" shopId="SHOP"/>
<ShopifyShopTypeMapping mappedKey="cash" mappedTypeId="SHOPIFY_PAYMENT_TYPE" mappedValue="EXT_SHOP_CASH_ON_DEL" shopId="SHOP"/>
<ShopifyShopTypeMapping mappedKey="direct" mappedTypeId="SHOPIFY_PAYMENT_TYPE" mappedValue="EXT_SHOP_DIRECT" shopId="SHOP"/>
<ShopifyShopTypeMapping mappedKey="Ecomm giftcard" mappedTypeId="SHOPIFY_PAYMENT_TYPE" mappedValue="EXT_SHOP_ECOM_GFTCRD" shopId="SHOP"/>
<ShopifyShopTypeMapping mappedKey="exchange-credit" mappedTypeId="SHOPIFY_PAYMENT_TYPE" mappedValue="EXT_SHOP_EXG_CRD" shopId="SHOP"/>
<ShopifyShopTypeMapping mappedKey="gift_card" mappedTypeId="SHOPIFY_PAYMENT_TYPE" mappedValue="EXT_SHOP_GFT_CARD" shopId="SHOP"/>
<ShopifyShopTypeMapping mappedKey="manual" mappedTypeId="SHOPIFY_PAYMENT_TYPE" mappedValue="EXT_SHOP_MANUAL" shopId="SHOP"/>
<ShopifyShopTypeMapping mappedKey="shopify_installments" mappedTypeId="SHOPIFY_PAYMENT_TYPE" mappedValue="EXT_SHOP_PAY_INSTALL" shopId="SHOP"/>
```
</details>

<details>
<summary>Integration Mapping Data</summary>

```xml
<IntegrationTypeMapping integrationTypeId="NETSUITE_PMT_MTHD" mappingKey="EXT_SHOP_ECOM_GFTCRD" mappingValue="13" description="Gift Card"/>
<IntegrationTypeMapping integrationTypeId="NETSUITE_PMT_MTHD" mappingKey="EXT_SHOP_GFT_CARD" mappingValue="13" description="Gift Card"/>
<IntegrationTypeMapping integrationTypeId="NETSUITE_PMT_MTHD" mappingKey="EXT_SHOP_MANUAL" mappingValue="8" description="Shopify Payment"/>
<IntegrationTypeMapping integrationTypeId="NETSUITE_PMT_MTHD" mappingKey="EXT_SHOP_DIRECT" mappingValue="8" description="Shopify Payment"/>
<IntegrationTypeMapping integrationTypeId="NETSUITE_PMT_MTHD" mappingKey="EXT_SHOP_CASH_ON_DEL" mappingValue="8" description="Shopify Payment"/>
<IntegrationTypeMapping integrationTypeId="NETSUITE_PMT_MTHD" mappingKey="EXT_SHOP_EXG_CRD" mappingValue="12" description="EXCHANGE CREDIT"/>
<IntegrationTypeMapping integrationTypeId="NETSUITE_PMT_MTHD" mappingKey="EXT_SHOP_AMZN_MP" mappingValue="16" description="Amazon Marketplace"/>
<IntegrationTypeMapping integrationTypeId="NETSUITE_PMT_MTHD" mappingKey="EXT_SHOP_AFTRPAY_NA" mappingValue="17" description="AfterPay"/>
<IntegrationTypeMapping integrationTypeId="NETSUITE_PMT_MTHD" mappingKey="EXT_SHOP_CARD" mappingValue="8" description="Shopify Payment"/>
<IntegrationTypeMapping integrationTypeId="NETSUITE_PMT_MTHD" mappingKey="EXT_SHOP_PAY_INSTALL" mappingValue="22" description="ShopPay"/>
<IntegrationTypeMapping integrationTypeId="NETSUITE_PMT_MTHD" mappingKey="DEFAULT" mappingValue="8" description="Shopify Payment"/>
```
</details>
