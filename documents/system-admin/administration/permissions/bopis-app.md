# BOPIS App

The HotWax Commerce BOPIS App is designed for store staff to efficiently manage the fulfillment of Buy Online, Pick Up In Store (BOPIS) orders. Similar to the Fulfillment App, store users can carry out essential tasks such as picking, packing, and handing over orders without needing special permissions. As a result, access to the BOPIS app is open to all users involved in the order fulfillment process. However, managing the app's configurations, such as altering settings or workflows, requires higher-level permissions.

Below is a list of all the actions available in the BOPIS App, along with the specific permissions needed to perform them.

Here’s a detailed table of the actions available in the BOPIS App, organized by page, along with the specific permissions needed to perform them:

### Catalog Page

| Serial No. | Action         | Permission | Description                                                                            |
| ---------- | -------------- | ---------- | -------------------------------------------------------------------------------------- |
| 1          | Product View   | -          | Allows users to view all existing products in the catalog.                             |
| 2          | Product Detail | -          | Enables users to check inventory levels across different stores for specific products. |

<figure><img src="../../.gitbook/assets/catalog (1).png" alt=""><figcaption></figcaption></figure>

### Orders Page

#### Open Tab

| Serial No. | Action                  | Permission | Description                                                                    |
| ---------- | ----------------------- | ---------- | ------------------------------------------------------------------------------ |
| 1          | Ready for Pickup Button | -          | Marks an order as ready for pickup, triggering a notification to the customer. |
| 2          | View Inventory          | -          | Allows users to view the available inventory for items in the order.           |

<figure><img src="../../.gitbook/assets/open order.png" alt=""><figcaption></figcaption></figure>

#### Packed Tab

| Serial No. | Action                     | Permission | Description                                                                  |
| ---------- | -------------------------- | ---------- | ---------------------------------------------------------------------------- |
| 1          | Handover Button            | -          | Marks an item as fulfilled when handing over the order to the customer.      |
| 2          | View Inventory             | -          | Enables users to view the available inventory for items in the packed order. |
| 3          | Resend Notification Button | -          | Allows users to resend the pickup notification to the customer.              |

<figure><img src="../../.gitbook/assets/Packed Orders.png" alt=""><figcaption></figcaption></figure>

#### Completed Tab

| Serial No. | Action                | Permission | Description                                |
| ---------- | --------------------- | ---------- | ------------------------------------------ |
| 1          | View Completed Orders | -          | Allows users to view all completed orders. |

<figure><img src="../../.gitbook/assets/completed (1) (1).png" alt=""><figcaption></figcaption></figure>

#### Ship to Store

| Serial No. | Action               | Permission | Description                                                                                                     |
| ---------- | -------------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| 1          | View Incoming Orders | -          | Enables store associates to view incoming orders, ready-for-pickup orders, and completed orders from the store. |

### Order Details Page

| Serial No. | Action            | Permission    | Description                                                                                              |
| ---------- | ----------------- | ------------- | -------------------------------------------------------------------------------------------------------- |
| 1          | Order Information | -             | Allows store associates to view the details of an order.                                                 |
| 2          | Order Rejection   | COMMON\_ADMIN | Enables users to reject an order completely or partially, based on available inventory or other factors. |

<figure><img src="../../.gitbook/assets/order details (1) (1).png" alt=""><figcaption></figcaption></figure>

### Settings Page

| Serial No. | Action                  | Permission    | Description                                                                                             |
| ---------- | ----------------------- | ------------- | ------------------------------------------------------------------------------------------------------- |
| 1          | Order Edit Permissions  | COMMON\_ADMIN | Controls what customers are allowed to edit on their order when re-routing fulfillment.                 |
| 2          | Partial Order Rejection | COMMON\_ADMIN | Specifies whether a BOPIS order can be partially rejected if inventory is insufficient at the store.    |
| 3          | Show Shipping Orders    | -             | Allows users to view shipping orders alongside pickup orders.                                           |
| 4          | Generate Packing Slip   | -             | Enables the creation of packing slips, helping customers reconcile their order against delivered items. |
| 5          | Enable Tracking         | -             | Tracks who picked orders by entering picker IDs during the packing process.                             |
| 6          | Notification Preference | -             | Allows users to select the types of notifications they want to receive.                                 |

<figure><img src="../../.gitbook/assets/settings (1).png" alt=""><figcaption></figcaption></figure>

