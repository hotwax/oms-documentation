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


## Cust Order No. (S-3)

- **Description:** SAP Delivery Number
- **Position:** 16-16

## Cust Ref No. (S-4)

- **Description:** Not used
- **Position:** 16-16

## Order Date (S-5)

- **Description:** Order Date
- **Position:** 10-10

## Plan Shipped Date (S-6)

- **Description:** Not used
- **Position:** 10-10

## ETA (S-7)

- **Description:** Requested Delivery Date
- **Position:** 10-10

## ETA (S-9)

- **Description:** Delivery Time driven by VAS instruction
- **Position:** 2-2

## PCS (S-10)

- **Description:** Delivery quantity
- **Position:** 10-10

## Business Type (S-12)

- **Description:** Wholesale/EC indicator
- **Position:** 1-1

## DLV Service (S-13)

- **Description:** Delivery service
- **Position:** 2-2

## DLV Payment (S-14)

- **Description:** Payment type
- **Position:** 1-1

## DLV Payment (S-15)

- **Description:** Amount of payment Including VAT (Only Cash on Delivery)
- **Position:** 19-23

## DLV Payment (S-16)

- **Description:** Amount of payment Including VAT (Only Cash on Delivery)
- **Position:** 19-23

## Consignee (S-17 to S-25)

- **S-17:** SAP Sold-to Customer code
- **S-18:** Sold-to Name
- **S-19:** Sold-to Address
- **S-20:** Sold-to Address 2
- **S-21:** Not used
- **S-22:** Not used
- **S-23:** Sold-to Postal Code
- **S-24:** Not used
- **S-25:** Sold-to Phone number

## Delivery (S-26 to S-34)

- **S-26:** SAP Ship-to Customer code
- **S-27:** Ship-to Name
- **S-28:** Ship-to address
- **S-29:** Ship-to address 2
- **S-30:** Not used
- **S-31:** Not used
- **S-32:** Ship-to Postal code
- **S-33:** Not used
- **S-34:** Ship-to Phone number

## Status (S-38)

- **Description:** Delivery status (Delivery or confirmation)
- **Position:** 2-2

## Invoice (S-39)

- **Description:** Delivery Slip Instuctions - Driven by VAS
- **Position:** 2-2

## DC Incidental Operation Flag (S-40 to S-42)

- **S-40:** Tag Instructions Driven by VAS
- **S-41:** Special Slip Instructions Driven by VAS
- **S-42:** Packling List instructions - Driven by VAS

## DC Incidental Operation Comment (S-43 to S-44)

- **S-43:** DC comments 1 Driven by VAS
- **S-44:** DC comments 2 Driven by VAS

## Delivery Slip / Invoice (S-45 to S-56)

- **S-45:** Not used
- **S-46:** Customer PO
- **S-47:** Not used
- **S-48:** Not used
- **S-49:** Sales Order Date
- **S-50:** Payment Terms Code
- **S-51:** Hard coded
- **S-52:** Total retail price (Including VAT)
- **S-53:** Sales with VAT
- **S-54:** Sales no VAT
- **S-55:** VAT
- **S-56:** Total Price (JPY)

## Shipping Cost (S-57 to S-103)

- **S-57 to S-59:** Not used
- **S-84 to S-92:** Not used
- **S-93 to S-103:** Not used

## Record Kind (S-61)

- **Description:** Detail indicator
- **Position:** 1-1

## Item Info (S-62 to S-103)

- **S-62:** SAP delivery schedule line
- **S-63:** SAP material + size
- **S-65:** Quantity
- **S-66:** HARDCODE = WH
- **S-67:** Nueve A JAN code
- **S-68 to S-103:** Not used
