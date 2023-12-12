# Inventory Count

HotWax Commerce's Inventory Count App streamlines inventory management in stores and warehouses by empowering store associates to seamlessly match physical inventory with system inventory. This user-friendly Progressive Web Application (PWA), accessible via browsers or handheld devices, simplifies inventory counting. Store associates can efficiently scan products using mobile phones or external devices, ensuring accuracy and speed in the counting process.

Within this app, store associates have two options to reconcile inventory:

- Perform Complete Inventory Count
- Adjust Inventory Variances


## Count Complete Inventory

Store associates periodically count real-time inventory to identify any discrepancies between physical and system inventory. Store associates who are associated with a facility can conduct inventory counts for specific products using the Inventory Count App through the following steps:

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

Store associates also have the ability to access and modify the recorded location of inventory within the store or warehouse by tapping the `locations` field. This feature allows adjustments if discrepancies arise between the system's recorded location and the actual placement of inventory, ensuring precise tracking and placement accuracy.

{% embed url="https://youtu.be/HtGKVOeLjyE" %}
Video: Count segment
{% endembed %}

**Show Systematic Inventory-** During inventory counting, store associates can view systematic inventory for reference. However, retailers sometimes prefer not to display systematic inventory to ensure store associates accurately count without relying on system data. To hide systematic inventory, users with `Order Fulfillment Manager` permissions can access the `Settings` page by clicking the settings icon in the app footer. On this page, they will find a card labeled `Quantity on Hand`, providing the option to toggle the `Show Systematic Inventory` on or off.

4. Save Inventory count

Store associates need to tap on the `Save` button at the bottom of the page to conclude the counting process.

## Approve Inventory Counts and Record Variance

Once store associates complete the inventory count, it undergoes review by users `Order Fulfillment Manager` permissions. The user can view all submitted inventory counts by navigating to the `Upload` page from the bottom of the footer. Here, they can cross-verify the physically counted inventory against the systematic inventory and either approve or reject the count performed by the store associates.

A. Managers can approve the inventory by tapping the blue `Upload` icon situated at the bottom right of the page. This action prompts a confirmation pop-up card, where managers select the `Upload` button to approve the inventory count. Upon approval, the inventory updates within HotWax Commerce and subsequently reflects on the e-commerce platform and ERP systems.

{% embed url="https://youtu.be/Q9QAKSx2YYY" %}
Video: Upload function
{% endembed %}

B. In cases where the manager is unsatisfied with the counting process, inventory counts can be removed by tapping on the `Remove` button below the items.

{% embed url="https://youtu.be/GcQ0j2qNyKY" %}
Video: Remove function
{% endembed %}

## Adjust inventory variance

At times, store associates may not require a complete inventory count to address inventory variances. For instance, in cases an item gets damaged, prompt adjustments are vital to prevent potential overselling on the e-commerce platform.

To address inventory variances, store associates need to locate the product and access the `Product Details` page —following a process similar to inventory counting.

Within the `Product Detail` page, a dedicated `Variance` tab is available for logging inventory discrepancies.

Store associates can input the desired increment or decrement of inventory from the total stock in the `Quantity` field. For instance, entering 5 adds to the inventory in case of finding any misplaced item, while -5 subtracts from the count due to damage or loss.

Associates are also prompted to select a `Variance Reason` from a dropdown menu, detailing the specific cause such as 'damaged' or 'found.'

Upon completion, tapping `Log Variance` button updates the inventory count in the HotWax Commerce and subsequently on the e-commerce platform and ERP systems.

{% embed url="https://youtu.be/Cg3pRqpxGfM" %}
Video: Variance segment
{% endembed %}

> **Note:** Inventory adjustments do not require approval from store managers. Only users with `Order Fulfillment Manager` permissions can log inventory variances.






