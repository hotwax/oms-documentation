# Request cycle count

## Merchants want to be able notify store staff for cycle counts as and when needed.

The request cycle count functionality will allow merchants to instantly update store staff to reconcile inventory. In case when CSRs need to find inventory for fulfillment, requesting cycle counts will facilitate prompt communication and action. Store staff can access the item-by-item list and feed the inventory quantities present in a facility via the cycle count app. Store managers and other stakeholders can use these counts to identify problematic variances.

Managing cycle counts requires a lot of manual communication, especially for merchants with a large inventory network. Operations managers, like store managers, often aren’t in a position to directly communicate cycle count requests to ground teams, instead rely on static forms of communication like email. If merchants need inventory reconciliation for multiple items, inconsistency in the information flow leads to delayed fulfillment due to lack of systemic inventory.

Staff managing cycle counts will receive real time push notifications when a cycle count is assigned to them. Entire list of items that must be counted or recounted will be visible in the cycle count app, keeping everyone in the operation up to date with upcoming tasks. The ability to track a dynamic list of items that need reconciliation leaves no room for ambiguity. Systematic workflow will also allow merchants to respond quickly to inventory discrepancies and take corrective measures if any inventory inaccuracy is identified.

Merchants will automatically receive the feature to reconcile inventory counts. They can request cycle counts from the product inventory page by selecting a facility where they want to re-count inventory. 

### Testimony

*Internal quote*: HotWax clients can now request inventory counts at the facilities as and when required.

*Customer quote*: We need to frequently request cycle counts for products at our stores. Cycle counting capability / inventory updates in your tool are super important to me as part of launch. How long would that take to develop?
As a store employee:
- I will receive a daily list on what to count
- I will logon to HotWax application and select Cycle Count with my individual ID (krewe email + password)

### FAQs 

**Question 1: Can everyone in the selected facility access the list of items for cycle counts?**

Answer: Yes, all the staff responsible for cycle counts can access the complete list of items that need to be reconciled from the cycle count app.

**Question 2: In case variances are reported, how can we review the inventory counts?**

Answer: Merchants can access the accounted inventory variances from the reconcile inventory page. They have an option to accept reported inventory variance or reject it and ask for a recount.


### Internal FAQs

**Question 1: When a cycle count is assigned to store staff, which API’s will be used to send push notifications?**

Answer: TBD

**Question 2: Where will HotWax Commerce save the cycle count requests?**

Answer: A communication event will be created for a group of people associated with the facility where cycle count is requested.

## Technical design
When performing cycle counts at stores, inventory planning teams analyze inventory level for products at facilities to ensure that they are allocating enough inventory of every product that a store should be stocking. A common part of this inventory planning procedure is to ensure accurate inventory levels at all facilities with a directed cycle count where the store teams are instructed to count exact SKUs.

When a cycle count is imported, it is stored in the Inventory Count Import and Inventory Count Import Item entities in a “Created” status that a facility has created the cycle count. In order to offer directed cycle counts, the OMS will move the responsibility of creating the cycle count to the planning team. 

This created cycle count will act as a task list when in the “Created” state. Once the planning phase of the cycle count is completed, the cycle count will be assigned a facility and moved to an “Approved” status. Once in an approved status, the stores will be able to see it on their inventory count dashboard as an open cycle count that they need to execute.

Once a store starts counting, they move the approved cycle count into an “In Progress” status. As they count each item the cycle count status remains in “In Progress” until the store updates it manually to the next status. Manual transition allows stores to continue a count in multiple sessions, and then only submit a count once it has been fully completed.

As each item is counted, the user id that counted each item is registered in the Inventory Count Import Item record allowing for audit and traceability of who conducted a count.

After submitting a count, the inventory count moves to the “Counted” status which presents it to reviewers to approve or reject each item counted on the cycle count. As each item is reviewed, they can reject items that they do not deem accurate and within acceptable tolerances and request a recount. Requesting a recount, rejects the initial count and adds the same product back into the Inventory Count in an “In Progress” status. If the reviewer chooses to have the facility reprocess the cycle count, they can move it back to the In Progress status. In Progress cycle counts with rejected count items will display with a badge on the find screen indicating that they include rejected items.

After all items have been addressed, either by accepting or rejecting item counts, the reviewer will move the Inventory Count Import record into the “Completed” status. If none of the items are accepted from the count, then the Inventory Count Import record can only be moved to the “Rejected” status.
