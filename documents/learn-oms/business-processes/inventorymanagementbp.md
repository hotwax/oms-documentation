---
description: >-
  Inventory management business process helps omnichannel retailers accurately
  track inventory changes and ensure that product availability aligns with
  customer demand across all sales channels.
---

# Inventory Management

## Key Business Processes

The inventory management business process involves transferring inventory between locations, receiving new stock, performing regular cycle counts, and addressing unexpected inventory variances.

* **Inventory transfers:** Retailers move inventory between locations using transfer orders. This process helps balance stock levels across different stores and warehouses, optimizing product availability where it is needed most.
* **Receiving new inventory:** Retailers receive new inventory at their locations with respect to purchase orders and transfer orders. This step is vital for maintaining stock levels and ensuring that products are available for both in-store and online sales.
* **Cycle counting:** Periodic cycle counting at stores involves regularly performing inventory counting of products to ensure accuracy in stock records. This practice helps identify and correct discrepancies in inventory levels.
* **Handling inventory variances:** On a day-to-day basis, retailers encounter inventory variances due to factors such as theft, damage, or administrative errors. Identifying and resolving these variances is crucial for maintaining accurate inventory records.

Accurate inventory management is essential for preventing overselling and underselling on eCommerce platforms, when store inventory is also used for online orders. Keeping up-to-date record of inventory changes ensures that the inventory available for online sale matches the actual stock in stores.

## How Inventory Receiving Works

Both transfer orders and purchase orders are created in ERP systems, like NetSuite. Whenever any new transfer orders or purchase orders are created, they are imported into HotWax Commerce and automatically reflected in the Receiving App for in-store receiving.

### Receiving Transfer Orders in Stores

When there is a need to replenish inventory at retail stores, merchandising teams request transfers and warehouse managers create a warehouse-to-store transfer order in their ERP system. As items in the transfer orders are fulfilled from the warehouse, HotWax Commerce imports them and automatically creates inbound shipments for the corresponding items.

When the store associates verify the inbound shipments and receive them, inventory counts for the corresponding items are automatically increased in HotWax Commerce.

<figure><img src="../.gitbook/assets/TransferOrder.png" alt=""><figcaption><p>Transfer order sync</p></figcaption></figure>

#### Creating Shipments in ERP

Many ERP systems, including NetSuite, let you create multiple outbound shipments for a transfer order, and each shipment can have multiple packages. In NetSuite, an outbound shipment is called item fulfillment.

#### Receiving Inbound Shipments in HotWax Commerce

Inbound shipments are created in HotWax Commerce with respect to each outbound shipment in the ERP or WMS. Inbound shipments in HotWax Commerce must be received in one go; partial receipt of shipments is not possible. This means that when an inbound shipment comprises multiple packages, all packages must be received together.

If a package is missing or delayed, associates cannot skip that package and receive another. The entire inbound shipment must still be received in one go.

Many retailers want to track each package and receive them independently.

One way to track this in HotWax Commerce is by creating multiple inbound shipments with respect to each package in the outbound shipment of the ERP/WMS. However, NetSuite does not track which items are in which package for each item fulfillment, meaning it is not possible to identify which package contains which items. Therefore, it is not possible to create inbound shipments with respect to packages in outbound shipments in the case of NetSuite.

If an ERP/WMS other than NetSuite tracks which items are in which package, those details can be used to create an inbound shipment for each package in HotWax Commerce. This way, each package can be tracked and received independently.

In the case of NetSuite ERP, we recommend creating one package for each shipment/item fulfillment. In the event where retailers need to ship three packages, they should create three shipments/item fulfillments, with each shipment having one package. This way, retailers can track and receive each package independently. If tracking individual packages is not a priority for retailers, multiple packages can be received as one shipment in HotWax Commerce.

