---
description: >-
  HotWax's latest update includes a job to reconcile order counts between
  Shopify and HotWax Commerce, preventing lost orders and ensuring all Shopify
  order data is downloaded.
---

# Daily Reconciliation of Shopify Order Count

<figure><img src="https://www.hotwax.co/hubfs/Product%20Updates%20and%20Release%20Notes/2022/April%20and%20May%202022/Product%20Updates/Featured%20image/Daily%20Reconciliation%20of%20Shopify%20Order%20Count.png" alt=""><figcaption></figcaption></figure>

To help our customers optimize order fulfillment and ensure no Shopify orders are missed, HotWax Commerce is excited to introduce our new update that further reconciles Shopify Order Count in HotWax Commerce.

#### Why this change is important

Shopify orders are periodically checked and downloaded into HotWax Commerce, then brokered to the optimal location for fulfillment. These order downloads from Shopify are a crucial step in order management – if an order is not downloaded in HotWax Commerce, it will categorically not be fulfilled.

Previously, some Shopify orders were not downloaded to HotWax Commerce for the following reasons:

* Some orders were not getting downloaded from Shopify because of a microseconds-long time gap between two jobs. For example, consider a first job downloading orders from 01:00:00 PM to 01:15:00 PM and a second job downloading orders from 01:15:01 PM to 01:16:00 PM. In this scenario, orders placed between 01:15:00 PM to 01:15:01 PM in Shopify were being missed.
* Sometimes, Shopify services are temporarily down and trigger an internal server error when HotWax Commerce attempts to download order data. As a result, orders that came into Shopify during the system error are missed and not downloaded to HotWax Commerce.

#### How it works

Added a new job that runs every day at midnight and imports **all orders** **created in Shopify in the last 24 hours** to HotWax Commerce (excluding those already imported), thus ensuring that any missing orders are caught. Rest assured that all Shopify orders are reflected in HotWax Commerce and fulfilled optimally!
