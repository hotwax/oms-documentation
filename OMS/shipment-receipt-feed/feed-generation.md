---
description: Steps involved in feed generation -
---

# Feed Generation

{% tabs %}
{% tab title="Working" %}
As per the below scenarios, the service will generate the Shipment Receipts Feed -

### **All Items Received:**

If a shipment has multiple items, and all are received before the next feed generation, the feed file will include the shipment and all its item shipment receipt details.

### **Partial Item Receipt:**

If a shipment has 3 items, for example, and only 1 is received before the next feed generation, the feed file will still contain the order and all its items. The 1 received item will have its shipment receipt details, while the other 2 items will contain empty shipment details.

### **History Records:**

History records are created in the ShipmentItemHistory entity for shipment receipts, and these records are already included in the feed.

### **Multiple Receipts for an Item:**

If a shipment item has multiple receipts, the feed will create records for all receipts. In the feed, the `totalReceivedQuantity` in the `shipmentItems` list will reflect the overall quantity, while individual receipt details will be included in `shipmentReceipts` inside the `shipmentItems` list.
{% endtab %}

{% tab title="Implementation" %}
**View Utilized:** ShipmentAndItemAndReceipt\


In the service, the ShipmentAndItemAndReceipt view plays a central role in gathering necessary data. Let's break down the entity-finds within the service in a beginner-friendly format:

### **Eligible Shipment Retrieval:**&#x20;

The first entity-find fetches shipments based on specific conditions: shipmentId**:** If provided, it fetches shipment receipts for that specific shipment ID. shipmentTypeId**:** If the shipment type ID is given, it fetches corresponding shipment receipts. shipmentStatusId**:** If the shipment status ID is provided, it fetches shipment receipts based on that status. sinceReceivedDate**:** If a date is given, it retrieves eligible shipment receipts after that date.&#x20;

_Note: The `sinceReceivedDate` corresponds to the `datetimeReceived` field in the ShipmentReceipt entity._

productStoreIds**:** The feed is generated based on the following: If only one value is provided in `productStoreIds`, the feed is for that specific product store ID, representing a particular brand. If `productStoreIds` is not provided or if there are multiple values, the default prefix 'HOTWAX' is set using the MoquiConf file.

_Note: This entity-find fetches shipment-level details for eligible Shipment Receipt Feed since it includes only shipment-level fields._

### **Fetching Eligible Shipment Items:**&#x20;

The second entity-find retrieves eligible shipment items based on the condition: shipmentId**:** It fetches details for the order ID existing in the list obtained from the first entity-find.

_Note: This entity-find fetches shipment item-level details since it includes only shipment item-level fields._

### **Fetching Eligible Shipment Receipts:**&#x20;

The third entity-find fetches eligible shipment receipts with conditions: **shipmentId** and **shipmentItemsSeqId:** Included to fetch shipment item receipts for specific shipment IDs and shipment Item Seq IDs.

_Note: For each shipment item, valid Shipment Receipts are fetched. This ensures accurate quantity evaluation (sum of `qtyAccepted`) in the next entity-find using these receipt IDs. It's crucial to fetch valid Shipment Receipts to prevent resending quantities already included in earlier feeds._

### **Total Quantity Calculation:**&#x20;

The fourth entity-find calculates the total quantity (`sum(qtyAccepted)`) of eligible shipment receipts. This aggregation ensures an accurate representation of the cumulative accepted quantity in the feed.

This structured breakdown helps beginners understand the step-by-step process of how the service leverages the view to gather essential information.
{% endtab %}
{% endtabs %}
