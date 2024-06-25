# HotWax Commerce System Architecture

## Introduction

This document provides an overview of the high-level architecture for the HotWax Commerce application deployed on Amazon Web Services (AWS), emphasizing scalability, fault tolerance, performance, and security considerations.

<img width="1028" alt="Screenshot 2024-06-24 at 2 33 40 PM" src="https://github.com/AjinkyaM1/Ajinkya-OMS-Documentation/assets/158986859/44c1f480-e3a4-42f7-abe3-c1a5de3374da">



## System Components

The architecture comprises essential components and they are as follows:

- **Route 53**: When a user visits the app URL, it gets checked by the DNS (Domain Name System) management system called Route 53.
- **Elastic Load Balancer (ELB)**: The user request will then go through the load balancer that maintains all the incoming and outgoing traffic.
- **EC2 Instances**: Virtual servers hosting the application:
  - **Async Servers**: Manage background tasks scheduled by the application.
  - **Sync Servers**: Handle user requests forwarded by the ELB.
- **ElastiCache**: In-memory cache optimizes performance by storing frequently accessed data, reducing load on the database.
- **RDS DB Instance**: Managed relational database service ensuring high availability, scalability, and data security in Availability Zone 1.
- **Replica Database**: One more Amazon RDS DB Instance is present in Availability Zone 2 that will act as a standby database for disaster recovery solutions.
- **Data Warehouse**: Stores historical data from the replica database for comprehensive analysis.
- **VPC (Virtual Private Cloud)**: Provides a secure and isolated network environment for all AWS resources.

## Data Flow

The flow of data within the HotWax Commerce application involves several steps and components working together to ensure efficient processing and handling of user requests. Here’s a detailed breakdown:

### Client Interaction

Users interact with the HotWax web application through their web browser by entering a URL. For example, they might type in `www.hotwaxcommerce.com` to access the site.

### DNS Resolution

The URL entered by the user is translated into an IP address by AWS's Route 53, a Domain Name System (DNS) service. This translation is necessary because web browsers need IP addresses to locate and communicate with web servers.

### Load Balancing

Once the IP address is determined, the user's request is directed to the Elastic Load Balancer (ELB). The ELB is responsible for distributing incoming traffic evenly across multiple EC2 instances (virtual servers). This distribution ensures that no single server is overwhelmed with too many requests, thereby enhancing reliability and scalability.

### Processing Requests

The EC2 instances are categorized into two types:

- **Sync Servers**: A synchronous server handles requests and responses sequentially. Each request is processed one at a time, and the server waits for the current request to be completed before starting the next one.
- **Async Servers**: An asynchronous server can handle multiple requests concurrently without waiting for each one to complete. It helps in managing the scheduled background tasks.

When a user request arrives, a Sync Server processes it and, if necessary, communicates with the Async Servers for background tasks.

### Data Retrieval

The Sync Servers first check the cache memory used in OFBiz to retrieve the necessary data. By storing frequently accessed data in memory, this cache mechanism significantly reduces the time needed to fetch data, enhancing the application's performance.

If the required data is not found in ElastiCache, the servers query the primary Amazon RDS (Relational Database Service) instance. This managed database service stores the main dataset and supports high availability and security.

### Data Replication

To ensure data redundancy and enable disaster recovery, the primary RDS instance continuously replicates data to a secondary replica database located in a different Availability Zone (AZ 2). This replication occurs in near real-time, ensuring that the replica database is almost always synchronized with the primary database.

### Data Warehousing

For comprehensive analysis and reporting, data from the replica database is copied to a data warehouse at the end of each day. The data warehouse is designed to store large volumes of historical data, enabling efficient data retrieval and analysis for reporting purposes. This helps in generating detailed reports and charts based on historical trends.

## Conclusion

This high-level architecture provides a robust foundation for deploying a scalable, fault-tolerant, performant, and secure web application on AWS. Leveraging AWS services simplifies deployment, management, and maintenance tasks, enabling efficient resource utilization and enhancing overall system reliability.

