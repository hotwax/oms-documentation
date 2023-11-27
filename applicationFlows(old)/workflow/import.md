# Import

## Introduction

HotWax Commerce’s Import app streamlines the process of importing the Purchase Orders (PO) and Inventory into the OMS. To know more about the Import app, click here.

This document presents pages and functions for managing purchase order (PO) and inventory through the HotWax Commerce's Import app.



**List of pages:**

* Inventory Upload page
* Inventory Review page
* Purchase Order Upload page
* Purchase Order Review page
* Saved Mappings page

***

### Inventory Page

Import the inventory which is then reflected in the OMS.



**Characteristics:**

1. **Upload Inventory CSV**: The user can upload inventory CSV from the system.
2.  **Column Index:** When the user uploads a CSV file it might have indexes with different names. So the user have to select the column index for:

    1. Product SKU
    2. Quantity
    3. Facility ID
    4. Facility Location



![Image: Inventory Page](<../.gitbook/assets/0 (1).png>)



**Functions**



**a. Upload Inventory CSV**

Upload inventory CSV to the OMS.



| **Column Index**  | **Description**                       |
| ----------------- | ------------------------------------- |
| Product SKU       | Unique identifier of the product.     |
| Quantity          | Number of products.                   |
| Facility ID       | Unique identifier of the facility.    |
| Facility Location | Location where the product is stored. |



{% embed url="https://youtu.be/SAnHCCr3I3E" %}
Video: Upload Inventory CSV
{% endembed %}





**b. New Inventory Mapping**

Creating a mapping aligns the column index mappings of the external CSV file with those of HotWax Commerce, eliminating the need to manually adjust each column's index.

{% embed url="https://youtu.be/QQ566qe13xk" %}
Video: New Mapping
{% endembed %}



**c. Review Inventory**

Derives to the comprehensive inventory view.

{% embed url="https://youtu.be/NSv3xC-ClsI" %}
Video: Review function
{% endembed %}

***

### Inventory Review page

Provides a detailed view of inventory CSV data and helps users identify and fix errors in the file.



**Characteristics:**

* **Data Verification:** Users can review the information to ensure that it accurately represents the data they intend to import.
* **Error Handling:** If there are any data or mapping errors, the page will show prompts to help users fix them before uploading the inventory.

![Image: Inventory Review Page](<../.gitbook/assets/1 (1).png>)



**Functions**



**a. Search Inventory Items**

Search the inventory product by the unique identifiers.

{% embed url="https://youtu.be/JBwpVcgY7tM" %}
Video: Search Inventory items
{% endembed %}



**b. Bulk Adjustments**

Add buffer stock to meet customer demand against uncertainties of demand, production or procurement. The user can also select the facility where they want to keep the buffer stock.

{% embed url="https://youtu.be/tMc46NSDN0E" %}
Video: Bulk Adjustments
{% endembed %}



**c. Missing Facilities**

Allows changing the facility in case an incorrect facility ID is included in the CSV.

{% embed url="https://youtu.be/1SD3t_xLKws" %}
Video: MIssing facilities
{% endembed %}



**d. Missing Products**

Allows changing the facility in case an incorrect product SKU is entered in the CSV.

{% embed url="https://youtu.be/rK_MxTYciVI" %}
Video: MIssing products
{% endembed %}



**e. Checkbox**

Select products individually and all together for quick upload.

{% embed url="https://youtu.be/MbE_vUbRFa4" %}
Video: Checkbox
{% endembed %}



**f. Reset**

Clear any product selections they have made on the Review page.

{% embed url="https://youtu.be/naMDxW0hKpM" %}
Video: Reset function
{% endembed %}



**g. Upload Inventory**

Enables uploading the inventory data.

{% embed url="https://youtu.be/6M1_Q41hM8s" %}
Video: Upload Inventory
{% endembed %}

***



### Purchase Orders Page

The Purchase Order (PO) page enables users to import the purchase order which is then reflected in the OMS.



**Characteristics:**

* **Upload Purchase Order CSV**: The user can upload the Purchase Order CSV from their system.
* **Column Index:** When the user uploads the CSV file it might have indexes with different names. So the user have to select the column index for:
  1. Order ID
  2. Shopify Product SKU
  3. Arrival Date
  4. Ordered Quantity
  5. Facility ID

![Image: Purchase orders page](../.gitbook/assets/2.png)



**Function**



**a. Upload PO CSV**

Upload purchase order CSV to the OMS.

