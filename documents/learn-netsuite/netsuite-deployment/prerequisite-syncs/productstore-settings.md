---
description: Configure Product Store setting enums used during NetSuite deployment.
---

# Product Store Settings

In HotWax, Product Store settings are key-value configurations stored as `ProductStoreSetting` records. These settings are different from the mappings configured on the **NetSuite** page in the Company App.

Use this page only for settings that are implemented as Product Store setting enums and are relevant to the NetSuite integration.

## What belongs on this page

The following configuration is a Product Store setting used by the NetSuite integration:

| Setting ID | Purpose |
| --- | --- |
| `PRICE_LEVEL_NETSUITE` | Defines which NetSuite price level HotWax should send when syncing orders. |

## Price level setting

Use `PRICE_LEVEL_NETSUITE` to control the price level value sent from HotWax to NetSuite during order sync.

Example XML:

```xml
<Enumeration description="Price Level to be sent into NetSuite" enumId="PRICE_LEVEL_NETSUITE" enumName="Price Level NetSuite" enumTypeId="PROD_STR_STNG" />
<ProductStoreSetting fromDate="2023-06-22 05:24:22.82" productStoreId="STORE" settingTypeEnumId="PRICE_LEVEL_NETSUITE" settingValue="Base Price (MSRP)" />
```

You can update the `settingValue` whenever a different NetSuite price level should be used.

For implementation details, see [Price Level](/documents/learn-netsuite/netsuite-deployment/prerequisite-syncs/price-level.md).

## Related NetSuite mappings

The following NetSuite deployment configurations are required, but they are not Product Store settings:

- NetSuite subsidiary mapping
- Shipping method mapping
- Payment method mapping
- Discount mapping
- Department mapping
- Sales channel mapping
- Inventory variance mapping

Those are configured from the **NetSuite** page in the Company App. For that setup, see [Configure NetSuite Setting](/documents/system-admin/administration/company/configure-netsuite-setting.md).
