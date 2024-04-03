---
description: >-
  Explore the intricacies of integrating delivery date and time details from
  Shopify to the WMS feed file through note attributes.
---

# Note Attributes

## Integration Details: Mapping Delivery Date and Time Fields

### Overview:

The integration involves mapping delivery date and time information from Shopify to specific fields in the WMS feed file.

### Source System: Shopify

* **Delivery Date and Time Storage:**
  * Shopify stores delivery date and time information in the cart attributes field.
  * These attributes are later applied to the order note attributes field when the order is placed.

```json
"note_attributes": [
  {
    "name": "代引き手数料",
    "value": "770円"
  },
  {
    "name": "配送日",
    "value": "2023/10/01"
  },
  {
    "name": "配送時間帯",
    "value": "18:00-20:00"
  }
],
```

### Intermediate Step: Order Attribute Mapping in Shopify

* **Mapping Process:**
  * Order note attributes in Shopify need to be mapped to order attributes in the OMS (Order Management System).

### Sync data to WMS

* **Data Transformation:**
  * During the integration to WMS from OMS process, NiFi maps the relevant order attributes to fields in the WMS feed file.
* **Fields Receiving Delivery Date and Time:**
  1. **Field in WMS Feed:** S-7 (Promised Delivery Date)
  2. **Field in WMS Feed:** S-9 (Promised Delivery Time Zone)

### Mapping Logic:

* **S-7 (Promised Delivery Date):**
  * **Source Data:** Delivery date stored in cart attributes.
  * **Mapping Logic:** Map to the delivery date order attribute.
* **S-9 (Promised Delivery Time Zone):**
  * **Source Data:** Delivery time zone information stored in cart attributes.
  * **Mapping Logic:** Map to the relevant delivery span to the corresponding code in the WMS feed.
