---
description: Understand how HotWax Commerce imports Shopify products, variants, and changes through the bulk product sync.
---

# Product download

HotWax Commerce imports Shopify products and variants to build the catalog used for order processing and inventory mapping. The bulk product sync supports an initial catalog import and recurring updates. Product sync creates product records and links; [importing inventory from Shopify](../inventory/import-inventory-from-shopify.md) is a separate process.

For the first import, follow [Set up HotWax Commerce with Shopify](../../../system-admin/administration/company/product-store-onboarding.md). This page explains the integration behind that workflow. Confirm that your installed connector supports the bulk product path before applying its configuration.

## Prepare the shop and product identity

Before importing products:

1. Confirm the Shopify shop has an active connection and is linked to the intended Product Store.
2. Choose the Product Store's primary identifier: Shopify variant ID, SKU, or barcode. Populate the chosen value consistently and resolve duplicates before import.
3. Confirm the Product Store's currency, store group, and catalog setup. Product prices and catalog membership use this context.
4. Review the product query, exclusion parameters, and metafield namespaces for this connection.
5. Confirm that the bulk-query sender, result polling or completion webhook, and product import processing are configured. The product sync job only queues the request.

The job template `sync_ShopifyProductUpdates` is installed paused with an empty `shopId`. A template's schedule does not prove that product sync is running for your shop.

### Keep Shopify identifiers distinct

| Identifier | Purpose |
| --- | --- |
| Shopify product ID | Identifies the parent product and its collection of variants |
| Shopify variant ID | Identifies one sellable variant and links it to an OMS product |
| Shopify inventory item ID | Identifies the inventory item used with Shopify location IDs for inventory sync |
| SKU or barcode | Can be the configured matching value for the OMS product; these values do not replace the Shopify IDs |
| OMS product ID | Identifies the product record in HotWax |
| Shopify shop ID | Scopes the connection, product links, and sync history |

The configured primary identifier is used to match a variant to the OMS product's internal name. The OMS product ID is a separate record identifier. Parent products use the Shopify handle with a `V_` prefix as their internal name.

HotWax stores the parent and variant links in `ShopifyShopProduct`. Variant links also hold the Shopify inventory item ID. Always verify the selected shop when inspecting these links, especially when several shops share an OMS catalog. A matching SKU alone does not prove that the required Shopify inventory link exists.

Changing the primary identifier or an identifier value after import can change how a variant matches an OMS product. Review the existing links before using a catalog import to recover missing products.

## Choose the import scope

The initial import and recurring updates use the same bulk pipeline. Their query scopes differ:

| Scope | Behavior |
| --- | --- |
| Initial or full import | `includeAll=true` skips the generated date window. Other configured filters still apply. |
| Recurring updates | Without an explicit `fromDate`, HotWax uses the message date of the latest consumed product-update request for this connection. |
| Explicit date window | `fromDate` and `thruDate` use strict `>` and `<` boundaries. Both target `updated_at` by default; `fromDateLabel` and `thruDateLabel` can select other fields. Configured positive date buffers move the corresponding boundary earlier. |
| Custom query | `filterQuery` replaces the generated date and status expression. Review the complete query before running it. |

The default generated query excludes archived products. It is not limited to active products; draft products can be included. Additional status exclusions and filter conditions can narrow the result. A full import does not automatically override those conditions.

The recurring date boundary tracks a consumed request, not a confirmed successful product import. Review the linked import and failed records before treating that boundary as proof that every earlier product change was applied.

Records exactly on a generated boundary are excluded. For a replay, choose a starting date before the earliest change you need to recover and account for the configured field labels and date buffers. A custom `filterQuery` controls its own boundaries.

Metafields are requested for configured namespaces. Product calendar mappings can add namespaces to the request. The query does not download every metafield automatically.

## Follow the bulk import

```mermaid
flowchart LR
    accTitle: Shopify product import stages
    accDescr: HotWax queues a shop-specific query. Shopify exports products and variants. HotWax downloads the result, prepares an import, applies product changes, and saves comparison history. Each stage has its own result.
    A[Queue product query] --> B[Shopify bulk export]
    B --> C[Download and prepare file]
    C --> D[Queue product import]
    D --> E[Apply changes and save history]
```

1. HotWax queues the resolved query for the selected Shopify connection.
2. The sender starts a Shopify bulk operation and records its operation ID.
3. Polling or the bulk-operation completion webhook checks the result. When Shopify supplies a result file, HotWax downloads it.
4. HotWax groups the exported parent products and variants into an import file and creates the linked Data Manager import.
5. The import compares incoming product data with saved comparison history. It creates new records and applies supported changes.
6. HotWax saves the comparison history used by later runs. See [Update product details](update-product-details.md) for the fields and comparison behavior.

If Shopify completes an export without a result URL, HotWax consumes the request without creating a product import file. This is different from a populated import finishing successfully.

## Confirm the result

1. Open the Company App, select `Shopify`, and open the affected connection.
2. Select `Product sync`, then review `Track sync progress`.
3. Check the product sync request, Shopify product export, and HotWax product import separately.
4. Open the linked import and review its final status, processed records, failed records, and error details.
5. Verify representative parent products, variants, selected identifiers, prices, and Shopify inventory item links in OMS.

Shopify's object count includes exported object types and is not a count of successfully imported OMS products. A consumed system message confirms that the request advanced through its processing stage; it does not replace the import result or product readback.

<figure><img src="../../.gitbook/assets/company-product-sync-dashboard.jpg" alt="Company App Product sync dashboard showing a consumed request, completed zero-object Shopify export, and skipped HotWax import"><figcaption><p>No product updates were returned in this example. The skipped import does not demonstrate a successful populated import.</p></figcaption></figure>

Use [Monitor Shopify product sync](../../../system-admin/administration/company/manage-shopify-product-sync.md) for history, recovery controls, and current jobs. If a request was consumed but its import failed, investigate that import before starting a later update window. Do not assume the next scheduled run automatically includes every failed record.

For a small set of missing or changed products, the connector also supports an on-demand import by numeric Shopify parent product IDs. Confirm its availability in your installed version and review the returned missing and failed IDs, then verify the resulting OMS records.
