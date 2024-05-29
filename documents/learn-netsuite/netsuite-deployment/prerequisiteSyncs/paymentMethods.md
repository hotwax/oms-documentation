---
description: >-
  Facilitate seamless order synchronization by configuring payment methods in
  HotWax Commerce and mapping them with eCommerce platforms and NetSuite.
---

# Payment Methods

Before order sync can happen, payment methods need to be set up in HotWax Commerce and then mapped with eCommerce and NetSuite. This needs to be setup in the integration layer so prepare a mapping table in a spreadsheet and share it with the integration setup team internally.

**Example mapping:**

| HotWax ID                | Netsuite Value     |
| ------------------------ | ------------------ |
| EXT\_SHOP\_ECOM\_GFTCRD  | Gift Card          |
| EXT\_SHOP\_GFT\_CARD     | Gift Card          |
| EXT\_SHOP\_MANUAL        | Shopify Payment    |
| EXT\_SHOP\_ DIRECT       | Shopify Payment    |
| EXT\_SHOP\_CASH\_ON\_DEL | Shopify Payment    |
| EXT\_SHOP\_EXG\_CRD      | EXCHANGE CREDIT    |
| EXT\_SHOP\_AMZN\_MP      | Amazon Marketplace |
| EXT\_SHOP\_AFTRPAY\_NA   | AfterPay           |
| EXT\_SHOP\_CARD          | Shopify Payment    |
| EXT\_SHOP\_PAY\_INSTALL  | ShopPay            |