Learn more about [transfer orders](https://docs.hotwax.co/documents/v/learn-hotwax-oms/business-process-models/transferorderlifecycle)

<figure><img src="../.gitbook/assets/ReceivingTransferOrder.png" alt=""><figcaption><p>Receiving inbound shipments using HotWax Receiving App</p></figcaption></figure>

#### Handle Receiving of Unexpected Items in a Shipment

Often, mispicks or unexpected variations occur. When store associates identify items that were not expected to arrive, they can easily add the specific SKU to the shipment directly from the app. This ensures accurate record-keeping and helps maintain correct inventory levels. For example, if a shipment is supposed to contain 50 units of SKU101 but the shipment arrives with an additional 10 units of the SKU77, this extra SKU with items can be recorded in the app to update the inventory accurately.

#### Handle Over-Receiving and Under-Receiving

There can be scenarios where the items in a shipment are more or fewer than expected. In such cases, HotWax Commerce lets store associates adjust the quantities accordingly:

**Over-receiving:** If a shipment contains more items than ordered, store associates can receive the extra items, ensuring that inventory records reflect the actual stock on hand. For example, if a shipment was expected to contain 100 units but arrives with 110 units, the extra 10 units can be received and recorded.

**Under-receiving:** If a shipment contains fewer items than ordered, the app allows the receiving of only the items that arrived. For example, if a shipment was expected to contain 100 units but arrives with only 90 units, the app will record the received 90 units, and the missing 10 units can be addressed separately.

Learn more about additional scenarios supported in the [Receiving App](https://docs.hotwax.co/documents/v/store-operations/inventory/receiving)

### Receiving Purchase Orders in Stores

In most scenarios, purchase orders are received at the warehouse location, and stock is transferred to stores using transfer orders. However, in cases where stores independently raise purchase orders without a warehouse intermediary, HotWax Commerce supports direct receiving at the store level.

<figure><img src="../.gitbook/assets/PurchaseOrder.png" alt=""><figcaption><p>Purchase order sync</p></figcaption></figure>

**Receiving in Parts:** Purchase orders can be received in multiple parts or batches, allowing for flexibility in inventory receiving. For example, a purchase order for 200 units might arrive in two batches of 100 units each. Store associates can receive each batch as it arrives.

**Inbound Shipments:** Once a purchase order has been received, an inbound shipment is created in HotWax Commerce, and inventory counts for the received items are automatically updated.

<figure><img src="../.gitbook/assets/ReceivingPurchaseOrder.png" alt=""><figcaption><p>Receiving purchase orders using HotWax Receiving App</p></figcaption></figure>

All other features, such as receiving extra items or handling discrepancies, are also offered during the purchase order receiving process, just as they are with inbound shipments. The primary difference is that when you are receiving a purchase order instead of a shipment, you can receive it in parts, unlike shipments which must be received in one go.

### Cycle Counting

Retailers that aim for 98% to 99% inventory accuracy, regularly perform cycle counts at their locations to maintain up to date inventory records. Cycle counting is a critical inventory management business process for these retailers and should be performed weekly or monthly, depending on the specific needs of the store.

<figure><img src="../.gitbook/assets/CycleCounting.png" alt=""><figcaption><p>Cycle count sync</p></figcaption></figure>

#### Performing Cycle Counts

Cycle counts are ideally conducted either before the store opens or after closing hours when inventory movement is minimal.

Operation teams schedule cycle counts at stores. Store associates scan and count the physical inventory of a product present in the store and upload the count in HotWax Commerce Cycle Count App. Upon uploading the counts, the operation teams review them. They may request recounts if any discrepancies are suspected or approve the counts if they're deemed accurate.

Upon approval, inventory adjustments are made in HotWax Commerce, reflecting the updated stock levels. This ensures that inventory records remain accurate and aligned with the actual stock on hand.

The app includes a feature that displays systemic inventory, enabling store associates to compare counted inventory with systemic inventory as a reference. While this feature serves as a useful reference point, it can be easily disabled to ensure unbiased and accurate counting.

<figure><img src="../.gitbook/assets/InventoryCycleCount.png" alt=""><figcaption><p>Performing cycle count using HotWax Commerce Cycle Count App</p></figcaption></figure>

{% hint style="info" %}
Cycle counts should be performed after receiving the inventory reset from the ERP to ensure alignment with the most current inventory data.
{% endhint %}

**Examples of inventory adjustments:**

**Increase in inventory:** If a store counts 120 units of an item but the systemic inventory shows 100 units, the discrepancy is recorded, and the inventory is adjusted to reflect the 120 units.

**Decrease in inventory:** Conversely, if a store counts 80 units of an item but the systemic inventory shows 100 units, the inventory is adjusted to reflect the 80 units, ensuring accuracy.

Learn more about [Cycle Count](https://docs.hotwax.co/documents/v/store-operations/inventory/directed-cycle-count)

By following these practices and using HotWax Commerce's intuitive apps, retailers can maintain high levels of inventory accuracy and streamline their inventory management processes.
