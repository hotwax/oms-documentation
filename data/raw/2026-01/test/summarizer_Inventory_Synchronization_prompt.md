
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

Cluster Description: Mock reason for Inventory Synchronization cluster.
Raw Items for this Cluster:
[
  {
    "id": "hotwax/receiving#643",
    "repo": "hotwax/receiving",
    "type": "Issue",
    "number": "643",
    "title": "Enable Push Notification Support in Receiving App for New Transfer Orders",
    "labels": [],
    "body": "## What is the motivation for adding/enhancing this feature?\n\nCurrently, the Receiving App does not notify users when a new transfer order becomes available for receiving. Users must manually open the app and refresh to check for new transfer orders, which can lead to delays in the receiving process. Enabling push notifications will allow receiving users to be informed in real time whenever a new transfer order is available, improving operational efficiency and responsiveness.\n\n---\n\n## What are the acceptance criteria?\n\n* [ ] Push notification support is enabled in the Receiving App.\n* [ ] A push notification is sent when a new transfer order becomes available for receiving.\n* [ ] Notifications are sent only to devices/users that have subscribed (opted in).\n* [ ] Notification is received when the app is in foreground, background, or closed.\n* [ ] Each transfer order triggers only one notification (no duplicates).\n* [ ] Notification message clearly indicates that a new transfer order is available for receiving.\n\n---\n\n## Can you complete this feature request by yourself?\n\n* [ ] YES\n* [ ] NO\n\n---",
    "files": [],
    "linkedIssues": [],
    "releaseTag": "v3.7.0"
  },
  {
    "id": "hotwax/receiving#644",
    "repo": "hotwax/receiving",
    "type": "PR",
    "number": "644",
    "title": "Implemented: Added support of notification feature for new transfer orders using with FCM(#643)",
    "labels": [],
    "body": "\r\n### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n\r\n#643\r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\n* Added Firebase messaging service for push notifications for `New Transfer Orders`\r\n* Created `NotificationService` to handle notification preferences and subscriptions\r\n* Introduced user notifications state management in the Vuex store\r\n* Developed `NotificationPreferenceModal` for managing notification preferences\r\n* Added Notifications view to display received notifications\r\n* Integrated notification settings into the Settings view\r\n* Implemented subscription and unsubscription logic based on user preferences\r\n* Enhanced user experience with toast notifications for preference updates\r\n* Added functionality to clear the Firebase registration token on user logout\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [x] I read and followed [contribution rules](https://github.com/hotwax/receiving#contribution-guideline)",
    "files": [
      ".env.example",
      "firebase.json",
      "package-lock.json",
      "package.json",
      "public/firebase-messaging-sw.js",
      "src/App.vue",
      "src/components/NotificationPreferenceModal.vue",
      "src/locales/en.json",
      "src/main.ts",
      "src/router/index.ts",
      "src/services/NotificationService.ts",
      "src/services/UserService.ts",
      "src/store/modules/user/UserState.ts",
      "src/store/modules/user/actions.ts",
      "src/store/modules/user/getters.ts",
      "src/store/modules/user/index.ts",
      "src/store/modules/user/mutation-types.ts",
      "src/store/modules/user/mutations.ts",
      "src/utils/firebase.ts",
      "src/views/Notifications.vue",
      "src/views/Settings.vue",
      "src/views/TransferOrders.vue"
    ],
    "linkedIssues": [],
    "releaseTag": "v3.7.0"
  },
  {
    "id": "hotwax/receiving#641",
    "repo": "hotwax/receiving",
    "type": "PR",
    "number": "641",
    "title": "Improved: oms package version to fix the issue of products not visible",
    "labels": [],
    "body": "### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n\r\n#\r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\n\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [x] I read and followed [contribution rules](https://github.com/hotwax/receiving#contribution-guideline)",
    "files": [
      "package-lock.json",
      "package.json"
    ],
    "linkedIssues": [],
    "releaseTag": "v3.6.1"
  }
]

Output JUST the summary text.
