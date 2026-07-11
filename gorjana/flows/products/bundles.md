# <a name="_jvw8vlt8r96"></a>**Kit Product Creation** 
Gorjana makes shopping simple with "kits" or bundles that pair matching items like earrings and necklaces.   Customer can buy them separately or as a set.
### <a name="_5st0nlzeiktv"></a>**Creating Bundles at Gorjana**
Previously, Gorjana used the Bundle App to manage bundle products, but with HotWax Commerce as their OMS, they now handle bundles seamlessly without the need for the app.
#### <a name="_528yrqr0ttw5"></a>**1. Sourcing the Main Bundle from Shopify**
Gorjana sources its main bundles, also known as parent products, directly from Shopify. In Shopify, bundles and finished goods are identical, so the OMS uses the same product import job, **IMPORT\_PRODUCTS,** to handle both seamlessly. Bundles are tagged as “Kit” in Shopify, with a unique SKU. Kit components, such as the earrings and necklace in a “Chloe Set” bundle, are tagged as “Kit Components.”
#### <a name="_1t8otou35s5y"></a>**2. Linking Components from NetSuite**
Bundles in the OMS consist of individual components sourced from NetSuite. For example, the “Chloe Set” includes a necklace (SKU "161-105-G") and earrings (SKU "102-005-G"), each retaining its SKU whether sold individually or in a set, while the bundle has a unique SKU like "GS-184-102-G." The automated **IMP\_KIT\_COMP** job updates bundle data by importing component details from NetSuite. A "Saved Search" script generates a CSV of components, which is converted to JSON to map each component to its parent product using product IDs.
<p align="center">
  <img src="https://github.com/prachi872/oms-documentation-1/blob/implementations-pub/gorjana/.gitbook/assets/Kit_Product_Creation.jpeg?raw=true" alt="Bundle creation flow">
</p>

### **Why This Transformation is Needed**
Netsuite and Hotwax use Internal ID and Product ID respectively as product identifiers. HotWax stores the Internal ID in the GoodIdentification entity and then maps it to the Product ID. To bridge this, the OMS stores the NetSuite Product ID in the *GoodIdentification* entity. NiFi maps the NetSuite ID to the OFBiz ID, ensuring seamless data synchronization.

As part of Gorjana’s system integration, here’s an example of how the Kit Product data would look :

```json
{
  "Product": {
    "productId": "11237",
    "productTypeId": "MARKETING_PKG_PICK",
    "primaryProductCategory": {
      "productCategoryId": "10007",
      "categoryName": "Bundle"
    },
    "internalName": "GS-184-102-G",
    "brandName": "gorjana"
  },
  "ProductAssoc": {
    "productId": "11237",
    "productAssocTypeId": "PRODUCT_COMPONENT",
    "components": [
      {
        "productIdTo": "11228",
        "quantity": "1.000000"
      },
      {
        "productIdTo": "11242",
        "quantity": "1.000000"
      }
    ]
  }
}
```

This JSON example illustrates:

1. **Product:** Details of the product (Kit-product) such as its unique ID, product type, name, and brand.
1. **ProductAssoc:** Associations that link the product with its components (e.g., earrings and a necklace).
1. **ProductCategory:** Information about the category the product belongs to (e.g., the "Bundle" category).
1. **ProductCategoryMember:** The association between the product and its category.


## <a name="_9c59nrmeqhmd"></a>                         


