---
description: >-
  A new job has been introduced to list or delist Pre-Order and Backorder
  products with a single API call, ensuring delisting only if the product is
  ineligible for both statuses.
---

# Pre-Order Listing-Delisting

<figure><img src="https://www.hotwax.co/hubfs/Product%20Updates%20and%20Release%20Notes/2023/January%202023/Product%20Update/Feature%20Image/PU%206-%20Pre-Order%20Listing%20De-Listing.png" alt=""><figcaption></figcaption></figure>

Previously, multiple different jobs were run in HotWax Commerce for delisting products from Pre-Orders and listing Backorders. These jobs used to run independently, if the Pre-Order delisting job is run after the Backorder listing job, the product will be delisted from Backorder as well, resulting in lost sales.

In this new update, a new job is created that takes care of both listing and delisting products for Pre-Orders and Backorders in a single API call. This ensures that a product is delisted from Pre-Order and Backorder only if it is ineligible for both.
