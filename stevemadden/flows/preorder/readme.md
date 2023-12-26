**Preorder Flow**

**List Pre-orders:**
1. Pre-orders are facilitated through HotWax Commerce using automated purchase orders from ERP.
2. A 15 mins scheduled job checks for any PO available in HotWax which is active, has PO ATP available, promise date is yet to arrive with      active status.
3. HotWax generates CSV file for Shopify containing product details such as UPC, po-atp, current PO promise date. 
4. Shopify processes the file and updates the metafield with data provided by HotWax and checks "continue selling when out of stock" in the     product variant page.

**Delist Pre-orders:**
1. A 15 mins scheduled job checks for style which is not fulfilling the pre-order criteria and moves the item out of the pre-order category
2. HotWax generates CSV file for Shopify containing product details such as UPC, current PO promise date, available inventory in hand with      inactive status.
3. Shopify processes the file unchecks "continue selling when out of stock" in the product variant page.
4. In following scenarios HotWax generates inactive pre-order file for Shopify with available inventory in hand:
      a. Promise date achieved
      b. All pre-orders released
      c. Inventory received and style has no orders in pre-order queue

**PO Allocation to Sales Order:**
1. When an order is imported into HotWax, a service checks for available PO for the style and allocates the PO ATP to the sales order and       associates the PO ID and PO promise date with SO on line item level.
2. This helps user to navigate to the PO directly from the View Sales Order page.

**Changing Promise Date on Preorder:**
1. User can change the promise date on the order from the view sales order page
2. Alternatively if the pre-order list is large then in that case user can use Update Sales Order Item CSV to bulk update the promise date
3. User can notify the customer about the change in the promise date by uploading notify customer csv with order details

**Auto-releasing preorders:**
1. A service runs sequentially everyday after unfillable brokering and regular brokering that checks for pre-orders eligible for auto-releasing
2. In following scenarios the orders are considered eligible for auto-releasing:
    a. Pre-order promise date has arrived
    b. Inventory for the style is available
