# HubSpot Monthly Publishing Runbook

This repository supports one automation lifecycle:

1. Generate a month's release notes and product updates from GitHub activity.
2. Review the generated content in a pull request.
3. Publish to HubSpot when that pull request is merged.
4. Record publish state in `state/hubspot-sync-state.json`.

## Supported Workflows

- `generate-monthly-content.yml`
- `publish-monthly-content.yml`
- `replay-monthly-content.yml`

## Standard Monthly Flow

1. The scheduled workflow runs on the first day of the month, or an operator runs `Generate Monthly Content` manually.
2. The workflow generates:
   - `drafts/YYYY-MM/release-notes.md`
   - `drafts/YYYY-MM/product-updates/*.md`
   - `drafts/YYYY-MM/publish-manifest.json`
   - updated entries in `state/hubspot-sync-state.json`
3. The workflow opens or updates a draft PR on the configured monthly branch prefix.
4. Review the generated Markdown, the publish manifest, and the sync state changes.
5. Merge the PR.
6. `publish-monthly-content.yml` publishes the approved content to HubSpot and commits the updated sync state back to the base branch.

## Replay Flow

Use replay when a month was published incorrectly and needs to be regenerated and republished to the same HubSpot posts.

1. Run `Replay Monthly Content`.
2. Provide:
   - `month` in `YYYY-MM`
   - a short `reason`
3. The workflow regenerates the selected month in replay mode and opens or updates a replay PR.
4. Review the regenerated drafts, the replay manifest metadata, and the sync state reset to `pending`.
5. Merge the replay PR.
6. The normal publish workflow republishes the same HubSpot post IDs or slug matches and updates replay metadata in the sync state.

## Required Configuration

### GitHub Secrets

- `GEMINI_API_KEY`
- `HUBSPOT_PRIVATE_APP_TOKEN`

### GitHub Variables

- `SOURCE_REPOS`
- `AUTOMATION_BASE_BRANCH`

### Repository Config

- `config/publishing.json`

## State Files

### Publish Manifest

Each month has a `drafts/YYYY-MM/publish-manifest.json` file. It is the contract that the publish workflow executes.

Key fields:

- `month`
- `mode`
- `requestedAt`
- `requestedBy`
- `replayReason`
- `items`

### Sync State

`state/hubspot-sync-state.json` tracks the HubSpot publish status for each generated item.

Key fields per item:

- `status`
- `hubspotPostId`
- `hubspotUrl`
- `firstPublishedAt`
- `lastPublishedAt`
- `lastAction`
- `replayCount`
- `lastReplayReason`

## Validation

Run these before merging automation changes:

```sh
npm run validate:manifest
npm run validate:state
```

## Failure Handling

- If generation fails, fix the generation inputs or code and rerun generation for the month.
- If publish fails for one or more items, inspect `state/hubspot-sync-state.json` and the GitHub Actions logs.
- If a published month needs correction, use the replay workflow instead of creating replacement HubSpot posts manually.

## Repo Hygiene

- `tmp/` is scratch space and should not be committed.
- Do not commit ad hoc debug scripts into the supported automation surface.
- Leave unrelated docs content under `documents/` unchanged.
