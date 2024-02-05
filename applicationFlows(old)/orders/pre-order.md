# Pre-order

### Introduction

{% hint style="info" %}
_Access to application is secure and permission-driven, ensuring only authoritative users can view and release orders_.
{% endhint %}

HotWax Commerce's Preorder Management App enables users to manage preorders and backorders, with planned future inventory to fulfill the orders.



**List of pages:**

1. Orders page
2. Product List page&#x20;
3. Product Detail page
4. Product Audit List page
5. Product Audit Detail page

***

### **Orders page**

Displays all outstanding Pre-orders and Back orders.



**Characteristics:**

**a. FIFO Listing:** Orders are displayed in a "First in, First out" sequence, ensuring older orders are prioritized for release.

**b. Order and Item Count:** The total number of queued orders and items are displayed, providing an instant overview of the workload.

**c. Orders Display:** Orders with IDs, customer names, product specifications, available inventory, and promise dates are displayed to facilitate individual or bulk order release management.



<figure><img src="../.gitbook/assets/Screenshot 2023-10-30 at 5.45.24 PM.png" alt=""><figcaption><p>Image: Orders page</p></figcaption></figure>

***

**Functions:**&#x20;



**a. Search Order**

Search order using product names, customer names, order Id to quickly find and manage release.

{% embed url="https://youtu.be/jEEgOaxTZ1A" %}
Video: Search Orders
{% endembed %}



**b. Filter Orders**

Filter orders by order or promise date to manage specific orders efficiently.

{% embed url="https://youtu.be/jHB0-M6dVy8" %}
Video: Filter Orders
{% endembed %}

**c. Release Orders**

Select and release orders to the warehouse or brokering queue.

{% hint style="info" %}
The release button is only enabled when one or more orders are selected.
{% endhint %}

* **Release to Brokering Queue:** This will move the orders to the brokering queue to be brokered to any facility with available inventory and proximity to the customer's location.
* **Release to Warehouse:** This will broker the order to the selected warehouse.

{% embed url="https://youtu.be/dE-17mSO8Yo" %}
Image: Release orders
{% endembed %}

\
\
**d. Edit promise date**

Select and update promise dates on orders.&#x20;

{% hint style="info" %}
Edit function gets enabled only when order/s are selected.  &#x20;
{% endhint %}

{% embed url="https://youtu.be/ebhv_cvWojE" %}
Video: Edit Promise date
{% endembed %}



**e. Cancel item**

Search and select items to cancel.&#x20;

{% hint style="info" %}
Cancel function gets enabled only when order/s are selected.  &#x20;
{% endhint %}

{% embed url="https://youtu.be/76qu9sVPWg8" %}
Video: Cancel item
{% endembed %}



**f. Background jobs**

Shows the brokering jobs in pending and running state

{% embed url="https://youtu.be/haWZYvSzU80" %}

\


***

### Products List page

Displays all products accepting Preorders and Backorders with applicable variants.



**Characteristics:**

**a. Product Specifications:** Enables users to see variants accepting for preorder and backorder categories.

**b. Ordered Item Count:** The current total number of ordered quantities is available for quick reference.

**c. Search Product:** Easy search by product name, color or keywords.



<figure><img src="../.gitbook/assets/Screenshot 2023-10-30 at 6.12.46 PM.png" alt=""><figcaption><p>Image: Product List page</p></figcaption></figure>



**Functions:** \
\
**a. Search Product**

Search a product for releasing by SKU, Parent product ID, Parent product name, Product name and Product ID.

{% embed url="https://youtu.be/63UmddRTe10" %}
Video: Search products
{% endembed %}

***

### Product detail page

View products and their variants, and filter and release orders for fulfillment within stock limits.



**Characteristics:**

**a. Quick inventory reference:** Product's Total pre-orders, Orders in brokering and quantity on hand is visible to quick reference.&#x20;

<figure><img src="../.gitbook/assets/Screenshot 2023-10-30 at 6.25.44 PM.png" alt=""><figcaption><p>Image: Product Detail page</p></figcaption></figure>



**Functions**

**a. Release items**

{% hint style="info" %}
Click the badges to paste quantity in input field.
{% endhint %}

Select and release single or bulk orders for the product.&#x20;

