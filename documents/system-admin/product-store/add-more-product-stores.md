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
2. **Create Product Store-** You can create a product store through the `Create Store` page. Simply click on `Create Store` from the hamburger menu. This action will open a form for creating a new product store. Retailers should fill out specific attributes with defined values. For instance, consider the details needed for a product store named WasatchSki. Adjust the following attributes according to your retail brand.

| Attribute           | Value                  | Description              |
| ------------------- | ---------------------- | ------------------------ |
| companyName         | NotNaked               | The name of the company. |
| inventoryFacilityId | _NA_                   | Inventory facility ID.   |
| payToPartyId        | NotNaked\_COMPANY      | Party ID for payment.    |
| primaryStoreGroupId | NotNaked\_STORE\_GROUP | Primary store group ID.  |
| productStoreId      | WS\_STORE              | Product store ID.        |
| storeName           | WasatchSki             | The name of the store.   |
| subtitle            | WS                     | Subtitle for the store.  |
| title               | WasatchSki             | Title of the store.      |

{% hint style="info" %}
Add company and product store details as per your retail brand
{% endhint %}

{% hint style="danger" %}
Make sure your product store ID ends with `_store` for accurate product store representation.
{% endhint %}

Adjust the additional Product Store settings according to your specific requirements for the following details:

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


3. **Create Product Catalog-** A product catalog for the newly created product store needs to be created which defines which product will be sold through the created product store.

Import the following XML to create the product catalog

<details>

<summary>Create Product Ctalog</summary>

`<ProdCatalog prodCatalogId="WS_CATALOG" catalogName="WasatchSki Catalog" useQuickAdd="Y"/>`\
\
Replace "WS\_CATALOG" and "WasatchSki Catalog" with the desired value for the new catalog as per your retail brand.

</details>

4. **Associate product store with product catalog-** After creating a product store and product catalog in HotWax Commerce, the next crucial step is to associate them. This ensures accurate mapping, allowing the correct products to be linked with the designated product store. Utilize the following XML template for creating the association:

<details>

<summary>Associate Product Catalog</summary>

`<ProductStoreCatalog productStoreId="WS_STORE" prodCatalogId="WS_CATALOG" fromDate="2022-07-01 12:00:00.000" sequenceNum="2”/>`\
\
Adjust "WS\_STORE" and "WS\_CATALOG" to match the respective product store and catalog IDs.

</details>

5. **Create Product Category-** In HotWax Commerce, effective product management involves creating product categories, especially for handling pre-order and backorder products. The following attributes are essential for accurately defining product categories:

The following fields need to be inserted to create the product category

| Attribute             | Description                                  |
| --------------------- | -------------------------------------------- |
| productCategoryId     | Identifier for the product category          |
| productCategoryTypeId | Type of the product category                 |
| categoryName          | Name of the product category                 |
| description           | Brief description of the product category    |
| longDescription       | Detailed description of the product category |

To create a product category, import an XML file with data similar to the provided sample:

<details>

<summary>Create Product Category</summary>

`<ProductCategory productCategoryId="WS_BROWSE_ROOT" productCategoryTypeId="CATALOG_CATEGORY" categoryName="WS_Browse Root" description="WS Browse Root" longDescription="Demo Catalog Primary Browse Root Category"/>`

`<ProductCategory productCategoryId="WS_CATALOG_SEARCH" productCategoryTypeId="SEARCH_CATEGORY" categoryName="WS Catalog Search" description="Catalog Search" longDescription="Search Products - only products in this category will show up in a search in CATALOG"/>`

`<ProductCategory productCategoryId="WS_PURCHASE_ALLOW" productCategoryTypeId="CATALOG_CATEGORY" categoryName="WS_Purchase Allow" longDescription="Products in this category are enabled for purchasing"/>`

`<ProductCategory productCategoryId="WS_VIEW_ALLOW" productCategoryTypeId="CATALOG_CATEGORY" categoryName="WS_VIEW_ALLOW" description="Products in this category are visible on web site."/>`

`<ProductCategory productCategoryId="WS_PREORDER_CAT" productCategoryTypeId="CATALOG_CATEGORY" categoryName="WS_PREORDER" description="Pre-order Category"/>`

`<ProductCategory productCategoryId="WS_BACKORDER_CAT" productCategoryTypeId="CATALOG_CATEGORY" categoryName="WS_BACKORDER" description="Backorder Category"/>`

`<ProductCategory productCategoryId="WS_PREODR_NT_ALW" productCategoryTypeId="CATALOG_CATEGORY" categoryName="WS Preorder Not Allow Items" description="Preorder Not Allow Items Specific Category."/>`

