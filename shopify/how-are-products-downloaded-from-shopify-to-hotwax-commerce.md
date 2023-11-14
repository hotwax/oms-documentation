# How are Products Downloaded from Shopify to HotWax Commerce?

HotWax Commerce requires accurate product data to track inventory changes and ensure near real-time inventory counts on Shopify.  It also facilitates order downloads and expedites the fulfillment process. For precise synchronization of products from Shopify to HotWax Commerce, we tackle four key scenarios:

1. **Initial Product Download:** Downloading existing products from the merchant's Shopify store keeps the product catalog in HotWax Commerce up-to-date.
2. **Importing Newly Added Products:** Reflecting new products or variants added by merchants on Shopify in HotWax Commerce's product catalog.
3. **Updating Product Details:** Synchronizing HotWax Commerce with the Shopify store as product information changes.
4. **Deleting Existing Products:** Ensuring data integrity by removing products from HotWax Commerce when they're deleted from the Shopify store.

### Initial Product Download from Shopify to HotWax Commerce

Merchants can schedule an 'Import Products in Bulk' job in HotWax Commerce to download existing product details from Shopify, including Stock Keeping Unit (SKU) code, Universal Product Code (UPC), Shopify ID, Price, Tags, and Weight. This should be done before [importing orders](how-are-orders-downloaded-from-shopify-to-hotwax-commerce.md) to ensure that products are available for incoming sales orders. The import process consists of two steps:

