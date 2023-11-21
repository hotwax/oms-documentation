# Setup Facilities

To establish facilities, it is necessary to create both the facilities and their internal locations within OMS. Typically, upon creating facilities, the associated locations are generated automatically. In cases where they are not generated, manual addition of location data is required. For an efficient bulk creation of facilities and their corresponding locations during the initial setup, it is advisable to utilize the facilities CSV.

## Get a sample facility CSV

Get the sample facility CSV file by navigating to `https://<instance-name>.hotwax.io/commerce/control/ImportData?configId=IMP_FACILITY` and simply click on `Download Sample CSV template` to initiate the download.

Here are what each of the required columns mean:

- **Facility ID:** Give a facility ID which can be alphanumeric. It is recommended to keep the facility ID same as Shopify store name.
- **External facility ID:** Give the same value as the facility ID.
- **Facility name:** Use the same name as in Shopify.
- **Facility type ID:** There are two types of facility IDs, RETAIL_STORE for stores and WH for warehousees.
- **Address:** Give the complete address of the facility if given by the client or available in Shopify.
- **Facility group:** Decides if inventory for the facility will be included for online sales.
- **Product Store:** If there is only one product store, by default the product store value will be ‘STORE’.

## Get a sample facility location CSV

Get the sample facility CSV file by navigating to `https://<instance-name>.hotwax.io/commerce/control/ImportData?configId=IMP_FACILITY` and simply click on `Download Sample CSV template` to initiate the download.

By default, the CSV should be filled with these values, if not provided by the retailer.

| warehouse-id   | warehouse-external-id | area-id | aisle-id | section-id | level-id | position-id | location-type |
|-----------------|------------------------|---------|----------|------------|----------|--------------|---------------|
| {faciltiyID}  |                        | TL      | AI       | AA         | II       | 1            |               |
