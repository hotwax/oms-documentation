---
description: >-
  Discover how HotWax Commerce initiates invoicing for completed orders from a
  single location through a streamlined technical workflow.
---

# Technical Workflow of Invoicing from Single Location

To initiate the process of invoicing completed orders from a single location, HotWax Commerce employs a streamlined technical workflow.

## Feed preparation

A configurable job in HotWax Commerce is designed to generate a feed of all completed orders, placing it in a designated SFTP location. Orders are included in the completed orders feed only when all items within them are fulfilled. Retailers have the flexibility to adjust the frequency of this job based on their specific needs.

## Transformation process

Following the feed preparation, a sophisticated job in the HotWax Commerce integration platform takes the generated feed and transforms it into a JSON format acceptable by Retail Pro's "Order to Invoice" API. This transformed file is then deposited into a separate folder within the SFTP location. This transformation process is orchestrated to occur a few minutes after the initial job that prepares the feed of completed orders.

## API call for invoicing

Subsequently, another job in the HotWax Commerce integration platform retrieves the newly transformed file and invokes the "Order to Invoice" API for each order. This crucial step triggers the creation of invoices in Retail Pro for each corresponding order. The responses from these API calls are logged within the HotWax Commerce integration platform and stored in the SFTP location. This API invocation is timed to occur a few minutes after the completion of the transformation job.

## Failure Reporting

A subsequent job is dedicated to sending a report of any failures encountered during the "Order to Invoice" API calls. This report is dispatched via email, providing prompt notification of any issues. The job responsible for sending this report is scheduled to run five minutes after the API calls have been made.

## Inventory Synchronization

Importantly, the invoicing of order items in Retail Pro is not just a financial transaction; it also ensures that inventory is accurately deducted at the specific location where the order is fulfilled. This synchronization step guarantees that inventory levels in both HotWax Commerce and Retail Pro remain aligned, contributing to a comprehensive and coherent order management system.

This straightforward technical workflow ensures the smooth and efficient processing of invoicing completed orders from a single location in HotWax Commerce, providing both clarity and precision in the order synchronization process.
