# Set Facility-Wise Safety Stock

Managing inventory effectively across various facilities is crucial to meeting customer demands swiftly and efficiently. HotWax Commerce empowers retailers with a robust Available-to-Promise (ATP) app that allows seamless configuration of safety stock levels tailored to the unique demands of each facility.

## Steps to Configure Safety Stock Rules

### Identify Facility Groups

Determine which facility groups require specific safety stock levels based on their demand. Retailers can create custom facility groups as needed by following our [user manual](https://app.gitbook.com/s/vRjh4vkGRczeQJMpDxzL/administration/facilities/manage-groups#creating-a-new-group).

### Access the ATP Application

Navigate to `Launchpad` -> `ATP app` -> `Safety Stock`.

### Create a New Rule

Click on the `+` icon in the right-bottom corner of the app.

### Rule Configuration

* **Name**: Provide a descriptive name for the rule.
* **Safety Stock**: Enter the desired level of safety stock.
* **Facilities**:
  * **Select all facilities**: Toggle this on if the same safety stock level applies uniformly across all facilities.
  * **Included**: Add the facility groups where this safety stock rule should be applied.
  * **Excluded**: Optionally exclude specific facility groups from this rule if necessary.
* **Products By Tags**:
  * **Included**: Filter products that require this safety stock level using product tags.
  * **Excluded**: Optionally exclude specific products based on tags from this safety stock rule.
* **Products By Feature**:
  * **Included**: Filter products based on features that require this safety stock level.
  * **Excluded**: Optionally exclude products based on features from this safety stock rule.

{% embed url="https://youtu.be/Bq3Rp89X-nU" %}



## Automated Integration for Seamless Operations

#### Effortless Export

Once rules are established, a dedicated service generates a CSV file containing all specified safety stock levels. This file is securely exported to the designated SFTP server for further processing.

#### Automated Import

The scheduled `Import_Product_Facility` service imports this CSV file into the Order Management System (OMS), ensuring swift updates without manual intervention.

#### Efficient Processing

The `Process_Bulk_Imported_Files` service then swiftly processes the imported data, updating safety stock levels across selected products and facilities. This automated workflow minimizes errors and accelerates response times.

HotWax Commerce’s ATP app empowers retailers to enhance operational efficiency and responsiveness through sophisticated safety stock management. By leveraging customizable rules and automated workflows, retailers can optimize inventory levels across diverse facilities, ensuring customer satisfaction and operational excellence.
