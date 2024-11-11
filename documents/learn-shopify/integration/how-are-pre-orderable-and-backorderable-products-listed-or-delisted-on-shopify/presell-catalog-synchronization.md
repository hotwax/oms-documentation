---
description: >-
  Explore how HotWax Commerce syncs pre-order and backorder catalogs to Shopify
  seamlessly.
---

# Presell Catalog Synchronization

### How is the Pre-Order and Backorder Catalog Synced from HotWax Commerce to Shopify?

The items that are available for pre-order or backorder are transferred from HotWax Commerce to Shopify through the "presell catalog sync" job. This job is set to run every 15 minutes by default and updates the product listings on Shopify based on any changes made to the pre-order/backorder category in HotWax Commerce within the last 15 minutes.

<figure><img src="../../.gitbook/assets/32.png" alt=""><figcaption><p><em>Fig. 2 : Configurations of 'Sync Variant Details' job in Job Managers App</em></p></figcaption></figure>

The products are listed/delisted from Shopify through the following steps:

1. The “presell catalog sync” job generates a GraphQL file that contains information about products that have been added or removed from the pre-order/backorder category. This file is then uploaded to Shopify. The details included in the GraphQL file are the promised delivery date, product category, and product status.
2. The GraphQL File also indicates whether the "continue selling when out of stock" flag should be turned ON or OFF.
3. When a GraphQL file is processed by Shopify, the meta field on the product variants is populated with the promise date, product category, and product status. HotWax Commerce checks the inventory policy for each product variant to ensure that "Continue selling when out of stock" is automatically turned on or off

To further illustrate this example, let’s take a look at a GraphQL file for the given purchase order items:

<table data-full-width="false"><thead><tr><th width="106">Purchase Orders</th><th width="136">Product Name</th><th width="107">Arrival Date</th><th width="113">Product category</th><th width="91">Status</th><th>Continue Selling Out of Stock</th></tr></thead><tbody><tr><td>PO 1234</td><td>Black Jacket</td><td>10-10-23</td><td>Pre-order</td><td>Active</td><td>True</td></tr><tr><td>PO 1234</td><td>Green Jacket</td><td>10-10-23</td><td>Backorder</td><td>Active</td><td>True</td></tr><tr><td>PO 2345</td><td>Red Shirt</td><td>08-08-23</td><td>Pre-order</td><td>Active</td><td>True</td></tr><tr><td>PO 2345</td><td>Green Shirt</td><td>08-08-23</td><td>Pre-order</td><td>Active</td><td>True</td></tr><tr><td>PO 2345</td><td>Purple Shirt</td><td>08-08-23</td><td>Backorder</td><td>Active</td><td>True</td></tr><tr><td>PO 1AB2</td><td>Yellow Shirt</td><td>07-31-23</td><td>Pre-order</td><td>Active</td><td>True</td></tr></tbody></table>

Once all the products are listed on Shopify, it's important to add the HC:Pre-order or HC:Backorder tag accordingly. These tags can easily be added using the 'Add pre-order tags' and 'Add backorder tags' jobs, which run every 15 minutes. By checking the pre-order category in the meta fields, the jobs add the appropriate tag to the parent product on Shopify.

The HotWax Commerce Pre-order PDP app utilizes tags and meta fields to modify the 'Add to Cart' button and show the expected delivery date on Shopify PDP. Products labeled with 'HC:Pre-order' tags will have the 'Add to Cart' button changed to 'Pre-Order', while products with 'HC:Backorder' tags will display 'Backorder' instead.

<figure><img src="../../.gitbook/assets/33.png" alt=""><figcaption><p><em>Fig.3 : Pre-order button on PDP</em></p></figcaption></figure>

When a product is delisted from presell, its status changes to inactive and the option to 'continue selling out of stock' is set to false. There are three conditions that may require inventory to be delisted from Shopify.

After the merchant has received all the orders for the available ATP on the black jacket:

<table><thead><tr><th width="105">Purchase Orders</th><th width="131">Product Name</th><th width="108">Arrival Date</th><th width="120">Product category</th><th width="101">Presell Status</th><th>Continue Selling Out of Stock</th></tr></thead><tbody><tr><td>PO 1234</td><td>Black Jacket</td><td>10-10-23</td><td>Pre-order</td><td>Inactive</td><td>False</td></tr></tbody></table>

When the merchant receives red shirts inventory at their fulfillment center:

<table><thead><tr><th width="109">Purchase Orders</th><th width="130">Product Name</th><th width="107">Arrival Date</th><th width="120">Product category</th><th width="99">Presell Status</th><th>Continue Selling Out of Stock</th></tr></thead><tbody><tr><td>PO 2345</td><td>Red Shirt</td><td>08-08-23</td><td>Pre-order</td><td>Inactive</td><td>False</td></tr></tbody></table>

When the arrival date of a purchase order is passed:

<table><thead><tr><th width="111">Purchase Orders</th><th width="129">Product Name</th><th width="107">Arrival Date</th><th width="120">Product category</th><th width="99">Presell Status</th><th>Continue Selling Out of Stock</th></tr></thead><tbody><tr><td>PO 1AB2</td><td>Yellow Shirt</td><td>07-31-23</td><td>Pre-order</td><td>Inactive</td><td>False</td></tr></tbody></table>

After delisting pre-orderable products from Shopify, merchants can use the 'Remove pre-order tags' and 'Remove backorder tags' jobs to get rid of the HC:Pre-order and HC:Backorder tags. This will happen automatically every 15 minutes.

If a pre-orderable product is delisted from Shopify, the buttons for 'Pre-order' and 'Backorder' will switch to 'Add to Cart' on the Shopify PDP page as long as there is inventory for any upcoming orders. If the available to promise (ATP) quantity runs out and becomes zero, the "Pre-order" and "Backorder" buttons will switch to "Out of Stock".&#x20;

<figure><img src="../../.gitbook/assets/34.png" alt=""><figcaption><p><em>Fig.4 : Out of Stock button on PDP</em></p></figcaption></figure>
