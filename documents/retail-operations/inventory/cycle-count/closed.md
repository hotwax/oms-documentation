# Closed and completed cycle counts

## Closed cycle counts page

The `Closed` page in the Cycle Count app lets you review every cycle count that has been completed. On this page you can search for counts, apply filters to narrow results, export filtered data, and drill into the details of each closed count.

## Required permissions

* View closed counts, open details, and export: `COMMON_ADMIN`.

## Navigating to the closed counts page

1. Open the Cycle Count app. Use the navigation drawer on the left side of the screen.  
     
2. Select `Closed` from the menu. The Closed Counts view displays all cycle counts that have been completed.  
     
3. The main pane shows a list of closed counts along with filters at the top. Each row corresponds to a completed cycle count and shows the count name, ID, facility, created date and closed date.

## Understanding the closed counts list

The list view is designed to help you quickly find and filter completed counts:

* Search bar: Use the search box to find a cycle count by name or ID. When you enter text and press `Enter`, the list updates to show matching counts. You can clear the search using the `×` button in the field.  
    
* Facility filter: The Facility drop‑down shows `All` by default. Clicking the bubble opens a modal with a searchable list of facilities. You can select one or more facilities and confirm with the blue check button; the selected facility appears as a pill next to `Facility` and the list refreshes to show counts from that facility.  
    
* Type filter: The Type drop‑down lets you filter counts by type. Options include `All types`, `Hard count` and `Directed count`. Selecting a type updates the list; for example, choosing `Hard count` shows only hard counts.  
    
* More filters: Click `More filters` to open a modal with date‑range filters. You can specify `Created before/after` and `Closed before/after` dates using the calendar pickers, then click `Apply` to filter the list.  
    
* List columns: Each closed count row displays:  
    
* **Count name and ID:** e.g., CycleCountSample‑Nov4 (ID M1000204).  
    
* **Facility:** shown as a pill with the facility name.  
    
* **Created date:** date the count was created.  
    
* **Closed date:** date the count was completed.  
    
* **Type label:** for hard counts or directed counts, a small label (e.g., `HARD COUNT`) appears above the name.

## Filtering and searching closed counts

1. Search by name or ID: Click in the search bar, type the count name or part of the ID and press Enter. The list will narrow to items containing the search term.  
     
2. Filter by facility: Click the `All` bubble in the Facility filter. Use the search field in the facility modal to find a store, select its checkbox and click the blue check icon to apply the filter. The facility name appears as a pill.  
     
3. Filter by type: Click the current type (e.g., `All types`). Choose `Hard count` or `Directed count`. The list refreshes to show only counts of that type.  
     
4. Apply date filters: Choose `More filters`. In the modal, specify any combination of creation or closing dates and click `Apply`.  
     
5. Clear filters: To remove a facility or type filter, click the small `×` on the pill. Clear date filters by reopening `More filters` and clearing the date fields.

## Exporting filtered cycle counts

You can export the closed counts you are viewing (according to the current filters):

1. Apply any filters you want so that only the desired counts are visible.  
     
2. Click the blue export button in the bottom right corner of the page. The button displays an arrow pointing down. A message appears saying “Requesting export…”.  
     
3. The application prepares an export file containing the filtered cycle counts. Depending on your configuration, the file downloads automatically or is delivered through your configured export service. You can continue using the app while the export is processed.

## Viewing the details of a closed cycle count

Click any row in the closed counts list to open the Closed count details view. This page lets you examine item‑level variance and compliance.

### Header

At the top of the details page you’ll see several cards summarizing the count:

* Count card: Shows the cycle count name, ID and facility. It also displays the due date if one was set.  
    
* Time card: Shows the timestamp when the first item was counted and when the last item was counted.  
    
* Progress and completion card: Displays a progress bar with “x out of y items complete.” This indicates how many items have been reviewed and accepted.  
    
* Overall variance (filtered): Shows the total variance units based on the items currently displayed.


Use the back arrow in the page header to return to the closed counts list.

### Item list and filters

Below the header, you’ll find filters to help locate specific products within the count:

* Search product name: Enter all or part of a product’s name or SKU to filter the list.  
    
* Status filter: Choose from `All`, `Accepted` or `Rejected` to show products based on whether their counts were accepted or rejected during review.  
    
* Compliance filter: Options include `All`, `Acceptable`, `Rejectable` and `Configure threshold`. `Acceptable` shows items whose variances are within the compliance threshold; `Rejectable` shows items outside the threshold.  
    
* **Sort by:** Use this drop-down to sort products `Alphabetically` or by `Variance`.

### Reviewing item‑level details

* The item list shows each product counted during the cycle count along with an image, SKU, counted quantity vs system quantity, and calculated variance.  
    
* Clicking a product row expands it to reveal count sessions. Each session row displays the counter’s name (user), counted quantity, the time the counting started and when it was last updated. These details help you trace who counted the item and when.  
    
* If there are discrepancies (variance ≠ 0), you can use the Status and Compliance filters to isolate non‑compliant items for review and acceptance or rejection.

## Tips for using Closed Counts

* Combine filters for targeted exports. For example, set the Type to Hard Count and choose a facility before exporting; the exported file will include only hard counts from that store.  
    
* Use the More Filters date ranges to retrieve counts completed within a specific window.  
    
* Within the details view, sorting by Variance quickly surfaces products with the highest discrepancies, allowing you to prioritize review.  
    
* The Overall variance card updates dynamically based on applied item‑level filters, providing an at‑a‑glance summary of variance for the items you’re examining.

By leveraging search, filters and exports, the Closed Counts page makes it straightforward to locate completed counts, review item‑level variances and compliance, and extract data for auditing or reporting.
