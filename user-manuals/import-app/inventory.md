# Upload Inventory

The `HotWax Commerce Import App` is useful for merchandisers needing to swiftly update inventory without manually editing CSV formats or navigating FTP file browsers for field mapping. This tool allows merchandisers to upload CSV files, save custom mappings directly, and identify errors before finalizing the upload.

For example, when merchandisers manually filter warehouse inventory to allocate stock for other channels before full online sales, they can efficiently use the Import App. By uploading CSV files to the Order Management System, they can promptly reset inventory counts after receiving new stock. This functionality streamlines the process and minimizes the risk of errors in managing inventory data for merchandisers.

## Step-by-Step Guide: Updating Inventory in Bulk through CSV File

1. **Access the Import App:**
   - Locate the HotWax Commerce Import app in the app launchpad. Log in with your user credentials. 

   {% hint style="info" %}
Only users with Super or Admin user permissions can log in to the Import App
{% endhint %} 

2. **Navigating to Inventory Page:**
   - Within the Import app, the default page opened is the `Purchase Order` page. Navigate to the `Inventory` page from the left menu.

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
   
   {% hint style="info" %}
Choose your preferred product identifier by selecting the `Shopify Product SKU` field and choosing from the options in the dropdown menu.
{% endhint %} 

5. **Saving Custom CSV Mappings:**

   - Save custom CSV mappings directly within the Import App for future use by clicking on the `New Mappings` Button.
   - In future, you can utilize the saved mappings within the Import App to expedite the process of mapping.

6. **Reviewing Inventory:**
   - Click on the `Review` button to inspect and verify all mapped inventory updates.
   - This will open an `Inventory review` page where you can ensure data accuracy and completeness before finalizing.

   {% hint style="warning" %}
Please ensure that all the products are synchronized in HotWax Commerce from ecommerce. If a product does not exist in HotWax Commerce, the corresponding records will not be processed.
{% endhint %}

7. **Handling Missing Facilities:**
   - Merchandisers sometime make errors in their CSV files when creating them. For example if the CSV file has "Time Square" as facility name instead of the "Times Square" it can cause eoor when updating inventory. If any missing facilities or errors are detected during the process, click on the `Missing Facilities`.
   - This will open up a new module where you can rectify the mistake by specifying the accurate facility.
   - Click on the `Save` icon to save and rectify the facility.

8. **Finalizing Update:**
   - Once you have verified all the items, proceed by clicking on the `Upload` icon.
   - This will open up a confirmation module; confirm inventory upload by clicking on the `Upload` Button.
   - You will get a success message indicating that the inventory has been updated successfully.

9. **Verification:**

Once the inventory is updated you can verify whether the inventory is accurately reflected in HotWax Commerce 

   - Confirm the updated inventory by going to the `Product` page in your OMS instance.
   - Find the product SKU by utilising the search bar. You can also search from products using product name or HotWax Commerce ID.
   - Navigate to the `Product Details` page by clicking on the product.
   - Click on the `View Inventory` button to open the `Product Inventory View` page of that product.
   - Here you will be able to verify the inventory changes under the `Inventory Items` section.
