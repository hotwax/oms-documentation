---
description: How to create transfer orders in HotWax Commerce
---

# Transfer Order Creation

Transfer orders let you move inventory between locations—stores, warehouses, or between stores—using HotWax’s Fulfillment App.

## Create Transfer Order

When inventory planners create transfer orders in NetSuite, they specify the source and destination locations. These orders land in HotWax Commerce with a **Created** status. An OMS job then **approves** them automatically, moving them to **Pending Fulfillment** for store or warehouse associates to process.

Here’s how to create a transfer order:

1. Go to **Inventory → Transfer Orders** in the Fulfillment App.  
2. Tap the **+** button (Create) to open the **Create Transfer Order** screen.

## Key Fields

| Field                  | Description                                                                                   |
|------------------------|-----------------------------------------------------------------------------------------------|
| **Transfer name**      | A unique, human-readable name (e.g., `Downtown → Central WH restock`)                         |
| **Assign**             | • **Origin**: Defaults to your current location<br>• **Destination**: Tap **Assign** to pick the receiving site |
| **Shipping Method**    | • **Carrier**: Choose your shipper (FedEx, UPS, etc.)<br>• **Method**: Select service level (Ground Economy, 2-Day, etc.) |
| **Plan**               | • **Lifecycle**: (Optional) Tag stages like “Staging” or “Inspection”<br>• **Ship Date** / **Delivery Date**: Schedule timing |
| **Add product**        | • **Add product**: Search by SKU or name and enter quantity<br>• **Scan**: Use barcode scanning for fast entry |
| **Import items CSV**   | • **Download example**: Get the CSV template<br>• **Upload**: Bulk-load SKUs and quantities |

{% hint style="info" %}
Once you tap **Create**, the OMS jobs will pull the order into HotWax Commerce (Created) and then auto-approve it to Pending Fulfillment.
{% endhint %}

## Step-by-Step Guide

1. **Name the transfer**  
   Tap **Transfer name** and enter a descriptive identifier.

2. **Assign locations**  
   - **Origin** defaults to your logged-in store or warehouse.  
   - Tap **Assign** next to **Destination** and select where stock will go.

3. **Select shipping method**  
   - Under **Shipping Method**, pick a **Carrier**.  
   - Choose the **Method** that fits your timing and cost needs.

4. **Configure plan details**  
   - Select a **Lifecycle** tag for categorization.  
   - Tap **Select Date** for both **Ship Date** and **Delivery Date**.

5. **Add products**  
   - **Manually**: Tap **Add product**, search by SKU or name, then enter quantity.  
   - **Scan**: Tap **Scan** to use your barcode scanner.  
   - **Bulk CSV**:  
     1. Tap **Download example** to download the template.  
     2. Populate `sku` and `quantity` columns.  
     3. Tap **Upload** to import all items at once.

6. **Review & create**  
   - Confirm your transfer name, locations, shipping, dates, and line items.  
   - Tap the **checkmark** (bottom right) to create the transfer order.
