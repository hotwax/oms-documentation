# Product Inventory View Page

The `Product Inventory View Page` within HotWax Commerce offers users a comprehensive snapshot of a product's inventory information. This feature is crucial for retailers as it empowers them to make informed decisions regarding sales and overall inventory management for their products.

**Step-by-Step Usage Instructions:**

1. Within the Hamburger Menu of HotWax Commerce, find and select the `Warehouse` option from the list of menu choices.
2. Once in the Warehouse section, a submenu will appear. Click on `Inventory` from this submenu to proceed.
3. On the Find Product Inventory page, you'll find a list of available products. Click on the product name of the desired item to open its Product Inventory View Page.

**Alternate Access Method:**

1. Click on the `PIM` section, then select `Products` to access the `Find Products` Page.
2. Browse through the list of available products or search for the product name. Click on the name of the desired product to open its `Product View` Page.
3. On the Product View Page, locate and click on the `View Inventory` button to access the Product Inventory View Page, offering comprehensive inventory information for the selected product.

### View comeplete detail of product's inventory

Navigate to the `Overview` section on the `Product Inventory View` page to access essential product information, including product name, SKU, size, and color variants.

**Sections within Overview**

**A. Order Queue:** This section displays orders that currently lack allocated inventory. Orders in different queues, such as brokering queue, unfillable hold queue, pre-order queue, and backorder queue, are listed here. Explore further details about these queues [here](../../facilities/manage-parkings.md).

**B. Threshold:** Retailers can establish a global threshold for products through the `Threshold Management` app. This quantity is subtracted from the overall Quantity on Hand (QOH) to prevent overselling on e-commerce platforms. Users can see the inventory that is subtracted from the overall QOH as the threshold.

**C. Physical ATP:** HotWax Commerce calculates Physical Available to Promise (ATP) by considering various factors, such as safety stock, threshold, reserved quantity, and orders in the queue. The excluded ATP comprises safety stock and reserved quantities, with adjustments made at the facility level.

_Example_: Consider a product `blue shirt` from Brand ABC with a QOH of 100 units. If 10 units are excluded ATP, 5 units are the threshold, and 5 units are in the brokering queue, the ATP can be calculated as follows:

ATP = QOH - (Excluded ATP + Threshold + Orders in brokering queue) ATP = 100 - (10 + 5 + 5) = 100 - 20 = 80

**D. Online ATP:** Online ATP is derived by subtracting the excluded facilities' ATP, i.e., facilities not participating in online fulfillment, from the total ATP. The excluded facilities' ATP can be different for different online facility groups. For instance, if the total ATP is 100 across 10 facilities and 5 facilities with a cumulative quantity of 60 are excluded for online selling on Shopify, the Shopify Online ATP can be calculated as: Shopify Online ATP = ATP - Excluded Facilities’ ATP = 100 - 60 = 40

{% hint style="info" %}
Online ATP may vary for each sales channel.
{% endhint %}

### View Item Inventory History

The `item inventory` section allows users to get a detailed breakdown of the received inventory at each facility, along with the date and time of each transaction and where the inventory is located within the facility.

**View `Inventory Logs`**

The `Inventory Logs` feature within the item inventory section offers users the ability to access detailed logs of inventory transactions for the selected product across all facilities. Users can track inventory movements, monitor changes, and identify any discrepancies or trends promptly.

**Step-by-Step Usage Instructions:**

1. On the `View Product inventory` page, navigate to the item inventory section
2. Locate the `Inventory Logs` checkbox and check the box to activate the inventory logs feature.
3. Once activated, detailed logs of each inventory transaction for the selected product across all facilities will be displayed.
4. Review these logs to track inventory movements, monitor changes, and identify any discrepancies or trends.
5. If you want to view inventory details for a specific facility, use the facility dropdown menu to select the desired facility.
6. You can click on the `Inventory Item ID` available in the records to view the complete breakdown of when and where the inventory is received.

## Record Variance

The `Record Variance` feature” allows users to manually document any discrepancies in inventory levels and manage adjustments effectively. This feature is crucial for maintaining accurate inventory records and ensuring transparency.

**Step-by-Step Usage Instructions:**

1. Within the View `Products Inventory page`, locate and click on the `Record Variance` function, available at the top of the page.
2. This will open a new form, select the relevant facility where the inventory adjustment is taking place from the dropdown menu.
3. Choose the specific location within the selected facility and enter the quantity of the inventory adjustment.
4. From the dropdown menu, choose the relevant reasons for the inventory variance. This could include factors such as damaged goods, discrepancies in shipment, or theft.
5. After confirming all details are accurate, click the `Save` button to record the variance in the system.

{% embed url="https://youtu.be/aFldyrTTU7c" %}
Video: Record Variance
{% endembed %}
