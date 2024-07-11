# Order Status Discrepancy Troubleshoot

## Question

**Why does the order status on the "Find Order" page show as "created" even though the order is already approved?**

## Reason

This discrepancy is likely due to an issue with Solr indexing, which can occur if the Solr instance was down when the order status was updated.

## Solution

To resolve this issue, follow these steps:

1. Reindex the order by going to the order detail page and clicking the reindex button just below the order ID.
2. Verify that the order status has been correctly updated on the find order page in the OMS.



