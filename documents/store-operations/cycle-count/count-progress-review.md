# Preview and review progress/complete

The Preview page and Review Progress and Complete page in the HotWax Commerce Cycle Count app help store teams plan and monitor in‑store cycle counts. These pages are primarily designed for store managers. Associates focus on the counting screens and may never need to open these management views.

## Purpose and user roles

| Role | Purpose of the page |
| :---- | :---- |
| Store manager | Uses Preview to understand what a count entails, how many products are involved, when counting should begin and end, and who is assigned. During counting, the manager uses Review Progress and Complete to track each associate’s sessions, ensure all items have been counted and submit the count for head‑office review. |
| Store associate | Typically does not use these pages. Associates launch counting sessions from the main tasks list and focus on scanning and entering counts. |

**Inventory‑control mindset:** These management views are critical to maintaining accountability. They allow a manager to plan adequate staffing, monitor progress and ensure that all directed items have been counted before submission.

## Required permissions

* Open counts and reach the Preview/Review Progress page: any of `FULFILL_INVCUNT_ADMIN` or `INV_COUNT_ADMIN`.  
* View product details in the tabs when the count is still in `Created`/not yet started: any of `PREVIEW_COUNT_ITEM`, `INV_COUNT_ADMIN` or `COMMON_ADMIN`.  
* Discard undirected items, mark uncounted items out of stock, and submit the count for review: any of `COMMON_ADMIN`, `INV_COUNT_ADMIN` or `INV_COUNT_SUBMIT`.

## Accessing your assigned counts

Store counts are accessed via the Counts tab. Each card represents a cycle count at your facility and shows:

* Count name and creation time – helps identify the task.  
* Due date – when the head office expects the count to be completed.  
* Start date – scheduled start time for counting.  
* Sessions list – names of existing sessions (usually one session per associate).  
* Action buttons – vary according to status:  
  * Created counts show `Start counting` (to begin the first session) and `Preview count` (to view details without starting).  
  * In progress counts show `Review progress and complete` (to open the progress page) and `New session` (to add more counters).

## Review progress and complete (during counting)

When a count is moved to the `In progress` state (by tapping `Start counting`), the `Review progress and complete` button opens a more detailed progress page. This page provides a real‑time overview of the count:

* Count header card – similar to the preview card but now shows a status badge `In progress`. The Sessions list indicates each counting session and its state (`Created`, `In progress` or `Submitted`).  
    
* Products counted widget – updates dynamically to show how many products have been counted and how many remain. This helps managers gauge progress at a glance.  
    
* Submit requirements panel – a checklist indicating what must be done before the count can be submitted:  
    
  * **Permission granted:** Verifies the logged‑in user has rights to submit counts.  
  * **Count is in progress:** Confirms the count is not still in Created state.  
  * **All sessions submitted:** Each counter must finish their session and mark it as submitted (done from the session counting screen). This prevents partial data from being sent to head office.  
  * **All requested items counted:** Verifies there are no uncounted directed items. If there are still uncounted SKUs, the manager should follow up with the team.  
  * **`Submit for review` button:** Becomes enabled only when all checklist items are satisfied. Clicking this sends the completed count to head office for audit and final approval. Once submitted, the count appears in `Pending review` for regional managers.

### Managing sessions and submission

1. Monitor session status. Ensure each associate submits their session when finished. If a session is stuck in `In progress`, follow up with the associate to complete their counts.  
     
2. Review uncounted items. In the Uncounted tab, verify that there aren’t any remaining SKUs. If there are, re‑assign them by creating a new session or asking an associate to reopen their session.  
     
3. Handle items not in stock. Sometimes uncounted items remain because they simply are not in stock. Once all active sessions show a Submitted state, the Uncounted tab displays an option such as `Mark remaining items out of stock`. Clicking this button generates a new session and automatically assigns a quantity of 0 to every remaining item. For directed counts, this zero‑quantity session includes only the items that were assigned to be counted; for hard counts, it includes all SKUs with positive system inventory that were not counted. After this action, the previously uncounted list should be empty.  
     
4. Submit when complete. After all sessions (including the zero‑quantity out‑of‑stock session) are marked as submitted and the Uncounted tab is clear, click `Submit for review`. Once submitted, the count cannot be modified by the store and moves to the head office for approval.

### Uncounted tab

This tab lists all products that were assigned for the directed count but were not counted by the team.

* For each item, the current system on-hand quantity is displayed so the manager can decide how to handle the item.

* If items remain uncounted even after the associate has submitted the session, it usually means these products were not physically found in the store.


**Available action:** `Mark out of stock`

* The manager can click `Mark out of stock` to update all uncounted items in bulk.  
* This feature is provided so that if the counting is actually complete and these items were genuinely not found, the manager can cleanly mark them as out of stock.  
    
* This ensures accurate inventory and prevents incorrect stock from carrying forward.


* Uncounted/Undirected/Counted tabs – allow the manager to inspect items that haven’t been counted, items counted outside of their directed location (undirected), and items already counted. Each tab displays product images, names, SKUs and variance fields so managers can quickly spot issues.


### Undirected tab

This tab shows items that were not part of the directed count list, but were scanned by the team during the count.

* For each item, both the counted quantity and the system quantity are shown.  
    
* Variance is displayed to help the manager understand the difference.


**Available action:**

* `Discard all undirected items`: If these items should not be included in the count submission, the manager can skip all of them at once.  
    
* `Discard`: The manager can selectively skip specific undirected items by clicking the `Skip` button next to each one.


### Counted tab

This tab displays all the items that were part of the directed count and were successfully counted.

* It shows the counted units, the system units, and the variance for each item.  
    
* This helps the manager quickly review discrepancies before final submission.


## Store associate workflow (simplified)

Store associates generally skip the preview and progress pages. Their workflow is:

1. Navigate to the assigned counts list and tap `Start counting` next to the assigned count.  
     
2. The system automatically opens the counting session where they scan barcodes and enter quantities.  
     
3. When finished, they mark the session as `Submit` within the counting screen. This updates the session status so the store manager can see it in Review Progress and Complete.  
   
   
Associates should focus on accurate counting and timely submission. All other management functions – creating sessions, monitoring progress, ensuring compliance and submitting counts to head office – are handled by the store manager.

Read more details about performing a count on [this page](start-complete-session.md).

## Inventory control tips

* Plan resources based on product volume. Before starting a count, use the preview to estimate how much labor is needed. Build your counting schedule to minimize disruption to customers (e.g. after hours or during slow periods).  
    
* Track progress daily. During counting, check the progress page regularly. If the products remaining number isn’t decreasing as expected, investigate whether associates need help or additional training.  
    
* Ensure session discipline. Require associates to submit their sessions promptly. Sessions left open for days can lead to stale data and variances.  
    
* Verify all items counted. Do not submit a count until the uncounted and undirected tabs are zero. Head office may reject incomplete counts, delaying inventory reconciliation.  
    
* Keep notes for exceptions. If some items cannot be counted (damaged or missing), document reasons and communicate them to head office. Proper documentation supports accurate adjustments.


By using the Preview and Review Progress/Complete pages effectively, store managers can plan cycle counts, allocate staff, monitor progress in real time and ensure the count is complete and compliant before submitting it for final review.
