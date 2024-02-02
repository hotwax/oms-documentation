# Product Store 

In HotWax Commerce, a “Product Store” represents a company or brand. This functionality is useful for retailers with multiple brands. Product Stores help users organize and manage configurations for their brands efficiently within HotWax Commerce.  

This section displays the default settings configured for ADOC, specifically adjusted to match its unique business needs. These settings are pre-configured to streamline operations and reflect the typical setup ideal for ADOC’s operations within HotWax Commerce.  

Users have the flexibility to adjust these configurations as necessary to align with their specific business requirements or evolving needs.

<br>
Certain settings are mandatory for every Product Store to ensure efficient operations.

| Field                    | Description                                           | Value          |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|
| Store Name               | Product Store serves as a representation of a company or brand, particularly useful for retailers managing multiple brands. Make sure to specify the brand name before proceeding.                                                                                                | Refer [Table 3](#Details-specific-to-various-ADOC-OMS-instances)         |                    
| Inventory Facility       | It is the default facility used to push inventory counts from HotWax Commerce to eCommerce.                                                                                                                                                                                       | `_NA_`              |
| Reserve inventory        | HotWax Commerce serves as Inventory Master therefore it reserves inventory for all online orders. This setting should consistently remain at its default value of Y without alteration to ensure accurate inventory management.                                                   | Y                   |
| Enable Brokering         | Brokering ensures optimized inventory allocation for orders. Therefore, this setting should always be maintained at its default value of Y and should not be modified.                                                                                                            | Y                   |
| Pre-order auto releasing | This setting enables users to configure whether the inventory for pre-order items should be automatically released when the shipping date arrives. The settings should be changed to N if the user wants manual control over releasing pre-orders.                                | N                   |
| Explode Order Items      | This setting changes if multi-quantity order items are exploded into single-quantity multiple items. The default value for this setting is "Y" indicating that it is enabled, it should not be changed to "N", as many flows of HotWax Commerce are not tested for this setting.  | Y                   |
| Allow Split              | This setting allows users to configure whether the orders should be split, and multiple shipments should be created for orders. If the user wants to prevent order splitting, this setting should be modified to 'N'.                                                             | Y                   |
| Auto Approve Order       | Orders are only brokered after they are approved in HotWax Commerce. Based on the business rules whether auto-approval of orders needs to be enabled or disabled, its value can be set from the dropdown as Y or N.                                                               | N                   |
| Auto Cancel Days         | Retailers can set auto-cancel days to ensure that if inventory is not allocated to an order within defined days, the corresponding order will be automatically canceled. The default value is 0, indicating no auto-cancel days should be applied.                                | 0                   |
| Currency                 | This setting allows users to set the preferred currency for the product store to use for prices, etc. This information is fetched from the organization’s Google form.                                                                                                            | Refer [Table 3](#Details-specific-to-various-ADOC-OMS-instances)      |
| Product Identifier       | This setting allows users to configure which identification of a product is used as primary `internalName` in HotWax Commerce.                                                                                                                                                    | Shopify product SKU |
| Sales Order ID Prefix    | Adding a prefix to the internal ID helps visually separate purchase orders and sales orders.                                                                                                                                                                                      | Refer [Table 3](#Details-specific-to-various-ADOC-OMS-instances)         |

<br>
Additionally, users have the flexibility to configure additional settings based on the specific business needs of ADOC.

| Settings          | Description                                                                                                                                                             | Value           |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
| INV_CNT_VIEW_QOH  | This setting allows users to see current QOH from HotWax Commerce on the product detail page of the Inventory Count app to help users during the periodic cycle count.  | false           |
| PRDT_IDEN_PREF    | Retailers can set a preferred `Product Identifier` for employees to view products with defined product identifiers.                                                     | Refer [Table 3](#Details-specific-to-various-ADOC-OMS-instances)     |
| RTN_RSTCK_FAC     | This is the default facility that will be used to restock the return products.                                                                                          | WH              |
| SAVE_BILL_TO_INF  | Save customers' `Bill To` information on orders from Shopify in HotWax Commerce.                                                                                        | Y               |
| RATE_SHOPPING     | Rate Shopping feature allows HotWax Commerce to find the lowest possible shipping option that can deliver the order within SLA.                                         | N               |
| DEFAULT_CARRIER   | Retailers can assign a default shipping carrier to handle the transportation and delivery of products within a specific product store.                                  | Refer [Table 3](#Details-specific-to-various-ADOC-OMS-instances)     |
<br>

### Details specific to various ADOC OMS instances 

| Setting         | El Salvador    | Nicaragua | Honduras | Guatemala     | Costa Rica     |
| ----------------- | ---------------- | -------- | --------------------- | --------------------- | ------------------------------------------ |
| Store Name  | ADOC Store       | ADOC Nicaragua      | ADOC Honduras        | ADOC Guatemala        | ADOC Costa Rica |
| Currency    | USD   | NIO      | HNL                  | GTQ          | CRC         |
| Sales Order ID Prefix | ADOC | ADOC | ADOC0 | ADOC | ADOC | 
| PRDT_IDEN_PREF | {"primaryId":"internalName", "secondaryId":"parentProductName"}  | {"primaryId":"parentProductName", "secondaryId":"title"}         | {"primaryId":"parentProductName", "secondaryId":"SHOPIFY_PROD_SKU"} | {"primaryId":"internalName", "secondaryId":"parentProductName"} | {"primaryId":"internalName", "secondaryId":"title"} | 
 | DEFAULT_CARRIER | C807 | CARGOTRANS | HN_DEFAULT_CARRIER | - | TERMINAL_EXPRESS | 

> Table 3: Details specific to various ADOC OMS instances.



