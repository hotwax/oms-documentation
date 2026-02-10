
You are a Lead Architect for HotWax Commerce. Analyze these repos and PRs to create logical clusters for a release note.

Step 1: Identify Repository Logical Names
Repository Context (Descriptions & Relations): 
{
  "hotwax/receiving": {
    "owner": "hotwax",
    "repo": "receiving",
    "description": "HotWax Commerce receiving app.  It's a front-end application built with Ionic for managing the receiving process.",
    "relations": "Likely interacts with backend services for order and inventory management.  Uses Ionic framework."
  },
  "hotwax/bopis": {
    "owner": "hotwax",
    "repo": "bopis",
    "description": "HotWax BOPIS (Buy Online, Pick Up In Store) application. A store-ops UI for managing buy-online-pickup-in-store and ship-to-store fulfillment.",
    "relations": "Connects to an OMS (Order Management System) backend.  Part of a larger fulfillment ecosystem."
  },
  "hotwax/fulfillment": {
    "owner": "hotwax",
    "repo": "fulfillment",
    "description": "HotWax Fulfillment PWA for store and warehouse teams to execute order fulfillment workflows (picking, packing, shipping, transfer orders).",
    "relations": "Connects to HotWax Commerce services.  Part of a larger fulfillment ecosystem, likely related to BOPIS and other order processing apps."
  },
  "hotwax/inventory-count": {
    "owner": "hotwax",
    "repo": "inventory-count",
    "description": "HotWax Inventory/Cycle Count mobile + web application for physical counts, offline data capture, and synchronization with the OMS.",
    "relations": "Integrates with HotWax OMS for inventory accuracy.  Part of the overall inventory management system."
  },
  "hotwax/transfers": {
    "owner": "hotwax",
    "repo": "transfers",
    "description": "Transfers App.  Used for managing inventory transfers, likely between stores or warehouses.",
    "relations": "Uses Ionic framework. Likely interacts with inventory and fulfillment systems."
  },
  "hotwax/facilities": {
    "owner": "hotwax",
    "repo": "facilities",
    "description": "Facilities application.  The README is empty, so the purpose is unclear.",
    "relations": "Unknown.  May relate to store or warehouse management."
  },
  "hotwax/preorder": {
    "owner": "hotwax",
    "repo": "preorder",
    "description": "Preorder application. Uses Ionic framework.",
    "relations": "Uses Ionic framework.  The release page points to 'pickingapp', suggesting a relationship with that repository."
  },
  "hotwax/hotwax-maarg-util": {
    "owner": "hotwax",
    "repo": "hotwax-maarg-util",
    "description": "Utility library for linking OFBiz and Moqui instances.",
    "relations": "Specifically designed to work with OFBiz and Moqui, suggesting these are core technologies in the HotWax ecosystem."
  },
  "hotwax/mantle-shopify-connector": {
    "owner": "hotwax",
    "repo": "mantle-shopify-connector",
    "description": "Moqui runtime component integrating with Shopify admin APIs for OMS workflows.",
    "relations": "Integrates with Shopify. Uses Moqui framework."
  },
  "hotwax/oms": {
    "owner": "hotwax",
    "repo": "oms",
    "description": "Order Management System.",
    "relations": "Central component, likely integrated with BOPIS, Fulfillment, Inventory Count, and other apps."
  },
  "hotwax/dxp-components": {
    "owner": "hotwax",
    "repo": "dxp-components",
    "description": "DXP Components for Vue applications. A component library for Vue-based frontends.",
    "relations": "Provides reusable UI components for other HotWax applications."
  },
  "hotwax/hotwax-shopify-oms-bridge": {
    "owner": "hotwax",
    "repo": "hotwax-shopify-oms-bridge",
    "description": "Bridge between Shopify and the HotWax OMS.",
    "relations": "Connects Shopify to the core OMS system."
  },
  "hotwax/hotwax-oms": {
    "owner": "hotwax",
    "repo": "hotwax-oms",
    "description": "Order Management System (Apache OFBiz based).",
    "relations": "Core OMS component, likely the backend for many other applications. Based on Apache OFBiz."
  },
  "hotwax/hotwax-poorti": {
    "owner": "hotwax",
    "repo": "hotwax-poorti",
    "description": "Poorti application. The README is minimal, but it appears to be a GitLab project.",
    "relations": "Unknown.  May be a supporting application or tool."
  },
  "hotwax/job-manager": {
    "owner": "hotwax",
    "repo": "job-manager",
    "description": "HotWax Commerce Job Manager App. Uses Ionic framework.",
    "relations": "Uses Ionic framework. Likely manages background tasks or processes within the HotWax ecosystem."
  },
  "hotwax/hotwax-ofbiz-oms-usl": {
    "owner": "hotwax",
    "repo": "hotwax-ofbiz-oms-usl",
    "description": "Apache OFBiz data model as per Moqui entity definition.  Focuses on data integration with OFBiz.",
    "relations": "Integrates with OFBiz and Moqui.  Provides data mappings and configurations."
  },
  "hotwax/mantle-netsuite-connector": {
    "owner": "hotwax",
    "repo": "mantle-netsuite-connector",
    "description": "NetSuite Connector in Moqui.",
    "relations": "Integrates with NetSuite. Uses Moqui framework."
  },
  "hotwax/hotwax-unigate": {
    "owner": "hotwax",
    "repo": "hotwax-unigate",
    "description": "Unigate application. The README is empty, so the purpose is unclear.",
    "relations": "Unknown."
  },
  "hotwax/OrderRouting": {
    "owner": "hotwax",
    "repo": "OrderRouting",
    "description": "Order Routing application. Manages the flow of customer orders from sale to fulfillment.",
    "relations": "Likely integrates with OMS, Fulfillment, and potentially Shipping applications."
  }
}

Step 2: Organize PRs into Clusters
- Group items related across repos into cohesive features.
- Filter out "Noise" (version bumps, chores).
- Clusters should represent a wholistic feature but should not mix two features within the same business processes into the same release note. For example, if an app has multiple distinct features, each feature should be in a separate cluster.
- Sometimes pull requests will feel like different features but are actaully part of one connected feature. When creating clusters, think about user roles and what they would consider a feature. For example, a feature may be rolled out related to sales orders that had some changes in the order import process and then approval flow based on that in different repositories. You need to inteligently stitch together that these are part of a journey and turn it into one release note.
- **CRITICAL MERGING RULE**: Do NOT create separate sections for technical sub-steps.
- **Specificity Rule**: While grouping by theme, ensure that general utility updates are pulled into the specific feature they support. For example, a "PDF Generation" fix that was made specifically for "Digital Invoicing" should be clustered with "Digital Invoicing".
- **Naming Rule**: Give clusters descriptive, utility-focused names. Use ONLY simple nouns (e.g., "Inventory Synchronization").
- **CRITICAL ACCOUNTABILITY RULE**: You MUST account for EVERY SINGLE item ID provided in the "Item Metadata" section below. EVERY ID must appear in exactly one of these three fields: "clusters", "noiseItemIds", or "needClarificationItemIds". DO NOT omit any IDs.
- If you feel like an github pr or issue is not descriptive enough to logically cluster it but isn't noise, then throw them into "needClarificationItemIds".
- **STRICT PROHIBITION**: DO NOT use words like "Enhanced", "Streamlined", "Improvements", "Enhancements", "Updates", "Fixes", "Handling", or "Logic" in cluster names.


