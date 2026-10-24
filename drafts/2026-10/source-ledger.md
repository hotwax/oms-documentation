# October 2026 source ledger

This reviewer appendix separates product behavior, source integration, release evidence, and deployment. The customer-facing articles summarize workflow changes; this ledger records how their claims were selected.

## Collection and scope

- Exact window: **1 October 2026 00:00 India Standard Time** through **23 October 2026 21:10:58 India Standard Time**.
- GitHub query: `org:hotwax is:pr is:merged merged:2026-09-30T18:30:00Z..2026-10-23T15:40:58Z`. All **10 pages / 905 unique merged PRs** were read; every page reported `incomplete_results=false`. This is the source search inventory, not the number of customer features.
- Release APIs were read for 25 product, framework, and component repositories, with pagination. All published October records were retained locally. Draft release records were not treated as released features.
- Editorial selection prioritizes observable workflows, operator controls, and integration behavior. Maintenance backports are not counted as separate features. Client implementations, incident records, security internals, and development-tool work are excluded from this public package.
- Selected PR metadata and every page of their changed-file lists were collected. Claims were checked against descriptions and relevant patches; claims that conflicted with the actual patch were narrowed.
- Raw API responses and private source patches remain outside this repository. The tables below retain only references and integration/release metadata.

## Reading the evidence

**Release-listed** means the fetched release body directly links the PR. It does not establish tenant deployment. **Merged only** means the PR is merged but no direct release-body link was found in the October snapshot; it does not prove absence from every tag. Target branches matter: a feature-branch merge is not automatically a default-branch integration.

For Receiving #739/#740 and Inventory Count #1463, a separate compare API check used `mergeCommit...tag`. Each result was `diverged` with commits behind the tag, proving the feature commit is not an ancestor of the cited tag. These narrow checks support the explicit exclusions in the release notes.

| Feature | Strongest evidence | Qualification retained in the copy |
| --- | --- | --- |
| Product calendar | Products #80 API and UI patches; #87 merged into that feature branch | Full-store search; 50-row paging; select-all covers loaded rows; only edited dates are sent. |
| Routing | Order Manager #587/#589 and v1.5.0; Order Routing #584 | Individual order view is release-listed; later network dashboard requires data documents; safety stock is current, not historical. |
| Receiving | #739/#740 patches and ancestry vs v4.2.2 | Unknown receipt review differs from confirmed-receipt readback; resolving review sends no inventory. |
| Store counts | Inventory Count #1463/#1479/#1482/#1489 | Synchronization and status-readback gates remain; zeros are meaningful; release tags are not assumed to contain later fixes. |
| Packed transfers | Fulfillment #1717/#1721, v4.2.3/v4.2.4 | Maintenance branch only. Original #1721 evidence did not exercise a confirmed cancellation; this docs task makes no independent QA claim. |
| Shopify transfer ownership | Company #479/#501 and connector #901 | Unknown lists are not successful sync; detachment has ownership and already-pushed guards; event publication is opt-in. |
| Shopify fulfillment | Connector #842/#861/#892, v4.5.0 | Sender starts paused; saved-ID recovery has a documented response-to-commit gap; no exactly-once claim. |
| Inventory resets | Connector #979/#992/#1007/#920 | Later fixes supersede the earlier fail-on-unmapped behavior; physical inbound reset and outbound retry are separate paths. |
| Returns | Shopify #883/#893; NetSuite #488/#517/#524/#532/#557 | Per-piece disposition, receipt prerequisites, optional return-facility setup, paused bin-sync jobs, and ERP-side dependencies. |
| Restocking fees | NetSuite #573 | Configured fee product required; later fees do not update an existing RMA; final product lookup acceptance is not established. |
| Job Manager | #1114/#1119/#1120 | Shopify completion differs from consumption; count/filter scopes are bounded; System Tasks needs recognized OMS 6.5.0+ and APIs. |
| Pre-order preview | #392/#394/#395 and fresh backend/QA status reads | Backend migration and broad hosted QA remain open; help text explains an existing import contract. |

