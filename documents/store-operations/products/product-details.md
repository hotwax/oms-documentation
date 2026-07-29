# Product details

Open Product details from a Product workbench or Missing values row. The page loads the selected product family and provides separate controls for viewing and editing its catalog data.

Viewing the page requires `PIM_PRODUCT_VIEW` or `PIM_PRODUCT_ADMIN`. Product editing requires `PIM_PRODUCT_CREATE` or `PIM_PRODUCT_ADMIN`. Feature actions use the separate feature permissions described in [Products app](products-app.md#prerequisites-to-use-the-app).

## Navigate a product family

The top of the page shows the product image, name, internal name, brand, and product type. For a product family, use the feature selector or variant strip to select a variant.

Use `Edit parent` and `Edit variant` to choose which family member the editor changes. The selected variant can copy dates, prices, and shipping values from its parent.

When a feature combination does not have a variant, use `Add variant` to create it.

## Manage features

The Features section groups feature values by axis, such as color or size. Depending on your permissions, you can:

* Apply an existing feature value to the selected family member.
* Remove an applied feature value.
* Add a feature axis or create a new value.

Applying or creating features requires `PIM_FEATURE_CREATE` or `PIM_FEATURE_ADMIN`. Removing features requires `PIM_FEATURE_ADMIN`.

## Edit display information

The Display card contains:

* `Name`
* `Internal name`
* `Brand name`
* `Type`
* `Desc`
* `Long desc`

The product-type list comes from the OMS rather than a fixed list in the app. For a `MARKETING_PKG_PICK` product, the Display card also manages its components and quantities.

Click `Save` in the card footer to apply changes or `Reset` to discard the card's draft.

## Manage kit components

Marketing-package kit types show a Components card. Add linked products with quantities, or expire and reactivate existing component associations.

## Manage product identifications

The Product identifications card always shows the product ID and lists active identification values returned by the OMS. Click `Edit` to add an identification, update its value, or expire it. Available identification types also come from the OMS.

## Manage dates

Set the introduction, release, support discontinuation, and sales discontinuation dates. The `Discontinue when out of stock` option records that the item should not return to stock and that backorders should not be accepted.

When editing a variant, click `Copy from parent` to copy the parent's date values into the draft, then save the card.

## Manage tags

Add or remove tags from the parent product or selected variant. The card separates parent tags from variant tags when the product belongs to a family.

## Manage categories

View active product-category memberships, add a category, or remove an existing membership. Removing a category expires the membership rather than deleting its history.

## Manage prices

Set the currency and positive values for `Default price`, `List price`, and `Wholesale price`. Saving writes listing prices for the current product store and primary store group. Clearing an existing price expires it.

When editing a variant, click `Copy from parent` to place the parent's active price values in the draft before saving.

## Manage Shopify shop products

The Shopify Shop Products card maintains one mapping per shop. A mapping contains:

* `Shop ID`
* `Shopify Product ID`
* `Shopify Inventory ID`

Add a mapping, edit the Shopify IDs for an existing shop, or remove a shop mapping.

## Manage inventory policy

Use the Inventory policy card to:

* Set whether the product is returnable.
* Set whether the product is taxable.
* Add substitute-product associations.
* Expire or reactivate substitute associations.

## Manage shipping and handling

Set the default box type, width, height, depth, weight, and the unit for each measurement. You can also set `In shipping box` and `Charge shipping`.

The dimension preview redraws the box using the entered measurements and converts mixed length units for proportional display. When editing a variant, click `Copy from parent` to copy the parent's shipping values into the draft.

## Review change history

The Change history card shows up to 10 audit entries returned for the selected product. Each entry shows the entity and field, old and new values, timestamp, and user when available.

The current Products app history endpoint is configured for recorded identifier-value changes. Do not treat this card as a complete history of every product edit.
