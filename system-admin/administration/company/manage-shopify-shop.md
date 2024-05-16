---
description: >-
  Efficiently manage your Shopify Connection with HotWax Order
  Management System.
---

# Manage Shopify integration

When you download the HotWax Commerce integration App from the Shopify App Store, it automatically creates a Shopify shop in HotWax OMS. This app acts as the link between OMS and Shopify, and you can adjust its settings on the `Find and View Shopify Connection` page in OMS. To manage your Shopify connections:

1. Go to the `Find Shopify Connection` page and pick the specific Shopify Connection you want to handle. This will take you to the Shopify Connection page. 

On the `Find Shopify Connection` page, you can filter connections by their status and perform quick actions like:

a. Copy credentials: Quickly copy the shared secret and access token to Shopify, only accessible to super users.
b. Favorite: Mark a Shopify connection as a favorite for easy access when using other apps like Job Manager.
c. Deactivate Shop: Stop all communication with Shopify by deactivating the connection.

### Shopify connection summary

All crucial details regarding a Shopify connection are stored in the Shop summary card. This includes information like the country-base, subscription type, operating timezone, and owner's name. The card also offers quick actions such as:

a. Manage Shopify access: This allows you to change the access type, determining the level of communication between HotWax OMS and Shopify. 'No access' deactivates the connection, 'read only' permits viewing information, and 'read and write' enables performing actions on Shopify within the app's permissions.

b. Link product store: Users can connect the Shopify connection to a Product store, representing a unique brand in OMS. Multiple Shopify connections can be hosted under a single product store.

c. Upload refunds to Shopify: This setting is explicit and can only be configured when returns created in HotWax trigger refunds in Shopify. Accessible only to super users.

d. Weight/Currency: Displays the weight and currency metrics used on Shopify.


### Products

Ensuring that all products from Shopify are downloaded into HotWax OMS is important for accurate product information and order synchronization between OMS and other integrations. When triggering the product download, all available products on Shopify are imported into OMS. Before the products are downloaded, make sure different product types are correctly mapped with corresponding types in HotWax to prevent unintended discrepancies in product information. For instance, Insurance product types in Shopify should be mapped with Digital product in HotWax.

Additionally, it's important to have the bulk downloads job already configured in OMS for product downloads. Once initially products are downloaded, you can view all products count imported within the last 24 hours, as well as previously downloaded products from Shopify.

Users can also quickly disable the sync and initiate a quick product sync directly from Shopify.

### Orders

Ensuring that all orders from Shopify are synced with HotWax OMS is essential for maintaining accurate information and order processing between OMS and other integrations. By default, HotWax only downloads unfulfilled and open orders from Shopify in OMS. When triggering the order sync, all orders from Shopify are imported into OMS.

It's crucial to ensure that different sales channel are accurately mapped between Shopify and HotWax OMS to avoid discrepancies in order processing. Failure to configure this mapping could lead to unintended errors in order handling.

Additionally, having the bulk order sync job already configured in OMS to the process of syncing large volumes of orders.

Once orders are synced, you can easily review all orders count imported within the last 15 minutes hours, as well as total synced orders from Shopify. This feature also enables you to quickly disable the sync or initiate a manual sync from Shopify for immediate updates.

### Inventory

When inventory is sent to Shopify, it's directed to a single location for order acceptance. However, in HotWax, orders are fulfilled from the most suitable location available. 

HotWax suggests linking the default Shopify location with OMS, ensuring orders are fulfilled from a predetermined location. This default location in HotWax is associated with a brokering queue, used for bulk inventory counts. When an order is placed on Shopify, inventory is reduced from the default location, and the order is sent to the HotWax Commerce Brokering queue for brokering to the optimized location for fulfillment.

For Shopify Point of Sale (POS) users, inventory syncs to all locations, but the total is summed up at the mapped location. To avoid unintentional inventory syncs, it's crucial to deactivate online selling in these POS stores.

Once a location is mapped, you can track the last sync time to see when inventory was last sent to Shopify. Quick controls like instant sync and deactivation are provided for easy management.

### Facilities

To sync inventory with Shopify POS locations, it's essential to establish and connect facilities in HotWax with locations on Shopify. Clicking "Import Shopify locations in HotWax" generates a list of all Shopify locations, allowing for quick selection to create corresponding locations in OMS. Facilities and locations are mapped one-to-one.

Facilities created in OMS utilize information from Shopify to populate basic details in HotWax. Additional configurations for a facility can be managed through the HotWax Commerce Facilities app.

The Facilities section also offers quick actions, including:

a. Quick link to the location on Shopify: Easily access the corresponding location on Shopify for further management directly from HotWax.

b. Remove and change the mapping with the facility in OMS: Modify or remove the mapping between the facility in HotWax OMS and the location in Shopify, providing flexibility in configuration.

c. Sync any newly created locations on Shopify: Ensure that any newly created locations on Shopify are promptly synchronized with HotWax OMS for seamless inventory management.

### Data Mappings

Mapping data from Shopify to OMS empowers users to configure one-to-many associations, offering control over data integrations across ERP, OMS, and E-commerce systems. Customizing data mappings ensures flexibility and precision in syncing information, crucial for analytics and seamless order processing.

OMS provides out-of-the-box functionality to map three types of data:

1. Sales channel
2. Product types
3. Payment methods

Quick actions:

When triggering mapping, relevant data is imported from Shopify, ready to be mapped in one-to-one or one-to-many formats within HotWax. By default, no mappings are created, but as data is mapped, options are appended accordingly. Additionally, default product types are available in HotWax, but users can create their own mappings as needed. At any time, mappings can be adjusted or removed as desired by using the overflow menu.

### Shipping methods

Mapping shipping methods with HotWax enables users to synchronize shipping information effectively. This feature allows users to configure the shipping process in HotWax, particularly useful when rate shopping is not required and shipping labels should be generated for predefined shipping methods.

Clicking "Import Shopify shipping methods in HotWax" generates a list of all Shopify shipping methods, simplifying the selection process to create corresponding shipping methods in OMS.

Imported shipping methods can then be mapped to the shipping methods set up in HotWax Commerce. Typically, shipping methods are associated with carriers, ensuring accurate functionality of the mappings. Therefore, each shipping method should be linked with its designated carrier. These associations can be changed or removed at any time as needed with the help of overflow menu.