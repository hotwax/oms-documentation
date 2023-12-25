---
description: Steps involved in feed generation -
---

# Feed Generation

1. As per the below scenarios, the service will generate the Transfer Order Receipts Feed
2. If the shipment has multiple items and all are received before the next feed generation, the feed file will contain the shipment and all its item shipment receipt details.
3. If a Shipment has 3 items and only 1 is received before the next feed generation, the feed file will still contain the order and all its items, but the 1 item received will have its shipment receipt details, and the other 2 items will contain empty shipment details.
4. The history records will be created in the ShipmentItemHistory entity for the Shipment Receipts are already included in the feed.
   1. **NOTE:** If a Shipment Item has multiple receipts, the feed will create records for all receipts but in the feed will include totalReceivedQuantity in shipmentItems list the individual receipt details will also be included in shipmentReceipts inside shipmentItems list.
5. Eg.
   1. If a Shipment with 4 items, we receive 2 items today then we will include all 4 items with the first 2 items having their receipt details and the last two items with empty receipt details.
   2. Now, we receive only the 3rd item by the next day, we will then include the 3rd item with the receipt details and the 4th item with empty receipt details. Here we will not include the first two items again as we have already sent in the earlier feed.
   3. If we receive the 4th Item now, we will include only 4th item with its received details.
6. **View used**
   1. ShipmentAndItemAndReceipt
7. In the service, the first entity-find has been done on the **ShipmentAndItemAndReceipt** view to fetch the eligible **Shipment** using the below conditions that have been used in the service
   1. shipmentId: if the shipment ID has passed in the service, then from the view, shipment receipts will be fetched only for that shipment ID
   2. shipmentTypeId: if the shipment type ID has passed in the service, then the shipment receipts will be fetched from the view as per that shipment type ID.
   3. shipmentStatusId: if the shipment status ID has passed in the service, then the shipment receipts will be fetched from the view as per that shipment status ID.
   4. sinceReceivedDate: if the sinceReceivedDate has passed in the service, then the eligible shipment receipts will be fetched from the view after the sinceReceivedDate.
      1. **NOTE:** sinceReceivedDate corresponds to the field datetimeReceived of the ShipmentReceipt entity.
   5. productStoreIds: The service will generate the feed as per the below scenario
      1. If only one value has passed in the parameter productStoreIds, then the feed will be generated as per that product Store ID, which means the generated feed will be for a specific brand.
      2. If nothing has passed in the parameter productStoreIds or if there will be more than one value in the list, then the default prefix 'HOTWAX' will be set from the property added in the MoquiConf file.
   6. **NOTE:** This entity-find will fetch details of shipment level for eligible Shipment Receipt Feed since the select-field includes only the shipment level fields.
8. The second entity find has been done on the **ShipmentAndItemAndReceipt** view to fetch the eligible **shipment items** using the below conditions that have been used in the service.
   1. shipmentId: to fetch the details of that order ID that is existing in the list of first entity-find.
   2. **NOTE:** This entity-find will fetch the details of shipment items since the select-field includes only the shipment item-level fields.
9. Third-time entity find has been done on the **ShipmentAndItemAndReceipt** view to fetch the eligible **Shipment Receipts** using the below conditions that have been used in the service. Since the select-field includes the receipt level fields.
   1. **NOTE:**
      1. The conditions on shipmentId and shipmentItemsSeqId are included here to fetch the shipment item receipt for only those shipment IDs and shipment Item Seq IDs
      2. Here, for each shipment item, will fetch the valid Shipment Receipts so that the correct quantity i.e. sum(qtyAccepted) can be evaluated in the next entity-find using these receipt IDs.
      3. **NOTE:** It is important to fetch the valid Shipment Receipts so that the quantity already sent as part of earlier feeds should not be sent again.
10. Fourth-time entity-find has been done on the **ShipmentAndItemAndReceipt** view to fetch the total quantity, i.e., sum (qtyAccepted), of the eligible shipment receipts.
