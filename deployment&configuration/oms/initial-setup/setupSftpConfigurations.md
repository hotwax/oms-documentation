## SFTP Configurations

Configuring SFTP (Secure File Transfer Protocol) settings is a critical step in ensuring the smooth and secure exchange of data within your system. The importance of each configuration is outlined below:

{% hint style='warning' %}
Before uploading data, ensure all relevant variables are included.
{% endhint %}

**Access FTP Connection Settings:**

Locate the following configuration key and input the value: 
   
| Configuration Line                           | Value                            |
|----------------------------------------------|----------------------------------|
| `systemPropertyId="ftp.server.hostname"`     | {hostname_without_sftp://}       |
| `systemPropertyId="ftp.server.username"`     | {username}                       |
| `systemPropertyId="ftp.server.password"`     | {password}                       |
| `systemPropertyId="ftp.server.port"`         | {port}                           |


---

**Netsuite-specific Configuration:**
   
{% hint style="info" %}
This is essential only when utilizing Netsuite as an ERP; otherwise, it can be omitted.
{% endhint %}

Locate the following configuration key and input the value: 

| Configuration Line                             | Value                           |
|------------------------------------------------|---------------------------------|
| `systemPropertyId="ftp.server.archive.dir"`     | archive/                        |
| `systemPropertyId="instance.downloadDir"`       | runtime/datamanager/            |

By following these steps, you can ensure that your system properties are configured appropriately for your business location, and the SFTP settings are accurately defined for seamless data transfer.
