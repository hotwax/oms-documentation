---
description: >-
  Discover the significance of the header item within the brokered order feed
  process used by New Era Caps.
---

# Header Item

The header item is the first row of a new order in the brokered order feed. Instead of repeating header level details on every time, this file format has a seperate line for header details.

## Record Kind (S-1)

* **Description:** Header Indicator
* **Position:** 1-1
* **Value:** H

## Record Line (S-2)

* **Description:** Header Line #
* **Position:** 7-7
* **Example Value:** 0000000
* **Additional Information:** This field represents the sequential number assigned to each order header line. It is incremented for each record in the file, ensuring a unique identifier for each header line. It should be padded with 0's and should cover entire 7 bytes

## CUST ORDER NO. (S-3)

* **Description:** SAP Delivery Number
* **Position:** 16-16
* **Mandatory:** Yes
* **Additional Information:**
  * This field should contain the value of the Shopify Order Name.
  * The combination of the order number and the facility of fulfillment creates as a unique identifier even partial order fulfillment when receiving fulfilled orders from the WMS.

## Cust Ref No. (S-4)

* **Description:** Not used, leave empty
* **Position:** 16-16

## Order Date (S-5)

* **Description:** Order Date
* **Position:** 10-10
* **Format:** yyyy/mm/dd
* **Example Value:** 2023/04/20
* **Additional Information:**
  * Contains the Order Date information for the Order Header.

## Plan Shipped Date (S-6)

* **Description:** Not used, leave empty
* **Position:** 10-10

## ETA (S-7)

* **Description:** Requested Delivery Date
* **Position:** 10-10 This field is stored in the orders **Note Attributes** in Shopify and is synced an a seperate _order enrichment_ process. It is then store on every order item of the order in the `TBD` field.

Leave empty when not available on order item.

## ETA (S-9)

* **Description:** Delivery Time Similar to the delivery date field, this is stored in Shopify as a **Note Attribute**. When synced to the OMS it's also saved in the `TBD` field.
* **Position:** 2-2
* **OMS Value:** 64 (4pm - 6pm) A default option will be selected from here.
  * 60: 8:00 AM to 12:00 PM
  * 62: 12:00 PM to 2:00 PM
  * 63: 2:00 PM to 4:00 PM
  * 64: 4:00 PM to 6:00 PM
  * 65: 6:00 PM to 8:00 PM
  * 66: 8:00 PM to 9:00 PM

If no value is found, then leave this field empty.

## PCS (S-10)

* **Description:** Delivery Quantity
* **Position:** 10-10
* **Ussage** The total quantity to be delivered for an order. A sum of all the item qty in the brokered feed to the warehouse.

## BUSINESS TYPE (S-12)

* **Description:** Wholesale/eCommerce Indicator
* **Position:** 1-1
* **OMS Value:** 2

<details>

<summary>Additional Information</summary>

This field indicates the business type or category of the order.

* 1 - EC(B2B)
* 2 - EC(B2C)
* 3 - NAV(B2B)
* 4 - Transfer Order

For Transfer Order, the value will be 4; for other types, the value will be 2. Consider using OrderTypeId from OrderHeader, mapping it to:

* 2 - SALES\_ORDER
* 4 - TRANSFER\_ORDER

We expect it to be hardcoded "2".

</details>

## DLV SERVICE (S-13)

* **Description:** Delivery Service
* **Position:** 2-2
* **Data Type:** Numeric
* **Additional Information:**
  * This field represents the type delivery company used.
  * Numeric values are assigned as follows:
    * 1 = Perican
    * 2 = Air
    * 3 = Sagawa
  * This is mapped with the Carrier Party of the shipgroup.
  * We expect it to be hardcoded "3".

## DLV PAYMENT (S-14)

* **Description:** Payment Type/Gateway
* **Position:** 1-1
* **OMS Default Value:** 1
* **Additional Information:**
  * This field represents the type of payment for the order.
  * Numeric values are assigned as follows:
    * 1 = Prepaid (Credit Card)
    * 2 = Cash on Delivery
    * 3 = Amazon Pay
    * 4 = Paidy
  * The payment method of the order is checked, and the value is populated accordingly (1, 2, 3, or 4).
  * The field is associated with the `paymentMethodTypeId` in the `OrderPaymentPreferenceAndType`.
    * 1 - EXT\_SHP\_SHPFY\_PYMT
    * 2 - EXT\_SHOP\_CASH\_ON\_DEL
    * 3 - EXT\_SHP\_AMZN\_PAY
    * 4 - EXT\_SHP\_ PAIDY
  * Gift card payments are still processed through Shopify Payments which is will be mapped to `1`

