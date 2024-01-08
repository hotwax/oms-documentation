# Customer Feed

To successfully create a sales order in NetSuite, it is a prerequisite to have the customer information pre-existing within NetSuite's database. Therefore, it is important to synchronize customer data from OMS to NetSuite before order creation.

This integration flow is responsible to send the customer information from OMS to NetSuite. To ensure that the customer data is not repeatedly sent to NetSuite, this flow uses the NetSuite Customer ID to filter out the customers which are already sent to NetSuite.

The  NetSuite Customer ID gets assigned once this file is successfully consumed and customers created in NetSuite. A separate job takes care to export these customers from NetSuite and record the ID in Party Identification entity on OMS. The Party Identification Type ID used for this is 'NETSUITE_CUSTOMER_ID'. 

## Technical Implementation

This feed is generated in the integration layer using Apache NiFi. 

In NiFi, the required customer data is fetched by connecting to the OMS transactional database, and this data is prepared in the format required by NetSuite.

Some of the important conditions for customer data are:
1. To identify customers, role_type_id = 'CUSTOMER' in PartyRole entity is used
2. The customers which already have party_identification_type_id = 'NETSUITE_CUSTOMER_ID' in PartyIdentification entity are excluded since they are already synced to NetSuite and so should not be included again in the feed

<details>
  <summary>SQL to fetch customer data from OMS</summary>

```
SELECT 
  per.party_id AS 'External Id', 
  'T' AS 'Individual', 
  CASE WHEN per.first_name IS NULL 
  OR TRIM(per.first_name) = '' THEN 'X' ELSE per.first_name END AS 'First Name', 
  CASE WHEN per.last_name IS NULL 
  OR TRIM(per.last_name) = '' THEN 'X' ELSE per.last_name END AS 'Last Name', 
  'CUSTOMER-Closed Won' AS 'Status', 
  '1' AS 'Subsidiary', 
  'TRUE' AS 'Taxable', 
  '5' AS 'Default Order Priority', 
  '1' AS 'Account Origin', 
  CASE WHEN (
    SELECT 
      party_classification_group_id 
    FROM 
      party_classification 
    WHERE 
      party_id = per.party_id 
    ORDER BY 
      from_date 
    LIMIT 
      1
  ) = 'POS_SALES_CHANNEL' THEN 13 ELSE "14" END AS "Account Source", -- this may vary and customised as per need
  pisc.id_value AS "HC Shopify Customer Id", 
   (
    SELECT 
      cm.info_string AS 'Email' 
    FROM 
      party_contact_mech pcm 
      JOIN contact_mech cm ON pcm.contact_mech_id = cm.contact_mech_id 
      AND (
        pcm.thru_date IS NULL 
        OR pcm.thru_date >= NOW()
      ) 
    WHERE 
      cm.contact_mech_type_id = 'EMAIL_ADDRESS' 
      AND per.party_id = pcm.party_id 
    ORDER BY 
      pcm.from_date DESC 
    LIMIT 
      1
  ) AS 'Email', 
  (
    SELECT 
      CONCAT_WS(
        " ", tn.country_code, tn.area_code, 
        tn.contact_number
      ) AS "Phone_no" 
    FROM 
      party_contact_mech pcm 
      JOIN contact_mech cm ON pcm.contact_mech_id = cm.contact_mech_id 
      AND (
        pcm.thru_date IS NULL 
        OR pcm.thru_date >= NOW()
      ) 
      JOIN telecom_number tn ON tn.contact_mech_id = cm.contact_mech_id 
    WHERE 
      cm.contact_mech_type_id = 'TELECOM_NUMBER' 
      AND per.party_id = pcm.party_id 
    ORDER BY 
      pcm.from_date DESC 
    LIMIT 
      1
  ) AS 'Phone' 
FROM 
  person per 
  INNER JOIN party_role pr ON per.party_id = pr.party_id 
  LEFT JOIN party_identification pi ON per.party_id = pi.party_id 
  AND pi.party_identification_type_id = 'NETSUITE_CUSTOMER_ID' 
  JOIN PARTY p ON p.party_id = per.party_id 
  LEFT JOIN party_identification pisc ON per.party_id = pisc.party_id 
  AND pisc.party_identification_type_id = 'SHOPIFY_CUST_ID' 
WHERE 
  pr.role_type_id = 'CUSTOMER' 
  AND pi.party_id IS NULL 
  AND pisc.id_value IS NOT NULL;
```
</details>


### NiFi flow

