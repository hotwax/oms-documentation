
# **Earring Flexibility**

Gorjana allows customers to buy earrings as a single piece or a pair. HotWax supports this with a product setup that handles both options efficiently.

## **How Pairing Works**

Earring SKU **232-009-185-G** represents a single earring. Customers can order this SKU with a quantity of one if they wish to purchase just one earring. For customers who prefer to buy a pair of earrings, a "kit product" association is used instead of creating a separate SKU for the pair.

In this setup, a new SKU, **232-010-185-G**, is created to represent the pair of earrings. This SKU acts as the "parent product," linking the two single earrings as components of the kit. This approach allows efficient inventory management while meeting customer preferences for single or paired purchases.

### **Single Earring:**
- **SKU:** 232-009-185-G
- Represents a single earring.
- Customers can order one unit.

### **Paired Earrings (Kit Product):**
- **SKU:** 232-010-185-G
- Represents a pair of earrings (parent product).
- Includes **232-009-185-G** as a component with a quantity of two.

<p align="center">
  <img src="https://github.com/prachi872/oms-documentation-1/blob/2c61ed9a63d1966a5fd33d8c89143f5af483e289/gorjana/.gitbook/assets/EarringFlexiblity.jpeg?raw=true" alt="Components Representation">
</p>

### **Order Example**

If a customer orders a pair of earrings, they will select **SKU 232-010-185-G** as the product. The system, however, will track this as two units of **SKU 232-009-185-G**. This approach ensures that the OMS treats the pair as a grouped item, while still accurately tracking each individual earring.

---

### **Example JSON**
```json
{
  "Product": {
    "productId": "12254",
    "internalName": "213-010-34-G",
    "primaryProductCategoryId": "10002",
    "productTypeId": "MARKETING_PKG_PICK"
  },
  "ProductAssoc": {
    "productAssocTypeId": "PRODUCT_COMPONENT",
    "productIdTo": "12252",
    "quantity": "2.000000"
  }
}
```
### **XML Data**

<details>
<summary>Click to view XML data</summary>

```xml
<entity-engine-xml>
    <!-- Product Details -->
    <Product
        internalName="V_classic-diamond-threaded-flatback-stud-1"
        isVariant="N"
        isVirtual="Y"
        primaryProductCategoryId="10002"
        productId="11327"
        productName="Classic Diamond Flat Back Studs"
        productTypeId="FINISHED_GOOD"
    />

    <!-- Product Association 1 -->
    <ProductAssoc
        productAssocTypeId="PRODUCT_VARIANT"
        fromDate="2024-11-28 00:16:58.431"
        productId="11327"
        productIdTo="11328"
        sequenceNum="1"
    />

    <!-- Product Association 2 -->
    <ProductAssoc
        productAssocTypeId="PRODUCT_VARIANT"
        fromDate="2024-11-28 00:16:58.599"
        productId="11327"
        productIdTo="11329"
        sequenceNum="1"
    />

    <!-- Product Component Association -->
    <ProductAssoc
        productAssocTypeId="PRODUCT_COMPONENT"
        fromDate="2024-11-28 00:46:06.937"
        productId="11328"
        productIdTo="11329"
        quantity="2.000000"
    />
</entity-engine-xml>
