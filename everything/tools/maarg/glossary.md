---
description: Discover a glossary of Maarg terms.
---

# Glossary

## Foundational framework terms

### Entities

Entities represent the relational data models within the Moqui framework. Every piece of persistent data, such as a product, order, facility, service job, or system message, maps directly to an entity definition.

### Services

Services are logic components within the Moqui framework. They handle business rules and can be configured to create, update, send, receive, and process records such as system messages. The system can also expose services as remote callable actions for external integrations.

### Artifact

An artifact refers to any developer-created component that acts as an executable or resource unit in Moqui, such as a screen, service, entity, or transition. The system attaches security permissions and performance statistics to artifacts.

### Artifact groups

Artifact groups are collections of related artifacts. They help manage authorization by allowing access to screens, services, and entities to be configured externally, instead of adding permissions inside each component. This lets system administrators easily grant or deny access to multiple artifacts at once.

### User groups

A security construct that bundles multiple user accounts together. System administrators assign permissions to user groups to grant or deny access to specific screens, services, and artifact groups.

### Resource finder

A file and resource browser built into Moqui. Authorized users use it to inspect runtime files, logs, feeds, configurations, and component resources.

### SQL Runner

An advanced developer tool that allows authorized users to execute raw Structured Query Language (SQL) queries directly against a datasource and view the result sets in the user interface.

## Data modeling and movement

### Data documents

Data documents are JSON document definitions built from entities. The system uses data documents for search capabilities, data feeds, and integrations, as one document can join data from multiple tables.

### Data export

Data export functions allow users to extract and download records directly from the application database entities into formats like comma-separated values (CSV) for analysis or backup.

### Data import

Data import is used to load comma-separated values (CSV), JSON, or XML files into entities. Users configure mappings, and the tool creates or updates the corresponding records.

## Background jobs

### Service jobs

Scheduled or background tasks that call a service at fixed times or intervals. Examples include generating inventory feeds or syncing data with Shopify.

### Job runs

A record representing a specific execution instance of a service job. It tracks whether the execution succeeded, failed, or threw a system error.

### Service job run ID

A unique identifier for a specific job run. Developers use this ID to inspect logs or stop a specific run.

### Expire lock minutes

A configurable setting (`EXPIRE_LOCK_TIME`) in the service jobs that dictates the maximum duration an active service job lock will remain active. If a service job terminates and fails to release its lock, this setting prevents the job from running for a long time by automatically expiring the lock after the specified minutes.

### Release job

An administrative action that clears a job's lock or stops a running job so it can be scheduled again. This is primarily used when a job gets stuck or is running longer than expected.

### Running job overview

A section on the system dashboard that lists currently running service job runs and their start times. It also allows administrators to stop or release stuck jobs.

## System message framework

### Message remote

A configuration entity (`SystemMessageRemote`) used to define parameters for remote connections with external systems. It allows the framework to facilitate communication via web service protocols like XML-RPC, JSON-RPC, and RESTful interfaces for sending and receiving data remotely.

### System message types

Configuration entities (`SystemMessageType`) used to configure the services responsible for producing, sending, receiving, and processing specific categories of messages.

### System messages

System messages are records that manage message queuing and processing for both incoming and outgoing messages. They support error handling, automatic retries through configurable service jobs, and a full history for auditing and debugging.

### System message statuses

A field on the system message that indicates its current processing state. These statuses govern actions like `Send All`, `Consume All`, or `Reset Error`:

* **Produced:** The system generated the message payload, and it rests in a queue waiting for dispatch.  
* **Sending:** The application actively transmits the message payload to an external endpoint.  
* **Sent:** The application successfully dispatched the message payload to the external endpoint.  
* **Confirmed:** The receiving external system successfully acknowledged the receipt of the message.  
* **Received:** The system acquired an incoming payload from an external source but has not yet started internal processing.  
* **Consuming:** The application currently processes the data within an incoming message payload.  
* **Consumed:** The internal service successfully finished processing the incoming message.  
* **Error:** The message failed to process or transfer correctly, requiring manual review or an automatic retry.  
* **Rejected:** The internal logic or the external system refused the message payload due to validation rules or incorrect data.  
* **Cancelled:** A user or process manually aborted the message before the system could send or consume it.
