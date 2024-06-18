---
description: For a smooth order download process HotWax has two buffer times.
---

# thruDateBuffer and bufferTime

## thruDateBuffer

Shopify processes an order after it has been placed to check for invalid or fraudulent activity, a process that typically takes 5 minutes. If the order is synced into HotWax before being processed, the order will need to be searched in Shopify again to update its tags.

The `thruDateBuffer` ensures that orders are only synced from Shopify after a certain amount of time. This delay allows time for Shopify to process and analyze the orders before they are imported into HotWax Commerce, reducing the need for rechecking the order tags. By default this value is 5 minutes.&#x20;

## bufferTime

It is possible for orders to be missed if they are placed during the microsecond time gap between two consecutive jobs.

To address this issue, a buffer time padding is added to the start time of each job. This ensures an overlap between jobs, preventing orders from being lost during these microsecond gaps. The BufferTime is calculated based on the previous job's runTime and includes both the `thruDateBuffer` and the overlap time. By default, the BufferTime is 6 minutes (5 minutes for `thruDateBuffer` + 1 minute overlap).

## Example Scenario

* Sync job interval: Every 15 minutes
* Default values: thruDateBuffer = 5 minutes, BufferTime = 6 minutes

1. The job running at 1:15 will sync orders from 12:54 - 1:10.
2. The job running at 1:30 will sync orders from 1:09 - 1:25.

This ensures that orders are accurately processed and reduces the risk of discrepancies.

