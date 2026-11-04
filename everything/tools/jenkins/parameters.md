---
description: >-
  Distinguish deployment targets, source branches, Docker build profiles,
  and job-specific inputs before running a Jenkins deployment.
---

# Understand deployment parameters

A parameter is an input to a Jenkins run. Its effect comes from the job's pipeline and the scripts it invokes. Reading a field name is not enough to choose a production value.

The inspected Maarg reference/test pipeline exposes `DOCKER_BRANCH` and `DOCKER_INSTANCE` for a new run. The Maarg EKS UAT update form also exposes `HOST` and `DOCKER_REPO_URL`.

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
| `DOCKER_REPO_URL` | Repository containing the Docker configuration | Correct repository for the application being deployed |
| `DOCKER_BRANCH` | Branch or tag from which the Dockerfile is read | Approved release/source ref and the actual resolved commit |
| `DOCKER_INSTANCE` | Job-specific Docker build profile | The corresponding Dockerfile/build configuration; do not use this field alone to infer the destination |

The test form lists `Dev`, `UAT`, `Test`, and `Prod` as Docker profiles. Their availability does not prove that selecting a profile changes the deployment host. Resolve the destination independently through the job and its target settings.

Likewise, `DOCKER_BRANCH` is not necessarily the application's version. A Docker configuration can select several components and their release tags. Verify the assembled image and component versions after deployment.

## Find the branch or tag and choose its profile

1. Identify the Docker configuration repository from the selected job or the relevant run. Maarg's committed AWS templates default to [hotwax/hotwax-maarg-docker-config](https://github.com/hotwax/hotwax-maarg-docker-config), but a job can provide a different `DOCKER_REPO_URL`.
2. Open that repository's branch/tag picker and copy the exact approved ref name. Use the release tag for a released bundle or the reviewed feature branch for a branch deployment. Record its resolved commit; do not infer the value from the job name.
3. Open the Dockerfile on that same ref and inspect its component versions and build configuration. Choose the branch/tag and profile together.
4. Confirm that the selected job actually uses the inspected pipeline implementation. Use [Verify the pipeline source and revision](builds.md#verify-the-pipeline-source-and-revision) before treating a template as the live job's definition.

The [Maarg AWS pipeline templates](https://github.com/hotwax/devops-jenkins-pipeline-template/tree/main/aws/maarg) are separate from the Docker configuration repository. The reviewed templates construct the Dockerfile path as `docker$DOCKER_INSTANCE/Dockerfile`. The inspected reference form's labels have these underlying values:

| Selection | Underlying value | Dockerfile path |
| --- | --- | --- |
| `Dev` | Empty string | `docker/Dockerfile` |
| `UAT` | `/uat` | `docker/uat/Dockerfile` |
| `Test` | `/test` | `docker/test/Dockerfile` |
| `Prod` | `/prod` | `docker/prod/Dockerfile` |

The reference form defaulted to `Dev`, despite being a test job. A default is not a recommendation for the intended deployment, and other jobs can expose different choices.

{% hint style="warning" %}
On October 12, 2026, the inspected Docker repository's `main` contained Dev, UAT, and Prod Dockerfiles but no `docker/test/Dockerfile`. Under the reviewed template's path rule, selecting `Test` with that source would fail to find its Dockerfile. Check the exact selected ref before execution; a dropdown option does not establish that its build recipe exists.
{% endhint %}

The profile selects a build recipe. The job's deployment settings establish the destination, so `Prod` does not by itself redirect a reference job to production and `UAT` does not by itself make a production job safe for testing.

### Check whether the recipe tests a release or moving code

A tag on the Docker configuration repository does not guarantee that every dependency inside its Dockerfile uses a release tag. Inspect its `git clone` references, component-fetch mode, copied configuration, and any startup component additions.

For example, Maarg's checked `v6.4.0` Dev Dockerfile still clones `main` for the framework, runtime, setup, and nested Docker configuration repositories. The UAT Dockerfile instead pins framework `v4.2.0`, runtime `v4.1.0`, setup `v1.2.1`, and Maarg Docker configuration `v6.4.0`, and fetches the released component set. Selecting `v6.4.0` with `Dev` therefore does not reproduce that released bundle.

For release testing, choose the reviewed recipe that assembles the intended released dependencies, then confirm the actual component manifest. Do not choose `Test` because the target hostname contains test or assume `UAT` changes the destination. Confirm the target job, runtime configuration, optional components, and migration plan independently.

## Review the Maarg component and runtime configuration

The four inputs above do not list every component or runtime setting. Inspect the selected Dockerfile, component manifest, optional components, and the deployment configuration that supplies datasource, job, and integration settings. Preserve installed optional components unless their removal is part of the reviewed change.

For a release upgrade, check schema, reference data, startup hooks, and manual prerequisites separately from the Jenkins form. Use [Deploy and upgrade Maarg](../../deployment/deploy-maarg.md) for the sequence and [Maarg component upgrades](../maarg/component-upgrades.md) to interpret migration outcomes.

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
