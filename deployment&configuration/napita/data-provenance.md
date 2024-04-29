---
description: >-
  Discover how Napita's Data Provenance feature enables users to monitor,
  troubleshoot, and optimize dataflows by tracking the journey of data objects
  in real-time.
---

# Data Provenance

### View Data Provenance

Napita's Data Provenance feature is a critical tool for users involved in monitoring and troubleshooting dataflows. It provides detailed information about the journey of data objects (FlowFiles) as they move through the system, enabling users to track, analyze, and understand data transformations, routing decisions, and processing events in real-time. By offering insights into data lineage, event details, and attribute modifications, Data Provenance empowers users to ensure dataflow compliance, optimize performance, and swiftly identify and resolve issues.

#### Step-by-Step Usage Instructions:

1. **Access Data Provenance Page:**
   * Right-click on the desired dataflow within Napita.
   * Select the `View Data Provenance` option from the menu.
2. **Explore Data Provenance Information:**
   * In the Data Provenance dialog window, review the most recent Data Provenance information available.
   * Utilize search and filter options to locate specific items or events within the dataflow.
3. **View Event Details:**
   * Click the `View Details` icon (i) for each event to open a dialog window with three tabs: Details, Attributes, and Content.
   * Review event details on the Details tab, including event type, timestamp, component, and associated FlowFile UUIDs.
4. **Analyze Attributes:**
   * Navigate to the Attributes tab to view the attributes present on the FlowFile at the time of the event.
   * Optionally, select the `Only show modified` checkbox to display only the attributes that were modified as a result of the processing event.

### Replay FlowFiles

Replaying FlowFiles in Napita empowers users to inspect, troubleshoot, and validate data processing within their workflows. Whether it's verifying the correctness of data transformations or testing configuration changes, the ability to replay FlowFiles provides users with a powerful tool for ensuring the reliability and efficiency of their dataflow.

**Step-by-Step Usage Instructions:**

**Access FlowFile Details:**

1. Right-click on the desired processor within Napita
2. Select the `View Details` option from the context menu.

**Navigate to Content Tab:**

1. In the View Details dialog window, navigate to the `Content` tab.

**Replay FlowFile:**

1. Review information about the FlowFile's content, such as its location and size.
2. Click the `Submit` button to replay the FlowFile at its current point in the flow.
3. Optionally, click the `Download` button to download a copy of the FlowFile's content.

**Replay Last Event from Processor:**

1. Right-click on the desired Processor within Napita
2. Select the `Replay last event` option from the context menu.
3. Choose whether to replay the last event from just the Primary Node or from all nodes.
