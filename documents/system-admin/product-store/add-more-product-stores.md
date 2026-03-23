---
description: >-
  Learn how to add more product stores in HotWax Commerce to cater to diverse
  retail brands, enabling efficient and customized management tailored to each
  brand's unique needs.
---

# Add More Product Stores

In HotWax Commerce, managing multiple product stores is valuable for retailers with diverse brands. Each store can be tailored to represent a specific retail brand, enabling efficient and customized management. This feature streamlines operations to meet the unique needs of each retail brand.

When retailers deploy HotWax Commerce, a default product store is automatically created. The settings for this default store can be configured on the `View Product Store Page`. Visit the [product store configuration page](./) to explore the various configurations that can be set from this view.

However, if a retailer has multiple brands, additional product stores need to be created. Follow these steps to create a new product store in HotWax Commerce,

1. **Create Product Store Groups-** In HotWax Commerce, retailers can define product store groups linked to the company. When creating a product store, it is automatically added to the group of the default product store.
2. **Create Product Store:** You can create a product store through the `Create Product Store` page. Navigate to `Settings` > `Product Stores` from the hamburger menu and click on the `Create` button. This action will open a form for creating a new product store. 

When a product store is created, HotWax Commerce automatically sets up the following:
* **Product Catalog:** A catalog named `${productStoreId} Catalog` is created and associated with the store.
* **Product Categories:** Essential categories for browsing (`_BR`), search (`_CS`), purchase allow (`_PA`), view allow (`_VA`), preorder (`_PC`), backorder (`_BC`), and preorder not allow (`_PC_NTAL`) are automatically created and associated with the catalog.
* **WebSite:** A website record (`${productStoreId}_WEBSTORE`) is created for the store.

Retailers should fill out the following attributes in the creation form:

| Attribute           | Description                                                                 | Example                 |
| ------------------- | --------------------------------------------------------------------------- | ----------------------- |
| Product Store ID    | A unique identifier for the product store.                                  | `WS_STORE`              |
| Store Name          | The name of the retail brand or store.                                      | `WasatchSki`            |
| Company Name        | The name of the company owning the store.                                   | `NotNaked`              |
| Pay To Party        | The internal organization party responsible for payments.                   | `NotNaked_COMPANY`      |
| Product Store Group | The group to which this store belongs (e.g., a specific brand group).       | `NotNaked_STORE_GROUP`  |
| Inventory Facility  | The primary facility where inventory for this store is managed. | `Main_Warehouse`        |
| Currency            | The default currency used for transactions in this store.                   | `USD`                   |

{% hint style="info" %}
Add company and product store details as per your retail brand. Many other settings have default values and can be adjusted later from the `View Product Store` page.
{% endhint %}

{% hint style="danger" %}
Make sure your product store ID ends with `_STORE` for accurate representation and consistency.
{% endhint %}

Adjust the additional Product Store settings according to your specific requirements on the same page or later in the `View Store` section:

