---
description: >-
  Explore how the Find Product API call offers details about products present in the system.
---

# Find Product

This API call provides users with product details. To retrieve the product details, make a GET request to the `/solr-query` endpoint.

## Request
**End Point** `https://<instance.name>.hotwax.io/api/solr-query`

Example: `https://demo-oms.hotwax.io/api/solr-query`

### Request Format

```json
{
    "json": {
        "params": {    
        "q": "docType:PRODUCT",
        "wt":"json",
         "rows":"10"
        }
    }

}
```

### Parameter Table


| Parameter Name            | Description                          |
| ------------------------- | ------------------------------------ |
| `docType`                 | The Type of the document             |
| `q`                 |  Basic solr query|
| `wt`                 | Format of data returned by api (json/csv)|
| `rows`                 | No of documents returned |

### List of fields present in schema - 
- docType
- identifier
- context_field
- docType-identifier
- upc
- sku
- goodIdentifications
- productId
- productAverageRating
- groupId
- groupName
- productName
- parentProductName
- mainImageUrl
- productTypeId
- productCategories
- prodCatalogCategoryTypeIds
- productCategoryNames
- primaryProductCategoryName
- internalName
- brandName
- isVirtual
- isVariant
- manufacturerPartyId
- position
- productFeatureCategoryId
- productFeatureTypeId
- featureHierarchy
- productFeatures
- featureAbbreviation
- featureCode
- content
- prodCatalogIds
- productStoreIds
- tags


## Response

### Body

```json
{
    "responseHeader": {
        "zkConnected": true,
        "status": 0,
        "QTime": 0,
        "params": {
            "json": "{\"params\":{\"q\":\"docType:PRODUCT\"}}",
            "_forwardedCount": "1"
        }
    },
    "response": {
        "numFound": 2047,
        "start": 0,
        "numFoundExact": true,
        "docs": [
            {
                "productId": "10766",
                "keywordSearchText": [
                    "10766",
                    "Default Title",
                    "44596467138724",
                    "Gift",
                    "V_gift",
                    "10765",
                    "Gift Cards"
                ],
                "productTypeId": "DIGITAL_GOOD",
                "productName": "Default Title",
                "spellchecker": "Default Title",
                "internalName": "44596467138724",
                "brandName": "hc-sandbox",
                "description": "",
                "longDescription": "",
                "inventoryItemTypeId": "NON_SERIAL_INV_ITEM",
                "introductionDate": "2024-06-11T13:20:48.811Z",
                "taxable": "Y",
                "isVariant": "true",
                "position": "00001",
                "parentProductName": "Gift",
                "groupName": "V_gift",
                "groupId": "10765",
                "isVirtual": "false",
                "featureHierarchy": [
                    "0/10000/",
                    "1/10000/Default Title/"
                ],
                "productFeatures": [
                    "Title/Default Title"
                ],
                "sku": "44596467138724",
                "goodIdentifications": [
                    "SHOPIFY_PROD_ID/44596467138724",
                    "ShopifyShopProduct/10000/44596467138724"
                ],
                "BASE_PRICE_PURCHASE_USD_STORE_GROUP_price": 20.0,
                "LIST_PRICE_PURCHASE_USD_STORE_GROUP_price": 20.0,
                "attributeName": [
                    "SHOPIFY_INV_ITEM_ID"
                ],
                "attributeValue": [
                    "46447064219812"
                ],
                "primaryProductCategoryName": "Gift Cards",
                "productCategoryNames": [
                    "Gift Cards"
                ],
                "categoryHierarchy": [
                    "0/Company Catalog/",
                    "1/Company Catalog/Browse Root/",
                    "2/Company Catalog/Browse Root/Browse Root/Gift Cards/"
                ],
                "prodCatalogIds": [
                    "CATALOG"
                ],
                "productStoreIds": [
                    "STORE"
                ],
                "context_field": [
                    "STORE"
                ],
                "companyIds": [
                    "COMPANY"
                ],
                "productCategories": [
                    "10002",
                    "BROWSE_ROOT",
                    "PURCHASE_ALLOW"
                ],
                "prodCatalogCategoryTypeIds": [
                    "PCCT_BROWSE_ROOT",
                    "PCCT_PURCH_ALLW"
                ],
                "productFeatureIds": [
                    "10021"
                ],
                "sellingDate": [
                    "2024-06-11T13:20:48.809Z"
                ],
                "productSalesChannel": [
                    "Company"
                ],
                "productAverageRating": "0",
                "productDescContent": "",
                "productLongDescContent": "",
                "updatedDatetime": "2024-06-11T13:20:48.853Z",
                "docType": "PRODUCT",
                "identifier": "10766",
                "title": "Product Default Title.",
                "docType-identifier": "PRODUCT-10766",
                "_version_": 1801571059745423360
            }
        ]
    }
}
```
