---
description: Maintain a customer record and review the orders, tasks, returns, and communications connected to it.
---

# View customer details

Use `Customer Detail` to confirm that you have the correct customer, maintain contact and relationship data, resolve open tasks, and review the customer's order activity.

Open [Find customers](find-customers.md), compare the party ID and contact information, then select the customer. You need permission to view customer records. If an action is visible but does not complete, ask your administrator to confirm that your account can update that customer data.

## Before you begin

Confirm the party ID before changing the record. Customers can have similar names, shared contact details, or a possible duplicate record.

Use the area that matches your task:

* Use `Contact` to maintain the customer's active email address, phone number, and postal address.
* Use `Relationships` to connect the customer to another person or group.
* Use `Merged Contacts` to link records that represent the same customer.
* Use `Tasks`, `Unfillable`, `Orders`, `Returns`, and `Comms` to review activity associated with the customer.
* Use the trash icon only when you are authorized to permanently anonymize the customer's personal information.

The customer summary, order cards, and lifetime value depend on the related data that Order Manager can load. Verify important order and financial details on the source order rather than treating the customer page as an accounting record.

## Confirm the customer summary

The top of the page shows the customer's name, `Customer since`, and `Lifetime value`. `Customer since` uses the customer record creation date when it is available and otherwise uses the earliest loaded order date.

Use the party ID and contact values to confirm the record before relying on the summary. `Lifetime value` is calculated from the order totals available to this page. A zero value can also appear when order totals are not available, so it does not always mean that the customer has never placed an order.

`Lifetime value` does not convert currencies before adding order totals. Do not use it as a financial total when the customer has orders in more than one currency.

The `Timeline` identifies when the customer record was created. It is not a complete audit history of later contact, relationship, order, or anonymization changes.

## Update contact information

**Goal:** Add or correct the customer's active email address, phone number, or postal address without changing the wrong value.

**Use this flow when:** A contact section shows `None on file`, or the value displayed in `Contact` is no longer correct.

### Add a missing contact value

1. In `Contact`, find `Email`, `Phone`, or `Address`.
2. Select `Add` for the section that shows `None on file`.
3. Enter the required information for the contact type.
4. For an address, select the country before the state or province. Changing the country clears an existing state selection.
5. Select the floating checkmark button.
6. Confirm that the new value appears in the correct contact section.

| Contact type | Required and optional information |
| --- | --- |
| Email | Enter a nonempty `Email address`. Confirm the spelling yourself; the form does not provide strict email-format validation. |
| Phone | Enter `Phone number`. `Country code` and `Area code` are optional. |
| Address | Enter `Address line 1`, `City`, `Postal code`, and `Country`. Enter `State / Province` when the selected country provides a state list. `Address line 2` is optional. |

Order Manager marks the new email, phone, or address as the primary contact value.

**Outcome:** The new active contact value appears on the customer record.

### Edit or expire an existing contact value

1. In the required contact section, select `Edit`.
2. Confirm that the dialog contains the value you intend to change.
3. Update the value and select the floating checkmark button.
4. To remove the active value instead, select the red trash action in the dialog.
5. Return to `Contact` and verify the result.

{% hint style="warning" %}
The trash action expires the active contact value immediately and does not ask for confirmation.
{% endhint %}

Each contact section has one `Edit` action. When a section displays more than one active value, that action opens only the first value in the section; it does not let you choose a different displayed row. Always verify the value that opens. If the required value is not available in the dialog, do not overwrite the first value as a workaround; record the party ID and ask your administrator to maintain the intended contact record.

Contact changes appear on the detail card before they necessarily appear in customer search. If the saved value is correct here but Find customers still shows the earlier value, wait for search data to refresh, then search again.

**Outcome:** The intended active contact value is updated or expired, and the detail card reflects the result.

## Maintain customer relationships

**Goal:** Connect the customer to another person or group with the correct relationship type and roles.

**Use this flow when:** You need to record a relationship such as a household, company, or other configured business connection.

1. In `Relationships`, select `Add new`.
2. Select `Person` to search by first or last name, or select `Group` to search by company name.
3. Enter the search value and wait for the results to update.
4. Select the correct party. Compare the party ID when names are similar.
5. Select the `Relationship type`.
6. Select `Role (current party)` and `Role (selected party)`.
7. Add a `Comment` when it helps explain the relationship.
8. Select the floating checkmark button.
9. Confirm that the relationship appears on the customer record.

`No parties found` can mean either that the search returned no matches or that the search request failed. Retry with another known name or company value before deciding that the party does not exist.

If the relationship does not appear after saving, refresh and inspect the record before trying again. A failed save can still assign the selected roles, so confirm the current state before repeating the action.

**Outcome:** The active relationship appears with its relationship type, related party name, and party ID.

### Expire or review a relationship

Select `Expire` only after confirming the related party and relationship type. The action takes effect immediately and does not ask for confirmation. It removes the relationship from active use but preserves the period in `View history`; this page does not provide a reactivation action.

Use `View history` to review active and expired relationship periods and their dates.

## Link a duplicate customer

**Goal:** Mark two customer records as duplicates while preserving both records and their existing data.

**Use this flow when:** `Merged Contacts` shows a `Duplicate candidate` and you have confirmed that both party IDs represent the same customer.

Order Manager identifies candidates that share a Shopify customer ID. A shared Shopify ID is a useful signal, but you should still compare the name, party ID, and available contact or order details before linking the records.

1. In `Merged Contacts`, review the candidate's name and party ID.
2. Select the open icon to inspect the candidate's customer profile.
3. Return to the record that should be treated as the current customer.
4. Select `Merge` for the confirmed candidate.
5. Wait for the success message, then confirm that the related record appears in `Merged Contacts`.

