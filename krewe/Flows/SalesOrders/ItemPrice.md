---
description: >-
  Learn how Krewe manages item prices efficiently through price levels, ensuring
  accurate pricing across various sales channels and seamless integration with
  NetSuite.
---

# Item Price

## What are Price Levels

Price levels are used to manage multiple prices for a product. This is useful when a product is priced differently based on conditions like sales channel. In NetSuite, you can set up different prices levels for each item and service. You can also enter an additional sales price for online items.

[Reference](\(https:/docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section\_N2181607.html#Using-Multiple-Pricing\))

## How they're setup in HotWax

The price level to be sent into NetSuite is set in a Product Store Setting with the ID "PRICE\_LEVEL\_NETSUITE" and this is set to "Base Price (MSRP)" by default. If Krewe wants to use a different price level at any point, they can change the value of this setting.

## XML Data

<details>

<summary>Price Level Setting</summary>

```xml
<Enumeration description="Price Level to be sent into Netsuite" enumId="PRICE_LEVEL_NETSUITE" enumName="Price Level Netsuite" enumTypeId="PROD_STR_STNG" />
<ProductStoreSetting fromDate="2023-06-22 05:24:22.82" productStoreId="STORE" settingTypeEnumId="PRICE_LEVEL_NETSUITE" settingValue="Base Price (MSRP)" />
```

</details>
