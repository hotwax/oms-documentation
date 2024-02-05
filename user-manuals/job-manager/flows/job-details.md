---
description: >-
  Manage pre-configured job automation from Job Details page to streamline
  operations within the Order Management System.
---

# Job details

## Introduction

Every automation task is organized within a dedicated Job Details page, providing a clear overview of job information and actions. This centralized approach ensures quick access to job configurations and facilitates job management.

<figure><img src="../../jobManager/.gitbook/assets/Screenshot%202023-11-06%20at%207.16.27%20PM.png" alt=""><figcaption><p>Image: Job details page</p></figcaption></figure>

***

## Job information

#### **Name**

Clearly identifies the job for easy recognition.

#### **Summary**

Provides a concise explanation of the job's purpose.

#### **History**

Access a comprehensive job history, including the date, runtime, and status of past runs. The history will display the last 10 records.

***

## Job actions

#### **Skip**

Temporarily postpone a job's execution for the upcoming runtime without affecting future scheduled runs.

#### Cancel

Permanently stop a job from running further.

#### **Run now**

Trigger a job to run immediately and resume its scheduled execution pattern afterward.

#### **Edit Run time**

Set the job's execution time, helping users manage when their scheduled automation.

#### **Edit Frequency**

Set how often the job runs.

#### Add Custom parameters

Make changes to the job's parameters, settings, or execution details as necessary, allowing users to set up workflows specific to their scenarios. Custom parameters have to be configured before a scheduled job and cannot be changed while a job is pending execution.

***

## How to schedule a job?

{% hint style="info" %}
**Things to remember:**

* Custom parameters can be incorporated into jobs, with access controlled by specific permissions, ensuring a customized and secure configuration.
{% endhint %}

1. Navigate to the required job category and find the job you want to schedule.
2. Click on the job to view Job Details.
3. Set the run time.
4. Set the frequency.
5. Add custom parameters if required.
6. Save the changes to see the schedule job on the Pipeline page.

{% embed url="https://youtu.be/uLtQGUqfa88" %}
Video: Schedule a job
{% endembed %}

***

## Debugging

#### **Copy details**

Quickly share the important job related information such as job's ID, name, description, and runtime for debugging.

***
