# Product store settings

Product Store Settings allow administrators to configure specific behaviors for each product store in HotWax OMS. These settings control various aspects of order management, fulfillment, inventory, and integration with external platforms like Shopify.

Detailed below are the available product store settings, categorized by their primary function.

## Order management settings

These settings control how orders are processed and approved in the OMS.

| Setting ID | Name | Description | Impact |
| --- | --- | --- | --- |
| `AUTO_REJ_IDLE_ORD` | Auto reject idle orders | Time threshold (in minutes) after which an unfulfilled order is automatically rejected. | Helps maintain fulfillment SLAs by rerouting stagnant orders. |
| `CAPTURE_PAYMENT_TAG` | Capture payment tag | Tag applied to orders that require payment capture at a specific stage. | Used in CSR and payment processing workflows. |
| `APPR_WO_PMNT_CHK` | Allow order approval without checking payment | Decides whether an order can be approved even if payment verification is skipped. | Useful for specific business models or trusted channels. |
| `RETURN_DEADLINE_DAYS` | Return deadline days | Number of days after fulfillment within which a return can be initiated. | Used in the returns portal and CSR tools to validate return windows. |

## Inventory & fulfillment settings

These settings govern inventory allocation, fulfillment behavior, and app-level controls.

| Setting ID | Name | Description | Impact |
| --- | --- | --- | --- |
| `FULFILL_FORCE_SCAN` | Fulfillment force scan | Requirement to scan every item during the packing process. | Ensures accuracy in fulfillment and reduces shipping errors. |
| `AFFECT_QOH_ON_REJ` | Allow impacting QOH on order rejection | Controls whether the Quantity on Hand (QOH) is updated when an order item is rejected. | Helps manage inventory accuracy when rejections are due to physical stock issues. |
| `BRK_SHPMNT_THRESHOLD` | Brokering shipment threshold | Value threshold for splitting shipments during brokering. | Optimizes shipping costs by controlling when a single order is split into multiple shipments. |
| `REJ_ITM_CC_CRT` | Create cycle count for rejected items | Decides if a cycle count should be automatically created for items rejected with variance. | Triggers inventory audits immediately after fulfillment discrepancies are found. |
| `DISABLE_SHIPNOW` | Disable ship now button | Hides the "Ship Now" button in the fulfillment app. | Prevents manual shipping for stores that rely on automated or external shipping processes. |
| `DISABLE_UNPACK` | Disable unpack button | Controls visibility of the "Unpack" button in fulfillment workflows. | Restricts users from reversing packing operations. |
| `PCKGING_BOX_ALGO` | Packaging box algo | Algorithm used to suggest the best box size for an order. | Optimizes packaging efficiency and shipping costs. |
| `RATE_SHOPPING` | Rate shopping | Enables or disables the rate shopping feature in the OMS. | Allows comparing shipping rates across multiple carriers. |
| `FF_DOWNLOAD_PICKLIST` | Download picklist as CSV | Determines whether the picklist is downloaded as a CSV file or opened as a PDF. | Provides flexibility for store associates to filter and sort picklist data in external tools. |

## Store pickup (BOPIS) settings

Settings specifically for Buy Online, Pickup In Store (BOPIS) workflows.

| Setting ID | Name | Description | Impact |
| --- | --- | --- | --- |
| `DEFAULT_PKG_BOPIS_ORD` | Default packaging for store pickup orders | Specifies the default packaging type used for BOPIS orders. | Standardizes packaging for in-store pickups. |
| `SHOW_SHIPPING_ORDERS` | Show shipping orders | Controls whether standard shipping orders are visible in the BOPIS app. | Allows store associates to manage both pickup and ship-from-store orders from one app. |
| `PRINT_PACKING_SLIPS` | Generate packing slips | Enables the generation of packing slips for BOPIS orders. | Improves the customer experience during pickup. |
| `PRINT_PICKLISTS` | Print picklists | Enables printing of picklists for store associates. | Streamlines the picking process in retail stores. |
| `HANDOVER_PROOF` | Enable proof of delivery | Requirement for customer signature or proof during pickup. | Enhances security and verification for high-value pickups. |

## Shopify integration settings

Settings that control the behavior of the HotWax-Shopify bridge.

| Setting ID | Name | Description | Impact |
| --- | --- | --- | --- |
| `SAVE_BILL_TO_INF` | Save bill to information in HotWax | Decides whether to import and store the billing address from Shopify orders. | Controls data privacy and storage requirements in the OMS. |
| `DIS_REJ_NOTI_ON_CNCL` | Disable reject order item notification when an order is cancelled from Shopify | Suppresses internal notifications when a Shopify cancellation triggers an OMS rejection. | Reduces noise for fulfillment teams when customers cancel orders themselves. |
| `PRE_SLCTD_FAC_TAG` | Pre-selected facility tag | Identifies orders that come with a pre-defined fulfillment facility. | Bypasses standard brokering rules for specifically tagged orders. |
| `EX_INV_BY_PRD_TYPE` | Configuration to exclude reset inventory by product type | List of product types to be excluded from periodic inventory resets or syncs. | Prevents unnecessary syncs for digital or non-physical products. |

## Facility-level configuration

These settings often act as defaults for facilities associated with the product store.

| Setting ID | Name | Description | Impact |
| --- | --- | --- | --- |
| `RTN_RSTCK_FAC` | Restock returns facility | Default facility where returned items are restocked. | Automates return routing to a central warehouse or store. |
| `ORD_ITM_PICKUP_FAC` | Preselected facility for store pickup orders | Default facility assigned to BOPIS orders if not specified. | Ensures pickup orders are routed correctly. |
| `DEFAULT_CARRIER` | Select the default carrier | Default shipping carrier assigned to new orders. | Sets a baseline for shipment method selection. |
