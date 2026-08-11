---
description: Verify SFTP remotes and paths from the released NetSuite job configuration.
---

# Verify SFTP locations

NetSuite connector jobs do not provide one universal directory tree for every deployment. Several released templates are seeded paused with blank SFTP remotes or path parameters. Do not assume that every directory is created automatically on the first run.

## Order-flow path behavior

| Flow | Released configuration behavior |
| --- | --- |
| Customer export | Configure the customer job's System Message type and SFTP remote before activation. |
| Sales-order creation | Configure `systemMessageRemoteId` and `filePathPattern` on `generate_CreateOrderFeed`. |
| POS cash-sale creation | Configure `systemMessageRemoteId` and `filePathPattern` on `generate_CreateOrderFeed_pos`. |
| Allocation to NetSuite fulfillment | Configure `systemMessageRemoteId` and `filePathPattern` on `generate_BrokeredOrderItemsFeed_Netsuite`. |
| Completed OMS fulfillment | In connector v3.0.3, configure the SFTP remote; `generate_FulfilledOrderItemsFeed_Netsuite` sends to `/home/{sftp-username}/netsuite/salesorder/update/`. |
| NetSuite fulfillment returning to OMS | File pickup, transformation, and OMS import path are deployment/integration-stack specific. |

See [Create sales orders and approve OMS orders](../../integration-flows/sales-order/order-approval.md) and [Fulfillment synchronization](../../integration-flows/sales-order/fulfillment.md) for the corresponding jobs.

## Verify a configured path

For each enabled job:

1. Open the job in Job Manager and record its SFTP remote, path parameter, schedule, and pause state.
2. If the flow includes a Data Manager stage, open its configuration and record the import or export contract.
3. Ask an authorized integration administrator to confirm the directory and expected file.
4. Compare filename, size, timestamp, archive behavior, and error output with the Job Run.
5. Retain the Job Run ID and NetSuite execution ID. When Data Manager participates, also retain its `logId`.

An archive or error subdirectory is evidence only after the installed integration creates and uses it. Do not create a directory solely because it appeared in another deployment's documentation.

{% hint style="danger" %}
Do not copy SFTP passwords, private keys, connection secrets, or production file contents into documentation, issues, chat, or screenshots.
{% endhint %}

For a failure, follow [Troubleshoot import configuration errors](../../../system-admin/administration/data-manager/troubleshooting/data-import-errors.md).
