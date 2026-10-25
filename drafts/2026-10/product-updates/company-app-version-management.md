---
title: Choose when each instance adopts an app release
slug: product-updates/2026-10/company-app-version-management
contentType: product-update
month: 2026-10
status: draft
coverageThrough: 2026-10-25
metaDescription: Choose verified hosted app releases for each OMS instance and environment, review release information, and return to a retained version in Company.
tagNames: [Product Update]
key: product-update:2026-10:company-app-version-management
---

<!-- markdownlint-configure-file { "MD025": { "front_matter_title": "" } } -->

# Choose when each instance adopts an app release

A release can be ready to test while production needs to stay on a familiar build. HotWax Commerce's Company app now gives administrators one place to choose hosted app versions for each Order Management System (OMS) instance and environment.

The underlying [version-aware delivery model](https://www.hotwax.co/product-updates/2026-07/hotwax-introduces-version-aware-app-delivery-for-controlled-oms-rollouts) was announced in July. This update adds the Company controls for selecting a release, reading its notes, and reviewing changes.

**Availability:** Company v2.9.0 is deployed at the UAT and production main URLs, verified October 25, 2026. Available versions vary by app and environment; this does not mean every app has multiple hosted releases.

## Control rollout timing for each instance

The `App Version` page lists the app catalog, including Company, with separate `UAT` and `Prod` version chips. An administrator can test a hosted release in UAT while keeping production on its selected version. The choice belongs to that OMS instance and environment.

`Default` follows the build deployed at the environment's main app URL. That build can differ from the newest GitHub release. Choosing a specific version keeps the instance on that release while it remains hosted.

## Review a release before choosing it

Open a version chip to see the release choices. Each release row combines a radio choice with expandable notes, its published date, a short summary, and a link to the full GitHub release.

Company checks the releases against public hosting and checks availability again before saving. Unavailable releases cannot be selected. Teams can review the change and choose a verified hosted release from the same view.

## Return to a retained version

When an earlier release remains hosted, an administrator can select it again for that instance and environment. For example, on October 25, Company production offers 2.9.0 and retains 2.6.0 as a selectable version. UAT offers 2.9.0 and retains 2.8.1. These are the verified Company choices on that date, not a retention promise for every app.

The app's history button combines UAT and production changes. Each record shows the previous and new value, environment, username, and timestamp in the user's selected timezone. The timestamp does not display a timezone suffix.

## Plan for login re-entry

Saving a different version does not move an already-open session with an ordinary refresh. Users need to sign out and re-enter the affected app so login resolves the selection again. After re-entry, reload retains the selected version.

Read the [app version guide](https://github.com/hotwax/oms-documentation/blob/codex/company-app-version-docs/documents/system-admin/administration/company/manage-app-versions.md) for the selection, rollback, and history procedures, with screenshots.

Sources: [Company v2.9.0](https://github.com/hotwax/company/releases/tag/v2.9.0) and [Company #520](https://github.com/hotwax/company/pull/520).

[October overview](../README.md), [all release notes](../release-notes.md), and [source ledger](../source-ledger.md).
