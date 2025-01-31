---
description: >-
  Guide to overview closed cycle counts in the Cycle Count app, including
  performance metrics, detailed count summaries, and export options for
  comprehensive reporting.
---

# View Closed Counts

## Close Counts Details

The closed counts page gives a review of all counts that have been closed. This page is helpful for getting an overview of how cycle counts have been performing.

The top of the page has two metrics:

**Counts closed:** Number of counts that have been closed in the selected time range.

**Average variance:** The average variance presents an overall measure of how accurate inventory has been across all recently closed cycle counts.

The Closed count list shows the name and ID of the cycle count along with the facility from which it is completed and the date on which the cycle count is closed. Admins can also see the item count details such as how many items were available in the count and how many of them were counted. the rejected inventory counts and the total inventory variance are also visible for admins to easily identify the count with major inaccuracies.

## Export Cycle Count Details

To get a detailed view of recently closed counts, use the `export` function available at the right bottom and save counts offline in a CSV format that can be opened in all common spreadsheet tools.

Configurable export options: Commonly referenced values can be configured during export to help make reporting easier.

**Facility**

* Internal ID
* External ID

**Primary/Secondary Product ID**

* Internal ID
* Internal Name
* SKU
* UPC

**Line Status**

* Accepted
* Rejected

When importing the Count ID, facility and Internal ID are mandatory fields, while individual columns can also be selected to be included in the export, but all fields are selected by default. The following columns are available to export:

| **Field**           | **Description**                                             |
| ------------------- | ----------------------------------------------------------- |
| Count ID            | Unique identifier for the cycle count.                      |
| Count Name          | Descriptive name of the cycle count.                        |
| Accepted by User    | Name or ID of the user who accepted the count.              |
| Created Date        | Date when the cycle count was created.                      |
| Last Submitted Date | Date when the count was last submitted.                     |
| Closed Date         | Date when the count was closed.                             |
| Facility            | Name or ID of the facility where the count was performed.   |
| Primary Product ID  | Unique identifier for the primary product being counted.    |
| Line Status         | Current status of the line item (e.g., Accepted, Rejected). |
| Expected Quantity   | The expected quantity of the product in the inventory.      |
| Counted Quantity    | The actual counted quantity of the product.                 |
| Variance            | The difference between the expected and counted quantities. |

<figure><img src="../../.gitbook/assets/Screenshot 2024-08-13 at 12.14.54.png" alt=""><figcaption><p>View Closed Counts</p></figcaption></figure>