1. **Downloading from Shopify**- HotWax Commerce sends an [API request](https://shopify.dev/docs/api/admin-rest/2022-10/resources/product#get-products?ids=632910392,921728736) to Shopify to download products. In response, Shopify returns product data in JSON format. Shopify permits downloading 250 products per API call. To prevent large data file errors, HotWax Commerce downloads only 100 products per call.

<figure><img src=".gitbook/assets/Import Products in Bulk.png" alt=""><figcaption><p><em>Fig.1: Configuration to run “Import Products in Bulk” in the Job Manager App</em></p></figcaption></figure>

2. **Product Creation in HotWax Commerce**- After downloading, the JSON files are read from the file system, and product records are created in HotWax Commerce's database through ‘Process bulk imported files’ job. If any data issues arise, error logs are recorded for later correction.

### Product data from Shopify is mapped in HotWax Commerce fields as outlined in the following table:

1. #### Parent Product&#x20;

A virtual product, also known as a parent product, does not have a set size or color. When using HotWax Commerce, all fields in the product JSON are imported, but only relevant fields are processed to improve system efficiency. Here's how parent product fields are mapped in Shopify and HotWax Commerce:&#x20;

<table><thead><tr><th width="103.33333333333331">S.No.</th><th width="251">Fields in Shopify</th><th>Fields in HotWax Commerce</th></tr></thead><tbody><tr><td>1</td><td>ID</td><td>Shopify Product ID</td></tr><tr><td>2</td><td>Title</td><td>Product Name</td></tr><tr><td>3</td><td>Body HTML</td><td>Product Content</td></tr><tr><td>4</td><td>Vendor</td><td>Brand</td></tr><tr><td>5</td><td>Product_type</td><td>Categories</td></tr><tr><td>6</td><td>Tags</td><td>Tags</td></tr><tr><td>7</td><td>Variant</td><td>Variant</td></tr><tr><td>8</td><td>Media</td><td>Overview</td></tr></tbody></table>

{% tabs %}
{% tab title="Products in Shopify" %}
<div data-full-width="false">

<figure><img src=".gitbook/assets/Fig. 4(i)_ Products in Shopify.png" alt=""><figcaption><p><em>Fig.2(i): Products in Shopify</em> </p></figcaption></figure>

</div>
{% endtab %}

{% tab title="Products in HotWax Commerce" %}
<div data-full-width="false">

<figure><img src=".gitbook/assets/Fig. 4(ii)_ Products downloaded in HotWax Commerce.png" alt=""><figcaption><p>Products downloaded in HotWax Commerce</p></figcaption></figure>

</div>
{% endtab %}
{% endtabs %}

2. **Variant Product**

The parent product comes in various sizes and colors, resulting in multiple variants. With HotWax Commerce, all of these variants can be downloaded. Here's how product variant fields are mapped in Shopify and HotWax Commerce:&#x20;

<table><thead><tr><th width="136.33333333333331">S.No.</th><th>Fields in Shopify</th><th>Fields in HotWax Commerce</th></tr></thead><tbody><tr><td>1</td><td>Shopify Product ID</td><td>Shopify Product ID</td></tr><tr><td>2</td><td>Product Name</td><td>Product Name</td></tr><tr><td>3</td><td>Options </td><td>Feature</td></tr><tr><td>4</td><td>Image</td><td>Image</td></tr><tr><td>5</td><td>Parent Product</td><td>Parent Product</td></tr><tr><td>6</td><td>Price</td><td>Price</td></tr><tr><td>7</td><td>SKU</td><td>SKU</td></tr><tr><td>8</td><td>Quantity</td><td>View inventory</td></tr><tr><td>9</td><td>Shipping</td><td>Shippable</td></tr><tr><td>10</td><td>Product Type</td><td>Product Type</td></tr><tr><td>11</td><td>Weight</td><td>Weight</td></tr><tr><td>12</td><td>Metafields</td><td>Product Tag</td></tr></tbody></table>

{% tabs %}
{% tab title="Variant product details in Shopify" %}
<figure><img src=".gitbook/assets/Product in Shopify.png" alt=""><figcaption><p> <em>Fig.3(i): Variant product in Shopify with details</em></p></figcaption></figure>
{% endtab %}

{% tab title="Variant product details in HotWax Commerce" %}
<figure><img src=".gitbook/assets/Products in HC.png" alt=""><figcaption><p>Fig.3(ii) : Variant product in HotWax Commerce with details</p></figcaption></figure>
{% endtab %}
{% endtabs %}

#### Importing Newly Added Products Regularly

Shopify merchants create new products for two reasons::

1. When a new product is added to the catalog.
2. When users prefer to delete the existing product and create a new one with updated fields

To make it easier to keep both Shopify and HotWax Commerce's product catalogs up to date, Shopify merchants can schedule an 'Import Products' job that runs every 15 minutes. This job checks the 'created\_at' field of products in Shopify and identifies any products that were created after the last run of the job. Any newly created products are then imported into HotWax Commerce's product catalog through ‘Process bulk imported files’ job. By doing this, HotWax Commerce's catalog stays synchronized with Shopify's catalog, ensuring that merchants have access to the most up-to-date product information.

<figure><img src=".gitbook/assets/Import Products.png" alt=""><figcaption><p><em>Fig.4: Configuration to run “Import Products” in the Job Manager App</em></p></figcaption></figure>

{% hint style="info" %}
It is recommended to run this job every 15 minutes. However, the frequency of the job can be set as per a merchant’s business needs.
{% endhint %}

### Updating Product Details from Shopify to HotWax Commerce

Merchants use Shopify to update their product information, such as the name, image, tags, and weight. HotWax Commerce regularly downloads these updates through the 'Sync Products' job, which can be set up in the Job Manager App. If a merchant needs to make changes to a product's details in Shopify, they can achieve this in the following two ways:

* **Deleting the existing product and creating a new one with updated details.**&#x20;

In the event that merchants opt to remove their current products and generate new ones with revised information, HotWax Commerce will proceed to erase the old items and introduce fresh products through an "Import Products" task.

* **Editing products’ fields in Shopify.**

To keep their product details up-to-date, merchants can easily schedule the "Sync Products" job from the Product page in the Job Manager App. This job checks the "updated\_at" field of the product in Shopify and compares it to the job's last run time. If the time in the "updated\_at" field is later than the job's last run time, it will download all the product details from Shopify, compare them with the data in HotWax Commerce, and update any changed fields. By default, the "Sync Products" job runs every 6 hours, but merchants can adjust this frequency as needed from the Job Manager app.&#x20;

<figure><img src=".gitbook/assets/Sync Products.png" alt=""><figcaption><p><em>Fig.5: Sync product updates from Shopify</em></p></figcaption></figure>

**Managing Sales Orders For Products That Are Not In HotWax Commerce**&#x20;

When orders are placed on Shopify, they are also transferred to HotWax Commerce. However, sometimes an order might include a newly launched product in Shopify that has not yet been synced with HotWax Commerce. This can cause the order download to fail if the product import job has not yet run. To prevent this, HotWax Commerce creates a temporary placeholder product for the new item. Once the product import job is run, all the necessary information such as the product name, brand, price, weight, and so on are added to the placeholder product. This ensures that the order download is successful and the customer receives their product.

### Deleting Products from Shopify and HotWax Commerce

Shopify merchants may need to delete products for various reasons, including creating a product with incorrect information. However, if a merchant deletes a product in Shopify and then recreates it with the same UPC, it can result in data discrepancies and affect inventory synchronization in HotWax Commerce. Therefore, it is important to also delete the corresponding products in HotWax Commerce when they are deleted in Shopify.&#x20;

In HotWax Commerce, products are soft deleted, meaning they are marked as deleted but not permanently removed to manage returns. HotWax Commerce detects deleted products using [APIs](https://shopify.dev/docs/api/admin-rest/2023-04/resources/product#delete-products-product-id) to obtain a list of deleted products from Shopify. When a product variant is deleted in Shopify, the 'updated\_at' field of the parent product is updated, and the 'Sync Products' job takes care of product deletion in HotWax Commerce by identifying updated or deleted product variants. The 'Sync Products' job compares downloaded product variants with existing variants of the same product in the system. If any variants from Shopify are missing from those in HotWax Commerce, the job delinks the additional product variants from their parent product.

**Creating/Deleting Products With The Help Of Shopify Webhooks**

Shopify offers webhooks for real-time communication between apps. HotWax Commerce utilizes Shopify's [new product and product delete webhooks](https://shopify.dev/docs/api/admin-rest/2023-07/resources/product#delete-products-product-id) to promptly create or delete products in HotWax Commerce. The Job Manager app enables this webhook. However, there are two limitations when using Shopify's webhook:

* It only tracks the creation or deletion of parent products and not product variants.&#x20;
* Shopify states that [webhook delivery isn't always guaranteed](https://shopify.dev/apps/webhooks#limitation), and suggests implementing reconciliation jobs to periodically fetch data from Shopify.

<figure><img src=".gitbook/assets/Product webhook.png" alt=""><figcaption><p><em>Fig.6: Product webhooks for Shopify</em></p></figcaption></figure>



<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden></th><th data-hidden></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td><mark style="color:red;"><strong>How to set up jobs in Job Manager App</strong></mark></td><td>Learn how to set up jobs in HotWax Commerce to Synchronize Product Data from Shopify</td><td></td><td></td><td></td><td><a href="http://127.0.0.1:5000/o/l53nGvPQLhOHrKCP9HTG/s/wh247JxYuA9VcA5q3vJd/">Job Manager</a></td><td><a href=".gitbook/assets/Inventory (1).png">Inventory (1).png</a></td></tr><tr><td><mark style="color:red;"><strong>FAQ</strong></mark></td><td>Find answers to commonly asked questions</td><td></td><td></td><td></td><td><a href="https://www.hotwax.co/frequently-asked-questions">https://www.hotwax.co/frequently-asked-questions</a></td><td><a href=".gitbook/assets/FAQ (1).png">FAQ (1).png</a></td></tr><tr><td><mark style="color:red;"><strong>Contact us</strong></mark></td><td>Looking for more answers?<br><br>Connect with our experts to achieve true omnichannel integration</td><td></td><td></td><td></td><td><a href="https://www.hotwax.co/connect">https://www.hotwax.co/connect</a></td><td><a href=".gitbook/assets/Contact.png">Contact.png</a></td></tr></tbody></table>
