# Configure Product Store

A Product Store in HotWax Commerce is like the a company, or a brand if a retailer has multipe brands.

Here are the settings that can be configured in a Product Store:

**Product Store Name** This is the name of the company. If the company has multiple brands this should be the name of one brand. Make sure to update this before proceeding. 

**Currency:** Fetch it from the organization’s google form. Generally, it is USD.

**Weight:** Its value can be fetched from Shopify. Usually, it is WT_lb in USA else in other countries it is WT_Kg.

**Auto Approve Order:** By default, its value is N. Based on the business rules whether auto-approval of orders needs to be enabled or disabled its value can be set from the dropdown as Y or N.

**Auto Cancel Days:** The default value is 0. That indicates no auto cancel days should be applied. If needed, enter the the total number of days after which an order should be auto-canceled if it remains un-allocated.

**Sales Order and Purchase Order ID Prefix:** This should be checked with the retailer if they have a preference. Adding a prefix to the internal ID helps visually seperate purchase orders and sales orders. 

**Allow Split:** By default allow split is set to Y. If we need not allow the order split its value can be set from the dropdown as Y or N. Based on this the orders will be split and multiple shipments will be created.

**Product Identifier Enum ID:** This setting changes which Identification of a product to use as its primary internalName.

### Do not edit these fields

**Reserve Inventory:** OMS serves as the definitive source for inventory information, and as such, this setting should consistently remain at its default value of `Y` without alteration.

**Enable Brokering:** Disabling brokering hinders OMS from optimizing inventory allocation for orders, defeating its intended purpose. Therefore, this setting should always be maintained at its default value of `Y` and should not be modified.

**Explode Order Items** This setting changes if multi-quantity order items are exploded into single quantity items. The default value for this setting is "Y" indicating that it is enabled, it should not be changed to "N", may flows of the OMS are not tested for this setting.

**External ID** Most retailers will never need this. Adding it will not break any flows but since it is not part of required data setup, it's recommended to leave it blank.

### For pre-order specific configurations, you will need to add certain store specific settings: 

1. Go to Product store: `https://<instanceName>.hotwax.io/commerce/control/ViewStore?productStoreId=STORE`
2. Go to `Store settings` and click `Add` function to find additional settings required for pre-orders.
3. Select `HOLD_PRORD_PHYCL_INV` , read more [here](https://github.com/hotwax/press-release-faq/blob/main/pre-order/hold-pre-order-physical-inventory.md)
4. Set the value `true` or `false` as required. 
