# Customer-owned lens process document  

Krewe specializes in eyewear, offering a variety of optical frames and prescription lenses. In scenarios where a customer's lens is broken or scratched, the customer can send in their frame to have a new lens fitted. The repaired or updated frame is then sent back to the customer.

## Current Process


#### **In-Store Frame Drop-Off**  
1. **Order Creation**:  
   - Customers visiting the store provide their frame, and the store associate manually creates an order in NetSuite under the customer's profile.  
   - The Purchase Order (PO) number follows this format:  
     `Customer Initials + Date + Store Associate Initials`.  
   - The `order type` is set to *In-Store (POS)*, and the `sales channel/department` is set to the store's location.  

2. **Temporary Location Assignment**:  
   - The order is initially assigned to a **warranty location** to act as a temporary hold until the frame arrives at the warehouse.  
   - Once the frame is received at the warehouse, its location is updated to `HEADQUARTERS: E-COMM` in NetSuite, marking it as ready for fulfillment.  

3. **Line Item Details**:  
   - For lens replacements using a customer-provided frame, the SKU `CUSOWN-1` is entered with the description format:  
     `FRAME NAME + COLOR (Customer Owned)`.  
   - For new frames, the specific frame SKU is used instead.  

4. **Shipping**:  
   - Standard shipping is set to USPS First Class for $14.99.  
   - New frame orders qualify for free shipping.  

5. **Fulfillment**:  
   - The customer’s shipping address is recorded, a deposit is collected, and the order is processed for fulfillment.  

---

#### **Direct Mail-In Frame and Form**  
1. Customers mailing their frames include an order form with details like lens specifications, name, email, and shipping address.  
2. Upon receiving the package at the warehouse:  
   - The order is created in NetSuite with the location automatically set to `HEADQUARTERS: E-COMM`.  
   - No temporary hold is needed, and the order is processed immediately.  

---

### **New Frame and Lens Orders**  
Customers looking to customize frames with specialty lenses (e.g., polarized or mirrored lenses) that aren’t available on the website require manual order handling:  
1. **Order Placement**:  
   - These custom orders are manually entered into Shopify POS.  
   - Details of the custom lenses and frame specifications are recorded.  

2. **Fulfillment**:  
   - The order is processed as per the customer’s specifications.  

---

## **Proposed Solutions**  

### **New Frame and Lens Orders**  


1. **Order Creation by CS Team**:  
   - The Customer Service (CS) team will create draft orders in Shopify and send them to customers for payment.  
   - Orders will include a `custom property` for item grouping.  

2. **HotWax Integration**:  
   - Using the HotWax Admin Helper app, CS can add or modify custom properties for draft orders.  
   - A checkbox will appear next to each line item, allowing CS to group items.  
   - Once saved, a unique ID will link grouped items for joint processing.  

3. **Fulfillment**:  
   - HotWax will import grouped items as a single unit, ensuring they are fulfilled together.  

---

### **Customer-Owned Frames**  
When a customer wants to change the lenses in their pre-owned frame, the HotWax admin helper can be used to add a custom line item property. This allows the system to capture the specific request for lens replacement and ensure the correct fulfillment process.

1. **Order Identification**:  
   - For customer-owned frames, a custom line item property will be added. This allows us to link the pre-owned frame to the lens product they are purchasing. In Shopify the lens product will be visible as a line item and the customer owned frame will be added in the line item property of the order JSON. 
     
     `ID: customer-owned frame  
      Value: [SKU of the customer-owned frame]`  

2. **Order Handling in HotWax**:  
   - HotWax will separate the lens and customer-owned frame into distinct products.  
   - A new product will be created in HotWax for the customer-owned frame with an internal ID format like:  
     `COF-[Order Name]-[Internal Name]`.  
   - This product won’t have inventory until the frame arrives at the warehouse.  

3. **Inbound Shipment Creation**:  
   - When the frame arrives at the warehouse, an inbound shipment will be created and processed through the receiving app.  
   - This increases inventory for the customer-owned frame, allowing it to be allocated during the brokering run.  

---

### **Packing Slip Updates in NetSuite**  
1. **Visibility of Customer-Owned Frames**:  
   - Customer-owned frames and lenses will appear as separate line items in NetSuite.  
   - A blanket product for customer-owned frames will be created in NetSuite, and HotWax will add a custom property to include the frame SKU.  

2. **Packing Slip Customization**:  
   - The packing slip will display the customer-owned frame and its details alongside the lens product, ensuring clarity for the fulfillment team.  


