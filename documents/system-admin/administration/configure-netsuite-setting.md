# Configure NetSuite Setting

This guide explains the NetSuite page within the Company App. This page allows you to set up essential configurations for data synchronization between HotWax Commerce and NetSuite.

## Introduction

The NetSuite page is divided into four sections:
- **Statistics**  
- **Configuration**  
- **Product and Inventory**  
- **Order and Fulfillment**  

All these sections help configure settings related to NetSuite.

## Statistics

This section provides an overview of data awaiting synchronization with NetSuite. Here, administrators can monitor:

- **Orders**: Number of orders awaiting sync with NetSuite.  
- **Customers**: Number of customers pending synchronization with NetSuite.  
- **Products**: Number of Products not having a NetSuite Product ID.  

## Configuration

This section is used to set up SFTP and Product Store settings.

### Setup SFTP

Communication between OMS and NetSuite happens through files exchanged via an SFTP location. Both systems place and retrieve files from this shared location. Administrators need to configure the SFTP location in OMS to enable this exchange.

For detailed information related to SFTP configuration, refer to this document.

- **GUI ID of the SFTP location**: Unique identifier for the SFTP configuration.  
- **Server**: Address of the SFTP server/hostname (e.g., `sftp.example.com`).  
- **User ID**: Username for SFTP access.  
- **Port**: Port number for SFTP (default is 22).  
- **Host Key**: Authentication key from the SFTP server.  

Refer to **SFTP Host Key Generation Guide**.

- **Default Directory**: Default path on the SFTP server (e.g., `/home/{instance name}/-sftp/netsuite/`).

### Product Store

In HotWax, NetSuite settings are configured per Product Store. A Product Store maps to a NetSuite Subsidiary ID. It is important to note that for a single product store in HotWax, there can be multiple subsidiary IDs.

**Steps to configure Product Store:**
- Select the product store name.  
- Enter its corresponding NetSuite Subsidiary ID.  

For more information, refer to this document.

## 3. Product and Inventory

In this section, users can select which variance reasons should be synced to NetSuite. Each variance reason can also have a transfer location linked to it, treating it as a transfer instead of a regular adjustment.

### Inventory Variance

Inventory Variance refers to inventory adjustments (e.g., damage, loss). In cases where each facility has its own dedicated inventory transfer location, administrators can map the Inventory Variance reason to transfer locations in NetSuite.

Administrators can select which inventory variance reasons sync to NetSuite.

**Steps to configure Inventory Variance:**
- Select the inventory variance reason.  
- Enter the NetSuite Inventory Adjustment Reason ID.  
- Enter a specific NetSuite Facility ID.  

## 4. Orders and Fulfillment

NetSuite also manages fulfillment statuses and other order-related details. This section ensures that key order information such as shipping methods, payment types, pricing, and discounts are properly mapped with NetSuite.

### Shipping Method

HotWax shipping methods should be mapped to NetSuite Shipment Method IDs. In case if there is a shipping method not mapped, HC will map it to the default shipping method ID in NetSuite.

This page outlines the mapping between shipping methods, including their associated carrier, Shopify Shipping name, and NetSuite ID.

**Steps to Add `NetSuite shipment method ID`:**
- Choose the shipping method.  
- Enter the corresponding NetSuite Shipment Method ID.  
- Apply Mapping.  

### Payment Method

Payment methods must be mapped to NetSuite Payment Method IDs. Unmapped methods will cause sync failures between HotWax and NetSuite.

**Steps to Add `NetSuite Payment Method`:**
- Select the payment method.  
- Add the corresponding NetSuite Payment Method ID.  
- Apply Mapping.  

For more information, refer to this document.

### Price Levels

To sync orders from HotWax Commerce to NetSuite, you need to set the price level in HotWax that should be sent to NetSuite.  

Price level defines a list of values that are used by the opportunity and item records to set the price level for a specific item. Items can be assigned different price levels, such as Employee Price or Corporate Discount Price.

- **Custom**: This is the price received from eCommerce and sent as it is to NetSuite.  
- **Base Price**: Administrators can also set the base price to send NetSuite as per their preference.

**Steps to Add Price Levels:**
- Locate the Price Levels setting.  
- Select the desired NetSuite Price Level ID, or choose "Custom."  
- Click `Save`.  

For more information, refer to this document.

### Discount

Administrators have to map order and item-level discounts in HotWax to be mapped with NetSuite. Unmapped discounts may cause sync discrepancies.

**Steps to Add Discount:**
- Identify the HotWax discount type (Order Level or Item Level).  
- Map it to the corresponding NetSuite Item ID.  
- Click `Save`.

### Departments

Departments are categories that administrators can create to identify, categorize, and track records such as financials, transactions, and employees.

Each facility comes in a specific department in NetSuite. Administrators need to map HotWax facilities to NetSuite Department IDs.  

To know more about departments, refer to this document.

**Steps to Add Departments:**
- Click the `+ NetSuite ID` button.  
- Enter the NetSuite Department ID.  
- Apply the mapping.  

### Sales Channel

Map HotWax Sales Channels to NetSuite Sales Channel IDs for correct order attribution in NetSuite. Map HotWax Sales Channels to NetSuite Sales Channel IDs for correct order attribution in NetSuite.

**Steps to Add Sales Channel:**
- Click the `+NetSuite ID` button.  
- Enter the NetSuite Sales Channel ID.  
- Apply the mapping.
