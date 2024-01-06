# Import Shipment

#### File Structure:

1. **external-shipment-id:**
   - *Description:* Unique identifier for the external shipment. Use the internal ID from the originating system to ensure recognition during data synchronization.
   - *Example:* 12009298

2. **product-sku:**
   - *Description:* Product SKU refers to the internal name of the product, set by the primary product identifier in the OMS.
   - *Example:* 26897

3. **quantity:**
   - *Description:* The quantity of the product being transferred.
   - *Example:* 11

4. **origin-facility-id:**
   - *Description:* ID of the facility from which the products are being transferred.
   - *Example:* 116

5. **destination-facility-id:**
   - *Description:* ID of the facility to which the products are being transferred.
   - *Example:* 281

6. **item-external-id:**
   - *Description:* External identifier for the item being transferred. Typically, use a "line id" or "line item sequence" id from the originating system to aid traceability.
   - *Example:* 1

7. **tracking-number:**
   - *Description:* Tracking number associated with the shipment.
   - *Example:* 788944217767 | 788944218650

8. **shipment-attribute:**
   - *Description:* Additional attributes or information related to the shipment. Use the "EXTERNAL_ORDER_ID:" attribute to display the originating system's order name in the receiving app.
   - *Example:* EXTERNAL_ORDER_ID:TO0005374

9. **shipment-type:**
   - *Description:* Type of the shipment (e.g., IN_TRANSFER).
   - *Example:* IN_TRANSFER

### Shipment Types

| Shipment Type               | Parent Type            | Description                     |
|-----------------------------|------------------------|---------------------------------|
| DROP_SHIPMENT               |                        | Drop Shipment                   |
| TRANSFER                    |                        | Transfer                        |
| INCOMING_SHIPMENT           |                        | Inbound Shipment                |
| OUTGOING_SHIPMENT           |                        | Outbound Shipment               |
| PURCHASE_SHIPMENT           | INCOMING_SHIPMENT      | Purchase Shipment               |
| SALES_RETURN                | INCOMING_SHIPMENT      | Sales Return Shipment           |
| IN_TRANSFER                 | INCOMING_SHIPMENT      | Inbound Transfer Shipment       |
| SALES_SHIPMENT              | OUTGOING_SHIPMENT      | Sales Shipment                  |
| OUT_TRANSFER                | OUTGOING_SHIPMENT      | Outbound Transfer Shipment      |
| PURCHASE_RETURN             | OUTGOING_SHIPMENT      | Purchase Return Shipment        |