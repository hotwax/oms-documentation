# Audit

Merchandisers need a clear picture of their presell catalog to understand the status of pre-orders and back orders. This helps them figure out when these pre-orders will show up on Shopify. This overview also lets them check and confirm listed items, even after they're on the e-commerce platform.

To see their complete presell catalog, merchandisers can go to the `catalog` page through the left menu in the pre-order app.

The `Catalog` page shows all items in pre-orders or backorders in one place. On the right side, users can see when the last pre-order computation job commenced and when will the next job run.

Users can search for product SKUs for which they want to audit by their SKU, Product name, Product ID, or keywords in the search bar. They can also filter products by clicking `Pre-order` or `Backorder` to see items in those categories. Only items in those categories will appear in the filtered list. Products not added to the catalog won’t show up in the search results.

Once a merchandiser identifies their desired SKU, clicking on the product leads to the `product detail` page. This page facilitates an audit of the pre-order catalog through the following steps:

1. Variants View: Auditors can explore all product variants, such as colors and sizes, click on each variant to access specific information about that SKU.
2. Verify Shopify Pre-Order listing details such as:

* **Pre-order Eligibility:** Check the product's qualification for the presell category based on future and current inventory. Merchants will view `Yes` if product is eligible `No` if product is ineligible You can check the pre-order eligibility criteria to identify when a product is eligible for pre-order/backorder.
* **Verify Category:** Confirm if the product is correctly categorized on Shopify by checking for the ✅ icon in the UI. When the categrory is incorrect on Shopify, the auditors will see a warning sign that the product is incorrectly categorized. The incorrect categorization on Shopify is mostly due to the Job for syncing on Shopify has not commenced yet. Check Jobs for Pre-Order Catalog Synchronization with eCommerce to ensure accurate categorization.
* **Verify Shopify Listing Status:** Ensure the product is listed on all associated Shopify stores. When listed accurately it will reflect ‘listed on all stores’. If the product is not listed, check the respective job to push listing data on Shopify has run in the Job Manager App.
* **Verify Promise Date:** Every product that is eligible for pre-order will have a promise date for the future. Promise date can also be verified from the active purchase order card.
* **Verify Presell Timeline:** Review each eligible pre-order product for a future promise date. Auditors can monitor the timeline to observe when the preselling commenced and ceased, and the reasons behind halting the preselling process.

3. Verify Active Purchase Orders- Auditors can view the status of the active purchase orders for that specific products under `Verify Active Purchase Order` card. This card offers complete information if there’s any purchase order for this product that is scheduled to arrive and is not completed yet. The `Active Purchase Order` Page offers the following information:

* **Pre-selling category:** This field shows whether the product is in pre-order or backorder
* **Ordered value:** Check how many quantities are ordered in this purchase order
* **Available:** Check if there’s already a purchase order received for the same product and if yes what is the current status of the inventory.
* **Corresponding sales orders:** Check how many sales orders have already been received for this product
* **Total PO items:** Check how many items are going to be received in this purchase order
* **Total PO ATP:** Check how many available to promise inventory can be deduced from this PO. if the merchandiser has added any order buffer, yes then the ATP for the PO will be less than the incoming inventory

4. Check Online ATP computation- `Online ATP calculation` card offers the complete inventory explainability about how the pre-order item reaches the online ATP from the ordered quantity., This card contains the following information:

* **Online ATP**: The inventory available to promised online or the inventory on which the pre-orders can be taken will be visible in this field.
* **Quantity on Hand:** The total inventory that the retailer receives at the physical location will be visible in this field.
* **Excluded ATP:** Retailers can view how much inventory is excluded from the quantity on hand. The inventory can be excluded due to, already received online orders on it, the inventory also may have an order buffer which serves as safety stock for pre-orders.
* **Reserve Inventory:** This toggle allows Hotwax Commerce to reserve the inventory in the brokering queue when accounting for ATP calculation. Retailers who use Shopify as inventory master for pre-order computation need to toggle these settings off. Shopify already reduces the inventory at the time of the order's arrival. HotWax Commerce does not need to reduce the inventory from the ATP at the time of fulfillment otherwise it may result in double inventory deductions.
* **Hold Physical Inventory:** Shopify retailers managing Pre-Order inventory balance it between eCommerce and physical stores. For retailers with brick-and-mortar stores, HotWax Commerce allows a Hold Physical Inventory setting. This setting reserves excess Pre-Order stock for physical stores before pushing surplus to eCommerce. For example, if the 100 inventory is received for 80 online orders, the remaining 20 won’t be immediately available online to sell as available products. Instead, the retailer can hold the surplus inventory exclusively for their offline customers.

5. Related Job Information: Auditors have access to all product listing-related jobs, including their last execution time and upcoming run schedules. This quick access allows auditors to verify the completion of pre-sell computations, order brokering, and pre-order release jobs. Merchandisers can quickly run or cancel jobs by clicking on their respective names.
6. Shopify Shop Listing Status: Auditors can track product listings and delistings across Shopify stores. In case of any discrepancies due to job failures causing inaccurate listings or delistings, this information helps identify errors. Merchandisers can investigate the issue manually and resolve it to ensure accurate product category on Shopify.

{% embed url="https://youtu.be/fRiBO45HYJs" %}
Audit Product's Pre-Order Status
{% endembed %}
