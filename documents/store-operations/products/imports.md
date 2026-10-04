# Imports

The `Imports` page shows a running log of product data synced into HotWax Commerce from connected sales channels, such as Shopify, so users can confirm that updates are coming through correctly. The page displays the `Last 100 recently synced product updates`.

### Search Imports

The search bar lets users search the synced records by product, `SKU`, barcode, or shop.

### Refresh

Click `REFRESH`, on the top right of the page, to reload the list with the latest synced records.

### Synced Records List

Each entry in the list represents a single product or variant update received from a sales channel, and shows:

| **Field**        | **Description**                                                                                   |
| ------------------ | -------------------------------------------------------------------------------------------------- |
| Identifier          | The product or variant ID from the source sales channel.                                          |
| Parent              | The source channel's ID for the parent product. Shown only when the entry is for a variant.        |
| System Message      | The corresponding HotWax Commerce `Product ID` the synced record was mapped to.                    |
| Status               | Whether the update was applied successfully, shown as `Synced`.                                    |
| Shop                 | The ID of the shop the update was synced from.                                                      |
| Timestamp            | The date and time the update was synced.                                                            |

