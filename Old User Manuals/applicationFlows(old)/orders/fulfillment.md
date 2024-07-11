# Fulfillment

### Introduction

HotWax Commerce's New Store Fulfillment app enables users to pick, pack, and ship orders brokered to the respective stores from the OMS. To know more about the Fulfillment app, click [here](https://www.hotwax.co/apps/store-fulfillment-app).\
\
This document presents basic steps of various screens and functions where the user performs varied actions during the fulfillment process.



**List of pages:**

1. Open Orders page
2. In-progress Orders page
3. Complete Orders page
4. EXIM Orders page
5. Settings page

***



### Open Orders page

Displays all outstanding orders brokered to the store by the OMS and are ready to begin the fulfillment process.



**Characteristics**

1\. **FIFO Listing:** Orders are displayed in a "First In, First Out" sequence, ensuring older orders are prioritized for fulfillment.

2\. **Order and Item Count:** At the top of the page, the total number of queued orders are clearly displayed, providing an instant overview of the workload.



<figure><img src="../.gitbook/assets/Screenshot 2023-11-01 at 5.42.12 PM (1).png" alt=""><figcaption><p>Image: Open Orders page</p></figcaption></figure>



**Functions**



**a. Search an Order**

Search orders using product names, customer names, or product SKUs to quickly find and manage the orders for fulfillment.

{% embed url="https://youtu.be/oOgIiRsnDRA" %}
Image: Search an order
{% endembed %}



**b. Filter Orders**

Filter orders by product names, customer names, or product SKUs. Additionally, use shipping methods as filters to efficiently manage specific orders.



{% embed url="https://youtu.be/M3jXan3MOZc" %}
Video: Filter Orders
{% endembed %}



**c. Assign picker**

Pickers are assigned to picklists for efficient order fulfillment tracking and performance-based commission distribution.



{% embed url="https://youtu.be/BRAURwt6k-M" %}
Video: Assign pickers
{% endembed %}



**d. Print pick sheet**

Generate a picksheet for orders and move them to the In Progress tab for further processing.

{% embed url="https://youtu.be/Yu384kR-7mU" %}
Video: Print picklist
{% endembed %}



***

### In-Progress Orders page

Displays a list of ready-to-pack items, allowing users to pack, reject, and print necessary documents for the items.



**Characteristics**

1. **Add Multiple Boxes:** Manage items individually with the convenience of the Add Multiple Boxes feature, allowing efficient handling of different items within an order.
2. **Picker Filters:** Easily search for specific orders in batch processes using Picker Filters.
3. **Report an Issue:** Choose reasons for rejection through the Report an Issue feature, facilitating clear communication and issue tracking for rejected orders.
4. **Regenerate Picksheet:** Use the Print icon, available on the top against Picker, to reprint the picksheet.



<figure><img src="../.gitbook/assets/Screenshot 2023-11-01 at 5.42.23 PM (1).png" alt=""><figcaption><p>Image: In progress Order page</p></figcaption></figure>



**Functions**



**a. Generate Shipping label and packing slip**

Print the shipping labels and packing slips to attach with the packed orders.&#x20;

{% hint style="info" %}
HotWax Commerce retrieves the shipping label for the order as soon as the picklist is created.
{% endhint %}

{% embed url="https://youtu.be/ZwLfYG0_RkI" %}
Video: Generate shipping label
{% endembed %}

{% embed url="https://youtu.be/gDnutKazRJk" %}
Video: Generate packing slip
{% endembed %}



**b. Regenerate picklist**

Regenerate the picklist by the picker name.

{% embed url="https://youtu.be/Zbm-8Z82laY" %}
Video: Regenerate picklist
{% endembed %}



**c. Add box**

Helps select the correct box size for the order item(s).

{% embed url="https://youtu.be/V66o7vAf6HY" %}
Video: Add box
{% endembed %}



**d. Report an issue**

Choose order rejection reasons for clear communication and efficient issue tracking. Each reason triggers a unique inventory response.



{% embed url="https://youtu.be/AJHZApSiuVY" %}
Video: Report an issue
{% endembed %}



**How OMS makes inventory changes based on rejection reasons:**

{% hint style="info" %}
OMS routes orders to other stores based on product availability, shipping preferences, and routing rules.
{% endhint %}

{% hint style="info" %}
OMS automatically rejects all other order items in other orders at the store that are rejected.
{% endhint %}

