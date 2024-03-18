# Required Permissions from Shopify

HotWax Commerce Integration App aids merchants in managing sales orders and store inventory efficiently. It simplifies the process by strategically allocating inventory to fulfill orders promptly, whether for same-day or next-day delivery, using options like Buy Online Pick Up In Store (BOPIS) and Ship from Store. It consolidates orders from online and physical stores, optimizing inventory management to ensure timely delivery to customers. Additionally, HotWax Commerce provides reporting capabilities, giving retailers insights into their business performance for informed decision-making. 

As with any Shopify-integrated application, HotWax Commerce requires specific permissions to access and utilize essential store data effectively. This guide outlines the comprehensive list of access scopes required by HotWax Commerce to operates seamlessly within the Shopify ecosystem to deliver optimal performance and value to merchants.

## Read Access Permissions

**1. read_assigned_fulfillment_orders**
**Access Scope:** [FulfillmentOrder](https://shopify.dev/docs/api/admin-rest/latest/resources/assignedfulfillmentorder) resources assigned to a location managed by your [fulfillment service](https://shopify.dev/docs/api/admin-rest/latest/resources/fulfillmentservice).
**Reason:** These permissions allow HotWax Commerce to update the fulfillment orders assigned to locations under its control, ensuring accurate fulfillment management within the Shopify ecosystem.


**2. read_channels**
**Access Scope:** 
**Reason:** This permission allows HotWax Commerce to access channel-related data such as whether an order is from Shopify web channel or social media channel for comprehensive order management and analysis.

**3. read_draft_orders**
**Access Scope:** [Draft Order](https://shopify.dev/docs/api/admin-rest/latest/resources/draftorder)
**Reason:** HotWax Commerce imports draft orders, including those created by merchants, to ensure comprehensive order fulfillment coverage, particularly for orders originating from customer service representatives (CSRs).

**4. read_files**
**Access Scope:** GraphQL Admin API [GenericFile](https://shopify.dev/docs/api/admin-graphql/latest/objects/genericfile) object and [fileCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filecreate), [fileUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileupdate), and [fileDelete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filedelete) mutations.
**Reason:** This permission enables HotWax Commerce to monitor and synchronize file-related changes, ensuring real-time updates and accurate reflection of changes made within Shopify.

**5. read_fulfillments**
**Access Scope:** [Fulfillment Service](https://shopify.dev/docs/api/admin-rest/latest/resources/fulfillmentservice)
**Reason:** By accessing fulfillment details within Shopify, HotWax Commerce ensures synchronization and accurate updates of fulfillment processes within its system.

**6. read_gift_cards**
**Access Scope:** [Gift Card](https://shopify.dev/docs/api/admin-rest/latest/resources/gift-card)
**Reason:** HotWax Commerce identifies and updates payment methods, including gift cards, in the ERP system based on order information retrieved from Shopify.

**7. read_inventory**
**Access Scope:** [Inventory Level](https://shopify.dev/docs/api/admin-rest/latest/resources/inventorylevel) and [Inventory Item](https://shopify.dev/docs/api/admin-rest/latest/resources/inventoryitem)
**Reason:** This permission allows HotWax Commerce to monitor inventory levels by regularly checking inventory data from Shopify.

**8. read_locations**
**Access Scope:** [Location](https://shopify.dev/docs/api/admin-rest/latest/resources/location)
**Reason:** By accessing location data, HotWax Commerce ensures alignment between Shopify locations and fulfillment centers within its system, facilitating efficient order processing.

**9. read_merchant_managed_fulfillment_orders**
**Access Scope:** [FulfillmentOrder](https://shopify.dev/docs/api/admin-rest/latest/resources/fulfillmentorder) resources assigned to merchant-managed locations
**Reason:** HotWax Commerce requires access to fulfillment orders managed by merchants to streamline order fulfillment operations effectively.

**10. read_orders**
**Access Scope:** [Abandoned checkouts](https://shopify.dev/docs/api/admin-rest/latest/resources/abandoned-checkouts), [Customer](https://shopify.dev/docs/api/admin-rest/latest/resources/customer), [Fulfillment](https://shopify.dev/docs/api/admin-rest/latest/resources/fulfillment), [Order](https://shopify.dev/docs/api/admin-rest/latest/resources/order), and [Transaction](https://shopify.dev/docs/api/admin-rest/latest/resources/transaction) resources.
**Reason:** HotWax Commerce imports all orders and updates to ensure comprehensive order management and accurate fulfillment processes.

**11. read_products**
**Access Scope:** [Product](https://shopify.dev/docs/api/admin-rest/latest/resources/product), [Product Variant](https://shopify.dev/docs/api/admin-rest/latest/resources/product-variant), [Product Image](https://shopify.dev/docs/api/admin-rest/latest/resources/product-image), [Collect](https://shopify.dev/docs/api/admin-rest/latest/resources/collect), [Custom Collection](https://shopify.dev/docs/api/admin-rest/latest/resources/customcollection), and [Smart Collection](https://shopify.dev/docs/api/admin-rest/latest/resources/smartcollection)
**Reason:** HotWax Commerce imports detailed product information, including variants and collections, to ensure accurate product representation and order processing.

**12. read_returns**
**Access Scope:** [Return](https://shopify.dev/docs/api/admin-graphql/unstable/objects/Return) object
**Reason:** To maintain order and inventory synchronization, HotWax Commerce syncs returns created within Shopify to ensure accurate order processing and inventory management.

**13. read_third_party_fulfillment_orders**
**Access Scope:** [FulfillmentOrder](https://shopify.dev/docs/api/admin-rest/latest/resources/fulfillmentorder) resources assigned to a location managed by any [fulfillment service](https://shopify.dev/docs/api/admin-rest/latest/resources/fulfillmentservice)
****Reason:**** HotWax Commerce requires access to third-party fulfillment orders to ensure comprehensive order management and synchronization with its system.

## Write Access Permissions

**1. write_assigned_fulfillment_orders**
**Access Scope:** [FulfillmentOrder](https://shopify.dev/docs/api/admin-rest/latest/resources/assignedfulfillmentorder) resources assigned to a location managed by your [fulfillment service](https://shopify.dev/docs/api/admin-rest/latest/resources/fulfillmentservice).
**Reason:** These permissions allow HotWax Commerce to update the fulfillment orders assigned to locations under its control, ensuring accurate fulfillment management within the Shopify ecosystem.

**2. write_files**
**Access Scope:** GraphQL Admin API [GenericFile](https://shopify.dev/docs/api/admin-graphql/latest/objects/genericfile) object and [fileCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filecreate), [fileUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileupdate), and [fileDelete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filedelete) mutations.
**Reason:** This permission enables HotWax Commerce to create, update, and delete files within Shopify, facilitating seamless synchronization and management of file-related changes.

**3. write_fulfillments**
**Access Scope:** [Fulfillment Service](https://shopify.dev/docs/api/admin-rest/latest/resources/fulfillmentservice)
**Reason:** By managing fulfillment details within Shopify, HotWax Commerce ensures accurate updates and synchronization of fulfillment processes is updated to Shopify and subsequently to the customers.

**4. write_gift_cards**
**Access Scope:** [Gift Card](https://shopify.dev/docs/api/admin-rest/latest/resources/gift-card)
**Reason:** HotWax Commerce requires write access to gift cards on Shopify for gift card activation, enabling customers to use them for future purchases.

**5. write_inventory**
**Access Scope:** [Inventory Level](https://shopify.dev/docs/api/admin-rest/latest/resources/inventorylevel) and [Inventory Item](https://shopify.dev/docs/api/admin-rest/latest/resources/inventoryitem)
**Reason:** As the master of available inventory, HotWax Commerce updates inventory changes on Shopify to maintain accurate stock levels.

**6. write_merchant_managed_fulfillment_orders**
**Access Scope:** [FulfillmentOrder](https://shopify.dev/docs/api/admin-rest/latest/resources/fulfillmentorder) resources assigned to merchant-managed locations
**Reason:** HotWax Commerce manages fulfillment orders assigned to merchant-managed locations, ensuring efficient order processing and fulfillment.

**7. write_orders**
**Access Scope:** [Abandoned checkouts](https://shopify.dev/docs/api/admin-rest/latest/resources/abandoned-checkouts), [Customer](https://shopify.dev/docs/api/admin-rest/latest/resources/customer), [Fulfillment](https://shopify.dev/docs/api/admin-rest/latest/resources/fulfillment), [Order](https://shopify.dev/docs/api/admin-rest/latest/resources/order), and [Transaction](https://shopify.dev/docs/api/admin-rest/latest/resources/transaction) resources.
**Reason:** HotWax Commerce adds tags to Shopify orders for various purposes such as identifying pre-orders or pickup orders, necessitating write access to orders.

**8. write_products**
**Access Scope:** [Product](https://shopify.dev/docs/api/admin-rest/latest/resources/product), [Product Variant](https://shopify.dev/docs/api/admin-rest/latest/resources/product-variant), [Product Image](https://shopify.dev/docs/api/admin-rest/latest/resources/product-image), [Collect](https://shopify.dev/docs/api/admin-rest/latest/resources/collect), [Custom Collection](https://shopify.dev/docs/api/admin-rest/latest/resources/customcollection), and [Smart Collection](https://shopify.dev/docs/api/admin-rest/latest/resources/smartcollection)
**Reason:** HotWax Commerce adds tags to products, such as pre-order tags, facilitating effective management and identification of product status.

**9. write_third_party_fulfillment_orders**
**Access Scope:** [FulfillmentOrder](https://shopify.dev/docs/api/admin-rest/latest/resources/fulfillmentorder) resources assigned to a location managed by any [fulfillment service](https://shopify.dev/docs/api/admin-rest/latest/resources/fulfillmentservice)
**Reason:** These permissions allow HotWax Commerce to manage third-party fulfillment orders, ensuring comprehensive order management and synchronization with its system.