In the NiFi flow set up to sync Create Customers Feed, below processors are used.

1. **ExecuteSQLRecord**\
   This processor is used to fetch customer details using the SQL query from OMS database. The processor runs at regular intervals, ensuring updated data is fetched in each feed.

2. **RouteOnAttribute**\
   This processor is used to determine the count of rows fetched from OMS database using which it ensures that the flow is further executed only if the rows returned are greater than 0. This is done to avoid creation of empty customer feeds.
   
3. **SplitRecord**\
   This processor is used to specify the no. of records to be included in each Customer Feed for NetSuite. This is done by defining a property "Records Per Split" and setting its value. If the rows returned from OMS database surpasses this limit, a new flowfile is generated and hence they get included in the next feed.
   Eg. This is done since in the current implementation, NetSuite can export feed files with a limit 20,000 records, and so this value is set in the processor so that each feed generated will have maximum of 20,000 customers.
  
4. **UpdateAttribute**\
   Here the file name is prepared for the valid records feed by appending the current time as per the timezone configured in OMS. This helps in identifying the time at which feed is being kept for NetSuite.
   
7. **QueryRecord**\
   This processor is used to filter records into two flow files, the ones which are valid and having data for all the required fields of NetSuite. The second is for the records which have 1 or more data missing for the required fields.

8. **UpdateAttribute**\
   Here the file name is prepared for the invalid records feed by appending the current time as per the timezone configured in OMS. This helps in identifying the time at which feed is being kept on SFTP. 

9. **PutSFTP**\
   Three PutSFTP processors are used here: the first for eligible records, the second for logging the eligible records for OMS, and the third for invalid records.

10. **PutEmail**\
   This processor is used to send an email notification for the invalid records which are are missing some required fields the Customer Feed. This helps in notifying invalid records for further data correction and processing if required.

### NetSuite Customer Feed File details

#### FTP location

```text
/home/${sftpUsername}/netsuite/customer/export
```

#### Sample Feed file Name format

```text
Krewe_CustomerFeed_2023-12-28-22_15_02_792.csv
```

#### Sample Feed File

| External Id      | Individual    | First Name     |     Last Name|     Status         |Subsidiary  |Taxable     |Default Order Priority|Account Origin|Account Source|HC Shopify Customer Id|
|------------------|---------------|----------------|--------------|--------------------|------------|------------|----------------------|--------------|--------------|----------------------|
| 297056           | T             | Alfonso        | Pacheco      | CUSTOMER-Closed Won|       1    |  true      |         5            |        1     |    14        |     6578498371671    |
| 297055           |  T            |    Joan        |Hubball       |CUSTOMER-Closed Won |     1      |   true     |   5                  | 1            |   14         |   6578280628311      |    

### Data model mapping

This table gives details about the mapping of each NetSuite field to the OMS entities.

| NetSuite Field           | Type          | Description     |  OMS Field|
|------------------|---------------|-----------------|--------------|
| External Id      | String        | OMS Customer Party Id| Person.party_id|
| Individual           |  String    |   Default value set in SQL        |T     |    
| First Name           |  String            |    Customer first name        |Person.first_name      |    
| Last Name           |  String            |    Customer first name        |Person.last_name       |    
| Status           |  String            |    Default value set in SQL        |CUSTOMER-Closed Won       |    
| Subsidiary           |  String            |    Default value set in SQL        |1       |    
| Taxable           |  String            |    Default value set in SQL        |TRUE      |    
| Default Order Priority           |  String            |    Default value set in SQL        |5      |    
| Account Origin           |  String            |    Default value set in SQL        |1       |    
| Account Source           |  String            |    This is used to identify POS customers or web customers based on the first order they  placed.   |1. "13 - If Party Classification Group Id = 'POS_SALES_CHANNEL' <br/> 2. 14 - For any other value"       |    
| HC Shopify Customer Id           |  String            | Shopify Customer Id     |1. ID value for Party Identification Type ID of 'SHOPIFY_CUST_ID' <br/> 2.  PartyIdentification.idValue    |    
| Email           |  String            |   Customer Email Id       |1. If ContactMech.contact_mech_type_id = 'EMAIL_ADDRESS' </br> 2. ContactMech.info_string    |    
| Phone           |  String            | Customer Phone no      |1. If ContactMech.contact_mech_type_id = 'TELECOM_NUMBER' </br> 2. Then Concat the (TelecomNumber.country_code, TelecomNumber.area_code,TelecomNumber.contact_number)      |

