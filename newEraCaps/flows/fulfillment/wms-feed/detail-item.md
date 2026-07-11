# Order Item Records

## Record Kind (S-61)
- **Description:** Detail indicator
- **Position:** 1-1
- The Detail Indicator (S-61) field will be fixed at 1 byte and always set to 'D'.

## S-62: SAP delivery schedule line
- **Length:** 7
- **Bytes:** 7
- The line item sequence ID of the order item from the OMS. Padding may need to be added to maintain fixed lenght.

## S-63 Item No.
- **Length:** 25
- **Bytes:** 25

### Description
Used to represent the SAP material and size of an item.

#### Data Format
- Example: "11308406-758"

### Notes
1. Confirmation is required regarding the goodIdentificationTypeId.

**S-65:** Quantity


**S-66:** HARDCODE = WH
  
## S-67: Nueve A JAN code
- **Length:** 13
- **Bytes:** 13
- **Type:** JAN code
- **Description:** Contains the JAN (Japanese Article Number) code associated with the brokered order items. JAN code will be extracted from the GoodIdentifications list. The goodIdentificationTypeId needs to be confirmed for accurate retrieval.
- **OMS Value:** Not used, leave empty

## S-70: JAN code
- **Length:** 13
- **Bytes:** 13
- **Type:** JAN code
- **OMS Value:** Extracted from the GoodIdentifications list, where goodIdentificationTypeId = UPCA

## S-71: SKU code (For Customer)

- **Length:** 25
- **Bytes:** 25
- **Type:** Alphanumeric
- **Description:** Represents the SKU (Stock Keeping Unit) code designated for the customer associated with the brokered order items.
- **OMS Value:** Not used, leave empty


## S-72: Product Name

- **Length:** 80
- **Bytes:** 80
- **Type:** Alphanumeric
- **Description:** Represents the product name or SAP material description associated with the brokered order items.
- **Conclusion:** This field will contain the product name or SAP material description. It should be mapped using the Shopify line item's "product.title" attribute, which may not necessarily be the variant name but the overall product title.
- **Mapping:** Shopify: `line_item["product"]["title"]`; SAP: `productName` or `itemDescription`.
- **Usage:** Relevant to both the product and order item details in the brokered file.

## S-73: Sales Value (Including VAT)

- **Length:** 20
- **Bytes:** 20
- **Type:** Numeric
- **Description:** Represents the total sales value, including VAT, for the order item in the brokered file.
- **Conclusion:** This field will contain the sum of the Item Unit Price, Item Sales Tax, and Item Discount amounts for each order item.
- **Mapping:** Shopify: Sum of `line_item["price"]`, `line_item["tax_lines"]["price"]`, and `line_item["total_discounts"]["amount"]`.
- **OMS Value:** Not used, leave Empty

## S-74: Sales Value (Without VAT)

- **Length:** 20
- **Bytes:** 20
- **Type:** Numeric
- **Description:** Represents the unit price of the item excluding VAT, as per the Ruby code.
- **Conclusion:** This field corresponds to the `unitPrice` of the item in the order and excludes the item discount amount.
- **Additional Notes:**
  - The item discount amount is excluded from this field.
  - If there is more than 1 quantity, the unit price remains the same for each item.

## S-75: Subtotal of Sales Value (Including VAT)
- **Length:** 20
- **Bytes:** 20
- **Type:** Numeric
- **Description:** Represents the subtotal of the unit prices of items, including VAT, as per the Ruby code.
- **Conclusion:** This field containts the actual unit cost of the order item, including VAT and item discount amounts.
- **OMS Value:** Not used, leave Empty

## S-76: Subtotal of Sales Value (Without VAT)
- **Length:** 20
- **Bytes:** 20
- **Type:** Numeric
- **Description:** Represents the subtotal of the order line item, excluding VAT, as per the Ruby code.

- **Additional Notes:**
  - The value is derived from the sum of `unitPrice` multiplied by `quantity` for each item in the order.
  - It includes item discount amounts and excludes VAT.


## S-77: Retail Value (Including VAT)
- **Length:** 20
- **Bytes:** 20
- **Type:** Numeric
- **Description:** Represents the retail value of the items, including VAT, without considering any discounts.
- **Conclusion:** This field contains the unit prices, including VAT, without applying any item discounts. It is similar to S-73 but excludes discounts.
- **OMS Value:** Not used, leave Empty

## S-78: Retail Value (Without VAT)
- **Length:** 20
- **Bytes:** 20
- **Type:** Numeric
- **Description:** Represents the retail value of the items, excluding VAT, without considering any discounts.
- **Conclusion:** This field contains unit price, excluding VAT, without applying any item discounts. It is the same as S-74 but without considering discounts.
- **OMS Value:** Not used, leave Empty

**S-79:** Subtotal of Retail Value (Including VAT)

- **Length:** 20
- **Bytes:** 20
- **Type:** Numeric
- **Description:** Represents the subtotal of the retail value of items, including VAT, without considering any discounts.
- **Conclusion:** This field contains the order item subtotal, including VAT, without applying any item discounts. It is the same as S-75 but without considering discounts.
- **OMS Value:** Not used, leave Empty

**S-80:** Size/Color (Delivery Slip with Amount, Delivery Slip without Amount, Chain Store Slip, etc)

- **Length:** 30
- **Bytes:** 30
- **Type:** Alphanumeric
- **Description:** Represents the size or color information of the ordered item.
- **Additional Notes:**
  - The mapping involves: `orderItem.productId -> ProductFeatureAppl.productFeatureId -> ProductFeature`.
  - The desired information is found in `ProductFeature.description` where `productFeatureTypeId = 'SIZE'`.
- **Usage:** Represents the size or color details of the ordered items for specific slip types, facilitating the understanding of product features.
  
**S-81:** OUT INFO - Shipment Date-Posting Date Header

- **Length:** 10
- **Bytes:** 10
- **Type:** Date
- **Conclusion:** This field is hardcoded with the value "2030/12/30".
- **Usage:** Serves as a fixed value header for shipment and posting dates.
- **OMS Value:** Not used, leave Empty

**S-82:** Sales Order and Purchase Credit Memo Quantity

- **Length:** 9
- **Bytes:** 9
- **Type:** Numeric
- **Description:** Represents the quantity to be shipped for a sales order.
- **OMS Value:** Not used, leave Empty

## S-83: Proof of Delivery Date

- **Length:** 10
- **Bytes:** 10
- **Type:** Date
- **Description:** In the sample data provided this is the same as the requested delivery date but in this format: `2016/07/06`
- **OMS Value:** Not used, leave Empty


{% hint style="warning" %}
For now we should copy over the value from S-7
{% endhint %}

## S-94: Subtotal of Retail Value (Without VAT)

- **Length:** 30
- **Bytes:** 30
- **Type:** Numeric
- **Description:** Subtotal of retail value without VAT for an order item.
- **OMS Value:** Not used, leave Empty

## S-97 to S-103: Reserved Fields

- **Length:** 30 each
- **Bytes:** 30 each
- **Type:** Not Applicable (N/A)
- **Description:** Reserved fields with no specified purpose.
- **Usage:** Reserved for potential future use or expansion.