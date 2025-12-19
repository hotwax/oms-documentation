# Transfer Orders

## Scope

This section documents the transfer order lifecycle for ThirdLove’s store inventory management scope, including store receiving and how it posts back to NetSuite.

## Identifiers

- **Transfer order identifier:** NetSuite transfer order name/number
- **Search keys used in-store:** transfer order name and tracking code
- **Line identifiers:** SKU / barcode
- **Locations:** from/to location (NetSuite locations; store attribution via “from location” was discussed)

## Lifecycle (NetSuite → HotWax → Store → NetSuite)

1. Transfer order is created in NetSuite (replenishment, RTV, etc.).
2. 3PL fulfills the transfer and records fulfillment details in NetSuite.
3. HotWax surfaces inbound transfers to the destination store for receiving (embedded in Shopify POS).
4. Store associates scan items and receive.
5. HotWax posts the receipt back to NetSuite (item receipt).

## Store Receiving Experience (from transcripts)

- Embedded in Shopify POS as a tile; also accessible via browser.
- Scanner-first receiving; scanning can be required.
- Product imagery is displayed (pulled from Shopify) to reduce receiving errors.
- Over-receive is flagged visually; stores can close out under-receipts from their view.
- Receiving history is visible (who received what, and when).
- Mis-shipped items can be added during receiving to keep the store workflow moving (confirm desired controls).

## Over / Under Receiving

- Under/over receipts are expected scenarios.
- NetSuite reconciliation remains the system-of-record closeout; clarify how transfer closure is handled for partial receipts and backorders.

## Exceptions and Ownership

- Define whether stores should be prompted to review discrepancies before closing a receipt (a request was raised for an “only discrepancies” review view).
- Define who owns reconciliation when store receipts differ from expected quantities (store vs ops vs NetSuite team).

