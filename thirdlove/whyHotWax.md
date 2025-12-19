# Why HotWax Commerce

## Objectives

- Improve store inventory accuracy while staying on Shopify POS
- Reduce manual work for store receiving and cycle counts
- Keep NetSuite accurate without requiring store teams to work in NetSuite
- Establish repeatable processes that can scale beyond 2 stores

## Prior State and Challenges (from transcripts)

- **Cycle counts and adjustments were difficult with Shopify POS alone.** ThirdLove needed a scanner-first workflow and a clean path to post variances back to NetSuite.
- **Transfer receiving was manual.** Transfer orders were created and fulfilled in NetSuite, but stores were receiving via spreadsheets and manual receiving steps in NetSuite.
- **Damaged inventory needed better traceability.** The team discussed identifying damage reasons and moving inventory out of stores so it does not remain mixed with sellable stock.
- **Future omnichannel expectations created risk.** Leaders raised concerns about inventory timeliness and customer service issues if pickup/ship-from-store is introduced without clear reservation and sync behavior.
- **Start-small preference.** The team wanted to solve store inventory operations first before considering broader OMS and routing changes.
- **Constraints:** Shopify payout reconciliation is important to ThirdLove today; HotWax was not expected to replace that workflow.

## How HotWax Commerce Addresses These Needs

- **Store Inventory Management apps embedded in Shopify POS**
  - Store teams receive and count inventory without logging into NetSuite
  - Works across store hardware mentioned in transcripts (iPads, ChromeOS, scanners)
- **NetSuite integration for inventory operations**
  - NetSuite transfer fulfillments surface to stores for receiving
  - Store receipts create NetSuite item receipts
  - Approved variances post to NetSuite as inventory adjustments
- **Operational controls**
  - Review/approve counts, set tolerance thresholds, and trigger recounts
  - Use damage reason codes and NetSuite inventory locations to bucket non-sellable inventory

## Implementation Notes and Guardrails

- Phase 1 does not replace ThirdLove’s existing Shopify ↔ NetSuite order/inventory sync.
- Ship-from-store and BOPIS are discussed as future phases, not part of the initial rollout.
- A NetSuite instance migration was discussed; all NetSuite-side configuration will need a replication plan.