# WMS Feed

The WMS feed is a fixed byte length format rather than a CSV or a JSON.

## What is a fixed byte file format?

A fixed byte file format, also known as a fixed-width file format, is a type of flat file where each field or column has a fixed width or length. In contrast to delimited file formats (such as CSV or tab-delimited), where fields are separated by a specific delimiter character (like a comma or tab), fixed-width files allocate a predetermined number of characters for each field, and the data is organized accordingly.

Here are key characteristics of a fixed byte file format:

1. **Field Width:** Each field in the file has a fixed width or length specified in terms of the number of characters. For example, a field might be defined as 10 characters wide.

2. **Padding:** If the actual data for a field does not use the full allocated width, padding characters (typically spaces) are added to fill the remaining space. This ensures that each field has a consistent length.

3. **Positional Structure:** The position of each field is crucial, as the file format relies on the exact position of characters to interpret the data correctly. Fields are aligned based on their starting positions.

4. **No Delimiters:** Unlike delimited file formats, fixed-width files do not use special characters (e.g., commas or tabs) to separate fields. Instead, the file's structure is determined by the position and width of each field.

5. **Header Row:** Fixed-width files often include a header row that defines the layout and format of the data. The header specifies the starting position and width of each field.

6. **Readability:** While fixed-width files may be less human-readable than delimited files, they offer advantages in terms of simplicity, especially when dealing with data of a consistent and known structure.

Examples of systems that commonly use fixed-width file formats include legacy systems, mainframes, and certain database systems. In such cases, the fixed-width format provides a straightforward and efficient way to structure and store data.

## Field details

# Fixed Byte File Format Documentation

## Record Kind (S-1)

- **Description:** Header Indicator
- **Position:** 1-1

## Record Line (S-2)

- **Description:** Header Line #
- **Position:** 7-7
- **Example Value:** 0000000
- **Additional Information:** This field represents the sequential number assigned to each order header line. It is incremented for each record in the file, ensuring a unique identifier for each header line.


## CUST ORDER NO. (S-3)
- **Description:** SAP Delivery Number
- **Position:** 16-16
- **Mandatory:** Yes
- **Example Value:** [Value from the 'orderName' column in the orderHeader]
- **Additional Information:**
  - This field should contain the value of the Shopify Order Name.
  - The combination of the order number and the facility of fulfillment creates as a unique identifier even partial order fulfillment.


## Cust Ref No. (S-4)
- **Description:** Not used, leave empty
- **Position:** 16-16

## Order Date (S-5)
- **Description:** Order Date
- **Position:** 10-10
- **Format:** yyyy/mm/dd
- **Example Value:** 2023/04/20
- **Additional Information:**
  - This field represents the date of the sales order.
  - It contains the Order Date information for the Order Header.

## Plan Shipped Date (S-6)

- **Description:** Not used, leave empty
- **Position:** 10-10

## ETA (S-7)
{% hint style="danger" %}
New Era has not marked this field as not required. Need to verify if this can be left empty.
{% endhint %}
- **Description:** Requested Delivery Date
- **Position:** 10-10

## ETA (S-9)
{% hint style="danger" %}
New Era has not marked this field as not required. Need to verify if this can be left empty.
{% endhint %}
- **Description:** Delivery Time driven by VAS instruction
- **Position:** 2-2

## PCS (S-10)
{% hint style="danger" %}
At the header level does this include a rollup of total items shipped?
{% endhint %}
- **Description:** Delivery Quantity
- **Position:** 10-10
- **Example Value:** 8
- **Additional Information:**
  - The value is prepared at the line item level and includes the order item quantity.
  - Empty spaces will be added for this field on the header row.
  - Ensure that the data at the line item level is appropriately reflected in this field.
  - It provides information about the total quantity to be delivered for each order.

## BUSINESS TYPE (S-12)

- **Description:** Wholesale/EC Indicator
- **Position:** 1-1
- **Example Value:** 2
- **Additional Information:**
  - This field indicates the business type or category of the order.
  - The values are mapped as follows:
    - 1 = EC(B2B)
    - 2 = EC(B2C)
    - 3 = NAV(B2B)
    - 4 = Transfer Order
  - For Transfer Order, the value will be 4; for other types, the value will be 2.
  - Consider using OrderTypeId from OrderHeader, mapping it to:
    - 2 for SALES_ORDER
    - 4 for TRANSFER_ORDER.

## DLV SERVICE (S-13)

