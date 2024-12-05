# Getting Started with HotWax Commerce

HotWax Commerce is a cloud-based Omnichannel Order Management System that provides retailers with the best return on their inventory by facilitating omnichannel solutions such as Same-Day Buy Online Pick-Up In Store (BOPIS), Buy Online Return In Store, Ship From Store, and Pre-Orders to increase conversion rates and profitability. Here’s how HotWax Commerce fits into your tech ecosystem:

<figure><img src=".gitbook/assets/HotWaxCommerce.png" alt=""><figcaption><p>HotWax Commerce in your tech stack</p></figcaption></figure>

HotWax Commerce integrates with multiple systems present in your tech stack, like eCommerce, ERP, WMS, and POS, creates a single sellable inventory count, syncs inventory in real time across sales channels, and efficiently routes online orders to the best fulfillment locations.

Order and inventory management are at the heart of omnichannel retailing. Let’s see an overview of how HotWax Commerce supports these operations:

### Order Management

#### Source of Orders and Returns

<figure><img src=".gitbook/assets/OrdersandReturns.png" alt=""><figcaption><p>Downloading orders and returns</p></figcaption></figure>

HotWax Commerce downloads orders and returns from sales channels like eCommerce and POS.

**eCommerce Orders**

HotWax Commerce manages key processes such as downloading online orders, routing them to optimal fulfillment locations, and ensuring timely fulfillment.

<figure><img src=".gitbook/assets/HotWaxFulfillment.png" alt=""><figcaption><p>Order fulfillment</p></figcaption></figure>

HotWax Commerce handles various types of eCommerce orders, including standard orders, BOPIS (Buy Online, Pick Up In Store) orders, Pre-Orders, and Backorders. Here’s a brief explanation of each type:

