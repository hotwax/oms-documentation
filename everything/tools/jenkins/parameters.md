---
description: >-
  Distinguish deployment targets, source branches, Docker build profiles,
  and job-specific inputs before running a Jenkins deployment.
---

# Understand deployment parameters

A parameter is an input to a Jenkins run. Its effect comes from the job's pipeline and the scripts it invokes. Reading a field name is not enough to choose a production value.

The inspected reference/test pipeline exposes `DOCKER_BRANCH` and `DOCKER_INSTANCE` for a new run. The Maarg EKS UAT update form also exposes `HOST` and `DOCKER_REPO_URL`. The OMS EKS UAT update form adds `DOMAIN`, `BUILD_COMMAND`, `PLUGINS`, and `RUNCOPYIMAGE`.

These forms differ. Do not assume that one job's defaults or parameter list apply to another job.

## Inspect a form without submitting it

1. Open the intended job's `Status` page and confirm its application and infrastructure.
2. Select `Build with Parameters`.
3. Read the parameter names and their help text. Check the target and source against the approved change record.
4. Leave the fields unchanged during a tour. Return through the job breadcrumb or `Cancel`; do not select the form's `Build` button.

Opening this parameter form is different from submitting it. Dashboard scheduling shortcuts and jobs with `Build Now` should not be used for a read-only tour.

## Separate target, source, and build profile

| Parameter | What it identifies | What to verify |
| --- | --- | --- |
| `HOST` | The target selected by the update workflow | Correct instance and environment; use the job's expected host format |
| `DOMAIN` | Domain input exposed by the OMS update job | How the pipeline combines it with the host; avoid a duplicated or incorrect hostname |
| `DOCKER_REPO_URL` | Repository containing the Docker configuration | Correct repository for the application being deployed |
| `DOCKER_BRANCH` | Branch or tag from which the Dockerfile is read | Approved release/source ref and the actual resolved commit |
| `DOCKER_INSTANCE` | Job-specific Docker build profile | The corresponding Dockerfile/build configuration; do not use this field alone to infer the destination |

The test form lists `Dev`, `UAT`, `Test`, and `Prod` as Docker profiles. Their availability does not prove that selecting a profile changes the deployment host. Resolve the destination independently through the job and its target settings.

Likewise, `DOCKER_BRANCH` is not necessarily the application's version. A Docker configuration can select several components and their release tags. Verify the assembled image and component versions after deployment.

## Review OMS-specific inputs

| Parameter | Review before execution |
| --- | --- |
| `BUILD_COMMAND` | Read the approved command and its downstream effect. A command that loads upgrade data can change the database; it is not a harmless compilation option. |
| `PLUGINS` | Confirm the required components, branches/tags, and repository URLs. The inspected form documents the pattern `ComponentName=Branch=URL`; use the matching job/runbook's supported format. |
| `RUNCOPYIMAGE` | Confirm the pipeline's image-copy behavior and approved setting. The form label alone does not establish what is copied or where. |

Preserve installed optional components unless their removal is part of the reviewed change. An empty plugin field in an older recipe is not evidence that an existing environment has no plugins.

For a release upgrade, check the release's schema and reference-data steps separately from the Jenkins form. See [Update OMS version](../../deployment/update-oms-version.md), [Optional plugins](../../deployment/optional-plugins.md), and [Maarg component upgrades](../maarg/component-upgrades.md).

## Compare requested and recorded inputs

The new-run form shows inputs for a future execution. An existing build's `Parameters` page shows saved inputs from that execution. They may differ, and a saved run can contain additional values that were not shown in the new-run form.

Use the existing run's actual parameters and resolved source revision when investigating what happened. Do not rely only on a description such as `Branch/Tag`, which can be custom text, or on today's form defaults.

Saved parameters and console logs can contain credentials. Inspect only the non-sensitive values needed for the task, and keep passwords and tokens out of documentation, tickets, copied logs, and shared screens. Use the approved Jenkins credential bindings rather than putting secrets into ordinary text fields. See [Jenkins credential handling](https://www.jenkins.io/doc/book/using/using-credentials/).

## Check readiness before an authorized run

Record the following in the change:

* Exact Jenkins job and operation
* Application, target host, environment, and infrastructure
* Approved source ref, component manifest, and image identity
* Required optional components and job-specific flags
* Migration order, maintenance window, and recovery plan
* Post-deployment runtime and business-flow checks

Use the approved procedure and operator when execution is authorized. A completed form or a previous green build is not approval for another deployment.
