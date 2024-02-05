# Product Store 

In HotWax Commerce, a “Product Store” represents a company or brand. This functionality is useful for retailers with multiple brands. Product Stores help users organize and manage configurations for their brands efficiently within HotWax Commerce.  

This section displays the default settings configured for Perry Ellis and it's various brands, specifically adjusted to match its unique business needs. These settings are pre-configured to streamline operations and reflect the typical setup ideal for Perry Ellis’ operations within HotWax Commerce.  

Users have the flexibility to adjust these configurations as necessary to align with their specific business requirements or evolving needs. 

Certain settings are mandatory for every Product Store to ensure efficient operations.

| Field                    | Description                                           | Value          |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|
| Store Name               | Product Store serves as a representation of a company or brand, particularly useful for retailers managing multiple brands. Make sure to specify the brand name before proceeding.                                                                                                | Refer [Table 2](#Details-specific-to-various-Perry-Ellis-Product-Stores)         |                    
| Inventory Facility       | It is the default facility used to push inventory counts from HotWax Commerce to eCommerce.                                                                                                                                                                                       | Refer [Table 2](#Details-specific-to-various-Perry-Ellis-Product-Stores)         |
| Reserve inventory        | HotWax Commerce serves as Inventory Master therefore it reserves inventory for all online orders. This setting should consistently remain at its default value of Y without alteration to ensure accurate inventory management.                                                   | N                   |
| Enable Brokering         | Brokering ensures optimized inventory allocation for orders. Therefore, this setting should always be maintained at its default value of Y and should not be modified.                                                                                                            | N                   |
| Pre-order auto releasing | This setting enables users to configure whether the inventory for pre-order items should be automatically released when the shipping date arrives. The settings should be changed to N if the user wants manual control over releasing pre-orders.                                | N                   |
| Explode Order Items      | This setting changes if multi-quantity order items are exploded into single-quantity multiple items. The default value for this setting is "Y" indicating that it is enabled, it should not be changed to "N", as many flows of HotWax Commerce are not tested for this setting.  | N                   |
| Allow Split              | This setting allows users to configure whether the orders should be split, and multiple shipments should be created for orders. If the user wants to prevent order splitting, this setting should be modified to 'N'.                                                             | Y                   |
| Auto Approve Order       | Orders are only brokered after they are approved in HotWax Commerce. Based on the business rules whether auto-approval of orders needs to be enabled or disabled, its value can be set from the dropdown as Y or N.                                                               | Y                   |
| Auto Cancel Days         | Retailers can set auto-cancel days to ensure that if inventory is not allocated to an order within defined days, the corresponding order will be automatically canceled. The default value is 0, indicating no auto-cancel days should be applied.                                | 0                   |
| Currency                 | This setting allows users to set the preferred currency for the product store to use for prices, etc. This information is fetched from the organization’s Google form.                                                                                                            | USD                 |
| Product Identifier       | This setting allows users to configure which identification of a product is used as primary `internalName` in HotWax Commerce.                                                                                                                                                    | Shopify product SKU |
| Sales Order ID Prefix    | Adding a prefix to the internal ID helps visually separate purchase orders and sales orders.                                                                                                                                                                                      | -                   |

### Details specific to various Perry Ellis Product Stores 

| Setting              | Perry Ellis         | Cubavera           | Original Penguin     | 
| -------------------- | ----------------    | ------------------ | -------------------- | 
| Store Name           | Perry Ellis         | Cubavera           | Original Penguin     | 
| Inventory Facility   | 74                  | 113                | 74                   | 
| ORD_ITM_SHIP_FAC     | _hcShippingFacility | -                  | _hcShippingFacility  | 
| PRE_SLCTD_FAC_TAG    | HC_PRE_SELECTED_FAC | -                  | HC_PRE_SELECTED_FAC  | 
| SHIPT_SYSTEM_RMT_ID  | PE_SHIPT_CONFIG     | -                  | SHIPT_CONFIG         | 
| RATE_SHOPPING        | -                   | -                  | Y                    |     
| INV_CNT_VIEW_QOH     | -                   | -                  | false                | 
| PRDT_IDEN_PREF       | -                   | -                  | -                    | 
| RTN_RSTCK_FAC        | -                   | -                  | WH                   | 
| SAVE_BILL_TO_INF     | -                   | -                  | N                    | 
| FULFILL_NOTIF        | Y                   | Y                  | -                    |

> Table 2: Details specific to various Perry Ellis Product Stores.
