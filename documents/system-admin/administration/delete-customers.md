---
description: >-
  Permanently anonymize customer information from the Order Manager while
  preserving the associated operational records.
---

# Anonymize customer data

Data privacy regulations such as the GDPR give individuals the right to request erasure of their personal information. HotWax Commerce supports these requests by anonymizing the customer record from the Order Manager.

Anonymization does not delete the customer or order records. It permanently replaces or removes the customer's personally identifiable information while retaining the records required for order history and accounting.

## What anonymization changes

The action:

* Replaces the customer name with `DELETED`.
* Anonymizes email addresses, phone numbers, and postal addresses linked to the customer and their orders.
* Disables the customer record.
* Refreshes the customer search index so the disabled customer no longer appears in `Find customers`.

{% hint style="warning" %}
Anonymization cannot be undone. Before proceeding, confirm that no active order still requires the customer's contact or delivery information.
{% endhint %}

## Anonymize a customer in the Order Manager

1. Open the `Order Manager`.
2. Select `Find customers` from the main menu.
3. Search for the customer by name, HotWax party ID, email address, or phone number.
4. Select the customer to open the `Customer Detail` page.
5. Select the trash icon in the upper-right corner.
6. In the `Anonymize customer data` confirmation dialog, review the warning and select `Anonymize`.
7. Wait for the `Customer data has been anonymized.` confirmation. The Order Manager returns to `Find customers`.

## Verify anonymization

1. Search `Find customers` using the customer's original name, email address, or phone number. The customer should no longer appear.
2. Search `Find orders` using the customer's original email address.
   * If no orders are returned, anonymization is complete.
   * If orders still appear, their search documents contain stale customer information and must be reindexed.

### Reindex stale order search results

Order search results use a separate index from customer search. If a search by the original email address still returns orders after anonymization:

1. Open `Webtools` and select `Service Engine`.
2. Search for and open the `createOrderIndex` service.
3. Select `Schedule Job`.
4. Run the service for each affected order ID.
5. Search `Find orders` using the original email address again. No affected orders should be returned.

If the customer remains visible in `Find customers`, or if Order Manager displays `Failed to anonymize customer data. Please try again.`, retry the action. Contact a HotWax Commerce system administrator if it continues to fail.
