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

| Attribute                   | Value                                                                                                         | Description                                                                  |
| --------------------------- | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| allowSplit                  | Y                                                                                                             | Allows or disallows order splitting.                                         |
| authDeclinedMessage         | There has been a problem with your method of payment. Please try a different method or call customer service. | Message displayed when authentication is declined.                           |
| authErrorMessage            | Problem connecting to payment processor; we will continue to retry and notify you by email.                   | Message displayed when there's an error connecting to the payment processor. |
| authFraudMessage            | Your order has been rejected and your account has been disabled due to fraud.                                 | Message displayed when authentication fails due to fraud.                    |
| autoApproveOrder            | N                                                                                                             | Specifies whether orders are automatically approved or not.                  |
| autoSetFacility             | Y                                                                                                             | Enables or disables automatic setting of the facility.                       |
| defaultCurrencyUomId        | USD                                                                                                           | Default currency unit of measure ID.                                         |
| defaultSalesChannelEnumId   | WEB\_SALES\_CHANNEL                                                                                           | Default sales channel enum ID.                                               |
| enableBrokering             | N                                                                                                             | Specifies whether brokering is enabled or not.                               |
| enablePreOrderAutoReleasing | N                                                                                                             | Specifies whether pre-order auto-releasing is enabled or not.                |
| explodeOrderItems           | Y                                                                                                             | Specifies whether order items are exploded or not.                           |
| productIdentifierEnumId     | SHOPIFY\_PRODUCT\_ID                                                                                          | Product identifier enum ID.                                                  |
| reqReturnInventoryReceive   | Y                                                                                                             | Specifies whether return inventory receiving is required or not.             |
| reserveInventory            | Y                                                                                                             | Specifies whether inventory is reserved or not.                              |
| shipIfCaptureFails          | N                                                                                                             | Specifies whether the order should be shipped if capture fails or not.       |
| storeCreditValidDays        | 90                                                                                                            | Validity period for store credit (in days).                                  |

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
