# Payment Method Mappings
This page contains the payment method mappings for Shopify <> HotWax <> NetSuite

## How they're setup in HotWax
Because payment methods are not frequently changed, their NetSuite mappings are not available to edit from a UI. Instead they are stored in the integration layer between the systems.

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
  <summary>Click to expand XML Data</summary>
```
<PaymentMethodType description="Ext Ecomm giftcard" paymentMethodTypeId="EXT_SHOP_ECOM_GFTCRD"/>
<PaymentMethodType description="Ext Gift Card" paymentMethodTypeId="EXT_SHOP_GFT_CARD"/>
<PaymentMethodType description="Ext manual" paymentMethodTypeId="EXT_SHOP_MANUAL"/>
<PaymentMethodType description="Ext direct" paymentMethodTypeId="EXT_SHOP_DIRECT"/>
<PaymentMethodType description="Ext exchange-credit" paymentMethodTypeId="EXT_SHOP_EXG_CRD"/>
<PaymentMethodType description="Ext amazon_marketplace" paymentMethodTypeId="EXT_SHOP_AMZN_MP"/>
<PaymentMethodType description="Ext card" paymentMethodTypeId="EXT_SHOP_CARD"/>
```
</details>