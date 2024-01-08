# Price Level

Price levels are used to manage multiple prices for a product. This is useful when a product is priced differently based on conditions like sales channel. In NetSuite, you can set up different prices levels for each item and service. You can also enter an additional sales price for online items.

To sync orders, you need to setup the price level that should be sent to NetSuite. This value can be reconfigured whenver different price levels need to be used.

## XML Data
Configure the desired price level in the settingValue field and import this data from the XML import page in Webtools.

<details>
<summary>Price Level Setting</summary>

```xml
<Enumeration description="Price Level to be sent into Netsuite" enumId="PRICE_LEVEL_NETSUITE" enumName="Price Level Netsuite" enumTypeId="PROD_STR_STNG" />
<ProductStoreSetting fromDate="2023-06-22 05:24:22.82" productStoreId="STORE" settingTypeEnumId="PRICE_LEVEL_NETSUITE" settingValue="Base Price (MSRP)" />
```
</details>