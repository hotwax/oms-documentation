---
description: >-
  Manage all pending, running, and completed jobs from the Pipeline page. With
  intuitive controls and detailed job information, you can effectively monitor
  and manage job execution.
---

# Job queueing

Pipeline page

Provides a holistic view of all jobs, including their status, scheduled time, and execution details.

**Characteristics**

**Chronological sequence for prioritized execution**

Jobs are displayed in chronological sequence, ensuring that jobs with the closest expiration time are prioritized for execution.

**Timeline Visualization for Clear Execution Scheduling**

A highlighted time frame clearly depicts the job's runtime and scheduled frequency, providing a visual representation of the job's execution timeline.

**On-the-fly Editing for Dynamic Job Management**

Users can seamlessly skip, cancel, edit, or reschedule any pending jobs before they start running. This flexibility allows users to adapt to changing requirements and optimize job execution based on real-time needs.

**Customized Job Configurations for Tailored Execution**

Scheduled job parameters can be modified directly from the Job Pipeline page, enabling users to tailor job execution to specific needs. This flexibility allows for optimization of job performance and resource utilization.

**Detailed Job History for Analysis and Troubleshooting**

Comprehensive historical job data is readily accessible for analysis and troubleshooting purposes. Users can identify patterns, optimize job performance, and resolve recurring issues by examining historical job execution details.

<figure><img src="../../.gitbook/assets/Frame 1.png" alt=""><figcaption></figcaption></figure>

### Segmentation

The Job Manager App shows all jobs (scheduled, running, or completed) on the Pipeline page, organized into three tabs: Pending, Running, and History.

#### Actions retailers can perform on a job card:

- **Change run time and frequency**: Use the dropdowns to update when and how often the job runs.
- **Edit custom parameters**: View, copy, and modify job-specific parameters with the `more` option on the job card.
- **Skip the job**: Temporarily skip the current run. The job will resume based on its schedule.
- **Disable the job**: Cancel the current and future runs. The job can only be manually re-enabled to run again.
- **View history**: Check the execution history and status (e.g., finished or failed).
- **Run Now**: Run the job immediately by creating a duplicate instance. This action is irreversible.
- **Copy job details**: Copy key job info like job ID, name, description, and runtime data.
- **Pin job**: Pin frequently used jobs for quick access at the bottom of the page.



#### 1. Pending Tab

This tab lists jobs in the **pending status**, meaning they are queued and waiting to begin execution. Retailers can take multiple actions from the job card, as listed above.

**Details visible in the Pending tab:**

- **Time**: Indicates when the job is scheduled to run, based on the timezone selected in the app.  
- **Frequency**: Indicates how often the job runs (e.g., every 15 minutes).  
- **Recurrence**: Displays the number of counts the job is retried once failed.
- **Job Enum ID**: An internal identifier used by HotWax to define the type or purpose of the job.  


#### 2. Running Tab

This tab lists jobs in the **running status** i.e jobs those are currently in execution. It allows retailers to monitor the active job.

**Details visible in the Running tab:**  
- **Start Time**: Indicates when the job started running.
- **Service Name**: Indicates which OMS service is executing the job.
- **Running Duration**: Indicates how long the job has been running.



#### 3. History Tab

This tab lists all jobs that have been **completed**, whether finished or failed. Retailers can add custom parameters, view job history, copy details, or pin the job card.

**Details visible in the History tab:**

- **Created By**: Shows the user who initially created the job.
- **Updated By**: Shows the user who last updated job parameters like schedule or frequency.
- **Time Zone**: Displays the time zone in which the job was executed.
- **Copy Job Info**: Retailers can copy fields like Job ID, Job Name, and runtime data for further use.


{% tabs %}
{% tab title="Pending" %}
Displays all the jobs queued for execution.

<figure><img src="../../.gitbook/assets/Pending 1.png" alt="" width="563"><figcaption></figcaption></figure>

<figure><img src="/documents/retail-operations/.gitbook/assets/Screenshot 2023-11-07 at 4.09.42 PM.png" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Running" %}
Displays all the jobs running in the system.

<figure><img src="../../.gitbook/assets/running jobs.png" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="History" %}
Displays all the historical jobs. Historical jobs can be filtered by their status.

<figure><img src="../../.gitbook/assets/history 1.png" alt="" width="563"><figcaption></figcaption></figure>
{% endtab %}
{% endtabs %}

### **Search**

Easily locate specific jobs by name or category.

{% embed url="https://youtu.be/HbBndcYS36Q" %}

### Filters

Quickly find jobs by applying filters based on category and status.

<figure><img src="../../.gitbook/assets/Frame 2.png" alt=""><figcaption></figcaption></figure>

### History
#### View Import Logs

The Data Manager log provides history of files imported into the OMS, including the file import status, processing timestamps, and any error records. These logs support tracking, analysis, and troubleshooting of file imports.

When accessing the Data Manager Log from the **Job Manager App**, users can directly view the following details:

- Number of successfully processed files.
- Number of failed files.
- Files with error records.

#### Detailed Log View
Clicking `View Details` redirects retailers to a detailed logs page where they can:

- Access individual logs with specifics like start and finished date and time, user information, and unique log IDs.
- Download the original file and failed records for further analysis.
- Filter logs to display only those that failed execution or contain error records.
- View file execution mode such as `Async` or `Queued` 


### Pin job

Keep frequently accessed jobs readily available for quick access. Pinned jobs will be visible in the footer.

{% embed url="https://youtu.be/YSSfLXV9qP0" %}

### **Recurrence**

Displays the number of counts the job is retried once failed.

<figure><img src="../../.gitbook/assets/recurrence.png" alt="" width="375"><figcaption></figcaption></figure>
