---
description: Retailers now have the capability to import sales orders through CSV files.
---

# Advanced Job Parameters

<figure><img src="https://www.hotwax.co/hubfs/job%20parameters.png" alt="" width="563"><figcaption></figcaption></figure>

Each job in the Job Manager performs a specific task based on a fixed set up input parameters. Merchandisers, Operations Managers, or System Administrators can review already running jobs and schedule new jobs from the Job Manager application. However, not all input parameters are always used to perform a specific task. Until now, the value of these parameters could not be changed, and a new parameter could not be activated from the Job Manager application. This constraint made business users fully dependent on their IT team.\
\
With our latest update, input parameters for any job can be changed from the Job Manager application, putting more control in the hands of business users.

Let’s break down the benefits of this feature with an example:

There is a job to bulk import orders from Shopify to HotWax Commerce. This job checks all the orders in Shopify and downloads them so that HotWax Commerce can route the orders to the optimal fulfillment location. Now suppose a merchandiser wants to import only orders that are placed after June 1, 2023. To do so previously, the merchandiser would have to talk to the IT team and depend on them. With this update, merchandisers can configure the job, use the already existing input parameter “createdFromDate” to give input “1 Jun 2023”, and schedule it, empowering business users with more flexibility and control.

Permission to configure job parameters are exclusively available to admins, ensuring unaware users do not unknowingly input wrong keys or values. This ability to configure jobs and services on their own lets users customize jobs for their business needs without any trouble.