- **Description:** Delivery Service
- **Position:** 2-2
- **Example Value:** 3
- **Data Type:** Numeric
- **Additional Information:**
  - This field represents the type delivery company used.
  - Numeric values are assigned as follows:
    - 1=Perican
    - 2=Air
    - 3=Sagawa
  - It is usually mapped with the Carrier Party of the shipgroup, and the value is populated based on the carrier party (1, 2, or 3).
  - Provides information about the selected delivery service for the order.


## DLV PAYMENT (S-14)

- **Description:** Payment Type
- **Position:** 1-1
- **Example Value:** 1
- **Additional Information:**
  - This field represents the type of payment for the order.
  - Numeric values are assigned as follows:
    - 1=Prepaid (Credit Card)
    - 2=Cash on Delivery
    - 3=Amazon Pay
    - 4=Paidy
  - The payment method of the order is checked, and the value is populated accordingly (1, 2, 3, or 4).
  - The field is associated with the `paymentMethodTypeId` in the `OrderPaymentPreferenceAndType`.
{% hint style="warning" %}
There is no default value in case of unexpected payment methods; however, it is not expected to encounter such scenarios frequently.
{% endhint %}
{% hint style="danger" %}
Further clarification may be needed on how to handle orders using gift card payments.
{% endhint %}

## DLV PAYMENT (S-15)

- **Description:** Amount of Payment Including VAT (Only Cash on Delivery)
- **Position:** 19-23
- **Example Value:** (Numeric value representing the amount)
- **Additional Information:**
  - This field is applicable only for orders with the payment type "Cash on Delivery" (DLV PAYMENT S-14 = 2).
  - It represents the total payment amount, including VAT, for cash on delivery orders.
  - The amount should correspond to the order total, not individual item totals.
  - For payment methods other than Cash on Delivery, the field should be left empty.
  - The field is associated with the `grandTotal` in the `OrderHeader`.

## DLV PAYMENT (S-16)

