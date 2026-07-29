# Missing values

The Missing values page measures field coverage in the product index and lists products that do not have a selected field.

## Review catalog coverage

The page provides coverage cards for these fields:

| Field | Scope |
| --- | --- |
| UPC | Variants |
| SKU | All products |
| Image | All products |
| Brand | All products |
| Primary category | All products |
| Tags | All products |

Cards are ordered by the number of missing values, with the largest gap first. Each card shows:

* `Complete` or the number of missing records.
* The percentage of eligible records that contain the field.
* The eligible product or variant count used in the calculation.

Click a card to load the matching missing records below it.

## Look up another field

Enter an indexed Solr field name, such as `brandName`, `upc`, or `mainImageUrl`, and click `Look up`. The app removes characters other than letters, numbers, and underscores before querying the field.

## Review products missing a field

The result heading states how many products, variants, or virtual products are missing the selected field. Results use the same product rows as the Product workbench and load additional pages as you scroll.

Click a row to open the product family on Product details. You can update the missing value there when the field is supported by the product editor.
