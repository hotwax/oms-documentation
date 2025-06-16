# **Configure NetSuite Setting**

Learn how to **configure data synchronization** between HotWax and NetSuite using the **NetSuite page** in the Company App.

## Introduction

The NetSuite page includes four sections:

* **Statistics**    
* **Configuration**    
* **Product and Inventory**    
* **Order and Fulfillment**


## **Statistics**


*  **Orders**: Number of orders awaiting sync with NetSuite.    
*  **Customers**: Number of customers awaiting sync with NetSuite.    
*  **Products**: Number of Products awaiting sync with NetSuite.


## **Configuration**

Set up **SFTP** and **Product Store settings**.

### **Setup SFTP**

OMS and NetSuite communicate by exchanging files in an SFTP location. Both systems access this shared location to send and retrieve files. To enable this process, administrators must configure the SFTP settings in OMS.

For detailed information related to SFTP configuration, refer to this [document](/documents/learn-netsuite/netsuite-deployment/sdf-bundle/setup-sftp.md)

*  **GUI ID of the SFTP location**: Unique identifier for the SFTP configuration.    
*  **Server**: Address of the SFTP server/hostname (e.g., \`sftp.example.com\`).    
*  **User ID**: Username for SFTP access.    
*  **Port**: Port number for SFTP (default is 22).    
*  **Host Key**: Authentication key from the SFTP server.    
*  **Default Directory**: Default path on the SFTP server (e.g., \`/home/{instance name}/sftp/netsuite/\`).

### **Product Store**

In HotWax, you configure NetSuite settings for each Product Store. A Product Store links to a NetSuite Subsidiary ID, but a single store may have multiple subsidiary IDs.

**Steps to configure Product Store:**

*  Select the product store name.    
*  Enter it's corresponding NetSuite Subsidiary ID.  

For more information, refer to this [document](/documents/learn-netsuite/netsuite-deployment/prerequisite-syncs/productstore-settings.md).

## **Product and Inventory**

Specify which variance reasons to synchronize with NetSuite. For any reason, you may associate a NetSuite transfer location, which will automatically process the transaction as an inventory transfer instead of a standard adjustment.

### **Inventory Variance**

Inventory variance is the gap between what system shows in stock and what’s physically available. Administrators can select reasons for inventory variance to be synced with NetSuite.

To know more about inventory variance refer to this [document](/documents/learn-hotwax-oms/business-process-models/inventory-lifecycle.md).

**Steps to configure Inventory Variance:**

*  Select the inventory variance reason.    
*  Enter the NetSuite Inventory Adjustment Reason ID.    
*  Enter a specific NetSuite Facility ID.


## **Orders and Fulfillment**

As NetSuite processes orders and fulfillment details, administrators must map the order and fulfillment data between OMS and NetSuite.

### **Shipping Method**

Map HotWax shipping methods to NetSuite Shipment Method IDs. Unmapped methods will use NetSuite's default.

**Steps to Add `NetSuite shipment method ID`:**

*  Choose the shipping method.    
*  Enter the corresponding NetSuite Shipment Method ID.    
*  Apply Mapping.


### **Payment Method**

Payment methods in HotWax must be mapped to NetSuite Payment Method IDs. Since it's a required field, unmapped methods will cause sync failures.

**Steps to Add `NetSuite Payment Method`:**

*  Select the payment method.    
*  Add the corresponding NetSuite Payment Method ID.    
*  Apply Mapping.  

For more information, refer to this [document](/documents/learn-netsuite/synchronization-flows/integration-mappings/payment-methods.md).

### **Price Levels**

To sync orders from HotWax to NetSuite, administrators must choose a price level in HotWax.

In NetSuite, price levels let you set different prices for items based on things like customer type, product category, or location. 

**Custom**: Use this option to send the exact price received from the eCommerce platform to NetSuite without any changes.  
   
**Base Price**: In NetSuite, this is the default selling price of an item. Choose this option in HotWax if you want to sync the base price as the price level in NetSuite.

**Steps to Add Price Levels:**

*  Locate the Price Levels setting.    
*  Select the desired NetSuite Price Level ID, or choose "Custom."    
*  Click `Save`.  

For more information, refer to this [document](/documents/learn-netsuite/synchronization-flows/integration-mappings/price-levels.md).

### **Discount**

Administrators have to map order and item level discounts in HotWax with NetSuite . Unmapped discounts can cause sync discrepancies.

**Steps to Add Discount:**

*  Identify the HotWax discount type (Order Level or Item Level).    
*  Map it to the corresponding NetSuite Item ID.    
*  Click `Save`.

### **Departments**

Departments are categories that administrators can create in NetSuite to identify, categorize, and track records such as financials and transactions.

Each facility is associated with a specific department in NetSuite. To sync department on an order administrators need to map HotWax facilities to NetSuite Department IDs.

To know more about depratment refer to this [document](https://docs.oracle.com/en/cloud/saas/netsuite/nsonlinehelp/section\_N261602.html).

**Steps to Add Department:**

*  Click the `+ NetSuite ID` button.    
*  Enter the NetSuite Department ID.    
*  Apply the mapping.


### **Sales Channel**

A sales channel in NetSuite identifies where an order originates, such as a website or POS etc.  
Administrators can map Hotwax sales channels to NetSuite Sales Channel IDs for correct order attribution in NetSuite.

**Steps to Add Sales Channel:**

*  Click the `+NetSuite ID` button.    
*  Enter the NetSuite Sales Channel ID.    
*  Apply the mapping.

---
