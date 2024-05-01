---
description: Discover a glossary of Apache NiFi terms.
---

# Glossary

#### DataFlow Manager (DFM)

In NiFi, a DFM has the authority to manage the flow of data. This includes tasks like adding, removing, and modifying various components within the data flow.

#### Canvas

In NiFi, the canvas refers to the graphical interface where DataFlow Managers (DFMs) design and visualize their dataflows. It's the workspace where components are added, connected, and configured to create data processing pipelines.

#### Component

Components in NiFi are the building blocks used to construct dataflows on the canvas. These include Processors, Ports, Connections, Process Groups, Remote Process Groups, Funnels, and others. Each component serves a specific function within the data flow and can be configured to tailor its behavior according to the data processing requirements.

#### FlowFile

A FlowFile in NiFi represents a piece of data. It consists of two main parts: FlowFile Attributes, which provide context or metadata about the data, and FlowFile Content, which is the actual data being processed.

#### Attributes

In NiFi, attributes provide metadata or contextual information about the data being processed. Each FlowFile in NiFi carries a set of attributes along with its content. These attributes are key-value pairs that describe various characteristics of the data. Common attributes include UUID (a unique identifier for the FlowFile), filename (a human-readable name for the data file), and path (a hierarchical value indicating the storage location). Attributes play a crucial role in routing, transformation, and decision-making within the data flow.

#### Processor

Processors are components responsible for performing actions on FlowFiles, such as listening for incoming data, transforming it, or routing it to different destinations.

#### Relationship

Each Processor in NiFi has Relationships associated with it, indicating the possible outcomes of processing a FlowFile. These relationships determine where the FlowFile should be routed next.

#### Connection

Connections in NiFi link components together, allowing the flow of data between them. Each connection has one or more Relationships, and it includes a FlowFile Queue to manage the data being transferred.

#### Controller Service

Controller Services provide reusable configurations or resources for other components in NiFi. For example, the StandardSSLContextService can be used to configure SSL settings across multiple processors.

#### Reporting Task

Reporting Tasks in NiFi generate background reports on various aspects of the data flow, providing insights into system performance and activity.

#### Parameter Provider

Parameter Providers supply external parameters to Parameter Contexts in NiFi, allowing for dynamic configuration of components.

#### Funnel

A Funnel component in NiFi merges data from multiple Connections into a single stream, simplifying the data.

#### Process Group

Process Groups allow for the organization and abstraction of components within the data flow. They enable DFMs to manage complex dataflows more effectively.

#### Port

Ports in NiFi provide connectivity between Process Groups and other components in the data flow, facilitating data exchange.

#### Remote Process Group

Remote Process Groups enable the transfer of data between different instances of NiFi, useful for distributed data processing scenarios.

#### Bulletin

Bulletins provide real-time monitoring and feedback on the status of components within NiFi, helping DFMs identify issues or concerns.

#### Template

Templates in NiFi allow DFMs to save and reuse portions of the data flow, streamlining the development process and promoting code reuse.

#### flow.xml.gz

The flow.xml.gz file stores the configuration of the dataflow in NiFi. It is automatically updated as changes are made and can be used for rollback purposes if needed.
