# Inventory Page

## **Steps to Upload a CSV File:**

1. Go to the *Import App Inventory* page and select your import method.  
2. Click the **info** icon in the top-right to download the sample CSV template.  
3. Fill in the required data in the downloaded CSV file.  
4. Click the **Upload** button to select and upload your CSV file.  
5. Map all necessary columns to their matching fields.  
6. After mapping, click **Review**. If any records are missing, map and save them.  
7. Click the **Import** button in the bottom-right corner to finish.

## **Inventory Import Methods**

### **Exact ATP**

**Purpose**: Used when the sellable inventory in OMS must exactly match the available inventory (ATP) from an external system like NetSuite. In cases When NetSuite (or any third-party system) is used as a Warehouse Management System (WMS), it reserves inventory for orders that need to be fulfilled.  
     
**How It Works**: The method compares the inventory quantity in the uploaded file with the current ATP in HotWax OMS. The difference (delta) is then applied to both ATP and QOH (Quantity on Hand) in OMS to reflect accurate inventory.  
     
**Example:**  
For Product A at a store:  
* **Initial QOH:** 10 units  
* **Initial ATP:** 5 units  
* **File’s Quantity:** 4 units  
After resetting:  
* **QOH**: 9 units (adjusted by the delta of \-1)  
* **ATP**: 4 units (adjusted by the delta of \-1)

### **Exact QOH**

**Purpose**: Used to sync physical inventory from external systems like NetSuite to HotWax OMS **without accounting for inventory reservations**. This ensures OMS reflects the actual on-hand quantity.  
     
**How It Works**: The method compares the QOH in the uploaded file with the system's QOH in OMS. The difference (delta) is applied to both QOH and ATP, ignoring any reservations.  
         
**Example**:  
For Product A at a store:  
* **Initial QOH**: 10 units  
* **Initial ATP**: 5 units  
* **File’s Quantity**: 4 units  
After resetting:  
* **QOH**: 4 units (adjusted by a delta of -6)  
* **ATP**: -1 unit (adjusted by the same delta of -6)

### **Adjust by Certain Amount**  

**Purpose**: In many warehouses, retailers maintain separate zones for eCommerce and wholesale inventory. When inventory is moved from one zone to another within the same warehouse, it's treated as an inventory transfer.  
     
**How It Works**: This method adjusts inventory by a specified quantity to reflect the transfer, locking in the internal variance.  

**Example:**  
For Product C in a warehouse with two zones:  
* **Initial QOH in eCommerce Zone**: 12 units  
* **Initial QOH in Wholesale Zone**: 8 units  
* **Transfer Quantity**: 5 units (from eCommerce to Wholesale)  
After transfer adjustment:  
* **QOH in eCommerce Zone**: 7 units (adjusted by a delta of \-5)  
* **QOH in Wholesale Zone**: 13 units (adjusted by a delta of \+5)  

### **Cycle Count or Similar**

**Purpose**: This method is used when physical inventory is found or re-counted, such as locating misplaced items. It resets both QOH and ATP to the exact values provided in the uploaded CSV file.  
    
**How It Works**: Directly sets ATP and QOH to the values provided in the CSV.  

**Example:**  
For Product D at a store:  
* **System QOH**: 2 units  
* **System ATP**: 1 unit  
* **Physical Count** (recovered inventory): 6 units  
After adjustment using recount method:  
* **QOH**: 6 units (set directly based on physical count)  
* **ATP**: 5 units (set to match ATP)

### **Schedule Incoming Inventory**

**Purpose**: This method is ideal for **planned product launches**. It allows retailers to schedule when inventory should become available in the system. Once the scheduled time arrives, the uploaded inventory is automatically set live.  
    
**How It Works**: Schedule inventory import so that the stock becomes available at a predefined date and time (e.g., 10 AM on June 31st).  

**Example:**  
For Product E scheduled to launch on June 30th:  
* **Current QOH in system**: 0 units  
* **Scheduled Import File QOH**: 100 units  
* **Scheduled Import Time**: June 30th, 10:00 AM  
After scheduled import executes:  
* **QOH**: 100 units  
* **ATP**: 100 units

### **Future Inventory for Pre-Order**

**Purpose**: This method supports pre-launches by importing inventory tied to future purchase orders. It enables customers to place pre-orders even though the stock has not yet physically arrived.  
    
**How It Works**: Imports inventory related to a future purchase order, enabling pre-orders.  

**Example:**  
For Product F tied to an upcoming purchase order:  
* **Current QOH**: 0 units  
* **Preorder Inventory in Import File**: 200 units  
* **PO Expected Delivery Date**: July 10th  
After PO import:  
* **QOH**: 0 units (no physical inventory yet)  
* **ATP**: 200 units (reflecting preorder availability)

## **Additional Features**

* The Import App enables retailers to view and schedule jobs for various inventory import methods.
* If any required field is missing in the uploaded file, the app displays it before processing begins. It also highlights what’s missing for example:  
  * “Seems like uploaded file has missing products, checked with initial 10 records.”
* Retailers can also `View History` of file processing.
* From **View history** retailers can:
  * View logs with key details: start/stop time, and log ID.  
  * Check file status: Finished, Running, Failed, or Pending.  
  * Download failed records for analysis.  
  * Filter logs by failed records and failed files.
  * View and modify the file execution mode between `Async` and `Queued` options.
  * View and add the products included in the uploaded file.
  * Download log file, uploaded files and failed records for troubleshooting.

---
