---
description: >-
  Read Jenkins build results, locate a failed stage, and distinguish pipeline
  completion from a verified running deployment.
---

# Inspect builds and troubleshoot failures

Start with the existing run. A retry can repeat deployment, infrastructure, or data-changing operations, so establish what completed before deciding on another execution.

## Identify the exact run

1. Open the job's `Status` page and select a build number from `Builds` or `Stage View`.
2. Confirm the job name and build number in the breadcrumb. Build numbers repeat across different jobs.
3. Read the result, start time, duration, and `Started by` record. Use the recorded cause rather than a custom build description to identify a manual or automated run.
4. Read `Git Build Data` for the repository and resolved source revision. Use the commit, not a moving branch name, when comparing code.
5. Inspect only the relevant non-sensitive saved parameters. [Parameter handling](parameters.md#compare-requested-and-recorded-inputs) explains the difference from the new-run form.

Links such as `Last successful build` and `Last failed build` select different runs. Neither necessarily identifies the latest attempt. Use the exact numbered run URL in a handoff; a “last” link can change later.

Record the time zone with incident times. Widgets can display timestamps differently, so do not infer an execution order from an unqualified clock time alone.

## Understand a numbered build's menu

These controls belong to one run. The job page has different controls, such as starting a new parameterized build or configuring the job. Available entries depend on permissions and plugins.

| Menu item | Purpose and action scope |
| --- | --- |
| `Status` | Reads the run's result, timing, trigger, and stages. |
| `Changes` | Reads the source changes Jenkins recorded for this run; it is not a complete application release history. |
| `Console Output` | Reads execution commands, progress, and errors. Inspect a redacted, relevant excerpt when sharing evidence. |
| `Edit Build Information` | Changes the run's display name or description. It does not edit the pipeline, and it is not a read-only tour action. |
| `Parameters` | Reads saved inputs for this execution, which can include sensitive values. It is not a new-build form. |
| `Git Build Data` | Reads repositories and revisions recorded by Jenkins SCM checkouts. It may not record component repositories cloned inside the Docker build. |
| `Lockable resources` | Shows shared resources associated with the run. A build requiring an already locked resource waits for it to become available. |
| `Open Blue Ocean` | Opens an alternative visual interface for the run and stages. Its execution controls require the same review as those in the classic interface. |
| `Restart from Stage` | Starts a new execution at an eligible stage and skips preceding stages. Completed deployment/data effects can be repeated. |
| `Rebuild` | Opens a rerun path. In the inspected reference run, this label linked to Replay; check the actual destination. Reused branch inputs can resolve to newer code. |
| `Pipeline Steps` | Reads individual executed steps, timing, and associated logs. |
| `Workspaces` | Browses files on the Jenkins build agent. Later executions can change the workspace; it is not an immutable build artifact. |
| `Previous Build` | Opens the preceding run of the same job. |

For a tour, use the inspection entries and leave edits, replay, and stage restarts unsubmitted. See [Lockable Resources](https://plugins.jenkins.io/lockable-resources/), [Blue Ocean](https://www.jenkins.io/doc/book/blueocean/dashboard/), and [pipeline restarts](https://www.jenkins.io/doc/book/pipeline/running-pipelines/#restart-from-a-stage) for the underlying Jenkins features.

## Verify the pipeline source and revision

Distinguish three sources: the Jenkinsfile defines the automation, the Docker configuration defines the image recipe, and the assembled application components define the running software. `DOCKER_BRANCH` can select the second source without changing the first.

1. If your permissions allow read-only inspection of `Configure`, read the pipeline definition type. For `Pipeline script from SCM`, record the repository URL, branch specification, and `Script Path`; for an inline script, identify the recorded script used by the run. Leave the configuration unchanged and do not select `Save` or `Apply`.
2. Inspect the exact completed run's console and `Git Build Data`. Look for the Jenkinsfile obtained-from record and the repository/ref/commit associated with its SCM checkout. A later explicit checkout can refer to the Docker repository; identify each checkout before assigning a revision to it.
3. Open the identified Jenkinsfile at its recorded commit in source control. Compare its checkout, Dockerfile selection, build, and deployment steps with the run's stage records. Repository `main` today may differ from what that run used.
4. Record the Docker configuration checkout and application component manifest separately. `Changes`, custom descriptions, and a build's single displayed Git revision do not necessarily describe every source involved.

The [committed Maarg templates](https://github.com/hotwax/devops-jenkins-pipeline-template/tree/main/aws/maarg) include `aws/maarg/Jenkinsfile` and `aws/maarg/uat/Jenkinsfile`. Finding those files establishes available implementations, not which path or revision a particular job uses.

If `Configure` denies `Job/ExtendedRead`, or the recorded-script view denies `Run/Replay`, continue with the existing build records accessible to your role. A console that only identifies the Docker checkout does not prove a Jenkinsfile path, revision, or inline-script origin. When that identity cannot be established, record the limit and obtain the missing non-sensitive source metadata from the administrator. Do not execute a replay, change permissions, copy saved credentials, or infer that the job uses the repository's current template.

## Interpret the result

| Result or state | Meaning for investigation |
| --- | --- |
| Queued | Waiting to start the required work or obtain resources |
| Running | No final result yet; inspect current stage/progress |
| `SUCCESS` | Jenkins reports that the run completed successfully; check what the job actually covered |
| `UNSTABLE` | The run has a nonfatal problem, such as a configured quality check; inspect its details |
| `FAILURE` | The run failed; locate the stage and underlying error |
| `ABORTED` | Execution was interrupted; earlier effects may remain |
| `NOT_BUILT` or a skipped stage | That work was not performed; it is not evidence that the work succeeded |

Read the text result and logs rather than relying only on colors, which vary with themes and plugins. Jenkins defines the completed result categories in its [result model](https://github.com/jenkinsci/jenkins/blob/jenkins-2.492.3/core/src/main/java/hudson/model/Result.java).

## Find the failing operation

1. Read the job's `Stage View` or `Full Stage View` and identify the failed stage in the relevant run.
2. Open that run's `Console Output`.
3. Read the final result, then work back to the first relevant error in the failed stage. `Finished: FAILURE` is a result, not an explanation of the cause.
4. Distinguish work completed before the error from work skipped afterward. Use `Pipeline Steps` when you need to identify the recorded step within the stage.
5. Compare the same stage with a suitable successful run. Check changes in source revision, non-sensitive parameters, artifact, and target rather than assuming the environment was identical.

| Failed stage | Evidence to check |
| --- | --- |
| Checkout | Intended repository/ref, resolved revision, and access error |
| Prepare base image, when present | Required base-image identity, local availability, and authentication/pull errors |
| Build image | Failed compilation/dependency/container step and its first useful error |
| Push image | Registry destination, image reference, and publication error |
| Deploy image | Target, deployment command response, and whether a rollout began before failure |
| Post actions | The failing cleanup/reporting step and the earlier deployment outcome |

Treat these as investigation prompts, not predetermined root causes. A failure after image publication does not mean the image was never published. A post-action failure can coexist with an earlier deployment that completed.

Logs can contain credentials, private host details, and payloads. Share the smallest redacted excerpt that establishes the error; do not copy a full console log into a public document.

## Understand queues and executors

The Jenkins controller coordinates work. An agent performs work on a node, and an executor is a slot that can run tasks. The `Build Queue` and `Build Executor Status` help distinguish waiting from execution. See [Jenkins nodes and executors](https://www.jenkins.io/doc/book/managing/nodes/).

If work remains queued, inspect the visible waiting reason and required resources. Free executors elsewhere do not prove that an eligible executor or required lock is available. Some pipelines need a particular agent or a lock before progressing.

If a run is active but slow, inspect its current stage, elapsed time, and log progress. Compare like-for-like runs before treating duration as a fault. Ask the infrastructure owner to investigate unavailable agents or resource contention rather than changing executor settings during an incident.

## Verify the running system

The inspected pipeline's console records `Finished: SUCCESS`. That establishes its Jenkins result. To accept a deployment, also establish:

| Evidence | What it proves |
| --- | --- |
| Requested parameters and resolved source revision | What the run intended to build/use |
| Built/pushed image reference and digest | Which artifact was produced/published |
| Deployment result and observed running artifact | Whether the intended target is using that artifact |
| Component versions and migration postconditions | Whether application code, schema, and reference data agree |
| Application health and representative workflow checks | Whether the running application performs the required work |

Use runtime records, available monitoring, application version information, and the approved sanity checks. A login screen alone does not prove migrations, integration jobs, order processing, or inventory synchronization work.

Jenkins `Changes` or a `No changes` caption should be read alongside the source revision and image identity. It does not independently prove that the deployed artifact is unchanged.

See the [monitoring checklist](../../monitoring/README.md), [system monitoring guide](../../monitoring/system-monitoring-guide.md), and [Maarg runtime diagnostics](../maarg/runtime-health.md).

## Prepare a useful handoff

Include the job name, exact numbered run link, time and time zone, failed stage/step, redacted error, source revision, non-sensitive target inputs, completed work, and runtime checks. State the next investigation or recovery decision and its owner.

Do not automatically select `Rebuild`, `Replay`, or `Restart from Stage`. A stage restart creates another execution and can repeat side effects with the original inputs. Stopping a run interrupts work rather than undoing earlier deployment or external changes. Use the approved recovery plan and consult [Jenkins restart behavior](https://www.jenkins.io/doc/book/pipeline/running-pipelines/) or [abort behavior](https://www.jenkins.io/doc/book/using/aborting-a-build/) as needed.
