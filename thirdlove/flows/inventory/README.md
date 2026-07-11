# Inventory

## Scope

This section documents store inventory management workflows in HotWax that keep NetSuite accurate:

- Cycle counts and inventory adjustments
- Damaged inventory identification and movement
- Store-facing scanning workflows and approvals

## Identifiers

- **Item identity:** SKU / barcode
- **Location identity:** store location and NetSuite inventory locations (including damaged buckets)

## Sources and Destinations

- **Sources:**
  - Store scans (counts and receiving actions)
  - NetSuite (expected on-hand, transfers, and location structure)
- **Destinations:**
  - NetSuite inventory adjustments (for approved variances)
  - Reporting and audit views for operations (variance review)

## Cycle Counting

### Lifecycle

1. Operations/admin creates and assigns a count to a store user.
2. Store scans items and submits counts.
3. Operations/admin reviews variances and either accepts, rejects, or triggers recount.
4. Accepted variances post to NetSuite as inventory adjustments.

### Controls

- Tolerance/threshold-based review (auto-approve within tolerance vs hold for review) was discussed as an option.
- Recount workflow is available when results look incorrect.

### Exceptions

- “No match found” scans can be submitted so stores can complete the count; operations reconciles after the fact.

## Inventory Adjustments

- Inventory adjustments are created in NetSuite based on the variances that are accepted during review.
- Reporting expectations (e.g., variance summaries by store) were discussed as a requirement; confirm which NetSuite/HotWax reports will be used operationally.

## Damaged Inventory

### Business Need

- Move damaged inventory out of sellable store stock quickly.
- Track damage reasons for reporting and follow-up actions (donation, audit, pullback).

### Recommended Configuration Pattern

- Define a controlled list of damage reason codes.
- Map each reason code to a NetSuite inventory location (“damaged buckets”).
- Use transfers to move inventory out of the store; store attribution can be tracked via the transfer’s “from location”.

## Devices and Store Experience

- Store workflows are designed to run embedded in Shopify POS and in browsers on store hardware (iPad).
- Scanner support was a key requirement for both receiving and cycle counts.