* **Release to Brokering Queue:** This will move the orders to the brokering queue to be brokered to any facility with available inventory and proximity to the customer's location.
* **Release to Warehouse:** This will broker the order to the selected warehouse.

{% embed url="https://youtu.be/Pownk8NSuqw" %}
Video: Release Items
{% endembed %}



**b. Cancel items**

Cancel the orders for selected products.

{% hint style="info" %}
Click the badges to paste quantity in input field.
{% endhint %}

{% embed url="https://youtu.be/TAM7GywJMis" %}
Video: Cancel items
{% endembed %}

\
**c. Filter products**

Filter orders by order or promise date to manage specific orders efficiently.

{% embed url="https://youtu.be/Lb7sPcwixGQ" %}
Video: Filter Products
{% endembed %}



**d. Background jobs**

Shows the brokering jobs in pending and running state.&#x20;

{% embed url="https://youtu.be/_wijajfNeGE" %}
Video: Background jobs
{% endembed %}



***

### Product Audit page

Displays a consolidated list of all products with their current presell category and quick overview of presell related jobs.



**Characteristics:**

**a. Consolidated View:** Enables users to view all the listed items with their current presell categories.

**b. Search Product:** Easy search by product name, and keywords.

**c. Job History:** A quick reference for the running job, responsible for marking and removing pre-order items on eComm stores.



<figure><img src="../.gitbook/assets/Screenshot 2023-10-30 at 6.44.01 PM.png" alt=""><figcaption><p>Image: Catalog page</p></figcaption></figure>



**Functions**

**a. Filters**

Filter orders by presell category.&#x20;

{% embed url="https://youtu.be/bWSul5UYQ8Q" %}
Video: Filter products
{% endembed %}



**b. Search Products**

Search a product for releasing by SKU, Parent product ID, Parent product name, Product name and Product ID.

{% embed url="https://youtu.be/ocwCwHI-0Po" %}
Video: Search products
{% endembed %}



***

### Product Audit Detail page

View product’s current presell eligibility and information flow timeline with other related informations such as associated purchase orders, current inventory, and category and brokering jobs.



<figure><img src="../.gitbook/assets/Screenshot 2023-10-30 at 7.07.50 PM.png" alt=""><figcaption><p>Image: Product Audit Detail page</p></figcaption></figure>



**Functions:**&#x20;

**a. Product summary:** Displays product’s presell eligibility and timeline.

<figure><img src="../.gitbook/assets/Screenshot 2023-10-31 at 6.32.11 PM.png" alt=""><figcaption><p>Image: Product Summary </p></figcaption></figure>



**b. Purchase Order card:** Displays the current status of the associated purchase orders, and shows if any active purchase order is available or last active purchase in HotWax Commerce for the product.

<figure><img src="../.gitbook/assets/Screenshot 2023-10-31 at 6.33.51 PM.png" alt=""><figcaption><p>Image: Active Purchase Order Card</p></figcaption></figure>



**c. Online ATP Computation:** Displays the inventory computation for the selected item.

<figure><img src="../.gitbook/assets/Screenshot 2023-10-31 at 6.37.14 PM.png" alt=""><figcaption><p>Image: Online ATP calculation</p></figcaption></figure>



**d. Related jobs:** Displays the relevant category and brokering jobs with their running status. Allows users to cancel or run the selected job immediately.

<figure><img src="../.gitbook/assets/Screenshot 2023-10-31 at 6.41.47 PM.png" alt=""><figcaption><p>Image: Related Jobs</p></figcaption></figure>



**e. Shop listing status:** Displays the presell status of the products on eCommerce stores.

<figure><img src="../.gitbook/assets/Screenshot 2023-10-31 at 6.46.01 PM.png" alt=""><figcaption><p>Image: Shop listing status</p></figcaption></figure>



***

**Related flows:**&#x20;

1. [Pre-order management flows](http://127.0.0.1:5000/o/l53nGvPQLhOHrKCP9HTG/s/YBo3YpybIjkK28p2Jpee/)
2. [Configurations](http://127.0.0.1:5000/o/l53nGvPQLhOHrKCP9HTG/s/PoTFyo0cPPGdyZu8kxeb/)



:arrow\_left: [Go to HotWax Commerce Docs](http://127.0.0.1:5000/o/l53nGvPQLhOHrKCP9HTG/s/TefRnbhmBjhScpq172vl/)
