---
description: >-
  Learn how to efficiently manage and reuse data flow designs in Napita
  using Flow Definitions.
---

# Flow Definitions

Flow Definitions are akin to Templates, referring to reusable data flow components and configurations for saving and reusing in various instances. They enable users to create reusable flow templates, which can be shared, imported, and customized across different Napita instances, fostering consistency, standardization, and reuse of data flow designs.

Users can customize imported Flow Definitions by adjusting parameter values, modifying connections, or adding components to meet specific requirements. The existing flows can be used both in the same instance or in altogether a new instance

## Reusing Flow Definitions in Same Instance

### Export Flow:

1. In Napita, you can download the flow definition by right-clicking on the processor desired for other instances and selecting 'Download Flow Definition'. A JSON file containing the flow definition will be downloaded.
2. Ensure downloading `without external services`, as their defined schemas for controller services may not suit all flow definitions. For instance, DB connection details are external services differing for clients. Hence, such details should not be saved in flow templates.

### Import Flow Definition:

Once the flow definition is downloaded, import it into the processor for reuse in other instances.

1. Navigate to the parent process group where you want to create a new processor.
2. Drag `Process Group` from the menu to the canvas.
3. Click the `Browse` icon, upload the file, and provide appropriate naming as per the required process flow.

### Create Parameter Context

When creating a processor using the flow definition within the same file, it is important to create a new parameter context for the new flow. If the parameter context remains the same, any changes in the parameter will be reflected in the source flow file. To avoid this, follow these steps:

1. Right-click on the Canvas and Select `Configure to edit` the processor configuration.
Locate 'Process Group Parameter Context' in the General Tab:

2. Switch to the `General` tab. Here, you'll find the option labeled as `Process Group Parameter Context.`

3. Click on the dropdown menu next to "Process Group Parameter Context." Scroll down to the bottom of the list where you'll find the option to "Create New Parameter Context." Choose this option to create a new parameter context for the flow.

4. Add the Name of the Parameter Context. Choose a descriptive name that reflects the purpose or function of the flow to maintain clarity and organization.

5. Click on `Apply` to Save the Parameter Context:

This ensures that any modifications made to parameters within this flow will be isolated to its specific context, preventing unintended effects on other parts of the system.


### Inherit Parameter Context

Parameter contexts manage dynamic values shared across processors or components within a data flow, containing details from the original flow definition. When transferring the flow definition between instances, replace the parent parameter context with the correct parent processor's parameter context for inheritance. Follow these steps:

1. Right-click on the processor's canvas.
2. Select `parameter` from the options.
3. Navigate to the `Inheritance` tab and remove the parameter contexts of the source processor.
4. Select the desired parameter context from the left.
5. Click `Apply` to save the inheritance of the parameter context.

### Verify Parameter Context

Once the parameter context is inherited, you can verify through the following steps:

1. Right-click on the canvas and select `Parameter` from the options.
2. Navigate to the Parameters tab, where all the parameters of that processor are listed. Parameters with the edit icon belong to that processor, while parameters with an arrow icon belong to the parent processor.
3. Click on the arrow icon for any parameter. This action will lead you to the parameter context of the parent parameter.
4. Navigate to the settings page to verify that the correct parameter context is inherited.

### Add Process Group Parameters

While most parameters are inherited from the parent processor groups, some parameters are specific to process groups. The following parameters need to be added to the processors:

* **Destination Path:** This specifies the path for the flowfile where SFTP files will be placed.
* **Feed File Name with Prefix:** Here, a meaningful file name with a prefix such as time needs to be added for easy identification.
* **Source SQL Query:** This parameter contains the SQL query required for the processor to perform its action.
* **Date Time Format:** Specifies the date time format for the files. It's crucial for accurate representation.
* **File Name Extension:** Select whether the file is .csv or .json to ensure compatibility with other systems and accurate file reading.

{% hint style="info" %}
To configure the file name, locate the flow file named `Update file name.` Right-click and select the configure option. Go to properties and enter the query in the filename field.
{% endhint %}

### Select Database Connection Pooling Service (DBCP service)

The Database Connection Pooling (DBCP) service enables efficient and reliable connections to relational databases. It essentially acts as a pool manager for database connections, allowing processors to reuse existing connections instead of creating new ones for each operation. DBCP services are not part of the parameters; therefore, Configure properties and select the DBCP service from the dropdown menu.

### Set Record Writer

The Record Writers service facilitates writing data records to various data storage systems or destinations in a structured format. Since default controller services are removed when downloading flow definitions, configure the record writer property through the following steps:

1. Right-click on the processor and select `Configure.`
2. Navigate to the property `Record writer.`
3. Select the appropriate record writer from the dropdown menu.
4. Configure the record writer service by clicking the arrow against the service. Click on the `settings` icon to configure the service.
5. Navigate to the properties tab and update the service as per your requirements.

{% hint style="warning" %}
Services can only be updated once disabled. Be cautious as disabling the service affects all associated processors. Once the services are updated, right-click on the canvas and select enable all controller services to enable the services.
{% endhint %}

### Verify DBCP and SFTP

Before executing any flow, check the [DBCP](verify-processor-properties.md#database-connection-pooling-dbcp) and [SFTP](verify-processor-properties.md#secure-file-transfer-protocol) connections to ensure credentials are accurate.

### Execute the Flow

Once all settings are set up and verified, run the processor to verify:

1. Right-click on the canvas of the processor group, then click on `Start.` All flows will start processing.
2. If you want to run each flow manually, right-click on the flow file.
3. Click on `Run Once,` and repeat the same for each flow file.

