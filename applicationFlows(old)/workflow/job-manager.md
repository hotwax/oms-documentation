# Job manager

### Introduction

HotWax Commerce’s  [Job Manager App](https://www.hotwax.co/apps/job-manager-app) enables you to view, schedule and update job workflows running in the Order Management System for operations related to orders, products and inventory.&#x20;

This document provides a fundamental overview of the various screens where the user can manage job configurations. &#x20;



**List of pages**

1. Pipeline page
2. Initial load page
3. Pre-order page
4. Orders page
5. Brokering page
6. Fulfillment page
7. Inventory page
8. Products page
9. Reports page
10. Miscellaneous page
11. Bulk Editor
12. Additional functions

***

### Pipeline page

Displays all scheduled, running and completed jobs, with configuratioins to change the scheduled job data.



**Characteristics**

**a. FEFO Listing:** Jobs are displayed in a "First Expired, First Out" sequence.

**b. Timeline:** Highlighted time frame shows job runtime and frequency as scheduled.&#x20;

**c. Edit:** Skip, cancel, edit or reschedule any pending jobs at before running.



<figure><img src="../.gitbook/assets/Screenshot 2023-10-30 at 11.39.59 AM.png" alt=""><figcaption><p>Image: Pipeline page</p></figcaption></figure>





**Sections**

{% tabs %}
{% tab title="Pending" %}
Shows all in line pending jobs which are scheduled to run.
{% endtab %}

{% tab title="Running" %}
Shows all running jobs in the OMS.
{% endtab %}

{% tab title="History" %}
Shows all finished jobs with ability to view history of past 10 job execution records.
{% endtab %}
{% endtabs %}



**Functions:**&#x20;



**a. Search jobs**

Search job by keyword or job name to quickly find the job you want to work on.&#x20;

{% embed url="https://youtu.be/OutqmCjs-W8" %}
Video: Search Jobs
{% endembed %}



**b. Job card**

Shows comprehensive data and configurarations of a job, includes the following information:

* **Job name:** The name of the job.
* **Summary:** A brief description of the job.
* **Run time:** The time when a job will be executed.
* **Frequency:** How often the job needs to be executed (daily, weekly, monthly, etc.).
* **Custom parameters:** Special parameters passed with the job to manage addtional configurations of the job.&#x20;

**Actions on the card**

In addition to displaying the basic information about a job, job card also include various functions:&#x20;

* **Skip:** Skip the job for the current execution cycle.
* **Cancel:** Cancel the job altogether.
* **Pin:** Pin the most frequently watched job
* **Run now:** Run the job immediately
* **History:** Shows past 10 history records
* **Copy details:** Copy job information for quick sharing

These functions can be useful for managing jobs that are no longer needed, or that need to be delayed or rescheduled.

{% embed url="https://youtu.be/aAgDUHb-wcA" %}
Video: Job card
{% endembed %}

\
**b. Job card: Detailed view**

Adding to all the actions which can be performed from the job card, detailed view allows addition of advanced job parameters on the job.&#x20;

{% hint style="info" %}
Read more about [advance job parameters.](https://github.com/hotwax/press-release-faq/blob/main/job-manager/advanced-job-parameters.md)
{% endhint %}

{% embed url="https://youtu.be/GQ5rVqXSTgg" %}
Image: Job card: Detailed View
{% endembed %}



**c. Job Filters**

Filter jobs by category on all tabs.&#x20;

{% embed url="https://youtu.be/caHYuEmKvvo" %}
Image: Job filters
{% endembed %}



***

### Initial load page

Displays the jobs for initial OMS setup to import all products and orders.



**Characteristics**

{% hint style="info" %}
Products should be imported before any order is imported into the system.
{% endhint %}

{% hint style="info" %}
By default only open and unshipped orders will be imported.
{% endhint %}

**a. Limited occurrence:** Jobs are run once on initial setup and rarely when instances are redeployed.

**b. Products and order import:** Helps importing all products and orders from the eCommerce for initial instance setup.

{% embed url="https://youtu.be/KiULyMpvLtk" %}
Video: Initial order import
{% endembed %}

***

### Presell page

Displays and allows configurations on the Preorders and Backorders related jobs.



**Characteristics**

**a. FEFO Listing:** Jobs are displayed in a "First Expired, First Out" sequence.

**b. Timeline:** Highlighted time frame enables users to identify job runtime and frequency as scheduled.

**c. Edit Function:** Skip, cancel, edit or reschedule any pending jobs at any point of time.

**d. Configurations:** Allows users to configure jobs schedule and run time.

**e. Categorized pre-order jobs as:**

* Catalog computation.
* Sync presell information.
* Communicate promise data.
* Pre-order releasing.



{% embed url="https://youtu.be/_dvZSQb-Lrc" %}
Video: Pre-sell page
{% endembed %}



***

### Orders page

Displays all order jobs, including Import Orders, Route Orders, Upload Order Status, and other order related webhooks.



**Characteristics:**&#x20;

**a. FEFO Listing:** Jobs are displayed in a "First Expired, First Out" sequence.

**b. Timeline:** Highlighted time frame enables users to identify job runtime and frequency as scheduled.&#x20;

**c. Edit Function:** Skip, cancel, edit or reschedule any pending  jobs at any point of time

**d. Configurations:** Allows users to configure jobs schedule and run time.

**e. Categorized order jobs as:**&#x20;

1. Import Orders.
2. Update orders on eCom.
3. Routing Order
4. Uncategorized jobs.

{% embed url="https://youtu.be/t7qhe7rMT60" %}
Video: Orders page
{% endembed %}

***

### Brokering page

{% hint style="info" %}
Under revamp, new details will be added soon.
{% endhint %}

***

### Fulfillment page

Displays all fulfillment related jobs.



**Characteristics:**&#x20;

**a. FEFO Listing:** Jobs are displayed in a "First Expired, First Out" sequence.

**b. Timeline:** Highlighted time frame enables users to identify job runtime and frequency as scheduled.&#x20;

**c. Edit Function:** Skip, cancel, edit or reschedule any pending  jobs at any point of time

**d. Configurations:** Allows users to configure jobs schedule and run time.

**e. Categorized order jobs as:**&#x20;

1. Shipping
2. History&#x20;
3. Auto-cancellation



<figure><img src="../.gitbook/assets/Screenshot 2023-10-30 at 3.33.37 PM.png" alt=""><figcaption><p>Image: Fulfillment page</p></figcaption></figure>



***

### Inventory page

Displays all inventory related jobs.



**Characteristics:**&#x20;

**a. FEFO Listing:** Jobs are displayed in a "First Expired, First Out" sequence.

**b. Timeline:** Highlighted time frame enables users to identify job runtime and frequency as scheduled.&#x20;

**c. Edit Function:** Skip, cancel, edit or reschedule any pending  jobs at any point of time

**d. Configurations:** Allows users to configure jobs schedule and run time.

**e. Categorized inventory jobs as:**&#x20;

1. Adjustments
2. Webhooks

<figure><img src="../.gitbook/assets/Screenshot 2023-10-30 at 4.01.51 PM.png" alt=""><figcaption><p>Image: Inventory page</p></figcaption></figure>

***



### Products page

Displays all product related jobs.



**Characteristics:**&#x20;

**a. FEFO Listing:** Jobs are displayed in a "First Expired, First Out" sequence.

**b. Timeline:** Highlighted time frame enables users to identify job runtime and frequency as scheduled.&#x20;

**c. Edit Function:** Skip, cancel, edit or reschedule any pending  jobs at any point of time

**d. Configurations:** Allows users to configure jobs schedule and run time.

**e. Categorized products jobs as:**&#x20;

1. Sync
2. Webhooks

<figure><img src="../.gitbook/assets/Screenshot 2023-10-30 at 4.03.34 PM.png" alt=""><figcaption><p>Image: Products page</p></figcaption></figure>

***

### Miscellaneous page

Display all uncategorised jobs in a list view.

<figure><img src="../.gitbook/assets/Screenshot 2023-10-30 at 4.04.40 PM.png" alt=""><figcaption><p>Image: Miscellaneous page</p></figcaption></figure>

***

### Bulk Editor: Schedule Jobs in Bulk

Schedule multiple jobs in bulk for an instance​​



**Characteristics**

**a. Select Stores:** Allows users to select product stores and Ecom stores if retailers have multiple Shopify stores.

**b. Configurations:** Allows users to search and select jobs to execute or configure jobs schedule and run time together.

**c. Scheduler:** Allows users to configure and schedule all selected jobs simultaneously.



{% embed url="https://youtu.be/VQms7jsUv28" %}
Image: Bulk editor
{% endembed %}



**Functions:**&#x20;

**a. Product store**

A store represents a company or a unique catalog of products.&#x20;

{% hint style="info" %}
If your OMS is connected to multiple eCommerce stores, each selling a unique product catalog, you may have multiple Product Stores in HotWax Commerce.
{% endhint %}



**b. ECom stores**

eCommerce stores are directly connected to one Shop Config.

{% hint style="info" %}
If your OMS is connected to multiple eCommerce stores selling the same catalog under one company, you may have multiple Shop Configs for the selected Product Store.
{% endhint %}



**c. Select jobs**

Select and add jobs to schedule



**d. Scheduler**

Configure and schedule all selected jobs simultaneously.

{% hint style="info" %}
Scheduled run time and frequency, set on bulk scheduler, will be applied to all the selected jobs.
{% endhint %}

***

### Additional function&#x20;

**a. More jobs**

Display all jobs in a category without a subcategory.

{% embed url="https://youtu.be/0BEgn5RYRzY" %}
Video: More Jobs
{% endembed %}



***

**Related flows:**&#x20;

1. [Schedule Jobs](http://127.0.0.1:5000/o/l53nGvPQLhOHrKCP9HTG/s/wh247JxYuA9VcA5q3vJd/)
2. [Configurations](http://127.0.0.1:5000/o/l53nGvPQLhOHrKCP9HTG/s/PoTFyo0cPPGdyZu8kxeb/)



:arrow\_left: [Go to HotWax Commerce Docs](http://127.0.0.1:5000/o/l53nGvPQLhOHrKCP9HTG/s/TefRnbhmBjhScpq172vl/)
