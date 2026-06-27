# Order Funnel
---

## Overview

The Order Funnel is the home page of Order Manager App. It brings together order data from across all facilities into a single view, so operations teams and store managers can quickly see where orders are progressing, where fulfillment is delayed, and which areas need immediate action.

The page displays data scoped to the currently active product store, shown at the top of the page next to a globe icon. All figures on this page reflect orders associated with that product store.

---

## Section 1: Global Statistics Card

At the top of the page, a summary card displays **today's overall fulfillment performance** for the active product store. This card is refreshed each time the page is loaded or navigated to.

### Today's Order Count

A large number displayed prominently at the top of the card shows the **total number of orders received today**, along with a sub-label indicating how many hours have elapsed since the start of the business day.

### Brokering Status

A progress bar and percentage indicate what proportion of today's total ship groups have been **brokered** — that is, assigned to a fulfillment facility. A higher percentage means a greater share of today's orders have been routed to a store or warehouse.

Clicking this metric navigates to the **Open Orders** page.

### Picked and Packed

A second progress bar shows the combined percentage of brokered ship groups that have been **picked and packed** (or already shipped). This bar is segmented to separately represent ship groups that have been packed versus those that have been shipped, providing a granular view of how far along fulfillment has progressed.

Clicking this metric navigates to the **Packed Orders** page.

---

## Section 2: Exception and Problem Order Summary

Below the global statistics card, three clickable summary cards present the status of orders that require attention. These cards are sometimes referred to as the "drilldown section."

### Open Orders Card

Displays the **total count of approved orders** that are waiting for a fulfillment facility assignment — in other words, orders that have not yet been brokered. Below the count, a subtitle shows the **date and time of the oldest open order** currently in the system, which helps operations teams identify how long orders have been waiting.

Clicking this card navigates to the **Open Orders** page.

### Unfillable Today Card

Displays the **total number of unfillable ship groups** recorded today. An unfillable order is one where no fulfillment facility could be identified that has sufficient inventory to fulfill it.

A **sparkline chart** (a small inline trend line) is displayed alongside the count, showing how the number of unfillable orders has changed hour by hour throughout the current day. This allows teams to spot whether the unfillable queue is growing or shrinking over time.

Clicking this card navigates to the **Unfillable Orders** page.

### Order Hold Tasks Card

Displays the **total count of active hold tasks** across all orders. Hold tasks represent orders that have been paused and require manual intervention before they can continue through the fulfillment process.

Within this card, the count is broken down into three specific hold categories, each of which is a clickable item:

| Category | Description | Navigates To |
|---|---|---|
| **Substitute** | Orders where a product is unavailable and a substitute has been proposed | Swap Orders |
| **Bad Address** | Orders on hold because the shipping address is unverifiable or incomplete | Bad Address Orders |
| **Fraud Risk** | Orders flagged by the system as potentially fraudulent | Fraud Orders |

---

## Section 3: Facility Performance

Below the exception cards, the page presents a **facility-level drilldown** that enables users to compare and monitor individual stores and warehouses.

### Facility Search and Selection

A search bar allows users to filter the facility list by name. Below the search bar, a segment control lets users switch between three views of facility performance:

| View | What It Shows |
|---|---|
| **Order Volume** | The number of orders allocated to each facility today |
| **Fulfillment Velocity** | The percentage of allocated orders that have been successfully fulfilled, expressed as a ratio of shipped and packed ship groups to total allocations |
| **Partial Fulfillments** | The percentage of fulfilled orders that were only partially fulfilled — indicating that some items in the order shipped from a different location |

The **top 10 facilities** by the selected metric are displayed as a radio-button list, each with a label showing the numeric value and a progress bar scaled relative to the top-performing facility. Selecting a facility by clicking it loads the detailed fill-rate section below.

---

## Section 4: Facility Fill Rate Dashboard

When a facility is selected from the list above, a detailed dashboard for that specific facility appears at the bottom of the page. This section is titled **"Fill rate at [Facility Name]"**.

### Fill Rate Card

Displays three key metrics for the selected facility for today:

| Metric | Description |
|---|---|
| **Today's Fill Rate** | The percentage of processed orders (packed + shipped) that were successfully fulfilled, relative to total processed orders (packed + shipped + rejected) |
| **Orders Allocated** | The number of orders assigned to this facility today, displayed against the facility's configured capacity limit (shown as "Unlimited" if no limit is set) |
| **Orders Packed** | The number of orders that have been fully packed at this facility today |
| **Orders Rejected** | The number of orders that this facility rejected today — for example, due to a stock discrepancy |

A color-coded progress bar beneath the card visually represents the breakdown of allocated orders into packed (green), rejected (red), and still in progress (blue) proportions.

### Orders Pending Fulfillment Card

Displays the **total number of orders currently pending fulfillment** at the selected facility, split into:

- **Open** — Orders assigned to the facility that have not yet been picked (displayed with a link to the Open Orders page filtered for this facility)
- **In Progress** — Orders that are currently being picked and worked on (displayed with a link to the Inflight Orders page filtered for this facility)

A subtitle below the total count shows the **relative time since the oldest assigned order** arrived at this facility (e.g., "3 hours ago"), which helps identify whether older orders are being left unaddressed.

---

## Section 5: Fulfillment Sync Settings

When a facility is selected and that facility has an active fulfillment pick profile configured, an additional **Fulfillment Sync** panel appears alongside the orders pending card.

This panel is intended for operations managers and provides advanced configuration for how orders are synchronized to the facility's fulfillment queue.

### Pending Sync Count

A large number at the top of this panel shows how many orders are currently pending synchronization to the facility's pick queue.

### Sort Rules

This section shows the **order in which orders will be processed** by the fulfillment sync. Sort rules are derived from the facility's active pick profile. Users with appropriate access may:

- **Add a sort rule** — Click "ADD" and select from a list of available sort parameters (such as delivery days, shipment method, order date, or priority). Only parameters not already in use appear as options.
- **Reorder sort rules** — Drag and drop rules using the reorder handle to change the priority in which they are applied.
- **Remove a sort rule** — Click the red X button next to a rule to remove it from the profile.

Changes to sort rules are saved to the active pick profile immediately via the API.

### Rate Limiting

Two rate-limiting settings are configurable for the fulfillment sync job:

| Setting | Description |
|---|---|
| **Batch Size** | The maximum number of orders to be synchronized in a single run of the fulfillment sync job. Default is 200. |
| **Frequency** | The schedule on which the fulfillment sync job runs, expressed as a cron expression. The current schedule and its plain-language description are shown. |

Clicking the frequency button opens the **Schedule Modal**, which allows managers to:
- Enter or modify a cron expression directly
- View the human-readable description of the cron schedule
- See the next scheduled run time
- Toggle the job between **Active** and **Paused** states using a toggle switch
- Choose from pre-built schedule options (e.g., every 5 minutes, every 15 minutes, every hour)
- Save changes using the save button (floppy disk icon)

### Queue Breakdown Visualization

When sort rules are configured, a **visual queue breakdown bar** is displayed. This bar represents the current pending sync queue, segmented and color-coded by the top sort parameter (e.g., delivery speed or order date).

Each segment is annotated with:
- The number of orders in that segment
- The estimated time until that segment will be processed, calculated from the batch size and cron frequency

Hovering over any segment highlights it and dims the others, allowing for easy comparison. A **legend grid** below the bar lists each segment with its label, order count, and estimated processing time.

---