{% hint style="warning" %}
Despite the `Merge` button label, this action links the records as a canonical and duplicate pair. It does not copy contact information, move orders or returns, combine lifetime value, delete a profile, or anonymize either customer.
{% endhint %}

Select `Expire` to remove an active duplicate link. Expiration takes effect immediately without confirmation, and the earlier link remains available in `View history`.

**Outcome:** The two customer records are linked as duplicates, while each party record and its data remain separate.

## Review customer activity

Use the activity segments to move from a customer-level view to the record that needs attention.

| Segment | Use it to | Important limit |
| --- | --- | --- |
| `Dashboard` | Review the first open task and a recent-order summary. | It shows only the first open task and up to 12 loaded recent orders. Each order card previews up to three items. |
| `Tasks` | Review and resolve the customer's open tasks. | Only open tasks appear. Select `Load more` when it is available. |
| `Unfillable` | Find loaded customer orders that contain an item parked as unfillable. | It is a subset of the orders loaded for this customer, not a separate complete feed. |
| `Orders` | Search the loaded orders and open an order detail page. | Search matches the displayed order name and internal order ID. It does not independently search another external identifier. |
| `Returns` | Review the customer's return merchandise authorizations (RMAs) and open a return detail page. | `Return Detail` is read-only. |
| `Comms` | Review recorded communication events. | The page is read-only and loads a limited recent set, not an unbounded communication history. |

Use `View all` beside `Open tasks` to move to the complete loaded task list. To review all loaded orders, select the `Orders` segment. The `View all` control beside `Recent orders` does not currently navigate to that segment.

Order cards summarize item count, order date, progress, and a small item preview. Select `View details` to verify the full order, ship groups, item statuses, and available actions. See [View order details](view-order-details.md).

## Resolve an open task

**Goal:** Record the task's resolution and remove it from the customer's open-task list.

**Use this flow when:** The task's requested investigation or correction is complete.

1. Open `Tasks`, or review the first open task on `Dashboard`.
2. Confirm the order, task purpose, notes, due date, assignee, and reporter.
3. Select `View order` when you need to verify the order before completing the task.
4. Enter a `Resolution comment` when the outcome needs to be recorded. The comment is optional.
5. Select `Resolve task`.
6. In the confirmation, select `Resolve task` again.
7. Confirm that the task no longer appears in the open-task list.

The page marks the task completed. It does not provide an undo or reopen action, so resolve it only after completing the underlying work.

**Outcome:** The task is completed with the optional resolution comment and leaves the open list.

## Review a return

**Goal:** Confirm what the customer requested to return and open the related order when more investigation is required.

**Use this flow when:** `Returns` shows an RMA that needs review.

1. Select `Returns`.
2. Compare the RMA or return ID, requested date, linked order, destination facility, return channel, displayed total, item count, and status.
3. Select the return row to open `Return Detail`.
4. Review each item's product, return quantity, received quantity when available, line amount, reason, return type, and status.
5. Select `View order` to inspect the original order.

`Return Detail` is read-only. It does not provide actions to approve, cancel, receive, edit, refund, or credit the return.

The displayed return total is calculated from return price multiplied by return quantity. Treat it as a return-line total, not proof of a refund, credit, or captured payment.

**Outcome:** You have verified the return record and opened the source order when additional context is required.

## Review customer communications

Select `Comms` to review recorded communication subjects, types, statuses, start or entry dates, end dates, sender and recipient party IDs, and available message content.

The segment is read-only; it does not provide a reply or send action. It loads a limited recent set with the newest entries first. Use it as recent operational context rather than a complete communication archive.

## Anonymize customer data

**Goal:** Permanently remove personally identifiable information when an approved privacy or retention process requires it.

**Use this flow when:** You have confirmed the party ID and have authorization to anonymize the customer. Do not use this action to link duplicates or correct contact information.

{% hint style="danger" %}
Anonymization is permanent and cannot be undone. Confirm the customer and your authorization before continuing.
{% endhint %}

1. Confirm the customer name and party ID.
2. Select the trash icon in the page header.
3. Read the `Anonymize customer data` confirmation.
4. Select the confirmation action and wait for the result.
5. After a success message returns you to Find customers, search for the party again and confirm that the disabled customer no longer appears.

The trash action is unavailable when the customer is already disabled.

The personal-information change and the customer-search refresh happen separately. If the page reports that anonymization failed after you confirmed it, the personal information might already have been removed even though search results did not refresh.

{% hint style="warning" %}
Do not repeat the anonymization action immediately after an error. Reload the current customer page before navigating away and verify whether the personal information remains. If the data is already anonymized but a stale search result remains, report the party ID and the error to your administrator or HotWax Support.
{% endhint %}

**Outcome:** The customer's personal information is permanently anonymized, the record is disabled, and customer search reflects the change after its results refresh.

## Resolve missing or incomplete activity

Different sections handle load failures differently:

* `Returns` and `Comms` show a specific error state when their request fails.
* `Dashboard`, `Orders`, `Unfillable`, and `Tasks` can look empty or incomplete when related data does not load.
* A blank section therefore does not always prove that the customer has no activity.

Refresh the page and retry the segment. If the problem remains, record the party ID, the affected segment, the order management system (OMS) instance, and the approximate time for your administrator or HotWax Support.

## Continue with related guides

* [Find customers](find-customers.md)
* [Find orders](find-sales-orders.md)
* [Order details](view-order-details.md)
* [Unfillable](unfillable-orders.md)
