---
description: >-
  Learn how to configure and verify crucial properties like Database Connection
  Pooling (DBCP) and Secure File Transfer Protocol (SFTP) for efficient data
  handling in Napita.
---

# Verify Processor Properties

Processors are components designed to execute tasks on data within a system's dataflows. They handle tasks like data ingestion, transformation, routing, and interaction. Properties within processors are settings dictating how a processor operates and handles data. These settings allow users to customize processor behavior, including parameters like database connections (DBCP), SFTP details, etc.&#x20;

Users configure these properties through Napita during processor setup. Verifying processor properties during creation ensures that entered values are acceptable. While additional properties may need configuration based on specific requirements, database connection (DBCP) and SFTP properties are mandatory for processor execution. If a property's value is invalid, the processor cannot be executed or utilized until the value is verified.&#x20;

## Database Connection Pooling (DBCP)

Database Connection Pooling (DBCP) within Napita is crucial for efficient management and reuse of database connections. By implementing DBCP, users can enhance workflow efficiency, particularly when using processors like `ExecuteSQLRecord` and `QueryDatabaseTableRecord`.

This feature reduces the overhead of creating new database connections for each operation, optimizing resource utilization and improving performance. DBCP streamlines database operations by managing and sharing connections among different processors, reducing the time and resources needed for connection establishment.

Verifying the DBCP service at the parent level ensures consistency and validity of connection properties across different processors, minimizing errors or inconsistencies in the database configuration.

### Step-by-Step Usage Instructions:

1. Access Processor Configuration: Right-click on the desired processor (e.g., `ExecuteSQLRecord` or `QueryDatabaseTableRecord`) and select `Configure` to open the `Configure Processor` window.
2. Select Database Pooling Service: Within the configuration window, specify the Database Pooling Service in settings related to database connections.
3. Choose Service from Dropdown: Select the appropriate Database Connection Pooling service from the dropdown menu to manage and reuse database connections efficiently.
4. Verify Properties: After selecting the Database Pooling Service, verify associated properties, by clicking the `Verify Properties` button to ensure the correctness of specified values, identifying potential issues or inconsistencies in the database configuration.

## Secure File Transfer Protocol

The SFTP (Secure File Transfer Protocol) service in Napita facilitates secure file transfer between the platform and remote servers. By using SFTP, users can exchange files securely with external systems, ensuring data integrity and confidentiality. SFTP enables seamless and secure file transfer operations within the HotWax Commerce. Whether retrieving files from remote servers or uploading files securely, SFTP provides a reliable method for data exchange with external systems. This is relevant for integrating HotWax Commerce with other systems or performing data exchange operations with external partners. Verifying SFTP properties confirms that connection details are correctly configured, preventing data corruption or loss during file transfers.

### Step-by-Step Usage Instructions:

1. Access Processor Configuration: Right-click on the processor associated with SFTP operations (e.g., GetSFTP or PutSFTP) and select `Configure` to open the `Configure Processor` window.
2. Enter SFTP Properties: Locate the fields for SFTP properties in the configuration window, including Hostname, Port, Username, Password, and Remote Path. Input relevant values for each property based on file transfer requirements.
3. Verify Properties: Once necessary SFTP credentials are entered, verify properties by clicking on the `Verify Properties` button to ensure correct and valid configuration.
