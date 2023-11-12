# Transfer Orders
Transfer orders are instrumental in the internal movement of inventory within an omnichannel retail environment. They are used to transfer inventory from warehouses to stores or between stores. This process is typically initiated when stores require additional inventory to meet customer demands. Retail merchandisers strategically plan inventory transfers, sourcing them either from centralized warehouses or from stores with an excess of stock that isn't selling.

Similar to Purchase Orders, Transfer Orders originate within Netsuite, but there is a distinction in how they are fulfilled. When a Transfer Order is initiated from a warehouse, Netsuite's fulfillment solution is employed to fulfill the Transfer Order, ensuring the correct allocation of inventory.

This scenario emphasizes the synchronization of Transfer Orders from Netsuite to HotWax Commerce for efficient inventory receiving processes in physical stores. Once items are received, Item Receipt records are imported back into Netsuite to mark Transfer Orders as "Received."

### Key Objectives
- Automate the synchronization of Transfer Orders from Netsuite to HotWax Commerce.
- Streamline the creation of Item Receipt records within HotWax Commerce when store associates receive inventory.
- Automate the update of Transfer Order statuses from "Pending" to "Received" in Netsuite after item receipt.

## Workflow

### Generate Transfer Orders in Netsuite
Transfer Orders are initiated within the Netsuite ERP system, facilitating the internal transfer of inventory from warehouses to stores or between stores.


### Export Transfer Orders from Netsuite
Similar to Purchase Orders, a Map Reduce Script is executed. This script runs a specific Saved Search to identify Transfer Orders in "Pending" status within Netsuite. It compiles the relevant data into a CSV file, which is then securely placed in an SFTP location.

The script runs periodically, typically every 15 minutes, to ensure it fetches only the latest and pending Transfer Orders from Netsuite, optimizing efficiency.


### Import Transfer Orders into HotWax Commerce
In HotWax Commerce, a dedicated job monitors the SFTP location, regularly checking for new Transfer Order CSV files. This job utilizes the powerful APIs provided by HotWax Commerce's Export/Import tools to import these Transfer Orders.


### Receiving Inventory in the Store
Store associates use the HotWax Commerce Receiving App to receive transferred inventory. The user-friendly interface of this app ensures a smooth and efficient receiving process, even for users with minimal training.

### Export Item Receipts from HotWax Commerce
Item Receipt records are created within HotWax Commerce when Transfer Orders are received. These records are essential for updating inventory numbers and ensuring that the available stock is accurately represented.

To maintain a comprehensive record, a designated job in HotWax Commerce exports the Item Receipts created within the system. Each Item Receipt is mapped to the corresponding Transfer Order, ensuring efficient reconciliation and further processing.

To facilitate the subsequent processing of this data, the JSON file is securely placed in an SFTP location, making it accessible for Netsuite. 


### Import Item Receipts into Netsuite
In Netsuite, a scheduled Suite Script reads the JSON files containing Item Receipt data from the SFTP location. It iterates through each record and seamlessly creates new Item Receipt records within Netsuite. The script uses the versatile N/record module to ensure a smooth transition.

### Automated Transfer Order Status Update
The synchronization process extends to the automated status update of the associated Transfer Orders. Upon successful creation of Item Receipt records, the status of the Transfer Orders in Netsuite is automatically changed from "Pending" to "Received."

