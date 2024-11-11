---
description: >-
  Merchandisers can now effortlessly reorder threshold jobs by dragging and
  dropping them, prioritizing operations and updating job run times in bulk
  automatically.
---

# Drag and Drop to Re-Order Threshold Rules

Merchandisers set product inventory thresholds based on their business requirements to avoid overselling their inventory on Shopify. Setting multiple threshold rules for different product categories can become complex, especially when those categories overlap.

For example, a merchandiser may want to set a threshold for "Kids Shoes" and then a separate threshold for "Kids Shoes on Sale". In such cases, it is critical to double-check the sequence of the inventory threshold jobs since one job operation may impact other inventory thresholds within the same product category. If the inventory threshold job for “Kids Shoes on Sale” runs first, followed by the job for “Kids Shoes,” the wide-reaching rule will apply to all Kid's Shoes, including those on sale.

To achieve the desired threshold value, merchandisers should place the more wide-reaching threshold job earlier in the sequence, avoiding interference with other inventory thresholds in the same category. While changing the order of threshold jobs, merchandisers also must manually update timings for all other rules in the sequence so that their runtime does not overlap with other jobs. However, manually managing inventory thresholds and updating job timings can be tedious and error-prone.

<table><thead><tr><th width="257">Threshold Job Operation</th><th>Kids Shoe on Sale</th><th>Kids Shoes</th></tr></thead><tbody><tr><td>Threshold Rule</td><td>5</td><td>10</td></tr></tbody></table>

Table I: Threshold rules set by the merchandiser

<table><thead><tr><th width="256">Threshold Job Operation</th><th>Kids Shoe on Sale</th><th>Kids Shoes</th></tr></thead><tbody><tr><td>Intended Threshold Value</td><td>5</td><td>10</td></tr><tr><td>Actual Threshol Value</td><td>10</td><td>10</td></tr></tbody></table>

Table II: Derived Threshold Value

To simplify this process, the HotWax Commerce Threshold App now features an intuitive "drag-and-drop" functionality, enabling merchandisers to easily change the order of threshold jobs by dragging them to a new position according to their priority. The adjustment in the job sequence also automatically updates the run times for all jobs, saving merchandisers the hassle of manually calculating new job run times for other threshold jobs within the sequence.\\
