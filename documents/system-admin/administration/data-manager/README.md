---
description: Configure backend master data management imports and understand queue behavior.
---

# Configure Data Manager

Data Manager configuration defines how files enter and leave the HotWax Commerce Order Management System. Use Job Manager to review an import configuration and work with its owner when the service, execution settings, or file contract needs to change.

Use Job Manager for daily operations:

- [Upload a file manually](../job-manager/mdm/manual-uploads.md)
- [Monitor file processing](../job-manager/mdm/file-history.md)
- [Review file details](../job-manager/mdm/file-details.md)

## Understand a configuration

A Data Manager configuration represents one import or export contract. Separate configurations can use different:

- Import or export services
- File formats
- Execution modes
- Templates
- Priorities
- Notification behavior

For example, order imports, fulfillment updates, and inventory resets can each use a different service and data contract.

Most configurations use a generic HotWax Commerce service after middleware transforms the source data. A native integration can use a service designed for that system’s original payload.

## Processing and retention

Imports using different configurations can run concurrently. Do not assume an inventory reset automatically blocks order imports. `Finished` can include failed records; check record counts and errors in Job Manager.

Files and logs are subject to retention and can be deleted automatically. Save required audit evidence in approved storage rather than relying on File History to retain it indefinitely.

Backend scheduling, storage, and cleanup settings are maintained by the HotWax Commerce technical team. See [Everything: Data Manager backend reference](https://github.com/hotwax/oms-documentation/blob/everything-bagel-pub/everything/operations/oms-administration/data-manager/README.md) for the technical procedures.

## Configure with care

Before you change a configuration:

1. Record its current service, execution mode, and template.
2. Confirm every source that uses the configuration.
3. Test the change with approved non-production data.
4. Monitor the resulting file in Job Manager.
5. Restore the previous configuration when the test does not produce the expected contract.

See [Configuration options](configuration-options.md) and [Frequently used configurations](freq-used-configurations.md) for configuration review and examples.
