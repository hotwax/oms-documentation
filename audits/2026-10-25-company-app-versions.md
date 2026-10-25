# Company app version documentation evidence

Reviewed October 25, 2026. Tracks [documentation issue #1948](https://github.com/hotwax/oms-documentation/issues/1948).

## Publication and overlap review

* The live [Company guide](https://docs.hotwax.co/documents/system-admins/administration/company) and its navigation were opened in the browser. They contain Settings and the existing administration guides, with no App Version task guide.
* The live [product update index](https://www.hotwax.co/product-updates) offers September 2026 as the latest month. The current site sitemap and GitHub draft search found no October article about these new controls.
* [July's version-aware delivery announcement](https://www.hotwax.co/product-updates/2026-07/hotwax-introduces-version-aware-app-delivery-for-controlled-oms-rollouts) covers the underlying delivery model. October copy must explain the new Company management controls without presenting the July foundation as new.
* [PR #1943](https://github.com/hotwax/oms-documentation/pull/1943) is open and draft, with no app-version story. No later or superseding monthly draft was found. Merge status and live publication were checked separately.

## Evidence ledger

| Source | Fact established | Evidence type |
| --- | --- | --- |
| [Company #520](https://github.com/hotwax/company/pull/520), merge 2132a58898b3dcf672a6674b39d4353ad5f7bb49 | Merged management UI and behavior | Source integration |
| [Company v2.9.0](https://github.com/hotwax/company/releases/tag/v2.9.0) | Published October 25, 2026; release body links #520 | Release record |
| [AppVersion.vue at v2.9.0](https://github.com/hotwax/company/blob/v2.9.0/src/views/AppVersion.vue) | Catalog matrix, UAT/Prod columns, Legacy group, combined history action, save checks | Source behavior |
| [Version picker](https://github.com/hotwax/company/blob/v2.9.0/src/components/app-version/SelectAppVersionModal.vue) and [history](https://github.com/hotwax/company/blob/v2.9.0/src/components/app-version/AppVersionHistoryModal.vue) | Radio choice, release dates/notes, refresh, unavailable choices, username fallback and local-time history | Source behavior |
| Live Company production UI | Default 2.9.0; selectable 2.9.0 and retained 2.6.0; disabled unavailable versions; expanded notes and GitHub link; UAT/Prod history | Observed October 25 |
| Live Company UAT UI | Default 2.9.0; selectable 2.9.0 and retained 2.8.1 | Observed October 25 |
| Existing public hosting-check service, fresh unauthenticated reads | Both environment roots and their retained versions report available and the matching environment configuration | Hosting verification |
| Same-day deployed acceptance record supplied with this task | Actual selection, rollback, backend readback, login re-entry, reload persistence, and exact restoration were tested before this documentation task | Prior deployment acceptance; not repeated writes |

## Screenshot and validation boundaries

The three screenshots show the real deployed production UI against an existing noncustomer verification instance. Captures are limited to the page content or modal so instance footer details and unrelated navigation are excluded. No fabricated records, API mocks, DOM replacements, or pixel edits were used. The history username is a verification account. The screenshot hashes are in the [manifest](2026-10-25-company-app-version-screenshots.json).

This task opened read-only controls and expanded release details. It did not save version settings or modify customer instances. The guide explicitly preserves the known login re-entry requirement for already-open sessions. Public hosting results and GitHub tags do not establish compatibility for every app/backend pair, universal retained-version availability, or seamless switching.

Validation results and rendered GitBook preview are recorded in the pull request. Documentation and the October editorial package remain proposals; no merge or CMS publication is authorized by this change.
