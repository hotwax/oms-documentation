# Inventory Cycle Count

HotWax Commerce's Inventory Count App streamlines inventory management in stores and warehouses by empowering store associates and managers to seamlessly match physical inventory with system inventory. This intuitive Progressive Web Application (PWA), accessible through browsers or icons on handheld devices, optimizes the inventory counting process. Store associates can swiftly scan products using mobile phone or tablet cameras, ensuring a precise and efficient counting process. Specific [permissions](../users/manageUser.md) are necessary for full utilization of the Inventory Count App. Store associates with `Order Fulfillment` permissions can conduct inventory counts, while store managers with `Order Fulfillment Manager` permissions have the added capability to review counts and log inventory variances.

{% hint style="info" %}
Users can log in to the Inventory Counting App only if they are [associated with a facility](../users/manageUser.md#add-facilities).
{% endhint %}

## Count Complete Inventory

Store associates periodically count real-time inventory to identify any discrepancies between physical and system inventory counts. Store associates can conduct inventory counts for specific products using the Inventory Count App through the following steps:

1. Search Product

Store associates can quickly locate products by searching products using product IDs, and SKUs from the `Search` box or utilizing the scan feature by tapping on the `Scan` button at the bottom of the page to quickly scan the product barcodes. They can also view enlarged product images by tapping on the `Image` to identify products without barcodes.

{% embed url="https://youtu.be/SEANjTlBxhQ" %}
Video: Search a product
{% endembed %}

{% embed url="https://youtu.be/vyB2zpTzvPE" %}
Video: Scan function
{% endembed %}

2. View Product Details

After locating the products for inventory counting, associates can tap on the item to view the `Product Detail` page with enlarged images and variant details.

3. Adjust Inventory Count

Once the physical counting process concludes, store associates can manually enter the counted quantities into the `Stock` field of the `Product Detail` page.

4. Update Loaction

Store associates also have the ability to view and modify the existing inventory location within the store or warehouse by selecting the `Location` field. This functionality enables store associates to confirm the accuracy of inventory placement or update the location if inventory has been relocated.

{% embed url="https://youtu.be/HtGKVOeLjyE" %}
Video: Count segment
{% endembed %}

**Show Systematic Inventory:** During inventory counting, store associates can view systematic inventory for reference. However,store managers sometimes prefer not to display systematic inventory to ensure store associates accurately count without relying on system data. To hide systematic inventory, store managers can access the `Settings` page by tapping the settings icon in the app footer. On this page, they will find a card labeled `Quantity on Hand`, providing the option to toggle the `Show Systematic Inventory` on or off. If this option is on, on the product detail page `In stock` quantity is displayed, and in case of an inventory discrepancy, `Variance` is automatically calculated and displayed.

{% embed url="https://youtu.be/JdNC7bFgHfw" %}
Video: Show Systematic Inventory
{% endembed %}

5. Save Inventory count

Store associates need to tap on the `Save` button at the bottom of the page to conclude the counting process.

## Approve Inventory Counts and Record Variance

Once store associates complete the inventory count, it undergoes review by store managers. The store managers can navigate to the `Upload` page from the footer on the bottom of the app to view all submitted inventory counts. Here, they can review and either approve or reject the inventory count performed by the store associates.

A. Store managers can approve the inventory count by tapping the blue `Upload` icon situated at the bottom right of the page. This action prompts a confirmation pop-up card, where managers can tap on the `Upload` button to approve the inventory count. Upon approval, the inventory count updates within HotWax Commerce OMS, and subsequently reflects on the e-commerce platform and ERP systems.

{% embed url="https://youtu.be/Q9QAKSx2YYY" %}
Video: Upload function
{% endembed %}

B. In cases where the store manager is unsatisfied with the counting process, inventory counts can be rejected by tapping on the `Remove` button below the items.

{% embed url="https://youtu.be/GcQ0j2qNyKY" %}
Video: Remove function
{% endembed %}

## Adjust Inventory Variance

At times, store managers may not require a complete inventory count to address inventory variances. For instance, in case an item gets damaged, prompt adjustments are vital to prevent potential overselling on the e-commerce platform. Store managers can log inventory variances for specific products using the Inventory Count App through the following steps:

1. Locate the product and access the `Product Details` page — following a process similar to inventory counting.

2. Within the `Product Detail` page, a dedicated `Variance` tab is available for logging inventory discrepancies below the product image.

3. Store managers can input the desired increment or decrement of inventory from the total stock in the `Quantity` field. For instance, entering 5 adds to the inventory in case of finding any misplaced item, while -5 subtracts from the count due to damage or loss.

4. Store managers are also prompted to select a `Variance Reason` from a dropdown menu, detailing the specific cause such as 'damaged' or 'found.'

5. Upon completion, tapping `Log Variance` button updates the inventory count in the HotWax Commerce OMS and subsequently on the e-commerce platform and ERP systems.

{% embed url="https://youtu.be/Cg3pRqpxGfM" %}
Video: Variance segment
{% endembed %}