</details>

Make sure to customize all product category IDs and names, and consider adding a company name prefix or suffix to the IDs. It's crucial not to alter any type IDs as specified in the note above. This process ensures accurate and tailored product categorization within HotWax Commerce.

6. **Product Catalog and Product Category Association-** Associating catalogs and categories within HotWax Commerce is a feature for effective product management. It allows users to link specific product categories to a catalog, ensuring accurate representation and organization of products.

<details>

<summary>Associate Product Category</summary>

`<ProdCatalogCategory prodCatalogId="WS_CATALOG" productCategoryId="WS_BROWSE_ROOT" prodCatalogCategoryTypeId="PCCT_BROWSE_ROOT" fromDate="2022-07-01 12:00:00.000" sequenceNum="1"/>`

`<ProdCatalogCategory prodCatalogId="WS_CATALOG" productCategoryId="WS_PURCHASE_ALLOW" prodCatalogCategoryTypeId="PCCT_PURCH_ALLW" fromDate="2022-07-01 12:00:00.000" sequenceNum="2"/>`

`<ProdCatalogCategory prodCatalogId="WS_CATALOG" productCategoryId="WS_VIEW_ALLOW" prodCatalogCategoryTypeId="PCCT_VIEW_ALLW" fromDate="2022-07-01 12:00:00.000" sequenceNum="3"/>`

`<ProdCatalogCategory prodCatalogId="WS_CATALOG" productCategoryId="WS_CATALOG_SEARCH" prodCatalogCategoryTypeId="PCCT_SEARCH" fromDate="2022-07-01 12:00:00.000" sequenceNum="4"/>`

`<ProdCatalogCategory prodCatalogId="WS_CATALOG" productCategoryId="WS_PREORDER_CAT" prodCatalogCategoryTypeId="PCCT_PREORDR" fromDate="2022-07-01 12:00:00.000" sequenceNum="5"/>`

`<ProdCatalogCategory prodCatalogId="WS_CATALOG" productCategoryId="WS_BACKORDER_CAT" prodCatalogCategoryTypeId="PCCT_BACKORDER" fromDate="2022-07-01 12:00:00.000" sequenceNum="6"/>`

`<ProdCatalogCategory prodCatalogId="WS_CATALOG" productCategoryId="WS_PREODR_NT_ALW" prodCatalogCategoryTypeId="PCCT_PREORDR_NOT" fromDate="2022-07-01 12:00:00.000" sequenceNum="7"/>`

</details>

In this dataset, input the previously created product catalog ID and category IDs. Maintain the existing type IDs without alterations. Set the `from date` in the data either as the project's go-live date or 10 days past. Additionally, verify the sequence numbers in the data for accuracy.

7. **Add Default data-** To ensure the seamless establishment of the product store, it's essential to integrate default data via XML import. However, moving forward, this default data will be omitted to streamline the product store creation process.

<details>

<summary>Add Default Data</summary>

`<WebSite webSiteId="WS_WEBSTORE" siteName= “Wasatchski" productStoreId="WS_STORE" allowProductStoreChange="N" isDefault="N" prodCatalogId="WS_cATALOG" salesChannel="WEB_SALES_CHANNEL"/>`

`<Content contentId="WS_PT_TRUNK" contentTypeId="WEB_SITE_PUB_PT" contentName="Webstore Site's Publish Point" description="Root publish point for WebStore website" statusId="CTNT_PUBLISHED"/>`

`<WebSiteContent webSiteId="WS_WEBSTORE" contentId="WS_PT_TRUNK" webSiteContentTypeId="PUBLISH_POINT" fromDate="2022-07-01 12:00:00.000"/> <Content contentId="WS_KYWRD_SEARCH" contentTypeId="DOCUMENT" statusId="CTNT_PUBLISHED" contentName="WS_Content for category decorator"/> <WebSiteContent webSiteId="WS_WEBSTORE" contentId="WS_KYWRD_SEARCH" fromDate="2022-07-01 12:00:00.000" webSiteContentTypeId="KYWRD_SEARCH"/>`

</details>

These steps create the product store in HotWax Commerce. Ensure facilities that sell products of that brand are linked to the respective store. This association can be accomplished through the following steps:

* Go to the `EXIM` page from the hamburger menu
* Locate the `facility` page in the `Warehouse` section
* Upload the CSV file for the Facility along with the facility name and location for the WS\_STORE product store. You can download the sample CSV to add the data according to the template provided.