| **Column Index**    | **Description**                             |
| ------------------- | ------------------------------------------- |
| Order ID            | Unique identifier of the order.             |
| Shopify Product SKU | Shopify’s unique identifier of the product. |
| Arrival Date        | Expected arrival date of order.             |
| Ordered Quantity    | Number of products.                         |
| Facility ID         | Unique identifier of the facility.          |

{% embed url="https://youtu.be/vaTekLquBqw" %}
Video: Upload Purchase Order CSV
{% endembed %}



**b. New Purchase Order Mapping**

Creating a mapping align the column index mappings of the external CSV file with those of HotWax Commerce, eliminating the need to manually specify each column's index.

{% embed url="https://youtu.be/X96Qrj-v0a0" %}
Video: New Purchase Order Mapping
{% endembed %}





**c. Review**

Derives the comprehensive PO view.

{% embed url="https://youtu.be/cEC_U0jer2k" %}
Video: Review Purchase Order
{% endembed %}



***

### **Purchase Order Review Page**

Provides a detailed of PO CSV data and helps users identify and fix errors in the CSV file.



**Characteristics**

* **Data Verification:** Users can review the information to ensure that it accurately represents the data they intend to import.
* **Error Handling:** If there are any data or mapping errors, the page will show prompts to help users fix them before uploading the PO.

![Image: Purchase Order Review Page](../.gitbook/assets/3.png)



**Functions**



**a. Search Purchase Order Items**

Search the product by unique identifiers.

{% embed url="https://youtu.be/tY4pSU3MONU" %}
Video: Search Purchase Order items
{% endembed %}



**b. Bulk Adjustment**

Add configurations using bulk adjustment pop-up screen.

{% embed url="https://youtu.be/lDHBXWBAjSM" %}
Video: Bulk Purchase Order page
{% endembed %}



**c. Date Time Parse Error**

Add configurations using date time parse error pop-up screen.

{% embed url="https://youtu.be/94Agvrx5YIg" %}
Video: Date time parse error
{% endembed %}



**d. Missing Facilities in Purchase Order**

Add missing mappings using missing facilities pop-up screen.

{% embed url="https://youtu.be/craN2xS3X2Y" %}
Video: Missing facilities in purchase order
{% endembed %}



**e. Missing Products in Purchase Order**

Add missing SKU’s using the missing products pop-up screen.

{% embed url="https://youtu.be/_bRazCIwDU0" %}
Video: MIssing product in purchase order
{% endembed %}



**f. Checkbox**

Select products individually, multiply and all together for quick upload.

{% embed url="https://youtu.be/gGWT1QVheAM" %}
Video: Checkbox
{% endembed %}



**g. Reset**

Reset the whole or individual product data to undo the tasks performed.

{% embed url="https://youtu.be/QIJgWHZEbmg" %}
Video: Reset
{% endembed %}



**h. Purchase Order Filter**

View purchase orders for a specific facility.

{% embed url="https://youtu.be/LCASR6tqYcE" %}
Video: Purchase Order filter
{% endembed %}



**i. Upload Purchase Order**

Enables uploading the final PO data.

{% embed url="https://youtu.be/FuJVUDF003o" %}
Video: Upload Purchase Order
{% endembed %}



***

### Saved Mapping page

Manage the mapping preferences for inventory and PO data.\


**Characteristics:**

* **Saved Mapping Details**: The user can view the details of each saved mapping by clicking on it.

<figure><img src="../.gitbook/assets/4.png" alt=""><figcaption><p>Image: Saved Mappings Page</p></figcaption></figure>



**Functions**



**a. Edit Mappings**

Modify and update previously saved mappings.

{% embed url="https://youtu.be/VNpGhHdizpw" %}
Video: Edit Mappings
{% endembed %}



**b. Save Changes**

Save the current column mappings as a predefined mapping for future use.

{% embed url="https://youtu.be/UGn9lg4B8xk" %}
Video: Save changes
{% endembed %}



**c. Delete Mapping**

Remove previously saved mappings from their list of predefined mappings.

{% embed url="https://youtu.be/YjJ2wpyPHOY" %}
Video: Delete mapping
{% endembed %}



***

### **Related solution flows**

1. [Import flows.](http://127.0.0.1:5000/o/l53nGvPQLhOHrKCP9HTG/s/aVc7sssxHUesvJFcAuh7/)
2. [Configurations](http://127.0.0.1:5000/o/l53nGvPQLhOHrKCP9HTG/s/PoTFyo0cPPGdyZu8kxeb/).



:arrow\_left:[ Go to HotWax Commerce Docs](http://127.0.0.1:5000/o/l53nGvPQLhOHrKCP9HTG/s/TefRnbhmBjhScpq172vl/)

