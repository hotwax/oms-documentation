# Data Architecture (Phase 1)

## Scope

This page summarizes how ThirdLove’s Phase 1 store inventory management data flows through the core systems:

- **Shopify** (e-commerce + product catalog reference)
- **Shopify POS** (store execution surface)
- **HotWax** (store inventory management workflows)
- **NetSuite** (system of record for inventory)

## Products

- **Origin:** Shopify product catalog
- **How it is used:** HotWax uses product identity and imagery to support scanning workflows and reduce receiving errors.
- **Key dependency:** define catalog filtering (active vs archived) and how to handle legacy items that exist in Shopify but not in NetSuite.

## Transfer Orders

- **Origin:** NetSuite transfer order
- **Mutation/processing:**
  - 3PL fulfills transfer and records fulfillment in NetSuite
  - HotWax surfaces inbound transfers to the destination store for receiving
  - Store associates receive via scanning in Shopify POS (embedded HotWax app)
- **Destination:** NetSuite item receipt(s)

## Inventory

### Receiving

- **Origin:** NetSuite transfer fulfillment details
- **Processing:** store scans received items; over/under receipts are captured
- **Destination:** NetSuite item receipts and store receiving history in HotWax

### Cycle Counts and Adjustments

- **Origin:** store scans (hard counts)
- **Processing:** variance review, acceptance/rejection, and recounts as needed
- **Destination:** NetSuite inventory adjustments (posted for accepted variances)

### Damaged Inventory

- **Origin:** store identifies non-sellable inventory
- **Processing:** apply damage reason codes and move inventory out of store sellable stock
- **Destination:** NetSuite damaged bucket locations (via transfers), with store attribution available via “from location”

## Sales Orders (Context Only)

- Shopify ↔ NetSuite order and fulfillment sync exists today and remains unchanged in Phase 1.
- Future phases (BOPIS/ship-from-store) require confirmation of reservation and inventory timing behavior to avoid customer service issues.

