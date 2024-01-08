# Release Documentation Template

## How to use this template with ChatGPT?

1. **Paste Template into ChatGPT:**
   - Open your ChatGPT interface or chat platform.
   - Paste the template you want to use into the chat.

2. **Explain Placeholder Values:**
   - Clearly communicate to ChatGPT with this prompt `I will be providing placeholder values and please fill in the template accordingly`.

3. **Maintain Information in a document:**
   - In the document, have a table or section with the following information that you will later paste as placeholder values:

   Example table in the document:

   ```markdown
   | Placeholder              | Actual Value                                      |
   |--------------------------|---------------------------------------------------|
   | Hotfix Image URL         | Actual Hotfix Image URL                       |
   | Link to Diff             | Actual Diff Link                                |
   | Link to Changelog        | Actual Changelog Link                           |
   | Latest Image URL         | Actual Latest Image URL                         |
   | Link to Upgrade Data     | Actual Upgrade Data Link                       |
   | Link to Upgrade SQL      | Actual Upgrade SQL Link                        |
   | Link to Upgrade Steps    | Actual Upgrade Steps Link                    |
   | ... and others           | Actual Value                                    |
   ```

4. **Paste the table:**
   - Copy the table values from the document and paste them into the chat. 
  
5. **Request ChatGPT to Fill In:**
   - Ask ChatGPT to fill in the template with the provided placeholder values.

   Prompt: `Please fill in the template with the actual values. Replace `[Hotfix Image URL]` with the real hotfix image URL, `[Link to Diff]` with the actual diff link, and so on. Please ensure correct formatting and details.`

6. **ChatGPT Generates Content:**
   - ChatGPT will generate content based on the provided template and placeholder values.

7. **Review and Edit:**
   - Review the generated content. If there are any inaccuracies or if you want to make adjustments, do so.
   - Once satisfied, save the generated content as your final release document.

This approach helps maintain a structured document with the necessary information, making it easy to copy and paste into the chat for ChatGPT to fill in the template. Adjust the instructions based on your specific needs.


## HotFix Tempalate

{% hint style="info" %}
Review and execute all Upgrade Steps and Upgrade SQL for each hotfix.
{% endhint %}

| Information         | Value                                |
|---------------------|--------------------------------------|
| Release Version     | Hotfix Version                     |
| Release Type        | Hotfix                               |
| Image Tag           | Hotfix Image Tag                  |
| Image URL           | Hotfix Image URL                   |
| Diff                | (Link to diff)[Link to Diff]                       |
| Changelog           | (Link to changelog)[Link to Changelog]                  |

{% tabs %}

{% tab title="Upgrade Data" %}
[Link to Upgrade Data](hotfix_upgrade_data_link)
{% endtab %}

{% tab title="Upgrade SQL" %}
[Link to Upgrade SQL](hotfix_upgrade_sql_link)
{% endtab %}

{% tab title="Upgrade Steps" %}
[Link to Upgrade Steps](hotfix_upgrade_steps_link)
{% endtab %}

{% endtabs %}

## Latest Release Template

***Release Information***

| Information         | Value                                |
|---------------------|--------------------------------------|
| Release Version     | [Latest Version]                     |
| Release Type        | [Release Type]                       |
| Image Tag           | [Latest Image Tag]                   |
| Image URL           | [Latest Image URL]                   |
| Diff                |  (Link to diff)[Link to Diff]                       |
| Changelog           | (Link to changelog)[Link to Changelog]                 |

{% tabs %}

{% tab title="Upgrade Data" %}
[Link to Upgrade Data](latest_upgrade_data_link)
{% endtab %}

{% tab title="Upgrade SQL" %}
[Link to Upgrade SQL](latest_upgrade_sql_link)
{% endtab %}

{% tab title="Upgrade Steps" %}
[Link to Upgrade Steps](latest_upgrade_steps_link)
{% endtab %}

{% endtabs %}

## Old Release Template

***Release Information***

| Information         | Value                                |
|---------------------|--------------------------------------|
| Release Version     | [Old Version]                        |
| Release Type        | [Old Release Type]                   |
| Image Tag           | [Old Image Tag]                      |
| Image URL           | [Old Image URL]                      |
| Diff                | (Link to diff)[Link to Diff]                       |
| Changelog           | (Link to changelog)[Link to Changelog]                   |

{% tabs %}

{% tab title="Upgrade Data" %}
[Link to Upgrade Data](old_upgrade_data_link)
{% endtab %}

{% tab title="Upgrade SQL" %}
[Link to Upgrade SQL](old_upgrade_sql_link)
{% endtab %}

{% tab title="Upgrade Steps" %}
[Link to Upgrade Steps](old_upgrade_steps_link)
{% endtab %}

{% endtabs %}

## Optional Plugins Template

| Plugin            | Version | Repository                                                    |
|-------------------|---------|---------------------------------------------------------------|
| **netsuite**      | [Version] | [netsuite Repository](netsuite_repository_link)           |
| **klaviyo**       | [Version] | [klaviyo Repository](klaviyo_repository_link)             |
| **shipstation**   | [Version] | [shipstation Repository](shipstation_repository_link)     |
| **shipt**         | [Version] | [shipt Repository](shipt_repository_link)                 |
| **c807**          | [Version] | [c807 Repository](c807_repository_link)                   |
| **guatex**        | [Version] | [guatex Repository](guatex_repository_link)               |
| **terminal-express** | [Version] | [terminal-express Repository](terminal_express_repository_link) |
| **cargotrans**    | [Version] | [cargotrans Repository](cargotrans_repository_link)       |

Use this template to document releases for your product or project, filling in the placeholders with the actual information. Adjust the format based on your specific needs.


