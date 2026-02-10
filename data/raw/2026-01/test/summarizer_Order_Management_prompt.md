
You are a Product Manager at HotWax Commerce drafting a release note for a Retailer.
The reader is enthusiastic about their system and cares about system improvements and new features.

Summarize this cluster of updates into a cohesive release note entry.
Follow the structure: Problem, Solution, Impact.

Style Guide Snippet:
- Simpler is better.
- Active voice.
- Be granular but concise (3-4 sentences total).
- **Tone**: Maintain a professional, utility-focused tone. 
- **No AI Slop**: Avoid words like "enhanced", "streamlined", "seamless", or "robust".
- **No Exclamation Points**: Strictly use periods for all sentences.
- **No dev-time bugs**: Any "fixes" or "issues" found during development of a new feature should be synthesized as part of the feature's polished experience. Avoid words like "fixed", "issue", or "bug" for new features.

Cluster Description: Mock reason for Order Management cluster.
Raw Items for this Cluster:
[
  {
    "id": "hotwax/receiving#621",
    "repo": "hotwax/receiving",
    "type": "Issue",
    "number": "621",
    "title": "Mis-shipped Items Not Visible in Completed Tab After TO Receiving",
    "labels": [
      "bug"
    ],
    "body": "**Current Behavior**\nWhen a mis-shipped item is added during Transfer Order (TO) receiving, the item is added successfully. However, after completing the receiving process, the mis-shipped item is not visible in the Completed tab or in the History.\nso we are unable to track mis-shipped items after TO completion.\n\n**Expected Behavior**\nMis-shipped items added during TO receiving should be displayed in the Completed tab",
    "files": [],
    "linkedIssues": [],
    "releaseTag": "v3.6.0"
  },
  {
    "id": "hotwax/receiving#636",
    "repo": "hotwax/receiving",
    "type": "PR",
    "number": "636",
    "title": "Implemented: Added support to display mis-shipped items in the “All” and “Completed” tabs (#621)",
    "labels": [],
    "body": "### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n\r\n#621 \r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\n- When a user adds an item on the TO detail page as mis-shipped.\r\n- It will now appear in the Open/All tab immediately after being added, and after receiving the item, the mis-shipped item will also be visible in the All/Completed tab as well as in the Receiving Item History modal.\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [x] I read and followed [contribution rules](https://github.com/hotwax/receiving#contribution-guideline)",
    "files": [
      "src/locales/en.json",
      "src/services/TransferOrderService.ts",
      "src/store/modules/transferorder/TransferOrderState.ts",
      "src/store/modules/transferorder/actions.ts",
      "src/store/modules/transferorder/getters.ts",
      "src/store/modules/transferorder/index.ts",
      "src/store/modules/transferorder/mutation-types.ts",
      "src/store/modules/transferorder/mutations.ts",
      "src/views/TransferOrderDetail.vue"
    ],
    "linkedIssues": [],
    "releaseTag": "v3.6.0"
  },
  {
    "id": "hotwax/receiving#638",
    "repo": "hotwax/receiving",
    "type": "PR",
    "number": "638",
    "title": "Improved: changed the 'receiptsV2' API endpoint name to 'receipts' (#621)",
    "labels": [],
    "body": "\r\n### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n\r\n#621\r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\n* Changed the API endpoint name that posts items to create shipment receipts.\r\n* Renamed from `receiptsV2` to `receipts`.\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [x] I read and followed [contribution rules](https://github.com/hotwax/receiving#contribution-guideline)",
    "files": [
      "src/services/TransferOrderService.ts"
    ],
    "linkedIssues": [],
    "releaseTag": "v3.6.0"
  }
]

Output JUST the summary text.
