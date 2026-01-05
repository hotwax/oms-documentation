# Receiving App Update Guide

The table below compares the legacy HotWax receiving application (receiving.hotwax.io) with the new interface (receiving‑uat.hotwax.io). It is intended for associates and administrators familiar with the old app and highlights the most significant user‑facing changes.

| Area | Legacy App (current) | New App (updated) | Impact |
| :---- | :---- | :---- | :---- |
| Quantity input | Each item card shows a Qty box pre‑filled with 0\. Users can close items without changing the 0 value, which has led to accidental zero‑receipts. | Quantity fields are blank by default. Users must actively type a number, scan a barcode or select Receive All. Blank fields are treated as missing quantities: you can still click Receive and complete, but the app filters to the blank lines and asks you to enter a value. If all fields are blank, an alert prompts you to specify at least one quantity. | Reduces accidental closures and forces associates to consciously enter a quantity. Enter 0 if nothing was received. |
| Partial receiving | A Receive button at the bottom saves quantities without closing the order. Clicking it opens a modal labelled Receive inventory explaining that inventory will be received and the order will remain open. | A Save progress button replaces Receive. When clicked, a modal titled Save progress and receive more later appears, explaining that inventory will be updated but the order stays open. Items received in full (quantity equals expected) automatically move to the Received and Completed tab after saving. | Updated terminology clarifies that this action saves your work rather than receiving the entire order and auto‑closes fully received items. |
| Order closure | A Receive and close button closes items. Selecting it opens a modal where you must tick checkboxes for each item you want to close. Blank quantities can be selected, resulting in zero receipts. | A Receive and complete button replaces Receive and close. The button is always enabled; if some items have blank quantities, clicking it filters the view to those items and shows a red message instructing you to enter the quantity or 0. Once all quantities are filled, the confirmation modal lists each item and any discrepancies; there are no checkboxes. | Prevents accidental zero receipts and guides the user to complete outstanding lines before closing. |
| Item filters | Items are grouped into Pending and Completed sections. There is no filter to isolate unreceived items. | A tab bar lets you switch between All, Open and Received and Completed lists. The Open tab filters out items with completed quantities, helping focus on outstanding work. | Easier navigation through large transfer orders. |
| Banner and guidance | The detail page does not display a banner; users must infer when all items are received. | A banner at the top indicates how many items remain open and includes an info icon labelled Tap to learn more. Tapping this opens a “What’s next” modal reminding users to enter quantities for every item and explaining how to complete the order. | Provides proactive guidance and reduces confusion about remaining steps. |
| Progress summary | Only the two buttons (Receive and Receive and close) appear at the bottom of the page. There is no numeric summary of how many units have been entered. | The bottom bar shows a progress summary such as Save progress: 15 / 33 units, updating in real time as quantities are entered. | Gives immediate feedback on total units received and encourages saving progress. |
| Scanning and search | The scanning options would scroll out of view on longer TOs making it hard to scan larger transfers making it hard to scan and monitor at the same time. | The header has been reworked: a slim Scan items input field now persists at the top of the page even as you scroll through a long list of transfer items. | You can both scan and monitor progress at the same time without scrolling between them. |
| Terminology | Uses Receive/Receive and close for actions. | Uses Save progress/Receive and complete. | Clarifies intent and aligns with the notion of saving vs. completing. |
| Discrepancy handling | Over‑ or under‑receipts are not surfaced until after closing, which can lead to mistakes not being caught. | When you try to save progress or complete an order with quantities greater or less than the ordered amount, the app displays a modal listing the affected items and showing how much was over‑received or under‑received. You must confirm these discrepancies before proceeding. | Encourages verification of unusual quantities and prevents accidental over‑receipts. |
| Returns & Purchase Orders | The returns and purchase order screens share the same interface as transfer orders, with lists of open and completed orders and minimal guidance. | These sections have not been updated; they continue to display the old interface. | The redesign currently applies only to transfer orders. |

## Summary

The redesigned receiving application focuses on preventing accidental zero‑receipts, guiding associates through the workflow and providing clearer feedback. By requiring explicit quantity input, offering a dedicated Open filter, showing a real‑time progress summary and renaming actions to Save progress and Receive and complete, the new app reduces errors and makes it easier to manage large transfer orders.  
---

   Receiving \- HotWax Commerce  
[https://receiving.hotwax.io/transfer-order-detail/M105208](https://receiving.hotwax.io/transfer-order-detail/M105208)  
     Receiving \- HotWax Commerce  
[https://receiving-uat.hotwax.io/transfer-order-detail/M107092](https://receiving-uat.hotwax.io/transfer-order-detail/M107092)  
  Receiving \- HotWax Commerce  
[https://receiving-uat.hotwax.io/transfer-order-detail/M106507](https://receiving-uat.hotwax.io/transfer-order-detail/M106507)  
  Receiving \- HotWax Commerce  
[https://receiving-uat.hotwax.io/transfer-orders](https://receiving-uat.hotwax.io/transfer-orders)  
 Receiving \- HotWax Commerce  
[https://receiving-uat.hotwax.io/returns](https://receiving-uat.hotwax.io/returns)