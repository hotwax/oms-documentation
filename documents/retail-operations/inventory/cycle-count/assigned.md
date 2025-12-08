# Assigned counts

The assigned counts section allows you to monitor cycle counts that have been assigned to facilities and are currently pending completion. This view supports tracking progress, identifying delays, and managing workload across locations.

Assigned counts remain in this stage until the responsible facility submits the count for review.

## Required Permissions

To access the `Assigned` view and manage assigned counts, users must have the following permission:

* `COMMON_ADMIN`

Without this permission, users will not be able to view or interact with assigned cycle counts.

## Search, sort, and filter assigned counts

The `Assigned` view includes search and filtering options:

### Status filter

Filter assigned counts by their current status:

| Status | Description |
| :---- | :---- |
| `All` | Displays all assigned counts |
| `Created` | Assigned but not yet started by the store |
| `In progress` | Store has started counting but has not yet submitted |

This helps quickly identify pending counts that require follow-up.

### Type filter

Filter counts based on type:

| Type | Description |
| :---- | :---- |
| `All types` | Displays all assigned counts |
| `Hard count` | Full inventory count |
| `Directed count` | Targeted or partial inventory count |

### Facility filter

Narrow results to one or multiple facilities:

* Search facilities by name.  
* Select multiple locations.

## Assigned counts list view

Each count in the list provides the following information:

* Count name  
* Assigned facility  
* Type  
* Created date  
* Due date  
* Status (`Created` / `In progress`)


This view provides a snapshot, allowing administrators to monitor the progress and deadlines across stores.

## Assigned count detail page

The assigned count detail page provides a view of a specific cycle count assigned to a store or facility.

### Overview

At the top of the page, you will find a summary of the assigned count. This section is divided into two areas: count details (left) and counting activity (right).

#### Count details

Clicking on a count displays the information provided during count creation:  
* **Count name:** Name of the assigned count.  
* **Assigned facility:** The store or location to which the count is assigned.  
* **Start date:** The date and time when the count is scheduled to begin; update using the date picker.  
* **Due date:** The target completion date for the count; update using the date picker.

These fields define the timeline and location of the count and can be adjusted if scheduling changes occur.

#### Counting activity

This section shows system-generated timestamps reflecting real-time user activity at the assigned facility:

* **First item counted:** Date and time when the first product in the assigned count was submitted.  
* **Last item counted:** Most recent date and time a user entered or updated a count.

These timestamps reflect actual system activity during product counting and help administrators assess whether the store has begun counting, whether work is ongoing or paused, and if follow-up is needed.

### Product search

A search bar is available directly below the overview section to quickly find specific items within the assigned count.

* Enter any portion of a product name or code.  
* Results instantly filter based on the entered text.  
* This is helpful when reviewing large product lists.

### Sorting items

Use the `Sort by` dropdown to organize the product list:

* **Alphabetic:** Sorts product names A to Z.  
* **Variance:** Sorts products based on the variance recorded between counted and system quantities; sort ascending or descending to spot items needing review.

### Counted item details

The product list section displays all products included in the assigned count. For every product, the following information is shown:

* Product image  
* Product name  
* Counted quantity (entered by the store user during the cycle count)  
* System quantity (the quantity recorded in the system at the time of assignment)  
* Variance (calculated difference between the counted quantity and the system quantity)

This view allows reviewers to quickly identify how complete an item’s count is.

### Viewing count session details

To view the session details for an item, click the item in the list; the system opens the `Count session detail` panel for that specific item. The panel includes:

* Session name  
* User name (who performed the count)  
* Quantity counted in that session  
* Session start date and time  
* Last updated date and time  
  
This detail helps track who counted the item and when it was recorded, providing traceability during cycle count audits.

## Viewing additional product information

Inside the `Count session detail` panel, select the `More options` icon. This displays:

* Product information  
* The last time the product was counted
