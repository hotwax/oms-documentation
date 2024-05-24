---
description: >-
  Explore the concept of Product Store within HotWax Commerce, tailored to suit
  the needs of New Era Caps Japan.
---

# Product Store

In HotWax Commerce, a Product Store represents a company or brand, useful for managing different brands. For businesses like New Era Caps Japan, with only one brand, creating just one Product Store works in HotWax Commerce.

This page displays the default settings configured for New Era Caps, specifically adjusted to match its unique business needs. These settings are pre-configured to streamline operations and reflect the typical setup ideal for New Era Caps' operations within HotWax Commerce.

Users have the flexibility to make further adjustments or edits as necessary to align with specific business requirements or evolving needs.

Certain settings are mandatory for every Product Store to ensure efficient operations:

| Field                    | Description                                                                                                                                                                                                                                                             | Value                   |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Store Name               | Product Store serves as a representation of a company or brand, particularly useful for retailers managing multiple brands. Make sure to specify the brand name before proceeding.                                                                                      | New Era Caps Store      |
| Inventory Facility       | Default facility used to push inventory counts from HotWax Commerce to eCommerce                                                                                                                                                                                        | \_NA\_                  |
| Reserve inventory        | HotWax Commerce serves as Inventory Master therefore it reserves inventory for all online orders. This setting should consistently remain at its default value of Y without alteration to ensure accurate inventory management                                          | Y                       |
| Enable Brokering         | Brokering ensures optimized inventory allocation for orders. Therefore, this setting should always be maintained at its default value of Y and should not be modified.                                                                                                  | Y                       |
| Pre-order auto releasing | Allow users to configure whether the inventory for pre-order items should automatically be released when the shipping date arrives. The settings should be changed to N if you want manual control over releasing pre-orders.                                           | Y                       |
| Explode Order Items      | This setting changes if multi-quantity order items are exploded into single-quantity items. The default value for this setting is "Y" indicating that it is enabled, it should not be changed to "N", as many flows of HotWax Commerce are not tested for this setting. | Y                       |
| Allow Split              | Allow users to configure whether the orders should be split, and multiple shipments should be created for orders. If we need not allow the order split, its value can be set from the dropdown as Y or N.                                                               | Y                       |
| Auto Approve Order       | Orders are only brokered after they are approved in HotWax Commerce. Based on the business rules whether auto-approval of orders needs to be enabled or disabled, its value can be set from the dropdown as Y or N.                                                     | N                       |
| Auto Cancel Days         | Retailers can set auto-cancel days to ensure that if inventory is not allocated to an order within defined days, the corresponding order will be automatically canceled. The default value is 0, indicating no auto-cancel days should be applied.                      | 0                       |
| Currency                 | Allow users to set the preferred currency for the product store to use for prices, etc. This information is fetched from the organization’s Google form                                                                                                                 | JPY                     |
| Product Identifier       | Allow users to configure which Identification of a product is used as the primary internalName in HotWax Commerce                                                                                                                                                       | Shopify Product Barcode |
| Sales Order ID Prefix    | Adding a prefix to the internal ID helps visually separate purchase orders and sales orders.                                                                                                                                                                            | NEC                     |

Additionally, users have the flexibility to configure additional settings based on the specific business needs of NewEra Caps Japan.

| Settings             | Description                                                                                                                                                 | Value                  |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| Rate Shopping        | Rate Shopping feature allows HotWax Commerce to find the lowest possible shipping option that can deliver the order within SLA                              | Y                      |
| INV\_CNT\_VIEW\_QOH  | Allows the user to see current QOH from HotWax Commerce on the product detail page of the Inventory Count app to help users during the periodic cycle count | false                  |
| PRDT\_IDEN\_PREF     | Allow retailers to set preferred product Identifier for employees to view products with defined product identifiers                                         |                        |
| SAVE\_BILL\_TO\_INF  | Save customers' Bill To information of orders from Shopify in HotWax Commerce                                                                               | N                      |
| ORD\_ITM\_SHIP\_FAC  | Allows retailers to set the facility from where the order will be shipped                                                                                   | \_hcShippingFacility   |
| PRE\_SLCTD\_FAC\_TAG | Orders imported with this tag will have their line items checked for pre-selected facilities to fulfill them from                                           | HC\_PRE\_SELECTED\_FAC |
| FULFILL\_NOTIF       | Send a fulfillment notification to customers when there is a fulfillment update on their order                                                              | Y                      |
