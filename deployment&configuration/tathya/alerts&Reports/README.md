# Alerts and Reports

Now that you've successfully created charts and added them to dashboards, the next crucial step is to set up Alerts and Reports. The Alerts & Reports feature in Tathya enables creating event-triggered notifications (Alerts) or scheduled notifications (Reports).

## What is an Alert?

An alert provides a custom link to a chart or an entire dashboard and is triggered when a predefined event occurs. This event is a logical condition within your data.

## What is a Report?

A report offers a snapshot of a chart or an entire dashboard, accompanied by a link for further exploration and slicing & dicing of the query. Unlike alerts, reports run on a defined schedule (e.g., daily at 7 pm, weekly, etc.).

## Navigating to Alerts & Reports

1. In the Toolbar, hover over Settings.
2. From the drop-down menu, select Alerts & Reports.

Upon reaching the Alerts & Reports screen, the Alerts interface is displayed by default. You can easily toggle between the Alerts and Reports tabs to control the content they wish to view.

Below the Alerts and Reports tabs is “Last Updated” information, this simply conveys when the screen was last updated with data. You can force refresh the page by selecting the circular “Refresh” icon.

The filters and search features enable you to quickly find the alert or report that you're looking for, which is invaluable when there are many entries.

## Filters and Search Features

- **Created By:**
  - Select a user to display alerts or reports created by that individual.

- **Status:**
    - Select an option to display alerts or reports that match the selected status. Available status options include:
    - Default: Displays all entries regardless of status.
    - Success: Displays entries that ran successfully.
    - Working: Displays entries that are currently being processed.
    - Error: Displays entries that did not successfully run.
    - Not Triggered: Displays entries with a trigger that has not yet been activated.
    - On Grace: Displays entries that are currently in a defined grace period.

- **Search:**
    - To use the Search feature, simply enter a term in the text-entry field and hit <Enter> or select the magnifying glass icon. A list of entries that include your search criteria will appear in the table.

## Table Column Headers

The Alerts and Reports tables include the following column headers:

- **Last Run:**
  - Displays the date, time, and UTC hour difference when the entry last ran.

- **Name:**
  - Represents the name of the alert or report, as defined when adding or editing the entry.

- **Schedule:**
  - Indicates the defined schedule of the alert or report (e.g., every hour, every minute, etc.).

- **Notification Method:**
  - Displays an icon indicating that notifications will be sent via email.

- **Owners:**
  - Icons indicating the owner(s) of the alert or report.

- **Active:**
  - A toggle switch indicating whether the alert or report is currently enabled or not.

- **Actions (visible on cursor hover):**
  - Icons that enable you to access the execution log, edit the entry, or delete the entry.

{% hint style="success" %}
By leveraging these features, you can efficiently manage and monitor alerts and reports, ensuring timely and relevant notifications based on predefined conditions or schedules.
{% endhint %}