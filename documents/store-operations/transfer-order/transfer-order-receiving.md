---
description: >-
  How to receive transfer order in HotWax
---

# Transfer Order Receiving

The Receiving App by HotWax Commerce allows you to efficiently receive inventory against Transfer Orders (TOs). You can receive items partially or fully as they arrive, with real-time updates reflected in the system.  
This guide explains how to locate a TO, receive items, track progress and complete the receiving process.


## Receiving a TO

Follow these steps to receive a TO:

### Locate the TO
After you log into the Receiving App, you land on the Transfer Orders page. The Open tab lists all TOs scheduled to be received at your facility.  
To locate a specific order:
- Use the search bar to look up the TO by name or by tracking code.  
- Each entry shows the order status, creation date and time.  
- You can only see TOs  where the destination facility matches your selected facility. TOs for other facilities won’t appear.  


### Review TO details
Tapping on a TO opens the Transfer Order Details screen, which displays:
- Total number of items to be received.  
- A list of items with product name, product images, SKU codes and ordered quantities.  
- A progress bar that visually indicates how much of each item has been received.  

This view helps you verify the TO items before starting the receiving process.  


### Receive items
There are three ways to receive inventory:
1. **Scan with a barcode scanner**  
   Scanning a barcode finds the matching item in the list, selects it, and increases its received quantity.  

2. **Scan with the iPad camera**  
   Tap `Scan` to open the camera and scan the item’s barcode.  

3. **Enter SKU:**  
   Enter the SKU of an item in the Scan Item input field.  

Each time you scan a barcode or enter a SKU, the system automatically adds one unit to the quantity and updates the progress bar.  
Alternatively, once scanning has selected the item, you can also manually enter the received quantity for each item in the TO.  

> **Tip:** Use `Receive All`  
> If all ordered quantities for an item are picked, tap `Receive All` to record them without scanning or entering manually.


## Multiple receiving scenarios

TOs may be received partially or all at once.

### Receive items partially and keep the order open
- If only some items in the TO arrive, you can record those items as received and leave the order open for the pending ones.  
- Enter the quantity of items that has arrived.  
- Tap `Receive` to log the quantity.  
- A confirmation pop-up will appear, tap `Proceed`.  

The remaining items stay open in the app so you can receive them later.  


### Receive items partially, close specific items and keep the order open
Sometimes, certain items in a TO are canceled at the source and won’t be shipped. You can close those items so they no longer appear in the TO while you continue receiving the rest.  
- For items where the entire ordered quantity has arrived, tap `Receive All`.  
- For items that are partially arrived, manually enter the quantities.  
- Tap `Receive and Close`.  
- In the review modal, select the checkboxes for the items you want to close, and then tap the Save icon.  
- In the confirmation pop-up, tap `Proceed`.  

The TO stays under the Open tab for the items still pending, but the closed items also appear under the Completed tab for reference.  


### Receive items partially and close the order
If you’ve received part of a TO and you know no more items will arrive, you can close the order with the received quantities.  
- For items where the entire ordered quantity has arrived, tap `Receive All` to record them without scanning or entering quantities manually.  
- For items that are partially arrived, manually enter the quantities.  
- Tap `Receive and Close` and follow the standard closing steps.  


### Receive all items and close the order
If all ordered quantities for every item in the TO have arrived, you can record them at once and close the TO.  
- Tap `Receive All` for each item of the TO.  
- Tap `Receive and Close` and follow the standard closing steps.  


### Standard closing steps
In any scenario where you close items or an entire TO, the steps are the same:
1. Tap `Receive and Close`.  
2. In the review modal, select the checkboxes for the items you want to close, then tap the Save icon.  
3. In the confirmation pop-up, tap `Proceed`.  

{% hint style="info" %}
Once you close items in a TO, you can’t receive them again. Make sure no more items are expected before closing.
{% endhint %}

---

## Receiving discrepancies

### Over receiving
If you receive more units than ordered, you can still record them. For example, if the TO is for 100 units but 110 units arrive, you can record all 110.  
As you scan or enter items, the progress bar goes beyond the ordered quantity and turns red to show that over-receiving has occurred. This way, you can record the exact quantity received and continue without interruption.  


### Under receiving
If fewer units arrive than ordered, you can finalize the TO with the received quantities. For example, if 100 units were ordered but only 80 arrive, you can record 80 and close the order.  
This way, the process isn’t blocked even if the order is incomplete—for example, when items were mispicked, delayed, or not shipped.  


### Receiving unexpected items
If items arrive that weren’t part of the TO, you can add them directly so inventory stays accurate. For example, a product might be packed by mistake or shipped as excess stock..  

Steps to add and receive an unexpected item in a TO:
1. Open a TO and tap the (+) icon located at the top right corner of the details page. This opens a modal to add a product to the TO.  
2. Search for the product by its SKU or name. Once the product appears, tap `Add to Transfer Order` button.  

The product then appears on the TO Details page. Enter the quantity of the unexpected item and proceed with the usual receiving process.  
This ensures all items that arrive, expected or not, are recorded and available in the system.  

---

## Reporting discrepancies

All receiving discrepancies are captured in the HotWax OMS system. The HotWax BI Reports & Analytics platform provides a **[Receiving Report](../../../analytics/reports/inventory.md#receiving-report)**
 that shows:
- Over-received items  
- Under-received items  
- Newly added items  

For each item, the report lists the expected quantity, the received quantity, and the difference.  

You can open this report anytime in the reporting platform, or set it to be automatically sent to specific users.  
By reviewing the report, you can confirm what was physically received, spot variances at the item level, and update the ERP system based on actual receipts. This makes it easier to reconcile discrepancies and keep inventory records accurate across all systems.
