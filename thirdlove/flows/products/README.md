# Products

## Scope

This section documents how product and identifier data is used to support store inventory workflows (receiving, scanning, and cycle counts). The focus is on having a catalog in HotWax that store teams can scan against reliably.

## Identifiers

- **Primary store-facing identifiers:** SKU and barcode (scanner-based workflows)
- **Other identifiers (as available):** Shopify product/variant identifiers (not detailed in transcripts)

## Sources and Destinations

- **Source:** Shopify product catalog (used for product details and imagery)
- **Destinations/consumers:**
  - HotWax store inventory apps (search, scan matching, imagery display)
  - NetSuite item records (system of record; gaps were discussed)

## Mappings and Rules

- **Shopify → HotWax:** product identity and imagery
- **Active vs archived products:** the team discussed filtering behavior (include or exclude archived/inactive items) as a configuration decision
- **SKU naming convention:** standardization was raised as a broader NetSuite migration question; confirm whether any cleanup is planned

## Automations and Timing

Product sync cadence and filtering rules were not specified in transcripts; confirm during onboarding.

## Exceptions and Edge Cases

- **Scanned item not found in catalog:** the count workflow can still accept a scan and require a manual match so the store can finish the count.
- **Exists in Shopify but not in NetSuite:** the team discussed historical items where Shopify contains older SKUs that were never created in NetSuite; define who creates/matches these items and when.

