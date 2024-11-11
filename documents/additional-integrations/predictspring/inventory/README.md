# Inventory

# In-store Sales

Inventory synchronization between **PredictSpring** and **HotWax Commerce** is a critical aspect of the integration, ensuring real-time updates and accuracy in stock levels. In this section, we will explore the process of recording inventory variances in **HotWax Commerce** when in-store sales are recorded in **PredictSpring**. It's a three-step process:

## 1. Exporting Order Data to SFTP Location

### Introduction:

The initial phase of the in-store sales inventory synchronization process involves exporting order data from **PredictSpring** and putting it into a designated SFTP location. **PredictSpring** facilitates this through a Transaction Log, or TLog, which comprehensively captures various store transactions, including in-store orders, endless aisle orders, returns, and exchanges.

**PredictSpring** provides three methods for exporting data: Real-Time export, Batch export, and Webhook integration. For this integration, we have opted for the Webhook approach.

### Configuring Real-Time Order Export Endpoint:

To initiate the export process, configure the Real-Time Order Export Endpoint within **PredictSpring**. **HotWax Commerce Integration Platform** provides an SFTP location, set up in **PredictSpring** as an endpoint.

Navigate to `CMS > Store Management > Advanced > Store Settings`. 

In this configuration, endpoints of SFTP locations are set to ensure a seamless real-time export process. Establish the endpoint (`OrderPostProcessingConfigJSON`) to enable **PredictSpring** to transmit order data to the designated external location via HTTP POST.

### Exporting Order Data:

**PredictSpring** sends a `CustomerOrder` object as JSON to an SFTP endpoint of **HotWax Commerce Integration Platform** via HTTP POST. This event occurs at the end of order processing synchronously in **PredictSpring**. This orchestrated export process ensures that for each in-store sale, a TLog file is generated and placed in the specified SFTP location. This file, containing details of multiple order line items, sets the stage for the subsequent steps in the synchronization journey.

## 2. Creating Inventory Variance File

Once the order data is exported and stored in the designated SFTP location, **HotWax Commerce's Integration Platform** takes charge. A job within this platform carefully reads the TLog files, analyzing each order and its line items. Based on the analysis, an inventory variance file is prepared for “Completed” orders, encapsulating changes in stock levels due to in-store sales in **PredictSpring**. The inventory variance file is then smoothly transitioned to another folder, signaling the conclusion of the second step. 

TLog files can also have Endless Aisle Orders aka Send Sale orders. These orders are not “Completed” and so their status is “Created”. These orders are taken by store associates for products that are out of stock in the store. The idea is to get this order shipped to the customer from another store or warehouse. We will see how these orders are synced in **HotWax Commerce** in another section.

## 3. Importing Inventory Variances in HotWax Commerce

A scheduled job in **HotWax Commerce OMS** reads the inventory variance file from the desired folder of SFTP location. The job processes the file, recording inventory variances within **HotWax Commerce** based on the inventory variance file. This ensures that the inventory records are not only updated but are also reflective of the real-time changes triggered by in-store sales recorded in **PredictSpring**.

The seamless flow between these three steps guarantees a synchronized and accurate inventory, laying the foundation for a reliable master of inventory availability within **HotWax Commerce**. **HotWax Commerce** also updates inventory periodically in eCommerce platforms to avoid overselling situations.

# Fulfillment of Online Orders from Store

Fulfilling online orders from the store is a crucial aspect of the omnichannel retail experience, and **HotWax Commerce's store fulfillment app** plays a pivotal role in this process. To ensure accurate and real-time inventory representation in **PredictSpring**, adjustments need to be made in **PredictSpring**.

Updating inventory in **PredictSpring** is also important to avoiding overpromising situations. Store associates often rely on **PredictSpring** to check the inventory of other stores, especially when handling endless aisle orders. If the inventory is not promptly updated in **PredictSpring**, there is a risk of capturing endless aisle orders for items that cannot be fulfilled. This, in turn, can lead to customer dissatisfaction and operational challenges.

The fulfillment of items from the store triggers a three-step process for adjusting inventory in **PredictSpring**:

## 1. Export Store Fulfilled Item Feed from HotWax Commerce

In the first step, a dedicated job within **HotWax Commerce Integration Platform** orchestrates the creation of a “Store Fulfilled Items” feed file in CSV format based on all the items fulfilled from stores. This job, scheduled to run at specified frequencies, reviews all orders fulfilled from the store since its last execution.

## 2. Transform the Store Fulfilled Feed into Store Inventory Feed for PredictSpring

**HotWax Commerce Integration Platform** then transforms the “Store Fulfilled Items” feed into three different feed files. One is for ERP, another is for eCommerce, and the last one is for POS. In this case, “Store Inventory Delta” feed file is created in CSV format for **PredictSpring** and put in a pre-defined folder of SFTP location. Columns in this feed file are Store ID, product ID, and Quantity. The value of Quantity is always negative representing the number of items fulfilled. This file is formatted to meet **PredictSpring's** expectations for the “Store Inventory” feed file.

## 3. Import Inventory Delta in PredictSpring

**PredictSpring** facilitates the import of multiple feed files for updating product details, including inventory. In our scenario, we identified two specific feeds that play a crucial role in importing inventory deltas: the “Product Inventory Delta Feed” and the “Store Inventory and Pricing Feed”. To update inventory in the stores, we leverage the “Store Inventory and Pricing Feed”.

“Store Inventory and Pricing Feed” is an incremental feed where changes to inventory are published to **PredictSpring**. It can be run in 2 modes: Absolute quantity or increment/decrement. In Absolute quantity mode, **PredictSpring** will overwrite existing inventory numbers. In the case of increment/decrement, the inventory positions will get updated accordingly. We use increment/decrement mode.

Note from **PredictSpring**:

When running a Store Inventory Delta file, price and inventory are independent of each other. This means that when the price is sent in the file, the inventory is not updated. Conversely, when the inventory is sent in the file, then the price is not updated.

Scheduling the reading of this feed file in **PredictSpring** ensures that inventory updates are consistently recorded. We schedule the "Store Inventory and Pricing Feed" at desired frequencies, allowing **PredictSpring** to recognize and incorporate the inventory changes. During the scheduling process in **PredictSpring**, the user can specify the SFTP location, username, password, and frequency in hours and minutes.

This three-step process ensures that online order fulfillments from the store reflect inventory updates accurately in **PredictSpring**, creating a harmonious and synchronized omnichannel retail experience.