---
description: Find the correct customer record and continue to the customer detail workspace.
---

# Find customers

Use `Find customers` to locate a customer record before reviewing contact information, orders, tasks, returns, or other customer activity.

This search is not restricted by the `Product Store` selected in the Order Manager menu. It searches active customer records available to Order Manager.

## Choose a search value

Use the most specific value available:

1. Search by party ID when you know it.
2. Otherwise, search by a complete email address or phone number.
3. Search by customer name when an identifier or contact value is not available.

The list updates automatically after you type. Clear the search box to return to the broader customer list.

You can search using:

* Customer name
* Party ID
* Email address
* Phone number

The page does not provide additional filters.

## Choose the correct customer

Each row shows:

* Party ID
* Full name, or the party ID when no name is available
* Email address, or `No email`
* Phone number, or `No phone`

When more than one customer has the same or a similar name, compare the party ID, email, and phone before opening a row. Treat the party ID as the final record identifier.

`No email` or `No phone` means that value is missing from the search result. It does not mean the search failed.

Select the correct row to open [Customer details](view-customer-details.md).

{% hint style="info" %}
`Find customers` searches customer records in Order Manager. The customer search inside `Create order` is different because it searches customers for the selected Shopify shop.
{% endhint %}

## Load more customers

The list starts with up to 50 customers. The header shows the number of loaded customers and the total number of matches.

Scroll to load the next group when the loaded count is lower than the total. Continue until you find the record or all matching customers are loaded.

## Resolve search problems

* A progress bar means the customer search is loading.
* `Customer search failed` means the search request did not complete. Retry the same value or reopen the page.
* `No matching customers` means the search completed but no active customer matched the search value. Check the spelling, enter the complete phone number, or try another known identifier.
* If the total is higher than the loaded count but scrolling does not add rows, retry the search. The page does not show a separate error when an additional group fails to load.

Deactivated customers are excluded from this page. A missing customer can therefore mean that the record is deactivated, not yet available in search, or does not match the value entered.