{% hint style="warning" %}
**DLV PAYMENT S-15 and S-16** fields are for Cash on Delivery orders ONLY. Leave empty for other payment types.
{% endhint %}

## DLV PAYMENT (S-15)

* **Description:** Amount of Payment Including VAT (Only Cash on Delivery)
* **Position:** 19-23
* **Additional Information:**
  * This field is applicable only for orders with the payment type "Cash on Delivery" (DLV PAYMENT S-14 = 2).
  * It represents the total payment amount, including VAT, for cash on delivery orders.
  * The amount should correspond to the order total, not individual item totals.
  * The field is associated with the `grandTotal` in the `OrderHeader` along with the COD fee imported from Shopify order note attributes as order attributes in the OMS.

## DLV PAYMENT (S-16)

* **Description:** Amount VAT due on Delivery (Only Cash on Delivery)
* **Position:** 19-23
* **Additional Information:**
  * This field is applicable only for orders with the payment type "Cash on Delivery" (DLV PAYMENT S-14 = 2).
  * It represents the total VAT due for cash on delivery orders.
  * There is a distinction between S-15 and S-16:
    * S-15 represents the total payment amount.
    * S-16 represents the sum of sales tax on the item and the shipping sales tax.
  * The value for this field is calculated based on the sum of order adjustments where `orderAdjustmentTypeId` is `SHIPPING_SALES_TAX` and 10% of the COD fee in the order attribute.

## Consignee (S-17 to S-25)

_BILL-TO INFORMATION_

* **S-17:** SAP Bill-to Customer Code (Length: 10, Bytes: 10)
* **S-18:** Bill-to Name (Length: 35, Bytes: 35)
* **S-19:** Bill-to Address1 (Length: 75, Bytes: 75)
* **S-20:** Bill-to Address2 (Length: 75, Bytes: 75)
* **S-21:** Not used (Length: 35, Bytes: 35)
* **S-22:** Not used (Length: 35, Bytes: 35)
* **S-23:** Bill-to Postal Code (Length: 9, Bytes: 9)
* **S-24:** Not used (Length: 35, Bytes: 35)
* **S-25:** Bill-to Phone Number (Length: 14, Bytes: 14)

## Delivery (S-26 to S-34)

* **S-26:** SAP Ship-to Customer Code (Length: 10, Bytes: 10)
* **S-27:** Ship-to Name (Length: 35, Bytes: 35)
* **S-28:** Ship-to Address1 (Length: 75, Bytes: 75)
* **S-29:** Ship-to Address2 (Length: 75, Bytes: 75)
* **S-30:** Not used (Length: 35, Bytes: 35)
* **S-31:** Not used (Length: 35, Bytes: 35)
* **S-32:** Ship-to Postal Code (Length: 9, Bytes: 9)
* **S-33:** Not used (Length: 35, Bytes: 35)
* **S-34:** Ship-to Phone Number (Length: 14, Bytes: 14)
* **S-35** Not used (Length: 30, Bytes: 30)
* **S-36** Not shared
* **S-37** Not used (Length: 14, Bytes: 14)

## STATUS (S-38)

* **Description:** Delivery status indicating the progress of the order fulfillment.
* **Position** (Length: 2, Bytes: 2)
* **Mandatory:** Yes
* **Default Value:** 60 (fixed value for warehouse brokered order items to be fulfilled) Other values:
* 60: SHIP ORDER (NECJ → Nittsu)
* 70: SHIP RECEIVED (Nittsu → NECJ)
* 80: SHIP CONFIRMED (Nittsu → NECJ)
* 90: INVOICE NO. (NECJ → Nittsu)

## Invoice (S-39)

* **Description:** Delivery Slip Instuctions - Driven by VAS
* **Position:** 2-2
* **Default Value:** Always a fixed value of 2

<details>

<summary>All Mappings Options</summary>

