# Schedule Restock

Retailers usually plan new product launches and need these products to be available for sale in future dates at precise times. For instance, if a retailer plans to start selling a new product at 10 AM after one month, they need the inventory to be synced exactly at that time. Previously, this required manual intervention, which was prone to errors. Manual management of inventory synchronization could lead to delays or mistakes, causing products to not be available for sale as planned, resulting in missed sales opportunities and customer dissatisfaction.

To address this challenge, HotWax Commerce offers a scheduled inventory restocking feature in the `Import` App. Retailers can upload a CSV file containing the products they want to restock and specify the facility and product store for which the inventory needs to be updated. Crucially, during inventory restocking, the `update inventory` service also runs in HotWax Commerce to ensure that inventory is increased in HotWax Commerce but also synced with Shopify.

### Steps to Schedule Restocking

**Access the `Import` App:**
- Locate the HotWax Commerce `Import` app in the app launchpad.
- Log in with your user credentials.

**Navigating to Inventory Page:**
- Within the `Import` app, the default page opened is the `Purchase Order` page.
- Navigate to the `Schedule Restock` page from the left menu.
- Only users with `Super` or `Admin` user permissions can access the `Schedule Restock` page in the `Import` App.

**Uploading CSV File with Saved Mappings:**
- Click on the `upload` button and select the preferred CSV file.

**Map CSV Fields**
- Map CSV file fields with corresponding HotWax Commerce fields.

The following fields need to be mapped and filled in while scheduling restocks:

| **Field**            | **Description**                                                                 |
|----------------------|---------------------------------------------------------------------------------|
| **Shopify Product SKU**  | The unique product identifier used by Shopify.                                  |
| **Restock Quantity**  | Represents the updated inventory count for the product.                         |
| **Schedule Time**     | Specify when the inventory needs to be restocked and synced with Shopify.        |
| **Facility**          | Specify the facility where the products need to be restocked.                   |
| **Product Store**     | Specify the product store for which the product needs to be restocked.          |
| **Shopify Store**     | Specify the Shopify store where the inventory needs to be synced after restocking. |
| **Restock Name**      | Retailers can give a detailed name to the restock such as SeasonEndSale Restock or use the default date-time restock naming. |

**Shopify Product SKU** field is the default product identifier, but users can choose the preferred product identifier from the options in the dropdown menu. HotWax Commerce supports the following product identifiers:

| **Field**               | **Description**                                                       |
|-------------------------|-----------------------------------------------------------------------|
| **Shopify Product SKU**  | The Stock Keeping Unit number assigned to products.                  |
| **Product ERP ID**       | Unique identifier of the product in the ERP system.                  |
| **GTIN**                 | Global Trade Item Number is an identifier for trade items.           |
| **ISBN**                 | International Standard Book Number (ISBN) is a numeric commercial book identifier. |
| **Manufacturer (Model) Number** | Unique number issued by manufacturers to identify individual products. |
| **Shopify Product ID**   | Unique product identifier on Shopify.                                |
| **UPCA**                 | Universal Product Code is the unique barcode of the product.         |

**Saving Custom CSV Mappings:**
- Save custom CSV mappings directly within the `Import` app for future use by clicking on the `New Mappings` button.
- In the future, you can utilize the saved mappings within the `Import` app to expedite the process of mapping.

**Reviewing Inventory:**
- Click on the `Review` button to inspect and verify all scheduled inventory updates.
- This will open an `Inventory review` page where you can ensure data accuracy and completeness before finalizing.

**Add/Modify Restock Details:**
- Merchandisers can also add or change Facilities, Product Store, or Shopify Shop by choosing the relevant options from the drop-down menus for the relevant fields.

**Finalizing Update:**
- Once you have verified all the items, proceed by clicking on the `Upload` icon.
- This will open up a confirmation module; confirm inventory upload by clicking on the Upload Button.
- You will get a success message indicating that the inventory has been updated successfully.

### Reschedule/Cancel Restocking

If the merchandisers have any operational level changes, such as their sale being postponed to a later date or they want to remove some products from that sale, they can reschedule or cancel the restocking from the `Schedule Restock` page.

All the scheduled restocks will appear at the bottom of the page, with the scheduled date and time. Merchandisers can click on the overflow menu to reschedule or cancel the restocks as per their requirements.

{% embed url="https://youtu.be/n5GwuZ2dSH8" %}
