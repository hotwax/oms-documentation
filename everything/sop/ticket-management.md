# HotWax Commerce Ticketing and Release Management

## Ticket statuses in ClickUp

We have defined workflows with various stages to track the progress of the tickets or tasks in ClickUp.

Here's a breakdown of each status:

- **OPEN**: The tickets are initially created in the open stage.
- **DISCUSSION PENDING**: Move the ticket to this stage if there might be some discussion pending.
- **IN PROGRESS**: Move the ticket to this stage when work on the task has started, and progress is being made.
- **HOLD**: Move the ticket to this stage if work is temporarily paused or delayed due to external factors or dependencies.
- **CODE REVIEW**: Move the ticket to this stage when the written code is ready for review by team members to ensure quality and adherence to coding standards.
- **CODE REVIEW FAILED**: If the code review process identifies issues, move the ticket here until the concerns are addressed.
- **QA (Quality Assurance)**: Move the ticket to this stage when the task is ready for testing to ensure it meets the specified requirements and functions correctly.
- **QA FAILED**: If issues or defects are found during testing, move the ticket to this stage for further work.
- **UAT (User Acceptance Testing)**: Move the ticket to this stage when the task is ready for UAT to verify the release.
- **SANITY**: Move the ticket to this stage for a quick check on production, ensuring major functionalities work as expected, primarily validating the ticket on the instance where it originated.
- **CLOSED**: Move the ticket to this stage once all processes, such as code review, QA, and UAT, have been passed, and the task is considered complete.

This workflow provides a clear path for the progression of tasks from initial creation to completion, allowing for effective tracking and communication throughout the development process.

---

## Hotwax Space

The centralized workspace for managing projects, documentation, and client interactions, is primarily structured around Product Management.

### Product Management:
Primarily focused on sprint management, this space includes all essential components related to product development, maintenance, and improvements:

- **Ionic Apps**: 
  All tasks related to developing and maintaining mobile applications' UI built using the Ionic framework, including feature requests and sprint tasks.
- **Documentation**: 
  This section manages tickets related to documenting new features or improvements. All the tickets are created in backlog and assigned to the sprint based on priority.
- **OMS**: 
  Focuses on the core functionalities of the OMS, including:
  - **Reports**: Handling of Business Intelligence reporting requirements and improvement in BI Reports.
  - **Monitoring**: All tickets related to solving grafana errors are placed in this section.
- **Nifi**: Covers all tasks related to Apache NiFi, handling data pipelines, and system workflows.
- **Sprint Management**: The central hub for managing all sprints across product management. This space tracks sprint cycles, backlog items, and ensures task allocation and completion within the sprint deadlines.

### HC Project

A dedicated space for tracking the work done for each client. Each client has their own folder with detailed tasks, and clients also have access to this space, allowing them to view the progress of tickets related to their specific projects.

**Backlog**
All non-urgent tasks are created in the backlog list. These tickets are revisited and prioritized for upcoming sprints.

---

## Sprint Management and Execution

In an agile project management approach, a sprint refers to a set period during which a specific set of tasks or goals is completed. We manage sprints in the product management space.

### Sprint Duration:
The team will work in sprints, and each sprint will last two weeks.

### Ticket Creation:
A Business Analyst (BA) or Product Associate (PA) creates tickets that include detailed requirements. After discussing these requirements, the ticket will be added to the sprint based on priority.

- When creating the ticket, the BA ensures to include a comprehensive description:
  - For **issues**: detailing the current behavior, specifying the identified issue, and articulating the expected behavior.
  - For **new requirements**: outlining the requirements and clearly defining the expected behavior.

### Ticket/Backlog Management:
If the BA creates a ticket directly in the project's Codev, they will also ensure it's added to the OMS backlog and will be assigned to the Sprint Manager. This helps maintain a consolidated list of work items. This will give visibility and control over which tickets to select for the sprint.

- **Urgent Tickets**: Any urgent tickets that need immediate attention will be discussed and handled within the current sprint on priority.

### Ticket Verification:
The QA is responsible for ensuring that tickets in the User Acceptance Testing (UAT) phase are working correctly in the production environment before closing them.

### Sprint Closure:
A sprint will only be considered closed when Quality Assurance (QA) is completed for all the tickets within that sprint.

### Collaborative Ticket Handling:
If the Business Analyst (BA)/Product Associate (PA) is actively working on a ticket in parallel with the developer, they will assign that ticket to themselves. This ensures transparency about who is currently involved in the work. Once the BA completes their work on the ticket, they will remove themselves from the assignment. This step signifies that the BA's engagement with that particular ticket is finished.

### BA Work:
If the Business Analyst (BA)/Product Associate (PA) is actively working on any task, they will ensure to create the ticket, add it to the current sprint, and assign it to themselves. No task is small.

{% hint style="info" %}
After development is complete, the feature or fix should be verified on the feature branch. Only after passing QA should it be merged into the develop or release branch. It should not be merged into the develop or release branch before QA approval.
{ % endhint %}
