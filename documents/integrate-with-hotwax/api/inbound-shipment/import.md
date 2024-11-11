---
description: Explore API and data feeds within the 'inbound shipment documentatoin' documentation.
---

# Import

#### File Structure:

| Field Name | Description | Example |
|---|---|---|
| `external-shipment-id` | Unique identifier for the external shipment | 12009298 |
| `product-sku` | Product SKU (internal name) | 26897 |
| `quantity` | Quantity of the product being transferred | 11 |
| `origin-facility-id` | ID of the originating facility | 116 |
| `destination-facility-id` | ID of the destination facility | 281 |
| `item-external-id` | External identifier for the item | 1 |
| `tracking-number` | Tracking number associated with the shipment | 788944217767 | 788944218650 |
| `shipment-attribute` | Additional attributes (e.g., EXTERNAL\_ORDER\_ID) | EXTERNAL\_ORDER\_ID:TO0005374 |
| `shipment-type` | Type of the shipment (e.g., IN\_TRANSFER) | IN\_TRANSFER |

### Shipment Types

| Shipment Type      | Parent Type        | Description                |
| ------------------ | ------------------ | -------------------------- |
| DROP\_SHIPMENT     |                    | Drop Shipment              |
| TRANSFER           |                    | Transfer                   |
| INCOMING\_SHIPMENT |                    | Inbound Shipment           |
| OUTGOING\_SHIPMENT |                    | Outbound Shipment          |
| PURCHASE\_SHIPMENT | INCOMING\_SHIPMENT | Purchase Shipment          |
| SALES\_RETURN      | INCOMING\_SHIPMENT | Sales Return Shipment      |
| IN\_TRANSFER       | INCOMING\_SHIPMENT | Inbound Transfer Shipment  |
| SALES\_SHIPMENT    | OUTGOING\_SHIPMENT | Sales Shipment             |
| OUT\_TRANSFER      | OUTGOING\_SHIPMENT | Outbound Transfer Shipment |
| PURCHASE\_RETURN   | OUTGOING\_SHIPMENT | Purchase Return Shipment   |


### TBD 

Sample Shipment file