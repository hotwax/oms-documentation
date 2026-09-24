# Missing Values

The `Missing Values` page provides a centralized dashboard representing information about products with missing information. It scans the product catalog to identify gaps and missing attributes, and provides the necessary tools to fill in these gaps.

### Catalog Coverage

The `Catalog coverage` cards display key product identifiers and attributes, such as `Brand`, `Tags`, `SKU`, and others, along with a real-time count of how many items are missing that specific marker, in a worst-first fashion.

The `Catalog coverage` cards consist of the following attributes and identifiers:

| **Attribute**         | **Description**                                                                  |
| ------------------- | ------------------------------------------------------------------------------------ |
| Brand               | The brand the product is associated with.                                          |
| Image               | The primary image used to visually represent the product.                          |
| Tags                | Labels applied to the product for grouping, filtering, or bulk actions.            |
| UPC                 | The Universal Product Code assigned to a variant.                                   |
| SKU                 | The Stock Keeping Unit used to track a variant internally and across systems.        |
| Primary Category    | The main category a product is classified under for browsing and organization.      |

Each card shows:

* A badge displaying either `[N] missing`, in red, if products are missing that field, or `Complete`, in green, if every product has a value.
* A progress bar reflecting how much of the catalog is covered for that field.
* The completion percentage and total product (or variant) count it was calculated against, for example, "14% complete · 2798 products".

Click a card to select it, highlighted with a blue border, and load the list of products missing that field below.

### Look Up Another Field

Beyond the default fields shown as cards, the `Look up another field` section lets users check completeness for any other field, by name, for example, `brandName`, `upc`, or `mainImageUrl`. Enter the field name and click `LOOK UP` to load matching results.

### Products Missing a Field

Once a field is selected, either from a card or via lookup, the page lists every product missing that field under the heading `[N] products missing [Field]`. Each row shows the variant name, `SKU`, parent product name, and any associated tags, the same as on the `Product Workbench` list. Click a row to open that product's `Product Details` page and fill in the missing value.


