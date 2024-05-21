The core issue in the ORSI (ERP) integration with HotWax (which replaced OCP as the Order Management System) was the occurrence of deadlocks due to concurrent write and update operations on the same entities within the OCP database, which was implemented in MSSQL.

**Background**

* OCP had been integrated with ORSI using Mule, a middleware tool, and four jobs to transfer data.
* To simplify the transition from OCP to HotWax and avoid major changes to the existing Mule jobs, the decision was made to create an OCP database (OCP DB) in MSSQL with the same schema as the original OCP system (likely Oracle-based).
* ETL (Extract, Transform, Load) processes were developed to populate the OCP DB with data from HotWax. These ETLs created asynchronous services for each order record, which in turn performed create and update operations on OCP entities.

**Problem**

* The asynchronous nature of the ETL services led to concurrent write and update operations on the same OCP entities, causing deadlocks.
* Deadlocks occurred when two or more transactions were waiting for each other to release resources, resulting in a standstill. In this case, multiple services might have been trying to modify the same entity simultaneously, leading to a deadlock.
* The initial attempt to resolve this using EntityQuery API was unsuccessful because it did not support the "NOLOCK" parameter, which would have allowed dirty reads and potentially avoided deadlocks.

**Current Workaround**

* To mitigate the deadlocks, the team temporarily resorted to using SQL queries with the "NOLOCK" parameter. This allowed queries to read uncommitted data, potentially avoiding the deadlock situation.
* However, this is not a permanent solution, as it introduced the risk of reading inconsistent or inaccurate data.

**Key Points**

* The root cause of the problem was the concurrent modification of the same OCP entities due to the asynchronous nature of the ETL services.
* The temporary workaround of using "NOLOCK" queries carried the risk of data inconsistency.
* A more robust and long-term solution needed to be implemented to address the deadlocks while ensuring data integrity.