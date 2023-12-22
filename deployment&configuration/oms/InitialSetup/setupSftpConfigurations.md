## SFTP Configurations

Configuring SFTP (Secure File Transfer Protocol) settings is a critical step in ensuring the smooth and secure exchange of data within your system. The importance of each configuration is outlined below:

{% hint style='warning' %}
Before uploading data, ensure all relevant variables are included.
{% endhint %}

1. **Access FTP Connection Settings:**
   - Locate the `systemPropertyId="ftp.server.hostname"` and input the value {hostname_without_sftp://}.
   - Locate the `systemPropertyId="ftp.server.username"` and input the value {username}.
   - Locate the `systemPropertyId="ftp.server.password"` and input the value {password}.
   - Locate the `systemPropertyId="ftp.server.port"` and input the value {port}.

2. **Netsuite-specific Configuration:**
   - Find `systemPropertyId="ftp.server.archive.dir"` and input the value archive/.
   - Find `systemPropertyId="instance.downloadDir"` and input the value runtime/datamanager/.

By following these steps, you can ensure that your system properties are configured appropriately for your business location, and the SFTP settings are accurately defined for seamless data transfer.
