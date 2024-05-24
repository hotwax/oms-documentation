---
description: >-
  Explore how Cariuma utilizes the 'Product Store' in HotWax Commerce to
  efficiently manage configurations for its brand, with pre-configured settings
  tailored to its unique business needs.
---

# Product Store

In HotWax Commerce, a “Product Store” represents a company or brand. This functionality is useful for retailers with multiple brands. Product Stores help users organize and manage configurations for their brands efficiently within HotWax Commerce.

This section displays the default settings configured for Cariuma, specifically adjusted to match its unique business needs. These settings are pre-configured to streamline operations and reflect the typical setup ideal for Cariuma’s operations within HotWax Commerce.

Users have the flexibility to adjust these configurations as necessary to align with their specific business requirements or evolving needs.

\
Certain settings are mandatory for every Product Store to ensure efficient operations.

| Field                    | Description                                                                                                                                                                                                                                                                      | Value               |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Store Name               | Product Store serves as a representation of a company or brand, particularly useful for retailers managing multiple brands. Make sure to specify the brand name before proceeding.                                                                                               | Cariuma DTC         |
| Inventory Facility       | It is the default facility used to push inventory counts from HotWax Commerce to eCommerce.                                                                                                                                                                                      | CA\_Bolt            |
| Reserve inventory        | HotWax Commerce serves as Inventory Master therefore it reserves inventory for all online orders. This setting should consistently remain at its default value of Y without alteration to ensure accurate inventory management.                                                  | N                   |
| Enable Brokering         | Brokering ensures optimized inventory allocation for orders. Therefore, this setting should always be maintained at its default value of Y and should not be modified.                                                                                                           | N                   |
| Pre-order auto releasing | This setting enables users to configure whether the inventory for pre-order items should be automatically released when the shipping date arrives. The settings should be changed to N if the user wants manual control over releasing pre-orders.                               | Y                   |
| Explode Order Items      | This setting changes if multi-quantity order items are exploded into single-quantity multiple items. The default value for this setting is "Y" indicating that it is enabled, it should not be changed to "N", as many flows of HotWax Commerce are not tested for this setting. | Y                   |
| Allow Split              | This setting allows users to configure whether the orders should be split, and multiple shipments should be created for orders. If the user wants to prevent order splitting, this setting should be modified to 'N'.                                                            | Y                   |
| Auto Approve Order       | Orders are only brokered after they are approved in HotWax Commerce. Based on the business rules whether auto-approval of orders needs to be enabled or disabled, its value can be set from the dropdown as Y or N.                                                              | Y                   |
| Auto Cancel Days         | Retailers can set auto-cancel days to ensure that if inventory is not allocated to an order within defined days, the corresponding order will be automatically canceled. The default value is 0, indicating no auto-cancel days should be applied.                               | 0                   |
| Currency                 | This setting allows users to set the preferred currency for the product store to use for prices, etc. This information is fetched from the organization’s Google form.                                                                                                           | USD                 |
| Product Identifier       | This setting allows users to configure which identification of a product is used as the primary `internalName` in HotWax Commerce.                                                                                                                                               | Shopify product SKU |
| Sales Order ID Prefix    | Adding a prefix to the internal ID helps visually separate purchase orders and sales orders.                                                                                                                                                                                     | -                   |

\
Additionally, users have the flexibility to configure additional settings based on the specific business needs of Cariuma.

| Settings                | Description                                                                                                                                                                                                                                                     | Value |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| RATE\_SHOPPING          | Rate Shopping feature allows HotWax Commerce to find the lowest possible shipping option that can deliver the order within SLA.                                                                                                                                 | Y     |
| INV\_CNT\_VIEW\_QOH     | This setting allows users to see current QOH from HotWax Commerce on the product detail page of the Inventory Count app to help users during the periodic cycle count.                                                                                          | false |
| PRDT\_IDEN\_PREF        | Retailers can set a preferred `Product Identifier` for employees to view products with defined product identifiers.                                                                                                                                             |       |
| SAVE\_BILL\_TO\_INF     | Save customers' `Bill To` information on orders from Shopify in HotWax Commerce.                                                                                                                                                                                | N     |
| HOLD\_PRORD\_PHYCL\_INV | This setting enables retailers to determine whether they prefer to reserve excess physical inventory for their brick-and-mortar stores or make it fully available for online orders. The value can be set to `true` in order to hold excess physical inventory. | false |
