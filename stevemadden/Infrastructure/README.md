# Infrastructure

| AWS Tool/Instance          | Specification                               | Purpose                     |
|  -------------------------- | -------------------------------------------- | ------------------------- |
| **Production Environment** |                                               |                            |
| AWS EC2 for OFBiz          | C5.2xlarge (8 CPU, 16GB RAM)                 | OFBiz                      |
| AWS EC2 for OFBiz Async     | C5.2xlarge (8 CPU, 16GB RAM)                 | Async OFBiz                |
| AWS EC2 for SOLR           | C5.2xlarge (8 CPU, 16GB RAM)                 | SOLR                       |
| AWS EFS                     | 60 GB                                        | SOLR Data                 |
| AWS Load Balancer          |                                               | Load Balancing             |
| AWS Auto Scaling           |                                               | Scalability                |
| RDS                        | Two with read replica (Multi AZ) db.m5.xlarge | MySQL DB                   |
| Additional HDD             | 260 GB                                      | OFBiz and Solr              |
| Monitoring Tool            |                                               | Monitoring Architecture     |
| VPC and Bandwidth          |                                               | Security Features         |
| Hosting Support Provider   |                                               | Staging/UAT Setup           |
| **Staging/UAT Environment** |                                               |                            |
| AWS EC2                     | C5.2xlarge (8 CPU, 16GB RAM)                 | OFBiz, DB, SOLR            |
| AWS HDD                    | 120 GB                                      |                           |

**Key Points:**

*   The production environment has dedicated EC2 instances for different components (OFBiz, Async OFBiz, SOLR), ensuring optimal performance and scalability.
*   EFS storage is used for SOLR data, providing flexibility and high availability.
*   Load balancing and auto-scaling are implemented for efficient traffic management and resource optimization.
*   The MySQL database is configured with a multi-AZ setup and read replicas, ensuring high availability and disaster recovery.
*   A separate monitoring tool is used to track the health and performance of the entire architecture.
*   VPC and bandwidth settings are in place to provide secure network isolation and data transfer.