* **NOT IN STOCK:** OMS sets the ATP and QOH inventory to **0** for the rejected product at the store. This ensures that no new orders are placed for the product until it is back in stock.\\



* **MISMATCH:** OMS decreases the ATP and QOH inventory by the rejected quantity. This means that the product is still available in stock, but it is not available to fulfill orders that require the specific size or color that was rejected.



* **DAMAGE:** OMS decreases the ATP inventory by the rejected quantity. This means that the product is no longer available to fulfill orders. The QOH inventory remains unchanged, as the product is still in stock, but it is damaged and cannot be sold.



* **WORN DISPLAY:** OMS decreases the ATP inventory by the rejected quantity. This means that the product is no longer available to fulfill orders, as it is worn and cannot be sold. The QOH inventory remains unchanged, as the product is still in stock.



**e. Pack orders**

Mark orders packed when order items are ready to be shipped.&#x20;

{% embed url="https://youtu.be/7UrUJ7LRkb0" %}
Video: Pack order
{% endembed %}



**f. Pack orders in bulk**

Mark all orders packed at once.&#x20;

\


***

### Completed Page

Displays a list of ready-to-ship items, allowing users to ship, unpack, and retry generating labels, and print customer letters, for each item.



**Characteristics**

1. **Unpack Orders:** Provides the capability to unpack the shipment if wrong boxes are added and the item is not available for fulfillment.
2. **Retry Generate Labels:** Users can conveniently reprint shipping labels for each item.
3. **Print Customer Letter:** The app opens a new tab to print packing slips.



<figure><img src="../.gitbook/assets/Screenshot 2023-11-01 at 5.42.34 PM (1).png" alt=""><figcaption><p>Image: Complete Orders page</p></figcaption></figure>



**Functions**



**a. Print customer letter**

Gives the flexibility to reprint customer letters for orders.

{% embed url="https://youtu.be/VuEEg_hYI9c" %}
Video: Reprint customer letter
{% endembed %}



**b. Unpack orders**

Provides users with the flexibility to unpack orders when necessary, especially in cases where incorrect boxes or items need to be corrected

{% embed url="https://youtu.be/_4vcKgJuQrE" %}
Video: Unpack orders
{% endembed %}



**c. Regenerate Shipping labels**

Gives the flexibility to generate customer letters like Packing slips for a single order.





**d. Ship order**

Marks order shipped.

{% embed url="https://youtu.be/h8hMAySgfqc" %}
Video: Ship order
{% endembed %}



**e. Ship orders in Bulk**

Marks all orders shipped in bulk



**e. Shipping label error**

Displays the error in the shipping label. \




***

### EXIM Page

Enables exporting packed orders and importing shipped orders to interact with third-party systems.



**Characteristics**

1. **Export orders:** Export orders that are packed and haven't been shipped yet. Use the exported file to send the packed order details to a carrier where shipping labels and tracking codes will be generated.
2. **Import orders:** Import shipped order details from an external system based on tracking codes. Orders that have tracking codes will automatically be shipped at the end of the day.
3. **View saved mappings:** Quick access to all saved import and export mappings.&#x20;

<figure><img src="../.gitbook/assets/Screenshot 2023-11-01 at 5.42.59 PM (1).png" alt=""><figcaption><p>Image: EXIM Page</p></figcaption></figure>

**Functions**

***

### **EXIM: Export Packed Orders page**

Export orders that are packed and haven't been shipped yet. Use the exported file to send the packed order details to a carrier where shipping labels and tracking codes will be generated.



**Characteristics**

<figure><img src="../.gitbook/assets/Screenshot 2023-11-01 at 5.54.41 PM.png" alt=""><figcaption><p>Image: Export Packed Orders page</p></figcaption></figure>



**Functions**

***



### **EXIM: Import Shipped Orders page**

Import shipped order details from an external system based on tracking codes. Orders that have tracking codes will automatically be shipped at the end of the day.

**Characteristics**

<figure><img src="../.gitbook/assets/Screenshot 2023-11-01 at 5.59.58 PM.png" alt=""><figcaption></figcaption></figure>


### **Saved mappings page**

Access and edit saved custom field mappings.

<figure><img src="../.gitbook/assets/Screenshot 2023-11-01 at 6.09.03 PM.png" alt=""><figcaption><p>Image: Saved Mappings page</p></figcaption></figure>