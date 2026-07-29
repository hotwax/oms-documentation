# Imports

The Imports page shows the 100 most recently updated product synchronization records from `ProductUpdateHistory`, ordered by the latest update timestamp.

## Search imports

The search runs against the 100 records already loaded in the page. You can search by HotWax Commerce product ID, parent product ID, SKU, shop ID, or system message ID.

## Refresh imports

Click `Refresh` to request the latest 100 records from the OMS.

## Review synced records

Each row can show:

| Field | Description |
| --- | --- |
| Product ID | The HotWax Commerce product or variant ID recorded in the update history. |
| Parent | The HotWax Commerce parent product ID, when present. |
| SKU | The recorded product SKU, when present. |
| System message | The system message ID associated with the update, when present. |
| Status | `Synced` when a system message ID is present; otherwise `Recorded`. |
| Shop | The shop ID associated with the update history. |
| Timestamp | The creation timestamp, or the last-updated timestamp when no creation timestamp is present. |
