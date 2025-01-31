---
description: This page explains how HotWax Commerce calculates Available-to-Promise (ATP) by syncing inventory across channels and factoring in safety stock, thresholds, and facility exclusions.
---

# Available to Promise

HotWax Commerce integrates with ERP, POS, and WMS systems to provide a unified inventory view, ensuring stock levels are synchronized with platforms like Shopify. When calculating `Online Available to Promise` (ATP) for Shopify, HotWax Commerce considers more than just the quantity on hand (QOH). It also factors in safety stock, thresholds, reserved quantities, brokering queue orders, and excluded facilities` to avoid overselling scenarios.

For example, the product "blue shirt" from the brand NotNaked has a current quantity on hand (QOH) of 100 units. There are 10 orders placed for this product, with inventory allocated to 5 of those sales orders. Additionally, the product has 5 units set aside as safety stock and 5 units as a threshold. One facility, which is unavailable for fulfillment, has 5 units of Available-to-Promise (ATP) inventory. The ATP for this product can be calculated using the following formula:


Online ATP = QOH - (Reserved quantities + Safety stock + Threshold + Orders in brokering queue + Excluded facilities’ ATP)

Here is the given information:

Given:

<table data-header-hidden data-full-width="false"><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Quantity on hand</td><td>100 Units</td></tr><tr><td>Reserved quantities</td><td>5 Units</td></tr><tr><td>Safety stock</td><td>5 Units</td></tr><tr><td>Threshold</td><td>5 Units</td></tr><tr><td>Orders in brokering queue</td><td>5 Units</td></tr><tr><td>Excluded facilities' ATP</td><td>5 Units</td></tr></tbody></table>

Hence,

$$
Online ATP = 100 - (5+5+5+5+5) = 100 - (25) = 75
$$

HotWax Commerce will push 75 units as the sellable Online ATP to Shopify, ensuring accurate inventory representation for online sales.
However, retailers managing large product assortments and multiple facilities may face challenges in handling individual product settings at scale. Each product can have different configurations for safety stock, thresholds, store pickup, and shipping rules. Modifying product categories or introducing new ones requires uploading large CSV files, which takes time and limits flexibility in adjusting fulfillment rules.

The ATP app simplifies this by allowing retailers to configure multiple rules to manage safety stock, threshold, store pickup, and shipping for bulk products with ease. The ATP app allows retailers to apply rules based on product tags and facility types or groups, reducing manual work. It supports real-time available to promise computation based on all these rules and automates inventory synchronization across multiple channels. 
