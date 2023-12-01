---
description: >-
  Added a new job to list/delist Pre-Order and Backorder products in a single
  API call, ensuring that a product is delisted from Pre-Order and Backorder
  only if it is ineligible for both
---

# Pre-Order Listing-Delisting

<figure><img src="https://www.hotwax.co/hubfs/Product%20Updates%20and%20Release%20Notes/2023/January%202023/Product%20Update/Feature%20Image/PU%206-%20Pre-Order%20Listing%20De-Listing.png" alt=""><figcaption></figcaption></figure>

&#x20;

Previously, multiple different jobs were run in HotWax Commerce for delisting products from Pre-Orders and listing Backorders. These jobs used to run independently, if the Pre-Order delisting job is run after the Backorder listing job, the product will be delisted from Backorder as well, resulting in lost sales.&#x20;

In this new update, a new job is created that takes care of both listing and delisting products for Pre-Orders and Backorders in a single API call. This ensures that a product is delisted from Pre-Order and Backorder only if it is ineligible for both.
