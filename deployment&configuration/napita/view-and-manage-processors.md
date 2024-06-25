---
description: >-
  Learn how managing processors in Napita streamlines dataflows. Organize
  them in groups for efficient monitoring and modification.
---

# View and Manage Processors

The ability to view and manage processors within the Napita platform is crucial for users engaged in managing complex dataflows and ensuring the smooth processing of data between various systems. Processors, as components in Napita, play a vital role in tasks like data ingestion, transformation, and routing. They act as workers, handling incoming data and performing actions based on defined configurations.

Organizing processors within process groups and parent process groups offers users a structured approach to managing their data workflows. This feature enhances efficiency by allowing users to easily locate, monitor, and modify processors as needed within Napita. By providing a clear overview of the processors involved in specific functions, users can quickly identify areas for optimization or troubleshooting.

Understanding the hierarchy of processors within process groups and parent process groups is essential for users to grasp the overall dataflow architecture within NiFi. It helps them comprehend how data moves through different stages of processing and where specific actions are performed. This visibility is invaluable for maintaining data integrity and ensuring the reliability of the overall system.

## Locate processors

1. **Access Napita Interface:** Begin by accessing the Napita interface, where processors are managed. This is typically done through a web browser by entering the URL of your Napita instance.
2. **Locate Parent Processor Group:** Within Napita, navigate to the parent processor group associated with the instance you're managing. These groups are often named according to their function or the systems they interact with. For example, you may find a parent processor group named `demo-oms` for managing data flows related to the demo-oms instance.
3. **Navigate Through Hierarchy:** Double-click on the parent processor group to explore its contents. Inside, you'll find process groups organized based on specific functions or tasks, such as data ingestion, transformation, or routing.
4. **Identify Relevant Process Group:** Locate the process group that corresponds to the specific function or task you want to manage. For instance, if you're interested in monitoring flow for approved orders, look for the process group labeled `Approved Orders Flow.`
5. **View Processors:** Double-click on the identified process group to view all the processors contained within it. Processors are represented as individual components responsible for performing various tasks on data as it flows through the NiFi system.

## Manage Processors

The feature to manage Process Groups within Napita is integral for users orchestrating complex data workflows. By offering a multitude of options through the context menu, users gain control over the configuration, monitoring, and optimization of their data pipelines.

### Step-by-Step Usage Instructions:

1. **Access Process Group Options:**
   * Right-click on the desired Process Group within Napita to open the context menu.
2. **Configure:**
   * Choose this option to establish or modify the configuration of the Process Group, enabling customization according to specific business requirements.
3. **Variables:**
   * Select this option to create or configure variables within Napita, providing flexibility in managing dynamic data processing scenarios.
4. **Enter Group:**
   * Use this option to enter the Process Group and access its contents for configuration or monitoring purposes.
5. **Start/Stop:**
   * Start or stop the Process Group based on operational requirements, ensuring efficient resource utilization and workflow execution.
6. **Run Once**
   * Execute a selected Processor exactly once, based on configured execution settings. However, this only works with Timer-driven and CRON-driven scheduling strategies.
7. **Enable/Disable:**
   * Enable or disable all processors within the Process Group to control data processing activities and optimize system performance.
8. **View Status History:**
   * Open a graphical representation of the Process Group's statistical information over time, aiding in performance monitoring and troubleshooting.
9. **View Connections:**
   * Navigate to upstream or downstream connections to visualize and analyze data flow within the Process Group, facilitating troubleshooting and optimization efforts.
10. **Center in View:**
    * Center the view of the canvas on the selected Process Group for improved visibility and navigation within the interface.
11. **Group:**
    * Create a new Process Group containing the selected Process Group and any other components selected on the canvas, facilitating organizational management of data workflows.
12. **Download Flow Definition:**
    * Download the flow definition of the Process Group as a JSON file, enabling backup, restoration, and version control of configurations.
13. **Create Template:**
    * Generate a template from the selected Process Group, allowing for reuse and standardization of data processing workflows.
14. **Copy:**
    * Copy the selected Process Group to the clipboard for duplication or relocation within the canvas, providing flexibility in designing data workflows.
15. **Empty All Queues:**
    * Remove all FlowFiles from all queues within the selected Process Group, facilitating maintenance and resource optimization.
16. **Delete:**
    * Permanently delete the selected Process Group, enabling users to clean up outdated or unnecessary components from the system.
