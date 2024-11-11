# Orders Synchronization

Synchronizing orders, including In-store orders and Endless aisle orders, from **PredictSpring** to **HotWax Commerce** is a crucial element in maintaining efficient and seamless retail operations. The synchronization of Endless aisle orders is particularly significant, given that these orders are intelligently routed to optimal fulfillment locations through **HotWax Commerce's brokering engine**.

In addition to Endless aisle orders, the synchronization of In-store orders plays a pivotal role for various reasons. Retailers often view **HotWax Commerce** as a primary data source for analytics engines, driving the preference to synchronize In-store orders. Furthermore, some retailers conduct daily sales audits, comparing online and in-store order totals between ERP and OMS. This auditing process reinforces the need to synchronize In-store orders in **HotWax Commerce**. It's essential to note that the option to sync in-store sales to **HotWax Commerce** is flexible and can be configured based on individual retailers' preferences.

## Three-Step Process to Synchronize Orders from PredictSpring to HotWax Commerce:

### 1. Exporting Orders from PredictSpring to SFTP Location:

The initial step, discussed previously in the Inventory section, involves exporting order data to a designated SFTP location. Transaction Log (TLog) files, formatted in JSON, capture In-store orders and Endless aisle orders. These TLog files are then placed in the specified SFTP location.

### 2. Transforming TLog Files into Order Feed Accepted by HotWax Commerce:

The **HotWax Commerce Integration platform** takes charge in the second step, reading the TLog files of orders from a dedicated folder within the SFTP location. The integration platform transforms these files into Order Feed files, presenting the data in CSV format. Subsequently, these transformed files are put in another folder within the SFTP location.

### 3. Importing Orders in HotWax Commerce:

The final step involves a job within **HotWax Commerce** that reads the Order Feed files in CSV format from the desired folder of the SFTP location. This job imports the orders into **HotWax Commerce**, ensuring that both In-store and Endless Aisle orders from **PredictSpring** are seamlessly synchronized into the **HotWax Commerce Order Management System**.

In the case of Endless aisle orders, when orders are fulfilled, **HotWax Commerce** sends an email to the store updating about the shipment of an order with tracking information.
