---
description: Explore API and data feeds within the 'Import' documentation.
---

# Import

#### File Structure:

1. **external-shipment-id:**
   * _Description:_ Unique identifier for the external shipment. Use the internal ID from the originating system to ensure recognition during data synchronization.
   * _Example:_ 12009298
2. **product-sku:**
   * _Description:_ Product SKU refers to the internal name of the product, set by the primary product identifier in the OMS.
   * _Example:_ 26897
3. **quantity:**
   * _Description:_ The quantity of the product being transferred.
   * _Example:_ 11
4. **origin-facility-id:**
   * _Description:_ ID of the facility from which the products are being transferred.
   * _Example:_ 116
5. **destination-facility-id:**
   * _Description:_ ID of the facility to which the products are being transferred.
   * _Example:_ 281
6. **item-external-id:**
   * _Description:_ External identifier for the item being transferred. Typically, use a "line id" or "line item sequence" id from the originating system to aid traceability.
   * _Example:_ 1
7. **tracking-number:**
   * _Description:_ Tracking number associated with the shipment.
   * _Example:_ 788944217767 | 788944218650
8. **shipment-attribute:**
   * _Description:_ Additional attributes or information related to the shipment. Use the "EXTERNAL\_ORDER\_ID:" attribute to display the originating system's order name in the receiving app.
   * _Example:_ EXTERNAL\_ORDER\_ID:TO0005374
9. **shipment-type:**
   * _Description:_ Type of the shipment (e.g., IN\_TRANSFER).
   * _Example:_ IN\_TRANSFER

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
