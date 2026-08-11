---
description: Upload a file through an available master data management configuration.
---

# Upload a file manually

Open `MDM` > `Manual uploads` to submit a file through an existing master data management configuration.

Manual uploads run services in the connected HotWax Commerce instance. Confirm the configuration and file before you start an import.

## Find an import configuration

Search by configuration name or description. Each card represents an available import configuration.

Select a card to open its details and upload controls.

## Review the configuration

Confirm:

- Configuration name and description
- Import service
- File format and expected template
- Execution settings
- Import service parameters

Service parameter metadata is read-only on this page. Use the backend Data Manager configuration when an administrator needs to change the underlying import definition.

See [Configure Data Manager](../../../../system-admin/administration/data-manager/README.md).

## Download a template

Select `Download Template` when the configuration provides one. Keep the column names and supported format unchanged unless the configuration owner confirms a different contract.

## Start an import

1. Select or drop the prepared file in the upload area.
2. Confirm that the page shows the expected file.
3. Review the configuration again.
4. Select `Start Import`.
5. Wait for the submission result.
6. Open `File history` to monitor processing.

Do not submit the same file again only because processing takes time. Find the original submission in [File history](file-history.md) first.

## Edit configuration metadata

Select the edit action only when you are authorized to maintain the configuration. Update the fields exposed by the page, then save and confirm the new values before the next upload.

Changes to the underlying import service or its service parameters belong in the backend Data Manager configuration.
