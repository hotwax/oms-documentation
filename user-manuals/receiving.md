# Receiving

HotWax Commerce’s Inventory Receiving App empowers stock associates to efficiently receive ASN, Purchase Orders, and Returns and update the inventory count in HotWax Commerce Order Management System.

The Inventory Receiving App enables retailers to precisely track the physical inventory received at their locations and recording them in the system. For example, if a store anticipates 100 shirts in an incoming shipment but physically receives only 90, the app facilitates in recording exact inventory counts. This distinction is crucial as it prevents potential order rejections during fulfillment due to discrepancies in inventory levels.

Additionally, the Inventory Receiving App streamlines the receiving process by allowing store associates to efficiently enter or scan products using handheld devices like mobile phones or iPads. As a Progressive Web App (PWA), it offers flexible browser-based access or can be easily saved as an icon on store associates' devices, providing convenient one-click accessibility. This adaptability ensures a seamless and expedited inventory-receiving experience, enhancing overall operational efficiency.

### Receive ASN

**1. Locating ASN:**

The first page users see when they log into the app is the `Shipments` page which houses a complete list of Advanced Shipment Notices (ASN) received from ERP or WMS. To locate specific shipments, store associates can scan the ASN from barcode received along with the package. Store associates can also manually input the ASN in the 'Search' box to locate the shipment.

{% hint style="info" %}
Store associates can log in to the receiving app only if they are [associated with a facility.](users/manageUser.md#add-facilities)
{% endhint %}

{% embed url="https://youtu.be/MUkSgK9VrfY" %}
Video: Search shipments
{% endembed %}

**2. Opening Shipment Details Page:**

Upon identifying the desired shipment, store associates can select it to access comprehensive details. The detailed information includes expected SKUs with product names, SKU codes, images, and expected inventory counts.

**3. Finding Specific Products within a Shipment:**

Inbound shipments can contain multiple product items, store associates can utilize the search function or scan individual product barcodes within the shipment to pinpoint specific items. The platform's enlarged image feature aids in clearer product identification for store associates.

{% embed url="https://youtu.be/OwVIBaKY4ds" fullWidth="false" %}
Video: Search shipment items
{% endembed %}

{% embed url="https://youtu.be/U8TrEK2xL44" %}
Video: Scan items
{% endembed %}

**4. Receiving Items:**

Store associates can tap for 'Receive All' to accept the entire received inventory of an item at once, aligning it with the recorded inventory. This action increases the inventory of the product in HotWax Commerce and subsequently on e-commerce.

{% embed url="https://youtu.be/2Cq1HfctoL0" %}
Video: Receive all items
{% endembed %}

For larger quantities or instances where all inventory can't be counted together, store associates have the option to manually input the received quantities. This incremental process helps update the inventory count in the system. This feature is especially useful in cases of under-received inventory. Furthermore Retailers can also mandate store associates to scan the unique barcode of each SKU.

{% embed url="https://youtu.be/nosDR5BY9W8" %}
Video: Enter quantity
{% endembed %}

When Receiving Inventory retailers can also select the pre-defined location in the store where the inventory will be put away. This will help in the picking process as the picker would have easy access to the item during fulfillment.

{% embed url="https://youtu.be/CKL2uOo715A" %}
Video: Location
{% endembed %}

**5. Saving and Finalizing:**

Store associates need to tap on the double checkmarks at the bottom of the page to conclude the receiving process and update the inventory in the system. The inbound shipments are removed from the page only when inventory for all the Products is received.

{% embed url="https://youtu.be/sNETVOLPNEU" %}
Video: Complete shipment
{% endembed %}

### Receive Purchase Orders

Purchase orders are buyer-generated documents detailing product specifics, quantities, and prices. Retailers use these purchase orders to order from suppliers. Upon delivery, retailers need to verify the received inventory against the purchase order, ensuring accurate shipments and inventory counts.

The process of receiving purchase order is similar to [receiving inbound shipments](receiving.md#receive-asn). Store associates need to navigate to the Purchase order page and search for the Purchase order ID to start the receiving process.

Store associates can also see the status of purchase orders i.e. whether they are created or approved in the Purchase order page. The comprehensive details of all the Purchase Orders received is also available for the store associates for future reconcilations.

{% embed url="https://youtu.be/1WX_kG5IZYs" %}
Video: Receiving history
{% endembed %}

The purchase order detail page also have the option to quickly copy the Purchase Order ID to communicate with external systems.

{% embed url="https://youtu.be/BF7ddyxyGkw" %}
Video: Copy purchase order ID
{% endembed %}

### Receive Returns

Customers create return requests via mail or online, sending purchased items back to the warehouse or store. This returned inventory, physically shipped by the customer, must be accurately received for potential resale in e-commerce.

The Returns Page categorizes returns into three distinct categories:

* Created
* Received
* Canceled

Store associates can lookup the incoming return shipments by navigating to the Returns page and identifying the shipments with the Return ID. Store associates can receive the returned shipment similarly to the [inbound shipments](receiving/Receiving-incoming-shipments.md)[.](receiving.md#receive-asn)
