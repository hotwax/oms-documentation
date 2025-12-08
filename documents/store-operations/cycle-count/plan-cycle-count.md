# Plan a cycle count

## Accessing your assigned counts

Store counts are accessed via the Counts tab. Each card represents a cycle count at your facility and shows:

* Count name and creation time: Helps identify the task.  
* Due date: When the head office expects the count to be completed.  
* Start date: Scheduled start time for counting.  
* Sessions list: Names of existing sessions (usually one session per associate).  
* Action buttons – vary according to status:  
  * Created counts show `Start counting` (to begin the first session) and `Preview count` (to view details without starting).  
  * In progress counts show `Review progress and complete` (to open the progress page) and `New session` (to add more counters).

## Required permissions

* Open the Counts tab and see cycle count cards: any of `FULFILL_INVCUNT_ADMIN` or `INV_COUNT_ADMIN`.  
* See item details in Preview before counting begins: any of `PREVIEW_COUNT_ITEM`, `INV_COUNT_ADMIN` or `COMMON_ADMIN`.  
* Start a count before its planned start time: any of `COMMON_ADMIN`, `INV_COUNT_ADMIN` or `INV_COUNT_PRE_START` (otherwise the `Start counting` button is disabled until the start time).

## Preview (before counting starts)

Selecting `Preview count` for a count in the `Created` state opens a `Track progress` page. At this point no items have been counted. The page includes:

* Count header card: Displays due date, start date and a status badge (`Created`). A Sessions section shows the default session.  
    
* **Products counted widget:** Shows how many products have been counted (usually 0) and how many are remaining. This number gives managers an idea of the workload.  
    
* Tabs for uncounted, undirected and counted: These categories display item lists once counting begins. Before the count starts, the `Uncounted` tab shows the total number of items to be counted. If your user has access, you can also preview the exact products that will be counted.

### Planning tips

* Estimate labor. Use the products remaining figure to determine how many associates you’ll need. If there are hundreds of SKUs, schedule more counters or spread the work across multiple days.  
    
* Check start and due dates. Ensure counting begins on or before the start date and will finish by the due date. Communicate this timeline to your team.  
    
* Create sessions wisely. When you’re ready to start, return to the counts list and click `Start counting` to create the first session. Add more sessions via `New session` once counting is in progress.
