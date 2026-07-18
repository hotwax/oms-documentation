---
description: HotWax Commerce uses two buffer times to process order downloads accurately.
---

# Order download buffer times

## thruDateBuffer

Shopify processes an order after it has been placed to check for invalid or fraudulent activity. This process typically takes 5 minutes. If HotWax Commerce syncs the order before Shopify finishes processing it, HotWax Commerce will need to search for the order in Shopify again to update its tags.

The thruDateBuffer delays order syncing from Shopify for a specific amount of time. This delay gives Shopify time to process and analyze orders before HotWax Commerce imports them, which reduces the need to recheck order tags. By default, this value is 5 minutes.

## bufferTime

Orders can be missed if they are placed during the microsecond time gap between two consecutive jobs.

To address this, HotWax Commerce adds a buffer time padding to the start time of each job. This creates an overlap between jobs and prevents orders from being lost during these microsecond gaps. The bufferTime is calculated based on the previous job's run time and includes both the thruDateBuffer and the overlap time. By default, the bufferTime is 6 minutes (5 minutes for thruDateBuffer and 1 minute for overlap).

## Example scenario

* Sync job interval: Every 15 minutes
* Default values: `thruDateBuffer` = 5 minutes, `bufferTime` = 6 minutes

1. The job running at 1:15 syncs orders from 12:54 to 1:10.
2. The job running at 1:30 syncs orders from 1:09 to 1:25.

This overlap processes orders accurately and reduces the risk of discrepancies.
