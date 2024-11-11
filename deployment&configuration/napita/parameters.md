# Add Parameters

Napita Parameters offer users the ability to configure settings on a hierarchical level, providing a streamlined approach to managing data processing workflows. When parameters are set at the parent process group level, they automatically propagate to child process groups and processors, ensuring consistency and efficiency across the entire data flow. This hierarchical setup is particularly significant for maintaining uniformity and simplifying configuration management within complex data processing environments.

The hierarchical nature of parameter settings enables users to define configurations at parent process group levels reducing the need for redundant configurations across multiple components. By setting parameters at the parent process group level, users can ensure consistency in settings such as default time zone, SFTP configurations, and database configurations throughout the entire data flow.

**Access Parameter Contexts:** Navigate to the Global Menu and select `Parameter Contexts`.

**Create a Parameter Context:** Click the `+` button in the upper-right corner to add a new Parameter Context. Provide a name and optionally a description for the Parameter Context on the `Settings` tab, then click `Apply`.

**Add Parameters:** After creating the Parameter Context, switch to the `Parameters` tab. Here, you can add parameters during the initial creation of the Parameter Context or to an existing one.

- **During Initial Creation:** If adding parameters during initial creation, click the `+` button to open the `Add Parameter` window.

- **To an Existing Parameter Context:** If adding parameters to an existing Parameter Context, open the Parameter Context window and click the `Edit` button (pencil icon) in the row of the desired Parameter Context. Then, on the `Parameters` tab, click the `+` button to add a new parameter.

**Define Parameter Details:** In the `Add Parameter` window, specify the details of the parameter:
- **Name:** Provide a name for the parameter.
- **Value:** Set the initial value for the parameter.
- **Description (Optional):** Optionally, provide a description for the parameter to explain its purpose or usage.
- **Sensitive Property:** If the parameter contains sensitive information, such as passwords, enable the `Sensitive Property` option to encrypt the value.
- **Dynamic Property:** If the parameter's value can be dynamically updated at runtime, enable the `Dynamic Property` option.

**Save the Parameter:** After defining the parameter details, click `Add` or `Apply` to save the parameter.

By following these steps, you can create a new parameter within a Parameter Context in NiFi, enabling dynamic configuration and customization of data flow components.

In the subsequent parameter level, you can configure process-level parameters, including specifics like SFTP paths, feed file names, SQL query type, and more. It's crucial to note that actions can only be taken on parameters within specific processor groups, not individual flows. Moreover, when modifying parameters at the parent processor level, you'll need to navigate to the parent processor directly. This hierarchical setup ensures that parameters are managed efficiently and precisely at each level of the data flow architecture.

