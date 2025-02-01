# Breaking Variants Into Independent Products

In Shopify, a parent product may have multiple variants defined by the combination of different features—say, different combinations of sizes and colors. The user can decide to break these combinations into separate products in a manner as described below:

#### Initial Product Setup:

* **Parent Product:** HC Shoe
  * **Variants:**

| Colour | Size | SKU |
| ------ | ---- | --- |
| Black  | 7    | 7B  |
| Black  | 8    | 8B  |
| Tan    | 7    | 7T  |
| Tan    | 8    | 8T  |

#### Desired Product Setup:

* **Parent Product:** HC Shoe
  *   **Variants:**

      | Colour | Size | SKU |
      | :----: | :--: | :-: |
      |  Black |   7  |  7B |
      |  Black |   8  |  8B |
* **Parent Product:** HC Shoe (Tan)
  *   **Variants:**

      | Colour | Size | SKU |
      | :----: | :--: | :-: |
      |   Tan  |   7  |  7T |
      |   Tan  |   8  |  8T |

Here, the user has decided to divide the initial parent product into two, each for a separate color, which are further categorized into variants of different sizes. To successfully sync such edits made in Shopify into HotWax OMS without corrupting data (specifically product duplication), the user must follow the process detailed in this manual.

## Steps to break the variants into separate products

### Step 1: Pause Product Import and Sync Jobs

* In the [Job Manager App](https://job-manager.hotwax.io/product), go to the Products section.
* Pause the following jobs ([Learn more](https://docs.hotwax.co/documents/retail-operations/workflow/job-manager/job-details#run-now)):
  * **Import Products:** imports new products from Shopify.
  * **Sync Products:** updates existing products from Shopify.

### Step 2: Edit Variants in Shopify

* Make the required edits in Shopify to separate the variants.
* Ensure the SKUs for the separated variants remain the same as before the edit.

### Step 3: Unlink Variants in HotWax Admin

* Open the product page of the variant in HotWax Admin.
* Scroll to the Shopify Shop Product section on the page.
* Unlink the existing **Shopify Link**.



{% embed url="https://youtu.be/hpijDK4x_Sc" %}
Unlinking variants from Shopify in OMS
{% endembed %}

<figure><img src="https://youtu.be/hpijDK4x_Sc" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
If the variants are linked to multiple Shopify shops, only unlink them from the specific shop where the edits were made. Keep the links to other shops intact.
{% endhint %}

### Step 4: Sync changes in the OMS

* Run the following jobs from the Products section of the [Job Manager App](https://job-manager.hotwax.io/product)
  * Sync Product Job: Run this job to update the old product. ([Learn more](https://docs.hotwax.co/documents/retail-operations/workflow/job-manager/job-details#run-now))
  * Import Products Job: Run this job to create the separated variants as a new product.
  * Re-enable the Sync Product Job. ([Learn more](https://docs.hotwax.co/documents/retail-operations/workflow/job-manager/job-details))
