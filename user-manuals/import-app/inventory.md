# Upload Inventory

The `HotWax Commerce Import App` enables bulk updates to inventory, especially when dealing with legacy systems that lack API-based integration. This app eliminates the need for manual editing of CSV formats. Merchandisers can efficiently upload CSV files, map CSV fields directly, and identify errors before finalizing the upload.

## Step-by-Step Guide: Updating Inventory in Bulk through CSV File

1. **Access the Import App:**
   - Locate the HotWax Commerce Import app in the app launchpad. Log in with your user credentials. 

2. **Navigating to Inventory Page:**
   - Within the Import app, the default page opened is the `Purchase Order` page. Navigate to the `Inventory` page from the left menu.
  
   {% hint style="info" %}
Only users with Super or Admin user permissions can access the `inventory` page in the `Inventory App`.
{% endhint %} 

3. **Uploading CSV File with Saved Mappings:**
   - Click on the `upload` button and select the preferred CSV file.

4. **Mapping Fields and Identifying Errors:**
   - Map CSV file fields with corresponding HotWax Commerce fields.
   - The following fields need to be mapped in HotWax Commerce:
   
     | Field               | Description                                                |
     |---------------------|------------------------------------------------------------|
     | Shopify Product SKU | The unique product identifier used by Shopify.          |
     | Quantity           | Represents the updated inventory count for the product.     |
     | Facility ID         | Identifies the specific facility associated with the product.|
   

`Shopify Product SKU` field is the default product identifier but users can choose the preferred product identifier from the options in the dropdown menu. HotWax Commerce supports the following product identifiers.

| Field                        | Description                                                             |
|-----------------------------|-------------------------------------------------------------------------|
| Shopify Product SKU          | The Stock Keeping Unit number assigned to products                     |
| Product ERP ID               | Unique identifier of the product in the ERP system                      |
| GTIN                         | Global Trade Item Number is an identifier for trade items               |
| ISBN                         | International Standard Book Number (ISBN) is a numeric commercial book identifier   |
| Manufacturer (Model) Number  | Unique number issued by manufacturers to identify individual products  |
| Shopify Product ID           | Unique product identifier on Shopify                                    |
| UPCA                         | Universal Product Code is the unique barcode of the product             |


5. **Saving Custom CSV Mappings:**

   - Save custom CSV mappings directly within the Import App for future use by clicking on the `New Mappings` Button.
   - In the future, you can utilize the saved mappings within the Import App to expedite the process of mapping.

6. **Reviewing Inventory:**
   - Click on the `Review` button to inspect and verify all mapped inventory updates.
   - This will open an `Inventory review` page where you can ensure data accuracy and completeness before finalizing.

7. **Handling Missing Facilities:**
   - Merchandisers sometimes make errors in their CSV files when creating them. For example, if the CSV file has "Time Square" as the facility name instead of "Times Square" it can cause an error when updating inventory. If any missing facilities or errors are detected during the process, click on `Missing Facilities`.
   - This will open up a new module where you can rectify the mistake by specifying the accurate facility.
   - Click on the `Save` icon to save and rectify the facility.

8. **Finalizing Update:**
   - Once you have verified all the items, proceed by clicking on the `Upload` icon.
   - This will open up a confirmation module; confirm inventory upload by clicking on the `Upload` Button.
   - You will get a success message indicating that the inventory has been updated successfully.

9. **Item Inventory Verification:**

Once the inventory is updated you can verify whether the inventory is accurately reflected in HotWax Commerce. 

   - Confirm the updated inventory by going to the `Product` page in your OMS instance.
   - Find the product SKU by utilizing the search bar. You can also search for products using the product name or HotWax Commerce ID.
   - Navigate to the `Product Details` page by clicking on the product.
   - Click on the `View Inventory` button to open the `Product Inventory View` page of that product.
   - Here you will be able to verify the inventory changes under the `Inventory Items` section.

   {% hint style="warning" %}
Please ensure that all the products are synchronized in HotWax Commerce from e-commerce. If a product does not exist in HotWax Commerce, the corresponding records will not be processed.
{% endhint %}