* 1: NAVISION (B2B) Delivery Slip Only
* 2: EC Delivery Slip Only
* 30: Chain Store Slip (TSA)
* 31: Chain Store Slip (Robot)
* 32: Chain Store Slip (DAISEN)
* 33: Chain Store Slip (Mycal)
* 34: Chain Store Slip (neuve-a)
* 35: Chain Store Slip (KUROKAWA Sports)
* 36: Chain Store Slip (MITSUHASHI)
* 37: Chain Store Slip (AKATSUKA)
* 38: Chain Store Slip (fithouse)
* 4: NAVISION (B2B) Delivery Slip + Chain Store Slip
* 5: NAV Delivery Slip without Amount
* 6: Delivery Slip of MURASAKI Sports
* 70: Chain Store Slip Type 1 (Mycal)
* 71: Chain Store Slip Type 1 (KOTOBUKI SHOJI)
* 72: Chain Store Slip Type 1 (GEAR'S JAM)
* 73: Chain Store Slip Type 1 (YOSHIMOTO)
* 74: Chain Store Slip Type 1 (BIG AMERICAN SHOP)
* 75: Chain Store Slip Type 1 (YATOGOLF)
* 99: NO Delivery Slip

</details>

## DC Incidental Operation Flag (S-40 to S-42)

* **S-40:** DC Incidental Operation Flag (Length: 1, Bytes: 1)
  * **Description:** Instructions for incidental operations related to the delivery.
  * **Examples:**
    * 1: Attach Special Tag
    * 2: Bundle Special Tag
    * 3: Without Tag (Detach NECJ Tag)
    * 4: Attach 8% TAX Tag (\*Print specific sentence according to NAV Flag on Jun 2012)

{% hint style="danger" %}
As of now we expect this to be blank. Need to confirm with New Era.
{% endhint %}

* **S-41:** DC Incidental Operation Flag (Length: 1, Bytes: 1)
  * **Description:** Instructions for incidental operations related to the delivery of special slips to the customer.
  * **Notes:**
    * 1: Send mail of Customer Special Slip
    * 2: Deliver Customer Special Slip
    * 3: Deliver Customer Special Slip in handwriting (\*Print specific sentence according to NAV Flag on Jun 2012)

{% hint style="danger" %}
As of now we expect this to be blank. Need to confirm with New Era.
{% endhint %}

* **S-42:** DC Incidental Operation Flag (Length: 1, Bytes: 1)
  * **Description:** Instructions for incidental operations related to the attachment of packing lists.
  * **Notes:**
    * 1: Attach NewEra Packing List
    * 2: Attach each customer's Packing List
    * 3: Attach appendix
    * 4: XXX (Not fixed yet)

{% hint style="danger" %}
As of now we expect this to be blank. Need to confirm with New Era.
{% endhint %}

## DC Incidental Operation Comment (S-43 to S-44)

* **S-43:** DC comments 1 Driven by VAS
  * **OMS Mapping:**`Ship Group handling instructions`
* **S-44:** DC comments 2 Driven by VAS
  * Empty

## Delivery Slip / Invoice (S-45 to S-56)

* **S-45:** Not used (Length: 16, Bytes: 16)
* **S-46:** Customer PO (Length: 16, Bytes: 16)

{% hint style="danger" %}
As of now we expect this to be blank. Need to confirm with New Era.
{% endhint %}

* **S-47:** Not used (Length: 16, Bytes: 16)
* **S-48:** Not used (Length: 10, Bytes: 10)
* **S-49:** Order Date (Length: 10, Bytes: 10)
  * **Description:** Sales Order Date field containing the value of the order date.
  * **Notes:**
    * The format for the date should be 'yyyy/mm/dd'.
    * Confirmed to be the same value as ORDER DATE (S-5).
  * **Example:** '2023/04/20'
* **S-50:** Payment Term (Length: 30, Bytes: 30)
  * **Description:** This field signifies the payment terms associated with the order.
  * **OMS Value** This value will be left empty for all B2C orders since payment terms are only applicable for B2B orders which the OMS is not processing.
* **S-51:** Payment Due Date (Length: 10, Bytes: 10)
  * **Description:** Hard-coded payment due date as '2/5/2031'.
  * **OMS Value:** Not used, leave empty
* **S-52:** Total Retail Price (Including VAT) (Length: 20, Bytes: 20)
  * **Example:** '407376'
  * **Description:** Total retail price of the order, including VAT. This represents the overall retail value of the items, including any applicable Value Added Tax (VAT).
  * **OMS Value:** Not used, leave empty
* **S-53:** Total Sales Price (Including VAT) (Length: 20, Bytes: 20)
  * **Example:** '203688'
  * **Description:** Total sales price of the order, including VAT. This specifically represents the final price paid by the customer, inclusive of any applicable Value Added Tax (VAT).
  * **OMS Value:** Not used, leave empty

**Note:** While both fields include VAT, the distinction lies in the nature of the amounts. The 'Total Retail Price' may reflect the full retail value of the items, whereas the 'Total Sales Price' is the actual amount paid by the customer, possibly accounting for discounts or promotions.

* **S-54:** Total Price (Without VAT) (Length: 20, Bytes: 20)
  * **Description:** Total price of the order without VAT.
  * **Example:** '188600'
* **S-55:** VAT (Length: 20, Bytes: 20)
  * **Description:** Value Added Tax (VAT) amount associated with the order which is generally about 10%.
  * **Note:** The VAT field should indeed include the Item Sales Tax.
* **S-56:** Total Price (JPY) (Length: 20, Bytes: 20)
  * **Description:** Total price in Japanese Yen (JPY) for the order item, inclusive of the item unit price, item sales tax, and item discount amounts. Effectivley the order grand total plus the COD Fee if applicable to the order. The order total shoudl come out to the same as S-53

## Shipping Cost (S-57 to S-103)

**S-57** Shipping Cost

* **Length:** 20
* **Bytes:** 20

### Description

The Shipping Cost field represents the total shipping cost associated with an order.

### Usage

The calculation involves the sum of order adjustments where the order adjustment type is SHIPPING\_CHARGES, EXT\_SHIP\_ADJUSTMENT, or SHIPPING\_SALES\_TAX.

**S-58** Handling Charge

* **Length:** 20
* **Bytes:** 20
* **Data Type:** NUMERIC
* **Description:** The Handling Charges will be the Cash on Delivery Fees.
* **OMS Value:** COD fee + COD fee tax
<!-- This field is currently marked as not used, and empty spaces will be added. Discussions are ongoing regarding the inclusion of the transaction\_fee in this field. Transaction\_fee is set in the customAttributes at the OrderLevel.

_Open Discussion Topics_

1. Clarification on how transaction\_fee is modeled in handling charges.
2. Verification of the existence of transaction\_fee in the differences file. -->

**S-59:** Not used

* **Length:** 20
* **Bytes:** 20
* **Data Type:** NUMERIC

## S-84: Total Retail Price (Including VAT)

* **Length:** 20 characters
* **Bytes:** 20 bytes
* **Type:** Numeric

### Description

The Total Retail Price (Including VAT) field (S-84) represents the total retail price of an order item, including VAT, item unit price, item sales tax, and item discount amounts.

### Usage

This field should contain the total value of the order item, which includes the sum of the item unit price, item sales tax, and item discount amounts.

**Keep it blank, empty spaces will be added**

### Notes

* The value in this field is calculated based on the total\_products\_price, which is refundable\_quantity multiplied by discountedUnitPrice for each line item.
* It includes the sum of the fields S-54 (Total Price Without VAT) and S-55 (VAT).
* The exact calculation may need confirmation from the team.

## S-85 Shop Code

* **Field Name:** Shop Code
* **Length:** 4
* **Bytes:** 4
* **Not Used**

### Description

The Shop Code field (S-85) is not used in the context of the brokered order items file.

## S-86 Status

* **Field Name:** Status
* **Length:** 3
* **Bytes:** 3
* **Not Used**

### Description

The Status field (S-86) is not used in the context of the brokered order items file.

## S-87 to S-93 N/A Fields

* **Field Names:** S-87, S-88, S-89, S-90, S-91, S-92, S-93
* **Length:** 30 for each
* **Bytes:** 1000, 30, 30, 30, 30, 30, 30 (respectively)
* **Not Used**

### Description

These fields (S-87 to S-93) are not used in the context of the brokered order items file.

* **S-93 to S-103:** Not used

***
