# Release Documentation

## Introduction

{% hint style="info" %}
1. For information on previous releases, please consult the [previous document](https://docs.google.com/document/d/1lfvjpqBiE__1fsCjq7VvQSSXjdRLVZg86zJIXDDK-zc/edit).
   
2. To find details about SOLR versions, refer to the [SOLR version document]([solr_version_document_link](https://docs.google.com/spreadsheets/d/1H-iEVG-hS9FTsYOf5YiUH-5KOJUcu0_TiPG8aVYjaHU/edit#gid=0))
{% endhint %}

## Latest Release - v5.2.0 (2nd Jan 2024)

| Information         | Value                                |
|---------------------|--------------------------------------|
| Release Version     | [v5.2.0]                             |
| Release Type        | [Minor]                               |
| Image Tag           | [v5.2.0]                             |
| Image URL           | [289432782788.dkr.ecr.us-east-1.amazonaws.com/omscoreimage:omscoreimage-latest] |
| Diff                | [https://git.hotwax.co/commerce/oms/-/compare/v5.1.0...v5.2.0?from_project_id=161&straight=false] |
| Changelog           | [https://git.hotwax.co/commerce/oms/-/blob/main/CHANGELOG.md]                  |

{% tabs %}

{% tab title="Upgrade Data" %}
[Link to Upgrade Data](https://git.hotwax.co/commerce/oms/-/blob/v5.2.0/applications/hwmapps/upgrade/current/UpgradeData.xml?ref_type=tags)
{% endtab %}

{% tab title="Upgrade SQL" %}
[Link to Upgrade SQL](https://git.hotwax.co/commerce/oms/-/blob/v5.2.0/applications/hwmapps/upgrade/current/UpgradeSQL.sql?ref_type=tags)
{% endtab %}

{% tab title="Upgrade Steps" %}
[Link to Upgrade Steps](https://git.hotwax.co/commerce/oms/-/blob/v5.2.0/applications/hwmapps/upgrade/current/UpgradeSteps.md?ref_type=tags)
{% endtab %}

{% endtabs %}


## HotFix

{% hint style="danger" %}
Review and execute all Upgrade Steps and Upgrade SQL for each hotfix.
{% endhint %}

#### Hotfix - v5.1.5 (20th Dec)

| Information         | Value                                           |
|---------------------|-------------------------------------------------|
| Release Version     | v5.1.5                                          |
| Release Type        | Hotfix                                          |
| Image Tag           | v5.1.5                                          |
| Image URL           | (your_hotfix_image_url_for_v5.1.5)              |
| Diff                | [Link to Diff](https://git.hotwax.co/commerce/oms/-/compare/v5.1.3...v5.1.5?from_project_id=161&straight=false) |
| Changelog           | [Link to Changelog](your_hotfix_changelog_link) |

{% tabs %}

{% tab title="Upgrade Data" %}
No upgrade data required
{% endtab %}

{% tab title="Upgrade SQL" %}
No upgrade SQL required
{% endtab %}

{% tab title="Upgrade Steps" %}
No upgrade steps required
{% endtab %}

{% endtabs %}

#### Hotfix - v5.1.3 (18th Dec)

| Information         | Value                                           |
|---------------------|-------------------------------------------------|
| Release Version     | v5.1.3                                          |
| Release Type        | Hotfix                                          |
| Image Tag           | v5.1.3                                          |
| Image URL           | (your_hotfix_image_url_for_v5.1.3)              |
| Diff                | [Link to Diff](https://git.hotwax.co/commerce/oms/-/compare/v5.1.2...v5.1.3?from_project_id=161&straight=false) |
| Changelog           | Security fixes backported from OFBiz            |

{% tabs %}

{% tab title="Upgrade Data" %}
No upgrade data required
{% endtab %}

{% tab title="Upgrade SQL" %}
No upgrade SQL required
{% endtab %}

{% tab title="Upgrade Steps" %}
No upgrade steps required
{% endtab %}

{% endtabs %}

#### Hotfix - v5.1.2 (15th Dec)

| Information         | Value                                           |
|---------------------|-------------------------------------------------|
| Release Version     | v5.1.2                                          |
| Release Type        | Hotfix                                          |
| Image Tag           | v5.1.2                                          |
| Image URL           | (your_hotfix_image_url_for_v5.1.2)              |
| Diff                | Security fixes on username and password         |

{% tabs %}

{% tab title="Upgrade Data" %}
No upgrade data required
{% endtab %}

{% tab title="Upgrade SQL" %}
No upgrade SQL required
{% endtab %}

{% tab title="Upgrade Steps" %}
No upgrade steps required
{% endtab %}

{% endtabs %}

#### Hotfix - v5.1.1 (14th Dec)

| Information         | Value                                           |
|---------------------|-------------------------------------------------|
| Release Version     | v5.1.1                                          |
| Release Type        | Hotfix                                          |
| Image Tag           | v5.1.1                                          |
| Image URL           | (your_hotfix_image_url_for_v5.1.1)              |
| Changes             | Solr boosting, Order Note, customer data setup changes for phone and email |
| Diff                | [Link to Diff](https://git.hotwax.co/commerce/oms/-/compare/v5.1.0...v5.1.1?from_project_id=161&straight=false) |

{% tabs %}

{% tab title="Upgrade Data" %}
<CommunicationEventType communicationEventTypeId="ORDER_COMMUNICATION" description="Order Communications" hasTable="N"/>
<CommunicationEventType communicationEventTypeId="ORDER_NOTE" parentTypeId="ORDER_COMMUNICATION" description="Order Note" hasTable="N" contactMechTypeId="INTERNAL_PARTYID"/>
{% endtab %}

{% tab title="Upgrade SQL" %}
Manual Upgrade SQL: (v5.1.1)
[Link to Upgrade SQL](manual_upgrade_sql_link)
{% endtab %}

{% tab title="Upgrade Steps" %}
Manual Upgrade Steps: (v5.1.1)

**Action Required: Update Runtime Data for Communication Event Purge Job**

1. **Job Verification:**
   Ensure that you are actively engaged in purging communicationEvent data on the instance before proceeding with the update.

2. **New Communication Event Type:**
   A new communication event type has been established for creating order notes.

3. **Job Details:**
   - **Service Name:** purgeOrderCommunicationEvent
   - **Service ID:** PRG_COMM_EVNT

4. **Runtime Data Update:**
   Add the following Communication Event Type ID for purging order notes:
   - **Communication Event Type ID:** ORDER_NOTE

5. **Important Note:**
   Do not remove any existing Communication Event Type IDs from the runtime data. Simply append the new Communication Event Type ID without affecting the current configurations.

{% endtab %}

{% endtabs %}



## Release - v5.1.0

| Information         | Value                                           |
|---------------------|-------------------------------------------------|
| Release Version     | v5.1.0                                          |
| Release Type        | Minor                                           |
| Image Tag           | v5.1.0                                          |
| Image URL           | [Latest Image URL]                              |
| Diff                | [Link to Diff](https://git.hotwax.co/commerce/oms/-/compare/v5.0.0...v5.1.0?from_project_id=161&straight=false) |
| Changelog           | [Link to Changelog](https://git.hotwax.co/commerce/oms/-/blob/main/CHANGELOG.md) |

{% tabs %}

{% tab title="Upgrade Data" %}
[Link to Upgrade Data](https://git.hotwax.co/commerce/oms/-/blob/v5.1.0/applications/hwmapps/upgrade/current/UpgradeData.xml?ref_type=tags)
{% endtab %}

{% tab title="Upgrade SQL" %}
[Link to Upgrade SQL](https://git.hotwax.co/commerce/oms/-/blob/v5.1.0/applications/hwmapps/upgrade/current/UpgradeSQL.sql?ref_type=tags)
{% endtab %}

{% tab title="Upgrade Steps" %}
[Link to Upgrade Steps](https://git.hotwax.co/commerce/oms/-/blob/v5.1.0/applications/hwmapps/upgrade/current/UpgradeSteps.md?ref_type=tags)
{% endtab %}

{% endtabs %}

## Old Release - v5.0.0

| Information         | Value                                           |
|---------------------|-------------------------------------------------|
| Release Version     | v5.0.0                                          |
| Release Type        | Minor                                           |
| Image Tag           | v5.0.0                                          |
| Image URL           | [Old Image URL]                                 |
| Diff                | [Link to Diff](https://git.hotwax.co/commerce/oms/-/compare/v4.0.0...v5.0.0?from_project_id=161&straight=false) |
| Changelog           | [Link to Changelog](https://git.hotwax.co/commerce/oms/-/blob/main/CHANGELOG.md) |


{% tabs %}

{% tab title="Upgrade Data" %}
OMS:
[Link to Upgrade Data](https://git.hotwax.co/commerce/oms/-/blob/v5.0.0/applications/hwmapps/upgrade/current/UpgradeData.xml?ref_type=tags)

Omssetup:
[Link to Upgrade Data](https://git.hotwax.co/tools/omssetup/-/blob/v5.0.0/upgrade/current/UpgradeData.xml?ref_type=tags)
{% endtab %}

{% tab title="Upgrade SQL" %}
[Link to Upgrade SQL](https://git.hotwax.co/commerce/oms/-/blob/v5.0.0/applications/hwmapps/upgrade/current/UpgradeSQL.sql?ref_type=tags)

Omssetup:
[Link to Upgrade SQL](https://git.hotwax.co/tools/omssetup/-/blob/v5.0.0/upgrade/current/UpgradeSQL.sql?ref_type=tags)
{% endtab %}

{% tab title="Upgrade Steps" %}
[Link to Upgrade Steps](https://git.hotwax.co/commerce/oms/-/blob/v5.0.0/applications/hwmapps/upgrade/current/UpgradeSteps.md?ref_type=tags)

Omssetup:
[Link to Upgrade Steps](https://git.hotwax.co/tools/omssetup/-/blob/v5.0.0/upgrade/current/UpgradeSteps.md?ref_type=tags)
{% endtab %}

{% endtabs %}


If you are preparing a new release, use this [template](https://github.com/hotwax/oms-documentation/blob/user-guides/deployment%26configuration/oms/additional-resources/omsReleaseTemplate.md)
