# Find Customers
---

## Overview

The Find Customers page provides a searchable directory of all customer records syncing from your Shopify store. It enables customer service representatives (CSRs) or store managers to quickly locate a specific customer by name, party ID, email address, or phone number, and navigate to their detailed profile for comprehensive data management.

---

## Understanding the Customer List

Each row in the results list represents a single customer (party) record and displays:

| Field | Description |
|---|---|
| **Full name** | The customer's full name. Falls back to the party ID if no name is on record. |
| **Party ID** | The internal HotWax Commerce identifier for this customer, displayed on the second line. |
| **Email or phone** | If available, the customer's email address is displayed alongside their party ID. If no email is available, the phone number is shown instead. |
| **Party type** | Displayed as a note on the right side of the row, indicating the type of party record (e.g. Person, Organization). |

The results summary at the top of the list shows the count of loaded results versus the total matching records (e.g. "8 of 150 customers").

---

## Search and Filtering

A search and filter panel is available at the top of the page. The main search bar accepts free-text queries that are matched against:
- Full name
- Party ID
- Email address
- Phone number

Results refresh automatically as you type without requiring a manual submit action.

The following additional filter is available:

| Filter | Options | Behaviour |
|---|---|---|
| **Type** | All types / individual party types | Filters results to only customers of the selected party type (e.g. Person only, or Company only). Changing this filter triggers an immediate search. |

Clicking any row navigates to the **Customer Detail** page for that customer at the route `/customers/:partyId`.

---

## Infinite Scroll

Results are loaded in pages of **50 customers** at a time. When there are more results than the current loaded set, additional records are appended automatically as you scroll to the bottom of the list.