- **Description:** Amount of Payment Including VAT and VAT Amount (Only Cash on Delivery)
- **Position:** 19-23
- **Example Value:** (Numeric value representing the amount)
- **Additional Information:**
  - This field is applicable only for orders with the payment type "Cash on Delivery" (DLV PAYMENT S-14 = 2).
  - It represents the total payment amount, including VAT, for cash on delivery orders, as well as the corresponding VAT amount.
  - There is a distinction between S-15 and S-16:
    - S-15 represents the total payment amount.
    - S-16 represents the sum of sales tax on the item and the shipping sales tax.
  - The value for this field is calculated based on the sum of order adjustments where `orderAdjustmentTypeId` is 'SHIPPING_SALES_TAX'.
  - Please refer to the provided Ruby code for specific details on the calculation: [Ruby Code](https://github.com/flagship-llc/newera_wms/blob/master/app/services/generate_order_file.rb#L268).
{% hint style="warning" %}
The distinction between S-15 and S-16 is not clear
{% endhint %}

## Consignee (S-17 to S-25)
(BILL-TO INFORMATION)

- **S-17:** SAP Bill-to Customer Code (Length: 10, Bytes: 10)
- **S-18:** Bill-to Name (Length: 35, Bytes: 35)
- **S-19:** Bill-to Address1 (Length: 75, Bytes: 75)
- **S-20:** Bill-to Address2 (Length: 75, Bytes: 75)
- **S-21:** Not used (Length: 35, Bytes: 35)
- **S-22:** Not used (Length: 35, Bytes: 35)
- **S-23:** Bill-to Postal Code (Length: 9, Bytes: 9)
- **S-24:** Not used (Length: 35, Bytes: 35)
- **S-25:** Bill-to Phone Number (Length: 14, Bytes: 14)


## Delivery (S-26 to S-34)

- **S-26:** SAP Ship-to Customer Code (Length: 10, Bytes: 10)
- **S-27:** Ship-to Name (Length: 35, Bytes: 35)
- **S-28:** Ship-to Address1 (Length: 75, Bytes: 75)
- **S-29:** Ship-to Address2 (Length: 75, Bytes: 75)
- **S-30:** Not used (Length: 35, Bytes: 35)
- **S-31:** Not used (Length: 35, Bytes: 35)
- **S-32:** Ship-to Postal Code (Length: 9, Bytes: 9)
- **S-33:** Not used (Length: 35, Bytes: 35)
- **S-34:** Ship-to Phone Number (Length: 14, Bytes: 14)

## STATUS (S-38)

- **S-38:** Order Status (Length: 2, Bytes: 2)
  - **Description:** Delivery status indicating the progress of the order fulfillment.
  - **Mandatory:** Yes
  - **Validity:** Should be one of the following values:
    - 60: SHIP ORDER (NECJ → Nittsu)
    - 70: SHIP RECEIVED (Nittsu → NECJ)
    - 80: SHIP CONFIRMED (Nittsu → NECJ)
    - 90: INVOICE NO. (NECJ → Nittsu)
  - **Default Value:** 60 (fixed value for warehouse brokered order items to be fulfilled)

## Invoice (S-39)

- **Description:** Delivery Slip Instuctions - Driven by VAS
- **Position:** 2-2
- **Default Value:** Always a fixed value of 2

<details>
<summary>All Mappings Options</summary>
- 1: NAVISION (B2B) Delivery Slip Only
- 2: EC Delivery Slip Only
- 30: Chain Store Slip (TSA)
- 31: Chain Store Slip (Robot)
- 32: Chain Store Slip (DAISEN)
- 33: Chain Store Slip (Mycal)
- 34: Chain Store Slip (neuve-a)
- 35: Chain Store Slip (KUROKAWA Sports)
- 36: Chain Store Slip (MITSUHASHI)
- 37: Chain Store Slip (AKATSUKA)
- 38: Chain Store Slip (fithouse)
- 4: NAVISION (B2B) Delivery Slip + Chain Store Slip
- 5: NAV Delivery Slip without Amount
- 6: Delivery Slip of MURASAKI Sports
- 70: Chain Store Slip Type 1 (Mycal)
- 71: Chain Store Slip Type 1 (KOTOBUKI SHOJI)
- 72: Chain Store Slip Type 1 (GEAR'S JAM)
- 73: Chain Store Slip Type 1 (YOSHIMOTO)
- 74: Chain Store Slip Type 1 (BIG AMERICAN SHOP)
- 75: Chain Store Slip Type 1 (YATOGOLF)
- 99: NO Delivery Slip
</details>

## DC Incidental Operation Flag (S-40 to S-42)

- **S-40:** DC Incidental Operation Flag (Length: 1, Bytes: 1)
  - **Description:** Instructions for incidental operations related to the delivery.
  - **Examples:**
    - 1: Attach Special Tag
    - 2: Bundle Special Tag
    - 3: Without Tag (Detach NECJ Tag)
    - 4: Attach 8% TAX Tag (*Print specific sentence according to NAV Flag on Jun 2012)
{% hint style="danger" %}
As of now we expect this to be blank. Need to confirm with New Era.
{% endhint %}

- **S-41:** DC Incidental Operation Flag (Length: 1, Bytes: 1)
  - **Description:** Instructions for incidental operations related to the delivery of special slips to the customer.
  - **Notes:**
    - 1: Send mail of Customer Special Slip
    - 2: Deliver Customer Special Slip
    - 3: Deliver Customer Special Slip in handwriting (*Print specific sentence according to NAV Flag on Jun 2012)
{% hint style="danger" %}
As of now we expect this to be blank. Need to confirm with New Era.
{% endhint %}

- **S-42:** DC Incidental Operation Flag (Length: 1, Bytes: 1)
  - **Description:** Instructions for incidental operations related to the attachment of packing lists.
  - **Notes:**
    - 1: Attach NewEra Packing List
    - 2: Attach each customer's Packing List
    - 3: Attach appendix
    - 4: XXX (Not fixed yet)
{% hint style="danger" %}
As of now we expect this to be blank. Need to confirm with New Era.
{% endhint %}

## DC Incidental Operation Comment (S-43 to S-44)

- **S-43:** DC comments 1 Driven by VAS
  - **OMS Mapping:**```Ship Group handling instructions```
- **S-44:** DC comments 2 Driven by VAS
  - Empty

## Delivery Slip / Invoice (S-45 to S-56)

- **S-45:** Not used
- **S-46:** Customer PO
{% hint style="danger" %}
As of now we expect this to be blank. Need to confirm with New Era.
{% endhint %}
- **S-47:** Not used
- **S-48:** Not used
- **S-49:** Order Date (Length: 10, Bytes: 10)
  - **Description:** Sales Order Date field containing the value of the order date.
  - **Notes:**
    - The format for the date should be 'yyyy/mm/dd'.
    - Confirmed to be the same value as ORDER DATE (S-5).
  - **Example:** '2023/04/20'

- **S-50:** Payment Term (Length: 30, Bytes: 30)
  - **Description:** Payment Terms Code field.
  - **Notes:**
    - This field signifies the payment terms associated with the order.
    - If not applicable, the field should be left blank.
  - **Example:** 'Z624'
{% hint style="danger" %}
As of now we expect this to be blank. Need to confirm with New Era.
{% endhint %}

- **S-51:** Payment Due Date (Length: 10, Bytes: 10)
  - **Description:** Hard-coded payment due date.
  - **Notes:**
    - This field contains a specific date, and it is hard-coded as '2/5/2031'.

- **S-52:** Total Retail Price (Including VAT) (Length: 20, Bytes: 20)
  - **Example:** '407376'
  - **Description:** Total retail price of the order, including VAT. This represents the overall retail value of the items, including any applicable Value Added Tax (VAT).

- **S-53:** Total Sales Price (Including VAT) (Length: 20, Bytes: 20)
  - **Example:** '203688'
  - **Description:** Total sales price of the order, including VAT. This specifically represents the final price paid by the customer, inclusive of any applicable Value Added Tax (VAT).

**Note:** While both fields include VAT, the distinction lies in the nature of the amounts. The 'Total Retail Price' may reflect the full retail value of the items, whereas the 'Total Sales Price' is the actual amount paid by the customer, possibly accounting for discounts or promotions.

- **S-54:** Total Price (Without VAT) (Length: 20, Bytes: 20)
  - **Description:** Total price of the order without VAT.
  - **Example:** '188600'

- **S-55:** VAT (Length: 20, Bytes: 20)
  - **Description:** Value Added Tax (VAT) amount associated with the order which is generally about 10%.
  - **Additional Information:** This field is used to represent the specific VAT amount applicable to the order.
**Note:** The VAT field should indeed include the Item Sales Tax.

- **S-56:** Total Price (JPY) (Length: 20, Bytes: 20)
{% hint style="danger" %}
There is alot of logic here that I am not clear on. Need to review with the team.
{% endhint %}

  - **Description:** Total price in Japanese Yen (JPY) for the order item, inclusive of the item unit price, item sales tax, and item discount amounts.
  - **Additional Information:** The total_products_price, shipping_cost, and transaction_fee contribute to the calculation of this field. If the note attribute contains a key with the value "代引き手数料" (COD fee), the transaction_fee is set accordingly, and manual_cod_fee is flagged as true.

Additional Notes

- **total_products_price Calculation:**
  - The `total_products_price` is calculated as `refundable_quantity * discountedUnitPrice` for each line item.
  - There's a discussion point regarding whether to include the sum of all item unit prices of an order in this field. Further clarification is needed from New Era team.

- **Total Price (JPY) Components:**
  - The Total Price (JPY) (S-56) is determined by the sum of S-54 (Total Price (Without VAT)) and S-55 (VAT).
  - It's mentioned that this sum also includes the `transaction_fee`. Clarification is needed on whether to accommodate the `transaction_fee` in this field.
  
- **Discussion Required:**
  - There's a note indicating the need to check the Ruby Code file for details. A specific question related to including the sum of all item unit prices in the `total_products_price` field requires discussion and clarification from the team.



## Shipping Cost (S-57 to S-103)

**S-57** Shipping Cost
- **Length:** 20
- **Bytes:** 20

### Description
The Shipping Cost field represents the total shipping cost associated with an order.

### Usage
This field is used to capture the sum of shipping charges, shipping discount, and shipping tax. 

The calculation involves the sum of order adjustments where the order adjustment type is SHIPPING_CHARGES, EXT_SHIP_ADJUSTMENT, or SHIPPING_SALES_TAX.

### Special Considerations
- For click_and_collect_order, the shipping cost is set to 0.
- The formula for shipping cost preparation is (Shipping charges - shipping discount) * 1.1.
{% hint style="danger" %}
The last line in considerations is not clear, what is this calculation supposed to be used for?
{% endhint %}

**S-58** Handling Charge
- **Length:** 20
- **Bytes:** 20
- **Data Type:** NUMERIC

### Description
The Handling Charge field is reserved for handling charges associated with an order.

### Usage
This field is currently marked as not used, and empty spaces will be added. Discussions are ongoing regarding the inclusion of the transaction_fee in this field. Transaction_fee is set in the customAttributes at the OrderLevel.

### Open Discussion Topics
1. Clarification on how transaction_fee is modeled in handling charges.
2. Verification of the existence of transaction_fee in the differences file.

- **S-59:** Not used
  - **Length:** 20
  - **Bytes:** 20
  - **Data Type:** NUMERIC

### Description
The Total Retail Price (Including VAT) field (S-84) represents the total retail price of an order item, including VAT, item unit price, item sales tax, and item discount amounts.

### Usage
This field should contain the total value of the order item, which includes the sum of the item unit price, item sales tax, and item discount amounts.

### Notes
- The value in this field is calculated based on the total_products_price, which is refundable_quantity multiplied by discountedUnitPrice for each line item.
- It includes the sum of the fields S-54 (Total Price Without VAT) and S-55 (VAT).
- The exact calculation may need confirmation from the team.

## S-85 Shop Code
- **Field Name:** Shop Code
- **Length:** 4
- **Bytes:** 4
- **Not Used**

### Description
The Shop Code field (S-85) is not used in the context of the brokered order items file.

## S-86 Status
- **Field Name:** Status
- **Length:** 3
- **Bytes:** 3
- **Not Used**

### Description
The Status field (S-86) is not used in the context of the brokered order items file.

## S-87 to S-93 N/A Fields
- **Field Names:** S-87, S-88, S-89, S-90, S-91, S-92, S-93
- **Length:** 30 for each
- **Bytes:** 1000, 30, 30, 30, 30, 30, 30 (respectively)
- **Not Used**

### Description
These fields (S-87 to S-93) are not used in the context of the brokered order items file.

- **S-93 to S-103:** Not used

***
# Order Item Records

## Record Kind (S-61)
- **Description:** Detail indicator
- **Position:** 1-1
- The Detail Indicator (S-61) field will be fixed at 1 byte and always set to 'D'.

## Item Info (S-62 to S-103)

**S-62:** SAP delivery schedule line
  - The line item sequence ID of the order item from the OMS
{% hint style="danger" %}
Can we just use the order line item sequence ID from the OMS?
{% endhint %}

**S-63** Item No.
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
  
**S-67:** Nueve A JAN code
- **Length:** 13
- **Bytes:** 13
- **Type:** JAN code
- **Description:** Contains the JAN (Japanese Article Number) code associated with the brokered order items. JAN code will be extracted from the GoodIdentifications list. The goodIdentificationTypeId needs to be confirmed for accurate retrieval.

Note: It is recommended to use the variant barcode value for this field.

**S-71:** SKU code (For Customer)

- **Length:** 25
- **Bytes:** 25
- **Type:** Alphanumeric
- **Description:** Represents the SKU (Stock Keeping Unit) code designated for the customer associated with the brokered order items.


**S-72:** Product Name

- **Length:** 80
- **Bytes:** 80
- **Type:** Alphanumeric
- **Description:** Represents the product name or SAP material description associated with the brokered order items.
- **Conclusion:** This field will contain the product name or SAP material description. It should be mapped using the Shopify line item's "product.title" attribute, which may not necessarily be the variant name but the overall product title.
- **Mapping:** Shopify: `line_item["product"]["title"]`; SAP: `productName` or `itemDescription`.
- **Usage:** Relevant to both the product and order item details in the brokered file.

**S-73:** Sales Value (Including VAT)

- **Length:** 20
- **Bytes:** 20
- **Type:** Numeric
- **Description:** Represents the total sales value, including VAT, for the order item in the brokered file.
- **Conclusion:** This field will contain the sum of the Item Unit Price, Item Sales Tax, and Item Discount amounts for each order item.
- **Mapping:** Shopify: Sum of `line_item["price"]`, `line_item["tax_lines"]["price"]`, and `line_item["total_discounts"]["amount"]`.

**S-74:** Sales Value (Without VAT)

- **Length:** 20
- **Bytes:** 20
- **Type:** Numeric
- **Description:** Represents the unit price of the item excluding VAT, as per the Ruby code.
- **Conclusion:** This field corresponds to the `unitPrice` of the item in the order and excludes the item discount amount.
- **Additional Notes:**
  - This value is calculated based on the `unitPrice` of the item in the order.
  - The item discount amount is excluded from this field.
  - For orders with multiple items, the unit price is sent for all items.
  - If there is more than 1 quantity, the unit price remains the same for each item.
- **Mapping:** Shopify: `line_item["price"]` (unitPrice)
- **Usage:** Represents the unit price of the item in the brokered file, excluding VAT and item discounts.
