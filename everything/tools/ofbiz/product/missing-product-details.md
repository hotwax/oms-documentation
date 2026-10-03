---
description: >-
  Separate a missing product record from missing display data, barcode
  identifiers, import results, and search visibility.
---

# Investigate Missing Product Details

A blank product image, missing SKU, unsuccessful barcode scan, and product absent from an app can have different causes. Use this guide to locate the first place where the expected product information is missing before requesting a sync or indexing change.

This workflow is useful for support teams investigating the Receiving App and other product-dependent apps. It is not a procedure for creating products, changing mappings, or rebuilding an index.

## Before You Start

Confirm the environment, Product Store, facility, app version, and affected product or variant. Record which field is missing and where it is visible elsewhere. Search and inspect only records you are authorized to access.

Use a stable product reference and the specific variant. A matching name or a similar image alone does not establish that two systems are showing the same item.

## 1. Describe The Symptom Precisely

| Observation | First Check |
| --- | --- |
| The line is present but the image or display identifier is blank | Product fields and the app's display-identifier preference |
| Barcode scanning fails | Configured barcode identifier, exact value, loading state, and selected line or box |
| Product exists in OMS but is absent from app search | Search filters and the product's indexed representation |
| Product exists in the source system but not in OMS | Import selection, mapping, and record-level import result |
| The entire order line is absent | Source-order and OMS-order line lists, independently of product display data |
| Product details are visible but stock is missing | Facility and inventory data; product import is not proof of an inventory update |

Do not infer “product missing” from a placeholder image or an empty inventory value.

## 2. Check The Product Record And Source Fields

1. Open the authorized product view. In deployments with the Products App, use `Product workbench` and search by product ID, SKU, UPC, or name.
2. Clear restrictive search and tag filters. Check the product type, Product Store, and parent/variant selection.
3. Open the exact variant used on the order. Compare its identifiers and display fields with the approved source system.
4. Check whether the expected image, barcode, and SKU actually exist in that source.
5. Confirm which integration supplies those fields for this product type.

For a product maintained only in an ERP, do not assume that Shopify can supply its image or barcode. A product can exist in OMS with limited attributes. Confirm the intended catalog process with the product-data owner rather than creating a second product solely to fill a display gap.

An empty Product workbench search does not establish that the OMS record is absent. If search remains empty, ask an authorized operator to check the record directly before deciding that an import failed or a product must be created.

The [Products App guide](https://docs.hotwax.co/documents/retail-operations/products/product-management) describes the current product views. Its edit actions are outside this diagnostic procedure.

## 3. Distinguish Display Identifiers From Scan Identifiers

The Receiving App has product-display preferences and a barcode identifier used for scanning. A visible SKU does not prove that the barcode being scanned matches the configured identifier.

Inspect the existing preferences without changing them. Compare the complete barcode value, including leading zeros, with the selected variant's corresponding identifier. If the app reports that identifiers are still downloading, allow that read to finish before concluding that the identifier is missing.

Where box filters are available, confirm that the intended line is pending in the selected box. If multiple lines match the barcode, identify the correct line before proceeding through the approved receiving workflow. Do not disable `Force scan`, change an identifier preference, or add an unexpected item just to bypass a scan failure.

## 4. Trace The Import Result

For Shopify-sourced products, follow [Shopify Product Sync](../../shopify/product-sync.md) to identify the relevant request and import. Inspect the current stage, time, and related Data Manager result.

An integration message reaching `Consumed` means the result was handed to Data Manager in this flow. It does not establish that every product imported successfully. Check the import's successful and failed record counts and the affected product's result.

For another source system, ask its integration owner to identify the product export, mapping, and corresponding OMS import. Do not apply Shopify job names or its schedule to an ERP product flow. Verify the configured schedule and actual execution history; there is no single sync interval for every installation.

## 5. Compare OMS Data With Search Visibility

If an authorized record view confirms that the product exists but app search cannot find it, collect the product reference and compare the expected search document with the record. Receiving App source uses product search to retrieve product information, so record presence and search visibility are separate checks.

Use [Search Admin](../../maarg/search-admin.md) and [Solr Search](../../maarg/solr-search.md) only where those tools and permissions are available. Start with a narrow read. An empty search result alone is insufficient evidence that a product must be recreated.

Do not delete product associations, change source identifiers, replay an entire catalog, or run a full reindex during triage. The product-data and integration owners should agree on a targeted recovery after the failing stage is identified.

## Verify Recovery And Escalate

After an approved correction, recheck the same product and variant in the same environment and facility. Verify the required field in the record, app display, and barcode workflow separately. If receiving is involved, also verify that recovery did not create an extra receipt or order line.

For unresolved cases, provide the private support team with the affected product reference, missing field, source system, app version, observation time and time zone, applied filters, and import or search result. State whether the issue affects one product or a wider group. Redact screenshots and omit credentials, private store URLs, raw payloads, and unrelated customer data from public reports.

## Verification Scope

The diagnostic distinctions above are supported by the current product and sync manuals, plus [Receiving product search](https://github.com/hotwax/receiving/blob/b575ce1ae58160ad3ae4af638a38a7ef2e1c57b4/src/store/product.ts), [barcode matching](https://github.com/hotwax/receiving/blob/b575ce1ae58160ad3ae4af638a38a7ef2e1c57b4/src/store/transferorder.ts), and [identifier preferences](https://github.com/hotwax/receiving/blob/b575ce1ae58160ad3ae4af638a38a7ef2e1c57b4/src/components/DxpProductIdentifier.vue). They do not establish the cause of a particular incident or that the same source snapshot is deployed everywhere.
