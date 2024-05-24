---
description: >-
  Learn how New Era Caps generates BI/BW feeds after order completion, ensuring
  comprehensive order level information for accurate analytics.
---

# BI/BW Feed

The feed for BI/BW is generated after full order completion to ensure that the OMS can ensure that order level information can be included if not already sent to the WMS. One of the main differences of this feed from regular CSVs is that its delimiter is either `|` or a `~` which is not commonly recognized by file processors.

| Order Date | Order Number | Item Number | Material ID | EAN/UPC       | Qty | MSRP | Sold Price | Tax   | Freight | Customer Paid | Smaregi Store No | Tender Type        |
| ---------- | ------------ | ----------- | ----------- | ------------- | --- | ---- | ---------- | ----- | ------- | ------------- | ---------------- | ------------------ |
| 20231117   | 90003904     | 101         |             | 4550538204860 | 1   | 9900 | 9900.0     | 990.0 | 0.0     | 10890.0       | 5                | Ext Other Gateways |
| 20231117   | 90003907     | 101         |             | 4550538204860 | 1   | 9900 | 9900.0     | 990.0 | 550.0   | 11440.0       | 5                | Ext Other Gateways |
| 20231117   | 90003906     | 102         |             | 4550538204877 | 1   | 9900 | 9900.0     | 990.0 | 0.0     | 10890.0       | 5                | Ext Other Gateways |

## File Naming Scheme

* **File Name:** JP\_ECOM\_HOT\_YYMMDD\_HHMM.csv
* **File Path:** /home/newera-uat-sftp/bi-bw/store\_fulfilled\_orders/outgoing
* **File Frequency:** Once a day (end of day)

## Field Descriptions

### Order Date

The "Order Date" represents the date when the order is placed. It is expressed in the YYYYMMDD format.

* **Format:** YYYYMMDD (Year, Month, Day)
* **Value:** 20230426

**OMS field:** `orderDate`

### Order Number

The "Order Number" uniquely identifies an order by the Shopify Order Name. It is assigned by Shopify and serves as a reference to the specific order.

**OMS field:** `orderName`

### Item Number

The "Item Number" serves as a unique identifier for each item within the order. This is mapped to the OMS's item sequence ID.

**OMS field:**`orderItemSeqId`

### Material ID

This value is always empty and computed in BI/BW when the file is imported.

**Example** `||`

### EAN/UPC

The "EAN/UPC" field contains the NEC Unique product identifier, which corresponds to the Shopify UPC/Barcode or Shopify Product Barcode. It serves as a unique code that uniquely identifies a specific product.

**OMS field:** `GoodIdentificationTypeId = UPCA`

### Qty

Quanity of the item shipped

**OMS field:** `shipmentItems[n].itemQuantity/shippedQuantity`

### MSRP (Manufacturer's Suggested Retail Price)

This field signifies the price of the product before any discounts or promotions are applied. MSRP maps to the `Unit Price` field of the order item.

* **Format:** Numeric (Decimal)

**OMS field:** `shipmentItems[n].unitPrice`

### Sold Price

The "Sold Price" field represents the discounted price of the item. It captures the actual amount paid by the customer after applying any discounts.

**OMS field:** `soldPrice TBD`

### Tax

The sales tax is 10% of the MSRP of the product.

**OMS field:** `sum(orderAdjustmentTypeId = 'SALES_TAX')`

### Freight

The "Freight" field represents the shipping charges for the order, which includes shipping tax and adjustments. This value is applicable only to the first item in the order.

**OMS field:**

```sql
sum(orderAdjustmentTypeId = 'SHIPPING_CHARGES') 
+ sum(orderAdjustmentTypeId = 'SHIPPING_SALES_TAX 
+ sum(orderAdjustmentTypeId = 'EXT_SHIP_ADJUSTMENT')
```

### Customer Paid

The "Customer Paid" field represents the total amount paid by the customer for the order. It is calculated based on the Sold Price, Freight, and additional considerations for taxes and discounts.

#### Data Type

* **Format:** Numeric (Decimal)

#### Description

* For the first item in the order, the "Customer Paid" value includes the Item Price, Item Sales Tax, and Shipping Charge. For subsequent items, it includes only the Item Price and Item Sales Tax.

#### Notes

* The "Customer Paid" calculation is derived as follows:
  * For the first item: Item Price + Item Sales Tax + Shipping Charge
  * For subsequent items: Item Price + Item Sales Tax

### Smaregi Store No.

The Smaregi facility ID which is stored in the external ID of the facility in the OMS.

**OMS field:** `facilityExternalId`

### Tender Type

The "Tender Type" field denotes the payment gateway used for the order. Possible values include:

* Shopify Payment
* Softbank Payment
* Amazon Pay
* Paidy

HotWax will display the tender type based on the information stored in the payment preferences of the OMS.

**OMS field:**

```sql
"payments[0].paymentMethodCode OR
payments[0].paymentMethodDescription"
```
