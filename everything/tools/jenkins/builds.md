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
