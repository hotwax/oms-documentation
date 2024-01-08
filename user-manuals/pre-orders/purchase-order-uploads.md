# Purchase Order Upload

HotWax Commerce aids in automating pre-order and back-order management by leveraging purchase orders. This automation includes the automatic listing and de-listing of products which is particularly beneficial for retailers who have large purchase order catalogs.

Purchase orders (POs) provide crucial details about item specifics and upcoming inventory arrivals. Retailers can integrate their ERP systems with HotWax Commerce to synchronize purchase orders automatically or utilize the Import App to manually import purchase order CSV files.

To know how you can manage your purchase orders from your ERP system like NetSuite, please refer to the [integration guide](https://app.gitbook.com/s/WAGxTeFJP4I4AIlfs1Gf/supported-integrations/purchase-orders). For users who want to import their purchase orders manually, HotWax Commerce’s Import app simplifies the process of importing purchase orders and their inventory into HotWax Commerce. Here’s how retailers can upload purchase orders using the Import App:

## Purchase Order Page

1. Head to the `Import App`> `Purchase order page` by clicking on the Purchase order in the left menu.

<figure><img src="../.gitbook/assets/spaces_WoOehPvuUvxQygGoR81q_uploads_OMytarwPHI8uhPtZTk01_2.webp" alt=""><figcaption><p>Image: Purchase Order Page</p></figcaption></figure>

2. Upload the CSV File by simply clicking on the `Upload` text within the first field.

{% embed url="https://youtu.be/vaTekLquBqw" %}
Video: Upload Purchase Order CSV
{% endembed %}

3. Upon uploading, there might be variations in column names in Hotwax Commerce and the uploaded purchase order, like 'Order ID' in HotWax Commerce can be named as 'Internal ID' in other systems. To avoid errors, users must map these columns accurately. Here are the fields to be mapped:

* Order ID: Acts as a unique identifier for the order.
* Shopify Product SKU: Shopify's distinct product identifier.
* Arrival Date: Expected arrival date of the order.
* Ordered Quantity: Quantity of products ordered.
* Facility ID: Identifies the specific facility.

Users can easily map these fields by selecting the exact field from dropdown menus. For added convenience, HotWax Commerce allows Merchandisers to save these mappings within the Import App by clicking on the `New mapping` button, streamlining future uploads. Saved mappings appear as buttons above the mapping field for quick access.

Apart from this merchandisers need to create a new field i.e. `IsNewProduct` and mark the field as either ‘Yes’ or ‘No’. This field helps HotWax commerce identify whether a product is a new product and should be added to the pre-order catalog or the product was already being sold on the e-commerce and currently it is currently out of stock, in such cases, it is added to the backorder catalog.

{% embed url="https://youtu.be/X96Qrj-v0a0" %}
Map Purchase Orders
{% endembed %}

4. After saving mappings, proceed by clicking on the `Review` button to transition to the `PO review` page. This ensures a smooth completion of the process.

{% embed url="https://youtu.be/cEC_U0jer2k" %}
Review Purchase Order
{% endembed %}

## Purchase Order Review page

The `PO Review page` provides a detailed overview of PO CSV data and assists users in identifying and correcting errors within the CSV file.

<figure><img src="../.gitbook/assets/spaces_WoOehPvuUvxQygGoR81q_uploads_HCxGoQnkj1w0rx95fDvg_3.webp" alt=""><figcaption><p>Purchase Order review page</p></figcaption></figure>

The purchase order page offers the following functions to ensure accurate importation into HotWax Commerce:

1. **Search Products:** For Merchandisers managing a large catalog of products in their CSV, getting details about individual products is crucial. Merchandisers can search for individual products for review using the product SKU. In the product fields, the merchandiser will get a comprehensive view of that particular product, including whether it is on backorder or pre-order, the quantity ordered, and the expected inventory arrival date.

{% embed url="https://youtu.be/tY4pSU3MONU" %}
Search Products
{% endembed %}

2. **Bulk Adjustments:** Merchandisers can select products for adjustments using checkboxes available in each product's field. To select all products, the merchandiser can click on the checkbox at the top right of the page. Once products are selected, merchandisers need to click on the bulk adjustment screen, which will open a pop-up screen with the following options:

* **Buffer days:** Refers to additional time added to the expected delivery date of a pre-order product to account for potential delays. For example, if the Purchase order arrival date is 10th January, the user can set a buffer days of 10 so that the dispatch date for Shopify PDP will be shown as 20th January.
* **Order Buffer:** Refers to the inventory or quantity of a pre-order product that a merchandiser may set to manage inventory discrepancies or excess demand. For example, if a product has an upcoming inventory of 100, the user can set 10 as order buffer so that the available to promise inventory on Shopify becomes 90.
* **Catalog:** Merchandisers can determine whether the product is on backorder or pre-order.
* **Facility:** Merchandisers can select the facility where the purchase order for that inventory is received.

{% embed url="https://youtu.be/lDHBXWBAjSM" %}
Bulk Adjustments
{% endembed %}

3. **DateTime Parse Errors:** Retailers working in different countries often face issues with time formats (e.g., European countries follow DD/MM/YYYY formats, while US companies follow MM/DD/YYYY format). Similarly, purchase orders can have different formats. If there's any format mismatch, the error message will be available in this field. Merchandisers can specify the date format easily by clicking on the `DateTime Parse Errors` and adjusting the date according to the PO.

{% embed url="https://youtu.be/94Agvrx5YIg" %}
Date time Parse errors
{% endembed %}

4. **Missing Facilities:** There may be instances when the facility name in the purchase order is inaccurate, causing errors in the uploading process. For example, if the Times Square facility is incorrectly mentioned as Time Square in the Purchase order, this field will show an error. Merchandisers can rectify this error by clicking on the `Missing Facilities` field which will open up a missing facilities pop up card. Merchandisers can rectify the mistake by typing the correct facility name and click on the `save` button to update the changes.

{% embed url="https://youtu.be/craN2xS3X2Y" %}
Missing Facilities
{% endembed %}

5. **Missing Products:** Similarly, there can be errors in product namings. If a product is not available in HotWax Commerce, this field will display an error. Merchandisers can rectify the mistake by clicking on this field, and opening a pop-up menu where they can correct and save it.

{% embed url="https://youtu.be/_bRazCIwDU0" %}
Missing products
{% endembed %}

6. **Reset Changes:** If a merchandiser wants to start afresh with the changes, they can click on the `reset` icon at the top right of the page.

{% embed url="https://youtu.be/QIJgWHZEbmg" %}
Reset Changes
{% endembed %}

7. **Filter Products:** Purchase orders for different facilities can be included in the same CSV file. If a merchandiser wants to view upcoming purchase orders of a specific facility, they can filter by clicking on the `Purchase order IDs` at the bottom of the page.
8. **Upload Purchase Order:** Once the review is complete, merchandisers can click on the `blue upload` icon at the bottom right to upload the purchase order in HotWax Commerce.
