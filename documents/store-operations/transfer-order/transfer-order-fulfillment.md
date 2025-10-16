---
description: How to fulfill transfer orders in HotWax Commerce
---

# Transfer Order Fulfillment

The Fulfillment App by HotWax Commerce allows you to fulfill Transfer Orders (TOs). 
Fulfill store-to-store and store-to-warehouse transfers through the Fulfillment App, while fulfill warehouse-to-store transfers through a Warehouse Management System (WMS). 
This guide covers how to locate a TO, pick and pack inventory, handle rejections, create shipments, and complete the fulfillment process.


## Fulfilling a TO

### Locate the TO
To locate a specific TO:
- Navigate to **Transfer Orders** page.
- Use the search bar to look up the TO by ID or name.
- You can only see TOs where the origin facility matches your selected facility. TOs for other facilities won’t appear.


### Review TO details
Tapping on a TO opens the **Transfer Order Details** page, which displays:
- A list of items with product name, product images, SKU codes, and ordered quantities.
- Total number of items to be fulfilled.
- A progress bar that visually indicates how much of each item has been fulfilled.

This view helps you verify the TO items before starting the fulfillment process.  


### Print picklist
- To print a picklist for picking items, tap **`Print Picklist`**.
- To learn more about the picklist functionality for store transfer fulfillment, refer to **Transfer Order Picklist**.


### Pick items
There are three ways to pick items:
1. **Scan with a barcode scanner**  
   Scanning a barcode finds the matching item in the list, selects it, and increases its picked quantity.  

2. **Scan with the iPad camera**  
   Tap **`Scan`** to open the camera and scan the item’s barcode.  

3. **Enter SKU**  
   Enter the SKU of an item in the **Scan Item** input field.  

Each time you scan a barcode or enter a SKU, the system automatically adds one unit to the quantity and updates the progress bar.  

Alternatively, once scanning has selected the item, you can also manually enter the picked quantity of each item.  

> **Tip:** Use **`Pick All`**  
> If all ordered quantities for an item are picked, tap **`Pick All`** to record them without scanning or entering manually.


### Create shipment
TOs may be fulfilled in multiple shipments or in a single shipment.

#### Fulfill in multiple shipments
If you are fulfilling multiple shipments, record only the items for the current shipment. The rest remain open in the app until fulfilled later.
- Enter the quantity of items picked for the current shipment.
- Tap **`Create Shipment`**.
- A confirmation pop-up will appear, click **`Create`**.

#### Fulfill in single shipment
When the entire TO is fulfilled at once, all items are picked and shipped together.
- Tap **`Pick All`** for all items in the TO.
- Tap **`Create Shipment`**.
- A confirmation pop-up will appear, tap **`Create`**.

Once the shipment is created, the TO is marked as fulfilled and no further changes can be made.  


### Review shipment
After a shipment is created, the app opens the **Review shipment** page.  
You can either:
- Tap **`Generate shipping label`** to fetch the carrier and tracking information automatically, or
- Manually enter the carrier and tracking code.


### Complete shipment
Once the tracking code is entered, the **`Complete Shipment`** button becomes available.
- Tap **`Complete Shipment`**.
- A confirmation pop-up will appear, tap **`Ship`**.


## Exception Handling

### Rejecting an item in TO
If an item cannot be fulfilled because of missing inventory, damage, or incorrect listings, you can reject it. Rejecting an item rejects the entire TO, and no further fulfillment is possible.  
When you reject an item, the system records an inventory variance. This helps ensure future orders are planned based on accurate stock availability.  

Steps to reject an item:
- Tap **`Report an Issue`** dropdown next to the item that can’t be fulfilled.
{% hint style="info" %}
The **Report an Issue** dropdown is only available if no shipments have been created for the TO.
{% endhint %}
- Select a rejection reason from the dropdown (for example, Not in stock, Mismatch, or Damaged).
- Once you select a reason, all other items will default to **No Variance** and the **`Reject Items`** button will appear.
- Tap **`Reject Items`**.
- A confirmation pop-up will appear, tap **`Reject`**.

After rejection, the TO moves to **Rejected Order Parking**, and inventory variance is logged based on the selected rejection reason.  
To know more about rejection reasons, refer to **Rejections**.


### Cancelling an item in TO
You can cancel a specific item in a TO, even if it has been partially fulfilled. This may be required due to low stock, damaged inventory, or fulfillment cutoffs.  
When you close an item, it is marked as cancelled in HotWax OMS and is no longer available for fulfillment.

Steps to close an item:
- Tap **`Close Items`**.
- A review dialog box will appear. Select the checkbox for each item to close, then tap the **Save** icon.
- When the confirmation pop-up appears, tap **Proceed**.

Once closed, the item no longer appears in the TO in either the Fulfillment App or the Receiving App.  
