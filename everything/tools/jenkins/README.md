---
description: >-
  Find HotWax Commerce Jenkins jobs, understand deployment pipelines, and
  inspect existing builds without starting or changing operations.
---

# Get started with Jenkins

Use [HotWax Commerce Jenkins](https://jenkins.hotwax.co/) to inspect the automation used to build and deploy backend software. This guide introduces the classic Jenkins interface and a read-only learning path. Use the approved deployment procedure when you are ready to make a change.

Jenkins runs a job's configured instructions. A job can build an image, deploy software, launch infrastructure, restart an instance, or perform another operation. The word `Build` describes a Jenkins run; it does not mean that the run only compiles code.

The navigation and parameter labels in this guide were checked on Jenkins 2.492.3. Menus depend on your permissions, the job type, and installed plugins.

## Understand the main concepts

| Term | Meaning |
| --- | --- |
| Job or project | A reusable definition of work. Open the job to see its runs and available controls. |
| Build or run | One execution of a job, identified by a number such as `#42`. The number is local to that job. |
| Parameters | Inputs supplied to a run, such as a target host or source branch. Different jobs expose different inputs. |
| Pipeline | Instructions that organize a run into stages and steps. A `Jenkinsfile` can store these instructions in source control; some jobs use a definition maintained in Jenkins. |
| Stage | A named part of a pipeline, such as `Build Image` or `Deploy Image`. |
| Step | A task inside a stage, such as checking out source or executing a command. |
| View | A grouping of jobs for browsing. It is not a deployment target or an access-control boundary. |

Jenkins jobs are separate from OMS and Maarg business jobs. A deployment pipeline is not the order-import schedule. Inspect those schedules in [Job Manager](../launchpad/job-manager/README.md) or [Maarg service jobs](../maarg/service-jobs.md).

For the general concepts, see the [Jenkins Pipeline handbook](https://www.jenkins.io/doc/book/pipeline/) and [Jenkins project types](https://www.jenkins.io/doc/book/using/working-with-projects/).

## Read the dashboard

1. Sign in with your assigned account and open `Dashboard`.
2. Check the view tabs. Start with the view relevant to your task, or `All` to browse the jobs visible to your account.
3. Click the job's name to open its status page. Avoid the schedule/build icon at the end of the row during inspection.
4. Read the job's build history before opening a parameter form or deciding what operation it performs.

| Dashboard item | How to use it |
| --- | --- |
| `S` | Status of the latest build. Open the actual run to read its result. |
| `W` | Recent job health, represented by a weather icon. It does not report application uptime. |
| `Last Success` | Link to a successful run. It may be older than the latest run. |
| `Last Failure` | Link to a failed run. Compare its number and time with later runs. |
| `Last Duration` | Duration of the last build, not an estimate or promised completion time. |
| `Build Queue` | Work waiting to run. A queued item has not necessarily started its pipeline work. |
| `Build Executor Status` | Available execution capacity and work currently occupying it. |
| `Build History` | Runs across the selected view. Confirm the job name as well as the build number. |

An empty view can reflect its membership or your permissions. A missing job is not proof that the job was deleted. Check `All`, the known job name, and your access with the administrator.

## Choose a view and verify the job

The dashboard currently includes these groups:

| View | Use it to find candidates for |
| --- | --- |
| `Deployment Reference` | Reference/test pipelines for learning the deployment flow |
| `EKS- UAT` | User acceptance testing (UAT) updates on Amazon Elastic Kubernetes Service (EKS) |
| `On-Premises-Kubernetes-UAT-Update` | UAT updates on the on-premises Kubernetes environment |
| `MAARG-Prod-EKS`, `Production-Deployment-Jobs` | Production deployment work |
| `Docker-Base-Image`, `projects-base-docker-image` | Building base images used by other workflows |
| `New-Instance-Launch`, `maarg-env-setup`, `oms-env-setup`, `oms-deployment` | Instance provisioning or environment/deployment workflows |
| `Restart Instances` | Restart operations |

View names help you navigate; the job definition and target parameters establish the operation. Verify the application, target host, infrastructure, and intended change before any execution. A familiar name or a `UAT` tab is not enough.

## Follow a deployment pipeline

The inspected test and UAT jobs display this flow in `Stage View`:

| Stage | What to inspect |
| --- | --- |
| `Checkout` | Repository, branch/tag, and resolved commit used by the run |
| `Build Image` | Image build outcome and build errors |
| `Push Image` | Registry publication outcome and the resulting image reference |
| `Deploy Image` | Deployment command result and the intended target |
| `Declarative: Post Actions` | End-of-run actions defined by the pipeline |

Some jobs also display `Declarative: Checkout SCM` before the explicit `Checkout` stage. Do not assume every job has the same stages or that an additional checkout refers to the same repository.

An image packages application code and its runtime dependencies. A registry stores the built image; deployment makes a target environment use it. A successful image push does not prove that deployment occurred. A successful deployment command still needs [runtime verification](builds.md#verify-the-running-system).

Click a build number to inspect a specific execution. The job page's `Stage View` compares several runs; `Full Stage View` opens the larger stage-history view. Use [Inspect builds and troubleshoot failures](builds.md) to interpret the result.

## Separate inspection from execution

| Control | Effect |
| --- | --- |
| Job name, build number, `Status`, `Changes`, `Git Build Data` | Opens existing records for inspection |
| `Stage View`, `Full Stage View`, `Pipeline Steps` | Shows pipeline progress or recorded steps |
| `Console Output` | Reads execution logs; redact sensitive content before sharing |
| Existing run's `Parameters` | Shows saved inputs, which may include sensitive values |
| `Build with Parameters` | Opens inputs for a new run; the form's `Build` button submits it |
| `Build Now`, when available | Starts a run without a parameter-entry form |
| `Rebuild`, `Replay`, `Restart from Stage` | Can create another execution, including deployment or data-changing work |
| Stop/abort controls | Interrupts work; it does not undo completed external changes |
| `Configure`, edit, save, or administration controls | Can change job or Jenkins settings |

For a read-only tour, open existing records and leave forms unchanged. Do not use the dashboard's schedule icon, submit `Build`, rerun a pipeline, stop a run, or save configuration. The administrator may expose different controls to different roles.

Jenkins documents [pipeline restarts](https://www.jenkins.io/doc/book/pipeline/running-pipelines/) and [aborting builds](https://www.jenkins.io/doc/book/using/aborting-a-build/). These are execution operations, not ways to inspect a run.

## Learn by inspecting an existing run

1. Find a reference/test job and explain what distinguishes the view from the job.
2. Open a completed run and identify its job name, build number, result, start time, duration, and actual `Started by` record.
3. Follow the stages and identify where source becomes an image and where deployment begins.
4. Read the non-sensitive source revision in `Git Build Data`. Compare it with the requested branch/tag, rather than treating the branch name as immutable code.
5. Open the new-run parameter form, read the labels and help, and return to `Status` without submitting it. Use [Understand deployment parameters](parameters.md) to explain each input.
6. Compare an existing failed run with a successful run. Identify the failing stage and the evidence needed before deciding whether a retry would be appropriate.

After this exercise, you should be able to explain what a run attempted, where it failed or completed, and what remains to be verified in the running system.

## Use the deployment procedures

This orientation does not choose a release, migration sequence, or rollback plan. Continue with the appropriate procedure:

* [Launch a machine](../../deployment/launch-machine.md)
* [Update OMS version](../../deployment/update-oms-version.md)
* [Rollback OMS version](../../deployment/rollback-release.md)
* [Optional plugins](../../deployment/optional-plugins.md)
* [Maarg component upgrade diagnosis](../maarg/component-upgrades.md)

Match those procedures to the current job and infrastructure. Older recipes can use different field names or an earlier deployment path; do not transfer their defaults into another job without verification.
