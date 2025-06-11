# Configure NetSuite Setting

This guide explains the NetSuite page within the Company App. This page allows you to set up essential configurations for data synchronization between HotWax Commerce and NetSuite.

## Introduction

The NetSuite page is divided into four sections:
- **Statistics**  
- **Configuration**  
- **Product and Inventory**  
- **Order and Fulfillment**  

## Statistics

This section provides an overview of data awaiting synchronization with NetSuite.  
Here, administrators can monitor:
- **Orders**: Number of orders awaiting sync with NetSuite.  
- **Customers**: Number of customers awaiting sync with NetSuite.  
- **Products**: Number of Products awaiting sync with NetSuite.  

## Configuration

This section helps administrators set up **SFTP** and **Product Store settings**.

### Setup SFTP

Communication between OMS and NetSuite happens through files exchanged via SFTP location. Both systems place and retrieve files from this shared location. Administrators need to configure the SFTP location in OMS to enable this exchange.

For detailed information related to SFTP configuration, refer to this [document](/documents/learn-netsuite/netsuite-deployment/sdf-bundle/setup-sftp.md)
.

- **GUI ID of the SFTP location**: Unique identifier for the SFTP configuration.  
- **Server**: Address of the SFTP server/hostname (e.g., `sftp.example.com`).  
- **User ID**: Username for SFTP access.  
- **Port**: Port number for SFTP (default is 22).  
- **Host Key**: Authentication key from the SFTP server.  
- **Default Directory**: Default path on the SFTP server (e.g., `/home/{instance name}/-sftp/netsuite/`).

### Product Store

In HotWax, NetSuite settings are configured per Product Store. A Product Store maps to a NetSuite Subsidiary ID. For a single product store in HotWax, there can be multiple NetSuite subsidiary IDs.

**Steps to configure Product Store:**
- Select the product store name.  
- Enter it's corresponding NetSuite Subsidiary ID.  

For more information, refer to this [document](/documents/learn-netsuite/netsuite-deployment/prerequisite-syncs/productstore-settings.md).
.
## Product and Inventory

In this section, users can select which variance reasons should be synced with NetSuite. Each variance reason can also have a transfer location linked to it, treating it as a transfer instead of a regular adjustment.

### Inventory Variance

Inventory Variance refers to inventory adjustments (e.g., damage, loss). In cases where each facility has its own dedicated inventory transfer location, administrators can map the Inventory Variance reason to transfer locations in NetSuite.

Administrators can select which inventory variance reasons sync to NetSuite.

To know more about inventory variance refer to this [document](documents/learn-hotwax-oms/business-process-models/inventory-lifecycle.md).

**Steps to configure Inventory Variance:**
- Select the inventory variance reason.  
- Enter the NetSuite Inventory Adjustment Reason ID.  
- Enter a specific NetSuite Facility ID.  

## Orders and Fulfillment

NetSuite also manages fulfillment statuses and other order-related details. This section provides key order information such as shipping methods, payment types, pricing, and discounts are properly mapped with NetSuite.

### Shipping Method

HotWax shipping methods should be mapped to NetSuite Shipment Method IDs. In case if there is a shipping method not mapped, HC will map it to the default shipping method ID in NetSuite.

This page outlines the mapping between shipping methods, including their associated carrier, Shopify Shipping name, and NetSuite ID.

**Steps to Add `NetSuite shipment method ID`:**
- Choose the shipping method.  
- Enter the corresponding NetSuite Shipment Method ID.  
- Apply Mapping.  

### Payment Method

Payment methods should be mapped to NetSuite Payment Method IDs. Unmapped methods will cause sync failures between HotWax and NetSuite.

**Steps to Add `NetSuite Payment Method`:**
- Select the payment method.  
- Add the corresponding NetSuite Payment Method ID.  
- Apply Mapping.  

For more information, refer to this [document](/documents/learn-netsuite/synchronization-flows/integration-mappings/payment-methods.md).

### Price Levels

To sync orders from HotWax to NetSuite, administrators need to set the price level in HotWax that will be sent to NetSuite.

In NetSuite, price levels define the specific pricing for items, enabling you to offer different rates based on factors like customer type, product category, or location. Administrators need to set price levels in HotWax to be sent to NetSuite.

- **Custom**: If administrators want to sync the price received from the eCommerce platform directly to NetSuite without any changes, they can use this option.  
- **Base Price**: In NetSuite, the "base price" refers to the standard or default selling price of an item. Administrators can set the price level setting in HotWax Commerce to "Base Price." If they want HotWax to sync the base price with NetSuite as price levels, this option should be selected.

**Steps to Add Price Levels:**
- Locate the Price Levels setting.  
- Select the desired NetSuite Price Level ID, or choose "Custom."  
- Click `Save`.  

For more information, refer to this [document](/documents/learn-netsuite/synchronization-flows/integration-mappings/price-levels.md).

### Discount

Administrators have to map order and item-level discounts in HotWax to be mapped with NetSuite. Unmapped discounts can cause sync discrepancies.

**Steps to Add Discount:**
- Identify the HotWax discount type (Order Level or Item Level).  
- Map it to the corresponding NetSuite Item ID.  
- Click `Save`.

### Departments

Departments are categories that administrators can create in NetSuite to identify, categorize, and track records such as financials and transactions.
Each facility is accociated with a specific department in NetSuite. TO sync department on an order administrators need to map HotWax facilities to NetSuite Department IDs.

To know more about depratment refer to this [document](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N261602.html).

**Steps to Add Department:**
- Click the `+ NetSuite ID` button.  
- Enter the NetSuite Department ID.  
- Apply the mapping.  

### Sales Channel

Map Sales Channels to NetSuite Sales Channel IDs for correct order attribution in NetSuite.

**Steps to Add Sales Channel:**
- Click the `+NetSuite ID` button.  
- Enter the NetSuite Sales Channel ID.  
- Apply the mapping.
