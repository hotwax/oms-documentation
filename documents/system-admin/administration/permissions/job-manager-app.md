# Job Manager App

HotWax Commerce’s Job Manager App enables users to view, schedule, and update job workflows running within the Order Management System for operations related to orders, products, inventory, and more. Users can easily view all jobs to see which jobs are scheduled and when they will run. While no specific permissions are required for viewing jobs, advanced permissions are necessary to schedule or manage job workflows.

Below is a list of all the actions available in the Job Manager App, along with the specific permissions needed to perform them.

## Pipeline Page

| Action                         | Permission   | Description                                                                                     |
|------------------------------------|------------------|-----------------------------------------------------------------------------------------------------|
| View Page                      | NA               | Allows users to view the Pipeline page, including the list of jobs |
| View Pending Tab               | NA               | View all the jobs that are scheduled to run.                                                         |
| View In Progress Jobs          | NA               | View jobs that are currently in progress.                                                           |
| View Completed Jobs            | NA               | View jobs that have already been completed.                                                         |
| Update Job Configurations      | COMMON_ADMIN     | Allows updating job configurations including Skip Once, Disable, Save Changes, and Run Now.         |


## Initial Load Page

| Action                         | Permission   | Description                                                                                     |
|------------------------------------|------------------|-----------------------------------------------------------------------------------------------------|
| View Page                      | NA               | Allows users to view the Initial Load page, including the list of jobs and access to the initial load menu for managing related workflows. |
| Import Products in Bulk        | COMMON_ADMIN     | Import products in bulk from Shopify into HotWax Commerce.                                          |
| Import Orders in Bulk          | COMMON_ADMIN     | Import orders in bulk from Shopify into HotWax Commerce.                                            |
| Process Bulk Imports           | COMMON_ADMIN     | Process bulk imported files from Shopify into HotWax Commerce.                                      |


## Pre-orders Page

| Action                         | Permission   | Description                                                                                     |
|------------------------------------|------------------|-----------------------------------------------------------------------------------------------------|
| View Page                      | NA               | Allows users to view the Pre-orders page, including the list of jobs and access to the pre-order menu for managing related workflows. |
| Enable/Disable Jobs            | COMMON_ADMIN     | Enable or disable pre-order jobs by checkbox.                                                       |
| View Presell Catalog           | COMMON_ADMIN     | View items that are on pre-order and backorder catalog in HotWax Commerce.                          |

## Orders Page

| Action                         | Permission   | Description                                                                                     |
|------------------------------------|------------------|-----------------------------------------------------------------------------------------------------|
| View Page                      | NA               | View the Orders page, including scheduled and available jobs, and view history.                                                |
| Update Jobs                    | COMMON_ADMIN     | Change job schedule, runtime, and parameters.                                                       |
| Update Job Configurations      | COMMON_ADMIN     | Skip once, Disable, Save Changes, and Run Now options for job configurations.                       |
| Order Webhooks                 | COMMON_ADMIN     | Subscribe to Shopify webhooks related to orders.                                                    |

## Brokering Page

| Action                         | Permission   | Description                                                                                     |
|------------------------------------|------------------|-----------------------------------------------------------------------------------------------------|
| View Page                      | NA               | Allows users to view the Brokering page, including the list of scheduled jobs. |
| Create Brokering Run           | COMMON_ADMIN     | Create a new run for brokering orders.                                                              |
| Update Schedule Runs           | COMMON_ADMIN     | Update the runtime and frequency of brokering runs.                                                 |

## Fulfillment Page

| Action                         | Permission   | Description                                                                                     |
|------------------------------------|------------------|-----------------------------------------------------------------------------------------------------|
| View Page                      | NA               | View the Fulfillment page, including scheduled and available jobs, and view history.                |
| Update Jobs                    | COMMON_ADMIN     | Change job schedule, runtime, and parameters.                                                       |
| Update Job Configurations      | COMMON_ADMIN     | Skip once, Disable, Save Changes, and Run Now options for job configurations.                       |
| Auto Cancellation Configurations | COMMON_ADMIN   | Manage auto-cancellation settings including days input, save button, and daily toggle options.      |

## Inventory Page

| Action                         | Permission   | Description                                                                                     |
|------------------------------------|------------------|-----------------------------------------------------------------------------------------------------|
| View Page                      | NA               | Allows users to view the Inventory page, where they can see the scheduled and available inventory jobs and view the job history. |
| Update Jobs                    | COMMON_ADMIN     | Enables users to change the schedule, runtime, and parameters for inventory-related jobs.            |
| Update Job Configurations      | COMMON_ADMIN     | Allows updating job configurations such as skipping a job once, disabling a job, saving changes, and running the job immediately. |
| Inventory Webhooks             | COMMON_ADMIN     | Manages Shopify webhooks related to inventory level updates, ensuring real-time synchronization between systems. |

## Product Page

| Action                         | Permission   | Description                                                                                     |
|------------------------------------|------------------|-----------------------------------------------------------------------------------------------------|
| View Page                      | NA               | Allows users to view the Product page, where they can see the scheduled and available product-related jobs and view the job history. |
| Update Jobs                    | COMMON_ADMIN     | Enables users to change the schedule, runtime, and parameters for product-related jobs.              |
| Update Job Configurations      | COMMON_ADMIN     | Allows updating job configurations such as skipping a job once, disabling a job, saving changes, and running the job immediately. |
| Product Webhooks               | COMMON_ADMIN     | Manages Shopify webhooks related to importing and deleting products, ensuring accurate product data management. |

## Reports Page

| Action                         | Permission   | Description                                                                                     |
|------------------------------------|------------------|-----------------------------------------------------------------------------------------------------|
| View Page                      | NA               | Allows users to view the Reports page, where they can see the scheduled and available report-related jobs and view the job history. |
| Update Jobs                    | COMMON_ADMIN     | Enables users to change the schedule, runtime, and parameters for report-related jobs.               |
| Update Job Configurations      | COMMON_ADMIN     | Allows updating job configurations such as skipping a job once, disabling a job, saving changes, and running the job immediately. |

## Miscellaneous Page

| Action                         | Permission   | Description                                                                                     |
|------------------------------------|------------------|-----------------------------------------------------------------------------------------------------|
| View Page                      | NA               | Allows users to view the Miscellaneous page, where they can see the scheduled and available miscellaneous jobs and view the job history. |
| Update Jobs                    | COMMON_ADMIN     | Enables users to change the schedule, runtime, and parameters for miscellaneous jobs.               |
| Update Job Configurations      | COMMON_ADMIN     | Allows updating job configurations such as skipping a job once, disabling a job, saving changes, and running the job immediately. |

## Schedule in Bulk Page

| Action                         | Permission   | Description                                                                                     |
|------------------------------------|------------------|-----------------------------------------------------------------------------------------------------|
| View Page                      | COMMON_ADMIN     | Allows users to view the Schedule in Bulk page, where they can see the scheduled bulk jobs.         |
| Schedule Jobs                  | COMMON_ADMIN     | Enables users to schedule multiple jobs in bulk, streamlining the job management process.            |

