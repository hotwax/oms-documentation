---
description: >-
  Discover how to schedule error emails for Master Data Management (MDM)
  processes in HotWax Commerce for efficient error handling and resolution.
---

# Schedule Error Mails

**Introduction:** In HotWax Commerce, error handling is crucial for maintaining smooth operations. One aspect of this is scheduling error emails for Master Data Management (MDM) processes. When errors occur during MDM file imports, a failure report is generated, and these reports can be scheduled to be sent to relevant personnel for analysis and resolution. This document outlines the steps required to schedule MDM error emails in HotWax Commerce.

**Steps:**

**1. Enable Postfix Service:**

* `Postfix` is a Sendmail-compatible mail transport agent that ensures secure, fast, and easy email configuration.
* The technical team can enable the Postfix service on your server and provide you with instance-specific Postfix details.

**2. Configure Postfix Relay Host:**

* Postfix uses the relay host configuration directive to send emails to external domains.
* Configure the relay host directive with the hostname or IP address of the remote SMTP server or service.
* Upon enabling Postfix, note the received IP address of the server. Once the Postfix service is enabled, you will get the relay hostname and Port name.

**3. Add Configurations in `General Settings`:**

* Access the `general settings` page in HotWax Commerce.
* Add the following configurations:
   * a. SMTP Relay Host Configuration Details.
   * b. Enable Notifications.

**4. Configure Email Template:**

* Navigate to the `DM\_ERROR\_FILE` table in the `EmailTemplateSetting` entity in HotWax Commerce's web tools.
* Set the default email address from which users will receive emails in the `From Address` field (e.g., notnaked@noreply.com).
* Configure the email template to be used for communicating error files effectively.

**5. Import XML File for System Properties:**

*   Import the following XML file to configure system properties:

    ```xml
    <SystemProperty description="Configuration to send the error file to FTP/Email" systemPropertyId="error.file.sendTo.config" systemPropertyValue="EMAIL" systemResourceId="datamanager"/>
    <SystemProperty description="**List of email addresses to which data manager error files would be sent.**" systemPropertyId="error.file.sendTo.email.addresses" systemPropertyValue="**email ID from which the emails will be sent from**" systemResourceId="datamanager"/>
    ```
* Ensure the email addresses specified are accurate and designated for receiving error files.

**Conclusion:** Following these steps will enable you to schedule MDM error emails effectively in HotWax Commerce. By promptly identifying and addressing errors, you can maintain the integrity and efficiency of your system's data management processes.
