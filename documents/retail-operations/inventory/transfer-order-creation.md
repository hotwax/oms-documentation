# Transfer Order Creation

You can create a new TO in the Transfers App to move inventory between facilities.


## Steps to create a TO:

### Create a new TO
- To create a new TO, click the Add (+) icon.
- The Create transfer order page opens, where you can enter order details.  


### Enter TO name
- Enter a clear, relevant and searchable name.
- This makes the TO easier to find later.  


### Complete the assign section
- **Product Store:**
  Select a product store, if there is only one store available, it will be selected by default.  

- **Origin:**
  Click `Assign` button next to “Origin”,  or click the facility name if one is already selected by default.  
  In the dialog, select the origin facility.  
  Click Save.  

- **Destination:**
  Click `Assign` button next to “Destination”.  
  In the dialog, select the receiving facility.  
  Click Save.  


### Select shipping method
- **Carrier:** Click on dropdown to select a shipping carrier (for example, FedEx).
- **Method:** Click on dropdown and select a shipping method supported by the selected carrier (for example, Standard, Same day, or Next day).


### Plan shipping and delivery dates
- **Ship Date:**
  Click `Select Date` field.  
  Pick the shipment date from the calendar.  
  Click Done.  

- **Delivery Date:**
  Follow the same steps and select the delivery date.  


### Add Items to the TO
You can add items manually or by uploading a CSV.  

#### Bulk Upload via CSV
Recommended for TOs with many items.  
- Go to the Import items CSV section.
- Click `Download Example` to get a sample CSV template, if needed.
- Click `Upload` and upload the CSV file containing the SKUs and quantities.  

After uploading:  
- **Select Product Identifier:** Choose the identifier type (e.g., SKU).  
- **Map Columns:** Assign the correct CSV columns for Product Identifier and Quantity (e.g., Product Identifier → SKU, Quantity → Quantity).  

#### Manually add items
Recommended for TOs with only one or a few items.  

- **Search by product identifier**  
  Search for a product by entering its identifier (for example, SKU).  
  When the product appears on the screen, click on Add (+) icon.  


### Add item quantities
Quantities can be added either to individual items or in bulk to all items at once.  

#### Adding quantities to an individual item:
- **Enter Quantity:**  
  Enter the quantity directly in the input field, or use the stepper arrows.  

- **Book Quantities:**  
  Open the ellipsis (⋮) menu and choose `Book QoH` (to transfer the entire available stock in hand) or `Book ATP` (to transfer only the unallocated/unreserved quantity).  

- **Remove Item:**  
  From the same menu, select `Remove from order` to remove an item from the TO.  

#### Adding quantities in bulk:
- To add quantities in bulk, check the box above the item list.  
- You can then apply Book QoH or Book ATP across every item, or use `Custom Quantity` to enter a single value that is applied to all items in the TO.  


### Finalize the TO
- Before finalizing, review the destination facility, shipping method, transfer dates and the items with their respective quantities.  
- Once everything is confirmed, select the checkmark icon in the lower-right corner to finalize and create the TO.  


After a TO is created, you land on the Transfer Order Details page with the order in Created status.
