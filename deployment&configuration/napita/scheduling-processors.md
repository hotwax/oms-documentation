---
description: >-
  Discover how to effectively manage Napita's Processors' operations using
  the Scheduling tab, influencing data flow within the platform.
---

# Schedule Processors

The Scheduling tab within the Processor Configuration dialog in Napita offers crucial settings for managing how a Processor operates, impacting the flow of data within the platform. Let's break down its significance and provide step-by-step instructions on how users can utilize this feature effectively.

### Step-by-Step Usage Instructions:

**Accessing the Scheduling Tab:**

1. Right-click on the Processor within Napita.
2. Select the `Configure` option from the context menu. Alternatively, double-click on the Processor.
3. Navigate to the `Scheduling` tab within the Configuration dialog.

**Selecting Scheduling Strategy:**

* Choose a scheduling strategy based on processing needs:
  * _Time Driven_: Timer Driven scheduling, operates by scheduling the Processor to execute at regular intervals. This straightforward approach is suitable for tasks requiring periodic processing, such as batch data updates or routine maintenance activities. Users can configure the timing of execution using the Run Schedule option, defining the frequency at which the Processor operates based on predefined intervals.
  * _Event Driven_: For scenarios demanding real-time responsiveness and dynamic processing, the Event Driven scheduling mode presents an experimental yet intriguing option. In this mode, the Processor is triggered to run by specific events, typically initiated when FlowFiles enter connections linked to the Processor. While offering potential benefits in terms of real-time data handling, users should exercise caution with this mode, as its experimental nature means it may not be supported by all Processors and could introduce unpredictability into production environments.
  * _CRON Driven_: The CRON Driven scheduling mode provides the utmost flexibility, enabling users to define precise scheduling patterns using CRON expressions. This approach is particularly well-suited for complex scheduling requirements where specific timing and periodicity are essential. With CRON expressions, users can specify intricate schedules, encompassing various time intervals and patterns for Processor execution. However, it's important to note that the CRON Driven mode introduces increased configuration complexity compared to the other scheduling strategies, requiring users to understand the intricacies of CRON syntax. You can check cron expressions [here](https://www.freeformatter.com/cron-expression-generator-quartz.html).

**Configuring Concurrent Tasks:**

* Determine the number of threads the Processor will use simultaneously with the `Concurrent Tasks` option.
* Increasing this value can enhance data processing speed but may impact system resources.

**Defining Run Schedule:**

* Specify how often the Processor should run:
  * For Timer-driven strategy: define a time duration (e.g., 1 second, 5 minutes).
  * For CRON-driven strategy: refer to CRON expression format for scheduling details.

**Managing Execution:**

* Choose between `All Nodes` or `Primary Node` for Processor execution.
  * `All Nodes` schedules the Processor on every node in the cluster, while `Primary Node` limits it to the primary node only.

**Adjusting Run Duration:**

* Slide the `Run Duration` slider to balance between lower latency and higher throughput.
* Prioritize lower latency for quicker processing or higher throughput for more efficient resource utilization.

**Applying Changes:**

* After configuring settings, click `Apply` to implement changes or `Cancel` to discard them.
