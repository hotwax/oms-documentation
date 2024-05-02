# Products Overview

The `Find Product` page within HotWax Commerce serves as a centralized hub for managing products. This page offers a consolidated view of all the products with individual variant information, displaying product category, product name, product ID, and product features viz, size, colors, etc. It enables users to have a quick view of all existing products and carry out product management efficiently.

HotWax Commerce `Find Product` page also empowers users to use multiple filter options to refine their product search. The prominent Preorders and Backorders filters help users to search out specific products, under these categories, enabling retailers to view the products currently on preorder and backorder.

**Step-by-Step Usage Instructions:**
1. Log in to HotWax Commerce by entering your credentials on the login page.
2. Within the hamburger menu, find and select the `PIM` (Product Information Management) option. This will open a submenu with various product-related functionalities.
3. From the PIM submenu, choose the `Product` option. This action will direct you to the `Find Product` page.

{% embed url="https://youtu.be/4eSmmv8y6to" %}
Video: Find Product Page
{% endembed %}

### Search Products
The `Search Bar` on the `Find Product` page provides users quick access to get information regarding any product. It streamlines the search process about various identifiers such as Product ID, Product name, SKU, UPC, Parent product, or any other related keywords. For a search with any keywords, all related products and variants are listed alphabetically as per the parent product name.

{% embed url="https://youtu.be/TppZjVwepbs" %}
Video: Search Product Page
{% endembed %}

### Search Products using Filters

Enables users to search products, simultaneously using `single` or “multiple filters'', and allows users to choose required options from the selected filter dropdowns to refine the search results. This feature is significant for looking up the required set of products to efficiently manage and monitor the specified products and their variants by “Category”, “Features”, “Tags”, and “Price”, or group search by Preorders and Backorders.

Generally, for a keyword search, all the related products appear and are displayed on the screen. To search for a specific product, users can either choose the options from available filters or enter a value set of product names and features or any other value together to excel the search. For example, if a product has different sizes and is available in multiple colors, and want to search “Checked Shirt, Size S, and Colour Black” users can put in the value in the search bar as “Check Shirt” and use `Feature` Filter to get the specific product.


{% embed url="https://youtu.be/srkwSCZh_gA" %}
Video: Search Product Page
{% endembed %}


**Filter Type** | **Description**
--- | ---
Store Filter | Filter out store-specific products, every brand product store has a unique product catalog and if you'd like to view the product catalog of a specific brand, you can filter out the products using the Store filter
Category Filter | Filter products belonging to single or multiple categories, for example, “Men’s shoes”, “Kids' wear”, “accessories”, “apparel”, “Jewellery”, etc.
Feature Filter | Filter products by choosing product features like “color” “shades”, “sizes”, “donations”, etc.
Tags Filter | Filter products by choosing any tags available on them like ‘sale”, “discount”, “size range”, “men”, “women”, etc. For example, if a retailer wants to view shirts on discount, they can search for shirts using the search bar and Discount from Tags filter to get specific products in search results.
Exclude Tags Filter | It refines the search by excluding product tags. This will help users to streamline bulk product lookup, where the products having those tags will not be displayed during the search.
Preorder Filter | Filter out all existing products under the preorder category.
Backorder Filter | Filter out all existing products under the backorder category.
Include Parent Product | Helps users view parent products with respective variants.

(Video: Filter Facility)

### Export CSV

For having a quick view of a certain set of products, users can filter out the products and run the export function to download the CSV into their system.

### Manage Safety Stock

Enables users to search selected products and export CSV by specifying safety stock value and uploading it back using EXIM for bulk products. Safety Stock will be established at all the associated facilities for the entire set of selected products. Users are allowed to manually create CSV, set safety stocks, and upload using EXIM for bulk products.
([Link of Manage Safety Stock User Manual](#))

### Threshold:

Enables users to search and create CSV of all displayed products. A threshold will be established for the entire set of selected products. Users can manually create CSV and upload using `EXIM` for bulk products.
([Link of Manage Threshold User Manual](#))

### View Product Details

The comprehensive `Product View` page within HotWax Commerce enhances user efficiency and facilitates streamlined product management. This page consolidates all essential information related to a specific product, providing users with a holistic view that encompasses key details of product identifications and product information such as `product specifications` and “associated sales channels”. To access the `Product View` Page, search for the required product on the `Find Product` Page and simply click on the Product ID to view extensive details about the product. 

HotWax Commerce offers the following features on the Product View Page:

**Overview Section**

The overview section contains essential information related to “product specifications”, “features”, and “identifications”. Here's a summary of each element:

**Specifications** | **Description**
--- | ---
Product Type | Displays Product Type as “Finished Goods”, “Digital goods”, “Accessories”, or others as specified.
Product Name | Universal name or title assigned to the Product.
Product SKU | Universal product identifier, that retailers assign to products to keep track of stock levels internally at ecom stores which acts as a unique identifier for HotWax Commerce and ERP.
Product Brand | Specifies the brand the product is associated with. Multiple Brands may have the same Product but have a unique SKU for each brand. Product Brand name determines the products to which it belongs when multiple brands are configured.
Tags | Product Tag identifications, added at e-commerce stores like “sale”, “discount”, “size range”, “men, women”, etc.
Shippable Dimensions | Product dimensions with ideal height, width, depth, and weight for shipping and ascertain the shipping box dimensions accordingly.
Product Features | Feature particulars specified for product variants like size, and color.
Product Identifications | Displays associated product ID and Inventory ID with eComm stores. When HotWax Commerce enters a retailer’s Shopify ecosystem, it becomes the source of truth for all product-related information, viz: ECom Product Id, Product SKU, UPCA, GTIN, ISBN.
Product Categories | Displays the parent product category for the variants.

This information provides a comprehensive overview facilitating effective management and customization of a product and also empowers users to add and delete any product specifications.

**Add Shopify Shop Association**

Retailers who operate in multiple countries use Shopify shops in Hotwax commerce to manage product catalogs in different countries. A master catalog holds all products, while associations are formed to sync these products across different country-specific catalogs. These associations are automated through a job in HotWax Commerce that creates associations between products in the master catalog and the product catalog of other countries by matching the SKU codes.
Retailers can view the product association with the different shops in the Shopify Shop section and Add new product associations with Shopify Shop by following these steps:

1. Click on the `Add` button in the `Shopify Shop` section, this will open a new module
2. Select the `Shop` from the dropdown menu, for which you want to create the association.
3. Add `Shopify Product ID` and `Shopify Inventory ID`
4. Click on the `Add` button to save the product association

**Add Product Content**

HotWax Commerce allows users to add and update product summaries, product descriptions, images, and videos with meta descriptions for enhanced product display. The details are readily available for the users in this section.