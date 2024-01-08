# SDF Bundle

## Setting Up SuiteCloud Development Framework (SDF) in NetSuite

The SuiteCloud Development Framework (SDF) is a robust tool empowering developers to craft and deploy customizations for NetSuite accounts.

### Enabling SuiteCloud Development Framework (SDF) in NetSuite

Before developers can leverage the SuiteCloud Development Framework (SDF) for development within a targeted NetSuite account, specific features must be activated by an account administrator. These features establish the essential infrastructure for SDF to function effectively. Follow the steps outlined in the [official documentation for enabling SDF features][sdfEnableDocs].

### Developer Role Setup for SDF:

In addition to administrator-level configurations, developers intending to utilize SDF with a NetSuite role must undergo additional setup. This ensures developers have the necessary permissions and access for effective use of SDF capabilities. For detailed instructions on setting up a developer role for SDF, refer to [Oracle's documentation][sdfRoleDocs].

It's essential to note that these configurations require active involvement from developers. Therefore, thoroughly review and follow the provided documentation to ensure the successful establishment of SuiteCloud Development Framework capabilities within the NetSuite environment.

Follow this checklist to complete the integration: 

- [ ] Install SFTP bundle in Netsuite

- [ ] Setup SFTP
  - [ ] Configure SFTP server
  - [ ] Add a new SFTP server configuration
  - [ ] Define SFTP server details

- [ ] Verify Netsuite Date format and time
  - [ ] Verify process
  - [ ] Verification steps

- [ ] Setup SFTP directory
  - [ ] Customer
  - [ ] Inventory
  - [ ] Purchase Order
  - [ ] Sales Order
  - [ ] Transfer Order
  - [ ] Discount sale
  - [ ] Cash sale
  - [ ] Fulfilled Sales Order

- [ ] Setting Up SuiteCloud Development Framework (SDF) in NetSuite

<!-- page links -->

[sdfEnableDocs]: https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4724921034.html#Enabling-SuiteCloud-Development-Framework-in-the-Target-NetSuite-Account-(Administrator-Only)

[sdfRoleDocs]: https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/subsect_1539287603.html#Setting-Up-a-Role-for-SuiteCloud-Development-Framework-Development