# Customer Feed

To successfully create a sales order in NetSuite, it is a prerequisite to have the customer information pre-existing within NetSuite's database. Therefore, it is important to synchronize customer data from OMS to NetSuite before order creation.

This integration flow is responsible to send the customer information from OMS to NetSuite. To ensure that the customer data is not repeatedly sent to NetSuite, this flow uses the NetSuite Customer ID to filter out the customers which are already sent to NetSuite.

The  NetSuite Customer ID gets assigned once this file is successfully consumed and customers created in NetSuite. A separate job takes care to export these customers from NetSuite and record the ID in Party Identification entity on OMS. The Party Identification Type ID used for this is 'NETSUITE_CUSTOMER_ID'. 

### CSV Schema

| External Id      | Individual    | First Name     |     Last Name|     Status         |Subsidiary  |Taxable     |Default Order Priority|Account Origin|Account Source|HC Shopify Customer Id|
|------------------|---------------|----------------|--------------|--------------------|------------|------------|----------------------|--------------|--------------|----------------------|
| 297056           | T             | Alfonso        | Pacheco      | CUSTOMER-Closed Won|       1    |  true      |         5            |        1     |    14        |     6578498371671    |
| 297055           |  T            |    Joan        |Hubball       |CUSTOMER-Closed Won |     1      |   true     |   5                  | 1            |   14         |   6578280628311      |    


# Implementation
This feed is implemented using Apache NiFi. NiFi is employed to fetch Customer in the role_type_id = 'CUSTOMER' from a database, convert it to CSV format, and distribute it to both a SFTP location and a Logs folder for Hotwax logging.
Following are the implementation steps-

1. **ExecuteSQLRecord Processor**\
   The ExecuteSQLRecord processor is configured to fetch Customer in the CUSTOMER role type Id from the database. It uses a SQL query to retrieve only those records that haven't been included in previous feeds. The processor runs at regular intervals, ensuring updated data in each feed.

2. **RouteOnAttribute Processor**\
   The RouteOnAttribute processor is employed to determine the count of rows in a flowfile.
   
3. **SplitRecord Processor**\
   The SplitRecord Processor is utilized to specify the record limit within each flowfile. If the flowfile surpasses the designated row count, a new flowfile is generated.
   The Customer feed has a limit of 20,000 due to NetSuite constraints. Therefore, it is necessary to split the flow file to accommodate this limitation.
   
4. **UpdateAttribute Processor**\
   Two UpdateAttribute processors are applied in this context: the first for updating the filename of eligible records, and the second for updating the filename of files where required fields are missing.
   
5. **QueryRecord Processor**\
   The QueryRecord processor is employed to filter records by excluding those where the required fields are empty.

6. **PutSFTP processor**\
   Three PutSFTP processors are employed here: the first for eligible records, the second for logging, and the third for missing required files.

7. **PutEmail Processor**\
   The PutEmail processor is employed to send an email notification when required fields are missing in the Customer Feed.

# File Naming Scheme
- File Name: Krewe_CustomerFeed_yyyy-MM-dd-HH_mm_ss_SSS.csv
- File Path: /home/krewe-oms-sftp/netsuite/customer/export
- File Frequency: Every 15 minutes
  
# Mapping of the Customer Feed
| Fields           | Type          | Description     |  HC Customer Feed Feed Mapping|
|------------------|---------------|-----------------|--------------|
| External Id      | String        | Customer party Id| Person.party_id|
| Individual           |  String    |   Default value set in SQL        |T     |    
| First Name           |  String            |    Customer first name        |Person.first_name      |    
| Last Name           |  String            |    Customer first name        |Person.last_name       |    
| Status           |  String            |    Default value set in SQL        |CUSTOMER-Closed Won       |    
| Subsidiary           |  String            |    Default value set in SQL        |1       |    
| Taxable           |  String            |    Default value set in SQL        |TRUE      |    
| Default Order Priority           |  String            |    Default value set in SQL        |5      |    
| Account Origin           |  String            |    Default value set in SQL        |1       |    
| Account Source           |  String            | Default value set in SQL        |1. "13 - If Party Classification Group Id = 'POS_SALES_CHANNEL' <br/> 2. 14 - For any other value"       |    
| HC Shopify Customer Id           |  String            | Shopify Customer Id     |1. ID value for Party Identification Type ID of 'SHOPIFY_CUST_ID' <br/> 2.  PartyIdentification.idValue    |    
| Email           |  String            |   Customer Email Id       |1. If ContactMech.contact_mech_type_id = 'EMAIL_ADDRESS' </br> 2. ContactMech.info_string    |    
| Phone           |  String            | Customer Phone no.      |1. If ContactMech.contact_mech_type_id = 'TELECOM_NUMBER' </br> 2. Then Concat the (TelecomNumber.country_code, TelecomNumber.area_code,TelecomNumber.contact_number)      |

