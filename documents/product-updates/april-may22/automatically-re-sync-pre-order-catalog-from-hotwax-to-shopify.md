---
description: >-
  Shopify will now automatically synchronize with the HotWax Pre-Order catalog
  to reduce the risk of overselling and underselling for retailers.
---

# Automatically re-sync Pre-Order catalog from HotWax to Shopify

<figure><img src="https://www.hotwax.co/hubfs/Product%20Updates%20and%20Release%20Notes/2022/April%20and%20May%202022/Product%20Updates/Featured%20image/Automatically%20re-sync%20Pre-Order%20catalog%20from%20HotWax%20to%20Shopify.png" alt=""><figcaption></figcaption></figure>

When taking pre-orders, it’s important to manage customers’ delivery expectations. This includes displaying the “pre-order” button on the Product Detail Page and showing accurate promise dates. A lack of information can lead to expectation discrepancies between retailers and customers, and ultimately result in a less than ideal customer experience.

Additionally, any issue in the listing and delisting of pre-order products can lead to overselling and underselling scenarios - both of which can cause serious problems for retailers.

### Why this change is important

When HotWax Commerce integrates with Shopify, it becomes the master for managing their pre-order catalog. HotWax Commerce lists and delists pre-order products every 15 minutes. HotWax also adds a 'Pre-order' tag to these products and automatically checks the “continue selling when out of stock” flag for pre-order products.

Later, the HotWax Commerce Shopify Pre-order app switches the 'Add to Cart/Buy now' button to 'Pre-order' and populates promise dates on the product display page for products with the “pre-order” tag.

We came across three scenarios where pre-orderable products in Shopify were getting out of sync with the catalog of pre-order products in HotWax Commerce.

#### Scenario 1

Retailers use HotWax’s Pre-order management app for managing their Shopify product catalog, listing and delisting pre-order products on Shopify, and replacing the third-party app “Add to Cart” button with the “Pre-order” button on Shopify.

In this particular case, the third-party Shopify app was removing the ‘Pre-order’ tag put in place by HotWax Commerce, resulting in pre-orderable products in Shopify being out of sync with the pre-order catalog in HotWax Commerce.

#### Scenario 2

Many Shopify retailers use multiple apps to address multiple business needs. One of our customers used a third-party app for capturing pre-order payments, however, this app was adding a “Pre-Order” tag on products that was overriding the HotWax “pre-order” tag.

As a result, products that did not qualify as pre-orderable in the HotWax catalog _were_ pre-orderable in Shopify, causing inventory discrepancy and order management issues.

#### Scenario 3

When processing large sets of data, Shopify may roll back an entire update if it encounters an error or discrepancy.

Retailers that frequently deleted products in Shopify would encounter an issue where their pre-order catalog updates failed because HotWax Commerce would attempt to update a product’s status after it had been deleted in Shopify but had not yet been deleted in HotWax’s scheduled sync.

Failed pre-order catalog updates scheduled throughout the day would eventually add up to a large discrepancy between HotWax and Shopify regarding what was actually available for pre-order.

HotWax has now added a new and unique "HC: Pre-order" tag to ensure that the pre-order tags don’t conflict with the retailer’s third-party apps.

The HotWax system now also provides a new on-demand sync every morning, which resets pre-order tags on Shopify. This will resync all the pre-orderable products in Shopify with the pre-order catalog on HotWax Commerce, thereby ensuring all the "out of sync" pre-order products in Shopify are in sync with the HotWax pre-order catalog.
