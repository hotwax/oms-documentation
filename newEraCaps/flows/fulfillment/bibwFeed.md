# BI/BW Feed

The feed for BI/BW is generated after full order completion to ensure that the OMS can ensure that order level information can be included if not already sent to the WMS. One of the main differences of this feed from regular CSVs is that its delimiter is either `\` or a `~` which is not commonly recognized by file processors.

| Order Date | Order Number | Item Number | Material ID | EAN/UPC       | Qty | MSRP | Sold Price | Tax  | Freight | Customer Paid | Smaregi Store No | Tender Type         |
|------------|--------------|-------------|-------------|---------------|-----|------|------------|------|---------|---------------|------------------|---------------------|
| 20231117   | 90003904     | 101         |             | 4550538204860 | 1   | 9900 | 9900.0     | 990.0| 0.0     | 10890.0        | 5                | Ext Other Gateways |
| 20231117   | 90003907     | 101         |             | 4550538204860 | 1   | 9900 | 9900.0     | 990.0| 550.0   | 11440.0        | 5                | Ext Other Gateways |
| 20231117   | 90003906     | 102         |             | 4550538204877 | 1   | 9900 | 9900.0     | 990.0| 0.0     | 10890.0        | 5                | Ext Other Gateways |


### Order Date
The "Order Date" represents the date when the order is placed. It is expressed in the YYYYMMDD format.

- **Format:** YYYYMMDD (Year, Month, Day)
- **Value:** 20230426


### Order Number
The "Order Number" uniquely identifies an order by the Shopify Order Name. It is assigned by Shopify and serves as a reference to the specific order.

### Item Number
The "Item Number" serves as a unique identifier for each item within the order. This is mapped to the OMS's item sequence ID.

### Material ID
This value is always empty and computed in BI/BW when the file is imported.

**Example**
```||```

### EAN/UPC
The "EAN/UPC" field contains the NEC Unique product identifier, which corresponds to the Shopify UPC/Barcode or Shopify Product Barcode. It serves as a unique code that uniquely identifies a specific product.

### Qty
Quanity of the item shipped

### MSRP (Manufacturer's Suggested Retail Price)

The "MSRP" field represents the Retail Price of the product, inclusive of tax. It reflects the original price set by the manufacturer as a suggested selling price to customers.

#### Data Type
- **Format:** Numeric (Decimal)

#### Description
- This field signifies the price of the product before any discounts or promotions are applied. MSRP maps to the `Unit Price` field of the order item.

### Sold Price
The "Sold Price" field is a new addition representing the discounted price of the item. It captures the actual amount paid by the customer after applying any discounts.

#### Data Type
- **Format:** Numeric (Decimal)

#### Description
- This field contains the discounted price, reflecting the amount the customer pays for the item after any applicable discounts.


Tax
Freight
Customer Paid
Smaregi Store No. 
Tender Type