---
description: >-
  Schedule jobs responsible for importing all products and orders into the
  system for the initial deployment and instance configuration from the Initial
  Load category.
---

# Initial load

## Initial load page

Displays the jobs for initial OMS setup to import all products and orders.​

**Characteristics**

**One time Execution**These jobs are executed only once during the initial setup and rarely during instance redeployments.

**Product and Order Importation**

Facilitate the importation of all products and orders from the eCommerce platform for the initial instance setup.

**Scheduling Functionality**

Empower users to schedule the import process, enabling them to select the desired execution time.

<figure><img src="../../jobManager/.gitbook/assets/Screenshot%202023-11-07%20at%204.30.14%20PM.png" alt=""><figcaption><p>Image: Initial load page</p></figcaption></figure>

***

## How to schedule jobs for initial load?

{% hint style="info" %}
**Things to remember:**

1. Products should be imported before any order is imported into the system.
2. By default only open and unshipped orders will be imported.
3. The Last Shopify Order ID serves as a reference point for HotWax Commerce to determine the starting point for order downloads.
{% endhint %}

1. Go to the Initial Load category.
2. Initiate the `Import Products in Bulk` job.
3. Choose the desired runtime from the dropdown menu.
4. Confirm the selected runtime.
5. Go to Miscellaneous Jobs page.
6. Initiate the `Process bulk imported files` job.
7. Once product importation is complete, proceed to the `Import Orders in Bulk` job.
8. Select the preferred runtime from the dropdown menu.
9. Verify the order and fulfillment status.
10. Input the Last Shopify ID from which order numbers should be imported into HotWax Commerce OMS.
11. Execute the import process.
12. Go to Miscellaneous Jobs page.
13. Initiate the `Process bulk imported files` job.

{% embed url="https://youtu.be/r41dQJIVcpo" %}
Video: Initial load
{% endembed %}
