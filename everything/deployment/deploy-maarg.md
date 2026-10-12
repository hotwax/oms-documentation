---
description: >-
  Deploy or upgrade a Maarg Moqui release through Jenkins, plan component
  migrations, and verify the running application and business workflows.
---

# Deploy and upgrade Maarg

Use this procedure to deploy Maarg, the HotWax Commerce backend built on Moqui. It covers release selection, Jenkins inputs, component migrations, and completion checks. Record the approved target, source revisions, migration actions, operator, and expected results before starting a deployment.

Start with [Get started with Jenkins](../tools/jenkins/README.md) to learn the interface. The build and startup details below were checked against Maarg 6.4.0, including `maarg-util` 4.4.0. Confirm the selected release and build profile use the same behavior before applying those details to another version.

## 1. Establish the deployment baseline

1. Confirm the Maarg host, environment, infrastructure, database, and deployment owner. Identify every node and integration that writes to the affected database.
2. Record the running image reference and digest, Docker configuration commit, framework/runtime versions, and installed component versions. Corroborate deployment records with the running workload or administrator-provided runtime metadata.
3. Record optional components, configuration overrides, integration destinations, datasource settings, scheduled-job state, and search configuration. Reference approved credential bindings without copying their values.
4. For an existing installation, inspect component-upgrade history and actual database state. Record missing or failed migrations separately from the displayed component version.
5. For a new installation, obtain the reviewed database initialization and configuration steps. Treat initialization as a separate operation; an existing-instance upgrade must preserve its data and configuration.

