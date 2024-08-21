# BOPIS app

The HotWax Commerce BOPIS App is designed for store staff to efficiently ma-ge the fulfillment of Buy Online, Pick Up In Store (BOPIS) orders. Similar to the Fulfillment App, store users can carry out essential tasks such as picking, packing, and handing over orders without needing special permissions. As a result, access to the BOPIS app is open to all users involved in the order fulfillment process. However, ma-ging the app's configurations, such as altering settings or workflows, requires higher-level permissions.

Below is a list of all the actions available in the BOPIS App, along with the specific permissions needed to perform them.

Here’s a detailed table of the actions available in the BOPIS App, organized by page, along with the specific permissions needed to perform them:

### Catalog Page

| Action              | Permission | Description                                                                                               |
|-------------------------|----------------|---------------------------------------------------------------------------------------------------------------|
| Product View        | -             | Allows users to view all existing products in the catalog.                                                    |
| Product Detail      | -             | E-bles users to check inventory levels across different stores for specific products.                        |



### Orders Page

#### Open Tab

| Action                    | Permission | Description                                                                                               |
|-------------------------------|----------------|---------------------------------------------------------------------------------------------------------------|
| Ready for Pickup Button    | -             | Marks an order as ready for pickup, triggering a notification to the customer.                                 |
| View Inventory             | -             | Allows users to view the available inventory for items in the order.                                           |

#### Packed Tab

| Action                    | Permission | Description                                                                                               |
|-------------------------------|----------------|---------------------------------------------------------------------------------------------------------------|
| Handover Button            | -             | Marks an item as fulfilled when handing over the order to the customer.                                        |
| View Inventory             | -             | E-bles users to view the available inventory for items in the packed order.                                   |
| Resend Notification Button | -             | Allows users to resend the pickup notification to the customer.                                                |

#### Completed Tab

| Action                    | Permission | Description                                                                                               |
|-------------------------------|----------------|---------------------------------------------------------------------------------------------------------------|
| View Completed Orders      | -             | Allows users to view all completed orders.                                                                     |

#### Ship to Store

| Action                    | Permission | Description                                                                                               |
|-------------------------------|----------------|---------------------------------------------------------------------------------------------------------------|
| View Incoming Orders       | -             | E-bles store associates to view incoming orders, ready-for-pickup orders, and completed orders from the store. |



### Order Details Page

| Action            | Permission | Description                                                                                               |
|-----------------------|----------------|---------------------------------------------------------------------------------------------------------------|
| Order Information  | -             | Allows store associates to view the details of an order.                                                       |
| Order Rejection    | COMMON_ADMIN   | E-bles users to reject an order completely or partially, based on available inventory or other factors.       |



### Settings Page

| Action                     | Permission  | Description                                                                                               |
|--------------------------------|-----------------|---------------------------------------------------------------------------------------------------------------|
| Order Edit Permissions      | COMMON_ADMIN    | Controls what customers are allowed to edit on their order when re-routing fulfillment.                       |
| Partial Order Rejection     | COMMON_ADMIN    | Specifies whether a BOPIS order can be partially rejected if inventory is insufficient at the store.          |
| Show Shipping Orders        | -              | Allows users to view shipping orders alongside pickup orders.                                                 |
| Generate Packing Slip       | -              | E-bles the creation of packing slips, helping customers reconcile their order against delivered items.       |
| E-ble Tracking             | -              | Tracks who picked orders by entering picker IDs during the packing process.                                    |
| Notification Preference     | -              | Allows users to select the types of notifications they want to receive.                                        |

--- 

This table outlines the available actions and the permissions required for each within the BOPIS App.
