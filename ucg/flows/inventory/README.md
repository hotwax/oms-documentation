# Invenotry

1. **HotWax as the Master of Store Inventory:**
   - Frank and Oak designates HotWax as the central authority for store inventory management.

2. **Direct Pull from WMS:**
   - Warehouse inventory is directly extracted from the Warehouse Management System (WMS).
   - Inventory updates are simultaneously uploaded to NetSuite and HotWax in parallel.

**Key Distinctions:**

- Unlike other clients, Frank and Oak does not employ the native HotWax connector for inventory management with NetSuite.
- HotWax assumes the role of the master inventory system of record for stores.

GoBolt provides a reset file at a scheduled period through out the day. HotWax will NOT consume this file since it could impact available inventory in unexcpected ways. GoBolt may not have all the latest sales orders in the OMS, so when it sends inventory levels at the warehouse, that inventory will not be reduced from the availble quantity. This is why HotWax will only accept inventory reset files during off hours when operations and orders are at a minimum to ensure that inventory is not impacted adversley as much as possible.

**NetSuite Inventory Feed**
For testing purposes UCG has modified the HotWax NetSuite SuiteScript to exclude the warehouse location in the inventory feed. They did this be duplicating the saved search and then add an exclution for the warehouse by facility ID. The new saved search was then added to the SuiteScript by them so that during testing when the OMS pulls inventory from NetSuite, it does not override the inventory received from GoBolt.

## Snowflake export

HotWax will export a snapshot of inventory at a given interval which will be consumed by SnowFlake, UCG's data processesing platform where they perform inventory reconciliation at high intervals to ensure data accuracy.

Here is what the export format will look like:

| SKU | Facility | QOH | ATP |