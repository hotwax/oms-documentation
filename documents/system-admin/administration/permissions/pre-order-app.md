# Pre-Order App

The HotWax Commerce `Pre-Order` App is designed for merchandisers to gain a clear understanding of their presell catalog, allowing them to track the status of pre-orders and backorders, and confirm listed items on the eCommerce platform. This app enables merchandisers to efficiently manage all pre-orders, including the ability to release them manually. The Pre-order app is designed specifically for merchandisers to get full over-view of the pre-order products, therefore "PRE-ORDER APP VIEW" permission is required to access the app. Furthermore, actions that involve pre-order inventory configurations also require higher-level permissions. Below is a list of all the actions available in the Pre-Order App, along with the specific permissions needed to perform them.

## Order Page

| Action            | Permissions Needed | Description                                                         |
| ----------------- | ------------------ | ------------------------------------------------------------------- |
| Search Orders     | NA                 | Search all the pre-orders within the system.                        |
| Filter Orders     | NA                 | Filter orders based on order date, promise date, or loyalty status. |
| Release Items     | NA                 | Release items from the parking queue to begin fulfillment.          |
| Edit Promise Date | NA                 | Edit the promise date of the order as needed.                       |

<figure><img src="../../.gitbook/assets/Orders.png" alt=""><figcaption></figcaption></figure>

## Products Page

| Action               | Permissions Needed | Description                                                                                     |
| -------------------- | ------------------ | ----------------------------------------------------------------------------------------------- |
| View Products        | NA                 | View all products currently on pre-order.                                                       |
| View Product Details | NA                 | View detailed information and all orders for a specific product.                                |
| Filter Orders        | NA                 | Filter orders for specific products based on size, order date, promise date, or loyalty status. |
| Release Orders       | NA                 | Release all orders associated with the selected products.                                       |

<figure><img src="../../.gitbook/assets/Products.png" alt=""><figcaption></figcaption></figure>

## Catalog Page

| Action                 | Permissions Needed | Description                                                                |
| ---------------------- | ------------------ | -------------------------------------------------------------------------- |
| View Product Catalog   | NA                 | View the complete product catalog, including pre-orders and backorders.    |
| Filter Product Catalog | NA                 | Filter the product catalog based on pre-order, backorder, or all products. |

<figure><img src="../../.gitbook/assets/catalog.png" alt=""><figcaption></figcaption></figure>

## Product Audit Page

| Action                            | Permissions Needed | Description                                                                                                                                                              |
| --------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| View Pre-Order Listing Status     | NA                 | View the listing status, eligibility, and pre-order timeline of products.                                                                                                |
| View Purchase Order Details       | NA                 | View complete purchase order details, including purchase order date, ATP (Available to Promise) of the product, and already allocated inventory from the purchase order. |
| View Online ATP Computation       | NA                 | View ATP computation details, including current online ATP, quantity on hand (QOH), and excluded ATP.                                                                    |
| Reserve Inventory                 | COMMON\_ADMIN      | Configure whether the OMS (Order Management System) should reserve inventory for pre-orders.                                                                             |
| Hold Pre-Order Physical Inventory | COMMON\_ADMIN      | Configure inventory computation to prevent physical inventory from being made available online for products with orders in the Pre-Order parking.                        |
| View Pre-Order Jobs               | NA                 | View all pre-order jobs and their next scheduled run times.                                                                                                              |
| View Shopify Listing Status       | NA                 | View the listing status of products on Shopify.                                                                                                                          |

<figure><img src="../../.gitbook/assets/audit.png" alt=""><figcaption></figcaption></figure>
