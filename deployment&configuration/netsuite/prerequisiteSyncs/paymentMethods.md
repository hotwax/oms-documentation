# Payment Methods

Before order sync can happen, payment methods need to be set up in HotWax Commerce and then mapped with eCommerce and NetSuite. This needs to be setup in the integration layer so prepare a mapping table in a spreadsheet and share it with the integration setup team internally.

**Example mapping:**

| HotWax ID               | Netsuite Value        |
|-------------------------|-----------------------|
| EXT_SHOP_ECOM_GFTCRD    | Gift Card             |
| EXT_SHOP_GFT_CARD       | Gift Card             |
| EXT_SHOP_MANUAL         | Shopify Payment       |
| EXT_SHOP_ DIRECT        | Shopify Payment       |
| EXT_SHOP_CASH_ON_DEL    | Shopify Payment       |
| EXT_SHOP_EXG_CRD        | EXCHANGE CREDIT       |
| EXT_SHOP_AMZN_MP        | Amazon Marketplace    |
| EXT_SHOP_AFTRPAY_NA     | AfterPay              |
| EXT_SHOP_CARD           | Shopify Payment       |
| EXT_SHOP_PAY_INSTALL    | ShopPay               |