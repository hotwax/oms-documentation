# How does HotWax Commerce Ensure Accurate Inventory is Synchronized to Shopify?

HotWax Commerce provides a unified view of inventory by seamlessly connecting with various technology systems used by retailers, including Enterprise Resource Planning (ERP), Point of Sale (POS), and Warehouse Management Systems (WMS). HotWax Commerce ensures that inventory updates from all these systems are synchronized to support various business scenarios.

**In-store sales:** It is necessary to reduce the inventory counts of products in HotWax Commerce during in-store sales.

**In-store receiving:**  Inventory counts of products must be increased in HotWax Commerce when stores receive products through purchase orders, transfer orders, or returns.&#x20;

**Inventory variances:** If there is missing or defective inventory, it should be reported to HotWax Commerce. Similarly, if lost inventory is found, new inventory should be reported to HotWax Commerce.

**Warehouse receiving:** HotWax Commerce requires timely notification of new inventory when warehouses or fulfillment centers receive purchase orders or returns.&#x20;

HotWax Commerce determines the "Available to Promise (ATP)" or the amount of inventory that can be sold and then sends it to Shopify. This makes HotWax Commerce the ultimate authority on inventory availability.



**How Does Hotwax Commerce Calculate The “Available To Promise” Before Pushing It To Shopify?**

HotWax Commerce syncs the inventory levels of products available on both HotWax Commerce and Shopify. The product ID from Shopify is stored in HotWax Commerce and serves as a unique identifier to match the products in both systems. HotWax Commerce considers various factors, such as safety stock, threshold, reserved quantity (inventory allocated to sales orders but not fulfilled), orders in the brokering queue (orders that are captured but inventory is not allocated), and excluded facilities, when calculating ATP.&#x20;

Let’s take a look at an example:

The product "blue shirt" from Brand ABC has been assigned plate number 100 QOH, and it has already received orders for 10 of them, and inventory is allocated for 5 sales orders. The ATP can be calculated using the following formula.

\
ATP = QOH - (Reserved quantities + Safety stock + Threshold + Orders in brokering queue + Excluded facilities’ ATP)

Given:&#x20;

<table data-header-hidden data-full-width="false"><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Quantity on hand</td><td>100 Units</td></tr><tr><td>Reserved quantities</td><td>5 Units</td></tr><tr><td>Safety stock</td><td>5 Units</td></tr><tr><td>Threshold</td><td>5 Units</td></tr><tr><td>Orders in brokering queue</td><td>5 Units</td></tr><tr><td>Excluded facilities' ATP</td><td>5 Units</td></tr></tbody></table>

Hence,

$$
ATP = 100 - (5+5+5+5+5)
        = 100 - (25)
        = 75
$$



HotWax Commerce will now push 75 units to Shopify as sellable inventory for online orders.&#x20;



**Syncing Inventory From HotWax Commerce To Shopify**

There are two ways to update the inventory count on Shopify: through webhooks or batch jobs.

