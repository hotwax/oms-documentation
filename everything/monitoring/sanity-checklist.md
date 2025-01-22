# Sanity Check Process After Migrating an Instance

Recently, our instances were migrated to the New Kubernetes Setup to enhance availability. When an instance is migrated or upgraded, a thorough sanity check is essential to ensure all functionalities are operational and new updates are implemented successfully.

{% hint style="info" %} Sanity tests on production instances differ as some instances lack Maarg setup and Solr-based reporting. 
No actions should be performed on production instances; all checks are done on a view-only basis. {% endhint %}


## Test Objectives

1. **User and System Access Verification**
   - Confirm successful login and functionality across multiple user roles and applications.

2. **Data Validation**
   - Ensure data consistency and accuracy across various OMS pages.

3. **Configuration and System Integration Check**
   - Validate proper configuration and operation of integrated systems, including Solr, [SFTP](https://docs.hotwax.co/documents/system-admins/initial-setup/configure-sftp), Maarg, and Nifi.

4. **Order Fulfillment Process Verification**
   - Confirm the [end-to-end order](https://docs.hotwax.co/everything/guidlines/order-flow) fulfillment process.

5. **Reporting Functionality Validation**
   - Verify [reporting](https://docs.hotwax.co/everything/tathya/data-discrepancies) functionalities.

6. **JWT Token Validation**
   - Ensure proper [JWT token generation](https://docs.hotwax.co/documents/learn-shopify/setup-shopify/shopifyintegration) and usage.


## Test Procedures

### 1. User and System Access Verification
- **OMS Login**
  - Log in to OMS with multiple user roles to verify role-based access and functionality.
  - Example: Login with Super permission role and Administrator role.

- **Launchpad Login**
  - Log in to the Ofbiz application (Fulfillment, Preorder, and User roles) and Moqui-based applications (Available to Promise, Order Routing, and Company) with different user roles to check if login is successful.

- **SFTP Login**
  - Log in with new [credentials](https://docs.hotwax.co/documents/system-admins/initial-setup/configure-sftp) and verify file [processing](https://docs.hotwax.co/everything/napita/view-and-manage-processors) success.

- **Maarg Instance**
  - Log in to Maarg.
  - Update database/SFTP credentials.
  - Check for write permissions (e.g., order fulfillment history) retained post-migration on entities.

- **Nifi Instance**
  - Log in to Napita Production or UAT, depending on whether the migration is for the production or UAT instance.
  - Verify read-only access to DB/SFTP details by checking DB/SFTP credentials.


### 2. Data Validation
- **OMS Data**
  - Confirm data consistency across all views and detail pages.
  - **Possible Issues**: 
    - Product images not found.
    - Order item details missing.
    - Pages taking a long time to load.
  - **Action**: Report these issues to the sysadmin team.

- **Solr Cloud**
  - Check data accuracy on the [Search Admin page](https://docs.hotwax.co/documents/system-admins/administration/search-admin#overview-section).
  - **Possible Issues**: 
    - Hostname changes in the Overview section.
    - Empty Index operation section.
  - **Action**: Report these issues to the sysadmin team.


### 3. Process Verification
- **Plugin Migration**
  - Ensure plugins were upgraded successfully by checking plugin details on the About page.

- **Job Status**
  - Perform hourly [job](https://docs.hotwax.co/everything/guidlines/system-monitoring-guide#id-2.-job-monitoring) checks for the next 6 hours and report any failures.

- **Order Fulfillment**
  - Verify the [end-to-end order](https://docs.hotwax.co/everything/guidlines/order-flow) fulfillment process on Shopify, from import through completion.

- **Maarg Instance Flows**
  - Review job runs to identify stuck jobs by checking the Error field.

- **Nifi Instance Flows**
  - Verify functionality for:
    - DB (ensure the same read access as before migration).
    - SFTP-related processors (ensure all files can be consumed and placed on SFTP).


### 4. Reporting Verification
- **Solr-Based Reporting**
  - Ensure recent data visibility and accuracy on [Tathya](https://docs.hotwax.co/everything/tathya/data-discrepancies).

- **Ofbiz-Based Reporting**
  - Confirm functionality of order sync, inventory, and fulfillment reports by ensuring all reports have recent data and no [discrepancies](https://docs.hotwax.co/everything/tathya/data-discrepancies).

- **Moqui-Based Reporting**
  - Check Maarg reports to confirm no stuck services or messages.

### 5. JWT Token Validation
- Validate Solr report functionality. If there are Solr-based reporting discrepancies, the JWT token might have expired.
- Regenerate the JWT instance token if [necessary](https://docs.hotwax.co/documents/learn-shopify/setup-shopify/shopifyintegration).