## Selected PR evidence

Dates below are merge times in Asia/Kolkata. Commit links pin the reviewed merged source, rather than a moving branch. A release-body match is stated only when observed directly.

| Source | Merged at India Standard Time | Target branch | Merge commit | October release-body match |
| --- | --- | --- | --- | --- |
| [products #70](https://github.com/hotwax/products/pull/70) | 12 Oct 12:38 | `main` | [`d2beb87d1cd0`](https://github.com/hotwax/products/commit/d2beb87d1cd0973aaafe1b07ab7fb6300a9bc8d6) | Merged only |
| [products #80](https://github.com/hotwax/products/pull/80) | 12 Oct 12:38 | `main` | [`a23a572ab7e8`](https://github.com/hotwax/products/commit/a23a572ab7e8e9bfdad8d91e0f5ae65c88bb4195) | Merged only |
| [products #87](https://github.com/hotwax/products/pull/87) | 12 Oct 09:05 | `claude/product-calendar-native-ionic` | [`d0cda6aea9d8`](https://github.com/hotwax/products/commit/d0cda6aea9d8e094e5a609c1a1fcc41614e4572f) | Merged only |
| [order-manager #587](https://github.com/hotwax/order-manager/pull/587) | 10 Oct 14:31 | `main` | [`f637abda3d6c`](https://github.com/hotwax/order-manager/commit/f637abda3d6c101d9368b16922b62e2ee9358103) | [v1.5.0](https://github.com/hotwax/order-manager/releases/tag/v1.5.0) |
| [order-manager #589](https://github.com/hotwax/order-manager/pull/589) | 11 Oct 03:19 | `main` | [`92e9b7131d2d`](https://github.com/hotwax/order-manager/commit/92e9b7131d2d5e564a8f42d8a01d6b2caea1053c) | [v1.5.0](https://github.com/hotwax/order-manager/releases/tag/v1.5.0) |
| [order-routing #584](https://github.com/hotwax/order-routing/pull/584) | 19 Oct 15:21 | `main` | [`d69065f3da92`](https://github.com/hotwax/order-routing/commit/d69065f3da92ab02490c4010c1478796713d337b) | Merged only |
| [order-routing #585](https://github.com/hotwax/order-routing/pull/585) | 14 Oct 05:41 | `main` | [`ac0b75728e09`](https://github.com/hotwax/order-routing/commit/ac0b75728e0903337f1d6aba04987640ff3e09e6) | Merged only |
| [order-routing #590](https://github.com/hotwax/order-routing/pull/590) | 20 Oct 16:53 | `main` | [`5e96adacde59`](https://github.com/hotwax/order-routing/commit/5e96adacde5998d18885b1a46216c3a169338747) | Merged only |
| [receiving #739](https://github.com/hotwax/receiving/pull/739) | 01 Oct 21:23 | `main` | [`6f188a1fea77`](https://github.com/hotwax/receiving/commit/6f188a1fea776e8b54cc896d6b3fba4a53300774) | Merged only |
| [receiving #740](https://github.com/hotwax/receiving/pull/740) | 02 Oct 19:54 | `main` | [`b575ce1ae581`](https://github.com/hotwax/receiving/commit/b575ce1ae58160ad3ae4af638a38a7ef2e1c57b4) | Merged only |
| [receiving #757](https://github.com/hotwax/receiving/pull/757) | 23 Oct 14:19 | `main` | [`9508a64b6dd1`](https://github.com/hotwax/receiving/commit/9508a64b6dd1a86f8f37c6c6e9ae5750f4bdaaf1) | Merged only |
| [inventory-count #1463](https://github.com/hotwax/inventory-count/pull/1463) | 05 Oct 18:39 | `main` | [`a6e630ba1b67`](https://github.com/hotwax/inventory-count/commit/a6e630ba1b67ec54201d1eed6fd47f90999c6d74) | Merged only |
| [inventory-count #1472](https://github.com/hotwax/inventory-count/pull/1472) | 06 Oct 15:50 | `main` | [`bbe2f269b653`](https://github.com/hotwax/inventory-count/commit/bbe2f269b653285302ac1ee88fce010285af90cc) | Merged only |
| [inventory-count #1479](https://github.com/hotwax/inventory-count/pull/1479) | 14 Oct 16:46 | `main` | [`6ce1652e409b`](https://github.com/hotwax/inventory-count/commit/6ce1652e409bb4fe81ea842003eb72a7a7626e6f) | Merged only |
| [inventory-count #1482](https://github.com/hotwax/inventory-count/pull/1482) | 23 Oct 18:28 | `main` | [`d207cfd7cc7f`](https://github.com/hotwax/inventory-count/commit/d207cfd7cc7f07fd7f7c2c223b6cc5a364f4c378) | Merged only |
| [inventory-count #1485](https://github.com/hotwax/inventory-count/pull/1485) | 20 Oct 17:22 | `main` | [`c1ff708c650f`](https://github.com/hotwax/inventory-count/commit/c1ff708c650fdaef716d7a2336cf8e462a283d2e) | Merged only |
| [inventory-count #1487](https://github.com/hotwax/inventory-count/pull/1487) | 23 Oct 14:18 | `main` | [`c13a63e97c2d`](https://github.com/hotwax/inventory-count/commit/c13a63e97c2d81c9f686abef94455a33057d1065) | Merged only |
| [inventory-count #1489](https://github.com/hotwax/inventory-count/pull/1489) | 23 Oct 20:42 | `main` | [`b2f10ad5f896`](https://github.com/hotwax/inventory-count/commit/b2f10ad5f8967327e04a9134d57c052d73fc5f9b) | Merged only |
| [company #479](https://github.com/hotwax/company/pull/479) | 08 Oct 18:55 | `main` | [`8efa037b05bc`](https://github.com/hotwax/company/commit/8efa037b05bc0be581b28e477ed60881a26a92bb) | [v2.6.0](https://github.com/hotwax/company/releases/tag/v2.6.0) |
| [company #494](https://github.com/hotwax/company/pull/494) | 19 Oct 21:29 | `main` | [`8a08c11b031f`](https://github.com/hotwax/company/commit/8a08c11b031f08a8438f2c3b66ad999c88715548) | Merged only |
| [company #501](https://github.com/hotwax/company/pull/501) | 13 Oct 14:48 | `main` | [`fe943303548f`](https://github.com/hotwax/company/commit/fe943303548f2b66eee46f8d62ae861ad7add3ec) | [v2.8.0](https://github.com/hotwax/company/releases/tag/v2.8.0) |
| [job-manager #1114](https://github.com/hotwax/job-manager/pull/1114) | 12 Oct 04:32 | `main` | [`6533c1b2fffc`](https://github.com/hotwax/job-manager/commit/6533c1b2fffcd44d628259f41bb4108df07d62ac) | Merged only |
| [job-manager #1119](https://github.com/hotwax/job-manager/pull/1119) | 16 Oct 07:05 | `main` | [`c1e168d8fa80`](https://github.com/hotwax/job-manager/commit/c1e168d8fa80c7bab7dac4cfdebbb5087e4db190) | Merged only |
| [job-manager #1120](https://github.com/hotwax/job-manager/pull/1120) | 19 Oct 15:21 | `main` | [`307e749ef65f`](https://github.com/hotwax/job-manager/commit/307e749ef65f5858ed5955faa37352b8ee96aa21) | Merged only |
| [fulfillment #1702](https://github.com/hotwax/fulfillment/pull/1702) | 20 Oct 12:20 | `main` | [`a63b67ba5fbd`](https://github.com/hotwax/fulfillment/commit/a63b67ba5fbd5eb0afbf8cef00017282022b3d67) | Merged only |
| [fulfillment #1717](https://github.com/hotwax/fulfillment/pull/1717) | 22 Oct 18:23 | `release-v4.2.x` | [`12c9004bdb00`](https://github.com/hotwax/fulfillment/commit/12c9004bdb001bdf5f7723a97bdf67583eff8f8a) | [v4.2.3](https://github.com/hotwax/fulfillment/releases/tag/v4.2.3) |
| [fulfillment #1721](https://github.com/hotwax/fulfillment/pull/1721) | 22 Oct 18:58 | `release-v4.2.x` | [`ca30e579ae3a`](https://github.com/hotwax/fulfillment/commit/ca30e579ae3ac8d8ddba77cc79b0c3300e01f15f) | [v4.2.4](https://github.com/hotwax/fulfillment/releases/tag/v4.2.4) |
| [bopis #908](https://github.com/hotwax/bopis/pull/908) | 22 Oct 11:23 | `main` | [`955b53ab7441`](https://github.com/hotwax/bopis/commit/955b53ab7441116353ae46b8aa6b808af59483e9) | Merged only |
| [preorder #392](https://github.com/hotwax/preorder/pull/392) | 19 Oct 15:19 | `main` | [`d04c895797ba`](https://github.com/hotwax/preorder/commit/d04c895797bae66801dc06dbb4fe4e94d515cb40) | Merged only |
| [preorder #394](https://github.com/hotwax/preorder/pull/394) | 20 Oct 12:40 | `main` | [`9d9eb348b475`](https://github.com/hotwax/preorder/commit/9d9eb348b4757215e0590dd5e4bfc151a5ee1215) | Merged only |
| [preorder #395](https://github.com/hotwax/preorder/pull/395) | 20 Oct 14:44 | `main` | [`7c90c7f2b919`](https://github.com/hotwax/preorder/commit/7c90c7f2b9199db2223a96e14921ec46682d5675) | Merged only |
| [mantle-shopify-connector #842](https://github.com/hotwax/mantle-shopify-connector/pull/842) | 05 Oct 11:35 | `main` | [`d9bbeba8c355`](https://github.com/hotwax/mantle-shopify-connector/commit/d9bbeba8c355fa76bfc355029b1099cb74dd559a) | [v4.5.0](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.5.0) |
| [mantle-shopify-connector #861](https://github.com/hotwax/mantle-shopify-connector/pull/861) | 05 Oct 19:13 | `main` | [`3cdd75c9b7b2`](https://github.com/hotwax/mantle-shopify-connector/commit/3cdd75c9b7b2df058bbf9ccaeb301ee4255024e8) | [v4.5.0](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.5.0) |
| [mantle-shopify-connector #883](https://github.com/hotwax/mantle-shopify-connector/pull/883) | 11 Oct 10:50 | `main` | [`383f5fe9b333`](https://github.com/hotwax/mantle-shopify-connector/commit/383f5fe9b333a1d0e36416939616dfa8790ecda0) | [v4.5.0](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.5.0) |
| [mantle-shopify-connector #892](https://github.com/hotwax/mantle-shopify-connector/pull/892) | 12 Oct 12:40 | `main` | [`c89b47815463`](https://github.com/hotwax/mantle-shopify-connector/commit/c89b4781546360b6f0937c08ea14ad410c3e9143) | [v4.5.0](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.5.0) |
| [mantle-shopify-connector #893](https://github.com/hotwax/mantle-shopify-connector/pull/893) | 13 Oct 16:07 | `main` | [`6072a6acd946`](https://github.com/hotwax/mantle-shopify-connector/commit/6072a6acd946c329101e128323586c8fbcc7107b) | [v4.5.0](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.5.0) |
| [mantle-shopify-connector #901](https://github.com/hotwax/mantle-shopify-connector/pull/901) | 13 Oct 12:35 | `main` | [`0f939b53d338`](https://github.com/hotwax/mantle-shopify-connector/commit/0f939b53d3384c41b317bccfe14b2aa1e3828ccc) | [v4.5.0](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.5.0) |
| [mantle-shopify-connector #920](https://github.com/hotwax/mantle-shopify-connector/pull/920) | 14 Oct 11:33 | `main` | [`f101affc8b34`](https://github.com/hotwax/mantle-shopify-connector/commit/f101affc8b3448fdd31e8a88cfdeaff6fe9be7e9) | [v4.5.0](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.5.0) |
| [mantle-shopify-connector #979](https://github.com/hotwax/mantle-shopify-connector/pull/979) | 19 Oct 18:43 | `main` | [`7d197641bc53`](https://github.com/hotwax/mantle-shopify-connector/commit/7d197641bc5365ec46458140030f6714a32480c8) | [v4.5.2](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.5.2) |
| [mantle-shopify-connector #992](https://github.com/hotwax/mantle-shopify-connector/pull/992) | 21 Oct 14:07 | `main` | [`385a84a0e38e`](https://github.com/hotwax/mantle-shopify-connector/commit/385a84a0e38e0e99a2254334c9fbba45a273fd1f) | Merged only |
| [mantle-shopify-connector #1007](https://github.com/hotwax/mantle-shopify-connector/pull/1007) | 21 Oct 17:50 | `main` | [`23397f944235`](https://github.com/hotwax/mantle-shopify-connector/commit/23397f944235a37012fcfdb582e0ef199284add8) | Merged only |
| [mantle-shopify-connector #1026](https://github.com/hotwax/mantle-shopify-connector/pull/1026) | 23 Oct 11:56 | `main` | [`e83ed2a9a6d6`](https://github.com/hotwax/mantle-shopify-connector/commit/e83ed2a9a6d692e45e289bcc88c8adbb2e89cd5e) | Merged only |
| [mantle-netsuite-connector #488](https://github.com/hotwax/mantle-netsuite-connector/pull/488) | 10 Oct 20:47 | `main` | [`9ce9d14343b5`](https://github.com/hotwax/mantle-netsuite-connector/commit/9ce9d14343b5a0d255df4ab1f99f5f5b212a2e88) | [v3.5.0](https://github.com/hotwax/mantle-netsuite-connector/releases/tag/v3.5.0) |
| [mantle-netsuite-connector #517](https://github.com/hotwax/mantle-netsuite-connector/pull/517) | 16 Oct 10:45 | `main` | [`a80f57b7589a`](https://github.com/hotwax/mantle-netsuite-connector/commit/a80f57b7589a0c29f00fee9b5a9af55129c1b904) | [v3.5.1](https://github.com/hotwax/mantle-netsuite-connector/releases/tag/v3.5.1) |
| [mantle-netsuite-connector #524](https://github.com/hotwax/mantle-netsuite-connector/pull/524) | 16 Oct 11:04 | `main` | [`9c285bf9fa6d`](https://github.com/hotwax/mantle-netsuite-connector/commit/9c285bf9fa6dee22e2e22cceff55f624c7add89c) | [v3.5.1](https://github.com/hotwax/mantle-netsuite-connector/releases/tag/v3.5.1) |
| [mantle-netsuite-connector #532](https://github.com/hotwax/mantle-netsuite-connector/pull/532) | 16 Oct 11:10 | `main` | [`374a24a5a7ed`](https://github.com/hotwax/mantle-netsuite-connector/commit/374a24a5a7ed9c48b0c8e44bbbc138aecc758272) | [v3.5.1](https://github.com/hotwax/mantle-netsuite-connector/releases/tag/v3.5.1) |
| [mantle-netsuite-connector #557](https://github.com/hotwax/mantle-netsuite-connector/pull/557) | 19 Oct 15:42 | `main` | [`ba052c78a019`](https://github.com/hotwax/mantle-netsuite-connector/commit/ba052c78a01924468a8a2f6f37e79a87ec010002) | [v3.5.2](https://github.com/hotwax/mantle-netsuite-connector/releases/tag/v3.5.2) |
| [mantle-netsuite-connector #573](https://github.com/hotwax/mantle-netsuite-connector/pull/573) | 21 Oct 20:04 | `main` | [`cdc42208a336`](https://github.com/hotwax/mantle-netsuite-connector/commit/cdc42208a3365f54e3b1001067da9aa12f97c250) | Merged only |
| [accxui #236](https://github.com/hotwax/accxui/pull/236) | 22 Oct 16:29 | `main` | [`5d80661d8dec`](https://github.com/hotwax/accxui/commit/5d80661d8dec6eae1cf7425b0e98fc5c155af86d) | Merged only |
| [accxui #240](https://github.com/hotwax/accxui/pull/240) | 23 Oct 14:09 | `main` | [`b7eab2bad76f`](https://github.com/hotwax/accxui/commit/b7eab2bad76f328e0ce30a507ccfe2cbd05b7a8a) | Merged only |

## Release boundaries and exclusions

- Receiving #739 → v4.2.2: `diverged`, 16 commits behind; #740 → v4.2.2: `diverged`, 28 commits behind. The older release and the newer main work belong to different histories at these comparisons.
- Inventory Count #1463 → v5.2.1: `diverged`, 52 commits behind. A same-day publication date is not proof that a tag includes a merged feature.
- Fulfillment #1702 merged on 20 October after the 14 October v4.3.0 release. Packed-transfer PRs #1717/#1721 target `release-v4.2.x`; this package does not transfer those claims to main or v4.3.x.
- Order Routing #584 and Company #494 merged after their latest observed October app releases. Their app names alone do not establish release inclusion.
- Products #87 merged into `claude/product-calendar-native-ionic` before #80 merged that feature into `main`; it is a follow-up within the same product update.
- NetSuite #613 and #614 merged into feature branches. They are not independently announced as released batch-concurrency capabilities here.
- Shopify #1026's description also discusses an in-flight queue guard, but the collected diff changes only `no-remember-parameters` on the order-history hash service. The notes claim reduced payload retention only.
- Shopify #979 originally failed preparation on missing product mappings. The later #992 patch changes that behavior to skip and count unmapped items, while retaining failure for ambiguous or changed mappings. The copy reflects the later October behavior.
- Shopify #992 and #1007 describe limited or absent native runtime testing for those exact changes. Their merged state is not presented as independent end-to-end certification.
- NetSuite #557 requires product bin/inspection values populated before enabling receipt behavior; the supplied synchronization jobs begin paused. #573 does not add a fee retrospectively to an already-created RMA.
- Preorder backend [#75](https://github.com/hotwax/preorder-maarg/pull/75) and [hosted QA #95](https://github.com/hotwax/preorder-maarg/issues/95) were open at the final status read. Issues #113, #114, #115, and #117 were closed. The older frontend PR description's statement that those individual issues remain open is not repeated as current fact.
- The separate OMS email-queue PR #1195 was closed without a merge at the status read. The preview does not announce production email-queue availability.
- RC-named assembly tags are treated as candidates regardless of GitHub's `prerelease` flag. The version table uses final v6.5.0–v6.5.4 records, not v6.5.0-RC1/RC2.

## Reproducible checks

Read a source with `gh pr view <number> --repo hotwax/<repository> --json state,mergedAt,mergeCommit,baseRefName,files`. Inspect changed-file patches with the paginated `repos/hotwax/<repository>/pulls/<number>/files` API. Read releases with the paginated `repos/hotwax/<repository>/releases` API.

For the ancestry checks, use `gh api repos/hotwax/receiving/compare/<merge-sha>...v4.2.2` or the equivalent Inventory Count comparison. An `ahead` or `identical` result would establish ancestry; the observed `diverged` results do not.

Documentation validation covers changed-file Markdown lint and spelling, local links and fragments, referenced GitHub resources, manifest hashes and unique keys/slugs, Mermaid rendering, SVG parsing, and visual inspection. The draft PR records exact validation results. No application tests were added or rerun for this documentation-only change.

[Release notes](release-notes.md) · [Package overview](README.md)
