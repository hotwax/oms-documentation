---
description: Review account, instance, product store, version, time zone, and data-fetch settings.
---

# Manage Job Manager settings

Open `Settings` to confirm the context used by Job Manager.

## Review your account

The profile card shows the signed-in user. Use:

- `Logout` to end the current session
- `Go to Launchpad` to return to the HotWax Commerce Launchpad
- `Go to Legacy App` to open the previous Job Manager experience

## Confirm the OMS instance

Review `OMS instance` before you run a job, upload a file, or change a configuration.

`Go to OMS` appears only in supported environments and requires `COMMERCEUSER_VIEW`. The button is unavailable when the permission is missing.

## Select a product store

Use `Select store` when the connected Order Management System has more than one product store.

Changing the product store refreshes supported job and file data. It does not apply a product-store filter to system messages.

## Review the app version

The `App` section shows:

- Version
- Build time
- `Update` when a newer installed app version is ready

Select `Update` to load the available version.

## Change the time zone

Job Manager uses the selected time zone for displayed timestamps and schedule interpretation.

1. Select `Change` in the `Timezone` card.
2. Search for a time zone.
3. Select the required time zone.
4. Save the selection.
5. Confirm the displayed current time.

Compare the browser time zone with the selected time zone before you edit a schedule.

## Refresh app data

Use `Data Fetch Status` to review each reference-data source and its record count.

- Select the refresh icon for one data source.
- Select `Refresh All` to reload every listed source.

Wait for the status to finish before you repeat a refresh.
