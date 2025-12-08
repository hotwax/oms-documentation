# Assigned

The Assigned Counts section allows you to monitor cycle counts that have been assigned to facilities and are currently pending completion. This view supports tracking progress, identifying delays, and managing workload across locations.

Assigned counts remain in this stage until the responsible facility submits the count for review.

Search, Sort, and Filter Assigned Counts

The Assigned view includes search and filtering options with available filters:

1. ### Status Filter

   Users can filter assigned counts based on their current status:

| Status | Description |
| :---- | :---- |
| All | Displays all assigned counts |
| Created | Assigned but not yet started by the store |
| In Progress | Store has started counting but has not yet submitted |

This helps quickly identify pending counts that require follow-up.

2. ### Type Filter

   Counts can be filtered based on their type:

| Type | Description |
| :---- | :---- |
| All Types | Displays all assigned counts |
| Hard Count | Full inventory count |
| Directed Count | Targeted or partial inventory count |

3. ### Facility Filter

   The Facility filter allows users to narrow results to one or multiple facilities.

   When applying the facility filter a modal opens, allowing:

   

* Searching facilities by name.  
* Selecting multiple locations

## Assigned Counts List View

Each count in the list provides the following information:

* Count name  
* Assigned facility  
* Type  
* Created date  
* Due date  
* Status (Created / In Progress)


This view provides a snapshot, allowing administrators to monitor the progress and deadlines across stores.

# Assigned Count Detail Page

The Assigned Count Detail Page provides a view of a specific cycle count assigned to a store or facility.

1. ### Overview Section

     
   At the top of the page, you’ll find a summary of the assigned count. This section is divided into two areas: Count Details (left) and Counting Activity (right).

   ### Count Details

   Clicking on a count displays the information provided during count creation:  
     
* Count Name – Name of the assigned count.  
* Assigned Facility – The store or location to which the count is assigned.  
* Start Date – The date and time when the count is scheduled to begin.  
  * You may update this by selecting the date field and choosing a new value from the date picker.  
* Due Date – The target completion date for the count.  
  * This can also be updated using the provided date picker.

    

  These fields help define the timeline and location of the count and can be adjusted if scheduling changes occur.

  1. Counting Activity

     This section shows system-generated timestamps reflecting real time user activity at the assigned facility:

* First Item Counted  
  Shows the date and time when the first product in the assigned count was submitted by the user.


* Last Item Counted  
   Shows the most recent date and time a user entered or updated a count.


  These timestamps reflect actual system activity recorded during product counting and help administrators assess:

  * Whether the store has begun counting.  
  * Whether the work is ongoing or paused.  
  * If additional follow-up with store teams is needed.  
    

2. ### Product Search

   A search bar is available directly below the overview section, allowing users to quickly find specific items within the assigned count.

* Enter any portion of a product name or code.  
* Results will instantly filter based on the entered text.  
* This feature is especially helpful when reviewing large product lists.


3. ### Sorting items

   A Sort By dropdown is available to help users organize the product list based on their needs. The following sorting options are supported:  
   

   1. ### Alphabetic

        
* Sorts product names A to Z.  
* This option is useful for users who want to browse items in a name-based sequence.


  2. ### Variance

       
* Sorts products based on the variance recorded between counted and systemic quantities.  
* Users can sort variance in ascending or descending order.  
* This helps users quickly identify items that require review or recounting.


4. ### Counted item details

   The Product List section displays all products included in the assigned count. This list provides a quick overview of each item’s count status and comparison against system quantities.

   For every product, the following information is shown:

* Product Image  
* Product Name  
* Counted Quantity (entered by the store user during the cycle count)  
* System Quantity (the quantity recorded in the system at the time of assignment)  
* Variance (calculated difference between the counted quantity and the system quantity)


This view allows reviewers to quickly identify how complete an item's count is.

5. ### Viewing Count Session Details

   To view the session detail for an item, click the item in the list, the system will open the Count Session Detail panel for that specific item.

   The session detail includes the following:

   

* Session Name


* User Name (who performed the count)


* Quantity Counted in that session


* Session Start Date and Time


* Last Updated Date and Time  
    
  This detail helps track who counted the item and when it was recorded, providing traceability during cycle count audits.

## Viewing Additional Product Information

Inside the Count Session Detail panel, select the More Options icon. This will display:

* Product information  
* The last time when the product was counted