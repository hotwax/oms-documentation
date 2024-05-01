# Transfer order lifecycle

The Transfer Order Lifecycle BPM illustrates the internal movement of inventory facilitated by transfer orders, which are created for the transfer of inventory from warehouses to stores, between stores, or from stores back to warehouses.

Transfer orders are created in the ERP system, they serve various purposes, including:

- **Warehouse to Store:** When there is a need to replenish inventory at retail stores from the central warehouse or distribution center, transfer orders can be initiated to move the required items from the warehouse to the stores.
- **Between Stores:** In cases where one store has excess inventory that another store requires, transfer orders can be used to transfer inventory directly between stores, optimizing stock levels across the retail network.
- **Store to Warehouse:** Sometimes, stores might need to return excess or unsold inventory back to the warehouse for consolidation or redistribution. Transfer orders facilitate this movement from the stores back to the warehouse.

To explain the Transfer Order Lifecycle BPM, we've opted NetSuite as the ERP system, Shopify for eCommerce, and HotWax Commerce for the OMS because most of our customers use this tech stack.

## Warehouse to Store Transfer Orders

### 1. Transfer orders created in NetSuite

- Warehouse managers create transfer orders in NetSuite, specifying the source location as warehouse and the destination location as store. These transfer orders are automatically assigned a **“Pending Fulfillment”** status.

- Fulfillment teams start preparing the transfer order items for dispatch from the warehouse. Once they pick, pack and ship the transfer order items, item fulfillment records are automatically generated in NetSuite with the status **“Shipped”**.

- As soon as the item fulfillment records are marked as **“Shipped”**, inventory counts for the items shipped are reduced in NetSuite and the transfer order status is updated from **“Pending Fulfillment”** to **“Pending Receipt”**.

### 2. Create inbound shipments in HotWax Commerce and start receiving

- A scheduled script in NetSuite exports the feed of item fulfillment records in **“Shipped”** status. A scheduled job in HotWax Commerce reads this feed and creates inbound shipments at the destination facility.

- HotWax Commerce provides an `Inventory Receiving App` for store associates to easily receive any new inventory arriving at stores.

- Inbound shipments that have been created are automatically reflected in the `Inventory Receiving App`, allowing store associates to receive them in store.
  
  For example, if a transfer order specifies the Central Warehouse as the source and the Brooklyn Store as the destination, the items from this transfer order will be automatically reflected in the `Inventory Receiving App` at the Brooklyn Store.

- Store associates scan the transfer order items and start receiving inventory. Upon receiving shipments, item receipt records are generated in HotWax Commerce and subsequently, the inventory counts for the items received in the store are increased.

{% hint style="success" %}
It’s crucial to note that inventory counts for the items shipped from the warehouse are reduced in HotWax Commerce on performing daily inventory sync with NetSuite.
{% endhint %}

### 3. Generate and export item receipt feed from HotWax Commerce

- A scheduled job in HotWax Commerce generates an item receipt feed containing the latest transfer order items that have been received in the store so that this update can be synchronized to NetSuite.

### 4. Item receipt records created in NetSuite

- A scheduled SuiteScript in NetSuite reads the item receipt feed and two actions take place:
  - Item receipt records are created in NetSuite and subsequently, inventory count at the store for the corresponding items are increased.
  - The transfer order status is updated from **“Pending Receipt”** to **“Received”**. This step concludes the store to warehouse transfer orders flow.

## Store to Store Transfer Orders

### 1. Transfer orders created in NetSuite and imported into HotWax Commerce

- Similar to warehouse to store transfer orders, store to store transfer orders are also created in NetSuite, specifying the source location as store and the destination location also as a store. These transfer orders are automatically assigned a **“Pending Fulfillment”** status.

- A scheduled SuiteScript in NetSuite exports transfer orders that have a Pending Fulfillment status and the source location as the store. After that, a scheduled job in HotWax Commerce reads the transfer orders feed and downloads transfer orders in HotWax Commerce with a default **“Created”** status.

