# Load Facility Data

To establish facilities, it is necessary to create both the facilities and their internal locations within OMS. Typically, upon creating facilities, the associated locations are generated automatically. In cases where they are not generated, manual addition of location data is required. For an efficient bulk creation of facilities and their corresponding locations during the initial setup, it is advisable to utilize the facilities CSV.

## Get a sample facility CSV

To obtain the sample facility CSV file, please navigate to `https://<instance-name>.hotwax.io/commerce/control/ImportData?configId=IMP_FACILITY` and click on the "Download Sample CSV template" button to initiate the download. Once downloaded, fill out the CSV with the required information and proceed to import it into the system.

Here are what each of the required columns mean:

| Field                   | Description                                                                                       |
|-------------------------|---------------------------------------------------------------------------------------------------|
| **Facility ID**         | Give a facility ID which can be alphanumeric. It is recommended to keep the facility ID same as Shopify store name. |
| **External facility ID**| Give the same value as the facility ID.                                                            |
| **Facility name**       | Use the same name as in Shopify.                                                                  |
| **Facility type ID**    | There are two types of facility IDs, RETAIL_STORE for stores and WAREHOUSE for warehouses.                 |
| **Address**             | Give the complete address of the facility if given by the client or available in Shopify.         |
| **Phone number**        | Give the phone number of the facility if given by the client or available in Shopify. Required as needed for Shipping carrier integrations        |
| **Facility group**      | Decides if inventory for the facility will be included for online sales.                            |
| **Product Store**       | If there is only one product store, by default the product store value will be ‘STORE’.            |

## Verify Facility and Locations

To ensure the accuracy of facility information and locations, follow these steps:

1. **Log into OMS**
   - Access the OMS platform using your credentials: `https://{instanceName}.hotwax.io/`

2. **Navigate to Facilities**
   - Open the Hamburger menu
   - Go to Warehouse
   - Select Facilities to open the Find Facility page

3. **Search and verify Facility**
   - Search for the desired facility, this will verify the facility. 

4. **Verify Locations**
   - Click on the facility to open the View Facility page
   - Scroll to the bottom of the facility page to locate the facility's associated locations.
   - Verify the locations, which are presented in the following format:

    | warehouse-id   | warehouse-external-id | area-id | aisle-id | section-id | level-id | position-id | location-type |
    |-----------------|------------------------|---------|----------|------------|----------|--------------|---------------|
    | {facilityID}   |                        | TL      | AI       | AA         | II       | 1            |               |

5. **Conclusion**
   - This process verifies both the facilities and their corresponding locations.

By following these steps, you can ensure that the facility information and associated locations in the OMS align with the expected data format.