*   **Standard orders:** Standard shipping orders placed online for home delivery. Orders that satisfy the criteria set for auto-approval are approved. The order routing engine then brokers these orders and allocates them to optimal fulfillment locations based on the predefined routing configurations. For orders allocated to a store, HotWax Commerce provides a dedicated `Fulfillment App` to help stores easily fulfill online orders. Learn more about the [store fulfillment lifecycle](https://docs.hotwax.co/documents/v/learn-hotwax-oms/business-process-models/store.fulfillment).

    For orders allocated to a warehouse, HotWax Commerce syncs the fulfillment details with the WMS or ERP systems like NetSuite when leveraged for warehouse fulfillment. Learn more about the [warehouse fulfillment lifecycle](https://docs.hotwax.co/documents/v/learn-hotwax-oms/business-process-models/warehousefulfillmentlifecycle).
* **BOPIS orders:** Orders placed online with the intention of picking up the items in-store. HotWax Commerce `Integration App` adds a custom tag on order line items to specify that it is a BOPIS order. HotWax Commerce then checks the custom tag on orders. If the tag is present on an order, it is automatically sent to the customer's preferred pickup location without brokering since the fulfillment location is pre-selected for BOPIS orders by customers. For BOPIS orders, HotWax Commerce provides a dedicated `BOPIS Fulfillment App` to help stores quickly prepare the order for customer pick-up.
* **Pre-Orders:** Orders placed for new launch products that are not yet available for delivery and will be available on a future promised date.
* **Backorders:** Orders placed for products that are currently out-of-stock, with delivery scheduled for a future promised date. HotWax Commerce `Integration App` adds a custom tag on order line items to specify that it is a Pre-Order or a Backorder. HotWax Commerce then checks the custom tag on orders. If the tag is present on an order, a dedicated parking holds all pre-orders/backorders until their physical inventory is received, and HotWax Commerce automatically releases and brokers them once the inventory arrives just like standard orders. For Pre-Orders and Backorders, HotWax Commerce also provides a dedicated Pre-Order Management App to help merchandisers manually release them for fulfillment based on their order fulfillment strategies. Learn more about the [order lifecycle in HotWax Commerce](https://docs.hotwax.co/documents/v/learn-hotwax-oms/business-process-models/orderlifecycle)

HotWax also syncs eCommerce order data to ERP systems, ensuring accurate accounting and posting.

{% hint style="success" %}
Once orders are fulfilled, HotWax Commerce synchronizes fulfillment updates with the eCommerce platform.
{% endhint %}

**POS Sales**

HotWax Commerce downloads POS sales to provide a unified view of both online and in-store sales. HotWax also syncs this data to ERP systems, ensuring accurate accounting and posting.

**Returns**

Both eCommerce and POS returns are downloaded in HotWax Commerce for reconciliation purposes. HotWax also syncs this data to ERP systems, ensuring accurate accounting and posting.

Learn more about the [return lifecycle in HotWax Commerce](https://docs.hotwax.co/documents/v/learn-hotwax-oms/business-process-models/returns-lifecycle)

### Inventory Management

HotWax Commerce becomes the ultimate authority on inventory availability and prevents overselling and underselling on eCommerce platforms. Let’s see how:

<figure><img src=".gitbook/assets/HotWaxInventory.png" alt=""><figcaption><p>Inventory management</p></figcaption></figure>

The inventory count of a product is regularly updated due to various factors such as customer purchases made both in-store and online, as well as the receipt of new inventory. These transactions are recorded across different systems.

#### Sources of Inventory

HotWax Commerce integrates with ERP, POS, and WMS, to create a unified pool of inventory. HotWax Commerce receives daily inventory feeds from the ERP system and real-time inventory updates from the POS system to maintain up-to-date inventory data. Additionally, in cases where an ERP system isn't in use, HotWax Commerce also receives inventory feeds from WMS and POS systems.

After synchronizing inventory totals from all systems, HotWax Commerce calculates the Online ATP for eCommerce by deducting any inventory set aside as safety stock, thresholds, orders in the brokering queue, and inventory at non-participating facilities from the physical ATP.

Learn more about the [inventory lifecycle in HotWax Commerce](https://docs.hotwax.co/documents/v/learn-hotwax-oms/business-process-models/inventorylifecycle)

#### Inventory Receiving in Stores

HotWax Commerce provides a dedicated `Receiving App` to receive transfer orders and purchase orders at store locations. Any new inventory received in stores is automatically included in the sellable inventory in HotWax Commerce, helping to prevent underselling and ensuring that eCommerce platforms always reflect up-to-date inventory counts.

#### Inventory Adjustments in Stores

HotWax Commerce provides a dedicated `Cycle Counting App` to record inventory adjustments in stores. Store associates periodically perform cycle counting at stores for inventory reconciliation. The app lets store associates record variances due to discrepancies between the system's inventory records and the actual physical counts.

While cycle counting in stores follows a periodic schedule and requires approval, stores often encounter sudden inventory discrepancies in various scenarios. The app also lets them record unexpected inventory variances, for example, if store associates identify a damaged unit at their location, they can directly record a variance of the damaged inventory.

Inventory variances recorded in stores are automatically accounted for in the sellable inventory in HotWax Commerce, helping to prevent overselling and ensuring eCommerce platforms always reflect up-to-date inventory counts.

### BIRA

HotWax Commerce BI Reports & Analytics (BIRA) delivers detailed reports and dashboards on products, orders, and inventory. Each dashboard combines multiple reports to provide a comprehensive overview, enabling key personnel to understand and manage all business aspects effectively. These tools offer clear insights into performance metrics, trends, and resource allocation, facilitating data-driven decision-making.

### OReSA

HotWax Commerce Omnichannel Retail Sales Auditing tool (OReSA) automatically reconciles sales, returns, as well as appeasements from OMS, eCommerce, POS, and bookkeeping systems like ERP. This helps financial teams close financial periods within minutes instead of the typical hours or days.

OReSA also offers automated sales audit reports that provide insights into discovered data discrepancies so that finance teams can quickly rectify them.