- These transfer orders are synchronized to HotWax Commerce so that they can be fulfilled from stores. HotWax Commerce provides a dedicated `Store Fulfillment App` for store associates to fulfill transfer order items from stores.

### 2. Approve transfer orders in HotWax Commerce

A scheduled job in HotWax Commerce identifies transfer orders that have a **“Created”** status and automatically marks them **“Approved”**.

**What happens when transfer orders are approved?**

- Approved transfer orders are automatically reflected in the `Store Fulfillment App`.

- Store associates pick the transfer order items they want to fulfill from their store. After picking the items, store associates pack them and proceed to create fulfillments for each item.

- Once the fulfillment has been created, store associates fetch shipping labels from the carrier and the corresponding tracking codes.

- After all items are shipped, transfer orders status is automatically updated from **“Approved”** to **“Completed”** in HotWax Commerce.

Once transfer order items are fulfilled from the store, the inventory count for the corresponding items is automatically reduced in HotWax Commerce.

### 3. Generate and export item fulfilled feed from HotWax Commerce

- A scheduled job in HotWax Commerce generates a fulfilled transfer order items feed containing the latest transfer order items that have been fulfilled from the store so that this update can be synchronized to NetSuite.

### 4. Item fulfillment records created in NetSuite

- A scheduled SuiteScript in NetSuite reads the fulfilled transfer order items feed and two actions take place:
  - Item fulfilled records are created in NetSuite and marked **“Shipped”**. Subsequently, inventory count at the store for the corresponding items are reduced.
  - The transfer order status is updated from **“Pending Fulfillment”** to **“Pending Receipt”**. This step concludes the store to warehouse transfer orders flow.

### 5. Create inbound shipments in HotWax Commerce and start receiving

- As discussed in `warehouse to store` transfer orders lifecycle, for store to store transfer orders, the receiving process in stores remains consistent. A scheduled SuiteScript in NetSuite exports the feed of item fulfillment records in **“Shipped”** status. After that, a scheduled job in HotWax Commerce reads this feed and creates inbound shipments at the destination facility.

- Inbound shipments that have been created are automatically reflected in the `Inventory Receiving App`, allowing store associates to receive them in store.

  For example, if a transfer order specifies the Times Square Store as the source and the Brooklyn Store as the destination, the items from this transfer order will be automatically reflected in the Inventory Receiving App at the Brooklyn Store.

- Store associates scan the transfer order items and start receiving inventory. Upon receiving shipments, item receipt records are generated in HotWax Commerce and subsequently, the inventory counts for the items received in the store are increased.

### 6. Generate and export item receipt feed from HotWax Commerce

- A scheduled job in HotWax Commerce generates an item receipt feed containing the latest transfer order items that have been received in the store so that this update can be synchronized to NetSuite.

### 7. Item receipt records created in NetSuite

- A scheduled SuiteScript in NetSuite reads the item receipt feed and two actions take place:
  - Item receipt records are created in NetSuite and subsequently, inventory count at the store for the corresponding items are increased.
  - The transfer order status is updated from **“Pending Receipt”** to **“Received”**. This step concludes the store to store transfer orders flow.

## Store to Warehouse Transfer Orders

### 1. Transfer orders created in NetSuite

- Even when stores want to transfer inventory to warehouses, the transfer order will be created in NetSuite, specifying the source location as a store and the destination location as a warehouse.

- Once created, these transfer orders are automatically assigned a **“Pending Fulfillment”** status.

{% hint style="info" %}
Similar to the `store to store` transfer order lifecycle we discussed above, (2) importing transfer orders into HotWax Commerce, approving them, fulfilling them using the `Store Fulfillment App` and (3) ultimately synchronizing item fulfillment records with NetSuite remains the same.
{% endhint %}

### 4. Receive transfer orders in NetSuite

- Finally, warehouse managers manually initiate the receiving process in NetSuite for the store transferred inventory upon its arrival at the warehouse.

- After the receiving process is completed, the transfer order status is automatically updated from **“Pending Receipt”** to **“Received”**, indicating that all transfer order items have been successfully received at the warehouse. Additionally, the inventory count for the newly received inventory is updated in NetSuite.
