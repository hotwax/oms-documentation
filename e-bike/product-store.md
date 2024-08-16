---
description: Explore how E-bike uses HotWax Commerce's 'Product Store' to efficiently manage configurations tailored to its unique business needs.
---

## Product Store 
In HotWax Commerce, a `Product Store` represents a company or brand. This functionality is useful for retailers with multiple brands. Product Stores help users organize and manage configurations for their brands efficiently within HotWax Commerce.

This section displays the default settings configured for the E-bike, specifically adjusted to match its unique business needs. These settings are pre-configured to streamline operations and reflect the typical setup ideal for E-bike operations within HotWax Commerce.

Users have the flexibility to adjust these configurations as necessary to align with their specific business requirements or evolving needs.

Details specific to E-bike Product Store.


| Field                 | Description                                                                                                                                           | Value                                                           |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| RATE_SHOPPING        | Enables rate shopping functionality                                                                                                                 | N                                                               |
| INV_CNT_VIEW_QOH     | Displays current HotWax OMS quantity on hand (QOH) on the product detail page of the Inventory Count app                                             | false                                                           |
| PRDT_IDEN_PREF       | Defines the primary and secondary product identification criteria                                                                                    | {"primaryId":"parentProductName","secondaryId":"sku"}           |
| RTN_RSTCK_FAC        | Specifies the default facility for return restocking                                                                                                 | WH                                                              |
| HOLD_PRORD_PHYCL_INV | Determines if physical inventory is considered zero when preorder queue exists                                                                         | false                                                           |
| SAVE_BILL_TO_INF     | Saves customer billing information from Shopify orders in HotWax                                                                                      | N                                                               |
| FULFILL_NOTIF        | Sends fulfillment notifications to customers upon order updates                                                                                         | N                                                               |
| FULFILL_FORCE_SCAN   | Enables forced scanning during fulfillment process                                                                                                   | false                                                           |
| RESERVE_INV         | Reserves inventory for orders to prevent overselling                                                                                                 | Y                                                               |
| ENABLE_BROKERING     | Enables order allocation to appropriate fulfillment locations                                                                                     | Y                                                               |
| AUTO_RELEASE_PRORD   | Automatically releases pre-orders when inventory becomes available                                                                                  | N                                                               |
| ALLOW_SPLIT          | Permits order splitting across multiple fulfillment locations                                                                                         | N                                                               |
| AUTO_APPROVE_ORDER   | Automatically approves imported orders                                                                                                               | N                                                               |