The result should identify the current artifact, configuration, database state, and processing state. Use passive deployment/runtime metadata for version discovery. The release-pinned `About` screen can generate a sign-in token on page load; see [Component upgrade diagnosis](../tools/maarg/component-upgrades.md#1-establish-the-deployment-and-incident-window) before using it for inspection.

## 2. Select the release and component bundle

1. Select the approved Maarg release tag or, for an explicitly planned branch deployment, the exact resolved commit. Record the Docker configuration repository and source revision.
2. Inspect the selected profile's Dockerfile and `myaddons.xml`. Record the framework, runtime, setup component, component-set versions, build patches, and optional components required by the target.
3. Check compatibility across the bundle and with connected applications. Preserve required custom components and overrides unless their removal is part of the change.
4. Record the intended image identity and how the operator will verify the assembled components after startup. A Docker source branch or a Maarg version label alone does not identify the whole bundle.

The inspected production image fetches the released `oms-suite` component set, packages the framework and runtime with `addRuntime`, and extracts `moqui-plus-runtime.war` for execution. Optional components can also be fetched by the startup setup script, which can rebuild that package. Verify the final running component manifest as well as the image digest.

The checked production image uses Java 21. Confirm the selected release's Java runtime and other image dependencies instead of assuming an older base image is compatible.

Packaging and data loading are different operations. Do not run a broad `loadProduction` initialization against an existing database as a substitute for component migrations. Use only the explicit data loads in the reviewed initialization or upgrade plan.

## 3. Plan schema, data, and manual changes

1. Compare the current and target versions of every installed component. Review the complete intervening version range, including `UpgradeData.xml`, `UpgradeSql.sql`, `UpgradeSteps.md`, and release-specific configuration instructions where present.
2. List each required action with its source revision, execution context, prerequisites, expected result, and repeat behavior. Determine which schema changes must precede startup and which actions depend on the new code.
3. Inspect the current schema and affected records to distinguish missing work from completed or partially applied work. Review data changes for conflicting keys or values that would overwrite environment-specific settings.
4. Establish which XML files the startup upgrade runner is expected to select. For a new component or missing tracking history, verify selection explicitly; do not assume a complete historical backfill.
5. Prepare separate execution and verification steps for SQL and manual instructions. Their presence beside an XML file does not make the startup runner execute them.

The checked `maarg-util` startup hook invokes component upgrades with error-ignoring behavior. Versioned components use recorded upgrade history to select eligible XML files. A component whose version metadata identifies a branch can instead use `upgrade/UpcomingRelease/UpgradeData.xml`; that path does not create the same versioned step history.

A running application, an unflagged step, or an advanced `lastUpgradedVersion` is insufficient evidence of migration completion. The runner can continue after failures and advance tracking. Use [Component upgrade diagnosis](../tools/maarg/component-upgrades.md) to reconcile selected files, logs, tracking, and actual records.

## 4. Rehearse and prepare the change

1. Rehearse the full deployment and migration plan on an isolated restore representative of the target. Prevent it from contacting production integrations or processing live work.
2. Run the completion checks below and rehearse recovery. Record failures, corrected steps, duration, and resulting schema/data.
3. Confirm usable database and required persistent-file backups, the previous image and component manifest, and the configuration needed to restore them together.
4. Agree on the maintenance window, operator, stop conditions, and recovery decision. Define whether a failure requires a compatible previous artifact, database restoration, or a specific repair.
5. Pause or drain affected scheduled jobs, workers, integrations, and database writers using the approved controls. Record their original state. Ensure only the planned node or execution context performs migrations against the database.

In the checked production entrypoint, `SCHEDULED_JOB_CHECK_TIME=0` disables scheduled-job polling. It does not establish that startup upgrade hooks, asynchronous work, or external writers are disabled. Keep all required maintenance controls in place and verify their effect. Review the effective schema-creation settings separately; do not change them to bypass missing migration steps.

For missing-column evidence, use [DB Missing Columns](../tools/maarg/db-missing-columns.md). It generates proposed SQL for review rather than applying it, and a clean result does not validate indexes, constraints, data, or business behavior.

## 5. Review the Jenkins deployment inputs

1. Open [HotWax Commerce Jenkins](https://jenkins.hotwax.co/) and select the approved Maarg update job for the target infrastructure. The inspected EKS UAT job was `update-maarg-aws-eks-uat`; confirm the production or other-infrastructure job with the deployment owner.
2. Open `Build with Parameters`. Compare the actual form with the approved change record and leave it unsubmitted until the planned deployment step is due.
3. Review every input. The inspected Maarg EKS UAT form exposes these fields:

| Input | Required check |
| --- | --- |
| `HOST` | Confirm the target Maarg instance and environment using the job's expected host format. |
| `DOCKER_REPO_URL` | Select the approved Maarg Docker configuration repository, `hotwax/hotwax-maarg-docker-config`, using the URL format supported by the job. |
| `DOCKER_BRANCH` | Select the approved Docker configuration tag or branch and record its resolved commit. Inspect the component versions selected by that configuration. |
| `DOCKER_INSTANCE` | Confirm the build profile and its Dockerfile/configuration. Verify the destination independently; the profile alone does not select or prove the target host. |

Forms and defaults differ between jobs. Optional components and runtime settings may be supplied by deployment configuration rather than these four inputs. Preserve their approved values and use [Understand deployment parameters](../tools/jenkins/parameters.md) to compare requested inputs with an existing run's recorded inputs.

## 6. Deploy in the rehearsed order

1. Verify the target, source revisions, backup, and maintenance controls immediately before execution.
2. Execute the next initialization, schema, configuration, or migration action in the rehearsed dependency order. Inspect its result before advancing. Complete pre-start prerequisites before starting code that depends on them.
3. When the authorized Jenkins deployment step is due, select `Build`. Record the exact job and numbered run. Follow `Checkout`, `Build Image`, `Push Image`, `Deploy Image`, and any post actions, checking the resolved source and resulting image reference.
4. Verify that the target workload uses the intended artifact. Inspect startup logs for component setup/package failures, database/schema errors, component-upgrade selection, and the first meaningful data-load error.
5. Reconcile expected XML loads with upgrade-step records, comments, `Data Load Failure` tasks, logs, and actual schema/data. Complete the remaining SQL and manual steps at the points specified in the plan, then verify their postconditions.
6. If an action fails or its outcome is uncertain, stop progression and establish current state before retrying or recovering. Do not edit upgrade tracking, rerun all component upgrades, or restart repeatedly to force a successful-looking result.

Inspect the exact build's `Console Output` and result. `Finished: SUCCESS` reports Jenkins completion; the startup hook and migrations need independent verification. A failed or aborted build can leave earlier work applied. See [Inspect builds and troubleshoot failures](../tools/jenkins/builds.md).

## 7. Verify completion and restore processing

| Check | Completion evidence |
| --- | --- |
| Running bundle | Every intended node uses the approved image digest and expected framework, runtime, core, and optional component versions. |
| Schema and data | Required schema, reference records, configuration, and explicit migration postconditions match the plan. No required step remains failed or unexplained. |
| Application access | Health checks pass, relevant startup errors are resolved, and representative authorized users can sign in and access their required Maarg functions. |
| APIs and business flows | Approved representative checks verify the capabilities affected by the release, such as order lookup, transfer processing, routing, inventory synchronization, or fulfillment. Record identifiers and downstream results. |
| Jobs and messages | Restore recorded processing state in the approved order. Confirm [Service Jobs](../tools/maarg/service-jobs.md) and [System Messages](../tools/maarg/system-messages.md) progress without new failures or duplicate work. |
| Imports and search | Relevant data imports and search/reporting return expected results; no newly stuck imports or indexing failures appear. |
| Monitoring | Compare errors, latency, job failures, and integration backlog with the baseline during the agreed observation period. Use [Runtime health](../tools/maarg/runtime-health.md). |

Perform data-changing business checks in the rehearsal environment. In production, use approved test transactions or observed normal business activity and verify the relevant downstream result. A login screen or an upgrade-history flag alone is insufficient.

Close the change after the running bundle, migrations, restored processing state, and acceptance results are recorded. Recovery must account for compatible code, database state, configuration, and external effects. Redeploying an older image does not undo data changes; use the rehearsed Maarg recovery plan.
