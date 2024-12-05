---
description: >-
  The Inventory Lifecycle BPM illustrates how HotWax Commerce calculates the
  online ATP of a product to maintain accurate sellable inventory on eCommerce
  platforms
---

# Inventory Lifecycle

The inventory count of a product is regularly updated due to various factors such as customer purchases made both in-store and online, as well as the receipt of new inventory. These transactions are recorded across different systems. In the Inventory Lifecycle BPM, we've provided detailed insights into how these operational inventory transactions impact the sellable inventory count, that is, `Online ATP` of a product.

<figure><img src="../.gitbook/assets/Inventorybpm.png" alt=""><figcaption><p>Inventory lifecycle business process model</p></figcaption></figure>

Before delving into the specifics of Inventory Lifecycle BPM, it's crucial to understand HotWax Commerce's role in maintaining inventory levels and calculating inventory availability. <mark style="color:orange;">**HotWax Commerce serves as the master of inventory availability**</mark>. Now, what exactly does this mean, and how does HotWax Commerce compute it? Let's see:

In HotWax Commerce, you'll come across three inventory-related terms: **Quantity On Hand (QOH), Available To Promise (ATP), and Online ATP**

* <mark style="color:orange;">**QOH**</mark><mark style="color:orange;">:</mark> Represents the total physical quantity of a product available at stores or warehouses. HotWax Commerce receives daily inventory feeds from the ERP system and real-time inventory updates from the Point of Sale (POS) system to maintain up-to-date inventory data. Additionally, in cases where an ERP system isn't in use, HotWax Commerce also receives inventory feeds from Warehouse Management Systems (WMS) and POS systems.
* <mark style="color:orange;">**ATP**</mark><mark style="color:orange;">:</mark> Represents the physical quantity of a product at stores or warehouses after deducting the reserved inventory, that is, inventory that has been allocated to online orders from the QOH.
* <mark style="color:orange;">**Online ATP**</mark><mark style="color:orange;">:</mark> Represents the unified inventory pool of actual sellable inventory count that is published on eCommerce platforms and can be promised to customers.

### Calculating Online ATP

To calculate `Online ATP`, HotWax Commerce deducts inventory that is not available for sale from the ATP. This includes items such as safety stock, threshold quantities, orders in the brokering queue, and inventory from locations that are not participating in online selling.

* <mark style="color:orange;">**Safety stock**</mark><mark style="color:orange;">:</mark> Inventory set aside at each store specifically for walk-in customers.
* <mark style="color:orange;">**Threshold**</mark><mark style="color:orange;">:</mark> Inventory buffer established at a company level to prevent inventory discrepancies and overselling on eCommerce platforms.
* <mark style="color:orange;">**Orders in the brokering queue**</mark><mark style="color:orange;">:</mark> eCommerce orders awaiting inventory allocation.
* <mark style="color:orange;">**Non participating facilities' ATP**</mark><mark style="color:orange;">:</mark> Inventory at fulfillment locations that have online selling disabled in HotWax Commerce.

#### How it works:

HotWax Commerce integrates with ERP, POS, and WMS, to create a unified pool of inventory. After synchronizing inventory totals from all systems, HotWax Commerce calculates the `Online ATP` for eCommerce by subtracting any inventory set aside as safety stock, thresholds, orders in the brokering queue, and inventory at non participating facilities from the physical ATP. This makes HotWax Commerce the ultimate authority on inventory availability and prevents overcommitting on eCommerce platforms.

**Now, let’s understand the breakdown of inventory transactions involved throughout the inventory lifecycle and their recording across various systems:**

## Inventory Transactions in ERP/WMS

ERP systems often serve as the central hub for inventory management within a company. When retailers want to procure new inventory from vendors, they create purchase orders and in the event where they want to transfer inventory between their locations, they create transfer orders. Both purchase orders and transfer orders are created in the ERP systems like NetSuite.

### Inventory Receipts in Warehouses

When new purchase orders are received in warehouses, inventory receipts are directly recorded in the ERP system. A scheduled job in HotWax Commerce performs a daily synchronization of inventory data from the ERP.

In the event inventory for a product is reduced in warehouses for any reason, including incidents of damage, theft, and write-offs or increased due to receipts from returns, is also automatically included when HotWax Commerce performs the daily inventory reset from the ERP. This ensures that a product’s actual physical inventory is accurately reflected as QOH in HotWax Commerce.

When inventory is reset in HotWax Commerce, `Online ATP` is recomputed for all products to ensure inventory availability is being calculated on the latest stock levels.

Most of our customers opt for a daily inventory sync, meaning HotWax Commerce performs inventory sync from the ERP once every day. Retailers seeking more real-time inventory updates from their ERP system have the flexibility to adjust the sync frequency.

