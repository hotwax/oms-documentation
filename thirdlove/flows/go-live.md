# Go-Live (Phase 1)

## Scope

This page documents a sandbox-first rollout approach for ThirdLove’s store inventory management implementation.

## Environments and Access (from transcripts)

- **Shopify sandbox:** `ThirdLove-UAT` (collaborator access required)
- **NetSuite sandbox:** admin access required to deploy/configure integration scripts
- **HotWax integration user:** `integrations@hotwax.co` (used for access requests)

## Recommended Rollout Plan

1. Confirm scope for Phase 1 (inventory only; no order routing changes).
2. Establish sandbox access (Shopify + NetSuite) and validate required NetSuite scripts.
3. Validate end-to-end workflows in sandbox:
   - Transfer order receiving → NetSuite item receipts
   - Cycle counts → review → NetSuite inventory adjustments
   - Damaged inventory buckets and transfers
4. Document decisions (damage codes, approval thresholds, ownership).
5. Replicate configuration to production after internal review/approval.
6. Train store and ops teams (training sessions were discussed as part of onboarding).

## Timing Notes

- Peak season timing was a concern; the team discussed avoiding Cyber Week/Cyber Monday.
- A January go-live window was discussed (after sandbox validation and review).
- A NetSuite instance migration was discussed; confirm what needs to be duplicated and when.

