# Inventory count reports
Effective inventory management is integral to ensuring operational efficiency and accuracy in supply chain processes. The following reports play a crucial role in providing insights into inventory status and discrepancies:

## Pending Cycle Count report

The Pending Cycle Count report presents products awaiting counting at a facility where a recent cycle count has occurred. Inactive products, characterized by a zero inventory that has remained unchanged for the last month, are excluded to ensure that only active products are included in the report. This selective approach aims to provide an accurate representation of products requiring attention for inventory verification and reconciliation.

| Field          | Description                                    |
|----------------|------------------------------------------------|
| FACILITY_ID    | The unique identifier for the facility in external system      |
| FACILITY_NAME  | The name of the facility in external system       |
| PRODUCT_ID     | The ID of the product in HotWax Commerce            |
| PRODUCT_SKU    | Unique identifier        |


## Variance By Facility report

The Variance By Facility report serves to monitor facilities reporting higher manual negative variances. The results are organized by facilities with the highest variances, further detailed by the reasons reported for each variance. This breakdown facilitates a granular understanding of discrepancies, aiding in pinpointing specific areas that require attention and corrective measures. The sorted presentation allows for an efficient prioritization of efforts to address and resolve variances across different facilities.