### Inventory Receipts in Stores

Stores often face challenges when using ERP systems like NetSuite for inventory management, as these systems can be complex for the store environment and lead to resistance from store associates. HotWax Commerce offers a user-friendly Store Inventory Management Suite that includes an `Inventory Receiving App`, which allows store associates to record inventory receipts, and a `Cycle Counting App`, which facilitates periodic cycle counting and logs any variances that may occur.

HotWax Commerce synchronizes purchase orders and transfer orders created in the ERP system so that store associates can receive inventory arriving at their stores.

#### Purchase Orders

Many retailers receive purchase orders at their warehouse locations and then make distribution plans for sending inventory to other stores through transfer orders. However, for those retailers who exclusively operate through store locations, purchase orders are received directly at the stores.

When new purchase orders are created in the ERP, a scheduled job in HotWax Commerce imports them and they are automatically reflected at the destination store location for inventory receiving.

<mark style="color:orange;">**Auto increase QOH & ATP:**</mark> When the inventory physically arrives at the store, store associates receive items using the Inventory Receiving App. As and when new items are received in the app, QOH and ATP for those products are automatically increased in HotWax Commerce.

When a product’s QOH and ATP is updated in HotWax Commerce, its `Online ATP` is recomputed to ensure sellable inventory for eCommerce is calculated on the latest stock levels.

