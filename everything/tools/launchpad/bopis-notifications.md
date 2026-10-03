---
description: >-
  Separate BOPIS notification preferences, device permissions, push registration,
  and reminder delivery before changing a store device.
---

# Diagnose BOPIS Notifications

Use this guide for the BOPIS app in a browser or installed Home Screen web app when a notification does not appear, the permission prompt is missing, or a device reports that notifications are blocked. It covers alerts for store associates, not customer pickup emails.

{% hint style="info" %}
Verified on October 3, 2026 against product source and official platform documentation. No live device or notification-delivery test was performed for this guide.

Confirm the deployed BOPIS app version and OMS version with your administrator. Standard BOPIS 5.4.0 displays its Settings notification card when preferences are available. If the card is missing, ask support to check preference configuration and loading. Additional device setup, diagnostics, announcement, and test controls are available only in some builds. Use the controls actually present in your installation. A missing diagnostics button is not itself a notification failure.
{% endhint %}

## Record the Symptom First

Before changing settings, record:

* The app address and environment, selected facility, app version if displayed, and device OS and browser versions.
* Whether the app was opened in a browser tab or from its Home Screen icon, and whether that icon was installed by the user or supplied through device management.
* What is missing: the permission prompt, an in-app notification, a system banner, a sound, a new-order alert, or an open-order reminder.
* The event time and time zone, whether the app was visible, backgrounded, or closed, and whether other devices received the same alert.
* The exact message shown and the action immediately before it. Record whether a permission prompt actually appeared and what was selected; do not infer a previous choice from a blocked message.

## Check the Separate Parts

| Part | What to check | What it does not prove |
| --- | --- | --- |
| BOPIS preferences | If the card is present, inspect the required notification types for the selected facility in `Settings` > `Notification Preference`. The Notifications page also has a settings control for preferences. | An enabled preference does not prove that this device has permission or a working push registration. |
| Browser or installed-app permission | Inspect the current permission for the exact app or site. If diagnostics are available, preserve the reported value. | Permission to display notifications does not prove that an order event was sent. |
| Push registration | Where diagnostics exist, record the notification service worker's state, whether a browser push subscription is present, and any registration error. | An active worker, a local device ID, or a subscription by itself does not prove successful server registration or delivery. |
| Server topic and event | Have support compare the relevant notification type, facility, user, and device registration with the event or reminder job. | The currently selected facility alone does not establish which server subscriptions exist. |
| OS presentation | Inspect the app's notification settings, alert presentation, and Focus or Do Not Disturb state. | A missing banner or sound alone does not show which earlier stage failed. |

The app's topic preferences and device registration are separate operations. Foreground and background messages also use different handlers. Keep the app state in the report so support can trace the correct path. See [Firebase's web message handling documentation](https://firebase.google.com/docs/cloud-messaging/web/receive-messages).

## When the Permission Prompt Does Not Appear

### iPhone and iPad

Web Push requires iOS or iPadOS 16.4 or later and a Home Screen web app. The permission request must follow a direct user interaction. A website icon that opens a normal browser tab is not sufficient evidence of that app context. These are [Apple WebKit's platform requirements](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/), not a guarantee that every BOPIS build has completed registration.

Inspect the app's current permission under the device's `Settings` > `Notifications`, if the app is listed. Record the app name, alert settings, and any unavailable controls. [Apple's notification settings guide](https://support.apple.com/guide/ipad/change-notification-settings-ipad870e28f5/ipados) also explains Focus and scheduled delivery.

For a managed device, ask the device administrator to verify the installed Web Clip's URL, launch mode, and applicable policy. Apple documents [Web Clip configuration separately](https://support.apple.com/guide/deployment/web-clips-payload-settings-depbc7c7808/web). A managed icon, or success with a different installation, does not by itself identify the original cause. Do not remove a management profile or reinstall the app as the first diagnostic step.

### Desktop Browsers

Inspect notification permission for the exact app address. In Chrome, a quieter permission request can appear as an icon beside the address instead of a pop-up. Follow the browser's [site-specific notification guidance](https://support.google.com/chrome/answer/3220216?co=GENIE.Platform%3DDesktop&hl=en); do not enable notifications for all sites or disable browser protections.

### Interpret the Recorded State

* `default`: permission has not been granted; it is distinct from `denied`.
* `denied`: notifications are blocked in the current context. This state does not provide a history of who changed it or when.
* `granted`: display permission exists. Continue checking registration, subscriptions, the event, and OS presentation.
* Unsupported or unknown: record it separately instead of treating it as a user denial.

The [Notifications API standard](https://notifications.spec.whatwg.org/#permissions-integration) defines the permission states. A generic warning containing the word “denied” should not replace the actual state in a support report.

## When Permission Is Granted but Alerts Are Missing

Use `Open diagnostics` only if your build provides it. First read the status and preserve the relevant errors. Registration, re-subscription, worker repair, and test buttons perform actions; they are not additional read-only checks. Have support choose a targeted next step after reviewing the evidence.

| Symptom | Next investigation |
| --- | --- |
| A local test was visible, but an order alert was not | A local display test does not exercise the server's order-event delivery. Have support check registration, the matching topic, and the server event. |
| A test reports success, but no banner was seen | Record the exact test and result, then inspect OS presentation. Do not mark delivery confirmed solely from a success message. |
| New-order alerts arrive, but open-order reminders do not | Have the job owner inspect the reminder job's pause state, parameters, schedule, recent history, and eligible orders. An app preference does not start a paused server job. |
| An alert refers to another facility | Compare the alert's facility with the recorded subscriptions. Do not assume switching the visible facility removed other subscriptions. |
| An in-app alert appears, but background alerts or sound do not | Record those as separate symptoms. In builds with `Announce notifications`, that control concerns the app's announcement; it does not establish push permission or server delivery. |

For a Maarg-hosted reminder job, see [Service Jobs](../maarg/service-jobs.md). Other deployments may use a different job manager; ask the job owner to inspect the configured reminder service there. Job timing and order eligibility depend on the deployed backend and its configuration; there is no universal delivery interval.

{% hint style="warning" %}
In builds that offer `Send a test order notification`, the action can send a real alert to every device subscribed at the facility. Arrange it with the store and support first. Do not create test orders, repeatedly send alerts, clear app data, reset service workers, or change device policy just to collect a diagnostic report.
{% endhint %}

## Escalate With a Focused Report

Send the recorded context, symptom, timestamps, and relevant status or error text through your approved support channel. Include the observed result of any already-authorized test and whether it was local-only or server-generated. If diagnostics are unavailable, the context and exact screen message are still useful.

Review screenshots and diagnostic exports before sharing. Remove passwords, session data, registration tokens, push endpoint URLs, and unrelated customer information. Support can request any additional identifiers needed through the appropriate private channel.
