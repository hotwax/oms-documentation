# Orders synchronization

The PredictSpring and HotWax Commerce integration is primarily used to synchronize two types of orders, in-store orders and Endless Aisle (Send-Sale) orders. The primary focus is on endless aisle orders, since those need to be fulfilled using the **HotWax Commerce Brokering Engine**. 

Retailers often view **HotWax Commerce** as a primary data source for analytics engines, driving the preference to synchronize in-store orders. Furthermore, many retailers conduct daily sales audits, comparing online and in-store order totals between their ERP and OMS systems. This auditing process reinforces the need to synchronize in-store orders in **HotWax Commerce**. The option to sync in-store sales to HotWax Commerce is flexible and can be configured based on individual retailers' preferences. 


## The process to synchronize orders from PredictSpring to HotWax Commerce:

### 1. Exporting orders from PredictSpring to SFTP location:

The initial step, discussed previously in the Inventory section, involves exporting order data to a designated SFTP location. Transaction Log (TLog) files, formatted in JSON, capture In-store orders and Endless aisle orders. These TLog files are then placed in the specified SFTP location.

At the end of order processing in **PredictSpring**, a `CustomerOrder` object is sent as a JSON via HTTP Post to an SFTP endpoint of the **HotWax Commerce Integration Platform**. This synchronous event ensures that for each in-store sale, a TLog file is generated and placed in the specified SFTP location, facilitating seamless data integration.

### 2. Importing orders in HotWax Commerce:

**HotWax Commerce** reads the TLog files from the specified SFTP location and converts the order data into a JSON format compatible with its system. This ensures that both in-store and Endless Aisle orders are seamlessly synchronized into the **HotWax Commerce Order Management System** and processed accordingly.

## How different order types are synced and processed

### 1. In-Store orders
* When HotWax Commerce is the order master for the retail organization, it needs to collect information about all types of orders. In-store orders will be sent to and stored in HotWax Commerce.
* If HotWax Commerce is not the order master, PredictSpring sends an InventoryVariance file. HotWax Commerce reads this file and updates its inventory accordingly to avoid overpromising.

### 2. Endless Aisle orders
* When an order comes in, PredictSpring will send the HotWax Commerce Fulfillment System all the necessary order details. HotWax Commerce sends the orders to its Brokering System, where they are efficiently fulfilled, ensuring a seamless process from start to finish.
