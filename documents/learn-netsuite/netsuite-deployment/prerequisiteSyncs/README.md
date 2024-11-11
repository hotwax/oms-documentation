# Prerequisite setup

Before order sync can be setup, there are a set of data points that need to be configured to ensure an automated sync.

- [ ] SFTP Locations
- [ ] Shipping methods
- [ ] Payment methods
- [ ] Promo Codes
- [ ] NetSuite Facility Group

While most steps are not dependent on one another, SFTP locations must be setup first before syncing Promo Codes from NetSuite.

Include this System Property data before proceeding. Sync with NetSuite will not work if this data is not in the OMS.

```xml
<!- Data set specific to Netsuite specific configuration -->
<SystemProperty systemResourceId="FTP_CONFIG" systemPropertyId="ftp.server.archive.dir" systemPropertyValue="archive/">
<SystemProperty systemResourceId="FTP_CONFIG" systemPropertyId="instance.downloadDir" systemPropertyValue="runtime/datamanager/">
```