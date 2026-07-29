---
description: Review Company account, instance, version, timezone, and data-fetch information.
---

# Review Company settings

Use Settings to confirm which account, OMS instance, app version, and timezone are active. The page also shows the last successful data fetch for configuration used by Company.

## Open Settings

1. Open the **Company App**.
2. Go to `Settings`.

## Review account and instance information

Confirm:

* Signed-in user
* OMS instance
* OMS release
* Company app version and build
* Current timezone

Include the instance, release, app version, and build when reporting an issue. Keep authentication tokens and credentials out of the report.

## Change the timezone

1. Open the timezone setting.
2. Select the timezone used to display dates and times.
3. Save the change.
4. Reopen an affected page and confirm the displayed time.

The setting changes displayed times while leaving Shopify shop and facility timezones unchanged.

## Review Data Fetch Status

`Data Fetch Status` lists the configuration areas used by Company and shows their row counts and last successful fetch times.

Use it when the UI is missing a recently changed Product Store, facility, mapping, permission, or integration record.

1. Find the affected data area.
2. Review its last successful fetch time.
3. Use the available refresh action for reference data.
4. Return to the affected page.
5. Confirm whether the new value appears.

Some live activity refreshes only while its page is open. Open the relevant Product Sync, Order Sync, or history page before reporting stale activity.

Contact support when:

* A refresh reports an error
* The last successful fetch remains unchanged after a refresh
* The refreshed row count is unexpectedly zero
* The current UI still shows old data after a successful refresh

Provide the affected area, last successful fetch time, instance, release, and app build.