Item Metadata (Full Context):
Analyze the title, body, and linked issues of each item to understand its business impact and relationship to other items.
[
  {
    "id": "hotwax/receiving#643",
    "repo": "hotwax/receiving",
    "title": "Enable Push Notification Support in Receiving App for New Transfer Orders",
    "labels": [],
    "type": "Issue",
    "body": "## What is the motivation for adding/enhancing this feature?\n\nCurrently, the Receiving App does not notify users when a new transfer order becomes available for receiving. Users must manually open the app and refresh to check for new transfer orders, which can lead to delays in the receiving process. Enabling push notifications will allow receiving users to be informed in real time whenever a new transfer order is available, improving operational efficiency and responsiveness.\n\n---\n\n## What are the acceptance criteria?\n\n* [ ] Push notification support is enabled in the Receiving App.\n* [ ] A push notification is sent when a new transfer order becomes available for receiving.\n* [ ] Notifications are sent only to devices/users that have subscribed (opted in).\n* [ ] Notification is received when the app is in foreground, background, or closed.\n* [ ] Each transfer order triggers only one notification (no duplicates).\n* [ ] Notification message clearly indicates that a new transfer order is available for receiving.\n\n---\n\n## Can you complete this feature request by yourself?\n\n* [ ] YES\n* [ ] NO\n\n---",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/receiving#644",
    "repo": "hotwax/receiving",
    "title": "Implemented: Added support of notification feature for new transfer orders using with FCM(#643)",
    "labels": [],
    "type": "PR",
    "body": "\r\n### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n\r\n#643\r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\n* Added Firebase messaging service for push notifications for `New Transfer Orders`\r\n* Created `NotificationService` to handle notification preferences and subscriptions\r\n* Introduced user notifications state management in the Vuex store\r\n* Developed `NotificationPreferenceModal` for managing notification preferences\r\n* Added Notifications view to display received notifications\r\n* Integrated notification settings into the Settings view\r\n* Implemented subscription and unsubscription logic based on user preferences\r\n* Enhanced user experience with toast notifications for preference updates\r\n* Added functionality to clear the Firebase registration token on user logout\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [x] I read and followed [contribution rules](https://github.com/hotwax/receiving#contribution-guideline)",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/receiving#641",
    "repo": "hotwax/receiving",
    "title": "Improved: oms package version to fix the issue of products not visible",
    "labels": [],
    "type": "PR",
    "body": "### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n\r\n#\r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\n\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [x] I read and followed [contribution rules](https://github.com/hotwax/receiving#contribution-guideline)",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/receiving#621",
    "repo": "hotwax/receiving",
    "title": "Mis-shipped Items Not Visible in Completed Tab After TO Receiving",
    "labels": [
      "bug"
    ],
    "type": "Issue",
    "body": "**Current Behavior**\nWhen a mis-shipped item is added during Transfer Order (TO) receiving, the item is added successfully. However, after completing the receiving process, the mis-shipped item is not visible in the Completed tab or in the History.\nso we are unable to track mis-shipped items after TO completion.\n\n**Expected Behavior**\nMis-shipped items added during TO receiving should be displayed in the Completed tab",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/receiving#636",
    "repo": "hotwax/receiving",
    "title": "Implemented: Added support to display mis-shipped items in the “All” and “Completed” tabs (#621)",
    "labels": [],
    "type": "PR",
    "body": "### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n\r\n#621 \r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\n- When a user adds an item on the TO detail page as mis-shipped.\r\n- It will now appear in the Open/All tab immediately after being added, and after receiving the item, the mis-shipped item will also be visible in the All/Completed tab as well as in the Receiving Item History modal.\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [x] I read and followed [contribution rules](https://github.com/hotwax/receiving#contribution-guideline)",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/receiving#638",
    "repo": "hotwax/receiving",
    "title": "Improved: changed the 'receiptsV2' API endpoint name to 'receipts' (#621)",
    "labels": [],
    "type": "PR",
    "body": "\r\n### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n\r\n#621\r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\n* Changed the API endpoint name that posts items to create shipment receipts.\r\n* Renamed from `receiptsV2` to `receipts`.\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [x] I read and followed [contribution rules](https://github.com/hotwax/receiving#contribution-guideline)",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/receiving#639",
    "repo": "hotwax/receiving",
    "title": "Improved: UI to define the width for the info-card",
    "labels": [],
    "type": "PR",
    "body": "### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n\r\n#\r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\n\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [x] I read and followed [contribution rules](https://github.com/hotwax/receiving#contribution-guideline)",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/bopis#699",
    "repo": "hotwax/bopis",
    "title": "UI modal for the proof of delivery",
    "labels": [],
    "type": "Issue",
    "body": "This ticket is for the UI change needed for the Proof of delivery in this application\n\nDescription\nWe need a Proof of Delivery (POD) feature in OMS to record and confirm that a customer (or their authorized representative) has picked up an order. This feature should capture proof of identity and generate a confirmation email to the customer.\n\nRequirements / Acceptance Criteria\n1. Customer Confirmation at Pickup\nStore associate asks the customer to confirm order details at pickup.\nCustomer provides proof of identity (e.g., ID upload, signature, or unique code).\nThe system records this confirmation and links it to the order.\n2. Email Notification\nOnce confirmation is saved, an automated email is sent to the customer notifying them that the order has been picked up.\nEmail should include order details and confirmation of pickup.\nhttps://www.figma.com/design/ogNhTfcZubEuFjCBZ8Gttu/ADOC?node-id=2004-1013&t=PZEm1L2ZVQYibpoG-1",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/bopis#734",
    "repo": "hotwax/bopis",
    "title": "Improved: support to have settings card for proof of delivery setting and added permission for proof of delivery and request transfer(#699)",
    "labels": [],
    "type": "PR",
    "body": "### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n\r\n#699 \r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\n\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [x] I read and followed [contribution rules](https://github.com/hotwax/ionic-bopis#contribution-guideline)\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/bopis#729",
    "repo": "hotwax/bopis",
    "title": "Add: order handover email support and enhanced status notifications",
    "labels": [],
    "type": "PR",
    "body": "### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\nCloses #[[82](https://github.com/hotwax/hotwax-oms/issues/82#event-20106095834)]\r\n#\r\n\r\n### Short Description and Why It's Useful\r\nAdded support for sending an order completion (handover) email notification for \"Ship to Store\" orders using the `HANDOVER_BOPIS_ORDER` notification type.\r\n\r\n**Key Changes:**\r\n- **Automated Handover Email:** triggers a handover notification when the final shipgroup of an order is handed over.\r\n- **Enhanced Notifications:** Improved toast feedback for both **Handover** and **Arrived** actions.\r\n- **Support for Split Orders:** Implemented `isLastShipGroup` logic in [ShipToStoreOrders.vue](cci:7://file:///home/yashverma/Ionic/bopis/src/views/ShipToStoreOrders.vue:0:0-0:0) to ensure the completion email is sent only when the entire order is finished, while providing standard \"Success\" toasts for partial shipgroup actions.\r\n\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [x] I read and followed [contribution rules](https://github.com/hotwax/ionic-bopis#contribution-guideline)",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/bopis#699",
    "repo": "hotwax/bopis",
    "title": "UI modal for the proof of delivery",
    "labels": [],
    "type": "Issue",
    "body": "This ticket is for the UI change needed for the Proof of delivery in this application\n\nDescription\nWe need a Proof of Delivery (POD) feature in OMS to record and confirm that a customer (or their authorized representative) has picked up an order. This feature should capture proof of identity and generate a confirmation email to the customer.\n\nRequirements / Acceptance Criteria\n1. Customer Confirmation at Pickup\nStore associate asks the customer to confirm order details at pickup.\nCustomer provides proof of identity (e.g., ID upload, signature, or unique code).\nThe system records this confirmation and links it to the order.\n2. Email Notification\nOnce confirmation is saved, an automated email is sent to the customer notifying them that the order has been picked up.\nEmail should include order details and confirmation of pickup.\nhttps://www.figma.com/design/ogNhTfcZubEuFjCBZ8Gttu/ADOC?node-id=2004-1013&t=PZEm1L2ZVQYibpoG-1",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/bopis#728",
    "repo": "hotwax/bopis",
    "title": "Improved: env file to update the product store setting enums",
    "labels": [],
    "type": "PR",
    "body": "### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n\r\n#\r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\n\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [x] I read and followed [contribution rules](https://github.com/hotwax/ionic-bopis#contribution-guideline)\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/bopis#730",
    "repo": "hotwax/bopis",
    "title": "fix: update shipping orders description",
    "labels": [],
    "type": "PR",
    "body": "Update the misleading description for the \"Shipping Orders\" setting to \"View only shipping orders in the application.\" and included translations for Spanish and Japanese.\n\n### Changes Checklist:\n- Updated description in `Settings.vue`.\n- Updated English locale (`en.json`).\n- Updated Spanish locale (`es.json`).\n- Updated Japanese locale (`ja.json`).",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/bopis#703",
    "repo": "hotwax/bopis",
    "title": "#699 proof of delivery UI modal",
    "labels": [],
    "type": "PR",
    "body": "### Related Issues\r\nhttps://github.com/hotwax/bopis/issues/699\r\n\r\n### Short Description and Why It's Useful\r\nHere are the details covered in the PR:\r\nImplemented the Proof of Delivery (POD) UI modal as described in the requirement.\r\nAdded support for capturing customer confirmation at pickup (ID upload / signature UI section).\r\nConnected modal actions with order confirmation logic.\r\nThe modal triggers the backend process that will handle email confirmation once POD is saved.\r\n\r\n\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<img width=\"1822\" height=\"1108\" alt=\"image\" src=\"https://github.com/user-attachments/assets/288b8e4a-7807-436e-916c-dbee99dfd808\" />\r\n<img width=\"1822\" height=\"1108\" alt=\"image\" src=\"https://github.com/user-attachments/assets/73a14b76-c20f-42f7-a1ba-48fdb099bd28\" />\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [ ] I read and followed [contribution rules](https://github.com/hotwax/ionic-bopis#contribution-guideline)\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/bopis#731",
    "repo": "hotwax/bopis",
    "title": "Removed: unwanted null checks in the proof of delivery modal",
    "labels": [],
    "type": "PR",
    "body": "### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n\r\n#\r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\n\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [x] I read and followed [contribution rules](https://github.com/hotwax/ionic-bopis#contribution-guideline)\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/bopis#708",
    "repo": "hotwax/bopis",
    "title": "Remove solr references from the app, as its not used anymore and other unused code",
    "labels": [
      "bug"
    ],
    "type": "Issue",
    "body": "## Current behavior\n<!--  Describe the current behavior pointing exactly why it's not working as intended. -->\nWe have multiple endpoints and methods defined in the app those are not used after being migrated to moqui, so need to cleanup the code.\n\n## Expected behavior\n<!-- Describe what the desired behavior should be. -->\nRemove all the endpoints and methods and actions from the app those are not used anymore.\n\n## Steps to reproduce the issue\n<!-- Please provide the steps to reproduce and if possible a *minimal reproducible example* of the problem -->\n\n\n## Can you handle fixing this bug by yourself?\n\n- [x] YES\n- [ ] NO\n\n## Environment details\n<!-- Please provide all the informations required below. -->\n- Browser: <!-- Your browser, version -->\n- OS: <!-- Your operating system, version -->\n- Code Version: <!-- Tag, branch or commit determining which version of code is used -->\n\n## Additional information\n<!-- If you think that any additional information would be useful, please provide them here. -->\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/bopis#720",
    "repo": "hotwax/bopis",
    "title": "Loading message “Click the backdrop to dismiss” is unclear and should be replaced with a more understandable message",
    "labels": [
      "bug"
    ],
    "type": "Issue",
    "body": "## Current behavior\nLoading message “Click the backdrop to dismiss” is unclear and should be replaced with a more understandable message\n\n## Expected behavior\n\n- Loading message should be clear, user-friendly, and relevant to loading state.\n- Suggested messages:\n  -   “Loading… Please wait”\n  -   “Please wait, fetching details…”\n  -   “Processing your request…”\n\n\n## Steps to reproduce the issue\n\n- Navigate to any tab (open/Completed)  where page loading occurs.\n- Observe the message that appears during loading.\n\n## Can you handle fixing this bug by yourself?\n\n- [ ] YES\n- [ ] NO\n\n\n## Additional information\nhttps://jam.dev/c/78c98fcf-1d29-47b4-8bbf-5996dddc92b8\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/bopis#719",
    "repo": "hotwax/bopis",
    "title": "Edit Picker” option should be disabled after the order is handed over to the customer",
    "labels": [
      "bug"
    ],
    "type": "Issue",
    "body": "## Current behavior\nEdit Picker” option should be disabled after the order is handed over to the customer\n\n## Expected behavior\n- Once an order is handed over to the customer, picker assignment should be locked.\n- System should not allow modifying picker details for completed/closed orders.\n\n## Steps to reproduce the issue\n\n- Open an order that has already been handed over to the customer.\n- Navigate to the picker section.\n- Check if the Edit Picker option is available and change the picker.\n\n## Can you handle fixing this bug by yourself?\n\n- [ ] YES\n- [ ] NO\n\n## Additional information\nhttps://jam.dev/c/e7b0213f-5856-48be-beea-e9c392a3270d",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/bopis#722",
    "repo": "hotwax/bopis",
    "title": "Removed: unused logic, methods, imports and variables from the app(#708)",
    "labels": [],
    "type": "PR",
    "body": "### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n\r\n#708 \r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\n\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [x] I read and followed [contribution rules](https://github.com/hotwax/ionic-bopis#contribution-guideline)\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/bopis#721",
    "repo": "hotwax/bopis",
    "title": "Fixed : loading message text for better understanding (#720)",
    "labels": [],
    "type": "PR",
    "body": "### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n\r\n#720\r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\n- updated loading message .\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [x] I read and followed [contribution rules](https://github.com/hotwax/ionic-bopis#contribution-guideline)\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/bopis#723",
    "repo": "hotwax/bopis",
    "title": "Improved:disabled the edit picker button after handover of order(#719)",
    "labels": [],
    "type": "PR",
    "body": "### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n\r\n#719 \r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\nImproved: disabled the edit picker button after the handover or cancel of order.\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\n<img width=\"994\" height=\"665\" alt=\"Screenshot from 2025-12-01 19-19-09\" src=\"https://github.com/user-attachments/assets/4887f1ca-af99-4219-b4cf-d8554cf320c0\" />\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [ ] I read and followed [contribution rules](https://github.com/hotwax/ionic-bopis#contribution-guideline)\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/bopis#702",
    "repo": "hotwax/bopis",
    "title": "Improved : Bopis to ShipToStore Feature implementation.",
    "labels": [],
    "type": "PR",
    "body": "### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n\r\nCloses #[[82](https://github.com/hotwax/hotwax-oms/issues/82#event-20106095834)]\r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\n\r\n- Improved: Added some fixes related to trim method in queryString payload \r\n-  handled UI to refresh orders even after Email service failure PR #695 .\r\n- Add arrivedShipToStore API call to update shipment status to SHIPMENT_ARRIVED\r\n- Update incoming orders filter to include SHIPMENT_SHIPPED status\r\n- Change ready-for-pickup query to fetch SHIPMENT_ARRIVED instead of SHIPMENT_SHIPPED\r\n- Fix \"Arrived\" button to trigger on SHIPMENT_SHIPPED instead of SHIPMENT_PACKED\r\n- Update order status filters from COMPLETED to APPROVED for proper workflow\r\n- Refactor scheduleOrderForPickup to use new arrived endpoint\r\n- Clean up duplicate handoverOrder code and improve error handling\r\n- Fix customerName reference in pickup notification message\r\n\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [ ] I read and followed [contribution rules](https://github.com/hotwax/ionic-bopis#contribution-guideline)\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/bopis#725",
    "repo": "hotwax/bopis",
    "title": "Made the searchBar static",
    "labels": [],
    "type": "PR",
    "body": "closes: https://github.com/hotwax/dxp-components/issues/439",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/bopis#727",
    "repo": "hotwax/bopis",
    "title": "Fixed: flow to do not allow editing pickers when order is rejected and removed unawanted loader displaying when assign picker modal is closed without selecting any picker(#719)",
    "labels": [],
    "type": "PR",
    "body": "### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n\r\n#719 \r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\n\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [x] I read and followed [contribution rules](https://github.com/hotwax/ionic-bopis#contribution-guideline)\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/fulfillment#1555",
    "repo": "hotwax/fulfillment",
    "title": "Fix: Restrict carrier selection and preserve shipment method for ship-to-store orders",
    "labels": [],
    "type": "PR",
    "body": "\r\n### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\nRelated to [82](https://github.com/hotwax/hotwax-oms/issues/82#issuecomment-3673617640)\r\nCloses [707](https://github.com/hotwax/bopis/issues/707)\r\n#\r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\nThis PR improves the carrier selection experience for \"Ship to Store\" orders.\r\n- **Filtered Carriers**: When an order is set to \"Ship to Store\", the carrier dropdown now ONLY displays carriers that support the \"Ship to Store\" shipment method. This prevents users from selecting incompatible carriers.\r\n- **Preserved Selection**: Enhanced the **updateCarrierAndShippingMethod** logic to preserve the current shipment method when switching carriers. If the new carrier supports the current method (e.g., `SHIP_TO_STORE`), it remains selected instead of resetting to a default value like \"Standard\".\r\n\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\nN/A\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [ ] I read and followed [contribution rules](https://github.com/hotwax/fulfillment#contribution-guideline)",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/inventory-count#1372",
    "repo": "hotwax/inventory-count",
    "title": "Fixed: blank rows when negating the scan events",
    "labels": [],
    "type": "PR",
    "body": "### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n\r\n#\r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\n\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [x] I have read and followed [contribution rules](https://github.com/hotwax/inventory-count#contribution-guideline)\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/inventory-count#1363",
    "repo": "hotwax/inventory-count",
    "title": "Filter discontinued products from Solr",
    "labels": [],
    "type": "Issue",
    "body": "- Add a filter in the Solr queries where products are being searched to filter products falling under the `PCCT_DISCONTINUED` category, field in Solr is `productCategories` and is a list.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/inventory-count#1362",
    "repo": "hotwax/inventory-count",
    "title": "Add confirmation modal when removing a scanEvent record",
    "labels": [],
    "type": "Issue",
    "body": "## What is the motivation for adding/enhancing this feature?\n- Add confirmation modal when removing a scanEvent record from the SessionCountDetail.vue page. The modal will have 2 options: remove all the scanned records of an SKU or remove only the current selected quantity, and based on that, the scanEvent records will be negated.\n\n## Can you complete this feature request by yourself?\n\n- [x] YES\n- [ ] NO\n\n## Additional information\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/inventory-count#1361",
    "repo": "hotwax/inventory-count",
    "title": "Add live search on match product modal",
    "labels": [],
    "type": "Issue",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/inventory-count#1369",
    "repo": "hotwax/inventory-count",
    "title": "Implement instruction execution model for devices",
    "labels": [],
    "type": "Issue",
    "body": "## What is the motivation for adding/enhancing this feature?\n- We have added three new entities:\n  - co.hotwax.oms.agent.AgentCtrlInstrAsgn\n  - co.hotwax.oms.agent. AgentCtrlInstruction\n  - co.hotwax.oms.agent.ExecutionAgent\n\n- The app will listen to the executable instructions from the server and take necessary actions.\n\n## Can you complete this feature request by yourself?\n\n- [x] YES\n- [ ] NO",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/inventory-count#1368",
    "repo": "hotwax/inventory-count",
    "title": "Added filter of DISCONTINUED category products(#1363)",
    "labels": [],
    "type": "PR",
    "body": "### Related Issues\r\n<!--  Put the related issue number which this PR is closing. For example #123 -->\r\n#1363\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n\r\n- [x] I have read and followed [contribution rules](https://github.com/hotwax/inventory-count#contribution-guideline)\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/inventory-count#1365",
    "repo": "hotwax/inventory-count",
    "title": "Added confirmation modal on scanEvent removal(#1362)",
    "labels": [],
    "type": "PR",
    "body": "### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n#1362 \r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<img width=\"2940\" height=\"1446\" alt=\"image\" src=\"https://github.com/user-attachments/assets/931fcf2a-bf5a-4788-844e-8801df45dc45\" />\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [x] I have read and followed [contribution rules](https://github.com/hotwax/inventory-count#contribution-guideline)\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/inventory-count#1364",
    "repo": "hotwax/inventory-count",
    "title": "Added support for live search in match product modal(#1361)",
    "labels": [],
    "type": "PR",
    "body": "### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n#1361 \r\n\r\n### Screenshots\r\n<img width=\"1470\" height=\"724\" alt=\"Screenshot 2026-01-24 at 11 15 58 PM\" src=\"https://github.com/user-attachments/assets/90dc1dab-5da5-4684-a57b-c3c8b095ad76\" />\r\n\r\n- [x] I have read and followed [contribution rules](https://github.com/hotwax/inventory-count#contribution-guideline)\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/inventory-count#1370",
    "repo": "hotwax/inventory-count",
    "title": "Implemented agent execution model to execute instructions(#1369)",
    "labels": [],
    "type": "PR",
    "body": "### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n#1369\r\n\r\n### Short Description and Why It's Useful\r\n- The app will listen to the executable instructions from the server and take necessary actions.\r\n\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n\r\n- [x] I have read and followed [contribution rules](https://github.com/hotwax/inventory-count#contribution-guideline)\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/inventory-count#1356",
    "repo": "hotwax/inventory-count",
    "title": "Add clear local database action",
    "labels": [],
    "type": "PR",
    "body": "## Summary\n- Add a Settings action to clear local inventory data with confirmation\n- Show success/error toast feedback\n- Add localization strings for the new UI\n\nCloses #1355\n",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "1355",
        "body": "Add a clear database action in Settings to let users purge local cached data for inventory counting.\n\nAcceptance:\n- Provide a clear local DB action in Settings.\n- Confirm before clearing.\n- Clear cached inventory-related tables and show success/error toast.\n- Localization strings added for labels and messages.\n",
        "labels": [],
        "files": [],
        "title": "Add clear local database option in Settings"
      }
    ],
    "linkedIssueIds": [
      "1355"
    ]
  },
  {
    "id": "hotwax/inventory-count#1359",
    "repo": "hotwax/inventory-count",
    "title": "Add primary/secondary ID support in variance review lists",
    "labels": [],
    "type": "PR",
    "body": "Closes #1358\n\n- Hydrate products in batches and populate primary/secondary IDs in Assigned/Pending/Closed detail views\n- Extend search and alpha sort to include primary/secondary IDs\n\nTest: `npm run test:unit` (fails: script not found)",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "1358",
        "body": "Add async product hydration and search/sort support for primary/secondary identifiers on Assigned, Pending Review, and Closed detail pages.\n\nAcceptance:\n- Fetch product details in batches (250) after list load and populate product cache.\n- Show primaryId/secondaryId in list rows.\n- Search supports internalName, primaryId, and secondaryId.\n- Alphabetic sort uses primaryId when present.\n",
        "labels": [],
        "files": [],
        "title": "Support primary/secondary IDs in variance review lists"
      }
    ],
    "linkedIssueIds": [
      "1358"
    ]
  },
  {
    "id": "hotwax/inventory-count#1342",
    "repo": "hotwax/inventory-count",
    "title": "Fix scan removal to be per-scan",
    "labels": [],
    "type": "PR",
    "body": "## Summary\n- track scan removals per scan event and prevent repeat removals\n- update removability checks to avoid hiding other scans\n\n## Testing\n- not run (not requested)\n\nFixes #1343",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "1343",
        "body": "When a scan event is removed, users can repeatedly remove the same scan which leads to incorrect quantities. We should allow removing a scan only once and keep the removal option hidden for that scan until aggregation completes.",
        "labels": [],
        "files": [],
        "title": "Prevent multiple removals of a scan event"
      }
    ],
    "linkedIssueIds": [
      "1343"
    ]
  },
  {
    "id": "hotwax/inventory-count#1348",
    "repo": "hotwax/inventory-count",
    "title": "Fix systemic QOH when marking uncounted items out of stock",
    "labels": [],
    "type": "PR",
    "body": "## Summary\n- populate `systemQuantityOnHand` when marking uncounted items as out of stock\n\n## Testing\n- not run\n\nCloses #1347",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "1347",
        "body": "When marking items out of stock from the Uncounted tab on the Count Progress Review page, the systemic QOH was not being set. This has been fixed by ensuring `systemQuantityOnHand` is populated when creating the import record.",
        "labels": [],
        "files": [],
        "title": "Fix systemic QOH not set when marking uncounted items out of stock"
      }
    ],
    "linkedIssueIds": [
      "1347"
    ]
  },
  {
    "id": "hotwax/inventory-count#1354",
    "repo": "hotwax/inventory-count",
    "title": "Handle missing QOH during sync",
    "labels": [],
    "type": "PR",
    "body": "## Summary\n- Resolve missing system QOH before sync and re-evaluate pending items\n- Sync only records with resolved QOH (null/0 treated as valid)\n- Leave records with unresolved QOH pending while syncing the rest\n\nCloses #1353\n",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "1353",
        "body": "When network/API errors prevent fetching system QOH, resolveMissingSystemQOH currently fails and sync either proceeds with missing data or never retries. We need to retry QOH enrichment and block only the records still missing system QOH, while syncing the rest.\n\nAcceptance:\n- Resolve QOH before sync for pending records.\n- API errors/missing response keep the record blocked from sync.\n- Null/empty/0 QOH values are treated as valid and syncable.\n- Other records should still sync even if some are blocked.\n",
        "labels": [],
        "files": [],
        "title": "Block sync for records missing system QOH; allow partial sync"
      }
    ],
    "linkedIssueIds": [
      "1353"
    ]
  },
  {
    "id": "hotwax/inventory-count#1354",
    "repo": "hotwax/inventory-count",
    "title": "Handle missing QOH during sync",
    "labels": [],
    "type": "PR",
    "body": "## Summary\n- Resolve missing system QOH before sync and re-evaluate pending items\n- Sync only records with resolved QOH (null/0 treated as valid)\n- Leave records with unresolved QOH pending while syncing the rest\n\nCloses #1353\n",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "1353",
        "body": "When network/API errors prevent fetching system QOH, resolveMissingSystemQOH currently fails and sync either proceeds with missing data or never retries. We need to retry QOH enrichment and block only the records still missing system QOH, while syncing the rest.\n\nAcceptance:\n- Resolve QOH before sync for pending records.\n- API errors/missing response keep the record blocked from sync.\n- Null/empty/0 QOH values are treated as valid and syncable.\n- Other records should still sync even if some are blocked.\n",
        "labels": [],
        "files": [],
        "title": "Block sync for records missing system QOH; allow partial sync"
      }
    ],
    "linkedIssueIds": [
      "1353"
    ]
  },
  {
    "id": "hotwax/inventory-count#1348",
    "repo": "hotwax/inventory-count",
    "title": "Fix systemic QOH when marking uncounted items out of stock",
    "labels": [],
    "type": "PR",
    "body": "## Summary\n- populate `systemQuantityOnHand` when marking uncounted items as out of stock\n\n## Testing\n- not run\n\nCloses #1347",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "1347",
        "body": "When marking items out of stock from the Uncounted tab on the Count Progress Review page, the systemic QOH was not being set. This has been fixed by ensuring `systemQuantityOnHand` is populated when creating the import record.",
        "labels": [],
        "files": [],
        "title": "Fix systemic QOH not set when marking uncounted items out of stock"
      }
    ],
    "linkedIssueIds": [
      "1347"
    ]
  },
  {
    "id": "hotwax/hotwax-maarg-util#20",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "Fix: Authentication error in DataManagerFileFromSftp service",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#22",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "Implemented agent instruction data model to execute instructions",
    "labels": [],
    "type": "PR",
    "body": "Changelog: Added",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#20",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "Fix: Authentication error in DataManagerFileFromSftp service",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#11",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "Add rest endpoints for SecurityGroup and SecurityPermission entities",
    "labels": [],
    "type": "Issue",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#10",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "Added support to pass data manager log Id in import service",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#12",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "Added: rest endpoint for security group and permission model(#11)",
    "labels": [],
    "type": "PR",
    "body": "Changelog: Added",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#9",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "Added service to upload file from sftp to MDM",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-shopify-connector#254",
    "repo": "hotwax/mantle-shopify-connector",
    "title": "Fix: Prevent SystemMessage Status Update to Null in process#BulkOperationResult",
    "labels": [],
    "type": "PR",
    "body": "Adding a null check for the `statusId` in `process#BulkOperationResult` before attempting to update the `SystemMessage` entity.\r\n\r\n**Changes:**\r\n- Added `statusId` variable to capture the mapped status.\r\n- Added a condition `if (statusId)` to prevent service calls when the status mapping is null (e.g., for 'running' or 'created' statuses).\r\n\r\nFixes #252",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "252",
        "body": "In `process#BulkOperationResult`, the `statusMap` is defined as:\n`[completed:'SmsgConfirmed', canceled:'SmsgCancelled', failed:'SmsgError', expired:'SmsgError']`\n\nIt does not contain keys for `running` or `created`. When `statusMap.get(status)` is called for these statuses (which are common during polling), it returns `null`. The service then proceeds to call `update#moqui.service.message.SystemMessage` with `statusId: null`.\n\n**Problem**\nBecause of this, the `statusId` gets set to `null`. Once a message reaches this state, it never gets picked up or processed again. Essentially, the workflow breaks silently — no error is thrown, but the message is stuck forever.\n\n**Proposed Solution:**\nAdd a condition to check if the mapped `statusId` is not null before invoking the update service.",
        "labels": [
          "bug"
        ],
        "files": [],
        "title": "Prevent SystemMessage Status Update to Null in process#BulkOperationResult"
      }
    ],
    "linkedIssueIds": [
      "252"
    ]
  },
  {
    "id": "hotwax/mantle-shopify-connector#198",
    "repo": "hotwax/mantle-shopify-connector",
    "title": "added new getCustomerFromEmail service",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-shopify-connector#200",
    "repo": "hotwax/mantle-shopify-connector",
    "title": "added the create customer service and updated get customer to be generic",
    "labels": [],
    "type": "PR",
    "body": "Added a generic create customer service.\r\n\r\nAlso updated the get customer service to be generic and be able to search using either phone or email",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-shopify-connector#203",
    "repo": "hotwax/mantle-shopify-connector",
    "title": "added gift service and FTL",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-shopify-connector#204",
    "repo": "hotwax/mantle-shopify-connector",
    "title": "Improve error handling for Shopify Bulk operations file download",
    "labels": [],
    "type": "PR",
    "body": "Close: https://github.com/hotwax/hotwax-oms/issues/217\r\n\r\nAdds proper HTTP error handling and returns a service error when the Shopify bulk operation file download fails. Prevents writing failed responses to the file.\r\n\r\nThis change prevents an error response from being written to the file during download, and will cause the system message consume process to fail so it can retry later.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-shopify-connector#206",
    "repo": "hotwax/mantle-shopify-connector",
    "title": "Add update shopify customer tags service",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-shopify-connector#210",
    "repo": "hotwax/mantle-shopify-connector",
    "title": "Added isGiftCard in ReturnLineItem and RefundLineItem.",
    "labels": [],
    "type": "PR",
    "body": "Closes: https://github.com/hotwax/hotwax-shopify-oms-bridge/issues/34\r\nChangelog: Added",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-shopify-connector#212",
    "repo": "hotwax/mantle-shopify-connector",
    "title": "added services for order reconciliation between Shopify and OMS",
    "labels": [],
    "type": "PR",
    "body": "(Bot-generated summary)\nThis pull request significantly enhances our integration with Shopify by introducing a robust order reconciliation mechanism. The core addition is a new service designed to identify and report discrepancies between Shopify orders and our internal OMS. By automating the comparison process and generating a clear CSV report of mismatches, this change aims to improve data accuracy, streamline operational workflows, and provide better visibility into order status synchronization issues.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-shopify-connector#215",
    "repo": "hotwax/mantle-shopify-connector",
    "title": "Added dynamic time management ",
    "labels": [],
    "type": "PR",
    "body": "(Bot-generated summary)\nThis pull request introduces dynamic time management capabilities to the Shopify order reconciliation service. The primary goal is to enhance the service's flexibility by making the date range parameters optional, allowing for automatic processing of the previous day's data when no specific dates are provided. This change also refines date parsing and adds robust validation to ensure consistent and predictable behavior.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-shopify-connector#214",
    "repo": "hotwax/mantle-shopify-connector",
    "title": "213 add support to validate the shopify proxy api call",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-shopify-connector#216",
    "repo": "hotwax/mantle-shopify-connector",
    "title": "Use cache while fethcing SMR for proxy verification",
    "labels": [],
    "type": "PR",
    "body": "(Bot-generated summary)\nThis pull request introduces a performance optimization by enabling caching for the retrieval of System Message Remote (SMR) entities within the Shopify request filtering process. By utilizing the cache, the system can avoid redundant database queries for frequently accessed SMR data, thereby making proxy verification more efficient.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-shopify-connector#217",
    "repo": "hotwax/mantle-shopify-connector",
    "title": "Fixed possible json parsing error if request is of type GET, also fixed the out para…",
    "labels": [],
    "type": "PR",
    "body": "…m name",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#388",
    "repo": "hotwax/oms",
    "title": "Improvements: Implemented a service that checks order items and creates a capture payment tag when completing the first item. (implement-service-to-create-capture-payment-tag)",
    "labels": [],
    "type": "PR",
    "body": "Improvements: Implemented a service that checks order items and creates a capture payment tag when completing the first item. (implement-service-to-create-capture-payment-tag)\r\n\r\nChangelog: Changed\r\n\r\n**Related:** https://github.com/hotwax/hotwax-oms/issues/345",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#331",
    "repo": "hotwax/oms",
    "title": "64 proof of delivery",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#364",
    "repo": "hotwax/oms",
    "title": "Introduce SecurityGroupAndPermission view",
    "labels": [],
    "type": "Issue",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#336",
    "repo": "hotwax/oms",
    "title": "Added support to accept statusFlowId parameter for filtering",
    "labels": [],
    "type": "PR",
    "body": "Related Issue: https://github.com/hotwax/receiving/issues/591\r\n\r\nI have added statusFlowId to the service’s input parameters, so with the help of the already existing search-form-inputs, it will automatically filter the data.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#338",
    "repo": "hotwax/oms",
    "title": "Add support for multiple values in statusFlowId for transferOrders api",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#340",
    "repo": "hotwax/oms",
    "title": "339 create pickerdatasetup service",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#341",
    "repo": "hotwax/oms",
    "title": "added picker creation only for active picker logic",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#342",
    "repo": "hotwax/oms",
    "title": "created picker indexing SECA",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#337",
    "repo": "hotwax/oms",
    "title": "Updated: skipped updating product type if a product is updated",
    "labels": [],
    "type": "PR",
    "body": "Closes https://github.com/hotwax/hotwax-gorjana/issues/13",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#346",
    "repo": "hotwax/oms",
    "title": "Fixed: entity-find-one operation for product type update",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#343",
    "repo": "hotwax/oms",
    "title": "Fixed: TO searching issue on orderName field(receiving/585)",
    "labels": [],
    "type": "PR",
    "body": "**Summary**\r\n\r\n- The change was made due to issue with searching on orderName directly as we have used search-form-inputs that overrides the operator defined on the condition level\r\n- Added keyword search on orderId or orderName fields with like operator",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#352",
    "repo": "hotwax/oms",
    "title": "updated store#picker service for statusId bug",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#344",
    "repo": "hotwax/oms",
    "title": "Method to create a timestamp from a timestamp from a zone to another zone",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#350",
    "repo": "hotwax/oms",
    "title": "Improved: Approve Wh Fulfull Transfer Orders based on ProductStoreSetting RECEIVE_BY_FULFILL",
    "labels": [],
    "type": "PR",
    "body": "Closes #349 ",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "349",
        "body": "Warehouse to store type TOs should only be approved if \n1. there is 1 or more outbound shipment linked to them \n2. AND this product store setting is null or True: RECEIVE_BY_FULFILL (default value for this setting is true if null)",
        "labels": [],
        "files": [],
        "title": "Only approve fulfilled TO"
      }
    ],
    "linkedIssueIds": [
      "349"
    ]
  },
  {
    "id": "hotwax/oms#332",
    "repo": "hotwax/oms",
    "title": "Fix: Added a view entity OrderHeaderItemShipmentDetail and and refactored service to get correct OrdersCounts",
    "labels": [],
    "type": "PR",
    "body": "closes #[82](https://github.com/hotwax/hotwax-oms/issues/82#event-20670046385)\r\n\r\n- Created new OrderHeaderItemShipmentDetail view entity to replace OrderHeaderShipGroupShipment for optimized Ship-to-Store order queries\r\n\r\n- Added OrderItem member-entity to enable proper item-level shipment linkage\r\n- (changed join path from OH → OISG → OS to OH → OI → OS with orderItemSeqId key)\r\n\r\n- Fixed shipment status filtering bug where orders with SHIPPED/DELIVERED statuses were incorrectly appearing in Incoming tab",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#357",
    "repo": "hotwax/oms",
    "title": "Fix: Applied in operator for orderStatusId field",
    "labels": [],
    "type": "PR",
    "body": "### Fix: ShipToStore Service XML Condition and Cleanup\r\n\r\nThis PR updates the `get#ShipToStoreOrders` service to correctly support multiple order statuses using:\r\n\r\n```xml\r\n<econdition field-name=\"orderStatusId\" operator=\"in\" from=\"orderStatusId\"/>\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#351",
    "repo": "hotwax/oms",
    "title": "Fixed: type when assigning requiresShipping when comparing variant",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#355",
    "repo": "hotwax/oms",
    "title": "Improvement: Added a check to set csvFilePath is null when Export Product Facility CSV file is prepared (validate-file-prepared-or-not)",
    "labels": [],
    "type": "PR",
    "body": "Improvement: Added a check to set csvFilePath is null when Export Product Facility CSV file is prepared (validate-file-prepared-or-not)\r\n\r\nChangelog: Changed\r\n\r\n**Related:** https://github.com/hotwax/hotwax-oms/issues/250",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#363",
    "repo": "hotwax/oms",
    "title": "Removed service call to create Cycle Count for rejected items",
    "labels": [],
    "type": "PR",
    "body": "We don't need to create Cycle Count for Rejected itemms, hence removing the service call to fin or create cycle count for rejected items.\r\n\r\nRelated Issue: #362 ",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "362",
        "body": "When attempting to reject an item from the Fulfillment app, the following error is displayed:\n{\n\"errorCode\": 400,\n\"errors\": \"Error in find, field countTypeEnumId does not exist in entity co.hotwax.warehouse.InventoryCountImport\\n\"\n}\n\nOrder ID: HCDEV#4465\n\nInstance - test-oms\n\nLInked Issue - [#162](https://github.com/hotwax/hotwax-poorti/issues/165)",
        "labels": [],
        "files": [],
        "title": "Getting error on rejecting order from fulfillment app"
      }
    ],
    "linkedIssueIds": [
      "362"
    ]
  },
  {
    "id": "hotwax/oms#360",
    "repo": "hotwax/oms",
    "title": "Implemented Get product online atp",
    "labels": [],
    "type": "PR",
    "body": "Related Issue: https://github.com/hotwax/oms/issues/353\r\n\r\nMigrate `getProductOnlineAtp` API implementation from Ofbiz OMS to Maarg and add support for bulk queries by accepting a list of product identifiers in the request payload.\r\n\r\n**What changed**\r\n- Reimplemented `getProductOnlineAtp` in Moqui (replaces Ofbiz implementation).\r\n- Added bulk-query support so callers can request ATP for multiple products in a single request (accepts a list of product IDs or SKUs).\r\n\r\n### API Details\r\n**URL**: `https://dev-maarg.hotwax.io/rest/s1/getProductOnlineAtp`\r\n**Method**: `GET`\r\n**Parameters**:\r\n1. productId or sku: list of values separated by a comma\r\n2. productStoreId: required\r\n3. facilityGroupId: optional",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#365",
    "repo": "hotwax/oms",
    "title": "Added: SecurityGroupAndPermission dataDocument(#364)",
    "labels": [],
    "type": "PR",
    "body": "Closes #364 \r\nChangelog: Updated",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "364",
        "body": "",
        "labels": [],
        "files": [],
        "title": "Introduce SecurityGroupAndPermission view"
      }
    ],
    "linkedIssueIds": [
      "364"
    ]
  },
  {
    "id": "hotwax/oms#369",
    "repo": "hotwax/oms",
    "title": "Added: updated fields of SecurityGroupAndPermission data document",
    "labels": [],
    "type": "PR",
    "body": "Changelog: Updated",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#370",
    "repo": "hotwax/oms",
    "title": "Moving the date filter condition from view entity to the application logic",
    "labels": [],
    "type": "PR",
    "body": "Close: #371",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "371",
        "body": "The `ProductFacilityAndGroup` view entity is used with cache enabled.\nBecause it includes a `<date-filter>` condition (`psfFromDate` / `psfThruDate`), each entity find generates a unique cache key. This causes unbounded entity cache growth, leading to increased memory usage and CPU spikes.\n\nTo address this, the date-filter condition has been removed from the view entity and is now handled in application logic, preventing it from being part of the cache key.",
        "labels": [],
        "files": [],
        "title": "Entity cache growth due to date-filter condition in ProductFacilityAndGroup view entity"
      }
    ],
    "linkedIssueIds": [
      "371"
    ]
  },
  {
    "id": "hotwax/oms#359",
    "repo": "hotwax/oms",
    "title": "Improved: Get Transfer order and items API to prepare shipped quantity",
    "labels": [],
    "type": "PR",
    "body": "Closes #367 ",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "367",
        "body": "1. We have prepare the field \"totalIssuedQuantity\" in the below Transfer Order APIs/services.\n    1. get#TransferOrder\n    2. update#TOItemStatusAndReservation\n    3. get#TransferOrderItems\n2. We prepared the value from the ItemIssuanceSummary which is based on the entity ItemIssuance.\n3. But we faced issues with recent changes in the Receiving App.\n4. The Transfer Orders items will be shown in the app if some quantity is shipped for them.\n5. So the app team was using this field totalIssuedQuantity to check if any shipped quantity, then item is eligible to be received. (RECEIVE_BY_FULFILL)\n6. This fails in the scenario of Wh Fulfill Transfer Orders since we directly create the Shipments in SHIPMENT_SHIPPED status, and no issuances are done.\n7. So now we will be preparing it from ShipmentItemView which uses quantity from ShipmentItem entity.",
        "labels": [],
        "files": [],
        "title": "Update Get Transfer Order total shipped quantity logic"
      }
    ],
    "linkedIssueIds": [
      "367"
    ]
  },
  {
    "id": "hotwax/oms#368",
    "repo": "hotwax/oms",
    "title": "Updated the condition for computing the receive by fulfill flag",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#348",
    "repo": "hotwax/oms",
    "title": "Added locationSeqId for the OrderItemReservation entity",
    "labels": [],
    "type": "PR",
    "body": "closes: https://github.com/hotwax/hotwax-oms/issues/157\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#379",
    "repo": "hotwax/oms",
    "title": "Added orderFacilityExternalId in the TransferOrderAndItem view",
    "labels": [],
    "type": "PR",
    "body": "This is required for the feed added as part of https://github.com/hotwax/mantle-netsuite-connector/pull/171/files",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#377",
    "repo": "hotwax/oms",
    "title": "Improvement: Added support for set unit cost as is when the oldTotalCost is less then zero (unit-cost-not-set-as-zero-when-qoh-and-atp-is-negative)",
    "labels": [],
    "type": "PR",
    "body": "Improvement: Added support for set unit cost as is when the oldTotalCost is less then zero (unit-cost-not-set-as-zero-when-qoh-and-atp-is-negative)\r\n\r\nChangelog: Changed\r\n\r\n**Related:** https://github.com/hotwax/hotwax-oms/issues/316\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#354",
    "repo": "hotwax/oms",
    "title": "Add SECA service to index OrderHeader when status changes ",
    "labels": [],
    "type": "PR",
    "body": "A SECA service was added to trigger indexing whenever an order’s status changes.\r\nThis ensures that all order items are indexed correctly in Solr, even in multi-shipment cases.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/dxp-components#451",
    "repo": "hotwax/dxp-components",
    "title": "Improved: flow to store the pos location info in state and not display the facility toggle button in case of embedded mode",
    "labels": [],
    "type": "PR",
    "body": "### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n\r\n#\r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\n\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\n\r\n\r\n### Is the changes contains any breaking change?\r\nIf there are any breaking change include those in the release notes file\r\n\r\n- [ ] Yes\r\n- [x] No\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [x] I read and followed [contribution rules](https://github.com/hotwax/dxp-components#contribution-guideline)",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/dxp-components#429",
    "repo": "hotwax/dxp-components",
    "title": "Add flow Shopify App User Login",
    "labels": [],
    "type": "Issue",
    "body": "Add Shopify Embedded App User Login Flow by authenticating Embedded App User as the apps themselves will be embedded on Shopify Admin and Shopify POS.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/dxp-components#445",
    "repo": "hotwax/dxp-components",
    "title": "Implemented: app bridge login flow(#429)",
    "labels": [],
    "type": "PR",
    "body": "### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n\r\n#429\r\n\r\nReferenced PR: #430 \r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\n\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\n\r\n\r\n### Is the changes contains any breaking change?\r\nIf there are any breaking change include those in the release notes file\r\n\r\n- [ ] Yes\r\n- [x] No\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [x] I read and followed [contribution rules](https://github.com/hotwax/dxp-components#contribution-guideline)",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/dxp-components#430",
    "repo": "hotwax/dxp-components",
    "title": "Added: Add App Bridge Login Flow",
    "labels": [],
    "type": "PR",
    "body": "Related Issue: #429 \r\n\r\nAdded App Bridge Login Flow for Shopify Embedded App User Login. And removed usage of getAppLoginUrl from DxpLogin since it's not needed on DxpLogin now.",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "429",
        "body": "Add Shopify Embedded App User Login Flow by authenticating Embedded App User as the apps themselves will be embedded on Shopify Admin and Shopify POS.",
        "labels": [],
        "files": [],
        "title": "Add flow Shopify App User Login"
      }
    ],
    "linkedIssueIds": [
      "429"
    ]
  },
  {
    "id": "hotwax/dxp-components#447",
    "repo": "hotwax/dxp-components",
    "title": "Improved: image component to use the oms url as default resource url",
    "labels": [],
    "type": "PR",
    "body": "### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n\r\n#\r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\nRemoved usage of VUE_APP_RESOURCE_URL env as its maintained anymore and instead using the oms url to fetch the image\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\n\r\n\r\n### Is the changes contains any breaking change?\r\nIf there are any breaking change include those in the release notes file\r\n\r\n- [ ] Yes\r\n- [x] No\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [x] I read and followed [contribution rules](https://github.com/hotwax/dxp-components#contribution-guideline)",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#36",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Fix refund/return creation for custom gift cards by adding fallback gift card mapping logic",
    "labels": [],
    "type": "PR",
    "body": "Closes: #34 ",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "34",
        "body": "The refund for the order containing a gift card did not get synced in OMS. Please investigate and resolve this.",
        "labels": [],
        "files": [],
        "title": "Gift card–based refund was not created on OMS."
      }
    ],
    "linkedIssueIds": [
      "34"
    ]
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#42",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Improvement: Replace deprecated SHOPIFY_SHOP_ACCESS enumTypeId with ShopifyShopAccessScope for correct Shopify shop access scope handling while creating or updating system message remote for that shop in maarg (update-enum-type-id-value)",
    "labels": [],
    "type": "PR",
    "body": "Improvement: Replace deprecated SHOPIFY_SHOP_ACCESS enumTypeId with ShopifyShopAccessScope for correct Shopify shop access scope handling while creating or updating system message remote for that shop in maarg (update-enum-type-id-value)\r\n\r\nChangelog: Changed\r\n\r\n**Related:** https://github.com/hotwax/hotwax-oms/issues/313",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#349",
    "repo": "hotwax/hotwax-oms",
    "title": "Improvement: Updated the SECA to trigger the service that creates the capture payment tag during order item completion. (call-capture-payment-service-in-sync)",
    "labels": [],
    "type": "PR",
    "body": "Improvement: Updated the SECA to trigger the service that creates the capture payment tag during order item completion. (call-capture-payment-service-in-sync)\r\n\r\nChangelog: Changed\r\n\r\n**Related:** https://github.com/hotwax/hotwax-oms/issues/345",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#359",
    "repo": "hotwax/hotwax-oms",
    "title": "Fix: Prevent premature order completion email for SHIP_TO_STORE orders",
    "labels": [],
    "type": "PR",
    "body": "### Description\r\nFixed a bug where Ship-to-Store (STS) orders were triggering order completion emails prematurely. For STS orders, the email should only be sent upon final customer handover at the store, not when the order is shipped between facilities.\r\n\r\n### Changes\r\n- Modified bulkSendOrderCompletedMail in BuynowEmailServices.java\r\n- Added a filter to skip orders where the `shipmentMethodTypeId` is set to `SHIP_TO_STORE`.\r\n- This ensures that the automated background job does not trigger emails for these orders, as they are handled manually via the handover process in the app.\r\n\r\n### Related Issue\r\n- Closes #386(https://github.com/hotwax/oms/issues/386#event-21981357121)",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "386",
        "body": "## Problem Statement\n\nInventory transaction logs are sorted in the wrong order by default.  \nThe latest transaction does not appear first.\n\nThe expected behavior is that inventory transactions should be sorted by **transaction date (`effectiveDate`) in descending order**, so that the most recent transactions are shown at the top.\n",
        "labels": [],
        "files": [],
        "title": "Fix Incorrect Transaction Order on Inventory Screen"
      }
    ],
    "linkedIssueIds": [
      "386"
    ]
  },
  {
    "id": "hotwax/hotwax-oms#367",
    "repo": "hotwax/hotwax-oms",
    "title": "Improvement: Removed the query from OrderHeaderItemAndRoles entity as the return from vendor is not part of OMS (remove-entity-to-validate-vendor-type-return)",
    "labels": [],
    "type": "PR",
    "body": "Improvement: Removed the query from OrderHeaderItemAndRoles entity as the return from vendor is not part of OMS (remove-entity-to-validate-vendor-type-return)\r\n\r\nChangelog: Changed\r\n\r\n**Related:** https://github.com/hotwax/sm-stevemadden/issues/29",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#303",
    "repo": "hotwax/hotwax-oms",
    "title": "Added the screen mapping and updated the UI label file for the new Shipping Price Rule.",
    "labels": [],
    "type": "PR",
    "body": "For the new Shipping Price Rule screen, created the screen, added the request mapping, and updated the UI labels.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#355",
    "repo": "hotwax/hotwax-oms",
    "title": "Improvement: Added a default data of product store shipment meth for pos completed shipment method to avoid the ship group estimate calculation (add-product-store-shipment-meth-data-for-pos-completed)",
    "labels": [],
    "type": "PR",
    "body": "Improvement: Added a default data of product store shipment meth for pos completed shipment method to avoid the ship group estimate calculation (add-product-store-shipment-meth-data-for-pos-completed)\r\n\r\nChangelog: Changed\r\n\r\n**Related:** https://github.com/hotwax/hotwax-oms/issues/170",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#183",
    "repo": "hotwax/hotwax-oms",
    "title": "Added: isGift handling in create shopify order to include the field in ship group",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#190",
    "repo": "hotwax/hotwax-oms",
    "title": "Added new field(directions) in the solr doc",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#192",
    "repo": "hotwax/hotwax-oms",
    "title": "Added default isGift as 'N' in createSalesOrder service",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#195",
    "repo": "hotwax/hotwax-oms",
    "title": "Added pickitem conditions in the completeOrderItem service",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#197",
    "repo": "hotwax/hotwax-oms",
    "title": "Removed the return check while calling the createUpdateProductAverageCost service",
    "labels": [],
    "type": "PR",
    "body": "closes #184\r\n\r\n- Removed the return check while calling the createUpdateProductAverageCost service\r\n- Now, createProductAverageCost will also populate the lastReceivedUnitCost field with the wac",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "184",
        "body": "**Issue:**\nIt has been observed that the WAC (Weighted Average Cost) for some products is not being calculated correctly. A common factor among the affected products is that they involve returns, after which the WAC is incorrectly updated. We suspect that there may be an issue with how returns are impacting the WAC calculation.\n\nInvestigate the WAC calculation process, particularly how returns are factored into the system, and ensure that the WAC is correctly updated after returns are processed.",
        "labels": [
          "bug"
        ],
        "files": [],
        "title": "Issue with Incorrect WAC Calculation"
      }
    ],
    "linkedIssueIds": [
      "184"
    ]
  },
  {
    "id": "hotwax/hotwax-oms#199",
    "repo": "hotwax/hotwax-oms",
    "title": "Improvement: Added composite index IDX_OS_DATETIME on orderId, orderItemSeqId, and statusDatetime in OrderStatus entity.",
    "labels": [],
    "type": "PR",
    "body": "Improvement: Added composite index IDX_OS_DATETIME on orderId, orderItemSeqId, and statusDatetime in OrderStatus entity.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#201",
    "repo": "hotwax/hotwax-oms",
    "title": "Improvement: Cleaned eventMsg by stripping <br/> tags to ensure a consistent and clean alert UI. (remove-html-from-success-message)",
    "labels": [],
    "type": "PR",
    "body": "Improvement: Cleaned eventMsg by stripping <br/> tags to ensure a consistent and clean alert UI. (remove-html-from-success-message)\r\n\r\nChangelog: Changed",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#204",
    "repo": "hotwax/hotwax-oms",
    "title": "Fixed kit component handling during shipment item creation",
    "labels": [],
    "type": "PR",
    "body": "- Corrected logic to fetch the existing open Shipment for an order by using shippedDate. Earlier logic incorrectly returned a shipment as null when estimatedShipDate was not found. Updated the query to sort by estimatedShipDate and pick the latest matching shipment.\r\n\r\n- Fixed shipment item creation for kit components. When a kit component was updated, the existing process failed because reservation records were not available for the new component item. Now the logic uses component details from OrderItemShipGrpInvRes when reservation is enabled, instead of relying on ProductAssoc.\r\n\r\n- Added support for building a unified components map that works for both reserved components (inventory reservation = Y) and product associations (inventory reservation = N).",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#211",
    "repo": "hotwax/hotwax-oms",
    "title": "Fixed duplicate shipment item creation for kit component, as order it…",
    "labels": [],
    "type": "PR",
    "body": "…em reservation exists for kit product as well, so no need to explicitly create the shipment item for kit proudct.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#216",
    "repo": "hotwax/hotwax-oms",
    "title": "Implemented MDM to create/update return identification from external system. (213-make-mdm-to-create-returnidentifcation-in-oms)",
    "labels": [],
    "type": "PR",
    "body": "…",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#194",
    "repo": "hotwax/hotwax-oms",
    "title": "Implement facility-based access control across Inventory screens for non-FACILITY_ADMIN users",
    "labels": [],
    "type": "PR",
    "body": "Closes #185 \r\n\r\n## 1. InventoryOverview.groovy\r\n- Added permission check for `FACILITY_ADMIN`.\r\n- Retrieved allowed facilities for non-admin users using `FacilityAndParty`.\r\n- Applied filtering logic to enforce that non-admin users:\r\n  - Can only search/view inventory for their associated facilities.\r\n  - Cannot access inventory belonging to other facilities.\r\n- Updated condition builder logic (`IN` / `EQUALS`) based on user access.\r\n\r\n---\r\n\r\n## 2. RecordVariance.groovy\r\n- Added access control to restrict facility dropdown to user-associated facilities.\r\n- Non-admin users now only see facilities mapped to them via `FacilityAndParty`.\r\n\r\n---\r\n\r\n## 3. FindProductInventory.ftl\r\n- Facility dropdown is now based on user permissions.\r\n- Auto-selects first allowed facility for non-admin users when no facility is selected.\r\n\r\n---\r\n\r\n## 4. ListProductInventory.ftl\r\n- Facility list is dynamically built based on:\r\n  - Owner party (company)\r\n  - User association (for non-admins)\r\n- Automatically assigns default facility for non-admins.\r\n\r\n---\r\n\r\n## 5. ProductInventoryButtonBar.ftl\r\n- Facility selector now filters options based on facility access.\r\n- Ensures non-admins cannot choose facilities outside their allowed list.\r\n\r\n---\r\n\r\n## 6. ProductInventory.ftl (Product Facility Locations Edit Button)\r\n- Added secure facility-level edit permission:\r\n  - Admin users can edit all facility locations.\r\n  - Non-admin users can edit only locations belonging to facilities returned by `WarehouseHelper.getPartyFacilities`.\r\n- Prevents unauthorized facility configuration updates.\r\n",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "185",
        "body": "Store users should only be able to view and interact with inventory data for the facilities (locations) they are associated with.\n\n### **Details**\n1. **Inventory Log View**\n   - Add a permission-based filter so that store users can only see inventory logs for facilities linked to their user profile.  \n   - Restrict visibility of other locations.\n\n2. **FindProductInventory Page / ProductInventoryView**\n   - In the *Facility* dropdown/bar, select and display only the facilities the logged-in user is associated with.  \n   - Prevent store users from switching to other facilities.\n\n3. **Record Variance**\n   - While recording variance, a user should only be able to select the facility they are associated with.  \n   - Disable other facilities from the selection list.",
        "labels": [
          "enhancement"
        ],
        "files": [],
        "title": "Inventory Log View (Store Access Restriction)"
      }
    ],
    "linkedIssueIds": [
      "185"
    ]
  },
  {
    "id": "hotwax/hotwax-oms#206",
    "repo": "hotwax/hotwax-oms",
    "title": "Added conditional exchange credit creation based on hasExchangeItems flag",
    "labels": [],
    "type": "PR",
    "body": "Closes: https://github.com/hotwax/hotwax-shopify-oms-bridge/issues/26\r\nThis PR introduces logic to create an Exchange Credit payment preference only when the incoming return payload explicitly includes hasExchangeItems = \"Y\".\r\n\r\nKey Changes\r\n- Added a conditional check for hasExchangeItems.\r\n- Exchange Credit is now generated only when: hasExchangeItems is \"Y\", and totalReturnAmount - refundAmount results in a non-zero credit.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#219",
    "repo": "hotwax/hotwax-oms",
    "title": "Added: upgrade data. (218-make-update-data)",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#225",
    "repo": "hotwax/hotwax-oms",
    "title": "Made: enum for kit product inv computation process and passed it in reset inventory service. (224-make-enum-data-for-kit-product-inventory-computation)",
    "labels": [],
    "type": "PR",
    "body": "…",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#223",
    "repo": "hotwax/hotwax-oms",
    "title": "Added option to delete Order Sync History to External System from OMS screen",
    "labels": [],
    "type": "PR",
    "body": "<img width=\"1822\" height=\"1106\" alt=\"image\" src=\"https://github.com/user-attachments/assets/765fcd7f-ee51-47f1-82d3-572a8e7faa1c\" />\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#212",
    "repo": "hotwax/hotwax-oms",
    "title": "Fixed unit cost set as zero during the return import in the inventoryItem",
    "labels": [],
    "type": "PR",
    "body": "closes: #184 ",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "184",
        "body": "**Issue:**\nIt has been observed that the WAC (Weighted Average Cost) for some products is not being calculated correctly. A common factor among the affected products is that they involve returns, after which the WAC is incorrectly updated. We suspect that there may be an issue with how returns are impacting the WAC calculation.\n\nInvestigate the WAC calculation process, particularly how returns are factored into the system, and ensure that the WAC is correctly updated after returns are processed.",
        "labels": [
          "bug"
        ],
        "files": [],
        "title": "Issue with Incorrect WAC Calculation"
      }
    ],
    "linkedIssueIds": [
      "184"
    ]
  },
  {
    "id": "hotwax/hotwax-oms#226",
    "repo": "hotwax/hotwax-oms",
    "title": "Fixed the bulkSendOrderCompletedEmail service",
    "labels": [],
    "type": "PR",
    "body": "- Used ELI, and removed the querying logic from OrderHeader\r\n- Called sendOrderRelatedMail service in the new transaction",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#227",
    "repo": "hotwax/hotwax-oms",
    "title": "Fix bulk typo in the send order completed mail",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#230",
    "repo": "hotwax/hotwax-oms",
    "title": "Updated the createShopifyOrder service to include automatic adjustments from discount_applications",
    "labels": [],
    "type": "PR",
    "body": "CLOSES #215 \r\n\r\nChangelog: Changed",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "215",
        "body": "It looks like the order-level discount name is not being saved in the system. We need to look into why this is happening, because we send this discount code to the external system and they use it for reporting.\n\nhttps://admin.shopify.com/store/sandbox-el-savador/orders/7548473737509\nhttps://adoc-sv-uat.hotwax.io/commerce/control/ViewOrder?orderId=ADOC14752\n\nProduction order example:\nhttps://adoc-sv-oms.hotwax.io/commerce/control/ViewOrder?orderId=PAR238765\n",
        "labels": [],
        "files": [],
        "title": "Discount name not saved in the order adjustment"
      }
    ],
    "linkedIssueIds": [
      "215"
    ]
  },
  {
    "id": "hotwax/hotwax-oms#232",
    "repo": "hotwax/hotwax-oms",
    "title": "exported pickerIndexing service",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#237",
    "repo": "hotwax/hotwax-oms",
    "title": "create issuance KIT Product component and kit of KIT for POS Order",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#235",
    "repo": "hotwax/hotwax-oms",
    "title": "Fix return flow for MARKETING_PKG_PICK products by receiving inventory for component items instead of kit SKU",
    "labels": [],
    "type": "PR",
    "body": "Closes: #234 ",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "234",
        "body": "",
        "labels": [],
        "files": [],
        "title": "Restock KIT Product component instead of KIT for POS Return"
      }
    ],
    "linkedIssueIds": [
      "234"
    ]
  },
  {
    "id": "hotwax/hotwax-oms#243",
    "repo": "hotwax/hotwax-oms",
    "title": "Merged two similar service and added 500 status code handling",
    "labels": [],
    "type": "PR",
    "body": "Overview\r\n\r\nThis PR implements two related improvements to the Shopify transaction retrieval logic used during Shopify order creation.\r\nThe changes include:\r\n- Retry logic on HTTP 500 errors when fetching Shopify order transactions.\r\n- Refactoring and consolidation of transaction-fetching services into a single unified method.\r\n\r\nKey Changes\r\n1. Added Retry Logic for Transaction Fetching:\r\n\r\nWhen creating a Shopify order, if the initial HTTP request to fetch transactions returns a 500 Internal Server Error, the service will now:\r\n- Retry the request once, and\r\n- Proceed only if the retry succeeds.\r\n\r\n2. Merged getShopifyOrderTransaction and getShopifyOrderTransactions\r\n\r\nConsolidated both services into a single service: getShopifyOrderTransactions\r\n\r\nAdded optional parameter transactionId:\r\n- If provided → fetch a specific transaction.\r\n- If not provided → fetch all transactions.\r\n\r\nRemoved the old getShopifyOrderTransaction and replaced all usages across the codebase with calls to the new consolidated service.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#239",
    "repo": "hotwax/hotwax-oms",
    "title": "Handled the condition to calc correct WAC when the oldTotalCost is a negative value",
    "labels": [],
    "type": "PR",
    "body": "closes #238 ",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "238",
        "body": "Multiple instances have been identified where the Weighted Average Cost (WAC) is being incorrectly calculated as **0** in OMS after processing receiving transactions (Return / PO / TO).\n\n\n### **Case 1: Negative QOH Resulting in Incorrect WAC**\n**Issue:**  \nThe product initially had QOH = 0. A POS sale resulted in a negative QOH. After receiving a single unit, the system recalculated WAC and set it to **0**.\n\n**Example:**  \n[M102506](https://mephisto-oms.hotwax.io/commerce/control/ProductInventoryView?facilityId=488_MADISON&productId=M102506&facilityGroupId=FAC_GRP&groupByInventoryItem=false)\n\n\n### **Case 2: Product Had NULL WAC**\nThere was no existing record for the product and facility in `ProductAverageCost`.  \nWhen a return was received, the system calculated WAC using only the return transaction and assigned a value of **0**.\n\n> This case is already handled in this [PR](https://github.com/hotwax/hotwax-oms/pull/197), [PR](https://github.com/hotwax/hotwax-oms/issues/184).\n\n**Example:**  \n[20651](https://mephisto-oms.hotwax.io/commerce/control/ProductInventoryView?productId=20651&groupByInventoryItem=false&facilityId=305_SEABOARD_LANE&facilityGroupId=FAC_GRP)\n\n\n### **Case 3: Valid WAC Exists but Recalculated as Zero**\nThe product had a valid WAC in PAC. After receiving stock, OMS recalculated the WAC and set it to **0** because the computed result was negative, and the service defaults negative values to zero.\n\n## **Observation**\nIn this WAC formula:\n```\n              ( ( Old_WAC * Old_QOH ) + ( Unit_Cost * Received_Qty ) )\nWAC   =          ____________________________________________________\n                             ( Old_QOH + Received_Qty )\n```\n\n\n- When **( Old_WAC × Old_QOH ) < 1**, the service calculates WAC as **0**.\n- When **( Old_QOH + Received_Qty ) < 1**, the service also calculates WAC as **0**.\n\n## Possible Solution:\n\n- If WAC does not exist, use the Unit Cost from the receiving as the WAC.\n- If (Old_WAC * Old_QOH) < 1, keep the existing WAC as the updated WAC.\n",
        "labels": [
          "bug"
        ],
        "files": [],
        "title": "Incorrect WAC Calculation Across Multiple Receiving Scenarios"
      }
    ],
    "linkedIssueIds": [
      "238"
    ]
  },
  {
    "id": "hotwax/hotwax-oms#244",
    "repo": "hotwax/hotwax-oms",
    "title": "Updated 500 status code handling ",
    "labels": [],
    "type": "PR",
    "body": "…handling.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#268",
    "repo": "hotwax/hotwax-oms",
    "title": "Fixed: condition to return correct error message when failedLogins exceeds max value",
    "labels": [],
    "type": "PR",
    "body": "When the user login is blocked due to max failed attempts, the message returned from the login flow is not correct.\r\n\r\nThe message returned from the api after multiple failed attempts and if the maxFailedLogins exceeds the value set:\r\n\r\nBefore:\r\n`Sorry, your username/password is incorrect. You have -1 attempt remaining.`\r\n\r\nAfter:\r\n`Too many failed login attempts. Your account has been blocked.`\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#257",
    "repo": "hotwax/hotwax-oms",
    "title": "Fix: Add Kit Component Handling for RTN_REPLACE_EXACT and RTN_DC_PULLBACK in Return Processing.",
    "labels": [],
    "type": "PR",
    "body": "Closes: #255 \r\n# PR Summary: Enhanced Return Processing for Kit Products\r\n\r\nThis PR enhances the return processing logic to correctly handle kit products (`MARKETING_PKG_PICK`) during the `RTN_REPLACE_EXACT` and `RTN_DC_PULLBACK` return flows.  \r\nPreviously, inventory adjustments occurred only at the kit level, resulting in incorrect stock levels for component items.\r\n\r\nThis update ensures accurate inventory adjustments for both kit and component items across all relevant scenarios.\r\n\r\n---\r\n\r\n## RTN_REPLACE_EXACT\r\n\r\nAfter issuing the kit SKU to shipment, the system now reduces inventory for all kit components based on their quantity.\r\n\r\n**Updated Behavior (Correct Logic):**\r\n\r\n- **Kit inventory:** increase (return) → decrease (replacement issuance)  \r\n- **Component inventory:** increase (return) → decrease (replacement issuance)\r\n\r\nThis aligns overall behavior with expected replacement logic.\r\n\r\n---\r\n\r\n## RTN_DC_PULLBACK / RTN_DISCONTINUED\r\n\r\n- Added **component-level negative inventory variance** in addition to existing kit-level variance.\r\n- Ensures accurate adjustments when pulling back inventory for discontinued or pullback return types.\r\n\r\n---",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "255",
        "body": "When creating a return for a kit in OMS, the kit component inventory is not being deducted. This is causing inconsistencies across multiple return scenarios.\n\n**Return Types:**\n- DC Pull Back\n- Exact Replacement\n- Store Credit\n- Hotwax Store Credit\n\n**Expected Behavior:**\nWhen a return is created for a kit, the inventory for all kit components should deduct correctly.",
        "labels": [
          "bug"
        ],
        "files": [],
        "title": "Kit Component Inventory Not Deducting on Return Creation in OMS"
      }
    ],
    "linkedIssueIds": [
      "255"
    ]
  },
  {
    "id": "hotwax/hotwax-oms#229",
    "repo": "hotwax/hotwax-oms",
    "title": "Added support to send confirmation email if customers select different shipping methods or cancel the order through re route app",
    "labels": [],
    "type": "PR",
    "body": "Closes: https://github.com/hotwax/hotwax-gorjana/issues/14 ",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#246",
    "repo": "hotwax/hotwax-oms",
    "title": "Fix inventory issue for POS kit orders by issuing stock for all kit component",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#254",
    "repo": "hotwax/hotwax-oms",
    "title": "Improvement: Added support to update tags on Shopify for an individual order. (sync-single-order-tags-shopify)",
    "labels": [],
    "type": "PR",
    "body": "Improvement: Added support to update tags on Shopify for an individual order. (sync-single-order-tags-shopify)\r\n\r\nChangelog: Changed\r\n\r\n**Related:** https://github.com/hotwax/hotwax-oms/issues/252",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#247",
    "repo": "hotwax/hotwax-oms",
    "title": "Improvement: Added unit cost display on ProductInventoryView page and fixed logic to prevent creation of extra inventory item details during product average cost calculation. (add-unit-cost-column-on-product-inventory-view-page)",
    "labels": [],
    "type": "PR",
    "body": "Improvement: Added unit cost display on ProductInventoryView page and fixed logic to prevent creation of extra inventory item details during product average cost calculation. (add-unit-cost-column-on-product-inventory-view-page)\r\n\r\nChangelog: Changed\r\n\r\nRelated: https://github.com/hotwax/hotwax-oms/issues/187",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#283",
    "repo": "hotwax/hotwax-oms",
    "title": "Commented out the relationship defs on WorkEffortTypeId and WorkEffortPurposeTypeId",
    "labels": [],
    "type": "PR",
    "body": "Related Issue: https://github.com/hotwax/hotwax-oms/issues/282\r\n\r\nSince the WorkEffort in Maarg defines relationship for WorkEffortTypeId and WorkEffortPurposeTypeId with Enumeration,\r\nWe've commented out the relationsjip definition in OMS.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#280",
    "repo": "hotwax/hotwax-oms",
    "title": "Fixed: login api flow to honor requiredPasswordChange field",
    "labels": [],
    "type": "PR",
    "body": "Added support to check for requirePasswordChange field when using the login endpoint\r\n\r\nSteps to verify:\r\n\r\nEndpoint: https://dev-oms.hotwax.io/api/login\r\nMethod: POST\r\nRequest body:\r\n\r\n```\r\nPASSWORD: <password>\r\nUSERNAME: <username>\r\n```\r\n\r\nMark the requirePasswordChange field to Y in the UserLogin entity for the user that you want to test.\r\n\r\nBefore this change:\r\n- Only token and expirationTime is returned in the api response\r\n\r\nAfter this change:\r\n- With token and expirationTime, requirePasswordChange field will also be returned in the response if set Y in the UserLogin entity.\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#287",
    "repo": "hotwax/hotwax-oms",
    "title": "Get shipping rates",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#207",
    "repo": "hotwax/hotwax-oms",
    "title": "Added Show User Login on hover for variance events in Inventory Logs",
    "labels": [],
    "type": "PR",
    "body": "Changelog: Changed\r\n\r\ncloses: #180 ",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "180",
        "body": "**Description**\nWhenever a variance is recorded, an event is logged in the [Inventory Logs](https://mephisto-uat.hotwax.io/commerce/control/ProductInventoryView?productId=10092&groupByInventoryItem=false&facilityId=&facilityGroupId=FAC_GRP). On hovering over that event, we should display the login id of the user so that we can track which user recorded that variance.\n\n**Expected Behavior**\n- When a variance event appears in the Inventory Logs, hovering over it should show the user login ID who made the change.\n- The user ID should be captured at the time of recording the variance.\n\n**Reason**\nThis helps in tracking and auditing who made specific variance changes.\n\n**Currently**\n<img width=\"1350\" height=\"665\" alt=\"Image\" src=\"https://github.com/user-attachments/assets/531c3d06-e483-4a39-b0c1-bc275f623995\" />\n\n**Expected**\n<img width=\"1353\" height=\"667\" alt=\"Image\" src=\"https://github.com/user-attachments/assets/2a78e0af-1412-4b70-a12b-3cfa9a406a2d\" />",
        "labels": [
          "enhancement"
        ],
        "files": [],
        "title": "Show User Login on hover for variance events in Inventory Logs"
      }
    ],
    "linkedIssueIds": [
      "180"
    ]
  },
  {
    "id": "hotwax/hotwax-oms#296",
    "repo": "hotwax/hotwax-oms",
    "title": "Fix Shopify date handling to use server timezone for conversion",
    "labels": [],
    "type": "PR",
    "body": "Overloaded CommerceDateTime.getOffsetDateTimeInPattern to use the default server timezone when converting Shopify dates. Since Shopify dates already include timezone information, the method now preserves the original instant and converts it to the service (server) timezone for consistency.\r\n\r\nApplied this fix across all relevant code paths.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#293",
    "repo": "hotwax/hotwax-oms",
    "title": "Improvement: Added support to create an inventory item with a default facility location while importing POS completed orders for products that have not yet received any inventory. (set-default-location-on-inventory-item-for-pos-completed-orders)",
    "labels": [],
    "type": "PR",
    "body": "Improvement: Added support to create an inventory item with a default facility location while importing POS completed orders for products that have not yet received any inventory. (set-default-location-on-inventory-item-for-pos-completed-orders)\r\n\r\nChangelog: Changed\r\n\r\n**Related:** https://github.com/hotwax/hotwax-oms/issues/291",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#285",
    "repo": "hotwax/hotwax-oms",
    "title": "Implemented the return identification section on the View Return page.",
    "labels": [],
    "type": "PR",
    "body": "- Added the return identification section on the View Return page.\r\n-  Users can add or update the return identification by clicking the `+` button, which opens a dialog where they can select the identification type and enter the ID value.\r\n- The button is only enabled if the user has the `Create Return Identification` permission.\r\n- Added the SecurityPermission, SecurityGroupPermission, Content, and DataResource entity data.\r\n\r\nCloses: #275 ",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "275",
        "body": "",
        "labels": [],
        "files": [],
        "title": "Add support to show and add return identifications on return view screen"
      }
    ],
    "linkedIssueIds": [
      "275"
    ]
  },
  {
    "id": "hotwax/hotwax-oms#298",
    "repo": "hotwax/hotwax-oms",
    "title": "Improvement: Upgraded groovy-all dependency to the latest stable version (update-groovy-all-library)",
    "labels": [],
    "type": "PR",
    "body": "Improvement: Upgraded groovy-all dependency to the latest stable version (update-groovy-all-library)\r\n\r\nChangelog: Changed\r\n\r\n**Related:** https://github.com/hotwax/hotwax-oms/issues/297",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#263",
    "repo": "hotwax/hotwax-oms",
    "title": "Improvement: Upgraded commons-fileupload library from 1.5 to 1.6.0 (update-commons-fileupload-library)",
    "labels": [],
    "type": "PR",
    "body": "Improvement: Upgraded commons-fileupload library from 1.5 to 1.6.0 (update-commons-fileupload-library)\r\n\r\nChangelog: Changed\r\n\r\n**Related::** https://github.com/hotwax/hotwax-oms/issues/262\r\n\r\n**Related::** https://github.com/hotwax/Gorjana-Sprint-Tracker/issues/1",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#261",
    "repo": "hotwax/hotwax-oms",
    "title": "Improvement: Upgraded spring-test library from 5.3.39 to 6.2.14 (update-spring-test-library)",
    "labels": [],
    "type": "PR",
    "body": "Improvement: Upgraded spring-test library from 5.3.39 to 6.2.14 (update-spring-test-library)\r\n\r\nChangelog: Changed\r\n\r\n**Related:** https://github.com/hotwax/hotwax-oms/issues/260",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#265",
    "repo": "hotwax/hotwax-oms",
    "title": "Improvement: Removed org.json dependency as this is not ASL compliant and migrate JSON handling to Jackson library (remove-org-json-library)",
    "labels": [],
    "type": "PR",
    "body": "Improvement: Removed org.json dependency as this is not ASL compliant and migrate JSON handling to Jackson library (remove-org-json-library)\r\n\r\nChangelog: Changed\r\n\r\n**Related:** https://github.com/hotwax/hotwax-oms/issues/264",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#279",
    "repo": "hotwax/hotwax-oms",
    "title": "Improvements: Updated the dependency-check Gradle plugin to 12.1.9 version to ensure improved vulnerability scanning, better CVE database accuracy, and overall performance enhancements. (update-dependencycheck-library)",
    "labels": [],
    "type": "PR",
    "body": "Improvements: Updated the dependency-check Gradle plugin to 12.1.9 version to ensure improved vulnerability scanning, better CVE database accuracy, and overall performance enhancements. (update-dependencycheck-library)\r\n\r\nChangelog: Changed\r\n\r\n**Related:** https://github.com/hotwax/oms/issues/361",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#271",
    "repo": "hotwax/hotwax-oms",
    "title": "Improvement: Upgrade tomcat-catalina-ha and tomcat-jasper dependencies (update-tomcat-dependencies)",
    "labels": [],
    "type": "PR",
    "body": "Improvement: Upgrade tomcat-catalina-ha and tomcat-jasper dependencies (update-tomcat-dependencies)\r\n\r\nChangelog: Changed\r\n\r\n**Related:** https://github.com/hotwax/hotwax-oms/issues/270",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#314",
    "repo": "hotwax/hotwax-oms",
    "title": "Improvement: Added a access scope enum id parameters in createUpdateShopifyShop service (add-access-scope-enum-field)",
    "labels": [],
    "type": "PR",
    "body": "Improvement: Added a access scope enum id parameters in createUpdateShopifyShop service (add-access-scope-enum-field)\r\n\r\nChangelog: Changed\r\n\r\n**Related:** https://github.com/hotwax/hotwax-oms/issues/313",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#341",
    "repo": "hotwax/hotwax-oms",
    "title": "Improvement: Corrected the property key for display correct message on remove order sycn feed history file when the records are null (correct-property-key)",
    "labels": [],
    "type": "PR",
    "body": "Improvement: Corrected the property key for display correct message on remove order sycn feed history file when the records are null (correct-property-key)\r\n\r\n**Related:** https://github.com/hotwax/hotwax-oms/issues/340",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#334",
    "repo": "hotwax/hotwax-oms",
    "title": "Improvement: Added support for display queue of all the virtual facility on the product inventory view page (display-all-virtual-facility-queue-on-product-inventory-page)",
    "labels": [],
    "type": "PR",
    "body": "Improvement: Added support for display queue of all the virtual facility on the product inventory view page (display-all-virtual-facility-queue-on-product-inventory-page)\r\n\r\nChangelog: Changed\r\n\r\n**Related:** https://github.com/hotwax/hotwax-oms/issues/241\r\n\r\n<img width=\"1830\" height=\"913\" alt=\"image\" src=\"https://github.com/user-attachments/assets/73f463bb-2adc-472e-9de6-564bbda5626e\" />\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#200",
    "repo": "hotwax/hotwax-oms",
    "title": "Added: Ship-to-Store fulfillment update in Solr for delivered shipments",
    "labels": [],
    "type": "PR",
    "body": "### Description:\r\n\r\ncloses #[82](https://github.com/hotwax/hotwax-oms/issues/82#event-20670046385)\r\n\r\n- Added support for updating the fulfillment status in Solr documents when Ship-to-Store orders reach the Delivered shipment status. This ensures Solr reflects the latest fulfillment state for Ship-to-Store orders.\r\n\r\n### Changes:\r\n\r\n- Updated Solr sync logic for Ship-to-Store shipments\r\n\r\n- Ensured fulfillment status transitions to Complete on delivery\r\n\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#312",
    "repo": "hotwax/hotwax-oms",
    "title": "Restrict ship to store edit",
    "labels": [],
    "type": "PR",
    "body": "### Summary\r\n\r\nImproves shipment method handling by restricting edits for Ship-to-Store orders and preventing Ship-to-Store selection for normal orders on ViewOrder Screen\r\n\r\n- Prevents editing shipment method for Ship-to-Store orders\r\n\r\n- Filters Ship-to-Store from shipment method options for normal orders\r\n\r\n- Ensures no side effects to existing order flows\r\n\r\ncloses- [707](https://github.com/hotwax/bopis/issues/707)",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#194",
    "repo": "hotwax/hotwax-poorti",
    "title": "Added status check when looking up for existing cycle count",
    "labels": [],
    "type": "PR",
    "body": "Related Issue: #202 \r\nWhy this status check?\r\n\r\nSince we're only looking up the first value with facility and count name and checking for it's status later, following case arise\r\n\r\n- Existing Cycle Count: CountName - ABC, facility - XYZ, statusId - CYCLE_CNT_IN_PRGS\r\n- Record(s) in Import: CountName - ABC, facility - XYZ, statusId - CYCLE_CNT_CREATED, .....\r\n\r\nFor each record here the first existing value is found, since **existing workEffort's** status is no more in created status new **workEffort** is created for every record of item's idValue.",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "202",
        "body": "Since we're only looking up the first value with facility and count name and checking for it's status later, following case arise\n\nExisting Cycle Count: CountName - ABC, facility - XYZ, statusId - CYCLE_CNT_IN_PRGS\nRecord(s) in Import: CountName - ABC, facility - XYZ, statusId - CYCLE_CNT_CREATED, .....other fields\nFor each record here the first existing value is found, since existing workEffort's status is no more in created status new workEffort is created for every record of item's idValue.",
        "labels": [],
        "files": [],
        "title": "Dupllicate WorkEffort Creation when importing Cycle Count with Same name and Facility"
      }
    ],
    "linkedIssueIds": [
      "202"
    ]
  },
  {
    "id": "hotwax/hotwax-poorti#212",
    "repo": "hotwax/hotwax-poorti",
    "title": "Improvements: Added the ProductType entity as a member entity to OrderItemAndProduct to validate whether the ordered item is physical or digital. (add-product-type-as-member)",
    "labels": [],
    "type": "PR",
    "body": "Improvements: Added the ProductType entity as a member entity to OrderItemAndProduct to validate whether the ordered item is physical or digital. (add-product-type-as-member)\r\n\r\nChangelog: Changed\r\n\r\n**Related:** https://github.com/hotwax/hotwax-oms/issues/345",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#84",
    "repo": "hotwax/hotwax-poorti",
    "title": "64 proof of delivery",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#155",
    "repo": "hotwax/hotwax-poorti",
    "title": "Identify the Cycle Count by name, facility and status during CSV import.",
    "labels": [],
    "type": "Issue",
    "body": "Currently in the Cycle Count CSV upload: If user uploads a files having existing cycle count's name on the same facility the items get merged into the existing ones regradless of the status of the Cycle Count, The items should only be merged with the Cycle Count in **Created** status.\n\nWe need to add a check of **statusId** while lookiing the existing the WorkEffort record for the Cycle Count along side with Name and Facility.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#164",
    "repo": "hotwax/hotwax-poorti",
    "title": "Improve: New Transfer Order Receive API",
    "labels": [],
    "type": "Issue",
    "body": "Replicating the issue: https://git.hotwax.co/commerce/poorti/-/issues/77\n\n1. Currently, it is a single end-point which handles all scenarios\n   1. Receive Quantity\n      1. Partial quantity - no status update\n      2. Complete quantity - status update\n   2. Receive & Close\n      1. With quantity\n      2. Without quantity\n   3. Receive New Product\n2. As per new design, we can separate the logic into 2 receive services\n   1. Receive TO item\n      1. This will handle the scenarios of \"Receive Quantity\" and \"Receive New Product\"\n         1. Split Item Receipts shipment wise\n            1. Create Shipment Receipt\n            2. Create IID\n         2. Update OI Status to the given status ID, which we have from UI.\nSample \n```json \n{\n  \"facilityId\": \"100\",\n  \"receivedDateTime\": \"2025-12-11 01:23:42.764\",\n  \"items\": [\n    {\n      \"orderItemSeqId\": \"01\",\n      \"productId\": \"18436\",\n      \"quantityAccepted\": 2,\n      \"statusId\": \"ITEM_COMPLETED\"\n    },\n    {\n      \"orderItemSeqId\": \"02\",\n      \"productId\": \"18439\",\n      \"quantityAccepted\": 3,\n      \"statusId\": \"ITEM_COMPLETED\"\n    },\n    {\n      \"productId\": \"100256\",\n      \"quantityAccepted\": \"20\"\n    }\n  ]\n}\n```\n   2. Receive And Close TO Item\n      1. This will handle the scenarios of \"Receive & Close\" with \"Receive New Product\"\n         1. Split Item Receipts shipment wise\n            1. Create ShipmentReceipt\n            2. Create IID\n         2. Update OH status to ORDER_COMPLETED.\n         3. Complete all the items list. \n```json \n{\n  \"facilityId\": \"100\",\n  \"receivedDateTime\": \"2025-12-11 01:23:42.764\",\n  \"items\": [\n    {\n      \"orderItemSeqId\": \"01\",\n      \"productId\": \"18436\",\n      \"quantityAccepted\": 2\n    },\n    {\n      \"orderItemSeqId\": \"02\",\n      \"productId\": \"18439\",\n      \"quantityAccepted\": 3\n    },\n    {\n      \"orderItemSeqId\": \"03\",\n      \"productId\": \"18439\",\n      \"quantityAccepted\": 0\n    },\n    {\n      \"productId\": \"100256\",\n      \"quantityAccepted\": \"20\"\n    }\n  ]\n}\n```",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#66",
    "repo": "hotwax/hotwax-poorti",
    "title": "Poorti to unigate c807",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#114",
    "repo": "hotwax/hotwax-poorti",
    "title": "DrivIn carrier migration",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#141",
    "repo": "hotwax/hotwax-poorti",
    "title": "Renamed occurances of currentStatusId to statusId in InventoryCountServices",
    "labels": [],
    "type": "PR",
    "body": "Related Issue: #140 ",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "140",
        "body": "The currentStatusId field on WorkEffort has been now removed from entity definition and statusId has been added to entity def.\n\nWe need to rename all occurances of currentStatusId.",
        "labels": [],
        "files": [],
        "title": "Rename Usages of currentStatusId to statusId"
      }
    ],
    "linkedIssueIds": [
      "140"
    ]
  },
  {
    "id": "hotwax/hotwax-poorti#150",
    "repo": "hotwax/hotwax-poorti",
    "title": "Added: estimatedCompletionDate in the cycle counts CSV export",
    "labels": [],
    "type": "PR",
    "body": "(Bot-generated summary)\nThis pull request integrates the `estimatedCompletionDate` into the system's data model and extends the cycle counts CSV export to include this new field. The change aims to provide users with a more complete dataset for inventory analysis, allowing for better tracking and management of cycle count processes.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#145",
    "repo": "hotwax/hotwax-poorti",
    "title": "Fixed: Skip creating count import item with empty productId",
    "labels": [],
    "type": "PR",
    "body": "Closes #144 ",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "144",
        "body": "## Current Behavior\n\nWhen a hard count is created without adding any products, the system successfully creates the count. However, it automatically inserts a blank item into the count, which then appears under the Unmatched section.\n\n## Expected Behavior\n\nIf no products are added while creating a hard count, the system should not insert any items—blank or otherwise. The count should be created with zero items.",
        "labels": [
          "bug"
        ],
        "files": [],
        "title": "Blank item in hard count"
      }
    ],
    "linkedIssueIds": [
      "144"
    ]
  },
  {
    "id": "hotwax/hotwax-poorti#151",
    "repo": "hotwax/hotwax-poorti",
    "title": "Enforce allowed statuses before issuing ICC session lock",
    "labels": [],
    "type": "PR",
    "body": "(Bot-generated summary)\nThis pull request introduces robust validation to the Inventory Count Cycle (ICC) session locking mechanism. It ensures that sessions can only be locked when they are in appropriate initial states (\"SESSION_CREATED\" or \"SESSION_ASSIGNED\"), preventing unintended operations on sessions that are already in progress or completed. Additionally, it refines the session status update process and improves error messages for better user feedback.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#154",
    "repo": "hotwax/hotwax-poorti",
    "title": "Fixed: added default cycle count acceptance comments",
    "labels": [],
    "type": "PR",
    "body": "Closes #153 \r\n- The IID record when accepting variances will have comments like: `Cycle count applied by {accepted by user}`.",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "153",
        "body": "The inventory item detail screen of a cycle count variance should show the following:\n\nCycle count applied by {accepted by user}\n\n<img width=\"1286\" height=\"282\" alt=\"Image\" src=\"https://github.com/user-attachments/assets/f978880d-de01-4433-bdc1-7fef8154ac0a\" />",
        "labels": [],
        "files": [],
        "title": "Inventory item detail message"
      }
    ],
    "linkedIssueIds": [
      "153"
    ]
  },
  {
    "id": "hotwax/hotwax-poorti#148",
    "repo": "hotwax/hotwax-poorti",
    "title": "Improved: create product facility record if not exist when applying variance",
    "labels": [],
    "type": "PR",
    "body": "(Bot-generated summary)\nThis pull request significantly improves the resilience and user experience of the inventory variance application process. It addresses scenarios where related product facility or inventory item records might be missing by introducing logic to create them on demand. Furthermore, it refines error handling to prevent the entire process from failing due to individual missing records, allowing for a more continuous and robust operation.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#143",
    "repo": "hotwax/hotwax-poorti",
    "title": "Create a timestamp from facility time zone and then convert to server time zone",
    "labels": [],
    "type": "PR",
    "body": "Related Issue: https://github.com/hotwax/hotwax-poorti/issues/125\r\n\r\n- Convert the String from CST Input after validation and formatting into Timestamp.\r\n- Used new Commerce Util function to create timestamp(with Server Time Zone) out of timstamp(Facility Time Zone), this way moqui won't apply the user time zone or server time zone on the Date Time String from CSV Input Directly.\r\n\r\n\r\nRelated PR: - https://github.com/hotwax/oms/pull/344",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#156",
    "repo": "hotwax/hotwax-poorti",
    "title": "Fixed: status handling on work effort creation(#155)",
    "labels": [],
    "type": "PR",
    "body": "(Bot-generated summary)\nThis pull request resolves an issue where the system was not properly validating the status of a work effort during its creation or processing. By adding a specific check for the 'CYCLE_CNT_CREATED' status, the change ensures that subsequent logic only executes when the work effort is in the expected initial state, thereby preventing potential inconsistencies and improving the robustness of the work effort management flow.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#157",
    "repo": "hotwax/hotwax-poorti",
    "title": "Added: upgrade data to release session locks(#1221)",
    "labels": [],
    "type": "PR",
    "body": "(Bot-generated summary)\nThis pull request introduces essential upgrade data, encompassing a new automated service job for transfer order receipt reconciliation and critical security permissions. These permissions enable designated user groups to manage and release inventory count session locks, enhancing operational flexibility and control within the system.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#127",
    "repo": "hotwax/hotwax-poorti",
    "title": "Improved: Reconcile Transfer Order Receipts",
    "labels": [],
    "type": "PR",
    "body": "Closes #128 ",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "128",
        "body": "### Problem Description\n\nThe existing `reconcile#ShipmentReceipts` service was written to handle only the simple scenario where a Transfer Order (TO) item is received before the shipment is created, and both have the same quantity.\n\nHowever, we now have more complex cases:\n\n- Over-receiving: the received quantity is greater than the shipped/ordered quantity.\n- Multi-shipment fulfillment: a TO item is split across multiple shipments, but the user receives everything together in a single combined receipt.\n\nIn these scenarios, the current logic does not properly split received quantities or assign them correctly to shipments.\n\n### Solution\n\nThe reconciliation logic must:\n\n- Split the received quantity across shipments based on available shipment quantities.\n- Update the existing receipt with the quantity matched to the first shipment.\n- Create new ShipmentReceipt records for:\n  - remaining shipment quantities, and\n  - leftover “over-received” quantity (without shipment references).\n",
        "labels": [],
        "files": [],
        "title": "Reconcile Transfer Order Receipts"
      }
    ],
    "linkedIssueIds": [
      "128"
    ]
  },
  {
    "id": "hotwax/hotwax-poorti#158",
    "repo": "hotwax/hotwax-poorti",
    "title": "Display Customer First & Last Name on BOPIS Picklist",
    "labels": [],
    "type": "PR",
    "body": "Close: https://github.com/hotwax/hotwax-oms/issues/203\r\n\r\nThis update adds the customer’s first and last name to the BOPIS picklist PDF when the shipment method is `STOREPICKUP`.\r\nStore associates will now be able to quickly identify and verify customers during pickup.\r\n\r\n**Before**\r\n<img width=\"794\" height=\"184\" alt=\"Screenshot 2025-12-09 at 1 08 52 AM\" src=\"https://github.com/user-attachments/assets/0f051a7d-693a-4a0c-929b-e4f05fa06a7f\" />\r\n\r\n**After**\r\n<img width=\"795\" height=\"177\" alt=\"Screenshot 2025-12-09 at 1 09 09 AM\" src=\"https://github.com/user-attachments/assets/f24cd32a-dbb0-43d9-9e1a-792688d1bf3a\" />\r\n\r\n\r\n### Required Setup\r\n**Upload updated template**\r\nReplace the content of the template at: `dbresource://resources/poorti/template/pdf/Picklist.xsl-fo.ftl` by navigating to the Resource Finder.\r\n\r\nThis ensures the picklist PDF uses the new logic for rendering the customer name.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#167",
    "repo": "hotwax/hotwax-poorti",
    "title": "Added Relationship Titles in WorkEffort - Enumertions relationship def",
    "labels": [],
    "type": "PR",
    "body": "Related Issue: #163 \r\nAdded Relationship Titles for **WorkEffortTypeId->Enumeration** and **WorkEffortPurposeTypeId->Enumeration**.",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "163",
        "body": "- Cycle Count Status data in **StatusItem**\n- Cycle Count's(WorkEffort) and Session's(InventoryCountImport) and Flow Transitions\n- Lists all Security Permissions required in Cycle Count App.\n- Checks presence of InventoryCountImportLock & ProductFacilityAndInventoryItem Data Documents\n- Decision Reason and Outcome's enumeration data\n- Relations between InventoryCountImport, WorkEffort, Enumeration, InventoryCountImportItem, Product.",
        "labels": [],
        "files": [],
        "title": "A Validation Service that checks all configuration and necessary data required for Cycle Count."
      }
    ],
    "linkedIssueIds": [
      "163"
    ]
  },
  {
    "id": "hotwax/hotwax-poorti#168",
    "repo": "hotwax/hotwax-poorti",
    "title": "Added Validation Service checking configuration data required for Cycle Count Workflows",
    "labels": [],
    "type": "PR",
    "body": "Related Issue: https://github.com/hotwax/hotwax-poorti/issues/163",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#179",
    "repo": "hotwax/hotwax-poorti",
    "title": "Added: rest endpoint to check cycle count stats",
    "labels": [],
    "type": "PR",
    "body": "Changelog: Added",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#146",
    "repo": "hotwax/hotwax-poorti",
    "title": "Added primaryShipGroupSeqId for the PicklistShipmentAndItem entity",
    "labels": [],
    "type": "PR",
    "body": "closes: https://github.com/hotwax/hotwax-oms/issues/157",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#181",
    "repo": "hotwax/hotwax-poorti",
    "title": "Updated check#CycleCount Service",
    "labels": [],
    "type": "PR",
    "body": "Related Issue: #180 \r\n\r\n- Check exact counts of config data\r\n- Added More Status Transition Data",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "180",
        "body": "- Check Exact Number number of Config Data.\n- Check SecurityPermission and return message of missing ones.",
        "labels": [],
        "files": [],
        "title": "Update Diagnostics Service of Cycle Count"
      }
    ],
    "linkedIssueIds": [
      "180"
    ]
  },
  {
    "id": "hotwax/hotwax-poorti#178",
    "repo": "hotwax/hotwax-poorti",
    "title": "Reason Enum in Inventory Item Detail Map",
    "labels": [],
    "type": "PR",
    "body": "Changelog: Added\r\n\r\nRelated Issue: #177 \r\n\r\nReason Enum in Detail Map while creating Physical Inventory for Cycle Count Product.",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "177",
        "body": "Current Behavior:\nWhen a cycle count is applied:\nThe correct event (e.g. “Cycle count applied by ”) is logged and visible on the Product Inventory View page.\n\nOn the View Inventory Item page, the Event field is blank for the same transaction.\n\nExpected Behavior:\nThe View Inventory Item page should also log and display the correct cycle count event details, same as shown on the Product Inventory View page.\n\n<img width=\"2724\" height=\"602\" alt=\"Image\" src=\"https://github.com/user-attachments/assets/1f64f0b1-df0f-438c-9b1f-f6a26d221e3e\" />\n\nLinked Issue: https://github.com/hotwax/inventory-count/issues/1289",
        "labels": [],
        "files": [],
        "title": "Cycle count event is not logged correctly on the View Inventory Item page"
      }
    ],
    "linkedIssueIds": [
      "177"
    ]
  },
  {
    "id": "hotwax/hotwax-poorti#176",
    "repo": "hotwax/hotwax-poorti",
    "title": " Added entity alias in view entity as needed.",
    "labels": [],
    "type": "PR",
    "body": "(Bot-generated summary)\nThis pull request introduces new aliases within the `FulfillmentViewEntities.xml` configuration. The primary purpose of this change is to make additional shipment route segment details, specifically the carrier service and actual carrier code, accessible through the view entity. This allows other parts of the system that rely on this view to retrieve and utilize these new data points.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#173",
    "repo": "hotwax/hotwax-poorti",
    "title": "Improved: Get Transfer order shipments and close transfer order APIs to prepare shipped quantity",
    "labels": [],
    "type": "PR",
    "body": "Closes #172 ",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "172",
        "body": "1. We have prepare the field \"totalIssuedQuantity\" in the below Transfer Order APIs/services.\n    1. get#TransferOrderShipments\n    2. close#TransferOrderItemFulfillment\n2. We prepared the value from the ItemIssuanceSummary which is based on the entity ItemIssuance.\n3. But we faced issues with recent changes in the Receiving App.\n4. The Transfer Orders items will be shown in the app if some quantity is shipped for them.\n5. So the app team was using this field totalIssuedQuantity to check if any shipped quantity, then item is eligible to be received. (RECEIVE_BY_FULFILL)\n6. This fails in the scenario of Wh Fulfill Transfer Orders since we directly create the Shipments in SHIPMENT_SHIPPED status, and no issuances are done.\n7. So now we will be preparing it from ShipmentItemView which uses quantity from ShipmentItem entity.",
        "labels": [],
        "files": [],
        "title": "Update Get Transfer Order total shipped quantity logic"
      }
    ],
    "linkedIssueIds": [
      "172"
    ]
  },
  {
    "id": "hotwax/hotwax-poorti#182",
    "repo": "hotwax/hotwax-poorti",
    "title": "Fixed: Typo in Service JOb data for reconcile_TransferOrderReceipts",
    "labels": [],
    "type": "PR",
    "body": "(Bot-generated summary)\nThis pull request addresses a critical typo within the configuration of the `reconcile_TransferOrderReceipts` service job. The `serviceName` attribute was incorrectly specified with a `cco` prefix, which has now been corrected to `co`. This fix ensures the service job accurately references its intended service, preventing potential runtime errors and ensuring proper system functionality.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#185",
    "repo": "hotwax/hotwax-poorti",
    "title": "Added: QOH field in InvenoryCountImportItem entity",
    "labels": [],
    "type": "PR",
    "body": "Changelog: Updated\r\n\r\nCloses #186 ",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "186",
        "body": "",
        "labels": [],
        "files": [],
        "title": "Extend InventoryCountImportItem entity to store system QOH per product"
      }
    ],
    "linkedIssueIds": [
      "186"
    ]
  },
  {
    "id": "hotwax/hotwax-poorti#171",
    "repo": "hotwax/hotwax-poorti",
    "title": "Standardize messages and add structured messaging guide",
    "labels": [],
    "type": "PR",
    "body": "(Bot-generated summary)\nThis pull request introduces a comprehensive standard for system messages, including both log entries and return messages from services. The primary goal is to enhance the clarity, consistency, and predictability of these messages, making it easier for developers and support teams to understand system behavior, diagnose issues, and maintain the codebase. By adopting a structured format and a limited vocabulary for actions and outcomes, the PR aims to streamline communication within the application's various components.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#210",
    "repo": "hotwax/hotwax-poorti",
    "title": "Added the API endpoint and created a view entity that returns mis-shipped items for a transfer order.",
    "labels": [],
    "type": "PR",
    "body": "Closes: #209 \r\n\r\n- Added `TransferOrderMisShippedReceipt` view-entity to expose mis-shipped transfer order shipment receipts that are received with the order and need to be processed in NetSuite via inventory adjustment. \r\n- Introduced a new misShippedItems GET resource to fetch these records.",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "209",
        "body": "Need to add support to store mis-shipped items for a transfer order.",
        "labels": [],
        "files": [],
        "title": "Mis-shipped Items TO support"
      }
    ],
    "linkedIssueIds": [
      "209"
    ]
  },
  {
    "id": "hotwax/hotwax-poorti#170",
    "repo": "hotwax/hotwax-poorti",
    "title": "Improved: TransferOrderItemShipmentSummary view to include SI.externalId and removed not need join-optionals",
    "labels": [],
    "type": "PR",
    "body": "Linked Issue - https://github.com/hotwax/mantle-netsuite-connector/issues/165",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#169",
    "repo": "hotwax/hotwax-poorti",
    "title": "Improve: New Transfer Order Receive API #164",
    "labels": [],
    "type": "PR",
    "body": "Closes #164 ",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "164",
        "body": "Replicating the issue: https://git.hotwax.co/commerce/poorti/-/issues/77\n\n1. Currently, it is a single end-point which handles all scenarios\n   1. Receive Quantity\n      1. Partial quantity - no status update\n      2. Complete quantity - status update\n   2. Receive & Close\n      1. With quantity\n      2. Without quantity\n   3. Receive New Product\n2. As per new design, we can separate the logic into 2 receive services\n   1. Receive TO item\n      1. This will handle the scenarios of \"Receive Quantity\" and \"Receive New Product\"\n         1. Split Item Receipts shipment wise\n            1. Create Shipment Receipt\n            2. Create IID\n         2. Update OI Status to the given status ID, which we have from UI.\nSample \n```json \n{\n  \"facilityId\": \"100\",\n  \"receivedDateTime\": \"2025-12-11 01:23:42.764\",\n  \"items\": [\n    {\n      \"orderItemSeqId\": \"01\",\n      \"productId\": \"18436\",\n      \"quantityAccepted\": 2,\n      \"statusId\": \"ITEM_COMPLETED\"\n    },\n    {\n      \"orderItemSeqId\": \"02\",\n      \"productId\": \"18439\",\n      \"quantityAccepted\": 3,\n      \"statusId\": \"ITEM_COMPLETED\"\n    },\n    {\n      \"productId\": \"100256\",\n      \"quantityAccepted\": \"20\"\n    }\n  ]\n}\n```\n   2. Receive And Close TO Item\n      1. This will handle the scenarios of \"Receive & Close\" with \"Receive New Product\"\n         1. Split Item Receipts shipment wise\n            1. Create ShipmentReceipt\n            2. Create IID\n         2. Update OH status to ORDER_COMPLETED.\n         3. Complete all the items list. \n```json \n{\n  \"facilityId\": \"100\",\n  \"receivedDateTime\": \"2025-12-11 01:23:42.764\",\n  \"items\": [\n    {\n      \"orderItemSeqId\": \"01\",\n      \"productId\": \"18436\",\n      \"quantityAccepted\": 2\n    },\n    {\n      \"orderItemSeqId\": \"02\",\n      \"productId\": \"18439\",\n      \"quantityAccepted\": 3\n    },\n    {\n      \"orderItemSeqId\": \"03\",\n      \"productId\": \"18439\",\n      \"quantityAccepted\": 0\n    },\n    {\n      \"productId\": \"100256\",\n      \"quantityAccepted\": \"20\"\n    }\n  ]\n}\n```",
        "labels": [],
        "files": [],
        "title": "Improve: New Transfer Order Receive API"
      }
    ],
    "linkedIssueIds": [
      "164"
    ]
  },
  {
    "id": "hotwax/job-manager#866",
    "repo": "hotwax/job-manager",
    "title": "Remove Import products job from products page",
    "labels": [],
    "type": "Issue",
    "body": "## What is the motivation for adding/enhancing this feature?\n<!-- Describe the motivation or the concrete use case for a new feature or why one of the current ones should be enhanced. -->\n\n\n## What are the acceptance criteria?\n<!-- List the acceptance criteria for this task in the form of a list. -->\n\n- [ ] ...\n\n## Can you complete this feature request by yourself?\n\n- [x] YES\n- [ ] NO\n\n## Additional information\n<!-- If you think that any additional information would be useful, please provide them here. -->\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/job-manager#867",
    "repo": "hotwax/job-manager",
    "title": "Removed: the import products job from product page(#866)",
    "labels": [],
    "type": "PR",
    "body": "### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n\r\n#866 \r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\n\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\n\r\nAfter:\r\n\r\n<img width=\"1606\" height=\"1154\" alt=\"image\" src=\"https://github.com/user-attachments/assets/95b69fcf-043d-4096-b0c9-ba8409240878\" />\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [x] I read and followed [contribution rules](https://github.com/hotwax/job-manager#contribution-guideline)",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-ofbiz-oms-usl#14",
    "repo": "hotwax/hotwax-ofbiz-oms-usl",
    "title": "added month folder to sftp service",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-netsuite-connector#194",
    "repo": "hotwax/mantle-netsuite-connector",
    "title": "Added support for the order date in the reconciliation feed",
    "labels": [],
    "type": "PR",
    "body": "(Bot-generated summary)\nHello @Shinde-nutan, I'm Gemini Code Assist[^1]! I'm currently reviewing this pull request and will post my feedback shortly. In the meantime, here's a summary to help you and other reviewers quickly get up to speed!\n\nThis pull request enhances the transfer order reconciliation feed by introducing the ability to filter data based on the order's creation date. This provides more granular control and flexibility when retrieving reconciliation details, ensuring users can focus on orders created within a specific timeframe.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-netsuite-connector#191",
    "repo": "hotwax/mantle-netsuite-connector",
    "title": "Moved the view-entity from mantle-netsuite-connector to ofbiz-oms-udm",
    "labels": [],
    "type": "PR",
    "body": "Links: https://github.com/hotwax/ofbiz-oms-udm/pull/337",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-netsuite-connector#194",
    "repo": "hotwax/mantle-netsuite-connector",
    "title": "Added support for the order date in the reconciliation feed",
    "labels": [],
    "type": "PR",
    "body": "(Bot-generated summary)\nHello @Shinde-nutan, I'm Gemini Code Assist[^1]! I'm currently reviewing this pull request and will post my feedback shortly. In the meantime, here's a summary to help you and other reviewers quickly get up to speed!\n\nThis pull request enhances the transfer order reconciliation feed by introducing the ability to filter data based on the order's creation date. This provides more granular control and flexibility when retrieving reconciliation details, ensuring users can focus on orders created within a specific timeframe.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-netsuite-connector#190",
    "repo": "hotwax/mantle-netsuite-connector",
    "title": "Exclude Shipment Feed and Shipment Receipt Feed",
    "labels": [],
    "type": "Issue",
    "body": "**Background / Problem Statement**\n\nCurrently, the Transfer Order Shipment Feed and Shipment Receipt Feed are generated without validating mandatory NetSuite sync conditions.\n\nThis results in:\n- Shipments being sent to NetSuite for orders not yet synced\n- Shipment receipts being generated where external shipment reference is missing\n- Downstream NetSuite failures and manual reconciliation\n\n**Shipment Feed Exclusion Rule**\nExclude shipment records if the linked order is NOT synced to NetSuite.\nOrder is considered synced only if:\n- A record exists in OrderIdentification\n- orderIdentificationTypeId = NETSUITE_ORDER_ID\n\n**Shipment Receipt Feed Exclusion Rule**\nExclude shipment receipt records if the shipment does NOT have an external reference.\nShipment is considered eligible only if:\n- externalId IS NOT NULL",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-netsuite-connector#193",
    "repo": "hotwax/mantle-netsuite-connector",
    "title": "Fix: the empty file is generating in reconciliation feed",
    "labels": [],
    "type": "PR",
    "body": "(Bot-generated summary)\nHello @Shinde-nutan, I'm Gemini Code Assist[^1]! I'm currently reviewing this pull request and will post my feedback shortly. In the meantime, here's a summary to help you and other reviewers quickly get up to speed!\n\nThis pull request resolves an issue where empty reconciliation feed files were being generated for transfer orders. The fix refines the conditional logic that dictates whether a feed file contains data, specifically by removing a line that erroneously marked a file as non-empty even when no relevant items were processed for inclusion. This ensures that reconciliation feeds are only produced when they contain actual data, avoiding unnecessary empty files.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-netsuite-connector#192",
    "repo": "hotwax/mantle-netsuite-connector",
    "title": "Add conditions to exclude shipments with null external IDs and include order identification for NetSuite orders-id-(#190)",
    "labels": [],
    "type": "PR",
    "body": "This PR adds view-entity level filters to ensure that only NetSuite-eligible shipments and shipment receipts are included in feed generation.\r\n\r\n **Shipment Receipt Feed**\r\n- Added a condition to exclude shipments with externalId = null\r\n- Prevents generation of shipment receipt feeds for shipments that are not yet synced to NetSuite\r\n\r\n**Shipment Feed**\r\n- Added OrderIdentification join to validate NetSuite order sync\r\n- Ensures shipments are included only if the linked order has a valid NETSUITE_ORDER_ID\r\n- Applied filtering at the view-entity level to avoid service-level conditional logic",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-netsuite-connector#170",
    "repo": "hotwax/mantle-netsuite-connector",
    "title": "Fix isMixCartOrder logic by adding JOIN with ORDER_ITEM in the shipment method subquery.  This ensures DISTINCT shipment method counts are accurate and prevents false mix-cart detections.",
    "labels": [],
    "type": "PR",
    "body": "Closes: https://github.com/hotwax/hotwax-gorjana-netsuite/issues/24 ",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-netsuite-connector#62",
    "repo": "hotwax/mantle-netsuite-connector",
    "title": "Added service to generate transfer order items feed from hotwax to netsuite",
    "labels": [],
    "type": "PR",
    "body": "Closes: #61 ",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "61",
        "body": "We need to sync the transfer order from OMS to NetSuite.\nImplemented a service job to generate a transfer order items feed.\n ",
        "labels": [],
        "files": [],
        "title": "Implement: Generate Transfer Order Item Feed"
      }
    ],
    "linkedIssueIds": [
      "61"
    ]
  },
  {
    "id": "hotwax/mantle-netsuite-connector#184",
    "repo": "hotwax/mantle-netsuite-connector",
    "title": "Improvement: Updated gradle-versions-plugin library to 0.53.0 to detect latest dependency versions (update-gradle-versions-plugin-library)",
    "labels": [],
    "type": "PR",
    "body": "Improvement: Updated gradle-versions-plugin library to 0.53.0 to detect latest dependency versions (update-gradle-versions-plugin-library)\r\n\r\nChangelog: Changed\r\n\r\n**Related:** https://github.com/hotwax/hotwax-predictspring/issues/17",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-netsuite-connector#187",
    "repo": "hotwax/mantle-netsuite-connector",
    "title": "Fix: history creation is skipping for POS orders feed if batch contains an partial order",
    "labels": [],
    "type": "PR",
    "body": "(Bot-generated summary)\nHello @Shinde-nutan, I'm Gemini Code Assist[^1]! I'm currently reviewing this pull request and will post my feedback shortly. In the meantime, here's a summary to help you and other reviewers quickly get up to speed!\n\nThis pull request addresses a critical bug where the system was failing to create order history for Point-of-Sale (POS) orders under specific conditions, particularly when a batch included partially paid orders. The changes implement a more precise mechanism for determining when order history should be recorded, ensuring that history is now correctly generated for all relevant orders while maintaining the intended skip for partially paid POS orders.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-netsuite-connector#177",
    "repo": "hotwax/mantle-netsuite-connector",
    "title": "Feed to Close Completed Transfer Order Items in netsuite",
    "labels": [],
    "type": "PR",
    "body": "(Bot-generated summary)\nHello @Shinde-nutan, I'm Gemini Code Assist[^1]! I'm currently reviewing this pull request and will post my feedback shortly. In the meantime, here's a summary to help you and other reviewers quickly get up to speed!\n\nThis pull request implements a new automated process to ensure data consistency between the Order Management System (OMS) and NetSuite regarding transfer order item statuses. It introduces a scheduled job that identifies transfer order items marked as completed in OMS but which have no corresponding shipment or receipt records. For these items, a feed file is generated and sent to NetSuite, instructing it to close these specific transfer order items, thereby resolving potential discrepancies and improving data synchronization.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-netsuite-connector#182",
    "repo": "hotwax/mantle-netsuite-connector",
    "title": "Wh Fulfill Shipment sync from NetSuite - skip if item is completed in OMS",
    "labels": [],
    "type": "PR",
    "body": "(Bot-generated summary)\nHello @Shinde-nutan, I'm Gemini Code Assist[^1]! I'm currently reviewing this pull request and will post my feedback shortly. In the meantime, here's a summary to help you and other reviewers quickly get up to speed!\n\nThis pull request refines the transfer order shipment creation process by introducing checks to prevent redundant shipments for already completed order items. The changes ensure that the system only attempts to create shipments for items that are still pending, thereby improving efficiency and maintaining data integrity. It also includes logic to skip entire shipments if all associated items are already completed.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-netsuite-connector#175",
    "repo": "hotwax/mantle-netsuite-connector",
    "title": "Added: Transfer Order Completed Items Reconciliation Feed with new history entity",
    "labels": [],
    "type": "PR",
    "body": "Closes #165 ",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "165",
        "body": "In the Item Receipt feed to NetSuite we need to include the following data points:\n\n1. Order item status\n2. Order item received qty (if item is status = completed)\n3. Receiving discrepancy qty (Received qty - Shipped qty)\n",
        "labels": [],
        "files": [],
        "title": "New Transfer Order Receipt Reconciliation Feed"
      }
    ],
    "linkedIssueIds": [
      "165"
    ]
  },
  {
    "id": "hotwax/mantle-netsuite-connector#171",
    "repo": "hotwax/mantle-netsuite-connector",
    "title": "Added: Create Inventory Adjustment feed for Transfer Order MisShipped Item Receipts",
    "labels": [],
    "type": "PR",
    "body": "Closes #167 ",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "167",
        "body": "Create CSV feed for shipment receipt records that do not have an order item seq id.\n\nThese items are products that were not shipped on the TO at all and so need to be received into NetSuite as a pure play adjustment.",
        "labels": [],
        "files": [],
        "title": "Add Inventory Adjustment feed for mishipped TO receipts"
      }
    ],
    "linkedIssueIds": [
      "167"
    ]
  },
  {
    "id": "hotwax/mantle-netsuite-connector#173",
    "repo": "hotwax/mantle-netsuite-connector",
    "title": "Add NetSuite ↔ HotWax Inventory Reset and Variance Export Flow",
    "labels": [],
    "type": "PR",
    "body": "## Description\r\n\r\nThis PR implements a **reset-based inventory synchronization flow between NetSuite and HotWax**.\r\n\r\nThe flow reconciles inventory differences by comparing NetSuite inventory values with HotWax inventory and exporting **only the variances** back to NetSuite in a controlled and auditable manner.\r\n\r\n---\r\n\r\n## How the Flow Works\r\n\r\n1. **Inventory Import from NetSuite**\r\n\r\n   * NetSuite exports inventory data (**QOH or ATP**) to HotWax via **MDM (SFTP import)**.\r\n   * The raw file is stored in MDM for traceability.\r\n\r\n2. **Inventory Comparison**\r\n\r\n   * HotWax compares NetSuite inventory with its own inventory.\r\n   * Comparison behavior is controlled by the `resetBy` parameter:\r\n\r\n     * `QOH` → Quantity On Hand (default)\r\n     * `ATP` → Available To Promise\r\n\r\n3. **Reset Record Creation**\r\n\r\n   * When a difference is found, a record is created in the **`NetsuiteInventoryReset`** entity containing:\r\n\r\n     * NetSuite quantity\r\n     * HotWax quantity\r\n     * Calculated difference\r\n\r\n4. **Export Variances to NetSuite**\r\n\r\n   * A scheduled job exports unprocessed reset records in NetSuite’s required **CSV format**.\r\n   * Exported records are marked as processed.\r\n\r\n---",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-netsuite-connector#189",
    "repo": "hotwax/mantle-netsuite-connector",
    "title": "Implement generate transfer order item feed hotwax to netsuite",
    "labels": [],
    "type": "PR",
    "body": "(Bot-generated summary)\nHello @Shinde-nutan, I'm Gemini Code Assist[^1]! I'm currently reviewing this pull request and will post my feedback shortly. In the meantime, here's a summary to help you and other reviewers quickly get up to speed!\n\nThis pull request establishes a robust mechanism for synchronizing transfer order item data between HotWax and NetSuite. It introduces a dedicated service to automate the extraction, transformation, and delivery of transfer order item information, leveraging new database views for data aggregation and a FreeMarker template for flexible data formatting. This integration ensures that detailed transfer order item movements are accurately reflected in NetSuite, improving inventory management and operational consistency.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/OrderRouting#108",
    "repo": "hotwax/OrderRouting",
    "title": "Improvement: Updated gradle-versions-plugin library to 0.53.0 to detect latest dependency versions (update-gradle-versions-plugin-library)",
    "labels": [],
    "type": "PR",
    "body": "Improvement: Updated gradle-versions-plugin library to 0.53.0 to detect latest dependency versions (update-gradle-versions-plugin-library)\r\n\r\nChangelog: Changed\r\n\r\n**Related:**  https://github.com/hotwax/hotwax-predictspring/issues/17",
    "linkedIssues": [],
    "linkedIssueIds": []
  }
]

Output ONLY a JSON object in this format:
{
  "repoLogicalNames": { "owner/repo": "Logical Name" },
  "clusters": [ { "name": "Cluster Name", "reason": "...", "itemIds": ["id", ...] } ],
  "noiseItemIds": ["id", ...],
  "needClarificationItemIds": ["id", ...]
}
