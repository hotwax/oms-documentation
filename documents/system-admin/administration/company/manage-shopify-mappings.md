---
description: Map Shopify locations and values to their HotWax Commerce equivalents.
---

# Manage Shopify mappings

Mappings translate Shopify locations and order or product values into HotWax Commerce records. Review mappings before starting inventory, product, or order synchronization.

## Map inventory locations

1. Open the **Company App**.
2. Go to `Shopify`.
3. Select a connection.
4. Open `Inventory locations`.
5. Click `Run facility audit`.
6. Review every active Shopify location.
7. Map each location to the matching HotWax facility.
8. Save the changes.
9. Run the audit again and resolve remaining gaps.

Map multiple physical stores to one facility only when the approved inventory design requires it.

## Map shipping methods

1. Open the connection.
2. Select `Shipping methods`.
3. Review the Shopify shipping option.
4. Select the HotWax shipment method and carrier.
5. Repeat for each active Shopify value.
6. Click `Save All`.

Unmapped shipping methods can prevent imported orders from receiving the intended fulfillment method.

## Map payment methods

1. Open `Payment methods`.
2. Review the Shopify payment name.
3. Select the matching HotWax payment method.
4. Add a mapping when no current row exists.
5. Save the changes.

Use a payment method approved by the finance and integration teams.

## Map sales channels

1. Open `Sales channels`.
2. Review each Shopify order source.
3. Select the matching HotWax sales channel.
4. Save the mapping.

Sales-channel mappings determine how imported orders are categorized.

## Map product types

1. Open `Product types`.
2. Review the Shopify product type.
3. Select the matching HotWax product type.
4. Save the mapping.

Review new Shopify product types after catalog changes and map any uncategorized values.

## Verify mapping readiness

Return to the Shopify connection and review the mapping summaries.

Before activation, confirm:

* Active inventory locations are mapped
* Shipping methods used by live orders are mapped
* Payment methods used by live orders are mapped
* Shopify order sources are mapped to sales channels
* Product types used by the current catalog are mapped

Starter mappings accelerate setup, but they must still be reviewed against the implementation design.