Learn more about [purchase orders](https://docs.hotwax.co/documents/v/learn-netsuite/supported-integrations/purchase-orders)

#### Transfer Orders

When new transfer orders are created in the ERP, a scheduled job in HotWax Commerce reads them and automatically creates new inbound shipments at the destination store location for inventory receiving.

<mark style="color:orange;">**Auto increase QOH & ATP:**</mark> When the shipment physically arrives at the store, store associates receive items using the Inventory Receiving App. As and when new items are received in the app, QOH and ATP for those products are automatically increased in HotWax Commerce.

When a product’s QOH and ATP is updated in HotWax Commerce, its `Online ATP` is recomputed to ensure sellable inventory for eCommerce is calculated on the latest stock levels.

Transfer orders can be categorized into three types: store to store, warehouse to store, and store to warehouse. To explore each type, refer to the Transfer Order Lifecycle BPM. In the Inventory Lifecycle BPM, we have taken warehouse to store to explain the concept.

Learn more about [transfer orders](https://docs.hotwax.co/documents/v/learn-netsuite/supported-integrations/transfer-order)

## Inventory Variances in Stores

Maintaining accurate inventory levels in a retail environment is challenging, especially for omnichannel retailers. Discrepancies between physical stock and system records can arise from factors such as theft, damage, or human error during transactions. To address these inconsistencies, stores conduct periodic cycle counts. This helps reconcile actual inventory with system records, ensuring accuracy across all platforms.

HotWax Commerce offers a `Cycle Count App` designed to make the process simple and efficient for operations teams as well as store associates.

Operations teams can schedule cycle counts at specific stores, assigning them to the store associates for execution. Once assigned, store associates are notified and can begin the counting process using the app, scanning products and recording the quantities they find.

These periodic checks help clear inventory discrepancies in real time, so store records reflect accurate quantities.

After completing the cycle count, store associates submit their results, which are then reviewed by operations managers. Once the cycle counting results are approved, HotWax Commerce automatically adjusts the QOH and ATP.

It’s also crucial to account for these variances in the ERP and keep inventory up-to-date for stores. Before understanding how HotWax Commerce pushes inventory variances to the ERP, let's first see how inventory adjustments resulting from cycle counting are accounted for in HotWax Commerce:

<mark style="color:orange;">**Auto increase QOH & ATP:**</mark> When results show that the physical count exceeds the systemic inventory, the QOH and ATP are increased.

<mark style="color:orange;">**Auto decrease QOH & ATP:**</mark> When results show that the actual physical count is less than what the system shows, the QOH and ATP are reduced accordingly.

When inventory adjustments resulting from cycle counting are recorded in HotWax Commerce, the online ATP for the product is recalculated. This ensures that the sellable inventory available for eCommerce is accurately calculated based on the latest stock levels.

## Push Inventory Variances to ERP

Inventory variances are also pushed to the ERP system. Let’s see how:

HotWax Commerce generates an inventory variance feed and synchronizes it with the ERP platform. Once this feed is consumed by the ERP, inventory levels are automatically updated.

For example, in case of NetSuite as the ERP, HotWax Commerce generates the inventory variance feed, after that HotWax Commerce integration platform transforms this feed and synchronizes it to NetSuite. Once NetSuite’s script consumes this feed, inventory levels of the affected products are automatically updated.

Learn more about [inventory variance synchronization](https://docs.hotwax.co/documents/v/learn-netsuite/supported-integrations/cycle-count)

Similarly, in the event where inventory is managed in another third party system, HotWax Commerce inventory variance feed can be used to update inventory in other ERP or WMS.

## Inventory Transactions in POS

When new sales happen in physical retail locations, they are directly recorded in the POS system, which also tracks inventory reductions resulting from these transactions.

<mark style="color:orange;">**Auto decrease QOH & ATP:**</mark> A scheduled job in HotWax Commerce synchronizes in-store sales recorded in the POS system and automatically reduces QOH and ATP for products in HotWax Commerce.

When a product’s QOH and ATP is updated in HotWax Commerce, its `Online ATP` is recomputed to ensure sellable inventory for eCommerce is calculated on the latest stock levels.

## Inventory Transactions in eCommerce

Online orders are captured on the eCommerce platform, a scheduled job in HotWax Commerce downloads these orders so that inventory can be allocated for them.

### Inventory Allocated to Online Orders

**How does HotWax Commerce reduce inventory promised to online sales?**

Online orders are sent to the brokering queue for inventory allocation. As orders are waiting in the brokering queue, HotWax Commerce deducts promised inventory from the `Online ATP`. The reason being, even if the fulfillment location is not yet decided, the captured order has been promised inventory and so it’s crucial to reduce the sellable inventory, that is, `Online ATP` to prevent overselling on eCommerce platforms.

<mark style="color:orange;">**Auto decrease ATP:**</mark> After the order is allocated to the most suitable store or warehouse, HotWax Commerce automatically reduces ATP at the chosen fulfillment location.

Once the online orders are fulfilled, HotWax Commerce also automatically reduces the QOH of products. HotWax Commerce already has fulfillment updates for the orders fulfilled using the `Fulfillment App`. While, for orders fulfilled from warehouses, HotWax Commerce receives fulfillment updates from WMS or ERP and subsequently reduces the QOH for those products.

This step ensures that the count for physical available inventory is accurately reflected at that specific location.

In the event where a store cannot fulfill an online order allocated to them, HotWax Commerce checks the rejection reasons for the rejected orders and automatically updates ATP and Online ATP.

Learn more about [rejection handling and its impact on inventory](https://docs.hotwax.co/documents/store-operations/orders/fulfillment/rejection).

When rejections happen in a warehouse, inventory is automatically updated during the daily reset.

## Push Online ATP to eCommerce

All the inventory transactions happening across various systems and scenarios discussed above primarily explains how HotWax Commerce, being the master of inventory availability, consistently recalculates and updates the `Online ATP`.

Other factors that impact the `Online ATP` calculation in HotWax Commerce include <mark style="color:orange;">**updating safety stock, adjusting product thresholds, and reconfiguring fulfillment locations participating in online selling**</mark>.

For example, let's consider a scenario where the initial ATP for a product is 100. The safety stock for a product is set at 5 for four locations, the global threshold is 10, and one of the fulfillment locations, the Brooklyn store, is not participating in online selling and has an inventory count of 50 for that product.

In this scenario, the `Online ATP` would be calculated as follows:

100 - (5 \* 4) - 10 - 50 = <mark style="color:orange;">**20**</mark>

Now, if the safety stock is updated to 2 for four locations, the global threshold to 5, and the Brooklyn store with 50 inventory is made available for online selling, then HotWax Commerce will recalculate online ATP and the updated online ATP would be:

100 - (2 \* 4) - 5 = <mark style="color:orange;">**87**</mark>

Whenever there's a change in a product's inventory, HotWax Commerce recalculates the online ATP in real-time. Now, let's see how this calculated online ATP is pushed to eCommerce platforms.

HotWax Commerce has a ready integration with Shopify eCommerce, here’s how sellable inventory is pushed to Shopify:

A scheduled job in HotWax Commerce checks the inventory records of HotWax Commerce's products and identifies products that have undergone inventory changes since the last inventory synchronization to Shopify.

HotWax Commerce then retrieves information from Shopify about products that have undergone changes in HotWax Commerce. The inventory counts for these products in Shopify are then compared with the inventory counts that HotWax Commerce. After comparing inventory changes, a scheduled job in HotWax Commerce records the difference and generates an inventory feed for the affected products. This feed is then pushed to Shopify, which reads it and updates to either add or deduct inventory based on the changes.

Learn more about [Inventory Synchronization](https://docs.hotwax.co/documents/v/learn-shopify/shopify-integration/how-does-hotwax-commerce-ensure-accurate-inventory-is-synchronized-to-shopify/inventory-synchronization)

Similarly, in the event where a retailer has another eCommerce platform, HotWax Commerce can generate a sellable inventory feed with additional development efforts. HotWax Commerce will then calculate sellable inventory, retrieve the products inventory counts from that eCommerce platform, and synchronize the latest inventory difference.
