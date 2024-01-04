# Audit

Merchandisers require a comprehensive overview of their purchase order catalog to grasp the listing status of pre-orders, determining when these pre-orders will be listed after uploading. This overview also facilitates reviewing and verifying listed items, even after they're on the e-commerce platform. Merchandisers can view their complete pre-order catalog on the catalog page of the pre-order app. The Catalog page provides a consolidated view of all items listed in pre-orders. The catalog page allows users to locate the products they want to see detailed information by searching for products using Product name, Product ID, or Product keywords. Users can also select the "Pre-order" or "Backorder" buttons to view items under their respective categories.

Once a merchandiser identifies a desired item, clicking on it leads to the `product detail` page. This page facilitates an audit of the pre-order catalog through the following steps:

1. Variants View: Merchandisers can explore all product variants, such as colors and sizes, by clicking on each variant to access specific information.
2. Verify Pre-Order Listing Details:

* Pre-order Eligibility: Check the product's qualification for the presell category based on future and current inventory. If a product is eligible for presell the eligibility shows `Yes` in the field. The products are delisted based on the pre-set rules. If your product is not eligible for listing check whether it allows all the pre-requisite criteria for listing.
* Verify Category: Confirm if the product is correctly categorized by checking for the ✅ icon in the UI.
* Verify Shopify Listing Status: Ensure the product is listed on all associated Shopify stores. If not listed, verify whether the respective job has run to push listing data to the Shopify Store.
* Verify presell Timeline: Review each eligible pre-order product for a future promise date. Auditors can monitor the timeline to observe when the preselling commenced and ceased, and the reasons behind halting the preselling process.

3. Active Purchase Orders- This card offers complete information if there’s any purchase order for this product that is scheduled to arrive and is not completed yet. The Active Purchase Order Page offers the following information:

* Pre-selling category: This field shows whether the product is in pre-order or backorder
* Ordered value: Check how many quantities are ordered in this purchase order
* Available: Check if there’s already a purchase order received for the same product and if yes what is the current status of the inventory.
* Corresponding sales orders: Check how many sales orders have already been received for this product
* Total PO items: Check how many items are going to be received in this purchase order
* Total PO ATP: how many available to promise inventory can be deduced from this PO. if the merchandiser has added any order buffer, yes then the ATP for the PO will be less than the incoming inventory

4. Online ATP calculation- This card offers the complete inventory explainability about how the pre-order item reaches the online ATP from the ordered quantity., This card contains the following information:

* Online ATP: The inventory available to promised online or the inventory on which the pre-orders can be taken will be visible in this field.
* Quantity on Hand: The total inventory that the retailer receives at the physical location will be visible in this field.
* Excluded ATP: Retailers can view how much inventory is excluded from the quantity on hand. The inventory can be excluded due to, already received online orders on it, the inventory also may have an order buffer which serves as safety stock for pre-orders.
* Reserve Inventory- This toggle allows Hotwax Commerce to reserve the inventory in the brokering queue when accounting for ATP calculation. Retailers who use Shopify as inventory master for pre-order computation need to toggle these settings off. Shopify already reduces the inventory at the time of the order's arrival. HotWax Commerce does not need to reduce the inventory from the ATP at the time of fulfillment otherwise it may result in double inventory deductions.
* Hold Physical Inventory: Shopify retailers managing Pre-Order inventory balance it between eCommerce and physical stores. For retailers with brick-and-mortar stores, HotWax Commerce allows a Hold Physical Inventory setting. This setting reserves excess Pre-Order stock for physical stores before pushing surplus to eCommerce. For example, if the 100 inventory is received for 80 online orders, the remaining 20 won’t be immediately available online to sell as available products. Instead, the retailer can hold the surplus inventory exclusively for their offline customers.

5. Related Job Information: Auditors have access to all product listing-related jobs, including their last execution time and upcoming run schedules. This quick access allows auditors to verify the completion of pre-sell computations, brokerage timelines, and fulfillment release schedules. Merchandisers can efficiently trigger or halt jobs by clicking on their respective names.
6. Shopify Shop Listing Status: Auditors can track product listings and delistings across Shopify stores. In case of any discrepancies due to job failures causing inaccurate listings or delistings, this information helps identify errors. Merchandisers can investigate the issue manually and resolve it to ensure accurate product status on Shopify.

{% embed url="https://youtu.be/fRiBO45HYJs" %}
Audit Product's Pre-Order Status
{% endembed %}
