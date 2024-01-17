# Inventory Receiving

HotWax Commerce’s Inventory Receiving App empowers stock associates to efficiently receive ASN, Purchase Orders, and Returns and update the inventory count in HotWax Commerce Order Management System.

The Inventory Receiving App enables retailers to precisely track the physical inventory received at their locations and recording them in the system. For example, if a store anticipates 100 shirts in an incoming shipment but physically receives only 90, the app facilitates in recording exact inventory counts. This distinction is crucial as it prevents potential order rejections during fulfillment due to discrepancies in inventory levels.

Additionally, the Inventory Receiving App streamlines the receiving process by allowing store associates to efficiently enter or scan products using handheld devices like mobile phones or iPads. As a Progressive Web App (PWA), it offers flexible browser-based access or can be easily saved as an icon on store associates' devices, providing convenient one-click accessibility. This adaptability ensures a seamless and expedited inventory-receiving experience, enhancing overall operational efficiency.

## Receive ASN

**1. Locate ASN:**

The first page users see when they log into the app is the `Shipments` page which houses a complete list of ASN receivied from ERP or WMS. To locate specific ASN, store associates can scan the ASN barcode from the physical copy received along with the package. Store associates can also manually input the ASN ID in the `Search` box to locate the shipment.

{% hint style="info" %}
Store associates can log in to the Inventory Receiving App only if they are [associated with a facility.](../users/manageUser.md#add-facilities)
{% endhint %}

{% embed url="https://youtu.be/MUkSgK9VrfY" %}
Video: Search shipments
{% endembed %}

**2. View ASN Details:**

Once ASN is located, store associates can tap to view the `ASN details` including SKUs along with their names, SKU codes, images, and expected inventory counts.

**3. Locate Items:**

The inbound shipments generally contain multiple product items, store associates can either scan individual product barcodes or search SKUs to locate specific items and start receiving. In case you are not managing barcodes, tap to the `image icon` to see the enlarged to easily identify the product before receiving.

{% embed url="https://youtu.be/OwVIBaKY4ds" %}
Video: Search shipment items
{% endembed %}

{% embed url="https://youtu.be/U8TrEK2xL44" %}
Video: Scan items
{% endembed %}

**4. Receive Items:**

If store associates have verified that the physical inventory count matches the anticipated inventory in the ASN, they can tap on the `Receive All` button to accept the entire received inventory at once.

{% embed url="https://youtu.be/2Cq1HfctoL0" %}
Video: Receive all items
{% endembed %}

If store associates encounter any discrepancy between the physical count and the anticipated inventory, they can manually input the received quantities. Retailers have the option to mandate store associates to scan the unique barcode of each SKU for enhanced accuracy and inventory management.

{% embed url="https://youtu.be/nosDR5BY9W8" %}
Video: Enter quantity
{% endembed %}

When receiving inventory, retailers can also select the pre-defined location in the store where the inventory will be put away. This will help in the picking process as the picker would have easy access to the item during fulfillment.

{% embed url="https://youtu.be/CKL2uOo715A" %}
Video: Location
{% endembed %}

**5. Save and Finalize:**

Store associates need to tap on the `double checkmarks` at the bottom of the page to conclude the receiving process and update the inventory in the system. The inbound shipments are removed from the page only when inventory for all the products is received.

{% embed url="https://youtu.be/sNETVOLPNEU" %}
Video: Complete shipment
{% endembed %}

## Receive Purchase Orders

Purchase orders are buyer-generated documents detailing product specifics, quantities, and prices. Retailers use these purchase orders to order from suppliers. Upon delivery, retailers need to verify the received inventory against the purchase order, ensuring accurate shipments and inventory counts.

The process of receiving purchase order is similar to [receiving inbound shipments](receiving.md#receive-asn). Store associates need to navigate to the `Purchase Orders` page and search for the `Purchase order ID` to start the receiving process.

Store associates can also see the status of purchase orders i.e. whether they are created or approved in the `Purchase Orders` page. The comprehensive details of all the purchase orders received is also available for the store associates for future reconcilations.

{% embed url="https://youtu.be/1WX_kG5IZYs" %}
Video: Receiving history
{% endembed %}

{% embed url="https://youtu.be/BF7ddyxyGkw" %}

## Receive Returns

Retailers who accept return at their stores need to accurately receive and record the returned inventory for potential resale on e-commerce.

Store associates can lookup the incoming returns by navigating to the `Returns` page and identifying the returns with the `Return ID`. Store associates can receive the returned items similarly to the [inbound shipments](receiving.md#receive-asn).\\

## Handle Discrepancies:

**Receiving Extra Inventory**

Sometimes stores receive more items than expected, leading to scenarios where, for instance, a store might receive 110 product items instead of the anticipated 100. Shipping back the extra items incurs additional costs for the retailer, necessitating a solution to receive this surplus inventory effectively.

HotWax Commerce facilitates the receiving of extra inventory to address this concern. The progress bar highlights over-received items, turning red to identify items with excess inventory easily. Furthermore, the platform generates reports for over-received items, allowing retailers to receive this extra inventory efficiently within their ERP system.

<figure><img src="../.gitbook/assets/Excess Inventory Received.png" alt="" width="563"><figcaption><p>Receiving Extra Inventory</p></figcaption></figure>

\
\
**Receiving Unexpected Items**

At times, stores receive items that differ from the recorded shipment. This discrepancy could arise from mispicking at the warehouse or inadvertently shipping more items than intended. When stores unexpectedly receive these extra Items, they require a process to receive and record these additional items effectively.

{% embed url="https://youtu.be/UQ4XKINQeTE" %}
Add Shipment Item
{% endembed %}

\\
