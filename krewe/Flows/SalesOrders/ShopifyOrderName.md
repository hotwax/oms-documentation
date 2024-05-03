---
description: >-
  Learn how HotWax ensures traceability by storing Shopify order names and
  internal IDs in NetSuite's fields, facilitating efficient order tracking and
  management.
---

# Reference IDs

To help with traceability, HotWax includes the Shopify order name when orders are pushed to NetSuite. The order name is stored in NetSuite’s native “other reference number” field on sales orders when orders are synced for creation. This field has a label “PO#” for display purposes.

The HotWax internal order ID is stored in the external ID field in NetSuite and the actual NetSuite internal ID is found in the “Document#” field.