| **Attribute**                | **Value**                                     | **Description**                                                                 | **Example**                                                                 |
|-----------------------------|-----------------------------------------------|---------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| BARCODE_IDEN_PREF       | UPCA                                          | Specifies the primary barcode type for scanning.                                | Associates use UPC-A instead of QR/EAN.                                     |
| BOPIS_PART_ODR_REJ      | N                                             | Controls if associates can reject specific items in a BOPIS order.              | Y → Reject a single item from a 3-item order if unavailable.                 |
| BRK_SHPMNT_THRESHOLD    | 50                                            | Splits order ship group if item total > threshold.                              | Threshold = 5 → 7 items → splits into multiple shipments.                    |
| CAPTURE_PAYMENT_TAG     | —                                             | Identifies orders that require payment capture.                                 | OMS applies `CAPTURE_PAYMENT` tag when ready for invoicing.                |
| CUST_ALLOW_CNCL         | TRUE                                          | Allows customers to cancel their orders after placing them.                     | Customer cancels Shopify order before fulfillment.                           |
| CUST_DLVRADR_UPDATE     | TRUE                                          | Allows customers to update delivery address post-order.                         | Change from "Home" → "Office" before dispatch.                               |
| CUST_DLVRMTHD_UPDATE    | TRUE                                          | Allows customers to change delivery method post-order.                          | Switch from Standard → Express Shipping.                                     |
| CUST_PCKUP_UPDATE       | TRUE                                          | Enables customers to change pickup location/method.                             | Switch pickup from Store A → Store B.                                        |
| DEFAULT_CARRIER         | NA                                            | Assigns a default shipping carrier if none selected.                            | Default carrier is `NA` when unspecified.                                    |
| DIS_REJ_NOTI_ON_CNCL    | Y                                             | Disables reject item notification when order canceled in Shopify.               | Order canceled → no extra rejection email.                                   |
| ENABLE_TRACKING         | TRUE                                          | Activates order tracking in BOPIS app.                                          | Customers view real-time pickup/shipment tracking.                           |
| EX_INV_BY_PRD_TYPE      | MARKETING_PKG_PICK                            | Excludes product types from automated inventory adjustments.                    | Marketing packages excluded from adjustments.                                |
| FULFILL_FORCE_SCAN      | FALSE                                         | Requires mandatory scan during fulfillment if TRUE.                             | FALSE → Pack without scanning.                                               |
| FULFILL_NOTIF           | Y                                             | Sends auto notifications on fulfillment updates.                                | Email alert when order is packed.                                            |
| HOLD_PRORD_PHYCL_INV    | FALSE                                         | Prevents pre-orders from reducing physical stock immediately.                   | Stock not reduced until product release.                                     |
| ORD_ITM_PICKUP_FAC      | _pickupstore                                  | Pre-assigns facility for all store pickup orders.                               | All pickup orders routed to `_pickupstore`.                                  |
| ORD_ITM_SHIP_FAC        | _hcShippingFacility                           | Pre-assigns default facility for shipped orders.                                | All shipping orders routed to central warehouse.                             |
| PCKGING_BOX_ALGO        | —                                             | Defines algorithm to choose correct box size.                                   | System chooses small/medium/large box based on items.                        |
| PKG_SLIP                | SH_PCKNG_SLP                                  | Defines template for packing slips.                                             | Uses `SH_PCKNG_SLP` template for every shipment.                             |
| PRE_ORDER_GROUP_ID      | FAC_GRP                                       | Groups pre-orders across channels for allocation.                               | All pre-orders grouped under `FAC_GRP`.                                      |
| PRE_SLCTD_FAC_TAG       | HC_PRE_SELECTED_FAC                           | Ensures tagged orders are routed to a pre-selected facility.                    | Orders with this tag go to designated warehouse.                             |
| PRDT_IDEN_PREF          | {"primaryId": "SKU", "secondaryId": "internalName"} | Sets hierarchy for product identification.                                      | First search by SKU → fallback to internalName.                              |
| PRICE_LEVEL_NETSUITE    | Base Price (MSRP)                             | Maps OMS price levels to NetSuite price levels.                                 | Sends "Base Price" to NetSuite as MSRP.                                      |
| PRINT_PACKING_SLIPS     | TRUE                                          | Enables automatic generation of packing slips.                                  | Packing slip printed for every order.                                        |
| PRINT_PICKLISTS         | TRUE                                          | Enables automatic printing of picklists for associates.                         | Associates get printed list of items to pick.                                |
| RATE_SHOPPING           | Y                                             | Compares carrier rates to find best option.                                     | Selects cheapest among FedEx, UPS, DHL.                                      |
| RECEIVE_FORCE_SCAN      | FALSE                                         | Requires mandatory scan when receiving inventory if TRUE.                       | FALSE → Receive stock without scanning.                                      |
| REL_PREORD_ROUGRP_ID    | PREORDER_ROUTING_01                                             | Internal identifier for grouping pre-orders during release.                     | If REL_PREORD_ROUGRP_ID = PREORDER_ROUTING_01, then all pre-orders will be routed using the rules defined in the routing group PREORDER_ROUTING_01.                                           |
| REJ_ITM_CC_CRT          | FALSE                                         | Creates cycle count automatically when item rejected if TRUE.                   | TRUE → Cycle count created on rejection.                                     |
| RETURN_DEADLINE_DAYS    | 5                                             | Sets customer return window in days.                                            | Customer has 5 days from delivery to initiate return.                        |
| RF_SHIPPING_METHOD      | STANDARD                                      | Defines default method for rerouted shipments.                                  | Rerouted shipment defaults to STANDARD.                                      |
| RTN_RSTCK_FAC           | WH                                            | Default facility for restocking returned items.                                 | All returns sent to warehouse `WH`.                                          |
| SAVE_BILL_TO_INF        | Y                                             | Retains billing address from Shopify orders.                                    | Billing info saved for reporting.                                            |
| SHOPIFY_OIG_CHECK       | Y                                             | Validates Shopify orders are linked to correct Order Import Group (OIG).        | Ensures all imported Shopify orders grouped properly.                        |
| SHOW_SHIPPING_ORDERS    | FALSE                                         | Determines if shipping orders are visible in BOPIS app.                         | FALSE → Store associates see only pickup orders.                             |
| DISABLE_SHIPNOW         | FALSE                                         | Disables "Ship Now" button in Fulfillment app.                                  | TRUE → Button disabled.                                                      |
| DISABLE_UNPACK          | FALSE                                         | Disables "Unpack" button in Fulfillment app.                                    | TRUE → Button disabled.                                                      |
| FF_COLLATERAL_REJ       | FALSE                                         | Enables/disables collateral rejection in fulfillment.                           | TRUE → Collateral rejection active.                                          |
| FF_USE_NEW_REJ_API      | FALSE                                         | Decides whether new rejection API is used in fulfillment.                       | TRUE → Uses new API.                                                         |
| APPR_WO_PMNT_CHK        | Y                                             | Allows approval without payment check.                                          | Y → Order approved without payment received.                                 |
| AFFECT_QOH_ON_REJ       | TRUE                                          | Adjusts QOH when an order is rejected.                                          | TRUE → QOH updated on rejection.                                             |
| INV_CNT_VIEW_QOH        | FALSE                                         | Shows QOH in Inventory Count app if TRUE.                                       | FALSE → Hide QOH, TRUE → Show QOH.                                           |
| FF_DOWNLOAD_PICKLIST    | FALSE                                         | Controls picklist download format (CSV vs PDF).                                 | Set to TRUE to download picklists as CSV for easier filtering.               |

3. **Verify Automated Setup:** After creating the product store, you can verify that the catalog and categories were created correctly:
   * Navigate to `Settings` > `Product Stores`.
   * Find your newly created store and click on it to open the `View Product Store` page.
   * Verify that the `Product Catalog` section shows the correctly linked catalog.
   * You can also manage additional settings and associations from this view.

These steps create the product store in HotWax Commerce. Ensure facilities that sell products of that brand are linked to the respective store. This association can be accomplished through the following steps:

* Go to the `EXIM` page from the hamburger menu
* Locate the `facility` page in the `Warehouse` section
* Upload the CSV file for the Facility along with the facility name and location for the WS\_STORE product store. You can download the sample CSV to add the data according to the template provided.
