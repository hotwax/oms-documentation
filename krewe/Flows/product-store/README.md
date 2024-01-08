# Product Store

In HotWax Commerce, a Product Store represents a company or brand, useful for managing different brands. For businesses like Krewe, with only one brand, creating just one Product Store works in HotWax Commerce.

This page displays the default settings configured for Krewe, specifically adjusted to match its unique business needs. These settings are pre-configured to streamline operations and reflect the typical setup ideal for Krewe's operations within HotWax Commerce.

Users have the flexibility to make further adjustments or edits as necessary to align with specific business requirements or evolving needs.

Certain settings are essential for every Product Store to ensure efficient operations.

| **Field**                  | **Description**                                                                                                         | **Value**              |
|------------------------|---------------------------------------------------------------------------------------------------------------------|--------------------|
| Store Name             | Product Store serves as a representation of a company or brand, particularly useful for retailers managing multiple brands. Make sure to specify the brand name before proceeding. | Krewe Store        |
| Inventory Facility      | Default facility used to push inventory counts from HotWax Commerce to eCommerce                                   | _NA_               |
| Reserve inventory      | HotWax Commerce serves as Inventory Master therefore it reserves inventory for all online orders. This setting should consistently remain at its default value of Y without alteration to ensure accurate inventory management | Y                  |
| Enable Brokering       | Brokering ensures optimized inventory allocation for orders. Therefore, this setting should always be maintained at its default value of Y and should not be modified. | Y                  |
| Pre-order auto releasing | Allow users to configure whether the inventory for pre-order items should automatically be released when the shipping date arrives. The settings should be changed to N if you want manual control over releasing pre-orders. | Y                |
| Explode Order Items    | This setting changes if multi-quantity order items are exploded into single-quantity items. The default value for this setting is "Y" indicating that it is enabled, it should not be changed to "N", as many flows of HotWax Commerce are not tested for this setting. | Y                  |
| Allow Split            | Allow users to configure whether the orders should be split, and multiple shipments should be created for orders. If we need not allow the order split, its value can be set from the dropdown as Y or N. | N                  |
| Auto Approve Order      | Orders are only brokered after they are approved in HotWax Commerce. Based on the business rules whether auto-approval of orders needs to be enabled or disabled, its value can be set from the dropdown as Y or N. | N                |
| Auto Cancel Days       | Retailers can set auto-cancel days to ensure that if inventory is not allocated to an order within defined days, the corresponding order will be automatically canceled. The default value is 0, indicating no auto-cancel days should be applied. | 0                |
| Currency               | Allow users to set the preferred currency for the product store to use for prices, etc. This information is fetched from the organization’s Google form | USD                |
| Product Identifier     | Allow users to configure which Identification of a product is used as primary internalName in HotWax Commerce        | Shopify product SKU |
| Sales Order ID Prefix  | Adding a prefix to the internal ID helps visually separate purchase orders and sales orders.                         | KRWE               |

Furthermore, retailers can configure additional settings based on the specific business needs of Krewe:

| **Store Settings **       | **Description**                                                                                                      | **Value**  |
|-----------------------|------------------------------------------------------------------------------------------------------------------|--------|
| RTN_RSTCK_FAC         | This configuration allows users to specify the facility where returns are restocked. When a return is processed and restocked, the inventory for that particular facility increases accordingly. | WH     |
| PRICE_LEVEL_NETSUITE  | This configuration allows users to send price levels to NetSuite instead of actual prices. NetSuite identifies item prices based on these assigned price levels. | "Base Price (MSRP)" |
| INV_CNT_VIEW_QOH      | Allows the user to see current QOH from HotWax Commerce on the product detail page of the Inventory Count app to help users during the periodic cycle count | TRUE   |
| PRDT_IDEN_PREF        | Allow retailers to set preferred product Identifier for employees to view products with defined product identifiers  | "{"primaryId":"productId","secondaryId":"productId"}" |
| Rate Shopping         | Rate Shopping feature allows HotWax Commerce to find the lowest possible shipping option that can deliver the order within SLA | N      |
| SAVE_BILL_TO_INF      | Save customers' Bill To information of orders from Shopify in HotWax Commerce.                                   | Y      |