1. You can keep your inventory data synced in real-time with Shopify's webhooks. By subscribing to the 'inventory level update' webhook, you can trigger synchronization whenever there's an inventory update in HotWax Commerce. Keep in mind that [Shopify can't guarantee webhook delivery](https://shopify.dev/apps/webhooks#limitation), so it's important to periodically reconcile your data with Shopify to ensure everything stays up-to-date.\

2. HotWax Commerce suggests using batch jobs at regular intervals to sync inventory in bulk, ensuring no product updates are missed. To accomplish this, HotWax Commerce provides the option to schedule the 'Upload recent inventory change' job, which follows three steps to synchronize inventory.&#x20;

* &#x20;**Identifying Products with Inventory Changes:** The 'Upload recent inventory change' job examines the inventory records of HotWax Commerce's products. It identifies products that have undergone inventory changes since the last synchronization.\
  \
  In the following example, there are five products with inventory records in HotWax Commerce:

<table><thead><tr><th width="163.33333333333331">Product List</th><th>Inventory Count at 1:00 PM</th><th>Inventory Count at 1:15 PM</th></tr></thead><tbody><tr><td>Product A</td><td>100</td><td>95</td></tr><tr><td>Product B</td><td>50</td><td>50</td></tr><tr><td>Product C</td><td>25</td><td>30</td></tr><tr><td>Product D</td><td>100</td><td>100</td></tr><tr><td>Product E</td><td>80</td><td>80</td></tr></tbody></table>

At 1:15 PM, the job that runs every 15 minutes detects that there are inventory changes for Product A and Product C that require syncing with Shopify after the 'Upload recent inventory change' task is executed.

* **Comparing Inventory counts between HotWax Commerce and Shopify:** To update its inventory records, HotWax Commerce initiates an [API call](https://shopify.dev/docs/api/admin-rest/2023-04/resources/inventorylevel#get-inventory-levels?location-ids=655441491) to retrieve information from Shopify about products that have undergone changes in HotWax Commerce. The inventory counts for these products in Shopify are then compared with the inventory counts that HotWax Commerce has on file.

<table><thead><tr><th width="147">Product List</th><th width="238">Inventory Count in Shopify</th><th width="331">Inventory Count in HotWax Commerce</th><th width="198">Inventory Difference</th></tr></thead><tbody><tr><td>Product A</td><td>100</td><td>95</td><td>-5</td></tr><tr><td>Product C</td><td>25</td><td>30</td><td>5</td></tr></tbody></table>

* Uploading accurate inventory on Shopify: After comparing inventory changes, the 'Upload recent inventory change' job records the difference and generates a GraphQL file for the affected products. This file is then uploaded to Shopify, which reads it and updates the '[available adjustments](https://shopify.dev/docs/api/admin-rest/2022-10/resources/inventorylevel#post-inventory-levels-adjust)' field to either add or deduct inventory based on the changes.

<table><thead><tr><th width="152">Product List</th><th width="236">Inventory Count in Shopify</th><th width="219">Available Adjustments</th><th width="309">Updated Inventory Count in Shopify</th></tr></thead><tbody><tr><td>Product A</td><td>100</td><td>-5</td><td>95</td></tr><tr><td>Product C</td><td>25</td><td>5</td><td>30</td></tr></tbody></table>

<figure><img src=".gitbook/assets/Recent Inventory change.png" alt=""><figcaption><p><em>Fig. 1(i): Sync Inventory for Products with Recent Inventory Changes</em></p></figcaption></figure>

\
When updating inventory on Shopify, HotWax Commerce ensures that the location in Shopify matches the location in HotWax Commerce for merchants. If users utilize a non-Shopify POS, all physical locations in HotWax Commerce will be mapped to one virtual location in Shopify. However, if merchants use Shopify POS and have multiple store locations and an eCom location for online orders, all Shopify locations will be mapped one-to-one with HotWax locations. This means that any inventory updates made to the retail stores and warehouses in HotWax will be reflected in the specific store locations and eCom locations in Shopify for merchants.\


**When do merchants need to Hard Sync inventory for all the products from HotWax Commerce to Shopify and how to do it?**\


Sometimes, there may be a slight delay of a few milliseconds between two inventory update jobs from other systems. For instance, if job-1 runs at 1:00:00 PM and job-2 runs at 1:15:00 PM, job-2 checks the inventory changes that happened between 1:00:00 PM and 1:15:00 PM.&#x20;

However, if a sale occurs in-store at 12:59:59 PM and HotWax Commerce receives an inventory update from the POS at 1:00:01 PM, both jobs won't detect the changes in inventory.&#x20;

To prevent this issue, merchants can use 'Hard Sync' job once a day to synchronize the inventory counts of all products from HotWax Commerce to Shopify. The synchronization is achieved through the GraphQL file, similar to how inventory synchronization is performed for products with recent updates.

<figure><img src=".gitbook/assets/Hard Sync.png" alt=""><figcaption><p><em>Fig. 2: Hard Sync inventory to remove any discrepancy</em></p></figcaption></figure>



### How To Set Up Locations In HotWax Commerce And Shopify

HotWax Commerce sets up all retail stores and warehouses as Locations. For retailers using Shopify eCommerce and third-party Point of Sale systems, only one Location is created on Shopify. This Location aggregates the inventory counts of all products available for sale on Shopify.&#x20;

For retailers using Shopify POS in both retail stores and eCommerce, multiple Locations are created on Shopify. One Location is created for the eCommerce store, while each physical store also has its own Location on Shopify. The Location for the eCommerce store aggregates inventory counts for all products from all Locations. Each retail store Location on Shopify has inventory counts specific to that location.\


**Set up with Non-Shopify POS**

When syncing inventory data between HotWax Commerce and Shopify, HotWax Commerce combines inventory counts from all storage locations (such as stores and warehouses) and sends the total inventory count of products to the default location in Shopify.

<figure><img src=".gitbook/assets/Many to One Mapping (2).png" alt=""><figcaption><p><em>Fig. 1: Shopify and HotWax Commerce setup with Non-Shopify POS</em></p></figcaption></figure>



**Set up with Shopify POS**

Shopify's locations are mapped one-to-one with HotWax Commerce's locations. HotWax Commerce sends the sellable inventory to Shopify, captures orders from Shopify, routes them to fulfillment location, and updates order statuses to Shopify once they are fulfilled. When HotWax Commerce is used, its recommended to disable “online order fulfillment from store locations” on Shopify.

Periodic synchronization of inventory counts for all products at both the default location and store locations occurs from HotWax Commerce to Shopify.

<figure><img src=".gitbook/assets/One to One mapping.png" alt=""><figcaption><p><em>Fig. 2 : Shopify and HotWax Commerce setup with Shopify POS</em></p></figcaption></figure>

